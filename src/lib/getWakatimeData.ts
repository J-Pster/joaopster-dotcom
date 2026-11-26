import type { ActivityDay } from './wakatimeActivity';

export interface WakatimeData {
  totalText: string;
  totalSeconds: number;
  dailyAvgText: string;
  /** Last 365 days, oldest first. */
  activity: ActivityDay[];
}

export function fmtSeconds(secs: number): string {
  const h = Math.floor(secs / 3600);
  const m = Math.floor((secs % 3600) / 60);
  return h > 0 ? `${h}h ${m}m` : `${m}m`;
}

const API = 'https://wakatime.com/api/v1/users/current';

// Runs both at build time (Node) and in the Cloudflare Pages Function (Workers),
// so it only relies on web-standard globals (fetch, btoa).
export async function fetchWakatimeData(accessToken: string): Promise<WakatimeData> {
  // WakaTime API keys are write-only, so reads use an OAuth access token
  // (scopes read_stats for the totals and read_summaries for the per-day insights).
  const headers = { Authorization: `Bearer ${accessToken}` };
  const [allTimeRes, daysRes] = await Promise.all([
    fetch(`${API}/all_time_since_today`, { headers }),
    fetch(`${API}/insights/days/last_year`, { headers }),
  ]);
  if (!allTimeRes.ok || !daysRes.ok) {
    throw new Error(`WakaTime API error: all_time=${allTimeRes.status} days=${daysRes.status}`);
  }
  const allTime = (await allTimeRes.json()) as {
    data: { text: string; total_seconds: number; daily_average: number };
  };
  const daysJson = (await daysRes.json()) as { data: { days: { date: string; total: number }[] } };
  return {
    totalText: allTime.data.text,
    totalSeconds: allTime.data.total_seconds,
    dailyAvgText: fmtSeconds(allTime.data.daily_average),
    activity: daysJson.data.days.map((day) => ({ date: day.date, seconds: day.total })),
  };
}

// Build-time snapshot baked into the static HTML; the page refreshes it live
// from /api/wakatime (functions/api/wakatime.ts) once loaded.
export function getWakatimeData(): Promise<WakatimeData | undefined> {
  // Every page's header and the three home pages render in parallel, so they share one API round trip per build.
  buildTimeData ??= loadBuildTimeData();
  return buildTimeData;
}

let buildTimeData: Promise<WakatimeData | undefined> | undefined;

async function loadBuildTimeData(): Promise<WakatimeData | undefined> {
  const accessToken = import.meta.env.WAKATIME_ACCESS_TOKEN as string | undefined;
  if (!accessToken) return undefined;
  try {
    return await fetchWakatimeData(accessToken);
  } catch (err) {
    console.warn('[wakatime] build-time fetch failed, rendering placeholders:', err);
    return undefined;
  }
}

const FIXED_HOURS = 12480;

export function buildAddendum(base: string, data: WakatimeData | undefined, locale: string): string {
  if (!data) return base;
  const wakaHours = Math.round(data.totalSeconds / 3600);
  const total = FIXED_HOURS + wakaHours;
  const fmt = new Intl.NumberFormat(locale);
  return `${base.replace(/\.$/, '')} + ${fmt.format(wakaHours)}h = ~${fmt.format(total)}h.`;
}
