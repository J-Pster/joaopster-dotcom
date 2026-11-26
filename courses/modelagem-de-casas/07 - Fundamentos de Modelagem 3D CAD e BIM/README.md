# Módulo 7: Fundamentos de Modelagem 3D, CAD e BIM

Nos módulos 1 a 6 você estudou a casa: como ela funciona, como se desenha (módulo 3), como se constrói (módulos 4 e 5) e em que terreno e sob quais regras ela existe (módulo 6). Este é o primeiro módulo sobre computação gráfica e não assume nenhum software. A pergunta é: **como um computador representa um objeto 3D, e por que isso importa para escolher e usar qualquer programa?** Os conceitos valem para Sweet Home 3D, SketchUp, Revit, Archicad, FreeCAD, Bonsai e Blender. Ele vem agora porque, sem entender coordenadas, faces, hierarquia, o que separa CAD de BIM e o que se perde ao converter arquivos, o módulo 8 (escolher software) e os módulos práticos (9 a 13) viram receita de menu sem entendimento.

Como é o primeiro contato com modelagem, cada aula tem mais vídeos de apoio do que nos módulos teóricos. O texto explica a lógica; os vídeos mostram o gesto. Os vídeos não foram assistidos: título e canal foram confirmados, o conteúdo é descrito pelo que o título indica.

## Aulas

1. [Como o computador representa um objeto 3D](./01%20-%20Como%20o%20Computador%20Representa%20um%20Objeto%203D.md): coordenadas, eixos, origem, unidade e escala real. O que o computador guarda e por que a unidade e a orientação dos eixos decidem se o modelo funciona.
2. [Vértices, arestas e faces](./02%20-%20Vertices%20Arestas%20e%20Faces.md): de que peças é feita a superfície, o que é a normal e por que o lado de fora da face importa.
3. [Malha, sólido, superfície e paramétrico](./03%20-%20Malha%20Solido%20Superficie%20e%20Parametrico.md): as quatro maneiras de guardar uma forma e o que cada uma permite.
4. [Construindo volumes: extrusão, subtração e booleanas](./04%20-%20Construindo%20Volumes%20Extrusao%20e%20Booleanas.md): como se cria um volume e como se abre um vão de janela.
5. [Hierarquia e organização do modelo](./05%20-%20Hierarquia%20e%20Organizacao%20do%20Modelo.md): grupos, componentes, instâncias, tags e nomes.
6. [CAD 2D, modelo 3D e BIM](./06%20-%20CAD%202D%20Modelo%203D%20e%20BIM.md): o que muda quando o modelo carrega dados; LOD, LOI, IFC e openBIM; quando cada abordagem serve.
7. [Formatos de arquivo e o que se perde ao converter](./07%20-%20Formatos%20de%20Arquivo%20e%20Perdas%20na%20Conversao.md): DWG, DXF, SKP, OBJ, FBX, glTF, IFC, RVT, PLN, STL e as perdas de cada conversão.
8. [Da planta ao modelo](./08%20-%20Da%20Planta%20ao%20Modelo.md): como planta, corte e fachada (módulo 3) saem do modelo, o que paredes, pilares e lajes (módulo 4) viram nele, e o fluxo de planta 2D para volumes.
9. [Boas práticas de modelagem](./09%20-%20Boas%20Praticas%20de%20Modelagem.md): limpeza, poucos polígonos, geometria sem duplicatas e modelar como se constrói.

## Checklist de saída do módulo

- [ ] Por que o computador precisa de uma origem, três eixos e uma unidade, e por que um modelo pode chegar deitado ou em tamanho errado ao trocar de programa?
- [ ] Por que uma face tem um "lado de fora", e o que acontece num render, numa booleana ou num sólido quando essa orientação está errada?
- [ ] Qual a diferença entre malha, sólido, NURBS e modelo paramétrico, e qual delas "sabe" que uma parede é uma parede?
- [ ] Por que um vão de janela é pensado como um volume subtraído, e por que esse volume deve atravessar a parede?
- [ ] Quando usar grupo, componente, tag e nome, e por que confundir hierarquia com visibilidade dá problema?
- [ ] O que separa CAD 2D, modelo 3D geométrico e BIM, e o que significam LOD, LOI e IFC?
- [ ] Por que converter entre formatos sempre perde algo, e como decidir qual formato usar em cada troca?
- [ ] Por que num modelo 3D planta, corte e fachada são consequência e não desenho separado, e por que as paredes precisam de espessura real?
- [ ] Quais hábitos mantêm um modelo leve e editável (poucos polígonos, sem duplicatas, componentes, purge, versões)?

Quando estiver confiante, siga para o [Módulo 8: Panorama de Softwares e Como Escolher](../08%20-%20Panorama%20de%20Softwares%20e%20Como%20Escolher/README.md).
