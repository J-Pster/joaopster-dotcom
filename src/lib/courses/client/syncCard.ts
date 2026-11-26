// The sync cards of a page (components/courses/SyncCard.astro). Every card shows the same state:
// open with "create a code" while this browser has none, then a one-line status that opens to show
// the code. A page can hold more than one card (the note's rail and its narrow-screen copy).
import type { CourseText } from '../i18n';
import { formatSyncCode } from '../syncCode';
import {
  createSyncCode,
  currentSyncStatus,
  forgetSyncCode,
  joinSyncCode,
  loadSyncCode,
  SYNC_STATUS,
  type SyncProblem,
  type SyncStatus,
} from './sync';

interface Card {
  readonly root: HTMLElement;
  readonly toggle: HTMLButtonElement;
  readonly headStatus: HTMLElement;
  readonly body: HTMLElement;
  readonly off: HTMLElement;
  readonly on: HTMLElement;
  readonly code: HTMLElement;
  readonly status: HTMLElement;
  readonly create: HTMLButtonElement;
  readonly joinOpen: HTMLButtonElement;
  readonly join: HTMLFormElement;
  readonly input: HTMLInputElement;
  readonly submit: HTMLButtonElement;
  readonly copy: HTMLButtonElement;
  readonly forget: HTMLButtonElement;
}

function part<T extends HTMLElement>(root: HTMLElement, selector: string): T {
  const element = root.querySelector<T>(selector);
  if (!element) throw new Error(`Sync card is missing ${selector}`);
  return element;
}

function readCard(root: HTMLElement): Card {
  return {
    root,
    toggle: part(root, '[data-sync-toggle]'),
    headStatus: part(root, '[data-sync-head-status]'),
    body: part(root, '[data-sync-body]'),
    off: part(root, '[data-sync-off]'),
    on: part(root, '[data-sync-on]'),
    code: part(root, '[data-sync-code]'),
    status: part(root, '[data-sync-status]'),
    create: part(root, '[data-sync-create]'),
    joinOpen: part(root, '[data-sync-join-open]'),
    join: part(root, '[data-sync-join]'),
    input: part(root, 'input[name="code"]'),
    submit: part(root, 'button[type="submit"]'),
    copy: part(root, '[data-sync-copy]'),
    forget: part(root, '[data-sync-forget]'),
  };
}

function setExpanded(card: Card, expanded: boolean): void {
  card.toggle.setAttribute('aria-expanded', String(expanded));
  card.body.hidden = !expanded;
}

function setMessage(card: Card, message: string, isError: boolean): void {
  card.status.textContent = message;
  card.status.classList.toggle('is-error', isError);
}

// Without a code the card is open; with one it is the status line, open only when asked.
function paintLink(card: Card, expanded: boolean): void {
  const code = loadSyncCode();
  const linked = code !== null;
  card.root.dataset.state = linked ? 'on' : 'off';
  card.toggle.hidden = !linked;
  card.off.hidden = linked;
  card.on.hidden = !linked;
  card.code.textContent = code ? formatSyncCode(code) : '';
  setMessage(card, '', false);
  if (linked) setExpanded(card, expanded);
  else card.body.hidden = false;
  card.root.dataset.ready = '';
}

/**
 * Wires every sync card on the page. `onLinked` repaints the page after this browser joins a code,
 * since joining brings the progress made on the other devices.
 */
export function initSyncCards(text: CourseText, onLinked: () => void): void {
  const cards = [...document.querySelectorAll<HTMLElement>('[data-sync-card]')].map(readCard);
  if (cards.length === 0) return;
  const time = new Intl.DateTimeFormat(text.locale, { hour: '2-digit', minute: '2-digit' });

  const problemText = (problem: SyncProblem | 'invalid_code'): string => {
    if (problem === 'invalid_code') return text.syncInvalidCode;
    if (problem === 'unknown_code') return text.syncUnknownCode;
    if (problem === 'too_large') return text.syncTooLarge;
    return text.syncFailed;
  };
  const headText = (status: SyncStatus): string => {
    if (status.kind === 'syncing') return text.syncSyncing;
    if (status.kind === 'synced') return text.syncSynced(time.format(status.at));
    if (status.kind === 'failed') return problemText(status.problem);
    return text.syncLinked;
  };
  const paintStatus = (status: SyncStatus) => {
    for (const card of cards) {
      card.toggle.classList.toggle('is-error', status.kind === 'failed');
      card.headStatus.textContent = headText(status);
      // Before a code exists the only news is how creating or joining one went.
      if (card.root.dataset.state !== 'off') continue;
      if (status.kind === 'failed') setMessage(card, problemText(status.problem), true);
      else setMessage(card, status.kind === 'syncing' ? text.syncSyncing : '', false);
    }
  };
  const paintAll = (expanded: boolean) => cards.forEach((card) => paintLink(card, expanded));

  paintAll(false);
  paintStatus(currentSyncStatus());
  window.addEventListener(SYNC_STATUS, (event) => paintStatus((event as CustomEvent<SyncStatus>).detail));

  for (const card of cards) {
    card.toggle.addEventListener('click', () => setExpanded(card, card.toggle.getAttribute('aria-expanded') !== 'true'));

    card.joinOpen.addEventListener('click', () => {
      const open = card.join.hidden;
      card.join.hidden = !open;
      card.joinOpen.setAttribute('aria-expanded', String(open));
      if (open) card.input.focus();
    });

    card.create.addEventListener('click', async () => {
      card.create.disabled = true;
      const { result } = await createSyncCode();
      card.create.disabled = false;
      // Opened, so the reader sees the new code and can take it to the other device.
      if (!result.ok) return;
      paintAll(true);
      card.toggle.focus(); // the button that had focus is now hidden
    });

    card.join.addEventListener('submit', async (event) => {
      event.preventDefault();
      card.submit.disabled = true;
      const result = await joinSyncCode(card.input.value);
      card.submit.disabled = false;
      if (result.ok) {
        card.input.value = '';
        paintAll(false);
        card.toggle.focus(); // the form that had focus is now hidden
        onLinked();
      } else if (result.problem === 'invalid_code') {
        setMessage(card, problemText('invalid_code'), true);
      }
    });

    card.copy.addEventListener('click', async () => {
      try {
        await navigator.clipboard.writeText(card.code.textContent ?? '');
      } catch (err) {
        // Clipboard blocked by the browser: the code stays on screen, selectable with one click.
        console.warn('[courses] could not copy the sync code', err);
        return;
      }
      card.copy.textContent = text.syncCopied;
      setTimeout(() => {
        card.copy.textContent = text.syncCopy;
      }, 2000);
    });

    card.forget.addEventListener('click', () => {
      forgetSyncCode();
      paintAll(false);
      card.create.focus();
    });
  }
}
