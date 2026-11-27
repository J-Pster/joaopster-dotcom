// Approximate price of the paid voices, kept in one place and shown only as an estimate before the
// first paid request of a lesson. Prices of November 2026; the reader is told to check the provider.
// Sources: developers.openai.com/api/docs/pricing (gpt-4o-mini-tts: $0.60 per 1M text tokens and
// $12 per 1M audio tokens, about $0.015 per minute of audio), cloud.google.com/text-to-speech/pricing,
// elevenlabs.io/pricing/api.

export type Cost =
  | { readonly kind: 'usd'; readonly amount: number; /** Characters a month the provider gives free; 0 when none. */ readonly freeCharacters: number }
  | { readonly kind: 'credits'; readonly credits: number; readonly freeCredits: number };

const SPEECH_WORDS_PER_MINUTE = 150;

export const PRICES = {
  openai: { usdPerAudioMinute: 0.015 },
  // Standard voices are cheaper and have a bigger free tier than WaveNet and Neural2.
  google: {
    premium: { usdPerMillionCharacters: 16, freeCharacters: 1_000_000 },
    standard: { usdPerMillionCharacters: 4, freeCharacters: 4_000_000 },
  },
  // eleven_multilingual_v2 charges one credit per character (Flash and Turbo charge half).
  elevenlabs: { creditsPerCharacter: 1, freePlanCredits: 10_000 },
} as const;

function countWords(text: string): number {
  return text.split(/\s+/).filter((word) => word !== '').length;
}

export function openaiCost(text: string): Cost {
  const minutes = countWords(text) / SPEECH_WORDS_PER_MINUTE;
  return { kind: 'usd', amount: minutes * PRICES.openai.usdPerAudioMinute, freeCharacters: 0 };
}

/** Google voice names end in the family: "pt-BR-Neural2-A", "en-US-Standard-C". */
export function googleCost(text: string, voice: string): Cost {
  const tier = voice.includes('-Standard-') ? PRICES.google.standard : PRICES.google.premium;
  return {
    kind: 'usd',
    amount: (text.length * tier.usdPerMillionCharacters) / 1_000_000,
    freeCharacters: tier.freeCharacters,
  };
}

export function elevenlabsCost(text: string): Cost {
  return {
    kind: 'credits',
    credits: text.length * PRICES.elevenlabs.creditsPerCharacter,
    freeCredits: PRICES.elevenlabs.freePlanCredits,
  };
}
