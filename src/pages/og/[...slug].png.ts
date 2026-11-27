// One share image per blog post, emitted at build time as /og/<lang>/<slug>.png (the slug of the post in that language).
import type { APIRoute, GetStaticPaths } from 'astro';
import { getCollection, type CollectionEntry } from 'astro:content';
import { useTranslations, type Lang } from '../../i18n/ui';
import { langOf, readTime, slugOf } from '../../lib/getLatestPost';
import { topicPill } from '../../lib/og/siteCards';
import { renderOgImage } from '../../lib/og/renderOgImage';

const dateLocale: Record<Lang, string> = { pt: 'pt-BR', en: 'en-US', es: 'es-ES' };

export const getStaticPaths = (async () => {
	const posts = await getCollection('blog');
	return posts.map((post) => ({ params: { slug: `${langOf(post)}/${slugOf(post)}` }, props: { post } }));
}) satisfies GetStaticPaths;

export const GET: APIRoute<{ post: CollectionEntry<'blog'> }> = async ({ props: { post } }) => {
	const lang = langOf(post);
	const t = useTranslations(lang);
	const date = post.data.pubDate.toLocaleDateString(dateLocale[lang], {
		day: 'numeric',
		month: 'short',
		year: 'numeric',
		timeZone: 'UTC',
	});

	const png = await renderOgImage({
		section: 'blog',
		body: { kind: 'article', title: post.data.title, description: post.data.description },
		footer: { kind: 'byline', meta: `${date} · ${readTime(post.body)} ${t('post.minRead')}`, pills: post.data.tags.map((topic) => topicPill(topic, lang)) },
	});
	return new Response(new Uint8Array(png), { headers: { 'Content-Type': 'image/png' } });
};
