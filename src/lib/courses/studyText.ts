// Interface text of the study features (graded quizzes, simulated exams, mistakes notebook, review),
// in each site language. Kept apart from i18n.ts so each feature owns its labels.
import type { Lang } from '../../i18n/ui';

export interface StudyText {
  // Quiz
  readonly quizIntro: string;
  readonly quizPick: (count: number) => string;
  readonly optionCorrect: string;
  readonly optionYours: string;
  readonly right: string;
  readonly wrong: (answer: string) => string;
  readonly retryQuestion: string;
  readonly quizScoreTitle: string;
  readonly quizScoreRight: (right: number, answered: number) => string;
  readonly quizScoreAnswered: (answered: number, total: number) => string;
  readonly retryQuiz: string;

  // Simulated exam
  readonly examBadge: string;
  readonly examHeading: string;
  readonly examQuestions: string;
  readonly examMinutes: string;
  readonly examGoal: string;
  readonly examHidden: string;
  readonly examStart: string;
  readonly examRestartConfirm: string;
  readonly examRemaining: string;
  readonly examAnswered: (answered: number, total: number) => string;
  readonly examNavigator: string;
  readonly examJump: (number: number) => string;
  readonly examAnsweredShort: string;
  readonly examUnanswered: string;
  readonly examFinish: string;
  readonly examFinishConfirm: (unanswered: number) => string;
  readonly examTimeUp: string;
  readonly examResult: (right: number, total: number) => string;
  readonly examPassed: string;
  readonly examBelow: string;
  readonly examTarget: (percent: number) => string;
  readonly examTimeUsed: (minutes: number) => string;
  readonly examDomain: (domain: number) => string;
  readonly examRetake: string;
  readonly examMistakes: string;
  readonly examHistory: string;
  readonly examHistoryItem: (date: string, percent: number, minutes: number) => string;

  // Sidebar and study pages
  readonly mistakesLink: string;
  readonly reviewLink: string;
  readonly mistakesTitle: (course: string) => string;
  readonly mistakesLead: string;
  readonly mistakesEmptyTitle: string;
  readonly mistakesEmpty: string;
  readonly mistakesCount: (count: number) => string;
  readonly questionLabel: (number: number) => string;
  readonly openQuestion: string;
  readonly reviewMistakes: string;

  readonly reviewTitle: (course: string) => string;
  readonly reviewLead: string;
  readonly reviewDueLabel: string;
  readonly reviewNewLabel: string;
  readonly reviewNothing: string;
  readonly reviewNeedsReading: string;
  readonly reviewDone: string;
  readonly reviewShow: string;
  readonly spaceKey: string;
  readonly reviewTerm: string;
  readonly reviewQuestion: string;
  readonly reviewOpenNote: string;
  readonly reviewAnswer: (answer: string) => string;
  readonly ratings: Readonly<Record<'again' | 'hard' | 'good' | 'easy', string>>;
  readonly interval: (minutes: number) => string;
  readonly loading: string;
  readonly loadFailed: string;
  readonly localOnly: string;
}

const minutesOrHours = (minutes: number, unit: { min: string; h: string; d: string; mo: string }) => {
  if (minutes < 60) return `${Math.max(1, Math.round(minutes))} ${unit.min}`;
  if (minutes < 60 * 24) return `${Math.round(minutes / 60)} ${unit.h}`;
  const days = Math.round(minutes / (60 * 24));
  return days < 31 ? `${days} ${unit.d}` : `${Math.round(days / 30)} ${unit.mo}`;
};

const pt: StudyText = {
  quizIntro: 'Escolha uma alternativa: a correção aparece na hora.',
  quizPick: (count) => `Marque ${count} alternativas`,
  optionCorrect: 'Correta',
  optionYours: 'Sua resposta',
  right: 'Você acertou',
  wrong: (answer) => `Não foi dessa vez. A resposta é ${answer}`,
  retryQuestion: 'Refazer',
  quizScoreTitle: 'Seu desempenho',
  quizScoreRight: (right, answered) => `${right} de ${answered} certas`,
  quizScoreAnswered: (answered, total) => `${answered} de ${total} questões respondidas`,
  retryQuiz: 'Refazer o questionário',

  examBadge: 'Modo prova',
  examHeading: 'Faça este simulado como se fosse a prova',
  examQuestions: 'questões',
  examMinutes: 'minutos',
  examGoal: 'meta por domínio',
  examHidden: 'O cronômetro corre e o gabarito fica escondido até você terminar ou o tempo acabar.',
  examStart: 'Começar o simulado',
  examRestartConfirm: 'Começar de novo apaga as respostas que estão marcadas neste simulado. Continuar?',
  examRemaining: 'Tempo restante',
  examAnswered: (answered, total) => `${answered} de ${total} respondidas`,
  examNavigator: 'Questões',
  examJump: (number) => `Ir para a questão ${number}`,
  examAnsweredShort: 'Respondida',
  examUnanswered: 'Em branco',
  examFinish: 'Terminar e corrigir',
  examFinishConfirm: (unanswered) => `Ainda faltam ${unanswered} questões. Terminar mesmo assim?`,
  examTimeUp: 'O tempo acabou e o simulado foi corrigido.',
  examResult: (right, total) => `${right} de ${total} certas`,
  examPassed: 'Dentro da meta',
  examBelow: 'Abaixo da meta',
  examTarget: (percent) => `Meta: ${percent}% em cada domínio`,
  examTimeUsed: (minutes) => `Tempo usado: ${minutes} min`,
  examDomain: (domain) => `Domínio ${domain}`,
  examRetake: 'Fazer de novo',
  examMistakes: 'Ver meus erros',
  examHistory: 'Tentativas anteriores',
  examHistoryItem: (date, percent, minutes) => `${date}: ${percent}% em ${minutes} min`,

  mistakesLink: 'Caderno de erros',
  reviewLink: 'Revisão espaçada',
  mistakesTitle: (course) => `Caderno de erros | ${course}`,
  mistakesLead: 'As questões dos questionários que você errou. Refaça cada uma na aula: quando acertar, ela sai daqui.',
  mistakesEmptyTitle: 'Nenhum erro por enquanto',
  mistakesEmpty: 'As questões que você errar nos questionários aparecem aqui, prontas para refazer.',
  mistakesCount: (count) => `${count} ${count === 1 ? 'questão errada' : 'questões erradas'}`,
  questionLabel: (number) => `Questão ${number}`,
  openQuestion: 'Refazer na aula',
  reviewMistakes: 'Revisar em cartões',

  reviewTitle: (course) => `Revisão espaçada | ${course}`,
  reviewLead:
    'Cartões dos termos do glossário das aulas que você marcou como lidas e das questões que você errou. Cada cartão volta no dia em que você estaria perto de esquecer (algoritmo FSRS).',
  reviewDueLabel: 'Para revisar',
  reviewNewLabel: 'Novos',
  reviewNothing: 'Nada para revisar agora. Volte amanhã.',
  reviewNeedsReading: 'Marque aulas como lidas: os termos delas entram na revisão.',
  reviewDone: 'Revisão de hoje concluída',
  reviewShow: 'Mostrar resposta',
  spaceKey: 'Espaço',
  reviewTerm: 'Termo',
  reviewQuestion: 'Questão que você errou',
  reviewOpenNote: 'Abrir a nota',
  reviewAnswer: (answer) => `Resposta: ${answer}`,
  ratings: { again: 'Errei', hard: 'Difícil', good: 'Bom', easy: 'Fácil' },
  interval: (minutes) => minutesOrHours(minutes, { min: 'min', h: 'h', d: 'd', mo: 'meses' }),
  loading: 'Carregando…',
  loadFailed: 'Não deu para carregar. Recarregue a página.',
  localOnly: 'A revisão fica salva só neste navegador.',
};

const en: StudyText = {
  quizIntro: 'Pick an answer: it is graded right away.',
  quizPick: (count) => `Pick ${count} answers`,
  optionCorrect: 'Correct',
  optionYours: 'Your answer',
  right: 'You got it',
  wrong: (answer) => `Not this time. The answer is ${answer}`,
  retryQuestion: 'Retry',
  quizScoreTitle: 'Your score',
  quizScoreRight: (right, answered) => `${right} of ${answered} right`,
  quizScoreAnswered: (answered, total) => `${answered} of ${total} questions answered`,
  retryQuiz: 'Retry the quiz',

  examBadge: 'Exam mode',
  examHeading: 'Take this practice exam like the real one',
  examQuestions: 'questions',
  examMinutes: 'minutes',
  examGoal: 'target per domain',
  examHidden: 'The clock runs and the answer key stays hidden until you finish or time runs out.',
  examStart: 'Start the practice exam',
  examRestartConfirm: 'Starting again clears the answers ticked in this practice exam. Continue?',
  examRemaining: 'Time left',
  examAnswered: (answered, total) => `${answered} of ${total} answered`,
  examNavigator: 'Questions',
  examJump: (number) => `Go to question ${number}`,
  examAnsweredShort: 'Answered',
  examUnanswered: 'Blank',
  examFinish: 'Finish and grade',
  examFinishConfirm: (unanswered) => `${unanswered} questions are still unanswered. Finish anyway?`,
  examTimeUp: 'Time is up and the practice exam was graded.',
  examResult: (right, total) => `${right} of ${total} right`,
  examPassed: 'On target',
  examBelow: 'Below target',
  examTarget: (percent) => `Target: ${percent}% in each domain`,
  examTimeUsed: (minutes) => `Time used: ${minutes} min`,
  examDomain: (domain) => `Domain ${domain}`,
  examRetake: 'Take it again',
  examMistakes: 'See my mistakes',
  examHistory: 'Previous attempts',
  examHistoryItem: (date, percent, minutes) => `${date}: ${percent}% in ${minutes} min`,

  mistakesLink: 'Mistakes notebook',
  reviewLink: 'Spaced review',
  mistakesTitle: (course) => `Mistakes notebook | ${course}`,
  mistakesLead: 'The quiz questions you got wrong. Redo each one in its lesson: once you get it right, it leaves this list.',
  mistakesEmptyTitle: 'No mistakes yet',
  mistakesEmpty: 'Quiz questions you get wrong show up here, ready to redo.',
  mistakesCount: (count) => `${count} ${count === 1 ? 'wrong question' : 'wrong questions'}`,
  questionLabel: (number) => `Question ${number}`,
  openQuestion: 'Redo it in the lesson',
  reviewMistakes: 'Review as cards',

  reviewTitle: (course) => `Spaced review | ${course}`,
  reviewLead:
    'Cards for the glossary terms of the lessons you marked as read and for the questions you got wrong. Each card comes back on the day you would be about to forget it (FSRS algorithm).',
  reviewDueLabel: 'To review',
  reviewNewLabel: 'New',
  reviewNothing: 'Nothing to review right now. Come back tomorrow.',
  reviewNeedsReading: 'Mark lessons as read: their terms join the review.',
  reviewDone: 'Today’s review is done',
  reviewShow: 'Show answer',
  spaceKey: 'Space',
  reviewTerm: 'Term',
  reviewQuestion: 'A question you got wrong',
  reviewOpenNote: 'Open the note',
  reviewAnswer: (answer) => `Answer: ${answer}`,
  ratings: { again: 'Again', hard: 'Hard', good: 'Good', easy: 'Easy' },
  interval: (minutes) => minutesOrHours(minutes, { min: 'min', h: 'h', d: 'd', mo: 'mo' }),
  loading: 'Loading…',
  loadFailed: 'Could not load. Reload the page.',
  localOnly: 'The review is saved in this browser only.',
};

const es: StudyText = {
  quizIntro: 'Elige una alternativa: la corrección aparece al instante.',
  quizPick: (count) => `Marca ${count} alternativas`,
  optionCorrect: 'Correcta',
  optionYours: 'Tu respuesta',
  right: 'Acertaste',
  wrong: (answer) => `Esta vez no. La respuesta es ${answer}`,
  retryQuestion: 'Repetir',
  quizScoreTitle: 'Tu desempeño',
  quizScoreRight: (right, answered) => `${right} de ${answered} correctas`,
  quizScoreAnswered: (answered, total) => `${answered} de ${total} preguntas respondidas`,
  retryQuiz: 'Repetir el cuestionario',

  examBadge: 'Modo examen',
  examHeading: 'Haz este simulacro como si fuera el examen',
  examQuestions: 'preguntas',
  examMinutes: 'minutos',
  examGoal: 'meta por dominio',
  examHidden: 'El cronómetro corre y las respuestas quedan ocultas hasta que termines o se acabe el tiempo.',
  examStart: 'Empezar el simulacro',
  examRestartConfirm: 'Empezar de nuevo borra las respuestas marcadas en este simulacro. ¿Continuar?',
  examRemaining: 'Tiempo restante',
  examAnswered: (answered, total) => `${answered} de ${total} respondidas`,
  examNavigator: 'Preguntas',
  examJump: (number) => `Ir a la pregunta ${number}`,
  examAnsweredShort: 'Respondida',
  examUnanswered: 'En blanco',
  examFinish: 'Terminar y corregir',
  examFinishConfirm: (unanswered) => `Faltan ${unanswered} preguntas. ¿Terminar de todos modos?`,
  examTimeUp: 'Se acabó el tiempo y el simulacro fue corregido.',
  examResult: (right, total) => `${right} de ${total} correctas`,
  examPassed: 'Dentro de la meta',
  examBelow: 'Por debajo de la meta',
  examTarget: (percent) => `Meta: ${percent}% en cada dominio`,
  examTimeUsed: (minutes) => `Tiempo usado: ${minutes} min`,
  examDomain: (domain) => `Dominio ${domain}`,
  examRetake: 'Hacerlo de nuevo',
  examMistakes: 'Ver mis errores',
  examHistory: 'Intentos anteriores',
  examHistoryItem: (date, percent, minutes) => `${date}: ${percent}% en ${minutes} min`,

  mistakesLink: 'Cuaderno de errores',
  reviewLink: 'Repaso espaciado',
  mistakesTitle: (course) => `Cuaderno de errores | ${course}`,
  mistakesLead: 'Las preguntas de los cuestionarios que fallaste. Repite cada una en su lección: cuando aciertes, sale de aquí.',
  mistakesEmptyTitle: 'Ningún error por ahora',
  mistakesEmpty: 'Las preguntas que falles en los cuestionarios aparecen aquí, listas para repetir.',
  mistakesCount: (count) => `${count} ${count === 1 ? 'pregunta fallada' : 'preguntas falladas'}`,
  questionLabel: (number) => `Pregunta ${number}`,
  openQuestion: 'Repetir en la lección',
  reviewMistakes: 'Repasar en tarjetas',

  reviewTitle: (course) => `Repaso espaciado | ${course}`,
  reviewLead:
    'Tarjetas de los términos del glosario de las lecciones que marcaste como leídas y de las preguntas que fallaste. Cada tarjeta vuelve el día en que estarías a punto de olvidarla (algoritmo FSRS).',
  reviewDueLabel: 'Para repasar',
  reviewNewLabel: 'Nuevas',
  reviewNothing: 'Nada para repasar ahora. Vuelve mañana.',
  reviewNeedsReading: 'Marca lecciones como leídas: sus términos entran en el repaso.',
  reviewDone: 'Repaso de hoy terminado',
  reviewShow: 'Mostrar respuesta',
  spaceKey: 'Espacio',
  reviewTerm: 'Término',
  reviewQuestion: 'Una pregunta que fallaste',
  reviewOpenNote: 'Abrir la nota',
  reviewAnswer: (answer) => `Respuesta: ${answer}`,
  ratings: { again: 'Fallé', hard: 'Difícil', good: 'Bien', easy: 'Fácil' },
  interval: (minutes) => minutesOrHours(minutes, { min: 'min', h: 'h', d: 'd', mo: 'meses' }),
  loading: 'Cargando…',
  loadFailed: 'No se pudo cargar. Recarga la página.',
  localOnly: 'El repaso se guarda solo en este navegador.',
};

const TEXT: Record<Lang, StudyText> = { pt, en, es };

export const studyText = (lang: Lang): StudyText => TEXT[lang];
