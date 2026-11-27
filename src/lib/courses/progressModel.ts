// Reading progress as a mergeable document. Every value carries the time it was set, so the
// progress of two devices that studied apart merges by keeping the newest value of each item.
// Shared by the browser (localStorage and sync) and the sync endpoint (src/pages/api/progress.ts).

export interface Stamped<T> {
  readonly v: T;
  /** When the value was set, in ms since the epoch. */
  readonly t: number;
}

/**
 * A passage the reader marked, stored as a W3C TextQuoteSelector: the text itself plus a little
 * context on each side, so it can be found again (and told apart from repeats) when the page changes.
 */
export interface Highlight {
  readonly id: string;
  readonly exact: string;
  readonly prefix: string;
  readonly suffix: string;
}

export interface CourseRecord {
  /** Lesson URL: read or not, and since when. */
  readonly read: Readonly<Record<string, Stamped<boolean>>>;
  /** Note URL: positions of the ticked task checkboxes. */
  readonly checks: Readonly<Record<string, Stamped<readonly number[]>>>;
  /** Note URL: the whole list of highlights of that note (the newest list wins on merge). */
  readonly highlights: Readonly<Record<string, Stamped<readonly Highlight[]>>>;
  /** Last lesson opened, for "continue where you stopped". */
  readonly last: Stamped<string> | undefined;
}

/** Every course a reader has progress in, by course slug. */
export type ProgressRecord = Readonly<Record<string, CourseRecord>>;

/** What the reader pages show. */
export interface CourseProgress {
  /** URLs of the lessons marked as read. */
  readonly read: readonly string[];
  /** Ticked task checkboxes per note URL, by their position in the note. */
  readonly checks: Readonly<Record<string, readonly number[]>>;
  readonly last: string | undefined;
}

export const EMPTY_COURSE: CourseRecord = { read: {}, checks: {}, highlights: {}, last: undefined };

export function courseView(record: CourseRecord): CourseProgress {
  const read = Object.entries(record.read).flatMap(([url, s]) => (s.v ? [url] : []));
  const checks: Record<string, readonly number[]> = {};
  for (const [url, s] of Object.entries(record.checks)) if (s.v.length > 0) checks[url] = s.v;
  return { read, checks, last: record.last?.v };
}

export const markRead = (record: CourseRecord, url: string, read: boolean, now: number): CourseRecord => ({
  ...record,
  read: { ...record.read, [url]: { v: read, t: now } },
});

export const markChecks = (record: CourseRecord, url: string, indexes: readonly number[], now: number): CourseRecord => ({
  ...record,
  checks: { ...record.checks, [url]: { v: [...indexes], t: now } },
});

export const markHighlights = (
  record: CourseRecord,
  url: string,
  highlights: readonly Highlight[],
  now: number,
): CourseRecord => ({
  ...record,
  highlights: { ...record.highlights, [url]: { v: [...highlights], t: now } },
});

export const markLast = (record: CourseRecord, url: string, now: number): CourseRecord => ({
  ...record,
  last: { v: url, t: now },
});

// ---- Merge: the newest value of each item wins; on a tie the first record keeps its value.

function newer<T>(a: Stamped<T> | undefined, b: Stamped<T> | undefined): Stamped<T> | undefined {
  if (!a) return b;
  if (!b) return a;
  return b.t > a.t ? b : a;
}

function mergeMap<T>(
  a: Readonly<Record<string, Stamped<T>>>,
  b: Readonly<Record<string, Stamped<T>>>,
): Record<string, Stamped<T>> {
  const merged: Record<string, Stamped<T>> = { ...a };
  for (const [key, value] of Object.entries(b)) merged[key] = newer(a[key], value) ?? value;
  return merged;
}

export const mergeCourse = (a: CourseRecord, b: CourseRecord): CourseRecord => ({
  read: mergeMap(a.read, b.read),
  checks: mergeMap(a.checks, b.checks),
  highlights: mergeMap(a.highlights, b.highlights),
  last: newer(a.last, b.last),
});

export function mergeProgress(a: ProgressRecord, b: ProgressRecord): ProgressRecord {
  const merged: Record<string, CourseRecord> = { ...a };
  for (const [slug, course] of Object.entries(b)) {
    const mine = a[slug];
    merged[slug] = mine ? mergeCourse(mine, course) : course;
  }
  return merged;
}

/** JSON with sorted keys, so two equal records serialize to the same string. */
export function serializeProgress(record: ProgressRecord): string {
  return JSON.stringify(record, (_key, value: unknown) => {
    if (!isObject(value)) return value;
    return Object.fromEntries(Object.entries(value).sort(([x], [y]) => (x < y ? -1 : x > y ? 1 : 0)));
  });
}

// ---- Parsing. Progress comes from places this code does not control (localStorage, the network),
// so it is parsed once at those boundaries into the types above.

export class ProgressFormatError extends Error {}

export const LIMITS = {
  courses: 100,
  entriesPerMap: 5000,
  checksPerNote: 500,
  urlLength: 400,
  highlightsPerNote: 100,
  highlightExact: 280,
  highlightContext: 32,
  highlightId: 24,
} as const;
const SLUG = /^[a-z0-9-]{1,100}$/;

function fail(reason: string): never {
  throw new ProgressFormatError(reason);
}

function isObject(value: unknown): value is Record<string, unknown> {
  return typeof value === 'object' && value !== null && !Array.isArray(value);
}

function parseUrl(value: string): string {
  if (!value.startsWith('/') || value.length > LIMITS.urlLength) fail(`bad note URL: ${value.slice(0, 60)}`);
  return value;
}

/** A time from another clock: never later than this clock's now, so a fast clock cannot pin a value. */
function parseTime(value: unknown, now: number): number {
  if (typeof value !== 'number' || !Number.isInteger(value) || value < 0) fail('bad timestamp');
  return Math.min(value, now);
}

function parseStamped<T>(raw: unknown, now: number, parseValue: (v: unknown) => T): Stamped<T> {
  if (!isObject(raw)) fail('bad stamped value');
  return { v: parseValue(raw.v), t: parseTime(raw.t, now) };
}

function parseMap<T>(raw: unknown, now: number, parseValue: (v: unknown) => T): Record<string, Stamped<T>> {
  if (!isObject(raw)) fail('bad map');
  const entries = Object.entries(raw);
  if (entries.length > LIMITS.entriesPerMap) fail('too many entries');
  const map: Record<string, Stamped<T>> = {};
  for (const [url, value] of entries) map[parseUrl(url)] = parseStamped(value, now, parseValue);
  return map;
}

function parseBoolean(value: unknown): boolean {
  if (typeof value !== 'boolean') fail('bad read flag');
  return value;
}

function parseIndex(value: unknown): number {
  if (typeof value !== 'number' || !Number.isInteger(value) || value < 0 || value >= 10_000) fail('bad checkbox index');
  return value;
}

function parseIndexes(value: unknown): number[] {
  if (!Array.isArray(value) || value.length > LIMITS.checksPerNote) fail('bad checkbox list');
  return value.map(parseIndex);
}

function parseText(value: unknown, max: number, minLength: number, what: string): string {
  if (typeof value !== 'string' || value.length < minLength || value.length > max) fail(`bad highlight ${what}`);
  return value;
}

function parseHighlight(value: unknown): Highlight {
  if (!isObject(value)) fail('bad highlight');
  return {
    id: parseText(value.id, LIMITS.highlightId, 1, 'id'),
    exact: parseText(value.exact, LIMITS.highlightExact, 1, 'text'),
    prefix: parseText(value.prefix, LIMITS.highlightContext, 0, 'prefix'),
    suffix: parseText(value.suffix, LIMITS.highlightContext, 0, 'suffix'),
  };
}

function parseHighlights(value: unknown): Highlight[] {
  if (!Array.isArray(value) || value.length > LIMITS.highlightsPerNote) fail('bad highlight list');
  return value.map(parseHighlight);
}

function parseLastUrl(value: unknown): string {
  if (typeof value !== 'string') fail('bad last URL');
  return parseUrl(value);
}

export function parseCourseRecord(raw: unknown, now: number): CourseRecord {
  if (!isObject(raw)) fail('course progress is not an object');
  return {
    read: parseMap(raw.read, now, parseBoolean),
    checks: parseMap(raw.checks, now, parseIndexes),
    // Records from before highlights existed (old devices, stored rows) have no such field.
    highlights: raw.highlights === undefined ? {} : parseMap(raw.highlights, now, parseHighlights),
    last: raw.last === undefined ? undefined : parseStamped(raw.last, now, parseLastUrl),
  };
}

export function parseProgressRecord(raw: unknown, now: number): ProgressRecord {
  if (!isObject(raw)) fail('progress is not an object');
  const entries = Object.entries(raw);
  if (entries.length > LIMITS.courses) fail('too many courses');
  const record: Record<string, CourseRecord> = {};
  for (const [slug, course] of entries) {
    if (!SLUG.test(slug)) fail(`bad course slug: ${slug.slice(0, 60)}`);
    record[slug] = parseCourseRecord(course, now);
  }
  return record;
}
