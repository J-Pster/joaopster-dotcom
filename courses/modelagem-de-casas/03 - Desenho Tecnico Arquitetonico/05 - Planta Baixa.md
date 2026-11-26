[Voltar ao módulo](./README.md)

# Aula 5: A planta baixa

*Pergunta que esta aula responde: o que é, de fato, uma planta baixa, por que ela é um "corte" a cerca de 1,50 m e como cada elemento dela (parede, porta, janela, escada, cota) deve ser lido?*

## O problema: mostrar o interior de uma casa numa vista de cima

Se você olhasse uma casa de cima sem cortá-la, veria só o telhado (aula 2). O que interessa a quem constrói e a quem mora é a **organização dos cômodos**: onde estão as paredes, as portas, as janelas, as escadas. Para mostrar isso, imagina-se que **um plano horizontal atravessa a edificação a certa altura**, remove-se a parte de cima (telhado e tudo que está acima do plano) e **olha-se de cima o que sobrou**. O resultado é a **planta baixa**, que a NBR 6492:2021 chama de **planta de pavimento**: "vista superior resultante de um plano secante horizontal, que corta a edificação em uma determinada altura".

O nome "baixa" vem de que ela mostra a parte baixa da casa, aquela que sobra depois de retirar a de cima. Ela é, do ponto de vista geométrico, **um corte, só que com o plano na horizontal** (a aula 2 mostrou que corte é projeção com um plano que abre o objeto).

## Por que a altura de corte é cerca de 1,50 m

A NBR 6492:2021 (item 4.1.2) traz uma recomendação: **a altura do plano secante seja de 1,50 m** em relação ao piso do pavimento, e acrescenta que **pode variar em cada projeto**, de modo a representar os elementos considerados fundamentais, recomendando que **as exceções sejam informadas claramente**. Material didático de curso de arquitetura descreve o critério: o plano deve seccionar o **máximo possível de aberturas**, e cita uma faixa usual de 1,20 m a 1,50 m.

A razão é prática. Portas vão do piso até cerca de 2,10 m; janelas comuns têm o peitoril (a parte de baixo do vão) entre cerca de 0,90 m e 1,20 m e terminam perto de 2,10 m. Um plano a 1,50 m **passa por todas essas aberturas** (portas e janelas comuns), de modo que a planta mostra onde há vão. Um plano muito baixo (por exemplo, 0,50 m) cortaria só paredes, mostrando janelas como parede inteira. Um plano muito alto (2,20 m) passaria acima das portas, e tudo pareceria parede também.

**Exemplo numérico.**

| Elemento | Altura do vão (exemplo) | Cortado pelo plano a 1,50 m? | Como aparece |
|---|---|---|---|
| Porta interna | 0,00 a 2,10 m | Sim | Vão na parede, com a folha e o giro |
| Janela de sala, peitoril 1,10 m, altura 1,20 m (topo 2,30 m) | 1,10 a 2,30 m | Sim | Vão com a esquadria desenhada |
| Janela alta de banheiro, peitoril 1,80 m | 1,80 a 2,30 m | **Não** (está acima do plano) | Costuma ser representada em tracejado, para indicar que existe acima do plano; vale a legenda do projeto |
| Beiral de telhado | Acima de 2,80 m | Não | Projeção em traço e dois pontos (Tabela A.1 da aula 4) |

(As alturas do exemplo são valores usuais para ilustrar; cada projeto define as suas, conforme código de obras e conforto.) O caso da janela alta mostra por que a norma admite variação: se o projetista quisesse que a janela alta aparecesse cortada, teria de mudar a altura do plano, e deveria avisar na planta.

## O que a planta baixa mostra

A NBR 6492:2021 (5.4.2 e 5.5.2) diz que as plantas individualizadas dos pavimentos devem indicar: **norte, escala, acessos, vedos internos e externos** (paredes), **esquadrias** (portas e janelas), **elementos estruturais principais**, **identificação dos ambientes**, **espaços de circulação**, áreas de serviço e técnicas, **projeção de níveis superiores e da cobertura**, **cotas gerais e cotas de nível principais**. Também determina que as plantas de edificação sejam feitas **para todos os pavimentos**, deixando claro quando houver repetições.

Ordenando por camadas (o que o leitor procura primeiro):

### 1. Paredes e elementos cortados (linha grossa)

O plano atravessa as paredes, então elas aparecem como **faixas com contorno em linha larga ou extralarga**, com ou sem hachura (aula 4). O que se lê:

- **Espessura**: uma parede de tijolo cerâmico com revestimento dos dois lados costuma ter em torno de 15 cm a 20 cm; paredes internas divisórias, cerca de 10 cm a 15 cm; paredes de drywall, cerca de 10 cm (valores usuais, dependem do material e do projeto, e são tema do módulo 4). Na planta, a espessura é um dado gráfico: você mede na escala ou lê na cota.
- **Continuidade**: onde a linha grossa se interrompe, há abertura (porta, janela, passagem).
- **Pilares**: quadradinhos ou retângulos cheios ou hachurados, geralmente no encontro de paredes; em projetos estruturais recebem nomes (P1, P2...) e ficam na malha de eixos.

### 2. Esquadrias (portas e janelas)

Representadas de forma simplificada (a Tabela A.1 aceita linha larga ou estreita):

| Elemento | Como aparece na planta (convenção usual) |
|---|---|
| **Porta de giro** | Interrupção na parede + retângulo estreito (a folha) na posição aberta a 90° + **arco de giro** (a trajetória da ponta da folha), mostrando para que lado abre |
| **Porta de correr** | Interrupção na parede + retângulo(s) paralelos à parede, mostrando o percurso |
| **Janela** | Interrupção na parede + 2 ou 3 linhas finas paralelas dentro da espessura (esquadria e vidro) |
| **Janela alta ou fora do plano** | Tracejada (ver acima) |

A designação **P1, P2** (portas) e **J1, J2** (janelas) liga cada símbolo ao quadro de esquadrias (NBR 6492:2021, A.8.1 e A.9.3), como visto na aula 4. As cotas de vão são cotadas no **vão acabado pronto para receber a esquadria** (A.5.2).

O **arco de giro** tem função de projeto: mostra que ali precisa haver espaço livre para a porta abrir. Por isso ele conversa com o módulo 1: se o arco da porta bate na cama ou no vaso sanitário, o layout está errado, e a planta é o desenho onde esse conflito aparece.

### 3. Escadas e mudanças de nível

- **Degraus**: linhas paralelas, um por degrau (piso), com a **seta de sentido ascendente** (NBR 6492:2021, A.4.4). Costuma-se indicar o início da subida com um pequeno círculo ou uma seta e, ao lado, "sobe" ou "desce".
- **Linha de corte na escada**: como a escada sobe, o plano a 1,50 m a **corta no meio do lance**; a parte acima do plano não aparece, e a interrupção é marcada por uma linha quebrada (zigue-zague, aula 4). Esse é o caso típico onde o leitor pode se confundir: a escada "termina" no meio porque a planta não vê o que está acima do plano.
- **Mudanças de nível** no mesmo pavimento (um degrau entre sala e varanda): linha fina de mudança de nível (Tabela A.1) e cotas de nível em ambos os lados.
- **Rampas**: seta de sentido ascendente e inclinação.

### 4. O que está acima do plano (projeções)

Elementos de nível superior que **não foram cortados**, mas que o projetista quer indicar: beirais, marquises, lajes em balanço, o contorno de um segundo pavimento. A norma indica linhas de **traço e dois pontos estreitas** para "projeções de pavimentos em balanço, marquises e beirais" (Tabela A.1).

### 5. O que está abaixo do plano (o que se vê no piso)

Acabamento de piso (às vezes hachurado ou com texto de especificação), pias, louças, tanque, bancadas, armários fixos (nem sempre desenhados) e mobiliário, que ajuda a testar o layout (mesa, cama, sofá). Em projetos de aprovação, o mobiliário costuma ser omitido; em projetos executivos e de interiores, aparece com linha estreita.

### 6. Textos, cotas e símbolos

- **Nome dos ambientes** e, frequentemente, a **área** (m²) de cada um. Todos os compartimentos devem ser identificados pelo nome (NBR 6492:2021, A.8.2).
- **Cotas**: em três faixas externas (parciais, entre eixos, total, aula 3) e cotas internas de cômodos.
- **Cotas de nível**: por exemplo, +0,00 na sala, -0,02 no banheiro (aula 3, N.A. e N.O.).
- **Marcação dos cortes** (linhas traço e ponto extralarga, com letra e direção) e das **fachadas** (setas com identificação).
- **Norte** (para relacionar com sol e ventos, módulo 2).
- **Escala** e **escala gráfica**.
- **Quadros**: áreas, esquadrias, acabamentos, quando cabem na prancha.

## O que a planta baixa **não** mostra

É útil saber o que procurar em outro desenho:

| Informação | Onde achar |
|---|---|
| Pé-direito (altura do teto), altura de janelas, forma do telhado | Cortes e fachadas (aula 6) |
| Inclinação e material do telhado, sentido de escoamento da água | Planta de cobertura (aula 7) |
| Posição do terreno, recuos, acesso à rua | Implantação e situação (aula 7) |
| Como é o encontro de duas paredes, detalhe do peitoril | Detalhes (aula 7) |
| Localização de tomadas, tubulações | Plantas de instalações (módulo 5) |

## Método: como ler uma planta baixa em 7 passos

1. **Escala e norte.** Qual a escala? Para onde está o norte? (Você vai relacionar cada cômodo ao sol, do módulo 2.)
2. **O contorno externo**: dimensões totais (a cota mais externa) e a forma geral.
3. **Os acessos**: onde se entra e como se passa de um setor a outro (social, íntimo, serviço, do módulo 1).
4. **Ambiente por ambiente**: nome, área, e o que tem dentro.
5. **Portas e janelas**: usar o quadro de esquadrias e os arcos de giro; conferir onde há ventilação e iluminação natural.
6. **Níveis**: cotas de nível, degraus, rampas e escadas.
7. **Referências cruzadas**: marcações de cortes e fachadas, para saber que outros desenhos consultar.

A aula 8 aplica esse método a uma casa completa, e a aula 9 mostra como cada passo se traduz em parâmetros num modelo 3D (a planta baixa é, normalmente, a **primeira coisa que se desenha** num software de modelagem de edificações).

## Erros comuns de quem está aprendendo

- **Achar que a planta "vê" o telhado ou o que está acima de 1,50 m.** Não vê, a menos que haja a projeção tracejada.
- **Medir a parede pelo eixo ou pela face sem saber.** A cota de eixo a eixo inclui metade da espessura de cada parede. A cota de vão livre não.
- **Confundir a linha quebrada da escada com erro de desenho.** É o plano de corte atravessando o lance.
- **Ignorar a linha de projeção tracejada** (beiral, marquise): ela avisa que há algo acima.

## Resumo

- Planta baixa = corte horizontal da edificação seguido de vista de cima do que sobra; é o mesmo mecanismo do corte vertical.
- A NBR 6492:2021 recomenda o plano a 1,50 m, podendo variar por projeto, com a exceção informada; a lógica é cortar o máximo de aberturas.
- Paredes cortadas em linha grossa, esquadrias simplificadas (porta com arco de giro, janela com linhas paralelas), escadas com seta de sentido e linha de corte, projeções acima do plano em traço e dois pontos.
- Deve incluir norte, escala, acessos, vedos, esquadrias, ambientes, circulação, cotas e níveis; e deve haver planta de todos os pavimentos.
- Pé-direito, telhado, terreno e detalhes vêm de outros desenhos.
- Leitura em 7 passos: escala e norte, contorno, acessos, ambientes, esquadrias, níveis, referências cruzadas.

## Para aprofundar

- [ ] [Leitura de planta de casa, passo a passo, Desenho Arquitetônico interpretação](https://www.youtube.com/watch?v=7qtKj0XBVts) (Markoni Heringer): leitura de planta de uma casa. Título e canal confirmados; conteúdo não assistido.
- [ ] [Tipos de plantas e desenhos que compõe um projeto arquitetônico](https://sienge.com.br/blog/tipos-de-plantas-e-desenhos/) (Sienge, artigo): traz imagens de exemplo de planta baixa, corte, fachada, cobertura, situação e implantação; útil para ver o que descrevo em texto.

[Próxima aula: Cortes e fachadas](./06%20-%20Cortes%20e%20Fachadas.md)
