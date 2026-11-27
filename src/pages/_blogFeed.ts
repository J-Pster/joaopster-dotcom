// The RSS feed of the blog in one language. Not a route (the underscore keeps Astro from routing it):
// src/pages/rss.xml.js, src/pages/en/rss.xml.js and src/pages/es/rss.xml.js only call it.
import rss from '@astrojs/rss';
import type { APIContext } from 'astro';
import { useTranslations, type Lang } from '../i18n/ui';
import { blogPostPath, getPostsForLang } from '../lib/getLatestPost';

export async function blogFeed(lang: Lang, context: APIContext) {
	const posts = await getPostsForLang(lang);
	return rss({
		title: useTranslations(lang)('site.title'),
		description: useTranslations(lang)('site.description'),
		site: context.site!,
		customData: `<language>${lang}</language>`,
		items: posts.map((post) => ({
			title: post.data.title,
			description: post.data.description,
			pubDate: post.data.pubDate,
			link: blogPostPath(lang, post),
			categories: post.data.tags,
		})),
	});
}
