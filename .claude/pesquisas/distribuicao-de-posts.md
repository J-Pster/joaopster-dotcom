# Distribuição dos posts do blog em outras plataformas

Pesquisa de 26/11/2026. Classes combinadas com o João: first class é API oficial que a gente publica daqui com token, second class precisa de integração ou setup de app, third class é manual.

## O que o João decidiu

- Idiomas (26/11/2026): LinkedIn sempre em inglês (artigo, anúncio, post curto, capa), Dev.to em inglês, TabNews em português, blog nos três idiomas. Reddit em português e inglês (decidido em 26/11/2026). X/Threads em português por padrão.

- Canais em uso: blog (joaopster.com), Dev.to (versão EN, pela API), TabNews (versão PT), LinkedIn (post curto no feed e artigo completo), Reddit (r/brdev), X e Threads.
- Bluesky, Mastodon, Medium, Hashnode e Hacker News ficaram de fora por enquanto.
- LinkedIn: o Typefully foi descartado por preço (cerca de US$ 100/ano, valor dito pelo João). Por enquanto é manual. Alternativa grátis com connector no Claude: Buffer (plano grátis com 3 canais e 10 posts agendados por canal, segundo fontes de terceiros).
- Formato de entrega dos textos está na skill `escrever-post-blog` (seção "Versões para outras plataformas").

## First class (API oficial)

### Dev.to (configurado)

- API Forem, docs em https://developers.forem.com/api/v1. Header `api-key`, mais `Accept: application/vnd.forem.api-v1+json`.
- A chave está salva como network secret do ambiente "Pster Dotcom" para o host `dev.to`. O proxy injeta o header, ninguém vê o valor. Conta: @jpster.
- Criar: `POST https://dev.to/api/articles` com `{"article": {"title", "body_markdown", "published", "description", "tags" (máx. 4), "canonical_url"}}`.
- Editar: `PUT https://dev.to/api/articles/<id>`. Não mexe no slug da URL, que fica travado depois de publicar.
- Sempre usar `canonical_url` apontando para o post no joaopster.com, converter links internos relativos para URL completa e acrescentar no fim "Originally published on joaopster.com".
- Post publicado: "Claude Code's harness made my AI workflow obsolete", id 5120820, https://dev.to/jpster/claude-codes-harness-made-my-ai-workflow-obsolete-and-most-others-too-5g5d (o slug ainda tem o "and-most-others-too" do título antigo).

### TabNews (configurado por variável de ambiente)

- Atualização de 26/11/2026: a tela de Network secrets só oferece Bearer e Basic (header `Authorization`), e o TabNews ignora esse header, então o cookie não dá para ir por lá. O João salvou o token como variável de ambiente `TABNEWS_SESSION_ID` no ambiente "Pster Dotcom" (só o valor, sem `session_id=`). A variável só aparece em sessões iniciadas ou retomadas depois de 26/11/2026 às ~15h UTC.
- Uso, sem nunca imprimir o valor: `curl -s -H "Cookie: session_id=$TABNEWS_SESSION_ID" https://www.tabnews.com.br/api/v1/user` para testar, e `curl -s -X POST https://www.tabnews.com.br/api/v1/contents -H "Content-Type: application/json" -H "Cookie: session_id=$TABNEWS_SESSION_ID" --data @post.json` com `{"title","body","status":"published","source_url"}` para publicar. Usar a versão PT do post, com links internos como URL completa e `source_url` apontando para o post no joaopster.com.
- A sessão vence em 30 dias. Se der 401, pedir ao João um token novo.
- Pendente: publicar "A Anthropic é ou não é a Evil Corp?" no TabNews.

### TabNews (histórico da investigação)

- `POST https://www.tabnews.com.br/api/v1/contents` com `title`, `body` (markdown), `status: "published"` e `source_url` opcional.
- Conferido no código-fonte (github.com/filipedeschamps/tabnews.com.br): a autenticação é só pelo cookie `session_id` (`models/authentication.js`), a sessão vale 30 dias (`models/session.js`, `SESSION_EXPIRATION_IN_SECONDS = 60*60*24*30`). Não existe API key. Requisições com cookie de outra origem são bloqueadas pelo header `sec-fetch-site`/`origin`, mas curl sem esses headers passa.
- O formulário de credencial do ambiente só injeta header de autenticação, não cookie. Plano combinado: o João pega o `session_id` numa janela anônima (DevTools, Application, Cookies), fecha sem fazer logout e salva em Network secrets do ambiente com host `www.tabnews.com.br`, header `Cookie`, valor `session_id=<valor>`. Depois testar com `GET /api/v1/user`. Não se sabe se a tela de Network secrets aceita o header `Cookie`. Se não aceitar, TabNews fica manual.

### Outras com API (não configuradas)

- Bluesky: app password grátis, `createRecord` em `app.bsky.feed.post`, card de link precisa de embed `app.bsky.embed.external`, limite de 300 caracteres. https://docs.bsky.app/docs/tutorials/creating-a-post
- Mastodon: `POST /api/v1/statuses` com token da instância (de memória, não conferido).
- Threads: API oficial da Meta, para a própria conta não precisa de App Review, mas precisa criar app na Meta e fazer OAuth. Limite de 250 posts por dia. https://developers.facebook.com/documentation/threads/reference/publishing
- Hashnode: GraphQL oficial, mas publicar pela API agora exige plano Pro, segundo a própria Hashnode.
- X: API paga por uso, sem plano grátis para conta nova. Fontes de terceiros falam em cerca de US$ 0,20 por post com link. https://docs.x.com/x-api/getting-started/pricing

## Second class

- LinkedIn pela API própria: permissão `w_member_social` pelo produto "Share on LinkedIn", liberada sem aprovação para o próprio perfil, mas precisa criar app no portal de desenvolvedor e gerar token (o portal tem gerador de token). O token vence. Não confirmado se o app precisa de página de empresa. https://developer.linkedin.com/documents/share-api
- Typefully, Buffer, Ordinal e Zapier têm connector no diretório do Claude. Typefully cobre X, LinkedIn, Threads, Bluesky, Mastodon e Substack (provavelmente Notes).
- Postiz é open source e self-hosted, grátis, cobre LinkedIn, mas exige manter servidor.

## Third class (manual)

- Hacker News (decidido em 26/11/2026): o João passa a submeter todo post, em inglês, com title igual ao título EN, url do post EN no blog e text em branco. Sem arquivo `.md`, o título e a URL vão na mensagem junto do título e do link do blog. Regras oficiais em https://news.ycombinator.com/newsguidelines.html e https://news.ycombinator.com/newsfaq.html: título original sem editorializar, sem nome do site, sem caixa alta ou exclamação, "Please don't put generated text in HN posts" e nada de comentário gerado ou editado por IA, não automatizar a postagem, não usar o HN principalmente para promoção ("It's ok to post your own stuff part of the time"), não pedir voto nem comentário. Texto em submissão com URL é opcional, e submissão só de texto não aceita link. Show HN não serve para post de blog.

- Medium: API descontinuada, a Medium não emite tokens novos (https://help.medium.com/hc/en-us/articles/213480228). A ferramenta de importar story puxa o post pela URL e marca o original (de memória, não conferido).
- Reddit: desde nov/2025 a API exige pedir acesso e esperar aprovação manual (Responsible Builder Policy). Subreddits costumam punir autopromoção automatizada. Manual com texto adaptado.

## Reddit: onde postar (pesquisa de 26/11/2026)

O Reddit bloqueia leitura automatizada daqui, então as regras abaixo vêm de sites que copiam as páginas de regras (rankhog.com, prowlo.com, agentagency.si, subredditmarketing.com, threadotter.com), lidas entre set/2026 e nov/2026. Conferir a barra lateral do sub antes de postar.

Regra geral do Reddit: não existe mais proporção oficial, mas a regra 2 pede participação autêntica e a página de spam pede cuidado com a frequência quando a maior parte das contribuições é link para coisa sua. O 90/10 é orientação antiga da wiki e alguns subs adotam. Não postar o mesmo texto em vários subs no mesmo dia.

### Em português

- r/brdev (~330 mil membros): onde o João já posta. Regras não falam de texto de IA. Autopromoção só para discussão técnica, e a moderação pediu para não usar o sub para lançar produto. Notícia com link direto e título sem opinião.
- r/programacao (~30 mil, número de 2026 de fonte secundária): regras sem posição clara sobre link próprio. Em português, aceita flair. Melhor post de texto completo.

### Em inglês

- r/ClaudeAI (~1,2 a 1,3 milhão): regra 2 exige que o post seja sobre Claude/Claude Code (IA em geral é removido). Flair obrigatória. Posts no feed exigem mais de 100 de karma de post (a fonte mais antiga falava em 50). Sem regra sobre texto de IA. Serve para os dois posts (harness e Evil Corp).
- r/ClaudeCode (~500 mil): só sobre Claude Code. Flair obrigatória. Post solo de "fiz com Claude Code" tem que ser detalhado (o que fez, como usou, o que aprendeu), senão vai para a thread semanal de showcase. Sem referral nem promoção repetida. Serve para o post do harness, não para o da Evil Corp.
- r/ChatGPTCoding (~410 mil): sobre usar IA para programar. Post cujo objetivo principal é divulgar site pessoal ou blog vai para a thread semanal de Self-Promotion ("Delete the link: if nothing is left, it's an ad"). Texto completo no post, com link só no fim, pode passar. Sem "AI slop" (IA só para gramática).
- r/ExperiencedDevs (~400 mil): fontes classificam autopromoção como caso a caso. Regras completas não conferidas.

### Não usar

- r/programming (~6,9 milhões): regra 1 proíbe conteúdo escrito por LLM, incluindo tradução e resumo por LLM, e a política de IA considera off-topic tudo de IA que não seja profundamente técnico (review de ferramenta, debate sobre o fim da programação).
- r/LocalLLaMA (~870 mil): proíbe texto "completely/primarily LLM generated". Exceção para não nativo que usa LLM para traduzir, desde que avise. Os posts do João são escritos com o Claude, então não cabe.
- r/webdev, r/learnprogramming: sem autopromoção ou só em dia fixo.
- Hacker News: API oficial só de leitura. Manual.
- Substack (artigo): sem API oficial de publicação.
- daily.dev: API pública não publica post e exige plano Plus.
- Lobsters: só por convite.

## Limites de caracteres usados

- TabNews: 20.000 caracteres por publicação (informado pelo João em 26/11/2026). A skill gera um `tabnews.md` resumido com link para o post completo.

- X sem assinatura: 280 caracteres. Link conta 23 no X (encurtado), mas a skill conta o link inteiro para servir também no Threads.
- Threads: 500 caracteres.
- LinkedIn post curto: a skill usa 1.200 a 1.800 caracteres.
- O editor de artigos do LinkedIn não interpreta markdown colado (de memória, não testado).
