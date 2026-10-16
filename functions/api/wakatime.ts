// Cloudflare Pages Function: GET /api/wakatime
// The site is static, so build-time WakaTime numbers freeze at the last deploy.
// This endpoint serves fresh numbers at runtime while keeping the API key server-side.
import { fetchWakatimeData } from '../../src/lib/getWakatimeData';

interface Env {
  WAKATIME_API_KEY: string;
}

interface PagesContext {
  request: Request;
  env: Env;
  waitUntil(promise: Promise<unknown>): void;
}

// Workers expose the zone cache as `caches.default`; DOM typings don't know it.
const edgeCache = (caches as CacheStorage & { default: Cache }).default;

const TTL_SECONDS = 1800;

export async function onRequestGet({ request, env, waitUntil }: PagesContext): Promise<Response> {
  const cached = await edgeCache.match(request);
  if (cached) return cached;

  let data;
  try {
    data = await fetchWakatimeData(env.WAKATIME_API_KEY);
  } catch (err) {
    console.error('[wakatime]', err);
    return Response.json({ error: 'wakatime_unavailable' }, { status: 502 });
  }

  const response = Response.json(data, {
    headers: { 'Cache-Control': `public, max-age=${TTL_SECONDS}` },
  });
  waitUntil(edgeCache.put(request, response.clone()));
  return response;
}
