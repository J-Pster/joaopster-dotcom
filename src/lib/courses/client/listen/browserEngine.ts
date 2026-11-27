// Free voice: the browser's own speech synthesis, one short utterance at a time. Chrome stops a
// long utterance after a few seconds, so a block is cut into sentence-sized pieces; and pausing
// cancels and later repeats the block, because pause() is unreliable with some voices.
import { fitPieces } from './chunks';
import type { Engine, EngineEvents } from './engine';

const PIECE_LIMIT = { max: 200, unit: 'characters' } as const;
const IGNORED_ERRORS: ReadonlySet<string> = new Set(['canceled', 'interrupted']);

export interface BrowserEngineOptions {
  readonly texts: readonly string[];
  /** voiceURI of the chosen voice. */
  readonly voice: string;
  readonly speed: number;
  readonly events: EngineEvents;
}

export function isSpeechSupported(): boolean {
  return 'speechSynthesis' in window && 'SpeechSynthesisUtterance' in window;
}

export function createBrowserEngine(options: BrowserEngineOptions): Engine {
  const { texts, events } = options;
  let speed = options.speed;
  let block = 0;
  // Bumped whenever speech is cancelled, so the end events of dropped utterances are ignored.
  let generation = 0;
  let paused = false;

  function speakPiece(pieces: readonly string[], position: number): void {
    const piece = pieces[position];
    if (piece === undefined) {
      advance();
      return;
    }
    const voice = speechSynthesis.getVoices().find((candidate) => candidate.voiceURI === options.voice);
    if (voice === undefined) {
      events.failed({ kind: 'no-voice' });
      return;
    }
    const mine = generation;
    const utterance = new SpeechSynthesisUtterance(piece);
    utterance.voice = voice;
    utterance.lang = voice.lang;
    utterance.rate = speed;
    utterance.onend = () => {
      if (mine === generation) speakPiece(pieces, position + 1);
    };
    utterance.onerror = (event) => {
      if (mine !== generation || IGNORED_ERRORS.has(event.error)) return;
      if (event.error === 'not-allowed') events.soundBlocked();
      else events.failed({ kind: 'speech', detail: event.error });
    };
    speechSynthesis.speak(utterance);
  }

  function speakBlock(): void {
    const text = texts[block];
    if (text === undefined) {
      events.ended();
      return;
    }
    events.block(block);
    speakPiece(fitPieces(text, PIECE_LIMIT), 0);
  }

  function advance(): void {
    block += 1;
    speakBlock();
  }

  function silence(): void {
    generation += 1;
    speechSynthesis.cancel();
  }

  return {
    start(index) {
      paused = false;
      silence();
      block = index;
      speakBlock();
    },
    pause() {
      paused = true;
      silence();
    },
    resume() {
      paused = false;
      silence();
      speakBlock();
    },
    stop: silence,
    // The rate of an utterance is fixed once it is queued, so a running block is repeated at the new one.
    setSpeed(next) {
      speed = next;
      if (paused || texts[block] === undefined) return;
      silence();
      speakBlock();
    },
  };
}
