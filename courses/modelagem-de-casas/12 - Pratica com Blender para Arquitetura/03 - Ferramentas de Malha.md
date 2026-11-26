[Voltar ao módulo](./README.md)

# Aula 3: Ferramentas de malha

*Pergunta que esta aula responde: com que ferramentas se transforma um punhado de vértices em paredes, vãos e volumes, e como usar cada uma com valores exatos?*

## Por que essa aula existe

Como o Blender guarda só malha (aula 1), tudo o que uma casa tem é obtido com um pequeno conjunto de operações sobre vértices, arestas e faces: **criar** (extrudar, preencher), **dividir** (loop cut, faca, subdividir), **fundir e limpar** (merge, dissolve), **deslocar** (mover com números, deslizar). Quem domina umas dez ferramentas e seus atalhos consegue modelar uma casa inteira. Todas as ferramentas abaixo funcionam em **Edit Mode** (`Tab`), com fonte no Manual do Blender 5.2 LTS (seção Modeling > Meshes) e atalhos conferidos no mapa de teclas padrão do 5.2.2.

Você já conhece o conceito por trás delas no módulo 7 (aula 4: [construindo volumes por extrusão e booleanas](../07%20-%20Fundamentos%20de%20Modelagem%203D%20CAD%20e%20BIM/04%20-%20Construindo%20Volumes%20Extrusao%20e%20Booleanas.md)). Aqui é o "como se faz" no Blender.

## Antes das ferramentas: selecionar

Toda ferramenta atua sobre a **seleção**. Em Edit Mode há três modos, alternados por `1`, `2` e `3` (Manual, Mesh Selecting):

- **Vertex (`1`):** vértices como pontos.
- **Edge (`2`):** arestas.
- **Face (`3`):** faces (uma face selecionada aparece em laranja).

Com `Shift` ao trocar, dois modos ficam ativos juntos. Ao passar de um modo "menor" para um "maior" (vértices para arestas), a seleção só sobrevive se formar um elemento completo; no sentido inverso, tudo permanece selecionado.

Formas úteis de selecionar:

- **`A`** tudo, **`Alt-A`** nada, **`Ctrl-I`** inverte, **`B`** caixa.
- **`Alt-clique` numa aresta** seleciona um **loop** (a fila de arestas em linha reta, como o topo de todas as paredes) e, em modo de faces, uma fileira de faces (Manual, Select Loops). Com "Emulate 3 Button Mouse" ligado, `Alt-clique` não funciona; use duplo clique.
- **`L`** (com o mouse sobre uma peça) seleciona tudo o que está conectado; `Ctrl-L` seleciona o conectado à seleção atual. Útil quando o objeto tem partes desconexas (paredes separadas).
- **X-Ray (`Alt-Z`):** deixa selecionar elementos escondidos atrás de outros. Sem X-Ray, só se selecionam elementos visíveis. Em X-Ray, faces são selecionadas pelo ponto central, não pela superfície.

Dica de conferência: o overlay **Statistics** mostra quantos vértices, arestas e faces estão selecionados.

## Primitivas: o ponto de partida

`Shift-A > Mesh` cria: Plane, Cube, Circle, UV Sphere, Icosphere, Cylinder, Cone, Torus, Grid, Monkey (Manual, Mesh Primitives). Detalhes que importam:

- Aparecem no **3D Cursor** (aula 2). No painel **Adjust Last Operation** você corrige os parâmetros na hora: Plane e Cube têm `Size` (largura total; o cubo padrão tem 2 m); Cylinder tem `Vertices`, `Radius`, `Depth`; Circle tem `Vertices`, `Radius` e `Fill Type`.
- **Em Edit Mode**, a primitiva é acrescentada **dentro do mesmo objeto**, como nova geometria desconectada. Isso é útil (um pilar no mesmo objeto de estrutura), mas mistura se você não quiser.
- Um truque clássico para começar "do nada" um traçado de paredes: adicionar um **Plane**, entrar em Edit Mode, selecionar tudo e fundir os quatro vértices num só (`M > At Center`). Sobra um único vértice, que você posiciona por número e extruda (ver abaixo).

## Extrudar (`E`): a ferramenta central

**Extrudar** duplica a seleção e liga o duplicado ao original com geometria nova. É a operação que produz volume a partir de planta: o Manual resume que vértices viram arestas, arestas viram faces e faces viram sólidos.

| Você extruda... | ...e obtém | Uso em arquitetura |
|---|---|---|
| Um **vértice** | uma aresta | traçar o eixo de uma parede, ponto a ponto |
| **Arestas** | faces (uma fita) | subir as paredes a partir da planta |
| Uma **face** | um volume | laje, pilar, platibanda |

Uso: com a seleção pronta, `E`, depois **travar o eixo** (`X`, `Y` ou `Z`), depois **digitar a distância** e `Enter`:

- `E Z 2.9 Enter`: sobe 2,90 m.
- `E X -8 Enter`: 8 m para a esquerda (oeste).
- Vários eixos: `E 4.6 Tab 0 Tab 1.38 Enter`.

Pontos que o Manual destaca:

- Por padrão, a face extrudada anda pela **normal média** das faces. Travar um eixo global força a direção.
- **Cancelar não desfaz.** Se você apertar `Esc` ou botão direito durante a extrusão, o movimento é cancelado, mas a geometria nova **continua lá**, sobreposta à original. É a fonte das "faces duplicadas" e da malha suja da aula 9. Desfaça com `Ctrl-Z`.
- `Alt-E` abre o menu de extrusões (Extrude Faces, Extrude Faces Along Normals, Extrude Individual Faces, Extrude Manifold, Extrude Edges, Extrude Vertices, Extrude Repeat). **Along Normals** engrossa uma face para fora mantendo cantos (bom para beirais); **Individual** extruda cada face separadamente.
- `Extrude Region` do Manual: só o contorno é extrudado; a região interna é deslocada intacta. Isso garante volumes fechados coerentes.

## Inset (`I`): uma face dentro de outra

**Inset** cria uma borda de faces dentro da face selecionada (Manual, Inset Faces). Você move o mouse (ou digita) para definir a **espessura**; com `Ctrl` durante o inset, ajusta a **profundidade**. Opções: `Boundary` (`B`), `Outset` (`O`), `Individual` (`I`) e `Offset Even` (mantém a largura uniforme). Em arquitetura: marcar o contorno de um vão de janela na face de uma parede, criar caixilho e moldura, aros e rebaixos. Digite a espessura: `I 0.05 Enter` cria 5 cm de borda.

## Loop Cut and Slide (`Ctrl-R`): dividir para criar referência

Divide uma **fileira de faces** em duas ou mais, com novos "loops" de arestas paralelos (Manual, Loop Cut and Slide). Passos: `Ctrl-R`, passar o mouse sobre uma aresta (uma linha amarela mostra o corte), **girar a roda** (ou digitar) para o **número de cortes**, clicar, mover para deslizar, clicar de novo. **Botão direito** no segundo passo cria o corte no centro exato. Em Adjust Last Operation, o campo `Factor` posiciona o corte numericamente.

Em arquitetura, o loop cut cria as **linhas de referência** onde entrarão vãos e níveis: por exemplo, um corte horizontal na altura do peitoril e outro na altura da verga de uma janela. Depois você move essas arestas com valor digitado. Para reposicionar um loop existente sem mudar o formato, use **Edge Slide** (pressione `G` duas vezes, segundo o Manual).

## Bevel (`Ctrl-B`): chanfro e arredondamento

O **Bevel** substitui uma aresta viva por um chanfro (Manual, Bevel). `Ctrl-B` chanfra arestas; `Shift-Ctrl-B` só vértices. Mover o mouse define a largura; a roda define os **segmentos** (quantidade de divisões: 1 segmento é chanfro plano, mais segmentos arredondam). Em Adjust Last Operation:

- `Width Type`: **Offset**, **Width**, **Depth**, **Percent**, **Absolute**; `Offset` é o padrão.
- `Width`: a medida (digite o valor).
- `Segments`, `Profile Shape`, `Clamp Overlap` (impede que o chanfro invada a aresta vizinha; se o chanfro "some", verifique isso).
- `Affect`: Vertices ou Edges.

Uso: quinas de balcão, cantos de móveis, batentes, rodapé chanfrado. O mesmo efeito existe como **modificador** (aula 4), que mantém o valor editável. **Atenção:** o bevel só dá medida real com escala aplicada (aula 2).

## Knife (`K`): corte livre

O **Knife** desenha cortes livres que atravessam faces (Manual, Knife Topology Tool). Clique para cada ponto do corte, `Enter` ou `Espaço` confirma, `Esc` cancela. Teclas úteis: `C` corta através de faces ocultas (Cut Through); `X`, `Y`, `Z` travam o corte em um eixo; `A` restringe a ângulos; **`Shift`** gruda no ponto médio de arestas; `Ctrl` ignora o snap; `S` mostra medidas do corte. `Shift-K` corta só a seleção. **Aviso do Manual:** se um corte cria vértices duplicados, é comum o **Clip Start** da vista estar pequeno demais (`N > View`); aumente-o.

Em arquitetura: dividir uma face de parede na diagonal, marcar a linha de um telhado, cortar o contorno de um vão sobre uma vista ortogonal.

## Merge (`M`), Delete (`X`) e Dissolve (`Ctrl-X`)

- **Merge** funde os vértices selecionados (Manual, Merge): `At Center` (no centro geométrico), `At Cursor`, `Collapse`, `At First`, `At Last` e **`By Distance`** (funde vértices mais próximos que uma distância, padrão minúsculo). `By Distance` também está em `Mesh > Clean Up > Merge by Distance`. **É a ferramenta de limpeza mais importante**: elimina vértices duplicados, comuns após extrusões canceladas ou importações.
- **Auto Merge** (`N > Tool > Options`): funde sozinho vértices arrastados para perto de outros. Útil ao fechar contornos; desligue se atrapalhar.
- **Delete** (`X`): Vertices, Edges, Faces, Only Edges & Faces, Only Faces. Apagar **Faces** remove também vértices e arestas órfãos; **Only Faces** os deixa (usado para "abrir" um vão sem perder o contorno).
- **Dissolve** (`Ctrl-X`): apaga o elemento **e mantém a superfície fechada**, juntando as faces vizinhas (o resultado costuma ser um polígono de mais de quatro lados, um **n-gon**). Serve para remover linhas de referência que você não precisa mais.

## Fill (`F`), Bridge e Grid Fill: fechar buracos

- **`F`** (New Edge/Face from Vertices): com dois vértices cria uma aresta; com três ou mais, uma face ou n-gon; com um vértice ou aresta na borda de um buraco, uma face com as arestas vizinhas (Manual, Make Face/Edge). É como se fecha o topo de uma parede ou o vão que sobrou.
- **Bridge Edge Loops** (`Edge > Bridge Edge Loops`): liga dois anéis de arestas com faces. Serve para "vazar" uma parede: dois contornos de vão (um de cada lado da parede) são unidos e formam a espessura do batente.
- **Grid Fill** e **Face Fill**: preenchimento de buracos maiores.

## Subdivide, Duplicate, Separate, Join

- **Subdivide** (`Edge > Subdivide`, ou clique direito): divide arestas/faces selecionadas. Com o campo `Number of Cuts`, uma aresta cortada ao meio. Na aula 8, é como o vértice da cumeeira aparece no meio da empena.
- **Duplicate** (`Shift-D`): copia a seleção; botão direito ou `Esc` cancela o movimento **mas mantém a cópia no mesmo lugar** e selecionada (Manual, Duplicate). Assim se cria um vértice solto para iniciar outra linha de parede.
- **Separate** (`P`): transforma a seleção em objeto novo (`Selection`, `By Material`, `By Loose Parts`).
- **Join** (`Ctrl-J`, em Object Mode): funde vários objetos em um, no objeto ativo. Modificadores, restrições e parentescos **não** são transferidos (Manual, Join).

## N-gons, triângulos e faces planas

Faces com mais de quatro lados (n-gons) e triângulos são aceitáveis em arquitetura **quando planas**: um piso de doze vértices é uma face só e não dá problema. Cuidado com dois casos (módulo 7, aula 9): faces **não planares** (vértices fora do plano) sombreiam e recortam mal; e n-gons complexos podem dar resultados estranhos em modificadores como Bevel ou em recortes booleanos. Se for preciso, `Mesh > Clean Up > Split Non-Planar Faces` e `Make Planar Faces` ajudam (Manual, Clean Up).

## Fluxo típico de uma parede a partir de um ponto

Reúne o que foi visto e é o método da aula 5:

1. Um vértice na posição inicial (digitada em `N`).
2. `E`, eixo, comprimento, `Enter`, repetido para cada trecho da planta.
3. Selecionar tudo (`A`), `E Z altura Enter`: as fitas verticais formam as paredes.
4. `M > By Distance` para eliminar duplicatas.
5. O modificador **Solidify** dá a espessura (aula 4).
6. Booleanas (ou loop cuts) abrem os vãos.

## Resumo

- Ferramentas de Edit Mode: **selecionar** (`1/2/3`, `Alt-clique` em loop, `L`), **criar** (`E`, `F`, `I`), **dividir** (`Ctrl-R`, `K`, Subdivide), **fundir e limpar** (`M`, `X`, `Ctrl-X`).
- **Extrusão** transforma vértices em arestas, arestas em faces, faces em volumes; com `E`, eixo, número e `Enter` obtém-se valor exato.
- Cancelar uma extrusão **não remove** a geometria nova: cuidado com faces duplicadas; **Merge by Distance** limpa.
- **Inset** cria bordas; **Loop Cut** cria linhas de referência; **Bevel** chanfra (precisa de escala aplicada); **Knife** corta livremente.
- Dissolve mantém a superfície; Delete abre buracos; `F` fecha; `Shift-D` + botão direito cria cópia parada.

## Para aprofundar

Vídeos não assistidos; título e canal confirmados.

- [ ] [MODELLING For Absolute Beginners: Blender Tutorial](https://www.youtube.com/watch?v=ICBP-7x7Chc) (Surfaced Studio, inglês): tem capítulos separados para modo de edição, extrusão, inset, loop cut, bevel, quads x n-gons e faca. É de 2017: a interface é antiga (2.7x/2.8), mas as ferramentas e os conceitos são os mesmos.
- [ ] [ABSOLUTE Beginner Basics.. Blender For Noobs 2025](https://www.youtube.com/watch?v=peSv5IT5Ve4) (RoBuilder, inglês): de 2025, cobre modos, extrusão, escala, loop cut e bevel de modo direto.
- [ ] [Minicurso FoG - Blender Básico](https://www.youtube.com/watch?v=0htpEhPGJ4o) (Fellowship of the Game, português): em português; pela transcrição da busca, trata de extrusão, inset, loop cut e faca, entre outras ferramentas. Versão do Blender não confirmada.
- [ ] [Blender Tip #12: Extrude the Right Way (Edges, Faces & Vertices)](https://www.youtube.com/watch?v=hKfbDhdxjL4) (Saadi Sherazi, inglês): dica curta, de 2026, sobre os três tipos de extrusão.
- [ ] [Curso de Blender Gratuito e Completo, Blender 5.1 (4 horas)](https://www.youtube.com/watch?v=4KAxWqMiKpQ) (Allan Brito, português): capítulos "Modo Objeto e Modo Edição", "Extrude e modelagem básica" e "Duplicação de objetos" (pela descrição do vídeo).
- [ ] [Manual do Blender 5.2 LTS: Extrude Faces](https://docs.blender.org/manual/en/latest/modeling/meshes/editing/face/extrude_faces.html), [Inset Faces](https://docs.blender.org/manual/en/latest/modeling/meshes/editing/face/inset_faces.html), [Loop Cut and Slide](https://docs.blender.org/manual/en/latest/modeling/meshes/editing/edge/loopcut_slide.html), [Bevel](https://docs.blender.org/manual/en/latest/modeling/meshes/editing/edge/bevel.html), [Knife](https://docs.blender.org/manual/en/latest/modeling/meshes/editing/mesh/knife_topology_tool.html) e [Merge](https://docs.blender.org/manual/en/latest/modeling/meshes/editing/mesh/merge.html) (Blender Foundation): a fonte de cada seção desta aula.

[Próxima aula: Modificadores para arquitetura](./04%20-%20Modificadores%20para%20Arquitetura.md)
