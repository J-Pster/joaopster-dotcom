// OpenAI text to speech: POST /v1/audio/speech, Bearer key, returns the audio bytes.
// Docs: developers.openai.com/api/reference/resources/audio/subresources/speech/methods/create
import { openaiCost } from '../pricing';
import { postJson, readAudioBody } from './http';
import type { PaidProvider, VoiceOption } from './types';

const ENDPOINT = 'https://api.openai.com/v1/audio/speech';
const MODEL = 'gpt-4o-mini-tts';

// The built-in voices of the API; they speak any language, so the list does not depend on the lesson.
const VOICES: readonly VoiceOption[] = [
  'alloy', 'ash', 'ballad', 'coral', 'echo', 'fable', 'nova', 'onyx', 'sage', 'shimmer', 'verse', 'marin', 'cedar',
].map((id) => ({ id, label: id[0]?.toUpperCase() + id.slice(1) }));

export const openai: PaidProvider = {
  id: 'openai',
  name: 'OpenAI',
  model: MODEL,
  // The API accepts 4096 characters; about two minutes of audio per request keeps the wait for each
  // passage short and the money spent ahead of the listener small.
  limit: { max: 1800, unit: 'characters' },
  voices: () => VOICES,
  estimate: (text) => openaiCost(text),
  async synthesize({ text, voice, key, signal }) {
    const response = await postJson(
      'openai',
      ENDPOINT,
      { Authorization: `Bearer ${key}` },
      { model: MODEL, input: text, voice, response_format: 'mp3' },
      signal,
    );
    return readAudioBody(response);
  },
};
