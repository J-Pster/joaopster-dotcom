// A short status message at the bottom of the screen, for actions whose result is not in view (a
// keyboard shortcut that marks a lesson read while the button is far below). Screen readers hear it
// through the status role.

const SHOWN_MS = 2200;
let region: HTMLElement | undefined;
let timer: number | undefined;

function toastRegion(): HTMLElement {
  if (region) return region;
  region = document.createElement('div');
  region.className = 'course-toast';
  region.setAttribute('role', 'status');
  document.body.append(region);
  return region;
}

export function showToast(message: string): void {
  const el = toastRegion();
  el.textContent = message;
  el.dataset.shown = 'true';
  window.clearTimeout(timer);
  timer = window.setTimeout(() => (el.dataset.shown = 'false'), SHOWN_MS);
}
