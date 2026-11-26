import type { APIRoute, GetStaticPaths } from 'astro';
import { courseZipResponse, coursePaths } from '../../../lib/courses/routes';

export const getStaticPaths: GetStaticPaths = () => coursePaths('es');

export const GET: APIRoute = ({ params }) => courseZipResponse(params.course as string);
