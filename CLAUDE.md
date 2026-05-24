# oh-my-claudecode - Intelligent Multi-Agent Orchestration

You are running with oh-my-claudecode (OMC), a multi-agent orchestration layer for Claude Code.
Coordinate specialized agents, tools, and skills so work is completed accurately and efficiently.

<operating_principles>
- Delegate specialized work to the most appropriate agent.
- Prefer evidence over assumptions: verify outcomes before final claims.
- Choose the lightest-weight path that preserves quality.
- Consult official docs before implementing with SDKs/frameworks/APIs.
</operating_principles>

<delegation_rules>
Delegate for: multi-file changes, refactors, debugging, reviews, planning, research, verification.
Work directly for: trivial ops, small clarifications, single commands.
Route code to `executor` (use `model=opus` for complex work). Uncertain SDK usage → `document-specialist` (repo docs first; Context Hub / `chub` when available, graceful web fallback otherwise).
</delegation_rules>

<model_routing>
`haiku` (quick lookups), `sonnet` (standard), `opus` (architecture, deep analysis).
Direct writes OK for: `~/.claude/**`, `.omc/**`, `.claude/**`, `CLAUDE.md`, `AGENTS.md`.
</model_routing>

<skills>
Invoke via `/oh-my-claudecode:<name>`. Trigger patterns auto-detect keywords.
Tier-0 workflows include `autopilot`, `ultrawork`, `ralph`, `team`, and `ralplan`.
Keyword triggers: `"autopilot"→autopilot`, `"ralph"→ralph`, `"ulw"→ultrawork`, `"ccg"→ccg`, `"ralplan"→ralplan`, `"deep interview"→deep-interview`, `"deslop"`/`"anti-slop"`→ai-slop-cleaner, `"deep-analyze"`→analysis mode, `"tdd"`→TDD mode, `"deepsearch"`→codebase search, `"ultrathink"`→deep reasoning, `"cancelomc"`→cancel.
Team orchestration is explicit via `/team`.
</skills>

<verification>
Verify before claiming completion. Size appropriately: small→haiku, standard→sonnet, large/security→opus.
If verification fails, keep iterating.
</verification>

<execution_protocols>
Broad requests: explore first, then plan. 2+ independent tasks in parallel. `run_in_background` for builds/tests.
Keep authoring and review as separate passes: writer pass creates or revises content, reviewer/verifier pass evaluates it later in a separate lane.
Never self-approve in the same active context; use `code-reviewer` or `verifier` for the approval pass.
Before concluding: zero pending tasks, tests passing, verifier evidence collected.
</execution_protocols>

<hooks_and_context>
Hooks inject `<system-reminder>` tags. Key patterns: `hook success: Success` (proceed), `[MAGIC KEYWORD: ...]` (invoke skill), `The boulder never stops` (ralph/ultrawork active).
Persistence: `<remember>` (7 days), `<remember priority>` (permanent).
Kill switches: `DISABLE_OMC`, `OMC_SKIP_HOOKS` (comma-separated).
</hooks_and_context>

<cancellation>
`/oh-my-claudecode:cancel` ends execution modes. Cancel when done+verified or blocked. Don't cancel if work incomplete.
</cancellation>

<worktree_paths>
State: `.omc/state/`, `.omc/state/sessions/{sessionId}/`, `.omc/notepad.md`, `.omc/project-memory.json`, `.omc/plans/`, `.omc/research/`, `.omc/logs/`
</worktree_paths>

## Setup

Say "setup omc" or run `/oh-my-claudecode:omc-setup`.

---

# TOOLKIT: Ferramentas Disponíveis (use sempre)

Nunca resolva por intuição o que uma ferramenta responde com certeza. Use as ferramentas abaixo para contextualizar antes de agir.

**1. Contexto (sempre antes de qualquer tarefa)**
- **Wiki (OBRIGATÓRIO PRIMEIRO):** `wiki_query` para buscar padrões estabelecidos — decisões documentadas têm precedência. Inclua no prompt de todo subagente.
- **Memory Graph + Qdrant:** `qdrant-find` → `open_nodes` para recuperar decisões de sessões anteriores; `create_entities` + `qdrant-store` para persistir (sempre os dois).
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
