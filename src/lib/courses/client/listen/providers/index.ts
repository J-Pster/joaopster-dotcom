import type { PaidProviderId } from '../failure';
import { elevenlabs } from './elevenlabs';
import { google } from './google';
import { openai } from './openai';
import type { PaidProvider } from './types';

export const PAID_PROVIDERS: Readonly<Record<PaidProviderId, PaidProvider>> = { openai, google, elevenlabs };

export type { PaidProvider, VoiceOption } from './types';
