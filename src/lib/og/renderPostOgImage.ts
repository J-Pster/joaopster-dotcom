// Renders the per-post social share image (Open Graph, 1200x630) at build time:
// Satori lays out the card and turns text into SVG paths, sharp rasterizes it to PNG.
import { readFile } from 'node:fs/promises';
import { join } from 'node:path';
import satori, { type SatoriOptions } from 'satori';
import sharp from 'sharp';

export const OG_WIDTH = 1200;
export const OG_HEIGHT = 630;

export interface PostOgCard {
	readonly title: string;
	readonly description: string;
	readonly tags: readonly string[];
	/** Already localized, e.g. "26 de nov. de 2026 · 9 min de leitura". */
	readonly meta: string;
}

type Style = Record<string, string | number>;
interface OgNode {
	type: 'div' | 'img';
	props: { style?: Style; children?: OgNode | string | (OgNode | string)[]; src?: string; width?: number; height?: number };
}

const div = (style: Style, children?: OgNode['props']['children']): OgNode => ({
	type: 'div',
	props: { style, children },
});

// Design tokens (DESIGN.md).
const color = {
	canvas: '#ffffff',
	ink: '#171717',
	body: '#60646c',
	muted: '#999999',
	surfaceStrong: '#f0f0f3',
	hairline: '#dcdee0',
	skyLight: '#cfe7ff',
} as const;

const fontFile = (pkg: string, file: string) =>
	readFile(join(process.cwd(), 'node_modules', '@fontsource', pkg, 'files', file));

let fontsPromise: Promise<SatoriOptions['fonts']> | undefined;
const loadFonts = () =>
	(fontsPromise ??= Promise.all([
		fontFile('inter', 'inter-latin-400-normal.woff'),
		fontFile('inter', 'inter-latin-500-normal.woff'),
		fontFile('inter', 'inter-latin-600-normal.woff'),
		fontFile('jetbrains-mono', 'jetbrains-mono-latin-700-normal.woff'),
	]).then(([inter400, inter500, inter600, mono700]) => [
		{ name: 'Inter', data: inter400, weight: 400, style: 'normal' },
		{ name: 'Inter', data: inter500, weight: 500, style: 'normal' },
		{ name: 'Inter', data: inter600, weight: 600, style: 'normal' },
		{ name: 'JetBrains Mono', data: mono700, weight: 700, style: 'normal' },
	]));

const logoMark = `data:image/svg+xml;base64,${Buffer.from(
	`<svg xmlns="http://www.w3.org/2000/svg" width="58" height="58" viewBox="0 0 58 58"><rect width="58" height="58" rx="11" fill="#000"/><polyline points="18,16 40,29 18,42" fill="none" stroke="#fff" stroke-width="5" stroke-linecap="round" stroke-linejoin="round"/></svg>`
).toString('base64')}`;

// Longer titles step down so they still fit in three lines.
const titleSize = (title: string) => (title.length <= 40 ? 72 : title.length <= 75 ? 60 : 50);

const tagPill = (tag: string): OgNode =>
	div(
		{
			display: 'flex',
			padding: '8px 16px',
			borderRadius: 9999,
			background: color.surfaceStrong,
			color: color.ink,
			fontSize: 20,
			fontWeight: 500,
		},
		tag
	);

function postCard({ title, description, tags, meta }: PostOgCard): OgNode {
	const size = titleSize(title);
	const page = (children: OgNode[]) =>
		div(
			{
				display: 'flex',
				width: OG_WIDTH,
				height: OG_HEIGHT,
				fontFamily: 'Inter',
				backgroundColor: color.canvas,
				backgroundImage: `radial-gradient(circle at 85% 0%, ${color.skyLight} 0%, #e4f1ff 35%, ${color.canvas} 70%)`,
			},
			// Satori adds root padding to its width, so the safe area is an inner box with margins.
			div({ display: 'flex', flexDirection: 'column', width: OG_WIDTH - 144, height: OG_HEIGHT - 128, margin: '64px 72px' }, children)
		);
	return page(
		[
			// Brand row
			div({ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }, [
				div({ display: 'flex', alignItems: 'center', gap: 16 }, [
					{ type: 'img', props: { src: logoMark, width: 48, height: 48 } },
					div({ fontFamily: 'JetBrains Mono', fontWeight: 700, fontSize: 28, color: color.ink }, 'joaopster'),
					div({ fontSize: 28, color: color.muted }, '/'),
					div({ fontSize: 28, fontWeight: 500, color: color.body }, 'blog'),
				]),
			]),
			// Title + description
			div({ display: 'flex', flexDirection: 'column', flexGrow: 1, justifyContent: 'center', gap: 24 }, [
				div(
					{
						display: 'block',
						lineClamp: 3,
						fontSize: size,
						fontWeight: 600,
						lineHeight: 1.1,
						letterSpacing: `${-size * 0.03}px`,
						color: color.ink,
					},
					title
				),
				div(
					{ display: 'block', lineClamp: 2, fontSize: 28, lineHeight: 1.4, color: color.body },
					description
				),
			]),
			// Author, meta and tags
			div(
				{
					display: 'flex',
					alignItems: 'center',
					justifyContent: 'space-between',
					paddingTop: 28,
					borderTop: `1px solid ${color.hairline}`,
				},
				[
					div({ display: 'flex', flexDirection: 'column', gap: 6 }, [
						div({ fontSize: 26, fontWeight: 600, color: color.ink }, 'João Pster'),
						div({ fontSize: 20, color: color.body }, meta),
					]),
					div({ display: 'flex', gap: 10 }, tags.slice(0, 3).map(tagPill)),
				]
			),
		]
	);
}

export async function renderPostOgImage(card: PostOgCard): Promise<Buffer> {
	const svg = await satori(postCard(card), { width: OG_WIDTH, height: OG_HEIGHT, fonts: await loadFonts() });
	return sharp(Buffer.from(svg)).png().toBuffer();
}
