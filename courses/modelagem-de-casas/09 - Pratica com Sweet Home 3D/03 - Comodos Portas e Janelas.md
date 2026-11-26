[Voltar ao módulo](./README.md)

# Aula 3: Cômodos, portas e janelas

*Pergunta que esta aula responde: como dou piso e teto aos ambientes e como coloco portas e janelas nas posições, medidas e alturas do quadro de esquadrias?*

## Por que cômodo e esquadria são objetos à parte

Na aula 1 você viu que parede não tem piso nem teto. Quem dá **piso e teto** é o **cômodo** (room): um polígono no plano, com nome, acabamento de piso e acabamento de teto. Quem dá **vão** (abertura) é a **esquadria** (porta ou janela): um objeto do catálogo que, ao ser solto sobre uma parede, faz o programa recortar a parede naquele ponto.

A razão de separar é a mesma do projeto: no módulo 3, a planta baixa mostra cômodos como áreas nomeadas (com área em m²) e o quadro de esquadrias os lista com largura, altura e peitoril. O programa reproduz essa separação.

## Cômodos

### Criar

Clique em **Criar cômodos** na barra de ferramentas e, no plano, escolha uma das duas formas (guia oficial):

1. **Clicar em cada canto** do polígono e terminar com **duplo clique** no último ponto (ou Esc). Serve para qualquer forma, inclusive áreas sem parede, como uma varanda aberta.
2. **Dar duplo clique dentro de uma área fechada por paredes:** o programa **detecta o contorno** e cria o cômodo na hora. O guia observa que essa detecção inclui a metade da soleira das portas colocadas, para que o piso continue até o centro do vão, sem faixa vazia sob a porta aberta.

Consequência prática: **coloque as portas antes de criar os cômodos** pelo duplo clique. Se você criar o cômodo antes, o piso pode terminar na face da parede e deixar uma faixa sem piso sob a porta (efeito que o guia diz evitar com a detecção automática).

### Modificar

Modo **Selecionar**, duplo clique no cômodo (ou **Planta > Modificar cômodos…**). O guia lista: **nome**, **cor ou textura do piso** e **cor ou textura do teto**. Outros itens comuns nessa janela (exibir a área do cômodo no plano, mostrar ou ocultar piso e teto, rodapé, adicionado na versão 5.0 segundo o histórico do site) existem, mas confira o rótulo na sua versão.

Com um cômodo selecionado, você pode mover seus vértices com o mouse, e o guia menciona indicadores para deslocar a posição do nome e da área exibida.

### O teto só se vê por baixo

A FAQ oficial escreve que o programa "suporta a criação de tetos vistos por baixo", ou seja, o teto é uma superfície de uma face só. Duas consequências:

- Na vista aérea (de cima), o teto do cômodo **não esconde o interior**: você enxerga a casa por dentro. É uma vantagem de projeto.
- **Não é um telhado.** Ver o teto de fora não vai mostrar cobertura. Como fazer cobertura fica para a aula 4.

Na janela de modificação do cômodo, a opção de mostrar ou não o teto existe (um tutorial oficial do site cita marcar a visibilidade do teto). Se a vista de dentro (visita virtual) parece "sem forro", verifique se o teto está visível.

### Cômodos e pé-direito

O teto de um cômodo fica na **altura do nível** (aula 4 explica os níveis), não na altura das paredes. Com níveis, esse valor vem do campo de altura do nível (guia: "Level height computes ceiling elevation"). Em casa sem níveis, a documentação consultada não detalha a origem do valor (provavelmente a altura padrão das paredes); confira na sua versão. Então, no exemplo do módulo 3, com paredes até +2,90 m e forro a +2,70 m, o forro do programa precisa ser configurado para 2,70 m e as paredes editadas para 2,90 m, como faremos na aula 8.

## Portas e janelas

### Inserir

Duas formas (guia oficial): arrastar do catálogo para a planta, ou selecionar o item no catálogo e clicar em **Adicionar móveis** (o botão se chama assim no guia mesmo para portas e janelas, porque para o programa tudo é "mobiliário").

Com o **magnetismo** ativo, uma porta ou janela solta sobre uma parede **se orienta e se redimensiona sozinha** para a espessura e a direção da parede. Você não gira nem espessa a porta. Se o item cair fora da parede, ele fica solto no plano: sinal de que faltou encostar.

### Ajustar: indicadores e diálogo

Com um item selecionado, o guia descreve quatro indicadores:

| Indicador | O que faz |
|---|---|
| **Rotação** (canto) | Gira o item; segurar Alt liga ou desliga o magnetismo de 15 graus |
| **Elevação** | Sobe ou desce o item em relação ao piso |
| **Altura** | Muda a altura do item |
| **Tamanho** | Muda largura e profundidade |

Arrastar é rápido, mas impreciso. Para **medida exata**, use o diálogo: duplo clique no item, ou **Mobiliário > Modificar…** (guia em português). Os campos que o guia lista: **nome**; **ângulo de rotação**; **coordenadas (localização)**; **elevação em relação ao piso**; **dimensões**; **cor ou textura/material**; **visibilidade**; **espelhar o modelo 3D** ("Mirrored shape" na FAQ) e **potência da luz** (para luminárias). Os rótulos podem variar; confira na sua versão.

### Traduzindo o quadro de esquadrias

Pegue o quadro do módulo 3 (aula 8). Cada linha vira estes valores no diálogo:

| Do quadro | No programa |
|---|---|
| Largura | Largura do item |
| Altura | Altura do item |
| **Peitoril** (distância do piso ao vão da janela) | **Elevação** do item |
| Posição na parede (ex.: J3 de x = 0,75 a 2,25) | Coordenada do **centro** do item (1,50), se o campo referir-se ao centro |

Sobre o centro: os campos de posição do diálogo normalmente localizam o item pelo seu **centro**. Isso não foi confirmado na documentação oficial; teste com um item solto: coloque uma porta de 0,90 m em X = 1,45 e veja se a borda esquerda cai em 1,00 (centro) ou se a borda cai em 1,45 (canto). Se for pelo centro, converta sempre: `centro = início + largura / 2`.

Exemplo resolvido: a porta P1 fica em x de 1,00 a 1,90. Largura = 0,90; centro = 1,00 + 0,90/2 = 1,45. Peitoril de porta = 0 (encosta no piso). Já J3 (janela) fica de 0,75 a 2,25: largura = 1,50; centro = 0,75 + 0,75 = 1,50; **elevação = 1,10** (peitoril); altura 1,20, portanto o topo está em 1,10 + 1,20 = 2,30, como no corte AA do módulo 3.

### Verificações que você deve sempre fazer

1. **Espessura:** a esquadria acompanha a espessura da parede. Se a folha parecer "para fora" da parede, o item pode ter sido solto sem encostar.
2. **Sentido de abertura:** segundo a FAQ, o sentido depende do **lado da parede em que o item é solto**. Para inverter, use a opção **Espelhar o modelo** (Mirrored shape) em vez de apagar e refazer. No módulo 3 (aula 8), as portas dos quartos abrem para dentro, para não invadir o corredor: confira o arco de giro no plano.
3. **Altura do topo:** a soma elevação + altura não pode passar da altura da parede, senão o item vaza por cima.
4. **Nome:** dê o código do quadro (P1, J3) como nome do item: ao consultar a lista de móveis, você reencontra cada esquadria e confere as medidas em bloco.

### Esquadrias diferentes do catálogo

O catálogo tem portas e janelas de vários formatos (giro, correr, fixa etc.). Os nomes exatos variam entre versões; procure na categoria correspondente. Se nenhuma servir, você pode importar modelos (aula 5), mas mantenha as dimensões do quadro. Um cuidado: o "tamanho" do modelo no catálogo inclui a moldura; se o quadro traz o vão livre, ajuste conforme a sua convenção (na dúvida, use o tamanho do quadro e confira no 3D).

## Exemplo: um cômodo com porta e janela, em ordem

Quarto 1 do exemplo (3,0 x 4,0 m, eixo a eixo):

1. Paredes do contorno prontas (aula 2).
2. Solte P4 (0,80 x 2,10) na parede do corredor; ajuste elevação 0, largura 0,80, altura 2,10, centro em x = 1,20 (de 0,80 a 1,60).
3. Solte J3 (1,50 x 1,20) na parede norte; elevação 1,10, centro x = 1,50.
4. **Duplo clique** no interior do quarto, no modo Criar cômodos; o piso é criado com o contorno da parede.
5. Modo Selecionar, duplo clique no cômodo: nome "Quarto 1", piso e teto (cores por enquanto; texturas na aula 5).
6. Confira na vista 3D e na visita virtual.

## Resumo

- **Cômodo** = polígono com piso e teto (nome, acabamento); **esquadria** = objeto que abre o vão na parede. Parede sozinha não tem piso nem teto.
- Duplo clique dentro de paredes fechadas cria o cômodo automaticamente; **coloque as portas antes** para o piso passar sob o vão.
- O teto é superfície de uma face (vista por baixo); não é telhado.
- Esquadria: arraste sobre a parede (magnetismo ajusta espessura e direção); precisão vem do diálogo: **elevação = peitoril**, dimensões, posição, espelhar para inverter o sentido de abertura.
- Traduza o quadro de esquadrias em valores no diálogo; confirme se a posição refere-se ao centro do item e converta `centro = início + largura / 2`.
- Verifique topo (elevação + altura <= altura da parede), sentido de abertura e nome (P1, J3...).

## Para aprofundar

- [ ] [Curso Sweet Home 3D: Criação de pisos (Aula 3/16)](https://www.youtube.com/watch?v=Bxdos2OVVXw) (Bruno Toniolo): pisos e cômodos em português (título visto na busca).
- [ ] [Curso Sweet Home 3D: Inserção de esquadrias (Aula 4/16)](https://www.youtube.com/watch?v=TRhAI8KbIzE) (Bruno Toniolo): portas e janelas em português.
- [ ] [Sweet Home 3D Adding Door And Windows](https://www.youtube.com/watch?v=BIbS7miEjtg) (Mufasu CAD, inglês): demonstração curta do gesto de soltar sobre a parede.
- [ ] [Sweet Home 3D Doors & Windows Tutorial | Add, Edit & Import Custom Models](https://www.youtube.com/watch?v=2ATc4byZXkI) (CAD Guide, inglês): editar e importar esquadrias personalizadas, pelo título.
- [ ] [Sweet Home 3D Tutorial: Creating Beautiful Doors and Windows](https://www.youtube.com/watch?v=9NGAIL5fmfw) (GeeksForTesting, inglês): outro ponto de vista do mesmo gesto.
- [ ] [Adding Doors](https://sbcode.net/sh3d/adding-doors/) (sbcode.net, inglês): texto com o passo a passo de portas e o uso do espelhamento.

[Próxima aula: Níveis, escadas e cobertura](./04%20-%20Niveis%20Escadas%20e%20Cobertura.md)
