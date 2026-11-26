[Voltar ao módulo](./README.md)

# Aula 6: Alternativas abertas, FreeCAD BIM e Bonsai

*Pergunta que esta aula responde: como fazer BIM de verdade sem pagar e sem prazo, como funcionam o FreeCAD (bancada BIM) e o Bonsai, e quais são os limites de cada um?*

## Por que existem dois caminhos abertos

Como a aula 3 mostrou, Revit e Archicad não têm licença de hobby. As duas alternativas livres nasceram de pontos de partida diferentes, e isso explica quase tudo sobre como usá-las:

- **FreeCAD** é um modelador paramétrico geral (peças mecânicas, CAD). A parte de arquitetura foi crescendo como uma "bancada" (*workbench*) dentro dele. Você modela com **objetos e propriedades em uma árvore**, como em CAD mecânico.
- **Bonsai** (antigo BlenderBIM) é um *add-on* do **Blender** (módulo 12) que **edita diretamente um arquivo IFC**, apoiado no projeto **IfcOpenShell**. Você modela com a **interface do Blender** e o modelo já nasce e vive como IFC.

A documentação do Bonsai o define como plataforma de autoria IFC nativa, não "apenas uma ferramenta de modelagem 3D".

**Ambos têm em comum**: gratuidade sem prazo, código aberto, material de estudo majoritariamente em inglês e uma curva de aprendizado mais íngreme que Revit e Archicad. Nenhum dos dois serve para "só clicar e sair desenhando": estude pela ordem.

## FreeCAD BIM

### O que é, hoje

Segundo a documentação oficial do FreeCAD, na versão **1.0** as antigas bancadas **BIM**, **Native-IFC** e **Arch** foram fundidas em uma **bancada BIM** integrada. A versão **1.1** (24 de março de 2026, segundo o blog do projeto) trouxe, entre outras mudanças na parte BIM: uma ferramenta de **Drawing View** para criar vistas mais rápido, um painel **BIM Views** com visão geral da estrutura espacial e das folhas, novo suporte a **objetos 2D dentro de IFC** (linhas, textos, cotas), suporte básico a **IfcType** e atualização para IfcOpenShell 0.8.4. Portanto, tutoriais anteriores a 2025 usam nomes antigos (a ferramenta **Floor** hoje aparece como **Level**); confira sempre a versão do vídeo contra a sua.

A bancada BIM oferece objetos paramétricos (paredes, vigas, telhados, janelas, escadas, tubos, mobiliário), integra ferramentas de Draft (desenho 2D) e Part, e gera desenhos 2D em conjunto com a bancada **TechDraw**. Ela trabalha com **IFC nativo**: o conteúdo IFC é mostrado diretamente no FreeCAD e qualquer alteração afeta o IFC; você pode ignorar o IFC e só exportar no final.

### Como o FreeCAD pensa

Tudo é **um objeto na árvore** (*tree view*), com **propriedades** (painel de dados). A hierarquia de projeto é a do IFC: **Site** (terreno), **Building** (edifício), **Level** (pavimento; a propriedade Ifc Type do nível é "Building Storey"), e os objetos dentro. O **Level** funciona como contêiner com uma **altura** que as paredes e estruturas filhas podem usar; um objeto arrastado para o nível herda essa organização.

### Fluxo básico (baseado no manual oficial da bancada BIM)

O manual do FreeCAD ensina a modelar uma pequena edificação. Resumo do fluxo, com a mesma lógica das aulas 4 e 5:

1. **Documento novo, bancada BIM.** Configure o espaçamento da grade de encaixe (*snapping*) em Editar > Preferências > Draft > Grid and Snapping (o manual usa 1000 mm para uma grade de 1 metro) e habilite o encaixe na grade.
2. **Linhas-base.** Desenhe quatro linhas com a ferramenta Line (no manual, no mesmo sentido, horário, para que as paredes tenham lados esquerdo e direito consistentes).
3. **Paredes a partir das linhas.** Selecione as linhas e use a ferramenta **Wall**. Propriedades essenciais (documentação oficial): **Width** (espessura), **Height** (se zero, herda do nível-pai), **Align** (Esquerda, Direita ou Centro, em relação à linha-base), **Offset**. Para trabalhar **eixo a eixo**, use `Align` = Centro.
4. **Unir paredes.** Selecione as paredes com a hospedeira por último e use **Add**: elas viram um só objeto, ainda acessível na árvore. Toda parte "Additions" e "Subtractions" é gerida dando duplo clique no objeto.
5. **Portas e janelas** com a ferramenta **Window**. Uma **porta é um caso de janela**. Escolha uma **predefinição** (*preset*): no manual aparecem "Simple door", "Glass door" e "Open 2-pane"; defina largura e altura. Selecione a parede antes: assim a janela fica hospedada nela, fura o vão pelas propriedades **Hole Depth** e **Hole Wire**, e o manual ajusta a posição pela propriedade **Placement** do esboço-base. As janelas são sempre construídas sobre esboços.
6. **Laje** com a ferramenta **Slab**, a partir de um retângulo; espessura pela propriedade de altura, sentido da extrusão pela normal. O manual recomenda ajustar a propriedade **Ifc Type** do objeto para `Slab`, para a exportação IFC sair correta.
7. **Telhado** com a ferramenta **Roof**, a partir de um **contorno fechado**. Cada aresta ganha **Angle** (0 a 90 graus), **Run** (projeção horizontal), **Thickness** (espessura) e **Overhang** (beiral); zerar o valor do ângulo ou do run, com referência relativa, faz o programa calcular o valor faltante.
8. **Organizar.** Selecione paredes, laje e telhado, crie um **Level**, selecione-o e crie um **Building** (o manual usa o nome Floor para o nível). Se não houver um Site, o exportador IFC cria um padrão.
9. **Ambientes e tabelas.** A ferramenta **Space** cria volumes; a área é calculada por interseção de um plano horizontal com o volume, e fica na propriedade **Area**. A ferramenta **Schedule** monta uma planilha a partir de consultas (contagens e propriedades) e a exporta em CSV.
10. **Documentação.** **Section Plane** (planos de corte) e **TechDraw** (páginas, vistas, cotas, hachuras, PDF) ou, na 1.1, o novo **Drawing View**.

### Limites do FreeCAD BIM

- **Documentação e menus em inglês**, mudando entre versões.
- Interface e modelo mais **manuais**: muitas coisas exigem esboços e propriedades numéricas em vez de "clicar e arrastar".
- Vistas e pranchas passam pelo **TechDraw** (a plataforma de desenho técnico do FreeCAD), com o próprio aprendizado.
- O suporte a objetos 2D dentro do IFC é recente (1.1).
- Bom para quem já vem de CAD mecânico ou não se incomoda com esboços.

## Bonsai

### O que é

O Bonsai é gratuito, de código aberto e roda como *add-on* do Blender (Windows, Mac e Linux). A página oficial mostra a versão **0.8.5** e pede doações; o número abaixo de 1.0 mostra que é um projeto em amadurecimento.

**Instalação** (documentação oficial): baixe o Blender; abra **Edit > Preferences**; na aba **Get Extensions** habilite **Allow Online Access**; procure "Bonsai" e clique em **Install**. Depois disso, o menu File ganha "Open IFC Project". A documentação não indica, nesse trecho, a versão mínima do Blender: use a versão atual e confira a compatibilidade na página do Bonsai.

### Como o Bonsai pensa

**O arquivo IFC é o projeto.** O Blender guarda a cena; o Bonsai guarda o IFC. Segundo a documentação, **Ctrl+S** (ou File > Save IFC Project) salva **só o .ifc**; o File > Save do Blender salva o `.blend` **separadamente**. Para abrir dados BIM, use sempre **File > Open IFC Project**. Trate o `.ifc` como a fonte autoritativa.

**Todo objeto precisa de uma classe IFC.** Um objeto do Blender só faz parte do projeto BIM se você lhe atribuir uma **classe IFC** (`IfcWall`, `IfcColumn`, etc.), e todo objeto IFC pertence à **árvore espacial**: `IfcProject > IfcSite > IfcBuilding > IfcBuildingStorey`, que você vê no Outliner. Ao criar um projeto novo, essa árvore já vem pronta (com um pavimento padrão chamado "My Storey").

**Barra de ferramentas.** A documentação lista as ferramentas: Explore, **Create Wall**, **Create Slab**, **Create Door**, **Create Window**, Create Column, Create Beam, Create Duct, Create Element, ferramentas de **Annotation**, **Spatial**, **Structural** e **Covering**. Elas se acessam pela barra ou por **Shift + Espaço**.

### Fluxo básico

1. **Projeto novo:** File > New IFC Project e uma opção como "New Metric (m) Project"; o assistente também permite escolher o esquema (IFC2X3, IFC4 ou IFC4X3) e o modelo em branco ou demonstrativo. Salve como `.ifc`.
2. **Paredes:** ferramenta **Create Wall**. Você nomeia um **tipo** (por exemplo `WALL100`), clica em "+ Add IfcWallType", e cria a parede com **Shift+A** no ponto do **cursor 3D** (posicionado com Shift + clique esquerdo, com encaixe ligado). Comprimento e altura são ajustados nos parâmetros da barra superior. Emenda: **mitre** (Shift+Y), **butt** (Shift+T), **extend** (Shift+E), **merge** (Shift+M), **split** (Shift+K); alinhamento: à face externa (Shift+X), à linha de centro (Shift+C) ou à face interna (Shift+V). Para eixo a eixo, use a **linha de centro**.
3. **Portas e janelas:** selecione a **parede primeiro** (assim o vão é criado automaticamente), posicione o cursor 3D, use **Create Door** ou **Create Window**, crie o tipo com "+ Add IfcDoorType" ou "+ Add IfcWindowType" e adicione com **Shift+A**. Largura e altura vêm da barra superior; a configuração (porta com um giro à direita, janela de dois painéis) fica em **Parametric Geometry**, no campo **Operation Type**. Depois de mover uma esquadria, **regenere a parede** (Shift+G). A documentação avisa: mover a porta com as ferramentas do Blender **não** altera o modelo IFC por si só, e a sincronia entre cena e IFC é um ponto de atenção do projeto.
4. **Laje e cobertura:** **Create Slab** (piso ou telhado; espessura e elevação ajustáveis). A documentação específica de lajes e telhados ainda está **incompleta**.
5. **Espaços:** ferramenta **Create Space**, citada no tutorial oficial do apartamento (Projeto 1), que define cômodos, nomes e áreas.
6. **Quantidades:** a documentação de paredes menciona o botão **Calculate All Quantities** (ou tecla Q) para calcular quantidades.
7. **Desenhos:** a documentação de desenhos avisa que o módulo de desenho está "em estágio inicial de desenvolvimento" e pede que o **Inkscape** esteja instalado, porque o desenho é baseado em SVG; a lista de tópicos (planta, elevações e cortes, cotas, etiquetas, hachuras) ainda está sem texto. Vídeos da comunidade mostram o fluxo (por exemplo, adicionar uma seção como novo desenho, ativar a vista, editar a câmera e imprimir), mas vale confirmar na versão que você usar.

### O caminho oficial de estudo

A documentação organiza a trilha: *Introduction to BIM*, *Installation*, *Exploring an IFC model*, *Creating an IFC model* (tutoriais de poucos minutos cada) e depois **seis projetos**: 0 (um cômodo), 1 (um apartamento), 2 (um bangalô), 3 (casa unifamiliar de vários pavimentos), 4 (casas geminadas) e 5 (bloco de apartamentos). O **Projeto 0** é o ideal para começar: parede externa de 0,20 m e divisória de 0,10 m, altura de 2,80 m, portas de 0,90 x 2,10 m, janelas com peitoril, laje, conferência com a ferramenta de medição, planta baixa e PDF. Os Projetos 2 e 3 são casas, com escopo enorme (fundações, instalações, custos): faça só depois.

### Limites do Bonsai

- **Documentação incompleta** exatamente em pontos que importam (lajes e telhados, cômodos, classificação e tipos, desenhos e tabelas): as páginas dizem "trabalho em andamento". Para esses pontos, dependa de vídeos e da comunidade (OSArch).
- **Material em inglês.**
- **Interface do Blender**: quem nunca usou o Blender precisa aprender navegação, cursor 3D e atalhos (o módulo 12 ajuda).
- **Projeto em amadurecimento** (0.8.5), mantido por voluntários.
- Para desenhos, depende de outra ferramenta (Inkscape).
- **Ponto forte:** o IFC é nativo. Se o objetivo é entender IFC (aula 7), é a melhor escola.

## Qual usar

| Se você... | Prefira |
|---|---|
| Já usa (ou quer aprender) Blender | **Bonsai** |
| Prefere árvore de objetos e propriedades, vem de CAD | **FreeCAD BIM** |
| Quer aprender IFC a fundo | **Bonsai** |
| Quer o caminho com documentação oficial mais completa por ferramenta | **FreeCAD** (mas confira versão) |
| Vai seguir o exercício da aula 8 | **Bonsai** (motivo na aula 8) |

## Resumo

- **FreeCAD** (1.1) tem uma **bancada BIM** integrada desde a 1.0; você modela objetos em uma **árvore** (Site, Building, Level, elementos) com **propriedades**, e gera vistas e folhas via **TechDraw**.
- **Bonsai** (0.8.5) é um *add-on* do **Blender** que edita **IFC nativo**: o `.ifc` é o projeto, todo objeto tem uma **classe IFC** e uma posição na **árvore espacial**.
- Nos dois, o fluxo é o mesmo das aulas 4 e 5: nível, paredes (com alinhamento), esquadrias hospedadas, laje, telhado, espaços, quantidades, desenhos.
- Limites: **documentação incompleta ou em inglês**, curva de aprendizado, desenhos ainda em amadurecimento e menus que mudam por versão.
- Os dois são gratuitos e sem prazo, o que é o critério decisivo para um hobby.

## Para aprofundar

- [ ] [Bonsai full demo! Learn how to model this house in native IFC](https://www.youtube.com/watch?v=pQnJ-5b3_Kg) (Open Source for Architects): ver o resultado antes de fazer; pelos trechos de transcrição, é uma demonstração visual acompanhada de música, sem narração.
- [ ] [Your first BIM drawing in 20 mins using Bonsai | Blender BIM and IFC](https://www.youtube.com/watch?v=fxpIg-su-00) (Prof Rino and Caroline the boss): primeiro desenho BIM no Bonsai, pelo título.
- [ ] [BlenderBIM (Bonsai) Project Setup: IFC Project, Levels, Grids, Views, and Essential Blender Tools](https://www.youtube.com/watch?v=Y0NUwQNqkKI) (DynamiteRevit): configuração do projeto, níveis, grades e vistas, pelo título.
- [ ] [Bonsai Tutorial - Beginner Project - Part 4 - 2D detail](https://www.youtube.com/watch?v=QTviOpqz1rw) (Ifc Architect): parte 4 de uma série para iniciantes (usa a versão 0.8.1); mostra detalhe 2D, materiais e hachuras, cotas e anotações.
- [ ] [FreeCAD BIM - Architecture - Complete Beginner Tutorial](https://www.youtube.com/watch?v=IV-nv9ygZPM) (Deltahedra): tutorial completo de arquitetura no FreeCAD, com paredes, aberturas, laje, telhado por contorno e escadas.
- [ ] [FreeCAD Daily #24: Build a Complete House Architectural BIM Model from Scratch](https://www.youtube.com/watch?v=gT8a7vXfaUY) (Eklavya Self Learning Tutorials): casa completa no FreeCAD, pelo título.
- [ ] [FreeCAD BIM Beginner Tutorial | Create a Garage Building](https://www.youtube.com/watch?v=WZHyUBfdgJA) (FCB Lounge): tutorial de iniciante, pelo título.
- [ ] [FreeCAD BIM: Create Site Plan from 3D Model Using Tech Draw Workbench](https://www.youtube.com/watch?v=erN5h4HxGZ0) (FCB Lounge): como o TechDraw gera folha, hachuras, cotas e PDF a partir do modelo.
- [ ] [FreeCAD BIM Beginner Tutorials (playlist)](https://www.youtube.com/playlist?list=PL3wRqQUPtE16yw_c1TnRYJmz37y2ZRTLm) (FCB Lounge): série de iniciante.
- [ ] [Bonsai: Quickstart e tutoriais](https://docs.bonsaibim.org/) (documentação oficial, inglês): trilha de Introduction, Installation, Exploring, Creating e Projects 0 a 5.
- [ ] [Bonsai Tutorial - Beginner Project - Part 1 - Modelling (2025)](https://community.osarch.org/discussion/2828/bonsai-tutorial-beginner-project-part-1-modelling-2025) (OSArch, comunidade): discussão do autor Ifc Architect sobre a primeira parte da série de iniciante, em partes de cerca de 15 minutos.
- [ ] [Manual do FreeCAD: BIM modeling](https://reqrefusion.github.io/FreeCAD-Documentation-html/wiki/Manual;BIM_modeling.html) (espelho HTML da documentação do FreeCAD, inglês): o exercício de modelar uma pequena edificação na bancada BIM 1.0.

[Próxima aula: IFC, a ponte entre programas](./07%20-%20IFC%20a%20Ponte%20Entre%20Programas.md)
