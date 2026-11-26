import type { APIRoute, GetStaticPaths } from 'astro';
import { studyPaths, studyResponse } from '../../../../lib/courses/routes';

export const getStaticPaths: GetStaticPaths = () => studyPaths('en');

export const GET: APIRoute = ({ params }) => studyResponse(params.course as string);
