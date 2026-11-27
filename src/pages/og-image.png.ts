// The old default share image URL, still cached by sites that shared the home before the per-page
// images: it now serves the current home card in Portuguese.
import type { APIRoute } from 'astro';
import { renderOgImage } from '../lib/og/renderOgImage';
import { siteCard } from '../lib/og/siteCards';

export const GET: APIRoute = async () => {
	const png = await renderOgImage(await siteCard('pt', 'home'));
	return new Response(new Uint8Array(png), { headers: { 'Content-Type': 'image/png' } });
};
