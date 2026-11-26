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
- `references/padroes-ia.md` tem os vícios de texto de IA para evitar, com evidência e fonte, as regras do João e a checagem antes de publicar. É longo, então leia as regras do João e as seções de voz e ritmo antes de escrever, e use o resto na revisão.
- `scripts/medir_voz.py` mede primeira pessoa, ritmo e pontuação de um post.

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

### 3. Entreviste o João antes de escrever (obrigatório)

Depois que o João explicar o assunto e pedir o post, não escreva o rascunho ainda. Primeiro faça uma entrevista curta para pegar o que só ele sabe, porque é isso que faz um post parecer escrito por uma pessoa e não por IA, e nenhuma regra de estilo compensa a falta disso.

Mande de 4 a 7 perguntas numa mensagem só, específicas para o post, que ele consiga responder em poucos minutos, inclusive por áudio. Cubra o que faltar no material dele:

- **O momento.** Quando aconteceu, qual foi a primeira vez que ele viu aquilo funcionar ou dar errado, que tarefa ele estava fazendo.
- **Números dele.** Quanto tempo levou, quanto custou, quantos agentes, quanta RAM, quantos meses usando, e se não tem número, por quê.
- **Decisões.** Quando ele trocou de ferramenta ou desinstalou algo, e o que fez ele decidir.
- **O que deu errado ou o que incomoda.** O custo, o limite, o problema que ninguém fala.
- **Opinião e dúvida.** O que ele acha e o que ele não sabe explicar.
- **Prova para as afirmações gerais.** Se o post diz "a maioria", "todo mundo" ou "sempre", de onde ele tira isso, e se tem um caso concreto (inclusive de posts anteriores do blog).
- **Imagem.** Se ele tem um print ou diagrama real para o post.

Use as respostas com as palavras dele sempre que der, sem polir. O que ele disser que não sabe entra como dúvida no texto, não some. Só pule a entrevista se o João pedir explicitamente para escrever sem ela, e mesmo assim diga no fim quais detalhes ficaram faltando.

### 4. Esqueleto primeiro

Liste as seções e o ponto de cada uma antes de escrever. Isso mostra quantos pontos o post tem, quanto cada um precisa crescer e o que está sobrando. Ideia que não serve à tese vai para uma lista de "ideias de fora", e não para o post. Ela pode virar outro post depois.

### 5. Escreva

Siga `estrutura.md`. O resumo:

- **Título** descritivo, com o assunto e a promessa, sem exagero.
- **Abertura** que diz em poucas frases do que é o post, para quem é e o que o leitor ganha.
- **Contexto e termos.** Explique o que o leitor precisa saber para acompanhar. Todo termo que um dev médio pode não conhecer (harness, subagente, skill, MCP) ganha uma explicação curta na primeira vez que aparece. O que todo dev sabe (git, API, deploy) não precisa de explicação.
- **Seções** com títulos que dizem o conteúdo, cada uma com exemplos concretos, e ritmo variado entre elas.
- **Limites.** Quando couber, o que ainda não funciona ou o que o João ainda usa por fora. Honestidade dá credibilidade.
- **Fechamento prático:** o que o leitor faz com isso.

**Voz.** O objetivo é que ninguém perceba que o texto passou por IA. Quem lê Dev.to, TabNews e LinkedIn usa LLM todo dia, e esse leitor reconhece o conjunto de sinais (num estudo da ACL 2025, cinco leitores assim erraram 1 de 300 artigos). Escreva já com estas regras, não deixe para a revisão consertar:

- **Primeira pessoa o tempo todo.** "Eu fiz", "eu acho", "meu setup", "me deu trabalho", inclusive nas opiniões e nas afirmações, e não só nas histórias. É a maior diferença medida entre humano e IA, e o "nós" genérico ou o impessoal ("pode-se", "é possível") são o oposto disso.
- **Português falado, sem erro de ortografia.** Use pra, tá, tô, a gente, "tem" no lugar de "há", próclise ("me deu", "se eu"), "atualizar ele" no lugar de "atualizá-lo", frase começando com "E" ou "Mas", frases emendadas com vírgula, um "né" ou "tipo" de vez em quando. Nunca invente erro de digitação nem tire acento, e nunca erre nome de ferramenta, comando ou código. A pesquisa e o motivo estão em "Erros de português de propósito?" de `references/padroes-ia.md`.
- **Menos ponto, mais vírgula.** Ponto só onde a pessoa pararia de verdade. Três frases curtas seguidas com ponto, principalmente na description e na abertura, viram uma frase corrida. Varie o tamanho, com algumas frases bem curtas e algumas bem longas.
- **Dois-pontos só antes de lista, tabela ou bloco de código.** Sem ponto e vírgula e sem travessão.
- **Título limpo.** Sem penduricalho entre parênteses ("(e a maioria dos outros)"), sem "Tema: subtítulo" e sem verbo de efeito ("Desvendando", "Dominando").
- **Conteúdo que só o João tem.** Data, quanto tempo levou, número dele, o que deu errado, a ferramenta e a versão. Todo parágrafo precisa de pelo menos uma coisa assim. Sem isso, nenhuma regra de estilo salva o texto.
- **Sem analogia genérica.** O João detesta. Motor e carro, canivete suíço, receita de bolo, "é como se" saem. Analogia só entra se for dele, tirada de uma experiência dele. Na dúvida, explique literal.
- **Tabela só com dados.** Nome de comando, número, sim e não, uma ou duas palavras por célula. Explicação, porquê e opinião ficam no texto, nunca dentro da tabela.
- Termos técnicos em inglês sem tradução (deploy, harness, workflow). O João tem opinião e fala dela, e também diz quando não sabe ou quando mudou de ideia.

Antes de escrever, leia os posts que já existem em `src/content/blog/pt/` para pegar o ritmo, e leia `references/padroes-ia.md` inteiro (seções de regras do João, pontuação e ritmo, frases, vocabulário e voz).

Não use a skill `escrever-como-joao` em post. Ela foi calibrada com mensagens curtas de WhatsApp e corta demais um texto longo.

### 6. Revise (obrigatório, nesta ordem)

Nenhum post vai para o João sem passar por todas estas etapas. Não pule nenhuma, nem com pressa, nem num post curto, nem numa edição pequena.

1. **Estrutura:** rode o checklist de diagnóstico de `estrutura.md` (abertura lenta, seções iguais, frase que não acrescenta, conclusão forçada, título que não bate com a abertura).
2. **SEO:** rode o checklist de `seo.md`.
3. **Humanizer, primeira passada:** chame a skill `humanizer:humanizer` com o post inteiro e aplique o que ela apontar, sem mudar fatos nem estrutura.
4. **Padrões de IA:** rode a "Checagem antes de publicar" de `references/padroes-ia.md`, item por item, incluindo as buscas por regex e o script `scripts/medir_voz.py`. Leia cada ocorrência no contexto antes de mudar. As regras do João valem sempre: dois-pontos só antes de lista, tabela ou bloco de código, sem ponto e vírgula, título sem parênteses, menos ponto e mais vírgula, primeira pessoa e português falado.
5. **Humanizer, segunda passada:** chame o `humanizer:humanizer` de novo no texto já corrigido. A primeira passada e as correções costumam criar padrões novos ao trocar um vício por outro, e a segunda pega esses.

Faça o mesmo nas traduções e em qualquer texto para outras plataformas (LinkedIn, TabNews, Dev.to, Reddit) antes de mostrar ou publicar.

Cuidado para a revisão não "polir" o texto. Revisar com LLM tende a cortar primeira pessoa e marcas de fala e a alongar palavras, mesmo quando o pedido é preservar a voz (van Nuenen, 2026). Depois de cada passada, rode `scripts/medir_voz.py` de novo e compare com a versão anterior. Se a primeira pessoa caiu, se os pontos passaram as vírgulas ou se o desvio do tamanho das frases encolheu, a passada piorou o texto, e o que ela tirou volta.

### 7. Mostre ao João e itere

Mostre na própria mensagem do chat, com o post em markdown normal para que ele já apareça formatado. Nunca coloque o post dentro de um bloco de código com três crases: isso quebra a visualização, e o João quer ver títulos, tabelas e negrito renderizados.

1. 3 a 5 opções de título, com a recomendada marcada e o porquê.
2. A `description` proposta e as tags.
3. O post completo em PT, renderizado. O frontmatter não precisa aparecer como YAML: título, description e tags já estão nos itens acima.
4. As "ideias de fora", se houver.
5. Uma linha com o que você não conseguiu confirmar.

Espere ele revisar. Ele itera várias vezes, e cada pedido dele vale para esta e para as próximas versões.

### 8. Publique só depois da aprovação

1. Traduza para EN e ES. Mantenha estrutura, links e código, e adapte título, `description` e termos de busca ao jeito que se procura naquele idioma (ver `seo.md`). Não faça tradução literal.
2. Crie os 3 arquivos com o mesmo slug (ver "Arquivos").
3. Rode `npm run build` e confirme que saiu sem erro.
4. Faça o commit e o push para o `master`, e só com a aprovação do João. O deploy é automático: o Cloudflare Pages publica a cada push no `master`.

## Versões para outras plataformas

Quando o João pedir as versões para outras plataformas, entregue arquivos `.md` separados, fora do repositório (no scratchpad da sessão), e mande pelo chat com a ferramenta de enviar arquivo para ele abrir e copiar. Use o idioma que ele pedir, e PT se ele não disser. São seis arquivos:

1. **`post-completo.md`, para o Reddit.** É o `.md` cru do próprio post, igual ao do blog, sem frontmatter, sem título, sem rótulo e sem nada em volta. Os links internos viram URLs completas do joaopster.com.
2. **`tabnews.md`, a versão para o TabNews.** O TabNews aceita no máximo 20.000 caracteres por publicação, então essa versão é o post resumido. Mantenha a abertura, a tese, a estrutura de seções e os links principais, e encurte o resto: corte citações longas, junte parágrafos, troque listas grandes por uma frase com os links e tire detalhe secundário. Nunca tire fato que muda o sentido nem a opinião do João. No fim, depois de uma linha `---`, uma frase avisando que é uma versão resumida e que o post completo, com todas as fontes, está no blog, e o link do post no blog na última linha. Conte os caracteres do arquivo inteiro com script e confirme que fica em até 20.000. Se o post completo já couber, a versão do TabNews é o próprio post com o aviso e o link no fim.
3. **`linkedin-artigo.md`, o post completo para a função de artigos do LinkedIn.** É igual ao `post-completo.md`, só que sem tabela, porque o editor de artigos do LinkedIn não renderiza tabela de markdown (títulos e links funcionam). Reescreva cada tabela como texto normal, de preferência uma lista em que cada item é uma linha da tabela escrita como frase natural, sem repetir o cabeçalho em cada item ("Mesma coisa, 30 dias sem treino" em vez de "Vai pra Anthropic? sim. Chave desligada, 30 dias").
4. **`linkedin-post.md`, o post curto para o feed do LinkedIn.** É texto puro, sem markdown, de 1.200 a 1.800 caracteres, com a tese, um caso concreto do João, um ou dois números dele, a dica prática e o link do post no blog no fim. Passe as regras de `references/padroes-ia.md` (seção LinkedIn e redes), ou seja, sem hashtag empilhada, sem emoji de marcador, sem uma frase por parágrafo, sem gancho vazio e sem fecho do tipo "E você, o que acha?".
6. **A capa do artigo do LinkedIn, em PNG.** Gere com `npm run cover -- <lang>/<slug>` (ex.: `npm run cover -- pt/anthropic-evil-corp`). O script `scripts/generate-linkedin-cover.mjs` lê o título e as tags do frontmatter e desenha uma capa de 1920x1080 (16:9, o tamanho que os guias de 2026 indicam para capa de artigo do LinkedIn) com o mesmo visual da imagem de preview do blog. Tudo fica numa área central com margem larga dos lados, porque o LinkedIn corta as laterais no celular. O arquivo sai em `linkedin-covers/` (fora do git). Abra a imagem antes de entregar para conferir que o título coube.
5. **`x-threads.md`, um post só para X e Threads.** É texto puro com o link do post no blog na última linha. O total, contando o link inteiro, fica em até 280 caracteres, que é o limite do X sem assinatura e cabe com folga nos 500 do Threads. Conte com script antes de entregar. Valem as mesmas regras do post curto do LinkedIn.

Na mesma mensagem, mande o título do post e o link do post no blog, cada um num bloco de código próprio, para o João copiar com um clique. Faça isso também sempre que ele pedir só o título ou só o link. Exemplo:

````markdown
```text
O harness do Claude Code deixou meu workflow obsoleto
```

```text
https://joaopster.com/blog/claude-code-harness-workflows-obsoletos/
```
````

Antes de entregar, rode nos textos escritos do zero, resumidos ou reescritos (o do TabNews, o artigo do LinkedIn, o post curto do LinkedIn e o do X/Threads) a mesma revisão do passo 6.

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
