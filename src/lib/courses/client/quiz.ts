// Grades the quizzes of a course note in the page. The build marks each question (lib/courses/quiz.ts);
// the reader keeps the ticks (client/reader.ts), and this module only reads them: a question is graded
// as soon as as many options are ticked as it has answers, then locks until "retry".
// In a running simulated exam (client/exam.ts) grading is hidden: no colours, no answer key.
import { pageLang } from '../i18n';
import { studyText } from '../studyText';
import { gradeAnswer, type Grade } from '../studyModel';
import { ICON } from './icons';

export interface QuizOptionBox {
  readonly letter: string;
  readonly input: HTMLInputElement;
  readonly item: HTMLElement;
}

export interface QuizItem {
  readonly id: string;
  /** Quiz the question belongs to, in the note. */
  readonly quiz: string;
  readonly correct: readonly string[];
  readonly domain: number | undefined;
  readonly question: HTMLElement;
  readonly options: readonly QuizOptionBox[];
  /** The question's paragraph in the answer key. */
  readonly answer: HTMLElement;
  readonly feedback: HTMLElement;
}

export interface Quiz {
  readonly items: readonly QuizItem[];
  repaint(): void;
  /** Unticks the given questions and saves the change. */
  clear(items: readonly QuizItem[]): void;
}

const text = () => studyText(pageLang());

export const selectedOf = (item: QuizItem): string[] => item.options.flatMap((o) => (o.input.checked ? [o.letter] : []));
export const gradeOf = (item: QuizItem): Grade => gradeAnswer(selectedOf(item), item.correct);
export const answerLabel = (letters: readonly string[]) => letters.map((l) => `${l})`).join(' + ');


/** The explanation of an answer-key paragraph, without its leading "**N. x)**" label (the verdict says it). */
export function answerExplanation(answer: Element): HTMLElement {
  const explanation = document.createElement('div');
  explanation.className = 'quiz-explanation';
  explanation.innerHTML = answer.innerHTML;
  // lib/courses/quiz.ts splits the key so that every answer paragraph opens with that bold label.
  const label = explanation.firstElementChild;
  if (label?.tagName !== 'STRONG') throw new Error(`Answer ${answer.getAttribute('data-quiz-answer')} has no bold label`);
  label.remove();
  const lead = explanation.firstChild;
  if (lead?.nodeType === Node.TEXT_NODE) lead.textContent = (lead.textContent ?? '').trimStart();
  return explanation;
}

function readItem(question: HTMLElement): QuizItem {
  const id = question.dataset.quizQuestion;
  const correct = question.dataset.correct?.split(',');
  const list = document.querySelector<HTMLElement>(`[data-quiz-options="${id}"]`);
  const answer = document.querySelector<HTMLElement>(`[data-quiz-answer="${id}"]`);
  if (!id || !correct || !list || !answer) throw new Error(`Quiz question ${id} is missing its parts`);
  // One answer draws a round control, several a square one (courses-study.css).
  list.dataset.multi = String(correct.length > 1);
  if (correct.length > 1) {
    const pick = document.createElement('p');
    pick.className = 'quiz-pick';
    pick.textContent = text().quizPick(correct.length);
    list.before(pick);
  }
  const options = [...list.querySelectorAll<HTMLElement>('[data-option]')].map((item) => {
    const input = item.querySelector<HTMLInputElement>('input[type="checkbox"]');
    const letter = item.dataset.option;
    if (!input || !letter) throw new Error(`Quiz question ${id} has an option without a checkbox`);
    // The whole option row picks it, not only the small checkbox (GFM renders no <label>).
    item.addEventListener('click', (event) => {
      if (event.target === input || input.disabled || (event.target instanceof Element && event.target.closest('a'))) return;
      input.checked = !input.checked;
      input.dispatchEvent(new Event('change'));
    });
    return { letter, input, item };
  });
  const feedback = document.createElement('div');
  feedback.className = 'quiz-feedback';
  feedback.hidden = true;
  feedback.setAttribute('aria-live', 'polite');
  list.after(feedback);
  const domain = question.dataset.domain;
  return { id, quiz: id.split('-')[0], correct, domain: domain === undefined ? undefined : Number(domain), question, options, answer, feedback };
}

function paintItem(item: QuizItem, blind: boolean, onRetry: (item: QuizItem) => void): void {
  const grade = gradeOf(item);
  const graded = !blind && (grade === 'right' || grade === 'wrong');
  const t = text();
  item.question.dataset.grade = blind ? 'hidden' : grade;
  for (const option of item.options) {
    const isAnswer = item.correct.includes(option.letter);
    const outcome = !graded ? undefined : isAnswer ? 'right' : option.input.checked ? 'wrong' : 'muted';
    option.item.classList.toggle('quiz-option--right', outcome === 'right');
    option.item.classList.toggle('quiz-option--wrong', outcome === 'wrong');
    option.item.classList.toggle('quiz-option--muted', outcome === 'muted');
    // Selection and correctness are separate signals: the control shows the pick, the tag the verdict.
    const tag = outcome === 'right' ? t.optionCorrect : outcome === 'wrong' ? t.optionYours : undefined;
    if (tag) option.item.dataset.outcome = tag;
    else delete option.item.dataset.outcome;
    option.input.disabled = graded;
  }
  item.feedback.hidden = !graded;
  if (!graded) {
    item.feedback.replaceChildren();
    return;
  }
  const verdict = document.createElement('p');
  verdict.className = 'quiz-verdict';
  verdict.innerHTML = `<span class="quiz-verdict-icon" aria-hidden="true">${grade === 'right' ? ICON.check : ICON.cross}</span>`;
  verdict.append(grade === 'right' ? t.right : t.wrong(answerLabel(item.correct)));
  const retry = document.createElement('button');
  retry.type = 'button';
  retry.className = 'quiz-retry quiz-retry--quiet';
  retry.innerHTML = ICON.retry;
  retry.append(t.retryQuestion);
  retry.addEventListener('click', () => onRetry(item));
  item.feedback.dataset.grade = grade;
  item.feedback.replaceChildren(verdict, answerExplanation(item.answer), retry);
}

function paintScore(slot: HTMLElement, items: readonly QuizItem[], blind: boolean, onRetry: (items: readonly QuizItem[]) => void): void {
  const grades = items.map(gradeOf);
  const right = grades.filter((g) => g === 'right').length;
  const wrong = grades.filter((g) => g === 'wrong').length;
  const answered = right + wrong;
  slot.hidden = blind || answered === 0;
  if (slot.hidden) return;
  const t = text();
  const share = (count: number) => `${(count / items.length) * 100}%`;
  const summary = document.createElement('div');
  summary.className = 'quiz-score-text';
  summary.innerHTML = `<p class="quiz-score-label">${t.quizScoreTitle}</p>
    <p class="quiz-score-value">${t.quizScoreRight(right, answered)}</p>
    <p class="quiz-score-meta">${t.quizScoreAnswered(answered, items.length)}</p>`;
  const bar = document.createElement('div');
  bar.className = 'quiz-score-bar';
  bar.setAttribute('aria-hidden', 'true');
  bar.innerHTML = `<span class="quiz-score-bar-right" style="width:${share(right)}"></span><span class="quiz-score-bar-wrong" style="width:${share(wrong)}"></span>`;
  const retry = document.createElement('button');
  retry.type = 'button';
  retry.className = 'quiz-retry';
  retry.innerHTML = ICON.retry;
  retry.append(t.retryQuiz);
  retry.addEventListener('click', () => onRetry(items));
  slot.replaceChildren(summary, retry, bar);
}

/** The answer key of every quiz on the page: hidden while an exam runs. */
const answerKeys = (items: readonly QuizItem[]) =>
  new Set(items.flatMap((item) => {
    const key = item.answer.closest<HTMLElement>('.callout');
    return key ? [key] : [];
  }));

export function initQuiz(isBlind: () => boolean): Quiz {
  const items = [...document.querySelectorAll<HTMLElement>('[data-quiz-question]')].map(readItem);
  const byQuiz = new Map<string, QuizItem[]>();
  for (const item of items) byQuiz.set(item.quiz, [...(byQuiz.get(item.quiz) ?? []), item]);
  const keys = answerKeys(items);
  // How the quiz works, once above its first question: hidden in a running exam, which grades at the end.
  const intros = [...byQuiz.values()].map(([first]) => {
    const intro = document.createElement('p');
    intro.className = 'quiz-intro';
    intro.textContent = text().quizIntro;
    first.question.before(intro);
    return intro;
  });

  const clear = (cleared: readonly QuizItem[]) => {
    const boxes = cleared.flatMap((item) => item.options.map((o) => o.input));
    for (const box of boxes) {
      box.disabled = false;
      box.checked = false;
    }
    // The reader saves every tick of the note on change (client/reader.ts initTaskChecks).
    boxes[0]?.dispatchEvent(new Event('change'));
    repaint();
  };

  const repaint = () => {
    const blind = isBlind();
    for (const item of items) paintItem(item, blind, (retried) => clear([retried]));
    for (const [quiz, quizItems] of byQuiz) {
      const slot = document.querySelector<HTMLElement>(`[data-quiz-score="${quiz}"]`);
      if (slot) paintScore(slot, quizItems, blind, clear);
    }
    for (const key of keys) key.hidden = blind;
    for (const intro of intros) intro.hidden = blind;
  };

  for (const item of items) {
    for (const option of item.options) option.input.addEventListener('change', repaint);
  }
  repaint();
  return { items, repaint, clear };
}
