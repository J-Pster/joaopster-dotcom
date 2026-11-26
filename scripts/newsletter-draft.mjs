// Creates one Buttondown DRAFT per language for a published blog post.
// Each draft goes only to subscribers who signed up on a page in that language
// (subscriber.metadata.lang). Nothing is sent: review and send it in Buttondown.
//
// Usage (after the post is live on joaopster.com):
//   npm run newsletter:draft -- <slug>
// Needs BUTTONDOWN_API_KEY in .env or in the environment.
import { readFile } from 'node:fs/promises';
import { join } from 'node:path';

const SITE = 'https://joaopster.com';
const API = 'https://api.buttondown.com/v1';
const LANGS = ['pt', 'en', 'es'];
const READ_MORE = { pt: 'Ler o post completo', en: 'Read the full post', es: 'Leer el post completo' };

const slug = process.argv[2];
if (!slug) throw new Error('Usage: npm run newsletter:draft -- <slug>');
const apiKey = process.env.BUTTONDOWN_API_KEY;
if (!apiKey) throw new Error('BUTTONDOWN_API_KEY is missing (put it in .env)');

const headers = { Authorization: `Token ${apiKey}`, 'Content-Type': 'application/json' };

/** Reads `key: 'value'` or `key: "value"` lines from the post frontmatter. */
function frontmatterValue(source, key) {
  const block = source.match(/^---\r?\n([\s\S]*?)\r?\n---/);
  if (!block) throw new Error('Post has no frontmatter');
  const line = block[1].split(/\r?\n/).find((l) => l.startsWith(`${key}:`));
  if (!line) throw new Error(`Frontmatter has no "${key}"`);
  const raw = line.slice(key.length + 1).trim();
  if (raw.startsWith("'")) return raw.slice(1, -1).replaceAll("''", "'");
  if (raw.startsWith('"')) return JSON.parse(raw);
  return raw;
}

async function readPost(lang) {
  const path = join(process.cwd(), 'src', 'content', 'blog', lang, `${slug}.md`);
  const source = await readFile(path, 'utf8').catch((err) => {
    if (err.code === 'ENOENT') return null;
    throw err;
  });
  if (source === null) return null;
  return { title: frontmatterValue(source, 'title'), description: frontmatterValue(source, 'description') };
}

async function api(path, init) {
  const response = await fetch(`${API}${path}`, { ...init, headers });
  const body = await response.json().catch(() => ({}));
  if (!response.ok) {
    throw new Error(`Buttondown ${init?.method ?? 'GET'} ${path} -> ${response.status}: ${JSON.stringify(body)}`);
  }
  return body;
}

async function assertLive(url) {
  const response = await fetch(url, { method: 'HEAD' });
  if (!response.ok) throw new Error(`${url} answered ${response.status}; deploy the post before drafting the email`);
}

async function draftFor(lang) {
  const post = await readPost(lang);
  if (!post) return `${lang}: no post in this language, skipped`;

  const existing = await api(`/emails?subject=${encodeURIComponent(post.title)}`);
  const duplicate = existing.results?.find((e) => e.status !== 'deleted');
  if (duplicate) return `${lang}: email "${post.title}" already exists (${duplicate.status}), skipped`;

  const postId = `${lang}/${slug}`;
  const url = `${SITE}${lang === 'pt' ? '' : `/${lang}`}/blog/${slug}/`;
  await assertLive(url);
  const tracked = `${url}?utm_source=newsletter&utm_medium=email&utm_campaign=${slug}`;
  const image = `${SITE}/og/${postId}.png`;

  const body = [
    `[![${post.title}](${image})](${tracked})`,
    '',
    post.description,
    '',
    `**[${READ_MORE[lang]} →](${tracked})**`,
  ].join('\n');

  const email = await api('/emails', {
    method: 'POST',
    body: JSON.stringify({
      subject: post.title,
      body,
      // Buttondown sends immediately unless the status is explicitly "draft".
      status: 'draft',
      canonical_url: url,
      metadata: { post_id: postId },
      filters: {
        predicate: 'and',
        groups: [],
        filters: [{ field: 'subscriber.metadata.lang', operator: 'equals', value: lang }],
      },
    }),
  });
  return `${lang}: draft created (id ${email.id})`;
}

for (const lang of LANGS) console.log(await draftFor(lang));
console.log('Review and send the drafts at https://buttondown.com (Emails > Drafts).');
