// On-demand endpoint: GET /api/wakatime
// The site is static, so build-time WakaTime numbers freeze at the last deploy.
// This endpoint serves fresh numbers at runtime while keeping the API key server-side.
import type { APIRoute } from 'astro';
import { env, waitUntil } from 'cloudflare:workers';
import { fetchWakatimeData } from '../../lib/getWakatimeData';

export const prerender = false;

// Workers expose the zone cache as `caches.default`; DOM typings don't know it.
const edgeCache = (caches as CacheStorage & { default: Cache }).default;

const TTL_SECONDS = 1800;

export const GET: APIRoute = async ({ request }) => {
  const cached = await edgeCache.match(request);
  if (cached) return cached;

  let data;
  try {
    data = await fetchWakatimeData(env.WAKATIME_ACCESS_TOKEN);
  } catch (err) {
    console.error('[wakatime]', err);
    return Response.json({ error: 'wakatime_unavailable' }, { status: 502 });
  }

  const response = Response.json(data, {
    headers: { 'Cache-Control': `public, max-age=${TTL_SECONDS}` },
  });
  waitUntil(edgeCache.put(request, response.clone()));
  return response;
};
