// The one place a provider answer is turned into audio or into a ListenError, so each provider
// file only holds what is specific to its API.
import { isAbort, ListenError, type PaidProviderId } from '../failure';

const DETAIL_MAX = 160;

/** Providers word quota errors differently (ElevenLabs answers 401 for it), so the body is checked too. */
const QUOTA_WORDS = /quota|insufficient|billing|credits|exceeded|resource_exhausted/i;

async function readDetail(response: Response): Promise<string> {
  const body = await response.text();
  try {
    const parsed: unknown = JSON.parse(body);
    const message = findMessage(parsed);
    if (message !== undefined) return message;
  } catch {
    // Not JSON: the raw text is the best detail there is.
  }
  return body;
}

// Each provider nests its message differently: error.message (OpenAI, Google), detail.message or
// detail (ElevenLabs). Only strings are taken.
function findMessage(value: unknown): string | undefined {
  if (typeof value === 'string') return value;
  if (typeof value !== 'object' || value === null) return undefined;
  for (const key of ['message', 'error', 'detail']) {
    const found = findMessage((value as Record<string, unknown>)[key]);
    if (found !== undefined) return found;
  }
  return undefined;
}

export async function postJson(
  provider: PaidProviderId,
  url: string,
  headers: Readonly<Record<string, string>>,
  body: unknown,
  signal: AbortSignal,
): Promise<Response> {
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
    throw new ListenError({ kind: 'network', provider });
  }
  if (response.ok) return response;

  const status = response.status;
  const detail = (await readDetail(response)).trim().slice(0, DETAIL_MAX);
  if (status === 429 || status === 402 || QUOTA_WORDS.test(detail)) throw new ListenError({ kind: 'quota', provider });
  if (status === 401 || status === 403) throw new ListenError({ kind: 'key-rejected', provider });
  if (status >= 500) throw new ListenError({ kind: 'server', provider, status });
  throw new ListenError({ kind: 'rejected', provider, detail: detail === '' ? `HTTP ${status}` : detail });
}

/** The provider asked for mp3, but the label is only a hint: the browser reads the bytes. */
export async function readAudioBody(response: Response): Promise<Blob> {
  const bytes = await response.arrayBuffer();
  if (bytes.byteLength === 0) throw new ListenError({ kind: 'undecodable' });
  const type = response.headers.get('content-type') ?? '';
  return new Blob([bytes], { type: type.startsWith('audio/') ? type : 'audio/mpeg' });
}
