// Turns WakaTime's per-day totals into a GitHub-style contribution grid.
// Pure functions: used at build time (Astro) and in the browser to redraw with live data.
import { fmtSeconds } from './getWakatimeData';

/** Seconds coded on one calendar day; `date` is YYYY-MM-DD in the WakaTime account's timezone. */
export interface ActivityDay {
  readonly date: string;
  readonly seconds: number;
}

export type ActivityLevel = 0 | 1 | 2 | 3 | 4;

export interface ActivityCell {
  readonly date: string;
  readonly seconds: number;
  readonly level: ActivityLevel;
}

export interface ActivityMonth {
  readonly label: string;
  /** Zero-based week column where the month's first day falls. */
  readonly week: number;
}

export interface ActivityGrid {
  /** One column per week, Sunday first. Days before the range start or after its end are null. */
  readonly weeks: readonly (readonly (ActivityCell | null)[])[];
  readonly months: readonly ActivityMonth[];
}

export const ACTIVITY_LEVELS: readonly ActivityLevel[] = [0, 1, 2, 3, 4];

const DAYS_PER_WEEK = 7;

const toUtcDate = (date: string): Date => new Date(`${date}T00:00:00Z`);

// Quartiles of the active days, so the colour scale follows this person's own range
// instead of fixed hour buckets that would paint every busy day the same.
function levelFor(seconds: number, quartiles: readonly number[]): ActivityLevel {
  if (seconds <= 0) return 0;
  const above = quartiles.filter((limit) => seconds > limit).length;
  return (above + 1) as ActivityLevel;
}

function quartilesOf(days: readonly ActivityDay[]): number[] {
  const active = days.map((day) => day.seconds).filter((seconds) => seconds > 0).sort((a, b) => a - b);
  if (active.length === 0) return [];
  return [0.25, 0.5, 0.75].map((q) => active[Math.min(active.length - 1, Math.floor(q * active.length))]);
}

export function buildActivityGrid(days: readonly ActivityDay[], locale: string): ActivityGrid {
  if (days.length === 0) return { weeks: [], months: [] };

  const quartiles = quartilesOf(days);
  const leadingBlanks = toUtcDate(days[0].date).getUTCDay();
  const cells: (ActivityCell | null)[] = [
    ...Array<null>(leadingBlanks).fill(null),
    ...days.map((day) => ({ date: day.date, seconds: day.seconds, level: levelFor(day.seconds, quartiles) })),
  ];
  while (cells.length % DAYS_PER_WEEK !== 0) cells.push(null);

  const weeks: (ActivityCell | null)[][] = [];
  for (let start = 0; start < cells.length; start += DAYS_PER_WEEK) {
    weeks.push(cells.slice(start, start + DAYS_PER_WEEK));
  }

  const monthName = new Intl.DateTimeFormat(locale, { month: 'short', timeZone: 'UTC' });
  const months = cells.flatMap((cell, index) =>
    cell && cell.date.endsWith('-01')
      ? [{ label: monthName.format(toUtcDate(cell.date)).replace('.', ''), week: Math.floor(index / DAYS_PER_WEEK) }]
      : [],
  );

  return { weeks, months };
}

/** Tooltip text for one cell, e.g. "25 nov 2026 · 10h 55m". */
export function activityCellTitle(cell: ActivityCell, locale: string): string {
  const date = new Intl.DateTimeFormat(locale, { dateStyle: 'medium', timeZone: 'UTC' }).format(toUtcDate(cell.date));
  return `${date} · ${cell.seconds > 0 ? fmtSeconds(cell.seconds) : '0m'}`;
}
