// The courses to publish. Each one is an Obsidian vault copied into courses/<slug>/ by
// `npm run courses:sync`; this list adds what the vault itself does not say. `npm run courses:publish`
// reads it and uploads each course to R2, where the site reads it: adding or changing a course here
// needs a publish, not a site deploy.
import type { CourseInfo } from '../src/lib/courses/catalog';

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

/** The course with this slug: a slug not in the list is a typo on the command line. */
export function courseBySlug(slug: string): CourseInfo {
  const course = COURSES.find((c) => c.slug === slug);
  if (!course) throw new Error(`Unknown course: ${slug}`);
  return course;
}
