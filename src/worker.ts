// The site Worker (wrangler.jsonc "main"). Astro (@astrojs/cloudflare) answers each request; this adds
// what Astro alone does not:
// - the security headers of the static pages (public/_headers) on every response rendered here;
// - a "not found" in the visitor's language: Astro always answers with the root (Portuguese) 404 page,
//   the English and Spanish ones are prerendered at <lang>/404.html (astro.config.mjs).
import { handle } from '@astrojs/cloudflare/handler';
import { defaultLang, getLangFromUrl, type Lang } from './i18n/ui';
import { SITE_HEADERS } from './lib/security/siteHeaders';

async function localizedNotFound(env: Env, lang: Lang, url: URL): Promise<Response> {
  const page = await env.ASSETS.fetch(new URL(`/${lang}/404`, url));
  if (!page.ok) throw new Error(`Missing prerendered ${lang}/404.html (status ${page.status})`);
  return new Response(page.body, { status: 404, headers: page.headers });
}

function withSiteHeaders(response: Response): Response {
  const headers = new Headers(response.headers);
  for (const [name, value] of SITE_HEADERS) if (!headers.has(name)) headers.set(name, value);
  return new Response(response.body, { status: response.status, statusText: response.statusText, headers });
}

export default {
  async fetch(request, env, ctx) {
    const response = await handle(request, env, ctx);
    const url = new URL(request.url);
    const lang = getLangFromUrl(url);
    return withSiteHeaders(response.status === 404 && lang !== defaultLang ? await localizedNotFound(env, lang, url) : response);
  },
} satisfies ExportedHandler<Env>;
