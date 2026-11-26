// Weekly newsletter digest. .github/workflows/newsletter-digest.yml runs it every
// Sunday evening (UTC). For each language it gathers the posts not mailed yet and
// schedules one Buttondown email for Monday 07:30 in that audience's time zone,
// sent only to subscribers who signed up in that language (subscriber.metadata.lang).
// Scheduled emails can still be edited or cancelled in Buttondown before they go out.
//
// Usage:
//   npm run newsletter:digest               schedules the emails
//   npm run newsletter:digest -- --dry-run  prints them and changes nothing
// Needs BUTTONDOWN_API_KEY (Emails: read & write; Sending enabled to schedule).
import { readdir, readFile } from 'node:fs/promises';
import { join } from 'node:path';

const SITE = 'https://joaopster.com';
const API = 'https://api.buttondown.com/v1';
const DIGEST_KIND = 'weekly-digest';
const DAY_MS = 24 * 60 * 60 * 1000;
// Two weeks back, so a post dated Sunday but deployed after the Sunday run still
// makes the next digest; posts already mailed are excluded by their id.
const LOOKBACK_DAYS = 14;
const SEND_AT = { hour: 7, minute: 30 };

const plural = (n, one, many) => (n === 1 ? one : many);

const EDITIONS = {
  pt: {
    timeZone: 'America/Sao_Paulo',
    urlPrefix: '',
    intro: (n) => plural(n, 'Saiu post novo no blog esta semana:', 'Os posts da semana no blog:'),
    subject: (first, more) => `${first} e mais ${more} ${plural(more, 'post', 'posts')}`,
    readMore: 'Ler o post completo',
  },
  en: {
    // Florida (Eastern Time).
    timeZone: 'America/New_York',
    urlPrefix: '/en',
    intro: (n) => plural(n, 'A new post went up on the blog this week:', "This week's posts on the blog:"),
    subject: (first, more) => `${first} and ${more} more ${plural(more, 'post', 'posts')}`,
    readMore: 'Read the full post',
  },
  es: {
    timeZone: 'Europe/Madrid',
    urlPrefix: '/es',
    intro: (n) => plural(n, 'Salió un post nuevo en el blog esta semana:', 'Los posts de la semana en el blog:'),
    subject: (first, more) => `${first} y ${more} ${plural(more, 'post', 'posts')} más`,
    readMore: 'Leer el post completo',
  },
};

const dryRun = process.argv.includes('--dry-run');
const apiKey = process.env.BUTTONDOWN_API_KEY;
if (!apiKey) throw new Error('BUTTONDOWN_API_KEY is missing (put it in .env)');
const headers = { Authorization: `Token ${apiKey}`, 'Content-Type': 'application/json' };

async function api(url, init) {
  const response = await fetch(url.startsWith('http') ? url : `${API}${url}`, { ...init, headers });
  const body = await response.json().catch(() => ({}));
  if (!response.ok) {
    throw new Error(`Buttondown ${init?.method ?? 'GET'} ${url} -> ${response.status}: ${JSON.stringify(body)}`);
  }
  return body;
}

/** Reads `key: 'value'`, `key: "value"` or `key: value` lines from the post frontmatter. */
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

async function postsOf(lang) {
  const dir = join(process.cwd(), 'src', 'content', 'blog', lang);
  const files = (await readdir(dir)).filter((f) => /\.mdx?$/.test(f));
  return Promise.all(
    files.map(async (file) => {
      const source = await readFile(join(dir, file), 'utf8');
      const slug = file.replace(/\.mdx?$/, '');
      const pubDate = new Date(frontmatterValue(source, 'pubDate'));
      if (Number.isNaN(pubDate.getTime())) throw new Error(`${lang}/${file} has an invalid pubDate`);
      return {
        id: `${lang}/${slug}`,
        slug,
        title: frontmatterValue(source, 'title'),
        description: frontmatterValue(source, 'description'),
        pubDate,
        url: `${SITE}${EDITIONS[lang].urlPrefix}/blog/${slug}/`,
      };
    })
  );
}

/** Post ids already in a digest (draft, scheduled or sent) created in the last weeks. */
async function alreadyMailedPostIds(now) {
  const since = new Date(now.getTime() - 2 * LOOKBACK_DAYS * DAY_MS).toISOString().slice(0, 10);
  const ids = new Set();
  let page = await api(`/emails?creation_date__start=${since}`);
  for (;;) {
    for (const email of page.results ?? []) {
      if (email.status === 'deleted' || email.metadata?.kind !== DIGEST_KIND) continue;
      for (const id of email.metadata.post_ids ?? []) ids.add(id);
    }
    if (!page.next) return ids;
    page = await api(page.next);
  }
}

async function assertLive(url) {
  const response = await fetch(url, { method: 'HEAD' });
  if (!response.ok) throw new Error(`${url} answered ${response.status}; is the post deployed?`);
}

/** Minutes the time zone is ahead of UTC at the given instant. */
function offsetMinutes(instant, timeZone) {
  const parts = Object.fromEntries(
    new Intl.DateTimeFormat('en-US', {
      timeZone,
      hourCycle: 'h23',
      year: 'numeric',
      month: '2-digit',
      day: '2-digit',
      hour: '2-digit',
      minute: '2-digit',
    })
      .formatToParts(instant)
      .map((p) => [p.type, p.value])
  );
  const wallClockAsUtc = Date.UTC(+parts.year, +parts.month - 1, +parts.day, +parts.hour, +parts.minute);
  return (wallClockAsUtc - Math.floor(instant.getTime() / 60000) * 60000) / 60000;
}

/** The instant that reads `hour:minute` on the wall clock of `timeZone` on the given UTC calendar day. */
function wallClockToInstant(day, { hour, minute }, timeZone) {
  const naive = Date.UTC(day.getUTCFullYear(), day.getUTCMonth(), day.getUTCDate(), hour, minute);
  const firstGuess = naive - offsetMinutes(new Date(naive), timeZone) * 60000;
  // Second pass settles days when daylight saving changes between the two instants.
  return new Date(naive - offsetMinutes(new Date(firstGuess), timeZone) * 60000);
}

/** Next Monday strictly after today (UTC calendar). */
function nextMonday(now) {
  const daysAhead = (8 - now.getUTCDay()) % 7 || 7;
  return new Date(Date.UTC(now.getUTCFullYear(), now.getUTCMonth(), now.getUTCDate() + daysAhead));
}

function digestBody(edition, posts, campaign) {
  const sections = posts.map((post) => {
    const tracked = `${post.url}?utm_source=newsletter&utm_medium=email&utm_campaign=${campaign}`;
    return [
      `[![${post.title}](${SITE}/og/${post.id}.png)](${tracked})`,
      '',
      `## [${post.title}](${tracked})`,
      '',
      post.description,
      '',
      `**[${edition.readMore} →](${tracked})**`,
    ].join('\n');
  });
  // Without this marker Buttondown may treat the body as HTML and show the Markdown raw.
  return ['<!-- buttondown-editor-mode: plaintext -->', edition.intro(posts.length), '', sections.join('\n\n---\n\n')].join('\n');
}

const now = new Date();
const monday = nextMonday(now);
const campaign = `digest-${monday.toISOString().slice(0, 10)}`;
const mailed = await alreadyMailedPostIds(now);
const oldest = now.getTime() - LOOKBACK_DAYS * DAY_MS;

for (const [lang, edition] of Object.entries(EDITIONS)) {
  const posts = (await postsOf(lang))
    .filter((p) => p.pubDate.getTime() <= now.getTime() && p.pubDate.getTime() >= oldest && !mailed.has(p.id))
    .sort((a, b) => b.pubDate.getTime() - a.pubDate.getTime());
  if (posts.length === 0) {
    console.log(`${lang}: no new posts, nothing scheduled`);
    continue;
  }
  for (const post of posts) await assertLive(post.url);

  const sendAt = wallClockToInstant(monday, SEND_AT, edition.timeZone);
  if (sendAt <= now) throw new Error(`${lang}: send time ${sendAt.toISOString()} is not in the future`);
  const subject = posts.length === 1 ? posts[0].title : edition.subject(posts[0].title, posts.length - 1);
  const email = {
    subject,
    body: digestBody(edition, posts, campaign),
    status: 'scheduled',
    publish_date: sendAt.toISOString(),
    metadata: { kind: DIGEST_KIND, lang, post_ids: posts.map((p) => p.id) },
    filters: {
      predicate: 'and',
      groups: [],
      filters: [{ field: 'subscriber.metadata.lang', operator: 'equals', value: lang }],
    },
  };

  const local = sendAt.toLocaleString('en-GB', { timeZone: edition.timeZone, dateStyle: 'medium', timeStyle: 'short' });
  const summary = `${lang}: "${subject}" at ${local} ${edition.timeZone} (${sendAt.toISOString()}), posts: ${email.metadata.post_ids.join(', ')}`;
  if (dryRun) {
    console.log(`[dry-run] ${summary}\n${email.body}\n`);
    continue;
  }
  const created = await api('/emails', { method: 'POST', body: JSON.stringify(email) });
  console.log(`${summary}, id ${created.id}`);
}
if (!dryRun) console.log('Review or cancel the scheduled emails at https://buttondown.com (Emails > Scheduled).');
