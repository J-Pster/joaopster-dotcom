// Anthropic, through its SDK (loaded only when the reader asks with a Claude model).
import type Anthropic from '@anthropic-ai/sdk';
import { noteBlock, systemInstructions } from './context';
import type { AnswerEnd, Turn } from './conversation';
import { costOf } from './models';
import { MAX_TOKENS, userContent, type AskError, type AskOutcome, type AskRequest } from './request';

/** Writing the cache costs a quarter more than plain input. */
const CACHE_WRITE = 1.25;

function toMessages(turns: readonly Turn[]): Anthropic.Beta.BetaMessageParam[] {
  return turns.map((turn) =>
    turn.role === 'user' ? { role: 'user', content: userContent(turn) } : { role: 'assistant', content: turn.text },
  );
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
  // Raised by the SDK itself, for example on a stream it cannot read.
  if (error instanceof sdk.AnthropicError) return { kind: 'other', detail: error.message };
  throw error;
}

export async function askAnthropic({ key, model, context, turns, onText, signal }: AskRequest): Promise<AskOutcome> {
  let sdk: typeof Anthropic;
  try {
    ({ default: sdk } = await import('@anthropic-ai/sdk'));
  } catch {
    return { kind: 'error', error: { kind: 'load' } };
  }
  const client = new sdk({ apiKey: key, dangerouslyAllowBrowser: true });
  // Sonnet 5.5 can hand a request its safety classifiers decline to another model in the same call.
  const fallback = model.choice === 'anthropic-smart' ? { betas: ['server-side-fallback-2026-07-01'], fallbacks: 'default' as const } : {};
  const stream = client.beta.messages.stream(
    {
      model: model.apiModel,
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
    const usage = message.usage;
    const written = usage.cache_creation_input_tokens ?? 0;
    const costUsd = costOf(model.price, {
      fresh: usage.input_tokens + written * CACHE_WRITE,
      cached: usage.cache_read_input_tokens ?? 0,
      output: usage.output_tokens,
    });
    return { kind: 'answer', text, end: endOf(message.stop_reason), costUsd };
  } catch (error) {
    if (error instanceof sdk.APIUserAbortError || signal.aborted) return { kind: 'stopped', text };
    return { kind: 'error', error: errorOf(sdk, error) };
  }
}
