// The published courses. Each one is an Obsidian vault copied into courses/<slug>/ by
// scripts/sync-courses.mjs; this file only adds what the vault itself does not say, and where the
// courses live on the site. A course is written in one language and is listed only in that
// language's section (/cursos/, /en/courses/, /es/cursos/).
import { languages, type Lang } from '../../i18n/ui';

export interface CourseInfo {
  readonly slug: string;
  /** The language the course is written in. */
  readonly lang: Lang;
  readonly title: string;
  /** One sentence: where the course takes you. */
  readonly goal: string;
  /** Home note, relative to the vault root. */
  readonly home: string;
  /** Folder name inside the downloaded zip (the vault name in Obsidian). */
  readonly vaultName: string;
  /** Whether the vault uses the Obsidian format (frontmatter, wikilinks, glossary with hover). */
  readonly format: 'obsidian' | 'markdown';
  /** For courses that prepare for an exam: how its simulated exams (notes tagged "simulado") run. */
  readonly exam?: ExamRules;
}

export interface ExamRules {
  /** Time allowed per question, in minutes. */
  readonly minutesPerQuestion: number;
  /** Score the course sets as the study target, per domain and overall, in percent. */
  readonly targetPercent: number;
}

export const COURSES: readonly CourseInfo[] = [
  {
    slug: 'aws-saa-c03',
    lang: 'pt',
    title: 'AWS Solutions Architect Associate (SAA-C03)',
    goal: 'Passar na certificação AWS SAA-C03 entendendo o porquê de cada decisão de arquitetura, com dois simulados completos.',
    home: 'SAA-C03/SAA-C03 - Inicio.md',
    vaultName: 'Aprendendo Certificacoes AWS',
    format: 'obsidian',
    // From the instructions of the course's simulated exams: 130 minutes for 65 questions, 72% per domain.
    exam: { minutesPerQuestion: 2, targetPercent: 72 },
  },
  {
    slug: 'primeiros-socorros',
    lang: 'pt',
    title: 'Primeiros Socorros',
    goal: 'Agir em qualquer emergência até o socorro chegar (PHTLS, TCCC, TECC) e saber examinar, medir e raciocinar só com um kit e as mãos.',
    home: 'Primeiros Socorros - Inicio.md',
    vaultName: 'Aprendendo Primeiros Socorros',
    format: 'obsidian',
  },
  {
    slug: 'radio',
    lang: 'pt',
    title: 'Rádio, LoRa e Redes Mesh',
    goal: 'Entender rádio, RF, LoRa, mesh e Reticulum para montar uma rede de comunicação privada própria.',
    home: 'README.md',
    vaultName: 'Aprendendo Radio',
    format: 'markdown',
  },
  {
    slug: 'modelagem-de-casas',
    lang: 'pt',
    title: 'Modelagem de Casas',
    goal: 'Entender os princípios de projeto residencial e dominar Sweet Home 3D, SketchUp, BIM e Blender para modelar a sua própria casa.',
    home: 'README.md',
    vaultName: 'Aprendendo Modelagem de Casas',
    format: 'markdown',
  },
];

export const LANGS = Object.keys(languages) as Lang[];

export function courseBySlug(slug: string): CourseInfo {
  const course = COURSES.find((c) => c.slug === slug);
  if (!course) throw new Error(`Unknown course: ${slug}`);
  return course;
}

export const coursesIn = (lang: Lang): readonly CourseInfo[] => COURSES.filter((c) => c.lang === lang);

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

/** The same page in every language, for pages that exist in all three (landing and method). */
export const sectionAlternates = (page: (lang: Lang) => string): Record<Lang, string> =>
  Object.fromEntries(LANGS.map((lang) => [lang, page(lang)])) as Record<Lang, string>;

// The course-making skill is written in Portuguese and served once, from the Portuguese section.
export const SKILL_DOWNLOADS = {
  zip: '/cursos/skill-criar-curso.zip',
  skillMd: '/cursos/skill/SKILL.md',
  guideMd: '/cursos/skill/guia-de-escrita.md',
} as const;
