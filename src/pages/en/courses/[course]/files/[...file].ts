import type { APIRoute } from 'astro';
import { fileResponse } from '../../../../../lib/courses/requests';

export const prerender = false;

export const GET: APIRoute = ({ params }) => fileResponse('en', params.course, params.file);
