// Shape of a course's outline.json (routes.ts outlineResponse), read by the reader on the client to
// paint progress and the reading time left without shipping the whole vault.

export interface OutlineLesson {
  readonly url: string;
  readonly title: string;
  /** Estimated reading time in whole minutes, at least 1 (readingTime.ts). */
  readonly minutes: number;
}

export interface OutlineModule {
  readonly number: number;
  readonly title: string;
  readonly url: string;
  readonly lessons: readonly OutlineLesson[];
}

export interface CourseOutline {
  readonly modules: readonly OutlineModule[];
}

/** Reading minutes of the lessons not marked as read. */
export const minutesLeft = (lessons: readonly OutlineLesson[], read: ReadonlySet<string>): number =>
  lessons.reduce((sum, lesson) => (read.has(lesson.url) ? sum : sum + lesson.minutes), 0);
