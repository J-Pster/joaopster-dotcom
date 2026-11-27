import { defineCollection } from 'astro:content';
import { glob } from 'astro/loaders';
import { z } from 'astro/zod';
import { TOPIC_IDS } from './lib/blog/topics';

const blog = defineCollection({
	// Load Markdown and MDX files in the `src/content/blog/` directory.
	// The id is the file path (<lang>/<translation key>). Without generateId, a `slug` in the frontmatter
	// would replace the whole id and drop the language folder.
	loader: glob({
		base: './src/content/blog',
		pattern: '**/*.{md,mdx}',
		generateId: ({ entry }) => entry.replace(/\.(md|mdx)$/, ''),
	}),
	// Type-check frontmatter using a schema
	schema: ({ image }) =>
		z.object({
			title: z.string(),
			// Address of the post in its language (/blog/<slug>/). The file name is the key shared by the
			// translations; the slug defaults to it.
			slug: z
				.string()
				.regex(/^[a-z0-9]+(-[a-z0-9]+)*$/)
				.optional(),
			description: z.string(),
			// The real publish moment. The blog lists posts by it, so a date in the future (usually a UTC
			// clock read with a hand-written -03:00 offset) would pin the post above newer ones. The build
			// rejects it; 10 minutes of slack covers the gap between writing the date and the deploy build.
			pubDate: z.coerce
				.date()
				.refine((date) => date.getTime() <= Date.now() + 10 * 60 * 1000, {
					message: 'pubDate is in the future. Use the real local publish time with its offset.',
				}),
			updatedDate: z.coerce.date().optional(),
			heroImage: z.optional(image()),
			// Topic ids from lib/blog/topics.ts, one to four per post.
			tags: z.array(z.enum(TOPIC_IDS)).min(1).max(4),
		}),
});

export const collections = { blog };
