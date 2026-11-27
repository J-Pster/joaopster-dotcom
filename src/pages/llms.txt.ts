// /llms.txt: a Markdown map of the site for language models and AI agents (llmstxt.org). Built from
// the same sources as the pages, so it never drifts: the about copy, the posts of every language and
// the courses that are open to search.
import type { APIRoute } from 'astro';
import { useTranslations, type Lang } from '../i18n/ui';
import { ABOUT_PATHS, CV_PDF_PATH } from '../lib/aboutPath';
import { blogPostPath, getPostsForLang } from '../lib/getLatestPost';
import { COURSES, SKILL_DOWNLOADS, courseUrl, howToUrl } from '../lib/courses/catalog';

const SITE = 'https://joaopster.com';
const abs = (path: string) => new URL(path, SITE).href;

const BLOG_SECTIONS: readonly { lang: Lang; heading: string; rss: string }[] = [
  { lang: 'en', heading: 'Blog (English)', rss: '/en/rss.xml' },
  { lang: 'pt', heading: 'Blog (Português)', rss: '/rss.xml' },
  { lang: 'es', heading: 'Blog (Español)', rss: '/es/rss.xml' },
];

async function blogSection({ lang, heading, rss }: (typeof BLOG_SECTIONS)[number]): Promise<string> {
  const posts = await getPostsForLang(lang);
  const items = posts.map((post) => `- [${post.data.title}](${abs(blogPostPath(lang, post))}): ${post.data.description}`);
  return [`## ${heading}`, '', ...items, `- [RSS feed](${abs(rss)})`].join('\n');
}

export const GET: APIRoute = async () => {
  const t = useTranslations('en');
  const courses = COURSES.filter((course) => course.indexing === 'index').map(
    (course) => `- [${course.title}](${abs(courseUrl(course))}) (written in Portuguese): ${course.goal}`,
  );
  const blogs = await Promise.all(BLOG_SECTIONS.map(blogSection));

  const body = [
    '# João Pster',
    '',
    `> ${t('hero.role')}. ${t('hero.sub')}`,
    '',
    'Personal site of João Pster (legal name João Pedro Viana Freitas): résumé, blog and free courses. The site is in Portuguese, English and Spanish.',
    '',
    '## About',
    '',
    `- [About (English)](${abs(ABOUT_PATHS.en)}): story, experience, skills, open source and publications`,
    `- [Sobre (Português)](${abs(ABOUT_PATHS.pt)})`,
    `- [Sobre (Español)](${abs(ABOUT_PATHS.es)})`,
    `- [Résumé (PDF)](${abs(CV_PDF_PATH)})`,
    '',
    ...blogs.flatMap((section) => [section, '']),
    '## Courses',
    '',
    ...courses,
    `- [How the courses are made](${abs(howToUrl('en'))})`,
    `- [Course-making agent skill (SKILL.md)](${abs(SKILL_DOWNLOADS.skillMd)}): the Claude skill that writes these courses, in Portuguese`,
    '',
    '## Contact',
    '',
    '- Email: joao@joaopster.com',
    '- [LinkedIn](https://www.linkedin.com/in/joaopster/)',
    '- [GitHub](https://github.com/J-Pster)',
    '',
    '## Optional',
    '',
    `- [Sitemap](${abs('/sitemap-index.xml')})`,
    '',
  ].join('\n');

  return new Response(body, { headers: { 'Content-Type': 'text/markdown; charset=utf-8' } });
};
