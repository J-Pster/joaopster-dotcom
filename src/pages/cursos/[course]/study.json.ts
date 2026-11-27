import type { APIRoute } from 'astro';
import { studyResponse } from '../../../lib/courses/requests';

export const prerender = false;

export const GET: APIRoute = ({ params }) => studyResponse('pt', params.course);
