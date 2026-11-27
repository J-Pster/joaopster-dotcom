---
title: 'O harness do Claude Code deixou meu workflow obsoleto'
description: 'Criei um workflow com 20 comandos e 45 agentes e hoje o Claude Code faz quase tudo isso sozinho, aqui eu conto o que mudou no harness e o que eu ainda uso por fora'
pubDate: '2026-11-25T21:46:04-03:00'
tags: ['ai', 'claude-code', 'opinion', 'setup']
---

Em março eu fechei a versão 1.0 do [Pster's AI Workflow](https://github.com/J-Pster/Psters_AI_Workflow), um plugin que eu fiz pra organizar como a IA trabalha nos meus projetos, com 20 comandos, 45 agentes, 17 skills, 4 hooks e 8 rules. Em maio, no [post em que eu contei a minha migração do Cursor pro Claude Code](/blog/migrei-cursor-para-claude-code/), eu ainda terminei escrevendo "viva o OMC", que era o orquestrador de agentes que eu tinha instalado por cima do Claude Code.

Hoje eu não uso nenhum dos dois.

E eles continuam funcionando, o que mudou foi o próprio Claude Code. O harness dele evoluiu tanto nesses meses que passou a fazer sozinho quase tudo que eu tinha montado, e em alguns casos faz melhor do que o meu workflow fazia. Eu acho que isso vale pra maioria dos workflows que a gente instalava por cima dele, e falo isso porque eu mesmo fui atrás de vários. O meu é só o que eu conheço por dentro, e tem caso bem pior, tipo o Ruflo, que naquele mesmo post de maio eu descobri que era quase tudo teatro.

## O que é o harness do Claude Code?

Harness é tudo que roda em volta do modelo. O modelo, que é o Opus ou o Sonnet, é quem pensa, e o harness é o que dá as ferramentas pra ele agir, tipo ler e editar arquivo, rodar comando, lançar outros agentes, guardar contexto e lembrar das coisas de uma conversa pra outra.

Por muito tempo o modelo evoluiu mais rápido que o harness. Ele já dava conta de muita coisa, mas não tinha estrutura pra se organizar numa tarefa grande, e foi esse buraco que os workflows, inclusive o meu, vieram tapar.

## O que o meu workflow fazia

O Pster's AI Workflow nasceu no Cursor e tinha um fluxo fixo, que eu rodava comando por comando:

```text
/pwf-brainstorm      → define escopo e decisões
/pwf-plan            → quebra a feature em fases
/pwf-checklist, /pwf-clarify, /pwf-analyze   → quality gates opcionais
/pwf-work-plan       → implementa uma fase por vez, até acabar
/pwf-review          → revisão com vários agentes
/pwf-commit-changes  → commits estruturados
```

Tinha duas ideias por trás dele. A primeira era previsibilidade, o próprio README dizia que os comandos não escolhem o caminho sozinhos e que quem decide o próximo passo é o dev. A segunda era usar a documentação como memória, os comandos liam os docs do projeto antes de mexer em qualquer coisa e atualizavam eles no fim, porque a IA esquecia tudo de uma sessão pra outra.

Quando eu fui pro Claude Code ainda faltava uma peça, que era rodar vários agentes ao mesmo tempo, e aí eu instalei o OMC ([oh-my-claudecode](https://github.com/Yeachan-Heo/oh-my-claudecode)), que trazia comandos como `/team`, `/ralph` e `/ultrawork` pra orquestrar agentes em paralelo. Fazia sentido. O modelo não se organizava bem sozinho em tarefa longa, então eu dava o trilho pra ele.

## O que o Claude Code faz sozinho hoje

Pra eu mesmo enxergar a diferença, montei essa tabela:

| O que eu precisava | No meu workflow | No Claude Code hoje |
|---|---|---|
| Planejar antes de implementar | `/pwf-brainstorm` + `/pwf-plan` | nativo |
| Executar em fases | `/pwf-work-plan` | nativo, com subagentes |
| Vários agentes em paralelo | OMC (`/team`, `/ultrawork`) | `/workflow` |
| Revisão com vários agentes | `/pwf-review` | `/code-review` |
| Instruções que se repetem | rules e skills do plugin | skills e plugins |
| Memória do projeto | docs mantidos pelo workflow | memória do Claude + ai-memory |

A primeira vez que o `/workflow` me impressionou foi numa pesquisa. Eu queria que a IA pesquisasse a fundo vários tópicos pra descobrir a melhor forma de fazer uma coisa, e até então eu fazia isso pedindo pra ela lançar workers na mão, que é como eu chamava os subagentes, agentes que o Claude lança pra fazer uma parte do trabalho com o próprio contexto e que devolvem só o resultado. O `/workflow` é isso só que estruturado, ele lança os subagentes com um objetivo claro, cada um no seu pedaço, e junta tudo no fim. Achei sensacional! Antes eu só conseguia orquestrar agentes assim com o OMC, e hoje o Claude Code faz sozinho e vai além do que o OMC antigo fazia.

A sessão também ficou bem mais flexível. Dá pra fazer uma pergunta paralela com o `/btw` sem atrapalhar a tarefa que tá rodando, dá pra abrir um subchat a partir da sessão, e o que eu acho mais foda é que agora um chat consegue falar com o outro. Uma sessão manda uma tarefa pra outra, a outra responde, e eu não preciso mais ficar copiando e colando entre elas.

E o Claude passou a se gerenciar sozinho. Aquela sequência de brainstorm, plano e execução por fase, que eu forçava na base do comando, ele já faz sem eu pedir, ele decide quando vale planejar, quando quebrar em partes e quando chamar um subagente. Isso matou a ideia central do meu workflow. Eu escolhia cada passo porque o modelo não sabia escolher, e hoje ele sabe.

Até o comando que eu tinha pra montar um workspace com todos os repositórios do projeto perdeu o sentido, porque os projects do Claude Code fazem isso de forma nativa, com uma sessão central que orquestra subsessões, que eles chamam de tópicos.

O OMC eu desinstalei faz uns dois meses, quando percebi que o Claude Desktop tinha ficado melhor que o CLI. No post de maio eu defendia o CLI porque a interface travava com muitos agentes rodando, só que o harness do Desktop hoje é muito mais bem implementado, então eu mudei pro Desktop e o OMC parou de fazer sentido.

Uma coisa que eu não consigo te dizer é quanto eu economizei com isso. Eu não senti diferença no consumo, e o consumo do Claude varia muito por conta própria, tem semana que eu faço a mesma quantidade de trabalho e o uso de tokens explode, e tem semana que quase não mexe. Será que é alguma coisa interna dos modelos da Anthropic? Meu palpite é que sim, mas eu não sei.

## O que eu ainda uso por fora

A primeira coisa é o [Serena](https://github.com/oraios/serena). O Claude Code ainda mexe no código com ferramentas básicas de arquivo, que só leem, editam e buscam texto, como o sistema operacional faz. Funciona, mas é bruto, pra mudar uma função ele precisa ler o arquivo, achar o trecho e trocar o texto. O Serena dá pro Claude ferramentas que entendem o código, como o `find_symbol` pra achar uma função ou classe, o `find_referencing_symbols` pra ver quem usa ela e o `replace_symbol_body` pra trocar o corpo dela sem ler o arquivo inteiro. Na prática o Claude termina o trabalho bem mais rápido, porque altera os arquivos muito mais rápido.

Só que, já aviso, ele come RAM. Eu tenho 96 GB de memória e rodo umas 6 ou 7 instâncias do Serena ao mesmo tempo, cada uma puxa de 6 a 18 GB, e no fim ele chupa quase toda a memória da máquina. Mesmo assim não largo, me salva muito desde que eu instalei. Eu acho que algo assim ainda vai entrar no harness, mas por enquanto não entrou.

A outra é memória. A do Claude tá começando a melhorar, mas ainda não é boa, então eu uso o [ai-memory](https://github.com/akitaonrails/ai-memory) do Akita, que guarda a memória como arquivos markdown versionados em git num servidor que você mesmo roda, e funciona entre agentes e entre máquinas. Dá pra sair do Claude Code no meio de uma tarefa, abrir outro agente na mesma pasta e continuar sem explicar a arquitetura de novo.

No fim o meu setup ficou bem menor que o do post de maio:

- Claude Code, agora no Claude Desktop
- Serena
- ai-memory
- minhas skills

O resto eu desinstalei ou parei de usar.

## Se explicou duas vezes, vira skill

A dica que eu daria pra quem usa Claude Code hoje é transformar em skill tudo que você precisa explicar duas vezes. Skill é um pacote de instruções que o Claude carrega quando a tarefa pede, você escreve uma vez como fazer algo e ele segue isso sempre que o assunto aparece. Eu tenho skill pra fazer deploy, pro meu padrão de commit e pra escrever do meu jeito.

Esse post mesmo é um exemplo. Na primeira versão o Claude usou uma skill que eu tinha feito pra mensagem de chat e o texto saiu curto demais pra um blog, então em vez de explicar de novo como eu queria o post eu pedi pra ele criar uma skill só pra post, com estrutura, SEO, as regras do meu site e uma lista grande de vícios de texto de IA pra evitar. Esse texto foi reescrito com ela.

E as skills tão crescendo. Elas estão se juntando com os connectors, que são as integrações com serviços de fora, numa coisa só, os plugins. Antes uma skill era um arquivo `.md`, hoje um plugin pode ter várias skills, vários `.md`, scripts, comandos, connectors e outros arquivos de apoio, que é mais ou menos o que eu tentei montar na mão no Pster's AI Workflow, só que agora é nativo.

Se você tem um workflow instalado por cima do Claude Code, testa umas semanas sem ele, vê o que faz falta e coloca só isso de volta, de preferência como skill. E me conta nos comentários o que sobrou no seu setup, fiquei curioso pra saber se alguém ainda roda o OMC.
