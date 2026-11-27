// What the reader chose for "listen to the lesson", kept on this device. The value may have been
// edited by hand or left by an older version, so it is parsed once here and anything unknown falls
// back to the defaults.
import type { ListenProviderId } from '../../listenText';

const STORAGE_KEY = 'jp-courses:listen';

export const PROVIDER_IDS: readonly ListenProviderId[] = ['browser', 'openai', 'google', 'elevenlabs'];
export const SPEEDS: readonly number[] = [0.75, 1, 1.25, 1.5, 1.75, 2];

export interface ListenPrefs {
  readonly provider: ListenProviderId;
  /** The voice picked under each provider; a provider with no entry uses its first voice. */
  readonly voices: Readonly<Partial<Record<ListenProviderId, string>>>;
  readonly speed: number;
}

const DEFAULTS: ListenPrefs = { provider: 'browser', voices: {}, speed: 1 };

function isProvider(value: unknown): value is ListenProviderId {
  return PROVIDER_IDS.some((id) => id === value);
}

function parseVoices(value: unknown): ListenPrefs['voices'] {
  if (typeof value !== 'object' || value === null) return {};
  const voices: Partial<Record<ListenProviderId, string>> = {};
  for (const [name, voice] of Object.entries(value)) {
    if (isProvider(name) && typeof voice === 'string' && voice !== '') voices[name] = voice;
  }
  return voices;
}

export function readPrefs(): ListenPrefs {
  let parsed: unknown;
  try {
    const raw = localStorage.getItem(STORAGE_KEY);
    if (raw === null) return DEFAULTS;
    parsed = JSON.parse(raw);
  } catch {
    // Storage blocked or not JSON: the defaults are right.
    return DEFAULTS;
  }
  if (typeof parsed !== 'object' || parsed === null) return DEFAULTS;
  const { provider, voices, speed } = parsed as Record<string, unknown>;
  return {
    provider: isProvider(provider) ? provider : DEFAULTS.provider,
    voices: parseVoices(voices),
    speed: typeof speed === 'number' && SPEEDS.includes(speed) ? speed : DEFAULTS.speed,
  };
}

export function savePrefs(prefs: ListenPrefs): void {
  try {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(prefs));
  } catch (error) {
    // The choice just is not remembered; playing is not affected.
    console.warn('Could not save the listen preferences', error);
  }
}
