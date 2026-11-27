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
			// Transform string to Date object
			pubDate: z.coerce.date(),
			updatedDate: z.coerce.date().optional(),
			heroImage: z.optional(image()),
			// Topic ids from lib/blog/topics.ts, one to four per post.
			tags: z.array(z.enum(TOPIC_IDS)).min(1).max(4),
		}),
});

export const collections = { blog };
