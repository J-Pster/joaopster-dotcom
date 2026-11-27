// Text highlights in a course note. A highlight is stored as a quote (the text plus a little context,
// see Highlight in progressModel.ts) rather than as DOM positions, because other features decorate the
// note after it is rendered and a sync can bring highlights made on another device.
import { assistantText } from '../assistantText';
import { highlightsText } from '../highlightsText';
import { pageLang } from '../i18n';
import { addHighlights, loadHighlights, setHighlights } from '../progress';
import { LIMITS, type Highlight } from '../progressModel';
import { ADD_TO_CHAT } from './assistant/events';

const CONTENT = '.note-content';
const MARK = 'mark.user-highlight';
// Text that is not prose: diagrams, scripts, and quiz options (their text changes as the quiz is answered).
const SKIPPED = 'script, style, svg, pre.mermaid, textarea, [data-quiz-options]';
// Selections that start or end in a control are not highlights.
const CONTROLS = 'input, textarea, select, button';
const SELECTION_DELAY_MS = 200;
const NOTICE_MS = 5000;
const MARGIN = 8;

interface TextNodes {
  readonly nodes: readonly { readonly node: Text; readonly base: number }[];
  /** The text of every node in `nodes`, joined. Offsets of a highlight refer to this text. */
  readonly text: string;
}

interface Span {
  readonly start: number;
  readonly end: number;
}

interface Piece {
  readonly node: Text;
  /** Offsets inside the node. */
  readonly from: number;
  readonly to: number;
}

type Target = { readonly kind: 'add'; readonly range: Range } | { readonly kind: 'remove'; readonly id: string };

function collectText(root: HTMLElement): TextNodes {
  const walker = document.createTreeWalker(root, NodeFilter.SHOW_TEXT, {
    acceptNode: (node) => (node.parentElement?.closest(SKIPPED) ? NodeFilter.FILTER_REJECT : NodeFilter.FILTER_ACCEPT),
  });
  const nodes: { node: Text; base: number }[] = [];
  let text = '';
  for (let node = walker.nextNode(); node; node = walker.nextNode()) {
    const textNode = node as Text;
    nodes.push({ node: textNode, base: text.length });
    text += textNode.data;
  }
  return { nodes, text };
}

/** The part of `span` inside each text node, leaving out whitespace-only runs and text already highlighted. */
function piecesOf({ nodes }: TextNodes, span: Span): Piece[] {
  const pieces: Piece[] = [];
  for (const { node, base } of nodes) {
    const from = Math.max(span.start, base) - base;
    const to = Math.min(span.end, base + node.length) - base;
    if (from >= to) continue;
    if (node.data.slice(from, to).trim() === '' || node.parentElement?.closest(MARK)) continue;
    pieces.push({ node, from, to });
  }
  return pieces;
}

function wrapPiece({ node, from, to }: Piece, id: string): void {
  // splitText keeps the first part in `node`; only the middle part is wrapped.
  const middle = from > 0 ? node.splitText(from) : node;
  if (to - from < middle.length) middle.splitText(to - from);
  const mark = document.createElement('mark');
  mark.className = 'user-highlight';
  mark.dataset.highlightId = id;
  middle.replaceWith(mark);
  mark.append(middle);
}

function unwrap(mark: Element): void {
  const parent = mark.parentNode;
  if (!parent) throw new Error('Highlight mark is detached');
  mark.replaceWith(...mark.childNodes);
  parent.normalize();
}

const marksOf = (root: HTMLElement, id: string): HTMLElement[] =>
  [...root.querySelectorAll<HTMLElement>(MARK)].filter((mark) => mark.dataset.highlightId === id);

/** Where a saved highlight is in the text now: with its context first, then the quote alone. */
function locate(text: string, highlight: Highlight): Span | undefined {
  const withContext = text.indexOf(highlight.prefix + highlight.exact + highlight.suffix);
  if (withContext >= 0) return spanAt(withContext + highlight.prefix.length, highlight);
  // Without its context the quote is trusted only when it appears once: a repeated phrase would
  // otherwise move the highlight to another place in the note.
  const first = text.indexOf(highlight.exact);
  if (first < 0 || text.indexOf(highlight.exact, first + 1) >= 0) return undefined;
  return spanAt(first, highlight);
}

function spanAt(start: number, highlight: Highlight): Span {
  return { start, end: start + highlight.exact.length };
}

/** The selection, when it is plain note text the reader can highlight. */
function selectedRange(root: HTMLElement): Range | undefined {
  const selection = window.getSelection();
  if (!selection || selection.rangeCount === 0 || selection.isCollapsed) return undefined;
  const range = selection.getRangeAt(0);
  const ancestor = range.commonAncestorContainer;
  if (!root.contains(ancestor)) return undefined;
  const element = ancestor instanceof Element ? ancestor : ancestor.parentElement;
  if (!element || element.closest(CONTROLS)) return undefined;
  const crossesQuizOptions = [...root.querySelectorAll('[data-quiz-options]')].some((list) => range.intersectsNode(list));
  return crossesQuizOptions ? undefined : range;
}

/** The text span a range covers, without the whitespace at its ends. */
function spanOf({ nodes, text }: TextNodes, range: Range): Span | undefined {
  let start = Infinity;
  let end = -Infinity;
  for (const { node, base } of nodes) {
    if (!range.intersectsNode(node)) continue;
    const from = node === range.startContainer ? range.startOffset : 0;
    const to = node === range.endContainer ? range.endOffset : node.length;
    if (from >= to) continue;
    start = Math.min(start, base + from);
    end = Math.max(end, base + to);
  }
  if (start >= end) return undefined;
  while (start < end && /\s/.test(text.charAt(start))) start += 1;
  while (end > start && /\s/.test(text.charAt(end - 1))) end -= 1;
  return start < end ? { start, end } : undefined;
}

function newId(): string {
  const bytes = crypto.getRandomValues(new Uint8Array(8));
  return [...bytes].map((byte) => byte.toString(16).padStart(2, '0')).join('');
}

const signature = (list: readonly Highlight[]): string => JSON.stringify(list);

// The floating buttons over a selection: highlight it (or remove a highlight) and send it to the chat.
function createActions(chatLabel: string): { bar: HTMLDivElement; button: HTMLButtonElement; chat: HTMLButtonElement } {
  const bar = document.createElement('div');
  bar.className = 'highlight-actions';
  bar.hidden = true;
  const button = document.createElement('button');
  button.type = 'button';
  button.className = 'highlight-button';
  const chat = document.createElement('button');
  chat.type = 'button';
  chat.className = 'highlight-button highlight-button--chat';
  chat.textContent = chatLabel;
  bar.append(button, chat);
  document.body.append(bar);
  return { bar, button, chat };
}

function createNotice(): HTMLElement {
  const notice = document.createElement('p');
  notice.className = 'highlight-notice';
  notice.setAttribute('role', 'status');
  notice.hidden = true;
  document.body.append(notice);
  return notice;
}

/**
 * Highlights for one note. Returns the repaint to call after a sync merge, which re-anchors the
 * highlights saved on this device or brought by another one.
 */
export function initHighlights(slug: string, noteUrl: string): () => void {
  const root = document.querySelector<HTMLElement>(CONTENT);
  if (!root) throw new Error('Highlights loaded outside a course note');
  const text = highlightsText(pageLang());
  const { bar, button, chat } = createActions(assistantText(pageLang()).addToChat);
  const notice = createNotice();
  const coarsePointer = window.matchMedia('(pointer: coarse)');

  let target: Target | undefined;
  let painted = '';
  let mouseDown = false;
  let pressingButton = false;
  let selectionTimer = 0;
  let noticeTimer = 0;

  const say = (message: string): void => {
    notice.textContent = message;
    notice.hidden = false;
    window.clearTimeout(noticeTimer);
    noticeTimer = window.setTimeout(() => { notice.hidden = true; }, NOTICE_MS);
  };

  // ---- Painting

  const paintAll = (): void => {
    const list = loadHighlights(slug, noteUrl);
    // A sync that changed nothing here must not rebuild the marks under the reader's selection.
    if (signature(list) === painted) return;
    for (const mark of [...root.querySelectorAll(MARK)]) unwrap(mark);
    for (const highlight of list) {
      const content = collectText(root);
      const span = locate(content.text, highlight);
      // A highlight whose text left the note stays saved: the note may come back with it.
      if (span) for (const piece of piecesOf(content, span)) wrapPiece(piece, highlight.id);
    }
    painted = signature(list);
    hide();
  };

  // ---- Floating button

  const rectsOf = (current: Target): { first: DOMRect; last: DOMRect } | undefined => {
    const rects =
      current.kind === 'add'
        ? [...current.range.getClientRects()]
        : marksOf(root, current.id).flatMap((mark) => [...mark.getClientRects()]);
    const first = rects[0];
    const last = rects[rects.length - 1];
    return first && last ? { first, last } : undefined;
  };

  // Above the text on desktop; below it on touch, where the native selection menu sits above.
  // It never overlaps the text: when the preferred side is off screen it takes the other one.
  const place = (): void => {
    if (!target || bar.hidden) return;
    const rects = rectsOf(target);
    if (!rects) return hide();
    const { first, last } = rects;
    const height = bar.offsetHeight;
    const width = bar.offsetWidth;
    const above = first.top - height - MARGIN;
    const below = last.bottom + MARGIN;
    const fitsAbove = above >= MARGIN;
    const fitsBelow = below + height <= window.innerHeight - MARGIN;
    const useBelow = coarsePointer.matches ? fitsBelow || !fitsAbove : !fitsAbove && fitsBelow;
    const top = useBelow ? below : above;
    const anchor = useBelow ? last : first;
    const left = (anchor.left + anchor.right) / 2 - width / 2;
    const maxLeft = document.documentElement.clientWidth - width - MARGIN;
    bar.style.top = `${Math.min(Math.max(top, MARGIN), window.innerHeight - height - MARGIN)}px`;
    bar.style.left = `${Math.min(Math.max(left, MARGIN), Math.max(MARGIN, maxLeft))}px`;
  };

  function hide(): void {
    bar.hidden = true;
    target = undefined;
  }

  const show = (next: Target, label: string): void => {
    target = next;
    button.textContent = label;
    chat.hidden = next.kind !== 'add';
    bar.hidden = false;
    place();
  };

  // ---- Actions

  const create = (range: Range): void => {
    const content = collectText(root);
    const span = spanOf(content, range);
    window.getSelection()?.removeAllRanges();
    hide();
    if (!span) return;
    if (span.end - span.start > LIMITS.highlightExact) return say(text.tooLong(LIMITS.highlightExact));
    const pieces = piecesOf(content, span);
    // Everything selected is already highlighted.
    if (pieces.length === 0) return;
    const current = loadHighlights(slug, noteUrl);
    if (current.length >= LIMITS.highlightsPerNote) return say(text.tooMany(LIMITS.highlightsPerNote));
    const highlight: Highlight = {
      id: newId(),
      exact: content.text.slice(span.start, span.end),
      prefix: content.text.slice(Math.max(0, span.start - LIMITS.highlightContext), span.start),
      suffix: content.text.slice(span.end, span.end + LIMITS.highlightContext),
    };
    const next = [...current, highlight];
    if (addHighlights(slug, noteUrl, next) === 'limit') return say(text.limitReached);
    for (const piece of pieces) wrapPiece(piece, highlight.id);
    painted = signature(next);
  };

  const remove = (id: string): void => {
    hide();
    const next = loadHighlights(slug, noteUrl).filter((highlight) => highlight.id !== id);
    setHighlights(slug, noteUrl, next);
    for (const mark of marksOf(root, id)) unwrap(mark);
    painted = signature(next);
  };

  // ---- Events

  const refreshSelection = (): void => {
    if (mouseDown || pressingButton) return;
    const range = selectedRange(root);
    if (range) show({ kind: 'add', range: range.cloneRange() }, text.highlight);
    else if (target?.kind === 'add') hide();
  };
  const scheduleRefresh = (delay: number): void => {
    window.clearTimeout(selectionTimer);
    selectionTimer = window.setTimeout(refreshSelection, delay);
  };

  document.addEventListener('selectionchange', () => scheduleRefresh(SELECTION_DELAY_MS));
  document.addEventListener('pointerdown', (event) => {
    if (event.target instanceof Node && bar.contains(event.target)) return;
    mouseDown = event.pointerType === 'mouse';
    const onMark = event.target instanceof Element && event.target.closest(MARK);
    if (target?.kind === 'remove' && !onMark) hide();
  });
  document.addEventListener('pointerup', () => {
    mouseDown = false;
    scheduleRefresh(0);
  });
  document.addEventListener('pointercancel', () => { mouseDown = false; });
  document.addEventListener('keydown', (event) => {
    if (event.key === 'Escape' && !bar.hidden) hide();
  });
  window.addEventListener('scroll', place, { passive: true });
  window.addEventListener('resize', place);

  // Keeps the selection (and, on touch, the press) alive until the click lands.
  bar.addEventListener('pointerdown', (event) => {
    event.preventDefault();
    pressingButton = true;
  });
  const releaseButton = (): void => { pressingButton = false; };
  bar.addEventListener('pointerup', releaseButton);
  bar.addEventListener('pointercancel', releaseButton);
  button.addEventListener('click', () => {
    pressingButton = false;
    if (target?.kind === 'add') create(target.range);
    else if (target?.kind === 'remove') remove(target.id);
  });
  chat.addEventListener('click', () => {
    pressingButton = false;
    if (target?.kind !== 'add') return;
    const passage = target.range.toString();
    window.getSelection()?.removeAllRanges();
    hide();
    window.dispatchEvent(new CustomEvent(ADD_TO_CHAT, { detail: passage }));
  });

  root.addEventListener('click', (event) => {
    if (!(event.target instanceof Element) || window.getSelection()?.isCollapsed === false) return;
    // A link keeps its own click: following it must not be hijacked by the highlight under it.
    if (event.target.closest('a')) return;
    const id = event.target.closest<HTMLElement>(MARK)?.dataset.highlightId;
    if (id) show({ kind: 'remove', id }, text.remove);
  });

  paintAll();
  return paintAll;
}
