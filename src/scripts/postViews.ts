// Page side of the blog's view counter (lib/blog/postViews.ts). Every element with
// data-post-views="<post key>" shows that post's total; data-one and data-other hold the singular and
// plural label in the page's language. The element stays hidden until the API answers.
import { ENGAGED_VIEW_MS, VIEWS_API_PATH, type ViewCounts, type ViewReceipt } from '../lib/blog/postViews';

const COUNTER = '[data-post-views]';

function render(key: string, views: number): void {
  const number = new Intl.NumberFormat(document.documentElement.lang).format(views);
  for (const el of document.querySelectorAll<HTMLElement>(COUNTER)) {
    if (el.dataset.postViews !== key) continue;
    el.textContent = `${number} ${views === 1 ? el.dataset.one : el.dataset.other}`;
    el.hidden = false;
  }
}

/** Fills every counter on the page with one request. */
export async function showViewCounts(): Promise<void> {
  const keys = [...new Set([...document.querySelectorAll<HTMLElement>(COUNTER)].map((el) => el.dataset.postViews))];
  if (keys.length === 0) return;
  const response = await fetch(`${VIEWS_API_PATH}?keys=${keys.join(',')}`);
  if (!response.ok) throw new Error(`[views] GET answered ${response.status}`);
  const { views } = (await response.json()) as ViewCounts;
  for (const [key, count] of Object.entries(views)) render(key, count);
}

/** Counts a view of the post once it has been visible for ENGAGED_VIEW_MS, summed across tab switches. */
export function countViewWhenEngaged(key: string): void {
  // Automated browsers (Puppeteer, Playwright, Selenium) set this flag.
  if (navigator.webdriver) return;
  let visibleMs = 0;
  let visibleSince: number | null = null;
  let timer: ReturnType<typeof setTimeout> | undefined;

  const send = async () => {
    document.removeEventListener('visibilitychange', onVisibilityChange);
    const response = await fetch(VIEWS_API_PATH, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ key }),
    });
    // 204: the API judged this browser not human and kept the count as it was.
    if (response.status === 204) return;
    if (!response.ok) throw new Error(`[views] POST answered ${response.status}`);
    const receipt = (await response.json()) as ViewReceipt;
    render(key, receipt.views);
  };
  const resume = () => {
    if (visibleSince !== null) return;
    visibleSince = performance.now();
    timer = setTimeout(send, ENGAGED_VIEW_MS - visibleMs);
  };
  const pause = () => {
    if (visibleSince === null) return;
    visibleMs += performance.now() - visibleSince;
    visibleSince = null;
    clearTimeout(timer);
  };
  function onVisibilityChange() {
    if (document.visibilityState === 'visible') resume();
    else pause();
  }

  document.addEventListener('visibilitychange', onVisibilityChange);
  if (document.visibilityState === 'visible') resume();
}
