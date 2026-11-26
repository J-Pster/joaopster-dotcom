// The skill's two main Markdown files, downloadable one by one.
import type { APIRoute, GetStaticPaths } from 'astro';
import { readFileSync } from 'node:fs';
import { join } from 'node:path';
import { SKILL_DIR } from '../../../lib/courses/zip';

const FILES = { 'SKILL.md': 'SKILL.md', 'guia-de-escrita.md': 'referencias/guia-de-escrita.md' } as const;

export const getStaticPaths: GetStaticPaths = () => Object.keys(FILES).map((file) => ({ params: { file } }));

export const GET: APIRoute = ({ params }) => {
  const path = FILES[params.file as keyof typeof FILES];
  return new Response(readFileSync(join(SKILL_DIR, path)), { headers: { 'Content-Type': 'text/markdown; charset=utf-8' } });
};
