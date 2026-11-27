// Renders the social share images (Open Graph, 1200x630) at build time: Satori lays out the card and
// turns text into SVG paths, sharp rasterizes it to PNG. Every card shares the frame (brand row, wash,
// footer); the body is an article (posts, blog, courses landing), a profile (home, about) or a course.
import { readFile } from 'node:fs/promises';
import { join } from 'node:path';
import satori, { type SatoriOptions } from 'satori';
import sharp from 'sharp';
import { COURSE_GLYPHS, type CourseGlyph, type CourseLook } from '../courses/look';

export const OG_WIDTH = 1200;
export const OG_HEIGHT = 630;

export interface OgStat {
	readonly value: string;
	readonly label: string;
}

/** A pill in the footer; topic pills carry their color as a dot on a light tint. */
export interface OgPill {
	readonly label: string;
	readonly accent?: { readonly dot: string; readonly tint: string };
}

export type OgFooter =
	| { readonly kind: 'byline'; readonly meta: string; readonly pills: readonly OgPill[] }
	| { readonly kind: 'stats'; readonly stats: readonly OgStat[] };

export type OgBody =
	| { readonly kind: 'article'; readonly title: string; readonly description: string }
	| { readonly kind: 'profile'; readonly title: string; readonly subtitle: string; readonly description: string }
	| { readonly kind: 'course'; readonly title: string; readonly description: string; readonly look: CourseLook };

export interface OgCard {
	/** Shown after "joaopster /" in the brand row; the home has none. */
	readonly section?: string;
	readonly body: OgBody;
	readonly footer: OgFooter;
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
const img = (src: string, size: number, style: Style = {}): OgNode => ({
	type: 'img',
	props: { src, width: size, height: size, style },
});
const svgData = (svg: string) => `data:image/svg+xml;base64,${Buffer.from(svg).toString('base64')}`;

// Design tokens (DESIGN.md).
const color = {
	canvas: '#ffffff',
	ink: '#171717',
	body: '#60646c',
	muted: '#656971',
	surfaceStrong: '#f0f0f3',
	surfaceDark: '#171717',
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

// The profile photo, cropped round, once per build.
let photoPromise: Promise<string> | undefined;
const PHOTO_SIZE = 264;
const loadPhoto = () =>
	(photoPromise ??= sharp(join(process.cwd(), 'src', 'assets', 'profile-photo.png'))
		.resize(PHOTO_SIZE * 2, PHOTO_SIZE * 2)
		.png()
		.toBuffer()
		.then((png) => `data:image/png;base64,${png.toString('base64')}`));

const logoMark = svgData(
	`<svg xmlns="http://www.w3.org/2000/svg" width="58" height="58" viewBox="0 0 58 58"><rect width="58" height="58" rx="11" fill="#000"/><polyline points="18,16 40,29 18,42" fill="none" stroke="#fff" stroke-width="5" stroke-linecap="round" stroke-linejoin="round"/></svg>`,
);

const glyph = (name: CourseGlyph, accent: string, size: number) =>
	svgData(
		`<svg xmlns="http://www.w3.org/2000/svg" width="${size}" height="${size}" viewBox="0 0 24 24" fill="none" stroke="${accent}" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round">${COURSE_GLYPHS[name]}</svg>`,
	);

// Longer titles step down so they still fit.
const titleSize = (title: string) => (title.length <= 40 ? 72 : title.length <= 75 ? 60 : 50);

const titleText = (text: string, size: number, lines: number): OgNode =>
	div(
		{
			display: 'block',
			lineClamp: lines,
			fontSize: size,
			fontWeight: 600,
			lineHeight: 1.1,
			letterSpacing: `${-size * 0.03}px`,
			color: color.ink,
		},
		text,
	);
const bodyText = (text: string, size: number, lines: number): OgNode =>
	div({ display: 'block', lineClamp: lines, fontSize: size, lineHeight: 1.4, color: color.body }, text);

const pill = ({ label, accent }: OgPill): OgNode =>
	div(
		{
			display: 'flex',
			alignItems: 'center',
			gap: 10,
			padding: '8px 16px',
			borderRadius: 9999,
			background: accent?.tint ?? color.surfaceStrong,
			color: color.ink,
			fontSize: 20,
			fontWeight: 500,
		},
		accent ? [div({ width: 10, height: 10, borderRadius: 9999, background: accent.dot }), label] : label,
	);

const brandRow = (section: string | undefined): OgNode =>
	div({ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }, [
		div({ display: 'flex', alignItems: 'center', gap: 16 }, [
			img(logoMark, 48),
			div({ fontFamily: 'JetBrains Mono', fontWeight: 700, fontSize: 28, color: color.ink }, 'joaopster'),
			...(section
				? [div({ fontSize: 28, color: color.muted }, '/'), div({ fontSize: 28, fontWeight: 500, color: color.body }, section)]
				: []),
		]),
		div({ fontSize: 22, color: color.muted }, 'joaopster.com'),
	]);

async function bodyNode(body: OgBody): Promise<OgNode> {
	const column = (children: OgNode[]) =>
		div({ display: 'flex', flexDirection: 'column', flexGrow: 1, flexBasis: 0, justifyContent: 'center', gap: 20 }, children);
	switch (body.kind) {
		case 'article': {
			const size = titleSize(body.title);
			return column([titleText(body.title, size, 3), bodyText(body.description, 28, 2)]);
		}
		case 'profile':
			return div({ display: 'flex', alignItems: 'center', gap: 56, flexGrow: 1 }, [
				column([
					titleText(body.title, 80, 1),
					div({ fontSize: 34, fontWeight: 500, color: color.ink, letterSpacing: '-0.5px' }, body.subtitle),
					bodyText(body.description, 24, 3),
				]),
				img(await loadPhoto(), PHOTO_SIZE, { borderRadius: 9999, border: `6px solid ${color.canvas}`, boxShadow: '0 12px 32px rgba(0, 0, 0, 0.12)' }),
			]);
		case 'course':
			return div({ display: 'flex', alignItems: 'center', gap: 56, flexGrow: 1 }, [
				column([titleText(body.title, titleSize(body.title) - 4, 2), bodyText(body.description, 26, 3)]),
				div(
					{
						display: 'flex',
						alignItems: 'center',
						justifyContent: 'center',
						width: 232,
						height: 232,
						borderRadius: 40,
						background: color.surfaceDark,
						boxShadow: '0 16px 40px rgba(0, 0, 0, 0.18)',
					},
					img(glyph(body.look.glyph, body.look.accent, 132), 132),
				),
			]);
	}
}

function footerNode(footer: OgFooter): OgNode {
	const frame = (children: OgNode[]) =>
		div(
			{
				display: 'flex',
				alignItems: 'center',
				justifyContent: 'space-between',
				paddingTop: 28,
				borderTop: `1px solid ${color.hairline}`,
			},
			children,
		);
	switch (footer.kind) {
		case 'byline':
			return frame([
				div({ display: 'flex', flexDirection: 'column', gap: 6 }, [
					div({ fontSize: 26, fontWeight: 600, color: color.ink }, 'João Pster'),
					div({ fontSize: 20, color: color.body }, footer.meta),
				]),
				div({ display: 'flex', gap: 10 }, footer.pills.slice(0, 4).map(pill)),
			]);
		case 'stats':
			return frame([
				div(
					{ display: 'flex', gap: 56 },
					footer.stats.map(({ value, label }) =>
						div({ display: 'flex', alignItems: 'baseline', gap: 12 }, [
							div({ fontSize: 44, fontWeight: 600, color: color.ink, letterSpacing: '-1.2px' }, value),
							div({ fontSize: 22, color: color.body }, label),
						]),
					),
				),
			]);
	}
}

async function cardNode({ section, body, footer }: OgCard): Promise<OgNode> {
	const wash = body.kind === 'course' ? body.look.wash : color.skyLight;
	return div(
		{
			display: 'flex',
			width: OG_WIDTH,
			height: OG_HEIGHT,
			fontFamily: 'Inter',
			backgroundColor: color.canvas,
			backgroundImage: `radial-gradient(circle at 85% 0%, ${wash} 0%, ${color.canvas} 70%)`,
		},
		// Satori adds root padding to its width, so the safe area is an inner box with margins.
		div(
			{ display: 'flex', flexDirection: 'column', gap: 24, width: OG_WIDTH - 144, height: OG_HEIGHT - 128, margin: '64px 72px' },
			[brandRow(section), await bodyNode(body), footerNode(footer)],
		),
	);
}

export async function renderOgImage(card: OgCard): Promise<Buffer> {
	const [node, fonts] = await Promise.all([cardNode(card), loadFonts()]);
	const svg = await satori(node, { width: OG_WIDTH, height: OG_HEIGHT, fonts });
	return sharp(Buffer.from(svg)).png().toBuffer();
}
