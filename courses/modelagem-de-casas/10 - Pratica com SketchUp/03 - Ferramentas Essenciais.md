[Voltar ao módulo](./README.md)

# Aula 3: Ferramentas essenciais

*Pergunta que esta aula responde: quais ferramentas fazem quase todo o trabalho de modelar uma casa no SketchUp, e por que cada uma faz o que faz sobre a malha de arestas e faces?*

Nesta aula cada ferramenta aparece com o mesmo roteiro: o que ela faz na malha (o porquê), o gesto, a medida digitada e o cuidado. Os atalhos citados vêm da ajuda oficial do SketchUp for Web e do SketchUp desktop (verificado em setembro de 2026); os nomes em português da interface variam, então confira o nome exato na sua versão.

## Navegar: Orbit, Pan, Zoom

**Por quê:** você trabalha em 2D (tela) sobre um objeto 3D. Sem mudar o ponto de vista o tempo todo, você desenha no plano errado. Orbitar, mover a vista e dar zoom são feitos o tempo todo, no meio de outras ferramentas.

- **Orbit (O):** gira a câmera em torno do modelo. **Pan (H):** desloca a vista sem girar. **Zoom (Z):** aproxima e afasta.
- Com mouse de 3 botões: rolar a roda dá zoom (usando o cursor como centro do zoom, segundo a ajuda); segurar a roda e arrastar orbita; segurar Shift junto com a roda pressionada faz Pan.
- **Zoom Extents** enquadra o modelo inteiro. No desktop, a ajuda lista Shift+Z; na web, a ajuda lista Ctrl (ou Cmd) + Shift + E. **Zoom Window** (Shift+W na web) amplia uma área desenhada como retângulo.
- Menu Camera (desktop): vistas padrão (topo, frente, laterais, isométrica) e três modos de projeção: **Parallel Projection** (linhas paralelas permanecem paralelas, medidas em escala; é a que você usa para conferir cotas e exportar vistas), **Perspective** (padrão, como o olho vê) e **Two-Point Perspective** (útil para ilustrações de arquitetura).
- Dica de método: para desenhar uma planta, comece em vista de **topo** com projeção paralela. Para checar volumes, volte à perspectiva.

Veja: [Aula 01: Como MEXER no SKETCHUP](https://www.youtube.com/watch?v=mLajA-RZQfY) (Beatriz Luz) e [Aula 1 do Projeto Jovem Arquiteto](https://www.youtube.com/watch?v=f1T8OcAcczI).

## Selecionar: Select e Lasso

**Por quê:** a maior parte das operações age sobre a seleção atual. Selecionar errado (só a face, sem as arestas; ou tudo, com as paredes coladas) é uma das causas mais comuns de erro.

- **Select** (barra de espaço): um clique seleciona a entidade clicada. **Duplo clique em uma face** seleciona a face e suas arestas de contorno. **Duplo clique em uma aresta** seleciona a aresta e as faces conectadas. **Triplo clique** seleciona todas as entidades conectadas (uma caixa inteira a partir de uma face).
- **Caixa de seleção:** arrastar da esquerda para a direita seleciona só o que está **totalmente dentro** da caixa; arrastar da direita para a esquerda seleciona o que está **parcial ou totalmente dentro**. (Confirmado na [ajuda de seleção](https://help.sketchup.com/en/sketchup/selecting-geometry).)
- Adicionar à seleção: Ctrl (Windows) ou Option (Mac) ao clicar; alternar: Shift; remover: Shift+Ctrl. Selecionar tudo: Ctrl+A no Windows.
- **Lasso** (Shift+barra de espaço): seleção livre; útil em terreno e curvas.

Por que isso importa: como grupos e componentes são um objeto só para o Select (um clique seleciona o grupo inteiro), selecionar corretamente também é a forma de saber se algo já está agrupado (aula 5).

## Desenhar: Line, Rectangle, Circle, Arc, Polygon

**Por quê:** são as ferramentas que criam arestas e faces. Tudo que vira volume começa como um desses desenhos.

- **Line (L):** clique para o ponto inicial e clique de novo para o final; o comprimento aparece na caixa de medidas. A cor da linha indica o eixo (vermelho, verde ou azul). Na web, a ajuda lista essa ferramenta como "Pencil" na barra principal, com atalho L; confira o nome na sua tela.
- **Rectangle (R):** desenha em qualquer plano (chão, uma parede, uma face existente). Dimensões digitadas no formato `comprimento, largura` (a ajuda dá o exemplo `8',20'`). Digitar só um valor seguido de vírgula (por exemplo `3',`) muda apenas a primeira medida; `,5'` só a segunda. Duas dicas oficiais: as inferências indicam quando o retângulo é um quadrado ou uma proporção áurea, e **depois de você ir para outra operação não dá mais para corrigir as medidas do retângulo pela caixa de medidas**. Digite antes de fazer qualquer outra coisa. O separador entre os dois números (vírgula ou ponto e vírgula) pode depender da configuração regional do sistema; confira o que sua versão aceita.
- **Circle (C):** raio arrastado a partir do centro. O número de **segmentos** (quantas arestas retas formam o círculo) pode ser ajustado na caixa de medidas; mais segmentos, mais suave e mais pesado. Para uma casa, poucos segmentos bastam na maior parte dos casos. Um círculo é uma entidade só: selecionar um segmento seleciona o círculo inteiro.
- **Arc (2-Point Arc A, 3-Point Arc, Pie):** curvas; úteis em arcos de portas, fachadas curvas, canteiros.
- **Polygon:** figuras com N lados, úteis para pilares octogonais e formas regulares.

Cuidado com faces que não se formam: se as arestas de um contorno não estão no mesmo plano ou têm uma lacuna, a face não é criada. A aula 10 mostra como achar a lacuna.

## Extrudar: Push/Pull

**Por quê:** é o coração do SketchUp. Transforma uma face em volume (ou abre um furo).

- **Push/Pull (P):** clique na face, mova o cursor na direção desejada e clique de novo, ou digite a distância e tecle Enter. A caixa de medidas mostra a profundidade em tempo real.
- **Duplo clique** em outra face repete a última distância nela. É a forma mais rápida de dar o mesmo pé-direito a várias paredes.
- A ajuda descreve uma tecla modificadora (Ctrl no Windows, Option no macOS) para empilhar uma extrusão idêntica sobre a anterior; confira o comportamento exato na sua versão antes de depender dele.
- **Para cortar um furo passante** (uma janela que atravessa a parede), a face empurrada precisa ficar paralela à face oposta, e a ajuda avisa que se houver linhas dividindo a face oposta você precisa apagá-las antes, senão o furo não abre.
- Extrusões muito finas (menos de uns 2,5 cm, segundo a ajuda) podem mostrar arestas atravessando a superfície.
- Push/Pull **não age em faces dentro de um grupo ou componente enquanto ele estiver fechado**: clique duas vezes no grupo para entrar nele e edite ali (aula 5).

## Modificar: Move, Rotate, Scale, Offset, Follow Me

### Move (M)

**Por quê:** reposiciona, copia e também **deforma** geometria: mover uma aresta ou um vértice arrasta as faces conectadas. É assim que você levanta a cumeeira de um telhado.

- Selecione, pressione M, clique em um ponto de referência e mova.
- **Travar em um eixo:** segure Shift quando a linha de movimento ficar da cor do eixo desejado, ou use as setas do teclado (aula 4).
- **Digitar a distância** durante ou logo depois: `20'`, `-35mm` (a ajuda mostra também unidades misturadas como `3' 6"`). Coordenadas globais entre colchetes `[3', 4', 5']` (a partir da origem do modelo) e relativas entre sinais de menor e maior `<3', 4', 5'>` (a partir do ponto inicial do movimento).
- **Cópias em série:** com o modo de cópia da ferramenta ativo, digite `3x` (três cópias, cada uma na mesma distância entre original e a primeira cópia) ou `3/` (três divisões iguais entre original e cópia). Confira a tecla que ativa o modo de cópia na sua versão (a ajuda do Flip cita Ctrl no Windows).
- Com um grupo ou componente selecionado, aparecem pontos de referência nas caixas delimitadoras; Alt (Windows) alterna entre cantos, pontos médios e o centro.

### Rotate (Q)

**Por quê:** girar objetos e, em arquitetura, definir inclinações. O cursor vira um transferidor.

- Selecione a geometria, ative a ferramenta e posicione o cursor sobre o plano de rotação (Shift trava o plano); clique para o vértice (centro), clique para marcar o ângulo inicial e clique para finalizar.
- Digite o ângulo (por exemplo `34.1` graus); valores negativos giram no sentido anti-horário. A ajuda mostra também a notação de **inclinação** `8:12` (8 unidades de subida para 12 de percurso), que pode ser útil para telhados.
- **Flip:** espelha a geometria, com cópia opcional (o modificador de cópia é Ctrl no Windows, segundo a ajuda).

### Scale (S)

**Por quê:** mudar o tamanho de uma seleção por porcentagem ou dimensão.

- Ao ativar, aparece uma caixa com **8 alças verdes**. Alça de canto: escala **uniforme** (mantém proporção). Alça de aresta ou de face: estica ou achata em um eixo (deforma). A caixa de medidas mostra a escala (começa em 100%) e aceita valores digitados.
- Ctrl (Windows) ou Option (Mac) escala a partir do centro.
- Escalar componentes: vale para uma instância só ou para todas, conforme a aula 5.
- Para **redimensionar o modelo inteiro ou um grupo** com precisão, a ajuda recomenda a fita métrica: meça uma distância conhecida e digite o valor real (veja abaixo).

### Offset (F)

**Por quê:** cria um contorno paralelo a arestas ou faces, a uma distância exata. É a ferramenta que dá **espessura à parede** a partir da planta.

- Clique em uma face (ou aresta selecionada), mova para definir a distância e digite o valor com unidade, por exemplo `15cm`. Pressione Enter.
- Se o deslocamento cria sobreposição, a ferramenta elimina; a ajuda diz que a tecla Alt (Windows) ou Command (Mac) faz a sobreposição aparecer se você a quiser.
- A ajuda cita como uso típico justamente a planta: desenhe um conjunto de paredes e use o Offset para o segundo conjunto (parede interna e externa).
- Vídeo oficial em português: [Tutoriais Básicos SketchUp: Equidistância/Offset](https://www.youtube.com/watch?v=maUad-O2faI) (SketchUp Brasil). Na interface em português a ferramenta costuma se chamar **Equidistância**; confira.

### Follow Me (Siga-me)

**Por quê:** extrudar um perfil ao longo de um caminho. Serve para rodapés, molduras, calhas, beirais com perfil, corrimão.

- Método automático (recomendado pela ajuda): desenhe o perfil (uma face) perpendicular ao caminho, use o Select para pré-selecionar as arestas contínuas do caminho, ative o Follow Me e clique no perfil.
- Método manual: ative a ferramenta, clique e arraste o perfil por cima do caminho; o caminho fica destacado em vermelho; clique no fim.
- O perfil deve ser aproximadamente perpendicular ao caminho. Se a extrusão falha, dê zoom e procure lacunas entre as linhas do caminho.
- Vídeos: [Siga-me - Tutoriais Avançados SketchUp](https://www.youtube.com/watch?v=ATiZhN7zeS4) (SketchUp Brasil), [TUTORIAL SKETCHUP: SIGA-ME](https://www.youtube.com/watch?v=hkQNxwP4QuE) (Archiviza 3D), [Ferramenta Siga-me do SketchUp (Aprenda a usar de diferentes maneiras)](https://www.youtube.com/watch?v=NPZw66pMJ94) (Expert Cursos).

## Medir e guiar: Tape Measure

**Por quê:** ao contrário de um CAD, no SketchUp não há linhas de construção infinitas nativas além das **guias**. A fita métrica mede e cria guias, e também redimensiona.

- **Tape Measure (T):** o modo padrão é criar guias; a tecla **Ctrl** alterna entre modo de medir e modo de criar guia.
- **Guia (linha):** clique em um ponto de uma entidade paralela à guia desejada, mova perpendicularmente e digite a distância exata. Guias são linhas tracejadas infinitas que não interferem na geometria; a ajuda avisa que guias em excesso pesam no modelo e recomenda apagá-las (Edit > Delete) ou ocultá-las (Edit > Hide).
- **Guia (ponto):** no modo de ponto, um clique no espaço planta um ponto de referência.
- **Redimensionar o modelo:** meça uma distância conhecida (por exemplo, a largura conhecida de uma planta importada), digite o valor real e confirme quando o SketchUp perguntar se deseja redimensionar. Isso escala tudo no contexto (o modelo inteiro), por isso faça antes de modelar. Para redimensionar só uma parte, a ajuda diz para agrupá-la antes.

## Apagar e pintar

- **Eraser (E):** apaga arestas; apagar uma aresta remove as faces que dependiam dela. Para apagar linhas que dividem uma face sem perder a face, apague as arestas (não a face).
- **Paint Bucket (B):** aplica material (aula 7).

## Ferramentas que você provavelmente não usará agora

Freehand, Pie, 3D Text, Protractor, ferramentas sólidas, Position Camera, Walk e Look Around existem, mas não são necessárias para a casa do exercício. Position Camera, Walk e Look Around servem para "caminhar" no modelo em altura de olho, útil para conferir um cômodo.

## Resumo

- Navegue o tempo todo: roda do mouse (zoom), roda pressionada (orbitar), Shift+roda (Pan); prefira topo com projeção paralela para planta.
- Line, Rectangle e Circle criam arestas e faces; digite dimensões antes de trocar de ferramenta.
- Push/Pull (P) transforma faces em volume; duplo clique repete a distância; para furo passante a face oposta deve estar limpa de linhas.
- Move (M) desloca e também deforma; Offset (F) dá espessura às paredes; Follow Me extruda perfis ao longo de caminhos; Rotate e Scale têm caixa de medidas.
- A fita métrica (T) mede, cria guias e redimensiona o modelo; Ctrl alterna medir e guiar.

## Para aprofundar

- [ ] [Aulão do SketchUp para Iniciantes | Aprenda do ZERO em 1 aula](https://www.youtube.com/watch?v=pt8yQ_ssG_E) (MasterTuts): visão geral em português; o título indica ferramentas base.
- [ ] [Aula 01: Como MEXER no SKETCHUP [MINI CURSO DE SKETCHUP 2023]](https://www.youtube.com/watch?v=mLajA-RZQfY) (Beatriz Luz): primeiros passos em português.
- [ ] [[CURSO GRATUITO DE SKETCHUP] AULA 01 - Interface e ferramentas de navegação](https://www.youtube.com/watch?v=f1T8OcAcczI) (Projeto Jovem Arquiteto): interface e navegação em português.
- [ ] [Tutoriais Básicos SketchUp: Equidistância/Offset](https://www.youtube.com/watch?v=maUad-O2faI) (SketchUp Brasil): a ferramenta Offset no canal oficial.
- [ ] [Siga-me - Tutoriais Avançados SketchUp](https://www.youtube.com/watch?v=ATiZhN7zeS4) (SketchUp Brasil): Follow Me no canal oficial.
- [ ] [SketchUp - Dica#02 - Como Movimentar e Rotacionar objetos sem sair do Eixo](https://www.youtube.com/watch?v=Y4c7QVAKZA4) (Chahoud Cursos): Move e Rotate mantendo o eixo travado; complementa a aula 4.
- [ ] Documentação oficial: [Pushing and Pulling Shapes into 3D](https://help.sketchup.com/en/sketchup/pushing-and-pulling-shapes-3d), [Moving Entities Around](https://help.sketchup.com/en/sketchup/moving-entities-around), [Extruding with Follow Me](https://help.sketchup.com/en/sketchup/extruding-follow-me), [Using Guides](https://help.sketchup.com/en/using-guides).

Nota: vídeos não assistidos; título e canal confirmados.

[Próxima aula: Inferências, eixos e medidas digitadas](./04%20-%20Inferencias%20Eixos%20e%20Medidas%20Digitadas.md)
