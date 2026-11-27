// What the player is doing, as one value: each state carries only what it needs.
import type { ListenFailure } from './failure';
import type { Cost } from './pricing';

export interface PriceEstimate {
  readonly characters: number;
  readonly cost: Cost;
}

export type PlayerState =
  | { readonly kind: 'idle'; readonly note: 'ready' | 'finished' | 'empty' }
  | { readonly kind: 'confirming'; readonly block: number; readonly estimate: PriceEstimate }
  | { readonly kind: 'loading'; readonly block: number }
  | { readonly kind: 'playing'; readonly block: number }
  | { readonly kind: 'paused'; readonly block: number; /** The browser refused to start the sound without a tap. */ readonly blocked: boolean }
  | { readonly kind: 'error'; readonly block: number; readonly failure: ListenFailure };

export type StateKind = PlayerState['kind'];
