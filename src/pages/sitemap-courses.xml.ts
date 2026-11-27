// /sitemap-courses.xml: the course pages, which are drawn on request and so missing from the build's
// sitemap (sitemap-index.xml). Same rules the build used for them: glossary terms (thin pages) and the
// courses marked noindex stay out, and so does a language's landing while it has no course.
import type { APIRoute } from 'astro';
import { coursesHome, glossaryUrl, hasStudyPages, LANGS, mistakesUrl, reviewUrl } from '../lib/courses/catalog';
import { coursesIn, loadCourse } from '../lib/courses/store';

export const prerender = false;

const SITE = 'https://joaopster.com';

const escapeXml = (text: string) => text.replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;');

export const GET: APIRoute = async () => {
  const paths: string[] = [];
  for (const lang of LANGS) {
    const courses = await coursesIn(lang);
    if (courses.length > 0) paths.push(coursesHome(lang));
    for (const entry of courses.filter((c) => c.course.indexing === 'index')) {
      const { view } = await loadCourse(entry);
      paths.push(...view.notes.filter((note) => note.kind !== 'glossary').map((note) => note.url));
      if (view.glossary.length > 0) paths.push(glossaryUrl(view.course));
      if (hasStudyPages(view.course)) paths.push(mistakesUrl(view.course), reviewUrl(view.course));
    }
  }
  const body = [
    '<?xml version="1.0" encoding="UTF-8"?>',
    '<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">',
    ...paths.map((path) => `<url><loc>${escapeXml(new URL(path, SITE).href)}</loc></url>`),
    '</urlset>',
  ].join('\n');
  return new Response(body, { headers: { 'Content-Type': 'application/xml; charset=utf-8', 'Cache-Control': 'public, max-age=3600' } });
};
