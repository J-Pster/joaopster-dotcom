// The publisher's access to the courses bucket, through wrangler (the account wrangler is logged in to,
// or CLOUDFLARE_API_TOKEN). "remote" is the real bucket; "local" is the copy that `npm run dev` reads
// (.wrangler/state).
import { execFileSync } from 'node:child_process';
import { mkdtempSync, readFileSync, rmSync } from 'node:fs';
import { tmpdir } from 'node:os';
import { join } from 'node:path';
import { fileURLToPath } from 'node:url';

export const BUCKET = 'joaopster-courses';
export type Target = 'remote' | 'local';

const WRANGLER = fileURLToPath(new URL('../../node_modules/wrangler/bin/wrangler.js', import.meta.url));

function wrangler(args: readonly string[]): string {
  return execFileSync(process.execPath, [WRANGLER, ...args], { encoding: 'utf8', stdio: ['ignore', 'pipe', 'pipe'] });
}

export function putObject(target: Target, key: string, file: string, contentType: string): void {
  wrangler(['r2', 'object', 'put', `${BUCKET}/${key}`, `--file=${file}`, `--content-type=${contentType}`, `--${target}`]);
}

/** The object's bytes, or undefined when the bucket has no such key. */
export function getObject(target: Target, key: string): Buffer | undefined {
  const dir = mkdtempSync(join(tmpdir(), 'courses-r2-'));
  const file = join(dir, 'object');
  try {
    wrangler(['r2', 'object', 'get', `${BUCKET}/${key}`, `--file=${file}`, `--${target}`]);
    return readFileSync(file);
  } catch (error) {
    const output = error instanceof Error && 'stderr' in error ? String(error.stderr) + String((error as { stdout?: unknown }).stdout ?? '') : '';
    if (/does not exist|not found|NoSuchKey/i.test(output)) return undefined;
    throw error;
  } finally {
    rmSync(dir, { recursive: true, force: true });
  }
}
