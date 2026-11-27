// The reader's language, remembered on this device so every page opens in it.
//
// The head script of BaseHead picks it before the page paints, in this order:
// 1. the language saved here (a switcher, the language prompt, or an earlier pick of the script);
// 2. the first of the browser's languages (navigator.languages) the site has;
// 3. the time zone, for readers whose browser names none of them (TIME_ZONE_HINTS);
// 4. nothing: the language prompt asks (LanguagePrompt.astro).
// A page in another language than the one picked is replaced by its own translation, so moving
// between pages never changes the language. Bots get none of this: they index each URL as served.
import type { Lang } from './ui';

export const LANGUAGE_STORAGE_KEY = 'jp:lang';

/** Set for this tab when the reader closes the language prompt without picking, so it does not come back on every page. */
export const PROMPT_DISMISSED_KEY = 'jp:lang-prompt-dismissed';

/**
 * Crawlers, link previews and audit tools, which must see each page in its own language. Google's
 * testing tools (Google-InspectionTool, GoogleOther) do not say "bot", hence "google".
 */
export const BOT_USER_AGENT = /bot|crawl|spider|slurp|google|bing|yandex|duckduck|preview|facebookexternalhit|embedly|lighthouse|pagespeed|headless|validator/i;

/**
 * IANA time zones where each language is the main one. An entry ending in "/" matches every zone
 * under it. Zones shared by several languages (most of Europe, Canada, the Caribbean) are left out:
 * a wrong guess is worse than asking.
 */
export const TIME_ZONE_HINTS: Readonly<Record<Lang, readonly string[]>> = {
  pt: [
    'America/Sao_Paulo', 'America/Bahia', 'America/Fortaleza', 'America/Recife', 'America/Maceio', 'America/Belem',
    'America/Araguaina', 'America/Santarem', 'America/Manaus', 'America/Cuiaba', 'America/Campo_Grande',
    'America/Porto_Velho', 'America/Boa_Vista', 'America/Rio_Branco', 'America/Eirunepe', 'America/Noronha',
    'Europe/Lisbon', 'Atlantic/Azores', 'Atlantic/Madeira', 'Africa/Luanda', 'Atlantic/Cape_Verde',
    'Africa/Bissau', 'Africa/Sao_Tome', 'Asia/Dili',
  ],
  es: [
    'Europe/Madrid', 'Africa/Ceuta', 'Atlantic/Canary', 'America/Argentina/', 'America/Buenos_Aires',
    'America/Mexico_City', 'America/Cancun', 'America/Merida', 'America/Monterrey', 'America/Matamoros',
    'America/Chihuahua', 'America/Ciudad_Juarez', 'America/Ojinaga', 'America/Mazatlan', 'America/Bahia_Banderas',
    'America/Hermosillo', 'America/Tijuana', 'America/Bogota', 'America/Lima', 'America/Santiago',
    'America/Punta_Arenas', 'Pacific/Easter', 'America/Caracas', 'America/Guayaquil', 'Pacific/Galapagos',
    'America/La_Paz', 'America/Asuncion', 'America/Montevideo', 'America/Havana', 'America/Santo_Domingo',
    'America/Guatemala', 'America/El_Salvador', 'America/Tegucigalpa', 'America/Managua', 'America/Costa_Rica',
    'America/Panama', 'Africa/Malabo',
  ],
  en: [
    'America/New_York', 'America/Detroit', 'America/Chicago', 'America/Denver', 'America/Boise', 'America/Phoenix',
    'America/Los_Angeles', 'America/Anchorage', 'America/Juneau', 'America/Indiana/', 'America/Kentucky/',
    'America/North_Dakota/', 'Pacific/Honolulu', 'Europe/London', 'Europe/Dublin', 'Australia/', 'Pacific/Auckland',
    'Africa/Accra', 'Africa/Nairobi', 'Asia/Manila',
  ],
};

/** Saves the reader's language for every page from now on. */
export function rememberLanguage(lang: Lang): void {
  try {
    localStorage.setItem(LANGUAGE_STORAGE_KEY, lang);
  } catch {
    // Storage blocked (private mode, disabled site data): the head script then picks nothing on its
    // own either, so the reader stays on the pages they open and the switch still happens.
  }
}
