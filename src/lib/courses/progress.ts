// Reading progress of the courses in this browser (localStorage), one key per course. This copy is
// always written first; with a sync code, client/sync.ts also merges it with the reader's other devices.
// Notes are identified by their site URL, which is what the pages know on the client.
import {
  courseView,
  EMPTY_COURSE,
  markChecks,
  markLast,
  markRead,
  parseCourseRecord,
  type CourseProgress,
  type CourseRecord,
  type ProgressRecord,
} from './progressModel';

export type { CourseProgress } from './progressModel';

/** Fired on window when the reader changes progress on this page (not when a sync rewrites it). */
export const PROGRESS_CHANGED = 'courses:progress-changed';

const PREFIX = 'jp-courses:v2:';
const storageKey = (slug: string) => `${PREFIX}${slug}`;
// Before sync, progress had no timestamps. Read once, it is converted and rewritten under the v2 key.
const LEGACY_PREFIX = 'jp-courses:v1:';
const legacyKey = (slug: string) => `${LEGACY_PREFIX}${slug}`;

function parseLegacy(raw: string): CourseRecord {
  const data: unknown = JSON.parse(raw);
  if (typeof data !== 'object' || data === null) return EMPTY_COURSE;
  const { read, checks, last } = data as Record<string, unknown>;
  const stamped = { read: {} as Record<string, unknown>, checks: {} as Record<string, unknown>, last: undefined as unknown };
  if (Array.isArray(read)) for (const url of read) stamped.read[String(url)] = { v: true, t: 0 };
  if (typeof checks === 'object' && checks !== null) {
    for (const [url, list] of Object.entries(checks)) stamped.checks[url] = { v: list, t: 0 };
  }
  if (typeof last === 'string') stamped.last = { v: last, t: 0 };
  return parseCourseRecord(stamped, Date.now());
}

// Storage is written by these pages but can be edited, truncated or blocked: anything unreadable
// leaves the reader with a fresh start for that course instead of a broken page.
function loadRecord(slug: string): CourseRecord {
  try {
    const raw = localStorage.getItem(storageKey(slug));
    if (raw) return parseCourseRecord(JSON.parse(raw), Date.now());
    const legacy = localStorage.getItem(legacyKey(slug));
    if (!legacy) return EMPTY_COURSE;
    const record = parseLegacy(legacy);
    writeRecord(slug, record);
    localStorage.removeItem(legacyKey(slug));
    return record;
  } catch (err) {
    console.warn(`[courses] unreadable progress for ${slug}, starting fresh`, err);
    return EMPTY_COURSE;
  }
}

function writeRecord(slug: string, record: CourseRecord): void {
  try {
    localStorage.setItem(storageKey(slug), JSON.stringify(record));
  } catch (err) {
    // Storage blocked or full: progress lives only for this page view.
    console.warn('[courses] could not save progress', err);
  }
}

function change(slug: string, update: (record: CourseRecord, now: number) => CourseRecord): CourseProgress {
  const next = update(loadRecord(slug), Date.now());
  writeRecord(slug, next);
  window.dispatchEvent(new Event(PROGRESS_CHANGED));
  return courseView(next);
}

export const loadProgress = (slug: string): CourseProgress => courseView(loadRecord(slug));

export const setRead = (slug: string, url: string, read: boolean): CourseProgress =>
  change(slug, (record, now) => markRead(record, url, read, now));

export const setChecks = (slug: string, url: string, indexes: readonly number[]): void => {
  change(slug, (record, now) => markChecks(record, url, indexes, now));
};

export const setLast = (slug: string, url: string): void => {
  change(slug, (record, now) => markLast(record, url, now));
};

/** Every course with progress in this browser, for sync. */
export function loadAllProgress(): ProgressRecord {
  const slugs = new Set<string>();
  for (let i = 0; i < localStorage.length; i++) {
    const key = localStorage.key(i);
    if (key?.startsWith(PREFIX)) slugs.add(key.slice(PREFIX.length));
    else if (key?.startsWith(LEGACY_PREFIX)) slugs.add(key.slice(LEGACY_PREFIX.length));
  }
  return Object.fromEntries([...slugs].map((slug) => [slug, loadRecord(slug)]));
}

/** Replaces this browser's copy with the merged progress a sync returned. */
export function storeAllProgress(progress: ProgressRecord): void {
  for (const [slug, record] of Object.entries(progress)) writeRecord(slug, record);
}
