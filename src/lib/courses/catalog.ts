// The published courses. Each one is an Obsidian vault copied into courses/<slug>/ by
// scripts/sync-courses.mjs; this file only adds what the vault itself does not say.

export interface CourseInfo {
  readonly slug: string;
  readonly title: string;
  /** One sentence: where the course takes you. */
  readonly goal: string;
  /** Home note, relative to the vault root. */
  readonly home: string;
  /** Folder name inside the downloaded zip (the vault name in Obsidian). */
  readonly vaultName: string;
  /** Whether the vault uses the Obsidian format (frontmatter, wikilinks, glossary with hover). */
  readonly format: 'obsidian' | 'markdown';
}

export const COURSES: readonly CourseInfo[] = [
  {
    slug: 'aws-saa-c03',
    title: 'AWS Solutions Architect Associate (SAA-C03)',
    goal: 'Passar na certificação AWS SAA-C03 entendendo o porquê de cada decisão de arquitetura, com dois simulados completos.',
    home: 'SAA-C03/SAA-C03 - Inicio.md',
    vaultName: 'Aprendendo Certificacoes AWS',
    format: 'obsidian',
  },
  {
    slug: 'primeiros-socorros',
    title: 'Primeiros Socorros',
    goal: 'Agir em qualquer emergência até o socorro chegar (PHTLS, TCCC, TECC) e saber examinar, medir e raciocinar só com um kit e as mãos.',
    home: 'Primeiros Socorros - Inicio.md',
    vaultName: 'Aprendendo Primeiros Socorros',
    format: 'obsidian',
  },
  {
    slug: 'radio',
    title: 'Rádio, LoRa e Redes Mesh',
    goal: 'Entender rádio, RF, LoRa, mesh e Reticulum para montar uma rede de comunicação privada própria.',
    home: 'README.md',
    vaultName: 'Aprendendo Radio',
    format: 'markdown',
  },
  {
    slug: 'modelagem-de-casas',
    title: 'Modelagem de Casas',
    goal: 'Entender os princípios de projeto residencial e dominar Sweet Home 3D, SketchUp, BIM e Blender para modelar a sua própria casa.',
    home: 'README.md',
    vaultName: 'Aprendendo Modelagem de Casas',
    format: 'markdown',
  },
];

export function courseBySlug(slug: string): CourseInfo {
  const course = COURSES.find((c) => c.slug === slug);
  if (!course) throw new Error(`Unknown course: ${slug}`);
  return course;
}

export const COURSES_ROOT = '/cursos';
export const courseUrl = (slug: string) => `${COURSES_ROOT}/${slug}/`;
export const courseZipUrl = (slug: string) => `${COURSES_ROOT}/${slug}.zip`;
