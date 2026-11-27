// A course's look: the icon on its emblem and its colors. The catalog cards, the course pages and the
// course's share image all draw from it, so a course looks the same everywhere.

/** 24x24 stroke icons, drawn in the course's accent color on a dark plate. */
export const COURSE_GLYPHS = {
  cloud: '<path d="M17.5 19H9a7 7 0 1 1 6.71-9h1.79a4.5 4.5 0 1 1 0 9Z"/>',
  cross: '<path d="M9 3h6v6h6v6h-6v6H9v-6H3V9h6z"/>',
  radio:
    '<path d="M4.9 19.1C1 15.2 1 8.8 4.9 4.9"/><path d="M7.8 16.2c-2.3-2.3-2.3-6.1 0-8.5"/><circle cx="12" cy="12" r="2"/><path d="M16.2 7.8c2.3 2.3 2.3 6.1 0 8.5"/><path d="M19.1 4.9C23 8.8 23 15.1 19.1 19"/>',
  house: '<path d="M3 10.5 12 3l9 7.5V20a1 1 0 0 1-1 1h-5v-6H9v6H4a1 1 0 0 1-1-1z"/>',
} as const;
export type CourseGlyph = keyof typeof COURSE_GLYPHS;

export interface CourseLook {
  readonly glyph: CourseGlyph;
  /** Icon, card stripe and progress color. Decorative only: never text, never a button. */
  readonly accent: string;
  /** Light wash behind the course's share image. */
  readonly wash: string;
}
