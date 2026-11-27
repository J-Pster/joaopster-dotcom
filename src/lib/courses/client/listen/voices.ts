// The voices the reader can pick for one provider and language.
import type { Lang } from '../../../../i18n/ui';
import type { ListenProviderId } from '../../listenText';
import { PAID_PROVIDERS, type VoiceOption } from './providers';

// A language can have several regions in one browser; the one the courses are written in comes first.
const PREFERRED_REGION: Record<Lang, string> = { pt: 'pt-br', en: 'en-us', es: 'es-es' };

// Android reports "pt_BR", desktop browsers "pt-BR".
const normalizedTag = (voice: SpeechSynthesisVoice) => voice.lang.replace('_', '-').toLowerCase();

function browserVoices(lang: Lang): VoiceOption[] {
  const preferred = PREFERRED_REGION[lang];
  return speechSynthesis
    .getVoices()
    .filter((voice) => normalizedTag(voice).startsWith(`${lang}-`) || normalizedTag(voice) === lang)
    .sort((a, b) => {
      const byRegion = Number(normalizedTag(b) === preferred) - Number(normalizedTag(a) === preferred);
      if (byRegion !== 0) return byRegion;
      const byLocal = Number(b.localService) - Number(a.localService);
      return byLocal !== 0 ? byLocal : a.name.localeCompare(b.name);
    })
    .map((voice) => ({ id: voice.voiceURI, label: `${voice.name} (${voice.lang})` }));
}

export function voicesFor(provider: ListenProviderId, lang: Lang): readonly VoiceOption[] {
  return provider === 'browser' ? browserVoices(lang) : PAID_PROVIDERS[provider].voices(lang);
}

/** The saved voice when it is still on offer, else the first one; undefined when there are none. */
export function pickVoice(options: readonly VoiceOption[], saved: string | undefined): string | undefined {
  return options.find((option) => option.id === saved)?.id ?? options[0]?.id;
}
