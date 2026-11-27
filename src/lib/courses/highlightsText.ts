// Interface text of the note highlights, in each site language.
import type { Lang } from '../../i18n/ui';

export interface HighlightsText {
  readonly highlight: string;
  readonly remove: string;
  /** Shown when the progress is too big to hold one more highlight. */
  readonly limitReached: string;
  readonly tooLong: (max: number) => string;
  readonly tooMany: (max: number) => string;
}

const pt: HighlightsText = {
  highlight: 'Destacar',
  remove: 'Remover destaque',
  limitReached: 'Limite de destaques atingido: o progresso salvo está cheio. Remova destaques antigos para criar novos.',
  tooLong: (max) => `Trecho longo demais para destacar (máximo de ${max} caracteres).`,
  tooMany: (max) => `Esta nota já tem ${max} destaques. Remova algum para criar outro.`,
};

const en: HighlightsText = {
  highlight: 'Highlight',
  remove: 'Remove highlight',
  limitReached: 'Highlight limit reached: the saved progress is full. Remove old highlights to add new ones.',
  tooLong: (max) => `That passage is too long to highlight (up to ${max} characters).`,
  tooMany: (max) => `This note already has ${max} highlights. Remove one to add another.`,
};

const es: HighlightsText = {
  highlight: 'Resaltar',
  remove: 'Quitar resaltado',
  limitReached: 'Límite de resaltados alcanzado: el progreso guardado está lleno. Quita resaltados antiguos para crear nuevos.',
  tooLong: (max) => `El fragmento es demasiado largo para resaltar (máximo ${max} caracteres).`,
  tooMany: (max) => `Esta nota ya tiene ${max} resaltados. Quita alguno para crear otro.`,
};

const TEXT: Record<Lang, HighlightsText> = { pt, en, es };

export const highlightsText = (lang: Lang): HighlightsText => TEXT[lang];
