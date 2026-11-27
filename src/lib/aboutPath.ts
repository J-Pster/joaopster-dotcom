// Where the about page (the full résumé) lives in each language.
import type { Lang } from '../i18n/ui';

export const ABOUT_PATHS: Readonly<Record<Lang, string>> = {
  pt: '/sobre/',
  en: '/en/about/',
  es: '/es/sobre/',
};

export const aboutPath = (lang: Lang): string => ABOUT_PATHS[lang];

/** The CV exported from LinkedIn, with the phone number removed. */
export const CV_PDF_PATH = '/cv/joao-pster-cv.pdf';
