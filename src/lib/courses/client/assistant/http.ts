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

interface ProviderError {
  readonly message: string;
  /** OpenAI's machine name for the error, such as "insufficient_quota". */
  readonly code?: string;
}

// OpenAI and Gemini both answer { error: { message } }, before the stream and inside it.
function providerError(parsed: unknown): ProviderError | undefined {
  const error = typeof parsed === 'object' && parsed !== null ? (parsed as Record<string, unknown>).error : undefined;
  if (typeof error !== 'object' || error === null) return undefined;
  const { message, code } = error as Record<string, unknown>;
  return { message: typeof message === 'string' ? message : JSON.stringify(error), ...(typeof code === 'string' ? { code } : {}) };
}

function detailOf(error: ProviderError): string {
  return error.message.trim().slice(0, DETAIL_MAX);
}

async function readDetail(response: Response): Promise<ProviderError | undefined> {
  const body = await response.text();
  try {
    return providerError(JSON.parse(body)) ?? (body === '' ? undefined : { message: body });
  } catch {
    // Not JSON: the raw text is the best detail there is.
    return body === '' ? undefined : { message: body };
  }
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
  let failure: ProviderError | undefined;
  try {
    failure = await readDetail(response);
  } catch (error) {
    // The connection dropped while the error body was arriving.
    if (isAbort(error)) throw error;
    return { kind: 'error', error: { kind: 'network' } };
  }
  const detail = failure === undefined ? '' : detailOf(failure);
  // Gemini answers a wrong key with 400 ("API key not valid").
  if (status === 401 || INVALID_KEY_WORDS.test(detail)) return { kind: 'error', error: { kind: 'key' } };
  if (status === 403) return { kind: 'error', error: { kind: 'permission' } };
  // OpenAI also answers 429 when the account has no credit left; its own message says so.
  if (status === 429 && failure?.code !== 'insufficient_quota') return { kind: 'error', error: { kind: 'rateLimit' } };
  if (status >= 500) return { kind: 'error', error: { kind: 'overloaded' } };
  return { kind: 'error', error: { kind: 'other', detail: detail === '' ? `HTTP ${status}` : detail } };
}

/**
 * Reads the server-sent events of an answer and hands each payload, parsed, to onEvent. Returns the
 * error that ended the stream early: the connection dropped, a payload was not JSON, or the provider
 * sent an error event (both APIs can, for example when a limit is hit mid-answer). The connection is
 * closed in every case, so a failed answer stops generating tokens the reader pays for.
 */
export async function readEvents(response: Response, onEvent: (event: unknown) => void): Promise<AskError | undefined> {
  if (response.body === null) throw new Error('Streaming response without a body');
  const reader = response.body.pipeThrough(new TextDecoderStream()).getReader();
  try {
    let buffer = '';
    for (;;) {
      let read: ReadableStreamReadResult<string>;
      try {
        read = await reader.read();
      } catch (error) {
        if (isAbort(error)) throw error;
        return { kind: 'network' };
      }
      if (read.done) break;
      buffer += read.value;
      const events = buffer.split(/\r?\n\r?\n/);
      buffer = events.pop() ?? '';
      for (const event of events) {
        const failed = deliver(event, onEvent);
        if (failed) return failed;
      }
    }
    return buffer.trim() === '' ? undefined : deliver(buffer, onEvent);
  } finally {
    // Cleanup only: the outcome is already decided, and a stream that errored rejects its cancel.
    reader.cancel().catch(() => undefined);
  }
}

function deliver(event: string, onEvent: (event: unknown) => void): AskError | undefined {
  const data = event
    .split(/\r?\n/)
    .filter((line) => line.startsWith('data:'))
    .map((line) => line.slice(5).replace(/^ /, ''))
    .join('\n');
  // OpenAI closes its stream with a literal [DONE].
  if (data === '' || data === '[DONE]') return undefined;
  let parsed: unknown;
  try {
    parsed = JSON.parse(data);
  } catch (error) {
    return { kind: 'other', detail: error instanceof Error ? error.message : String(error) };
  }
  const failure = providerError(parsed);
  if (failure) return { kind: 'other', detail: detailOf(failure) };
  onEvent(parsed);
  return undefined;
}
