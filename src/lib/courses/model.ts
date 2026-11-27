// A published course as the pages see it: its notes (without their Markdown), modules, glossary and
// backlinks, built from the course's index.json (lib/courses/package.ts). The Markdown itself is only
// read by the publisher (lib/courses/vault.ts).
import type { CourseInfo } from './catalog';
import type { CourseIndexData, PackagedNote } from './package';

export type NoteKind = 'home' | 'module' | 'lesson' | 'glossary' | 'page';

export interface NoteMeta {
  /** Vault-relative path with forward slashes, e.g. "05 - Hemorragia/05.01 - Reconhecer.md". */
  readonly id: string;
  /** File name without ".md": what wikilinks point to. */
  readonly name: string;
  readonly url: string;
  readonly title: string;
  readonly kind: NoteKind;
  /** Module folder id, for module notes and lessons. */
  readonly moduleId: string | undefined;
  readonly tags: readonly string[];
  /** Other names of a glossary term (frontmatter "aliases"). */
  readonly aliases: readonly string[];
  /** Reading time, in minutes. */
  readonly minutes: number;
  /** Meta description of the note's page. */
  readonly description: string;
}

export interface CourseModule {
  readonly id: string;
  readonly number: number;
  readonly title: string;
  readonly note: NoteMeta;
  readonly lessons: readonly NoteMeta[];
}

export interface CourseView {
  readonly course: CourseInfo;
  readonly version: string;
  readonly notes: readonly NoteMeta[];
  readonly home: NoteMeta;
  readonly modules: readonly CourseModule[];
  /** Every lesson in reading order. */
  readonly lessons: readonly NoteMeta[];
  readonly glossary: readonly NoteMeta[];
  /** Notes that link to the given note id. */
  readonly backlinks: ReadonlyMap<string, readonly NoteMeta[]>;
  byId(id: string): NoteMeta | undefined;
  byUrl(url: string): NoteMeta | undefined;
}

const noteMeta = (note: PackagedNote): NoteMeta => ({
  id: note.id,
  name: note.name,
  url: note.url,
  title: note.title,
  kind: note.kind,
  moduleId: note.moduleId,
  tags: note.tags,
  aliases: note.aliases,
  minutes: note.minutes,
  description: note.description,
});

export function courseViewOf(data: CourseIndexData): CourseView {
  const notes = data.notes.map(noteMeta);
  const byId = new Map(notes.map((n) => [n.id, n]));
  const byUrl = new Map(notes.map((n) => [n.url, n]));
  const note = (id: string): NoteMeta => {
    const found = byId.get(id);
    if (!found) throw new Error(`Course ${data.course.slug} ${data.version}: index refers to a missing note ${id}`);
    return found;
  };
  const modules = data.modules.map((m) => ({ id: m.id, number: m.number, title: m.title, note: note(m.note), lessons: m.lessons.map(note) }));
  return {
    course: data.course,
    version: data.version,
    notes,
    home: note(data.home),
    modules,
    lessons: modules.flatMap((m) => m.lessons),
    glossary: notes.filter((n) => n.kind === 'glossary'),
    backlinks: new Map(Object.entries(data.backlinks).map(([id, sources]) => [id, sources.map(note)])),
    byId: (id) => byId.get(id),
    byUrl: (url) => byUrl.get(url),
  };
}

/** Whether a note is a simulated exam: tagged "simulado" in its frontmatter. */
export const isSimulatedExam = (note: NoteMeta) => note.tags.includes('simulado');
