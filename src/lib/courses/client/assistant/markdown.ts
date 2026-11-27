// The small Markdown the assistant is asked to write (paragraphs, lists, bold, italic, inline code,
// fenced code blocks and links), turned into DOM nodes. Every piece of text goes in as a text node,
// never as HTML, so nothing in an answer can run as code on the page.

const FENCE = /^```/;
const BULLET = /^\s*[-*]\s+(.*)$/;
const NUMBERED = /^\s*\d+[.)]\s+(.*)$/;
const HEADING = /^#{1,6}\s+(.*)$/;
// Bold, italic, inline code and [text](https://...) links, in one pass from left to right.
const INLINE = /(`[^`]+`)|(\*\*[^*]+\*\*)|(\*[^*\s][^*]*\*)|(\[[^\]]+\]\(https?:\/\/[^\s)]+\))/g;

function appendInline(parent: HTMLElement, text: string): void {
  let last = 0;
  for (const match of text.matchAll(INLINE)) {
    const index = match.index;
    if (index > last) parent.append(text.slice(last, index));
    const [token] = match;
    if (match[1]) {
      const code = document.createElement('code');
      code.textContent = token.slice(1, -1);
      parent.append(code);
    } else if (match[2]) {
      const strong = document.createElement('strong');
      appendInline(strong, token.slice(2, -2));
      parent.append(strong);
    } else if (match[3]) {
      const em = document.createElement('em');
      appendInline(em, token.slice(1, -1));
      parent.append(em);
    } else {
      const split = token.indexOf('](');
      const link = document.createElement('a');
      link.href = token.slice(split + 2, -1);
      link.target = '_blank';
      link.rel = 'noopener noreferrer nofollow';
      link.textContent = token.slice(1, split);
      parent.append(link);
    }
    last = index + token.length;
  }
  if (last < text.length) parent.append(text.slice(last));
}

function paragraph(lines: readonly string[]): HTMLParagraphElement {
  const p = document.createElement('p');
  lines.forEach((line, i) => {
    if (i > 0) p.append(document.createElement('br'));
    appendInline(p, line);
  });
  return p;
}

export function renderMarkdown(source: string): DocumentFragment {
  const fragment = document.createDocumentFragment();
  const lines = source.replace(/\r\n?/g, '\n').split('\n');
  let i = 0;
  while (i < lines.length) {
    const line = lines[i] ?? '';
    if (line.trim() === '') {
      i++;
      continue;
    }
    if (FENCE.test(line)) {
      const body: string[] = [];
      i++;
      // An answer still streaming may not have closed its fence yet: the block runs to the end.
      while (i < lines.length && !FENCE.test(lines[i] ?? '')) body.push(lines[i++] ?? '');
      i++;
      const pre = document.createElement('pre');
      const code = document.createElement('code');
      code.textContent = body.join('\n');
      pre.append(code);
      fragment.append(pre);
      continue;
    }
    const heading = HEADING.exec(line);
    if (heading) {
      const p = document.createElement('p');
      const strong = document.createElement('strong');
      appendInline(strong, heading[1] ?? '');
      p.append(strong);
      fragment.append(p);
      i++;
      continue;
    }
    const listPattern = BULLET.test(line) ? BULLET : NUMBERED.test(line) ? NUMBERED : undefined;
    if (listPattern) {
      const list = document.createElement(listPattern === BULLET ? 'ul' : 'ol');
      while (i < lines.length) {
        const item = listPattern.exec(lines[i] ?? '');
        if (!item) break;
        const li = document.createElement('li');
        appendInline(li, item[1] ?? '');
        list.append(li);
        i++;
      }
      fragment.append(list);
      continue;
    }
    const block: string[] = [];
    while (i < lines.length) {
      const next = lines[i] ?? '';
      if (next.trim() === '' || FENCE.test(next) || HEADING.test(next) || BULLET.test(next) || NUMBERED.test(next)) break;
      block.push(next);
      i++;
    }
    fragment.append(paragraph(block));
  }
  return fragment;
}
