// Where the language switchers (desktop dropdown and mobile menu) send the reader.
// 1. The page's own translation, when it declares one as an hreflang alternate (BaseHead).
// 2. A fallback the page names on <html data-lang-xx>, for pages that exist in one language only
//    (a course note goes to the courses landing of the language picked).
// 3. Otherwise, the same path under the other language prefix.
import type { Lang } from './ui';

const HREFLANG: Record<Lang, string> = { pt: 'pt-BR', en: 'en', es: 'es' };
const FALLBACK_KEY: Record<Lang, string> = { pt: 'langPt', en: 'langEn', es: 'langEs' };

function prefixedPath(path: string, lang: Lang): string {
  let stripped = path;
  for (const locale of ['en', 'es']) {
    if (path.startsWith(`/${locale}/`)) {
      stripped = path.slice(locale.length + 1);
      break;
    }
    if (path === `/${locale}`) {
      stripped = '/';
      break;
    }
  }
  return lang === 'pt' ? stripped : `/${lang}${stripped}`;
}

export function localeSwitchTarget(lang: Lang): string {
  const alternate = document.querySelector<HTMLLinkElement>(`link[rel="alternate"][hreflang="${HREFLANG[lang]}"]`);
  // Alternates are absolute production URLs: keep the path, so it also works on a local preview.
  if (alternate) return new URL(alternate.href).pathname;
  return document.documentElement.dataset[FALLBACK_KEY[lang]] ?? prefixedPath(window.location.pathname, lang);
}

export const isLang = (value: string | undefined): value is Lang => value === 'pt' || value === 'en' || value === 'es';
