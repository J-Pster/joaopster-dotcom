// Phone and tablet reading bar of a course note (components/courses/ReaderBar.astro): the reading
// progress, the section being read, and two bottom sheets. While a sheet is open it holds the real
// sidebar or table of contents (moved in, moved back on close), so the read marks and the active
// section the other scripts keep up to date stay right. A sheet adds a history entry, so the phone's
// Back button closes it; links inside it leave that entry first, so Back is not needed twice later.

const DESKTOP = window.matchMedia('(min-width: 1024px)');
const ANIMATED = window.matchMedia('(prefers-reduced-motion: no-preference)');
const SLIDE_MS = 250; // the slide of .course-sheet in styles/courses.css
const SWIPE_CLOSE_PX = 80;
const FLICK_MIN_PX = 24;
const FLICK_SPEED = 0.5; // px per ms

type SheetName = 'nav' | 'toc';

interface Sheet {
  readonly name: SheetName;
  readonly dialog: HTMLDialogElement;
  readonly body: HTMLElement;
  /** The sidebar or table of contents shown in the sheet, and where it lives while the sheet is closed. */
  readonly content: HTMLElement;
  readonly home: HTMLElement;
  /** The entry the sheet opens scrolled to. */
  readonly currentEntry: string;
}

interface SheetHistoryState {
  readonly courseSheet: SheetName;
}

const isSheetState = (state: unknown): state is SheetHistoryState =>
  typeof state === 'object' && state !== null && 'courseSheet' in state;

function required<T extends Element>(root: ParentNode, selector: string): T {
  const element = root.querySelector<T>(selector);
  if (!element) throw new Error(`Reader bar is missing ${selector}`);
  return element;
}

function makeSheet(name: SheetName, content: HTMLElement, currentEntry: string): Sheet {
  const dialog = required<HTMLDialogElement>(document, `[data-sheet="${name}"]`);
  const home = content.parentElement;
  if (!home) throw new Error(`Sheet content for "${name}" is not in the page`);
  return { name, dialog, body: required(dialog, '[data-sheet-body]'), content, home, currentEntry };
}

/** Scrolls the sheet so the current lesson or section sits in its middle. */
function revealCurrent(sheet: Sheet): void {
  const entry = sheet.content.querySelector<HTMLElement>(sheet.currentEntry);
  if (!entry) return;
  const offset = entry.getBoundingClientRect().top - sheet.body.getBoundingClientRect().top;
  sheet.body.scrollTop += offset - sheet.body.clientHeight / 2 + entry.offsetHeight / 2;
}

/** Drag the sheet down by its top bar to close it; a short drag springs back. */
function enableSwipe(sheet: Sheet): void {
  const grip = required<HTMLElement>(sheet.dialog, '[data-sheet-grip]');
  let start: { readonly y: number; readonly time: number } | null = null;
  let dy = 0;

  grip.addEventListener('pointerdown', (event) => {
    if (event.button !== 0 || (event.target instanceof Element && event.target.closest('button'))) return;
    start = { y: event.clientY, time: event.timeStamp };
    dy = 0;
    grip.setPointerCapture(event.pointerId);
    sheet.dialog.classList.add('is-dragging');
  });
  grip.addEventListener('pointermove', (event) => {
    if (!start) return;
    dy = Math.max(0, event.clientY - start.y);
    sheet.dialog.style.transform = `translateY(${dy}px)`;
  });
  const release = (event: PointerEvent, cancelled: boolean) => {
    if (!start) return;
    const speed = dy / Math.max(1, event.timeStamp - start.time);
    start = null;
    sheet.dialog.classList.remove('is-dragging');
    const dismiss = !cancelled && (dy > SWIPE_CLOSE_PX || (dy > FLICK_MIN_PX && speed > FLICK_SPEED));
    if (dismiss) sheet.dialog.close(); // the close handler clears the drag offset
    else sheet.dialog.style.transform = '';
  };
  grip.addEventListener('pointerup', (event) => release(event, false));
  grip.addEventListener('pointercancel', (event) => release(event, true));
}

function isPlainClick(event: MouseEvent, link: HTMLAnchorElement): boolean {
  return event.button === 0 && !event.metaKey && !event.ctrlKey && !event.shiftKey && !event.altKey && link.target !== '_blank';
}

function goToSection(link: HTMLAnchorElement): void {
  if (location.hash !== link.hash) {
    location.hash = link.hash;
    return;
  }
  // Same hash: the browser would not scroll again.
  document.getElementById(decodeURIComponent(link.hash.slice(1)))?.scrollIntoView();
}

/** Keeps the bar's reading progress and current section up to date. */
function paintReading(bar: HTMLElement, tocList: HTMLElement | null): void {
  const article = required<HTMLElement>(document, '.course-article');
  const progress = required<HTMLElement>(bar, '[data-reader-progress]');
  let scheduled = false;
  const paintProgress = () => {
    scheduled = false;
    if (DESKTOP.matches) return;
    const rect = article.getBoundingClientRect();
    const scrollable = rect.height - window.innerHeight;
    const ratio = scrollable <= 0 ? 1 : Math.min(1, Math.max(0, -rect.top / scrollable));
    progress.style.transform = `scaleX(${ratio})`;
  };
  const schedule = () => {
    if (scheduled) return;
    scheduled = true;
    requestAnimationFrame(paintProgress);
  };
  window.addEventListener('scroll', schedule, { passive: true });
  window.addEventListener('resize', schedule);
  paintProgress();

  // Short notes have no table of contents: the bar then shows the note title only (CSS, by :has).
  if (!tocList) return;
  const current = required<HTMLElement>(bar, '[data-reader-current]');
  const noteTitle = current.textContent ?? '';
  // components/post/TableOfContents.astro marks the section being read; the bar follows it.
  const paintCurrent = () => {
    current.textContent = tocList.querySelector('a[aria-current="location"]')?.textContent ?? noteTitle;
  };
  new MutationObserver(paintCurrent).observe(tocList, { subtree: true, attributeFilter: ['aria-current'] });
  paintCurrent();
}

export function initReaderBar(): void {
  const bar = required<HTMLElement>(document, '[data-reader-bar]');
  const tocList = document.querySelector<HTMLElement>('.toc--inline .toc-list');
  const sheets: Sheet[] = [makeSheet('nav', required(document, '[data-course-nav] .course-nav-inner'), 'a[aria-current="page"]')];
  if (tocList) sheets.push(makeSheet('toc', tocList, 'a[aria-current="location"]'));

  paintReading(bar, tocList);

  // A reload or a Back/Forward into a page can land on an entry a sheet pushed, with no sheet open.
  if (isSheetState(history.state)) history.replaceState(null, '');

  // Runs once the sheet's history entry is gone (after a link inside it was chosen).
  let afterClose: (() => void) | null = null;
  let closingFromHistory = false;
  const runAfterClose = () => {
    const action = afterClose;
    afterClose = null;
    action?.();
  };

  const open = (sheet: Sheet) => {
    if (sheet.dialog.open) return;
    sheet.body.append(sheet.content);
    sheet.dialog.showModal();
    history.pushState({ courseSheet: sheet.name } satisfies SheetHistoryState, '');
    revealCurrent(sheet);
  };

  for (const sheet of sheets) {
    required<HTMLElement>(bar, `[data-sheet-open="${sheet.name}"]`).addEventListener('click', () => open(sheet));
    required<HTMLButtonElement>(sheet.dialog, '[data-sheet-close]').addEventListener('click', () => sheet.dialog.close());
    sheet.dialog.addEventListener('click', (event) => {
      if (event.target === sheet.dialog) sheet.dialog.close(); // a tap on the dimmed page
    });
    enableSwipe(sheet);

    sheet.body.addEventListener('click', (event) => {
      if (!(event.target instanceof Element)) return;
      const link = event.target.closest<HTMLAnchorElement>('a[href]');
      if (!link || !isPlainClick(event, link)) return;
      event.preventDefault();
      afterClose = link.hash && link.pathname === location.pathname ? () => goToSection(link) : () => location.assign(link.href);
      sheet.dialog.close();
    });

    // Every way of closing ends here: close button, Esc, a tap outside, a swipe, Back, a link.
    sheet.dialog.addEventListener('close', () => {
      sheet.dialog.style.transform = '';
      // The sheet keeps showing while it slides out: its content goes home once it is gone,
      // unless it was opened again meanwhile.
      setTimeout(() => {
        if (!sheet.dialog.open) sheet.home.append(sheet.content);
      }, ANIMATED.matches ? SLIDE_MS : 0);
      if (closingFromHistory) {
        closingFromHistory = false;
        runAfterClose();
      } else if (isSheetState(history.state)) {
        history.back(); // popstate runs afterClose
      } else {
        runAfterClose();
      }
    });
  }

  window.addEventListener('popstate', () => {
    const openSheet = sheets.find((sheet) => sheet.dialog.open);
    if (!openSheet) {
      if (isSheetState(history.state)) history.replaceState(null, ''); // Forward into a closed sheet's entry
      // Going back restores the scroll position of that entry after this event: jump after it.
      setTimeout(runAfterClose, 0);
      return;
    }
    closingFromHistory = true;
    openSheet.dialog.close();
  });

  // Rotating a tablet to a wide screen brings the side columns back: their content goes home.
  DESKTOP.addEventListener('change', (event) => {
    if (!event.matches) return;
    for (const sheet of sheets) if (sheet.dialog.open) sheet.dialog.close();
  });
}
