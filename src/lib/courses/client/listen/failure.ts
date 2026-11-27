// Why a listen attempt failed, as data the player turns into a message and the right button.
import type { ProviderId } from '../keys';

/** Providers with paid voices; Anthropic and Gemini keys only serve the assistant. */
export type PaidProviderId = Exclude<ProviderId, 'anthropic' | 'gemini'>;

export type ListenFailure =
  | { readonly kind: 'missing-key'; readonly provider: PaidProviderId }
  | { readonly kind: 'key-rejected'; readonly provider: PaidProviderId }
  | { readonly kind: 'quota'; readonly provider: PaidProviderId }
  | { readonly kind: 'network'; readonly provider: PaidProviderId }
  | { readonly kind: 'rejected'; readonly provider: PaidProviderId; readonly detail: string }
  | { readonly kind: 'server'; readonly provider: PaidProviderId; readonly status: number }
  | { readonly kind: 'undecodable' }
  | { readonly kind: 'no-voice' }
  | { readonly kind: 'unsupported' }
  | { readonly kind: 'speech'; readonly detail: string };

export class ListenError extends Error {
  constructor(readonly failure: ListenFailure) {
    super(failure.kind);
    this.name = 'ListenError';
  }
}

export function isAbort(error: unknown): boolean {
  return error instanceof DOMException && error.name === 'AbortError';
}
