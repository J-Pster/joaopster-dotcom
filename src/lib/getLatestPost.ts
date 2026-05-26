import { getCollection, type CollectionEntry } from 'astro:content';
import type { Lang } from '../i18n/ui';

const fallbackLang: Lang = 'pt';

const langOf = (post: CollectionEntry<'blog'>) => post.id.slice(0, post.id.indexOf('/'));
const slugOf = (post: CollectionEntry<'blog'>) => post.id.slice(post.id.indexOf('/') + 1);

const readTime = (body: string | undefined) =>
  Math.max(1, Math.round((body?.trim().split(/\s+/).length ?? 0) / 200));

// Posts to show for a language: the post in that language when it exists,
// otherwise the Portuguese fallback. Sorted newest first.
export async function getPostsForLang(lang: Lang): Promise<CollectionEntry<'blog'>[]> {
  const all = await getCollection('blog');
  const slugs = [...new Set(all.map(slugOf))];
  return slugs
    .map(
      (slug) =>
        all.find((p) => langOf(p) === lang && slugOf(p) === slug) ??
        all.find((p) => langOf(p) === fallbackLang && slugOf(p) === slug)
    )
    .filter((p): p is CollectionEntry<'blog'> => p !== undefined)
    .sort((a, b) => b.data.pubDate.valueOf() - a.data.pubDate.valueOf());
}

export interface LatestPost {
  title: string;
  description: string;
  pubDate: Date;
  readTime: number;
  href: string;
}

export async function getLatestPost(lang: Lang): Promise<LatestPost | undefined> {
  const [latest] = await getPostsForLang(lang);
  if (!latest) return undefined;

  const prefix = lang === 'pt' ? '' : `/${lang}`;
  return {
    title: latest.data.title,
    description: latest.data.description,
    pubDate: latest.data.pubDate,
    readTime: readTime(latest.body),
    href: `${prefix}/blog/${slugOf(latest)}/`,
  };
}
