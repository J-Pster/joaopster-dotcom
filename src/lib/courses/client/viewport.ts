// Scroll rules of the study features (quiz, exam, review). The reader's eyes are the reference:
// - content that opens below what they read never pushes it out of sight;
// - the page moves only when the next thing to read is out of sight, and as little as needed;
// - every new item (next card, next question) starts at the same reading line.

/** Pixels under the viewport top where an item starts: clears the sticky site header. Same as scroll-margin-top in the CSS. */
const READING_LINE = 88;
/** How much of newly opened content must show, so the reader sees that something opened. */
const PEEK = 120;

const motion = (): ScrollBehavior =>
  window.matchMedia('(prefers-reduced-motion: reduce)').matches ? 'auto' : 'smooth';

/**
 * Puts the element's top on the reading line. `swap`: the content under the eyes was replaced,
 * so the page jumps at once (a smooth scroll over new content reads as motion); `move`: the
 * reader asked to go somewhere else on the page, so it scrolls, unless the target is more than a
 * screen away: a long smooth scroll blurs past pages and only delays the reader.
 */
export function toReadingLine(element: Element, kind: 'swap' | 'move'): void {
  const top = element.getBoundingClientRect().top + window.scrollY - READING_LINE;
  const far = Math.abs(top - window.scrollY) > window.innerHeight;
  window.scrollTo({ top, behavior: kind === 'swap' || far ? 'auto' : motion() });
}

/** True when the element's top is on screen, in the upper half: the reader finds it without the page moving. */
export function startsInView(element: Element): boolean {
  const top = element.getBoundingClientRect().top;
  return top >= 0 && top <= window.innerHeight / 2;
}

/**
 * Content just opened below what the reader is looking at: scrolls the least that shows its first
 * lines, and never so far that `keep` (what it answers, like the question) leaves the screen.
 * `bottomInset` is what covers the bottom of the screen (a sticky bar).
 */
export function peek(opened: Element, keep: Element, bottomInset: number): void {
  const need = opened.getBoundingClientRect().top + PEEK - (window.innerHeight - bottomInset);
  const room = keep.getBoundingClientRect().top - READING_LINE;
  const by = Math.min(need, room);
  if (by > 0) window.scrollBy({ top: by, behavior: motion() });
}
