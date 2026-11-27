import { getCollection, type CollectionEntry } from 'astro:content';
import { languages, type Lang } from '../i18n/ui';

const fallbackLang: Lang = 'pt';

// Posts live in src/content/blog/<lang>/, so the id prefix is the language.
export const langOf = (post: CollectionEntry<'blog'>): Lang => {
  const folder = post.id.slice(0, post.id.indexOf('/'));
  if (!(folder in languages)) throw new Error(`Blog post "${post.id}" is not inside a language folder`);
  return folder as Lang;
};
// The file name: the key shared by the translations of one post.
export const keyOf = (post: CollectionEntry<'blog'>) => post.id.slice(post.id.indexOf('/') + 1);
// The address segment of the post in its own language: the frontmatter slug, or the key.
export const slugOf = (post: CollectionEntry<'blog'>) => post.data.slug ?? keyOf(post);

const prefixOf = (lang: Lang) => (lang === 'pt' ? '' : `/${lang}`);
export const blogPostPath = (lang: Lang, post: CollectionEntry<'blog'>) => `${prefixOf(lang)}/blog/${slugOf(post)}/`;

// The page of a post in every language, for hreflang and the language switcher. A language without
// its own translation shows the Portuguese post (see getPostsForLang), so it points there.
export async function getBlogAlternates(post: CollectionEntry<'blog'>): Promise<Record<Lang, string>> {
  const all = await getCollection('blog');
  const key = keyOf(post);
  const pathIn = (lang: Lang) => {
    const own = all.find((p) => langOf(p) === lang && keyOf(p) === key);
    const shown = own ?? all.find((p) => langOf(p) === fallbackLang && keyOf(p) === key);
    if (!shown) throw new Error(`Blog post "${key}" has no Portuguese version`);
    return blogPostPath(lang, shown);
  };
  return { pt: pathIn('pt'), en: pathIn('en'), es: pathIn('es') };
}

export const readTime = (body: string | undefined) =>
  Math.max(1, Math.round((body?.trim().split(/\s+/).length ?? 0) / 200));

// Share image emitted by src/pages/og/[...slug].png.ts.
export const ogImagePathOf = (post: CollectionEntry<'blog'>) => `/og/${langOf(post)}/${slugOf(post)}.png`;

// Posts to show for a language: the post in that language when it exists,
// otherwise the Portuguese fallback. Sorted newest first.
export async function getPostsForLang(lang: Lang): Promise<CollectionEntry<'blog'>[]> {
  const all = await getCollection('blog');
  const keys = [...new Set(all.map(keyOf))];
  return keys
    .map(
      (key) =>
        all.find((p) => langOf(p) === lang && keyOf(p) === key) ??
        all.find((p) => langOf(p) === fallbackLang && keyOf(p) === key)
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
  return (await getPostsForLang(lang)).slice(0, count).map((post) => ({
    title: post.data.title,
    description: post.data.description,
    pubDate: post.data.pubDate,
    readTime: readTime(post.body),
    href: blogPostPath(lang, post),
  }));
}
