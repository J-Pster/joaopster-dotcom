[Voltar ao módulo](./README.md)

# Aula 7: Formatos de arquivo e o que se perde ao converter

*Pergunta que esta aula responde: por que um modelo "quebra" ao passar de um programa para outro, e como escolher o formato certo para cada troca?*

## Por que isso existe

Cada programa guarda o modelo do jeito que lhe convém: o SketchUp guarda faces e componentes, o Revit guarda objetos com parâmetros, o Blender guarda malhas e cenas. Para trocar entre programas é preciso um formato comum, e **um formato só consegue carregar o que a sua estrutura prevê**. Se o formato não tem lugar para "hierarquia de grupos" ou "parâmetro de largura", essa informação some na viagem.

Regra para memorizar: **converter é sempre projetar a riqueza de um modelo sobre um formato mais pobre (ou diferente).** Você ganha compatibilidade e perde algo. A pergunta é sempre: o que preciso que sobreviva?

## Três tipos de formato

1. **Nativo:** o formato do próprio programa. Guarda tudo (histórico, parâmetros, configurações). Só abre bem no programa de origem (ou em versões próximas).
2. **Intercâmbio 2D/CAD:** DWG e DXF, para desenhos e geometria técnica.
3. **Intercâmbio 3D:** OBJ, FBX, glTF, STL, IFC etc.

## Os formatos principais

| Formato | Origem/quem usa | Guarda | Não guarda ou perde |
|---|---|---|---|
| **DWG** | Nativo do AutoCAD (Autodesk); é o formato mais usado em projetos de arquitetura e engenharia | Desenho 2D e 3D: linhas, layers, blocos, textos, cotas | Não tem dado BIM; cotas e textos podem não passar bem para modeladores 3D |
| **DXF** | Formato de troca da Autodesk para CAD, aberto e lido por muitos programas | Geometria de CAD, layers | Menos completo que o DWG em recursos avançados |
| **SKP** | Nativo do SketchUp | Faces, grupos, componentes, tags, materiais, cenas | Só abre bem no SketchUp |
| **OBJ** | Formato aberto de malha, muito antigo e compatível | Geometria (malha), coordenadas de textura, materiais em arquivo auxiliar (.mtl) | Sem unidade definida; sem dados BIM; hierarquia limitada |
| **FBX** | Autodesk, muito usado em animação, jogos e cinema | Malhas, materiais, câmeras, luzes, animação | Proprietário; sem semântica de construção |
| **glTF / GLB** | Formato aberto para web, AR e visualização em tempo real ("o JPEG do 3D") | Malhas, materiais físicos (PBR), animação; GLB embute tudo num arquivo | Sem dados BIM; convenção Y para cima e metros |
| **STL** | Impressão 3D | Só triângulos (superfície) | Sem cor, sem textura, sem unidade explícita |
| **IFC** | Aberto, padrão ISO 16739, mantido pela buildingSMART | Geometria mais semântica: tipos de objeto, propriedades, relações, níveis | Não recria a lógica paramétrica interna do programa de origem (veja abaixo) |
| **RVT** | Nativo do Revit | Modelo BIM completo, famílias, vistas | Só abre no Revit (e ferramentas especiais) |
| **PLN** | Nativo do Archicad (Graphisoft) | Modelo BIM completo | Só abre no Archicad |

Observações sobre pontos que costumam surpreender:

- **OBJ e STL não gravam unidade.** Só números. Ao importar, escolha a unidade correta (aula 1) ou meça algo conhecido depois.
- **DWG/STL não levam cor nem textura** de forma confiável (segundo resumo de interoperabilidade do SketchUp em busca): STL guarda só geometria; DWG é de desenho técnico.
- **glTF** é definido em metros e com Y para cima (especificação do formato); o SketchUp (a partir da versão 2025, segundo resumo de busca, não confirmado na ajuda oficial) importa e exporta glTF/GLB com materiais PBR.
- **FBX, OBJ e glTF** carregam materiais e coordenadas de textura; funcionam bem para levar o modelo do SketchUp para renderizadores ou o Blender.
- O SketchUp Pro **importa DWG, DXF, IFC, 3DS, STL, entre outros** e **exporta** OBJ, FBX, DAE, STL (segundo resumo de busca; confira na ajuda oficial da sua versão, pois muda com o tempo e com a edição do programa).

## O que se perde ao converter

### 1. Do BIM para malha (RVT ou PLN para OBJ/FBX/glTF)

Você mantém a forma e perde: tipo, camadas de material, parâmetros, níveis, relações, quantitativos. Uma parede vira "um monte de faces". Serve para visualização, não para continuar o projeto.

### 2. Do modelo para DWG/DXF

Vira desenho: contornos e linhas. Dependendo da exportação, cada vista é um desenho separado e sem ligação com o modelo.

### 3. Do DWG para o modelador 3D

A ajuda oficial de importação de CAD do SketchUp lista o que é convertido: arcs, círculos, faces, 3D faces, linhas, sólidos baseados em polilinha, blocos aninhados, regiões, pontos, elipses, splines, imagens raster e hachuras sólidas. O que **não** é suportado: objetos proprietários ADT/ARX, **cotas, textos e XREFs**. Além disso, avisa que arquivos acima de 15 MB podem causar lentidão, que **linhas podem não formar faces** (as linhas do desenho precisam se fechar exatamente), que geometria longe da origem degrada o desempenho e que formatos antigos podem precisar ser convertidos. Layers podem virar grupos (opção Import Layers as Groups). Na prática: a planta importada serve de **referência para traçar**, não de modelo pronto (aula 8).

### 4. Do BIM para IFC e de volta

IFC não é uma cópia fiel: é uma **tradução** para um esquema comum. Ele preserva identidade, tipo, atributos e relações que o esquema prevê, mas o programa de origem tem recursos internos (regras paramétricas, famílias, restrições) que o IFC não carrega. Segundo resumos de busca da Graphisoft, uma exportação do Revit para IFC não transfere o modelo sem perda de dados, o que é uma limitação do próprio formato; e por isso existem *add-ins* de troca entre Revit e Archicad que buscam reduzir a perda. Consequências:

- Um IFC recebido serve para **consulta, coordenação e reaproveitamento de geometria e dados**, não como arquivo de origem para edição paramétrica idêntica.
- **Exportar de volta** ao programa nativo produz objetos "genéricos" com propriedades, menos flexíveis que os originais.
- No SketchUp, a exportação IFC é parcial (nem todas as classes e propriedades de quantidade são mapeadas, segundo resumo de busca); vale classificar os objetos antes de exportar (a ajuda oficial cita o recurso de Classificação, compatível com IFC).

### 5. De curva para faceta

Curvas exatas (NURBS, arcos de família BIM) viram polígonos na exportação para malha (aula 3). A precisão visual depende da resolução configurada na exportação.

### 6. Hierarquia, tags e nomes

Formatos como OBJ não têm o conceito de componente ou tag do SketchUp. Instâncias podem virar cópias independentes (aumenta o peso) e a estrutura pode ser achatada.

### 7. Unidade e eixos

Já vimos: unidades ausentes (OBJ, STL) e eixo vertical diferente (Y versus Z).

## Guia prático: qual formato para cada situação

| Situação | Formato sugerido | Cuidado |
|---|---|---|
| Receber uma planta de arquiteto/engenheiro | DWG (ou DXF) | Confirmar unidade; limpar antes |
| Guardar o projeto e continuar editando | **Nativo** do programa (.skp, .rvt, .pln, .blend) | Faça cópia de segurança |
| Levar do SketchUp para um render externo ou Blender | OBJ, FBX, glTF/GLB, DAE | Conferir escala e faces invertidas; materiais |
| Mandar para impressão 3D | STL | Objeto sólido (aula 2) |
| Trocar modelo BIM entre programas diferentes | IFC | Esperar perdas; conferir tipos e níveis |
| Publicar o modelo na web ou AR | glTF/GLB | Baixar poligonagem e texturas |

Regras gerais:

1. **Mantenha sempre o nativo.** Formatos de troca são cópias de trabalho, não arquivos de origem.
2. **Teste com um objeto pequeno** antes de exportar o projeto inteiro: unidade certa? faces orientadas? materiais sobrevivem?
3. **Documente** versão do programa, unidade e eixos usados no nome do arquivo ou num LEIA-ME.
4. **Evite ida e volta repetida**: cada conversão degrada um pouco.
5. Se precisar dos dados BIM em outro programa, prefira IFC; se precisar só da forma, prefira OBJ/FBX/glTF.

## Resumo

- Cada formato só carrega o que sua estrutura prevê; converter é projetar um modelo rico num formato diferente e mais pobre.
- DWG e DXF são desenho CAD (sem dados BIM); SKP, RVT, PLN e .blend são nativos; OBJ, FBX e glTF levam malha e material; STL só triângulos; IFC leva geometria e dados BIM.
- OBJ e STL não têm unidade; glTF usa metros e Y para cima; ao importar, confirme escala e orientação medindo algo conhecido.
- Do BIM para malha perde-se tudo o que era dado; do BIM para IFC perde-se principalmente a lógica paramétrica interna; de CAD para modelador 3D não passam textos, cotas e XREFs, e linhas soltas podem não formar faces.
- Guarde sempre o nativo, teste com objeto pequeno e evite ida e volta.

## Para aprofundar

- [ ] [What is IFC (Industry Foundation Classes)?](https://www.youtube.com/watch?v=9YgXXbdohOQ) (BIMconnect, inglês): introdução ao IFC (título e canal confirmados).
- [ ] [IFC Schema 101: The Foundation of OpenBIM Explained Fast Using BonsaiBIM](https://www.youtube.com/watch?v=HszpRAcLWGU) (BIMvoice, inglês): esquema IFC explicado com Bonsai.
- [ ] [What is IFC and Cobie in BIM and why its used?](https://www.youtube.com/watch?v=Ti4J6K5TKQg) (Archi Vlogs, inglês): IFC e COBie.
- [ ] [Como importar um dwg para o Sketchup e ajustar sua escala](https://www.youtube.com/watch?v=AXYriIka9kY) (BaldiCAD): unidade e escala ao importar DWG.
- [ ] [Aula 04 - Importação de arquivo DWG, criação de paredes e aberturas | SketchUp 2018](https://www.youtube.com/watch?v=lH2ycNOJnQg) (TIME AD CURSOS): importação de DWG e uso como base.
- [ ] [Importing and Exporting CAD Files](https://help.sketchup.com/en/sketchup/importing-and-exporting-cad-files) (Ajuda do SketchUp, inglês, conteúdo confirmado por leitura): o que é convertido e o que não é.
- [ ] [Industry Foundation Classes (IFC)](https://technical.buildingsmart.org/standards/ifc/) (buildingSMART, inglês; a página retornou acesso negado na verificação, foi vista em resultados de busca).
- [ ] [openBIM](https://www.buildingsmart.org/about/openbim/) (buildingSMART, inglês; também retornou acesso negado, visto em busca).
- [ ] [Diferentes tipos de formatos de arquivo 3D](https://www.adobe.com/br/products/substance3d/discover/3d-files-formats.html) (Adobe, português, visto em busca): visão geral de formatos 3D.

[Próxima aula: Da planta ao modelo](./08%20-%20Da%20Planta%20ao%20Modelo.md)
