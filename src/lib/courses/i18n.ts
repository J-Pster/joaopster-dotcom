// Interface text of the courses section, in each site language. Course content is never
// translated: a course is written in one language and shown only in that language's section.
// Imported by the client scripts too, so it holds only short labels.
import type { Lang } from '../../i18n/ui';
import type { CourseLevel, CourseTopic } from './catalog';

export interface CourseText {
  /** BCP 47 tag for sorting and number formatting. */
  readonly locale: string;
  /** Language names, as written in this language. */
  readonly languageNames: Readonly<Record<Lang, string>>;

  // Landing
  readonly landingMetaTitle: string;
  readonly landingMetaDescription: string;
  readonly section: string;
  readonly catalogTitle: string;
  /** Totals under the catalog title: courses, lessons and hours of reading. */
  readonly catalogFacts: (courses: number, lessons: number, hours: number) => string;
  readonly howToLink: string;
  readonly searchLabel: string;
  readonly searchPlaceholder: string;
  readonly searchEmpty: string;
  readonly clearFilters: string;
  readonly filterTopic: string;
  readonly filterAll: string;
  readonly topicNames: Readonly<Record<CourseTopic, string>>;
  readonly filterStatus: string;
  readonly statusStarted: string;
  readonly statusNotStarted: string;
  readonly sortLabel: string;
  readonly sortRecommended: string;
  readonly sortTitle: string;
  readonly sortShortest: string;
  readonly sortLongest: string;
  readonly resultCount: (count: number) => string;
  readonly modulesCount: (count: number) => string;
  readonly lessonsCount: (count: number) => string;
  readonly termsCount: (count: number) => string;
  /** Reading time of a course or module, from its minutes. */
  readonly duration: (minutes: number) => string;
  readonly examBadge: string;
  /** Catalog badges: the flagship course and the other courses (study notes). */
  readonly flagshipBadge: string;
  readonly studyNotesBadge: string;
  /** "Reading time: 54 h" (a course) and "45 min of reading" (a module): never a bare duration. */
  readonly readingTimeOf: (minutes: number) => string;
  readonly minutesOfReading: (minutes: number) => string;
  readonly levelLabel: string;
  readonly levelNames: Readonly<Record<CourseLevel, string>>;
  readonly audienceLabel: string;
  readonly prerequisitesLabel: string;
  readonly noPrerequisites: string;
  readonly objectivesLabel: string;
  /** Under the catalog title: the courses are read in the browser and Obsidian is optional. */
  readonly browserLine: string;
  readonly syllabusShow: string;
  readonly syllabusHide: string;
  /** Heading of the modules and lessons that match the search, inside a course card. */
  readonly searchMatches: (count: number) => string;
  readonly moreMatches: (count: number) => string;
  readonly noCourses: string;
  readonly otherLanguagesIntro: string;
  readonly coursesInLanguage: (language: string, count: number) => string;
  readonly start: string;
  readonly continue: string;
  readonly downloadZip: string;
  /** The download dialog: the only place the site talks about Obsidian. */
  readonly downloadTitle: string;
  readonly downloadIntro: string;
  readonly downloadObsidianTitle: string;
  readonly downloadObsidianHtml: string;
  readonly downloadSiteNote: string;
  readonly downloadConfirm: string;
  readonly downloadReadHere: string;
  readonly downloadClose: string;
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
  /** Meta description of a lesson: the question the lesson answers, then where it comes from. */
  readonly lessonDescription: (question: string, course: string) => string;
  readonly navToggle: string;
  readonly navShort: string;
  readonly close: string;
  readonly lessonsReadOf: (total: number) => string;
  readonly glossaryTerms: (count: number) => string;
  readonly hideNav: string;
  readonly showNav: string;
  readonly hideToc: string;
  readonly moreTools: string;
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

/** "45 min", "1 h 10 min", or whole hours from 10 h up (a course's total). Same units in every language. */
function formatDuration(minutes: number): string {
  if (minutes < 60) return `${minutes} min`;
  if (minutes >= 600) return `${Math.round(minutes / 60)} h`;
  const hours = Math.floor(minutes / 60);
  const rest = minutes % 60;
  return rest === 0 ? `${hours} h` : `${hours} h ${rest} min`;
}

const pt: CourseText = {
  locale: 'pt-BR',
  languageNames: { pt: 'português', en: 'inglês', es: 'espanhol' },

  landingMetaTitle: 'Cursos gratuitos | João Pster',
  landingMetaDescription:
    'Cursos que eu crio para mim mesmo e deixo abertos, de graça, para você: leia no site, acompanhe o seu progresso ou baixe o curso inteiro.',
  section: 'Cursos',
  catalogTitle: 'Catálogo de cursos',
  catalogFacts: (courses, lessons, hours) =>
    `${courses} ${courses === 1 ? 'curso' : 'cursos'} · ${lessons} aulas · tempo de leitura: ${hours} h`,
  howToLink: 'Como eu crio os cursos',
  searchLabel: 'Buscar nos cursos',
  searchPlaceholder: 'Buscar curso ou aula',
  searchEmpty: 'Nenhum curso, módulo ou aula com esses filtros.',
  clearFilters: 'Limpar filtros',
  filterTopic: 'Tema',
  filterAll: 'Todos',
  topicNames: { technology: 'Tecnologia', health: 'Saúde e emergência', home: 'Casa e projeto' },
  filterStatus: 'Seu progresso',
  statusStarted: 'Em andamento',
  statusNotStarted: 'Não iniciados',
  sortLabel: 'Ordenar',
  sortRecommended: 'Recomendados',
  sortTitle: 'A a Z',
  sortShortest: 'Mais curtos',
  sortLongest: 'Mais longos',
  resultCount: (count) => `${count} ${count === 1 ? 'curso' : 'cursos'}`,
  modulesCount: (count) => `${count} ${count === 1 ? 'módulo' : 'módulos'}`,
  lessonsCount: (count) => `${count} ${count === 1 ? 'aula' : 'aulas'}`,
  termsCount: (count) => `${count} termos no glossário`,
  duration: formatDuration,
  examBadge: 'Com simulados de prova',
  flagshipBadge: 'Curso principal',
  studyNotesBadge: 'Notas de estudo',
  readingTimeOf: (minutes) => `Tempo de leitura: ${formatDuration(minutes)}`,
  minutesOfReading: (minutes) => `${formatDuration(minutes)} de leitura`,
  levelLabel: 'Nível',
  levelNames: { beginner: 'Iniciante', intermediate: 'Intermediário', advanced: 'Avançado' },
  audienceLabel: 'Para quem é',
  prerequisitesLabel: 'Antes de começar',
  noPrerequisites: 'Nenhum pré-requisito.',
  objectivesLabel: 'Ao final você será capaz de',
  browserLine: 'Você lê tudo aqui no navegador, sem instalar nada. O Obsidian é opcional.',
  syllabusShow: 'Ver ementa',
  syllabusHide: 'Fechar ementa',
  searchMatches: (count) => `${count} ${count === 1 ? 'resultado' : 'resultados'} neste curso`,
  moreMatches: (count) => `e mais ${count}`,
  noCourses: 'Ainda não há cursos em português.',
  otherLanguagesIntro: 'Por enquanto, os cursos estão em:',
  coursesInLanguage: (language, count) => `${count} ${count === 1 ? 'curso' : 'cursos'} em ${language}`,
  start: 'Começar',
  continue: 'Continuar',
  downloadZip: 'Baixar curso',
  downloadTitle: 'Baixar o curso',
  downloadIntro: 'O curso vem num .zip com uma pasta de notas em Markdown: todas as aulas, o glossário e os questionários, para ler offline.',
  downloadObsidianTitle: 'Melhor no Obsidian',
  downloadObsidianHtml:
    'Os cursos foram escritos para o <a href="https://obsidian.md" target="_blank" rel="noopener noreferrer">Obsidian</a>, um app gratuito de notas. Descompacte o .zip, abra a pasta como vault e você ganha links com prévia, painel de progresso, gráfico de conexões e busca.',
  downloadSiteNote: 'Aqui no site você lê sem instalar nada, vê a definição dos termos sem sair da aula e pode sincronizar o progresso entre dispositivos.',
  downloadConfirm: 'Baixar .zip',
  downloadReadHere: 'Ler aqui no site',
  downloadClose: 'Fechar',
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
  lessonDescription: (question, course) => `${question} Aula do curso ${course}.`,
  navToggle: 'Módulos do curso',
  navShort: 'Módulos',
  close: 'Fechar',
  lessonsReadOf: (total) => ` de ${total} aulas lidas`,
  glossaryTerms: (count) => `${count} termos`,
  hideNav: 'Ocultar o menu do curso',
  showNav: 'Mostrar o menu do curso',
  hideToc: 'Ocultar o índice da nota',
  moreTools: 'Mais opções',
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

  landingMetaTitle: 'Free courses | João Pster',
  landingMetaDescription:
    'Courses I make for myself and leave open, for free, for you: read them on the site, track your progress or download the whole course.',
  section: 'Courses',
  catalogTitle: 'Course catalog',
  catalogFacts: (courses, lessons, hours) =>
    `${courses} ${courses === 1 ? 'course' : 'courses'} · ${lessons} lessons · reading time: ${hours} h`,
  howToLink: 'How I make the courses',
  searchLabel: 'Search the courses',
  searchPlaceholder: 'Search courses and lessons',
  searchEmpty: 'No course, module or lesson matches these filters.',
  clearFilters: 'Clear filters',
  filterTopic: 'Topic',
  filterAll: 'All',
  topicNames: { technology: 'Technology', health: 'Health and emergency', home: 'Home and design' },
  filterStatus: 'Your progress',
  statusStarted: 'In progress',
  statusNotStarted: 'Not started',
  sortLabel: 'Sort',
  sortRecommended: 'Recommended',
  sortTitle: 'A to Z',
  sortShortest: 'Shortest',
  sortLongest: 'Longest',
  resultCount: (count) => `${count} ${count === 1 ? 'course' : 'courses'}`,
  modulesCount: (count) => `${count} ${count === 1 ? 'module' : 'modules'}`,
  lessonsCount: (count) => `${count} ${count === 1 ? 'lesson' : 'lessons'}`,
  termsCount: (count) => `${count} glossary terms`,
  duration: formatDuration,
  examBadge: 'With practice exams',
  flagshipBadge: 'Flagship course',
  studyNotesBadge: 'Study notes',
  readingTimeOf: (minutes) => `Reading time: ${formatDuration(minutes)}`,
  minutesOfReading: (minutes) => `${formatDuration(minutes)} of reading`,
  levelLabel: 'Level',
  levelNames: { beginner: 'Beginner', intermediate: 'Intermediate', advanced: 'Advanced' },
  audienceLabel: 'Who it is for',
  prerequisitesLabel: 'Before you start',
  noPrerequisites: 'No prerequisites.',
  objectivesLabel: 'By the end you will be able to',
  browserLine: 'You read everything here in the browser, with nothing to install. Obsidian is optional.',
  syllabusShow: 'See syllabus',
  syllabusHide: 'Hide syllabus',
  searchMatches: (count) => `${count} ${count === 1 ? 'match' : 'matches'} in this course`,
  moreMatches: (count) => `and ${count} more`,
  noCourses: 'There are no courses in English yet.',
  otherLanguagesIntro: 'For now, the courses are in:',
  coursesInLanguage: (language, count) => `${count} ${count === 1 ? 'course' : 'courses'} in ${language}`,
  start: 'Start',
  continue: 'Continue',
  downloadZip: 'Download course',
  downloadTitle: 'Download the course',
  downloadIntro: 'The course comes as a .zip with a folder of Markdown notes: every lesson, the glossary and the quizzes, to read offline.',
  downloadObsidianTitle: 'Best in Obsidian',
  downloadObsidianHtml:
    'The courses were written for <a href="https://obsidian.md" target="_blank" rel="noopener noreferrer">Obsidian</a>, a free notes app. Unzip the file, open the folder as a vault and you get links with previews, a progress dashboard, the connections graph and search.',
  downloadSiteNote: 'Here on the site you read without installing anything, see what a term means without leaving the lesson and can sync your progress across devices.',
  downloadConfirm: 'Download .zip',
  downloadReadHere: 'Read it here',
  downloadClose: 'Close',
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
  lessonDescription: (question, course) => `${question} A lesson from the course ${course}.`,
  navToggle: 'Course modules',
  navShort: 'Modules',
  close: 'Close',
  lessonsReadOf: (total) => ` of ${total} lessons read`,
  glossaryTerms: (count) => `${count} terms`,
  hideNav: 'Hide the course menu',
  showNav: 'Show the course menu',
  hideToc: 'Hide the note outline',
  moreTools: 'More options',
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

  landingMetaTitle: 'Cursos gratuitos | João Pster',
  landingMetaDescription:
    'Cursos que creo para mí mismo y dejo abiertos, gratis, para ti: léelos en el sitio, sigue tu progreso o descarga el curso completo.',
  section: 'Cursos',
  catalogTitle: 'Catálogo de cursos',
  catalogFacts: (courses, lessons, hours) =>
    `${courses} ${courses === 1 ? 'curso' : 'cursos'} · ${lessons} clases · tiempo de lectura: ${hours} h`,
  howToLink: 'Cómo creo los cursos',
  searchLabel: 'Buscar en los cursos',
  searchPlaceholder: 'Buscar curso o clase',
  searchEmpty: 'Ningún curso, módulo o clase coincide con estos filtros.',
  clearFilters: 'Borrar filtros',
  filterTopic: 'Tema',
  filterAll: 'Todos',
  topicNames: { technology: 'Tecnología', health: 'Salud y emergencias', home: 'Casa y proyecto' },
  filterStatus: 'Tu progreso',
  statusStarted: 'En curso',
  statusNotStarted: 'Sin empezar',
  sortLabel: 'Ordenar',
  sortRecommended: 'Recomendados',
  sortTitle: 'De la A a la Z',
  sortShortest: 'Más cortos',
  sortLongest: 'Más largos',
  resultCount: (count) => `${count} ${count === 1 ? 'curso' : 'cursos'}`,
  modulesCount: (count) => `${count} ${count === 1 ? 'módulo' : 'módulos'}`,
  lessonsCount: (count) => `${count} ${count === 1 ? 'clase' : 'clases'}`,
  termsCount: (count) => `${count} términos en el glosario`,
  duration: formatDuration,
  examBadge: 'Con exámenes de práctica',
  flagshipBadge: 'Curso principal',
  studyNotesBadge: 'Notas de estudio',
  readingTimeOf: (minutes) => `Tiempo de lectura: ${formatDuration(minutes)}`,
  minutesOfReading: (minutes) => `${formatDuration(minutes)} de lectura`,
  levelLabel: 'Nivel',
  levelNames: { beginner: 'Principiante', intermediate: 'Intermedio', advanced: 'Avanzado' },
  audienceLabel: 'Para quién es',
  prerequisitesLabel: 'Antes de empezar',
  noPrerequisites: 'Sin requisitos previos.',
  objectivesLabel: 'Al terminar podrás',
  browserLine: 'Lees todo aquí en el navegador, sin instalar nada. Obsidian es opcional.',
  syllabusShow: 'Ver temario',
  syllabusHide: 'Cerrar temario',
  searchMatches: (count) => `${count} ${count === 1 ? 'resultado' : 'resultados'} en este curso`,
  moreMatches: (count) => `y ${count} más`,
  noCourses: 'Todavía no hay cursos en español.',
  otherLanguagesIntro: 'Por ahora, los cursos están en:',
  coursesInLanguage: (language, count) => `${count} ${count === 1 ? 'curso' : 'cursos'} en ${language}`,
  start: 'Empezar',
  continue: 'Continuar',
  downloadZip: 'Descargar curso',
  downloadTitle: 'Descargar el curso',
  downloadIntro: 'El curso viene en un .zip con una carpeta de notas en Markdown: todas las clases, el glosario y los cuestionarios, para leer sin conexión.',
  downloadObsidianTitle: 'Mejor en Obsidian',
  downloadObsidianHtml:
    'Los cursos se escribieron para <a href="https://obsidian.md" target="_blank" rel="noopener noreferrer">Obsidian</a>, una app de notas gratuita. Descomprime el .zip, abre la carpeta como vault y tendrás enlaces con vista previa, panel de progreso, gráfico de conexiones y búsqueda.',
  downloadSiteNote: 'Aquí en el sitio lees sin instalar nada, ves qué significa un término sin salir de la clase y puedes sincronizar tu progreso entre dispositivos.',
  downloadConfirm: 'Descargar .zip',
  downloadReadHere: 'Leer aquí en el sitio',
  downloadClose: 'Cerrar',
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
  lessonDescription: (question, course) => `${question} Clase del curso ${course}.`,
  navToggle: 'Módulos del curso',
  navShort: 'Módulos',
  close: 'Cerrar',
  lessonsReadOf: (total) => ` de ${total} clases leídas`,
  glossaryTerms: (count) => `${count} términos`,
  hideNav: 'Ocultar el menú del curso',
  showNav: 'Mostrar el menú del curso',
  hideToc: 'Ocultar el índice de la nota',
  moreTools: 'Más opciones',
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
