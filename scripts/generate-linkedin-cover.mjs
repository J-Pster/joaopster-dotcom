// Generates the LinkedIn article cover (1920x1080, 16:9) for a blog post.
// Same stack as the per-post Open Graph image (src/lib/og/renderPostOgImage.ts):
// Satori lays out the card and turns text into SVG paths, sharp rasterizes it to PNG.
//
// Usage:
//   npm run cover -- pt/anthropic-evil-corp
//   npm run cover -- en/anthropic-evil-corp path/to/out.png
//
// Default output: linkedin-covers/<lang>-<slug>.png (gitignored).
//
// LinkedIn crops the cover differently in the feed, in the article view and on mobile,
// so everything that matters sits inside a centered safe area with wide side margins.
import { readFile, mkdir, writeFile } from 'node:fs/promises';
import { dirname, join } from 'node:path';
import { fileURLToPath } from 'node:url';
import satori from 'satori';
import sharp from 'sharp';

const root = join(dirname(fileURLToPath(import.meta.url)), '..');

const WIDTH = 1920;
const HEIGHT = 1080;
const SAFE_X = 240;
const SAFE_Y = 130;

// Design tokens (DESIGN.md).
const color = {
	canvas: '#ffffff',
	ink: '#171717',
	body: '#60646c',
	muted: '#999999',
	surfaceStrong: '#f0f0f3',
	hairline: '#dcdee0',
	skyLight: '#cfe7ff',
};

const byline = { pt: 'por João Pster', en: 'by João Pster', es: 'por João Pster' };

const [, , postId, outArg] = process.argv;
if (!postId || !/^(pt|en|es)\/[a-z0-9-]+$/.test(postId)) {
	console.error('Usage: npm run cover -- <lang>/<slug> [out.png]   e.g. pt/anthropic-evil-corp');
	process.exit(1);
}
const [lang, slug] = postId.split('/');

const source = await readFile(join(root, 'src', 'content', 'blog', lang, `${slug}.md`), 'utf8');
const frontmatter = source.match(/^---\n([\s\S]*?)\n---/)?.[1] ?? '';
const field = (name) => {
	const line = frontmatter.match(new RegExp(`^${name}:\\s*(.*)$`, 'm'))?.[1]?.trim() ?? '';
	return line.replace(/^(['"])(.*)\1$/, '$2');
};
const title = field('title');
const tags = (field('tags').match(/['"]([^'"]+)['"]/g) ?? []).map((t) => t.slice(1, -1));
if (!title) {
	console.error(`No title found in src/content/blog/${lang}/${slug}.md`);
	process.exit(1);
}

const fontFile = (pkg, file) => readFile(join(root, 'node_modules', '@fontsource', pkg, 'files', file));
const [inter400, inter500, inter600, mono700] = await Promise.all([
	fontFile('inter', 'inter-latin-400-normal.woff'),
	fontFile('inter', 'inter-latin-500-normal.woff'),
	fontFile('inter', 'inter-latin-600-normal.woff'),
	fontFile('jetbrains-mono', 'jetbrains-mono-latin-700-normal.woff'),
]);
const fonts = [
	{ name: 'Inter', data: inter400, weight: 400, style: 'normal' },
	{ name: 'Inter', data: inter500, weight: 500, style: 'normal' },
	{ name: 'Inter', data: inter600, weight: 600, style: 'normal' },
	{ name: 'JetBrains Mono', data: mono700, weight: 700, style: 'normal' },
];

const div = (style, children) => ({ type: 'div', props: { style, children } });

const logoMark = `data:image/svg+xml;base64,${Buffer.from(
	`<svg xmlns="http://www.w3.org/2000/svg" width="58" height="58" viewBox="0 0 58 58"><rect width="58" height="58" rx="11" fill="#000"/><polyline points="18,16 40,29 18,42" fill="none" stroke="#fff" stroke-width="5" stroke-linecap="round" stroke-linejoin="round"/></svg>`
).toString('base64')}`;

// The title is the whole message of the cover, so it gets most of the space.
const titleSize = title.length <= 40 ? 112 : title.length <= 75 ? 92 : 76;

const tagPill = (tag) =>
	div(
		{
			display: 'flex',
			padding: '12px 24px',
			borderRadius: 9999,
			background: color.surfaceStrong,
			color: color.ink,
			fontSize: 28,
			fontWeight: 500,
		},
		tag
	);

const card = div(
	{
		display: 'flex',
		width: WIDTH,
		height: HEIGHT,
		fontFamily: 'Inter',
		backgroundColor: color.canvas,
		backgroundImage: `radial-gradient(circle at 50% 0%, ${color.skyLight} 0%, #e4f1ff 40%, ${color.canvas} 78%)`,
	},
	div(
		{
			display: 'flex',
			flexDirection: 'column',
			width: WIDTH - SAFE_X * 2,
			height: HEIGHT - SAFE_Y * 2,
			margin: `${SAFE_Y}px ${SAFE_X}px`,
		},
		[
			div({ display: 'flex', alignItems: 'center', gap: 20 }, [
				{ type: 'img', props: { src: logoMark, width: 64, height: 64 } },
				div({ fontFamily: 'JetBrains Mono', fontWeight: 700, fontSize: 38, color: color.ink }, 'joaopster'),
				div({ fontSize: 38, color: color.muted }, '/'),
				div({ fontSize: 38, fontWeight: 500, color: color.body }, 'blog'),
			]),
			div(
				{ display: 'flex', flexDirection: 'column', flexGrow: 1, justifyContent: 'center' },
				div(
					{
						display: 'block',
						lineClamp: 3,
						fontSize: titleSize,
						fontWeight: 600,
						lineHeight: 1.08,
						letterSpacing: `${-titleSize * 0.03}px`,
						color: color.ink,
					},
					title
				)
			),
			div(
				{
					display: 'flex',
					alignItems: 'center',
					justifyContent: 'space-between',
					paddingTop: 36,
					borderTop: `1px solid ${color.hairline}`,
				},
				[
					div({ display: 'flex', alignItems: 'baseline', gap: 16 }, [
						div({ fontSize: 34, fontWeight: 600, color: color.ink }, byline[lang]),
						div({ fontSize: 30, color: color.body }, 'joaopster.com'),
					]),
					div({ display: 'flex', gap: 14 }, tags.slice(0, 3).map(tagPill)),
				]
			),
		]
	)
);

const svg = await satori(card, { width: WIDTH, height: HEIGHT, fonts });
const png = await sharp(Buffer.from(svg)).png().toBuffer();

const out = outArg ?? join(root, 'linkedin-covers', `${lang}-${slug}.png`);
await mkdir(dirname(out), { recursive: true });
await writeFile(out, png);
console.log(`LinkedIn cover written to ${out} (${WIDTH}x${HEIGHT})`);
