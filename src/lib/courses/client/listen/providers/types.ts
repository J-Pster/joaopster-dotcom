import type { Lang } from '../../../../../i18n/ui';
import type { Cost } from '../pricing';
import type { PaidProviderId } from '../failure';

export interface VoiceOption {
  readonly id: string;
  readonly label: string;
}

/** How much text one request may carry; `max` is kept under the provider's own limit on purpose. */
export interface ChunkLimit {
  readonly max: number;
  readonly unit: 'characters' | 'bytes';
}

export interface SynthesisRequest {
  readonly text: string;
  readonly voice: string;
  readonly key: string;
  readonly signal: AbortSignal;
}

/** A voice service the reader pays with their own key. */
export interface PaidProvider {
  readonly id: PaidProviderId;
  readonly name: string;
  /** Part of the cache key: another model sounds different, so it must not reuse saved audio. */
  readonly model: string;
  readonly limit: ChunkLimit;
  voices(lang: Lang): readonly VoiceOption[];
  estimate(text: string, voice: string): Cost;
  synthesize(request: SynthesisRequest): Promise<Blob>;
}
