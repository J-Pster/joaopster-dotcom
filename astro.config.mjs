// @ts-check

import cloudflare from '@astrojs/cloudflare';
import mdx from '@astrojs/mdx';
import sitemap from '@astrojs/sitemap';
import { rehypeHeadingIds } from '@astrojs/markdown-remark';
import { cpSync, existsSync, readdirSync, readFileSync, rmSync } from 'node:fs';
import { fileURLToPath } from 'node:url';
import { defineConfig } from 'astro/config';
import { rehypePostLinks } from './src/lib/markdown/rehypePostLinks.ts';
import { LANGS } from './src/lib/courses/catalog.ts';

// The 404 pages are not content. Course pages are rendered on demand, so this sitemap never lists them:
// src/pages/sitemap-courses.xml.ts lists the published ones.
const NOT_FOUND_PAGE = /\/404\/?$/;
const SITE = 'https://joaopster.com';
const isIndexablePage = (/** @type {string} */ page) => !NOT_FOUND_PAGE.test(page);

// Sitemap lastmod for blog posts: updatedDate, or pubDate, the same dates the post shows. Other pages get
// none, since Google only trusts lastmod when it matches real changes and a build date would not.
const frontmatterValue = (/** @type {string} */ block, /** @type {string} */ key) => {
	const line = block.split('\n').find((l) => l.startsWith(`${key}:`));
	return line?.slice(key.length + 1).trim().replace(/^['"]|['"]$/g, '');
};
/** @type {Map<string, string>} */
const POST_LASTMOD = new Map(
	LANGS.flatMap((lang) =>
		readdirSync(`./src/content/blog/${lang}`)
			.filter((file) => /\.mdx?$/.test(file))
			.map((file) => {
				const source = readFileSync(`./src/content/blog/${lang}/${file}`, 'utf8').replace(/\r\n/g, '\n');
				const block = source.match(/^---\n([\s\S]*?)\n---/)?.[1];
				if (!block) throw new Error(`Post ${lang}/${file} has no frontmatter`);
				const date = new Date(frontmatterValue(block, 'updatedDate') ?? frontmatterValue(block, 'pubDate') ?? '');
				if (Number.isNaN(date.getTime())) throw new Error(`Post ${lang}/${file} has no valid date`);
				const slug = frontmatterValue(block, 'slug') ?? file.replace(/\.mdx?$/, '');
				const prefix = lang === 'pt' ? '' : `/${lang}`;
				return /** @type {const} */ ([`${SITE}${prefix}/blog/${slug}/`, date.toISOString()]);
			}),
	),
);

// Cloudflare Pages serves the nearest 404.html up the directory tree. Astro writes only the root page
// as 404.html (the others as <lang>/404/index.html), so move the localized ones next to it.
const localizedNotFoundFiles = () => ({
	name: 'localized-404-files',
	hooks: {
		'astro:build:done': (/** @type {{ dir: URL }} */ { dir }) => {
			const root = fileURLToPath(dir);
			for (const lang of ['en', 'es']) {
				const page = `${root}${lang}/404/index.html`;
				if (!existsSync(page)) throw new Error(`Missing build output ${page}`);
				cpSync(page, `${root}${lang}/404.html`);
				rmSync(`${root}${lang}/404`, { recursive: true });
			}
		},
	},
});

// https://astro.build/config
export default defineConfig({
	site: SITE,
	// Pages are prerendered; the routes that export prerender = false (courses, API endpoints) run in the
	// Worker. Prerendering stays in Node: the share images use sharp and some pages read the file system.
	adapter: cloudflare({ prerenderEnvironment: 'node' }),
	integrations: [
		mdx(),
		sitemap({
			filter: isIndexablePage,
			serialize: (item) => {
				const lastmod = POST_LASTMOD.get(item.url);
				return lastmod ? { ...item, lastmod } : item;
			},
		}),
		localizedNotFoundFiles(),
	],
	markdown: {
		// Heading ids first, so the post links plugin can add section anchors.
		rehypePlugins: [rehypeHeadingIds, rehypePostLinks],
	},
	i18n: {
		locales: ['pt', 'en', 'es'],
		defaultLocale: 'pt',
		routing: {
			prefixDefaultLocale: false,
		},
	},
});
