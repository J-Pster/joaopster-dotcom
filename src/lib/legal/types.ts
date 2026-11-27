// Shape of the legal pages (privacy policy and terms of use). The text lives in one file per
// language (pt.ts, en.ts, es.ts); LegalPage.astro renders any of them the same way.
import type { Lang } from '../../i18n/ui';
import { privacyUrl, termsUrl } from '../legalUrls';

export type LegalDoc = 'privacy' | 'terms';

export type LegalBlock =
  | { readonly kind: 'p'; readonly html: string }
  | { readonly kind: 'ul'; readonly items: readonly string[] };

export interface LegalSection {
  readonly id: string;
  readonly title: string;
  readonly blocks: readonly LegalBlock[];
}

export interface LegalPageCopy {
  readonly metaTitle: string;
  readonly metaDescription: string;
  readonly title: string;
  readonly lead: string;
  readonly sections: readonly LegalSection[];
}

/** Everything one language needs: both documents plus the labels around them. */
export interface LegalLanguage {
  readonly lang: Lang;
  readonly updatedLabel: string;
  readonly onThisPage: string;
  readonly privacy: LegalPageCopy;
  readonly terms: LegalPageCopy;
}

export const legalPath = (lang: Lang, doc: LegalDoc): string =>
  doc === 'privacy' ? privacyUrl(lang) : termsUrl(lang);

export const legalAlternates = (doc: LegalDoc): Readonly<Record<Lang, string>> => ({
  pt: legalPath('pt', doc),
  en: legalPath('en', doc),
  es: legalPath('es', doc),
});
