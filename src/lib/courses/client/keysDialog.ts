// The API keys window and the "Is it safe?" window (components/courses/KeysDialog.astro). Any feature
// opens the keys window on one provider through requestKey() in keys.ts, which fires OPEN_KEYS.
import { assistantText } from '../assistantText';
import { pageLang } from '../i18n';
import { KEYS_CHANGED, OPEN_KEYS, PROVIDERS, STORAGE_KEY, deleteAllKeys, deleteKey, maskKey, readKey, saveKey, type ProviderId } from './keys';
import { showToast } from './toast';

function isProvider(value: unknown): value is ProviderId {
  return typeof value === 'string' && (PROVIDERS as readonly string[]).includes(value);
}

function required<T extends Element>(root: ParentNode, selector: string): T {
  const element = root.querySelector<T>(selector);
  if (!element) throw new Error(`Keys window is missing ${selector}`);
  return element;
}

export function initKeysDialog(): void {
  const dialog = document.querySelector<HTMLDialogElement>('[data-keys-dialog]');
  const safety = document.querySelector<HTMLDialogElement>('[data-safety-dialog]');
  if (!dialog || !safety) throw new Error('Keys window loaded outside a course note');
  const t = assistantText(pageLang());

  const rows = PROVIDERS.map((provider) => {
    const row = required<HTMLElement>(dialog, `[data-key-row="${provider}"]`);
    return {
      provider,
      row,
      state: required<HTMLElement>(row, '[data-key-state]'),
      form: required<HTMLFormElement>(row, '[data-key-form]'),
      input: required<HTMLInputElement>(row, '[data-key-input]'),
      remove: required<HTMLButtonElement>(row, '[data-key-delete]'),
    };
  });

  const paint = (): void => {
    for (const { provider, state, remove } of rows) {
      const key = readKey(provider);
      state.textContent = key ? t.keys.saved(maskKey(key)) : t.keys.notSaved;
      state.dataset.saved = String(key !== undefined);
      remove.hidden = key === undefined;
    }
  };

  // The element that opened a window gets the focus back when it closes.
  let opener: HTMLElement | null = null;
  const openKeys = (provider?: ProviderId): void => {
    opener = document.activeElement instanceof HTMLElement ? document.activeElement : null;
    paint();
    dialog.showModal();
    const row = rows.find((entry) => entry.provider === provider);
    if (row) {
      row.row.scrollIntoView({ block: 'nearest' });
      row.input.focus();
    }
  };
  dialog.addEventListener('close', () => {
    for (const { input } of rows) input.value = '';
    opener?.focus();
    opener = null;
  });

  for (const { provider, form, input, remove } of rows) {
    form.addEventListener('submit', (event) => {
      event.preventDefault();
      if (input.value.trim() === '') return input.focus();
      saveKey(provider, input.value);
      input.value = '';
      paint();
      showToast(t.keys.savedToast);
    });
    remove.addEventListener('click', () => {
      deleteKey(provider);
      paint();
      showToast(t.keys.deletedToast);
      input.focus();
    });
  }
  required<HTMLButtonElement>(dialog, '[data-keys-delete-all]').addEventListener('click', () => {
    deleteAllKeys();
    paint();
    showToast(t.keys.deletedToast);
  });
  required<HTMLButtonElement>(dialog, '[data-keys-close]').addEventListener('click', () => dialog.close());

  // ---- "Is it safe?"

  let safetyOpener: HTMLElement | null = null;
  const openSafety = (): void => {
    safetyOpener = document.activeElement instanceof HTMLElement ? document.activeElement : null;
    safety.showModal();
  };
  safety.addEventListener('close', () => {
    safetyOpener?.focus();
    safetyOpener = null;
  });
  required<HTMLButtonElement>(safety, '[data-safety-close]').addEventListener('click', () => safety.close());

  // A click on the backdrop (the dialog element itself, outside its content box) closes it.
  // The press must start there too: a text selection dragged out of an input ends with a click whose
  // target is the dialog, and that must not close it (nor clear the key being typed).
  for (const element of [dialog, safety]) {
    let pressedOutside = false;
    element.addEventListener('pointerdown', (event) => {
      pressedOutside = event.target === element;
    });
    element.addEventListener('click', (event) => {
      if (event.target === element && pressedOutside) element.close();
    });
  }

  document.addEventListener('click', (event) => {
    if (!(event.target instanceof Element)) return;
    if (event.target.closest('[data-safety-open]')) openSafety();
    else if (event.target.closest('[data-keys-open]')) openKeys();
  });
  window.addEventListener(OPEN_KEYS, (event) => {
    const provider = event instanceof CustomEvent ? event.detail : undefined;
    openKeys(isProvider(provider) ? provider : undefined);
  });
  // Another tab saved or deleted a key.
  window.addEventListener('storage', (event) => {
    if (event.key === null || event.key === STORAGE_KEY) {
      paint();
      window.dispatchEvent(new CustomEvent(KEYS_CHANGED, { detail: 'all' }));
    }
  });
}
