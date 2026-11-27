// Google Gemini: POST /v1beta/models/{model}:streamGenerateContent?alt=sse, key in x-goog-api-key.
// Docs: ai.google.dev/gemini-api/docs/text-generation. Gemini caches a repeated start of the
// prompt by itself, so the note goes in the system instruction and stays put.
import { noteBlock, systemInstructions } from './context';
import type { AnswerEnd } from './conversation';
import { isAbort, openStream, readEvents } from './http';
import { costOf } from './models';
import { MAX_TOKENS, userContent, type AskOutcome, type AskRequest } from './request';

const API = 'https://generativelanguage.googleapis.com/v1beta/models';

interface UsageMetadata {
  readonly promptTokenCount?: number;
  readonly candidatesTokenCount?: number;
  readonly cachedContentTokenCount?: number;
  readonly thoughtsTokenCount?: number;
}

interface Chunk {
  readonly candidates?: readonly {
    readonly content?: { readonly parts?: readonly { readonly text?: string; readonly thought?: boolean }[] };
    readonly finishReason?: string;
  }[];
  readonly promptFeedback?: { readonly blockReason?: string };
  readonly usageMetadata?: UsageMetadata;
}

const REFUSALS = new Set(['SAFETY', 'PROHIBITED_CONTENT', 'BLOCKLIST', 'SPII', 'RECITATION']);

function endOf(finish: string | undefined, blocked: boolean): AnswerEnd {
  if (blocked || (finish !== undefined && REFUSALS.has(finish))) return 'refusal';
  if (finish === 'MAX_TOKENS') return 'truncated';
  return 'complete';
}

export async function askGemini({ key, model, context, turns, onText, signal }: AskRequest): Promise<AskOutcome> {
  let text = '';
  try {
    const opened = await openStream(
      `${API}/${encodeURIComponent(model.apiModel)}:streamGenerateContent?alt=sse`,
      { 'x-goog-api-key': key },
      {
        systemInstruction: { parts: [{ text: noteBlock(context) }, { text: systemInstructions(context) }] },
        contents: turns.map((turn) =>
          turn.role === 'user'
            ? { role: 'user', parts: [{ text: userContent(turn) }] }
            : { role: 'model', parts: [{ text: turn.text }] },
        ),
        generationConfig: { maxOutputTokens: MAX_TOKENS, thinkingConfig: { thinkingLevel: 'low' } },
      },
      signal,
    );
    if (opened.kind === 'error') return opened;

    let finish: string | undefined;
    let blocked = false;
    let usage: UsageMetadata | undefined;
    await readEvents(opened.response, (data) => {
      if (signal.aborted) return;
      const chunk = JSON.parse(data) as Chunk;
      if (chunk.usageMetadata) usage = chunk.usageMetadata;
      if (chunk.promptFeedback?.blockReason) blocked = true;
      const candidate = chunk.candidates?.[0];
      if (!candidate) return;
      if (candidate.finishReason) finish = candidate.finishReason;
      const piece = (candidate.content?.parts ?? [])
        .filter((part) => !part.thought)
        .map((part) => part.text ?? '')
        .join('');
      if (piece === '') return;
      text += piece;
      onText(text);
    });
    if (signal.aborted) return { kind: 'stopped', text };
    const prompt = usage?.promptTokenCount ?? 0;
    const cached = usage?.cachedContentTokenCount ?? 0;
    const output = (usage?.candidatesTokenCount ?? 0) + (usage?.thoughtsTokenCount ?? 0);
    const costUsd = costOf(model.price, { fresh: prompt - cached, cached, output });
    return { kind: 'answer', text, end: endOf(finish, blocked), costUsd };
  } catch (error) {
    if (isAbort(error) || signal.aborted) return { kind: 'stopped', text };
    if (error instanceof TypeError) return { kind: 'error', error: { kind: 'network' } };
    if (error instanceof SyntaxError) return { kind: 'error', error: { kind: 'other', detail: error.message } };
    throw error;
  }
}
