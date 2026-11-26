// Syncs this browser's course progress with the reader's other devices through a sync code.
// The local copy stays the source the pages read and write; sync only merges it with the copy kept
// under the code (functions/api/progress.ts), so the pages work the same offline or without a code.
import { loadAllProgress, PROGRESS_CHANGED, storeAllProgress } from '../progress';
import { mergeProgress, parseProgressRecord, ProgressFormatError, serializeProgress, type ProgressRecord } from '../progressModel';
import { newSyncCode, parseSyncCode, type SyncCode } from '../syncCode';
import { SYNC_ENDPOINT, type SyncFailure, type SyncIntent, type SyncRequest } from '../syncProtocol';

const CODE_KEY = 'jp-courses:sync-code';
/** Changes are sent together once the reader stops for this long. */
const PUSH_DELAY_MS = 2000;
/** Browsers refuse keepalive requests with bodies over 64 KB; bigger pushes wait for the next page. */
const KEEPALIVE_MAX_BYTES = 60 * 1024;
const FAILURES: readonly SyncFailure[] = ['invalid_request', 'unknown_code', 'code_taken', 'too_large', 'busy'];

export type SyncProblem = SyncFailure | 'network' | 'server';

export type SyncStatus =
  | { readonly kind: 'off' }
  | { readonly kind: 'syncing' }
  | { readonly kind: 'synced'; readonly at: Date }
  | { readonly kind: 'failed'; readonly problem: SyncProblem };

/** Fired on window with the new SyncStatus as detail. */
export const SYNC_STATUS = 'courses:sync-status';

type Exchange = { readonly ok: true; readonly changed: boolean } | { readonly ok: false; readonly problem: SyncProblem };

let status: SyncStatus = { kind: 'off' };
let autoSyncStarted = false;

function setStatus(next: SyncStatus): void {
  status = next;
  window.dispatchEvent(new CustomEvent<SyncStatus>(SYNC_STATUS, { detail: next }));
}

export const currentSyncStatus = (): SyncStatus => status;

export function loadSyncCode(): SyncCode | null {
  try {
    const raw = localStorage.getItem(CODE_KEY);
    return raw ? parseSyncCode(raw) : null;
  } catch (err) {
    console.warn('[courses] storage blocked, sync is off', err);
    return null;
  }
}

async function problemOf(response: Response): Promise<SyncProblem> {
  const body: unknown = await response.json().catch(() => null);
  const error = typeof body === 'object' && body !== null ? (body as { error?: unknown }).error : undefined;
  return FAILURES.find((f) => f === error) ?? 'server';
}

// Sends this browser's progress and keeps the merged result. Progress the reader changed while the
// request was in flight is merged in too (newest value wins), so it is never overwritten.
async function exchange(code: SyncCode, intent: SyncIntent, keepalive = false): Promise<Exchange> {
  const request: SyncRequest = { code, intent, progress: loadAllProgress() };
  const body = JSON.stringify(request);
  let response: Response;
  try {
    response = await fetch(SYNC_ENDPOINT, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body,
      keepalive: keepalive && body.length <= KEEPALIVE_MAX_BYTES,
    });
  } catch (err) {
    console.warn('[courses] sync request failed', err);
    return { ok: false, problem: 'network' };
  }
  if (!response.ok) return { ok: false, problem: await problemOf(response) };

  const remote = await readRemote(response);
  if (!remote) return { ok: false, problem: 'server' };
  const current = loadAllProgress();
  const next = mergeProgress(current, remote);
  const changed = serializeProgress(next) !== serializeProgress(current);
  if (changed) storeAllProgress(next);
  return { ok: true, changed };
}

// The endpoint is ours, but a proxy or an outage page can still answer 200 with something else.
async function readRemote(response: Response): Promise<ProgressRecord | null> {
  try {
    const body = (await response.json()) as { progress?: unknown };
    return parseProgressRecord(body.progress, Date.now());
  } catch (err) {
    if (!(err instanceof SyntaxError || err instanceof ProgressFormatError)) throw err;
    console.error('[courses] sync answered with unreadable progress', err);
    return null;
  }
}

async function run(code: SyncCode, intent: SyncIntent, keepalive = false): Promise<Exchange> {
  setStatus({ kind: 'syncing' });
  const result = await exchange(code, intent, keepalive);
  setStatus(result.ok ? { kind: 'synced', at: new Date() } : { kind: 'failed', problem: result.problem });
  return result;
}

function saveCode(code: SyncCode): void {
  localStorage.setItem(CODE_KEY, code);
}

/** Starts syncing this browser under a brand new code. */
export async function createSyncCode(): Promise<{ code: SyncCode; result: Exchange }> {
  const code = newSyncCode();
  const result = await run(code, 'create');
  if (result.ok) saveCode(code);
  return { code, result };
}

/** Links this browser to a code made on another device. */
export async function joinSyncCode(input: string): Promise<Exchange | { readonly ok: false; readonly problem: 'invalid_code' }> {
  const code = parseSyncCode(input);
  if (!code) return { ok: false, problem: 'invalid_code' };
  const result = await run(code, 'sync');
  if (result.ok) saveCode(code);
  return result;
}

/** This browser stops syncing; the progress stays here and under the code. */
export function forgetSyncCode(): void {
  localStorage.removeItem(CODE_KEY);
  setStatus({ kind: 'off' });
}

/**
 * With a saved code: merges with the other devices now. While a code is saved, sends each change shortly after it
 * happens (and right away when the page is hidden). `onRemoteChange` repaints the page when a sync
 * brought progress made elsewhere.
 */
export function startAutoSync(onRemoteChange: () => void): void {
  if (autoSyncStarted) return;
  autoSyncStarted = true;

  let timer: ReturnType<typeof setTimeout> | undefined;
  // The code is read on every push: the reader can link or unlink this browser while the page is open.
  const push = async (keepalive = false) => {
    clearTimeout(timer);
    timer = undefined;
    const code = loadSyncCode();
    if (!code) return;
    const result = await run(code, 'sync', keepalive);
    if (result.ok && result.changed) onRemoteChange();
  };

  window.addEventListener(PROGRESS_CHANGED, () => {
    clearTimeout(timer);
    timer = setTimeout(() => void push(), PUSH_DELAY_MS);
  });
  document.addEventListener('visibilitychange', () => {
    if (document.visibilityState === 'hidden' && timer !== undefined) void push(true);
  });
  if (loadSyncCode()) void push();
}
