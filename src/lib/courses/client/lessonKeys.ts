// Lesson keys: ← and → go to the previous and next lesson, M marks the lesson as read (or not).
// To be listed in the shortcuts window (shortcutsText.ts) once it lands; change both together.
import { pageLang } from '../i18n';
import { readerText } from '../readerText';
import { showToast } from './toast';

/** Typing, picking a quiz option or moving a slider: the arrows and letters belong to that control. */
export function isTypingTarget(target: EventTarget | null): boolean {
  if (!(target instanceof HTMLElement)) return false;
  return target.isContentEditable || ['INPUT', 'TEXTAREA', 'SELECT'].includes(target.tagName);
}

/**
 * A plain key press the page may take: no modifier, nobody typing, no window open and no timed exam
 * running (an exam answers with the keyboard and must not lose the page on an arrow).
 */
export function isPageKey(event: KeyboardEvent): boolean {
  if (event.defaultPrevented || event.repeat) return false;
  if (event.ctrlKey || event.metaKey || event.altKey || event.shiftKey) return false;
  if (isTypingTarget(event.target)) return false;
  if (document.querySelector('dialog[open]')) return false;
  return !document.documentElement.classList.contains('exam-running');
}

/** An element that scrolls sideways (a wide table or code block) keeps the arrows for itself. */
function scrollsSideways(target: EventTarget | null): boolean {
  for (let el = target instanceof Element ? target : null; el; el = el.parentElement) {
    if (el.scrollWidth > el.clientWidth && getComputedStyle(el).overflowX !== 'visible' && el !== document.documentElement) return true;
  }
  return false;
}

export function initLessonKeys(): void {
  const previous = document.querySelector<HTMLAnchorElement>('.lesson-pager a[rel="prev"]');
  const next = document.querySelector<HTMLAnchorElement>('.lesson-pager a[rel="next"]');
  const readToggle = document.querySelector<HTMLButtonElement>('[data-read-toggle]');
  if (!readToggle) return;

  document.addEventListener('keydown', (event) => {
    if (!isPageKey(event)) return;
    if (event.key === 'ArrowLeft' || event.key === 'ArrowRight') {
      // Text selected with the mouse: the arrows collapse it, as everywhere else.
      if (scrollsSideways(event.target) || !document.getSelection()?.isCollapsed) return;
      const link = event.key === 'ArrowLeft' ? previous : next;
      if (!link) return;
      event.preventDefault();
      link.click();
      return;
    }
    if (event.key === 'm' || event.key === 'M') {
      event.preventDefault();
      readToggle.click();
      const t = readerText(pageLang());
      showToast(readToggle.getAttribute('aria-pressed') === 'true' ? t.markedRead : t.markedUnread);
    }
  });
}
