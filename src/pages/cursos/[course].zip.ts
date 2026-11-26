// The whole course as a zip, ready to open as an Obsidian vault (or read in any Markdown editor).
import type { APIRoute, GetStaticPaths } from 'astro';
import { COURSES, courseBySlug } from '../../lib/courses/catalog';
import { getVault } from '../../lib/courses/vault';
import { zipFolder, zipResponse } from '../../lib/courses/zip';

export const getStaticPaths: GetStaticPaths = () => COURSES.map((c) => ({ params: { course: c.slug } }));

export const GET: APIRoute = ({ params }) => {
  const course = courseBySlug(params.course as string);
  return zipResponse(zipFolder(getVault(course.slug).root, course.vaultName));
};
