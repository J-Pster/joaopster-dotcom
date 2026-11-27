// One question to the model the reader picked, whatever its provider. Each provider file turns the
// same request into its own API call and its answer back into an AskOutcome.
import { askAnthropic } from './anthropic';
import { askGemini } from './gemini';
import type { AssistantProvider } from './models';
import { askOpenAI } from './openai';
import type { AskOutcome, AskRequest } from './request';

export type { AskError, AskOutcome } from './request';

const ASK: Readonly<Record<AssistantProvider, (request: AskRequest) => Promise<AskOutcome>>> = {
  anthropic: askAnthropic,
  openai: askOpenAI,
  gemini: askGemini,
};

export function ask(request: AskRequest): Promise<AskOutcome> {
  return ASK[request.model.provider](request);
}
