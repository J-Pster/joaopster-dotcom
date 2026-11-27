// The blog's view counter, shared by the page script (scripts/postViews.ts) and the API
// (src/pages/api/views.ts). A view counts when a browser keeps the post visible for a few seconds,
// once a day per visitor and post. Crawlers, link previews and headless browsers are left out.

/** Time the post must stay visible before the view counts. */
export const ENGAGED_VIEW_MS = 5000;

/** Static list of the post keys the API accepts (src/pages/post-keys.json.ts). */
export const POST_KEYS_PATH = '/post-keys.json';
export const VIEWS_API_PATH = '/api/views';

// Crawlers, link preview fetchers, HTTP libraries and automated browsers announce themselves here.
const NON_HUMAN_AGENT =
  /bot|crawl|spider|slurp|archiver|preview|fetch|scrape|headless|lighthouse|pagespeed|gtmetrix|pingdom|uptime|monitor|facebookexternalhit|whatsapp|telegram|discord|slack|embedly|skype|curl|wget|python|httpclient|okhttp|axios|go-http|java\/|node|deno|bun\//i;

export const isNonHumanAgent = (userAgent: string): boolean => userAgent === '' || NON_HUMAN_AGENT.test(userAgent);

/** POST /api/views answer: whether this visit counted and the post's total afterwards. */
export interface ViewReceipt {
  readonly counted: boolean;
  readonly views: number;
}

/** GET /api/views?keys=a,b answer: total views per post key. */
export interface ViewCounts {
  readonly views: Readonly<Record<string, number>>;
}
