export interface WakatimeLanguage {
  name: string;
  percent: number;
  text: string;
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

export async function getWakatimeData(): Promise<WakatimeData | undefined> {
  const apiKey = import.meta.env.WAKATIME_API_KEY as string | undefined;
  if (!apiKey) return undefined;
  try {
    const auth = `Basic ${Buffer.from(apiKey).toString('base64')}`;
    const headers = { Authorization: auth };
    const [allTimeRes, statsRes] = await Promise.all([
      fetch('https://wakatime.com/api/v1/users/current/all_time_since_today', { headers }),
      fetch('https://wakatime.com/api/v1/users/current/stats/last_30_days', { headers }),
    ]);
    if (!allTimeRes.ok || !statsRes.ok) return undefined;
    const allTime = (await allTimeRes.json()) as {
      data: { text: string; total_seconds: number; daily_average: number };
    };
    const statsJson = (await statsRes.json()) as { data: { languages: WakatimeLanguage[] } };
    const excluded = ['JSON', 'Markdown'];
    const allLangs = statsJson.data.languages;
    const excludedPct = allLangs
      .filter(l => excluded.includes(l.name))
      .reduce((sum, l) => sum + l.percent, 0);
    return {
      totalText: allTime.data.text,
      totalSeconds: allTime.data.total_seconds,
      dailyAvgText: fmtSeconds(allTime.data.daily_average),
      languages: allLangs
        .filter(l => !excluded.includes(l.name))
        .map(l => (l.name === 'TypeScript' ? { ...l, percent: l.percent + excludedPct } : l))
        .slice(0, 4),
    };
  } catch {
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
