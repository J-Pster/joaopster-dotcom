// Estimated reading time of a note, computed at publish time from its Markdown.
import type { Note } from './vault';

/** Study text is read slower than leisure text: 200 words per minute is the usual figure for it. */
const WORDS_PER_MINUTE = 200;

// Diagrams are looked at, not read word by word, so their source does not count.
const MERMAID_BLOCK = /```mermaid[\s\S]*?```/g;
// [[target|alias]] reads as the alias, [[target]] as the target.
const WIKILINK = /\[\[([^\]|]+)(?:\\?\|([^\]]+))?\]\]/g;
const LINK_TARGET = /\]\([^)]*\)/g;
const HTML_TAG = /<[^>]+>/g;
const WORD = /[\p{L}\p{N}]+(?:['’-][\p{L}\p{N}]+)*/gu;

export function readingMinutes(note: Note): number {
  const text = note.body
    .replace(MERMAID_BLOCK, ' ')
    .replace(WIKILINK, (_match, target: string, alias: string | undefined) => alias ?? target)
    .replace(LINK_TARGET, ']')
    .replace(HTML_TAG, ' ');
  const words = text.match(WORD)?.length ?? 0;
  return Math.max(1, Math.round(words / WORDS_PER_MINUTE));
}
