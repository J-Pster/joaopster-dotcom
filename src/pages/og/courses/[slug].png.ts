// Share image of each course, used by its home and every lesson: /og/courses/<slug>.png.
import type { APIRoute, GetStaticPaths } from 'astro';
import { COURSES, type CourseInfo } from '../../../lib/courses/catalog';
import { renderOgImage } from '../../../lib/og/renderOgImage';
import { courseCard } from '../../../lib/og/siteCards';

export const getStaticPaths = (() =>
	COURSES.map((course) => ({ params: { slug: course.slug }, props: { course } }))) satisfies GetStaticPaths;

export const GET: APIRoute<{ course: CourseInfo }> = async ({ props: { course } }) => {
	const png = await renderOgImage(courseCard(course));
	return new Response(new Uint8Array(png), { headers: { 'Content-Type': 'image/png' } });
};
