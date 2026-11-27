// The post keys the view counter accepts (functions/api/views.ts reads this file), one per post
// whatever its languages: the file name shared by its translations.
import type { APIRoute } from 'astro';
import { getCollection } from 'astro:content';
import { keyOf } from '../lib/getLatestPost';

export const GET: APIRoute = async () => {
  const keys = [...new Set((await getCollection('blog')).map(keyOf))].sort();
  return Response.json(keys);
};
