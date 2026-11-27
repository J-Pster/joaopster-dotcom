// The RSS feed of the blog in one language. Not a route (the underscore keeps Astro from routing it):
// src/pages/rss.xml.js, src/pages/en/rss.xml.js and src/pages/es/rss.xml.js only call it.
import rss from '@astrojs/rss';
import type { APIContext } from 'astro';
import { SITE_DESCRIPTION, SITE_TITLE } from '../consts';
import type { Lang } from '../i18n/ui';
import { blogPostPath, getPostsForLang } from '../lib/getLatestPost';

const FEED_COPY: Record<Lang, { title: string; description: string }> = {
	pt: {
		title: 'João Pster · Cofundador e desenvolvedor',
		description:
			'Desenvolvedor autodidata e cofundador de uma startup confidencial. Construo o produto inteiro em TypeScript, da arquitetura e da infraestrutura na AWS ao backend e aos apps web e mobile, e escrevo aqui sobre o que construo e uso.',
	},
	en: { title: SITE_TITLE, description: SITE_DESCRIPTION },
	es: {
		title: 'João Pster · Cofundador y desarrollador',
		description:
			'Desarrollador autodidacta y cofundador de una startup confidencial. Construyo todo el producto en TypeScript, desde la arquitectura y la infraestructura en AWS hasta el backend y las apps web y móvil, y escribo aquí sobre lo que construyo y uso.',
	},
};

export async function blogFeed(lang: Lang, context: APIContext) {
	const posts = await getPostsForLang(lang);
	return rss({
		...FEED_COPY[lang],
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
