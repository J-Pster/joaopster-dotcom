import type { Lang } from '../../i18n/ui';
import { en } from './en';
import { es } from './es';
import { pt } from './pt';
import type { LegalLanguage } from './types';

const LANGUAGES: Readonly<Record<Lang, LegalLanguage>> = { pt, en, es };

export const legalCopy = (lang: Lang): LegalLanguage => LANGUAGES[lang];
