// Addresses of the privacy policy and the terms of use in each site language. The pages live in
// src/pages (pt), src/pages/en and src/pages/es; the footer and the course keys window link here.
import type { Lang } from '../i18n/ui';

const PRIVACY: Record<Lang, string> = { pt: '/privacidade/', en: '/en/privacy/', es: '/es/privacidad/' };
const TERMS: Record<Lang, string> = { pt: '/termos/', en: '/en/terms/', es: '/es/terminos/' };

export function privacyUrl(lang: Lang): string {
  return PRIVACY[lang];
}

export function termsUrl(lang: Lang): string {
  return TERMS[lang];
}
