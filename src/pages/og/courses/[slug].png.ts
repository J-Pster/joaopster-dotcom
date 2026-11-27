// Share image of each course, used by its home and every lesson: /og/courses/<slug>.png, drawn when the
// course is published (scripts/courses/publish.ts).
import type { APIRoute } from 'astro';
import { courseOgResponse } from '../../../lib/courses/requests';

export const prerender = false;

export const GET: APIRoute = ({ params }) => courseOgResponse(params.slug);
