import type { APIRoute, GetStaticPaths } from 'astro';
import { filePaths, fileResponse } from '../../../../../lib/courses/routes';

export const getStaticPaths: GetStaticPaths = () => filePaths('en');

export const GET: APIRoute = ({ props }) => fileResponse(props.absPath as string);
