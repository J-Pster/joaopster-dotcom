// The courses catalog (layouts/CoursesLanding.astro): search across courses, modules and lessons,
// topic and progress filters, sorting, the syllabus of each course, and the reader's progress
// painted over the cards. The filters live in the URL (?q=, ?topic=, ?progress=, ?sort=) so a
// filtered view can be shared and survives going back.
import type { CatalogLesson } from '../catalogView';
import { courseText, pageLang } from '../i18n';
import { loadProgress } from '../progress';
import { startAutoSync } from './sync';
import { initSyncCards } from './syncCard';

const SORTS = ['recommended', 'title', 'shortest', 'longest'] as const;
type Sort = (typeof SORTS)[number];
const PROGRESS_FILTERS = ['', 'started', 'not-started'] as const;
type ProgressFilter = (typeof PROGRESS_FILTERS)[number];
/** Search matches listed inside a card before "and N more". */
const MAX_MATCHES = 6;

interface Filters {
  readonly query: string;
  readonly topic: string;
  readonly progress: ProgressFilter;
  readonly sort: Sort;
}

interface ModuleRow {
  readonly row: HTMLElement;
  readonly number: number;
  readonly title: string;
  readonly url: string;
  readonly lessons: number;
  readonly words: string;
  readonly done: HTMLElement;
}

interface Card {
  readonly card: HTMLElement;
  readonly slug: string;
  readonly topic: string;
  readonly order: number;
  readonly minutes: number;
  readonly title: string;
  readonly lessons: number;
  readonly firstLesson: string;
  readonly words: string;
  readonly modules: readonly ModuleRow[];
  readonly searchLessons: readonly (readonly [CatalogLesson, string])[];
  readonly matches: HTMLElement;
  readonly syllabus: HTMLElement;
  readonly toggle: HTMLButtonElement;
  started: boolean;
}

interface Match {
  readonly title: string;
  readonly url: string;
  readonly module: number;
}

const text = courseText(pageLang());

/** Lowercase without accents, so "socorro" finds "Socorro" and "radio" finds "Rádio". */
const fold = (value: string): string => value.normalize('NFD').replace(/[̀-ͯ]/g, '').toLowerCase();
const queryWords = (query: string): readonly string[] => fold(query).split(/\s+/).filter(Boolean);
const matchesAll = (words: string, query: readonly string[]): boolean => query.every((w) => words.includes(w));

function must<T extends Element>(root: ParentNode, selector: string): T {
  const element = root.querySelector<T>(selector);
  if (!element) throw new Error(`Course catalog is missing ${selector}`);
  return element;
}

const isSort = (value: string): value is Sort => (SORTS as readonly string[]).includes(value);
const isProgressFilter = (value: string): value is ProgressFilter =>
  (PROGRESS_FILTERS as readonly string[]).includes(value);

/** The filters in the URL. Unknown values (an old or hand-edited link) fall back to no filter. */
function filtersFromUrl(topics: ReadonlySet<string>): Filters {
  const params = new URLSearchParams(location.search);
  const topic = params.get('topic') ?? '';
  const progress = params.get('progress') ?? '';
  const sort = params.get('sort') ?? '';
  return {
    query: params.get('q') ?? '',
    topic: topics.has(topic) ? topic : '',
    progress: isProgressFilter(progress) ? progress : '',
    sort: isSort(sort) ? sort : 'recommended',
  };
}

function writeUrl(filters: Filters): void {
  // Starts from the current query so parameters the catalog does not own (utm_*, for one) survive.
  const params = new URLSearchParams(location.search);
  const owned: readonly (readonly [string, string])[] = [
    ['q', filters.query.trim()],
    ['topic', filters.topic],
    ['progress', filters.progress],
    ['sort', filters.sort === 'recommended' ? '' : filters.sort],
  ];
  for (const [name, value] of owned) {
    if (value) params.set(name, value);
    else params.delete(name);
  }
  const search = params.toString();
  history.replaceState(history.state, '', `${location.pathname}${search ? `?${search}` : ''}${location.hash}`);
}

function readCards(list: HTMLElement): Card[] {
  const index = JSON.parse(must<HTMLScriptElement>(document, '#catalog-lessons').textContent ?? '') as Record<
    string,
    readonly CatalogLesson[]
  >;
  return [...list.querySelectorAll<HTMLElement>('[data-course-card]')].map((card) => {
    const slug = card.dataset.courseCard ?? '';
    const lessons = index[slug];
    if (!lessons) throw new Error(`Course catalog has no search lessons for ${slug}`);
    return {
      card,
      slug,
      topic: card.dataset.topic ?? '',
      order: Number(card.dataset.order),
      minutes: Number(card.dataset.minutes),
      title: card.dataset.title ?? '',
      lessons: Number(card.dataset.lessons),
      firstLesson: card.dataset.firstLesson ?? '',
      words: fold(card.dataset.search ?? ''),
      modules: [...card.querySelectorAll<HTMLElement>('[data-module]')].map((row) => {
        const title = must<HTMLElement>(row, '.catalog-module-title').textContent ?? '';
        return {
          row,
          number: Number(row.dataset.module),
          title,
          url: row.dataset.moduleUrl ?? '',
          lessons: Number(row.dataset.moduleLessons),
          words: fold(title),
          done: must<HTMLElement>(row, '[data-module-done]'),
        };
      }),
      searchLessons: lessons.map((lesson) => [lesson, fold(lesson[0])] as const),
      matches: must<HTMLElement>(card, '[data-card-matches]'),
      syllabus: must<HTMLElement>(card, '[data-syllabus]'),
      toggle: must<HTMLButtonElement>(card, '[data-syllabus-toggle]'),
      started: false,
    };
  });
}

/** Modules and lessons of the card whose titles have every word of the query. */
function searchCard(card: Card, query: readonly string[]): readonly Match[] {
  if (query.length === 0) return [];
  const modules = card.modules
    .filter((m) => matchesAll(m.words, query))
    .map((m) => ({ title: m.title, url: m.url, module: m.number }));
  const lessons = card.searchLessons
    .filter(([, words]) => matchesAll(words, query))
    .map(([[title, url, module]]) => ({ title, url, module }));
  return [...modules, ...lessons];
}

function renderMatches(card: Card, matches: readonly Match[]): void {
  card.matches.replaceChildren();
  card.matches.hidden = matches.length === 0;
  if (matches.length === 0) return;
  const heading = document.createElement('p');
  heading.className = 'catalog-matches-title';
  heading.textContent = text.searchMatches(matches.length);
  const list = document.createElement('ul');
  for (const match of matches.slice(0, MAX_MATCHES)) {
    const item = document.createElement('li');
    const link = document.createElement('a');
    link.href = match.url;
    const label = document.createElement('span');
    label.className = 'catalog-match-module';
    label.textContent = text.module(match.module);
    const title = document.createElement('span');
    title.textContent = match.title;
    link.append(label, title);
    item.append(link);
    list.append(item);
  }
  card.matches.append(heading, list);
  if (matches.length > MAX_MATCHES) {
    const more = document.createElement('p');
    more.className = 'catalog-matches-more';
    more.textContent = text.moreMatches(matches.length - MAX_MATCHES);
    card.matches.append(more);
  }
}

function compare(sort: Sort, locale: string): (a: Card, b: Card) => number {
  switch (sort) {
    case 'recommended':
      return (a, b) => Number(b.started) - Number(a.started) || a.order - b.order;
    case 'title':
      return (a, b) => a.title.localeCompare(b.title, locale);
    case 'shortest':
      return (a, b) => a.minutes - b.minutes;
    case 'longest':
      return (a, b) => b.minutes - a.minutes;
  }
}

function setSyllabus(card: Card, open: boolean): void {
  card.syllabus.hidden = !open;
  card.toggle.setAttribute('aria-expanded', String(open));
  card.toggle.textContent = open ? text.syllabusHide : text.syllabusShow;
}

/** Progress bar, "Continue" link and per-module counts of one card, from this browser's progress. */
function paintProgress(card: Card): void {
  const progress = loadProgress(card.slug);
  card.started = progress.read.length > 0 || progress.last !== undefined;
  const read = new Set(progress.read);
  for (const module of card.modules) {
    const done = [...read].filter((url) => url.startsWith(module.url)).length;
    module.row.classList.toggle('is-done', module.lessons > 0 && done >= module.lessons);
    module.done.textContent = done > 0 ? text.lessonsDone(Math.min(done, module.lessons), module.lessons) : text.lessonsCount(module.lessons);
  }
  if (!card.started) return;
  const done = Math.min(progress.read.length, card.lessons);
  must<HTMLElement>(card.card, '[data-card-progress]').hidden = false;
  must<HTMLElement>(card.card, '[data-card-bar]').style.width = `${Math.round((done / card.lessons) * 100)}%`;
  must<HTMLElement>(card.card, '[data-card-count]').textContent = text.lessonsDone(done, card.lessons);
  const start = must<HTMLAnchorElement>(card.card, '[data-card-start]');
  start.textContent = text.continue;
  start.href = progress.last ?? card.firstLesson;
}

export function initCatalog(): void {
  // The language has no course yet: the page shows only the links to other languages.
  const list = document.querySelector<HTMLElement>('[data-catalog-list]');
  if (list) startCatalog(list);
}

function startCatalog(list: HTMLElement): void {
  const form = must<HTMLFormElement>(document, '[data-catalog-filters]');
  const search = must<HTMLInputElement>(form, '[data-catalog-search]');
  const sortSelect = must<HTMLSelectElement>(document, '[data-catalog-sort]');
  const count = must<HTMLElement>(document, '[data-catalog-count]');
  const empty = must<HTMLElement>(document, '[data-catalog-empty]');
  const statusFacet = must<HTMLElement>(form, '[data-status-facet]');
  const cards = readCards(list);
  const topics = new Set(cards.map((c) => c.topic));
  const locale = text.locale;

  function readForm(): Filters {
    const data = new FormData(form);
    const progress = String(data.get('progress') ?? '');
    const sort = sortSelect.value;
    return {
      query: search.value,
      topic: String(data.get('topic') ?? ''),
      progress: isProgressFilter(progress) ? progress : '',
      sort: isSort(sort) ? sort : 'recommended',
    };
  }

  function fillForm(filters: Filters): void {
    search.value = filters.query;
    sortSelect.value = filters.sort;
    for (const [name, value] of [['topic', filters.topic], ['progress', filters.progress]] as const) {
      const radio = form.querySelector<HTMLInputElement>(`input[name="${name}"][value="${value}"]`);
      if (radio) radio.checked = true;
    }
  }

  function apply(): void {
    const filters = readForm();
    const query = queryWords(filters.query);
    let shown = 0;
    for (const card of cards) {
      const matches = searchCard(card, query);
      const visible =
        (filters.topic === '' || card.topic === filters.topic) &&
        (filters.progress === '' || card.started === (filters.progress === 'started')) &&
        (matchesAll(card.words, query) || matches.length > 0);
      card.card.hidden = !visible;
      renderMatches(card, visible ? matches : []);
      if (visible) shown += 1;
    }
    // Moving a node drops keyboard focus inside it, so the list is reordered only when the order changed
    // (not on every keystroke or background sync).
    const sorted = [...cards].sort(compare(filters.sort, locale));
    if (sorted.some((card, i) => list.children[i] !== card.card)) for (const card of sorted) list.append(card.card);
    count.textContent = text.resultCount(shown);
    empty.hidden = shown > 0;
    writeUrl(filters);
  }

  function paintAll(): void {
    cards.forEach(paintProgress);
    const started = cards.filter((c) => c.started).length;
    // Filtering by progress only makes sense once some course was started in this browser.
    statusFacet.hidden = started === 0;
    must<HTMLElement>(form, '[data-status-count="started"]').textContent = String(started);
    must<HTMLElement>(form, '[data-status-count="not-started"]').textContent = String(cards.length - started);
    if (started === 0) {
      const all = must<HTMLInputElement>(form, 'input[name="progress"][value=""]');
      all.checked = true;
    }
    apply();
  }

  form.addEventListener('submit', (event) => event.preventDefault());
  form.addEventListener('input', apply);
  form.addEventListener('change', apply);
  // The sort select sits above the list, outside the form element, so its events do not reach the form.
  sortSelect.addEventListener('change', apply);
  must<HTMLButtonElement>(empty, '[data-catalog-clear]').addEventListener('click', () => {
    fillForm({ query: '', topic: '', progress: '', sort: readForm().sort });
    apply();
    search.focus();
  });
  for (const card of cards) card.toggle.addEventListener('click', () => setSyllabus(card, card.syllabus.hidden));

  // "/" jumps to the search from anywhere on the page; Escape inside it clears the query.
  document.addEventListener('keydown', (event) => {
    if (event.key !== '/' || event.ctrlKey || event.metaKey || event.altKey) return;
    const target = event.target as HTMLElement;
    if (target.closest('input, textarea, select, [contenteditable="true"]')) return;
    event.preventDefault();
    search.focus();
  });
  search.addEventListener('keydown', (event) => {
    if (event.key !== 'Escape' || search.value === '') return;
    search.value = '';
    apply();
  });

  fillForm(filtersFromUrl(topics));
  paintAll();
  startAutoSync(paintAll);
  initSyncCards(text, paintAll);
}
