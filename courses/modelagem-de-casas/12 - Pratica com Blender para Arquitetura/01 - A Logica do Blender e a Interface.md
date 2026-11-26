[Voltar ao módulo](./README.md)

# Aula 1: A lógica do Blender e a interface

*Pergunta que esta aula responde: o que o Blender guarda quando você "modela uma parede", por que isso o torna livre e poderoso mas exige método para manter medidas reais, e como se move dentro da interface para começar a trabalhar?*

## Por que essa aula existe

No módulo 7 você viu que um computador guarda um objeto 3D como vértices, arestas e faces, e que existem quatro maneiras de guardar uma forma: malha, sólido, superfície e paramétrico (ver [Vértices, arestas e faces](../07%20-%20Fundamentos%20de%20Modelagem%203D%20CAD%20e%20BIM/02%20-%20Vertices%20Arestas%20e%20Faces.md) e [Malha, sólido, superfície e paramétrico](../07%20-%20Fundamentos%20de%20Modelagem%203D%20CAD%20e%20BIM/03%20-%20Malha%20Solido%20Superficie%20e%20Parametrico.md)). Sweet Home 3D (módulo 9) guarda paredes como objetos que "sabem" que são paredes. SketchUp (módulo 10) guarda faces e arestas, mas com ferramentas pensadas para medidas digitadas. O **Blender** guarda **só malha**, mais um conjunto enorme de ferramentas para transformá-la. Entender essa diferença explica o resto do módulo.

## O que o Blender guarda

Uma "parede" no Blender é um **objeto** cuja malha tem, por exemplo, oito vértices, doze arestas e seis faces. Nada no arquivo diz "parede", "espessura de 20 cm" ou "vão de porta". Se você quer uma parede de 20 cm de espessura, ela precisa **ser** 20 cm de espessura em coordenadas, porque o programa não tem o conceito de espessura de parede, só de distância entre vértices.

Consequências, dos dois lados:

| Vantagem (liberdade e poder) | Custo (método) |
|---|---|
| Qualquer forma é possível: telhado torto, marquise curva, terreno irregular | Nenhuma forma vem "certa": medida, esquadro e espessura são responsabilidade sua |
| Ferramentas poderosas de edição de malha e de modificadores (aulas 3 e 4) | Nada atualiza sozinho: mudar a altura do pé-direito não move as janelas |
| Motores de render de qualidade profissional dentro do mesmo programa (módulo 13) | Não gera planta cotada, corte automático nem quantitativos (isso é BIM, módulo 11) |
| Gratuito e sem restrição de uso, licença GPL (fatos verificados no [módulo 8, aula 4](../08%20-%20Panorama%20de%20Softwares%20e%20Como%20Escolher/04%20-%20Licencas%20e%20Precos%20Fatos%20Verificados.md)) | Curva de aprendizado maior que a do Sweet Home 3D e do SketchUp |

Em relação ao BIM (módulo 7, aula 6), o Blender está no extremo oposto: geometria sem dados. A única ponte para BIM é o complemento **Bonsai**, tratado na aula 7.

## Precisão métrica: o método em cinco regras

O Blender não impede você de modelar uma casa de 8,37 m em vez de 8,00 m. Para o modelo bater com o projeto (a "prova numérica" do módulo 3, aula 9, que você já usou no Sweet Home 3D), adote cinco regras, desenvolvidas na aula 2:

1. **Unidades em metros, escala de unidade 1,0.** Uma unidade do Blender é um metro. Não altere isso.
2. **Modele em escala 1:1.** A parede tem 2,90 m de altura no modelo, não "2,9 vezes o cubo padrão".
3. **Números no lugar do mouse.** Use o painel lateral (tecla `N`) e a digitação de valores nas ferramentas.
4. **Escala aplicada.** Deixe `Scale` em 1,0 em todos os objetos (`Ctrl-A`, aula 2), ou os modificadores e as ferramentas medem errado.
5. **Verifique medindo.** Use a ferramenta Measure e as dimensões do painel para conferir, como você conferiu áreas e perímetro no exercício do módulo 9.

## Versão: o que instalar (verificado em setembro de 2026)

Segundo a página de LTS do site oficial (blender.org/download/lts), em setembro de 2026 existem duas versões de suporte longo (LTS, do inglês Long Term Support, com correções por dois anos):

- **Blender 5.2 LTS**, última atualização 5.2.2 (15 de setembro de 2026).
- **Blender 4.5 LTS**, última atualização 4.5.14 (15 de setembro de 2026).

O Manual oficial (docs.blender.org/manual) descreve, na página inicial, o Blender 5.2 LTS. **Este módulo foi escrito sobre o 5.2 LTS**: menus, rótulos e atalhos de ferramentas de malha foram conferidos no Manual 5.2 e no mapa de teclas padrão do 5.2.2. Duas ressalvas honestas:

- O **Bonsai** (BIM, aula 7) declara compatibilidade com o Blender **4.2 a 5.0** e "não suportado" a partir do 5.1 (página da extensão em extensions.blender.org, verificada em setembro de 2026). Quem quiser Bonsai deve usar o **4.5 LTS**, que é uma versão de suporte longo. Quase tudo deste módulo vale igual no 4.5; onde sei que muda (o modificador Array, aula 4), o texto avisa.
- Muitos vídeos são de versões anteriores (2.8 a 5.1). Fundamentos, atalhos de edição de malha e modificadores permanecem; painéis podem estar em outro lugar. Quando um rótulo estiver em dúvida, o texto diz "confira o nome exato na sua versão".

Requisitos de máquina e licença: [módulo 8, aula 3](../08%20-%20Panorama%20de%20Softwares%20e%20Como%20Escolher/03%20-%20Criterios%20de%20Escolha%20e%20Tabela%20Comparativa.md) e [aula 4](../08%20-%20Panorama%20de%20Softwares%20e%20Como%20Escolher/04%20-%20Licencas%20e%20Precos%20Fatos%20Verificados.md).

## A interface: áreas, editores e workspaces

A janela do Blender é dividida em **áreas**, e cada área contém um **editor** (3D Viewport, Outliner, Properties, Timeline e outros). Um **workspace** é um conjunto de áreas pré-arrumado para uma tarefa, e as abas de workspaces ficam na barra superior. O workspace inicial, **Layout**, tem quatro editores (Manual 5.2, seção Workspaces):

- **3D Viewport** (canto superior esquerdo): onde você vê e modela. É onde você passará 90% do tempo.
- **Outliner** (superior direito): lista hierárquica de tudo na cena, com coleções e objetos (aula 6).
- **Properties** (inferior direito): abas de configurações: cena, objeto, modificadores, materiais e outras.
- **Timeline** (inferior esquerdo): animação; ignore neste curso.

Além de Layout, o Blender traz de fábrica os workspaces Modeling, Sculpting, UV Editing, Texture Paint, Shading, Animation, Rendering, Compositing, Geometry Nodes e Scripting. Para arquitetura, **Layout basta para modelar**; **Shading** e **Rendering** aparecem no módulo 13. Os workspaces são salvos dentro do arquivo `.blend`.

### Ao abrir o Blender pela primeira vez

O Blender oferece, na tela de abertura (splash), escolher idioma, tema e mapa de teclas. Duas decisões práticas:

- **Idioma:** a tradução para português cobre só parte da interface (cerca de 70%, segundo o artigo de Allan Brito listado abaixo), e quase todos os tutoriais usam os nomes em inglês. Este módulo usa os nomes em inglês.
- **Mapa de teclas:** mantenha o padrão ("Blender"). Todos os atalhos deste módulo são do padrão.

### Peças do 3D Viewport que você vai usar

- **Cabeçalho (header):** menus (View, Select, Add, Object, e em Edit Mode Mesh, Vertex, Edge, Face), seletor de **modo** (Object Mode, Edit Mode), seletores de **sombreamento** (Wireframe, Solid, Material Preview, Rendered), botão de **Overlays**, botão de **Snapping** (ímã).
- **Barra de ferramentas (Toolbar)**, à esquerda: Select, Move, Rotate, Scale, Measure, Add Cube e outras. Alterna com `T` (confira na sua versão).
- **Painel lateral (Sidebar)**: abre e fecha com **`N`**. Abas **Item** (Transform: Location, Rotation, Scale, Dimensions), **Tool** e **View** (posição do 3D Cursor, câmera do viewport e mais). É o painel da precisão (aula 2).
- **Gizmo de navegação:** no canto superior direito, com os eixos X, Y, Z coloridos: arrastar orbita, clicar num eixo alinha a vista a ele.
- **Cena inicial:** um cubo, uma luz, uma câmera, o 3D Cursor e o piso em grade com as linhas coloridas dos eixos. O **cubo padrão tem 2 m de aresta** (vai de -1 a +1 em cada eixo): não é uma unidade de medida do seu projeto, é só um objeto de teste. Você o apagará no exercício.
- **Overlays úteis:** *Statistics* (contagem de vértices, arestas e faces, essencial para conferir o modelo), *Face Orientation* (aula 9) e, em Edit Mode, *Measurement* (comprimento de arestas e área de faces selecionadas).

### Sistema de eixos

O Blender usa **Z para cima**, **X vermelho para a direita** e **Y verde para o fundo** na vista de frente. Isso coincide com a convenção do exercício: **X leste, Y norte, Z altura**, com o piso da casa em Z = 0. O SketchUp também usa Z para cima, mas muitos motores de jogo e o formato glTF usam Y para cima, e essa diferença reaparece na exportação (aula 7).

## Navegação (Manual 5.2, seção Navigating)

O Blender foi desenhado para mouse de três botões. Confira a tabela e pratique até virar reflexo. `MMB` é o botão do meio (rolagem clicada).

| Ação | Como | Observação |
|---|---|---|
| **Orbitar** | `MMB` arrastando; ou `Numpad 2/4/6/8` | `Numpad 9` vai ao lado oposto |
| **Pan** (deslocar) | `Shift-MMB` arrastando; ou `Ctrl-Numpad 2/4/6/8` | |
| **Zoom** | Roda do mouse; ou `Ctrl-MMB`; `Numpad +` e `Numpad -` | `Shift-B` dá zoom em uma região |
| **Enquadrar seleção** | `Numpad .` (ponto) | View > Frame Selected |
| **Enquadrar tudo** | `Home` | View > Frame All |
| **Vistas ortogonais** | `Numpad 7` topo, `1` frente, `3` direita; com `Ctrl` a oposta (fundo, traseira, esquerda) | View > Viewpoint |
| **Perspectiva/ortogonal** | `Numpad 5` | Só altera a vista, não o render |
| **Dolly** | `Shift-Ctrl-MMB` | Útil quando o zoom "trava" |

Sem mouse de três botões ou sem teclado numérico (notebook), duas saídas oficiais: no gizmo, arrastar orbita e clicar no eixo alinha a vista; e nas **Preferências** (`Edit > Preferences > Input`) ligar **Emulate 3 Button Mouse**, que passa a usar `Alt-LMB` no lugar do botão do meio. Um mouse de três botões vale o investimento.

**Vistas ortogonais são a base da modelagem de arquitetura.** Na vista ortogonal de topo (`Numpad 7`) você enxerga a planta; na de frente (`Numpad 1`), um corte ou fachada. É o mesmo raciocínio do módulo 3.

## Seleção, adição e transformação básica

- **Selecionar:** clique; `Shift-clique` acrescenta; `A` seleciona tudo; `Alt-A` remove a seleção; `Ctrl-I` inverte; `B` seleciona por caixa.
- **Adicionar:** `Shift-A` abre o menu Add (Mesh, Image, Light, Camera, Collection Instance...). O novo objeto nasce no **3D Cursor**, que começa no centro do mundo.
- **Apagar:** `X` (objeto) ou `Delete`.
- **Desfazer:** `Ctrl-Z`.
- **Mover, rotacionar, escalar:** `G` (grab), `R`, `S`. O objeto passa a seguir o mouse; clique ou `Enter` confirma; `Esc` ou botão direito cancela.
- **Travar em eixo:** depois de `G`, `R` ou `S`, aperte `X`, `Y` ou `Z`. **Digitar um número** define a quantidade exata: `G X 2 Enter` move 2 m no eixo X. `Shift-X` (ou Y, Z) trava o plano, isto é, permite mover em dois eixos e proíbe um. Segundo toque na mesma tecla alterna entre eixo global e local; o terceiro remove a trava.
- **Renomear:** `F2` (nome do objeto ativo).
- **Buscar comando:** `F3` ou `Space` abre a busca de menus, útil quando você esquece onde está uma função.

Guarde esta sequência, que é o coração da modelagem precisa no Blender: **atalho, eixo, número, Enter**. A aula 2 mostra por que ela é mais confiável que arrastar com o mouse.

## Resumo

- O Blender guarda apenas **malha**. "Parede", "espessura" e "vão" são construções suas, não dados do programa. Isso dá liberdade e poder, e exige método de precisão.
- Cinco regras de precisão: metros e escala 1,0; modelar 1:1; números em vez de mouse; escala aplicada; conferir medindo.
- Em setembro de 2026, as versões de suporte longo são **5.2 LTS (5.2.2)** e **4.5 LTS (4.5.14)**. Este módulo usa o 5.2; para usar o Bonsai, use o 4.5.
- Interface: workspace **Layout** (3D Viewport, Outliner, Properties, Timeline); painel lateral `N`; eixos com Z para cima.
- Navegação: `MMB`, `Shift-MMB`, roda, `Numpad 7/1/3`, `Numpad 5`, `Home`. Modelagem precisa: **atalho, eixo, número, Enter**.

## Para aprofundar

Os vídeos não foram assistidos por mim; título e canal foram confirmados. As descrições vêm do título e do texto de apresentação.

- [ ] [Curso de Blender 5.1 Básico, Gratuito e Completo (6 aulas)](https://www.youtube.com/playlist?list=PL2NGzignHv8rkPiR5xc1SA68fqFsqEyB2) (Allan Brito): playlist em português, na versão 5.1, a mais próxima da versão atual encontrada. Boa trilha para instalação, interface e navegação.
- [ ] [Curso de Blender Gratuito e Completo, Aprenda Blender 5.1 do Zero (4 horas)](https://www.youtube.com/watch?v=4KAxWqMiKpQ) (Allan Brito): o mesmo curso em um só vídeo. Pelos capítulos da descrição: instalação, primeira abertura, interface e editores, navegação 3D, seleção, modos Object e Edit.
- [ ] [Curso de Blender para Arquitetura, Gratuito e Completo (4 horas)](https://www.youtube.com/watch?v=hPGc3RPD2Ls) (Allan Brito): pela apresentação, o curso é feito sobre o Blender 5.1 para arquitetura: download, interface, navegação, modelagem com precisão, snap, importação de arquivos do SketchUp e de mobiliário em OBJ. Cobre boa parte deste módulo e serve de trilha única.
- [ ] [Beginner Blender Tutorial (2026)](https://www.youtube.com/watch?v=z-Xl9tGqH14) (Blender Guru, inglês): o tutorial iniciante do canal (o do donut), na edição de 2026. Ensina interface e navegação fazendo um objeto simples; o modelo do tutorial não é arquitetônico.
- [ ] [Part 1 - Blender for Complete Beginners Tutorial Series (Navigation & Shortcut Keys)](https://www.youtube.com/watch?v=sgMfEq3pDE0) (Ryan King Art, inglês): foco em navegação e teclas de atalho, o assunto exato desta aula.
- [ ] [Blender Tutorial for Beginners](https://www.youtube.com/watch?v=Ci3Has4L5W4) (Kevin Stratvert, inglês): outra introdução à interface para quem prefere um ritmo diferente.
- [ ] [Tutorial Blender Iniciante: Como Configurar o Blender ao Abrir Pela Primeira Vez](https://www.allanbrito.com/2026/03/11/tutorial-blender-iniciante-como-configurar-o-blender-ao-abrir-pela-primeira-vez/) (Allan Brito, artigo em português): idioma, tema, atalhos, escala da interface e como salvar as preferências.
- [ ] [Manual do Blender 5.2 LTS: Navigating (Navegação)](https://docs.blender.org/manual/en/latest/editors/3dview/navigate/navigation.html) (Blender Foundation): a tabela de navegação desta aula, na fonte oficial.
- [ ] [Manual do Blender 5.2 LTS: Workspaces](https://docs.blender.org/manual/en/latest/interface/window_system/workspaces.html) (Blender Foundation): lista oficial dos workspaces.

[Próxima aula: Precisão métrica: unidades, modos e medidas](./02%20-%20Precisao%20Metrica%20Unidades%20Modos%20e%20Medidas.md)
