[Voltar ao módulo](./README.md)

# Aula 8: Da planta ao modelo (e do modelo à planta)

*Pergunta que esta aula responde: como o que você aprendeu de desenho técnico (módulo 3) e de estrutura e paredes (módulo 4) se traduz em modelar uma casa, e qual o fluxo prático para sair de uma planta 2D e chegar a volumes?*

## Por que isso existe

Até aqui a aula tratou o modelo de forma abstrata. Agora ligamos ao objetivo do curso: modelar a sua casa. Há uma inversão importante em relação ao que você fez no módulo 3. Lá, **você desenhava** planta, corte e fachada, uma por uma. Num modelo 3D, você **constrói a casa uma vez** e as vistas passam a ser **consequência**: cortes do modelo. A planta deixa de ser o ponto de chegada e passa a ser (também) o ponto de partida.

## O modelo como fonte das vistas

Reveja as vistas do [módulo 3](../03%20-%20Desenho%20Tecnico%20Arquitetonico/README.md) e veja de onde cada uma sai no modelo:

| Vista do desenho técnico | O que é no modelo 3D |
|---|---|
| **Planta baixa** | Um **corte horizontal** do modelo, numa altura de referência, olhado de cima (a convenção usual é um plano de corte que atravessa as paredes e os vãos; a altura exata está no módulo 3). Aparece o que está abaixo do plano; o que é cortado (paredes) recebe destaque, e o que está acima aparece tracejado |
| **Corte (seção)** | Um **plano vertical** que atravessa o modelo: você vê a estrutura interna, pé-direito, lajes, escadas |
| **Fachada (elevação)** | Vista **ortogonal** (sem perspectiva) de um lado do modelo, olhando horizontalmente |
| **Cobertura / planta de telhado** | Vista **superior** do volume do telhado |
| **Cotas e escala** | Medidas lidas do modelo, com escala aplicada apenas ao imprimir |
| **Perspectiva** | Câmera no modelo (não existe no 2D, é grátis no 3D) |

Isso responde à pergunta da aula 6 (CAD versus 3D versus BIM):

- **CAD 2D:** você desenha cada vista.
- **3D geométrico:** você gera as vistas por planos de corte e câmeras em orto (no SketchUp, os **planos de seção**, e o LayOut como ferramenta de pranchas, segundo a documentação oficial do programa; no Sweet Home 3D, a planta vem do desenho e as vistas 3D do modelo).
- **BIM:** as vistas (planta, corte, fachada) são **criadas automaticamente** e continuam ligadas ao modelo: mudou a parede, todas atualizam.

Por isso, para modelar, você precisa entender bem as **regras de representação**: o que é linha de corte, hachura, projeção. Sem essa base, você não sabe se o corte que saiu do modelo está certo.

## O que o módulo 4 vira no modelo

O [módulo 4](../04%20-%20Sistemas%20Construtivos%20e%20Estrutura/README.md) explicou como a casa é construída. Cada elemento vira algo no modelo, e a **decisão de quanto detalhar** é sua.

| Elemento construtivo | Como entra no modelo | Nível de detalhe razoável para o hobby |
|---|---|---|
| **Paredes** (alvenaria de vedação ou estrutural) | Volume com **espessura real**: espessura do bloco mais revestimentos (exemplo de ordem de grandeza: bloco de 14 cm com reboco dos dois lados pode dar cerca de 15 a 20 cm; confirme no módulo 4 e no seu projeto) | Um volume por parede, com a espessura final; camadas só em BIM |
| **Pilares** | Prismas verticais (extrusão de uma seção retangular ou circular) | Seção correta e posição exata na malha de eixos |
| **Vigas** | Prismas horizontais entre pilares | Seção e cota de topo corretas (interferem no pé-direito) |
| **Lajes** | Placas horizontais com espessura (por exemplo, da ordem de 10 a 12 cm em laje maciça; valor ilustrativo, confirme no projeto estrutural) | Espessura real, para que o pé-direito e o piso do andar de cima fiquem certos |
| **Fundações** | Volumes enterrados (sapatas, baldrames, radier) | Só se você quiser ver ou estudar; pode ficar de fora da maquete de visualização |
| **Cobertura** | Planos inclinados com espessura e beirais; estrutura do telhado opcional | Inclinação, beiral e altura de cumeeira certas |
| **Esquadrias** | Vãos subtraídos (aula 4) mais componentes de janela e porta | Vão exato; componente simples |
| **Instalações (módulo 5)** | Opcional: tubulações e quadros como volumes ou linhas | Só para estudo de interferência |

Duas lições práticas que vêm daí:

1. **Espessura importa desde o início.** Modelar parede como linha ou como plano sem espessura muda a área útil dos cômodos e impede o corte de sair certo. Se você importar uma planta em que cada parede é um traço, decida a espessura antes de levantar os volumes.
2. **Estrutura e vedação são coisas diferentes.** Em estrutura convencional (pilares, vigas e lajes), as paredes de vedação preenchem entre os pilares; em alvenaria estrutural, as paredes **são** a estrutura. No modelo, isso muda o que você levanta primeiro (pilares e vigas antes, ou paredes).

> **Aviso.** Um modelo 3D feito por você para entender e visualizar a casa **não substitui** projeto estrutural, de instalações ou aprovado, elaborado por profissional habilitado (a exigência de responsável técnico é assunto do módulo 6). Nunca dimensione pilar, viga ou laje a partir de um modelo de hobby.

## Fluxo: planta 2D para volumes

A situação mais comum é ter a **planta** (em DWG ou PDF, feita por um arquiteto ou por você) e querer levantar a casa em 3D. Fluxo genérico, válido para SketchUp, Revit, Archicad, Blender e outros:

### Passo 1: preparar a planta

- Abra o DWG no programa de CAD (ou peça ao autor) e **limpe**: apague o que não precisa (mobiliário 2D, textos, cotas, hachuras, layers de instalações). Fica só o contorno das paredes, pilares e vãos.
- Confirme a **unidade** do desenho (aula 1) e meça uma parede conhecida.
- Traga o desenho **para perto da origem** e alinhe o eixo principal com X ou Y.
- Feche os contornos: linhas que não se encontram exatamente não formam faces (limite descrito na ajuda do SketchUp para importação de CAD).
- Salve uma **cópia** só com a base para importar.

### Passo 2: importar como referência

- Importe com a **unidade correta** (o SketchUp pede a unidade ao importar) e confira a escala medindo uma parede.
- Coloque o desenho **em uma tag ou camada própria** ("Referência 2D") e **bloqueie** (lock) para não mover sem querer.
- Em BIM, você **vincula** (link) o DWG ao nível em vez de importar, para poder substituí-lo e desligá-lo de forma limpa. Em Revit existe a opção de importar ou vincular CAD, e tutoriais em português mostram a diferença (veja os vídeos).
- Se só tiver PDF ou imagem, importe como imagem e **calibre a escala** com uma medida conhecida antes de traçar.

### Passo 3: traçar e levantar

- **Modeladores de faces (SketchUp):** trace por cima do desenho os contornos das paredes com a espessura correta (linha sobre linha), forme as faces e **extrude** (Push/Pull) até a altura do pé-direito. Vãos: retângulos empurrados ou volumes subtraídos (aula 4). Agrupe por pavimento e sistema (aula 5).
- **BIM (Revit, Archicad):** use a ferramenta **Parede** sobre a planta vinculada; defina o **nível** de base e de topo; escolha o tipo de parede. Portas e janelas são inseridas na parede e abrem o vão sozinhas.
- **Sweet Home 3D:** a planta importada como imagem de fundo serve para traçar as paredes com espessura e altura configuradas; o programa levanta o 3D.

### Passo 4: níveis e alturas

Defina o **piso acabado**, o **pé-direito** (por exemplo, 2,70 m; ilustrativo) e a **espessura da laje**. Um erro típico: modelar o piso do andar de cima a 2,70 m do piso do térreo, esquecendo a laje. A altura entre pisos é pé-direito **mais** a espessura da laje.

### Passo 5: conferir

- Compare o modelo com a planta importada: os cantos coincidem?
- Meça vãos e distâncias-chave.
- Gere um corte no modelo e compare com o corte do projeto (se houver).
- Gire o modelo procurando furos, faces invertidas e sobreposições (aula 2).

### Passo 6: gerar as vistas

Coloque planos de corte, câmera ortogonal para fachadas e exporte as vistas. Em BIM, elas já existem como "vistas de projeto".

## Do modelo para a "planta" de novo

Modelos geométricos permitem gerar plantas simples, mas com limites: hachuras, espessuras de linha, cotas e anotações precisam ser feitas em outra etapa (como o LayOut, no SketchUp, ou os próprios recursos do BIM). Se o seu objetivo for prancha para aprovação, o CAD e o BIM continuam a ferramenta natural. Se for entender e visualizar, o corte do modelo 3D já basta.

## Resumo

- No modelo 3D você constrói a casa uma vez, e planta, corte e fachada são consequências: cortes horizontais, cortes verticais e vistas ortogonais do modelo.
- Cada elemento do módulo 4 (paredes, pilares, vigas, lajes, cobertura) vira volume com **espessura real**; a altura entre pisos é pé-direito mais laje.
- O fluxo padrão é: limpar a planta, importar com unidade correta como referência bloqueada, traçar por cima, levantar volumes, definir níveis, abrir vãos, conferir contra a planta e gerar as vistas.
- Em BIM a planta é vinculada e as paredes são objetos ligados a níveis; em SketchUp você extrude e agrupa; em Sweet Home 3D você traça sobre a imagem.
- Um modelo de hobby ajuda a entender a casa, mas não substitui projeto estrutural nem responsável técnico.

## Para aprofundar

- [ ] [Aula 04 - Importação de arquivo DWG, criação de paredes e aberturas | SketchUp 2018](https://www.youtube.com/watch?v=lH2ycNOJnQg) (TIME AD CURSOS): importar o DWG, criar paredes e aberturas no SketchUp.
- [ ] [SKETCHUP E AUTOCAD: Modelando a partir das plantas # 02/02](https://www.youtube.com/watch?v=t1Iqij2NJec) (CtrlArq Cursos): modelar a partir de plantas, do AutoCAD ao SketchUp.
- [ ] [Como importar um dwg para o Sketchup e ajustar sua escala](https://www.youtube.com/watch?v=AXYriIka9kY) (BaldiCAD): unidade e escala na importação.
- [ ] [Como importar CAD no Revit](https://www.youtube.com/watch?v=5Ntpo7KP-TE) (NeuroBIM): importar CAD no Revit, em português.
- [ ] [Aula 05 - Vinculando arquitetura em CAD no Revit](https://www.youtube.com/watch?v=T_AwiTgH6xs) (Rui Raoli): vincular o CAD ao Revit.
- [ ] [Revit Básico 02: Importar y Vincular CAD o DWG](https://www.youtube.com/watch?v=RaXL5SaoqpM) (merpixel, espanhol): importar versus vincular CAD no Revit.
- [ ] [Importing and Exporting CAD Files](https://help.sketchup.com/en/sketchup/importing-and-exporting-cad-files) (Ajuda do SketchUp, inglês): limites da importação de CAD.

[Próxima aula: Boas práticas de modelagem](./09%20-%20Boas%20Praticas%20de%20Modelagem.md)
