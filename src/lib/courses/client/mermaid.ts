// Draws the course diagrams (```mermaid blocks, kept as <pre class="mermaid"> at build time).
// Mermaid is large, so it loads from the CDN only on pages that have a diagram.
const MERMAID_URL = 'https://cdn.jsdelivr.net/npm/mermaid@11.4.1/dist/mermaid.esm.min.mjs';

interface Mermaid {
  initialize(config: Record<string, unknown>): void;
  run(options: { nodes: HTMLElement[] }): Promise<void>;
}

export async function renderMermaid(): Promise<void> {
  const nodes = [...document.querySelectorAll<HTMLElement>('.note-content pre.mermaid')];
  if (nodes.length === 0) return;
  const { default: mermaid } = (await import(/* @vite-ignore */ MERMAID_URL)) as { default: Mermaid };
  mermaid.initialize({
    startOnLoad: false,
    theme: 'neutral',
    fontFamily: 'Inter, -apple-system, system-ui, sans-serif',
    securityLevel: 'strict',
  });
  await mermaid.run({ nodes });
}
