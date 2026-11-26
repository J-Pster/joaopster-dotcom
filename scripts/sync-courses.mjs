// Copies the course vaults from the local "Aprendendo" folder into courses/<slug>/.
// Run it again whenever a course changes: `npm run courses:sync`.
// Source of the vaults: COURSES_SOURCE (defaults to the author's Documents/Aprendendo).
import { cpSync, existsSync, rmSync, mkdirSync } from 'node:fs';
import { basename, join } from 'node:path';
import { homedir } from 'node:os';

const SOURCE = process.env.COURSES_SOURCE ?? join(homedir(), 'Documents', 'Aprendendo');
const TARGET = new URL('../courses/', import.meta.url).pathname.replace(/^\/([A-Za-z]:)/, '$1');

/** slug in the site -> vault folder inside SOURCE */
const VAULTS = {
  'aws-saa-c03': 'Aprendendo Certificacoes AWS',
  radio: 'Aprendendo Radio',
  'modelagem-de-casas': 'Aprendendo Modelagem de Casas',
  'primeiros-socorros': 'Aprendendo Primeiros Socorros',
};

// Personal Obsidian state and sync-conflict copies never ship.
const SKIP_FILES = new Set(['workspace.json', 'workspace-mobile.json']);
const isConflictCopy = (name) => name.includes('Name clash') || name.includes('Edit conflict');

if (!existsSync(SOURCE)) throw new Error(`Courses source not found: ${SOURCE}`);
mkdirSync(TARGET, { recursive: true });

for (const [slug, folder] of Object.entries(VAULTS)) {
  const from = join(SOURCE, folder);
  if (!existsSync(from)) throw new Error(`Course vault not found: ${from}`);
  const to = join(TARGET, slug);
  rmSync(to, { recursive: true, force: true });
  cpSync(from, to, {
    recursive: true,
    filter: (src) => {
      const name = basename(src);
      return !SKIP_FILES.has(name) && !isConflictCopy(name);
    },
  });
  console.log(`synced ${folder} -> courses/${slug}`);
}
