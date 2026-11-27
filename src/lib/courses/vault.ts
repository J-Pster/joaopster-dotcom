// Loads a course vault from courses/<slug>/ for the publisher (scripts/courses/publish.ts): every note,
// its URL, its role in the course (home, module, lesson, glossary term, other page) and the links
// between notes. Node only: the site never reads the Markdown, it reads the published package.
import { readFileSync, readdirSync } from 'node:fs';
import { join, posix } from 'node:path';
import { fileURLToPath } from 'node:url';
import { parseFrontmatter } from '@astrojs/markdown-remark';
import { courseBySlug } from '../../../course-catalog/courses';
import { courseFilesUrl, courseUrl, type CourseInfo } from './catalog';
import type { NoteKind } from './model';

export interface Note {
  /** Vault-relative path with forward slashes, e.g. "05 - Hemorragia/05.01 - Reconhecer.md". */
  readonly id: string;
  /** File name without ".md": what wikilinks point to. */
  readonly name: string;
  readonly absPath: string;
  readonly url: string;
  readonly title: string;
  readonly kind: NoteKind;
  /** Module folder id, for module notes and lessons. */
  readonly moduleId: string | undefined;
  readonly frontmatter: Record<string, unknown>;
  readonly body: string;
}

export interface Module {
  /** Vault-relative folder path. */
  readonly id: string;
  readonly number: number;
  readonly title: string;
  /** The module note: same name as the folder (Obsidian format) or README.md (markdown format). */
  readonly note: Note;
  readonly lessons: readonly Note[];
}

/** A non-Markdown file of the course (image, spreadsheet, text) that notes link to. */
export interface Asset {
  readonly id: string;
  readonly absPath: string;
  readonly url: string;
}

export interface Vault {
  readonly course: CourseInfo;
  readonly root: string;
  readonly notes: readonly Note[];
  readonly home: Note;
  readonly modules: readonly Module[];
  /** Every lesson in reading order. */
  readonly lessons: readonly Note[];
  readonly glossary: readonly Note[];
  /** Notes that link to the given note id. */
  readonly backlinks: ReadonlyMap<string, readonly Note[]>;
  byId(id: string): Note | undefined;
  /** Resolves an Obsidian link target ("Note", "Folder/Note", "Note.md") the way Obsidian does. */
  resolveName(target: string): Note | undefined;
  readonly assets: readonly Asset[];
  /** Resolves a relative markdown link ("../02 - X/README.md") written inside a note. */
  resolveRelative(from: Note, href: string): Note | undefined;
  /** Resolves a relative link to a course file ("./Tabela.xlsx") written inside a note. */
  resolveAsset(from: Note, href: string): Asset | undefined;
}

const COURSES_DIR = fileURLToPath(new URL('../../../courses/', import.meta.url));
const MODULE_DIR = /^(\d+) - (.+)$/;
// Glossary folder names: the course-making skill writes "Glossario"; courses in other languages may not.
const GLOSSARY_DIRS = new Set(['Glossario', 'Glossário', 'Glossary', 'Glosario']);
const naturalOrder = new Intl.Collator('pt-BR', { numeric: true, sensitivity: 'base' }).compare;

export const slugify = (text: string): string =>
  text
    .normalize('NFD')
    .replace(/[̀-ͯ]/g, '')
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, '-')
    .replace(/^-+|-+$/g, '');

/** Every file of the vault, vault-relative, skipping Obsidian's own folders and dotfiles. */
function listFiles(root: string, dir = ''): string[] {
  const out: string[] = [];
  for (const entry of readdirSync(join(root, dir), { withFileTypes: true })) {
    if (entry.name.startsWith('.') || entry.name.startsWith('_')) continue;
    const rel = dir ? `${dir}/${entry.name}` : entry.name;
    if (entry.isDirectory()) out.push(...listFiles(root, rel));
    else out.push(rel);
  }
  return out;
}

// Obsidian Bases (.base) are views over the notes, not content: the progress widget replaces them.
const ASSET_EXCLUDED = /\.(md|base)$/;

// First H1, without wikilink brackets or emphasis markers.
function firstHeading(body: string): string | undefined {
  const match = body.match(/^#\s+(.+)$/m);
  if (!match) return undefined;
  return match[1].replace(/\[\[(?:[^\]|]+\|)?([^\]]+)\]\]/g, '$1').replace(/[*_`]/g, '').trim();
}

// Links as written in the raw text, for the backlinks index.
const WIKILINK = /!?\[\[([^\]|#\n]*)(?:#[^\]|\n]*)?(?:\\?\|[^\]\n]*)?\]\]/g;
const MD_LINK = /\]\(([^)\s]+\.md)(?:#[^)]*)?\)/g;

function loadVault(course: CourseInfo): Vault {
  const root = join(COURSES_DIR, course.slug);
  const homeDir = posix.dirname(course.home) === '.' ? '' : posix.dirname(course.home);
  const usedUrls = new Map<string, number>();

  // Notes inside the home note's folder drop that folder from the URL (SAA-C03/... becomes /cursos/aws-saa-c03/...).
  const relToHome = (id: string): string | undefined => {
    if (!homeDir) return id;
    return id.startsWith(`${homeDir}/`) ? id.slice(homeDir.length + 1) : undefined;
  };

  const urlFor = (id: string): string => {
    if (id === course.home) return courseUrl(course);
    const parts = (relToHome(id) ?? id).replace(/\.md$/, '').split('/');
    // Folder notes (README.md, or a note named like its folder) live at the folder URL.
    if (parts.at(-1) === 'README' || parts.at(-1) === parts.at(-2)) parts.pop();
    const base = `${courseUrl(course)}${parts.map(slugify).join('/')}/`;
    // Two files can slugify the same way (accents, punctuation): keep both reachable.
    const seen = usedUrls.get(base) ?? 0;
    usedUrls.set(base, seen + 1);
    return seen === 0 ? base : `${base.slice(0, -1)}-${seen + 1}/`;
  };

  const moduleDirOf = (id: string): string | undefined => {
    const rel = relToHome(id);
    if (!rel || !rel.includes('/')) return undefined;
    const top = rel.split('/')[0];
    if (!MODULE_DIR.test(top)) return undefined;
    return homeDir ? `${homeDir}/${top}` : top;
  };

  const kindOf = (id: string, name: string, moduleId: string | undefined): NoteKind => {
    if (id === course.home) return 'home';
    if (id.split('/').some((part) => GLOSSARY_DIRS.has(part))) return 'glossary';
    if (!moduleId) return 'page';
    const isModuleNote = posix.dirname(id) === moduleId && (name === posix.basename(moduleId) || name === 'README');
    return isModuleNote ? 'module' : 'lesson';
  };

  const files = listFiles(root).sort(naturalOrder);
  const notes: Note[] = files
    .filter((id) => id.endsWith('.md'))
    .map((id) => {
      const absPath = join(root, id);
      const { frontmatter, content } = parseFrontmatter(readFileSync(absPath, 'utf8'));
      const name = posix.basename(id, '.md');
      const moduleId = moduleDirOf(id);
      return {
        id,
        name,
        absPath,
        url: urlFor(id),
        title: firstHeading(content) ?? name,
        kind: kindOf(id, name, moduleId),
        moduleId,
        frontmatter,
        body: content,
      };
    });

  const byId = new Map(notes.map((n) => [n.id, n]));
  const byName = new Map<string, Note>();
  for (const note of notes) {
    const key = note.name.toLowerCase();
    // README is not a link target by name: there is one per folder in the markdown format.
    if (note.name !== 'README' && !byName.has(key)) byName.set(key, note);
  }
  const home = byId.get(course.home);
  if (!home) throw new Error(`Course ${course.slug}: home note ${course.home} not found`);

  const moduleIds = [...new Set(notes.flatMap((n) => (n.moduleId ? [n.moduleId] : [])))].sort(naturalOrder);
  const modules: Module[] = moduleIds.map((id) => {
    const match = posix.basename(id).match(MODULE_DIR);
    if (!match) throw new Error(`Not a module folder: ${id}`);
    const note = notes.find((n) => n.moduleId === id && n.kind === 'module');
    if (!note) throw new Error(`Course ${course.slug}: module ${id} has no module note`);
    // The module note's heading ("Módulo 5: Multiconta, governança e federação", "Module 5: ...")
    // keeps the accents that the folder name drops.
    const heading = note.title.match(/^(?:M[oó]dulo|Module) \d+:\s*(.+)$/);
    return {
      id,
      number: Number(match[1]),
      title: heading ? heading[1] : match[2],
      note,
      lessons: notes.filter((n) => n.moduleId === id && n.kind === 'lesson'),
    };
  });

  const resolveName = (target: string): Note | undefined => {
    const clean = target.trim().replace(/\.md$/, '');
    if (!clean) return undefined;
    if (clean.includes('/')) {
      const exact = byId.get(`${clean}.md`) ?? notes.find((n) => n.id.endsWith(`/${clean}.md`));
      if (exact) return exact;
    }
    return byName.get(posix.basename(clean).toLowerCase());
  };

  const assets: Asset[] = files
    .filter((id) => !ASSET_EXCLUDED.test(id))
    .map((id) => {
      const ext = posix.extname(id);
      const slugged = id.slice(0, -ext.length).split('/').map(slugify).join('/');
      return { id, absPath: join(root, id), url: `${courseFilesUrl(course)}${slugged}${ext.toLowerCase()}` };
    });
  const assetById = new Map(assets.map((a) => [a.id, a]));

  const relativeId = (from: Note, href: string): string | undefined => {
    if (/^[a-z][a-z0-9+.-]*:/i.test(href)) return undefined;
    return posix.normalize(posix.join(posix.dirname(from.id), decodeURI(href.split('#')[0])));
  };
  const resolveRelative = (from: Note, href: string): Note | undefined => {
    const id = relativeId(from, href);
    return id === undefined ? undefined : byId.get(id);
  };
  const resolveAsset = (from: Note, href: string): Asset | undefined => {
    const id = relativeId(from, href);
    return id === undefined ? undefined : assetById.get(id);
  };

  const backlinkSets = new Map<string, Set<Note>>();
  for (const note of notes) {
    const targets = new Set<Note>();
    for (const m of note.body.matchAll(WIKILINK)) {
      const target = resolveName(m[1]);
      if (target) targets.add(target);
    }
    for (const m of note.body.matchAll(MD_LINK)) {
      const target = resolveRelative(note, m[1]);
      if (target) targets.add(target);
    }
    targets.delete(note);
    for (const target of targets) {
      const set = backlinkSets.get(target.id) ?? new Set<Note>();
      set.add(note);
      backlinkSets.set(target.id, set);
    }
  }
  const backlinks = new Map([...backlinkSets].map(([id, set]) => [id, [...set]]));

  return {
    course,
    root,
    notes,
    home,
    modules,
    lessons: modules.flatMap((m) => m.lessons),
    glossary: notes.filter((n) => n.kind === 'glossary'),
    backlinks,
    byId: (id) => byId.get(id),
    assets,
    resolveName,
    resolveRelative,
    resolveAsset,
  };
}

const vaults = new Map<string, Vault>();

/** The vault of a course, loaded once per run. */
export function getVault(slug: string): Vault {
  const cached = vaults.get(slug);
  if (cached) return cached;
  const vault = loadVault(courseBySlug(slug));
  vaults.set(slug, vault);
  return vault;
}

