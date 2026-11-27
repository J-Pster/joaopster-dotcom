// The response headers every page gets, read from public/_headers (the one place they are written and
// explained). Static files get them from the Workers assets layer, which applies _headers itself;
// on-demand responses (courses, API endpoints) get them from src/worker.ts.
import headersFile from '../../../public/_headers?raw';

function parseSiteHeaders(file: string): ReadonlyArray<readonly [name: string, value: string]> {
  const lines = file.split(/\r?\n/);
  const start = lines.indexOf('/*');
  if (start === -1) throw new Error('public/_headers has no "/*" block');
  const headers: (readonly [string, string])[] = [];
  for (const line of lines.slice(start + 1)) {
    if (!/^\s+\S/.test(line)) break;
    const colon = line.indexOf(':');
    if (colon === -1) throw new Error(`public/_headers: not a header line: ${line}`);
    headers.push([line.slice(0, colon).trim(), line.slice(colon + 1).trim()]);
  }
  if (headers.length === 0) throw new Error('public/_headers: the "/*" block sets no header');
  return headers;
}

export const SITE_HEADERS = parseSiteHeaders(headersFile);
