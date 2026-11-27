// Cloudflare Pages Function: /api/views
// POST { key } counts a view of a blog post; GET ?keys=a,b returns the totals. The page script only
// posts after the post stayed visible for a few seconds (lib/blog/postViews.ts). Here a view also
// needs a same-origin browser request without a crawler user agent, and counts once a day per
// visitor and post. The visitor is a salted SHA-256 of day, IP and post; the IP itself is never
// stored.
import { isNonHumanAgent, POST_KEYS_PATH, type ViewCounts, type ViewReceipt } from '../../src/lib/blog/postViews';

// The few D1 calls this file makes (the project has no @cloudflare/workers-types).
interface D1Result {
  readonly meta: { readonly changes: number };
}
interface D1PreparedStatement {
  bind(...values: (string | number)[]): D1PreparedStatement;
  first<T>(): Promise<T | null>;
  all<T>(): Promise<{ readonly results: T[] }>;
  run(): Promise<D1Result>;
}
interface D1Database {
  prepare(query: string): D1PreparedStatement;
  batch(statements: D1PreparedStatement[]): Promise<D1Result[]>;
}

interface Env {
  COURSES_DB: D1Database;
  /** Secret mixed into the visitor hash, so it cannot be reversed by trying IPs. */
  VIEWS_SALT: string;
  ASSETS: { fetch(request: Request | URL): Promise<Response> };
}

interface PagesContext {
  request: Request;
  env: Env;
}

// Same rule as functions/api/progress.ts: *.pages.dev skips the zone's WAF, so it is refused.
const SITE_HOSTS: ReadonlySet<string> = new Set(['joaopster.com', 'localhost', '127.0.0.1']);
const MAX_KEYS_PER_READ = 100;
const MAX_BODY_LENGTH = 256;

const NOT_COUNTED = 204;

// The keys of the published posts, read once per isolate from the static list the build writes.
let knownKeys: Promise<ReadonlySet<string>> | undefined;
function publishedKeys(env: Env, request: Request): Promise<ReadonlySet<string>> {
  knownKeys ??= env.ASSETS.fetch(new URL(POST_KEYS_PATH, request.url)).then(async (response) => {
    if (!response.ok) throw new Error(`[views] ${POST_KEYS_PATH} answered ${response.status}`);
    const keys: unknown = await response.json();
    if (!Array.isArray(keys) || !keys.every((key) => typeof key === 'string')) {
      throw new Error(`[views] ${POST_KEYS_PATH} is not a list of keys`);
    }
    return new Set(keys);
  });
  // A failed read is retried by the next request instead of failing the isolate for good.
  knownKeys.catch(() => {
    knownKeys = undefined;
  });
  return knownKeys;
}

async function sha256Hex(text: string): Promise<string> {
  const digest = await crypto.subtle.digest('SHA-256', new TextEncoder().encode(text));
  return [...new Uint8Array(digest)].map((b) => b.toString(16).padStart(2, '0')).join('');
}

async function totalViews(db: D1Database, key: string): Promise<number> {
  const row = await db.prepare('SELECT views FROM post_views WHERE post_key = ?').bind(key).first<{ views: number }>();
  return row?.views ?? 0;
}

function parseKey(raw: string): string | null {
  try {
    const body: unknown = JSON.parse(raw);
    if (typeof body !== 'object' || body === null) return null;
    const { key } = body as Record<string, unknown>;
    return typeof key === 'string' ? key : null;
  } catch {
    return null;
  }
}

export async function onRequestPost({ request, env }: PagesContext): Promise<Response> {
  if (!SITE_HOSTS.has(new URL(request.url).hostname)) return new Response(null, { status: 404 });
  // Browsers mark their own fetches; scripts and crawlers calling the API directly do not.
  if (request.headers.get('Sec-Fetch-Site') !== 'same-origin') return new Response(null, { status: NOT_COUNTED });
  const userAgent = request.headers.get('User-Agent') ?? '';
  if (isNonHumanAgent(userAgent)) return new Response(null, { status: NOT_COUNTED });

  if (Number(request.headers.get('Content-Length') ?? 0) > MAX_BODY_LENGTH) return new Response(null, { status: 413 });
  const raw = await request.text();
  if (raw.length > MAX_BODY_LENGTH) return new Response(null, { status: 413 });
  const key = parseKey(raw);
  if (!key || !(await publishedKeys(env, request)).has(key)) return new Response(null, { status: 400 });

  const ip = request.headers.get('CF-Connecting-IP');
  if (!ip) return new Response(null, { status: 400 });
  if (!env.VIEWS_SALT) throw new Error('[views] VIEWS_SALT is not set');

  const day = new Date().toISOString().slice(0, 10);
  // The IP alone identifies the visitor: a user agent is free to change, so it would let one IP
  // count again and again.
  const visitor = await sha256Hex(`${env.VIEWS_SALT}|${day}|${ip}|${key}`);
  // One transaction: the mark and the count land together or not at all. The count only goes up
  // when the mark was new (changes() is the row count of the statement before it).
  const [mark] = await env.COURSES_DB.batch([
    env.COURSES_DB.prepare('INSERT INTO post_view_marks (day, visitor_hash) VALUES (?, ?) ON CONFLICT DO NOTHING').bind(
      day,
      visitor,
    ),
    env.COURSES_DB.prepare(
      'INSERT INTO post_views (post_key, views) SELECT ?, 1 WHERE changes() = 1 ON CONFLICT (post_key) DO UPDATE SET views = views + 1',
    ).bind(key),
    // Marks only matter for today; older ones go as views come in.
    env.COURSES_DB.prepare('DELETE FROM post_view_marks WHERE day < ?').bind(day),
  ]);
  if (!mark) throw new Error('[views] D1 batch returned no result for the mark');
  const receipt: ViewReceipt = { counted: mark.meta.changes === 1, views: await totalViews(env.COURSES_DB, key) };
  return Response.json(receipt, { headers: { 'Cache-Control': 'no-store' } });
}

export async function onRequestGet({ request, env }: PagesContext): Promise<Response> {
  const url = new URL(request.url);
  if (!SITE_HOSTS.has(url.hostname)) return new Response(null, { status: 404 });
  const keys = [...new Set((url.searchParams.get('keys') ?? '').split(',').filter(Boolean))];
  const published = await publishedKeys(env, request);
  if (keys.length === 0 || keys.length > MAX_KEYS_PER_READ || !keys.every((key) => published.has(key))) {
    return new Response(null, { status: 400 });
  }

  const { results } = await env.COURSES_DB.prepare(
    `SELECT post_key, views FROM post_views WHERE post_key IN (${keys.map(() => '?').join(', ')})`,
  )
    .bind(...keys)
    .all<{ post_key: string; views: number }>();
  const stored = new Map(results.map((row) => [row.post_key, row.views]));
  // A post nobody has viewed yet has no row: its total is zero.
  const counts: ViewCounts = { views: Object.fromEntries(keys.map((key) => [key, stored.get(key) ?? 0])) };
  return Response.json(counts, { headers: { 'Cache-Control': 'public, max-age=60' } });
}
