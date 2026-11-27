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
      welcome: {
        title: 'Bem-vindo ao curso',
        text: 'Em um minuto eu te mostro tudo o que esta página faz por você: navegação, glossário, caderno de erros, revisão, atalhos e o assistente de IA. Se preferir, pule e explore sozinho.',
      },
      nav: {
        title: 'Módulos e aulas',
        text: 'Todo o curso fica aqui, módulo por módulo. O número ao lado de cada módulo mostra quantas aulas você já leu.',
      },
      glossary: {
        title: 'Glossário',
        text: 'Termos sublinhados levam ao glossário. Passe o mouse sobre um deles para ver a definição sem sair da aula. A lista completa de termos fica no menu do curso.',
      },
      mistakes: {
        title: 'Caderno de erros',
        text: 'Toda questão que você errar nos questionários vem para cá, pronta para refazer. Quando você acerta, ela sai do caderno.',
      },
      review: {
        title: 'Revisão espaçada',
        text: 'Cartões com os termos das aulas que você leu e as questões que errou. Cada cartão volta no dia em que você estaria perto de esquecer.',
      },
      search: {
        title: 'Busca',
        text: 'Encontre qualquer aula ou termo do curso. Atalho: Ctrl K ou a tecla /.',
      },
      listen: {
        title: 'Ouvir a aula',
        text: 'A aula é lida em voz alta, trecho por trecho. A voz do navegador é grátis, e você também pode escolher outra.',
      },
      tools: {
        title: 'Conforto de leitura',
        text: 'Aumente ou diminua o texto e ligue o modo foco (tecla F), que esconde tudo menos a aula.',
      },
      highlights: {
        title: 'Destaques',
        text: 'Selecione um trecho da aula e toque em Destacar para marcar o que importa. Os destaques ficam salvos com o seu progresso.',
      },
      assistant: {
        title: 'Assistente de IA',
        text: 'Pergunte sobre a nota aberta: o assistente lê a aula e responde com base nela. Selecione um trecho e use "Adicionar ao chat" para perguntar sobre ele.',
      },
      sync: {
        title: 'Seu progresso em qualquer lugar',
        text: 'O progresso fica salvo neste navegador, sem conta. Gere um código aqui para continuar de onde parou no celular ou em outro computador.',
      },
      read: {
        title: 'Marcar como lida',
        text: 'Ao terminar uma aula, marque aqui (ou tecle M). É isso que move o seu progresso e coloca os termos da aula na revisão.',
      },
      shortcuts: {
        title: 'Atalhos',
        text: 'Tecle ? a qualquer momento para ver todos os atalhos. É lá também que você revê este tutorial.',
      },
      done: {
        title: 'Tudo pronto',
        text: 'Agora é com você. Bons estudos!',
      },
    },
  },
  en: {
    next: 'Next',
    back: 'Back',
    skip: 'Skip the tour',
    finish: 'Start studying',
    restart: 'Replay the tour',
    steps: {
      welcome: {
        title: 'Welcome to the course',
        text: 'In one minute I will show you everything this page does for you: navigation, glossary, mistakes notebook, review, shortcuts and the AI assistant. If you prefer, skip it and explore on your own.',
      },
      nav: {
        title: 'Modules and lessons',
        text: 'The whole course lives here, module by module. The number next to each module shows how many lessons you have read.',
      },
      glossary: {
        title: 'Glossary',
        text: 'Underlined terms lead to the glossary. Hover over one to see its definition without leaving the lesson. The full list of terms is in the course menu.',
      },
      mistakes: {
        title: 'Mistakes notebook',
        text: 'Every quiz question you get wrong comes here, ready to try again. Once you get it right, it leaves the notebook.',
      },
      review: {
        title: 'Spaced review',
        text: 'Cards with the terms of the lessons you read and the questions you missed. Each card comes back on the day you would be about to forget it.',
      },
      search: {
        title: 'Search',
        text: 'Find any lesson or term in the course. Shortcut: Ctrl K or the / key.',
      },
      listen: {
        title: 'Listen to the lesson',
        text: 'The lesson is read aloud, passage by passage. The browser voice is free, and you can also pick another one.',
      },
      tools: {
        title: 'Reading comfort',
        text: 'Make the text bigger or smaller and turn on focus mode (F key), which hides everything but the lesson.',
      },
      highlights: {
        title: 'Highlights',
        text: 'Select a passage of the lesson and tap Highlight to mark what matters. Highlights are saved with your progress.',
      },
      assistant: {
        title: 'AI assistant',
        text: 'Ask about the open note: the assistant reads the lesson and answers from it. Select a passage and use "Add to chat" to ask about it.',
      },
      sync: {
        title: 'Your progress anywhere',
        text: 'Progress is saved in this browser, with no account. Create a code here to pick up where you left off on your phone or another computer.',
      },
      read: {
        title: 'Mark as read',
        text: 'When you finish a lesson, mark it here (or press M). That is what moves your progress and puts the lesson terms into review.',
      },
      shortcuts: {
        title: 'Shortcuts',
        text: 'Press ? at any time to see every shortcut. That is also where you can replay this tour.',
      },
      done: {
        title: 'All set',
        text: 'Over to you. Happy studying!',
      },
    },
  },
  es: {
    next: 'Siguiente',
    back: 'Atrás',
    skip: 'Saltar el tutorial',
    finish: 'Empezar a estudiar',
    restart: 'Ver el tutorial de nuevo',
    steps: {
      welcome: {
        title: 'Bienvenido al curso',
        text: 'En un minuto te muestro todo lo que esta página hace por ti: navegación, glosario, cuaderno de errores, repaso, atajos y el asistente de IA. Si prefieres, sáltalo y explora por tu cuenta.',
      },
      nav: {
        title: 'Módulos y clases',
        text: 'Todo el curso está aquí, módulo por módulo. El número junto a cada módulo muestra cuántas clases ya leíste.',
      },
      glossary: {
        title: 'Glosario',
        text: 'Los términos subrayados llevan al glosario. Pasa el mouse sobre uno para ver la definición sin salir de la clase. La lista completa de términos está en el menú del curso.',
      },
      mistakes: {
        title: 'Cuaderno de errores',
        text: 'Cada pregunta que falles en los cuestionarios llega aquí, lista para rehacer. Cuando aciertas, sale del cuaderno.',
      },
      review: {
        title: 'Repaso espaciado',
        text: 'Tarjetas con los términos de las clases que leíste y las preguntas que fallaste. Cada tarjeta vuelve el día en que estarías por olvidarla.',
      },
      search: {
        title: 'Búsqueda',
        text: 'Encuentra cualquier clase o término del curso. Atajo: Ctrl K o la tecla /.',
      },
      listen: {
        title: 'Escuchar la clase',
        text: 'La clase se lee en voz alta, fragmento por fragmento. La voz del navegador es gratis, y también puedes elegir otra.',
      },
      tools: {
        title: 'Comodidad de lectura',
        text: 'Agranda o achica el texto y activa el modo foco (tecla F), que oculta todo menos la clase.',
      },
      highlights: {
        title: 'Resaltados',
        text: 'Selecciona un fragmento de la clase y toca Resaltar para marcar lo importante. Los resaltados se guardan con tu progreso.',
      },
      assistant: {
        title: 'Asistente de IA',
        text: 'Pregunta sobre la nota abierta: el asistente lee la clase y responde con base en ella. Selecciona un fragmento y usa "Agregar al chat" para preguntar sobre él.',
      },
      sync: {
        title: 'Tu progreso en cualquier lugar',
        text: 'El progreso se guarda en este navegador, sin cuenta. Genera un código aquí para seguir donde lo dejaste en el celular o en otra computadora.',
      },
      read: {
        title: 'Marcar como leída',
        text: 'Al terminar una clase, márcala aquí (o pulsa M). Eso es lo que mueve tu progreso y pone los términos de la clase en el repaso.',
      },
      shortcuts: {
        title: 'Atajos',
        text: 'Pulsa ? en cualquier momento para ver todos los atajos. Ahí también puedes volver a ver este tutorial.',
      },
      done: {
        title: 'Todo listo',
        text: 'Ahora es tu turno. ¡Buen estudio!',
      },
    },
  },
};

export const tourText = (lang: Lang): TourText => TEXT[lang];
