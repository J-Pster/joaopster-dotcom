// The "criar-curso" skill as a zip, to install in Claude Code or upload to Claude.ai.
import type { APIRoute } from 'astro';
import { SKILL_DIR, SKILL_NAME, zipFolder, zipResponse } from '../../lib/courses/zip';

export const GET: APIRoute = () => zipResponse(zipFolder(SKILL_DIR, SKILL_NAME));
