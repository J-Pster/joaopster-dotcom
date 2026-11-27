// The assistant's conversations, one per note, saved only in this browser. A conversation is a list of
// turns that always alternates user, assistant, ... and ends with an assistant turn: a question whose
// answer failed is taken back out (its text returns to the composer), so the list stays valid to send.
import { isModelChoice, type ModelChoice } from './models';

export interface UserTurn {
  readonly role: 'user';
  readonly text: string;
  /** Passages of the note the reader added to this question. */
  readonly passages: readonly string[];
  /** The section the reader was in when asking. */
  readonly section?: string;
}

export type AnswerEnd = 'complete' | 'stopped' | 'truncated' | 'refusal';

export interface AssistantTurn {
  readonly role: 'assistant';
  readonly text: string;
  readonly end: AnswerEnd;
  readonly costUsd?: number;
}

export type Turn = UserTurn | AssistantTurn;

const CHAT_PREFIX = 'jp-courses:chat:v1:';
const SETTINGS_KEY = 'jp-courses:assistant';
// Older turns beyond this are dropped when saving: the note itself is the long context, not the chat.
const MAX_TURNS = 40;
const END_VALUES: readonly AnswerEnd[] = ['complete', 'stopped', 'truncated', 'refusal'];

const isString = (value: unknown): value is string => typeof value === 'string';

function parseTurn(value: unknown): Turn | undefined {
  if (typeof value !== 'object' || value === null) return undefined;
  const turn = value as Record<string, unknown>;
  if (!isString(turn.text) || turn.text === '') return undefined;
  if (turn.role === 'user') {
    const passages = Array.isArray(turn.passages) ? turn.passages.filter(isString) : [];
    return { role: 'user', text: turn.text, passages, ...(isString(turn.section) ? { section: turn.section } : {}) };
  }
  if (turn.role === 'assistant' && END_VALUES.includes(turn.end as AnswerEnd)) {
    const cost = typeof turn.costUsd === 'number' && Number.isFinite(turn.costUsd) ? { costUsd: turn.costUsd } : {};
    return { role: 'assistant', text: turn.text, end: turn.end as AnswerEnd, ...cost };
  }
  return undefined;
}

/** Keeps only whole user/assistant pairs, so a saved conversation is always valid to send again. */
function pairs(turns: readonly Turn[]): Turn[] {
  const kept: Turn[] = [];
  for (let i = 0; i + 1 < turns.length; i += 2) {
    const question = turns[i];
    const answer = turns[i + 1];
    if (question?.role === 'user' && answer?.role === 'assistant') kept.push(question, answer);
    else break;
  }
  return kept;
}

// Saved by this module, but another version of the site or a hand edit may have left anything there.
export function loadConversation(noteUrl: string): Turn[] {
  const raw = localStorage.getItem(CHAT_PREFIX + noteUrl);
  if (raw === null) return [];
  let parsed: unknown;
  try {
    parsed = JSON.parse(raw);
  } catch {
    return [];
  }
  if (!Array.isArray(parsed)) return [];
  const turns = parsed.map(parseTurn);
  return turns.every((turn): turn is Turn => turn !== undefined) ? pairs(turns) : [];
}

/** Returns false when the browser refused to store it (storage full or blocked). */
export function saveConversation(noteUrl: string, turns: readonly Turn[]): boolean {
  const kept = pairs(turns).slice(-MAX_TURNS);
  try {
    if (kept.length === 0) localStorage.removeItem(CHAT_PREFIX + noteUrl);
    else localStorage.setItem(CHAT_PREFIX + noteUrl, JSON.stringify(kept));
    return true;
  } catch {
    return false;
  }
}

/** The model the reader picked last, if any. Before other providers existed it was 'fast' or 'smart'. */
export function loadModelChoice(): ModelChoice | undefined {
  const raw = localStorage.getItem(SETTINGS_KEY);
  if (raw === null) return undefined;
  let model: unknown;
  try {
    const parsed: unknown = JSON.parse(raw);
    model = typeof parsed === 'object' && parsed !== null ? (parsed as Record<string, unknown>).model : undefined;
  } catch {
    return undefined;
  }
  if (model === 'fast' || model === 'smart') return `anthropic-${model}`;
  return isModelChoice(model) ? model : undefined;
}

export function saveModelChoice(model: ModelChoice): void {
  localStorage.setItem(SETTINGS_KEY, JSON.stringify({ model }));
}
