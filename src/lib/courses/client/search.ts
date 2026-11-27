// Full-text search inside the current course, on the Pagefind index generated at build time.
// The modal is a native <dialog> built on first use. Only the notes of the courses are indexed
// (data-pagefind-body in CourseNote.astro); results are limited to the course being read.
import { pageLang } from '../i18n';
import { searchText, type SearchText } from '../searchText';

const PAGEFIND_URL = '/pagefind/pagefind.js';
const DEBOUNCE_MS = 200;
const MAX_RESULTS = 8;

interface PagefindResultData {
  readonly url: string;
  readonly excerpt: string;
  readonly meta: Readonly<Record<string, string>>;
}
interface PagefindResult {
  data(): Promise<PagefindResultData>;
}
interface PagefindResponse {
  readonly results: readonly PagefindResult[];
}
interface Pagefind {
  options(options: { noWorker: boolean }): Promise<void>;
  debouncedSearch(
    term: string,
    options: { filters: Record<string, string> },
    timeoutMs: number,
  ): Promise<PagefindResponse | null>;
}

type IndexState = { readonly status: 'ready'; readonly pagefind: Pagefind } | { readonly status: 'missing' };

/** `npm run dev` has no index (it is generated after the build): that is the only expected failure. */
async function loadPagefind(): Promise<IndexState> {
  let pagefind: Pagefind;
  try {
    pagefind = (await import(/* @vite-ignore */ PAGEFIND_URL)) as Pagefind;
  } catch (error) {
    if (error instanceof TypeError) return { status: 'missing' };
    throw error;
  }
  // Run the index on this page, not in Pagefind's Web Worker. A worker compiles the WebAssembly under the
  // CSP of its own script (pagefind-worker.js), and Cloudflare's edge cache keeps that file's old headers
  // while its content does not change, so a CSP change in public/_headers never reaches it. The page's
  // HTML is not edge cached, so its CSP is always the current one.
  await pagefind.options({ noWorker: true });
  return { status: 'ready', pagefind };
}

function isTypingTarget(target: EventTarget | null): boolean {
  if (!(target instanceof HTMLElement)) return false;
  return target.isContentEditable || ['INPUT', 'TEXTAREA', 'SELECT'].includes(target.tagName);
}

interface Modal {
  readonly dialog: HTMLDialogElement;
  readonly input: HTMLInputElement;
  readonly list: HTMLUListElement;
  readonly status: HTMLParagraphElement;
}

const SEARCH_ICON =
  '<svg viewBox="0 0 24 24" width="18" height="18" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><circle cx="11" cy="11" r="7"/><path d="m20 20-3.5-3.5"/></svg>';

function buildModal(text: SearchText): Modal {
  const dialog = document.createElement('dialog');
  dialog.className = 'course-search';
  dialog.setAttribute('aria-label', text.title);

  const panel = document.createElement('div');
  panel.className = 'course-search-panel';

  const field = document.createElement('div');
  field.className = 'course-search-field';
  field.innerHTML = SEARCH_ICON;

  const input = document.createElement('input');
  input.type = 'search';
  input.className = 'course-search-input';
  input.placeholder = text.placeholder;
  input.setAttribute('aria-label', text.title);
  input.setAttribute('role', 'combobox');
  input.setAttribute('aria-expanded', 'false');
  input.setAttribute('aria-controls', 'course-search-results');
  input.setAttribute('aria-autocomplete', 'list');
  input.autocomplete = 'off';
  input.spellcheck = false;

  const close = document.createElement('button');
  close.type = 'button';
  close.className = 'course-search-close';
  close.textContent = 'Esc';
  close.setAttribute('aria-label', text.close);
  close.addEventListener('click', () => dialog.close());

  field.append(input, close);

  const status = document.createElement('p');
  status.className = 'course-search-status';
  status.setAttribute('role', 'status');

  const list = document.createElement('ul');
  list.className = 'course-search-results';
  list.id = 'course-search-results';
  list.setAttribute('role', 'listbox');
  list.setAttribute('aria-label', text.results);

  const hint = document.createElement('p');
  hint.className = 'course-search-hint';
  hint.textContent = text.hint;

  panel.append(field, status, list, hint);
  dialog.append(panel);
  document.body.append(dialog);
  return { dialog, input, list, status };
}

function renderResult(data: PagefindResultData, text: SearchText, index: number): HTMLLIElement {
  const item = document.createElement('li');
  item.setAttribute('role', 'option');
  item.id = `course-search-result-${index}`;
  item.setAttribute('aria-selected', 'false');

  const link = document.createElement('a');
  link.className = 'course-search-result';
  link.href = data.url;
  link.tabIndex = -1;

  const head = document.createElement('span');
  head.className = 'course-search-result-head';
  const title = document.createElement('span');
  title.className = 'course-search-result-title';
  title.textContent = data.meta.title ?? data.url;
  const kind = document.createElement('span');
  kind.className = 'course-search-result-kind';
  const kindKey = data.meta.kind;
  kind.textContent = kindKey === undefined ? '' : (text.kinds[kindKey] ?? kindKey);
  head.append(title, kind);

  const excerpt = document.createElement('span');
  excerpt.className = 'course-search-result-excerpt';
  // Pagefind encodes HTML entities before adding <mark>, so the excerpt is safe as HTML.
  excerpt.innerHTML = data.excerpt;

  link.append(head, excerpt);
  item.append(link);
  return item;
}

export function initSearch(): void {
  const openers = document.querySelectorAll<HTMLElement>('[data-search-open]');
  const course = document.querySelector<HTMLElement>('.course-main[data-course]')?.dataset.course;
  if (openers.length === 0 || course === undefined) return;

  const text = searchText(pageLang());
  let modal: Modal | undefined;
  let index: Promise<IndexState> | undefined;
  let searchRun = 0;
  let active = -1;

  const options = (): HTMLElement[] => (modal ? [...modal.list.querySelectorAll<HTMLElement>('[role="option"]')] : []);

  const setActive = (next: number): void => {
    if (!modal) return;
    const items = options();
    active = items.length === 0 ? -1 : (next + items.length) % items.length;
    items.forEach((item, i) => item.setAttribute('aria-selected', String(i === active)));
    const current = items[active];
    if (current) {
      modal.input.setAttribute('aria-activedescendant', current.id);
      current.scrollIntoView({ block: 'nearest' });
    } else {
      modal.input.removeAttribute('aria-activedescendant');
    }
  };

  const showMessage = (message: string): void => {
    if (!modal) return;
    modal.list.replaceChildren();
    modal.input.setAttribute('aria-expanded', 'false');
    modal.status.textContent = message;
    setActive(-1);
  };

  const run = async (query: string): Promise<void> => {
    const current = ++searchRun;
    const term = query.trim();
    if (term === '') {
      showMessage('');
      return;
    }
    index ??= loadPagefind();
    const state = await index;
    if (current !== searchRun) return;
    if (state.status === 'missing') {
      showMessage(text.unavailable);
      return;
    }
    let response: PagefindResponse | null;
    let loaded: PagefindResultData[];
    try {
      response = await state.pagefind.debouncedSearch(term, { filters: { course } }, DEBOUNCE_MS);
      if (response === null || current !== searchRun) return;
      loaded = await Promise.all(response.results.slice(0, MAX_RESULTS).map((result) => result.data()));
    } catch (error) {
      // The index failed to load or to answer (a blocked WebAssembly module, a missing chunk): say so in
      // the dialog instead of leaving it blank, and still report the error.
      if (current === searchRun) showMessage(text.failed);
      throw error;
    }
    if (current !== searchRun || !modal) return;
    if (loaded.length === 0) {
      showMessage(text.noResults(term));
      return;
    }
    modal.list.replaceChildren(...loaded.map((data, i) => renderResult(data, text, i)));
    modal.input.setAttribute('aria-expanded', 'true');
    modal.status.textContent = text.resultCount(response.results.length);
    setActive(0);
  };

  const ensureModal = (): Modal => {
    if (modal) return modal;
    const built = buildModal(text);
    modal = built;
    built.input.addEventListener('input', () => void run(built.input.value));
    built.input.addEventListener('keydown', (event) => {
      if (event.key === 'ArrowDown' || event.key === 'ArrowUp') {
        event.preventDefault();
        setActive(active + (event.key === 'ArrowDown' ? 1 : -1));
      } else if (event.key === 'Escape') {
        // A search input clears itself on the first Esc; here Esc always closes the modal.
        event.preventDefault();
        built.dialog.close();
      } else if (event.key === 'Enter') {
        const link = options()[active]?.querySelector('a');
        if (link) {
          event.preventDefault();
          window.location.assign(link.href);
        }
      }
    });
    built.dialog.addEventListener('click', (event) => {
      if (event.target === built.dialog) built.dialog.close();
    });
    built.list.addEventListener('mousemove', (event) => {
      if (!(event.target instanceof Element)) return;
      const item = event.target.closest<HTMLElement>('[role="option"]');
      const position = item ? options().indexOf(item) : -1;
      if (position >= 0 && position !== active) setActive(position);
    });
    // Closing cancels any search still in flight.
    built.dialog.addEventListener('close', () => {
      searchRun++;
    });
    return built;
  };

  const open = (): void => {
    const { dialog, input } = ensureModal();
    if (!dialog.open) dialog.showModal();
    input.focus();
    input.select();
    // Warm the index while the reader types the first letters.
    index ??= loadPagefind();
  };

  openers.forEach((opener) => opener.addEventListener('click', open));

  document.addEventListener('keydown', (event) => {
    const modifier = event.ctrlKey || event.metaKey;
    const isShortcut = modifier && !event.altKey && event.key.toLowerCase() === 'k';
    const isSlash = event.key === '/' && !modifier && !event.altKey && !isTypingTarget(event.target);
    if (!isShortcut && !isSlash) return;
    event.preventDefault();
    open();
  });

  if (/Mac|iPhone|iPad/.test(navigator.userAgent)) {
    document.querySelectorAll<HTMLElement>('[data-search-shortcut]').forEach((el) => (el.textContent = '⌘K'));
  }
}
