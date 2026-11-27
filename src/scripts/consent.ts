// The consent notice's behavior (components/CookieConsent.astro). The head script already applied a
// saved choice before Google's tag started; this asks when there is none, saves the answer and tells
// the tag. Declining after accepting also removes the cookies Google Analytics had set.
import { CONSENT_STORAGE_KEY, type AnalyticsConsent } from '../lib/analytics/consent';

declare global {
  interface Window {
    /** Defined by the head script in components/BaseHead.astro. */
    gtag: (...args: unknown[]) => void;
  }
}

const isConsent = (value: string | null | undefined): value is AnalyticsConsent =>
  value === 'granted' || value === 'denied';

function savedChoice(): AnalyticsConsent | null {
  try {
    const value = localStorage.getItem(CONSENT_STORAGE_KEY);
    return isConsent(value) ? value : null;
  } catch {
    // Storage blocked: nothing saved, so the notice asks on every visit and consent stays denied.
    return null;
  }
}

function saveChoice(choice: AnalyticsConsent): void {
  try {
    localStorage.setItem(CONSENT_STORAGE_KEY, choice);
  } catch {
    // Storage blocked: the choice holds for this page only, and the notice asks again next visit.
  }
}

// _ga and _ga_<stream> live on the site's top domain (and on the host itself when it has no dot).
function removeAnalyticsCookies(): void {
  const names = document.cookie
    .split(';')
    .map((pair) => pair.split('=')[0].trim())
    .filter((name) => name.startsWith('_ga'));
  for (const name of names) {
    document.cookie = `${name}=; Max-Age=0; path=/`;
    document.cookie = `${name}=; Max-Age=0; path=/; domain=.${location.hostname}`;
  }
}

export function initConsent(): void {
  const notice = document.querySelector<HTMLElement>('[data-consent]');
  if (!notice) throw new Error('[consent] the page has no consent notice');

  // The footer button that reopened the notice gets focus back once the reader chooses.
  let opener: HTMLButtonElement | null = null;
  const choose = (choice: AnalyticsConsent) => {
    saveChoice(choice);
    window.gtag('consent', 'update', { analytics_storage: choice });
    if (choice === 'denied') removeAnalyticsCookies();
    notice.hidden = true;
    opener?.focus();
    opener = null;
  };

  notice.querySelectorAll<HTMLButtonElement>('[data-consent-choice]').forEach((button) => {
    const choice = button.dataset.consentChoice;
    if (!isConsent(choice)) throw new Error(`[consent] unknown choice "${choice}"`);
    button.addEventListener('click', () => choose(choice));
  });
  document.querySelectorAll<HTMLButtonElement>('[data-consent-open]').forEach((button) => {
    button.addEventListener('click', () => {
      opener = button;
      notice.hidden = false;
      notice.querySelector<HTMLButtonElement>('[data-consent-choice]')?.focus();
    });
  });

  if (savedChoice() === null) notice.hidden = false;
}
