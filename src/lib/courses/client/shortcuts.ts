// The keyboard shortcuts window of the course pages (components/courses/ShortcutsDialog.astro):
// opened by the toolbar button or "?", closed by Esc (native <dialog>), the close button or a click outside.

function isTypingTarget(target: EventTarget | null): boolean {
  if (!(target instanceof HTMLElement)) return false;
  return target.isContentEditable || ['INPUT', 'TEXTAREA', 'SELECT'].includes(target.tagName);
}

export function initShortcuts(): void {
  const dialog = document.querySelector<HTMLDialogElement>('[data-shortcuts]');
  if (!dialog) throw new Error('Course page is missing the shortcuts dialog');
  const close = dialog.querySelector<HTMLButtonElement>('[data-shortcuts-close]');
  if (!close) throw new Error('Shortcuts dialog is missing its close button');

  const open = (): void => {
    if (!dialog.open) dialog.showModal();
  };

  document.querySelectorAll<HTMLButtonElement>('[data-shortcuts-open]').forEach((button) => button.addEventListener('click', open));
  close.addEventListener('click', () => dialog.close());
  dialog.addEventListener('click', (event) => {
    if (event.target === dialog) dialog.close();
  });

  document.addEventListener('keydown', (event) => {
    // AltGr (Ctrl+Alt on Windows) types "?" on some layouts: only a real Ctrl, Alt or Cmd combination is skipped.
    const combo = !event.getModifierState('AltGraph') && (event.ctrlKey || event.altKey);
    if (event.key !== '?' || event.metaKey || combo) return;
    if (isTypingTarget(event.target) || document.querySelector('dialog[open]')) return;
    event.preventDefault();
    open();
  });

  if (/Mac|iPhone|iPad/.test(navigator.userAgent)) {
    dialog.querySelectorAll<HTMLElement>('[data-mod-key]').forEach((key) => (key.textContent = '⌘'));
  }
}
