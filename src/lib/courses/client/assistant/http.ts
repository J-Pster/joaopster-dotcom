// Plain HTTP for the providers without an SDK in the page (OpenAI and Gemini): one POST that
// answers with server-sent events, read event by event, and the mapping of its failures.
import type { AskError } from './request';

const DETAIL_MAX = 200;
const INVALID_KEY_WORDS = /api key not valid|api_key_invalid|invalid api key|incorrect api key/i;

export type Opened = { readonly kind: 'stream'; readonly response: Response } | { readonly kind: 'error'; readonly error: AskError };

/** Thrown when the reader stopped; the caller turns it into a "stopped" outcome. */
export function isAbort(error: unknown): boolean {
  return error instanceof DOMException && error.name === 'AbortError';
}

// OpenAI and Gemini both answer { error: { message } }.
async function readDetail(response: Response): Promise<string> {
  const body = await response.text();
  try {
    const parsed: unknown = JSON.parse(body);
    const error = typeof parsed === 'object' && parsed !== null ? (parsed as Record<string, unknown>).error : undefined;
    const message = typeof error === 'object' && error !== null ? (error as Record<string, unknown>).message : undefined;
    if (typeof message === 'string') return message;
  } catch {
    // Not JSON: the raw text is the best detail there is.
  }
  return body;
}

export async function openStream(url: string, headers: Readonly<Record<string, string>>, body: unknown, signal: AbortSignal): Promise<Opened> {
  let response: Response;
  try {
    response = await fetch(url, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json', ...headers },
      body: JSON.stringify(body),
      signal,
    });
  } catch (error) {
    if (isAbort(error)) throw error;
    return { kind: 'error', error: { kind: 'network' } };
  }
  if (response.ok && response.body !== null) return { kind: 'stream', response };

  const status = response.status;
  const detail = (await readDetail(response)).trim().slice(0, DETAIL_MAX);
  // Gemini answers a wrong key with 400 ("API key not valid").
  if (status === 401 || INVALID_KEY_WORDS.test(detail)) return { kind: 'error', error: { kind: 'key' } };
  if (status === 403) return { kind: 'error', error: { kind: 'permission' } };
  if (status === 429) return { kind: 'error', error: { kind: 'rateLimit' } };
  if (status >= 500) return { kind: 'error', error: { kind: 'overloaded' } };
  return { kind: 'error', error: { kind: 'other', detail: detail === '' ? `HTTP ${status}` : detail } };
}

/** Calls onData with the data of each event, in order, until the stream ends. */
export async function readEvents(response: Response, onData: (data: string) => void): Promise<void> {
  if (response.body === null) throw new Error('Streaming response without a body');
  const reader = response.body.pipeThrough(new TextDecoderStream()).getReader();
  let buffer = '';
  for (;;) {
    const { done, value } = await reader.read();
    if (done) break;
    buffer += value;
    const events = buffer.split(/\r?\n\r?\n/);
    buffer = events.pop() ?? '';
    for (const event of events) emit(event, onData);
  }
  if (buffer.trim() !== '') emit(buffer, onData);
}

function emit(event: string, onData: (data: string) => void): void {
  const data = event
    .split(/\r?\n/)
    .filter((line) => line.startsWith('data:'))
    .map((line) => line.slice(5).replace(/^ /, ''))
    .join('\n');
  if (data !== '') onData(data);
}
