// The published courses. Each one is an Obsidian vault copied into courses/<slug>/ by
// scripts/sync-courses.mjs; this file only adds what the vault itself does not say, and where the
// courses live on the site. A course is written in one language and is listed only in that
// language's section (/cursos/, /en/courses/, /es/cursos/).
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

export const COURSES: readonly CourseInfo[] = [
  {
    slug: 'aws-saa-c03',
    lang: 'pt',
    title: 'AWS Solutions Architect Associate (SAA-C03)',
    goal: 'Passar na certificação AWS SAA-C03 entendendo o porquê de cada decisão de arquitetura, com dois simulados completos.',
    topic: 'technology',
    home: 'SAA-C03/SAA-C03 - Inicio.md',
    vaultName: 'Aprendendo Certificacoes AWS',
    format: 'obsidian',
    // From the instructions of the course's simulated exams: 130 minutes for 65 questions, 72% per domain.
    exam: { minutesPerQuestion: 2, targetPercent: 72 },
    audience: 'Quem vai fazer a prova AWS SAA-C03 e quer entender o porquê de cada decisão de arquitetura, não decorar serviços.',
    level: 'intermediate',
    prerequisites: ['Noções básicas de desenvolvimento de software ou de infraestrutura de TI', 'Conta AWS pessoal, só para os laboratórios opcionais'],
    objectives: [
      'Escolher Região e zonas de disponibilidade por resiliência, latência e residência de dados',
      'Projetar arquiteturas seguras com IAM, VPC e criptografia',
      'Dimensionar computação, armazenamento e bancos de dados para cada tipo de carga',
      'Desenhar arquiteturas resilientes e desacopladas, com alta disponibilidade e recuperação de desastres',
      'Resolver questões no estilo da prova nos quatro domínios, com dois simulados completos',
    ],
    standing: 'flagship',
    indexing: 'index',
    look: { glyph: 'cloud', accent: '#ff9900', wash: '#ffe2bf' },
  },
  {
    slug: 'primeiros-socorros',
    lang: 'pt',
    title: 'Primeiros Socorros',
    goal: 'Agir em qualquer emergência até o socorro chegar (PHTLS, TCCC, TECC) e saber examinar, medir e raciocinar só com um kit e as mãos.',
    topic: 'health',
    home: 'Primeiros Socorros - Inicio.md',
    vaultName: 'Aprendendo Primeiros Socorros',
    format: 'obsidian',
    audience: 'Pessoas leigas que querem saber agir numa emergência até o socorro chegar e examinar uma pessoa com um kit básico.',
    level: 'beginner',
    prerequisites: [],
    objectives: [
      'Aplicar a sequência XABCDE para avaliar uma vítima de trauma',
      'Conter uma hemorragia grave com torniquete',
      'Executar a RCP e usar o DEA',
      'Medir pressão, saturação, temperatura e glicemia com o kit',
      'Decidir entre esperar, pronto atendimento e SAMU a partir do exame',
    ],
    standing: 'study-notes',
    indexing: 'noindex',
    look: { glyph: 'cross', accent: '#ff5c61', wash: '#ffd9d9' },
  },
  {
    slug: 'radio',
    lang: 'pt',
    title: 'Rádio, LoRa e Redes Mesh',
    goal: 'Entender rádio, RF, LoRa, mesh e Reticulum para montar uma rede de comunicação privada própria.',
    topic: 'technology',
    home: 'README.md',
    vaultName: 'Aprendendo Radio',
    format: 'markdown',
    audience: 'Quem quer montar uma rede de comunicação privada própria e prefere entender a física e a lógica antes da prática.',
    level: 'beginner',
    prerequisites: ['Matemática de ensino médio (potências e logaritmos, usados nos decibéis)', 'Para o projeto final: noções de Linux e um Raspberry Pi'],
    objectives: [
      'Explicar como uma onda leva informação: frequência, modulação e propagação',
      'Calcular a perda de um enlace e o alcance em decibéis',
      'Distinguir LoRa, LoRaWAN e redes mesh como o Meshtastic',
      'Comparar o Reticulum com a pilha de rede convencional',
      'Planejar a rede respeitando o regime legal da Anatel',
    ],
    standing: 'study-notes',
    indexing: 'index',
    look: { glyph: 'radio', accent: '#3ccf8e', wash: '#cdf2de' },
  },
  {
    slug: 'modelagem-de-casas',
    lang: 'pt',
    title: 'Modelagem de Casas',
    goal: 'Entender os princípios de projeto residencial e dominar Sweet Home 3D, SketchUp, BIM e Blender para modelar a sua própria casa.',
    topic: 'home',
    home: 'README.md',
    vaultName: 'Aprendendo Modelagem de Casas',
    format: 'markdown',
    audience: 'Quem quer entender o projeto residencial e modelar a própria casa, como hobby.',
    level: 'beginner',
    prerequisites: [],
    objectives: [
      'Organizar o programa de necessidades e a setorização de uma casa',
      'Posicionar a casa no terreno considerando sol, ventilação e legislação',
      'Ler plantas, cortes e fachadas de um desenho técnico',
      'Modelar uma casa em 3D no Sweet Home 3D, SketchUp, BIM ou Blender',
      'Montar o dossiê do projeto para validar com um arquiteto ou engenheiro',
    ],
    standing: 'study-notes',
    indexing: 'index',
    look: { glyph: 'house', accent: '#b98cff', wash: '#e6dcff' },
  },
];

const flagships = COURSES.filter((c) => c.standing === 'flagship');
if (flagships.length > 1) throw new Error(`Only one course can be the flagship, found ${flagships.length}`);

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
