import { getCollection, type CollectionEntry } from 'astro:content';
import { languages, type Lang } from '../i18n/ui';

const fallbackLang: Lang = 'pt';

// Posts live in src/content/blog/<lang>/, so the id prefix is the language.
export const langOf = (post: CollectionEntry<'blog'>): Lang => {
  const folder = post.id.slice(0, post.id.indexOf('/'));
  if (!(folder in languages)) throw new Error(`Blog post "${post.id}" is not inside a language folder`);
  return folder as Lang;
};
const slugOf = (post: CollectionEntry<'blog'>) => post.id.slice(post.id.indexOf('/') + 1);

export const readTime = (body: string | undefined) =>
  Math.max(1, Math.round((body?.trim().split(/\s+/).length ?? 0) / 200));

// Share image emitted by src/pages/og/[...slug].png.ts.
export const ogImagePathOf = (post: CollectionEntry<'blog'>) => `/og/${post.id}.png`;

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

export async function getRecentPosts(lang: Lang, count: number): Promise<LatestPost[]> {
  const prefix = lang === 'pt' ? '' : `/${lang}`;
  return (await getPostsForLang(lang)).slice(0, count).map((post) => ({
    title: post.data.title,
    description: post.data.description,
    pubDate: post.data.pubDate,
    readTime: readTime(post.body),
    href: `${prefix}/blog/${slugOf(post)}/`,
  }));
}
