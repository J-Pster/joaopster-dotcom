// Zips a folder of the repo (a course vault, the course skill) for download, built at build time.
import { zipSync, type Zippable } from 'fflate';
import { readFileSync, readdirSync } from 'node:fs';
import { join } from 'node:path';
import { fileURLToPath } from 'node:url';

// Obsidian's per-machine window layout: never part of a course.
const SKIPPED = new Set(['workspace.json', 'workspace-mobile.json']);

export const SKILL_DIR = fileURLToPath(new URL('../../../courses/_skill/criar-curso/', import.meta.url));
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

/** The folder as a zip whose single top-level folder is rootName. */
export function zipFolder(absDir: string, rootName: string): Uint8Array {
  const zip: Zippable = {};
  addFolder(zip, absDir, rootName);
  return zipSync(zip, { level: 9 });
}

export const zipResponse = (bytes: Uint8Array) =>
  new Response(bytes, { headers: { 'Content-Type': 'application/zip' } });
