import type { APIRoute } from 'astro';
import { outlineResponse } from '../../../../lib/courses/requests';

export const prerender = false;

export const GET: APIRoute = ({ params }) => outlineResponse('en', params.course);
