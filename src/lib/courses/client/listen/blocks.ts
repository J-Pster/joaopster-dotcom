// The text of a lesson that is worth hearing, as blocks in reading order. A block is a heading, a
// paragraph, a list item, a quote or a callout title; code, diagrams, tables, the quiz and anything
// not on screen are left out, and so are heading anchors and checkboxes.

export interface ListenBlock {
  readonly element: HTMLElement;
  readonly text: string;
}

const BLOCK_SELECTOR = 'h1, h2, h3, h4, h5, h6, p, li, blockquote, .callout-title';

// An element inside one of these is never read. "exam-bar" is named in full because the callout
// kind "callout--example" would match a looser pattern.
const SKIPPED_SELECTOR = [
  'pre',
  '.mermaid',
  'table',
  'svg',
  '.exam-bar',
  '[data-exam-bar]',
  '[data-quiz-question]',
  '[data-quiz-options]',
  '[data-quiz-answer]',
  '[class*="quiz-"]',
].join(', ');

// Removed from a copy of a block before its text is read: blocks nested inside it are their own
// blocks, and the rest is not prose.
const NESTED_SELECTOR = 'ul, ol, li, p, blockquote, pre, table, div, details, svg, input, .heading-anchor';

const HAS_WORDS = /[\p{L}\p{N}]/u;

function isShown(element: HTMLElement): boolean {
  return element.getClientRects().length > 0 && getComputedStyle(element).visibility !== 'hidden';
}

function ownText(element: HTMLElement): string {
  const copy = element.cloneNode(true) as HTMLElement;
  for (const nested of copy.querySelectorAll(NESTED_SELECTOR)) nested.remove();
  return (copy.textContent ?? '').replace(/\s+/g, ' ').trim();
}

export function collectBlocks(root: HTMLElement): ListenBlock[] {
  const blocks: ListenBlock[] = [];
  for (const element of root.querySelectorAll<HTMLElement>(BLOCK_SELECTOR)) {
    if (element.closest(SKIPPED_SELECTOR) !== null || !isShown(element)) continue;
    const text = ownText(element);
    if (HAS_WORDS.test(text)) blocks.push({ element, text });
  }
  return blocks;
}

/** The first block that ends below the reading line: the one the reader is in, or the next one. */
export function blockAtReadingLine(blocks: readonly ListenBlock[], line: number): number {
  const index = blocks.findIndex((block) => block.element.getBoundingClientRect().bottom > line);
  return index === -1 ? 0 : index;
}
