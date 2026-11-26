// Course outline (modules and lessons with their URLs) for the client-side progress widget.
import type { APIRoute, GetStaticPaths } from 'astro';
import { COURSES } from '../../../lib/courses/catalog';
import { getVault } from '../../../lib/courses/vault';

export const getStaticPaths: GetStaticPaths = () => COURSES.map((c) => ({ params: { course: c.slug } }));

export const GET: APIRoute = ({ params }) => {
  const vault = getVault(params.course as string);
  const outline = {
    modules: vault.modules.map((m) => ({
      number: m.number,
      title: m.title,
      url: m.note.url,
      lessons: m.lessons.map((l) => ({ url: l.url, title: l.title })),
    })),
  };
  return new Response(JSON.stringify(outline), { headers: { 'Content-Type': 'application/json' } });
};
