// Audio of paid voices, saved on the device so listening again costs nothing. Cache Storage holds it
// under a name public/sw.js does not know and so never deletes: its activate step removes only the
// caches that start with "jp-courses-", and this one starts with "jp-listen-". The requests are
// made-up same-origin URLs; nothing ever fetches them, the service worker is not involved.

const CACHE_NAME = 'jp-listen-audio-v1';
const KEY_ORIGIN = `${location.origin}/__listen-audio/`;
const SIZE_HEADER = 'x-audio-bytes';

export interface AudioKeyParts {
  readonly provider: string;
  readonly model: string;
  readonly voice: string;
}

/** Cache Storage exists only in secure contexts; elsewhere nothing is saved and nothing is found. */
async function openCache(): Promise<Cache | undefined> {
  return 'caches' in globalThis ? caches.open(CACHE_NAME) : undefined;
}

async function sha256Hex(text: string): Promise<string> {
  const digest = await crypto.subtle.digest('SHA-256', new TextEncoder().encode(text));
  return [...new Uint8Array(digest)].map((byte) => byte.toString(16).padStart(2, '0')).join('');
}

/** Provider, model and voice are part of the key: another voice reading the same text is another audio. */
export async function audioKey(parts: AudioKeyParts, text: string): Promise<string> {
  const path = [parts.provider, parts.model, parts.voice].map(encodeURIComponent).join('/');
  return `${KEY_ORIGIN}${path}/${await sha256Hex(text)}`;
}

export async function readAudio(key: string): Promise<Blob | undefined> {
  const cache = await openCache();
  const response = await cache?.match(key);
  return response?.blob();
}

export async function hasAudio(key: string): Promise<boolean> {
  const cache = await openCache();
  return (await cache?.match(key)) !== undefined;
}

export async function writeAudio(key: string, audio: Blob): Promise<void> {
  const cache = await openCache();
  if (cache === undefined) return;
  const headers = new Headers({ 'content-type': audio.type, [SIZE_HEADER]: String(audio.size) });
  await cache.put(key, new Response(audio, { headers }));
}

export async function savedAudioBytes(): Promise<number> {
  const cache = await openCache();
  if (cache === undefined) return 0;
  let total = 0;
  for (const request of await cache.keys()) {
    const size = Number((await cache.match(request))?.headers.get(SIZE_HEADER));
    if (Number.isFinite(size)) total += size;
  }
  return total;
}

export async function clearSavedAudio(): Promise<void> {
  if ('caches' in globalThis) await caches.delete(CACHE_NAME);
}
