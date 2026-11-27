// Offline reading of the courses: registers the service worker (public/sw.js) and drives the
// "save this course for offline" card (components/courses/OfflineCard.astro).
// The page writes into the same caches the service worker reads, so a saved page is served by the
// worker's network-first rule when the connection is gone. Saving is idempotent: what is already
// cached is skipped, so a run that failed halfway resumes where it stopped.
import { courseText, pageLang } from '../i18n';
import { offlineText, type OfflineText } from '../offlineText';
import type { StudyIndex } from '../studyModel';

// Keep in step with PAGES_CACHE and ASSETS_CACHE in public/sw.js.
const PAGES_CACHE = 'jp-courses-pages-v1';
const ASSETS_CACHE = 'jp-courses-assets-v1';
// Same bases as SECTION in catalog.ts; the worker keeps everything under them in the pages cache.
const COURSE_BASES = ['/cursos/', '/en/courses/', '/es/cursos/'];
const MARKER_PREFIX = 'jp-courses:offline:';
const CONCURRENCY = 4;

export async function registerOffline(): Promise<void> {
  if (!('serviceWorker' in navigator)) return;
  await navigator.serviceWorker.register('/sw.js', { scope: '/' });
}

// ---- What a page needs to render offline

const PAGE_ASSET = /(?:href|src)="(\/[^"#?]+\.(?:js|css|woff2?|png|jpe?g|webp|avif|svg|gif))"/g;
// Imports and url() inside built scripts and styles, plus Vite's preload list ("_astro/x.js").
const NESTED_ASSET = /(?:from|import)\s*\(?\s*["'](\.{1,2}\/[^"']+)["']|url\(\s*["']?([^"')]+)["']?\s*\)|"(_astro\/[^"]+\.(?:js|css))"/g;

const isCourseUrl = (url: URL) => COURSE_BASES.some((base) => url.pathname.startsWith(base));
const cacheNameFor = (url: URL) => (isCourseUrl(url) ? PAGES_CACHE : ASSETS_CACHE);
const sameOriginPath = (reference: string, from: string): URL | undefined => {
  const url = new URL(reference, new URL(from, location.origin));
  return url.origin === location.origin ? url : undefined;
};

function* matches(text: string, pattern: RegExp): Generator<string> {
  for (const match of text.matchAll(pattern)) {
    for (const group of match.slice(1)) if (group) yield group;
  }
}

async function cachedText(cache: Cache, url: URL): Promise<string | undefined> {
  const hit = await cache.match(url.pathname + url.search);
  return hit?.text();
}

async function fetchOk(url: URL): Promise<Response> {
  const response = await fetch(url.pathname + url.search);
  if (!response.ok) throw new Error(`${url.pathname}: HTTP ${response.status}`);
  return response;
}

/** Stores one URL unless it is already cached, and returns its text when it is a page or script. */
async function save(url: URL): Promise<string | undefined> {
  const cache = await caches.open(cacheNameFor(url));
  const key = url.pathname + url.search;
  if (await cache.match(key)) return cachedText(cache, url);
  const response = await fetchOk(url);
  await cache.put(key, response.clone());
  return /\.(?:html?|js|css)$|\/$/.test(url.pathname) || response.headers.get('content-type')?.includes('text/') ? response.text() : undefined;
}

async function runPool<T>(items: readonly T[], work: (item: T) => Promise<void>): Promise<void> {
  let next = 0;
  let failure: unknown;
  let failed = false;
  const worker = async () => {
    while (!failed && next < items.length) {
      const item = items[next++];
      try {
        await work(item);
      } catch (error) {
        failed = true;
        failure = error;
      }
    }
  };
  await Promise.all(Array.from({ length: Math.min(CONCURRENCY, items.length) }, worker));
  if (failed) throw failure;
}

export type SaveProgress =
  | { readonly phase: 'pages'; readonly done: number; readonly total: number }
  | { readonly phase: 'assets'; readonly done: number };

/** Downloads every note of the course, then the scripts, styles, fonts and images those pages use. */
async function saveCourse(studyIndexUrl: string, onProgress: (progress: SaveProgress) => void): Promise<number> {
  const indexResponse = await fetchOk(new URL(studyIndexUrl, location.origin));
  // The body is read once for the list and the response is stored as it came.
  const indexCache = await caches.open(PAGES_CACHE);
  await indexCache.put(studyIndexUrl, indexResponse.clone());
  const index = (await indexResponse.json()) as StudyIndex;

  const pages = index.notes.map((note) => new URL(note.url, location.origin));
  const wanted = new Set<string>();
  let done = 0;
  onProgress({ phase: 'pages', done, total: pages.length });
  await runPool(pages, async (page) => {
    const html = await save(page);
    if (html === undefined) throw new Error(`${page.pathname}: empty page`);
    for (const path of matches(html, PAGE_ASSET)) {
      if (!path.startsWith('/course-search/')) wanted.add(path);
    }
    done += 1;
    onProgress({ phase: 'pages', done, total: pages.length });
  });

  // Scripts and styles name more files (chunks, fonts): follow them until nothing new shows up.
  const seen = new Set<string>();
  let queue = [...wanted];
  let saved = 0;
  while (queue.length > 0) {
    const batch = queue.filter((path) => !seen.has(path));
    queue = [];
    batch.forEach((path) => seen.add(path));
    await runPool(batch, async (path) => {
      const url = new URL(path, location.origin);
      const text = await save(url);
      saved += 1;
      onProgress({ phase: 'assets', done: saved });
      if (text === undefined || !/\.(?:js|css)$/.test(url.pathname)) return;
      for (const reference of matches(text, NESTED_ASSET)) {
        const nested = sameOriginPath(reference.startsWith('_astro/') ? `/${reference}` : reference, url.pathname);
        if (nested && !seen.has(nested.pathname) && /\.(?:js|css|woff2?|png|jpe?g|webp|avif|svg|gif)$/.test(nested.pathname)) queue.push(nested.pathname);
      }
    });
  }
  return pages.length;
}

/** Drops every cached page, data file and image under the course. Shared scripts and styles stay. */
async function removeCourse(base: string): Promise<void> {
  const cache = await caches.open(PAGES_CACHE);
  const stored = await cache.keys();
  await Promise.all(
    stored
      .filter((request) => new URL(request.url).pathname.startsWith(base))
      .map((request) => cache.delete(request)),
  );
}

// ---- The card

type CardState =
  | { readonly kind: 'unsupported' }
  | { readonly kind: 'idle' }
  | { readonly kind: 'saving'; readonly progress: SaveProgress }
  | { readonly kind: 'saved'; readonly savedAt: number }
  | { readonly kind: 'removing' }
  | { readonly kind: 'failed'; readonly reason: string };

function part<T extends HTMLElement>(root: HTMLElement, selector: string): T {
  const element = root.querySelector<T>(selector);
  if (!element) throw new Error(`Offline card is missing ${selector}`);
  return element;
}

function datasetValue(root: HTMLElement, key: string): string {
  const value = root.dataset[key];
  if (!value) throw new Error(`Offline card is missing data-${key}`);
  return value;
}

const supportsOffline = () => 'serviceWorker' in navigator && 'caches' in window;

function formatBytes(bytes: number, locale: string): string {
  const mb = bytes / (1024 * 1024);
  const format = new Intl.NumberFormat(locale, { maximumFractionDigits: mb < 10 ? 1 : 0 });
  return `${format.format(mb < 0.1 ? 0.1 : mb)} MB`;
}

export function initOfflineCard(root: HTMLElement): void {
  const text: OfflineText = offlineText(pageLang());
  const locale = courseText(pageLang()).locale;
  const slug = datasetValue(root, 'course');
  const studyIndexUrl = datasetValue(root, 'studyIndex');
  const base = studyIndexUrl.slice(0, studyIndexUrl.lastIndexOf('/') + 1);
  const marker = MARKER_PREFIX + slug;

  const saveButton = part<HTMLButtonElement>(root, '[data-offline-save]');
  const removeButton = part<HTMLButtonElement>(root, '[data-offline-remove]');
  const bar = part<HTMLElement>(root, '[data-offline-bar]');
  const fill = part<HTMLElement>(root, '[data-offline-fill]');
  const status = part<HTMLElement>(root, '[data-offline-status]');
  const detail = part<HTMLElement>(root, '[data-offline-detail]');

  const render = (state: CardState) => {
    root.dataset.state = state.kind;
    saveButton.hidden = state.kind === 'saved' || state.kind === 'unsupported' || state.kind === 'removing';
    saveButton.disabled = state.kind === 'saving';
    saveButton.textContent = state.kind === 'failed' ? text.retry : text.save;
    removeButton.hidden = state.kind !== 'saved' && state.kind !== 'removing';
    removeButton.disabled = state.kind === 'removing';
    removeButton.textContent = text.remove;
    detail.textContent = '';

    if (state.kind === 'saving') {
      const { progress } = state;
      const ratio = progress.phase === 'pages' ? progress.done / Math.max(progress.total, 1) : 1;
      fill.style.transform = `scaleX(${ratio})`;
      bar.setAttribute('aria-valuenow', String(Math.round(ratio * 100)));
      status.textContent = progress.phase === 'pages' ? text.progress(progress.done, progress.total) : text.assets(progress.done);
      return;
    }
    fill.style.transform = 'scaleX(0)';
    bar.setAttribute('aria-valuenow', '0');
    switch (state.kind) {
      case 'unsupported':
        status.textContent = text.unsupported;
        break;
      case 'idle':
        status.textContent = '';
        break;
      case 'saved':
        status.textContent = text.saved(new Date(state.savedAt).toLocaleDateString(locale));
        void showStorage();
        break;
      case 'removing':
        status.textContent = text.removing;
        break;
      case 'failed':
        status.textContent = text.failed(state.reason);
        break;
    }
  };

  // Usage of the whole site on this device: browsers do not report it per course. Not every browser
  // has the estimate, and then the line is simply left out.
  const showStorage = async () => {
    if (!navigator.storage?.estimate) return;
    const { usage } = await navigator.storage.estimate();
    if (usage !== undefined && root.dataset.state === 'saved') detail.textContent = text.storageUsed(formatBytes(usage, locale));
  };

  if (!supportsOffline()) {
    render({ kind: 'unsupported' });
    return;
  }

  saveButton.addEventListener('click', async () => {
    render({ kind: 'saving', progress: { phase: 'pages', done: 0, total: 0 } });
    try {
      await saveCourse(studyIndexUrl, (progress) => render({ kind: 'saving', progress }));
      const savedAt = Date.now();
      localStorage.setItem(marker, String(savedAt));
      render({ kind: 'saved', savedAt });
    } catch (error) {
      render({ kind: 'failed', reason: error instanceof Error ? error.message : String(error) });
      throw error;
    }
  });

  removeButton.addEventListener('click', async () => {
    render({ kind: 'removing' });
    try {
      await removeCourse(base);
      localStorage.removeItem(marker);
      render({ kind: 'idle' });
    } catch (error) {
      render({ kind: 'failed', reason: error instanceof Error ? error.message : String(error) });
      throw error;
    }
  });

  const savedAt = Number(localStorage.getItem(marker));
  render(savedAt > 0 ? { kind: 'saved', savedAt } : { kind: 'idle' });
}
