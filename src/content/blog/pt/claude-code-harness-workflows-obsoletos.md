---
title: 'O harness do Claude Code deixou meu workflow obsoleto (e a maioria dos outros)'
description: 'Criei um workflow com 20 comandos e 45 agentes e já escrevi "viva o OMC". Hoje o Claude Code faz quase tudo isso sozinho. O que mudou e o que eu ainda uso por fora.'
pubDate: 'Nov 26 2026'
tags: ['AI', 'Claude Code', 'My Opinion', 'Setup']
---

Em março eu fechei a versão 1.0 do [Pster's AI Workflow](https://github.com/J-Pster/Psters_AI_Workflow), um plugin com 20 comandos, 45 agentes, 17 skills, 4 hooks e 8 rules para organizar como a IA trabalha num projeto. Em maio, no [post sobre a minha migração do Cursor para o Claude Code](/blog/migrei-cursor-para-claude-code/), eu terminei escrevendo "viva o OMC", o orquestrador de agentes que eu tinha instalado por cima do Claude Code.

Hoje eu não uso nenhum dos dois.

Eles continuam funcionando. O que mudou foi o próprio Claude Code, o harness dele evoluiu tanto que passou a fazer sozinho quase tudo que esses workflows faziam, e em alguns casos faz melhor. Na minha opinião isso vale para a maioria dos workflows que a gente instalava por cima dele, e o meu é só o exemplo que eu conheço melhor.

Neste post eu explico o que é esse harness, o que o meu workflow fazia, o que o Claude Code já faz sem plugin nenhum e as duas coisas que eu ainda uso por fora.

## O que é o harness do Claude Code?

Harness é tudo que roda em volta do modelo. O modelo (Opus, Sonnet) é quem pensa. O harness é o que dá a ele as ferramentas para agir, como ler e editar arquivos, rodar comandos, lançar outros agentes, guardar contexto e lembrar das coisas entre uma conversa e outra.

Uma analogia que ajuda é pensar que o modelo é o motor e o harness é o resto do carro. Um motor bom num carro ruim não anda direito.

Por muito tempo o motor estava na frente do carro. O modelo já era capaz de muita coisa, mas o harness não dava estrutura para ele se organizar em tarefas grandes. Foi esse buraco que os workflows vieram tapar.

## O que o meu workflow fazia (e por que fazia sentido)

O Pster's AI Workflow nasceu para o Cursor e tinha um fluxo fixo:

```text
/pwf-brainstorm      → define escopo e decisões
/pwf-plan            → quebra a feature em fases
/pwf-checklist, /pwf-clarify, /pwf-analyze   → quality gates opcionais
/pwf-work-plan       → implementa uma fase por vez, até acabar
/pwf-review          → revisão com vários agentes
/pwf-commit-changes  → commits estruturados
```

Ele se apoiava em duas ideias. A primeira era a **previsibilidade**, o próprio README dizia que os comandos não escolhem o caminho sozinhos e que quem escolhe o próximo passo é o dev. A segunda era a **documentação como memória**, os comandos liam a documentação do projeto antes de implementar e atualizavam ela no fim, porque a IA esquecia tudo de uma sessão para outra.

Quando fui para o Claude Code, faltava outra peça, que era rodar vários agentes ao mesmo tempo. Para isso eu instalei o OMC ([oh-my-claudecode](https://github.com/Yeachan-Heo/oh-my-claudecode)), que trazia comandos como `/team`, `/ralph` e `/ultrawork` para orquestrar agentes em paralelo.

Na época isso tudo fazia sentido. O modelo não se organizava bem sozinho em tarefas longas, então eu dava o trilho para ele.

## O que o Claude Code faz sozinho hoje

Esta é a comparação com o que eu tinha montado:

| O que eu precisava | Como eu resolvia antes | Como é hoje |
|---|---|---|
| Planejar antes de implementar | `/pwf-brainstorm` + `/pwf-plan` | O Claude planeja sozinho quando a tarefa pede |
| Executar em partes | `/pwf-work-plan`, uma fase por vez | Ele divide o trabalho e lança subagentes |
| Vários agentes em paralelo | OMC (`/team`, `/ultrawork`) | `/workflow` |
| Revisão com vários agentes | `/pwf-review` | `/code-review` |
| Instruções que se repetem | Rules e skills do plugin | Skills e plugins nativos |
| Memória do projeto | Docs mantidos pelo workflow | Memória do Claude (ainda fraca) + ai-memory |

Algumas dessas mudanças merecem mais detalhe.

### Orquestração de agentes virou nativa

Um **subagente** é um agente que o Claude lança para fazer uma parte do trabalho. Ele roda com o próprio contexto e devolve só o resultado, sem lotar a conversa principal. **Orquestrar** é coordenar vários desses ao mesmo tempo.

Com o `/workflow`, o Claude Code monta um fluxo que lança vários subagentes e junta o que eles fazem. Antes isso só era possível com o OMC. Hoje vem de fábrica, e as orquestrações que ele monta já vão além das que o OMC antigo tinha.

### A sessão ficou mais flexível

O `/btw` deixa você fazer uma pergunta paralela sem atrapalhar a tarefa que está rodando. Também dá para abrir um subchat a partir da sessão em que você está.

E o que eu acho mais foda é que agora um chat consegue falar com o outro. Uma sessão manda uma tarefa para outra, a outra responde, e você não precisa ficar copiando e colando entre elas.

### O Claude se gerencia sozinho

Aquela sequência de brainstorm, plano e execução por fase, que eu forçava com comandos, ele já faz sem eu pedir. Ele decide quando vale planejar, quando dividir em partes e quando chamar um subagente.

Com isso, a ideia central do meu workflow perdeu o sentido. Eu escolhia cada passo porque o modelo não sabia escolher bem, e hoje ele sabe.

### Projects substituíram o meu workspace

No meu workflow existia um comando só para criar um workspace com todos os repositórios do projeto e manter plano e docs juntos. Os projects do Claude Code fazem isso de forma nativa, com uma sessão central que orquestra subsessões, chamadas de tópicos. É o que eu montava na mão.

## O que ainda falta no harness

Duas coisas eu ainda uso por fora.

### Serena, para buscar e editar código

O Claude Code ainda trabalha com ferramentas básicas de arquivo, que só leem, editam e buscam texto, como o sistema operacional faz. Funciona, mas é bruto. Para mudar uma função, ele precisa ler o arquivo, achar o trecho e editar o texto.

O [Serena](https://github.com/oraios/serena) dá ao Claude ferramentas que entendem o código, como o `find_symbol` para achar uma função ou classe, o `find_referencing_symbols` para ver quem usa ela e o `replace_symbol_body` para trocar o corpo dela sem ler o arquivo inteiro. Isso gasta menos contexto e erra menos. Acho que algo assim ainda vai entrar no harness, mas por enquanto não entrou.

### ai-memory, para lembrar das coisas

A memória do Claude está começando a evoluir, mas ainda não é muito boa. Por isso eu uso o [ai-memory](https://github.com/akitaonrails/ai-memory), do Akita.

Ele guarda a memória como arquivos markdown num servidor que você mesmo roda, versionados em git, e funciona entre agentes e entre máquinas. Dá para sair do Claude Code no meio de uma tarefa, abrir outro agente na mesma pasta e continuar sem explicar a arquitetura de novo.

## Meu setup hoje

É bem menor do que o do post de maio:

- Claude Code, com o harness dele;
- Serena;
- ai-memory;
- minhas skills.

O resto eu desinstalei ou parei de usar.

## Explicou duas vezes? Vira skill

Se tem uma dica que eu daria a quem usa Claude Code hoje, é que tudo que você precisa explicar duas vezes deveria virar uma skill.

Uma **skill** é um pacote de instruções que o Claude carrega quando a tarefa pede. Você escreve uma vez como fazer algo, e ele segue isso sempre que o assunto aparece. Eu tenho skills para fazer deploy, para o padrão de commit e para escrever do meu jeito.

Este post é um exemplo. Na primeira versão, o Claude usou uma skill que eu tinha feito para mensagens de chat, e o texto saiu curto demais para um blog. Em vez de explicar de novo como eu queria o post, eu pedi para ele criar uma skill só para posts, com estrutura, SEO e as regras do meu site. Este texto foi escrito com ela.

E as skills estão crescendo. Agora elas estão se juntando com os connectors, que são as integrações com serviços externos, numa coisa só, os **plugins**. Antes uma skill era um arquivo `.md`. Hoje um plugin pode ter várias skills, vários `.md`, scripts, comandos, connectors e outros arquivos de apoio. Foi exatamente o que eu tentei montar à mão no Pster's AI Workflow, só que agora é um formato nativo.

Se você tem um workflow instalado por cima do Claude Code, meu conselho é testar umas semanas sem ele. Veja o que realmente faz falta, e coloque só isso de volta, de preferência como skill. Me conta nos comentários o que sobrou no seu setup.
