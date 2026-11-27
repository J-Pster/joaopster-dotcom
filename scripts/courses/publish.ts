// Publishes courses to R2, where the site reads them (src/lib/courses/store.ts). Each course's vault
// (courses/<slug>/, filled by `npm run courses:sync`) is rendered once, here in Node, and uploaded as a
// new version (src/lib/courses/package.ts); catalog.json is written last and switches the site to it.
// A version is named after its content, so publishing an unchanged course uploads nothing new, and old
// versions stay in the bucket for a rollback (point catalog.json back at one).
//
//   npm run courses:publish -- --remote aws-saa-c03 radio   the live site, some courses
//   npm run courses:publish -- --remote --all               the live site, every course in course-catalog/courses.ts
//   npm run courses:publish -- --local --all                the local bucket that `npm run dev` reads
import { createHash } from 'node:crypto';
import { mkdirSync, readFileSync, writeFileSync } from 'node:fs';
import { extname, join } from 'node:path';
import { fileURLToPath } from 'node:url';
import * as pagefind from 'pagefind';
import { COURSES, courseBySlug } from '../../course-catalog/courses';
import { LANGS, type CourseInfo } from '../../src/lib/courses/catalog';
import { courseText } from '../../src/lib/courses/i18n';
import type { CourseOutline } from '../../src/lib/courses/outline';
import {
  CATALOG_KEY,
  landingOgKey,
  PACKAGE_SCHEMA,
  packageKey,
  type ByteRange,
  type CatalogSummary,
  type CourseIndexData,
  type PackageObject,
  type PackagedFile,
  type PackagedNote,
  type PublishedCatalog,
  type PublishedCourse,
} from '../../src/lib/courses/package';
import { readingMinutes } from '../../src/lib/courses/readingTime';
import { getRenderer, type RenderedNote } from '../../src/lib/courses/render';
import { noteMetaDescription } from '../../src/lib/courses/seo';
import type { StudyIndex, StudyNote, StudyQuestion, StudyTerm } from '../../src/lib/courses/studyModel';
import { getVault, type Note, type Vault } from '../../src/lib/courses/vault';
import { zipFolder } from '../../src/lib/courses/zip';
import { courseCard, coursesCard } from '../../src/lib/og/courseCards';
import { renderOgImage } from '../../src/lib/og/renderOgImage';
import { BUCKET, getObject, putObject, type Target } from './r2';

const STAGING = fileURLToPath(new URL('../../.wrangler/publish/', import.meta.url));

/** Entries laid end to end; each add returns where its bytes sit. */
class Pack {
  private readonly parts: Buffer[] = [];
  private size = 0;

  add(bytes: Uint8Array): ByteRange {
    const range: ByteRange = [this.size, bytes.length];
    this.parts.push(Buffer.from(bytes));
    this.size += bytes.length;
    return range;
  }

  bytes(): Buffer {
    return Buffer.concat(this.parts);
  }
}

const json = (value: unknown) => Buffer.from(JSON.stringify(value), 'utf8');

// Course files are served with these types. A new kind of file stops the publish until it is listed here.
const FILE_TYPES: Readonly<Record<string, string>> = {
  '.png': 'image/png',
  '.jpg': 'image/jpeg',
  '.jpeg': 'image/jpeg',
  '.gif': 'image/gif',
  '.webp': 'image/webp',
  '.svg': 'image/svg+xml',
  '.pdf': 'application/pdf',
  '.txt': 'text/plain; charset=utf-8',
  '.csv': 'text/csv; charset=utf-8',
  '.json': 'application/json',
  '.xlsx': 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet',
};

function fileType(path: string): string {
  const type = FILE_TYPES[extname(path).toLowerCase()];
  if (!type) throw new Error(`No content type for course file ${path}: add its extension to FILE_TYPES`);
  return type;
}

const OBJECT_TYPES: Readonly<Record<PackageObject, string>> = {
  'index.json': 'application/json',
  'notes.pack': 'application/octet-stream',
  'files.pack': 'application/octet-stream',
  'search.pack': 'application/octet-stream',
  'vault.zip': 'application/zip',
  'outline.json': 'application/json',
  'study.json': 'application/json',
  'og.png': 'image/png',
};

const stringList = (value: unknown): string[] => (Array.isArray(value) ? value.filter((v): v is string => typeof v === 'string') : []);

const escapeHtml = (text: string) => text.replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;').replace(/"/g, '&quot;');

/** The course's own Pagefind index, from the same markup the note pages show (layouts/CourseNote.astro). */
async function searchFiles(vault: Vault, rendered: ReadonlyMap<string, RenderedNote>) {
  const { course } = vault;
  const created = await pagefind.createIndex({ forceLanguage: course.lang });
  if (!created.index) throw new Error(`Pagefind: ${created.errors.join('; ')}`);
  const { index } = created;
  for (const note of vault.notes) {
    const page = rendered.get(note.id);
    if (!page) throw new Error(`Note ${note.id} was not rendered`);
    const content =
      `<!doctype html><html lang="${course.lang}"><head><meta charset="utf-8"><title>${escapeHtml(note.title)}</title></head><body>` +
      `<div data-pagefind-body data-pagefind-filter="course:${course.slug}" data-pagefind-meta="kind:${note.kind}">` +
      `<span hidden data-pagefind-meta="title[data-title]" data-title="${escapeHtml(note.title)}"></span>` +
      `<div class="prose note-content">${page.html}</div></div></body></html>`;
    const added = await index.addHTMLFile({ url: note.url, content });
    if (added.errors.length > 0) throw new Error(`Pagefind, ${note.id}: ${added.errors.join('; ')}`);
  }
  const output = await index.getFiles();
  if (output.errors.length > 0) throw new Error(`Pagefind: ${output.errors.join('; ')}`);
  await index.deleteIndex();
  // Pagefind lists its files in no fixed order: sorted, the same course packs into the same bytes, so its
  // version (a content hash) stays the same.
  return output.files
    .map((file) => ({ path: file.path.replace(/\\/g, '/'), content: file.content }))
    .sort((a, b) => (a.path < b.path ? -1 : a.path > b.path ? 1 : 0));
}

function outlineOf(vault: Vault): CourseOutline {
  return {
    modules: vault.modules.map((m) => ({
      number: m.number,
      title: m.title,
      url: m.note.url,
      lessons: m.lessons.map((l) => ({ url: l.url, title: l.title, minutes: readingMinutes(l) })),
    })),
  };
}

/** Every quiz question and glossary term of a course, for the study pages. */
function studyOf(vault: Vault, rendered: ReadonlyMap<string, RenderedNote>): StudyIndex {
  const moduleNumber = new Map(vault.modules.map((m) => [m.id, m.number]));
  const notes: StudyNote[] = [];
  const noteIndex = new Map<string, number>();
  const questions: StudyQuestion[] = [];
  for (const note of vault.notes) {
    if (note.kind === 'glossary') continue;
    const page = rendered.get(note.id);
    if (!page) throw new Error(`Note ${note.id} was not rendered`);
    noteIndex.set(note.id, notes.length);
    notes.push({ url: note.url, title: note.title, module: note.moduleId === undefined ? undefined : moduleNumber.get(note.moduleId) });
    for (const q of page.quiz) {
      questions.push({
        note: note.url,
        id: q.id,
        number: q.number,
        text: q.text,
        options: q.options.map((o) => [o.letter, o.box] as const),
        correct: q.correct,
      });
    }
  }
  const terms: StudyTerm[] = vault.glossary.map((term) => ({
    title: term.title,
    url: term.url,
    lessons: (vault.backlinks.get(term.id) ?? []).flatMap((source) => {
      const index = noteIndex.get(source.id);
      return source.kind === 'lesson' && index !== undefined ? [index] : [];
    }),
  }));
  return { notes, questions, terms };
}

function summaryOf(vault: Vault): CatalogSummary {
  const modules = vault.modules.map((module) => ({
    number: module.number,
    title: module.title,
    url: module.note.url,
    lessons: module.lessons.length,
    minutes: module.lessons.reduce((sum, lesson) => sum + readingMinutes(lesson), 0),
  }));
  const [firstLesson] = vault.lessons;
  if (!firstLesson) throw new Error(`Course ${vault.course.slug} has no lessons`);
  return {
    url: vault.home.url,
    firstLesson: firstLesson.url,
    modules,
    lessons: vault.lessons.length,
    minutes: modules.reduce((sum, module) => sum + module.minutes, 0),
    terms: vault.glossary.length,
    searchLessons: vault.modules.flatMap((module) => module.lessons.map((lesson) => [lesson.title, lesson.url, module.number] as const)),
  };
}

function packagedNote(note: Note, course: CourseInfo, rendered: ByteRange): PackagedNote {
  return {
    id: note.id,
    name: note.name,
    url: note.url,
    title: note.title,
    kind: note.kind,
    ...(note.moduleId !== undefined && { moduleId: note.moduleId }),
    tags: stringList(note.frontmatter.tags),
    aliases: stringList(note.frontmatter.aliases),
    minutes: readingMinutes(note),
    description: noteMetaDescription(note, course, courseText(course.lang)),
    rendered,
  };
}

interface BuiltPackage {
  readonly version: string;
  readonly summary: CatalogSummary;
  readonly objects: ReadonlyMap<PackageObject, Buffer>;
}

async function buildPackage(course: CourseInfo): Promise<BuiltPackage> {
  const vault = getVault(course.slug);
  const renderer = await getRenderer(vault);
  const rendered = new Map<string, RenderedNote>();
  const notesPack = new Pack();
  const ranges = new Map<string, ByteRange>();
  for (const note of vault.notes) {
    const page = await renderer.render(note);
    rendered.set(note.id, page);
    ranges.set(note.id, notesPack.add(json(page)));
  }
  const missing = [...renderer.missing.values()].reduce((sum, targets) => sum + targets.size, 0);
  if (missing > 0) console.log(`  ${course.slug}: ${missing} link(s) to notes that do not exist render as plain text`);

  const filesPack = new Pack();
  const files: PackagedFile[] = vault.assets.map((asset) => ({
    url: asset.url,
    contentType: fileType(asset.id),
    range: filesPack.add(readFileSync(asset.absPath)),
  }));

  const searchPack = new Pack();
  const search: Record<string, ByteRange> = {};
  for (const file of await searchFiles(vault, rendered)) search[file.path] = searchPack.add(file.content);

  const summary = summaryOf(vault);
  const objects = new Map<PackageObject, Buffer>([
    ['notes.pack', notesPack.bytes()],
    ['files.pack', filesPack.bytes()],
    ['search.pack', searchPack.bytes()],
    ['vault.zip', Buffer.from(zipFolder(vault.root, course.vaultName))],
    ['outline.json', json(outlineOf(vault))],
    ['study.json', json(studyOf(vault, rendered))],
    ['og.png', Buffer.from(await renderOgImage(courseCard(course, summary)))],
  ]);

  const backlinks = Object.fromEntries([...vault.backlinks].map(([id, sources]) => [id, sources.map((s) => s.id)]));
  const indexWithout = (version: string): CourseIndexData => ({
    schema: PACKAGE_SCHEMA,
    course,
    version,
    notes: vault.notes.map((note) => {
      const range = ranges.get(note.id);
      if (!range) throw new Error(`Note ${note.id} has no packed entry`);
      return packagedNote(note, course, range);
    }),
    home: vault.home.id,
    modules: vault.modules.map((m) => ({ id: m.id, number: m.number, title: m.title, note: m.note.id, lessons: m.lessons.map((l) => l.id) })),
    backlinks,
    files,
    search,
  });

  // The version is the content: the same vault, metadata and renderer give the same name.
  const hash = createHash('sha256').update(json(indexWithout('')));
  for (const bytes of objects.values()) hash.update(bytes);
  const version = `v${hash.digest('hex').slice(0, 16)}`;
  objects.set('index.json', json(indexWithout(version)));
  return { version, summary, objects };
}

function uploadPackage(target: Target, course: CourseInfo, built: BuiltPackage): void {
  const dir = join(STAGING, course.slug, built.version);
  mkdirSync(dir, { recursive: true });
  for (const [object, bytes] of built.objects) {
    const file = join(dir, object);
    writeFileSync(file, bytes);
    putObject(target, packageKey(course.slug, built.version, object), file, OBJECT_TYPES[object]);
    console.log(`  uploaded ${object} (${(bytes.length / 1024 / 1024).toFixed(1)} MB)`);
  }
}

function readCatalog(target: Target): PublishedCatalog | undefined {
  const bytes = getObject(target, CATALOG_KEY);
  if (!bytes) return undefined;
  const catalog = JSON.parse(bytes.toString('utf8')) as PublishedCatalog;
  if (catalog.schema !== PACKAGE_SCHEMA) {
    throw new Error(`${BUCKET}/${CATALOG_KEY} has schema ${catalog.schema}; this publisher writes ${PACKAGE_SCHEMA}. Republish with --all.`);
  }
  return catalog;
}

function putStaged(target: Target, key: string, bytes: Buffer, contentType: string): void {
  const file = join(STAGING, key.replace(/\//g, '__'));
  mkdirSync(STAGING, { recursive: true });
  writeFileSync(file, bytes);
  putObject(target, key, file, contentType);
}

function parseArgs(argv: readonly string[]): { target: Target; slugs: readonly string[] } {
  const remote = argv.includes('--remote');
  const local = argv.includes('--local');
  if (remote === local) throw new Error('Say where to publish: --remote (the live site) or --local (npm run dev)');
  const named = argv.filter((arg) => !arg.startsWith('--'));
  const slugs = argv.includes('--all') ? COURSES.map((c) => c.slug) : named;
  if (slugs.length === 0) throw new Error('Name the courses to publish, or pass --all');
  for (const slug of slugs) courseBySlug(slug);
  return { target: remote ? 'remote' : 'local', slugs };
}

async function main(): Promise<void> {
  const { target, slugs } = parseArgs(process.argv.slice(2));
  console.log(`Publishing ${slugs.join(', ')} to ${target === 'remote' ? `R2 bucket ${BUCKET}` : `the local ${BUCKET}`}`);
  const current = readCatalog(target);
  const published = new Map((current?.courses ?? []).map((entry) => [entry.course.slug, entry]));

  for (const slug of slugs) {
    const course = courseBySlug(slug);
    console.log(`${slug}: rendering`);
    const built = await buildPackage(course);
    if (published.get(slug)?.version === built.version) {
      console.log(`${slug}: ${built.version} is already live, nothing to upload`);
    } else {
      console.log(`${slug}: uploading ${built.version}`);
      uploadPackage(target, course, built);
    }
    published.set(slug, { course, version: built.version, summary: built.summary });
  }
  await pagefind.close();

  // The catalog follows course-catalog/courses.ts: its order, and only the courses still listed there.
  const courses: PublishedCourse[] = COURSES.flatMap((course) => {
    const entry = published.get(course.slug);
    return entry ? [entry] : [];
  });
  for (const slug of published.keys()) {
    if (!COURSES.some((c) => c.slug === slug)) console.log(`${slug}: no longer in course-catalog/courses.ts, removed from the catalog`);
  }
  for (const course of COURSES) {
    if (!published.has(course.slug)) console.log(`${course.slug}: listed but never published, left out of the catalog`);
  }

  for (const lang of LANGS) putStaged(target, landingOgKey(lang), Buffer.from(await renderOgImage(coursesCard(lang, courses))), 'image/png');
  const catalog: PublishedCatalog = { schema: PACKAGE_SCHEMA, courses };
  putStaged(target, CATALOG_KEY, json(catalog), 'application/json');
  console.log(`catalog.json now lists ${courses.map((c) => `${c.course.slug}@${c.version}`).join(', ')}`);
}

await main();
