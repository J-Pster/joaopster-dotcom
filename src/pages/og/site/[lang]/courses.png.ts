// Share image of the courses landing of each language: /og/site/<lang>/courses.png, drawn on every
// publish (scripts/courses/publish.ts) since it counts the published courses.
import type { APIRoute } from 'astro';
import { languages, type Lang } from '../../../../i18n/ui';
import { landingOgResponse, notFound } from '../../../../lib/courses/requests';

export const prerender = false;

const isLang = (value: string | undefined): value is Lang => value !== undefined && value in languages;

export const GET: APIRoute = ({ params }) => (isLang(params.lang) ? landingOgResponse(params.lang) : notFound());
