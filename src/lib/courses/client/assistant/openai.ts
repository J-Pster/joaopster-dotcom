// OpenAI: POST /v1/chat/completions with stream: true.
// Docs: developers.openai.com/api/reference/resources/chat/subresources/completions/methods/create
// OpenAI caches a repeated start of the prompt by itself, so the note goes first and stays put.
import { noteBlock, systemInstructions } from './context';
import type { AnswerEnd } from './conversation';
import { isAbort, openStream, readEvents } from './http';
import { costOf } from './models';
import { MAX_TOKENS, userContent, type AskOutcome, type AskRequest } from './request';

const ENDPOINT = 'https://api.openai.com/v1/chat/completions';

interface Usage {
  readonly prompt_tokens: number;
  readonly completion_tokens: number;
  readonly prompt_tokens_details?: { readonly cached_tokens?: number };
}

interface Chunk {
  readonly choices?: readonly {
    readonly delta?: { readonly content?: string | null; readonly refusal?: string | null };
    readonly finish_reason?: string | null;
  }[];
  readonly usage?: Usage | null;
}

function endOf(finish: string | undefined, refused: boolean): AnswerEnd {
  if (refused || finish === 'content_filter') return 'refusal';
  if (finish === 'length') return 'truncated';
  return 'complete';
}

export async function askOpenAI({ key, model, context, turns, onText, signal }: AskRequest): Promise<AskOutcome> {
  let text = '';
  try {
    const opened = await openStream(
      ENDPOINT,
      { Authorization: `Bearer ${key}` },
      {
        model: model.apiModel,
        messages: [
          { role: 'developer', content: `${noteBlock(context)}\n\n${systemInstructions(context)}` },
          ...turns.map((turn) =>
            turn.role === 'user' ? { role: 'user', content: userContent(turn) } : { role: 'assistant', content: turn.text },
          ),
        ],
        stream: true,
        stream_options: { include_usage: true },
        max_completion_tokens: MAX_TOKENS,
        reasoning_effort: 'low',
      },
      signal,
    );
    if (opened.kind === 'error') return opened;

    let finish: string | undefined;
    let refused = false;
    let usage: Usage | undefined;
    const broken = await readEvents(opened.response, (event) => {
      if (signal.aborted) return;
      const chunk = event as Chunk;
      if (chunk.usage) usage = chunk.usage;
      const choice = chunk.choices?.[0];
      if (!choice) return;
      const piece = choice.delta?.content ?? choice.delta?.refusal ?? '';
      if (choice.delta?.refusal) refused = true;
      if (choice.finish_reason) finish = choice.finish_reason;
      if (piece === '') return;
      text += piece;
      onText(text);
    });
    if (signal.aborted) return { kind: 'stopped', text };
    if (broken) return { kind: 'error', error: broken };
    // Every answer ends with a finish reason; a stream that closed without one was cut on the way.
    if (finish === undefined) return { kind: 'error', error: { kind: 'network' } };
    const cached = usage?.prompt_tokens_details?.cached_tokens ?? 0;
    const costUsd = usage
      ? costOf(model.price, { fresh: usage.prompt_tokens - cached, cached, output: usage.completion_tokens })
      : 0;
    return { kind: 'answer', text, end: endOf(finish, refused), costUsd };
  } catch (error) {
    if (isAbort(error) || signal.aborted) return { kind: 'stopped', text };
    throw error;
  }
}
