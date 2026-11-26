// Renders course notes (Obsidian-flavoured Markdown) to HTML with Astro's own Markdown pipeline.
// The remark plugin below adds what Obsidian has and CommonMark lacks:
// - [[wikilinks]] (with #heading, #^block and |alias), resolved against the vault;
// - relative .md links (the older courses), rewritten to the site URLs;
// - callouts (> [!tip] Title, foldable with - or +);
// - block ids (^id) as anchors, for [[Note#^id]] links;
// - ![[Progress.base]] embeds, replaced by the reader's progress widget;
// - mermaid code blocks, left as <pre class="mermaid"> for the client to draw.
import { createMarkdownProcessor, rehypeHeadingIds, type MarkdownHeading } from '@astrojs/markdown-remark';
import { slug } from 'github-slugger';
import type { Blockquote, Link, Paragraph, PhrasingContent, Root, RootContent, Text } from 'mdast';
import { pathToFileURL } from 'node:url';
import { SKIP, visit } from 'unist-util-visit';
import { rehypePostLinks } from '../markdown/rehypePostLinks';
import { courseText } from './i18n';
import { extractQuizzes, type QuizQuestion } from './quiz';
import type { Note, Vault } from './vault';

export interface RenderedNote {
  readonly html: string;
  readonly headings: readonly MarkdownHeading[];
  /** The note's quiz questions (empty when it has none). */
  readonly quiz: readonly QuizQuestion[];
}

const WIKILINK = /(!?)\[\[([^\]\n]+?)\]\]/g;
const CALLOUT_HEAD = /^\[!([a-z]+)\]([-+]?)[ \t]*/i;
const BLOCK_ID_ALONE = /^\^([a-z0-9-]+)$/i;
const BLOCK_ID_TRAILING = /\s\^([a-z0-9-]+)\s*$/i;
const BASE_EMBED = /^!\[\[[^\]]+\.base\]\]$/;

const blockAnchor = (id: string) => `bloco-${id}`;
const escapeHtml = (text: string) =>
  text.replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;').replace(/"/g, '&quot;');

const setId = (node: RootContent, id: string) => {
  node.data = { ...node.data, hProperties: { ...(node.data?.hProperties ?? {}), id } };
};

interface LinkTarget {
  readonly target: string;
  readonly fragment: string | undefined;
  readonly alias: string | undefined;
}

function parseWikilink(inner: string): LinkTarget {
  const unescaped = inner.replace(/\\\|/g, '|');
  const pipe = unescaped.indexOf('|');
  const ref = pipe === -1 ? unescaped : unescaped.slice(0, pipe);
  const alias = pipe === -1 ? undefined : unescaped.slice(pipe + 1).trim();
  const hash = ref.indexOf('#');
  return {
    target: (hash === -1 ? ref : ref.slice(0, hash)).trim(),
    fragment: hash === -1 ? undefined : ref.slice(hash + 1).trim(),
    alias: alias || undefined,
  };
}

const fragmentHref = (fragment: string | undefined): string => {
  if (!fragment) return '';
  return fragment.startsWith('^') ? `#${blockAnchor(fragment.slice(1))}` : `#${slug(fragment)}`;
};

const linkNode = (url: string, text: string, className: string): Link => ({
  type: 'link',
  url,
  children: [{ type: 'text', value: text }],
  data: { hProperties: { className: [className] } },
});

function missingNode(text: string): PhrasingContent {
  return {
    type: 'emphasis',
    children: [{ type: 'text', value: text }],
    data: { hName: 'span', hProperties: { className: ['wikilink', 'wikilink--missing'] } },
  };
}

// Splits one text node into text and link nodes, one per [[wikilink]].
function expandWikilinks(text: Text, note: Note, vault: Vault, missing: Set<string>): PhrasingContent[] {
  const out: PhrasingContent[] = [];
  let last = 0;
  for (const match of text.value.matchAll(WIKILINK)) {
    const index = match.index ?? 0;
    if (index > last) out.push({ type: 'text', value: text.value.slice(last, index) });
    last = index + match[0].length;
    const link = parseWikilink(match[2]);
    const label = link.alias ?? (link.fragment && !link.target ? link.fragment.replace(/^\^/, '') : link.target);
    if (!link.target) {
      out.push(linkNode(fragmentHref(link.fragment), label, 'wikilink'));
      continue;
    }
    const target = vault.resolveName(link.target);
    if (!target) {
      missing.add(link.target);
      out.push(missingNode(label));
      continue;
    }
    const url = target.id === note.id ? fragmentHref(link.fragment) : `${target.url}${fragmentHref(link.fragment)}`;
    // A bare [[05.02 - Arquivo]] reads better as the note's heading than as its file name.
    const shown = link.alias ?? (link.fragment || target.kind === 'glossary' ? label : target.title);
    out.push(linkNode(url || '#', shown, 'wikilink'));
  }
  if (last === 0) return [text];
  if (last < text.value.length) out.push({ type: 'text', value: text.value.slice(last) });
  return out;
}

// Rewrites a relative link to a .md file (or a course file) to its site URL.
function rewriteRelativeLink(link: Link, note: Note, vault: Vault, missing: Set<string>): void {
  if (/^([a-z][a-z0-9+.-]*:|#|\/)/i.test(link.url)) return;
  const [path, fragment] = link.url.split('#');
  const asset = vault.resolveAsset(note, path);
  if (asset) {
    link.url = asset.url;
    return;
  }
  const target = vault.resolveRelative(note, path);
  if (!target) {
    // A link that leaves the vault (the author's folder of all courses) has no page here.
    missing.add(link.url);
    link.data = { ...link.data, hName: 'span', hProperties: { className: ['wikilink', 'wikilink--missing'] } };
    return;
  }
  link.url = `${target.url}${fragment ? `#${slug(decodeURIComponent(fragment))}` : ''}`;
  link.data = { ...link.data, hProperties: { className: ['wikilink'] } };
}

// "> [!tip]- Title" + body becomes <details class="callout callout--tip"><summary>Title</summary>body</details>.
function toCallout(quote: Blockquote, titles: Readonly<Record<string, string>>): RootContent | undefined {
  const first = quote.children[0];
  if (first?.type !== 'paragraph') return undefined;
  const head = first.children[0];
  if (head?.type !== 'text') return undefined;
  const match = head.value.match(CALLOUT_HEAD);
  if (!match) return undefined;
  const type = match[1].toLowerCase();
  const fold = match[2];

  // The title is the rest of the first line; whatever follows the line break is body text.
  const rest: PhrasingContent[] = [{ ...head, value: head.value.slice(match[0].length) }, ...first.children.slice(1)];
  const title: PhrasingContent[] = [];
  const bodyStart: PhrasingContent[] = [];
  for (const child of rest) {
    if (bodyStart.length > 0) {
      bodyStart.push(child);
      continue;
    }
    if (child.type === 'text' && child.value.includes('\n')) {
      const cut = child.value.indexOf('\n');
      title.push({ type: 'text', value: child.value.slice(0, cut) });
      bodyStart.push({ type: 'text', value: child.value.slice(cut + 1) });
      continue;
    }
    if (child.type === 'break') {
      bodyStart.push({ type: 'text', value: '' });
      continue;
    }
    title.push(child);
  }
  const titleText = title.map((n) => ('value' in n ? n.value : 'x')).join('').trim();
  const titleNodes: PhrasingContent[] = titleText ? title : [{ type: 'text', value: titles[type] ?? type }];
  const body: RootContent[] = [];
  const hasBodyText = bodyStart.some((n) => n.type !== 'text' || n.value.trim() !== '');
  if (hasBodyText) body.push({ type: 'paragraph', children: bodyStart } satisfies Paragraph);
  body.push(...quote.children.slice(1));

  const foldable = fold !== '';
  return {
    type: 'blockquote',
    children: [
      { type: 'paragraph', children: titleNodes, data: { hName: foldable ? 'summary' : 'div', hProperties: { className: ['callout-title'] } } },
      { type: 'blockquote', children: body, data: { hName: 'div', hProperties: { className: ['callout-body'] } } },
    ],
    data: {
      hName: foldable ? 'details' : 'div',
      hProperties: { className: ['callout', `callout--${type}`], dataCallout: type, ...(fold === '+' ? { open: true } : {}) },
    },
  } as Blockquote;
}

// Bottom-up, so a callout nested in another callout is converted too.
function convertCallouts(node: Root | RootContent, titles: Readonly<Record<string, string>>): void {
  if (!('children' in node)) return;
  node.children.forEach((child, index) => {
    convertCallouts(child, titles);
    if (child.type !== 'blockquote') return;
    const callout = toCallout(child, titles);
    if (callout) (node.children as RootContent[])[index] = callout;
  });
}

function blockPass(tree: Root, calloutTitles: Readonly<Record<string, string>>): void {
  convertCallouts(tree, calloutTitles);
  visit(tree, (node, index, parent) => {
    if (!parent || index === undefined) return;
    if (node.type === 'code' && node.lang === 'mermaid') {
      parent.children[index] = { type: 'html', value: `<pre class="mermaid">${escapeHtml(node.value)}</pre>` };
      return SKIP;
    }
    if (node.type !== 'paragraph') return;
    const only = node.children.length === 1 ? node.children[0] : undefined;
    if (only?.type === 'text' && BASE_EMBED.test(only.value.trim())) {
      parent.children[index] = { type: 'html', value: '<div class="course-progress" data-course-progress></div>' };
      return SKIP;
    }
    // "^id" on its own line names the block above it.
    const alone = only?.type === 'text' ? only.value.trim().match(BLOCK_ID_ALONE) : null;
    if (alone && index > 0) {
      setId(parent.children[index - 1] as RootContent, blockAnchor(alone[1]));
      parent.children.splice(index, 1);
      return [SKIP, index];
    }
    // "text ^id" at the end of a paragraph names that paragraph.
    const tail = node.children.at(-1);
    const trailing = tail?.type === 'text' ? tail.value.match(BLOCK_ID_TRAILING) : null;
    if (tail?.type === 'text' && trailing) {
      tail.value = tail.value.slice(0, trailing.index);
      setId(node, blockAnchor(trailing[1]));
    }
  });
}

function remarkObsidian(options: { vault: Vault; missing: Map<string, Set<string>>; quizzes: Map<string, readonly QuizQuestion[]> }) {
  const { vault } = options;
  const byPath = new Map(vault.notes.map((n) => [n.absPath, n]));
  const calloutTitles = courseText(vault.course.lang).calloutTitles;
  return (tree: Root, file: { path?: string }) => {
    const note = file.path ? byPath.get(file.path) : undefined;
    if (!note) throw new Error(`Course note not found for ${file.path}`);
    const missing = new Set<string>();
    // Quizzes first: they read the answer key before it becomes a callout.
    const quiz = extractQuizzes(tree);
    for (const problem of quiz.problems) console.warn(`[courses] ${vault.course.slug}/${note.id}: quiz ${problem}`);
    options.quizzes.set(note.id, quiz.questions);
    blockPass(tree, calloutTitles);
    visit(tree, (node, index, parent) => {
      if (node.type === 'link') {
        rewriteRelativeLink(node, note, vault, missing);
        return;
      }
      if (node.type !== 'text' || !parent || index === undefined) return;
      const parts = expandWikilinks(node, note, vault, missing);
      if (parts.length === 1 && parts[0] === node) return;
      (parent.children as PhrasingContent[]).splice(index, 1, ...parts);
      return [SKIP, index + parts.length];
    });
    if (missing.size > 0) options.missing.set(note.id, missing);
  };
}

export interface CourseRenderer {
  render(note: Note): Promise<RenderedNote>;
  /** Unresolved link targets per note id, collected while rendering. */
  readonly missing: ReadonlyMap<string, ReadonlySet<string>>;
}

const renderers = new Map<string, Promise<CourseRenderer>>();

async function createRenderer(vault: Vault): Promise<CourseRenderer> {
  const missing = new Map<string, Set<string>>();
  const quizzes = new Map<string, readonly QuizQuestion[]>();
  const processor = await createMarkdownProcessor({
    remarkPlugins: [[remarkObsidian, { vault, missing, quizzes }]],
    rehypePlugins: [rehypeHeadingIds, rehypePostLinks],
    syntaxHighlight: { type: 'shiki', excludeLangs: ['mermaid'] },
  });
  // A note is rendered once per build: its page and the course's study index both need it.
  const rendered = new Map<string, Promise<RenderedNote>>();
  const renderOnce = async (note: Note): Promise<RenderedNote> => {
    const result = await processor.render(note.body, { fileURL: pathToFileURL(note.absPath), frontmatter: note.frontmatter });
    const quiz = quizzes.get(note.id);
    if (!quiz) throw new Error(`Quiz pass did not run for ${note.id}`);
    return { html: result.code, headings: result.metadata.headings, quiz };
  };
  return {
    missing,
    render(note) {
      const existing = rendered.get(note.id);
      if (existing) return existing;
      const created = renderOnce(note);
      rendered.set(note.id, created);
      return created;
    },
  };
}

/** One renderer per course, shared by every page of the build. */
export function getRenderer(vault: Vault): Promise<CourseRenderer> {
  const existing = renderers.get(vault.course.slug);
  if (existing) return existing;
  const created = createRenderer(vault);
  renderers.set(vault.course.slug, created);
  return created;
}
