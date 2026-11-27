// Google Analytics 4 with Consent Mode v2 (advanced). The tag loads on every page with all four
// consent signals denied, so before a choice Google only gets pings without cookies. Accepting the
// notice grants analytics_storage alone; the ad signals stay denied for good, since the site has no ads.
// The head script (components/BaseHead.astro) applies a saved choice before the tag starts; the
// notice (components/CookieConsent.astro, scripts/consent.ts) asks for it and lets the reader change it.

/** GA4 web stream of joaopster.com. Public: every page that loads the tag shows it. */
export const GA_MEASUREMENT_ID = 'G-YQF1DSBEVM';

/** Only the real site reports to GA4, so local builds and *.pages.dev previews stay out of the data. */
export const GA_HOST = 'joaopster.com';

/** localStorage key holding the reader's choice. */
export const CONSENT_STORAGE_KEY = 'analytics-consent';

export type AnalyticsConsent = 'granted' | 'denied';
