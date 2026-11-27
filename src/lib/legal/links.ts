// Links shared by the legal texts, so every language points at the same pages.

export const CONTACT_EMAIL = 'joao@joaopster.com';

export const POLICIES = {
  anthropic: 'https://www.anthropic.com/legal/privacy',
  openai: 'https://openai.com/policies/privacy-policy/',
  google: 'https://cloud.google.com/terms/cloud-privacy-notice',
  elevenlabs: 'https://elevenlabs.io/privacy-policy',
  buttondown: 'https://buttondown.com/legal/privacy',
  cloudflare: 'https://www.cloudflare.com/privacypolicy/',
  googleFonts: 'https://policies.google.com/privacy',
  jsdelivr: 'https://www.jsdelivr.com/terms/privacy-policy-jsdelivr-net',
  github: 'https://docs.github.com/site-policy/privacy-policies/github-general-privacy-statement',
  giscus: 'https://giscus.app/',
} as const;

export const TERMS = {
  anthropic: 'https://www.anthropic.com/legal/consumer-terms',
  openai: 'https://openai.com/policies/terms-of-use/',
  google: 'https://cloud.google.com/terms',
  elevenlabs: 'https://elevenlabs.io/terms-of-use',
} as const;

/** An external link as it appears inside legal prose. */
export const ext = (href: string, label: string): string =>
  `<a href="${href}" target="_blank" rel="noopener noreferrer">${label}</a>`;

export const mail = (): string => `<a href="mailto:${CONTACT_EMAIL}">${CONTACT_EMAIL}</a>`;
