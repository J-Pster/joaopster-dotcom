// Spaced review of a course with FSRS (ts-fsrs). The deck is built from what the reader did:
// - every glossary term linked from a lesson marked as read;
// - every quiz question answered wrong (it stays in the deck once it got there).
// New cards enter a few per day, mistakes first. The schedule of each card lives in this browser.
// Card content is read from the note pages themselves, so it is always the published text.
import { createEmptyCard, fsrs, generatorParameters, Rating, State, type Card, type Grade } from 'ts-fsrs';
import { pageLang } from '../i18n';
import { loadProgress } from '../progress';
import type { StudyIndex, StudyQuestion, StudyTerm } from '../studyModel';
import { studyText } from '../studyText';
import { ICON } from './icons';
import { courseMistakes, emptyState, loadStudyIndex } from './mistakes';
import { answerExplanation, answerLabel } from './quiz';

const STORAGE = 'jp-courses:review:v1:';
const NEW_PER_DAY = 20;
/** Learning cards due this soon are shown now instead of making the reader wait for them. */
const LEARN_AHEAD_MS = 20 * 60_000;
const TERM_BLOCKS = 4;

type CardId = string;
type DeckCard =
  | { readonly kind: 'term'; readonly id: CardId; readonly term: StudyTerm }
  | { readonly kind: 'question'; readonly id: CardId; readonly question: StudyQuestion };

interface ReviewState {
  readonly cards: Readonly<Record<CardId, Card>>;
  /** New cards introduced on a local day ("YYYY-MM-DD"). */
  readonly introduced: { readonly day: string; readonly count: number };
}

const RATINGS: Readonly<Record<'again' | 'hard' | 'good' | 'easy', Grade>> = {
  again: Rating.Again,
  hard: Rating.Hard,
  good: Rating.Good,
  easy: Rating.Easy,
};

const today = () => new Date().toLocaleDateString('sv');
const scheduler = fsrs(generatorParameters({ enable_fuzz: true }));

// ---- Storage. Dates are kept as milliseconds; anything unreadable starts the review fresh.

interface StoredCard extends Omit<Card, 'due' | 'last_review'> {
  readonly due: number;
  readonly last_review?: number;
}

const isNumber = (value: unknown): value is number => typeof value === 'number' && Number.isFinite(value);

function parseCard(raw: unknown): Card {
  if (typeof raw !== 'object' || raw === null) throw new Error('bad card');
  const c = raw as Record<string, unknown>;
  const numbers = ['due', 'stability', 'difficulty', 'elapsed_days', 'scheduled_days', 'learning_steps', 'reps', 'lapses', 'state'] as const;
  for (const field of numbers) if (!isNumber(c[field])) throw new Error(`bad card field ${field}`);
  if (c.last_review !== undefined && !isNumber(c.last_review)) throw new Error('bad card last_review');
  const stored = c as unknown as StoredCard;
  if (!Object.values(State).includes(stored.state)) throw new Error('bad card state');
  return {
    ...stored,
    due: new Date(stored.due),
    last_review: stored.last_review === undefined ? undefined : new Date(stored.last_review),
  };
}

function load(key: string): ReviewState {
  const empty: ReviewState = { cards: {}, introduced: { day: today(), count: 0 } };
  try {
    const raw = localStorage.getItem(key);
    if (!raw) return empty;
    const data = JSON.parse(raw) as Record<string, unknown>;
    if (typeof data.cards !== 'object' || data.cards === null) throw new Error('bad cards');
    const cards: Record<CardId, Card> = {};
    for (const [id, card] of Object.entries(data.cards)) cards[id] = parseCard(card);
    const introduced = data.introduced as { day?: unknown; count?: unknown } | undefined;
    const sameDay = introduced?.day === today() && isNumber(introduced.count);
    return { cards, introduced: { day: today(), count: sameDay ? Number(introduced.count) : 0 } };
  } catch (err) {
    console.warn('[courses] unreadable review state, starting fresh', err);
    return empty;
  }
}

function save(key: string, state: ReviewState): void {
  const cards: Record<CardId, StoredCard> = {};
  for (const [id, card] of Object.entries(state.cards)) {
    cards[id] = { ...card, due: card.due.getTime(), last_review: card.last_review?.getTime() };
  }
  try {
    localStorage.setItem(key, JSON.stringify({ cards, introduced: state.introduced }));
  } catch (err) {
    console.warn('[courses] could not save the review', err);
  }
}

// ---- Deck

function buildDeck(index: StudyIndex, slug: string, known: ReadonlySet<CardId>): DeckCard[] {
  const read = new Set(loadProgress(slug).read);
  const readNotes = new Set(index.notes.flatMap((note, i) => (read.has(note.url) ? [i] : [])));
  const wrong = new Set(courseMistakes(index, slug));
  const questions: DeckCard[] = index.questions.flatMap((question) => {
    const id = `q:${question.note}#${question.id}`;
    return wrong.has(question) || known.has(id) ? [{ kind: 'question' as const, id, question }] : [];
  });
  const terms: DeckCard[] = index.terms.flatMap((term) => {
    const id = `t:${term.url}`;
    const studied = term.lessons.some((lesson) => readNotes.has(lesson));
    return studied || known.has(id) ? [{ kind: 'term' as const, id, term }] : [];
  });
  return [...questions, ...terms];
}

interface Queue {
  /** Scheduled cards due now. */
  readonly due: DeckCard[];
  readonly fresh: DeckCard[];
  /** Learning cards due within LEARN_AHEAD_MS: shown only when nothing else is left. */
  readonly ahead: DeckCard[];
}

function queueOf(deck: readonly DeckCard[], state: ReviewState, now: number): Queue {
  const dueBy = (limit: (card: Card) => number) =>
    deck
      .filter((card) => {
        const scheduled = state.cards[card.id];
        return scheduled !== undefined && scheduled.due.getTime() <= limit(scheduled);
      })
      .sort((a, b) => state.cards[a.id].due.getTime() - state.cards[b.id].due.getTime());
  const due = dueBy(() => now);
  const dueIds = new Set(due.map((card) => card.id));
  const ahead = dueBy((card) => (card.state === State.Review ? now : now + LEARN_AHEAD_MS)).filter((card) => !dueIds.has(card.id));
  const room = Math.max(0, NEW_PER_DAY - state.introduced.count);
  const fresh = deck.filter((card) => state.cards[card.id] === undefined).slice(0, room);
  return { due, fresh, ahead };
}

// ---- Card content, read from the published note pages.

const pages = new Map<string, Promise<Document>>();
function fetchPage(url: string): Promise<Document> {
  const cached = pages.get(url);
  if (cached) return cached;
  const page = fetch(url).then(async (response) => {
    if (!response.ok) throw new Error(`${url}: HTTP ${response.status}`);
    return new DOMParser().parseFromString(await response.text(), 'text/html');
  });
  pages.set(url, page);
  return page;
}

const cloneInert = (node: Element): Element => {
  const copy = node.cloneNode(true) as Element;
  copy.removeAttribute('id');
  for (const input of copy.querySelectorAll('input')) input.remove();
  return copy;
};

async function termContent(term: StudyTerm): Promise<{ front: Node[]; back: Node[] }> {
  const doc = await fetchPage(term.url);
  const content = doc.querySelector('.note-content');
  if (!content) throw new Error(`Term page without content: ${term.url}`);
  const blocks: Element[] = [];
  for (const child of content.children) {
    if (child.tagName === 'H1') continue;
    if (child.tagName === 'H2' || blocks.length >= TERM_BLOCKS) break;
    blocks.push(cloneInert(child));
  }
  const title = document.createElement('p');
  title.className = 'review-term';
  title.textContent = term.title;
  return { front: [title], back: blocks };
}

async function questionContent(question: StudyQuestion): Promise<{ front: Node[]; back: Node[] }> {
  const doc = await fetchPage(question.note);
  const part = (selector: string) => {
    const found = doc.querySelector(selector);
    if (!found) throw new Error(`Question ${question.id} not found in ${question.note}: ${selector}`);
    return cloneInert(found);
  };
  const verdict = document.createElement('p');
  verdict.className = 'review-answer';
  verdict.textContent = studyText(pageLang()).reviewAnswer(answerLabel(question.correct));
  const explanation = answerExplanation(part(`[data-quiz-answer="${question.id}"]`));
  return {
    front: [part(`[data-quiz-question="${question.id}"]`), part(`[data-quiz-options="${question.id}"]`)],
    back: [verdict, explanation],
  };
}

// ---- Page

function requireElement<T extends HTMLElement>(root: ParentNode, selector: string): T {
  const element = root.querySelector<T>(selector);
  if (!element) throw new Error(`Review page is missing ${selector}`);
  return element;
}

export async function initReview(): Promise<void> {
  const page = requireElement<HTMLElement>(document, '[data-review]');
  const slug = requireElement<HTMLElement>(document, '.course-main').dataset.course;
  const indexUrl = page.dataset.studyIndex;
  if (!slug || !indexUrl) throw new Error('Review page without course data');
  const count = requireElement<HTMLElement>(page, '[data-review-count]');
  const cardBox = requireElement<HTMLElement>(page, '[data-review-card]');
  const kind = requireElement<HTMLElement>(page, '[data-review-kind]');
  const front = requireElement<HTMLElement>(page, '[data-review-front]');
  const back = requireElement<HTMLElement>(page, '[data-review-back]');
  const show = requireElement<HTMLButtonElement>(page, '[data-review-show]');
  const ratings = requireElement<HTMLElement>(page, '[data-review-ratings]');
  const t = studyText(pageLang());
  const key = `${STORAGE}${slug}`;

  const index = await loadStudyIndex(indexUrl).catch((err: unknown) => {
    count.textContent = t.loadFailed;
    throw err;
  });
  let state = load(key);
  const deck = buildDeck(index, slug, new Set(Object.keys(state.cards)));
  let current: DeckCard | undefined;
  let revealed = false;
  let loaded = false;

  const next = async () => {
    const queue = queueOf(deck, state, Date.now());
    count.innerHTML = `<span class="review-stat"><strong>${queue.due.length + queue.ahead.length}</strong>${t.reviewDueLabel}</span>`
      + `<span class="review-stat"><strong>${queue.fresh.length}</strong>${t.reviewNewLabel}</span>`;
    current = queue.due[0] ?? queue.fresh[0] ?? queue.ahead[0];
    revealed = false;
    loaded = false;
    if (!current) {
      cardBox.hidden = true;
      const reviewedToday = state.introduced.count > 0 || Object.values(state.cards).some((c) => c.last_review?.toLocaleDateString('sv') === today());
      count.replaceChildren(deck.length === 0
        ? emptyState(ICON.cards, t.reviewLink, t.reviewNeedsReading)
        : emptyState(reviewedToday ? ICON.trophy : ICON.cards, reviewedToday ? t.reviewDone : t.reviewLink, t.reviewNothing));
      return;
    }
    const shown = current;
    kind.textContent = shown.kind === 'term' ? t.reviewTerm : t.reviewQuestion;
    front.replaceChildren(document.createTextNode(t.loading));
    back.replaceChildren();
    back.hidden = true;
    ratings.hidden = true;
    show.hidden = false;
    cardBox.hidden = false;
    const content = await (shown.kind === 'term' ? termContent(shown.term) : questionContent(shown.question)).catch((err: unknown) => {
      front.textContent = t.loadFailed;
      throw err;
    });
    if (current !== shown) return;
    const link = document.createElement('a');
    link.className = 'review-open';
    link.href = shown.kind === 'term' ? shown.term.url : shown.question.note;
    link.textContent = t.reviewOpenNote;
    front.replaceChildren(...content.front);
    back.replaceChildren(...content.back, link);
    loaded = true;
    const preview = scheduler.repeat(state.cards[shown.id] ?? createEmptyCard(), new Date());
    for (const button of ratings.querySelectorAll<HTMLElement>('[data-rating]')) {
      const grade = RATINGS[button.dataset.rating as keyof typeof RATINGS];
      const label = button.querySelector('[data-interval]');
      if (label) label.textContent = t.interval((preview[grade].card.due.getTime() - Date.now()) / 60_000);
    }
  };

  const reveal = () => {
    if (!current || revealed || !loaded) return;
    revealed = true;
    back.hidden = false;
    show.hidden = true;
    ratings.hidden = false;
    // On a phone the answer opens below the fold: bring it up to the reader.
    back.scrollIntoView({ block: 'start', behavior: 'smooth' });
  };

  const rate = (rating: keyof typeof RATINGS) => {
    if (!current || !revealed) return;
    const isNew = state.cards[current.id] === undefined;
    const card = state.cards[current.id] ?? createEmptyCard();
    const { card: scheduled } = scheduler.next(card, new Date(), RATINGS[rating]);
    state = {
      cards: { ...state.cards, [current.id]: scheduled },
      introduced: { day: today(), count: state.introduced.count + (isNew ? 1 : 0) },
    };
    save(key, state);
    void next();
  };

  show.addEventListener('click', reveal);
  for (const button of ratings.querySelectorAll<HTMLElement>('[data-rating]')) {
    button.addEventListener('click', () => rate(button.dataset.rating as keyof typeof RATINGS));
  }
  document.addEventListener('keydown', (event) => {
    if (event.target instanceof HTMLElement && event.target.closest('input, textarea, [contenteditable], dialog')) return;
    if (event.key === ' ' || event.key === 'Enter') {
      if (!revealed && current) {
        event.preventDefault();
        reveal();
      }
      return;
    }
    const rating = (['again', 'hard', 'good', 'easy'] as const)[Number(event.key) - 1];
    if (rating) rate(rating);
  });
  await next();
}
