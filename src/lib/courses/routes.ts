// Static paths and responses shared by the per-language route files (src/pages/cursos,
// src/pages/en/courses, src/pages/es/cursos). Each route file only says which language it serves.
import { readFileSync } from 'node:fs';
import type { Lang } from '../../i18n/ui';
import { courseBySlug, courseFilesUrl, coursesIn, hasStudyPages } from './catalog';
import type { CourseOutline } from './outline';
import { readingMinutes } from './readingTime';
import { getRenderer } from './render';
import type { StudyIndex, StudyNote, StudyQuestion, StudyTerm } from './studyModel';
import { getVault } from './vault';
import { zipFolder, zipResponse } from './zip';

/** Every note of every course in the language, at the URL the vault gives it. */
export const notePaths = (lang: Lang) =>
  coursesIn(lang).flatMap((course) => {
    const vault = getVault(course.slug);
    const prefix = vault.home.url;
    return vault.notes.map((note) => ({
      params: { course: course.slug, note: note.url.slice(prefix.length, -1) || undefined },
      props: { noteId: note.id },
    }));
  });

export const coursePaths = (lang: Lang) => coursesIn(lang).map((course) => ({ params: { course: course.slug } }));

export const glossaryPaths = (lang: Lang) =>
  coursesIn(lang)
    .filter((course) => getVault(course.slug).glossary.length > 0)
    .map((course) => ({ params: { course: course.slug } }));

/** Files that ship with a course (spreadsheets, images, text) and that notes link to. */
export const filePaths = (lang: Lang) =>
  coursesIn(lang).flatMap((course) => {
    const prefix = courseFilesUrl(course);
    return getVault(course.slug).assets.map((asset) => ({
      params: { course: course.slug, file: asset.url.slice(prefix.length) },
      props: { absPath: asset.absPath },
    }));
  });

export const fileResponse = (absPath: string) => new Response(readFileSync(absPath));

/** Modules and lessons with their URLs, for the client-side progress widget. */
export function outlineResponse(slug: string): Response {
  const vault = getVault(slug);
  const outline: CourseOutline = {
    modules: vault.modules.map((m) => ({
      number: m.number,
      title: m.title,
      url: m.note.url,
      lessons: m.lessons.map((l) => ({ url: l.url, title: l.title, minutes: readingMinutes(l) })),
    })),
  };
  return new Response(JSON.stringify(outline), { headers: { 'Content-Type': 'application/json' } });
}

export const studyPaths = (lang: Lang) =>
  coursesIn(lang)
    .filter(hasStudyPages)
    .map((course) => ({ params: { course: course.slug } }));

/** Every quiz question and glossary term of a course, for the study pages. */
export async function studyResponse(slug: string): Promise<Response> {
  const vault = getVault(slug);
  const renderer = await getRenderer(vault);
  const moduleNumber = new Map(vault.modules.map((m) => [m.id, m.number]));
  const notes: StudyNote[] = [];
  const noteIndex = new Map<string, number>();
  const questions: StudyQuestion[] = [];
  for (const note of vault.notes) {
    if (note.kind === 'glossary') continue;
    const { quiz } = await renderer.render(note);
    noteIndex.set(note.id, notes.length);
    notes.push({ url: note.url, title: note.title, module: note.moduleId === undefined ? undefined : moduleNumber.get(note.moduleId) });
    for (const q of quiz) {
      questions.push({
        note: note.url,
        id: q.id,
        number: q.number,
        text: q.text,
        options: q.options.map((o) => [o.letter, o.box] as const),
        correct: q.correct,
      });
    }
  }
  const terms: StudyTerm[] = vault.glossary.map((term) => ({
    title: term.title,
    url: term.url,
    lessons: (vault.backlinks.get(term.id) ?? []).flatMap((source) => {
      const index = noteIndex.get(source.id);
      return source.kind === 'lesson' && index !== undefined ? [index] : [];
    }),
  }));
  const index: StudyIndex = { notes, questions, terms };
  return new Response(JSON.stringify(index), { headers: { 'Content-Type': 'application/json' } });
}

/** The whole course as a zip, ready to open as an Obsidian vault (or read in any Markdown editor). */
export function courseZipResponse(slug: string): Response {
  const course = courseBySlug(slug);
  return zipResponse(zipFolder(getVault(course.slug).root, course.vaultName));
}
