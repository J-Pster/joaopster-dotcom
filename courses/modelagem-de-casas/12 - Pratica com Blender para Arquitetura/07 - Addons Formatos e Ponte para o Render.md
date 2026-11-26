[Voltar ao módulo](./README.md)

# Aula 7: Complementos, formatos e ponte para o render

*Pergunta que esta aula responde: que complementos existem para arquitetura no Blender, quais são confiáveis hoje, como trocar arquivos com SketchUp, CAD e BIM sem perder escala e orientação, e o que preparar para o render do módulo 13?*

## Por que essa aula existe

Três limites do Blender puro aparecem numa casa: **não tem elementos de arquitetura prontos** (parede paramétrica, janela, escada); **não fala BIM**; e **lê poucos formatos de CAD**. O ecossistema de complementos cobre parte disso. E, como os módulos 9 e 10 mostraram, você raramente trabalha em um programa só: o módulo 7 (aula 7, [Formatos de arquivo e o que se perde ao converter](../07%20-%20Fundamentos%20de%20Modelagem%203D%20CAD%20e%20BIM/07%20-%20Formatos%20de%20Arquivo%20e%20Perdas%20na%20Conversao.md)) e o módulo 8 (aula 5, [Formatos e interoperabilidade](../08%20-%20Panorama%20de%20Softwares%20e%20Como%20Escolher/05%20-%20Formatos%20e%20Interoperabilidade.md)) já explicaram por que converter perde informação. Aqui é o lado Blender.

## Extensões: como se instala um complemento

Desde o Blender 4.2, complementos ("add-ons") e temas são distribuídos como **extensões**, por uma plataforma oficial gratuita (extensions.blender.org). Instalação (Manual, Get Extensions; Bonsai, documentação de instalação):

1. `Edit > Preferences > Get Extensions`.
2. Se pedir, **Allow Online Access**.
3. Busque o nome e clique em **Install**. Também é possível arrastar o link de instalação do site para o Blender, ou usar **Install from Disk** com um arquivo `.zip`.
4. Ative/desative em `Preferences` (desativar é melhor que remover, se você quer só parar de usar). Atualizações são manuais: **Refresh Remote** e **Update All**.

**Segurança:** um complemento é código que roda no seu computador com acesso a arquivos. Cada extensão da plataforma declara suas **permissões** (arquivos, rede, área de transferência). Instale só de fonte que você reconhece e confira as permissões. Extensões vindas de outros sites não passam pela revisão da plataforma.

**Compatibilidade de versão:** cada extensão declara a **faixa de versões do Blender** que suporta. Depois de atualizar o Blender, um complemento pode parar de funcionar até sair uma versão nova. É o principal risco de depender deles.

## Complementos para arquitetura (verificado em setembro de 2026)

Dados lidos da API pública da plataforma de extensões em setembro de 2026 (versão do complemento, faixa de Blender, licença):

| Complemento | O que faz | Versão / Blender | Licença | Observação |
|---|---|---|---|---|
| **Bonsai** (IfcOpenShell) | Plataforma BIM no Blender, com **IFC nativo** | 0.8.5-post1; Blender **4.2 até abaixo do 5.1** | GPL 3 | **Não suportado no 5.1 e superiores** (5.2 incluído) |
| **Archimesh** (comunidade) | Salas, portas, janelas, colunas, escadas, telhas e outros elementos paramétricos | 1.2.5; Blender 4.2 ou superior | GPL 2 | Era complemento empacotado até o 4.1; a plataforma diz "oferecido como está, com suporte limitado". Avaliações recentes citam problemas no Blender 5 |
| **HiFi Architecture Builder** | "arquitetura de um clique" e preparação para motores de jogo | 4.5.8; Blender 4.2 ou superior | GPL 3 | Não testado por mim |
| **Home Builder 5** | Desenho de ambientes com armários paramétricos | 5.2.4; Blender **5.1 ou superior** | GPL 3 | Um vídeo (aula 5) usa um complemento gratuito chamado Home Builder para escalar plantas e desenhar paredes; não confirmei que seja este mesmo |
| **Import AutoCAD DXF Format (.dxf)** (comunidade) | Importa **DXF** | 0.9.10; Blender 4.2 ou superior | GPL 2 | Avaliação de usuário cita erro com arquivos de mapeamento |
| **Export Autocad DXF Format (.dxf)** (comunidade) | Exporta geometria para DXF R12 | 2.2.4; Blender 4.2 ou superior | GPL 2 | |
| **CAD2Cube DXF Importer** | Importa DXF com camadas, unidades e blocos | 1.5.0; Blender 4.2 ou superior | GPL 3 | Não testado por mim |
| **IFC Mesh Importer** | Lê geometria, materiais e hierarquia de IFC como malha (sem BIM) | 0.1.1; Blender 4.2 ou superior | GPL 3 | Versão inicial |
| **tinyCAD Mesh tools** (comunidade) | Ferramentas de malha no estilo CAD (extend, fillet) | 1.3.3; Blender 4.2 ou superior | GPL 3 | Descrição só pelo nome |

Fora da plataforma oficial, o README anterior deste módulo (pesquisa de 2026) registra: **Archipack** (paredes, portas, janelas, escadas e telhados paramétricos; a versão gratuita 1.2.85 não é compatível com o Blender 4.x e a 2.x é paga, conforme sua [documentação](https://blender-archipack.gitlab.io/)) e **Blosm / Blender-OSM** (importa OpenStreetMap e terreno real; [página](https://prochitecture.gumroad.com/l/blosm)). Não reconfirmei esses dois; verifique versão e preço antes de instalar ou pagar.

**Como escolher.** Complementos paramétricos economizam tempo, mas amarram você à versão e a comportamentos próprios (no Archimesh, por exemplo, segundo um tutorial em vídeo, alguns objetos como escadas, armários e telhados só oferecem as propriedades iniciais, e não podem ser reajustados depois de criados). O método das aulas 5 e 8, com malha, modificadores e números, **funciona em qualquer versão** e ensina o que os complementos escondem. Use complementos depois de entender o método.

## Bonsai: a ponte para BIM

O **Bonsai** (antes chamado BlenderBIM) transforma o Blender em uma plataforma de autoria BIM, com o formato **IFC** como arquivo nativo (o "idioma aberto" do BIM, módulo 7, aula 6). Segundo a página da extensão, "BIM é muito diferente de um modelo 3D comum: a geometria é opcional, e a maior parte dos dados não é geométrica". Em vez de "cubo com espessura", um Bonsai tem "parede", "laje", "janela" com tipos, camadas e relações; você desenha uma parede por um caminho, escolhe seu tipo e ela se atualiza ao alterar o tipo.

- **Instalação:** `Edit > Preferences > Get Extensions`, buscar **Bonsai**, **Install** (documentação do Bonsai 0.8.5).
- **Versão do Blender:** por causa da faixa acima, use o **Blender 4.5 LTS** para o Bonsai, não o 5.2. Verifique de novo a página da extensão ao começar, pois isso deve mudar.
- **Maturidade:** a página oficial de download descreve o Bonsai como "alpha software" (software em fase alfa). Use para aprender e para projetos pessoais, e mantenha cópias de segurança.
- **Documentação e exercício:** o "Project 0: Designing a Room" da documentação oficial cria uma sala de 6 x 3 m com paredes, aberturas, laje, elementos de instalações, mobiliário e uma planta gerada. Boa próxima etapa do que você fez na aula 8.
- **O Bonsai assume o `Shift-A`** enquanto suas ferramentas estão ativas, segundo o vídeo de Allan Brito listado abaixo: o menu Add passa a criar elementos IFC.

O uso real do Bonsai, junto de Revit, Archicad e FreeCAD, está no **módulo 11**. Aqui basta saber que existe, que é gratuito (GPL) e que depende da versão do Blender.

## Formatos que o Blender lê e grava

O Manual 5.2 lista, em `File > Import/Export`, os formatos nativos abaixo. **Não há IFC, DXF, DWG, SKP nem COLLADA nativos** (COLLADA não consta da lista do Manual 5.2; conferi por leitura, não por teste). Para IFC e DXF, use as extensões da tabela.

| Formato | Menu no 5.2 | O que leva | Cuidados |
|---|---|---|---|
| **.blend** | File > Save | tudo (o arquivo nativo) | guarde sempre o original |
| **OBJ** | File > Import/Export > Wavefront (.obj) | geometria, UVs, normais e materiais (`.mtl` à parte) | **sem** câmeras, luzes, empties, parentesco ou transformações (Manual) |
| **FBX** | File > Import > FBX (novo, ou "(Legacy)") e File > Export > FBX (.fbx) | geometria, materiais, hierarquia, animação | a exportação fica a cargo do complemento de FBX |
| **glTF 2.0** | File > Import/Export > glTF 2.0 (.glb, .gltf) | malhas (convertidas em triângulos), materiais PBR (Principled BSDF), texturas, câmeras, luzes pontuais, sol e spot | luzes de área e o mundo não são exportados; `.glb` reúne tudo em um arquivo |
| **STL** | File > Import/Export > STL (.stl) | só geometria | usado em impressão 3D e alguns CAD |
| **USD, Alembic, PLY** | mesmo menu | geometria e cena | pouco usados em casa |

### Escala e orientação: o que checar em cada exportação

O Blender usa **Z para cima e Y para a frente** (Manual). Outros programas divergem, e o formato pode não dizer qual eixo é o de cima. Os padrões abaixo foram lidos no Blender 5.2.2:

| Exportador | Padrões | O que fazer |
|---|---|---|
| **OBJ** | `Forward Axis: -Z`, `Up Axis: Y` (converte para "Y para cima"); `Scale 1,0`; `Apply Modifiers` e `Apply Transform` **ligados** | para um programa que use Z para cima: `Forward Axis: Y`, `Up Axis: Z` (sem conversão) |
| **FBX** | `Forward: -Z`, `Up: Y` (padrão do complemento) | idem: ajuste conforme o destino |
| **glTF** | `+Y Up` **ligado** (convenção do glTF); `Apply Modifiers` na seção de exportação | manter o padrão para web e motores de jogo |
| **STL** | `Forward Y`, `Up Z`; `Apply Modifiers` ligado | padrão serve para CAD que usa Z para cima |

Regras gerais:

- **Teste com uma caixa conhecida:** exporte um cubo de 1 m e importe no destino; meça. Se vier deitado, ajuste `Up`/`Forward`; se vier 100 vezes maior ou menor, ajuste `Scale` (a unidade do arquivo pode ser centímetro ou polegada).
- **Aplique as transformações** (`Ctrl-A`, aula 2), ou use `Apply Transform` no exportador (OBJ, ligado por padrão). Objetos com escala diferente de 1 exportam tortos.
- **Modificadores:** exportadores como OBJ, FBX e glTF têm `Apply Modifiers` (no OBJ vem ligado). Se o formato não os aplica, aplique você (aula 4). **Cortadores** (aula 4) devem ficar **fora** da exportação (use `Selected Objects` ou esconda a coleção).
- **Triangulação:** glTF e alguns exportadores triangulam faces; o n-gon de um piso vira triângulos. Para um programa que precisa de quadriláteros, não é o formato certo.
- **Nomes sem acento** e sem caracteres especiais evitam falhas em outros sistemas.

### Do SketchUp e do Sweet Home 3D para o Blender

O Blender lê **OBJ** e **FBX** (nativos) e **glTF**. O SketchUp exporta esses formatos em planos pagos (módulo 10, aula 8: [ponte para render](../10%20-%20Pratica%20com%20SketchUp/08%20-%20Terreno%20Extensoes%20Exportacao%20e%20Ponte%20para%20Render.md)); o Sweet Home 3D, OBJ (módulo 9, aula 7: [Cotas, exportação, plugins e limites](../09%20-%20Pratica%20com%20Sweet%20Home%203D/07%20-%20Cotas%20Exportacao%20Plugins%20e%20Limites.md)).

Pontos de atenção:

- O artigo de The SketchUp Essentials ("Exporting SketchUp Files TO BLENDER") compara formatos: **OBJ** sai como um objeto só (sem editar peças) e com texturas em arquivos separados; **COLLADA** (`.dae`) preserva os objetos individuais, mas exige "explodir" grupos antes. Como o Manual 5.2 não lista COLLADA entre os formatos nativos, considere **OBJ ou FBX** para o 5.2.
- **Malha vinda de SketchUp costuma trazer** faces triangulares, vértices duplicados e normais invertidas (aula 9). Depois de importar: `Mesh > Clean Up > Merge by Distance`, `Shift-N` (Recalculate Outside) e a checagem de Face Orientation.
- Perdeu-se a **hierarquia semântica**: no Blender chega um monte de malhas; nomeie e coloque em coleções (aula 6).
- Guarde o arquivo original. A troca é de ida (módulo 8, aula 5).

Para plantas em **DXF** vindas de CAD: instale uma das extensões de DXF, importe em vista de topo e confira a escala com uma cota conhecida (aula 5). A confiabilidade das extensões de comunidade varia com o arquivo.

### Para IFC

Sem Bonsai, o Blender não abre IFC. Com **Bonsai** (Blender 4.5), abra o IFC diretamente e edite com semântica. Para só **ler a geometria** como malha, existe o **IFC Mesh Importer**, ainda em versão inicial (0.1.1). O papel do IFC no fluxo BIM está no módulo 11.

## Ponte para o render (módulo 13)

O Blender traz dois motores de render (`Properties > Render > Render Engine`):

- **EEVEE**: motor em **tempo real**, por rasterização; o Manual diz que produz renders finais de qualidade, com limitações. É o motor padrão do 5.2.2 (lido no programa).
- **Cycles**: **path tracer** fisicamente baseado; "sempre dará renders mais precisos fisicamente que o EEVEE", segundo o Manual. Escolhe-se em Render properties; para usar a GPU, ligue os dispositivos em `Preferences > System > Cycles Render Devices`.

A escolha, a luz (sol, céu, HDRI), câmera, materiais e ruído (denoising) são o assunto do **módulo 13**. Para chegar nele com um modelo pronto, prepare agora:

1. **Escala real e unidades corretas** (aula 2), porque materiais e luzes dependem de metros.
2. **Faces voltadas para fora** (aula 9); face invertida escurece ou desaparece no render.
3. **Cortadores fora do render** (aula 6: `Show In > Renders` desligado).
4. **Um objeto por material**, ou faces separadas por ambiente, para atribuir acabamentos (módulo 13).
5. **Geometria limpa**: sem duplicatas, sem faces internas.
6. `F12` renderiza uma imagem (mapa de teclas padrão). Para ver a cena por uma câmera, `Add > Camera` e posicione-a; o módulo 13, aula 3, detalha enquadramento.

## Resumo

- Complementos são instalados por `Edit > Preferences > Get Extensions`; cada um declara **faixa de versões** e permissões. Depender de um complemento é depender da sua compatibilidade.
- Em setembro de 2026: **Bonsai** (IFC/BIM) suporta Blender 4.2 até abaixo do 5.1 (use o 4.5 LTS) e é software em fase alfa; **Archimesh** tem "suporte limitado" e relatos de problema no Blender 5; extensões de **DXF** existem, sem serem nativas.
- **Nativos** no 5.2: OBJ, FBX, glTF, STL, USD, Alembic, PLY. Sem IFC, DXF, DWG, SKP nem COLLADA nativos.
- Troca de arquivos: **escala** (teste com cubo de 1 m), **orientação** (OBJ e FBX exportam com Y para cima por padrão; para Z para cima use Forward Y e Up Z), **transformações aplicadas**, **modificadores** aplicados, **cortadores fora**.
- Render: **EEVEE** (tempo real, padrão) ou **Cycles** (path tracer). Prepare escala, normais, limpeza e materiais antes do módulo 13.

## Para aprofundar

Vídeos não assistidos; título e canal confirmados.

- [ ] [Blender Acabou de Ganhar Paredes Estilo Revit, E São Grátis (Bonsai BIM)](https://www.youtube.com/watch?v=2mBOP3HwBCw) (Allan Brito, português, 2026): paredes paramétricas no Bonsai, em português. Explica que o Bonsai assume o `Shift-A`.
- [ ] [Bonsai full demo! Learn how to model this house in native IFC](https://www.youtube.com/watch?v=pQnJ-5b3_Kg) (Open Source for Architects, inglês): demonstração da modelagem de uma casa em IFC nativo (a busca só devolveu música como transcrição; o título é a informação confirmada).
- [ ] [Technical demonstrations of Native IFC authoring with free software](https://www.youtube.com/watch?v=Ooh05WF__80) (Dion Moult, buildingSMART UK+I, inglês): a demonstração de 20 minutos citada na página oficial do Bonsai.
- [ ] [Bonsai Tutorial: Beginner Project, Part 4, 2D detail](https://www.youtube.com/watch?v=QTviOpqz1rw) (Ifc Architect, inglês): série iniciante do Bonsai (esta parte trata de detalhamento 2D; usa o Bonsai v0.8.1).
- [ ] [How to Make a House Interior in Blender (Archimesh Tutorial)](https://www.youtube.com/watch?v=osUfWAxOVlI) (Joel Nantel, inglês, 2024): paredes, portas, janelas, escadas e piso com Archimesh a partir de uma planta; feito antes das mudanças de compatibilidade do Blender 5.
- [ ] [The Archimesh Add-on in Blender](https://www.youtube.com/watch?v=xMVWAaKfWXs) (Tom mc donald, inglês, 2020): visão geral do que o Archimesh gera e das limitações de edição posterior.
- [ ] [Exporting SketchUp Files TO BLENDER! Everything You Need to Know!](https://www.thesketchupessentials.com/exporting-sketchup-files-to-blender-everything-you-need-to-know) (The SketchUp Essentials, artigo e vídeo em inglês, 2020): OBJ x COLLADA, texturas separadas e o que arrumar no Blender.
- [ ] [How to Import Sweet Home 3D Models into Blender (OBJ Workflow Tutorial)](https://www.youtube.com/watch?v=jZM_HWcbrHU) (3D Logic Class, inglês): fluxo OBJ do Sweet Home 3D para o Blender, pelo título; o mesmo vídeo está na lista do módulo 9.
- [ ] [Curso de Blender para Arquitetura, Gratuito e Completo (4 horas)](https://www.youtube.com/watch?v=hPGc3RPD2Ls) (Allan Brito, português): segundo a apresentação, a última aula importa arquivos do SketchUp, mobiliário em OBJ e faz uma introdução à renderização.
- [ ] [Bonsai: Project 0, Designing a Room](https://docs.bonsaibim.org/tutorials/project0.html) e [Instalação](https://docs.bonsaibim.org/quickstart/installation.html) (documentação do Bonsai 0.8.5): o primeiro exercício oficial e a instalação.
- [ ] [Blender Extensions: Bonsai](https://extensions.blender.org/add-ons/bonsai/) e [Archimesh](https://extensions.blender.org/add-ons/archimesh/) (Blender Foundation): páginas oficiais com faixa de versões, licença e permissões.
- [ ] [Manual do Blender 5.2 LTS: Importing & Exporting Files](https://docs.blender.org/manual/en/latest/files/import_export/index.html), [Wavefront OBJ](https://docs.blender.org/manual/en/latest/files/import_export/obj.html) e [glTF 2.0](https://docs.blender.org/manual/en/latest/addons/scene_gltf2.html) (Blender Foundation): as opções de cada exportador.

[Próxima aula: Exercício guiado, a casa de 96 m²](./08%20-%20Exercicio%20Guiado%20a%20Casa%20de%2096%20m2.md)
