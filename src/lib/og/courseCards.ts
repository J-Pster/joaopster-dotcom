// What the share images of the courses say: the courses landing (all published courses) and each
// course. Drawn by the publisher (scripts/courses/publish.ts) from the catalog it is about to publish,
// so the numbers follow the courses on every publish without a site deploy.
import type { Lang } from '../../i18n/ui';
import type { CourseInfo } from '../courses/catalog';
import { courseText } from '../courses/i18n';
import type { CatalogSummary, PublishedCourse } from '../courses/package';
import type { OgCard, OgPill } from './renderOgImage';

const plainPill = (label: string): OgPill => ({ label });

const LANDING_TITLE: Readonly<Record<Lang, string>> = {
	pt: 'Cursos gratuitos, do básico à prática',
	en: 'Free courses, from the basics to practice',
	es: 'Cursos gratuitos, de lo básico a la práctica',
};

/** The courses landing of a language: the counts cover every published course, in any language. */
export function coursesCard(lang: Lang, courses: readonly PublishedCourse[]): OgCard {
	const text = courseText(lang);
	const lessons = courses.reduce((sum, c) => sum + c.summary.lessons, 0);
	const hours = Math.round(courses.reduce((sum, c) => sum + c.summary.minutes, 0) / 60);
	const topics = [...new Set(courses.map((c) => c.course.topic))].map((topic) => plainPill(text.topicNames[topic]));
	return {
		section: text.section.toLocaleLowerCase(lang),
		body: { kind: 'article', title: LANDING_TITLE[lang], description: text.landingMetaDescription },
		footer: { kind: 'byline', meta: text.catalogFacts(courses.length, lessons, hours), pills: topics },
	};
}

export function courseCard(course: CourseInfo, summary: CatalogSummary): OgCard {
	const text = courseText(course.lang);
	return {
		section: text.section.toLocaleLowerCase(course.lang),
		body: { kind: 'course', title: course.title, description: course.goal, look: course.look },
		footer: {
			kind: 'byline',
			meta: `${text.lessonsCount(summary.lessons)} · ${text.minutesOfReading(summary.minutes)}`,
			pills: [text.levelNames[course.level], text.topicNames[course.topic]].map(plainPill),
		},
	};
}
