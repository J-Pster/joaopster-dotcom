// Share image of the home, about and blog pages of each language: /og/site/<lang>/<page>.png (the
// courses landing's is courses.png.ts).
import type { APIRoute, GetStaticPaths } from 'astro';
import type { Lang } from '../../../../i18n/ui';
import { LANGS } from '../../../../lib/courses/catalog';
import { renderOgImage } from '../../../../lib/og/renderOgImage';
import { STATIC_SITE_PAGES, siteCard, type StaticSitePage } from '../../../../lib/og/siteCards';

export const getStaticPaths = (() =>
	LANGS.flatMap((lang) => STATIC_SITE_PAGES.map((page) => ({ params: { lang, page }, props: { lang, page } })))) satisfies GetStaticPaths;

export const GET: APIRoute<{ lang: Lang; page: StaticSitePage }> = async ({ props: { lang, page } }) => {
	const png = await renderOgImage(await siteCard(lang, page));
	return new Response(new Uint8Array(png), { headers: { 'Content-Type': 'image/png' } });
};
