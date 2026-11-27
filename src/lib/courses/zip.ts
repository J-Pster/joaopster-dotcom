// Zips a folder of the repo for download: a course vault (by the publisher) or the course skill (at build time).
import { zipSync, type Zippable } from 'fflate';
import { readFileSync, readdirSync } from 'node:fs';
import { join } from 'node:path';

// Obsidian's per-machine window layout: never part of a course.
const SKIPPED = new Set(['workspace.json', 'workspace-mobile.json']);

// From the project root (where the build and the publisher run): this module is bundled elsewhere at build time.
export const SKILL_DIR = join(process.cwd(), 'courses', '_skill', 'criar-curso');
export const SKILL_NAME = 'criar-curso';

function addFolder(zip: Zippable, absDir: string, zipDir: string): void {
  for (const entry of readdirSync(absDir, { withFileTypes: true })) {
    if (SKIPPED.has(entry.name)) continue;
    const abs = join(absDir, entry.name);
    const path = `${zipDir}/${entry.name}`;
    if (entry.isDirectory()) addFolder(zip, abs, path);
    else zip[path] = readFileSync(abs);
  }
}

// The earliest date a zip entry can hold.
const ZIP_ENTRY_DATE = new Date(1980, 0, 1);

/** The folder as a zip whose single top-level folder is rootName. */
export function zipFolder(absDir: string, rootName: string): Uint8Array {
  const zip: Zippable = {};
  addFolder(zip, absDir, rootName);
  // A fixed date on every entry (fflate stamps the current time otherwise): the same folder always gives
  // the same bytes, so a course's version (a content hash) changes only when the course does.
  return zipSync(zip, { level: 9, mtime: ZIP_ENTRY_DATE });
}

export const zipResponse = (bytes: Uint8Array) =>
  new Response(bytes, { headers: { 'Content-Type': 'application/zip' } });
