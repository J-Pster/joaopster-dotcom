// What the courses landing shows of each course: its numbers, its syllabus (modules with their
// reading time) and the lesson titles the catalog search looks through. Built at build time from
// the vaults; the page's script only filters, sorts and paints progress over it.
import type { Lang } from '../../i18n/ui';
import { type CourseInfo, coursesIn } from './catalog';
import { readingMinutes } from './readingTime';
import { getVault } from './vault';

export interface CatalogModule {
  readonly number: number;
  readonly title: string;
  readonly url: string;
  readonly lessons: number;
  readonly minutes: number;
}

/** A lesson as the search sees it: title, URL and the number of its module. */
export type CatalogLesson = readonly [title: string, url: string, module: number];

export interface CatalogCourse {
  readonly course: CourseInfo;
  readonly url: string;
  readonly firstLesson: string;
  readonly modules: readonly CatalogModule[];
  readonly lessons: number;
  readonly minutes: number;
  readonly terms: number;
  readonly searchLessons: readonly CatalogLesson[];
}

export function catalogCourses(lang: Lang): readonly CatalogCourse[] {
  return coursesIn(lang).map(catalogCourse);
}

function catalogCourse(course: CourseInfo): CatalogCourse {
  const vault = getVault(course.slug);
  const modules = vault.modules.map((module) => ({
    number: module.number,
    title: module.title,
    url: module.note.url,
    lessons: module.lessons.length,
    minutes: module.lessons.reduce((sum, lesson) => sum + readingMinutes(lesson), 0),
  }));
  return {
    course,
    url: vault.home.url,
    firstLesson: vault.lessons[0].url,
    modules,
    lessons: vault.lessons.length,
    minutes: modules.reduce((sum, module) => sum + module.minutes, 0),
    terms: vault.glossary.length,
    searchLessons: vault.modules.flatMap((module) =>
      module.lessons.map((lesson): CatalogLesson => [lesson.title, lesson.url, module.number]),
    ),
  };
}
