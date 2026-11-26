# Padrões de texto de IA (referência do skill)

Este arquivo é a referência que o skill usa para revisar um rascunho antes de publicar. Ele junta o que sete linhas de pesquisa acharam em artigos científicos, corpora, guias de estilo, dados de vendors de detector e relatos de editores. Cada padrão vem com o nível de evidência e o link das fontes.

## Como usar

- Um padrão isolado não prova nada. Quem lê Dev.to, TabNews e LinkedIn usa muito LLM, e esse leitor reconhece o conjunto de sinais fracos mesmo depois de paráfrase e humanizador. No estudo de Russell et al. (ACL 2025), a maioria de cinco especialistas errou só 1 de 300 artigos, enquanto os leigos ficaram perto do acaso ([arXiv 2501.15654](https://arxiv.org/abs/2501.15654)).
- A prioridade vem nesta ordem. Primeiro o conteúdo real do João (o que ele fez, quando, quanto tempo levou, o que deu errado, o que ele acha). Depois estrutura, ritmo e voz. A lista de palavras vem por último, porque ela envelhece a cada versão de modelo. O Graphite achou 65% dos sinais exclusivos de uma família de modelo e 55 a 72% mudando entre versões seguidas ([Graphite](https://graphite.io/research/ai-tells)).
- As regras do João valem sempre, mesmo quando o dado medido aponta para outro lado. O Hastewire mediu que páginas humanas em PT usam mais ponto e vírgula e mais dois-pontos que artigos de IA ([Hastewire](https://hastewire.com/research/words-that-give-ai-away)). Isso não muda nada aqui, porque essas regras são a voz do João e não um detector.
- Trocar sinônimo não resolve. "Nesse contexto" virar "nesse cenário" mantém o molde. Corte a frase ou mude a estrutura dela ([humanizartexto.app](https://humanizartexto.app/expressoes-de-ia), Russell et al.).
- O skill roda em Claude, então os tiques do Claude (seção de vocabulário) têm prioridade. Os prompts de sistema do claude.ai que proíbem "genuinely", "honestly" e "actually" não valem na API nem no Claude Code, por isso o skill tem que carregar essa proibição ele mesmo.
- Revisão não pode "polir". Pedir para a IA melhorar ou só reescrever um texto humano corta primeira pessoa e contrações e alonga as palavras, e pedir para preservar a voz só reduz o efeito em cerca de um terço ([van Nuenen 2026](https://arxiv.org/abs/2604.22142)). Toda passada de revisão ou de tradução deve ser comparada com o rascunho do João em densidade de "eu", marcas coloquiais e variação no tamanho das frases.
- As tags de evidência são estas.

| Tag | Significado |
|---|---|
| [medido] | estudo ou corpus com números. Vendors de detector (Graphite, TextPulse, Pangram, Hastewire, AEO Content, Desloppy, Sem Lero-Lero) entram aqui, mas os números são autopublicados |
| [observado] | documentado por editores, guias de estilo ou vários praticantes, sem contagem confiável |
| [opinião] | uma fonte só, ou método não descrito |

## Regras do João (sempre)

### 1. Dois-pontos só antes de lista, tabela ou bloco de código

Dois-pontos no meio da frase para explicar ou revelar algo vira vírgula. O dado de apoio é específico do Claude. Numa amostra de 200 textos do Claude Opus 4.5 contra 6.000 textos humanos, os dois-pontos apareceram 4,1 vezes mais. O GPT fica perto da taxa humana [opinião, fonte única, mas casa com o padrão "revelação com dois-pontos" do slopdetector].

- Errado → "O resultado foi claro: o harness venceu."
- Certo → "No fim o harness ganhou, e com folga."

Fontes [prose-check](https://github.com/shandley/prose-check/blob/main/.claude/skills/human-writing/statistics.md), [arXiv 2608.12630](https://arxiv.org/html/2608.12630v1).

### 2. Sem ponto e vírgula

É uma regra de estilo do João. Os dados variam por modelo (menos ponto e vírgula no GPT, mais no Claude Opus 4.5), então não use isso como argumento de detecção.

- Errado → "O hook roda antes do commit; ele valida o lint."
- Certo → "O hook roda antes do commit e valida o lint."

### 3. Título sem penduricalho entre parênteses

Um título completo seguido de uma piscadela entre parênteses, como "(e a maioria dos outros)", "(e por que isso importa)" ou "(que realmente funcionam)", vem de receita de CTR de marketing de conteúdo. O dado da HubSpot e da Outbrain era sobre rótulo de formato tipo [Infográfico], e os manuais de SEO viraram isso em teaser. Hoje skills de SEO mandam o modelo fazer isso por padrão. Na contagem de um dos pesquisadores, nenhum dos 30 títulos do HN /best tinha teaser entre parênteses [observado]. Um rótulo que só diz o que o post contém, tipo "(com código)", é aceitável.

- Errado → "O harness do Claude Code deixou meu workflow obsoleto (e a maioria dos outros)"
- Certo → "O harness do Claude Code deixou meu workflow obsoleto"

Fontes [HubSpot/Outbrain](https://cdn2.hubspot.net/hub/53/file-2505556912-pdf/Data%5FDriven%5FStrategies%5FFor%5FWriting%5FEffective%5FTitles%5Fand%5FHeadlines.pdf), [Mnemosyne-AI title-formulas](https://github.com/dhaher-labs/Mnemosyne-AI/blob/main/skills/seo-content-writer/references/title-formulas.md), [HN best](https://news.ycombinator.com/best).

### 4. Menos ponto, mais vírgula (na description e no texto)

Uma description feita de três frases curtas com ponto lê como IA, e o mesmo vale para o corpo do texto. Em PT, a IA usa menos vírgula que o brasileiro. O modelo põe vírgula numa taxa quase igual em qualquer língua, e o brasileiro usa perto do dobro do inglês (d = -0,83 contra 403 posts do TabNews anteriores ao ChatGPT). As traduções do GPT-4o para PT também têm mais ponto que as humanas (108,2 contra 86,7 por mil tokens) [medido, preprint de autor único e corpus pequeno, então confie mais na direção que no tamanho do efeito]. O alvo é variar o tamanho das frases. Colocar frase longa em todo lugar não resolve (ver a seção de ritmo).

- Errado → "Criei um workflow com 20 comandos. Hoje o Claude Code faz quase tudo sozinho. O que mudou no harness e o que eu ainda uso por fora."
- Certo → "Criei um workflow com 20 comandos e 45 agentes e hoje o Claude Code faz quase tudo sozinho, então fui ver o que mudou no harness e o que eu ainda uso por fora"

Fontes [Imoto 2026](https://doi.org/10.5281/zenodo.21424903), [The Style of Machines, ACL 2026](https://aclanthology.org/2026.stygenai-1.5.pdf).

### 5. Gramática de conversa, não de prova

Gramática perfeita é pista de IA. Nas explicações dos especialistas de Russell et al., gramática e pontuação aparecem em 24,8% dos casos, e eles sabem que humano erra mais [medido]. A saída é o registro coloquial do português brasileiro. Erro de digitação inventado não entra (ver a seção "Erros de português de propósito?").

- Errado → "Há duas formas de fazê-lo, e cada uma delas apresenta vantagens."
- Certo → "Tem dois jeitos de fazer isso e cada um tem lá suas vantagens, me deu trabalho escolher."

Fonte [Russell et al. 2025](https://arxiv.org/html/2501.15654v2).

### 6. Primeira pessoa o tempo todo

É uma das maiores diferenças medidas entre texto humano e texto de IA. Em histórias, pronomes de primeira pessoa são 2,81% das palavras no humano e 0,21% no ChatGPT (d = 0,93). Em reescritas de IA a primeira pessoa cai 50% (TextPulse, 60.786 pares). Em redações, a mediana é de 29 autorreferências por mil palavras no humano e 0 no GPT-4o, e o mesmo vale para GPT-5.5, DeepSeek-V4 e Claude Sonnet 4.6 [medido]. Ponha o "eu" nas afirmações e nas opiniões, além das histórias.

- Errado → "Manter um workflow próprio de agentes é cada vez menos necessário, já que o harness oferece recursos nativos."
- Certo → "Eu parei de manter meu workflow de agentes porque o harness já faz quase tudo que eu tinha montado."

Fontes [Appel et al. 2025](https://www.nature.com/articles/s41599-025-06341-2), [TextPulse](https://textpulse.ai/research/ai-style-fingerprints), [HKU AJAL](https://caes.hku.hk/ajal/index.php/ajal/article/download/1554/780).

## Pontuação e ritmo

#### Ritmo monótono (pouca variação no tamanho das frases)

Os modelos aparam as frases longas e quase apagam as curtas e secas, e o texto fica numa faixa de 12 a 20 palavras. O humano alterna um período comprido, emendado com vírgula, com uma frase de duas palavras. Em PT-BR o desvio padrão de sílabas por frase foi 32,97 no humano e 9,93 na máquina. Contra o TabNews, a direção foi a mesma em todas as 70 combinações de modelo e língua. Em PT a média humana é até mais curta, só que varia muito mais.

- Errado → "Eu usava um workflow com vinte comandos. Ele funcionava bem. Com o tempo, o harness evoluiu. Hoje boa parte disso ficou desnecessária."
- Certo → "Eu tinha um workflow com vinte comandos e uns quarenta agentes que eu fui empilhando ao longo de um ano, cada um pra tapar um buraco que o Claude Code tinha na época, e aí veio a atualização do harness e metade disso virou peso morto. Apaguei."

[medido] [PROPOR 2026](https://aclanthology.org/2026.propor-2.22.pdf), [Imoto 2026](https://doi.org/10.5281/zenodo.21424903), [TextPulse burstiness](https://textpulse.ai/research/ai-burstiness-sentence-length), [Muñoz-Ortiz 2024](https://link.springer.com/article/10.1007/s10462-024-10903-2), [Desaire 2023](https://www.cell.com/cell-reports-physical-science/fulltext/S2666-3864(23)00200-X).

#### Parágrafos todos do mesmo tamanho

A IA faz uma parede de blocos arrumados de 2 a 3 frases. No humano, um parágrafo de oito frases convive com um de uma linha. Frases por parágrafo foi a 2ª feature mais importante de um classificador em PT-BR (13,7% do ganho). O único contraponto é um corpus chinês pareado, que não achou diferença.

- Errado → seis parágrafos seguidos de umas 40 palavras cada, todos fechando com frase de síntese.
- Certo → um parágrafo de 120 palavras contando o bug, depois "Pois é.", depois um parágrafo médio com o código.

[medido] [EPIA 2026](https://epia2026.web.uma.pt/PAPERS_EPIA26/paper_59.pdf), [Imoto JA](https://doi.org/10.5281/zenodo.21413035), [Desaire 2023](https://www.cell.com/cell-reports-physical-science/fulltext/S2666-3864(23)00200-X), [EDM 2024](https://educationaldatamining.org/edm2024/proceedings/2024.EDM-long-papers.9/2024.EDM-long-papers.9.pdf), [lieflat](https://github.com/larashero3-dotcom/lieflat-less-ai-tone/blob/main/RESEARCH.en.md).

#### Travessão (proibido, e conferir de novo na tradução)

O travessão virou sinal que depende do modelo. O Claude Opus 5.5 cortou 99% dele e o GPT-6 quase não usa. Só que as traduções do GPT-4o para PT e ES saem com 27,3 e 25,3 travessões por mil tokens, contra 0,0 nas traduções humanas. O teclado ABNT2 nem tem travessão. Mantenha a proibição em PT e ES e confira a versão EN depois da tradução. A exceção legítima é intervalo numérico (2024–2026).

- Errado → "O setup — que levou meses — ficou obsoleto em uma semana."
- Certo → "O setup, que levou meses pra montar, ficou obsoleto em uma semana."

[medido] [Style of Machines](https://aclanthology.org/2026.stygenai-1.5.pdf), [Graphite Opus 5.5](https://graphite.io/research/ai-tells-opus-5-5-update), [Washington Post via Boston Globe](https://www.bostonglobe.com/2025/11/13/business/chatgpt-writing-style-clues/), [Pew 2026](https://www.pewresearch.org/data-labs/2026/08/20/how-much-of-the-internet-is-written-with-ai/), [BBC Brasil](https://www.bbc.com/portuguese/articles/c4gkwxq8we3o).

#### Pouca variedade de pontuação (parênteses, "!" e "?" no corpo são humanos)

Em PT-BR, a diversidade de pontuação é a feature mais forte do lado humano (δ = +0,725). O humano usa ponto de exclamação mais de cem vezes mais que os modelos atuais, e muito mais aparte entre parênteses e aspas. Em PT, páginas humanas têm 2,18 interrogações e 2,44 exclamações por mil palavras, contra 0,34 e 0,04 na IA. A regra 3 do João vale para títulos. No corpo, um aparte de verdade e um "!" contam a favor. Não apague os apartes do João numa passada de humanização.

- Errado → "Esse hook roda antes de cada commit. Ele valida o lint. Isso evita retrabalho."
- Certo → "Esse hook roda antes de cada commit e valida o lint (demorei uns três meses pra perceber que dava pra fazer isso), funciona!"

[medido] [EPIA 2026](https://epia2026.web.uma.pt/PAPERS_EPIA26/paper_59.pdf), [Graphite](https://graphite.io/research/ai-tells), [Hastewire](https://hastewire.com/research/words-that-give-ai-away), [Alonso Simón 2025](https://doi.org/10.58859/rael.v23i1.666).

#### Pergunta de verdade, deixada em aberto

É diferente da pergunta retórica respondida na hora ("O resultado? X"), que é coberta como sinal de IA. O humano deixa pergunta aberta, pergunta ao leitor ou pergunta a si mesmo.

- Errado → "Não está claro se o harness vai suportar isso no futuro."
- Certo → "Será que na próxima versão eles resolvem a ordem dos hooks? Não sei, mas eu apostaria que sim."

[medido] [Hastewire](https://hastewire.com/research/words-that-give-ai-away), [TextPulse](https://textpulse.ai/research/ai-style-fingerprints).

#### Staccato de ponto com fecho de impacto (estilo LinkedIn)

São frases curtas com ponto, uma palavra repetida e uma frase de efeito no fim. Leitores brasileiros descrevem isso como "tara por usar ponto". É o mesmo problema de pouca variação, só que pelo lado curto.

- Errado → "É pensar diferente. Planejar diferente. Automatizar diferente. E isso muda tudo."
- Certo → "Eu tive que repensar como eu planejo as tarefas, porque metade do que eu automatizava o harness já faz."

[observado] [Miqueleto](https://pt.linkedin.com/posts/rafamiqueleto_nao-sei-voc%C3%AAs-mas-d%C3%A1-pra-notar-muito-f%C3%A1cil-activity-7350896618423889920-QCxT), [Andrade](https://pt.linkedin.com/posts/arthurandraderj_eu-n%C3%A3o-aguento-mais-posts-de-ia-que-s%C3%A3o-activity-7465359922877247488-D5QK), [Cruz](https://pt.linkedin.com/posts/wellingtoncruz_o-linkedin-est%C3%A1-cheio-de-textos-assim-escrito-activity-7382148149491941376-wFJL).

#### Frases vizinhas com a mesma forma

Duas ou três frases seguidas usam o mesmo molde, e o texto ganha batida de metrônomo. No corpus chinês pareado isso apareceu 1,96 vez mais na IA. Não há medição em PT.

- Errado → "O harness gerencia os subagentes. O harness controla os hooks. O harness carrega as skills."
- Certo → "O harness gerencia os subagentes e os hooks, e as skills ele carrega sozinho quando o pedido bate com a descrição."

[medido, só em chinês] [lieflat](https://github.com/larashero3-dotcom/lieflat-less-ai-tone/blob/main/RESEARCH.en.md).

#### Itálico numa palavra só para dar ênfase

O Claude põe uma palavra em itálico (*nunca*, *antes*) de 11 a 27 vezes a cada 10 mil palavras em romances. Ninguém mediu a taxa humana, mas blog brasileiro quase não faz isso.

- Errado → "Eu *nunca* rodo isso *antes* do review."
- Certo → "Isso eu não rodo antes do review de jeito nenhum."

[medido, sem base humana] [Bitsy](https://wiki.bitsy.services/wiki/ai/verbal-tics/anthropic-claude/).

## Frases

#### Gerúndio de cauda (", garantindo", ", permitindo", ", tornando")

É o equivalente em PT da oração de particípio que fecha a frase em inglês. O GPT-4o usa esse tipo de oração 5,3 vezes mais que o humano, e os modelos base ficam na taxa humana, então quem causa isso é o instruction tuning. Cada gerúndio acrescenta uma segunda afirmação que ninguém pediu.

- Errado → "Migrei o pipeline para o harness, reduzindo o tempo de build e permitindo que o time focasse no produto, garantindo entregas mais rápidas."
- Certo → "Migrei o pipeline pro harness e o build caiu de 8 pra 3 minutos, o resto do ganho eu ainda não sei medir."

[medido, em inglês] [Reinhart et al. PNAS 2025](https://www.pnas.org/doi/10.1073/pnas.2422455122), [Wikipédia PT](https://pt.wikipedia.org/wiki/Wikip%C3%A9dia:Sinais_de_texto_gerado_por_intelig%C3%AAncia_artificial).

#### Estilo nominal (-ção, -mento, -dade no lugar do verbo)

A IA transforma ação em substantivo, como "a implementação de" ou "a otimização do". O GPT-4o faz isso 2,1 vezes mais que o humano, e as reescritas de IA passam de 58 para 75 nominalizações por mil palavras (d = 1,12). No corpus em PT, o humano tem mais verbos e pronomes e a máquina mais substantivos e adjetivos. Se uma frase tem mais de um -ção, -mento ou -dade, transforme pelo menos um em verbo com "eu".

- Errado → "A implementação da migração possibilitou a redução do tempo de execução e a melhoria da manutenibilidade."
- Certo → "Quando eu migrei, os testes ficaram mais rápidos e mexer no código ficou menos chato."

[medido] [Reinhart et al.](https://www.pnas.org/doi/10.1073/pnas.2422455122), [TextPulse](https://textpulse.ai/research/ai-style-fingerprints), [PROPOR 2026](https://aclanthology.org/2026.propor-2.22.pdf), [Terčon & Dobrovoljc](https://arxiv.org/pdf/2510.05136v1.pdf).

#### Pares com "e" (rápido e confiável, segurança e escalabilidade)

É a versão de dois itens da tríade, que soa equilibrada e diz pouco. Em PT-BR, a máquina tem mais adjetivo coordenado com "e" (d = 0,512), e o humano coordena verbos ("fiz, testei e desisti"). Fique só com a palavra que é verdade.

- Errado → "O setup ficou mais simples e eficiente, com mais segurança e escalabilidade."
- Certo → "O setup ficou menor, eu apaguei uns doze comandos e ninguém sentiu falta."

[medido] [EPIA 2026](https://epia2026.web.uma.pt/PAPERS_EPIA26/paper_59.pdf), [Reinhart et al.](https://www.pnas.org/doi/10.1073/pnas.2422455122).

#### Contraste formal em série (mas, porém, contudo, no entanto)

Em PT-BR, o padrão de dependência mais forte do lado da máquina é verbo coordenado com "mas" (d = 0,632), o que dá um texto de argumentação montada. O humano avança somando coisas com "e", "aí" e "daí". Deixe um "mas" onde houver virada de verdade.

- Errado → "O Claude Code faz quase tudo sozinho, mas ainda tem limites. Porém, isso não é um problema, contudo exige atenção."
- Certo → "O Claude Code faz quase tudo sozinho e eu fui desligando meus comandos um por um, sobrou o de deploy que eu não confio nele pra rodar."

[medido] [EPIA 2026](https://epia2026.web.uma.pt/PAPERS_EPIA26/paper_59.pdf).

#### Variantes do "não é X, é Y" (menos X e mais Y, em vez de simplesmente, ", não Y")

Quando o modelo aprende a evitar "não é X, é Y", o contraste muda de lugar. O Claude Opus 5 usa "less like a _ and more like" 105 vezes mais que o humano e "rather than merely" 160 vezes mais, e o GPT-6 Astra usa "the _ is not simply" 576 vezes mais. Em textos do Claude Code, a cauda ", não Y" aparece 7,9 vezes a cada 10 mil palavras, contra 1,4 de todas as palavras clássicas de IA somadas. Em PT os moldes são "menos um X e mais um Y", "é mais do que um X", "em vez de simplesmente", "não se trata apenas de" e ", não um X". Diga o Y direto.

- Errado → "O Claude Code hoje é menos uma ferramenta e mais um colega de time. O problema era de contexto, não de modelo."
- Certo → "Hoje eu deixo o Claude Code rodar a suíte de testes e abrir o PR sozinho, eu só reviso. O modelo tava ok, faltava contexto."

[medido] [Graphite](https://graphite.io/research/ai-tells), [Graphite Opus 5.5](https://graphite.io/research/ai-tells-opus-5-5-update), [Bitsy](https://wiki.bitsy.services/wiki/ai/verbal-tics/anthropic-claude/), [Pangram](https://www.pangram.com/signs-of-ai-writing).

#### Negação em duas frases ("Não é X. É Y.")

É o contraste partido em duas frases curtas, e ainda gera o ritmo de ponto que o João já marcou. Na web, o paralelismo negativo quase triplicou entre 2023 e 2025 (de 0,87 para 2,72 a cada 10 mil palavras).

- Errado → "Não é sobre a ferramenta. É sobre o processo."
- Certo → "A ferramenta mudou pouco, o que mudou foi como eu organizo o trabalho antes de abrir ela."

[medido] [Pew 2026](https://www.pewresearch.org/data-labs/2026/08/20/how-much-of-the-internet-is-written-with-ai/), [Bitsy](https://wiki.bitsy.services/wiki/ai/verbal-tics/anthropic-claude/).

#### Oração explicativa no fim (", o que explica por que", ", e é por isso que")

A frase termina explicando a si mesma. Em texto do Claude Code isso aparece 13,7 vezes a cada 10 mil palavras, e não há base humana.

- Errado → "O contexto enche rápido, o que explica por que o agente esquece as regras no meio da tarefa."
- Certo → "O contexto enche rápido e no meio da tarefa o agente esquece as regras, eu vi isso acontecer umas três vezes ontem."

[medido, sem base humana] [Bitsy](https://wiki.bitsy.services/wiki/ai/verbal-tics/anthropic-claude/).

#### Rótulo como sujeito ("O pulo do gato é", "A verdade é que", "O segredo é")

Um substantivo-rótulo abre a frase e anuncia a revelação antes de ela chegar. É a versão nova do "Here's the thing". Em PT aparece como "A pegadinha é", "A resposta honesta é", "O grande lance é" e "E aqui está a sacada".

- Errado → "O pulo do gato é simples: deixar o agente planejar antes de codar."
- Certo → "Eu peço o plano antes do código, e só isso já cortou metade das idas e voltas."

[observado] [Bitsy](https://wiki.bitsy.services/wiki/ai/verbal-tics/anthropic-claude/), [PostHero](https://posthero.ai/blog/ai-words-to-avoid), [Claudisms](https://claudisms.ai/).

#### Anúncio com contagem ("Duas ressalvas.", "Três coisas mudaram.")

É uma frase solta que diz quantos itens vêm antes de dar os itens, e ela ainda puxa a tríade. Apareceu 69 vezes em 279.575 palavras escritas pelo Claude.

- Errado → "Três coisas mudaram. Primeiro, o contexto. Segundo, os hooks. Terceiro, os subagentes."
- Certo → "O que mais mudou pra mim foi o contexto, os hooks e os subagentes vieram depois e eu uso bem menos."

[medido, sem base humana] [Bitsy](https://wiki.bitsy.services/wiki/ai/verbal-tics/anthropic-claude/).

#### Sujeito inanimado e componente com vontade própria

Uma coisa vira sujeito ("o harness decide", "o contexto agradece", "a mudança chegou silenciosa") e toma o lugar de quem agiu, que normalmente é o João. Isso bate de frente com a regra 6.

- Errado → "O harness decide sozinho quando compactar, e o contexto agradece."
- Certo → "Eu deixei o harness compactar sozinho e parei de perder contexto no meio da tarefa."

[observado] [Bitsy](https://wiki.bitsy.services/wiki/ai/verbal-tics/anthropic-claude/), [Signal Box](https://research.signalbox.studio/research/opus-5-5-articles-vs-novels/), [paddo.dev](https://paddo.dev/blog/a-dial-worth-turning/).

#### Colocação pronominal de gramática (ênclise e mesóclise)

A IA segue a norma escolar ("Percebi-me", "atualizá-lo", "Dir-se-ia"). O brasileiro usa próclise e até começa frase com pronome, e isso já aparece em coluna de revista. Num blog pessoal, "atualizar ele" é natural. Ninguém mediu ênclise em texto de LLM, então a ligação com IA é inferência.

- Errado → "Percebi-me refém do meu próprio setup e decidi atualizá-lo."
- Certo → "Me peguei refém do meu próprio setup e resolvi atualizar ele."

[observado] [Valadares/UFVJM](https://site.ufvjm.edu.br/revistamultidisciplinar/files/2015/05/Fl%C3%A1vio-Valadares.pdf), [Veredas/UFJF](https://periodicos.ufjf.br/index.php/veredas/article/download/43701/28277/205892), [OpenL](https://blog.openl.io/pt/brazilian-vs-european-portuguese/).

#### Lítotes ("não é raro", "não foi nada mau")

É afirmar negando o contrário. A forma direta diz a mesma coisa com menos volta.

- Errado → "Não é raro o hook falhar, e o resultado não foi nada mau."
- Certo → "O hook falha direto, mas o resultado ficou bom."

[opinião] [Thais Paneto](https://pt.linkedin.com/posts/thaispaneto_escritacomia-produ%C3%A7%C3%A3odeconteudo-inteligenciaartificial-activity-7526739361875357697-N3O1).

#### Correção da regra antiga, voz passiva NÃO é sinal confiável

O GPT-4o usa passiva sem agente com cerca de metade da frequência humana. Não converta toda passiva em ativa como medida contra IA. Gerúndio de cauda e nominalização pesam muito mais. Passiva natural do João fica.

- Errado (regra cega) → "o revisor realizou o merge do PR ontem"
- Certo → "O PR foi mergeado ontem e eu só vi hoje de manhã."

[medido, em inglês] [Reinhart et al.](https://www.pnas.org/doi/10.1073/pnas.2422455122).

## Vocabulário PT e EN

#### Tiques de sinceridade do Claude (genuinamente, honestamente, sinceramente, de fato, realmente)

Os prompts de sistema da própria Anthropic proíbem "genuinely", "honestly" e "actually", mas só no claude.ai. O Claude Opus 5 escreveu "is genuinely" 1.021 vezes contra 4 em artigos humanos. Em 279 mil palavras do Claude Code, "genuinely" aparece 52 vezes e "actually" 114. Em PT os equivalentes são genuinamente, honestamente, sinceramente, de fato, na verdade (como enfeite), realmente e francamente.

- Errado → "Isso é genuinamente melhor que o setup antigo, e honestamente eu não esperava."
- Certo → "Ficou melhor que o setup antigo, e eu não esperava isso não."

[medido] [Prompt Opus 4.8](https://platform.claude.com/docs/en/release-notes/system-prompts/claude-opus-4-8), [Prompt Fable 5.1](https://platform.claude.com/docs/en/release-notes/system-prompts/claude-fable-5-1), [Graphite](https://graphite.io/research/ai-tells), [Bitsy](https://wiki.bitsy.services/wiki/ai/verbal-tics/anthropic-claude/).

#### Avisar que importa ("isso importa", "por que isso importa", "o que realmente importa")

É o sinal medido mais forte do Claude Opus 5.5. "This matters" aparece 116 vezes mais que no humano, "why _ matters" 92 vezes mais, e "distinction matters" nunca aparece em texto humano. Tire a frase e mostre a consequência.

- Errado → "Essa diferença importa porque muda a forma como trabalhamos."
- Certo → "Por causa disso eu parei de abrir três terminais."

[medido] [Graphite Opus 5.5](https://graphite.io/research/ai-tells-opus-5-5-update), [Graphite](https://graphite.io/research/ai-tells).

#### Palavras longas e latinizadas (utilizar, realizar, possuir, efetuar, disponibilizar, viabilizar, potencializar)

Em PT, a máquina usa mais sílabas por palavra (2,39 contra 2,17, d = 1,87) e palavras mais raras e mais tardias. O humano usa palavras aprendidas cedo, concretas e fáceis de imaginar. Use a palavra que você falaria em voz alta e nomeie objetos concretos (o terminal, o arquivo, a mensagem de erro).

- Errado → "Para realizar a migração, utilizei uma ferramenta que possui suporte nativo a hooks e disponibiliza diversas funcionalidades."
- Certo → "Pra fazer a migração eu usei uma ferramenta que já tem hook nativo e faz muita coisa sozinha."

[medido] [PROPOR 2026](https://aclanthology.org/2026.propor-2.22.pdf), [EPIA 2026](https://epia2026.web.uma.pt/PAPERS_EPIA26/paper_59.pdf), [Antonelli 2025](https://www.scielo.br/j/tl/a/PhbtJMN7DygfqTfnDnS8zZv/?format=pdf&lang=pt), [TextPulse](https://textpulse.ai/research/ai-style-fingerprints).

#### Palavras medidas do PT gerado (cenário, fundamental, essencial, crucial, especialmente, não apenas)

Contra páginas humanas sobre o mesmo assunto, "cenário" aparece em 30% dos artigos de IA e em 3% dos humanos. "Fundamental/essencial/crucial" aparece em 62% contra 11%, "especialmente" em 42% contra 6%, e "não apenas/não só" em 28% contra 8%. Outra análise em PT achou como termos do lado da máquina "além disso", "mas também", "em relação a", "importância", "é fundamental", "é essencial" e "para garantir". Do lado humano ficaram "por isso", "vai", "então" e "porque".

- Errado → "No cenário atual, é fundamental entender o harness, especialmente porque ele não apenas organiza os agentes, mas também..."
- Certo → "Hoje vale entender o harness, principalmente porque ele já organiza os agentes sozinho."

[medido] [Hastewire](https://hastewire.com/research/words-that-give-ai-away), [Rodrigues et al. 2026](https://pmc.ncbi.nlm.nih.gov/articles/PMC12969083/).

#### Densidade de conectivo formal (além disso, no entanto, dessa forma, nesse sentido)

Nenhum conectivo é proibido. O que denuncia é a densidade e o hábito de abrir parágrafo com um deles. Num corpus humano em PT (blogs brasileiros de 2018 a 2021, Wikipédia, Agência Brasil), 154 de 212 expressões típicas de IA nunca apareceram. Mesmo as mais comuns ficaram abaixo de uma por mil palavras ("no entanto" 0,27, "além disso" 0,18, "dessa forma" 0,12). A meta é zero ou uma por post. Corte o conectivo ou diga a relação de verdade ("por isso", "mesmo assim", "só que", "aí").

- Errado → "Além disso, o harness gerencia contexto. Dessa forma, nesse sentido, vale ressaltar que o workflow ficou mais leve."
- Certo → "O harness também gerencia o contexto sozinho, por isso eu apaguei o comando que fazia resumo da sessão."

[observado, corpus de um site só, sem revisão por pares] [Sem Lero-Lero](https://semlerolero.com.br/blog/palavras-que-entregam-texto-de-ia), [Exame](https://exame.com/tecnologia/examelab/como-saber-se-um-texto-foi-feito-por-inteligencia-artificial/), [Fast Company Brasil](https://fastcompanybrasil.com/ia/5-formas-identificar-texto-criado-inteligencia-artificial/).

#### Muleta de anúncio e família "vale X" (vale ressaltar, é importante destacar, cabe mencionar, vale lembrar)

A expressão anuncia que vem algo importante e não diz a coisa, e sai inteira sem levar sentido junto. No texto do Claude, a família "worth X" apareceu 85 vezes em 61 páginas.

- Errado → "Vale ressaltar que é importante destacar que os hooks continuam úteis."
- Certo → "Os hooks continuam úteis, eu uso um pra bloquear commit com segredo."

[observado] [Sem Lero-Lero](https://semlerolero.com.br/blog/palavras-que-entregam-texto-de-ia), [Exame](https://exame.com/inteligencia-artificial/estas-x-frases-entregam-que-seu-texto-foi-escrito-por-inteligencia-artificial-como-evitar/), [Bitsy](https://wiki.bitsy.services/wiki/ai/verbal-tics/anthropic-claude/), [IAê](https://iaenews.substack.com/p/as-100-palavras-que-fazem-seu-texto).

#### Adjetivo que avalia sem descrever (deliberado, consistente, sólido, significativo, robusto, prático)

Cada modelo tem o seu jogo. No Claude são deliberate (26x), steady, measured, dependable, thoughtful e meaningful. No GPT-6 são dependable (59x) e practical (26x). No Gemini são profound, immense e incredibly. No PubMed, 66% das palavras de estilo em excesso em 2024 eram verbos e 14% adjetivos. Troque por um número ou por um detalhe que dê para ver.

- Errado → "Uma solução incrivelmente prática, meticulosa e significativamente mais robusta."
- Certo → "Rodou 40 dias sem eu precisar mexer."

[medido] [Graphite](https://graphite.io/research/ai-tells), [Graphite Opus 5.5](https://graphite.io/research/ai-tells-opus-5-5-update), [Kobak et al.](https://pmc.ncbi.nlm.nih.gov/articles/PMC12219543/), [PROPOR 2026](https://aclanthology.org/2026.propor-2.22.pdf).

#### Totalizador e superlativo (o mecanismo inteiro, de longe o mais, cada um dos, absolutamente)

O Claude enquadra tudo como completo ou extremo. "Single most" e "arguably the most" nunca aparecem no GPT-6, e "every single" aparece 112 vezes mais no Claude Opus 5.

- Errado → "Esse é o mecanismo inteiro. É de longe a mudança mais importante do ano."
- Certo → "Pra mim foi a mudança que mais fez diferença esse ano, mas eu uso pouco das outras então posso estar enviesado."

[medido] [Graphite](https://graphite.io/research/ai-tells), [Bitsy](https://wiki.bitsy.services/wiki/ai/verbal-tics/anthropic-claude/).

#### Benefício sem custo (sem abrir mão de, sem perder, sem comprometer)

A IA promete ganho sem preço, e um post de dev de verdade diz o que custou. "Without requiring" aparece 70 vezes mais no GPT-6 e "without losing" 6,1 vezes mais no Claude Opus 5.

- Errado → "Simplifiquei o setup sem abrir mão da flexibilidade e sem perder controle."
- Certo → "Simplifiquei o setup e perdi umas coisas, o comando de review que eu tinha era melhor que o nativo e eu sinto falta dele."

[medido] [Graphite](https://graphite.io/research/ai-tells).

#### Prosa maneirista (metáfora no lugar da frase literal)

A Anthropic chama de "mannered prose" o hábito do Claude de enfeitar onde existe frase simples. Entram aí verbos de troca e de trabalho para coisas abstratas ("carrega o peso", "paga o preço", "faz o trabalho pesado", "ganha seu lugar") e "load-bearing" ("a peça que segura tudo"). O Claude Opus 5.5 ainda faz isso 1,6 vez mais que o humano. O guia da própria Anthropic sugere colocar no prompt "Please remove all mannered prose."

- Errado → "Esse hook é a peça que segura o resto, ele faz o trabalho pesado e paga o próprio custo."
- Certo → "Sem esse hook o build quebra, e ele roda em menos de um segundo."

[medido] [Guia Fable 5.1](https://platform.claude.com/docs/en/build-with-claude/prompt-engineering/prompting-claude-fable-5-1), [Graphite Opus 5.5](https://graphite.io/research/ai-tells-opus-5-5-update).

#### Analogia de prateleira ("pense nisso como um canivete suíço")

O estoque é pequeno (maestro de orquestra, canivete suíço, farol, ponte, bússola, andaime) e costuma vir com "Pense nisso como" ou "É como se". Piora quando a mesma metáfora atravessa o post todo ou quando se empilha comparação histórica ("assim como foi com a web, o mobile e a cloud").

- Errado → "Pense no harness como um maestro de orquestra, que coordena cada agente como um instrumento."
- Certo → "O harness faz o que eu fazia na mão com 20 comandos, ele decide sozinho qual agente chamar."

[observado] [tropes.fyi](https://tropes.fyi), [Bremner 2026](https://stevebremner.com/2026/08/metaphors-ai-overuses), [Cheng et al. 2026](https://pmc.ncbi.nlm.nih.gov/articles/PMC12808644/).

#### Transição para o futuro (olhando pra frente, o que vem pela frente, isso adiciona mais uma camada)

No Claude Opus 5.5, "looking ahead the" aparece 40 vezes mais que no humano, "adds another layer" 27 vezes e "what comes next" 24 vezes. No Gemini o vício é "além disso", "adicionalmente" e "em última análise".

- Errado → "Olhando pra frente, o que vem a seguir adiciona mais uma camada a essa discussão."
- Certo → "Semana que vem eu vou testar o mesmo fluxo no repo do trabalho, que é bem maior, e conto aqui se quebrou."

[medido] [Graphite Opus 5.5](https://graphite.io/research/ai-tells-opus-5-5-update).

#### Linguagem de benefício para o leitor (pode te ajudar a, facilita, é especialmente útil)

O Claude Opus 5.5 escorrega para tom de tutorial. "Is especially helpful" aparece 12 vezes mais e "can help you" 8 vezes mais que no Opus 5. Um post pessoal conta o que aconteceu com o João.

- Errado → "Esse hook é especialmente útil e pode te ajudar a evitar erros, tornando o fluxo mais fácil."
- Certo → "Esse hook me salvou de commitar um .env pelo menos duas vezes."

[medido] [Graphite Opus 5.5](https://graphite.io/research/ai-tells-opus-5-5-update).

#### Silenciosamente, discretamente, sem alarde

O advérbio sugere um drama escondido. Ele está na lista de vocabulário do GPT-6 de meados de 2026 e também aparece no Claude Code (silently 25 vezes, quietly 14).

- Errado → "A Anthropic mudou silenciosamente o harness e meu workflow ficou obsoleto sem alarde."
- Certo → "Eu só percebi que o harness tinha mudado quando li o changelog da 2.1."

[observado] [Wikipedia](https://en.wikipedia.org/wiki/Wikipedia:Signs_of_AI_writing), [Bitsy](https://wiki.bitsy.services/wiki/ai/verbal-tics/anthropic-claude/), [PostHero](https://posthero.ai/blog/ai-words-to-avoid).

#### Rotação de sinônimos (repita a palavra simples)

O humano repete o substantivo e até a mesma abertura de frase ("Eu...", "Eu..."). A IA varia (ferramenta, solução, plataforma) e fica com diversidade lexical maior dentro do texto (MATTR 0,785 no humano e 0,827 na IA). Em textos humanos, frases seguidas começam com a mesma palavra 7,2 vezes a cada 100 transições, contra 2,7 na IA. Isso corrige a regra antiga sobre aberturas repetidas, que deve mirar só anáfora de fórmula ("É pensar. É planejar."). Repetir "eu" ou repetir o substantivo é humano.

- Errado → "O harness executa a tarefa. A ferramenta então valida o resultado, e a solução por fim registra tudo."
- Certo → "O harness roda a tarefa, depois o harness valida e loga tudo. Eu gosto do harness por isso."

[medido] [TextPulse](https://textpulse.ai/research/ai-style-fingerprints), [Style of Machines](https://aclanthology.org/2026.stygenai-1.5.pdf), [EPIA 2026](https://epia2026.web.uma.pt/PAPERS_EPIA26/paper_59.pdf), [Russell et al.](https://arxiv.org/html/2501.15654v2).

#### Faltam "porque", "se", "quando", "ia", "acho que"

A IA usa menos conjunção causal e condicional e menos would, might e could, e usa mais "can". Em PT, escreva o raciocínio com "porque", "se" e "quando", e use condicional e hesitação ("ia", "teria", "acho que") no lugar de "é possível" e "pode-se". A medição é em inglês e a transposição para PT é inferência.

- Errado → "É possível configurar hooks para automatizar a validação. Pode-se também integrar com o CI."
- Certo → "Se eu tivesse descoberto os hooks antes, acho que nem teria escrito metade desses comandos, porque era isso que eles faziam."

[medido, em inglês] [Terčon & Dobrovoljc](https://arxiv.org/pdf/2510.05136v1.pdf).

#### Substantivo vazio (algo, coisa, nada, tudo)

O Claude pega um substantivo vazio onde existe um específico, muitas vezes em forma de máxima.

- Errado → "Algo mudou no harness, e nada mais foi igual."
- Certo → "O harness ganhou subagentes nativos, e aí meus 45 agentes ficaram sem função."

[medido, sem base humana] [Bitsy](https://wiki.bitsy.services/wiki/ai/verbal-tics/anthropic-claude/).

#### Decalque do inglês corporativo (no final do dia, entregar valor, mergulhar fundo, jornada, alavancar, desbloquear, navegar)

São expressões que soam passadas pelo tradutor, e algumas são calques diretos do vocabulário de IA em inglês (delve vira mergulhar, leverage vira alavancar, landscape vira cenário, testament vira "verdadeiro testemunho").

- Errado → "No final do dia, o que realmente entrega valor é mergulhar fundo na sua jornada com o Claude Code."
- Certo → "No fim das contas o que me ajudou foi ler o changelog do Claude Code, coisa que eu nunca fazia."

[observado] [unslop ptbr](https://github.com/badmuriss/unslop/blob/a952141f/references/ptbr.md), [Jefferson Barbosa](https://jeffersonfbarbosa.substack.com/p/voce-esta-falando-como-o-chatgpt), [O Tecido](https://otecido.com.br/article/o-escritorio-comecou-a-falar-como-o-chatbot), [Correria Digital](https://correria.digital/sotaque-de-ia/).

#### "Simplesmente", "basta", "é só", "fácil" em instrução

Em passo de tutorial, esses minimizadores soam como marketing e falam de cima com o leitor. O guia do Google e o da Vercel mandam evitar. Um "aí é só esperar o build" dentro da narrativa do João é fala normal e pode ficar.

- Errado → "Para resolver, basta simplesmente adicionar a flag e tudo funcionará facilmente."
- Certo → "Eu adicionei a flag --no-cache e o build passou."

[observado] [Google style](https://developers.google.com/style/tone), [Quegenx TELLS](https://github.com/Quegenx/agent-skills/blob/main/skills/anti-ai-slop/anti-slop-writing/TELLS.md).

#### Lista EN para as traduções (secundária, envelhece)

No PubMed o conjunto comum é across, additionally, comprehensive, crucial, enhancing, exhibited, insights, notably, particularly e within ("delves" r = 28,0). Pelo menos 13,5% dos resumos de 2024 passaram por LLM. O ChatGPT trocou delve por core (5x) e modern (mais de 8% das mensagens). A lista GPT-6 da Wikipedia tem challenge, clearer, dependable, foster, leverage, matters, practical, prioritize, quietly e steady. Use essas listas só como checagem secundária.

- Errado → "The core idea is a modern approach to agent orchestration."
- Certo → "The idea is simple, I stopped orchestrating agents myself."

[medido] [Kobak et al.](https://pmc.ncbi.nlm.nih.gov/articles/PMC12219543/), [Washington Post via Boston Globe](https://www.bostonglobe.com/2025/11/13/business/chatgpt-writing-style-clues/), [Wikipedia](https://en.wikipedia.org/wiki/Wikipedia:Signs_of_AI_writing).

## Títulos e descriptions

#### Título com dois-pontos ("Tema: subtítulo explicativo")

O LLM põe dois-pontos em quase todo título, até quando o prompt proíbe. Num teste, o Phi-3.5 fez isso em 97,8% de 3.006 manchetes, e o mesmo aconteceu com Claude 3.5 Sonnet e GPT-4o. Em títulos científicos, o ChatGPT-4 usou dois-pontos em 100% dos casos e os humanos em 30%. No HN /best, só 2 de 30 títulos tinham dois-pontos.

- Errado → "Claude Code Harness: como a nova arquitetura de agentes mudou meu workflow"
- Certo → "O Claude Code engoliu meu workflow"

[medido] [GATTINA CLiC-it 2024](https://aclanthology.org/2024.clicit-1.121.pdf), [Sebo et al. 2026](https://pmc.ncbi.nlm.nih.gov/articles/PMC13367301/).

#### Penduricalho entre parênteses (ver regra 3 do João) [observado]

#### Título comprido que quer conter o post inteiro

O título de IA tenta carregar ferramenta, método, resultado e público. Em títulos científicos, a mediana foi 16 palavras no ChatGPT e 12,5 no humano. Escolha um fato ou um sentimento.

- Errado → "Como o harness do Claude Code com subagentes, hooks e skills substituiu meu workflow de 20 comandos e 45 agentes"
- Certo → "Joguei fora 45 agentes que eu mesmo criei"

[medido] [Sebo et al.](https://pmc.ncbi.nlm.nih.gov/articles/PMC13367301/), [KASBA](https://kasba.or.kr/uploads/papers/NODE12408905.pdf).

#### Verbo de descoberta abrindo título (Desvendando, Desbloqueando, Dominando, Explorando, Revolucionando)

No Scopus, títulos com "Revolutionizing" foram de 80 em 2022 para 616 em 2023, e "Unveiling" e "Unlocking" cresceram mais de 130% ao ano. Em PT o molde é o gerúndio na abertura do título.

- Errado → "Desvendando o harness do Claude Code: o que muda para devs"
- Certo → "Fui ver o que o harness do Claude Code faz por baixo"

[medido] [Comas-Forgas et al. 2024](https://doi.org/10.1002/leap.1647).

#### Sem nenhuma palavra forte, ou com hype demais

Sem instrução, o título de IA sai neutro e explicativo. Em manchetes coreanas, 35,4% das de jornalistas tinham palavra estimulante, contra 12,5% das do ChatGPT. Quando alguém pede para ser "engajante", o modelo passa do ponto e vem com exclamação, CAPS e "CHOCANTE". O título humano tem uma palavra forte e honesta.

- Errado → "Uma análise das mudanças no harness do Claude Code e seus impactos no desenvolvimento"
- Certo → "Demorei seis meses pra perceber que o Claude Code já fazia o que meu setup fazia"

[medido] [KASBA](https://kasba.or.kr/uploads/papers/NODE12408905.pdf), [ACM TSC 2026](https://dl.acm.org/doi/full/10.1145/3839336), [Gherhes 2024](https://www.mdpi.com/2673-5172/5/4/110).

#### Power words de SEO (guia definitivo, tudo o que você precisa saber, [2026])

Arquivos de fórmula de SEO entregam essas palavras ao LLM como regra. Num blog pessoal, um post que se diz guia completo lê como fazenda de conteúdo.

- Errado → "Claude Code em 2026: o guia definitivo com tudo o que você precisa saber"
- Certo → "O que eu ainda configuro à mão no Claude Code"

[observado] [Mnemosyne-AI](https://github.com/dhaher-labs/Mnemosyne-AI/blob/main/skills/seo-content-writer/references/title-formulas.md), [EarnQuill](https://earnquill.com/blogging/how-to-write-blog-headlines).

#### Título de recapitulação ("X, e o que aprendi")

Primeiro vem o evento e depois a promessa de lições. É o molde "lições aprendidas" do LinkedIn, que apareceu em 26 de 100 posts de IA.

- Errado → "Criei 45 agentes, o harness tornou eles inúteis, e o que eu aprendi com isso"
- Certo → "Criei 45 agentes e o Claude Code tornou quase todos inúteis"

[observado] [Desloppy](https://desloppy.com/blog/why-your-linkedin-post-sounds-like-ai).

#### Título telegráfico sem artigo

Para encaixar palavra-chave, o modelo corta artigo e conectivo. Em PT isso lê como máquina, porque título humano mantém "o", "meu" e verbo.

- Errado → "Claude Code harness: agentes, hooks e workflows modernos"
- Certo → "Meu workflow de agentes virou peso morto"

[observado] [GATTINA](https://aclanthology.org/2024.clicit-1.121.pdf).

#### Title Case e ponto final em título PT

Em português, só a primeira palavra e os nomes próprios levam maiúscula. O Estadão também não põe ponto em título. Isso vale para o título do post e para os subtítulos.

- Errado → "## O Que Mudou No Harness Do Claude Code."
- Certo → "## O que mudou no harness do Claude Code"

[observado] [Manual do Estadão](https://www.estadao.com.br/manualredacao/esclareca/t.php), [Folha](https://www1.folha.uol.com.br/folha/circulo/manual_texto_m.htm), [Wikipédia PT](https://pt.wikipedia.org/wiki/Wikip%C3%A9dia:Sinais_de_texto_gerado_por_intelig%C3%AAncia_artificial).

#### Description repetida no primeiro parágrafo (introdução dupla)

No Astro, a description aparece embaixo do título, e o primeiro parágrafo costuma parafraseá-la. Isso dá duas chances para o mesmo molde aparecer. O primeiro parágrafo deve começar depois do que a description disse.

- Errado → description "Criei um workflow com 20 comandos e hoje o Claude Code faz quase tudo sozinho" e primeiro parágrafo "Há alguns meses eu criei um workflow com 20 comandos. Hoje, o Claude Code faz quase tudo isso sozinho."
- Certo → mesma description, e o primeiro parágrafo "O que me fez perceber foi um sábado que eu fui atualizar o OMC e metade dos comandos dava conflito com os nativos."

[observado] [AEO Content](https://aeocontent.com/research/which-parts-of-an-ai-written-article-give-it-away/), [Mike Fluff](https://www.mikefluff.com/pt/ai-text-checker).

#### Subtítulo genérico e excesso de subtítulos

"Introdução", "Contexto", "Por que isso importa", "Principais aprendizados", "Desafios e perspectivas" e "Considerações finais" caberiam em qualquer artigo. O modelo também põe subtítulo sem ninguém pedir. 40% dos artigos de IA em PT tinham headings Markdown, e um corpus chinês mediu cerca de 10 subtítulos por artigo gerado contra 1 ou 2 no humano. Para um post de 900 palavras, use de 0 a 3 subtítulos que nomeiem o que está ali. O contraponto é um piloto com N = 60, que não achou diferença significativa no uso de headers.

- Errado → "## Por que isso importa", "## Desafios e perspectivas futuras", "## Considerações finais"
- Certo → "## O hook que eu não consegui matar", "## Onde o /code-review nativo ainda erra"

[medido para volume, observado para genérico] [Hastewire](https://hastewire.com/research/words-that-give-ai-away), [lieflat](https://github.com/larashero3-dotcom/lieflat-less-ai-tone/blob/main/RESEARCH.en.md), [Build to Launch](https://buildtolaunch.ai/p/make-ai-writing-sound-human), [Godar 2026](https://doi.org/10.1109/gaiss66401.2026.11779697).

#### Modelo positivo (como é um título humano bem votado)

No HN /best e no TabNews, o título bem votado costuma ser uma frase simples em caixa normal, com evento em primeira pessoa, número real e às vezes gíria, sem dois-pontos e sem parênteses. Os exemplos do TabNews são "Demorei 3 dias pra entender que meu voice agent perdia 300ms esperando o LLM terminar" e "A mesma tarefa no Claude Code custou de US$ 0,263 a 0,050 sem eu mudar nada". O TabNews tem títulos que parecem feitos com IA, então o HN é uma referência mais limpa [observado].

## Estrutura do post

#### Conclusão que repete a abertura ("Em resumo", "Em suma", "Conclusão")

É o sinal estrutural medido mais forte em blog. No SlopShape (2.250 posts humanos de antes do ChatGPT contra 11.250 espelhos de IA), o fecho que repete a tese foi o traço mais inclinado para IA. Os números repassados pela IntactVoice são 77% dos fechos de IA repetindo a abertura contra 12% dos humanos. Em PT, "em resumo/em suma/em conclusão" aparece em 12% dos artigos de IA e em 1% das páginas humanas. O post humano termina no último fato novo, numa ressalva ou no próximo passo.

- Errado → "## Conclusão. Em resumo, o harness do Claude Code mudou muito. Vimos que os subagentes, os hooks e as skills substituem boa parte do meu workflow antigo."
- Certo → "Ainda mantenho o hook de commit por fora, porque o do harness não respeita o gitmoji. Se isso mudar na próxima versão eu apago ele também."

[medido] [SlopShape](https://arxiv.org/html/2609.15369), [IntactVoice](https://intactvoice.com/guides/how-readers-spot-ai-writing), [Hastewire](https://hastewire.com/research/words-that-give-ai-away), [Russell et al.](https://arxiv.org/html/2501.15654v2).

#### Abertura e fecho de redação de vestibular

As aberturas são "Em um mundo cada vez mais...", "No cenário atual", "Nos dias de hoje", "Com o avanço da tecnologia", "Neste artigo vamos explorar" e "Você já parou para pensar". Os fechos são "Diante do exposto", "Espero ter ajudado", "E isso é só o começo", "Só o tempo dirá" e "Apesar dos desafios, o futuro é promissor". O primeiro parágrafo é o trecho que mais lê como IA (87% num teste interno com 146 artigos). Reescreva a abertura à mão primeiro, começando por uma coisa concreta.

- Errado → "Em um mundo cada vez mais dominado por agentes de IA, neste artigo vamos explorar como o harness evoluiu."
- Certo → "Abri meu ~/.claude ontem e tinha 20 comandos que eu não uso faz três meses."

[observado, e medido para a abertura] [Sem Lero-Lero](https://semlerolero.com.br/blog/palavras-que-entregam-texto-de-ia), [AEO Content](https://aeocontent.com/research/which-parts-of-an-ai-written-article-give-it-away/), [Fast Company Brasil](https://fastcompanybrasil.com/ia/5-formas-identificar-texto-criado-inteligencia-artificial/).

#### Roteiro da tese antes da primeira seção

Os números repassados são 93% dos posts de IA contra 51% dos humanos. Com isso a IA diz o ponto três vezes (no roteiro, no corpo e no resumo). Isso dá números ao padrão já coberto de escrever sobre o próprio documento.

- Errado → "Neste post vou mostrar o que mudou no harness, quais ferramentas eu abandonei e o que eu ainda uso por fora."
- Certo → "Semana passada eu apaguei 14 dos 20 comandos que eu tinha no ~/.claude, e nada quebrou."

[medido] [SlopShape](https://arxiv.org/html/2609.15369), [IntactVoice](https://intactvoice.com/guides/how-readers-spot-ai-writing).

#### Jeito antigo contra jeito novo e escalada de importância

Os números repassados são 76% dos posts de IA contra 26% dos humanos para o molde velho contra novo, e 88% contra 52% para a escalada de importância. Isso pesa nos títulos do João ("deixou meu workflow obsoleto"). Mantenha o contraste só quando ele for literal e tiver um fato com data.

- Errado → "O jeito antigo de configurar agentes ficou para trás. A nova geração do harness muda completamente a forma como trabalhamos."
- Certo → "Em março eu tinha um comando /review meu, em outubro o /code-review nativo fazia a mesma coisa e eu tirei o meu."

[medido] [SlopShape](https://arxiv.org/html/2609.15369).

#### Nada que o leitor possa usar

Os números repassados são 97% dos posts de IA sem nenhum caminho para o leitor participar, contra 38% dos humanos. Num blog técnico, inclua o arquivo, o comando, o link do repo ou a versão.

- Errado → "Espero que essas dicas ajudem você a repensar o seu workflow com IA."
- Certo → "Meu settings.json atual tá no repo dotfiles, pasta claude/, e o hook de commit é esse aqui."

[medido] [SlopShape](https://arxiv.org/html/2609.15369).

#### Blocos de template (TL;DR, Principais aprendizados, FAQ, mito contra fato, antes e depois, o que vem por aí)

No teste interno da AEO Content, quadros de decisão leram como IA em 100% dos casos, comparações antes e depois em 94%, key takeaways em 87% e FAQ em 81%, e o formato sozinho bastou para dar o sinal. Post pessoal não precisa de nenhum desses blocos. Se a pergunta de um leitor importa, responda dentro do texto.

- Errado → "## Principais aprendizados" com três bullets e depois "## Perguntas frequentes"
- Certo → "alguém me perguntou no TabNews se dá pra usar isso sem o OMC, dá, eu testei numa máquina limpa"

[medido, teste interno de vendor] [AEO Content](https://aeocontent.com/research/which-parts-of-an-ai-written-article-give-it-away/), [agent-kb](https://agent-kb-autopublish.vercel.app/text-uniform-structure/).

#### Toda seção no mesmo molde e moral no fim de cada seção

O molde é título, parágrafo de introdução, três bullets e uma frase que dá a lição ("Isso mostra que..."). No humano, a estrutura segue o argumento, então uma seção tem três parágrafos e a próxima é um bloco de código. Para testar, apague a última frase de cada seção e veja se faz falta.

- Errado → "...e o build caiu de 4 min pra 1 min. Isso mostra como simplificar o setup pode trazer ganhos reais."
- Certo → "...e o build caiu de 4 min pra 1 min."

[observado] [Benchwrite](https://benchwrite.com/blog/how-to-spot-ai-written-text-using-structural-review), [Unscarcity](https://unscarcity.ai/static/docs/ai-slop-cleanup-guide.md), [Pangram PT](https://www.pangram.com/pt/blog/how-to-detect-ai-writing).

#### Markdown no texto corrido (bullets com rótulo em negrito, lista para argumento)

No corpus da Pangram, Markdown aparece 12 vezes mais e bullets 9 vezes mais na IA. 42% dos artigos de IA em PT usaram negrito sem ninguém pedir. O molde "- **Rótulo:** texto" lê como slide. Lista serve para passos, comandos e arquivos. Para razão e opinião, use parágrafo.

- Errado → "- **Velocidade:** mais rápido", "- **Simplicidade:** menos comandos", "- **Confiabilidade:** menos erros"
- Certo → "Ficou mais rápido e eu apaguei uns quinze comandos, erro eu ainda tenho, mas são outros."

[medido] [Pangram](https://www.pangram.com/signs-of-ai-writing), [Hastewire](https://hastewire.com/research/words-that-give-ai-away), [Freeburg 2026](http://arxiv.org/abs/2603.27006).

#### Listas sempre de três e itens simétricos

Varie a quantidade de itens e deixe um item longo ao lado de um de duas palavras. Há uma ressalva medida. No corpus chinês pareado, paralelismo dentro da frase saiu mais humano, e o dado de tríade não se repetiu. Então isso vale para listas e seções, e não proíbe paralelismo dentro de uma frase.

- Errado → três seções, cada uma com exatamente 3 bullets de 6 a 8 palavras.
- Certo → uma lista de 7 comandos apagados (só os nomes em código), um aparte de 2 itens em prosa e nenhuma lista na terceira seção.

[observado] [Unscarcity](https://unscarcity.ai/static/docs/ai-slop-cleanup-guide.md), [lieflat](https://github.com/larashero3-dotcom/lieflat-less-ai-tone/blob/main/RESEARCH.en.md).

#### Tabela comparativa para opinião

Use tabela só para dado de verdade (tempos, versões, benchmarks).

- Errado → tabela "Workflow antigo contra Harness nativo" com linhas "Complexidade alta/baixa".
- Certo → tabela com o tempo de build medido antes e depois.

[medido, teste interno] [AEO Content](https://aeocontent.com/research/which-parts-of-an-ai-written-article-give-it-away/).

#### Costura lisa demais (cada frase repete a anterior)

Em PT-BR a máquina tem sobreposição semântica alta entre frases (LSA δ ≈ -0,69), e o humano salta, comenta de lado e muda de assunto sem ponte. Apague a frase-ponte que só repete.

- Errado → "O cache resolveu o problema de lentidão. Ao resolver esse problema de lentidão, o cache também melhorou a experiência."
- Certo → "O cache resolveu a lentidão. Meu chefe nem percebeu, quem percebeu foi o cara do suporte que parou de me mandar print."

[medido] [EPIA 2026](https://epia2026.web.uma.pt/PAPERS_EPIA26/paper_59.pdf), [PROPOR 2026](https://aclanthology.org/2026.propor-2.22.pdf).

#### Parágrafo que não retoma o anterior

O parágrafo abre como se fosse independente, com "Além disso" no lugar de uma referência ao que acabou de ser dito. O humano amarra com "foi aí que", "esse", "isso que eu falei". No chinês, abrir parágrafo sem anáfora foi 4,4 vezes mais comum na IA.

- Errado → "...e o cache estourou. Além disso, os hooks também são uma parte importante do harness."
- Certo → "...e o cache estourou. Foi aí que eu fui olhar os hooks, porque o que limpava o cache era meu e não do harness."

[medido, chinês e HC3] [lieflat](https://github.com/larashero3-dotcom/lieflat-less-ai-tone/blob/main/RESEARCH.en.md), [WROITER](https://wroiter.com/research/quantitative-signals/).

#### Exemplo de empresa famosa no lugar do caso do autor

O molde é "Empresas como a Shopify e a Stripe já usam...". Isso foi 3 vezes mais comum na IA, no chinês. O exemplo tem que ser o repo do João ou o erro que ele viu.

- Errado → "Empresas como a Shopify e a Stripe já usam agentes de IA para automatizar code review."
- Certo → "No projeto que eu mantenho, o /code-review pegou um null que passou por mim e por um colega no PR #212."

[medido, chinês] [lieflat](https://github.com/larashero3-dotcom/lieflat-less-ai-tone/blob/main/RESEARCH.en.md).

#### Equilíbrio artificial (os dois lados sem posição)

O GPT-4o apresenta argumentos dos dois lados, e os humanos tomam um lado. Em PT, no vestibular da UEM, o ChatGPT respondeu "uma combinação dos três fatores". Num estudo japonês, ele tomou o mesmo lado nas 50 redações de cada tema.

- Errado → "O harness é poderoso, mas workflows customizados também têm seu valor, e o ideal é encontrar um equilíbrio."
- Certo → "Pra mim o harness ganhou. Mantive só dois comandos, e só porque o Claude Code ainda não faz deploy do jeito que eu quero."

[medido] [HKU AJAL](https://caes.hku.hk/ajal/index.php/ajal/article/download/1554/780), [Antonio & Antonelli 2025](https://periodicos.uem.br/ojs/index.php/ActaSciLangCult/article/view/72030), [Kobe](https://da.lib.kobe-u.ac.jp/da/kernel/0100487714/0100487714.pdf).

#### Texto longo demais

No SlopShape, posts com menos de 800 palavras tendem a ser humanos. No Reddit brasileiro, comentários humanos tiveram em média 43 palavras e os de GPT, Sabiá e Gemini entre 329 e 441. Corte as seções que só existem para parecer completo (definições que o leitor já sabe, contexto, perspectivas).

- Errado → um post de 1.500 palavras com 400 palavras definindo "agente", "hook" e "skill".
- Certo → um post de 600 a 900 palavras que começa na mudança e linka a documentação.

[medido] [SlopShape](https://arxiv.org/html/2609.15369), [WebMedia 2025](https://doi.org/10.5753/webmedia.2025.15908).

#### Comentário de código que narra o óbvio

Em blog de dev, o código escrito por IA vem com "// Passo 1", "Esta função é responsável por", NOTE e IMPORTANT em linhas comuns e separadores decorativos. O humano comenta pouco, explica o porquê e mistura PT com EN.

- Errado → "// Passo 1: Importar as dependências necessárias" e "// Esta função é responsável por ler o arquivo de configuração"
- Certo → "// o Windows salva com BOM, por isso o trim"

[observado] [SynthScan](https://github.com/marcoramilli/SynthScan/blob/main/patterns/synthetic_patterns.md), [aislop](https://deepwiki.com/scanaislop/aislop/3.1-ai-slop-engine), [anti-ai-slop](https://github.com/zuancrisp/anti-ai-slop/blob/main/skills/antislop-code/SKILL.md).

#### Exemplo técnico genérico (sem versão, foo/bar, erro inventado)

"Certifique-se de ter o Node instalado" sem versão, YOUR_API_KEY e mensagem de erro parafraseada denunciam o texto. Quem fez o trabalho cola a versão, o caminho e o stack trace de verdade.

- Errado → "Primeiro, certifique-se de ter o Node.js instalado. Em seguida, configure suas variáveis de ambiente."
- Certo → "Eu tava no Node 20.11 e o npm run build cuspia `ERR_REQUIRE_ESM` no astro.config.mjs, tive que trocar o require por import."

[opinião] [mr-k-man style guide](https://github.com/mr-k-man/llm-tips/blob/main/style_guide.md).

#### Fecho otimista e vago

Em PT-BR, a máquina tem mais emoção positiva no LIWC (d = 0,472), e especialistas citam "conclusões otimistas e vagas". O post real reclama e pode terminar sem resolver.

- Errado → "Apesar dos desafios, o futuro do desenvolvimento com IA é promissor e cheio de possibilidades."
- Certo → "Ainda não sei se volto a escrever comando próprio, por enquanto tô deixando o harness fazer e reclamando quando ele erra."

[medido] [EPIA 2026](https://epia2026.web.uma.pt/PAPERS_EPIA26/paper_59.pdf), [Muñoz-Ortiz 2024](https://link.springer.com/article/10.1007/s10462-024-10903-2), [Russell et al.](https://arxiv.org/html/2501.15654v2).

## Voz e primeira pessoa

#### Primeira pessoa densa, sem "nós" retórico (ver regra 6)

Além da falta de "eu", o GPT-4 usa um "nós" inclusivo e repetitivo ("precisamos", "devemos", "podemos nos perguntar"). Em redações sobre o mesmo tema, "I" apareceu 243 vezes nos textos de estudantes e 1 vez nos do ChatGPT. Há uma ressalva. Leitor leigo trata a primeira pessoa como sinal de humano, mas sozinha ela não separa um do outro (Jakesch, N = 4.600), então o "eu" precisa vir com conteúdo real.

- Errado → "Precisamos repensar a forma como usamos agentes. Podemos, então, nos perguntar se vale a pena manter um workflow próprio."
- Certo → "Eu passei uns três meses mantendo 20 comandos e 45 agentes, e na real hoje eu uso uns quatro, o resto eu nem lembro que existe."

[medido] [Thorold 2025](https://hdl.handle.net/2077/90156), [Jiang & Hyland 2026](https://www.degruyterbrill.com/de/document/doi/10.1515/applirev-2025-0188/html), [Jakesch et al. PNAS 2023](https://www.pnas.org/doi/10.1073/pnas.2208839120).

#### Narrar no passado em vez do presente atemporal

Em PT-BR, a feature nº 1 de um classificador foi a proporção de verbos no presente do indicativo (25,4% da importância), um "estilo gerativo atemporal". O humano tem mais foco no passado (d = 0,595).

- Errado → "Os subagentes permitem paralelizar tarefas e o harness gerencia o contexto de forma eficiente."
- Certo → "Semana passada eu rodei três subagentes em paralelo pra revisar um PR, e foi a primeira vez que não precisei do meu script de orquestração."

[medido] [EPIA 2026](https://epia2026.web.uma.pt/PAPERS_EPIA26/paper_59.pdf).

#### Registro coloquial brasileiro (pra, tá, tô, a gente, tem por há, dá pra)

Em notícias em PT, a linguagem informal foi 54 a 72% menor nos LLMs e o netspeak cerca de 81% menor. No Reddit brasileiro, ler comentários humanos exige de 2 a 7 anos de escola e ler os dos modelos exige de 10 a 12. Use os marcadores numa taxa natural, sem enfiar um em cada frase.

- Errado → "Nós havíamos configurado diversos agentes, porém está claro que há formas mais simples de fazer isso."
- Certo → "A gente tinha configurado um monte de agente, mas tá na cara que tem jeito mais simples de fazer isso."

[medido] [Rodrigues et al. 2026](https://pmc.ncbi.nlm.nih.gov/articles/PMC12969083/), [WebMedia 2025](https://doi.org/10.5753/webmedia.2025.15908), [HC3](https://arxiv.org/pdf/2301.07597).

#### Marcador oral e reação (né, tipo, aí, enfim, sei lá, putz, kkk, emoji dentro da frase)

O humano tem enchimento, palavrão leve, inglês solto ("please", "já era") e emoji como reação no meio da frase. Na dose certa isso soa humano, e em excesso soa forçado.

- Errado → "Os testes não foram implementados devido à complexidade de testar geração de imagens."
- Certo → "Testes? Simplesmente não existe 😐 eu sei que é essencial, mas não faço a menor ideia de como testar geração de imagem, se alguém souber me fala, please."

[medido] [EPIA 2026](https://epia2026.web.uma.pt/PAPERS_EPIA26/paper_59.pdf), [TabNews thi](https://www.tabnews.com.br/thi/meu-primeiro-projeto-open-source), [humanaizer](https://humanaizer.io/pt/blog/como-deixar-o-texto-do-chatgpt-mais-natural-em-portugus-guia-prtico).

#### Impessoal onde o humano diz "eu" (pode-se, acredita-se, foi identificado, faz-se necessário, é possível)

Essas formas escondem quem fez a coisa. O dev brasileiro escreve "eu escolhi Python, eu escolhi a arquitetura".

- Errado → "Foi identificado que a orquestração externa tornou-se desnecessária."
- Certo → "Eu percebi que não precisava mais do meu orquestrador quando passei uma semana sem abrir ele."

[medido] [PROPOR 2026](https://aclanthology.org/2026.propor-2.22.pdf), [TabNews deividsousan](https://www.tabnews.com.br/deividsousan/sobre-minha-experiencia-criando-algo-100-por-cento-com-ia).

#### Tomar partido com convicção pessoal (sempre, nunca, na real, eu acho, claro)

Boosters aparecem 4,01 vezes por mil palavras em redações humanas e 1,75 na IA. "Always" aparece 0,91 contra 0,26 e "actually" 0,54 contra 0,15. Sobre hedging a evidência é mista. O sinal claro é a falta de compromisso.

- Errado → "Há vantagens e desvantagens em manter um workflow próprio, e a escolha depende do contexto de cada desenvolvedor."
- Certo → "Eu acho que não vale mais a pena manter workflow próprio pra quase nada, sempre que eu tentei manter, quebrou na versão seguinte do Claude Code."

[medido] [He 2025](https://doi.org/10.22158/eltls.v7n6p103), [Jiang & Hyland](https://www.degruyterbrill.com/de/document/doi/10.1515/applirev-2025-0188/html).

#### Detalhe concreto e âncora de tempo (data, dia da semana, versão, quanto tempo levou)

Em PT, os termos que se destacaram no humano foram "novembro", "terça-feira", "8:00" e "salário", e no LLM "importância", "é fundamental" e "para garantir". O humano conta casinho ("ano passado", "um colega me falou"). Ponha pelo menos um momento de "quando aconteceu comigo" por seção.

- Errado → "Após a atualização, o desempenho melhorou significativamente e o fluxo ficou mais eficiente."
- Certo → "Depois que eu atualizei pra 2.1 numa terça, o build caiu de uns 40 segundos pra 12, e eu nem mexi no tsconfig."

[medido] [Rodrigues et al.](https://pmc.ncbi.nlm.nih.gov/articles/PMC12969083/), [Appel et al.](https://www.nature.com/articles/s41599-025-06341-2), [Graphite](https://graphite.io/research/ai-tells).

#### Número redondo que parece inventado (uns vinte minutos, meia dúzia, dois ou três, 23h47)

O Claude aprendeu a soar específico com quantidades redondas que ninguém consegue checar. O horário decorativo é a versão LinkedIn disso. Use só os números que o João tem de verdade.

- Errado → "Em vinte minutos eu tinha meia dúzia de agentes rodando."
- Certo → "Levei a tarde toda pra deixar quatro agentes rodando, e um deles eu desliguei no dia seguinte."

[medido para números redondos, opinião para horário] [Graphite](https://graphite.io/research/ai-tells), [Geostar](https://www.geostar.ai/resources/ai-writing-patterns-research-data/linkedin).

#### Reclamar, ironizar e rir de si mesmo

Emoção positiva aparece de 114 a 133% mais nas notícias de LLM em PT. O humano reclama, ironiza e debocha do próprio exagero de engenharia.

- Errado → "Essa experiência foi extremamente enriquecedora e me trouxe aprendizados valiosos sobre automação."
- Certo → "Confesso que fiquei meio puto, passei um fim de semana montando 45 agentes pra descobrir que o próprio Claude já fazia aquilo melhor."

[medido] [Rodrigues et al.](https://pmc.ncbi.nlm.nih.gov/articles/PMC12969083/), [Appel et al.](https://www.nature.com/articles/s41599-025-06341-2), [HC3](https://arxiv.org/pdf/2301.07597).

#### Aparte, divagação e autocorreção

A resposta do LLM fica presa na pergunta literal, e o humano comenta de lado e corrige o que acabou de dizer ("quer dizer", "ou melhor", "pelo menos no meu caso"). Use uma vez por post, quando for verdade.

- Errado → "A ferramenta resolve todos os problemas de orquestração."
- Certo → "A ferramenta resolve a orquestração, quer dizer, quase toda, o paralelismo eu ainda faço na mão (isso é outro post)."

[medido qualitativamente, e a autocorreção é observada] [HC3](https://arxiv.org/pdf/2301.07597), [He 2025](https://doi.org/10.22158/eltls.v7n6p103).

#### "Você" direto quando dá conselho

O "eu" conta a história e o "você" dá o conselho. Os artigos humanos usam muito mais segunda pessoa (Graphite, sem razão numérica). Um guia secundário atribui ao Reinhart et al. as taxas de 52% e 63% da humana, mas a tabela não foi conferida na fonte primária.

- Errado → "É possível configurar o hook no arquivo settings.json, o que permite ao desenvolvedor automatizar a tarefa."
- Certo → "Se você quiser automatizar isso, joga o hook no settings.json e pronto."

[medido sem número confirmado] [Graphite](https://graphite.io/research/ai-tells).

#### Citação formal demais e nomes inventados

A citação de IA fala no mesmo registro limpo do texto. Nos textos de GPT-4o e Claude 3.5, "Emily" ou "Sarah" apareceram em 63 a 70% dos artigos. Nada de colega ou citação inventados. Uma citação real é curta, truncada e coloquial.

- Errado → "Como meu colega observou, a adoção de subagentes representa uma mudança significativa na forma como estruturamos fluxos de trabalho."
- Certo → "Um colega olhou meu setup e falou \"cara, metade disso o Claude já faz\", e ele tava certo."

[medido] [Russell et al.](https://arxiv.org/html/2501.15654v2).

#### Credibilidade por explicação de manual em vez de experiência

A IA ganha autoridade explicando com confiança como a coisa funciona. O humano ganha autoridade contando o que testou e o que quebrou.

- Errado → "O harness do Claude Code é composto por três camadas principais, que trabalham em conjunto para orquestrar as tarefas."
- Certo → "Eu só entendi as camadas do harness quando um hook meu rodou duas vezes e fui ler o log."

[medido] [SlopShape](https://arxiv.org/html/2609.15369), [Godar 2026](https://doi.org/10.1109/gaiss66401.2026.11779697).

#### Tema genérico sem motivo pessoal

No TabNews, posts do tipo "O que são hooks" ou "Boas práticas de X", que repetem a documentação, são lidos como IA mesmo quando um humano escreveu. Parta do que aconteceu com o João.

- Errado → "Hooks no Claude Code, o que são e como usar. Hooks são scripts executados em eventos do ciclo de vida..."
- Certo → "Eu escrevi um hook que apagava meu .env sem querer, e foi assim que eu fui entender de verdade quando cada evento dispara."

[observado] [TabNews raulpy271](https://www.tabnews.com.br/raulpy271/como-o-chatgpt-esta-me-desmotivando-a-usar-o-tabnews), [TabNews lucasdiasnoronha](https://www.tabnews.com.br/lucasdiasnoronha/quando-tabnews-se-tornou-umlinkedin-nunca-vi-tanto-texto-fake-criado-por-ia-como-aqui).

#### Gíria entre aspas ou em negrito

Quando o LLM escreve informal em PT, ele marca a expressão coloquial como se fosse um desvio. O brasileiro escreve gambiarra, deu ruim e na mão sem aspas.

- Errado → "Era uma \"gambiarra\" que funcionava, mas quando **deu ruim** eu tive que refazer tudo."
- Certo → "Era uma gambiarra que funcionava, mas quando deu ruim eu tive que refazer tudo na mão."

[observado] [Lira & Barbosa 2026](https://periodicos.ufam.edu.br/index.php/amazonica/article/view/21436).

#### Um pouco de frouxidão é humano (tem um, muito, meio que, o fato de que, o melhor que eu já usei)

A Wikipedia registra que prolixidade, intensificador comum e superlativo direto aparecem mais em texto humano. Prosa apertada demais parece editada por modelo.

- Errado → "A ferramenta destaca-se pela eficiência e configura-se como solução de referência."
- Certo → "Tem uma coisa nessa ferramenta que eu acho muito boa, é de longe a melhor que eu já usei pra isso, e olha que eu testei umas cinco."

[observado] [Wikipedia](https://en.wikipedia.org/wiki/Wikipedia:Signs_of_AI_writing).

## Tradução EN/ES

#### Reescrever na língua de destino em vez de traduzir (shining-through)

A tradução mantém o desenho da frase em PT, e as frases longas com vírgula do João viram comma splice em inglês. Mais de 40% das traduções do GPT-4 tinham erro de traducionês. Um fluxo em dois passos (traduzir e depois polir em outra passada) baixou de 43% para 25%. Pedir "seja natural" no mesmo prompt não ajudou e às vezes piorou. Faça cada versão como reescrita a partir do sentido em PT, reorganize as frases pelas normas da língua de destino e faça uma passada separada de polimento.

- Errado → "I tested this for two weeks, it broke three times, then I gave up and returned to the old script."
- Certo → "I gave it two weeks. It broke three times, so I went back to my old script."

[medido] [Li et al. ACL 2025](https://aclanthology.org/2025.acl-long.630/), [Bizzoni et al. 2020](https://aclanthology.org/2020.iwslt-1.34.pdf).

#### A vírgula troca de sinal entre PT e EN

Em PT a IA põe vírgula de menos (d = -0,83). Em EN ela põe vírgula de mais (d = +0,45, contra 853 artigos do Dev.to anteriores ao ChatGPT). A densidade de vírgula do PT não pode passar mecanicamente para o inglês. No EN, quebre com ponto ou "and". Para ES não há medição de vírgula, mas o GPT põe mais ponto que o humano (o ES humano tem 19,6 palavras por frase e o GPT 8,9).

- Errado → "I had built a workflow with 20 commands, and today Claude Code does almost all of it, so I decided to write about what changed, and what I still use."
- Certo → "I had a workflow with 20 commands. Claude Code now does most of it on its own, so here's what changed and the two things I still run outside it."

[medido] [Imoto 2026](https://doi.org/10.5281/zenodo.21424903), [Style of Machines](https://aclanthology.org/2026.stygenai-1.5.pdf).

#### Travessão injetado pela tradução

Mesmo sem nenhum travessão no original, o GPT-4o põe 27,3 travessões por mil tokens em PT e 25,3 em ES. Confira cada versão traduzida.

- Errado → "El harness cambió todo — y la mayoría de mis comandos — dejaron de tener sentido."
- Certo → "El harness cambió bastante y la mayoría de mis comandos dejaron de tener sentido."

[medido] [Style of Machines](https://aclanthology.org/2026.stygenai-1.5.pdf).

#### Gíria achatada em palavra neutra

A tradução automática perde riqueza lexical. Na comparação, o original tinha MTLD 10,05, a tradução humana 8,26 e a do Google MT 7,56. Traduza cada expressão coloquial do PT para uma expressão coloquial de dev na língua de destino.

- Errado → "I made an improvised solution and it went badly" e "hice una solución improvisada y salió mal"
- Certo → "I hacked it together and it blew up" e "lo hice a lo bruto y se rompió todo"

[medido] [Vanmassenhove et al. 2021](https://aclanthology.org/2021.eacl-main.188.pdf), [Niu & Jiang 2024](https://www.nature.com/articles/s41599-024-02986-7).

#### Número, data e moeda sem localização

A precisão média de localização ficou em 50,3%, e chain-of-thought derrubou para 40,2%. Em MT para PT, 66% das datas "com formato certo" eram alucinadas. O EN usa 1,500.50, "Nov 26" e "2 pm". O ES segue o país do leitor (a Espanha escreve 1.500,50 e o México 1,500.50). Converta a moeda para o leitor ou mantenha de propósito, com contexto.

- Errado → "The bill went from R$ 1.200,00 to R$ 340,00 on 03/10."
- Certo → "The bill dropped from about R$1,200 to R$340 (roughly $220 to $60) in early October."

[medido] [Kaye 2026](https://arxiv.org/html/2608.05232), [Sousa et al. SBES 2024](https://doi.org/10.5753/sbes.2024.3587).

#### Portunhol (falsos amigos PT e ES)

Línguas próximas saem pior, porque a semelhança esconde a diferença de sentido. Cerca de 20% dos cognatos ES-PT são falsos. Os mais perigosos em post de dev são apagar (PT deletar, ES desligar, use borrar), esquisito (ES exquisito quer dizer delicioso), contestar (ES responder), pegar (ES bater ou colar), tirar (ES jogar fora) e largar (ES largo quer dizer comprido). Esses exemplos de dev são ilustração, e o exemplo do artigo é salsa (salsinha) traduzida como salsa (molho).

- Errado → "Apagué la tabla en producción y el comportamiento fue muy exquisito."
- Certo → "Borré la tabla en producción y pasó algo rarísimo."

[medido] [Vázquez Abuín et al. ACL 2026](https://aclanthology.org/2026.acl-long.1818.pdf), [Sepúlveda Torres & Aluísio 2011](https://aclanthology.org/W11-4508).

#### ES com "se" impessoal, "es fundamental" e enumeração

Em 82% dos textos do ChatGPT em espanhol apareceu a dupla estrutura enumerativa mais avaliação impessoal, fechada com "en la actualidad", "por lo tanto" e "en conclusión". A versão em ES precisa de "yo" e de verbo de experiência (probé, me di cuenta, me pasó).

- Errado → "En la actualidad, es fundamental automatizar el despliegue. Por lo tanto, se recomienda utilizar herramientas de CI."
- Certo → "Yo automaticé el deploy después de romper producción un viernes, y desde entonces lo hace GitHub Actions."

[medido] [RIFOP/Murcia](https://revistas.um.es/rifop/article/download/738601/408771/3001081).

#### ES com adjetivo demais e pronome e advérbio de menos

O GPT usa mais adjetivos, e o humano mais advérbios e pronomes. Ponha de volta ya, todavía, casi, bastante, igual, lo, le e me.

- Errado → "Implementé una solución robusta, escalable y eficiente para la gestión integral de colas."
- Certo → "Lo armé con una cola en Redis, y todavía aguanta bastante bien."

[medido] [Alonso Simón et al. 2025](https://doi.org/10.58859/rael.v23i1.666).

## LinkedIn e redes

#### Pilha de hashtags genéricas

86 de 100 posts de IA tinham hashtag, com média de 4,5 por post no Claude e 6,5 no GPT-OSS. Use nenhuma ou uma ou duas específicas.

- Errado → "#IA #ClaudeCode #Produtividade #Inovação #DesenvolvimentoDeSoftware #Tecnologia"
- Certo → "#claudecode"

[medido, vendor com amostra pequena] [Desloppy](https://desloppy.com/blog/why-your-linkedin-post-sounds-like-ai).

#### Emoji como marcador (🚀 ✅ 💡 👉 👇)

Em julho de 2025, 70% das mensagens do ChatGPT tinham emoji, e ✅ aparecia 11 vezes mais que no humano. 🚀 apareceu em 43 de 100 posts de IA no LinkedIn. Emoji só vale como reação dentro da frase.

- Errado → "🚀 Menos comandos", "✅ Mais autonomia", "💡 Mais foco no que importa"
- Certo → "Hoje eu uso dois comandos meus, o resto é o que o Claude Code já traz."

[medido] [Washington Post via Boston Globe](https://www.bostonglobe.com/2025/11/13/business/chatgpt-writing-style-clues/), [Desloppy](https://desloppy.com/blog/why-your-linkedin-post-sounds-like-ai).

#### Abertura de anúncio e vocabulário de carreira (feliz em compartilhar, jornada, novo capítulo, grato a todos)

"Thrilled to share" apareceu em 24 de 100 posts, "grateful" em 31 e "journey" em 22. Comece pela notícia. Se for agradecer, agradeça a uma pessoa com nome, por uma coisa específica.

- Errado → "Muito feliz em compartilhar que publiquei um novo artigo no blog! Essa jornada foi incrível e sou muito grato a todos."
- Certo → "Joguei fora 43 dos 45 agentes que eu tinha criado. Escrevi o porquê no blog. Valeu ao Pedro, que me mostrou os hooks numa call de 10 minutos."

[medido] [Desloppy](https://desloppy.com/blog/why-your-linkedin-post-sounds-like-ai), [Presend](https://getpresend.com/blog/linkedin-post-not-sound-like-chatgpt).

#### Broetry (uma frase por parágrafo, "Hoje?", "Resultado?")

Os cursos de criador de conteúdo do LinkedIn ensinaram esse molde, e os modelos aprenderam com eles. Use parágrafos de 2 a 4 frases e no máximo uma linha solta.

- Errado → "Eu tinha 45 agentes." / "20 comandos." / "Hoje?" / "Uso 2."
- Certo → "Eu tinha 45 agentes e 20 comandos, e hoje uso dois comandos e quase nenhum agente meu. O resto o Claude Code já faz."

[observado] [Underslop](https://underslop.com/why/linkedin-post-sounds-like-chatgpt), [WriteNexa](https://www.writenexa.com/blog/how-to-write-linkedin-posts-with-ai-without-sounding-like-linkedin/), [Sagnik Bhattacharya](https://sagnikbhattacharya.com/blog/linkedin-posts-with-ai-without-sounding-ai).

#### Gancho vazio antes do "ver mais"

O LinkedIn corta o post em cerca de 140 caracteres no celular e 210 no desktop. O gancho de IA é drama sem informação. O humano põe fato, número e tensão. Um bom truque é começar pela segunda frase do rascunho, que costuma ser a verdadeira.

- Errado → "Ninguém te conta isso sobre o Claude Code."
- Certo → "Apaguei 43 dos 45 agentes que eu tinha escrito pro Claude Code, porque o harness novo já fazia o trabalho deles."

[observado] [Sagnik Bhattacharya](https://sagnikbhattacharya.com/blog/linkedin-posts-with-ai-without-sounding-ai), [WriteNexa](https://www.writenexa.com/blog/how-to-write-linkedin-posts-with-ai-without-sounding-like-linkedin/).

#### Rótulo com dois-pontos ("Opinião impopular:", "Verdade dura:", "Aqui está o que aconteceu:")

Isso já fere a regra 1 do João, e no LinkedIn é ainda mais frequente.

- Errado → "Opinião impopular: você não precisa de 45 agentes."
- Certo → "Eu acho que quase ninguém precisa de 45 agentes, eu com certeza não precisava."

[observado] [WriteNexa](https://www.writenexa.com/blog/how-to-write-linkedin-posts-with-ai-without-sounding-like-linkedin/), [skillsdirectory](https://www.skillsdirectory.com/skills/thesmokedev-linkedin-post).

#### Fecho isca ("E você, o que acha? 👇", "Concorda?")

Termine no seu ponto, ou faça uma pergunta específica cuja resposta você quer mesmo.

- Errado → "E você, ainda usa workflows customizados? Comenta aqui 👇"
- Certo → "Se alguém achou um jeito de fazer o Claude Code respeitar o meu fluxo de deploy, me fala, porque esse é o único comando que eu ainda mantenho."

[medido] [Desloppy](https://desloppy.com/blog/why-your-linkedin-post-sounds-like-ai).

## Erros de português de propósito?

A dúvida é se vale cometer erro de propósito para parecer humano. A evidência separa duas coisas bem diferentes, o registro coloquial e o erro de ortografia.

O que está medido a favor de "imperfeição".

- Russell et al. (ACL 2025) mostram que gramática e pontuação aparecem em 24,8% das explicações dos especialistas. Eles sabem que humano erra mais, e leigos acham o contrário.
- Jakesch et al. (PNAS 2023) acharam que autoapresentações com erro gramatical tinham 15% menos chance de ser IA. Só que leitores leigos ficaram 5% mais propensos a chamar de IA um texto com problema gramatical, então o efeito depende de quem lê.
- Num estudo com redações do PISA, estudantes escreveram 4,36 erros de ortografia a cada 100 palavras e chatbots 0,72. Professores dizem que se guiam pela ausência de erro.
- No Stumbling Blocks (ACL 2024), de 2 a 6 typos num texto de cerca de 110 tokens derrubaram a maioria dos detectores baseados em métrica para abaixo do acaso.

O que está medido contra erro de digitação inventado.

- No RAID (ACL 2024), um ataque com erros comuns de ortografia mudou pouco a acurácia dos detectores comerciais (GPTZero -1,4 ponto, Originality -6,4, Winston -3,5).
- No estudo do PISA, inserir erros de ortografia mudou o macro-F1 em no máximo 0,03.
- Um teste de 2026 (Brar) achou detectores que aumentaram a nota de IA quando entraram typos.
- Erro custa credibilidade. Dois typos cortaram a confiança em 5,91 pontos de 100 e cinco typos em 13,5 (Witchel et al. 2022). Quatro erros não tiveram efeito significativo e muitos erros baixaram a nota de capacidade de escrita (Kreiner et al. 2002). Um teste com e-mail achou queda de 21,5% na inteligência percebida com 4 typos (AB-Lab, fonte de vendor).
- A autoavaliação de conteúdo útil do Google pergunta se o conteúdo "has any spelling or stylistic issues". O Google não diz que isso é sinal de ranqueamento, mas a pergunta está lá.
- Os especialistas de Russell et al. continuaram acertando depois de paráfrase e de um humanizador construído com as próprias pistas deles.

O que é opinião de praticante.

- Guias de humanização (FEP, humanaizer, unslop) avisam que erro demais e gíria forçada ficam "obviamente propositais". Relatos de professores no r/Professors (via HumanPen, fonte secundária) dizem que erro implausível aumenta a desconfiança.

A recomendação para o skill é usar a gramática da fala brasileira, que o João já usa, e nunca erro de ortografia inventado. O que entra, numa dose natural, é isto.

- Contrações e formas de fala, como pra, pro, tá, tô, tava, né, dá pra, a gente, vou em vez de irei.
- "Ter" no lugar de "haver" ("tem dois jeitos").
- Próclise, inclusive no começo da frase ("Me deu trabalho", "Me peguei"), e pronome reto como objeto ("atualizar ele", "abrir ela").
- Regência de fala, como "assisti o vídeo", "aonde" no lugar de "onde" de vez em quando e "chegar em".
- Frases emendadas com vírgula (comma splice) e uma vírgula faltando antes de "mas" de vez em quando.
- Concordância solta em construções que o brasileiro fala assim ("tem muita coisa que eu não uso mais", "faz três meses").
- Autocorreção no meio da frase ("quer dizer", "ou melhor").

O que não entra.

- Palavra que não existe, letra trocada, acento tirado de propósito ("interesante", "perfomance", "eramos").
- Erro em termo técnico, nome de ferramenta, comando ou código (quebra a credibilidade de dev na hora).
- Mais de um "desvio" por frase, ou desvio que ninguém fala.

## Checagem antes de publicar

Rode cada busca no arquivo do post e depois em cada versão traduzida. A ordem é uma estimativa de quantas vezes cada item pega problema em rascunho feito pelo Claude, a partir das frequências medidas acima. Ela não é um ranking medido. Use `grep -nEi` (ou a busca do editor) e leia cada ocorrência no contexto antes de mudar.

1. Travessão e meia-risca (em PT, ES e EN traduzido).

```
—|–
```

2. Dois-pontos no meio da frase e ponto e vírgula (regras 1 e 2). O primeiro padrão pega dois-pontos seguido de texto na mesma linha. Ignore o que estiver em bloco de código, URL ou horário.

```
[A-Za-zÀ-ú)"]: +[A-Za-zÀ-ú]
;
```

3. Tiques do Claude (sinceridade, importância, totalizador, futuro, benefício).

```
\b(genuinamente|honestamente|sinceramente|francamente|de fato|realmente)\b
\b(isso importa|por que isso importa|o que (realmente|mais) importa|faz toda a diferença)\b
\b(o mecanismo inteiro|de longe o|cada um dos|absolutamente|o mais importante de)\b
\b(olhando (pra|para) frente|o que vem (pela frente|a seguir)|mais uma camada|na prática)\b
\b(pode te ajudar|te ajuda a|é especialmente útil|facilita)\b
```

4. Variantes de contraste corretivo.

```
\bmenos (um|uma|como)\b.{1,40}\be mais\b
\b(em vez de|ao invés de) (simplesmente|apenas|só)\b
\bnão (se trata|é) (apenas|só|simplesmente)\b
\bé mais do que (um|uma)\b
\bnão (é|foi) [^.]{1,40}\. (É|Foi)\b
, não (um|uma|o|a|de)?\s?[a-zà-ú]+\.
```

5. Gerúndio de cauda e oração explicativa no fim.

```
, [a-zà-ú]+(ando|endo|indo)\b
, (o que (explica|faz com que|significa|mostra)|e é por isso que)
```

6. Conectivos e muletas (meta de zero ou uma ocorrência por post).

```
\b(além disso|no entanto|dessa forma|desse modo|nesse sentido|nesse contexto|nesse cenário|ademais|contudo|todavia|entretanto|porém)\b
\b(vale (ressaltar|destacar|lembrar|notar|mencionar)|é importante (destacar|ressaltar|notar)|cabe (destacar|mencionar)|dito isso)\b
\b(em suma|em resumo|em conclusão|concluindo|por fim|diante do exposto|considerações finais)\b
\b(em um mundo|no cenário atual|nos dias de hoje|com o avanço da|neste (artigo|post) (vou|vamos)|vamos explorar)\b
```

7. Vocabulário longo, avaliativo e decalcado.

```
\b(utiliz|realiz|possu|efetu|disponibiliz|viabiliz|potencializ|otimiz|alavanc|mergulh|desbloque|naveg)[a-zà-ú]*
\b(jornada|cenário|ecossistema|robust[oa]s?|fundamental|essencial|crucial|significativ[oa]|deliberad[oa]|consistente|sólid[oa]|incrivelmente|extremamente)\b
\b(especialmente|não apenas|não só)\b
\b(sem (abrir mão|perder|comprometer|sacrificar))\b
\b(silenciosamente|discretamente|sem alarde)\b
\b(pense n(isso|o) como|é como se)\b
```

8. Nominalização (frases com dois ou mais substantivos em -ção, -mento ou -dade).

```
[a-zà-ú]+(ção|ções|mento|mentos|dade|dades)\b[^.]*\b[a-zà-ú]+(ção|ções|mento|mentos|dade|dades)\b
```

9. Formato (subtítulos, bullets com rótulo, blocos de template, Title Case, título com dois-pontos ou parênteses).

```
^#{2,3} 
^\s*[-*] \*\*[^*]+:?\*\*:?
^#{1,3} .*(Principais aprendizados|Perguntas frequentes|TL;DR|Conclusão|Considerações finais|Por que isso importa|Desafios e)
^#{1,3} ([A-ZÀ-Ú][a-zà-ú]+ ){3,}
^title:.*(:|\()
^description:
```

Conte os subtítulos (até 3 para um post de 900 palavras). Leia a description em voz alta e veja se ela tem três frases curtas com ponto. Confira se o primeiro parágrafo repete a description.

10. Impessoal, ênclise e registro formal.

```
\b(pode-se|acredita-se|faz-se|percebe-se|é possível|foi (identificado|observado|constatado))\b
\b[a-zà-ú]+-(se|lo|la|los|las|me)\b
\b[a-zà-ú]+-(se|lo|la)-(á|ão|ia)\b
\b(nós|havia|há|irei|iremos|estou|está)\b
```

Pelo menos parte de "para/está/estou" deveria virar "pra/tá/tô" num post do João.

11. Medidas de voz e ritmo. Rode `python3 .claude/skills/escrever-post-blog/scripts/medir_voz.py <arquivo do post>` (funciona em PT, EN e ES).

Como ler o resultado. Primeira pessoa perto de zero é alerta. Se o desvio padrão do tamanho das frases ficar bem abaixo de 9 ou 10 palavras e não houver nenhuma frase curta nem nenhuma de 35 palavras ou mais, o ritmo está plano. Mais pontos que vírgulas em PT é alerta. Zero "?", zero "!" e zero parênteses num post inteiro também. Esses limites são referência prática e não há corte medido seguro. O TextPulse mostra que nenhum limiar único separa humano de IA sem marcar muito texto humano.

12. Só nas versões traduzidas.

```
\b\d{1,3}\.\d{3},\d{2}\b
\b\d{2}/\d{2}(/\d{2,4})?\b
\b(apag[aoé]|exquisit|contest|pegu?[eé]|tir[eé]|largo)\w*
\b(es fundamental|es necesario|se recomienda|se debe|en la actualidad|por lo tanto|en conclusión|cabe destacar)\b
```

Em EN, confira também se as frases longas do PT viraram comma splice.

13. Leitura final, sem regex. A pergunta é se todo parágrafo tem algo que só o João sabe (uma data, um número dele, um erro que ele viu, uma opinião com "eu acho"). Se a resposta for não, nenhuma das buscas acima salva o texto.

## Fontes

Observação sobre leitura. Abstract só, ou só o trecho principal: Imoto (Zenodo), Thorold, Petrenko, Pérez-Montero, Godar, Lira & Barbosa. Lido por trechos longos devolvidos pela busca, sem fetch completo: Reinhart (PNAS), Kobak, Style of Machines, Freeburg, TextPulse burstiness, Pangram, Desaire, EDM 2024, WROITER, AEO Content e a maior parte dos guias de praticante. Não aberto na fonte primária: Liang et al. 2024 (os números de "commendable" e "meticulous" vieram de páginas secundárias e ficaram de fora), Singhal et al. 2023, os dados do Arena citados pelo paddo.dev, e a tabela de segunda pessoa do Reinhart (52% e 63%). Juzek & Ward foi descartado por falta de verificação.

Estudos e preprints

- https://www.pnas.org/doi/10.1073/pnas.2422455122
- https://arxiv.org/abs/2410.16107
- https://www.pnas.org/doi/10.1073/pnas.2208839120
- https://arxiv.org/abs/2501.15654
- https://arxiv.org/html/2501.15654v2
- https://aclanthology.org/2025.acl-long.267/
- https://arxiv.org/pdf/2510.05136v1.pdf
- https://epia2026.web.uma.pt/PAPERS_EPIA26/paper_59.pdf
- https://aclanthology.org/2026.propor-2.22.pdf
- https://aclanthology.org/2026.stygenai-1.5.pdf
- https://doi.org/10.5753/webmedia.2025.15908
- https://doi.org/10.5281/zenodo.21424903
- https://doi.org/10.5281/zenodo.21413035
- https://www.scielo.br/j/tl/a/PhbtJMN7DygfqTfnDnS8zZv/?format=pdf&lang=pt
- https://periodicos.uem.br/ojs/index.php/ActaSciLangCult/article/view/72030
- https://pmc.ncbi.nlm.nih.gov/articles/PMC12969083/
- https://www.cell.com/iscience/fulltext/S2589-0042(26)00351-2
- https://link.springer.com/article/10.1007/s10462-024-10903-2
- https://pmc.ncbi.nlm.nih.gov/articles/PMC12219543/
- https://www.science.org/doi/10.1126/sciadv.adt3813
- http://arxiv.org/abs/2603.27006
- https://arxiv.org/html/2608.12630v1
- https://arxiv.org/abs/2604.22142
- https://www.nature.com/articles/s41599-025-06341-2
- https://caes.hku.hk/ajal/index.php/ajal/article/download/1554/780
- https://da.lib.kobe-u.ac.jp/da/kernel/0100487714/0100487714.pdf
- https://doi.org/10.22158/eltls.v7n6p103
- https://www.degruyterbrill.com/de/document/doi/10.1515/applirev-2025-0188/html
- https://hdl.handle.net/2077/90156
- https://doi.org/10.1109/gaiss66401.2026.11779697
- https://arxiv.org/pdf/2301.07597
- https://arxiv.org/html/2611.12487
- https://aclanthology.org/2024.acl-long.160.pdf
- https://aclanthology.org/2024.acl-long.674.pdf
- https://doi.org/10.5281/zenodo.22651813
- https://www.frontiersin.org/journals/psychology/articles/10.3389/fpsyg.2022.873844/full
- https://pubmed.ncbi.nlm.nih.gov/12038495/
- https://aclanthology.org/2024.clicit-1.121.pdf
- https://pmc.ncbi.nlm.nih.gov/articles/PMC13367301/
- https://kasba.or.kr/uploads/papers/NODE12408905.pdf
- https://doi.org/10.1002/leap.1647
- https://dl.acm.org/doi/full/10.1145/3839336
- https://www.mdpi.com/2673-5172/5/4/110
- https://arxiv.org/html/2609.15369
- https://www.cell.com/cell-reports-physical-science/fulltext/S2666-3864(23)00200-X
- https://educationaldatamining.org/edm2024/proceedings/2024.EDM-long-papers.9/2024.EDM-long-papers.9.pdf
- https://www.degruyterbrill.com/document/doi/10.1515/psicl-2025-0063/html
- https://aclanthology.org/2025.acl-long.630/
- https://arxiv.org/abs/2503.04369
- https://aclanthology.org/2020.iwslt-1.34.pdf
- http://hdl.handle.net/10045/104728
- https://aclanthology.org/2021.eacl-main.188.pdf
- https://www.nature.com/articles/s41599-024-02986-7
- https://arxiv.org/html/2608.05232
- https://doi.org/10.5753/sbes.2024.3587
- https://aclanthology.org/2026.acl-long.1818.pdf
- https://aclanthology.org/W11-4508
- https://revistas.um.es/rifop/article/download/738601/408771/3001081
- https://hdl.handle.net/10045/171166
- https://doi.org/10.58859/rael.v23i1.666
- https://pmc.ncbi.nlm.nih.gov/articles/PMC12808644/
- https://periodicos.ufam.edu.br/index.php/amazonica/article/view/21436
- https://aclanthology.org/2026.findings-emnlp.1539.pdf
- https://www.pewresearch.org/data-labs/2026/08/20/how-much-of-the-internet-is-written-with-ai/
- https://site.ufvjm.edu.br/revistamultidisciplinar/files/2015/05/Fl%C3%A1vio-Valadares.pdf
- https://periodicos.ufjf.br/index.php/veredas/article/download/43701/28277/205892
- https://revistas.gel.org.br/estudos-linguisticos/article/download/1359/901/3619
- https://www.scielo.br/j/delta/a/KQmrjr5yGgL49JPWMSGGhSj/?lang=pt

Dados de vendors e análises de imprensa

- https://graphite.io/research/ai-tells
- https://graphite.io/research/ai-tells-opus-5-5-update
- https://textpulse.ai/research/ai-style-fingerprints
- https://textpulse.ai/research/ai-burstiness-sentence-length
- https://textpulse.ai/research/textpulse-burstiness-sentence-length-2026.pdf
- https://www.pangram.com/signs-of-ai-writing
- https://www.pangram.com/blog/comprehensive-guide-to-spotting-ai-writing-patterns
- https://www.pangram.com/pt/blog/how-to-detect-ai-writing
- https://www.pangram.com/pt/blog/comprehensive-guide-to-spotting-ai-writing-patterns
- https://hastewire.com/research/words-that-give-ai-away
- https://aeocontent.com/research/which-parts-of-an-ai-written-article-give-it-away/
- https://intactvoice.com/guides/how-readers-spot-ai-writing
- https://desloppy.com/blog/why-your-linkedin-post-sounds-like-ai
- https://wroiter.com/research/quantitative-signals/
- https://www.bostonglobe.com/2025/11/13/business/chatgpt-writing-style-clues/
- https://venturebeat.com/data/claude-opus-5-5-uses-em-dashes-99-less-often-and-sounds-more-human-but-still-exhibits-2-548-ai-writing-tells
- https://genpolish.app/blog/ai-tells-study
- https://research.signalbox.studio/research/opus-5-5-articles-vs-novels/
- https://www.ab-lab.org/email-typos.html
- https://semlerolero.com.br/blog/palavras-que-entregam-texto-de-ia
- https://humanizartexto.app/expressoes-de-ia
- https://wiki.bitsy.services/wiki/ai/verbal-tics/anthropic-claude/
- https://github.com/larashero3-dotcom/lieflat-less-ai-tone/blob/main/RESEARCH.en.md
- https://github.com/shandley/prose-check/blob/main/.claude/skills/human-writing/statistics.md

Anthropic, guias de estilo e Wikipedia

- https://platform.claude.com/docs/en/release-notes/system-prompts/claude-opus-4-8
- https://platform.claude.com/docs/en/release-notes/system-prompts/claude-fable-5-1
- https://platform.claude.com/docs/en/build-with-claude/prompt-engineering/prompting-claude-fable-5-1
- https://en.wikipedia.org/wiki/Wikipedia:Signs_of_AI_writing
- https://pt.wikipedia.org/wiki/Wikip%C3%A9dia:Sinais_de_texto_gerado_por_intelig%C3%AAncia_artificial
- https://www.estadao.com.br/manualredacao/esclareca/t.php
- https://www1.folha.uol.com.br/folha/circulo/manual_texto_m.htm
- https://developers.google.com/search/docs/fundamentals/creating-helpful-content
- https://developers.google.com/style/tone
- https://cdn2.hubspot.net/hub/53/file-2505556912-pdf/Data%5FDriven%5FStrategies%5FFor%5FWriting%5FEffective%5FTitles%5Fand%5FHeadlines.pdf

Imprensa e praticantes em PT e ES

- https://www.bbc.com/portuguese/articles/c4gkwxq8we3o
- https://exame.com/tecnologia/examelab/como-saber-se-um-texto-foi-feito-por-inteligencia-artificial/
- https://exame.com/inteligencia-artificial/estas-x-frases-entregam-que-seu-texto-foi-escrito-por-inteligencia-artificial-como-evitar/
- https://fastcompanybrasil.com/ia/5-formas-identificar-texto-criado-inteligencia-artificial/
- https://www.targethd.net/as-palavras-que-denunciam-um-texto-escrito-pelo-chatgpt/
- https://otecido.com.br/article/o-escritorio-comecou-a-falar-como-o-chatbot
- https://dorly.com.br/artigos/sinais-texto-escrito-por-ia/
- https://jeffersonfbarbosa.substack.com/p/voce-esta-falando-como-o-chatgpt
- https://iaenews.substack.com/p/as-100-palavras-que-fazem-seu-texto
- https://blog.marfin.co/escrever-com-ia-sem-parecer-ia
- https://correria.digital/sotaque-de-ia/
- https://labiialab.com.br/publicacoes/marcas-linguisticas-e-estruturais-no-chatgpt-implicacoes-da-ia-generativa-para-o-ensino-aprendizagem-da-escrita/
- https://www.lucassilva.io/skills/escrita-humanizada
- https://lp.boldschool.com.br/viral/skills-anti-slop
- https://iahumaniza.com/blog/palavras-que-denunciam-texto-de-ia/
- https://textumi.com/pt/ai-text-signs
- https://iaemfoco.com.br/humanizar-texto-ia/
- https://textadviser.com/pt/ai-guides/como-saber-se-um-texto-foi-feito-por-ia
- https://iahumanizador.org/como-saber-se-um-texto-foi-feito-por-ia
- https://www.mikefluff.com/pt/ai-text-checker
- https://www.educacaotecnologica.com.br/index.php/ojs/article/download/467/690/1671
- https://horadecodar.com.br/humanizar-textos-chatgpt/
- https://humanaizer.io/pt/blog/como-deixar-o-texto-do-chatgpt-mais-natural-em-portugus-guia-prtico
- https://inematds.github.io/FEP/conteudo/modulo2-humanizacao.md
- https://blog.openl.io/pt/brazilian-vs-european-portuguese/
- https://github.com/badmuriss/unslop/blob/a952141f/references/ptbr.md
- https://diariovida.com/tics-texto-escrito-con-ia-espanol/
- https://www.eldebate.com/tecnologia/20261013/posible-saber-texto-esta-escrito-inteligencia-artificial-cns_469014.html
- https://walterwrites.ai/es/como-saber-si-un-texto-es-de-ia/
- https://dialnet.unirioja.es/servlet/articulo?codigo=10651021
- https://pt.linkedin.com/posts/rafamiqueleto_nao-sei-voc%C3%AAs-mas-d%C3%A1-pra-notar-muito-f%C3%A1cil-activity-7350896618423889920-QCxT
- https://pt.linkedin.com/posts/arthurandraderj_eu-n%C3%A3o-aguento-mais-posts-de-ia-que-s%C3%A3o-activity-7465359922877247488-D5QK
- https://pt.linkedin.com/posts/wellingtoncruz_o-linkedin-est%C3%A1-cheio-de-textos-assim-escrito-activity-7382148149491941376-wFJL
- https://pt.linkedin.com/posts/thaispaneto_escritacomia-produ%C3%A7%C3%A3odeconteudo-inteligenciaartificial-activity-7526739361875357697-N3O1
- https://www.tabnews.com.br/
- https://www.tabnews.com.br/thi/meu-primeiro-projeto-open-source
- https://www.tabnews.com.br/iagofgermano/subi-meu-primeiro-site-no-ar-e-vou-detalhar-minha-experiencia
- https://www.tabnews.com.br/deividsousan/sobre-minha-experiencia-criando-algo-100-por-cento-com-ia
- https://www.tabnews.com.br/raulpy271/como-o-chatgpt-esta-me-desmotivando-a-usar-o-tabnews
- https://www.tabnews.com.br/lucasdiasnoronha/quando-tabnews-se-tornou-umlinkedin-nunca-vi-tanto-texto-fake-criado-por-ia-como-aqui
- https://news.ycombinator.com/best

Praticantes em EN (skills, guias, detectores)

- https://tropes.fyi
- https://github.com/understudylabs/understudy-agent-tools/blob/main/skills/deslop/references/tropes.md
- https://stevebremner.com/2026/08/metaphors-ai-overuses
- https://paddo.dev/blog/a-dial-worth-turning/
- https://posthero.ai/blog/ai-words-to-avoid
- https://claudisms.ai/
- https://davidkemp.ai/blog/the-ai-tells-reference-sheet/
- https://github.com/marcoramilli/SynthScan/blob/main/patterns/synthetic_patterns.md
- https://deepwiki.com/scanaislop/aislop/3.1-ai-slop-engine
- https://github.com/zuancrisp/anti-ai-slop/blob/main/skills/antislop-code/SKILL.md
- https://github.com/jeremylongshore/claude-code-plugins-plus-skills/blob/main/plugins/testing/code-cleanup/agents/slop-remover.md
- https://datafield.dev/vibe-coding/part-i-foundations/ch07-understanding-ai-generated-code/
- https://github.com/mr-k-man/llm-tips/blob/main/style_guide.md
- https://github.com/Quegenx/agent-skills/blob/main/skills/anti-ai-slop/anti-slop-writing/TELLS.md
- https://github.com/dhaher-labs/Mnemosyne-AI/blob/main/skills/seo-content-writer/references/title-formulas.md
- https://github.com/cdeistopened/skill-stack-skills/blob/main/writing-voice/seo-content-writer/SKILL.md
- https://github.com/stephenoffer/human-voice/blob/main/skills/human-voice/SKILL.md
- https://earnquill.com/blogging/how-to-write-blog-headlines
- https://thebreakoutinsights.substack.com/p/5-7-headline-formulas-that-will-get
- https://benchwrite.com/blog/how-to-spot-ai-written-text-using-structural-review
- https://unscarcity.ai/static/docs/ai-slop-cleanup-guide.md
- https://buildtolaunch.ai/p/make-ai-writing-sound-human
- https://agent-kb-autopublish.vercel.app/text-uniform-structure/
- https://www.stealthgpt.ai/blog/how-to-detect-ai-slop
- https://sagnikbhattacharya.com/blog/linkedin-posts-with-ai-without-sounding-ai
- https://www.freehumanizerai.com/blog/humanize-ai-linkedin-posts
- https://www.writenexa.com/blog/how-to-write-linkedin-posts-with-ai-without-sounding-like-linkedin/
- https://underslop.com/why/linkedin-post-sounds-like-chatgpt
- https://www.geostar.ai/resources/ai-writing-patterns-research-data/linkedin
- https://getpresend.com/blog/linkedin-post-not-sound-like-chatgpt
- https://www.skillsdirectory.com/skills/thesmokedev-linkedin-post
- https://humanpen.net/blog/do-typos-lower-ai-detection-score
- https://gptzero.me/news/perplexity-and-burstiness-what-is-it
