// Text of the keyboard shortcuts window of the course pages (components/courses/ShortcutsDialog.astro).
// The keys listed here are the ones handled in lib/courses/client: search.ts, review.ts,
// linkPreview.ts and shortcuts.ts. Change both together.
import type { Lang } from '../../i18n/ui';

/** "Mod" is Ctrl, shown as ⌘ on Apple devices (client/shortcuts.ts). */
export type Key = 'Mod' | 'K' | '/' | '?' | 'Esc' | 'Enter' | 'Space' | '↑' | '↓' | '1' | '2' | '3' | '4';

export interface Shortcut {
  readonly label: string;
  /** Alternatives: each entry is one key combination, pressed together. */
  readonly combos: readonly (readonly Key[])[];
}

export interface ShortcutGroup {
  readonly title: string;
  readonly items: readonly Shortcut[];
}

export interface ShortcutsText {
  readonly open: string;
  readonly title: string;
  readonly close: string;
  readonly or: string;
  readonly keyNames: Readonly<Record<'Space', string>>;
  readonly groups: readonly ShortcutGroup[];
}

const TEXT: Record<Lang, ShortcutsText> = {
  pt: {
    open: 'Atalhos',
    title: 'Atalhos do teclado',
    close: 'Fechar',
    or: 'ou',
    keyNames: { Space: 'Espaço' },
    groups: [
      {
        title: 'Em qualquer página do curso',
        items: [
          { label: 'Buscar no curso', combos: [['Mod', 'K'], ['/']] },
          { label: 'Ver os atalhos', combos: [['?']] },
          { label: 'Fechar uma janela ou a prévia de um link', combos: [['Esc']] },
        ],
      },
      {
        title: 'Na busca',
        items: [
          { label: 'Andar pelos resultados', combos: [['↑'], ['↓']] },
          { label: 'Abrir o resultado marcado', combos: [['Enter']] },
        ],
      },
      {
        title: 'Na revisão',
        items: [
          { label: 'Mostrar a resposta', combos: [['Space'], ['Enter']] },
          { label: 'Errei, Difícil, Bom ou Fácil', combos: [['1'], ['2'], ['3'], ['4']] },
        ],
      },
    ],
  },
  en: {
    open: 'Shortcuts',
    title: 'Keyboard shortcuts',
    close: 'Close',
    or: 'or',
    keyNames: { Space: 'Space' },
    groups: [
      {
        title: 'On any course page',
        items: [
          { label: 'Search the course', combos: [['Mod', 'K'], ['/']] },
          { label: 'Show the shortcuts', combos: [['?']] },
          { label: 'Close a window or a link preview', combos: [['Esc']] },
        ],
      },
      {
        title: 'In search',
        items: [
          { label: 'Move through the results', combos: [['↑'], ['↓']] },
          { label: 'Open the highlighted result', combos: [['Enter']] },
        ],
      },
      {
        title: 'In review',
        items: [
          { label: 'Show the answer', combos: [['Space'], ['Enter']] },
          { label: 'Again, Hard, Good or Easy', combos: [['1'], ['2'], ['3'], ['4']] },
        ],
      },
    ],
  },
  es: {
    open: 'Atajos',
    title: 'Atajos de teclado',
    close: 'Cerrar',
    or: 'o',
    keyNames: { Space: 'Espacio' },
    groups: [
      {
        title: 'En cualquier página del curso',
        items: [
          { label: 'Buscar en el curso', combos: [['Mod', 'K'], ['/']] },
          { label: 'Ver los atajos', combos: [['?']] },
          { label: 'Cerrar una ventana o la vista previa de un enlace', combos: [['Esc']] },
        ],
      },
      {
        title: 'En la búsqueda',
        items: [
          { label: 'Moverse por los resultados', combos: [['↑'], ['↓']] },
          { label: 'Abrir el resultado marcado', combos: [['Enter']] },
        ],
      },
      {
        title: 'En el repaso',
        items: [
          { label: 'Mostrar la respuesta', combos: [['Space'], ['Enter']] },
          { label: 'Fallé, Difícil, Bien o Fácil', combos: [['1'], ['2'], ['3'], ['4']] },
        ],
      },
    ],
  },
};

export const shortcutsText = (lang: Lang): ShortcutsText => TEXT[lang];
