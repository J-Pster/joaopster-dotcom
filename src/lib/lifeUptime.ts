// João's age and how long he has been a developer, shown across the home page.
// Pure date math used at build time (Astro); `refreshUptime` redraws the same fields in the browser
// so the static page never shows a stale number between deploys.
import type { Lang } from '../i18n/ui';

/** Born 15 April 2003, Brazil (UTC-3). */
const BIRTH = new Date('2003-04-15T00:00:00-03:00');
/** First freelance work, December 2019 (see the Experience section). */
const DEV_START = new Date('2019-12-01T00:00:00-03:00');

const MS_PER_HOUR = 3_600_000;

const NUMBER_WORDS: Record<Lang, readonly string[]> = {
  pt: ['zero', 'um', 'dois', 'três', 'quatro', 'cinco', 'seis', 'sete', 'oito', 'nove', 'dez', 'onze', 'doze', 'treze', 'catorze', 'quinze', 'dezesseis', 'dezessete', 'dezoito', 'dezenove', 'vinte'],
  en: ['zero', 'one', 'two', 'three', 'four', 'five', 'six', 'seven', 'eight', 'nine', 'ten', 'eleven', 'twelve', 'thirteen', 'fourteen', 'fifteen', 'sixteen', 'seventeen', 'eighteen', 'nineteen', 'twenty'],
  es: ['cero', 'uno', 'dos', 'tres', 'cuatro', 'cinco', 'seis', 'siete', 'ocho', 'nueve', 'diez', 'once', 'doce', 'trece', 'catorce', 'quince', 'dieciséis', 'diecisiete', 'dieciocho', 'diecinueve', 'veinte'],
};

/** Every value the page can show; elements opt in with `data-uptime="<field>"`. */
export type UptimeField = 'age' | 'devYears' | 'devYearsWord' | 'devHours';

function wholeYearsSince(start: Date, now: Date): number {
  const years = now.getUTCFullYear() - start.getUTCFullYear();
  const anniversary = new Date(start);
  anniversary.setUTCFullYear(now.getUTCFullYear());
  return now < anniversary ? years - 1 : years;
}

export function uptimeText(now: Date, lang: Lang): Record<UptimeField, string> {
  const devYears = wholeYearsSince(DEV_START, now);
  return {
    age: String(wholeYearsSince(BIRTH, now)),
    devYears: String(devYears),
    devYearsWord: NUMBER_WORDS[lang][devYears] ?? String(devYears),
    // The terminal is always in English, so hours use en-US grouping (61,224).
    devHours: Math.floor((now.getTime() - DEV_START.getTime()) / MS_PER_HOUR).toLocaleString('en-US'),
  };
}

/** Browser side: rewrite every `[data-uptime]` element with today's values. */
export function refreshUptime(root: Document, lang: Lang): void {
  const text = uptimeText(new Date(), lang);
  root.querySelectorAll<HTMLElement>('[data-uptime]').forEach((el) => {
    el.textContent = text[el.dataset.uptime as UptimeField];
  });
}
