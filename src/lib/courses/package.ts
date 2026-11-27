// The published form of a course: what scripts/courses/publish.ts uploads to R2 and lib/courses/store.ts
// reads. Each version of a course is a handful of objects under courses/<slug>/<version>/; catalog.json,
// written last, says which version of each course is live. The large parts (rendered notes, files,
// search index) are packs: entries laid end to end and read back by byte range.
import type { CourseInfo } from './catalog';
import type { NoteKind } from './model';

/** Bumped when the shape below changes: the site refuses a catalog of another schema. */
export const PACKAGE_SCHEMA = 1;

export type ByteRange = readonly [offset: number, length: number];

export interface PackagedNote {
  readonly id: string;
  readonly name: string;
  readonly url: string;
  readonly title: string;
  readonly kind: NoteKind;
  readonly moduleId?: string;
  readonly tags: readonly string[];
  readonly aliases: readonly string[];
  readonly minutes: number;
  readonly description: string;
  /** The note's RenderedNote, as JSON, in notes.pack. */
  readonly rendered: ByteRange;
}

export interface PackagedModule {
  readonly id: string;
  readonly number: number;
  readonly title: string;
  /** Id of the module note. */
  readonly note: string;
  /** Ids of the lessons, in reading order. */
  readonly lessons: readonly string[];
}

/** A file of the course (image, spreadsheet, text) that notes link to, in files.pack. */
export interface PackagedFile {
  readonly url: string;
  readonly contentType: string;
  readonly range: ByteRange;
}

/** index.json: everything about a course version except the packed bodies. */
export interface CourseIndexData {
  readonly schema: typeof PACKAGE_SCHEMA;
  readonly course: CourseInfo;
  readonly version: string;
  /** Every note, in the vault's order. */
  readonly notes: readonly PackagedNote[];
  readonly home: string;
  readonly modules: readonly PackagedModule[];
  /** Note id to the ids of the notes that link to it. */
  readonly backlinks: Readonly<Record<string, readonly string[]>>;
  readonly files: readonly PackagedFile[];
  /** Path of each file of the course's Pagefind index to its range in search.pack. */
  readonly search: Readonly<Record<string, ByteRange>>;
}

export interface CatalogModule {
  readonly number: number;
  readonly title: string;
  readonly url: string;
  readonly lessons: number;
  readonly minutes: number;
}

/** A lesson as the catalog search sees it: title, URL and the number of its module. */
export type CatalogLesson = readonly [title: string, url: string, module: number];

/** What the courses landing shows of a course: its numbers, its syllabus and the lessons it searches. */
export interface CatalogSummary {
  readonly url: string;
  readonly firstLesson: string;
  readonly modules: readonly CatalogModule[];
  readonly lessons: number;
  readonly minutes: number;
  readonly terms: number;
  readonly searchLessons: readonly CatalogLesson[];
}

export interface PublishedCourse {
  readonly course: CourseInfo;
  readonly version: string;
  readonly summary: CatalogSummary;
}

/** catalog.json: the live version of every published course. */
export interface PublishedCatalog {
  readonly schema: typeof PACKAGE_SCHEMA;
  readonly courses: readonly PublishedCourse[];
}

export const CATALOG_KEY = 'catalog.json';

export const PACKAGE_OBJECTS = ['index.json', 'notes.pack', 'files.pack', 'search.pack', 'vault.zip', 'outline.json', 'study.json', 'og.png'] as const;
export type PackageObject = (typeof PACKAGE_OBJECTS)[number];

export const packageKey = (slug: string, version: string, object: PackageObject) => `courses/${slug}/${version}/${object}`;

/** Share image of a language's courses landing, rewritten on every publish (it counts all courses). */
export const landingOgKey = (lang: string) => `landing/og-${lang}.png`;
