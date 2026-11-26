// Rehype plugin for blog posts. Runs after Astro's rehypeHeadingIds, so headings already have ids.
// - h2/h3 get a "#" link to their own section (the glyph comes from CSS, so the heading text
//   collected for the table of contents stays clean).
// - Links that leave joaopster.com open in a new tab and get a class the prose styles mark with ↗.
import type { Element, Root, RootContent } from 'hast';

const SITE_HOST = 'joaopster.com';
const ANCHORED_HEADINGS = new Set(['h2', 'h3']);

const isExternalHref = (href: unknown): boolean => {
  if (typeof href !== 'string' || !/^https?:\/\//i.test(href)) return false;
  const host = new URL(href).hostname;
  return host !== SITE_HOST && !host.endsWith(`.${SITE_HOST}`);
};

const classesOf = (element: Element): string[] => {
  const current = element.properties.className;
  if (Array.isArray(current)) return current.map(String);
  return typeof current === 'string' ? current.split(/\s+/) : [];
};

function addHeadingAnchor(heading: Element): void {
  const id = heading.properties.id;
  if (typeof id !== 'string') return;
  heading.children.push({
    type: 'element',
    tagName: 'a',
    // Hidden from assistive tech: the table of contents is the accessible way to reach sections.
    properties: { className: ['heading-anchor'], href: `#${id}`, ariaHidden: 'true', tabIndex: -1 },
    children: [],
  });
}

function markExternalLink(link: Element): void {
  if (!isExternalHref(link.properties.href)) return;
  link.properties.className = [...classesOf(link), 'external-link'];
  link.properties.target = '_blank';
  link.properties.rel = ['noopener', 'noreferrer'];
}

function visit(node: Root | RootContent): void {
  if (!('children' in node)) return;
  for (const child of node.children) {
    if (child.type === 'element') {
      if (ANCHORED_HEADINGS.has(child.tagName)) addHeadingAnchor(child);
      if (child.tagName === 'a') markExternalLink(child);
    }
    visit(child);
  }
}

export function rehypePostLinks() {
  return (tree: Root): void => visit(tree);
}
