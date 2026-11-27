// Search-engine facing text and structured data of the courses section, all derived at build time
// from the catalog and the vaults: lesson titles and descriptions, the catalog's ItemList and each
// course's schema.org Course. Only facts the catalog or the notes state go in.
import type { CourseInfo } from './catalog';
import { courseUrl, coursesHome } from './catalog';
import type { CourseText } from './i18n';
import { readingMinutes } from './readingTime';
import type { Note, Vault } from './vault';

/** The site's Person node, defined in components/BaseHead.astro's own structured data. */
const PERSON_ID = 'https://joaopster.com/#person';
const DESCRIPTION_LIMIT = 160;

// "Aula 5.1: Reconhecer a hemorragia" and "Aula 3: Projeção ortogonal": the number only orders the
// lesson inside its module, so it spends title space and says nothing to a searcher.
const LESSON_PREFIX = /^(?:Aula|Lesson|Clase)\s+\d+(?:\.\d+)?\s*:\s*/i;
const GENERIC_QUESTION_TITLE = /^Pergunta que esta aula responde/i;
const QUESTION_CALLOUT = /^>\s*\[!question\][-+]?[ \t]*(.*)$/im;
const QUESTION_ITALIC = /^\*Pergunta que esta aula responde:\s*(.+?)\*\s*$/im;

/** The lesson's own title, without the "Aula N:" prefix. Other notes keep their title. */
export const seoTitle = (note: Note): string =>
  note.kind === 'lesson' ? note.title.replace(LESSON_PREFIX, '') : note.title;

/** Notes write wikilinks, emphasis and code marks that mean nothing in a meta description. */
const plainText = (markdown: string): string =>
  markdown
    .replace(/\[\[(?:[^\]|]*\\?\|)?([^\]]+)\]\]/g, '$1')
    .replace(/\[([^\]]+)\]\([^)]*\)/g, '$1')
    .replace(/[*_`]/g, '')
    .replace(/\s+/g, ' ')
    .trim();

/** The question a lesson answers: a "question" callout (title or first paragraph) or an italic line. */
function lessonQuestion(note: Note): string | undefined {
  const italic = note.body.match(QUESTION_ITALIC);
  if (italic) return plainText(italic[1]);
  const callout = QUESTION_CALLOUT.exec(note.body);
  if (!callout) return undefined;
  const title = plainText(callout[1]);
  if (title && !GENERIC_QUESTION_TITLE.test(title)) return title;
  const afterHead = note.body.slice(callout.index + callout[0].length).split('\n').slice(1);
  const bodyLines: string[] = [];
  for (const line of afterHead) {
    if (!line.startsWith('>')) break;
    bodyLines.push(line.replace(/^>\s?/, ''));
  }
  const firstParagraph = bodyLines.join('\n').split(/\n\s*\n/)[0];
  return plainText(firstParagraph) || undefined;
}

const capitalize = (text: string): string => text.charAt(0).toUpperCase() + text.slice(1);

const shorten = (text: string, limit: number): string => {
  if (text.length <= limit) return text;
  return `${text.slice(0, limit - 1).replace(/\s+\S*$/, '')}…`;
};

/**
 * Meta description of a note. A lesson uses the question it answers, so no two lessons share a
 * description; notes without one (modules, glossary terms, pages) keep the generic line.
 */
export function noteMetaDescription(note: Note, course: CourseInfo, text: CourseText): string {
  if (note.kind === 'home') return course.goal;
  const question = note.kind === 'lesson' ? lessonQuestion(note) : undefined;
  if (!question) return text.noteDescription(note.title, course.title);
  const full = text.lessonDescription(capitalize(question), course.title);
  return full.length <= DESCRIPTION_LIMIT ? full : shorten(capitalize(question), DESCRIPTION_LIMIT);
}

/** Total reading time of a course, in minutes (the same figure the catalog shows). */
export const courseReadingMinutes = (vault: Vault): number =>
  vault.lessons.reduce((sum, lesson) => sum + readingMinutes(lesson), 0);

/** ISO 8601 duration of a number of minutes: 3252 becomes "PT54H12M". */
export function isoDuration(minutes: number): string {
  const hours = Math.floor(minutes / 60);
  const rest = minutes % 60;
  return `PT${hours > 0 ? `${hours}H` : ''}${rest > 0 || hours === 0 ? `${rest}M` : ''}`;
}

const SCHEMA_LEVEL = { beginner: 'Beginner', intermediate: 'Intermediate', advanced: 'Advanced' } as const;

/** schema.org Course of a course's home page. */
export function courseJsonLd(vault: Vault, site: URL) {
  const { course } = vault;
  return {
    '@context': 'https://schema.org',
    '@type': 'Course',
    name: course.title,
    description: course.goal,
    url: new URL(courseUrl(course), site).href,
    inLanguage: course.lang,
    provider: { '@id': PERSON_ID },
    author: { '@id': PERSON_ID },
    isAccessibleForFree: true,
    offers: { '@type': 'Offer', price: 0, priceCurrency: 'BRL', category: 'Free' },
    timeRequired: isoDuration(courseReadingMinutes(vault)),
    educationalLevel: SCHEMA_LEVEL[course.level],
    teaches: [...course.objectives],
    ...(course.prerequisites.length > 0 && { coursePrerequisites: [...course.prerequisites] }),
  };
}

/** schema.org ItemList of the courses on a catalog landing: only the courses open to search. */
export function catalogJsonLd(courses: readonly CourseInfo[], site: URL) {
  return {
    '@context': 'https://schema.org',
    '@type': 'ItemList',
    itemListElement: courses.filter((course) => course.indexing === 'index').map((course, index) => ({
      '@type': 'ListItem',
      position: index + 1,
      name: course.title,
      url: new URL(courseUrl(course), site).href,
    })),
  };
}

/** schema.org BreadcrumbList of a course note: courses landing, course, then the note (the course home ends at the course). */
export function noteBreadcrumbJsonLd(note: Note, course: CourseInfo, coursesLabel: string, site: URL) {
  const trail = [
    { name: coursesLabel, url: new URL(coursesHome(course.lang), site).href },
    { name: course.title, url: new URL(courseUrl(course), site).href },
    ...(note.kind === 'home' ? [] : [{ name: seoTitle(note) }]),
  ];
  return {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: trail.map((crumb, index) => ({
      '@type': 'ListItem',
      position: index + 1,
      name: crumb.name,
      ...('url' in crumb && { item: crumb.url }),
    })),
  };
}

/** JSON for a <script type="application/ld+json">: "<" is escaped so no text can close the tag. */
export const jsonLdScript = (data: object): string => JSON.stringify(data).replace(/</g, '\\u003c');
