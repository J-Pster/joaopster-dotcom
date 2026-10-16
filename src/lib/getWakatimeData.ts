export interface WakatimeLanguage {
  name: string;
  percent: number;
}

export interface WakatimeData {
  totalText: string;
  totalSeconds: number;
  dailyAvgText: string;
  languages: WakatimeLanguage[];
}

function fmtSeconds(secs: number): string {
  const h = Math.floor(secs / 3600);
  const m = Math.floor((secs % 3600) / 60);
  return h > 0 ? `${h}h ${m}m` : `${m}m`;
}

const API = 'https://wakatime.com/api/v1/users/current';
const EXCLUDED_LANGS = ['JSON', 'Markdown'];

// Runs both at build time (Node) and in the Cloudflare Pages Function (Workers),
// so it only relies on web-standard globals (fetch, btoa).
export async function fetchWakatimeData(apiKey: string): Promise<WakatimeData> {
  const headers = { Authorization: `Basic ${btoa(apiKey)}` };
  const [allTimeRes, statsRes] = await Promise.all([
    fetch(`${API}/all_time_since_today`, { headers }),
    fetch(`${API}/stats/last_30_days`, { headers }),
  ]);
  if (!allTimeRes.ok || !statsRes.ok) {
    throw new Error(`WakaTime API error: all_time=${allTimeRes.status} stats=${statsRes.status}`);
  }
  const allTime = (await allTimeRes.json()) as {
    data: { text: string; total_seconds: number; daily_average: number };
  };
  const statsJson = (await statsRes.json()) as { data: { languages: WakatimeLanguage[] } };
  const allLangs = statsJson.data.languages;
  const excludedPct = allLangs
    .filter(l => EXCLUDED_LANGS.includes(l.name))
    .reduce((sum, l) => sum + l.percent, 0);
  return {
    totalText: allTime.data.text,
    totalSeconds: allTime.data.total_seconds,
    dailyAvgText: fmtSeconds(allTime.data.daily_average),
    languages: allLangs
      .filter(l => !EXCLUDED_LANGS.includes(l.name))
      .map(l => ({ name: l.name, percent: l.name === 'TypeScript' ? l.percent + excludedPct : l.percent }))
      .slice(0, 4),
  };
}

// Build-time snapshot baked into the static HTML; the page refreshes it live
// from /api/wakatime (functions/api/wakatime.ts) once loaded.
export async function getWakatimeData(): Promise<WakatimeData | undefined> {
  const apiKey = import.meta.env.WAKATIME_API_KEY as string | undefined;
  if (!apiKey) return undefined;
  try {
    return await fetchWakatimeData(apiKey);
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
