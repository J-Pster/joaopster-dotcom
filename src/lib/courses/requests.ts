// What each on-demand course route answers, shared by the per-language route files (src/pages/cursos,
// src/pages/en/courses, src/pages/es/cursos). Each route file only says which language it serves.
// Everything comes from the published courses in R2 (lib/courses/store.ts).
import type { Lang } from '../../i18n/ui';
import { courseFilesUrl, courseUrl, hasStudyPages, type ExamRules } from './catalog';
import { isSimulatedExam, type CourseView, type NoteMeta } from './model';
import { landingOgKey } from './package';
import type { RenderedNote } from './render';
import { bucketObject, loadCourse, packageObject, packedEntry, publishedCatalog, publishedCourse, renderedNote } from './store';

export type PageLookup<T> =
  | { readonly kind: 'found'; readonly page: T }
  | { readonly kind: 'redirect'; readonly to: string }
  | { readonly kind: 'missing' };

const MISSING = { kind: 'missing' } as const;

export const notFound = () => new Response(null, { status: 404 });

// Package objects change only when a course is published again.
const PACKAGE_CACHE = 'public, max-age=300';

// Pagefind's entry files keep their names across publishes while the fragments they list change, so the
// browser asks again every time instead of pairing an old entry with a new course version.
const SEARCH_CACHE = 'no-cache';

const streamResponse = (body: ReadableStream<Uint8Array>, contentType: string, cache = PACKAGE_CACHE) =>
  new Response(body, { headers: { 'Content-Type': contentType, 'Cache-Control': cache } });

/** Course pages live at addresses ending in "/": the other spelling redirects there. */
const slashRedirect = (url: URL) => ({ kind: 'redirect', to: `${url.pathname}/${url.search}` }) as const;

export interface NotePage {
  readonly view: CourseView;
  readonly note: NoteMeta;
  readonly rendered: RenderedNote;
  /** Set on simulated exams: the note's quiz runs as a timed exam. */
  readonly exam: ExamRules | undefined;
}

/** A note of a course: params.note is its address inside the course, absent for the course home. */
export async function notePage(lang: Lang, params: { course?: string; note?: string }, url: URL): Promise<PageLookup<NotePage>> {
  const entry = params.course ? await publishedCourse(lang, params.course) : undefined;
  if (!entry) return MISSING;
  const course = await loadCourse(entry);
  const note = course.view.byUrl(`${courseUrl(entry.course)}${params.note ? `${params.note}/` : ''}`);
  if (!note) return MISSING;
  if (!url.pathname.endsWith('/')) return slashRedirect(url);
  const rendered = await renderedNote(course, note.id);
  const { exam } = entry.course;
  return { kind: 'found', page: { view: course.view, note, rendered, exam: exam && rendered.quiz.length > 0 && isSimulatedExam(note) ? exam : undefined } };
}

/** A page about the whole course: its glossary index, or its study pages (mistakes, review). */
export async function coursePage(lang: Lang, slug: string | undefined, url: URL, needs: 'glossary' | 'study'): Promise<PageLookup<CourseView>> {
  const entry = slug ? await publishedCourse(lang, slug) : undefined;
  if (!entry) return MISSING;
  const { view } = await loadCourse(entry);
  const has = needs === 'glossary' ? view.glossary.length > 0 : hasStudyPages(view.course);
  if (!has) return MISSING;
  return url.pathname.endsWith('/') ? { kind: 'found', page: view } : slashRedirect(url);
}

export async function outlineResponse(lang: Lang, slug: string | undefined): Promise<Response> {
  const entry = slug ? await publishedCourse(lang, slug) : undefined;
  return entry ? streamResponse(await packageObject(entry, 'outline.json'), 'application/json') : notFound();
}

export async function studyResponse(lang: Lang, slug: string | undefined): Promise<Response> {
  const entry = slug ? await publishedCourse(lang, slug) : undefined;
  return entry && hasStudyPages(entry.course) ? streamResponse(await packageObject(entry, 'study.json'), 'application/json') : notFound();
}

/** The whole course as a zip, ready to open as an Obsidian vault (or read in any Markdown editor). */
export async function zipResponse(lang: Lang, slug: string | undefined): Promise<Response> {
  const entry = slug ? await publishedCourse(lang, slug) : undefined;
  if (!entry) return notFound();
  const response = streamResponse(await packageObject(entry, 'vault.zip'), 'application/zip');
  response.headers.set('Content-Disposition', `attachment; filename="${entry.course.slug}.zip"`);
  return response;
}

/** A file of a course (image, spreadsheet, text) that its notes link to. */
export async function fileResponse(lang: Lang, slug: string | undefined, file: string | undefined): Promise<Response> {
  const entry = slug ? await publishedCourse(lang, slug) : undefined;
  if (!entry || !file) return notFound();
  const course = await loadCourse(entry);
  const url = `${courseFilesUrl(entry.course)}${file}`;
  const packed = course.index.files.find((f) => f.url === url);
  return packed ? streamResponse(await packedEntry(course, 'files.pack', packed.range), packed.contentType) : notFound();
}

const SEARCH_TYPES: Readonly<Record<string, string>> = {
  js: 'text/javascript; charset=utf-8',
  css: 'text/css; charset=utf-8',
  json: 'application/json',
};

/** A file of a course's Pagefind index (lib/courses/client/search.ts loads it). */
export async function searchFileResponse(slug: string | undefined, path: string | undefined): Promise<Response> {
  const { courses } = await publishedCatalog();
  const entry = courses.find((c) => c.course.slug === slug);
  if (!entry || !path) return notFound();
  const course = await loadCourse(entry);
  // Own keys only: a path like "constructor" must not find Object.prototype's.
  if (!Object.hasOwn(course.index.search, path)) return notFound();
  const type = SEARCH_TYPES[path.slice(path.lastIndexOf('.') + 1)] ?? 'application/octet-stream';
  return streamResponse(await packedEntry(course, 'search.pack', course.index.search[path]), type, SEARCH_CACHE);
}

/** Share image of a course, drawn at publish time. */
export async function courseOgResponse(slug: string | undefined): Promise<Response> {
  const { courses } = await publishedCatalog();
  const entry = courses.find((c) => c.course.slug === slug);
  return entry ? streamResponse(await packageObject(entry, 'og.png'), 'image/png') : notFound();
}

/** Share image of a language's courses landing, drawn at publish time. */
export async function landingOgResponse(lang: Lang): Promise<Response> {
  return streamResponse(await bucketObject(landingOgKey(lang)), 'image/png');
}
