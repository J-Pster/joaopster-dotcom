// Interface text of the reading aids (reading time, lesson keys, text size, focus mode, print), in
// each site language. Kept apart from i18n.ts so each feature owns its labels.
import type { Lang } from '../../i18n/ui';

export interface ReaderText {
  /** "7 min", "1 h 20 min". */
  readonly duration: (minutes: number) => string;
  readonly readingTime: (duration: string) => string;
  /** What is left after this lesson's reading time; each duration is "" when nothing is left there. */
  readonly lessonLeft: (module: string, course: string) => string;
  readonly courseLeft: (duration: string) => string;
  readonly markedRead: string;
  readonly markedUnread: string;

  readonly toolsOpen: string;
  readonly textSize: string;
  readonly smaller: string;
  readonly larger: string;
  readonly focus: string;
  readonly focusHint: string;
  readonly exitFocus: string;
  readonly print: string;
}

function duration(minutes: number): string {
  if (minutes < 60) return `${minutes} min`;
  // Past ten hours the minutes are noise: an estimate this long is only right to the hour.
  if (minutes >= 600) return `${Math.round(minutes / 60)} h`;
  const hours = Math.floor(minutes / 60);
  const rest = minutes % 60;
  return rest === 0 ? `${hours} h` : `${hours} h ${rest} min`;
}

const TEXT: Record<Lang, ReaderText> = {
  pt: {
    duration,
    readingTime: (d) => `${d} de leitura`,
    lessonLeft: (module, course) => {
      if (!course) return 'curso concluído';
      if (!module) return `módulo concluído, faltam ${course} no curso`;
      return `faltam ${module} no módulo e ${course} no curso`;
    },
    courseLeft: (d) => `Faltam cerca de ${d} de leitura`,
    markedRead: 'Aula marcada como lida',
    markedUnread: 'Aula marcada como não lida',
    toolsOpen: 'Ajustes de leitura',
    textSize: 'Tamanho do texto',
    smaller: 'Diminuir o texto',
    larger: 'Aumentar o texto',
    focus: 'Modo foco',
    focusHint: 'Esconde menus e painéis',
    exitFocus: 'Sair do modo foco',
    print: 'Imprimir',
  },
  en: {
    duration,
    readingTime: (d) => `${d} read`,
    lessonLeft: (module, course) => {
      if (!course) return 'course done';
      if (!module) return `module done, ${course} left in the course`;
      return `${module} left in this module, ${course} in the course`;
    },
    courseLeft: (d) => `About ${d} of reading left`,
    markedRead: 'Lesson marked as read',
    markedUnread: 'Lesson marked as not read',
    toolsOpen: 'Reading settings',
    textSize: 'Text size',
    smaller: 'Smaller text',
    larger: 'Larger text',
    focus: 'Focus mode',
    focusHint: 'Hides menus and panels',
    exitFocus: 'Exit focus mode',
    print: 'Print',
  },
  es: {
    duration,
    readingTime: (d) => `${d} de lectura`,
    lessonLeft: (module, course) => {
      if (!course) return 'curso terminado';
      if (!module) return `módulo terminado, faltan ${course} en el curso`;
      return `faltan ${module} en el módulo y ${course} en el curso`;
    },
    courseLeft: (d) => `Quedan unos ${d} de lectura`,
    markedRead: 'Clase marcada como leída',
    markedUnread: 'Clase marcada como no leída',
    toolsOpen: 'Ajustes de lectura',
    textSize: 'Tamaño del texto',
    smaller: 'Reducir el texto',
    larger: 'Agrandar el texto',
    focus: 'Modo enfoque',
    focusHint: 'Oculta menús y paneles',
    exitFocus: 'Salir del modo enfoque',
    print: 'Imprimir',
  },
};

export const readerText = (lang: Lang): ReaderText => TEXT[lang];
