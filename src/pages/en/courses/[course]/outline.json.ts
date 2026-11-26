import type { APIRoute, GetStaticPaths } from 'astro';
import { coursePaths, outlineResponse } from '../../../../lib/courses/routes';

export const getStaticPaths: GetStaticPaths = () => coursePaths('en');

export const GET: APIRoute = ({ params }) => outlineResponse(params.course as string);
