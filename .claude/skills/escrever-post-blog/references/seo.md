# SEO para os posts

Esta referência usa a documentação oficial do Google Search Central, consultada em novembro de 2026. Quando uma recomendação vem de outra fonte, isso está marcado.

- [Creating helpful, reliable, people-first content](https://developers.google.com/search/docs/fundamentals/creating-helpful-content)
- [SEO Starter Guide](https://developers.google.com/search/docs/fundamentals/seo-starter-guide)
- [Title links](https://developers.google.com/search/docs/appearance/title-link)
- [Snippets e meta description](https://developers.google.com/search/docs/appearance/snippet)
- [AI features and your website](https://developers.google.com/search/docs/appearance/ai-features)

## O princípio

O Google prioriza conteúdo feito para pessoas, e não para manipular ranking. SEO, para ele, é ajudar os buscadores a entender um conteúdo que já é bom. Isso também vale para AI Overviews e AI Mode: o Google diz que não existe otimização especial nem schema especial para aparecer neles, e que valem os mesmos fundamentos.

Para este blog, isso quer dizer: o que mais pesa é o post ser útil e mostrar **experiência de primeira mão**. O Google pergunta explicitamente se o conteúdo mostra experiência de quem de fato usou o produto ou serviço. O João usa as ferramentas sobre as quais escreve. Deixe isso claro no texto, com o que ele usou, por quanto tempo, os números reais e o que deu errado.

## Checklist do post

### Conteúdo

- [ ] Traz informação ou análise original, e não um resumo do que outros já disseram.
- [ ] Tem experiência de primeira mão visível: "eu usei", "no meu setup", números reais.
- [ ] Cobre o assunto o suficiente para o leitor não precisar procurar de novo em outro lugar.
- [ ] Afirmações importantes têm link para a fonte: doc oficial, repositório, post.
- [ ] Nenhum erro factual fácil de verificar. Confira nomes de comandos, versões e datas.
- [ ] Sem erro de ortografia.

### Título (`title`)

O título do frontmatter vira o `<title>` da página, o `og:title` e o `h1`. Ele é usado do jeito que está, sem o nome do site.

- [ ] Descreve o conteúdo e é conciso. O Google corta o título no resultado conforme a largura da tela, então o assunto vem no começo.
- [ ] Contém o termo que a pessoa buscaria, escrito de forma natural, uma vez só. Repetir palavras-chave no título parece spam para o Google.
- [ ] Não é exagerado nem chocante.
- [ ] É único: nenhum outro post tem título parecido.
- [ ] Está no mesmo idioma do texto. O título em EN vai em inglês e o em ES em espanhol, senão o Google pode trocar o título por outro texto da página.

### Description (`description`)

Vira a `meta description`, o `og:description` e o resumo na listagem do blog.

- [ ] Resume o post daquela página especificamente, em 1 a 2 frases. Não é slogan nem lista de palavras-chave.
- [ ] Diz o que o leitor encontra e o porquê de ler, com um detalhe concreto (um número, uma ferramenta).
- [ ] Coloque o mais importante no começo: o Google corta o snippet conforme a largura da tela. Como referência que não é do Google, cerca de 150 a 160 caracteres costumam aparecer inteiros.
- [ ] É única por post e por idioma.

O Google às vezes monta o snippet com um trecho do próprio texto, em vez de usar a description. Por isso o primeiro parágrafo também precisa resumir bem o post.

### URL (slug)

- [ ] Tem palavras que dizem o assunto, separadas por hífen. O Google mostra partes da URL como breadcrumb e recomenda palavras úteis, e não identificadores.
- [ ] É curta e sem acento.
- [ ] Nunca mude o slug de um post publicado: muda a URL e quebra os links que já apontam para ele.

### Estrutura

- [ ] Um único título principal. O layout já renderiza o `title` como `h1`, então o texto do post começa nos `##`. Não use `#` no corpo.
- [ ] Os `##` descrevem o conteúdo e seguem a hierarquia (`###` só dentro de `##`).
- [ ] O termo principal aparece de forma natural no primeiro parágrafo e em pelo menos um `##`.
- [ ] Seções que respondem a uma pergunta começam pela resposta, em 1 a 2 frases que fazem sentido lidas sozinhas. Isso vem de guias de "GEO" (otimização para buscadores com IA) do mercado, e não do Google, mas é boa escrita de qualquer jeito: o leitor que chegou pela busca acha a resposta rápido.
- [ ] Tabelas e listas para comparações e passos. São fáceis de ler e de extrair.

### Links

- [ ] **Links internos:** quando fizer sentido, linke 1 a 3 posts do próprio blog. O Google descobre páginas principalmente por links e recomenda conteúdo fácil de achar por links internos.
- [ ] **Links externos** para as fontes: docs oficiais, repositórios, o post original no Reddit.
- [ ] **Texto do link descritivo:** "o [post sobre migrar do Cursor](/blog/migrei-cursor-para-claude-code/)", e não "clique [aqui](...)".
- [ ] Link interno no idioma certo: `/blog/...`, `/en/blog/...` ou `/es/blog/...`.

### Imagens (quando tiver)

- [ ] Ficam em `src/assets/` e são importadas, nunca em `public/`, conforme a convenção do repositório.
- [ ] Têm texto alternativo que descreve a imagem: `![Saída do /workflow lançando 3 subagentes](...)`.
- [ ] Mostram algo real, como um print ou um diagrama, e não são decoração.

### Datas

- [ ] `pubDate` é a data real de publicação.
- [ ] `updatedDate` só entra quando o conteúdo mudou de verdade. O site manda essa data como `dateModified` no schema. O Google cita trocar a data sem mudar o conteúdo como sinal de alerta.

### O que não fazer

- Escrever para bater um número de palavras. O Google diz que não tem tamanho preferido.
- Repetir a palavra-chave para "otimizar".
- Escrever sobre um tema só porque está em alta, sem ter o que acrescentar.
- Prometer uma resposta que não existe, como uma data de lançamento não confirmada.
- Adicionar schema FAQ. O link da documentação de FAQPage do Google hoje redireciona para a página de atualizações. Guias do mercado dizem que o rich result de FAQ foi descontinuado em 2026, mas eu não confirmei isso na fonte oficial. Uma seção de perguntas só entra se ajudar o leitor, e não por SEO.
- Criar arquivos "para IA" (como `llms.txt`) ou markup especial. O Google diz que não precisa.

## Traduções (EN e ES)

- Traduza o sentido, não palavra por palavra. Título e description precisam soar naturais em cada idioma.
- Pense na busca de cada idioma: em inglês se procura "Claude Code workflow", e em espanhol pode ser outro termo. Use o termo que as pessoas usam naquele idioma, sem inventar volume de busca.
- Mantenha o slug igual nos três. É assim que o site liga as versões pelo hreflang.
- Links internos apontam para a versão do mesmo idioma.

## O que o site já faz sozinho (não refaça no post)

Conferido no código em novembro de 2026:

- `<link rel="canonical">`, `hreflang` (pt-BR, en, es, x-default), Open Graph e Twitter card, em `src/components/BaseHead.astro`.
- Schema `BlogPosting` com `headline`, `description`, `datePublished`, `dateModified` (do `updatedDate`), `inLanguage` e autor, em `src/layouts/BlogPost.astro`. Também tem `Person` e `WebSite` no site todo.
- Sitemap automático (`@astrojs/sitemap`) e RSS em `/rss.xml`, este só com os posts em PT.
- `robots` com `index, follow, max-image-preview:large`.

Lacunas conhecidas, que dependem de mudar código (avise o João, não resolva dentro do post):

- O `heroImage` do frontmatter não é usado em nenhum lugar. A imagem de compartilhamento (`og:image`) é sempre a imagem genérica do site.
- O `<title>` é só o título do post, sem o nome do site.
