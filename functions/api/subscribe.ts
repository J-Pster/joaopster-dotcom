// Cloudflare Pages Function: POST /api/subscribe
// Adds a reader to the Buttondown newsletter while keeping the API key server-side.
// Buttondown sends the double opt-in confirmation email itself, so nobody is
// mailed before they click the confirmation link.

interface Env {
  BUTTONDOWN_API_KEY: string;
}

interface PagesContext {
  request: Request;
  env: Env;
}

const LANGS = ['pt', 'en', 'es'] as const;
type Lang = (typeof LANGS)[number];

interface Signup {
  email: string;
  lang: Lang;
}

/** What the browser needs to know; it maps each outcome to a localized message. */
type Outcome = 'subscribed' | 'already_subscribed' | 'invalid_email' | 'try_later';

const EMAIL_PATTERN = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/;
const ALREADY_SUBSCRIBED = new Set(['email_already_exists', 'subscriber_already_exists']);
const INVALID_EMAIL = new Set(['email_empty', 'email_invalid', 'email_blocked']);

const isLang = (value: unknown): value is Lang => LANGS.includes(value as Lang);

type ParsedRequest = { kind: 'signup'; signup: Signup } | { kind: 'bot' } | { kind: 'invalid' };

function parseRequest(body: unknown): ParsedRequest {
  if (typeof body !== 'object' || body === null) return { kind: 'invalid' };
  const { email, lang, website } = body as Record<string, unknown>;
  // Honeypot: the "website" field is hidden from people, so only bots fill it.
  if (typeof website === 'string' && website !== '') return { kind: 'bot' };
  if (typeof email !== 'string' || !isLang(lang)) return { kind: 'invalid' };
  const trimmed = email.trim();
  if (!EMAIL_PATTERN.test(trimmed)) return { kind: 'invalid' };
  return { kind: 'signup', signup: { email: trimmed, lang } };
}

async function subscribe(signup: Signup, request: Request, apiKey: string): Promise<Outcome> {
  const ip = request.headers.get('CF-Connecting-IP');
  const response = await fetch('https://api.buttondown.com/v1/subscribers', {
    method: 'POST',
    headers: { Authorization: `Token ${apiKey}`, 'Content-Type': 'application/json' },
    body: JSON.stringify({
      email_address: signup.email,
      // Language lives in metadata (free plan); each edition filters on it.
      metadata: { lang: signup.lang },
      referrer_url: request.headers.get('Referer') ?? '',
      ...(ip && { ip_address: ip }),
    }),
  });

  if (response.status === 201) return 'subscribed';
  if (response.status === 429) return 'try_later';

  const detail = (await response.json().catch(() => ({}))) as { code?: string; detail?: string };
  if (detail.code && ALREADY_SUBSCRIBED.has(detail.code)) return 'already_subscribed';
  if (detail.code && INVALID_EMAIL.has(detail.code)) return 'invalid_email';
  if (detail.code === 'rate_limited') return 'try_later';

  console.error('[subscribe] Buttondown rejected the signup', response.status, detail);
  return 'try_later';
}

const HTTP_STATUS: Record<Outcome, number> = {
  subscribed: 200,
  already_subscribed: 200,
  invalid_email: 400,
  try_later: 503,
};

export async function onRequestPost({ request, env }: PagesContext): Promise<Response> {
  if (!env.BUTTONDOWN_API_KEY) throw new Error('BUTTONDOWN_API_KEY is not configured');

  const parsed = parseRequest(await request.json().catch(() => null));
  // Bots get the same answer as people so they cannot tell the honeypot caught them.
  if (parsed.kind === 'bot') return Response.json({ outcome: 'subscribed' satisfies Outcome });
  if (parsed.kind === 'invalid') {
    return Response.json({ outcome: 'invalid_email' satisfies Outcome }, { status: 400 });
  }

  const outcome = await subscribe(parsed.signup, request, env.BUTTONDOWN_API_KEY);
  return Response.json({ outcome }, { status: HTTP_STATUS[outcome] });
}
