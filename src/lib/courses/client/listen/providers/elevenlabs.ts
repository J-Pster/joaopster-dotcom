// ElevenLabs text to speech: POST /v1/text-to-speech/{voice_id}, xi-api-key header, mp3 bytes back.
// Model, limits and credits: elevenlabs.io/docs/overview/models (eleven_multilingual_v2 takes 10,000
// characters per request and costs one credit per character).
import { elevenlabsCost } from '../pricing';
import { postJson, readAudioBody } from './http';
import type { PaidProvider, VoiceOption } from './types';

const BASE = 'https://api.elevenlabs.io/v1/text-to-speech';
const MODEL = 'eleven_multilingual_v2';
const OUTPUT_FORMAT = 'mp3_44100_128';

// Default voices of the library; the multilingual model reads any language with each of them.
const VOICES: readonly VoiceOption[] = [
  { id: 'JBFqnCBsd6RMkjVDRZzb', label: 'George (M)' },
  { id: '21m00Tcm4TlvDq8ikWAM', label: 'Rachel (F)' },
  { id: 'EXAVITQu4vr4xnSDxMaL', label: 'Sarah (F)' },
  { id: 'pNInz6obpgDQGcFmaJgB', label: 'Adam (M)' },
  { id: 'XB0fDUnXU5powFXDhCwa', label: 'Charlotte (F)' },
  { id: 'nPczCjzI2devNBz1zQrb', label: 'Brian (M)' },
];

export const elevenlabs: PaidProvider = {
  id: 'elevenlabs',
  name: 'ElevenLabs',
  model: MODEL,
  // Credits are per character, so small passages keep what is spent ahead of the listener low.
  limit: { max: 1800, unit: 'characters' },
  voices: () => VOICES,
  estimate: (text) => elevenlabsCost(text),
  async synthesize({ text, voice, key, signal }) {
    const response = await postJson(
      'elevenlabs',
      `${BASE}/${encodeURIComponent(voice)}?output_format=${OUTPUT_FORMAT}`,
      { 'xi-api-key': key, Accept: 'audio/mpeg' },
      { text, model_id: MODEL },
      signal,
    );
    return readAudioBody(response);
  },
};
