// What the share image of each page says: the home, the about page and the blog index, built from the
// same sources as the pages, so the numbers follow the site on every deploy. The courses landing and
// every course have theirs drawn at publish time (lib/og/courseCards.ts). Paths live here too, so the
// pages and the image routes agree on them.
import { SPOKEN_LANGUAGES } from '../../consts';
import { countUniqueSkills } from '../../data/skills';
import { useTranslations, type Lang } from '../../i18n/ui';
import { topicColor, topicLabel, topicTint, type TopicId } from '../blog/topics';
import { getPostsForLang } from '../getLatestPost';
import { uptimeText } from '../lifeUptime';
import type { OgCard, OgPill } from './renderOgImage';

export const SITE_PAGES = ['home', 'about', 'blog', 'courses'] as const;
export type SitePage = (typeof SITE_PAGES)[number];
/** The pages whose image is drawn at build time; the courses landing's is drawn on every publish. */
export type StaticSitePage = Exclude<SitePage, 'courses'>;
export const STATIC_SITE_PAGES = SITE_PAGES.filter((page): page is StaticSitePage => page !== 'courses');

export const siteOgImage = (lang: Lang, page: SitePage) => `/og/site/${lang}/${page}.png`;

export const topicPill = (topic: TopicId, lang: Lang): OgPill => ({
	label: topicLabel(topic, lang),
	accent: { dot: topicColor(topic), tint: topicTint(topic) },
});
const plainPill = (label: string): OgPill => ({ label });

const COPY: Readonly<
	Record<Lang, { resume: string; posts: (count: number) => string; latest: string }>
> = {
	pt: {
		resume: 'Currículo: experiência, skills, open source e publicações',
		posts: (count) => `${count} ${count === 1 ? 'post' : 'posts'}`,
		latest: 'Último post',
	},
	en: {
		resume: 'Résumé: experience, skills, open source and publications',
		posts: (count) => `${count} ${count === 1 ? 'post' : 'posts'}`,
		latest: 'Latest post',
	},
	es: {
		resume: 'Currículum: experiencia, skills, open source y publicaciones',
		posts: (count) => `${count} ${count === 1 ? 'artículo' : 'artículos'}`,
		latest: 'Último artículo',
	},
};

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

export async function siteCard(lang: Lang, page: StaticSitePage): Promise<OgCard> {
	switch (page) {
		case 'home':
			return homeCard(lang);
		case 'about':
			return aboutCard(lang);
		case 'blog':
			return blogCard(lang);
	}
}
