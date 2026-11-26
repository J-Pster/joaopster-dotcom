---
title: 'A Anthropic é ou não é a Evil Corp?'
description: 'Um artigo no LinkedIn diz que a Anthropic usa o Claude Code pra copiar teu software, então fui atrás de cada fonte pra separar fato de terrorismo'
pubDate: 'Nov 26 2026'
tags: ['AI', 'Claude Code', 'My Opinion']
---

Quem assistiu Mr. Robot lembra da E Corp, o maior conglomerado do mundo na série, que o Elliot só chama de [Evil Corp](https://en.wikipedia.org/wiki/Mr._Robot). Pois um artigo que apareceu no LinkedIn este mês praticamente pinta a Anthropic desse jeito, uma empresa que usa o Claude Code pra entrar no teu repositório, copiar o teu negócio e te descartar depois.

Eu achei esse artigo de um jeito curioso. Eu publiquei no LinkedIn o meu [post sobre como o harness do Claude Code deixou meu workflow obsoleto](/blog/claude-code-harness-workflows-obsoletos/), e o autor desse artigo comentou nele. Fui ler, e o título já diz o tom, ["Se você usa Claude Code, está lascado"](https://www.linkedin.com/pulse/se-voc%C3%AA-usa-claude-code-est%C3%A1-lascado-por-que-sua-de-com-maia-favero-9pqcf/), publicado em 3 de novembro de 2026.

Antes de qualquer coisa eu quero deixar uma coisa clara. Eu não sou investidor da Anthropic, não trabalho lá, não sou fã de nenhuma empresa de IA e também não sou contra nenhuma. Eu sou a favor de cada um usar o que for melhor pra si, com segurança, e uma coisa que eu detesto é opinião disfarçada de fato, que é exatamente o que esse artigo faz, e o que eu vejo em muito texto por aí sobre IA. Pega meia verdade, mistura com muito sensacionalismo e entrega um terrorismo digital do tipo "não use IA, volte pra idade da pedra".

Então eu fiz o que o artigo não fez. Fui atrás de cada afirmação, li o documento do IPO da Anthropic, as notícias da época, os termos de uso e as políticas de dados, e coloquei o link de tudo aqui pra você não precisar acreditar nem em mim, nem nele.

## Quem escreveu e por que isso importa

O artigo é do Edilson Maia Favero, e a crítica aqui é ao artigo, não à pessoa. Ele tem projeto open source, tem empresa, faz coisa legal, mas tem um detalhe que o artigo não conta.

O artigo inteiro gira em torno de conflito de interesse, a Anthropic teria interesse em pegar teus dados e te prender. Só que o próprio autor tem um conflito de interesse gigante no assunto. O título do perfil dele no LinkedIn diz literalmente "Você como o único dono dos seus dados | Transformo dependência de nuvem em autonomia tecnológica através de eficiência extrema e conversão de OPEX em CAPEX". Na parte de consultoria, ele escreve que o foco dele é "eliminar a dependência sistêmica de provedores de Big Techs". A empresa dele, a Costafavero, anuncia no site o [Vault-Code, um "servidor de agentes de IA" com "infraestrutura própria"](https://costafavero.com.br), e ele mantém no GitHub o [Autoreflex, um servidor local de memória pra agentes](https://github.com/edilsonmaia/Autoreflex).

Agora olha a "arquitetura de sobrevivência" que ele recomenda no fim do artigo. Harness próprio, memória local sob o teu domínio, nada de agente fechado de fornecedor. É, ponto por ponto, o que ele vende.

Isso não torna o artigo falso automaticamente, e eu acho até que ele acerta algumas coisas, que eu vou mostrar, mas quem acusa os outros de esconder interesse comercial deveria abrir o próprio.

## O que eu defendo

Pra você entender de onde eu falo, essa é a minha posição.

Eu uso Claude Code todo dia. Na minha empresa eu uso um plano Ultra, já cheguei a usar dois ao mesmo tempo, e a chave de treino tá desligada. Eu acho que isso tem que ser escolha consciente de cada um, e eu escolhi deixar desligada.

Eu sou a favor de memória local, de regras de `deny`, de hooks e de qualquer outra trava que impeça a IA de chegar onde você não quer, e se eu tiver que escolher a melhor opção de todas, eu escolho modelo open source rodando no teu próprio hardware, porque isso é independência de verdade, independência até de fornecedor de hardware na nuvem. Só que hoje isso ainda é caro, e eu falo mais disso no fim.

Então não, eu não tô aqui pra defender a Anthropic. Tô aqui pra separar fato de opinião.

## Mecanismo 1, a "confissão" no documento do IPO

O artigo diz que a análise do S-1 feita pela NYU Stern "colocou o prego final no caixão das ilusões", e que o documento deixa claro "com todas as letras" que o Claude Code é uma arma pra

> invadir as empresas pela porta dos fundos (via programadores individuais), mapear o uso interno, trancar toda a operação corporativa no ecossistema fechado Claude for Enterprise e exterminar todas as empresas intermediárias de software

**O que tá escrito de verdade.** Eu fui direto no documento. O S-1 existe, a Anthropic entregou ele à SEC em [26 de outubro de 2026](https://www.sec.gov/Archives/edgar/data/2130357/000162828026067168/anthropicpbc-sx1.htm), e o IPO saiu em 18 de novembro a US$ 83 por ação, segundo o [prospecto final](https://www.sec.gov/Archives/edgar/data/2130357/000162828026074944/anthropicpbc-424b4.htm). Eu li os trechos, e o que o documento diz é isso aqui.

> These users provide strategic value as a top-of-funnel engine for our enterprise business— individuals who utilize Claude for their personal work and then champion it inside their organizations.

> By the time our direct teams engage a customer, Claude is often already in use.

Traduzindo do jeito que eu entendi, a Anthropic conta com o dev que usa o Claude no trabalho pessoal pra levar ele pra dentro da empresa, e quando o time de vendas chega, o Claude já tá lá, e é isso, não tem "invadir", não tem "mapear o uso interno", não tem "exterminar intermediários". Eu procurei no prospecto final algum fator de risco ou frase sobre competir com os próprios clientes e não achei. O que o documento diz é o contrário, que clientes como a Legora e a Salesforce constroem produtos em cima do Claude, e que um dos riscos é o cliente desenvolver a própria IA e parar de comprar.

**E isso é normal?** Pelo que eu pesquisei, é o que mais tem. Chama product-led growth, ou crescimento de baixo pra cima, e é exatamente o que a [própria análise da NYU Stern](https://bhr.stern.nyu.edu/quick-take/enterprise-ai-with-a-consumer-funnel-what-anthropics-s-1-reveals-about-the-ai-ipo-era/) diz, que a Anthropic está aplicando "a well-worn marketing strategy to the AI era". A crítica da NYU Stern, aliás, é outra, sobre o risco pra consumidores e saúde mental, não sobre roubar empresa. Eu fui atrás do que outras empresas escreveram nos documentos de IPO delas, olha só.

- **Dropbox, 2018.** "Our 500 million registered users are our best salespeople. They've spread Dropbox to their friends and brought us into their offices" ([S-1](https://www.sec.gov/Archives/edgar/data/1467623/000119312518055809/d451946ds1.htm)).
- **Atlassian, dona do Jira, 2015.** "We rely on word-of-mouth and low-touch demand generation to drive trial, adoption and expansion of our products within customers" ([F-1](https://www.sec.gov/Archives/edgar/data/1650372/000104746915008450/a2226437zf-1.htm)).
- **Slack, 2019.** "self-service users become leads for our salespeople" ([S-1](https://www.sec.gov/Archives/edgar/data/1764925/000162828019004786/slacks-1.htm)).
- **Zoom, 2019.** "Our sales model allows us to efficiently turn a single non-paying user into a full enterprise deployment" ([S-1/A](https://www.sec.gov/Archives/edgar/data/1585521/000119312519107178/d642624ds1a.htm)).
- **Figma, 2025.** "approximately 70% of new Organization and Enterprise plan customers included at least one user who was previously a member of a Professional plan" ([S-1](https://www.sec.gov/Archives/edgar/data/1579878/000162828025033742/figma-sx1.htm)).

O Canva ainda não abriu capital, então não tem documento desses, mas ele mesmo fala das suas ["product-led roots"](https://www.canva.com/newsroom/news/one-year-canva-enterprise/). Ninguém chama o Dropbox de Evil Corp porque você levou ele pro trabalho.

O número que mais me assustou foi a retenção de receita líquida de cerca de 900%, ou seja, em média os clientes empresariais gastam nove vezes mais do que um ano antes, mas o próprio prospecto explica que esse número exclui quem assina Pro, Max e Ultra. Ele mede empresa que comprou mais, não dev que foi "capturado".

**Meu veredito.** O "top of funnel" é real e tá escrito, o resto é interpretação do autor colocada como se fosse texto do documento.

## Mecanismo 2, o caso Windsurf

O artigo chama esse de "Telemetria como espionagem industrial e corte de suprimento". A tese é que a Windsurf praticamente inventou o agente de código moderno, que a Anthropic assistiu tudo pela API, copiou na cara dura pra criar o Claude Code e depois cortou o acesso da Windsurf pra roubar os clientes dela.

**O que é verdade.** Eu conferi, e a Windsurf de fato processava mais de 100 milhões de tokens por minuto na API da Anthropic, isso tá no [case de cliente que a própria Anthropic publica](https://claude.com/customers/windsurf), e o corte aconteceu mesmo. Em 3 de junho de 2025 o CEO da Windsurf, Varun Mohan, disse que a Anthropic cortou quase toda a capacidade direta dos modelos Claude 3.x "with less than five days of notice" ([TechCrunch](https://techcrunch.com/2025/06/03/windsurf-says-anthropic-is-limiting-its-direct-access-to-claude-ai-models/)). Foi duro, e eu acho que a Anthropic errou na forma.

**O que o artigo não conta.** O motivo declarado. Dois dias depois, o cofundador Jared Kaplan disse que a decisão veio das notícias de que a OpenAI ia comprar a Windsurf, "I think it would be odd for us to be selling Claude to OpenAI" ([TechCrunch](https://techcrunch.com/2025/06/05/anthropic-co-founder-on-cutting-access-to-windsurf-it-would-be-odd-for-us-to-sell-claude-to-openai/)). Você pode achar o motivo ruim, mas ele não é "roubar a base de devs", e o Claude 4 continuou disponível na Windsurf com a chave de API do próprio usuário.

O final da história também ficou de fora. A compra pela OpenAI não aconteceu, o Google contratou o CEO e pagou US$ 2,4 bilhões em licença ([The Verge](https://www.theverge.com/openai/705999/google-windsurf-ceo-openai), [Reuters](https://www.reuters.com/business/google-hires-windsurf-ceo-researchers-advance-ai-ambitions-2025-07-11/)), e a Cognition, que comprou o resto da Windsurf em 14 de julho de 2025, anunciou a IDE "now with full access to the latest Claude models" ([Cognition](https://cognition.com/blog/windsurf)). A Anthropic voltou a vender pra eles.

**E a cópia?** Pra mim a cronologia não fecha. O Boris Cherny começou o protótipo do que virou o Claude Code em setembro de 2024, e ele já tava sendo usado dentro da Anthropic em novembro de 2024 ([The Pragmatic Engineer](https://newsletter.pragmaticengineer.com/p/how-claude-code-is-built)), mesmo mês em que a Windsurf lançou o Cascade, em [13 de novembro de 2024](https://devin.ai/blog/windsurf-launch). O lançamento público do Claude Code foi em [24 de fevereiro de 2025](https://www.anthropic.com/news/claude-3-7-sonnet), quatro meses antes do corte, e a Windsurf também não inventou agente de código. O [Aider](https://github.com/Aider-AI/aider/releases/tag/v0.5.0) já existia em 2023, o [Devin](https://cognition.com/blog/introducing-devin) foi anunciado em março de 2024 e o [Cline](https://github.com/cline/cline/releases/tag/v2.0.0) começou como Claude Dev em julho de 2024. Sobre "chupar da telemetria", não achei nenhuma evidência, e os [termos comerciais da Anthropic](https://www.anthropic.com/legal/commercial-terms) dizem "Anthropic may not train models on Customer Content from Services". Dá pra desconfiar do contrato, claro, mas aí precisa de prova, e o artigo não traz nenhuma.

**Meu veredito.** O corte com menos de cinco dias é real e foi feio. A "espionagem industrial" é uma acusação sem prova, e a ordem dos fatos joga contra ela.

## Mecanismo 3, a detecção de harness

O nome que ele deu foi "Inspeção silenciosa e sabotagem de harnesses". O artigo diz que num escândalo chamado "Anthropic Billing Controversy", em maio de 2026, descobriram que a Anthropic escaneava prompts, cabeçalhos e requisições pra achar harness concorrente, e quando achava mudava a cobrança, bloqueava o uso no plano ou derrubava o `claude -p`.

Esse é o que tem mais verdade.

**O que aconteceu.** Em 25 de abril de 2026 um usuário abriu a [issue #53262 no GitHub do Claude Code](https://github.com/anthropics/claude-code/issues/53262) mostrando que a string `HERMES.md` numa mensagem de commit fazia o Claude Code mandar as requisições pra cobrança extra em vez do plano. Ele gastou US$ 200,98 de uso extra com só 13% do limite semanal do Max 20x consumido, e o suporte respondeu que não reembolsava "technical errors that result in incorrect billing routing". O Theo Browne reproduziu com um repositório vazio e a palavra OpenClaw num JSON ([GIGAZINE](https://gigazine.net/gsc_news/en/20260501-claude-code-ban-openclaw/)). O Boris Cherny fechou a issue dizendo que era "an overactive anti-abuse system", e o Thariq, do time do Claude Code, admitiu que era um bug "with the 3rd party harness detection and how we pull git status into the system prompt", com reembolso e mais um mês de crédito ([GIGAZINE](https://gigazine.net/gsc_news/en/20260430-hermes-claude-code/), [Hacker News](https://news.ycombinator.com/item?id=47952722)). Só que o dinheiro só voltou depois que o caso estourou no Hacker News.

Ou seja, a Anthropic procurava sim nome de harness concorrente no `git status` que o próprio Claude Code joga no prompt, cobrou errado gente que nem usava esses harnesses, e o suporte negou reembolso até virar escândalo. Isso é grave, e eu não vou passar pano.

**O que o artigo distorce.** O pano de fundo é uma regra de preço, não de independência. Desde 4 de abril de 2026 a assinatura, que tem preço fixo, deixou de cobrir harness de terceiros como o OpenClaw. O Boris Cherny escreveu que dava pra continuar usando essas ferramentas "via extra usage bundles (now available at a discount), or with a Claude API key" ([The Verge](https://www.theverge.com/ai-artificial-intelligence/907074/anthropic-openclaw-claude-subscription-ban)). Os [termos de consumidor](https://www.anthropic.com/legal/consumer-terms) já proibiam acesso automatizado fora da chave de API, e segundo o [The Register](https://www.theregister.com/ai-ml/2026/05/14/anthropic-tosses-agents-into-the-api-billing-pool/5240748) essa regra é de fevereiro de 2024, só não era cobrada.

O `claude -p` nunca foi derrubado. Em maio a Anthropic anunciou que uso programático ia ter um saldo separado a partir de 15 de junho, e em 16 de junho [voltou atrás](https://the-decoder.com/anthropic-backs-off-unpopular-billing-overhaul-as-price-war-with-openai-looms/). E o mais importante, ter harness próprio chamando o Claude pela API e pagando por token nunca foi proibido. O artigo diz que a Anthropic sabota quem quer independência, mas o que ela fez foi impedir que o preço fixo da assinatura fosse usado fora das ferramentas dela.

**Meu veredito.** A detecção por palavra-chave e a negativa de reembolso são reais e mereciam o barulho que fizeram. O resto, datas, "cabeçalhos", `claude -p` derrubado e "harness próprio é sabotado", não bate com as fontes.

## Mecanismo 4, o "sucking up alpha"

O título desse foi "sugando a alma operacional das empresas". A tese é que a joint venture da Anthropic com fundos de Wall Street coloca engenheiros dentro das empresas pra mapear o segredo do negócio e treinar agentes que depois são vendidos pro concorrente, e que a Bridgewater largou os laboratórios comerciais justamente pra não ser sugada.

**O que é verdade.** A joint venture existe, eu li o anúncio. Em 4 de maio de 2026 a Anthropic anunciou com Blackstone, Hellman & Friedman e Goldman Sachs uma empresa de serviços de IA pra empresas de porte médio, com engenheiros da Anthropic trabalhando junto ([Anthropic](https://www.anthropic.com/news/enterprise-ai-services-company)). O valor de US$ 1,5 bilhão é do Wall Street Journal, com cerca de US$ 300 milhões de Anthropic, Blackstone e H&F e uns US$ 150 milhões do Goldman ([Reuters](https://www.reuters.com/legal/transactional/anthropic-nears-15-billion-ai-joint-venture-with-wall-street-firms-wsj-reports-2026-05-04/)), e o estudo da Bridgewater também existe. Eles ajustaram o Qwen3-235B e foram de 78,2% pra 84,7% de acerto em tarefas de triagem financeira, com custo 13,8 vezes menor ([Bridgewater AIA Labs](https://www.bridgewater.com/aia-labs/learning-to-replicate-expert-judgment-in-financial-tasks)).

**O que o artigo inventa.** A expressão "sucking up alpha" não saiu de "relatórios de mercado". Ela vem do Alex Karp, CEO da Palantir, que disse na CNBC em julho que os laboratórios estão "stealing the weights and alpha of my business" ([Mediaite](https://www.mediaite.com/media/tv/you-sound-pretty-angry-cnbc-anchor-left-stunned-as-palantir-ceo-blows-his-stack-during-wild-interview/), [Forbes](https://www.forbes.com/sites/josipamajic/2026/07/02/karp-says-frontier-ai-labs-are-stealing-enterprise-value-and-vcs-are-listening/)), e a Palantir vende justamente a alternativa "soberana". Conflito de interesse de novo.

A Bridgewater não disse em lugar nenhum que fez isso pra impedir a Anthropic de sugar a inteligência dela. O motivo que eles dão é outro, que o julgamento de um especialista não cabe num prompt, "the judgments that matter most are often the hardest to articulate", e que escolheram o Qwen3-235B porque o ajuste fino dele é bem estudado, e não achei nenhuma evidência de que engenheiro da Anthropic treine agente com o segredo de um cliente pra vender pro concorrente. O contrato comercial diz o contrário.

E aqui vai a minha opinião, mesmo que isso fosse verdade. Se você deixa um desenvolvedor de fora entrar na tua empresa e ler o teu código sem um contrato direito, a culpa é tua. Nos Estados Unidos isso tem nome, NDA, o acordo de confidencialidade, e muita empresa junta uma cláusula de propriedade intelectual e uma de não concorrência, o non-compete, que nem vale em todo estado (na Califórnia ele é proibido na maioria dos casos), mas o NDA vale. É a mesma coisa que deixar um desconhecido que bateu na tua porta entrar na tua casa, você não deixaria. Pode ser errado a Anthropic fazer isso, beleza, só que a gente vive no capitalismo, toda empresa existe pra dar lucro, e quem deixou entrar sem se proteger não fez o dever de casa. Não dá pra chamar ninguém de Evil Corp por isso, todo mundo em todo lugar faz igual.

**Meu veredito.** Os fatos existem, a história que liga eles é montagem do autor.

## Mecanismo 5, a cláusula de produto concorrente

Esse ele chamou de "A guilhotina jurídica nos Termos de Serviço". A tese é que os termos proíbem usar a API pra construir produto concorrente, e quando a Anthropic lança algo igual ao teu produto, você vira infrator e ela te corta.

**O que é verdade.** A cláusula existe. Os [termos comerciais](https://www.anthropic.com/legal/commercial-terms), na seção D.4, dizem que o cliente não pode "access the Services to build a competing product or service, including to train competing AI models", e a [Brookings publicou em 12 de março de 2026](https://www.brookings.edu/articles/what-happens-when-ai-companies-compete-with-their-customers/) uma análise do Mark MacCarthy dizendo que a Anthropic poderia usar essa cláusula contra o Cursor ou qualquer app de código, e que a lei antitruste americana dificilmente protege quem depende do fornecedor. Esse é o argumento mais sério do artigo, e eu concordo que o risco existe.

**O que o artigo esconde.** A mesma Brookings diz que "Each of the major AI model providers has an explicit policy allowing them to disconnect competing AI app developers". Ou seja, OpenAI e Google têm a mesma cláusula, não é coisa da Anthropic, e o passo a passo do artigo, você constrói, ela copia e te corta, é uma hipótese. Não achei nenhum caso de cliente cortado porque a Anthropic lançou algo parecido. O único corte conhecido é o da Windsurf, com o motivo declarado da compra pela OpenAI, e eu não achei notícia nenhuma de corte do Cursor, que compete direto com o Claude Code.

E eu vou além. Se eu fosse dono da Anthropic, ou de qualquer empresa de IA, eu também teria essa cláusula, porque é o jeito de se proteger de concorrente usando a tua própria ferramenta. As outras têm parecido. Os termos da OpenAI proíbem "Use Output to develop models that compete with OpenAI" ([OpenAI](https://openai.com/policies/terms-of-use/)), e os do Gemini dizem "You may not use the Services to develop models that compete with the Services" ([Google](https://ai.google.dev/gemini-api/terms)). A da Anthropic é mais larga, fala em produto ou serviço e não só em modelo, isso é verdade, mas a lógica é a mesma.

E a Anthropic já usou essa cláusula exatamente pra isso. Em agosto de 2025 ela cortou o acesso da própria OpenAI ao Claude, porque engenheiros de lá estavam usando o Claude Code antes do lançamento do GPT-5 ([TechCrunch](https://techcrunch.com/2025/08/02/anthropic-cuts-off-openais-access-to-its-claude-models/)). Repara que é o mecanismo 4 ao contrário, um concorrente entrando pela ferramenta, e quem fez o dever de casa e se protegeu foi a Anthropic.

**Meu veredito.** Risco real, hipótese sem caso concreto, e vale pra qualquer fornecedor de modelo.

## O que a Anthropic guarda do teu código, de verdade

Agora a parte que o artigo deveria ter explicado e não explicou. Sim, a Anthropic recebe e guarda o código que passa pelo Claude. Não tem como ser diferente, o modelo precisa ver o código pra trabalhar nele.

Mas ela não varre o teu repositório. Pelo que eu li na [documentação do Claude Code](https://code.claude.com/docs/en/data-usage), o Claude Code local manda o que você escreve, o que o Claude responde e o que as ferramentas trazem pra conversa, ou seja, os arquivos que ele abre e a saída dos comandos que ele roda. O arquivo que ele nunca abriu fica na tua máquina. A exceção é o Claude Code na web, que clona o repositório numa máquina da Anthropic.

E o quanto ela guarda, pelo que eu li no Privacy Center, depende do teu plano e da chave de treino ([Privacy Center](https://privacy.claude.com/en/articles/10023548-how-long-do-you-store-my-data)).

| O que | Vai pra Anthropic? | Chave de treino desligada | Chave de treino ligada |
|---|---|---|---|
| Teus prompts e as respostas | sim | 30 dias, sem treino | até 5 anos, com treino |
| Arquivos que o Claude abre | sim | 30 dias, sem treino | até 5 anos, com treino |
| Saída de comandos | sim | 30 dias, sem treino | até 5 anos, com treino |
| Arquivos que ele nunca abriu (local) | não | não se aplica | não se aplica |
| Repositório inteiro (Claude Code na web) | sim | 30 dias, sem treino | até 5 anos, com treino |
| Joinha e `/feedback` | sim | 5 anos | 5 anos |
| Chat anônimo | sim | sem treino | sem treino |
| Conversa marcada por violação | sim | até 2 anos | até 2 anos |
| Plano comercial (Team, Enterprise, API) | sim | 30 dias, sem treino | não se aplica |

Duas coisas que eu acho importantes aí. Desligar a chave não esconde nada da Anthropic, ela continua recebendo e guarda 30 dias, só não treina, e o joinha e o `/feedback` furam a chave, a conversa vai inteira e fica cinco anos. Isso sim é o tipo de coisa que todo dev deveria saber, e não tá no artigo.

## A tua empresa não é só o teu código

Mesmo com tudo isso, tem uma coisa que eu quero dizer que é opinião minha, e eu deixo claro que é opinião.

A tua empresa não é feita só do teu código. O código é muito importante, eu diria que é o motor da empresa, mas ainda tem o resto do corpo inteiro. Tem a infraestrutura, tem as pessoas, tem a relação com os teus clientes, tem os próprios clientes, tem tudo que você construiu em volta. Se alguém pegasse o teu código amanhã, ele não levaria junto os contratos, a confiança, o suporte, o conhecimento do time sobre o negócio e os anos de relação com cada cliente.

O artigo trata o código como se fosse a empresa inteira, e é isso que faz o medo parecer tão grande.

E tem outra coisa. Hoje nem precisa ser a Anthropic lendo o teu código pra copiar o teu projeto. Em agosto de 2026 um dev indie, o FindTheNeedleDev, lançou a demo do Find the Needle na Steam, um jogo de achar a agulha no palheiro. O jogo viralizou, e antes da versão final sair já tinha dezenas de clones no Roblox e no Fortnite, alguns com dezenas de milhares de jogadores e faturando bem ([Plagiarism Today](https://www.plagiarismtoday.com/2026/09/17/the-attack-of-the-roblox-clones/)). Ninguém precisou do código dele, bastou ver o vídeo, e a IA deixa esse tipo de cópia ainda mais rápida ([How To Market A Game](https://howtomarketagame.com/2026/10/28/ai-cloners-are-here-are-indie-devs-cooked/)).

Existe gente gananciosa e interesseira, e muita gente ficou rica exatamente desse jeito. É brutal, mas o mundo dos negócios é assim, ponto. A tua proteção é o que você constrói em volta do código.

## Como eu me protejo hoje

Eu sou contra o terrorismo e mesmo assim tomo cuidado. Tenho várias travas, e nenhuma delas depende de confiar na Anthropic.

- Chave de treino desligada no meu plano Ultra.
- Nada de senha de banco na minha máquina. O banco de dados é acessado por um perfil IAM da AWS, que pede a minha autenticação toda vez. A IA não tem a minha senha, não consegue abrir o navegador e fazer login por mim, e as próprias travas dela impedem que ela tente.
- IAM da AWS em todo lugar, que é o que mais me ajuda a proteger o código e a infraestrutura.
- Regras de `deny` na configuração do Claude Code, pra ele não entrar em alguns lugares.
- Script de deploy que obriga a rodar todos os testes, assim a IA não consegue fazer deploy sem teste, nem se ela quiser.

Nada disso é exótico, as regras de `deny` e os hooks são configuração do próprio Claude Code, e o resto é AWS. Se você usar outra ferramenta, as mesmas ideias valem.

## O futuro que eu defendo é o modelo no teu hardware

Se eu tiver que escolher a solução que eu mais gosto, é rodar modelo open source no teu próprio hardware. Aí você não depende de nenhuma empresa, nem de nuvem, nem de política de dados de ninguém. Só que hoje isso ainda é caro e ainda fica atrás dos modelos fechados.

Eu tenho 96 GB de RAM e nunca rodei modelo local na minha máquina, mas já aluguei GPU pra testar alguns e fazer benchmark, e eu acompanho muito os testes do [Akita on Rails](https://akitaonrails.com/2026/10/27/llm-benchmark-melhores-llms-open-source-hardware-caseiro/) sobre isso. No último, ele gastou mais de US$ 6 mil alugando GPU e chegou num modelo aberto, o Qwen3.8 Flash-Next, que roda numa RTX 5090 e tirou 91 no teste de programação dele, contra 92,5 dos melhores modelos abertos rodando em GPU de datacenter.

Os números gerais apontam pro mesmo lado. A Epoch AI mediu que o preço pra chegar num mesmo nível de desempenho cai de [9 a 900 vezes por ano](https://epoch.ai/data-insights/llm-inference-price-trends), conforme o teste, e que uma única RTX 5090 roda modelos do nível que era o topo de [6 a 12 meses antes](https://epoch.ai/data-insights/consumer-gpu-model-gap), mas a distância pro topo ainda é grande. No índice da Artificial Analysis de outubro de 2026, o melhor modelo aberto com pesos publicados fica [26 pontos atrás do líder](https://artificialanalysis.ai/articles/artificial-analysis-intelligence-index-v5). Ainda tá caro, ainda fica atrás, mas tá ficando mais barato, e eu acredito que o futuro é cada um com o seu hardware rodando a sua IA.

## Então, é ou não é a Evil Corp?

Antes de responder, faz um exercício comigo. Imagina que você é o dono da Anthropic e pensa como empresário, sem se fazer de vítima.

Você não ia querer que o dev que usa teu produto em casa levasse ele pro trabalho, igual o Dropbox, o Slack e o Jira fizeram? Você não ia colocar no contrato uma cláusula pra ninguém usar a tua ferramenta pra montar o teu concorrente? E se o teu maior rival estivesse comprando um dos teus clientes, você ia continuar vendendo capacidade pra ele como se nada fosse? Eu acho que a maioria das pessoas que reclama faria exatamente as mesmas coisas, e talvez pior.

Então não, não é a Evil Corp. A Anthropic é uma empresa privada, que agora tem ação na bolsa e precisa crescer, e ela joga duro. Cortou a Windsurf com menos de cinco dias de aviso, cobrou errado gente por causa de uma palavra no commit e só devolveu o dinheiro depois do escândalo, e tem uma cláusula que deixa quem constrói em cima dela vulnerável. Tudo isso é real e merece crítica, mas a mesma lógica vale pra OpenAI, pro Google e pra qualquer empresa desse tamanho. Isso tem nome, e o nome é capitalismo.

O que eu não aceito é pegar esses fatos, juntar com coisa que não aconteceu e vender pânico, ainda mais quando quem escreve vende o remédio pro medo que ele mesmo criou. O artigo acerta o risco de depender de um fornecedor só, e erra feio quando diz que a Anthropic lê o teu código pra copiar o teu negócio.

Se você usa Claude, ou qualquer outra IA, o que eu recomendo é bem menos dramático. Desliga a chave de treino se não quiser que teu código vá pra treino, coloca código de empresa em plano comercial, não manda segredo pra conversa, usa `deny`, hooks e IAM, mantém o teu produto capaz de trocar de modelo, e fica de olho no modelo local, porque ele tá chegando.

E sim, eu usei o Claude pra pesquisar e montar esse post, e deixei todas as fontes linkadas aí em cima justamente pra você não precisar confiar nem em mim, nem nele, nem no Claude.
