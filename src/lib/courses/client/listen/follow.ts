// Showing which block is being read, and following it down the page only while the reader follows.

const CURRENT_CLASS = 'listen-current';
/** Where a block lands when the page scrolls to it: below the sticky header and reading bar. */
const FOLLOW_TOP = 120;
const FOLLOW_BOTTOM_GAP = 16;

export function markCurrent(previous: HTMLElement | undefined, next: HTMLElement | undefined): void {
  previous?.classList.remove(CURRENT_CLASS);
  next?.classList.add(CURRENT_CLASS);
}

/** Where the visible reading area ends: the top of the player when it is docked over the page. */
function visibleBottom(playerHeight: number): number {
  return window.innerHeight - playerHeight - FOLLOW_BOTTOM_GAP;
}

export function isInView(element: HTMLElement, playerHeight: number): boolean {
  const rect = element.getBoundingClientRect();
  return rect.bottom > 0 && rect.top < visibleBottom(playerHeight);
}

/** Brings a block into the reading area only when it is not already comfortably in it. */
export function followTo(element: HTMLElement, playerHeight: number): void {
  const rect = element.getBoundingClientRect();
  if (rect.top >= FOLLOW_TOP - 24 && rect.bottom <= visibleBottom(playerHeight)) return;
  const reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  window.scrollTo({ top: window.scrollY + rect.top - FOLLOW_TOP, behavior: reduceMotion ? 'auto' : 'smooth' });
}
