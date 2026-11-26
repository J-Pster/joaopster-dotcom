[Voltar ao módulo](./README.md)

# Aula 1: Por que o SketchUp funciona assim

*Pergunta que esta aula responde: por que o SketchUp é tão rápido para modelar uma casa, e por que essa mesma rapidez cobra disciplina de quem o usa?*

## O problema que o SketchUp resolve

No módulo 07 você viu que um modelo 3D é uma **malha**: pontos (vértices) ligados por **arestas**, que delimitam **faces**. Programas de CAD 3D tradicionais escondem essa malha atrás de conceitos mais pesados (sólidos, operações booleanas, árvores de histórico, parâmetros). O custo é uma curva de aprendizado longa: antes de modelar uma parede, você precisa aprender a linguagem do programa.

O SketchUp fez a aposta oposta: **expor só a malha e dar uma ferramenta muito boa para mexer nela**. Tudo é aresta ou face. Você não "cria um objeto parede"; você desenha um contorno e o empurra para o volume. A ajuda oficial do SketchUp resume a base: as arestas são a fundação de todo modelo, arestas unidas em um contorno fechado formam uma face, e o Push/Pull (Empurrar/Puxar) transforma o 2D em 3D ([Introducing Drawing Basics and Concepts](https://help.sketchup.com/en/sketchup/introducing-drawing-basics-and-concepts), verificado em setembro de 2026).

## Mecanismo 1: arestas, faces e a criação automática de faces

Três regras explicam quase tudo o que o SketchUp faz:

1. **Aresta**: uma linha reta entre dois pontos. Curvas (círculos, arcos) são, por dentro, sequências de arestas retas curtas (segmentos).
2. **Face**: quando arestas coplanares (no mesmo plano) formam um contorno fechado, o SketchUp cria a face sozinho. Ferramentas como Retângulo, Círculo e Polígono já criam a face pronta.
3. **Divisão**: desenhar uma linha sobre uma face existente, de borda a borda, divide a face em duas. Cada pedaço passa a ser uma face independente.

O Push/Pull (Empurrar/Puxar) pega **uma face** e a desloca perpendicularmente ao seu plano; as arestas do contorno viram novas faces laterais. É assim que um retângulo vira uma caixa.

Exemplo numérico resolvido, um cômodo simples:

- Você desenha um retângulo de 4,00 m x 3,00 m no chão: 4 arestas, 1 face.
- Empurra/puxa a face 2,70 m para cima (o pé-direito, módulo 01): o resultado é uma caixa com 6 faces, 12 arestas e 8 vértices. As 4 faces laterais nasceram das 4 arestas originais.
- Se agora você desenhar um retângulo de 0,80 m x 2,10 m sobre uma face lateral, essa face é dividida: o retângulo interno é uma nova face (a futura porta) e o resto continua sendo face. Empurrar o retângulo para dentro, até atravessar a parede, abre o vão.

Note o que aconteceu: você modelou uma sala e uma porta sem nunca "criar" um objeto sala ou um objeto porta. Isso é a origem da velocidade e, como veremos, também dos problemas.

## Mecanismo 2: tudo em escala real

No SketchUp você modela em **tamanho real**: uma parede de 2,70 m tem 2,70 m no modelo. Não existe "escala 1:50" enquanto se modela; a escala só aparece depois, quando você produz uma vista para imprimir (o que se faz no LayOut, Pro, aula 8). Consequências práticas:

- Você mede e digita medidas reais (a aula 4 detalha a caixa de medidas).
- Um modelo de casa é muito maior que uma peça de mobiliário, e ambos coexistem no mesmo arquivo em escala consistente. Por isso móveis baixados do 3D Warehouse (aula 7) entram no tamanho certo, se o autor os modelou certo.
- Se a primeira coisa que você importar estiver na escala errada (uma planta importada em unidade errada), tudo que você construir sobre ela herda o erro. A aula 6 mostra como conferir.

Ligação com o módulo 03 (desenho técnico): na prancha em papel a escala é uma redução; no SketchUp a "prancha" é o próprio modelo em 1:1.

## Mecanismo 3: o sistema de inferências

Como desenhar com precisão no espaço com um mouse (2D)? O SketchUp adivinha a sua intenção. Enquanto você move o cursor, o **motor de inferência** procura geometria próxima e eixos alinhados e mostra dicas visuais. A ajuda oficial descreve três famílias: inferências de **ponto** (extremidade, ponto médio, interseção, centro, "sobre a aresta", "sobre a face"), **lineares** (alinhado aos eixos vermelho, verde e azul, paralelo, perpendicular, tangente) e de **forma** (quadrado, retângulo áureo, frações de círculo) ([mesma página da ajuda](https://help.sketchup.com/en/sketchup/introducing-drawing-basics-and-concepts)).

Os **eixos de cor** são a bússola do modelo: vermelho (eixo X), verde (eixo Y) e azul (eixo Z, a vertical). Uma linha desenhada fica da cor do eixo com o qual está alinhada. Regra de ouro para casas: paredes estão sobre vermelho ou verde no plano do chão, e sobem no azul. Se a linha não aparece colorida, ela está torta e vai gerar problemas depois. A aula 4 explica como travar em um eixo.

## Mecanismo 4: a "aderência" da geometria (e por que isso obriga a disciplina)

Aqui está o preço da simplicidade. Como tudo é malha solta, **geometria que se toca se funde**. Se você empurrar uma laje até encostar numa parede, as faces coincidentes se dividem e se unem; se depois tentar mover a laje, ela arranca pedaços da parede. A própria ajuda oficial dá o motivo de existirem grupos: em um grupo, "objetos não grudam em outras entidades" ([Grouping Geometry](https://help.sketchup.com/en/sketchup/grouping-geometry)).

Isso leva às quatro disciplinas que estruturam o resto do módulo:

| Disciplina | O que faz | Aula |
|---|---|---|
| **Grupos** | isolam pedaços da geometria para que não colem | 5 |
| **Componentes** | grupos reutilizáveis: mudar um muda todas as cópias | 5 |
| **Tags** (antigas layers) | ligam e desligam a visibilidade de conjuntos | 5 |
| **Nomear e limpar** | mantêm o arquivo compreensível e leve | 10 |

Contraste com o que você já viu: no Sweet Home 3D (módulo 09) a parede é um objeto com espessura e altura que você edita numericamente; no SketchUp a parede é um conjunto de faces, e mudar a espessura exige mexer na geometria. Em compensação, no SketchUp você pode modelar **qualquer forma** (um beiral curvo, uma escada em L, uma pérgola) sem esperar que o programa tenha uma ferramenta para ela. E o BIM (módulo 11, Revit e Archicad) fica no extremo oposto: cada elemento sabe o que é (parede, porta, laje) e carrega dados, ao custo de menos liberdade.

Uma nota sobre "história": o SketchUp em geral não guarda um histórico de operações que você possa reeditar (não há uma lista "extrusão 1, extrusão 2" como em CAD paramétrico). O modelo é o estado atual da malha. Por isso, planejar a organização desde o início vale mais do que consertar depois.

## Sólidos e volumes

Um grupo ou componente cuja geometria forma um volume completamente fechado (sem furos na malha) é tratado como **sólido**. As ferramentas sólidas do SketchUp (na versão web aparecem no conjunto expandido com os nomes Outer Shell, Intersect Solid, Union Solid, Subtract Solid, Trim Solid e Split Solid, segundo a [ajuda do SketchUp for Web](https://help.sketchup.com/en/sketchup-web/sketchup-web-expanded-toolbar)) fazem operações booleanas entre volumes, como subtrair um cilindro de uma caixa para fazer um furo. Para modelar uma casa, o Push/Pull e o desenho de aberturas fazem a maior parte do trabalho; as ferramentas sólidas ficam para detalhes. Confira o nome exato e a disponibilidade no seu plano.

## Por que isso serve para o seu objetivo

Para modelar a própria casa como hobby, o SketchUp é a ferramenta em que a distância entre "tenho a ideia" e "vejo em 3D" é a menor. Você vai gastar mais tempo pensando nas medidas do que aprendendo comandos. O risco é o modelo virar uma sopa de geometria colada; as aulas 5 e 10 existem para evitar isso.

## Resumo

- SketchUp expõe só a malha: arestas formam faces automaticamente, e o Push/Pull extruda faces em volumes. É por isso que é rápido de aprender.
- Modela-se em escala real (1:1); a escala de impressão só existe na documentação (LayOut).
- O motor de inferência e os eixos de cor (vermelho X, verde Y, azul Z) substituem a precisão de um teclado de coordenadas por precisão guiada do cursor.
- Geometria que se toca se funde; grupos, componentes e tags são a disciplina que impede a bagunça.
- Sem histórico paramétrico em geral: o modelo é o estado atual, então organize desde o começo.

## Para aprofundar

- [ ] [Introducing Drawing Basics and Concepts](https://help.sketchup.com/en/sketchup/introducing-drawing-basics-and-concepts) (SketchUp Help, oficial, em inglês): a base de arestas, faces e inferências no texto da fabricante.
- [ ] [Aulão do SketchUp para Iniciantes | Aprenda do ZERO em 1 aula](https://www.youtube.com/watch?v=pt8yQ_ssG_E) (MasterTuts): aula única em português; o título indica visão geral de interface e ferramentas.
- [ ] [Aula 01: Como MEXER no SKETCHUP [MINI CURSO DE SKETCHUP 2023]](https://www.youtube.com/watch?v=mLajA-RZQfY) (Beatriz Luz): primeira aula de um mini curso em português; o título indica primeiros passos e configurações iniciais.
- [ ] [[CURSO GRATUITO DE SKETCHUP] AULA 01 - Interface e ferramentas de navegação](https://www.youtube.com/watch?v=f1T8OcAcczI) (Projeto Jovem Arquiteto): interface e navegação, para ver o gesto de orbitar, mover e dar zoom.
- [ ] [Projeto do zero no SketchUp - Parte 01: Antes do projeto](https://www.youtube.com/watch?v=Cu7pa0icn4E) (SketchUp Brasil): abertura de uma série do canal oficial em português; o título indica planejamento anterior à modelagem (ver a nota sobre planos pagos na aula 9).
- [ ] [How to Model a House in SketchUp Free (10 EASY Steps)](https://www.youtube.com/watch?v=LXpXVAgRLV0) (SketchUp School, inglês): passeio por uma casa simples inteira no SketchUp Free; bom para ver o fluxo completo antes de fazer o seu.

Nota: os vídeos não foram assistidos; título e canal foram confirmados. Descrições acima seguem o título.

[Próxima aula: Versões, licenças, acesso e interface](./02%20-%20Versoes%20Licencas%20Acesso%20e%20Interface.md)
