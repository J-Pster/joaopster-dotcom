---
title: 'Como eu uso IA pra criar cursos do jeito que eu gosto de aprender'
description: 'Eu parei de depender do jeito do professor e peço pro Claude montar cursos em texto feitos pra mim, da base até o avançado, com glossário, questionário e revisão espaçada, aqui eu conto como eu monto e como eu estudo'
pubDate: '2026-11-26T18:11:31-03:00'
updatedDate: '2026-11-27T15:52:39-03:00'
tags: ['ai', 'claude-code', 'courses', 'opinion']
---

No começo de novembro a Defesa Civil soltou aquela orientação pra cada família ter um kit pra se virar sozinha por 72 horas, com água, comida e remédio, e isso caiu bem na época em que todo mundo tava falando do El Niño. Eu li aquilo e pensei, cara, eu devia saber primeiros socorros. Fui procurar e o conteúdo tava espalhado, difícil de achar num lugar só, e nada me levava do começo ao fim. Então eu pedi pra IA montar um curso pra mim.

Saiu um curso de 27 módulos e 293 aulas, com um glossário de 2.486 termos, baseado no PHTLS, no TCCC e no TECC, que são as referências de atendimento ao trauma. Foi o primeiro curso grande e estruturado de verdade que eu fiz, porque era um assunto que eu não conhecia basicamente nada. Neste post eu conto como eu peço pra IA criar um curso do jeito que eu aprendo, a skill que eu escrevi pra isso e como eu estudo o que sai dela.

## O que me cansava nos cursos prontos

Antes da IA eu procurava curso na Udemy e vídeo no YouTube. Livro eu nunca fui muito de ler, e conteúdo escrito bom e organizado era difícil de achar. O que mais me chateava era depender do jeito do professor explicar, e muitas vezes não era o meu jeito. Ou era mais ou menos, ou o vídeo tinha áudio ruim, imagem ruim, e isso me estressava.

Hoje eu prefiro texto, e muito. A IA é muito boa em gerar texto e não em gerar vídeo, então é no texto que eu consigo um conteúdo feito pro meu jeito. E texto eu leio no meu ritmo, volto atrás, marco um trecho. No vídeo eu tenho que escutar o cara falar a mesma coisa de novo, e no texto eu só bato o olho e acho, é muito mais rápido.

## Como eu digo pra IA o jeito que eu aprendo

Eu só aprendo começando pela base. Mesmo quando eu já tenho alguma bagagem no assunto eu gosto de começar do básico, porque se eu não entendo o porquê de uma coisa eu não aceito aquela informação. Então a primeira coisa que eu fiz foi deixar isso escrito como regra:

- O primeiro módulo é sempre o fundamento mais profundo do assunto.
- Toda aula responde "por que é assim?" antes de "como se faz?".
- Nenhum módulo usa algo que ainda não foi ensinado.
- O curso termina num projeto ligado a um objetivo concreto meu.

Dá pra ver isso na ordem dos cursos. O de primeiros socorros abre com "Como o corpo mantém a vida", e torniquete só aparece no módulo 5, depois de quatro módulos de base. O de AWS abre com "Por que a nuvem existe".

A outra coisa que eu faço é contar pra IA o cenário em que eu tô, pra ela focar ainda mais em mim. Por isso numa aula de AWS o texto diz "O João já escolheu `us-east-1` ao criar recursos". O curso fala comigo pelo nome e usa o meu caso como exemplo, coisa que nenhum curso gravado faz.

Isso não quer dizer que o curso só serve pra mim. Como ele parte do zero, qualquer pessoa com quase nenhum conhecimento consegue chegar ali e ler. E quando o objetivo é uma certificação, eu peço o curso pra prova específica que eu quero, porque aí ele também ensina como a prova funciona. A nota de início do curso de AWS já explica que são 65 questões, que você passa com 720 de 1.000 e quanto pesa cada domínio, e a matéria vai na proporção desse peso.

## A skill que monta o curso

Eu uso o Claude Code com o Opus 5.5 e uma skill que eu escrevi, a `criar-curso`. Skill é um arquivo de instruções que o Claude carrega quando o pedido bate com a descrição dela, e a minha tem o processo inteiro:

1. Entender o tema e aonde eu quero chegar.
2. Desenhar o currículo, com os módulos em ordem de dependência, e me mostrar pra eu aprovar antes de pesquisar qualquer coisa.
3. Pesquisar e escrever, com um agente por módulo, até 5 em paralelo, todos lendo o mesmo guia de escrita.
4. Juntar tudo, conferir se os fatos batem entre os módulos e ligar cada termo ao glossário.
5. Verificar por script, sem link quebrado, sem termo sem link e com gabarito sem viés (a resposta certa não pode ser sempre a mais longa, que é um vício de texto gerado por IA).

Eu rodo isso com o `/workflow` do Claude Code, que lança vários subagentes (outras instâncias do Claude, cada uma com a sua tarefa) e junta o que eles devolvem. Eu falei mais dele no [post sobre o harness do Claude Code](/blog/claude-code-harness-workflows-obsoletos/). Só o curso de AWS usou uns 483 agentes, espalhados em vários workflows.

Um curso leva de 2 a 3 horas pra ficar pronto, depende do tamanho, e é basicamente one shot. Os próprios workflows pesquisam, escrevem e revisam, então as idas e voltas a IA faz sozinha, sem eu encostar em nada. Eu uso o plano Ultra, e cada curso come uns 1 a 2% do meu uso semanal.

O curso sai como uma pasta no formato que o [Obsidian](https://obsidian.md/) entende, com uma nota por aula, uma nota por termo do glossário e links entre elas. A área de cursos do meu site lê esse mesmo formato e coloca por cima o que o Obsidian não tem, então eu escrevo o curso uma vez e ele funciona nos dois.

A skill não nasceu assim. Os dois primeiros cursos, Modelagem de Casas e depois Rádio, em setembro, saíram de uma versão bem embrionária, que só pesquisava e escrevia o curso. Não tinha glossário, não ligava uma aula na outra e não seguia a estrutura do Obsidian. Os cursos não ficaram ruins, mas ficaram mais básicos, e a skill foi crescendo de lá pra cá até o de primeiros socorros.

## Como eu estudo o curso

Todo dia eu abro o curso em qualquer um dos meus aparelhos, e o progresso já tá lá salvo. Eu leio a aula até o fim e, quando termino o módulo, faço o questionário dele, que me ajuda a fixar o que eu li, e aí passo pro próximo.

Uns dois dias depois eu volto nas questões que eu errei. E a revisão espaçada eu faço praticamente todo dia, com cartões dos termos do glossário das aulas que eu já li e das questões que eu errei, e cada cartão volta no dia em que eu estaria perto de esquecer.

Quando eu não entendo alguma coisa, eu pergunto pro assistente de IA que tem dentro da plataforma de cursos. Você coloca a sua chave da Anthropic, da OpenAI ou do Google, e ele lê a aula que você tem aberta e responde com base nela, dá pra até selecionar um trecho e perguntar só sobre ele. Isso é sensacional. E quando eu acho um erro no curso, eu corrijo e atualizo o curso no site. O resto do que a plataforma faz eu mostrei no [post sobre a plataforma de estudo](/blog/plataforma-de-cursos-gratuita/).

O de AWS é o que eu mais tô estudando. Eu estudo uma ou duas horas por dia e pretendo fazer a prova nos próximos meses, talvez semanas.

## A IA erra?

Erra, com certeza, e não tem muito como fugir disso. O que dá pra fazer é obrigar ela a pesquisar e analisar bastante na internet antes de escrever qualquer coisa, que é o que a skill faz, e conferir você mesmo os pontos que são críticos.

O que eu mais vejo é a IA indo pro genérico. Uma vez eu pedi uns cartões de referência rápida de primeiros socorros e ela me devolveu umas explicações enormes e bagunçadas, que pra um cartão que você precisa ler em dois segundos numa emergência era horrível. Eu tive que refinar o pedido até sair o que eu queria, e a skill no fundo é isso, um prompt que eu já refinei pra não cair no genérico.

Agora, pra quem fala que IA ensina errado e por isso não serve pra aprender, eu lembro que livro erra, professor erra e vídeo do YouTube erra, e ninguém parou de ler livro por causa disso.

## Como criar o seu curso

A skill tá aberta na página [Como eu crio os cursos](/cursos/como-criar/). Pra usar:

1. Baixe o .zip da skill.
2. No Claude Code, descompacte e copie a pasta `criar-curso` pra `~/.claude/skills/`. No claude.ai ou no app, envie o .zip em Configurações, Capacidades, Skills. Em outra IA, cole o conteúdo do `SKILL.md` e do `guia-de-escrita.md` como instrução.
3. Peça dizendo o tema, aonde você quer chegar e, se quiser, o seu cenário, assim:

```text
Aprendendo fotografia, quero chegar em fotografar um casamento sozinho.
```

Ela te mostra o currículo pra aprovar, escreve os módulos e verifica tudo no fim. Os cursos que eu já fiz assim tão abertos na [área de cursos do site](/cursos/), e se você criar um, me manda no joao@joaopster.com que eu leio e, se estiver bom, publico lá com os créditos pra você.
