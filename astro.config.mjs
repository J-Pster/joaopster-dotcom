// @ts-check

import mdx from '@astrojs/mdx';
import sitemap from '@astrojs/sitemap';
import { rehypeHeadingIds } from '@astrojs/markdown-remark';
import { defineConfig, fontProviders } from 'astro/config';
import { rehypePostLinks } from './src/lib/markdown/rehypePostLinks.ts';

// https://astro.build/config
export default defineConfig({
	site: 'https://joaopster.com',
	integrations: [mdx(), sitemap()],
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
	fonts: [
		{
			provider: fontProviders.local(),
			name: 'Atkinson',
			cssVariable: '--font-atkinson',
			fallbacks: ['sans-serif'],
			options: {
				variants: [
					{
						src: ['./src/assets/fonts/atkinson-regular.woff'],
						weight: 400,
						style: 'normal',
						display: 'swap',
					},
					{
						src: ['./src/assets/fonts/atkinson-bold.woff'],
						weight: 700,
						style: 'normal',
						display: 'swap',
					},
				],
			},
		},
	],
});
