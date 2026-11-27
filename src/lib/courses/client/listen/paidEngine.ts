// Paid voices: the lesson is cut into chunks (chunks.ts), each chunk becomes one audio file, and the
// files play one after the other in an <audio> element. Only the chunk being heard and the next one
// are ever requested, so the reader pays for what they listen to plus one chunk ahead. Audio already
// saved on the device (audioCache.ts) is used before any request is made.
import { audioKey, readAudio, writeAudio } from './audioCache';
import { blockAtFraction, blockStartFraction, chunkOfBlock, type Chunk } from './chunks';
import type { Engine, EngineEvents } from './engine';
import { isAbort, ListenError } from './failure';
import type { PaidProvider } from './providers/types';

export interface PaidEngineOptions {
  readonly provider: PaidProvider;
  readonly voice: string;
  readonly chunks: readonly Chunk[];
  readonly speed: number;
  readonly events: EngineEvents;
  /** Read when a request is made, so a key changed in the dialog is used at once. */
  readonly readKey: () => string | undefined;
}

export function createPaidEngine(options: PaidEngineOptions): Engine {
  const { provider, voice, chunks, events } = options;
  const audio = new Audio();
  const requests = new AbortController();
  const pending = new Map<number, Promise<Blob>>();
  let objectUrl: string | undefined;
  let generation = 0;
  let paused = false;
  let ready = false;
  let chunkIndex = 0;

  audio.defaultPlaybackRate = options.speed;

  function fetchChunk(index: number): Promise<Blob> {
    const chunk = chunks[index];
    if (chunk === undefined) throw new Error(`Chunk ${index} does not exist`);
    const key = audioKey({ provider: provider.id, model: provider.model, voice }, chunk.text);
    return key.then(async (cacheKey) => {
      const saved = await readAudio(cacheKey);
      if (saved !== undefined) return saved;
      const apiKey = options.readKey();
      if (apiKey === undefined) throw new ListenError({ kind: 'missing-key', provider: provider.id });
      const blob = await provider.synthesize({ text: chunk.text, voice, key: apiKey, signal: requests.signal });
      // The audio is paid for already: a failure to save it must not stop it from playing.
      await writeAudio(cacheKey, blob).catch((error: unknown) => console.error('Could not save the audio', error));
      return blob;
    });
  }

  function audioOf(index: number): Promise<Blob> {
    const existing = pending.get(index);
    if (existing !== undefined) return existing;
    const request = fetchChunk(index);
    pending.set(index, request);
    // A failed request is forgotten, so using it again (a retry) asks again instead of replaying the error.
    request.catch(() => pending.delete(index));
    return request;
  }

  function prefetchNext(index: number): void {
    if (index + 1 >= chunks.length) return;
    // A failure here is not reported yet: playback is fine, and the same failure shows when the
    // chunk is needed and its request is made again.
    audioOf(index + 1).catch(() => undefined);
  }

  function release(): void {
    if (objectUrl !== undefined) URL.revokeObjectURL(objectUrl);
    objectUrl = undefined;
  }

  function load(blob: Blob): Promise<void> {
    release();
    objectUrl = URL.createObjectURL(blob);
    return new Promise((resolve, reject) => {
      audio.onloadedmetadata = () => resolve();
      audio.onerror = () => reject(new ListenError({ kind: 'undecodable' }));
      audio.src = objectUrl ?? '';
    });
  }

  async function play(): Promise<void> {
    try {
      await audio.play();
    } catch (error) {
      if (error instanceof DOMException && error.name === 'NotAllowedError') events.soundBlocked();
      else if (!isAbort(error)) events.failed({ kind: 'undecodable' });
    }
  }

  function report(error: unknown): void {
    if (isAbort(error)) return;
    if (error instanceof ListenError) events.failed(error.failure);
    else throw error;
  }

  async function playChunk(index: number, block: number, mine: number): Promise<void> {
    chunkIndex = index;
    ready = false;
    events.loading(block);
    try {
      const blob = await audioOf(index);
      if (mine !== generation) return;
      await load(blob);
      if (mine !== generation) return;
    } catch (error) {
      if (mine === generation) report(error);
      return;
    }
    const chunk = chunks[index];
    if (chunk === undefined) return;
    const start = blockStartFraction(chunk, block);
    if (start > 0 && Number.isFinite(audio.duration)) audio.currentTime = start * audio.duration;
    ready = true;
    prefetchNext(index);
    if (!paused) await play();
  }

  audio.ontimeupdate = () => {
    const chunk = chunks[chunkIndex];
    if (chunk === undefined || !ready || !(audio.duration > 0)) return;
    events.block(blockAtFraction(chunk, audio.currentTime / audio.duration));
  };

  audio.onended = () => {
    const next = chunks[chunkIndex + 1];
    const first = next?.spans[0];
    if (next === undefined || first === undefined) {
      events.ended();
      return;
    }
    void playChunk(chunkIndex + 1, first.block, generation).catch(report);
  };

  return {
    start(block) {
      generation += 1;
      paused = false;
      audio.pause();
      void playChunk(chunkOfBlock(chunks, block), block, generation).catch(report);
    },
    pause() {
      paused = true;
      audio.pause();
    },
    resume() {
      paused = false;
      if (ready) void play();
    },
    stop() {
      generation += 1;
      requests.abort();
      audio.pause();
      audio.onended = null;
      audio.ontimeupdate = null;
      audio.onerror = null;
      release();
    },
    setSpeed(next) {
      audio.defaultPlaybackRate = next;
      audio.playbackRate = next;
    },
  };
}
