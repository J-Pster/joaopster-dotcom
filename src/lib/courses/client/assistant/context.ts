// What the assistant knows about the page: the note text (sent as a cached system block, so every
// question after the first one reads it from the prompt cache) and where the reader is in it.
import type { Lang } from '../../../../i18n/ui';

const CONTENT = '.note-content';
// Headings sit under the sticky header and the phone reading bar; this is the line where a section
// counts as the one being read (the same line the table of contents uses).
const READ_LINE = 120;

const LANGUAGE: Record<Lang, string> = { pt: 'Brazilian Portuguese', en: 'English', es: 'Spanish' };

export interface NoteContext {
  readonly courseTitle: string;
  readonly noteTitle: string;
  readonly lang: Lang;
  readonly text: string;
}

export function readNoteContext(courseTitle: string, noteTitle: string, lang: Lang): NoteContext {
  const root = document.querySelector<HTMLElement>(CONTENT);
  if (!root) throw new Error('Assistant loaded outside a course note');
  // innerText keeps the line breaks of the rendered note and leaves out what is hidden.
  return { courseTitle, noteTitle, lang, text: root.innerText.trim() };
}

/** Instructions first and the note after them: both stay the same for the whole conversation. */
export function systemInstructions({ courseTitle, noteTitle, lang }: NoteContext): string {
  return [
    `You are the study assistant of the free course "${courseTitle}" on joaopster.com.`,
    `The reader has the note "${noteTitle}" open. Its full text is below, inside <note>.`,
    'Answer from the note first. When the note does not cover something, say so in one short sentence and then answer from general knowledge.',
    'When the reader quotes a passage inside <passage>, it was selected in the note: focus the answer on it.',
    `Reply in the language the reader writes in; when unsure, use ${LANGUAGE[lang]}.`,
    'Teach like a patient tutor: short paragraphs, concrete examples, and plain words. Keep answers brief unless the reader asks for depth.',
    'Format with simple Markdown only: paragraphs, bullet or numbered lists, **bold**, `inline code` and fenced code blocks. No tables and no headings.',
    'If a question is about a health emergency happening now, tell the reader to call the local emergency number first.',
  ].join('\n');
}

export function noteBlock({ text }: NoteContext): string {
  return `<note>\n${text}\n</note>`;
}

/** The heading of the section the reader is in, sent with each question (it changes as they read). */
export function currentSection(): string | undefined {
  const root = document.querySelector<HTMLElement>(CONTENT);
  if (!root) return undefined;
  let current: string | undefined;
  for (const heading of root.querySelectorAll<HTMLElement>('h2, h3')) {
    if (heading.getBoundingClientRect().top > READ_LINE) break;
    current = heading.innerText.trim();
  }
  return current;
}
