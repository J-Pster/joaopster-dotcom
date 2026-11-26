# Engajamento em post curto com link (X, Bluesky, Threads, Discord)

Pesquisa de 26/11/2026. Objetivo pedido pelo João: gerar curiosidade para a pessoa clicar no link, sem ser agressivo nem clickbait.

## O que os dados dizem

- **Lacuna de curiosidade funciona se for paga logo.** O texto diz que algo aconteceu ou que existe uma resposta, sem entregar tudo, mas não pode ser vago a ponto de a pessoa não saber do que se trata, e a promessa tem que ser cumprida no post. Lacuna que fecha numa bobagem ensina o leitor a não clicar de novo. Fontes: Buffer, "Good Hooks" (ago/2025), https://buffer.com/resources/good-hooks/ e ViralLoop, análise de 19 posts com abertura de curiosidade (set/2026), https://getviralloop.com/blog/hook-curiosity-gap
- **Abrir com um momento vivido rende mais que abrir com pergunta.** No LinkedIn, post que abre contando uma situação teve +31% de engajamento contra abertura com afirmação forte, e abertura com pergunta teve -6%. Post com experiência própria teve +41%, e post com coisa concreta (número, nome de ferramenta, lugar) teve +19%. Comparação dentro do mesmo autor, 754 a 1.031 autores. Fonte: Ligo Social, achados de 2026, https://ligosocial.com/research/data/linkedin-2026-all-findings.csv
- **Nomear a ferramenta na primeira linha** teve associação de +28% de curtidas em 7.455 posts de IA no X (observacional, só posts que já tinham engajamento alto). Fonte: Promptslove, estudo de 21.864 posts (set/2026), https://promptslove.com/blog/studied-viral-x-tweets-research/
- **No X o link derruba o engajamento.** Post com link teve 41% menos engajamento que os outros posts da mesma conta (31.957 contas, 30 dias até 26/11/2026), e na Buffer o engajamento de post com link em conta sem Premium foi a zero depois de mar/2025. É observacional, e quem estuda avisa que pode ser o tipo de post e não o algoritmo. Fontes: PlayerSells, https://playersells.com/insights/links-and-reach e Buffer (out/2025), https://buffer.com/resources/links-on-x/
- **No Bluesky o card de link não perde para imagem.** Na mediana de 14 contas, imagem rendeu 1,03 vez o card de link, ou seja, empate. Fonte: RecurPost, 45.026 posts do Bluesky (set/2026), https://blog.recurpost.com/two-beliefs-about-posts-measured/
- **Se o objetivo é visita ao blog, o que vale é clique, não curtida.** Um post com menos curtida e mais clique é melhor resultado. Fonte: Promptslove, mesmo estudo.

## Como escrever

1. Primeira frase conta o que aconteceu com o João ou o que ele foi fazer ("Li um artigo...", "Fui conferir...", "Desinstalei..."), com o nome da ferramenta ou da empresa nela. Nada de pergunta na abertura.
2. Depois, um ou dois fatos concretos e verdadeiros do post, de preferência o mais surpreendente que o leitor não sabe (um número, um detalhe que contraria o senso comum).
3. Deixe uma pergunta aberta na cabeça do leitor sem fazer pergunta retórica. Diga que a resposta existe e onde está ("No post tem cada mecanismo com a fonte"), sem entregar o veredito inteiro.
4. Tudo que o texto promete tem que estar no post. Confira no `.md` do post antes de entregar.
5. Link no fim. No X, se o João quiser, o link pode ir no primeiro comentário, porque post com link tende a render menos lá (dado observacional, não regra do X).
6. Proibido: "você não vai acreditar", "ninguém fala sobre isso", "o segredo que...", "fio 🧵", CAIXA ALTA, emoji de marcador, hashtag empilhada, pedido de curtida ou compartilhamento, número inventado, urgência falsa.
7. Valem as regras de voz da skill e de `padroes-ia.md`.

## Discord

- Limite de 2.000 caracteres por mensagem sem Nitro (de memória, não conferido em 26/11/2026). A skill usa de 500 a 1.000.
- O Discord renderiza markdown: `**negrito**`, `# título`, `## subtítulo`, `- lista`, `> citação`, `` `código` `` e `-# texto pequeno`. Use pouco, no máximo um título em negrito e um código inline quando tiver comando ou arquivo.
- Link solto gera um card com imagem e título do post. Para tirar o card, coloque o link entre `< >`. Nos posts do blog, deixe o card, que traz a imagem de preview.
- Poste só no canal de divulgação do servidor e leia as regras antes.
