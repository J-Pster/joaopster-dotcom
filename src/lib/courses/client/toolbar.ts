// Note toolbar that never crowds: when the buttons and the breadcrumb do not fit in one row, the
// least used buttons leave the row, one at a time, and show up as rows of the "More options" menu.
// A menu row clicks the real button, so each feature keeps its own behaviour and state.

/** Narrowest the breadcrumb may get before another button leaves the row. */
const CRUMB_MIN = 240;

/** Toolbar buttons in the order they leave the row (first: least used). */
const COLLAPSE_ORDER = [
  '.course-shortcuts-open--toolbar',
  '.course-panel-toggle--toc',
  '.course-search-open',
  '[data-reader-tools]',
  '.listen-open',
  '.assistant-open-btn--toolbar',
] as const;

function requireEl<T extends Element>(root: ParentNode, selector: string): T {
  const element = root.querySelector<T>(selector);
  if (!element) throw new Error(`Course toolbar is missing ${selector}`);
  return element;
}

const isShown = (element: Element): boolean => getComputedStyle(element).display !== 'none';

/** The element that is clicked for an item: the reading settings wrapper holds its own button. */
function triggerOf(item: HTMLElement): HTMLElement {
  return item.matches('[data-reader-tools]') ? requireEl<HTMLElement>(item, '[data-reader-tools-open]') : item;
}

export function initToolbar(): void {
  const toolbar = requireEl<HTMLElement>(document, '.course-toolbar');
  const crumb = requireEl<HTMLElement>(toolbar, '.course-breadcrumb');
  const more = requireEl<HTMLElement>(toolbar, '[data-toolbar-more]');
  const moreOpen = requireEl<HTMLButtonElement>(more, '[data-toolbar-more-open]');
  const menu = requireEl<HTMLElement>(more, '[data-toolbar-more-menu]');
  const items = COLLAPSE_ORDER.map((selector) => requireEl<HTMLElement>(toolbar, selector));

  // Width the row needs: the shown buttons, the gaps between them and the breadcrumb's minimum.
  function fits(): boolean {
    const gap = parseFloat(getComputedStyle(toolbar).columnGap) || 0;
    const shown = [...toolbar.children].filter(
      (child) => child !== crumb && !child.classList.contains('is-collapsed') && isShown(child),
    );
    const widths = shown.reduce((sum, child) => sum + child.getBoundingClientRect().width, 0);
    const crumbMin = isShown(crumb) ? CRUMB_MIN : 0;
    const parts = shown.length + (crumbMin > 0 ? 1 : 0);
    return widths + crumbMin + gap * Math.max(parts - 1, 0) <= toolbar.clientWidth;
  }

  function collapse(): void {
    toolbar.classList.remove('is-compact');
    items.forEach((item) => item.classList.remove('is-collapsed'));
    more.hidden = true;
    if (fits()) return;
    toolbar.classList.add('is-compact');
    if (fits()) return;
    more.hidden = false;
    for (const item of items) {
      if (!isShown(item)) continue;
      item.classList.add('is-collapsed');
      if (fits()) return;
    }
  }

  function layout(): void {
    collapse();
    if (more.hidden) closeMenu(false);
    else if (!menu.hidden) refillMenu();
  }

  // The rows are rebuilt while open, so focus goes back to the row at the same place.
  function refillMenu(): void {
    const at = menuRows().indexOf(document.activeElement as HTMLButtonElement);
    fillMenu();
    if (at < 0) return;
    const rows = menuRows();
    rows[Math.min(at, rows.length - 1)]?.focus();
  }

  function menuRows(): HTMLButtonElement[] {
    return [...menu.querySelectorAll<HTMLButtonElement>('[role="menuitem"]')];
  }

  function fillMenu(): void {
    menu.replaceChildren(
      ...items.filter((item) => item.classList.contains('is-collapsed')).map((item) => {
        const trigger = triggerOf(item);
        const row = document.createElement('button');
        row.type = 'button';
        row.className = 'course-more-item';
        row.setAttribute('role', 'menuitem');
        row.tabIndex = -1;
        const icon = document.createElement('span');
        icon.className = 'course-more-icon';
        icon.setAttribute('aria-hidden', 'true');
        const glyph = trigger.querySelector('svg') ?? trigger.querySelector('span');
        if (glyph) icon.append(glyph.cloneNode(true));
        const label = document.createElement('span');
        label.textContent = trigger.getAttribute('aria-label') ?? trigger.title;
        row.append(icon, label);
        row.addEventListener('click', (event) => {
          // The real button opens its own popover; this click must not reach the document
          // listeners that close popovers on an outside click.
          event.stopPropagation();
          closeMenu(false);
          trigger.click();
          // A trigger that opens a popover moves focus there; a plain toggle leaves it in the hidden menu.
          const focused = document.activeElement;
          if (focused === null || focused === document.body || menu.contains(focused)) moreOpen.focus();
        });
        return row;
      }),
    );
  }

  function openMenu(focusLast = false): void {
    fillMenu();
    menu.hidden = false;
    moreOpen.setAttribute('aria-expanded', 'true');
    const rows = menuRows();
    rows[focusLast ? rows.length - 1 : 0]?.focus();
  }

  function closeMenu(returnFocus: boolean): void {
    if (menu.hidden) return;
    menu.hidden = true;
    moreOpen.setAttribute('aria-expanded', 'false');
    if (returnFocus) moreOpen.focus();
  }

  moreOpen.addEventListener('click', () => {
    if (menu.hidden) openMenu();
    else closeMenu(false);
  });
  // Menu button keys: arrow down opens on the first row, arrow up on the last.
  moreOpen.addEventListener('keydown', (event) => {
    if (event.key !== 'ArrowDown' && event.key !== 'ArrowUp') return;
    event.preventDefault();
    openMenu(event.key === 'ArrowUp');
  });
  document.addEventListener('click', (event) => {
    if (event.target instanceof Node && !more.contains(event.target)) closeMenu(false);
  });
  menu.addEventListener('keydown', (event) => {
    const rows = menuRows();
    const at = rows.indexOf(document.activeElement as HTMLButtonElement);
    if (event.key === 'Escape') {
      event.preventDefault();
      closeMenu(true);
    } else if (event.key === 'ArrowDown' || event.key === 'ArrowUp') {
      event.preventDefault();
      const step = event.key === 'ArrowDown' ? 1 : -1;
      rows[(at + step + rows.length) % rows.length]?.focus();
    } else if (event.key === 'Home' || event.key === 'End') {
      event.preventDefault();
      rows[event.key === 'Home' ? 0 : rows.length - 1]?.focus();
    } else if (event.key === 'Tab') {
      closeMenu(false);
    }
  });

  // The row's width changes with the window and with the side panels (menu, index, assistant).
  let frame = 0;
  new ResizeObserver(() => {
    cancelAnimationFrame(frame);
    frame = requestAnimationFrame(layout);
  }).observe(toolbar);
  // Showing or hiding a panel can change which buttons exist without resizing the toolbar.
  new MutationObserver(() => {
    cancelAnimationFrame(frame);
    frame = requestAnimationFrame(layout);
  }).observe(document.documentElement, { attributes: true, attributeFilter: ['class'] });
  layout();
}
