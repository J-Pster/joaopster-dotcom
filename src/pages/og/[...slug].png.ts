// One share image per blog post, emitted at build time as /og/<lang>/<slug>.png.
import type { APIRoute, GetStaticPaths } from 'astro';
import { getCollection, type CollectionEntry } from 'astro:content';
import { useTranslations, type Lang } from '../../i18n/ui';
import { langOf, readTime } from '../../lib/getLatestPost';
import { renderPostOgImage } from '../../lib/og/renderPostOgImage';

const dateLocale: Record<Lang, string> = { pt: 'pt-BR', en: 'en-US', es: 'es-ES' };

export const getStaticPaths = (async () => {
	const posts = await getCollection('blog');
	return posts.map((post) => ({ params: { slug: post.id }, props: { post } }));
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

	const png = await renderPostOgImage({
		title: post.data.title,
		description: post.data.description,
		tags: post.data.tags,
		meta: `${date} · ${readTime(post.body)} ${t('post.minRead')}`,
	});
	return new Response(new Uint8Array(png), { headers: { 'Content-Type': 'image/png' } });
};
