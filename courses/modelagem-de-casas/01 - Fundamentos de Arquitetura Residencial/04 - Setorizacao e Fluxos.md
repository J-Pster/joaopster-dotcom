[Voltar ao módulo](./README.md)

# Aula 4: Setorização, zoneamento e fluxos

*Pergunta que esta aula responde: dada a lista de ambientes com suas áreas, em que posição relativa cada um deve ficar, e por onde as pessoas e as coisas vão circular?*

## Por que agrupar e organizar ambientes

Os ambientes da tabela da aula 2 têm usos que conflitam entre si. Alguns são **barulhentos** (sala com TV, cozinha em uso), outros pedem **silêncio** (quarto, escritório). Alguns são **sujos** ou úmidos (área de serviço, cozinha), outros **limpos e secos** (quarto). Uns são **públicos** (recebem visita), outros **privados**. Colocar tudo ao acaso obriga o morador a atravessar o quarto para chegar ao banheiro ou faz o cheiro da cozinha invadir a sala.

**Setorizar** é agrupar ambientes de uso parecido em zonas (setores) e posicionar as zonas entre si de forma que os conflitos diminuam e as ligações necessárias fiquem curtas. **Zoneamento**, neste contexto, é o mesmo raciocínio aplicado ao lote e à casa inteira (não confundir com o zoneamento urbano da prefeitura, do Módulo 6, que define o que se pode construir em cada região da cidade).

Isso vem antes da planta porque planta é uma solução geométrica: se os grupos e as relações estão definidos, a geometria é encontrar um encaixe; se não estão, a planta vira tentativa e erro.

## Os setores clássicos da casa

| Setor | Ambientes típicos | Característica de uso | Quer estar |
|---|---|---|---|
| **Social** | sala de estar, sala de jantar, varanda, lavabo, hall | público (recebe visita), ruidoso, ativo à tarde e à noite | perto da entrada; voltado para a área externa de lazer |
| **Íntimo** (privativo) | quartos, suítes, banheiros, escritório | privado, silencioso, dorme-se à noite | longe da rua e do barulho; com acesso ao banheiro sem passar pelo social |
| **Serviço** | cozinha, área de serviço, despensa, quarto de empregada (quando houver), depósito | trabalho doméstico, úmido, ruidoso, cheiros | ligado à cozinha e ao acesso de serviço; discreto para quem chega |
| **Externo** | garagem, quintal, jardim, área gourmet, piscina | uso variado, exposto | ligado à rua (garagem) ou ao social (lazer) |

Essa divisão em três (social, íntimo, serviço) é a convenção usual do projeto residencial brasileiro. Ela não é lei: numa casa pequena os setores se misturam (a cozinha vira parte da sala, o quarto do casal serve de escritório). Mas mesmo misturados, o raciocínio serve para decidir **onde** a mistura é tolerável.

## Pares de opostos: o que separar e o que juntar

A decisão de setorização se resume a responder, para cada par de ambientes, uma de três respostas: **junto**, **indiferente** ou **separado**. Os critérios:

- **Ruído**: separar sala de TV do quarto; juntar sala e cozinha (as duas são ativas).
- **Privacidade visual**: o banheiro não deve abrir para a sala; o quarto não deve ser visível da entrada.
- **Umidade e hidráulica**: agrupar banheiros, cozinha e área de serviço. Ao encostá-los, as tubulações de água e esgoto ficam num só trecho, o que reduz custo e risco de vazamento (detalhado no Módulo 5).
- **Cheiro e calor**: cozinha longe dos quartos, ventilada para fora.
- **Frequência de uso**: ambientes que se usam juntos (cozinha e sala de jantar) ficam perto; os pouco usados (despensa, depósito) podem ficar longe.
- **Acessibilidade**: se há idoso ou pessoa com mobilidade reduzida, o quarto e o banheiro ficam no mesmo pavimento, com poucos degraus.

## A matriz de relações

A forma organizada de guardar essas decisões é uma **matriz de relações**: uma tabela triangular em que cada célula cruza dois ambientes e recebe uma nota. Exemplo, para a casa do exemplo da aula 2:

Legenda: **P** = precisa estar próximo (ligação direta); **D** = desejável próximo; **I** = indiferente; **S** = deve estar separado.

| | Hall | Sala estar | Sala jantar | Lavabo | Cozinha | Área serv. | Suíte | Quartos | Banh. social | Escritório | Garagem |
|---|---|---|---|---|---|---|---|---|---|---|---|
| **Hall** | | P | D | D | I | S | S | S | I | I | D |
| **Sala estar** | P | | P | D | D | S | S | S | I | D | I |
| **Sala jantar** | D | P | | I | P | S | S | S | I | I | I |
| **Lavabo** | D | D | I | | I | I | S | S | I | I | I |
| **Cozinha** | I | D | P | I | | P | S | S | S | S | D |
| **Área serv.** | S | S | S | I | P | | S | S | S | S | D |
| **Suíte** | S | S | S | S | S | S | | D | S | S | S |
| **Quartos** | S | S | S | S | S | S | D | | P | S | S |
| **Banh. social** | I | I | I | I | S | S | S | P | | S | S |
| **Escritório** | I | D | I | I | S | S | S | S | S | | I |
| **Garagem** | D | I | I | I | D | D | S | S | S | I | |

(Lida assim: cozinha e sala de jantar devem estar ligadas (P); cozinha e quartos, separadas (S); garagem e cozinha, próximas (D), pelo motivo das compras.)

Você não precisa preencher a matriz inteira de memória; o procedimento é: para cada ambiente, pergunte o que ele tolera ao lado e o que não tolera. Vale mais o raciocínio do que a tabela.

## Os fluxos: o que circula pela casa

**Fluxo** é o caminho que pessoas e coisas percorrem entre ambientes. Há três tipos principais numa casa, e cada um tem uma lógica diferente:

1. **Fluxo social**: visitas. Rua, portão, hall, sala. Não deve passar por área íntima nem por serviço.
2. **Fluxo íntimo**: moradores entre quartos, banheiros e áreas comuns. Deve ser curto e privado (do quarto ao banheiro, sem passar pela sala), e é usado à noite, de pijama.
3. **Fluxo de serviço**: compras que entram, lixo que sai, roupa suja que vai à área de serviço e volta seca, entregadores. Deve ser direto e discreto (rua, garagem ou portão de serviço, cozinha, área de serviço, quintal), sem cruzar a sala.

Regra geral: **os fluxos não devem se cruzar em pontos sensíveis**. O cruzamento mais problemático é o de serviço com social (o carrinho de compras atravessando a sala com visita) e o de íntimo com social (o filho de pijama atravessando a sala de jantar).

A **circulação** (corredor, hall, escada) é o meio físico dos fluxos e não gera uso próprio. Por isso ela é área "cara": quanto mais corredor, menos área útil. A regra prática é usar poucos corredores, curtos, e deixar os ambientes se ligarem por portas onde a privacidade permite (a sala se liga à sala de jantar sem corredor). Um corredor deve servir a três ou mais portas, para se justificar.

## Graus de privacidade: a lógica de percurso

Uma forma útil de ver a casa: do lado de fora para dentro, a privacidade **cresce em degraus**.

`rua (público) > jardim/varanda > hall > sala (social) > corredor > quarto (íntimo) > banheiro da suíte (mais íntimo)`

O visitante deve poder ir da rua até a sala e ao lavabo sem nunca ver o corredor dos quartos. Se o desenho força o visitante a atravessar um degrau íntimo para chegar a um ambiente social (o lavabo só é acessível pelo corredor dos quartos, por exemplo), há um erro de setorização.

## Integrar ou separar: uma decisão de hábito

Numa casa moderna, é comum **integrar** cozinha, sala de jantar e sala de estar em um só espaço. Vantagens: sensação de amplitude, quem cozinha continua na conversa, menos paredes e portas, área efetiva melhor em casas pequenas. Desvantagens: cheiro e ruído da cozinha invadem a sala, a bagunça da cozinha fica à vista, a ventilação cruzada fica mais difícil de controlar, e o conforto acústico cai. Não há resposta certa: é uma decisão do briefing (quem cozinha muito com fritura em casa tende a separar). Se integrar, a coluna de características da tabela deve registrar: "exaustão potente sobre o fogão" e "porta ou biombo opcional".

## Do fluxograma ao diagrama de bolhas

O procedimento gráfico que junta tudo:

1. **Fluxograma**: um esquema de caixas e setas, sem escala. Cada caixa é um ambiente; cada seta é uma ligação ou fluxo. É a versão visual da matriz de relações.
2. **Diagrama de bolhas**: círculos com o tamanho proporcional à área de cada ambiente (a área da tabela!), posicionados de forma que ligações P fiquem encostadas e as S, afastadas. Ainda sem forma final; serve para achar a **disposição**.
3. **Esquema em blocos**: as bolhas viram retângulos com as proporções reais, com o terreno ao redor. Aqui aparecem os primeiros problemas de encaixe.

Fluxograma da casa do exemplo, em texto:

```
Rua ──> [Hall] ──> [Sala de estar] ──> [Sala de jantar] ──> [Cozinha] ──> [Área de serviço] ──> Quintal
          │              │                                        │
          │              └──> [Lavabo]                            └──> [Garagem] <── Rua
          │
          └──(corredor íntimo)──> [Banheiro social] ── [Quarto 1] ── [Quarto 2]
                                    │
                                    ├──> [Escritório]
                                    └──> [Suíte + banheiro]
```

Duas leituras a tirar: o **corredor íntimo** parte do social e é a única ligação com os quartos, então separa bem os setores. A **garagem** se liga à cozinha para as compras entrarem sem cruzar a sala.

Para um terreno retangular estreito, sem levar em conta o sol (Módulo 2) nem a legislação (Módulo 6), a disposição em blocos que resulta é:

```
                     RUA (frente)
     ┌───────────┬─────────────────────────┐
     │  garagem  │  hall / sala de estar   │   faixa 1: acesso e social
     ├───────────┼───────────┬─────────────┤
     │ cozinha   │  sala de  │   lavabo    │   faixa 2: social e serviço
     ├───────────┤  jantar   ├─────────────┤
     │ área serv.│           │  corredor   │
     ├───────────┴───────────┼─────────────┤
     │  suíte   │ quartos    │ banh.+escrit│   faixa 3: íntimo (fundos, mais silêncio)
     └───────────────────────┴─────────────┘
                    FUNDOS
```

É um esquema, não uma planta: mostra apenas a lógica de posição. A aula 8 trabalha esse encaixe com medidas.

## Erros clássicos de setorização

- Banheiro de visita acessível só pelo quarto ou de dentro da cozinha.
- Quarto colado à garagem ou à rua sem tratamento acústico.
- Cozinha longe da sala de jantar e da entrada de compras.
- Área de serviço aberta para a sala.
- Corredor longo e escuro que serve a um único quarto.
- Sala que funciona como corredor (todo mundo atravessa para chegar a outro lugar).

## Resumo

- Setorizar é agrupar ambientes de uso parecido e posicionar os grupos para reduzir conflitos (ruído, cheiro, privacidade, umidade).
- Os setores clássicos são social, íntimo, serviço e externo; em casas pequenas eles se misturam, e o raciocínio ainda vale.
- Matriz de relações (P, D, I, S) guarda as decisões de vizinhança; fluxograma e diagrama de bolhas as transformam em posição.
- Há três fluxos (social, íntimo, serviço) e eles não devem se cruzar em pontos sensíveis; a privacidade cresce em degraus da rua até o quarto.
- Circulação é área sem uso próprio: quanto menos corredor, mais área útil.

## Para aprofundar

- [ ] [A setorização no projeto de arquitetura](https://www.youtube.com/watch?v=1VhSwifK6b8) (Como Projetar): pelo título, trata do conceito de setorização.
- [ ] [O Início! Programa de necessidades, Fluxograma e Croqui! PROJETO ARQUITETÔNICO DO ZERO!](https://www.youtube.com/watch?v=EtCexqb74rE) (Felipe Gomes): pelo título, mostra a passagem do programa ao fluxograma e ao croqui.

[Próxima aula: O corpo humano e a medida da casa](./05%20-%20O%20Corpo%20Humano%20e%20a%20Medida%20da%20Casa.md)
