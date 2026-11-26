// Reading progress of one course, kept only in the reader's browser (localStorage).
// Notes are identified by their site URL, which is what the pages know on the client.

export interface CourseProgress {
  /** URLs of the lessons marked as read. */
  readonly read: readonly string[];
  /** Ticked task checkboxes per note URL, by their position in the note. */
  readonly checks: Readonly<Record<string, readonly number[]>>;
  /** Last lesson opened, for "continue where you stopped". */
  readonly last: string | undefined;
}

const EMPTY: CourseProgress = { read: [], checks: {}, last: undefined };
const storageKey = (slug: string) => `jp-courses:v1:${slug}`;

const isStringArray = (value: unknown): value is string[] =>
  Array.isArray(value) && value.every((v) => typeof v === 'string');
const isNumberArray = (value: unknown): value is number[] =>
  Array.isArray(value) && value.every((v) => Number.isInteger(v));

// Storage is written by this page but can be edited or truncated by hand: parse it once here.
function parse(raw: string | null): CourseProgress {
  if (!raw) return EMPTY;
  const data: unknown = JSON.parse(raw);
  if (typeof data !== 'object' || data === null) return EMPTY;
  const { read, checks, last } = data as Record<string, unknown>;
  const cleanChecks: Record<string, number[]> = {};
  if (typeof checks === 'object' && checks !== null) {
    for (const [url, list] of Object.entries(checks)) if (isNumberArray(list)) cleanChecks[url] = list;
  }
  return {
    read: isStringArray(read) ? read : [],
    checks: cleanChecks,
    last: typeof last === 'string' ? last : undefined,
  };
}

export function loadProgress(slug: string): CourseProgress {
  try {
    return parse(localStorage.getItem(storageKey(slug)));
  } catch {
    // Storage blocked (private window, disabled site data) or not JSON: the reader starts fresh.
    return EMPTY;
  }
}

function save(slug: string, progress: CourseProgress): void {
  try {
    localStorage.setItem(storageKey(slug), JSON.stringify(progress));
  } catch {
    // Storage blocked or full: progress lives only for this page view.
  }
}

export function setRead(slug: string, url: string, read: boolean): CourseProgress {
  const current = loadProgress(slug);
  const others = current.read.filter((u) => u !== url);
  const next = { ...current, read: read ? [...others, url] : others };
  save(slug, next);
  return next;
}

export function setChecks(slug: string, url: string, indexes: readonly number[]): void {
  const current = loadProgress(slug);
  const checks = { ...current.checks, [url]: [...indexes] };
  if (indexes.length === 0) delete checks[url];
  save(slug, { ...current, checks });
}

export function setLast(slug: string, url: string): void {
  save(slug, { ...loadProgress(slug), last: url });
}
