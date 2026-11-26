// Cloudflare Pages Function: POST /api/progress
// Keeps a reader's course progress in sync between devices. A device sends its progress and a sync
// code; the stored progress for that code is merged with it (newest value of each item wins) and
// the merged result is stored and sent back. The code is never stored, only its SHA-256.
import {
  mergeProgress,
  parseProgressRecord,
  ProgressFormatError,
  serializeProgress,
  type ProgressRecord,
} from '../../src/lib/courses/progressModel';
import { parseSyncCode, type SyncCode } from '../../src/lib/courses/syncCode';
import { MAX_SYNC_BYTES, type SyncFailure, type SyncIntent } from '../../src/lib/courses/syncProtocol';

// The few D1 calls this file makes (the project has no @cloudflare/workers-types).
interface D1Result {
  readonly meta: { readonly changes: number };
}
interface D1PreparedStatement {
  bind(...values: (string | number)[]): D1PreparedStatement;
  first<T>(): Promise<T | null>;
  run(): Promise<D1Result>;
}
interface D1Database {
  prepare(query: string): D1PreparedStatement;
}

interface Env {
  COURSES_DB: D1Database;
}

interface PagesContext {
  request: Request;
  env: Env;
}

interface StoredRow {
  readonly data: string;
  readonly version: number;
}

interface ParsedRequest {
  readonly code: SyncCode;
  readonly intent: SyncIntent;
  readonly progress: ProgressRecord;
}

// Abuse is limited by a WAF rate limiting rule on the joaopster.com zone. Requests through
// *.pages.dev (production or previews) skip that zone and its rule, so they are refused here.
const SITE_HOSTS: ReadonlySet<string> = new Set(['joaopster.com', 'localhost', '127.0.0.1']);

/** Two devices writing the same code at once: the loser re-reads and merges again. */
const WRITE_ATTEMPTS = 3;

const failure = (error: SyncFailure, status: number) => Response.json({ error }, { status });

function parseRequest(body: unknown, now: number): ParsedRequest | null {
  if (typeof body !== 'object' || body === null) return null;
  const { code, intent, progress } = body as Record<string, unknown>;
  if (typeof code !== 'string' || (intent !== 'create' && intent !== 'sync')) return null;
  const syncCode = parseSyncCode(code);
  if (!syncCode) return null;
  try {
    return { code: syncCode, intent, progress: parseProgressRecord(progress, now) };
  } catch (err) {
    if (err instanceof ProgressFormatError) return null;
    throw err;
  }
}

async function sha256Hex(text: string): Promise<string> {
  const digest = await crypto.subtle.digest('SHA-256', new TextEncoder().encode(text));
  return [...new Uint8Array(digest)].map((b) => b.toString(16).padStart(2, '0')).join('');
}

// Each side is within the parse limits, but their merge can pass them (more courses or entries);
// stored that way, the code could never be read again.
function withinLimits(progress: ProgressRecord, now: number): boolean {
  try {
    parseProgressRecord(progress, now);
    return true;
  } catch (err) {
    if (err instanceof ProgressFormatError) return false;
    throw err;
  }
}

type WriteOutcome =
  | { kind: 'stored'; progress: ProgressRecord }
  | { kind: 'failed'; error: SyncFailure; status: number }
  | { kind: 'conflict' };

async function writeOnce(db: D1Database, hash: string, request: ParsedRequest, now: number): Promise<WriteOutcome> {
  const row = await db.prepare('SELECT data, version FROM course_progress WHERE code_hash = ?').bind(hash).first<StoredRow>();

  if (request.intent === 'create') {
    // 100 random bits: a clash means a bug in code generation, not bad luck.
    if (row) return { kind: 'failed', error: 'code_taken', status: 409 };
    const data = serializeProgress(request.progress);
    if (data.length > MAX_SYNC_BYTES) return { kind: 'failed', error: 'too_large', status: 413 };
    const result = await db
      .prepare(
        'INSERT INTO course_progress (code_hash, data, version, created_at, updated_at) VALUES (?, ?, 1, ?, ?) ON CONFLICT (code_hash) DO NOTHING',
      )
      .bind(hash, data, now, now)
      .run();
    return result.meta.changes === 1 ? { kind: 'stored', progress: request.progress } : { kind: 'conflict' };
  }

  if (!row) return { kind: 'failed', error: 'unknown_code', status: 404 };
  const stored = parseProgressRecord(JSON.parse(row.data), now);
  const merged = mergeProgress(stored, request.progress);
  const data = serializeProgress(merged);
  if (data === serializeProgress(stored)) return { kind: 'stored', progress: merged };
  if (data.length > MAX_SYNC_BYTES || !withinLimits(merged, now)) return { kind: 'failed', error: 'too_large', status: 413 };
  const result = await db
    .prepare('UPDATE course_progress SET data = ?, version = version + 1, updated_at = ? WHERE code_hash = ? AND version = ?')
    .bind(data, now, hash, row.version)
    .run();
  return result.meta.changes === 1 ? { kind: 'stored', progress: merged } : { kind: 'conflict' };
}

export async function onRequestPost({ request, env }: PagesContext): Promise<Response> {
  if (!SITE_HOSTS.has(new URL(request.url).hostname)) return new Response(null, { status: 404 });
  const declaredLength = Number(request.headers.get('Content-Length') ?? '0');
  if (declaredLength > MAX_SYNC_BYTES) return failure('too_large', 413);
  const raw = await request.text();
  if (raw.length > MAX_SYNC_BYTES) return failure('too_large', 413);

  const now = Date.now();
  let body: unknown;
  try {
    body = JSON.parse(raw);
  } catch {
    return failure('invalid_request', 400);
  }
  const parsed = parseRequest(body, now);
  if (!parsed) return failure('invalid_request', 400);

  const hash = await sha256Hex(parsed.code);
  for (let attempt = 0; attempt < WRITE_ATTEMPTS; attempt++) {
    const outcome = await writeOnce(env.COURSES_DB, hash, parsed, now);
    if (outcome.kind === 'stored') {
      return Response.json({ progress: outcome.progress }, { headers: { 'Cache-Control': 'no-store' } });
    }
    if (outcome.kind === 'failed') return failure(outcome.error, outcome.status);
  }
  console.error('[progress] write conflict persisted after retries');
  return failure('busy', 503);
}
