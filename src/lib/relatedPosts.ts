import type { CollectionEntry } from 'astro:content';
import type { Lang } from '../i18n/ui';
import { getPostsForLang, readTime } from './getLatestPost';

export interface RelatedPost {
  readonly title: string;
  readonly description: string;
  readonly pubDate: Date;
  readonly readTime: number;
  readonly href: string;
}

const slugOf = (id: string) => id.slice(id.indexOf('/') + 1);

const sharedTags = (a: CollectionEntry<'blog'>, b: CollectionEntry<'blog'>) => {
  const tags = new Set(a.data.tags.map((t) => t.toLowerCase()));
  return b.data.tags.filter((t) => tags.has(t.toLowerCase())).length;
};

/** Other posts in the same language, most shared tags first, then newest. */
export async function getRelatedPosts(current: CollectionEntry<'blog'>, lang: Lang, count: number): Promise<RelatedPost[]> {
  const prefix = lang === 'pt' ? '' : `/${lang}`;
  const currentSlug = slugOf(current.id);
  return (await getPostsForLang(lang))
    .filter((post) => slugOf(post.id) !== currentSlug)
    .map((post) => ({ post, score: sharedTags(current, post) }))
    .sort((a, b) => b.score - a.score || b.post.data.pubDate.valueOf() - a.post.data.pubDate.valueOf())
    .slice(0, count)
    .map(({ post }) => ({
      title: post.data.title,
      description: post.data.description,
      pubDate: post.data.pubDate,
      readTime: readTime(post.body),
      href: `${prefix}/blog/${slugOf(post.id)}/`,
    }));
}
