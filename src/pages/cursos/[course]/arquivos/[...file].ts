// Files that ship with a course (spreadsheets, images, text) and that notes link to.
import type { APIRoute, GetStaticPaths } from 'astro';
import { readFileSync } from 'node:fs';
import { COURSES } from '../../../../lib/courses/catalog';
import { getVault } from '../../../../lib/courses/vault';

export const getStaticPaths: GetStaticPaths = () =>
  COURSES.flatMap((course) => {
    const vault = getVault(course.slug);
    const prefix = `${vault.home.url}arquivos/`;
    return vault.assets.map((asset) => ({
      params: { course: course.slug, file: asset.url.slice(prefix.length) },
      props: { absPath: asset.absPath },
    }));
  });

export const GET: APIRoute = ({ props }) => new Response(readFileSync(props.absPath as string));
