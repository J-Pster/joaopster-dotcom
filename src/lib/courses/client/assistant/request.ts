// What every provider receives and gives back, plus the pieces of the request they share.
import type { NoteContext } from './context';
import type { AnswerEnd, Turn, UserTurn } from './conversation';
import type { AssistantModel } from './models';

/** Room for a long answer; the reader can stop it at any time. */
export const MAX_TOKENS = 16000;

export type AskError =
  | { readonly kind: 'key' }
  | { readonly kind: 'permission' }
  | { readonly kind: 'rateLimit' }
  | { readonly kind: 'overloaded' }
  /** The request did not reach the provider, or its answer could not be read (OpenAI answers a
   *  wrong key without the header that lets the page read it, so it lands here too). */
  | { readonly kind: 'network' }
  /** The code of this page did not load (offline, or the site was updated since the page opened). */
  | { readonly kind: 'load' }
  | { readonly kind: 'other'; readonly detail: string };

export type AskOutcome =
  | { readonly kind: 'answer'; readonly text: string; readonly end: AnswerEnd; readonly costUsd: number }
  | { readonly kind: 'stopped'; readonly text: string }
  | { readonly kind: 'error'; readonly error: AskError };

export interface AskRequest {
  readonly key: string;
  readonly model: AssistantModel;
  readonly context: NoteContext;
  /** The conversation so far plus the new question, which is the last turn. */
  readonly turns: readonly Turn[];
  readonly onText: (textSoFar: string) => void;
  readonly signal: AbortSignal;
}

/** A question as the model reads it: the passages the reader added, where they are, then the question. */
export function userContent(turn: UserTurn): string {
  const parts = turn.passages.map((passage) => `<passage>\n${passage}\n</passage>`);
  if (turn.section) parts.push(`(I am reading the section "${turn.section}".)`);
  parts.push(turn.text);
  return parts.join('\n\n');
}
