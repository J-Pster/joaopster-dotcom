import type { APIRoute } from 'astro';
import { zipResponse } from '../../../lib/courses/requests';

export const prerender = false;

export const GET: APIRoute = ({ params }) => zipResponse('es', params.course);
