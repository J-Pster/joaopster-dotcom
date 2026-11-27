// Printing a note: closed callouts and "see more" blocks are opened for the paper copy, then put back
// as the reader left them. The layout for paper is in styles/courses-print.css.

export function initPrint(): void {
  let opened: HTMLDetailsElement[] = [];
  window.addEventListener('beforeprint', () => {
    opened = [...document.querySelectorAll<HTMLDetailsElement>('.course-article details:not([open])')];
    opened.forEach((details) => (details.open = true));
  });
  window.addEventListener('afterprint', () => {
    opened.forEach((details) => (details.open = false));
    opened = [];
  });
}
