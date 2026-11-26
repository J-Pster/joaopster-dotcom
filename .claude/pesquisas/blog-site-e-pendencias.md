# Blog joaopster.com: como funciona e pendências

Levantado em 26/11/2026 lendo o código e o site publicado.

## Como o blog funciona

- Astro, content collection `blog` em `src/content.config.ts`, com glob em `src/content/blog/**/*.{md,mdx}`. Frontmatter obrigatório: `title`, `description`, `pubDate`. Opcionais: `updatedDate`, `heroImage`, `tags`.
- A pasta define o idioma e o nome do arquivo vira o slug: `pt/x.md` vira `/blog/x/`, `en/x.md` vira `/en/blog/x/`, `es/x.md` vira `/es/blog/x/`.
- Post sem tradução cai no texto em PT nas páginas EN e ES (`src/lib/getLatestPost.ts`, `getPostsForLang`).
- Listagem: o post mais recente em destaque, grade com busca por título e filtro de tag e ano, tempo de leitura a 200 palavras por minuto. Aba Reddit buscada no build (`src/pages/blog/index.astro`), com `catch {}` vazio que esconde falha.
- Comentários: Giscus (GitHub Discussions). RSS em `/rss.xml`, só com os posts em PT.
- SEO que o site já faz: canonical, hreflang (pt-BR, en, es, x-default), Open Graph e Twitter card (`src/components/BaseHead.astro`), schema `BlogPosting` com `dateModified` a partir do `updatedDate` (`src/layouts/BlogPost.astro`), `Person` e `WebSite`, sitemap, robots `index, follow`.
- Não existe rascunho: qualquer `.md` que chega no `master` é publicado, mesmo com data futura.

## Deploy

- O site roda no Cloudflare (header `server: cloudflare`), com Pages Functions em `functions/` (ex.: `functions/api/wakatime.ts`). Não tem workflow do GitHub no repositório. A inferência é que é a integração Git do Cloudflare Pages: push no `master` faz build e publica, outros branches viram preview em `*.pages.dev`.
- O deploy leva de 30 segundos a poucos minutos.
- Cuidado ao checar se uma página subiu: o site responde 200 para qualquer URL (mostra a home), então checar pelo conteúdo, não pelo status.

## Pendências

- Página 404: hoje URL inexistente devolve a home com 200, o Google pode tratar link quebrado como página válida.
- `heroImage` do frontmatter não é usado em lugar nenhum, então o `og:image` é sempre a imagem genérica do site.
- O `<title>` é só o título do post, sem o nome do site.
- Dev.to: o slug do post do harness ainda tem "and-most-others-too". Dá para apagar e republicar (estava com 0 reações).
- TabNews: o João vai salvar o cookie `session_id` em Network secrets e eu testo (ver `distribuicao-de-posts.md`).
- A cópia da skill `escrever-post-blog` que o João salvou na conta do Claude está desatualizada em relação à do repositório.
- Arquivos antigos de divulgação ficaram no scratchpad da sessão (não importa, é temporário).

## Segurança já tratada

- A chave do Exa que estava em `.claude/settings.json` foi removida em 26/11/2026 (commit `abd19a4`). O João disse que já tinha cancelado a chave. Ela continua no histórico do git, e o repositório é público.

## Posts publicados

- `hello-world` (PT, EN, ES), 24/05/2026.
- `migrei-cursor-para-claude-code` (PT, EN, ES), 25/05/2026, originalmente no r/brdev.
- `claude-code-harness-workflows-obsoletos` (PT, EN, ES), 26/11/2026, também no Dev.to (id 5120820). Título "O harness do Claude Code deixou meu workflow obsoleto", link https://joaopster.com/blog/claude-code-harness-workflows-obsoletos/
