// Share image of the home, about, blog and courses pages of each language: /og/site/<lang>/<page>.png.
import type { APIRoute, GetStaticPaths } from 'astro';
import type { Lang } from '../../../../i18n/ui';
import { LANGS } from '../../../../lib/courses/catalog';
import { renderOgImage } from '../../../../lib/og/renderOgImage';
import { SITE_PAGES, siteCard, type SitePage } from '../../../../lib/og/siteCards';

export const getStaticPaths = (() =>
	LANGS.flatMap((lang) => SITE_PAGES.map((page) => ({ params: { lang, page }, props: { lang, page } })))) satisfies GetStaticPaths;

export const GET: APIRoute<{ lang: Lang; page: SitePage }> = async ({ props: { lang, page } }) => {
	const png = await renderOgImage(await siteCard(lang, page));
	return new Response(new Uint8Array(png), { headers: { 'Content-Type': 'image/png' } });
};
