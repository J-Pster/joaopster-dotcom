// Rehype plugin for course notes: gives every task-list checkbox an accessible name.
// GFM renders "- [ ] text" as a bare <input type="checkbox"> beside the text, with no <label>, so
// screen readers announce "checkbox" alone. The name is the item's own text (nested lists excluded).
import type { Element, ElementContent, Root } from 'hast';
import { visit } from 'unist-util-visit';

const MAX_LABEL = 140;
const NESTED_LISTS = new Set(['ul', 'ol']);

const isElement = (node: ElementContent, tagName?: string): node is Element =>
  node.type === 'element' && (tagName === undefined || node.tagName === tagName);

const isCheckbox = (node: Element): boolean => node.tagName === 'input' && node.properties.type === 'checkbox';

/** The text of the item without its nested lists, and the checkbox it owns. */
function readItem(item: Element): { text: string; checkbox: Element | undefined } {
  let checkbox: Element | undefined;
  const parts: string[] = [];
  const walk = (nodes: readonly ElementContent[]) => {
    for (const node of nodes) {
      if (node.type === 'text') parts.push(node.value);
      else if (isElement(node) && isCheckbox(node)) checkbox ??= node;
      else if (isElement(node) && !NESTED_LISTS.has(node.tagName)) walk(node.children);
    }
  };
  walk(item.children);
  return { text: parts.join('').replace(/\s+/g, ' ').trim(), checkbox };
}

const shorten = (text: string): string =>
  text.length <= MAX_LABEL ? text : `${text.slice(0, MAX_LABEL).replace(/\s+\S*$/, '')}...`;

export function rehypeCheckboxLabels() {
  return (tree: Root) => {
    visit(tree, 'element', (node: Element) => {
      if (node.tagName !== 'li') return;
      const { text, checkbox } = readItem(node);
      if (!checkbox) return;
      if (!text) {
        console.warn('[courses] task-list item without text: its checkbox has no accessible name');
        return;
      }
      checkbox.properties.ariaLabel = shorten(text);
    });
  };
}
