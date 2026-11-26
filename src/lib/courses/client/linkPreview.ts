// Obsidian-style page preview: hovering a link to another note shows the start of that note
// (or the linked section) in a floating card. The target page is fetched once and cached.
const OPEN_DELAY_MS = 350;
const CLOSE_DELAY_MS = 200;
const PREVIEW_BLOCKS = 6;
const LINKS = '.note-content a.wikilink, .backlinks a.wikilink';

const pages = new Map<string, Promise<Document>>();

function fetchPage(path: string): Promise<Document> {
  const cached = pages.get(path);
  if (cached) return cached;
  const request = fetch(path)
    .then((response) => {
      if (!response.ok) throw new Error(`Preview request failed: ${response.status} ${path}`);
      return response.text();
    })
    .then((html) => new DOMParser().parseFromString(html, 'text/html'));
  // A failed request is not cached, so the next hover tries again.
  request.catch(() => pages.delete(path));
  pages.set(path, request);
  return request;
}

// The section a "#heading" or "#bloco-id" points to, or the start of the note.
function excerpt(doc: Document, hash: string): HTMLElement {
  const content = doc.querySelector<HTMLElement>('.note-content');
  if (!content) throw new Error('Previewed page has no note content');
  const card = document.createElement('div');
  const anchor = hash ? content.querySelector<HTMLElement>(`#${CSS.escape(decodeURIComponent(hash.slice(1)))}`) : null;
  const start = anchor ?? content.firstElementChild;
  let node: Element | null = start;
  for (let taken = 0; node && taken < PREVIEW_BLOCKS; node = node.nextElementSibling) {
    // The "back to module" line opens every lesson and says nothing in a preview.
    if (!anchor && node.matches('p') && node.querySelectorAll('a').length === 1 && node.textContent?.trim().startsWith('Voltar')) continue;
    const copy = node.cloneNode(true) as HTMLElement;
    copy.querySelectorAll('[id]').forEach((el) => el.removeAttribute('id'));
    copy.removeAttribute('id');
    card.append(copy);
    taken += 1;
    // A heading anchor previews its own section only.
    if (anchor && /^H[1-6]$/.test(anchor.tagName) && node.nextElementSibling?.tagName === anchor.tagName) break;
  }
  card.querySelectorAll('pre.mermaid').forEach((el) => el.replaceWith(Object.assign(document.createElement('p'), { textContent: '(diagrama)' })));
  card.querySelectorAll('input').forEach((el) => { (el as HTMLInputElement).disabled = true; });
  return card;
}

function place(popover: HTMLElement, link: HTMLElement): void {
  const rect = link.getBoundingClientRect();
  const width = Math.min(440, window.innerWidth - 32);
  popover.style.width = `${width}px`;
  const left = Math.min(Math.max(16, rect.left), window.innerWidth - width - 16);
  const below = window.innerHeight - rect.bottom;
  popover.style.left = `${left + window.scrollX}px`;
  if (below >= 280 || below > rect.top) {
    popover.style.top = `${rect.bottom + window.scrollY + 8}px`;
    popover.style.bottom = '';
  } else {
    popover.style.top = `${rect.top + window.scrollY - popover.offsetHeight - 8}px`;
  }
}

export function initLinkPreview(): void {
  // Hover previews make sense with a mouse; on touch the tap just follows the link.
  if (!window.matchMedia('(hover: hover) and (pointer: fine)').matches) return;

  const popover = document.createElement('div');
  popover.className = 'link-preview prose';
  popover.setAttribute('role', 'tooltip');
  popover.hidden = true;
  document.body.append(popover);

  let openTimer: number | undefined;
  let closeTimer: number | undefined;
  let activeLink: HTMLAnchorElement | undefined;

  const close = () => {
    popover.hidden = true;
    activeLink = undefined;
  };
  const scheduleClose = () => {
    window.clearTimeout(openTimer);
    window.clearTimeout(closeTimer);
    closeTimer = window.setTimeout(close, CLOSE_DELAY_MS);
  };

  const open = async (link: HTMLAnchorElement) => {
    const url = new URL(link.href);
    const samePage = url.pathname === location.pathname;
    const doc = samePage ? document : await fetchPage(url.pathname);
    if (activeLink !== link) return;
    popover.replaceChildren(excerpt(doc, url.hash));
    popover.hidden = false;
    popover.scrollTop = 0;
    place(popover, link);
  };

  document.addEventListener('mouseover', (event) => {
    const link = (event.target as Element).closest<HTMLAnchorElement>(LINKS);
    if (!link || popover.contains(link)) return;
    window.clearTimeout(closeTimer);
    if (link === activeLink) return;
    window.clearTimeout(openTimer);
    activeLink = link;
    openTimer = window.setTimeout(() => {
      open(link).catch((error: unknown) => {
        close();
        console.error(error);
      });
    }, OPEN_DELAY_MS);
  });
  document.addEventListener('mouseout', (event) => {
    const from = (event.target as Element).closest(LINKS);
    if (from || popover.contains(event.target as Node)) scheduleClose();
  });
  popover.addEventListener('mouseover', () => window.clearTimeout(closeTimer));
  document.addEventListener('keydown', (event) => { if (event.key === 'Escape') close(); });
  window.addEventListener('scroll', () => { if (!popover.hidden) close(); }, { passive: true });
}
