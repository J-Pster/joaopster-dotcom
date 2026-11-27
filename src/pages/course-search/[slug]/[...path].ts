// The Pagefind index of each course, published with it: /course-search/<slug>/pagefind.js and the rest.
import type { APIRoute } from 'astro';
import { searchFileResponse } from '../../../lib/courses/requests';

export const prerender = false;

export const GET: APIRoute = ({ params }) => searchFileResponse(params.slug, params.path);
