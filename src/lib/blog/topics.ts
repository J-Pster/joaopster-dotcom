// The blog's topics: a closed set. Posts list topic ids in their frontmatter (`tags`), the content schema
// rejects any other value, and every page shows the label of its own language. Each topic has a color for
// the dot and light tint on the blog's filters and tags; the label always sits next to it, so color is
// never the only cue. A new topic is added here, once it has posts to justify it.
import type { Lang } from '../../i18n/ui';

interface Topic {
  readonly label: Readonly<Record<Lang, string>>;
  /** Dot color; the chip tint is mixed from it in CSS. Neutral topics (formats, off-topic) are gray. */
  readonly color: string;
}

export const TOPICS = {
  ai: { label: { pt: 'IA', en: 'AI', es: 'IA' }, color: '#2563eb' },
  'claude-code': { label: { pt: 'Claude Code', en: 'Claude Code', es: 'Claude Code' }, color: '#c2410c' },
  programming: { label: { pt: 'Programação', en: 'Programming', es: 'Programación' }, color: '#7c3aed' },
  'infra-cloud': { label: { pt: 'Infra e cloud', en: 'Infra and cloud', es: 'Infra y cloud' }, color: '#0e7490' },
  setup: { label: { pt: 'Setup', en: 'Setup', es: 'Setup' }, color: '#a16207' },
  workflow: { label: { pt: 'Workflow', en: 'Workflow', es: 'Flujo de trabajo' }, color: '#c026d3' },
  career: { label: { pt: 'Carreira', en: 'Career', es: 'Carrera' }, color: '#db2777' },
  investments: { label: { pt: 'Investimentos', en: 'Investing', es: 'Inversiones' }, color: '#15803d' },
  courses: { label: { pt: 'Cursos', en: 'Courses', es: 'Cursos' }, color: '#4d7c0f' },
  opinion: { label: { pt: 'Minha opinião', en: 'My opinion', es: 'Mi opinión' }, color: '#171717' },
  'off-topic': { label: { pt: 'Baguncinha', en: 'Off-topic', es: 'Fuera de tema' }, color: '#8b8d93' },
} as const satisfies Record<string, Topic>;

export type TopicId = keyof typeof TOPICS;
export const TOPIC_IDS = Object.keys(TOPICS) as [TopicId, ...TopicId[]];

export const topicLabel = (id: TopicId, lang: Lang): string => TOPICS[id].label[lang];
export const topicColor = (id: TopicId): string => TOPICS[id].color;

/** Chip background: the topic's color at 9% over white, as a hex (CSS and the share images use it alike). */
export function topicTint(id: TopicId): string {
  const hex = TOPICS[id].color;
  const channel = (offset: number) => {
    const value = parseInt(hex.slice(offset, offset + 2), 16);
    return Math.round(255 - (255 - value) * 0.09)
      .toString(16)
      .padStart(2, '0');
  };
  return `#${channel(1)}${channel(3)}${channel(5)}`;
}
