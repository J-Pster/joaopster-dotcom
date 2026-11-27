// Reading settings of the course pages: text size, focus mode and print. Saved on this device only:
// they depend on the screen, so they are not synced with the reading progress.
// The saved settings are applied before the first paint by an inline script in CourseNote.astro,
// with the same key, shape and class names as here.
import { isPageKey } from './lessonKeys';

const READER_KEY = 'jp-courses:reader';
/** Text scales offered, from smaller to larger; 1 is the size the design was drawn at. */
export const TEXT_SCALES = [0.9, 1, 1.1, 1.2, 1.35] as const;
const DEFAULT_STEP = TEXT_SCALES.indexOf(1);
const FOCUS_CLASS = 'course-focus';

interface ReaderSettings {
  readonly step: number;
  readonly focus: boolean;
}

function loadSettings(): ReaderSettings {
  // The saved settings are a display preference, not data: storage that is blocked (private mode)
  // or edited by hand reads as the defaults instead of breaking the page's other scripts.
  let raw: unknown;
  try {
    raw = JSON.parse(localStorage.getItem(READER_KEY) ?? '{}');
  } catch {
    raw = {};
  }
  const saved = typeof raw === 'object' && raw !== null ? (raw as Record<string, unknown>) : {};
  const step = typeof saved.step === 'number' && Number.isInteger(saved.step) && saved.step >= 0 && saved.step < TEXT_SCALES.length ? saved.step : DEFAULT_STEP;
  return { step, focus: saved.focus === true };
}

const saveSettings = (settings: ReaderSettings) => localStorage.setItem(READER_KEY, JSON.stringify(settings));

function requireEl<T extends Element>(root: ParentNode, selector: string): T {
  const el = root.querySelector<T>(selector);
  if (!el) throw new Error(`Reading settings are missing ${selector}`);
  return el;
}

export function initReaderTools(): void {
  const tools = requireEl<HTMLElement>(document, '[data-reader-tools]');
  const open = requireEl<HTMLButtonElement>(tools, '[data-reader-tools-open]');
  const panel = requireEl<HTMLElement>(tools, '[data-reader-tools-panel]');
  const smaller = requireEl<HTMLButtonElement>(tools, '[data-text-step="-1"]');
  const larger = requireEl<HTMLButtonElement>(tools, '[data-text-step="1"]');
  const value = requireEl<HTMLOutputElement>(tools, '[data-text-value]');
  const focusToggle = requireEl<HTMLButtonElement>(tools, '[data-focus-toggle]');
  const focusExit = requireEl<HTMLButtonElement>(document, '[data-focus-exit]');
  const print = requireEl<HTMLButtonElement>(tools, '[data-print]');
  const root = document.documentElement;

  let settings = loadSettings();
  const paint = () => {
    root.style.setProperty('--reader-zoom', String(TEXT_SCALES[settings.step]));
    root.classList.toggle(FOCUS_CLASS, settings.focus);
    value.value = `${Math.round(TEXT_SCALES[settings.step] * 100)}%`;
    smaller.disabled = settings.step === 0;
    larger.disabled = settings.step === TEXT_SCALES.length - 1;
    focusToggle.setAttribute('aria-pressed', String(settings.focus));
  };
  const update = (next: ReaderSettings) => {
    settings = next;
    // Painted first: the change applies to this page even when storage refuses to keep it.
    paint();
    saveSettings(settings);
  };
  paint();

  const setPanel = (shown: boolean) => {
    panel.hidden = !shown;
    open.setAttribute('aria-expanded', String(shown));
  };
  open.addEventListener('click', () => setPanel(panel.hidden));
  document.addEventListener('click', (event) => {
    if (!panel.hidden && event.target instanceof Node && !tools.contains(event.target)) setPanel(false);
  });

  // A text size change re-flows the note: keep the line the reader was on at the same height.
  const resize = (delta: -1 | 1) => {
    const anchor = readingAnchor();
    const before = anchor?.getBoundingClientRect().top;
    update({ ...settings, step: settings.step + delta });
    if (anchor && before !== undefined) window.scrollBy({ top: anchor.getBoundingClientRect().top - before, behavior: 'instant' });
  };
  smaller.addEventListener('click', () => resize(-1));
  larger.addEventListener('click', () => resize(1));

  const setFocus = (focus: boolean) => {
    const anchor = readingAnchor();
    const before = anchor?.getBoundingClientRect().top;
    update({ ...settings, focus });
    if (anchor && before !== undefined) window.scrollBy({ top: anchor.getBoundingClientRect().top - before, behavior: 'instant' });
  };
  focusToggle.addEventListener('click', () => setFocus(!settings.focus));
  focusExit.addEventListener('click', () => {
    setFocus(false);
    // The exit button disappears with focus mode: focus moves to the settings button that stays.
    open.focus({ preventScroll: true });
  });
  if (/Mac|iPhone|iPad/.test(navigator.userAgent)) {
    const printKey = print.querySelector('kbd');
    if (printKey) printKey.textContent = '⌘ P';
  }
  print.addEventListener('click', () => {
    setPanel(false);
    window.print();
  });

  document.addEventListener('keydown', (event) => {
    if (event.key === 'Escape' && !panel.hidden) {
      setPanel(false);
      open.focus({ preventScroll: true });
      return;
    }
    if (!isPageKey(event)) return;
    if (event.key === 'f' || event.key === 'F') {
      event.preventDefault();
      setFocus(!settings.focus);
    } else if (event.key === 'Escape' && settings.focus) {
      setFocus(false);
    }
  });
}

/** The first block of the note whose top is at or below the reading line: what the reader is on. */
function readingAnchor(): Element | undefined {
  const blocks = document.querySelectorAll('.note-content > *');
  return [...blocks].find((block) => block.getBoundingClientRect().bottom > 88);
}
