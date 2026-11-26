[Voltar ao módulo](./README.md)

# Aula 8: Exercício guiado, a casa de 96 m² em BIM

*Pergunta que esta aula responde: como refaço, em BIM e na ordem certa, a casa de 96 m² dos módulos 3 e 9, e provo pelos números (áreas, quantidades, classes IFC) que o modelo bate com o projeto?*

Este é o mesmo exercício da aula 8 do módulo 9 (Sweet Home 3D), agora com objetos BIM. Tenha à mão a aula 8 do módulo 9 e a aula 8 do módulo 3: as tabelas de esquadrias e de ambientes vêm delas. A casa é **térrea, de 96 m², em terreno de 10 x 25 m, com a rua ao sul**: casa fechada de 8,00 x 10,00 m e varanda de 8,00 x 2,00 m ao sul, telhado de duas águas a 30%.

## Em qual software o exercício segue detalhado, e por quê

**Bonsai** (versão 0.8.5, verificado em setembro de 2026). Razões:

1. **É gratuito e sem prazo** (aula 3): você não depende de um teste de 30 dias nem de matrícula.
2. **O arquivo é IFC**: o exercício ensina, de quebra, a lógica do formato (aula 7).
3. **A documentação oficial cobre exatamente os gestos-base do exercício**: criar parede com tipo, alinhar à linha de centro, unir paredes (mitre e butt), colocar porta e janela hospedadas, regenerar o vão. O tutorial oficial *Project 0* usa até números parecidos (parede externa de 0,20 m, divisória de 0,10 m, altura de 2,80 m, portas de 0,90 x 2,10 m, laje, planta e PDF).
4. **Há vídeos** que mostram o fluxo (aula 6).

**Por que não o Revit ou o Archicad em detalhe:** só teriam teste de 30 dias ou licença de estudante (aula 3), as páginas oficiais de licença do Revit não abriram na verificação. O material em português de ambos é abundante, e você pode seguir os mesmos passos usando a aula 4. **A tabela abaixo mapeia cada passo** para o Revit e o Archicad. **O FreeCAD** é alternativa gratuita equivalente; o fluxo está na aula 6.

**Lacunas honestas do Bonsai.** As páginas oficiais de **lajes e telhados, cômodos (espaços), tipos, desenhos e tabelas** ainda estão marcadas como "em andamento". Nesses passos o roteiro descreve o **objetivo e o teste de conferência**, cita as ferramentas confirmadas e diz "confira o nome exato na sua versão". **Este roteiro foi montado a partir da documentação oficial e dos vídeos; não foi executado passo a passo em um Bonsai instalado.** Onde o programa mostrar algo diferente, vale o programa, e o teste numérico do fim diz se você acertou.

| Passo | Bonsai | Revit | Archicad |
|---|---|---|---|
| Nível | Pavimento da árvore IFC | Nível (*Level*) | Pavimento (*Story*) |
| Paredes | Create Wall + tipo | Parede + tipo composto | Ferramenta Parede + composição |
| Esquadrias | Create Door / Create Window | Família carregável de porta/janela | Objeto GDL de porta/janela |
| Laje | Create Slab | Piso (*Floor*) | Laje |
| Telhado | Create Slab (lajes inclinadas) ou classe de telhado | Telhado por perímetro | Telhado |
| Cômodos | Create Space | Ambiente (*Room*) | Zona (*Zone*) |
| Tabelas | Quantities / Schedules | Tabela/Quantidades | Interactive Schedule |
| Folhas | Drawings e Sheets | Vistas e Folhas | Layout e Publisher |

## Convenções e números de partida

- **Blender é Z para cima; X é leste, Y é norte.** Origem (0, 0) no **canto sudoeste da varanda**. A casa fechada vai de y = 2,00 a y = 12,00; a varanda, de y = 0 a y = 2,00. (Diferente do Sweet Home 3D, aqui o eixo Y sobe para o norte: use os mesmos números do módulo 9.)
- **Eixo a eixo**: linha de centro das paredes sobre o eixo (Shift+C, na documentação do Bonsai).
- **Espessuras:** externas 0,20 m, internas 0,10 m. **Alturas:** externas 2,90 m, internas 2,70 m.
- **Ignorados** (como no módulo 9): desníveis de 2 e 5 cm e o terreno em declive. **Não modelada**: empena sul sobre a varanda.

## Passo 0: instalar e preparar o arquivo

1. Instale o Blender e o Bonsai: no Blender, **Edit > Preferences**, aba **Get Extensions**, habilite **Allow Online Access**, procure "Bonsai" e **Install** (documentação oficial). Faça isso antes: exige internet.
2. Abra o Blender, troque para a **área de trabalho do Bonsai** (o Projeto 0 diz "switch to the Bonsai workspace").
3. **File > New IFC Project > New Metric (m) Project.** Isso cria a árvore `IfcProject > IfcSite > IfcBuilding > IfcBuildingStorey` no Outliner.
4. Salve como `casa96_v01.ifc` (**Ctrl+S** salva só o IFC; o `.blend` é salvo à parte).
5. Localização do cursor 3D: o Bonsai põe os objetos onde está o **cursor 3D**. No painel lateral do Blender (tecla N), aba de vista, há uma seção com a posição do cursor 3D, onde você digita coordenadas (recurso padrão do Blender; confira o nome na sua versão). Você vai usar isso durante o exercício inteiro.

## Passo 1: o pavimento

O projeto já traz um pavimento padrão ("My Storey"). Renomeie para **Térreo** e confirme a elevação **0,00**. A documentação de tipos espaciais ainda está incompleta: procure o nome do pavimento no painel **Project Overview > Spatial Decomposition** ou na ferramenta espacial, e confira o nome exato. **Só um pavimento é necessário.**

## Passo 2: dois tipos de parede

Com a ferramenta **Create Wall**:

1. Na barra superior, edite o nome do tipo para `EXT20` e clique em **+ Add IfcWallType**.
2. Faça o mesmo para `INT10`.
3. Ajuste a espessura de cada tipo: **0,20 m** e **0,10 m**. A documentação oficial do Projeto 0 manda "definir" essas espessuras, mas o mecanismo (edição do tipo e de seu conjunto de camadas de material) está nas páginas de materiais e tipos, ainda incompletas. Consulte o vídeo de configuração de projeto (aula 6) e a documentação de **Material Assignment**. **Teste:** depois de criar uma parede de cada tipo, meça a espessura com a ferramenta **Measure**.
4. Camadas ilustrativas (aula 4): reboco 2,5 + bloco 15 + reboco 2,5 cm; ou uma camada única de 0,20 m no primeiro exercício.

## Passo 3: as quatro paredes externas

Tipo `EXT20`, altura **2,90 m**, alinhamento pela **linha de centro**, junção **mitre** nos cantos (como no Projeto 0).

| Parede | Direção | Comprimento (m) | Começa em | Termina em |
|---|---|---|---|---|
| Frontal (sul da casa fechada) | Leste | 8,00 | (0, 2) | (8, 2) |
| Leste | Norte | 10,00 | (8, 2) | (8, 12) |
| Norte | Oeste | 8,00 | (8, 12) | (0, 12) |
| Oeste | Sul | 10,00 | (0, 12) | (0, 2) |

Como criar uma parede (documentação oficial): posicione o cursor no ponto inicial (Shift + clique esquerdo, com encaixe ligado, ou digitando no painel lateral), pressione **Shift+A** e ajuste o **comprimento** pelo parâmetro da barra superior; gire a parede para a direção desejada (a documentação cita **Shift+R** para rotacionar em 90 graus e depois ajustar o ângulo) e repita no fim do segmento. **A mecânica exata de sentido do ângulo, confira-a com um teste:** desenhe uma parede, olhe em planta (vista superior) e verifique para onde ela aponta.

**Conferência 1:** meça as quatro paredes (ferramenta Measure) e some: **perímetro 36,00 m**.

**Pilares da varanda (opcional):** com **Create Column**, dois pilares de 0,20 x 0,20 m, altura 2,90 m, centrados em (0, 0) e (8, 0).

## Passo 4: as cinco paredes internas

Tipo `INT10`, altura **2,70 m**, linha de centro, junção **butt** (encosta topo com face) nas paredes externas ou vizinhas (**Shift+T** na documentação).

| Parede | De | Até | Comprimento (m) |
|---|---|---|---|
| Sul do corredor | (0, 7) | (8, 7) | 8,00 |
| Norte do corredor | (0, 8) | (8, 8) | 8,00 |
| Sala/cozinha | (5, 2) | (5, 7) | 5,00 |
| Quarto 1/banheiro | (3, 8) | (3, 12) | 4,00 |
| Banheiro/quarto 2 | (5, 8) | (5, 12) | 4,00 |

**Conferência 2:** comprimento total **29,00 m**.

## Passo 5: portas e janelas (objetos hospedados)

Procedimento documentado (aula 6): (1) **selecione a parede primeiro**, para o vão ser criado automaticamente; (2) posicione o cursor 3D no ponto desejado sobre a parede; (3) ferramenta **Create Door** ou **Create Window**; (4) dê nome ao tipo e clique em **+ Add IfcDoorType** (ou WindowType); (5) **Shift+A**; (6) ajuste largura e altura na barra superior; (7) **selecione a parede e pressione Shift+G** para regenerá-la com o vão. **Shift+F** inverte o sentido de abertura da porta; o campo **Operation Type** (painel Parametric Geometry, em Scene Properties, aba Geometry and Materials) escolhe o tipo de operação, como giro à direita.

**Um tipo por dimensão** (aula 4):

| Tipo | Largura x altura (m) | Peitoril (m) | Instâncias |
|---|---|---|---|
| `P090` | 0,90 x 2,10 | 0 | P1 |
| `P080` | 0,80 x 2,10 | 0 | P2, P3, P4, P6 |
| `P070` | 0,70 x 2,10 | 0 | P5 |
| `J150` | 1,50 x 1,20 | 1,10 | J1, J3, J5 |
| `J120` | 1,20 x 1,20 | 1,10 | J2 |
| `J060` | 0,60 x 0,60 | 1,80 | J4 |

Posições (as do módulo 9; "centro" é o meio do vão medido do canto sudoeste, em x nas paredes horizontais e em y nas verticais):

| Código | Parede | Centro |
|---|---|---|
| P1 | Frontal (y = 2) | x = 1,45 |
| P2 | Sala/cozinha (x = 5) | y = 4,00 |
| P3 | Sul do corredor (y = 7) | x = 1,40 |
| P4 | Norte do corredor (y = 8) | x = 1,20 |
| P5 | Norte do corredor (y = 8) | x = 4,00 |
| P6 | Norte do corredor (y = 8) | x = 6,80 |
| J1 | Oeste (x = 0) | y = 4,25 |
| J2 | Leste (x = 8) | y = 4,40 |
| J3 | Norte (y = 12) | x = 1,50 |
| J4 | Norte (y = 12) | x = 4,50 |
| J5 | Norte (y = 12) | x = 6,50 |

**Peitoril:** o Projeto 0 manda ajustar a "altura do peitoril" (*sill height*) das janelas; procure o campo equivalente nas propriedades da janela (confira o nome). **Portas dos quartos e do banheiro (P4, P5, P6) abrem para dentro** dos cômodos.

**Atenção à documentação:** mover uma esquadria com as ferramentas do Blender **não** muda o modelo IFC; sempre regenere a parede (Shift+G) depois de mover, e se o vão não acompanhar, o "Apply Void" (Shift+O) existe, mas a documentação recomenda evitá-lo porque pode afetar a orientação da porta.

**Conferência 3:** com a ferramenta Measure, confirme dois casos do módulo 9: as bordas de P1 em x = 1,00 e 1,90, e o corte AA em x = 1,45 atravessando P1, P3, P4 e J3.

## Passo 6: lajes

Ferramenta **Create Slab** (aula 6): uma laje de piso de **8,00 x 10,00 m** (contorno do eixo das paredes externas: (0, 2), (8, 2), (8, 12), (0, 12)), e outra de **8,00 x 2,00 m** para a varanda. A documentação do Projeto 0 manda ajustar **espessura** e **elevação** da laje. Use espessura 0,10 m com o topo em 0,00 m (confira o referencial da elevação).

**Conferência 4:** áreas de laje **80,00 m² + 16,00 m² = 96,00 m²**.

## Passo 7: cômodos (espaços)

Ferramenta de espaço (**Create Space**, citada no Projeto 1; a documentação de espaços ainda está incompleta). Crie sete: sala, cozinha, corredor, quarto 1, banheiro, quarto 2 e varanda, e dê nome a cada um. Confirme a classe `IfcSpace` no painel de propriedades do objeto.

**Conferência 5, o teste central** (áreas livres, eixo a eixo, mesmas do módulo 9):

| Cômodo | Área livre (m²) | Nominal (m²) |
|---|---|---|
| Sala | 23,52 | 25,00 |
| Cozinha | 13,82 | 15,00 |
| Corredor | 7,02 | 8,00 |
| Quarto 1 | 10,97 | 12,00 |
| Banheiro | 7,32 | 8,00 |
| Quarto 2 | 10,97 | 12,00 |
| Varanda | 16,00 | 16,00 |

Soma dos fechados **73,62 m²**; com a varanda, **89,62 m²** contra 96,00 m² nominais. A diferença de 6,38 m² são as paredes. Aceite até 0,05 m² de diferença. Como o cálculo do espaço depende da ferramenta e das paredes ao redor, descubra na sua versão **como a área é calculada** (limite de parede) antes de concluir que há erro.

## Passo 8: telhado de duas águas

Objetivo: cumeeira em **4,10 m**, ponta do beiral em **2,72 m**, inclinação **30% (16,7 graus)**, beiral de 0,60 m a leste e a oeste. Duas águas, cada uma com **4,80 m de comprimento inclinado por 12,00 m** ao longo da cumeeira: **57,60 m² cada, 115,20 m² no total** (números do módulo 9: 2,90 - 0,30 x 0,60 = 2,72 m; 2,72 + 0,30 x 4,60 = 4,10 m).

Como fazer no Bonsai: a documentação de telhado está incompleta. Duas opções, na ordem de preferência:

1. **Duas lajes inclinadas** com a ferramenta Create Slab (a documentação a descreve como criadora de "lajes de piso ou telhado"), com 4,80 x 12,00 m, espessura 0,04 m, giradas em 16,7 graus em torno do eixo da cumeeira, centradas em (1,70; 6,00; 3,41) e (6,30; 6,00; 3,41). Se preferir usar a classe de telhado, atribua a classe `IfcRoof` a cada laje (o mecanismo de atribuir classe está na documentação: painel Object Information, botão Assign IFC Class).
2. Se algo não funcionar, aceite uma simplificação (por exemplo, o telhado como uma laje plana sobre as paredes, e registre que a área de telhado não confere) e registre-a; o objetivo do módulo é a lógica BIM, não o telhado perfeito.

**Empena norte:** para o topo triangular da parede norte, a documentação do Bonsai lista a operação **Extend** (Shift+E), que estende uma parede até a face de outro elemento. Teste estender a parede norte até a face inferior do telhado. Se não funcionar, **aceite a parede reta** e anote como simplificação (no módulo 9, você fez o triângulo com paredes de altura variável).

**Conferência 6:** cumeeira 4,10 m, ponta do beiral 2,72 m, área de telhado 115,20 m².

## Passo 9: quantidades

A documentação de paredes cita **Calculate All Quantities** (tecla Q) para calcular quantidades. Depois, procure a ferramenta de tabelas de **Drawings and Documents** (ou o módulo de custos e cronogramas). O que você deve obter, na aula 5:

- 6 portas e 5 janelas (11 esquadrias), tipos e contagens da tabela acima;
- vãos totais 17,28 m²;
- 115,20 m² de telhado;
- cômodos conforme o passo 7.

Se não achar uma tabela de esquadrias pronta, conte por classe no Outliner ou no painel de classes; o objetivo é a **conferência**.

## Passo 10: desenhos e folha

Faça **planta baixa** (1:50, com nomes de cômodos e áreas), **cortes AA e BB** do módulo 3 e **fachada sul**, e monte uma folha A3. A documentação de desenhos é a menos completa do Bonsai: ela diz que o módulo está em "estágio inicial de desenvolvimento" e exige o **Inkscape**. Siga os vídeos da aula 6 (o de "Your first BIM drawing" e a série de iniciante), e o Projeto 0. Em vídeo da série, o fluxo é adicionar o desenho a partir de uma seção, ativar a vista, ajustar a câmera e imprimir; confira na sua versão. Gere um **PDF**.

## Passo 11: o ritual do IFC

Salve o `casa96_v02.ifc` e faça o ritual da aula 7: abra em **FreeCAD** ou em um visualizador aberto; confira 1 pavimento, 6 portas, 5 janelas, 7 espaços, 2 lajes, cobertura, ausência de objetos proxy, e o comprimento das paredes (36 m e 29 m).

## Passo 12: o teste que prova que é BIM

1. **Mude o tipo** `P070` para 0,80 m de largura (edite o tipo, não a instância). Regenere as paredes (Shift+G). A porta P5 mudou? A tabela mudou?
2. **Mude o tipo** `EXT20` de 0,20 para 0,25 m e veja as quatro paredes externas mudarem juntas (e as áreas livres diminuírem).
3. Desfaça e confirme que os números voltam.

## Passo 13: verificação final

- [ ] Perímetro externo **36,00 m**; paredes internas **29,00 m**.
- [ ] Lajes 80,00 + 16,00 m².
- [ ] Áreas dos espaços dentro de 0,05 m² da tabela; soma dos fechados **73,62 m²**.
- [ ] **11 esquadrias**, um tipo por dimensão, portas de quartos e banheiro abrindo para dentro.
- [ ] Topo das janelas J1 e J3 em 2,30 m (1,10 + 1,20).
- [ ] Cumeeira 4,10 m; beiral 2,72 m; área de telhado 115,20 m².
- [ ] Pé-direito interno 2,70 m e paredes externas 2,90 m.
- [ ] IFC reaberto em outro programa: 1 pavimento, classes certas, sem proxy.
- [ ] Arquivo `.ifc` versionado e um PDF de planta.
- [ ] Teste do passo 12 aprovado.

## Aviso

Este é um modelo de estudo. Não substitui projeto arquitetônico, estrutural e de instalações assinado por profissional habilitado, exigido pela prefeitura e pela obra (módulo 6).

## Resumo

- O exercício segue no **Bonsai**: gratuito, sem prazo, IFC nativo e com documentação oficial dos gestos-base (paredes, esquadrias). Lajes, telhado, espaços e desenhos são as lacunas da documentação, por isso o roteiro dá o objetivo e o teste.
- Ordem: arquivo e pavimento, **tipos de parede**, paredes externas, paredes internas, **esquadrias por tipo**, lajes, espaços, telhado, quantidades, desenhos, IFC.
- O modelo passa quando: perímetro 36 m, internas 29 m, cômodos fechados 73,62 m², 11 esquadrias, telhado 115,20 m², IFC conferido e o **teste de mudar o tipo** funciona.
- O mesmo roteiro serve no Revit ou no Archicad, com as ferramentas mapeadas na tabela do início (e a aula 4).

## Para aprofundar

- [ ] [Project 0: Designing a Room](https://docs.bonsaibim.org/tutorials/project0.html) (documentação oficial do Bonsai, inglês): o tutorial-base, com paredes, aberturas, laje, planta e PDF.
- [ ] [Creating Walls](https://docs.bonsaibim.org/guides/authoring/basic_modeling/creating_walls.html), [Door](https://docs.bonsaibim.org/guides/authoring/basic_modeling/door.html) e [Window](https://docs.bonsaibim.org/guides/authoring/basic_modeling/window.html) (documentação oficial do Bonsai, inglês): procedimentos e atalhos citados neste exercício.
- [ ] [Your first BIM drawing in 20 mins using Bonsai | Blender BIM and IFC](https://www.youtube.com/watch?v=fxpIg-su-00) (Prof Rino and Caroline the boss): primeiro desenho BIM no Bonsai, pelo título.
- [ ] [BlenderBIM (Bonsai) Project Setup: IFC Project, Levels, Grids, Views, and Essential Blender Tools](https://www.youtube.com/watch?v=Y0NUwQNqkKI) (DynamiteRevit): projeto, níveis, grades, vistas.
- [ ] [Bonsai Tutorial - Beginner Project - Part 4 - 2D detail](https://www.youtube.com/watch?v=QTviOpqz1rw) (Ifc Architect): desenho 2D, materiais, cotas e anotações; versão 0.8.1.
- [ ] [Bonsai full demo! Learn how to model this house in native IFC](https://www.youtube.com/watch?v=pQnJ-5b3_Kg) (Open Source for Architects): demonstração visual de uma casa em IFC nativo.
- [ ] [New to Bonsai BIM? try this intro videos (Aug 25)](https://community.osarch.org/discussion/3098/new-to-bonsai-bim-try-this-intro-videos-aug-25) (OSArch, comunidade): série de vídeos de um usuário modelando uma edificação simples (fundações, pilares e vigas, paredes, janelas e porta, cobertura, piso), com comentários de quem os assistiu.
- [ ] [Bonsai Tutorial - Beginner Project - Part 1 - Modelling - 2025](https://community.osarch.org/discussion/2828/bonsai-tutorial-beginner-project-part-1-modelling-2025) (OSArch): discussão do primeiro vídeo da série de iniciante.
- [ ] [FreeCAD BIM - Architecture - Complete Beginner Tutorial](https://www.youtube.com/watch?v=IV-nv9ygZPM) (Deltahedra): se você preferir o FreeCAD para o mesmo exercício.

[Próxima aula: Erros comuns e boas práticas](./09%20-%20Erros%20Comuns%20e%20Boas%20Praticas.md)
