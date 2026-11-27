// Google Cloud Text-to-Speech: POST /v1/text:synthesize with an API key header; the answer is JSON
// with the audio as base64. Voice names checked against
// docs.cloud.google.com/text-to-speech/docs/list-voices-and-types.
import type { Lang } from '../../../../../i18n/ui';
import { ListenError } from '../failure';
import { googleCost } from '../pricing';
import { postJson } from './http';
import type { PaidProvider, VoiceOption } from './types';

const ENDPOINT = 'https://texttospeech.googleapis.com/v1/text:synthesize';

const FAMILY_LABEL = { Neural2: 'Neural2', Wavenet: 'WaveNet', Standard: 'Standard' } as const;
type Family = keyof typeof FAMILY_LABEL;
type Gender = 'F' | 'M';

// Variant letters per family, with the gender Google lists for them.
const CATALOG: Record<Lang, { readonly code: string; readonly voices: Readonly<Record<Family, Readonly<Record<string, Gender>>>> }> = {
  pt: {
    code: 'pt-BR',
    voices: {
      Neural2: { A: 'F', B: 'M', C: 'F' },
      Wavenet: { A: 'F', B: 'M', C: 'F', D: 'F', E: 'M' },
      Standard: { A: 'F', B: 'M', C: 'F', D: 'F', E: 'M' },
    },
  },
  en: {
    code: 'en-US',
    voices: {
      Neural2: { C: 'F', D: 'M', F: 'F', H: 'F', J: 'M' },
      Wavenet: { C: 'F', D: 'M', F: 'F', H: 'F', J: 'M' },
      Standard: { C: 'F', D: 'M', F: 'F', H: 'F', J: 'M' },
    },
  },
  es: {
    code: 'es-ES',
    voices: {
      Neural2: { A: 'F', E: 'F', F: 'M', G: 'M', H: 'F' },
      Wavenet: { E: 'M', F: 'F', G: 'M', H: 'F' },
      Standard: { E: 'M', F: 'F', G: 'M', H: 'F' },
    },
  },
};

const FAMILIES: readonly Family[] = ['Neural2', 'Wavenet', 'Standard'];

function voicesFor(lang: Lang): readonly VoiceOption[] {
  const { code, voices } = CATALOG[lang];
  return FAMILIES.flatMap((family) =>
    Object.entries(voices[family]).map(([letter, gender]) => ({
      id: `${code}-${family}-${letter}`,
      label: `${FAMILY_LABEL[family]} ${letter} (${gender})`,
    })),
  );
}

/** "pt-BR-Neural2-A" -> "pt-BR". */
function languageCode(voice: string): string {
  return voice.split('-').slice(0, 2).join('-');
}

function parseAudioContent(body: unknown): string {
  if (typeof body === 'object' && body !== null && 'audioContent' in body) {
    const { audioContent } = body;
    if (typeof audioContent === 'string' && audioContent !== '') return audioContent;
  }
  throw new ListenError({ kind: 'undecodable' });
}

function decodeBase64(base64: string): Blob {
  let binary: string;
  try {
    binary = atob(base64);
  } catch {
    throw new ListenError({ kind: 'undecodable' });
  }
  return new Blob([Uint8Array.from(binary, (char) => char.charCodeAt(0))], { type: 'audio/mpeg' });
}

export const google: PaidProvider = {
  id: 'google',
  name: 'Google Cloud',
  model: 'text-synthesize-v1',
  // The API accepts 5000 bytes per request; this keeps each passage near two minutes of audio.
  limit: { max: 2400, unit: 'bytes' },
  voices: voicesFor,
  estimate: (text, voice) => googleCost(text, voice),
  async synthesize({ text, voice, key, signal }) {
    const response = await postJson(
      'google',
      ENDPOINT,
      { 'x-goog-api-key': key },
      {
        input: { text },
        voice: { languageCode: languageCode(voice), name: voice },
        audioConfig: { audioEncoding: 'MP3' },
      },
      signal,
    );
    let body: unknown;
    try {
      body = await response.json();
    } catch {
      throw new ListenError({ kind: 'undecodable' });
    }
    return decodeBase64(parseAudioContent(body));
  },
};
