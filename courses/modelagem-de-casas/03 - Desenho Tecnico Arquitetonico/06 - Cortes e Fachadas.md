[Voltar ao módulo](./README.md)

# Aula 6: Cortes e fachadas

*Pergunta que esta aula responde: como o projeto informa as alturas que a planta baixa não mostra, e como se mostra a "cara" externa da casa com medidas confiáveis?*

## O problema: a planta baixa é cega para a altura

A planta baixa (aula 5) revela a organização horizontal. Ela não diz quanto mede o pé-direito, se há laje ou forro, a que altura fica a janela, como é o telhado, qual a diferença de nível entre o piso e a rua. Essas informações são **verticais**, e dois desenhos as carregam:

- O **corte**, que abre a casa por um plano vertical e mostra o **interior em altura**.
- A **fachada**, que mostra cada **lado externo** de frente e em altura.

Ambos são projeções ortogonais (aula 2): o corte com plano secante vertical, a fachada sem plano secante, apenas a vista de cada lado.

## Corte

### Definição e mecanismo

A NBR 6492:2021 define corte como a representação gráfica realizada a partir de um **plano secante vertical** que divide o edifício em duas partes, **no sentido longitudinal ou no transversal**. Convenção: o corte **transversal** atravessa a menor dimensão da edificação, o **longitudinal**, a maior (é o que a definição da norma dá a entender, com os dois sentidos; a atribuição de "menor" e "maior" é a prática usual).

Procedimento (o mesmo da aula 2, agora vertical):

1. Escolhe-se onde passa o plano, e marca-se na planta baixa a linha do corte com letras nas pontas (por exemplo, "A-A") e o sentido do olhar (aula 4).
2. Retira-se, mentalmente, o pedaço da casa que está entre o plano e o observador.
3. Projeta-se ortogonalmente a face exposta, mais tudo o que se vê atrás dela.

### Onde escolher o plano

A norma (4.1.2) orienta que os cortes sejam **dispostos de forma que o desenho mostre o máximo possível de detalhes construtivos**. Ela admite **deslocar o plano** onde necessário, desde que início e fim do deslocamento sejam precisamente assinalados, e que se marque em cada corte transversal os longitudinais e vice-versa, e também nas fachadas. Na prática, escolhe-se o plano para passar por:

- **Escadas** (mostram a altura de subida, o número de degraus e o pé-direito duplo se houver).
- **Áreas molhadas** (banheiro, cozinha), onde se define rebaixo de piso, forro e tubulações.
- **Trechos com alturas ou coberturas diferentes** (sala com pé-direito duplo, varanda com laje mais baixa).
- **Encontros com o terreno inclinado**, para mostrar como a casa se relaciona com o solo.
- **Janelas e portas representativas**, para mostrar peitoril e altura de vão.

### O que o corte mostra (e como se desenha)

| Elemento | Como aparece | Comentário |
|---|---|---|
| **Piso, lajes, paredes, vigas cortadas** | Contorno em linha grossa/extralarga, com ou sem hachura | O que o plano atravessou (aula 4) |
| **Cobertura cortada** (laje, telhado, estrutura do telhado) | Idem, com indicação da **inclinação** (a norma exige "cobertura com indicação da respectiva inclinação") | Inclinação em % ou em graus, com seta no sentido de escoamento da água |
| **Terreno / solo** | Linha grossa do perfil do terreno, com hachura de terra | A norma pede o **relevo construído e a projeção da topografia natural** (linha da situação original) |
| **Elementos vistos além do plano** | Linha mais fina | Paredes internas do fundo, portas, janelas, armários, escadas atrás |
| **Elementos acima ou abaixo, mas fora do plano** | Tracejada (escondido) quando necessário | Vigas escondidas, por exemplo |
| **Eixos do projeto** | Traço longo e ponto | A norma pede eixos no corte |
| **Cotas verticais** | Linhas de cota horizontais, números em altura | A norma: **no corte, marcar somente cotas verticais** |
| **Cotas de nível** | Símbolo com valor (N.A. e N.O., aula 3) | Alturas de pisos, lajes, cumeeira |
| **Nome dos ambientes** | Texto | Identificação dos ambientes representados |

### Termos de altura (definições que aparecem em qualquer corte)

- **Pé-direito**: altura entre o piso acabado e o teto acabado de um ambiente. Mínimos de pé-direito são fixados por códigos de obras municipais e variam entre cidades (módulo 6); valores em torno de 2,50 m a 2,80 m são usuais em residências, mas confira a lei local, pois não confirmei um valor único para todo o Brasil.
- **Laje**: placa horizontal (geralmente de concreto) que forma piso ou cobertura entre andares. A espessura é um dado do projeto estrutural (módulo 4).
- **Viga**: barra horizontal que apoia lajes e transmite carga aos pilares.
- **Verga**: viga pequena sobre a abertura de uma porta ou janela, que sustenta a alvenaria acima dela. Contraverga é o equivalente sob a janela.
- **Peitoril**: parte de baixo do vão de uma janela; a altura do peitoril é a distância do piso a ele.
- **Cumeeira**: linha mais alta de um telhado inclinado, no encontro de duas águas.
- **Beiral**: parte do telhado que avança além da parede.
- **Platibanda**: parede que cobre o telhado ou a laje, formando um "muro" acima do último piso.

### Exemplo resolvido: lendo alturas de um corte

Considere um corte transversal de uma casa térrea, com estes dados de exemplo (valores ilustrativos):

- Nível do piso acabado da sala: **+0,00** (referência).
- Terreno natural na entrada: **-0,30** (a casa está 30 cm acima da rua).
- Pé-direito interno: **2,70 m**, portanto forro/laje de teto a **+2,70**.
- Laje de cobertura com 0,12 m: face superior a **+2,82**.
- Cumeeira do telhado a **+4,20**.
- Janela da sala: peitoril a **+1,10**, altura 1,20, portanto topo do vão a **+2,30**.
- Porta: altura 2,10, topo a **+2,10**.

Perguntas que o corte responde:

1. Distância vertical entre o piso interno e a rua? 0,30 m (dois degraus de 15 cm).
2. Quanto de "espaço morto" entre o teto e o topo da janela? 2,70 - 2,30 = 0,40 m para viga/verga e acabamento.
3. Altura total da casa medida do piso à cumeeira? 4,20 m. Do terreno natural (-0,30) até a cumeeira: 4,50 m (esse número importa para limites de altura da lei local, módulo 6).
4. Inclinação do telhado? Inclinação em porcentagem = altura / distância horizontal x 100. Se o telhado parte de +2,82 (na parede) e sobe até a cumeeira a +4,20, a altura é 1,38 m; se a distância horizontal da parede até a cumeeira é 3,00 m, a inclinação é 1,38 / 3,00 = 0,46, ou 46% (cerca de 25 graus). No desenho, esse valor vem escrito com a seta de escoamento (A.4.5 da norma).

Repare que todo esse raciocínio usou só **cotas verticais** e níveis, como a norma pede para cortes.

## Fachada e elevação

### Definição e mecanismo

- **Fachada**: representação gráfica em **projeção vertical ortogonal de cada um dos lados planos externos** de uma edificação (NBR 6492:2021, 3.11).
- **Elevação**: projeção vertical ortogonal de **planos internos ou elementos** da edificação (3.8). É como o desenho de uma parede interna de cozinha com armários, ou de um banheiro com revestimentos, que a norma chama de "elevações que servem para complementar as informações que não foram contempladas pelos cortes e plantas".

A norma recomenda que **todas as fachadas sejam representadas pelo projeto**. Numa casa com quatro lados, são quatro fachadas.

Cada fachada é a vista da casa como se você estivesse parado diante daquele lado, olhando perpendicularmente e sem perspectiva. É por isso que paredes recuadas e avançadas aparecem no mesmo tamanho na fachada (a profundidade some, aula 2), e por isso que a planta baixa é necessária para ver o que está na frente e o que está atrás.

### Como as fachadas são nomeadas

A prática usual é uma de duas:

- **Pela posição em relação à rua**: fachada frontal (principal), posterior (fundos), lateral direita e lateral esquerda (vistas de quem olha a casa de frente).
- **Pela orientação solar**: fachada norte, sul, leste, oeste, o que combina bem com o módulo 2 (você sabe qual fachada pega o sol da tarde).

A norma orienta uma indicação gráfica das fachadas na planta (A.4.6), e permite marcar os cortes nas fachadas.

### O que a fachada mostra

Segundo a norma (5.4.2 d e 5.5.2 f), uma elevação deve conter **escala, vedos externos (paredes), esquadrias (portas e janelas), elementos estruturais quando aparentes, relevo, cotas de nível principais e cobertura quando aparente**. Na prática:

| Elemento | Como aparece |
|---|---|
| **Contorno da edificação** | Linha grossa (largura conforme convenção da prancha) |
| **Linha do terreno ("linha de terra")** | Linha mais grossa na base, indicando o nível do solo, com o perfil do terreno se ele for inclinado |
| **Esquadrias** | Contornos com divisões (folhas, montantes, bandeiras), linha estreita; vidro às vezes com linhas diagonais finas |
| **Telhado** | Vista da cobertura: caimento, beiral, calhas, rufos, platibandas, com linhas dos telhados |
| **Materiais e acabamentos** | Hachura ou textura leve (tijolo aparente, madeira), e **textos de chamada** (linha de chamada a 45º, aula 4) especificando material e cor |
| **Cotas** | Cotas de nível (altura do piso, do peitoril, da cumeeira); poucas cotas horizontais, porque essas vão para a planta |
| **Elementos de fundo** | Vizinhos ou muros, quando relevantes |
| **Título e escala** | "Fachada frontal, escala 1:50" |

Como é a única peça que mostra a casa como ela será vista, a fachada é o desenho mais próximo de uma "imagem", e por isso é também o mais **usado na aprovação, na aparência e no diálogo com o cliente**. Em apresentações, ganha cor, sombra e vegetação, o que a Sienge chama de "fachada humanizada", versus a fachada técnica em preto e branco.

## Como corte e fachada se conferem entre si

Você aprendeu (aula 2) que medidas repetidas em vistas diferentes devem coincidir. Regras práticas de conferência:

| Medida | Deve coincidir entre |
|---|---|
| Altura da cumeeira | Corte e fachadas |
| Peitoril e altura de janelas | Corte e fachada (e quadro de esquadrias) |
| Nível do piso e do terreno | Corte, fachada e implantação |
| Largura total | Planta baixa e fachadas |
| Posição de portas e janelas | Planta baixa (horizontal) e fachada (mesma posição horizontal) |

Uma janela de 1,20 m de altura numa fachada e outra de 1,50 m no corte é um erro de projeto.

## Resumo

- A planta baixa não informa altura; o corte (plano secante vertical) mostra interior e alturas, e a fachada (projeção vertical de cada lado externo) mostra a aparência externa.
- Nos cortes a norma pede: máximo de detalhes construtivos, possibilidade de deslocar o plano (marcando início e fim), cobertura com inclinação, cotas verticais, eixos, relevo construído e projeção da topografia natural.
- Cortes transversais e longitudinais se referenciam entre si; a marcação do corte na planta traz letra e sentido do olhar.
- Fachada: recomenda-se representar todas; mostra vedos externos, esquadrias, estrutura aparente, cobertura, relevo e cotas de nível principais. Elevação (interna) complementa o que cortes e plantas não cobrem.
- Termos de altura a dominar: pé-direito, laje, viga, verga, peitoril, cumeeira, beiral, platibanda.
- Medidas repetidas em corte, fachada e planta devem coincidir; é a conferência básica do projeto.

## Para aprofundar

- [ ] [Como desenhar cortes em desenho arquitetônico?](https://www.youtube.com/watch?v=2uIA0fnF8nM) (Markoni Heringer): explica o corte como plano vertical imaginário, o ponto que mais confunde iniciantes. Título e canal confirmados; conteúdo não assistido.
- [ ] [Tipos de plantas e desenhos que compõe um projeto arquitetônico](https://sienge.com.br/blog/tipos-de-plantas-e-desenhos/) (Sienge, artigo): traz imagens de exemplo de cortes e de fachada técnica e humanizada.

[Próxima aula: Cobertura, situação, locação, detalhes e pranchas](./07%20-%20Cobertura%20Situacao%20Locacao%20Detalhes%20e%20Pranchas.md)
