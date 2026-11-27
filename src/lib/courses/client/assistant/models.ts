// The models the assistant can answer with: two per provider, a fast and cheap one and a more
// capable one. The reader picks one and pays its provider with their own key.
import type { ProviderId } from '../keys';

export type AssistantProvider = Extract<ProviderId, 'anthropic' | 'openai' | 'gemini'>;
export const ASSISTANT_PROVIDERS: readonly AssistantProvider[] = ['anthropic', 'openai', 'gemini'];

export type ModelChoice =
  | 'anthropic-fast'
  | 'anthropic-smart'
  | 'openai-fast'
  | 'openai-smart'
  | 'gemini-fast'
  | 'gemini-smart';

/** US dollars per million tokens. */
export interface TokenPrice {
  readonly input: number;
  readonly cachedInput: number;
  readonly output: number;
}

export interface AssistantModel {
  readonly choice: ModelChoice;
  readonly provider: AssistantProvider;
  /** The model name the provider's API expects. */
  readonly apiModel: string;
  readonly price: TokenPrice;
}

// Prices checked on each provider's pricing page in November 2026. Gemini 3.8 Flash has an
// introductory price until 31 December 2026; the standard one is used, so the estimate errs high.
const MODELS: Readonly<Record<ModelChoice, AssistantModel>> = {
  'anthropic-fast': { choice: 'anthropic-fast', provider: 'anthropic', apiModel: 'claude-haiku-5-5', price: { input: 0.1, cachedInput: 0.01, output: 0.5 } },
  'anthropic-smart': { choice: 'anthropic-smart', provider: 'anthropic', apiModel: 'claude-sonnet-5-5', price: { input: 2, cachedInput: 0.1, output: 10 } },
  'openai-fast': { choice: 'openai-fast', provider: 'openai', apiModel: 'gpt-6-luna', price: { input: 0.1, cachedInput: 0.01, output: 0.5 } },
  'openai-smart': { choice: 'openai-smart', provider: 'openai', apiModel: 'gpt-6.1-terra', price: { input: 1, cachedInput: 0.05, output: 5 } },
  'gemini-fast': { choice: 'gemini-fast', provider: 'gemini', apiModel: 'gemini-3.5-flash-lite', price: { input: 0.3, cachedInput: 0.03, output: 2.5 } },
  'gemini-smart': { choice: 'gemini-smart', provider: 'gemini', apiModel: 'gemini-3.8-flash', price: { input: 1.5, cachedInput: 0.15, output: 7.5 } },
};

export const MODEL_CHOICES = Object.keys(MODELS) as readonly ModelChoice[];

export function isModelChoice(value: unknown): value is ModelChoice {
  return typeof value === 'string' && value in MODELS;
}

export function modelOf(choice: ModelChoice): AssistantModel {
  return MODELS[choice];
}

export function modelsOf(provider: AssistantProvider): readonly AssistantModel[] {
  return MODEL_CHOICES.map(modelOf).filter((model) => model.provider === provider);
}

/** Cost of one answer: fresh input, input read from the provider's cache, and output (thinking included). */
export function costOf(price: TokenPrice, tokens: { fresh: number; cached: number; output: number }): number {
  return (tokens.fresh * price.input + tokens.cached * price.cachedInput + tokens.output * price.output) / 1_000_000;
}
