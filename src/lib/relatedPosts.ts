import type { CollectionEntry } from 'astro:content';
import type { Lang } from '../i18n/ui';
import { blogPostPath, getPostsForLang, keyOf, readTime } from './getLatestPost';

export interface RelatedPost {
  readonly title: string;
  readonly description: string;
  readonly pubDate: Date;
  readonly readTime: number;
  readonly href: string;
}

const sharedTags = (a: CollectionEntry<'blog'>, b: CollectionEntry<'blog'>) =>
  b.data.tags.filter((topic) => a.data.tags.includes(topic)).length;

/** Other posts in the same language, most shared tags first, then newest. */
export async function getRelatedPosts(current: CollectionEntry<'blog'>, lang: Lang, count: number): Promise<RelatedPost[]> {
  const currentKey = keyOf(current);
  return (await getPostsForLang(lang))
    .filter((post) => keyOf(post) !== currentKey)
    .map((post) => ({ post, score: sharedTags(current, post) }))
    .sort((a, b) => b.score - a.score || b.post.data.pubDate.valueOf() - a.post.data.pubDate.valueOf())
    .slice(0, count)
    .map(({ post }) => ({
      title: post.data.title,
      description: post.data.description,
      pubDate: post.data.pubDate,
      readTime: readTime(post.body),
      href: blogPostPath(lang, post),
    }));
}
