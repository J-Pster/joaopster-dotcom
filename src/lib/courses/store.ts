// The published courses, read from R2 (the COURSES_BUCKET binding) by the on-demand course routes. The
// publisher (scripts/courses/publish.ts) writes them; lib/courses/package.ts is the format. catalog.json
// is read again every CATALOG_TTL_MS, so a publish shows up within that time; a course version never
// changes once written, so its index stays cached for the isolate's life.
import { env } from 'cloudflare:workers';
import type { Lang } from '../../i18n/ui';
import { courseViewOf, type CourseView } from './model';
import {
  CATALOG_KEY,
  PACKAGE_SCHEMA,
  packageKey,
  type ByteRange,
  type CourseIndexData,
  type PackageObject,
  type PublishedCatalog,
  type PublishedCourse,
} from './package';
import type { RenderedNote } from './render';

const CATALOG_TTL_MS = 30_000;

async function readObject(key: string, range?: ByteRange): Promise<R2ObjectBody> {
  const object = await env.COURSES_BUCKET.get(key, range ? { range: { offset: range[0], length: range[1] } } : undefined);
  if (!object) throw new Error(`R2 object ${key} is missing`);
  return object;
}

const readJson = async <T>(key: string, range?: ByteRange): Promise<T> => JSON.parse(await (await readObject(key, range)).text()) as T;

let catalogCache: { readonly at: number; readonly catalog: Promise<PublishedCatalog> } | undefined;

export function publishedCatalog(): Promise<PublishedCatalog> {
  const now = Date.now();
  if (catalogCache && now - catalogCache.at < CATALOG_TTL_MS) return catalogCache.catalog;
  const catalog = readJson<PublishedCatalog>(CATALOG_KEY).then((read) => {
    if (read.schema !== PACKAGE_SCHEMA) throw new Error(`${CATALOG_KEY} has schema ${read.schema}, the site reads ${PACKAGE_SCHEMA}`);
    return read;
  });
  catalogCache = { at: now, catalog };
  // A failed read is retried by the next request instead of being served for the whole TTL.
  catalog.catch(() => {
    if (catalogCache?.catalog === catalog) catalogCache = undefined;
  });
  return catalog;
}

/** The published courses written in a language, flagship first, then in the catalog's order. */
export async function coursesIn(lang: Lang): Promise<readonly PublishedCourse[]> {
  const flagship = (entry: PublishedCourse) => (entry.course.standing === 'flagship' ? 0 : 1);
  const { courses } = await publishedCatalog();
  return courses.filter((entry) => entry.course.lang === lang).sort((a, b) => flagship(a) - flagship(b));
}

/** The published course with this slug in this language's section. */
export async function publishedCourse(lang: Lang, slug: string): Promise<PublishedCourse | undefined> {
  const { courses } = await publishedCatalog();
  return courses.find((entry) => entry.course.slug === slug && entry.course.lang === lang);
}

export interface LoadedCourse {
  readonly entry: PublishedCourse;
  readonly view: CourseView;
  readonly index: CourseIndexData;
}

const loaded = new Map<string, Promise<LoadedCourse>>();

export function loadCourse(entry: PublishedCourse): Promise<LoadedCourse> {
  const { slug } = entry.course;
  const key = `${slug}@${entry.version}`;
  const cached = loaded.get(key);
  if (cached) return cached;
  // Only the live version of a course is kept: an older one is not read again.
  for (const other of loaded.keys()) if (other.startsWith(`${slug}@`)) loaded.delete(other);
  const load = readJson<CourseIndexData>(packageKey(slug, entry.version, 'index.json')).then((index) => {
    if (index.version !== entry.version) throw new Error(`${key}: index.json says version ${index.version}`);
    return { entry, view: courseViewOf(index), index };
  });
  loaded.set(key, load);
  load.catch(() => {
    if (loaded.get(key) === load) loaded.delete(key);
  });
  return load;
}

export function renderedNote(course: LoadedCourse, noteId: string): Promise<RenderedNote> {
  const note = course.index.notes.find((n) => n.id === noteId);
  if (!note) throw new Error(`${course.entry.course.slug}: no note ${noteId}`);
  return readJson<RenderedNote>(packageKey(course.entry.course.slug, course.entry.version, 'notes.pack'), note.rendered);
}

/** One entry of files.pack or search.pack, as a stream. */
export async function packedEntry(course: LoadedCourse, pack: 'files.pack' | 'search.pack', range: ByteRange): Promise<ReadableStream<Uint8Array>> {
  return (await readObject(packageKey(course.entry.course.slug, course.entry.version, pack), range)).body;
}

/** A whole object of the course's package (outline.json, study.json, vault.zip, og.png). */
export async function packageObject(entry: PublishedCourse, object: Exclude<PackageObject, 'notes.pack' | 'files.pack' | 'search.pack' | 'index.json'>): Promise<ReadableStream<Uint8Array>> {
  return (await readObject(packageKey(entry.course.slug, entry.version, object))).body;
}

/** An object outside the course packages (the courses landing's share images). */
export async function bucketObject(key: string): Promise<ReadableStream<Uint8Array>> {
  return (await readObject(key)).body;
}
