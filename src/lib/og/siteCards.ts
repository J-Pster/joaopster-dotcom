// What the share image of each page says: the home, the about page, the blog index, the courses landing
// and every course. Built from the same sources as the pages, so the numbers follow the site on every
// deploy. Paths live here too, so the pages and the image routes agree on them.
import { SPOKEN_LANGUAGES } from '../../consts';
import { countUniqueSkills } from '../../data/skills';
import { useTranslations, type Lang } from '../../i18n/ui';
import { LANGS, type CourseInfo } from '../courses/catalog';
import { catalogCourses, type CatalogCourse } from '../courses/catalogView';
import { courseText } from '../courses/i18n';
import { topicColor, topicLabel, topicTint, type TopicId } from '../blog/topics';
import { getPostsForLang } from '../getLatestPost';
import { uptimeText } from '../lifeUptime';
import type { OgCard, OgPill } from './renderOgImage';

export const SITE_PAGES = ['home', 'about', 'blog', 'courses'] as const;
export type SitePage = (typeof SITE_PAGES)[number];

export const siteOgImage = (lang: Lang, page: SitePage) => `/og/site/${lang}/${page}.png`;
export const courseOgImage = (course: CourseInfo) => `/og/courses/${course.slug}.png`;

export const topicPill = (topic: TopicId, lang: Lang): OgPill => ({
	label: topicLabel(topic, lang),
	accent: { dot: topicColor(topic), tint: topicTint(topic) },
});
const plainPill = (label: string): OgPill => ({ label });

const COPY: Readonly<
	Record<Lang, { resume: string; posts: (count: number) => string; latest: string; coursesTitle: string }>
> = {
	pt: {
		resume: 'Currículo: experiência, skills, open source e publicações',
		posts: (count) => `${count} ${count === 1 ? 'post' : 'posts'}`,
		latest: 'Último post',
		coursesTitle: 'Cursos gratuitos, do básico à prática',
	},
	en: {
		resume: 'Résumé: experience, skills, open source and publications',
		posts: (count) => `${count} ${count === 1 ? 'post' : 'posts'}`,
		latest: 'Latest post',
		coursesTitle: 'Free courses, from the basics to practice',
	},
	es: {
		resume: 'Currículum: experiencia, skills, open source y publicaciones',
		posts: (count) => `${count} ${count === 1 ? 'artículo' : 'artículos'}`,
		latest: 'Último artículo',
		coursesTitle: 'Cursos gratuitos, de lo básico a la práctica',
	},
};

const allCatalogCourses = (): readonly CatalogCourse[] => LANGS.flatMap((lang) => catalogCourses(lang));

function homeCard(lang: Lang): OgCard {
	const t = useTranslations(lang);
	const lower = (text: string) => text.toLocaleLowerCase(lang);
	return {
		body: { kind: 'profile', title: 'João Pster', subtitle: t('hero.role'), description: t('hero.sub') },
		footer: {
			kind: 'stats',
			stats: [
				{ value: uptimeText(new Date(), lang).devYears, label: lower(t('hero.yearsExperience')) },
				{ value: String(countUniqueSkills(lang)), label: lower(t('hero.skills')) },
				{ value: String(SPOKEN_LANGUAGES), label: lower(t('hero.languages')) },
			],
		},
	};
}

function aboutCard(lang: Lang): OgCard {
	const t = useTranslations(lang);
	return {
		section: t('nav.about'),
		body: {
			kind: 'profile',
			title: 'João Pster',
			subtitle: 'João Pedro Viana Freitas',
			description: `${t('hero.role')}. ${COPY[lang].resume}.`,
		},
		footer: {
			kind: 'byline',
			meta: `${uptimeText(new Date(), lang).devYears} ${t('hero.yearsExperience').toLocaleLowerCase(lang)}`,
			pills: ['TypeScript', 'AWS', 'Node.js'].map(plainPill),
		},
	};
}

async function blogCard(lang: Lang): Promise<OgCard> {
	const t = useTranslations(lang);
	const posts = await getPostsForLang(lang);
	const [latest] = posts;
	if (!latest) throw new Error(`The blog in ${lang} has no posts to show on its share image`);
	const tagCount = new Map<TopicId, number>();
	for (const tag of posts.flatMap((post) => post.data.tags)) tagCount.set(tag, (tagCount.get(tag) ?? 0) + 1);
	const topTags = [...tagCount].sort((a, b) => b[1] - a[1]).map(([topic]) => topicPill(topic, lang));
	return {
		section: 'blog',
		body: { kind: 'article', title: t('blog.description'), description: `${COPY[lang].latest}: ${latest.data.title}` },
		footer: { kind: 'byline', meta: COPY[lang].posts(posts.length), pills: topTags },
	};
}

function coursesCard(lang: Lang): OgCard {
	const text = courseText(lang);
	const courses = allCatalogCourses();
	const lessons = courses.reduce((sum, c) => sum + c.lessons, 0);
	const hours = Math.round(courses.reduce((sum, c) => sum + c.minutes, 0) / 60);
	const topics = [...new Set(courses.map((c) => c.course.topic))].map((topic) => plainPill(text.topicNames[topic]));
	return {
		section: text.section.toLocaleLowerCase(lang),
		body: { kind: 'article', title: COPY[lang].coursesTitle, description: text.landingMetaDescription },
		footer: { kind: 'byline', meta: text.catalogFacts(courses.length, lessons, hours), pills: topics },
	};
}

export async function siteCard(lang: Lang, page: SitePage): Promise<OgCard> {
	switch (page) {
		case 'home':
			return homeCard(lang);
		case 'about':
			return aboutCard(lang);
		case 'blog':
			return blogCard(lang);
		case 'courses':
			return coursesCard(lang);
	}
}

export function courseCard(course: CourseInfo): OgCard {
	const entry = allCatalogCourses().find((c) => c.course.slug === course.slug);
	if (!entry) throw new Error(`Course ${course.slug} is missing from the catalog`);
	const text = courseText(course.lang);
	return {
		section: text.section.toLocaleLowerCase(course.lang),
		body: { kind: 'course', title: course.title, description: course.goal, look: course.look },
		footer: {
			kind: 'byline',
			meta: `${text.lessonsCount(entry.lessons)} · ${text.minutesOfReading(entry.minutes)}`,
			pills: [text.levelNames[course.level], text.topicNames[course.topic]].map(plainPill),
		},
	};
}
