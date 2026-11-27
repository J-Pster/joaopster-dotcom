// @ts-check

import mdx from '@astrojs/mdx';
import sitemap from '@astrojs/sitemap';
import { rehypeHeadingIds } from '@astrojs/markdown-remark';
import { cpSync, existsSync, rmSync } from 'node:fs';
import { fileURLToPath } from 'node:url';
import { defineConfig } from 'astro/config';
import { rehypePostLinks } from './src/lib/markdown/rehypePostLinks.ts';
import { LANGS, coursesHome, coursesIn } from './src/lib/courses/catalog.ts';

// Glossary term pages (/cursos/<course>/glossario/<term>/ and the en and es equivalents) are thin
// pages kept out of search; the glossary index (.../glossario/) stays. The 404 pages are not content.
const GLOSSARY_TERM = /\/(glossario|glossary|glosario)\/[^/]+\/?$/;
const NOT_FOUND_PAGE = /\/404\/?$/;
// A courses landing of a language with no course yet renders noindex (CoursesLanding), so it stays out too.
const SITE = 'https://joaopster.com';
const EMPTY_COURSE_LANDINGS = new Set(
	LANGS.filter((lang) => coursesIn(lang).length === 0).map((lang) => new URL(coursesHome(lang), SITE).href),
);
const isIndexablePage = (/** @type {string} */ page) =>
	!GLOSSARY_TERM.test(page) && !NOT_FOUND_PAGE.test(page) && !EMPTY_COURSE_LANDINGS.has(page);

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
	integrations: [mdx(), sitemap({ filter: isIndexablePage }), localizedNotFoundFiles()],
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
