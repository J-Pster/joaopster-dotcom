---
name: escrever-post-blog
description: Escreve, reescreve, otimiza para SEO e publica posts do blog pessoal do João em joaopster.com (Astro, PT/EN/ES). Use sempre que o João pedir um post, artigo ou texto para o blog, mandar ideias soltas ou áudio transcrito para virar post, pedir para melhorar, estruturar, revisar o SEO, traduzir ou publicar um post, ou falar em "escrever sobre X no blog", mesmo sem usar a palavra "post". Não use para mensagens de chat, e-mail ou documentação técnica do código.
---

# Escrever post para o blog do João

O blog é pessoal e técnico. O João escreve sobre IA aplicada, backend, infraestrutura e o que ele constrói. O leitor é desenvolvedor, mas muitas vezes não conhece o assunto do post. O João gosta de dar contexto e explicar de um jeito educativo, para quem não manja entender, e ao mesmo tempo ser rápido, prático e direto ao ponto.

Um post bom aqui consegue as duas coisas: quem não sabe nada sai entendendo, e quem já sabe não sente que perdeu tempo. Também é o tipo de página que o Google e os buscadores com IA querem mostrar: escrita para gente, com experiência real de quem usou a coisa. O João tem essa experiência, e ela é o maior trunfo de SEO do blog. Use-a.

Esta skill tem três referências. Leia as três antes do primeiro rascunho:

- `references/estrutura.md` tem como montar título, abertura, seções e fechamento, com os frameworks e o checklist de diagnóstico.
- `references/seo.md` tem o que otimizar e o que não fazer, com base na documentação do Google, e o que o site já faz sozinho.
- `references/padroes-ia.md` tem os vícios de texto de IA para evitar, incluindo as regras do João (dois-pontos só antes de lista).

## Processo

### 1. Junte e confira o material

O João manda ideias soltas, muitas vezes por voz transcrita. Antes de estruturar:

- **Corrija a transcrição.** Erros reais que já aconteceram: "All My Cloud Code" era oh-my-claudecode, "/ptw" era `/btw`, "Cloud" era Claude, "seção" era "sessão". Se não tiver certeza de um nome, confira na fonte ou pergunte.
- **Leia as fontes.** Se o post fala de um repositório, ferramenta, doc ou post anterior, abra e tire de lá números, datas, nomes de comando e links. Fato concreto e verificado é o que dá corpo e credibilidade ao post.
- **Não invente.** Nome de comando, número, data, citação ou recurso de produto que você não confirmou não entra no texto. Se o texto precisa disso, pergunte ao João ou escreva sem o detalhe. As opiniões são do João: organize as dele, não crie novas.

### 2. Defina tese, tipo, leitor e busca

Antes de escrever uma frase do post, responda para você:

- **Tese em uma frase.** Ex.: "o harness do Claude Code evoluiu tanto que deixou meu workflow e a maioria dos workflows obsoletos". Toda seção serve a ela.
- **Tipo de post.** Opinião, guia prático, relato de projeto, lista curada ou análise. O tipo muda a estrutura (ver `estrutura.md`).
- **Leitor.** Quem é e o que ele já sabe. Por padrão: dev que usa IA no dia a dia, mas não acompanha cada novidade.
- **Busca.** O que alguém digitaria no Google ou perguntaria a uma IA para cair neste post, em cada idioma. Isso guia título, slug, primeiro parágrafo e títulos de seção (ver `seo.md`).

### 3. Esqueleto primeiro

Liste as seções e o ponto de cada uma antes de escrever. Isso mostra quantos pontos o post tem, quanto cada um precisa crescer e o que está sobrando. Ideia que não serve à tese vai para uma lista de "ideias de fora", e não para o post. Ela pode virar outro post depois.

### 4. Escreva

Siga `estrutura.md`. O resumo:

- **Título** descritivo, com o assunto e a promessa, sem exagero.
- **Abertura** que diz em poucas frases do que é o post, para quem é e o que o leitor ganha.
- **Contexto e termos.** Explique o que o leitor precisa saber para acompanhar. Todo termo que um dev médio pode não conhecer (harness, subagente, skill, MCP) ganha uma explicação curta na primeira vez que aparece. O que todo dev sabe (git, API, deploy) não precisa de explicação.
- **Seções** com títulos que dizem o conteúdo, cada uma com exemplos concretos, e ritmo variado entre elas.
- **Limites.** Quando couber, o que ainda não funciona ou o que o João ainda usa por fora. Honestidade dá credibilidade.
- **Fechamento prático:** o que o leitor faz com isso.

**Voz:** primeira pessoa, português do Brasil, informal e técnico, como dev conversando com dev. Termos técnicos em inglês sem tradução (deploy, harness, workflow). O João tem opinião e fala dela, e também diz quando não sabe ou quando mudou de ideia. Antes de escrever, leia os posts que já existem em `src/content/blog/pt/` para pegar o ritmo.

Não use a skill `escrever-como-joao` em post. Ela foi calibrada com mensagens curtas de WhatsApp e corta demais um texto longo.

### 5. Revise (obrigatório, nesta ordem)

Nenhum post vai para o João sem passar por todas estas etapas. Não pule nenhuma, nem com pressa, nem num post curto, nem numa edição pequena.

1. **Estrutura:** rode o checklist de diagnóstico de `estrutura.md` (abertura lenta, seções iguais, frase que não acrescenta, conclusão forçada, título que não bate com a abertura).
2. **SEO:** rode o checklist de `seo.md`.
3. **Humanizer, primeira passada:** chame a skill `humanizer:humanizer` com o post inteiro e aplique o que ela apontar, sem mudar fatos nem estrutura.
4. **Padrões de IA:** rode a lista e a checagem rápida de `references/padroes-ia.md`. A regra dos dois-pontos é do João e vale sempre, ou seja, dois-pontos só antes de lista, tabela ou bloco de código, e no resto vírgula.
5. **Humanizer, segunda passada:** chame o `humanizer:humanizer` de novo no texto já corrigido. A primeira passada e as correções costumam criar padrões novos ao trocar um vício por outro, e a segunda pega esses.

Faça o mesmo nas traduções e em qualquer texto para outras plataformas (LinkedIn, TabNews, Dev.to, Reddit) antes de mostrar ou publicar.

### 6. Mostre ao João e itere

Mostre na própria mensagem do chat, com o post em markdown normal para que ele já apareça formatado. Nunca coloque o post dentro de um bloco de código com três crases: isso quebra a visualização, e o João quer ver títulos, tabelas e negrito renderizados.

1. 3 a 5 opções de título, com a recomendada marcada e o porquê.
2. A `description` proposta e as tags.
3. O post completo em PT, renderizado. O frontmatter não precisa aparecer como YAML: título, description e tags já estão nos itens acima.
4. As "ideias de fora", se houver.
5. Uma linha com o que você não conseguiu confirmar.

Espere ele revisar. Ele itera várias vezes, e cada pedido dele vale para esta e para as próximas versões.

### 7. Publique só depois da aprovação

1. Traduza para EN e ES. Mantenha estrutura, links e código, e adapte título, `description` e termos de busca ao jeito que se procura naquele idioma (ver `seo.md`). Não faça tradução literal.
2. Crie os 3 arquivos com o mesmo slug (ver "Arquivos").
3. Rode `npm run build` e confirme que saiu sem erro.
4. Faça o commit e o push para o `master`, e só com a aprovação do João. O deploy é automático: o Cloudflare Pages publica a cada push no `master`.

## Arquivos

- Caminho: `src/content/blog/pt/<slug>.md`, `src/content/blog/en/<slug>.md` e `src/content/blog/es/<slug>.md`, sempre com o mesmo slug. O slug vira a URL (`/blog/<slug>/`, `/en/blog/<slug>/`, `/es/blog/<slug>/`) e o site liga as três versões por hreflang.
- Slug em português, curto, com as palavras da busca separadas por hífen e sem acento. Ex.: `claude-code-harness-workflows-obsoletos`.
- Frontmatter, validado por `src/content.config.ts`:

  ```yaml
  ---
  title: 'Título do post'
  description: 'Resumo de 1 a 2 frases, usado na listagem, no Google e no preview de link.'
  pubDate: 'Nov 26 2026'
  updatedDate: 'Dec 10 2026'   # só quando o post mudou de verdade
  tags: ['AI', 'Claude Code']
  ---
  ```

  - Se o texto tiver apóstrofo, use aspas duplas no campo.
  - Reaproveite as tags que já existem nos outros posts antes de criar uma nova.
- Não existe rascunho no schema: qualquer `.md` que chega no `master` é publicado, mesmo com `pubDate` no futuro.
- Para link interno, use o caminho relativo do idioma: `/blog/<slug>/` em PT, `/en/blog/<slug>/` em EN e `/es/blog/<slug>/` em ES.
