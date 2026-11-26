// Interface text of the courses section, in each site language. Course content is never
// translated: a course is written in one language and shown only in that language's section.
// Imported by the client scripts too, so it holds only short labels.
import type { Lang } from '../../i18n/ui';

export interface CourseText {
  /** BCP 47 tag for sorting and number formatting. */
  readonly locale: string;
  /** Language names, as written in this language. */
  readonly languageNames: Readonly<Record<Lang, string>>;

  // Landing
  readonly landingMetaTitle: string;
  readonly landingMetaDescription: string;
  readonly section: string;
  readonly heroTitle: string;
  readonly seeCourses: string;
  readonly howToLink: string;
  readonly published: string;
  readonly searchLabel: string;
  readonly searchPlaceholder: string;
  readonly searchEmpty: string;
  readonly noCourses: string;
  readonly otherLanguagesIntro: string;
  readonly coursesInLanguage: (language: string, count: number) => string;
  readonly cardStats: (modules: number, lessons: number, terms: number) => string;
  readonly start: string;
  readonly continue: string;
  readonly downloadZip: string;
  readonly lessonsDone: (done: number, total: number) => string;
  readonly ctaTitle: string;
  readonly ctaText: string;

  // Reader
  readonly youAreHere: string;
  readonly module: (number: number) => string;
  readonly glossary: string;
  readonly onThisNote: string;
  readonly courseHomeTitle: (course: string) => string;
  readonly noteDescription: (note: string, course: string) => string;
  readonly navToggle: string;
  readonly lessonsReadOf: (total: number) => string;
  readonly glossaryTerms: (count: number) => string;
  readonly hideNav: string;
  readonly showNav: string;
  readonly hideToc: string;
  readonly showToc: string;
  readonly markRead: string;
  readonly lessonRead: string;
  readonly lessons: string;
  readonly previousLesson: string;
  readonly nextLesson: string;
  readonly mentionedIn: string;
  readonly seeMore: (count: number) => string;
  readonly progressEyebrow: string;
  readonly progressTotal: (done: number, total: number) => string;
  readonly startCourse: string;
  readonly courseDone: string;
  readonly progressNote: string;

  // Sync between devices (SyncCard: courses landing and the note's right column)
  readonly syncTitle: string;
  readonly syncCreate: string;
  readonly syncJoinLabel: string;
  readonly syncJoinOpen: string;
  readonly syncJoinButton: string;
  readonly syncLinked: string;
  readonly syncShowCode: string;
  readonly syncYourCode: string;
  readonly syncCodeHint: string;
  readonly syncCopy: string;
  readonly syncCopied: string;
  readonly syncDisconnect: string;
  readonly syncSyncing: string;
  readonly syncSynced: (time: string) => string;
  readonly syncInvalidCode: string;
  readonly syncUnknownCode: string;
  readonly syncTooLarge: string;
  readonly syncFailed: string;

  // Glossary index
  readonly glossaryTitle: (course: string) => string;
  readonly glossaryLead: (count: number) => string;
  readonly filterTerms: string;
  readonly noTerms: string;

  /** Default titles of Obsidian callouts that have none, in the course's language. */
  readonly calloutTitles: Readonly<Record<string, string>>;
}

const pt: CourseText = {
  locale: 'pt-BR',
  languageNames: { pt: 'português', en: 'inglês', es: 'espanhol' },

  landingMetaTitle: 'Cursos gratuitos criados com IA | João Pster',
  landingMetaDescription:
    'Cursos autodidatas em português que eu crio com IA para estudar e publico para qualquer pessoa ler no site ou no Obsidian.',
  section: 'Cursos',
  heroTitle: 'Cursos que eu crio com IA para estudar, abertos para você',
  seeCourses: 'Ver os cursos',
  howToLink: 'Como eu crio os cursos',
  published: 'Cursos publicados',
  searchLabel: 'Buscar curso',
  searchPlaceholder: 'Buscar por tema ou assunto',
  searchEmpty: 'Nenhum curso sobre isso ainda.',
  noCourses: 'Ainda não há cursos em português.',
  otherLanguagesIntro: 'Por enquanto, os cursos estão em:',
  coursesInLanguage: (language, count) => `${count} ${count === 1 ? 'curso' : 'cursos'} em ${language}`,
  cardStats: (modules, lessons, terms) =>
    `${modules} módulos · ${lessons} aulas${terms > 0 ? ` · ${terms} termos no glossário` : ''}`,
  start: 'Começar',
  continue: 'Continuar',
  downloadZip: 'Baixar para o Obsidian (.zip)',
  lessonsDone: (done, total) => `${done}/${total} aulas`,
  ctaTitle: 'Crie o seu curso',
  ctaText:
    'Explico o método, deixo a skill que monta a estrutura toda para você usar com o Claude e um e-mail para mandar o curso que você criou. Os bons podem entrar aqui.',

  youAreHere: 'Você está em',
  module: (number) => `Módulo ${number}`,
  glossary: 'Glossário',
  onThisNote: 'Nesta nota',
  courseHomeTitle: (course) => `${course}: curso gratuito`,
  noteDescription: (note, course) => `${note}. Do curso ${course}, gratuito e aberto.`,
  navToggle: 'Módulos do curso',
  lessonsReadOf: (total) => ` de ${total} aulas lidas`,
  glossaryTerms: (count) => `${count} termos`,
  hideNav: 'Ocultar o menu do curso',
  showNav: 'Mostrar o menu do curso',
  hideToc: 'Ocultar o índice da nota',
  showToc: 'Mostrar o índice da nota',
  markRead: 'Marcar aula como lida',
  lessonRead: 'Aula lida',
  lessons: 'Aulas',
  previousLesson: '← Aula anterior',
  nextLesson: 'Próxima aula →',
  mentionedIn: 'Mencionado em',
  seeMore: (count) => `Ver mais ${count}`,
  progressEyebrow: 'Seu progresso',
  progressTotal: (done, total) => `<strong>${done}</strong> de ${total} aulas lidas`,
  startCourse: 'Começar o curso',
  courseDone: 'Curso concluído',
  progressNote: 'O progresso fica salvo neste navegador.',

  syncTitle: 'Salve seu progresso',
  syncCreate: 'Criar código',
  syncJoinLabel: 'Código do outro aparelho',
  syncJoinOpen: 'Já tenho um código',
  syncJoinButton: 'Usar código',
  syncLinked: 'Sincronização ligada',
  syncShowCode: 'Ver código',
  syncYourCode: 'Seu código',
  syncCodeHint: 'Cole esse código em outro aparelho para sincronizar os dois.',
  syncCopy: 'Copiar',
  syncCopied: 'Copiado',
  syncDisconnect: 'Parar de sincronizar neste aparelho',
  syncSyncing: 'Sincronizando...',
  syncSynced: (time) => `Sincronizado às ${time}`,
  syncInvalidCode: 'O código tem o formato XXXX-XXXX-XXXX-XXXX-XXXX. Confira e tente de novo.',
  syncUnknownCode: 'Esse código não existe. Confira e tente de novo.',
  syncTooLarge: 'O progresso ficou grande demais pra sincronizar.',
  syncFailed: 'Não deu pra sincronizar agora. Seu progresso continua salvo aqui e sincroniza na próxima visita.',

  glossaryTitle: (course) => `Glossário: ${course}`,
  glossaryLead: (count) =>
    `${count} termos do curso, cada um com definição, exemplo e as aulas onde aparece. Nas aulas, passe o mouse sobre um termo para ver a definição sem sair da página.`,
  filterTerms: 'Filtrar termos',
  noTerms: 'Nenhum termo encontrado.',

  calloutTitles: {
    note: 'Nota', abstract: 'Resumo', summary: 'Resumo', info: 'Info', todo: 'Tarefa', tip: 'Dica', hint: 'Dica',
    success: 'Resposta', question: 'Pergunta', warning: 'Atenção', caution: 'Cuidado', failure: 'Falha',
    danger: 'Perigo', bug: 'Bug', example: 'Exemplo', quote: 'Citação',
  },
};

const en: CourseText = {
  locale: 'en',
  languageNames: { pt: 'Portuguese', en: 'English', es: 'Spanish' },

  landingMetaTitle: 'Free courses made with AI | João Pster',
  landingMetaDescription:
    'Self-study courses I create with AI for my own learning and publish for anyone to read on the site or in Obsidian.',
  section: 'Courses',
  heroTitle: 'Courses I create with AI to study, open to you',
  seeCourses: 'See the courses',
  howToLink: 'How I make the courses',
  published: 'Published courses',
  searchLabel: 'Search courses',
  searchPlaceholder: 'Search by topic or subject',
  searchEmpty: 'No course about that yet.',
  noCourses: 'There are no courses in English yet.',
  otherLanguagesIntro: 'For now, the courses are in:',
  coursesInLanguage: (language, count) => `${count} ${count === 1 ? 'course' : 'courses'} in ${language}`,
  cardStats: (modules, lessons, terms) =>
    `${modules} modules · ${lessons} lessons${terms > 0 ? ` · ${terms} glossary terms` : ''}`,
  start: 'Start',
  continue: 'Continue',
  downloadZip: 'Download for Obsidian (.zip)',
  lessonsDone: (done, total) => `${done}/${total} lessons`,
  ctaTitle: 'Create your own course',
  ctaText:
    'I explain the method, share the skill that builds the whole structure for you to use with Claude, and leave an e-mail for you to send the course you made. Good ones can be published here.',

  youAreHere: 'You are here',
  module: (number) => `Module ${number}`,
  glossary: 'Glossary',
  onThisNote: 'On this note',
  courseHomeTitle: (course) => `${course}: free course`,
  noteDescription: (note, course) => `${note}. From the free and open course ${course}.`,
  navToggle: 'Course modules',
  lessonsReadOf: (total) => ` of ${total} lessons read`,
  glossaryTerms: (count) => `${count} terms`,
  hideNav: 'Hide the course menu',
  showNav: 'Show the course menu',
  hideToc: 'Hide the note outline',
  showToc: 'Show the note outline',
  markRead: 'Mark lesson as read',
  lessonRead: 'Lesson read',
  lessons: 'Lessons',
  previousLesson: '← Previous lesson',
  nextLesson: 'Next lesson →',
  mentionedIn: 'Mentioned in',
  seeMore: (count) => `See ${count} more`,
  progressEyebrow: 'Your progress',
  progressTotal: (done, total) => `<strong>${done}</strong> of ${total} lessons read`,
  startCourse: 'Start the course',
  courseDone: 'Course completed',
  progressNote: 'Progress is saved in this browser.',

  syncTitle: 'Save your progress',
  syncCreate: 'Create a code',
  syncJoinLabel: 'Code from your other device',
  syncJoinOpen: 'I already have a code',
  syncJoinButton: 'Use code',
  syncLinked: 'Sync is on',
  syncShowCode: 'Show code',
  syncYourCode: 'Your code',
  syncCodeHint: 'Paste this code on another device to sync the two.',
  syncCopy: 'Copy',
  syncCopied: 'Copied',
  syncDisconnect: 'Stop syncing on this device',
  syncSyncing: 'Syncing...',
  syncSynced: (time) => `Synced at ${time}`,
  syncInvalidCode: 'Codes look like XXXX-XXXX-XXXX-XXXX-XXXX. Check it and try again.',
  syncUnknownCode: 'That code does not exist. Check it and try again.',
  syncTooLarge: 'Your progress got too large to sync.',
  syncFailed: "Couldn't sync right now. Your progress is still saved here and will sync on your next visit.",

  glossaryTitle: (course) => `Glossary: ${course}`,
  glossaryLead: (count) =>
    `${count} terms from the course, each with a definition, an example and the lessons where it appears. In the lessons, hover over a term to see its definition without leaving the page.`,
  filterTerms: 'Filter terms',
  noTerms: 'No term found.',

  calloutTitles: {
    note: 'Note', abstract: 'Summary', summary: 'Summary', info: 'Info', todo: 'Task', tip: 'Tip', hint: 'Hint',
    success: 'Answer', question: 'Question', warning: 'Warning', caution: 'Caution', failure: 'Failure',
    danger: 'Danger', bug: 'Bug', example: 'Example', quote: 'Quote',
  },
};

const es: CourseText = {
  locale: 'es',
  languageNames: { pt: 'portugués', en: 'inglés', es: 'español' },

  landingMetaTitle: 'Cursos gratuitos creados con IA | João Pster',
  landingMetaDescription:
    'Cursos autodidactas que creo con IA para estudiar y publico para que cualquiera los lea en el sitio o en Obsidian.',
  section: 'Cursos',
  heroTitle: 'Cursos que creo con IA para estudiar, abiertos para ti',
  seeCourses: 'Ver los cursos',
  howToLink: 'Cómo creo los cursos',
  published: 'Cursos publicados',
  searchLabel: 'Buscar curso',
  searchPlaceholder: 'Buscar por tema o asunto',
  searchEmpty: 'Todavía no hay ningún curso sobre eso.',
  noCourses: 'Todavía no hay cursos en español.',
  otherLanguagesIntro: 'Por ahora, los cursos están en:',
  coursesInLanguage: (language, count) => `${count} ${count === 1 ? 'curso' : 'cursos'} en ${language}`,
  cardStats: (modules, lessons, terms) =>
    `${modules} módulos · ${lessons} clases${terms > 0 ? ` · ${terms} términos en el glosario` : ''}`,
  start: 'Empezar',
  continue: 'Continuar',
  downloadZip: 'Descargar para Obsidian (.zip)',
  lessonsDone: (done, total) => `${done}/${total} clases`,
  ctaTitle: 'Crea tu propio curso',
  ctaText:
    'Explico el método, comparto la skill que arma toda la estructura para que la uses con Claude y dejo un e-mail para que me envíes el curso que creaste. Los buenos pueden publicarse aquí.',

  youAreHere: 'Estás en',
  module: (number) => `Módulo ${number}`,
  glossary: 'Glosario',
  onThisNote: 'En esta nota',
  courseHomeTitle: (course) => `${course}: curso gratuito`,
  noteDescription: (note, course) => `${note}. Del curso ${course}, gratuito y abierto.`,
  navToggle: 'Módulos del curso',
  lessonsReadOf: (total) => ` de ${total} clases leídas`,
  glossaryTerms: (count) => `${count} términos`,
  hideNav: 'Ocultar el menú del curso',
  showNav: 'Mostrar el menú del curso',
  hideToc: 'Ocultar el índice de la nota',
  showToc: 'Mostrar el índice de la nota',
  markRead: 'Marcar clase como leída',
  lessonRead: 'Clase leída',
  lessons: 'Clases',
  previousLesson: '← Clase anterior',
  nextLesson: 'Clase siguiente →',
  mentionedIn: 'Mencionado en',
  seeMore: (count) => `Ver ${count} más`,
  progressEyebrow: 'Tu progreso',
  progressTotal: (done, total) => `<strong>${done}</strong> de ${total} clases leídas`,
  startCourse: 'Empezar el curso',
  courseDone: 'Curso completado',
  progressNote: 'El progreso se guarda en este navegador.',

  syncTitle: 'Guarda tu progreso',
  syncCreate: 'Crear un código',
  syncJoinLabel: 'Código del otro dispositivo',
  syncJoinOpen: 'Ya tengo un código',
  syncJoinButton: 'Usar código',
  syncLinked: 'Sincronización activada',
  syncShowCode: 'Ver código',
  syncYourCode: 'Tu código',
  syncCodeHint: 'Pega este código en otro dispositivo para sincronizar los dos.',
  syncCopy: 'Copiar',
  syncCopied: 'Copiado',
  syncDisconnect: 'Dejar de sincronizar en este dispositivo',
  syncSyncing: 'Sincronizando...',
  syncSynced: (time) => `Sincronizado a las ${time}`,
  syncInvalidCode: 'El código tiene el formato XXXX-XXXX-XXXX-XXXX-XXXX. Revísalo e inténtalo de nuevo.',
  syncUnknownCode: 'Ese código no existe. Revísalo e inténtalo de nuevo.',
  syncTooLarge: 'Tu progreso es demasiado grande para sincronizar.',
  syncFailed: 'No se pudo sincronizar ahora. Tu progreso sigue guardado aquí y se sincroniza en tu próxima visita.',

  glossaryTitle: (course) => `Glosario: ${course}`,
  glossaryLead: (count) =>
    `${count} términos del curso, cada uno con definición, ejemplo y las clases donde aparece. En las clases, pasa el mouse sobre un término para ver la definición sin salir de la página.`,
  filterTerms: 'Filtrar términos',
  noTerms: 'No se encontró ningún término.',

  calloutTitles: {
    note: 'Nota', abstract: 'Resumen', summary: 'Resumen', info: 'Info', todo: 'Tarea', tip: 'Consejo', hint: 'Pista',
    success: 'Respuesta', question: 'Pregunta', warning: 'Atención', caution: 'Cuidado', failure: 'Fallo',
    danger: 'Peligro', bug: 'Bug', example: 'Ejemplo', quote: 'Cita',
  },
};

const TEXT: Record<Lang, CourseText> = { pt, en, es };

export const courseText = (lang: Lang): CourseText => TEXT[lang];

/** The language of the current page, read from <html lang> on the client. */
export function pageLang(): Lang {
  const lang = document.documentElement.lang;
  if (lang !== 'pt' && lang !== 'en' && lang !== 'es') throw new Error(`Courses page has an unknown language: ${lang}`);
  return lang;
}
