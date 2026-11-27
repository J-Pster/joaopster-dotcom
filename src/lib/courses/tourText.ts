// Text of the course tour (components/courses/CourseTour.astro, lib/courses/client/tour.ts): the guided
// walk through the reader shown on a reader's first course page, and again from the shortcuts window.
import type { Lang } from '../../i18n/ui';

/** The parts of the reader the tour points at, in the order it visits them. */
export type TourStepId =
  | 'welcome'
  | 'nav'
  | 'glossary'
  | 'mistakes'
  | 'review'
  | 'search'
  | 'listen'
  | 'tools'
  | 'highlights'
  | 'assistant'
  | 'sync'
  | 'read'
  | 'shortcuts'
  | 'done';

export interface TourStepText {
  readonly title: string;
  readonly text: string;
}

export interface TourText {
  readonly next: string;
  readonly back: string;
  readonly skip: string;
  readonly finish: string;
  readonly restart: string;
  readonly steps: Readonly<Record<TourStepId, TourStepText>>;
}

const TEXT: Record<Lang, TourText> = {
  pt: {
    next: 'Próximo',
    back: 'Voltar',
    skip: 'Pular tutorial',
    finish: 'Começar a estudar',
    restart: 'Rever o tutorial',
    steps: {
      welcome: { title: 'Bem-vindo', text: 'Vou te mostrar rapidinho o que dá pra fazer aqui. Se preferir, pode pular.' },
      nav: { title: 'Módulos e aulas', text: 'O curso inteiro fica aqui, módulo por módulo.' },
      glossary: { title: 'Glossário', text: 'Passa o mouse num termo sublinhado pra ver o que ele significa.' },
      mistakes: { title: 'Caderno de erros', text: 'Toda questão que você errar nos questionários vem pra cá.' },
      review: { title: 'Revisão espaçada', text: 'O que você estudou volta pra revisão antes de você esquecer.' },
      search: { title: 'Busca', text: 'Acha qualquer aula ou termo do curso, ou aperta Ctrl K.' },
      listen: { title: 'Ouvir a aula', text: 'Ouve a aula em voz alta.' },
      tools: { title: 'Leitura', text: 'Muda o tamanho do texto ou liga o modo foco.' },
      highlights: { title: 'Destaques', text: 'Seleciona um trecho da aula e toca em Destacar.' },
      assistant: { title: 'Assistente de IA', text: 'Pergunta qualquer coisa sobre a aula aberta.' },
      sync: { title: 'Progresso', text: 'Gera um código aqui pra continuar no celular ou em outro computador.' },
      read: { title: 'Marcar como lida', text: 'Terminou a aula? Marca aqui ou aperta M.' },
      shortcuts: { title: 'Atalhos', text: 'Aperta ? pra ver todos os atalhos e rever este tutorial.' },
      done: { title: 'Pronto', text: 'Bons estudos!' },
    },
  },
  en: {
    next: 'Next',
    back: 'Back',
    skip: 'Skip the tour',
    finish: 'Start studying',
    restart: 'Replay the tour',
    steps: {
      welcome: { title: 'Welcome', text: 'A quick look at what you can do here. Feel free to skip it.' },
      nav: { title: 'Modules and lessons', text: 'The whole course lives here, module by module.' },
      glossary: { title: 'Glossary', text: 'Hover over an underlined term to see what it means.' },
      mistakes: { title: 'Mistakes notebook', text: 'Every quiz question you get wrong ends up here.' },
      review: { title: 'Spaced review', text: 'What you studied comes back for review before you forget it.' },
      search: { title: 'Search', text: 'Find any lesson or term in the course, or press Ctrl K.' },
      listen: { title: 'Listen', text: 'Have the lesson read aloud.' },
      tools: { title: 'Reading', text: 'Change the text size or turn on focus mode.' },
      highlights: { title: 'Highlights', text: 'Select a passage of the lesson and tap Highlight.' },
      assistant: { title: 'AI assistant', text: 'Ask anything about the open lesson.' },
      sync: { title: 'Progress', text: 'Create a code here to keep going on your phone or another computer.' },
      read: { title: 'Mark as read', text: 'Done with the lesson? Mark it here or press M.' },
      shortcuts: { title: 'Shortcuts', text: 'Press ? to see every shortcut and replay this tour.' },
      done: { title: 'All set', text: 'Happy studying!' },
    },
  },
  es: {
    next: 'Siguiente',
    back: 'Atrás',
    skip: 'Saltar el tutorial',
    finish: 'Empezar a estudiar',
    restart: 'Ver el tutorial de nuevo',
    steps: {
      welcome: { title: 'Bienvenido', text: 'Te muestro rapidito lo que puedes hacer aquí. Si prefieres, sáltalo.' },
      nav: { title: 'Módulos y clases', text: 'Todo el curso está aquí, módulo por módulo.' },
      glossary: { title: 'Glosario', text: 'Pasa el mouse sobre un término subrayado para ver qué significa.' },
      mistakes: { title: 'Cuaderno de errores', text: 'Cada pregunta que falles en los cuestionarios llega aquí.' },
      review: { title: 'Repaso espaciado', text: 'Lo que estudiaste vuelve al repaso antes de que lo olvides.' },
      search: { title: 'Búsqueda', text: 'Encuentra cualquier clase o término del curso, o pulsa Ctrl K.' },
      listen: { title: 'Escuchar la clase', text: 'Escucha la clase en voz alta.' },
      tools: { title: 'Lectura', text: 'Cambia el tamaño del texto o activa el modo foco.' },
      highlights: { title: 'Resaltados', text: 'Selecciona un fragmento de la clase y toca Resaltar.' },
      assistant: { title: 'Asistente de IA', text: 'Pregunta lo que quieras sobre la clase abierta.' },
      sync: { title: 'Progreso', text: 'Genera un código aquí para seguir en el celular o en otra computadora.' },
      read: { title: 'Marcar como leída', text: '¿Terminaste la clase? Márcala aquí o pulsa M.' },
      shortcuts: { title: 'Atajos', text: 'Pulsa ? para ver todos los atajos y volver a ver este tutorial.' },
      done: { title: 'Todo listo', text: '¡Buen estudio!' },
    },
  },
};

export const tourText = (lang: Lang): TourText => TEXT[lang];
