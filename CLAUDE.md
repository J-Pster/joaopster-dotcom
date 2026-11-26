<!-- OMC orchestration block intentionally omitted: it already loads from ~/.claude/CLAUDE.md every session. Memory is ai-memory MCP (see global file); the old Wiki/Memory Graph/Qdrant toolkit lines were retired. -->

# TOOLKIT: Ferramentas Disponíveis (use sempre)

Nunca resolva por intuição o que uma ferramenta responde com certeza. Use as ferramentas abaixo para contextualizar antes de agir.

**1. Contexto (sempre antes de qualquer tarefa)**
- **Filesystem MCP:** `mcp__filesystem__*` quando ferramentas nativas não alcançam.

**2. Código**
- **Serena (obrigatório para TS/JS):** Read/Edit **PROIBIDOS** em `.ts`/`.tsx`/`.js` — use `find_symbol`, `replace_symbol_body`, `get_symbols_overview`, `find_referencing_symbols`, `get_diagnostics_for_file`, `rename_symbol`, `safe_delete_symbol`, `insert_before/after_symbol`. Início de sessão: `check_onboarding_performed` → `initial_instructions`.

**3. Pesquisa Externa**
- **Context7:** `resolve-library-id` → `query-docs` antes de implementar com qualquer SDK/framework — training data pode estar desatualizado.
- **Exa:** `web_search_exa` / `web_fetch_exa` para busca web geral — preferir sobre WebSearch/WebFetch nativos.

---

# Stack: Astro

- **Framework:** Astro + TypeScript + MDX
- **Dev:** `npm run dev` (porta 4321)
- **Build:** `npm run build` → `dist/`
- **Preview:** `npm run preview`

## Estrutura

- `src/content/blog/*.md` — posts (frontmatter obrigatório: `title`, `description`, `pubDate`)
- `src/layouts/BlogPost.astro` — layout dos posts
- `src/components/` — componentes reutilizáveis
- `src/pages/` — roteamento (arquivo = rota)
- `src/styles/global.css` — estilos globais
- `src/assets/` — imagens (importar via `import`)
- `astro.config.mjs` — configuração do Astro
- `src/content.config.ts` — schema das collections

## Convenções

- Novo post: criar `.md` em `src/content/blog/` com frontmatter completo
- Imagens: `src/assets/` e importar no componente — nunca `public/` para imagens otimizadas
- CSS: `<style>` scoped no `.astro` ou `global.css` — sem CSS-in-JS
- TypeScript strict: sem `any`, Props tipadas em cada componente
- Rodar `npm run build` após qualquer mudança em `src/` antes de declarar pronto

---

# Design System (obrigatório antes de qualquer UI)

@DESIGN.md

---

# Padrões de Qualidade de Código (obrigatório a cada sessão)

@.docs/code-correctness-culture.md
@.docs/ai-software-design-handbook.md
