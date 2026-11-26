[Voltar ao módulo](./README.md)

# Aula 2: Vértices, arestas, faces e normais

*Pergunta que esta aula responde: de que peças é feita a superfície de um objeto 3D no computador, e por que o lado "de fora" de cada face importa?*

## Por que isso existe

A aula 1 mostrou que o computador guarda pontos. Mas uma parede não é uma nuvem de pontos: é uma superfície contínua com um lado de dentro e um lado de fora. Precisamos de uma forma de ligar os pontos para descrever superfícies. A solução usada em quase toda a computação gráfica (e em SketchUp, Sweet Home 3D e Blender) é a **malha poligonal** (polygon mesh): uma coleção de vértices, arestas e faces que descreve a superfície de um objeto.

## Os três elementos

- **Vértice (vertex):** um ponto no espaço, guardado como `(x, y, z)`. Pode carregar também outras informações (cor, posição de textura, direção da normal).
- **Aresta (edge):** um segmento de reta ligando dois vértices. É a "linha" que você vê nas bordas do objeto.
- **Face:** uma área plana limitada por arestas. Uma face de três lados é um triângulo; de quatro, um quadrilátero (quad); de mais de quatro, um n-gon.

O manual do Blender define a face como a área entre três (triângulos), quatro (quadriláteros) ou mais (n-gons) vértices, com uma aresta em cada lado.

**Exemplo com o cômodo da aula 1.** Uma caixa (cômodo simples) tem 8 vértices, 12 arestas e 6 faces. Cada face (piso, teto, quatro paredes) é um retângulo. Se um vértice for movido, as três arestas e as três faces que chegam nele acompanham. Essa dependência é a essência da malha: tudo se define a partir dos vértices, e arestas e faces são "amarras" entre eles.

## Por que faces planas (e por que triângulos)

Uma face precisa ser **plana** para ser bem definida. Três pontos sempre definem um plano, então um triângulo é sempre plano. Quatro pontos podem não ser coplanares (um quadrilátero "torcido"), e o que o programa faz nesse caso varia (divide em triângulos, avisa ou aceita). Por isso, internamente, placas de vídeo trabalham quase sempre com triângulos: qualquer superfície pode ser dividida em triângulos, e triângulos são o mínimo que garante planicidade.

Em modeladores para arquitetura (SketchUp, por exemplo) você desenha polígonos planos (retângulos, paredes, empenas) e o programa cuida da triangulação na hora de mostrar. Ao exportar, os triângulos aparecem.

## Superfícies curvas são aproximações

Uma malha só tem faces planas e arestas retas. Um cilindro, uma cúpula ou um arco de janela são **aproximados** por muitos pedacinhos planos. Um círculo é um polígono com muitos lados; quanto mais lados, mais parece curvo e mais faces existem.

Isso tem duas consequências para você:

1. **Precisão visual versus peso.** Mais segmentos deixam a curva suave, mas aumentam o número de faces, o peso do arquivo e o tempo de renderização. Um arco de janela precisa de poucos lados; uma coluna redonda vista de perto, de mais. A aula 9 volta a isso.
2. **Curvas não são "de verdade".** Se você mede o perímetro de um círculo em SketchUp, mede um polígono. Para casa de hobby a diferença é desprezível. Entender isso evita surpresas quando um "círculo" exportado vira um polígono de 24 lados (esse número é o padrão do SketchUp para círculos, ajustável).

## A normal: o lado de fora da face

Uma face é uma superfície com **dois lados**. O computador precisa saber qual é o lado "de fora" (o que reflete luz e deve ser visível) e qual é o lado "de dentro". Isso é dado pela **normal**: um vetor (uma seta) perpendicular à face, apontando para fora.

Duas formas de o computador saber para onde a normal aponta:

- Pela **ordem dos vértices** ao redor da face (a convenção mais comum é que vistos de fora, os vértices aparecem em sentido anti-horário; a regra da mão direita da aula 1 dá a direção da normal). Trocar a ordem inverte a normal.
- Por uma informação guardada explicitamente no vértice ou na face.

Por que a normal importa:

1. **Iluminação e render.** A luz só interage corretamente com o lado que a normal indica. Renderizadores tratam o lado de dentro como "verso". Uma face invertida pode aparecer escura ou até invisível.
2. **Culling de faces traseiras (backface culling).** Muitos motores de tempo real não desenham o verso de uma face para economizar trabalho. Uma face com a normal invertida "some" quando vista de fora. É o efeito de "parede transparente" que iniciantes veem ao exportar para visualizadores.
3. **Operações booleanas e sólidos.** Para saber o que é "dentro" de um volume (aula 4), o programa usa a orientação das faces. Faces invertidas quebram o cálculo.

### Como isso aparece em cada programa

- **SketchUp:** toda face tem uma cor **frontal (branca por padrão)** e uma **traseira (azul-acinzentada)**. A ajuda oficial recomenda orientar as faces de modo que a cor frontal aponte para fora e a traseira para dentro. Com o botão direito na face você tem **Reverse Faces** (inverter uma face) e **Orient Faces** (alinhar as faces vizinhas à orientação da face escolhida). Isso importa muito ao exportar para renderizadores externos, que iluminam só o lado frontal (Enscape, Lumion e V-Ray foram citados em resumos de busca).
- **Blender:** a sobreposição **Face Orientation** pinta em azul o lado de fora e em vermelho o de dentro, segundo resumos de tutoriais; faces vermelhas vistas por fora indicam normais invertidas.
- **BIM (Revit, Archicad):** os objetos (paredes, lajes) já cuidam disso sozinhos. Você raramente vê o problema, exceto ao importar malhas de fora.

Regra prática: **em todo objeto fechado, o lado de fora do objeto deve ser o lado frontal das faces.** Em uma parede, a face voltada para o corredor é frontal, não a que "vira para dentro da parede".

## Malha "fechada": sólida ou vazada?

Uma malha pode ter buracos. Para um volume ser uma **malha fechada (watertight, ou manifold)**, cada aresta deve ser compartilhada por exatamente duas faces, sem buracos nem faces faltando que deixem "vazar" o interior (definição do manual do Blender: uma malha é manifold se tem dentro e fora bem definidos). Casos que quebram isso (non-manifold):

- Uma face faltando (uma parede sem uma das faces, deixando o interior aberto).
- Uma aresta solta que não pertence a nenhuma face.
- Faces internas esquecidas dentro do volume (por exemplo, a face de contato entre duas caixas coladas que deveriam formar um bloco só).
- Três ou mais faces compartilhando uma aresta.

Na prática: no SketchUp, se o grupo ou componente é uma caixa fechada e bem orientada, o painel **Entity Info** mostra **Solid Group** ou **Solid Component**, o que habilita as Solid Tools e a impressão 3D (ajuda oficial, fonte abaixo). Se não mostra "sólido", há um vazamento, uma face invertida ou uma aresta perdida.

Isso não é só perfeccionismo: um modelo vazado dá volume, área e quantitativos incorretos, falha em operações booleanas e pode dar problema em renders (luz "vazando" por frestas invisíveis).

## Método: inspecionar um modelo

1. Ative a visão de faces com cor (ou desative texturas) para ver o lado frontal e o traseiro.
2. Gire em volta do objeto e procure áreas azuis (SketchUp) ou vermelhas (Blender) vistas de fora.
3. Corrija com Reverse/Orient Faces (SketchUp) ou Flip/Recalculate Normals (Blender).
4. Ative as arestas ocultas para procurar faces internas e arestas soltas.
5. Confirme se objetos que devem ser sólidos são reconhecidos como sólidos.

## Resumo

- Uma malha é feita de vértices (pontos), arestas (segmentos entre dois vértices) e faces (áreas planas limitadas por arestas: triângulos, quads, n-gons).
- Curvas em malha são aproximações por muitos lados planos; mais lados dão suavidade e mais peso.
- Cada face tem um lado de fora, definido pela normal; o computador usa isso para luz, para esconder o verso (culling) e para decidir o que é dentro e fora de um volume.
- No SketchUp o lado frontal é branco e o traseiro azul; oriente sempre o frontal para fora. Use Reverse Faces e Orient Faces.
- Uma malha fechada (manifold) tem cada aresta em exatamente duas faces; buracos, arestas soltas e faces internas quebram sólidos, booleanas e quantitativos.

## Para aprofundar

- [ ] [Geometric Theory for 3D Modelling - Vertices, Edges and Faces](https://www.youtube.com/watch?v=KjCudOaZ7P4) (Game Dev Academy, inglês): teoria de vértices, arestas e faces independente de programa.
- [ ] [What are Vertices, Edges and Faces? (3D Objects Tutorial)](https://www.youtube.com/watch?v=ScwIHGLJFXI) (Thilakanathan Studios, inglês): segundo olhar sobre os mesmos conceitos.
- [ ] [Polygon 3D Mesh Explained](https://www.youtube.com/watch?v=IiAuqwAJMvo) (ProAnywhere): pelo título, explica malhas poligonais.
- [ ] [3 - Understanding 3D Objects: Vertex, Edge, Face, Mesh, and Object Explained](https://www.youtube.com/watch?v=UUtg4rZx-Ms) (Yekta Class): pelo título, distingue vértice, aresta, face, malha e objeto.
- [ ] [What Are Normals?](https://www.youtube.com/watch?v=xZs4mmGmEFs) (MrTriPie): pelo título, explica normais (conteúdo não assistido; é em Blender, o conceito vale para qualquer programa).
- [ ] [3D Basics - What are Normals?](https://www.youtube.com/watch?v=hkTjreiookM) (CG Masters): segunda explicação sobre normais.
- [ ] [Orienting Faces](https://help.sketchup.com/en/3d-warehouse/orienting-faces) (Ajuda do SketchUp, inglês): cores frontal e traseira, Reverse Faces e Orient Faces (conteúdo confirmado por leitura).
- [ ] [Mesh Structure](https://docs.blender.org/manual/en/latest/modeling/meshes/structure.html) (Manual do Blender, inglês): faces, normais e o que é uma malha manifold.
- [ ] [Polygon mesh](https://en.wikipedia.org/wiki/Polygon_mesh) (Wikipédia, inglês, conteúdo confirmado por leitura): definição de malha poligonal e tipos de face.

[Próxima aula: Malha, sólido, superfície e paramétrico](./03%20-%20Malha%20Solido%20Superficie%20e%20Parametrico.md)
