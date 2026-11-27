// What a course is (the metadata the vault itself does not say) and where the courses live on the
// site. The courses themselves are listed in course-catalog/courses.ts, read only by the publisher
// (scripts/courses/publish.ts); the site reads the published catalog from R2 (lib/courses/store.ts).
// A course is written in one language and is listed only in that language's section (/cursos/,
// /en/courses/, /es/cursos/).
import { languages, type Lang } from '../../i18n/ui';
import type { CourseLook } from './look';

export interface CourseInfo {
  readonly slug: string;
  /** The language the course is written in. */
  readonly lang: Lang;
  readonly title: string;
  /** One sentence: where the course takes you. */
  readonly goal: string;
  /** What the course is about, for the catalog's topic filter. */
  readonly topic: CourseTopic;
  /** Home note, relative to the vault root. */
  readonly home: string;
  /** Folder name inside the downloaded zip (the vault name in Obsidian). */
  readonly vaultName: string;
  /** Whether the vault uses the Obsidian format (frontmatter, wikilinks, glossary with hover). */
  readonly format: 'obsidian' | 'markdown';
  /** For courses that prepare for an exam: how its simulated exams (notes tagged "simulado") run. */
  readonly exam?: ExamRules;
  /** Who the course is for, in one sentence. */
  readonly audience: string;
  readonly level: CourseLevel;
  /** What the reader should know or have before starting. Empty: nothing is required. */
  readonly prerequisites: readonly string[];
  /** What the reader can do after the course: each starts with an observable action verb. */
  readonly objectives: CourseObjectives;
  /** The flagship course gets the leading place on the catalog; the others are study notes. */
  readonly standing: CourseStanding;
  /**
   * Whether search engines may index the course. "noindex" keeps every page of the course reachable
   * from the catalog but out of search and the sitemap (health content without expert review).
   */
  readonly indexing: 'index' | 'noindex';
  /** Emblem icon and colors, the same on the catalog, the course pages and the share image. */
  readonly look: CourseLook;
}

export const COURSE_LEVELS = ['beginner', 'intermediate', 'advanced'] as const;
export type CourseLevel = (typeof COURSE_LEVELS)[number];

export const COURSE_STANDINGS = ['flagship', 'study-notes'] as const;
export type CourseStanding = (typeof COURSE_STANDINGS)[number];

/** Three to five objectives: the catalog card has room for no more, and a course with fewer has no plan. */
type Tuple<T, N extends number, Acc extends T[] = []> = Acc['length'] extends N ? Acc : Tuple<T, N, [...Acc, T]>;
export type CourseObjectives =
  | Readonly<Tuple<string, 3>>
  | Readonly<Tuple<string, 4>>
  | Readonly<Tuple<string, 5>>;

/** Topics of the catalog's filter, in the order they are listed. Labels live in lib/courses/i18n.ts. */
export const COURSE_TOPICS = ['technology', 'health', 'home'] as const;
export type CourseTopic = (typeof COURSE_TOPICS)[number];

export interface ExamRules {
  /** Time allowed per question, in minutes. */
  readonly minutesPerQuestion: number;
  /** Score the course sets as the study target, per domain and overall, in percent. */
  readonly targetPercent: number;
}

export const LANGS = Object.keys(languages) as Lang[];

/**
 * Courses with study pages (mistakes notebook, spaced review): the ones made with the course-making
 * skill, whose lessons end in quizzes and link a glossary.
 */
export const hasStudyPages = (course: CourseInfo) => course.format === 'obsidian';

// URL segments of the courses section in each language. The route files under src/pages use the
// same names: cursos/, en/courses/, es/cursos/.
interface SectionSegments {
  readonly root: string;
  readonly howTo: string;
  readonly glossary: string;
  readonly files: string;
  readonly mistakes: string;
  readonly review: string;
}

const SECTION: Record<Lang, SectionSegments> = {
  pt: { root: '/cursos', howTo: 'como-criar', glossary: 'glossario', files: 'arquivos', mistakes: 'erros', review: 'revisao' },
  en: { root: '/en/courses', howTo: 'how-i-make-them', glossary: 'glossary', files: 'files', mistakes: 'mistakes', review: 'review' },
  es: { root: '/es/cursos', howTo: 'como-los-creo', glossary: 'glosario', files: 'archivos', mistakes: 'errores', review: 'repaso' },
};

/** The courses landing of a language, without the trailing slash (the form the header links use). */
export const coursesSection = (lang: Lang) => SECTION[lang].root;
export const coursesHome = (lang: Lang) => `${SECTION[lang].root}/`;
export const howToUrl = (lang: Lang) => `${SECTION[lang].root}/${SECTION[lang].howTo}/`;

export const courseUrl = (course: CourseInfo) => `${SECTION[course.lang].root}/${course.slug}/`;
export const courseZipUrl = (course: CourseInfo) => `${SECTION[course.lang].root}/${course.slug}.zip`;
export const glossaryUrl = (course: CourseInfo) => `${courseUrl(course)}${SECTION[course.lang].glossary}/`;
export const courseFilesUrl = (course: CourseInfo) => `${courseUrl(course)}${SECTION[course.lang].files}/`;
/** Modules and lessons of a course, for the client-side progress widget. */
export const courseOutlineUrl = (course: CourseInfo) => `${courseUrl(course)}outline.json`;
/** Questions and glossary terms of a course, for the mistakes notebook and the review. */
export const studyIndexUrl = (course: CourseInfo) => `${courseUrl(course)}study.json`;
export const mistakesUrl = (course: CourseInfo) => `${courseUrl(course)}${SECTION[course.lang].mistakes}/`;
export const reviewUrl = (course: CourseInfo) => `${courseUrl(course)}${SECTION[course.lang].review}/`;
/** Share image of a course, drawn when it is published. */
export const courseOgImage = (course: CourseInfo) => `/og/courses/${course.slug}.png`;
/** The course's own search index (Pagefind), one per course, outside the notes' URLs. */
export const courseSearchUrl = (course: CourseInfo) => `/course-search/${course.slug}/`;

/** The same page in every language, for pages that exist in all three (landing and method). */
export const sectionAlternates = (page: (lang: Lang) => string): Record<Lang, string> =>
  Object.fromEntries(LANGS.map((lang) => [lang, page(lang)])) as Record<Lang, string>;

// The course-making skill is written in Portuguese and served once, from the Portuguese section.
export const SKILL_DOWNLOADS = {
  zip: '/cursos/skill-criar-curso.zip',
  skillMd: '/cursos/skill/SKILL.md',
  guideMd: '/cursos/skill/guia-de-escrita.md',
} as const;
