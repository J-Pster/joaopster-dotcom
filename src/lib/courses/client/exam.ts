// Simulated exam mode, for notes tagged "simulado" in courses with exam rules (catalog.ts).
// The questions are the note's quiz; while the exam runs the timer counts down and grading is hidden
// (client/quiz.ts). Finishing, by hand or when time runs out, grades it by domain and keeps the attempt.
// Exam state lives only in this browser; the ticks themselves are the reader's progress.
import { pageLang } from '../i18n';
import { studyText } from '../studyText';
import { ICON } from './icons';
import { gradeOf, type Quiz, type QuizItem } from './quiz';
import { toReadingLine } from './viewport';

interface Attempt {
  readonly startedAt: number;
  readonly finishedAt: number;
  readonly right: number;
  readonly total: number;
  /** Per domain: [right, total]. */
  readonly domains: Readonly<Record<string, readonly [number, number]>>;
}

interface ExamState {
  readonly runningSince: number | undefined;
  readonly attempts: readonly Attempt[];
}

export interface ExamRules {
  readonly minutesPerQuestion: number;
  readonly targetPercent: number;
}

const STORAGE = 'jp-courses:exam:v1:';
const EMPTY: ExamState = { runningSince: undefined, attempts: [] };
const MAX_ATTEMPTS = 20;
const text = () => studyText(pageLang());
const percent = (right: number, total: number) => (total === 0 ? 0 : Math.round((right / total) * 100));

const isFiniteTime = (value: unknown): value is number => typeof value === 'number' && Number.isFinite(value) && value >= 0;

function parseAttempt(raw: unknown): Attempt {
  if (typeof raw !== 'object' || raw === null) throw new Error('bad attempt');
  const a = raw as Record<string, unknown>;
  if (!isFiniteTime(a.startedAt) || !isFiniteTime(a.finishedAt) || !isFiniteTime(a.right) || !isFiniteTime(a.total)) throw new Error('bad attempt');
  if (typeof a.domains !== 'object' || a.domains === null) throw new Error('bad attempt domains');
  const domains: Record<string, readonly [number, number]> = {};
  for (const [domain, pair] of Object.entries(a.domains)) {
    if (!Array.isArray(pair) || !isFiniteTime(pair[0]) || !isFiniteTime(pair[1])) throw new Error('bad attempt domain');
    domains[domain] = [pair[0], pair[1]];
  }
  return { startedAt: a.startedAt, finishedAt: a.finishedAt, right: a.right, total: a.total, domains };
}

// Storage is written by this page but can be edited or blocked: unreadable state starts the exam fresh.
function load(key: string): ExamState {
  try {
    const raw = localStorage.getItem(key);
    if (!raw) return EMPTY;
    const data = JSON.parse(raw) as Record<string, unknown>;
    const running = data.runningSince;
    if (running !== undefined && !isFiniteTime(running)) throw new Error('bad start time');
    if (!Array.isArray(data.attempts)) throw new Error('bad attempts');
    return { runningSince: running, attempts: data.attempts.map(parseAttempt) };
  } catch (err) {
    console.warn('[courses] unreadable exam state, starting fresh', err);
    return EMPTY;
  }
}

function save(key: string, state: ExamState): void {
  try {
    localStorage.setItem(key, JSON.stringify(state));
  } catch (err) {
    console.warn('[courses] could not save the exam state', err);
  }
}

function grade(items: readonly QuizItem[], startedAt: number, finishedAt: number): Attempt {
  const domains: Record<string, [number, number]> = {};
  let right = 0;
  for (const item of items) {
    const isRight = gradeOf(item) === 'right';
    if (isRight) right += 1;
    if (item.domain === undefined) continue;
    const pair = domains[item.domain] ?? [0, 0];
    domains[item.domain] = [pair[0] + (isRight ? 1 : 0), pair[1] + 1];
  }
  return { startedAt, finishedAt, right, total: items.length, domains };
}

const clock = (ms: number) => {
  const seconds = Math.max(0, Math.ceil(ms / 1000));
  const h = Math.floor(seconds / 3600);
  const m = Math.floor((seconds % 3600) / 60);
  const s = seconds % 60;
  return `${h > 0 ? `${h}:` : ''}${String(m).padStart(h > 0 ? 2 : 1, '0')}:${String(s).padStart(2, '0')}`;
};

const button = (label: string, className: string, onClick: () => void) => {
  const b = document.createElement('button');
  b.type = 'button';
  b.className = className;
  b.textContent = label;
  b.addEventListener('click', onClick);
  return b;
};

export interface Exam {
  /** True while the exam runs: the quiz hides its grading. */
  isRunning(): boolean;
  /** Starts drawing once the quiz exists. */
  attach(quiz: Quiz): void;
}

export function initExam(bar: HTMLElement, slug: string, url: string, rules: ExamRules, mistakesHref: string): Exam {
  const key = `${STORAGE}${slug}:${url}`;
  let state = load(key);
  let quiz: Quiz | undefined;
  let timer: number | undefined;
  const t = text();
  const minutes = () => (quiz?.items.length ?? 0) * rules.minutesPerQuestion;
  const deadline = () => (state.runningSince ?? 0) + minutes() * 60_000;
  // The card sits under the note's title; while the exam runs it becomes a dock at the bottom.
  document.querySelector('.note-content > h1')?.after(bar);

  const setState = (next: ExamState) => {
    state = next;
    save(key, state);
    quiz?.repaint();
    draw();
  };

  const start = () => {
    if (!quiz) return;
    const answered = quiz.items.some((item) => gradeOf(item) !== 'unanswered');
    if (answered && !window.confirm(t.examRestartConfirm)) return;
    quiz.clear(quiz.items);
    setState({ ...state, runningSince: Date.now() });
    const first = quiz.items[0];
    if (first) toReadingLine(first.question, 'move');
  };

  const finish = (askFirst: boolean) => {
    if (!quiz || state.runningSince === undefined) return;
    const unanswered = quiz.items.filter((item) => gradeOf(item) === 'unanswered').length;
    if (askFirst && unanswered > 0 && !window.confirm(t.examFinishConfirm(unanswered))) return;
    const finishedAt = Math.min(Date.now(), deadline());
    const attempt = grade(quiz.items, state.runningSince, finishedAt);
    setState({ runningSince: undefined, attempts: [...state.attempts, attempt].slice(-MAX_ATTEMPTS) });
    toReadingLine(bar, 'move');
  };

  const tick = () => {
    const left = deadline() - Date.now();
    if (left <= 0) {
      finish(false);
      window.alert(t.examTimeUp);
      return;
    }
    bar.dataset.warn = String(left < 10 * 60_000);
    const node = bar.querySelector('[data-exam-clock]');
    if (node) node.textContent = clock(left);
  };

  /** Answered count, progress bar and navigator marks, updated in place on every tick of a box. */
  const updateRunning = () => {
    if (!quiz || state.runningSince === undefined) return;
    const items = quiz.items;
    const answered = items.filter((item) => gradeOf(item) !== 'unanswered').length;
    const count = bar.querySelector('[data-exam-count]');
    if (count) count.textContent = `${answered}/${items.length}`;
    bar.querySelector<HTMLElement>('[data-exam-fill]')?.style.setProperty('width', `${percent(answered, items.length)}%`);
    bar.querySelector('[data-exam-progress]')?.setAttribute('aria-label', t.examAnswered(answered, items.length));
    items.forEach((item, i) => {
      const jump = bar.querySelector<HTMLElement>(`[data-exam-jump="${i}"]`);
      if (jump) jump.dataset.answered = String(gradeOf(item) !== 'unanswered');
    });
  };

  const drawRunning = () => {
    if (!quiz) return;
    const items = quiz.items;
    const clockBox = document.createElement('p');
    clockBox.className = 'exam-clock';
    clockBox.innerHTML = `${ICON.clock}<span class="sr-only">${t.examRemaining}</span><strong data-exam-clock>${clock(deadline() - Date.now())}</strong>`;
    const progress = document.createElement('div');
    progress.className = 'exam-progress';
    progress.dataset.examProgress = '';
    progress.setAttribute('role', 'img');
    progress.innerHTML = '<span class="exam-progress-count" data-exam-count></span><span class="exam-progress-track"><span data-exam-fill></span></span>';
    const navigator = document.createElement('div');
    navigator.className = 'exam-navigator';
    navigator.id = 'exam-navigator';
    navigator.hidden = true;
    const legend = document.createElement('p');
    legend.className = 'exam-navigator-legend';
    legend.innerHTML = `<span data-answered="true"></span>${t.examAnsweredShort}<span data-answered="false"></span>${t.examUnanswered}`;
    const grid = document.createElement('div');
    grid.className = 'exam-navigator-grid';
    items.forEach((item, i) => {
      const jump = document.createElement('button');
      jump.type = 'button';
      jump.dataset.examJump = String(i);
      jump.textContent = String(i + 1);
      jump.setAttribute('aria-label', t.examJump(i + 1));
      jump.addEventListener('click', () => {
        navigator.hidden = true;
        toggle.setAttribute('aria-expanded', 'false');
        toReadingLine(item.question, 'move');
        item.options[0]?.input.focus({ preventScroll: true });
      });
      grid.append(jump);
    });
    navigator.append(legend, grid);
    const toggle = document.createElement('button');
    toggle.type = 'button';
    toggle.className = 'exam-nav-toggle';
    toggle.setAttribute('aria-controls', navigator.id);
    toggle.setAttribute('aria-expanded', 'false');
    toggle.setAttribute('aria-label', t.examNavigator);
    toggle.innerHTML = `${ICON.grid}<span>${t.examNavigator}</span>`;
    toggle.addEventListener('click', () => {
      navigator.hidden = !navigator.hidden;
      toggle.setAttribute('aria-expanded', String(!navigator.hidden));
    });
    bar.replaceChildren(navigator, clockBox, progress, toggle, button(t.examFinish, 'exam-primary', () => finish(true)));
    updateRunning();
  };

  const drawIntro = () => {
    const intro = document.createElement('div');
    intro.className = 'exam-intro';
    const facts: readonly [string, string][] = [
      [String(quiz?.items.length ?? 0), t.examQuestions],
      [String(minutes()), t.examMinutes],
      [`${rules.targetPercent}%`, t.examGoal],
    ];
    intro.innerHTML = `<span class="exam-badge">${ICON.clock}${t.examBadge}</span>
      <p class="exam-heading">${t.examHeading}</p>
      <ul class="exam-facts">${facts.map(([value, label]) => `<li><strong>${value}</strong><span>${label}</span></li>`).join('')}</ul>
      <p class="exam-hidden">${t.examHidden}</p>`;
    return intro;
  };

  const drawResult = (attempt: Attempt) => {
    const domains = Object.entries(attempt.domains).sort(([a], [b]) => Number(a) - Number(b));
    const overall = percent(attempt.right, attempt.total);
    const passed = domains.length > 0
      ? domains.every(([, [right, total]]) => percent(right, total) >= rules.targetPercent)
      : overall >= rules.targetPercent;
    const result = document.createElement('div');
    result.className = 'exam-result';
    result.dataset.passed = String(passed);
    const minutesUsed = Math.round((attempt.finishedAt - attempt.startedAt) / 60_000);
    result.innerHTML = `<div class="exam-result-head">
        <span class="exam-badge">${ICON.clock}${t.examBadge}</span>
        <span class="exam-status">${passed ? ICON.check : ICON.cross}${passed ? t.examPassed : t.examBelow}</span>
      </div>
      <p class="exam-score"><strong>${overall}%</strong><span>${t.examResult(attempt.right, attempt.total)}</span></p>
      <p class="exam-meta">${t.examTarget(rules.targetPercent)} · ${t.examTimeUsed(minutesUsed)}</p>`;
    if (domains.length > 0) {
      const list = document.createElement('ul');
      list.className = 'exam-domains';
      list.style.setProperty('--exam-target', `${rules.targetPercent}%`);
      for (const [domain, [right, total]] of domains) {
        const value = percent(right, total);
        const row = document.createElement('li');
        row.dataset.below = String(value < rules.targetPercent);
        row.innerHTML = `<span class="exam-domain-name">${t.examDomain(Number(domain))}</span>
          <span class="exam-domain-count">${right}/${total}</span>
          <strong>${value}%</strong>
          <span class="exam-domain-track" aria-hidden="true"><span style="width:${value}%"></span></span>`;
        list.append(row);
      }
      result.append(list);
    }
    return result;
  };

  const drawHistory = (attempts: readonly Attempt[]) => {
    const details = document.createElement('details');
    details.className = 'exam-history';
    const summary = document.createElement('summary');
    summary.textContent = t.examHistory;
    const list = document.createElement('ol');
    const date = new Intl.DateTimeFormat(document.documentElement.lang, { dateStyle: 'short', timeStyle: 'short' });
    for (const a of [...attempts].reverse()) {
      const item = document.createElement('li');
      item.textContent = t.examHistoryItem(date.format(a.finishedAt), percent(a.right, a.total), Math.round((a.finishedAt - a.startedAt) / 60_000));
      list.append(item);
    }
    details.append(summary, list);
    return details;
  };

  const draw = () => {
    window.clearInterval(timer);
    timer = undefined;
    const running = state.runningSince !== undefined;
    bar.dataset.state = running ? 'running' : 'idle';
    document.documentElement.classList.toggle('exam-running', running);
    if (running) {
      if (Date.now() >= deadline()) {
        finish(false);
        window.alert(t.examTimeUp);
        return;
      }
      drawRunning();
      tick();
      timer = window.setInterval(tick, 1000);
      return;
    }
    const last = state.attempts.at(-1);
    const actions = document.createElement('div');
    actions.className = 'exam-actions';
    actions.append(button(last ? t.examRetake : t.examStart, 'exam-primary', start));
    if (last && last.right < last.total) {
      const mistakes = document.createElement('a');
      mistakes.className = 'study-action';
      mistakes.href = mistakesHref;
      mistakes.innerHTML = `${t.examMistakes}${ICON.arrow}`;
      actions.append(mistakes);
    }
    const children: HTMLElement[] = [last ? drawResult(last) : drawIntro(), actions];
    const previous = state.attempts.slice(0, -1);
    if (previous.length > 0) children.push(drawHistory(previous));
    bar.replaceChildren(...children);
  };

  return {
    isRunning: () => state.runningSince !== undefined,
    attach(attached) {
      quiz = attached;
      for (const item of attached.items) {
        for (const option of item.options) option.input.addEventListener('change', updateRunning);
      }
      draw();
    },
  };
}
