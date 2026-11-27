// The call to Anthropic's Messages API, straight from the browser with the reader's own key (the SDK
// sends the header that allows a direct browser call only because the key is theirs, never ours).
// The SDK is loaded on the first question, so pages where nobody asks anything do not download it.
import type Anthropic from '@anthropic-ai/sdk';
import { noteBlock, systemInstructions, type NoteContext } from './context';
import type { AnswerEnd, ModelChoice, Turn } from './conversation';

const MODEL_ID: Record<ModelChoice, string> = { fast: 'claude-haiku-5-5', smart: 'claude-sonnet-5-5' };
// Room for a long explanation with a code block; the reader pays for what is generated.
const MAX_TOKENS = 16000;

// US$ per million tokens (Anthropic price list, November 2026). Cache writes cost 1.25x the input
// price and cache reads are listed per model. Used only to show the reader an estimate.
const PRICE: Record<ModelChoice, { input: number; output: number; cacheRead: number }> = {
  fast: { input: 0.1, output: 0.5, cacheRead: 0.01 },
  smart: { input: 2, output: 10, cacheRead: 0.1 },
};

export type AskError =
  | { readonly kind: 'key' }
  | { readonly kind: 'permission' }
  | { readonly kind: 'rateLimit' }
  | { readonly kind: 'overloaded' }
  | { readonly kind: 'network' }
  | { readonly kind: 'other'; readonly detail: string };

export type AskOutcome =
  | { readonly kind: 'answer'; readonly text: string; readonly end: AnswerEnd; readonly costUsd: number }
  | { readonly kind: 'stopped'; readonly text: string }
  | { readonly kind: 'error'; readonly error: AskError };

export interface AskRequest {
  readonly key: string;
  readonly model: ModelChoice;
  readonly context: NoteContext;
  /** The conversation so far plus the new question, which is the last turn. */
  readonly turns: readonly Turn[];
  readonly onText: (textSoFar: string) => void;
  readonly signal: AbortSignal;
}

function userContent(turn: Extract<Turn, { role: 'user' }>): string {
  const parts = turn.passages.map((passage) => `<passage>\n${passage}\n</passage>`);
  if (turn.section) parts.push(`(I am reading the section "${turn.section}".)`);
  parts.push(turn.text);
  return parts.join('\n\n');
}

function toMessages(turns: readonly Turn[]): Anthropic.Beta.BetaMessageParam[] {
  return turns.map((turn) =>
    turn.role === 'user' ? { role: 'user', content: userContent(turn) } : { role: 'assistant', content: turn.text },
  );
}

function costOf(model: ModelChoice, usage: Anthropic.Beta.BetaUsage): number {
  const price = PRICE[model];
  const written = usage.cache_creation_input_tokens ?? 0;
  const read = usage.cache_read_input_tokens ?? 0;
  const dollars =
    usage.input_tokens * price.input +
    written * price.input * 1.25 +
    read * price.cacheRead +
    usage.output_tokens * price.output;
  return dollars / 1_000_000;
}

function endOf(stop: Anthropic.Beta.BetaMessage['stop_reason']): AnswerEnd {
  if (stop === 'max_tokens') return 'truncated';
  if (stop === 'refusal') return 'refusal';
  return 'complete';
}

function errorOf(sdk: typeof Anthropic, error: unknown): AskError {
  if (error instanceof sdk.AuthenticationError) return { kind: 'key' };
  if (error instanceof sdk.PermissionDeniedError) return { kind: 'permission' };
  if (error instanceof sdk.RateLimitError) return { kind: 'rateLimit' };
  if (error instanceof sdk.APIConnectionError) return { kind: 'network' };
  if (error instanceof sdk.APIError && error.status !== undefined && error.status >= 500) return { kind: 'overloaded' };
  if (error instanceof sdk.APIError) return { kind: 'other', detail: error.message };
  throw error;
}

export async function ask({ key, model, context, turns, onText, signal }: AskRequest): Promise<AskOutcome> {
  const { default: sdk } = await import('@anthropic-ai/sdk');
  const client = new sdk({ apiKey: key, dangerouslyAllowBrowser: true });
  // Sonnet 5.5 can hand a request its safety classifiers decline to another model in the same call.
  const fallback = model === 'smart' ? { betas: ['server-side-fallback-2026-07-01'], fallbacks: 'default' as const } : {};
  const stream = client.beta.messages.stream(
    {
      model: MODEL_ID[model],
      max_tokens: MAX_TOKENS,
      output_config: { effort: 'low' },
      // The note is the long, stable part: cached once, read from the cache on every next question.
      system: [
        { type: 'text', text: systemInstructions(context) },
        { type: 'text', text: noteBlock(context), cache_control: { type: 'ephemeral' } },
      ],
      // And the conversation so far, cached up to its last turn.
      cache_control: { type: 'ephemeral' },
      messages: toMessages(turns),
      ...fallback,
    },
    { signal },
  );

  let text = '';
  stream.on('text', (delta) => {
    // Events already buffered when the reader stops must not grow the answer past where it stopped.
    if (signal.aborted) return;
    text += delta;
    onText(text);
  });
  try {
    const message = await stream.finalMessage();
    return { kind: 'answer', text, end: endOf(message.stop_reason), costUsd: costOf(model, message.usage) };
  } catch (error) {
    if (error instanceof sdk.APIUserAbortError || signal.aborted) return { kind: 'stopped', text };
    return { kind: 'error', error: errorOf(sdk, error) };
  }
}
