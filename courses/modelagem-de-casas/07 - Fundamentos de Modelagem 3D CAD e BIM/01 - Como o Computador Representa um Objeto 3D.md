[Voltar ao módulo](./README.md)

# Aula 1: Como o computador representa um objeto 3D

*Pergunta que esta aula responde: o que exatamente o computador guarda quando você "modela uma casa", e por que eixos, origem, unidade e escala decidem se o modelo funciona?*

## Por que isso existe

Nos módulos anteriores a casa foi descrita em desenho: planta, corte, fachada, sempre em papel ou em tela 2D, com escala (1:50, 1:100) e cotas. O desenho é uma comunicação para humanos, que entendem "parede de 15 cm" olhando uma hachura e um número.

O computador não entende hachura nem "parede". Ele só guarda **números**. Um modelo 3D, no nível mais baixo, é uma lista de números que descreve posições no espaço. Para que essa lista signifique alguma coisa, é preciso um referencial: onde está o zero, para onde apontam as direções e o que significa a unidade "1". Tudo o que este módulo ensina depois (faces, grupos, BIM, formatos) se apoia nisso.

## O espaço cartesiano

O computador usa o **sistema de coordenadas cartesiano** em três dimensões: três retas perpendiculares entre si, chamadas **eixos** X, Y e Z, que se cruzam num ponto chamado **origem** (0, 0, 0).

- Um **ponto** é uma tripla de números `(x, y, z)`: quanto andar em cada eixo a partir da origem para chegar nele.
- No desenho 2D da planta você já usava duas dessas dimensões (largura e profundidade). O modelo 3D acrescenta a terceira: a altura. É a mesma ideia que a NBS descreve ao dizer que o modelo 2D tem eixos X e Y e o 3D acrescenta o eixo Z (fonte na seção Para aprofundar).
- Um cômodo de 4 m x 3 m com pé-direito de 2,70 m, com um canto na origem, tem oito cantos: `(0,0,0)`, `(4,0,0)`, `(4,3,0)`, `(0,3,0)` no piso e os mesmos quatro com `z = 2,70` no teto. Esses oito pontos, mais a informação de quais se ligam, já descrevem uma caixa.

**Regra da mão direita.** Três eixos perpendiculares podem ser orientados de duas maneiras que são imagens espelhadas uma da outra. A convenção da matemática e da maioria dos programas de arquitetura é a **mão direita**: com o polegar no X e o indicador no Y, o dedo médio dobrado aponta o Z. A documentação da Microsoft para gráficos 3D registra que existem sistemas "destros" e "canhotos", e que em ambos o X positivo aponta para a direita e o Y positivo para cima; Unity e Unreal usam o canhoto (fonte: Microsoft Learn, na seção Para aprofundar). Você não precisa escolher, só saber que ao trocar de programa o modelo pode chegar espelhado ou deitado.

## Qual eixo é "para cima"?

Aqui está a primeira armadilha prática. **Não há acordo universal.**

| Convenção | Eixo vertical | Onde aparece (segundo o que é conhecido; confira ao abrir cada programa) |
|---|---|---|
| Z para cima | Z | SketchUp, Blender, programas BIM e o padrão IFC |
| Y para cima | Y | glTF, motores de jogo como Unity |

Em SketchUp os eixos são coloridos: vermelho é X, verde é Y e azul é Z (vertical). Blender usa as mesmas cores para X, Y e Z, com Z para cima. Ao exportar um modelo de um programa "Z para cima" para outro "Y para cima", ele chega deitado a 90 graus. Não é erro do modelo: é diferença de convenção, e os conversores costumam oferecer uma opção para girar.

Para arquitetura, a consequência é simples: o piso da casa fica no plano horizontal, e a altura das paredes cresce no eixo vertical do programa. O plano de piso do desenho 2D vira o plano X-Y (em programas Z para cima).

## Global e local

Há dois tipos de referencial, e todo programa usa ambos:

- **Coordenadas globais (do mundo):** medidas a partir da origem do modelo inteiro. A origem é única.
- **Coordenadas locais:** medidas a partir da origem de um objeto específico (um grupo, um componente, uma janela). Cada objeto tem seus próprios eixos e sua própria origem, e ele "carrega" esse referencial ao ser movido ou girado.

Por que isso importa: uma janela modelada uma vez, com sua origem no canto inferior do vão, pode ser colocada em cem paredes diferentes. Para o programa, ela é sempre a mesma janela, só com uma posição e rotação globais diferentes. Isso é a base dos componentes que você verá na aula 5. Tutoriais de Blender explicam bem a diferença entre eixos globais e locais visualmente (veja abaixo), e a ideia vale para qualquer software.

## Onde colocar a origem do projeto

Escolha um ponto de referência estável e coloque-o na origem. Um canto externo da casa, ou o encontro de dois eixos de pilares (a "malha" de eixos que você viu ao estudar estrutura e desenho técnico), funciona bem. Motivos:

1. **Numericamente, perto da origem é mais preciso.** O computador guarda coordenadas em ponto flutuante, com número finito de dígitos. Quanto maior o valor, menos casas decimais sobram para a parte fracionária. A documentação de importação de CAD do SketchUp avisa que geometria longe da origem pode degradar o desempenho, e discussões da comunidade relatam problemas de precisão também com grandes distâncias.
2. **Alinhamento entre arquivos.** Se planta, terreno e móveis compartilham a mesma origem, tudo encaixa ao ser combinado.
3. **Orientação.** Alinhar as paredes principais aos eixos X e Y deixa as ferramentas de "travar no eixo" trabalharem a seu favor. Casa girada em 37 graus no espaço obriga a lutar com o programa; melhor girar só o norte, quando necessário.

Um arquivo de planta vindo do AutoCAD frequentemente tem sua origem muito longe do desenho (coordenadas de topografia, por exemplo). Ao importar, traga o desenho para perto da origem antes de modelar (aula 8).

## Unidade: o número não tem unidade

O ponto `(4, 3, 2.7)` não diz se são metros, centímetros ou milímetros. **A unidade é uma convenção do programa e do arquivo, não uma propriedade do número.** Isso gera o erro clássico: modelar em metros e abrir num programa que lê o mesmo número como centímetros. A casa de 10 m vira uma casinha de 10 cm, ou o inverso, uma casa de 1 km.

Pontos práticos:

- Programas de modelagem deixam você escolher a unidade de exibição. No SketchUp, em Model Info, você escolhe o formato (Arquitetônico, Decimal, Engenharia ou Fracionário) e a precisão exibida, e pode configurar comprimento, área e volume de forma independente (por exemplo, comprimento em centímetros e área em metros quadrados). Isso vem da ajuda oficial (fonte abaixo). No Sweet Home 3D, a unidade (por exemplo centímetro) é escolhida nas preferências do programa.
- Ao **importar** um arquivo de CAD, o SketchUp pede a unidade do arquivo original. Ele avisa que "o tamanho ou a escala podem não ser importados como esperado" quando a unidade original é desconhecida. Sempre confirme medindo algo conhecido depois de importar: uma parede de 3,00 m no desenho deve medir 3,00 m no modelo.
- Formatos como OBJ e STL não gravam unidade nenhuma (só números); o glTF define metros como unidade por especificação. Você verá isso na aula 7.

**Regra de ouro para o hobby brasileiro:** trabalhe em metros ou centímetros (a norma de desenho técnico brasileira já usa essas unidades) e nunca misture. Decida uma unidade de trabalho no primeiro dia e escreva-a num canto do projeto.

## Escala: no modelo é sempre 1:1

No módulo de desenho técnico, escala era a relação entre desenho e realidade (1:50 = 1 cm no papel representa 50 cm). **No modelo 3D não existe escala de desenho.** O modelo é construído em tamanho real (1:1), e a escala só reaparece quando você gera uma prancha para imprimir: a vista é ampliada ou reduzida na hora da impressão.

Consequências:

- Modele a parede com a espessura real (por exemplo, o bloco mais o revestimento, que você estudou em sistemas construtivos), e não com uma linha.
- Uma porta tem 0,80 m x 2,10 m no modelo, sempre. Se o modelo estiver em escala errada, todas as vistas, quantitativos e renderizações saem errados.
- Se algo importado vier no tamanho errado, **redimensione o conjunto inteiro de uma vez** por um fator (por exemplo, 10 ou 100), e não peça por peça.

## Precisão e tolerância

Como coordenadas têm número finito de dígitos, os programas tratam pontos "quase iguais" como iguais. A comunidade do SketchUp relata que a precisão interna é de 1/1000 de polegada (cerca de 0,0254 mm) e que pontos mais próximos que isso são considerados o mesmo ponto (informação de fórum, não da documentação oficial; use como ordem de grandeza). Na prática, para uma casa, isso nunca é problema com medidas normais de construção (milímetros já são exagero de precisão). O problema aparece quando você modela detalhes minúsculos (1 mm ou menos), quando o arquivo está muito longe da origem, ou quando faz transformações sucessivas. A solução é a que já vimos: trabalhar perto da origem, evitar detalhes menores do que a construção real exige e, se precisar de um detalhe pequeno, modelá-lo ampliado e reduzir depois.

## Como começar qualquer modelo (roteiro)

1. Defina a unidade de trabalho (metro ou centímetro).
2. Defina a origem: um canto da casa ou um cruzamento de eixos.
3. Alinhe o eixo principal da casa ao X ou ao Y.
4. Crie um objeto de referência com medida conhecida (por exemplo, um retângulo de 1 m x 1 m) e confirme que a régua do programa mede 1 m.
5. Só então importe a planta ou comece a desenhar.

## Resumo

- O computador guarda pontos como triplas `(x, y, z)` em relação a uma origem e três eixos perpendiculares; todo o resto (arestas, faces, objetos) é construído sobre essas posições.
- Não existe convenção única para "qual eixo é para cima" (Z em SketchUp, Blender e BIM; Y em glTF e em Unity), por isso modelos podem chegar deitados ao trocar de programa.
- Coordenadas globais medem a partir da origem do modelo; locais medem a partir da origem de cada objeto, o que permite reutilizar objetos (componentes).
- A unidade não faz parte do número; é uma convenção do programa ou do arquivo. Confirme sempre medindo algo conhecido depois de importar.
- O modelo é sempre 1:1; escala de desenho só existe na impressão. Trabalhe perto da origem e evite detalhes menores do que a obra exige.

## Para aprofundar

- [ ] [3D Coordinate System (1 of 2: Introduction)](https://www.youtube.com/watch?v=6D_zkEVnFgU) (Eddie Woo): introdução matemática ao sistema de coordenadas 3D, em inglês (título e canal confirmados; conteúdo não assistido).
- [ ] [Three-Dimensional Coordinates and the Right-Hand Rule](https://www.youtube.com/watch?v=5sJdfciNM20) (Professor Dave Explains): pelo título, mostra a regra da mão direita para orientar os eixos.
- [ ] [Sketchup - Eixos, linhas e apagar](https://www.youtube.com/watch?v=mUiZen519Gk) (Tiago Scheicher): primeiros passos com os três eixos no SketchUp, em português.
- [ ] [Eixos - Tutoriais Avançados SketchUp](https://www.youtube.com/watch?v=jJCO926WKQM) (SketchUp Brasil): pelo título, aborda os eixos do SketchUp em português.
- [ ] [Aula 26 - Como usar os Eixos no SketchUp?](https://www.youtube.com/watch?v=JuuItibF2KE) (Henrique Barsa): o uso dos eixos e da origem no SketchUp, em português.
- [ ] [Understanding Global and Local Axis in Blender (Tutorial)](https://www.youtube.com/watch?v=dIv2FXyD3CU) (Ryan King Art): mostra visualmente a diferença entre eixos globais e locais (o conceito vale para qualquer programa; a interface é a do Blender).
- [ ] [Sistemas de coordenadas (Direct3D 9)](https://learn.microsoft.com/pt-br/windows/win32/direct3d9/coordinate-systems) (Microsoft Learn, texto em português): sistemas destro e canhoto, em contexto de programação gráfica.
- [ ] [Managing Units of Measurement](https://help.sketchup.com/en/managing-units-measurement) (Ajuda do SketchUp, inglês): formatos de unidade e precisão de exibição.
- [ ] [BIM dimensions: 3D, 4D, 5D, 6D BIM explained](https://www.thenbs.com/knowledge/bim-dimensions-3d-4d-5d-6d-bim-explained) (NBS, inglês): o modelo 2D tem X e Y, o 3D acrescenta Z.

[Próxima aula: Vértices, arestas e faces](./02%20-%20Vertices%20Arestas%20e%20Faces.md)
