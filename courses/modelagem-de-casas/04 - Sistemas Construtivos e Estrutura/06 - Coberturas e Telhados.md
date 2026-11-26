[Voltar ao módulo](./README.md)

# Aula 6: Coberturas e telhados

*Pergunta que esta aula responde: por que o telhado tem a forma, a inclinação e as peças que tem, e como a água, o vento e o peso condicionam cada decisão?*

> **Aviso.** A estrutura do telhado (dimensão de terças, tesouras, fixações) e a impermeabilização de lajes são calculadas e especificadas por profissional habilitado. Telhado mal fixado voa com o vento, e telhado mal projetado desaba. Os números desta aula são ordens de grandeza para compatibilizar o modelo 3D. Para a inclinação de uma telha real, vale sempre a ficha técnica do fabricante.

## Por que o telhado existe

A cobertura tem uma missão principal: **tirar a água da chuva da casa** antes que ela entre. Todo o resto (forma, inclinação, peças, calhas) é consequência dessa missão, mais duas ameaças: **o vento** (que suga e arranca) e **o sol** (que aquece e degrada). E uma quarta função, ligada ao módulo 2: **proteger as paredes** da chuva e do sol por meio do beiral, e regular o calor que entra pelo teto.

### Por que a inclinação existe

A água escorre por gravidade. Quanto **mais inclinado** o telhado, mais rápido a água sai, e menos chance tem de **entrar** por baixo das telhas. Existem três formas da água entrar em um telhado:

1. **Pelas emendas** entre telhas, empurrada por vento de lado, ou por **capilaridade** (a água sobe por frestas estreitas, como num pano encostado na água).
2. **Por acúmulo**: se a água escorre devagar e a chuva é forte, o nível sobe e passa por cima do trespasse (a parte em que uma telha cobre a outra).
3. **Por vento**: gotas empurradas para cima do trespasse.

Cada tipo de telha tem um **trespasse** e uma **geometria** (ondas, encaixes, vedações) que determinam a **inclinação mínima** abaixo da qual a água entra. Telha com muitos encaixes e vedação (metálica de perfil trapezoidal com fixação e vedante) tolera pouca inclinação. Telha cerâmica, com trespasse simples e frestas, exige mais.

### Como se mede a inclinação

Duas formas, você vai ver as duas em projetos e softwares:

- **Percentual**: `inclinação (%) = altura / distância horizontal x 100`. A inclinação de 30% quer dizer que a cada 1 m na horizontal o telhado sobe 30 cm.
- **Graus**: ângulo com a horizontal. A conversão é `ângulo = arco-tangente (altura / distância)`. Alguns valores: 10% equivale a 5,7 graus, 30% a 16,7 graus, 100% a 45 graus.

Exemplo de cálculo de altura de cumeeira, do tipo que você fará no modelo: casa com 8 m de largura e telhado de duas águas com inclinação de 30%. A cumeeira fica no meio, a 4 m de cada lado. **Altura da cumeeira acima do topo da parede** = `4 m x 30% = 1,20 m`. Com 35%: 1,40 m. A altura muda o visual e o volume sob o telhado.

### Inclinações usuais por tipo de telha

Valores de **referência**, reunidos de fontes de fabricantes e de projeto (as cifras variam entre fontes e entre modelos de telha, então sempre confirme na ficha técnica da telha escolhida):

| Telha | Inclinação mínima usual | Observação |
|---|---|---|
| Cerâmica (colonial, romana, portuguesa) | cerca de 30% | A francesa costuma pedir um pouco mais (fontes citam faixa de 32% a 40%) |
| Concreto | cerca de 30% | Comparável à cerâmica, consulte o fabricante |
| Fibrocimento ondulada | cerca de 10% a 15% | Fontes divergem, vão de 9% a 15% |
| Metálica trapezoidal ou de aço zincado | cerca de 5% a 10% | Depende do trespasse, da fixação e do vedante. Sanduíche termoacústica tolera cerca de 5% |
| Shingle (telha asfáltica) | em geral acima de 15% a 20%, mas não confirmado | Sobre base contínua (OSB ou madeirite). Confira a especificação |

Duas observações importantes: primeiro, **a inclinação máxima também existe** (telha deslizando se muito íngreme sem fixação adequada), e segundo, **a norma de desempenho e o fabricante prevalecem sobre qualquer tabela**. Nota: as antigas telhas de fibrocimento com amianto (crisotila) foram banidas no Brasil (decisão do STF, 2017). Fibrocimento vendido hoje usa fibras sintéticas.

## As formas de telhado

Cada forma é uma combinação de **águas** (planos inclinados). Termos que você precisa dominar:

- **Água** (ou vertente): cada plano inclinado.
- **Cumeeira**: linha horizontal mais alta, onde duas águas se encontram.
- **Espigão**: linha inclinada em que duas águas se encontram formando um ângulo **saliente** (para fora), como a quina de uma pirâmide.
- **Rincão** (ou água-furtada): linha inclinada em que duas águas se encontram formando um ângulo **reentrante** (para dentro), onde a água se junta. É ponto crítico de infiltração e leva calha ou rufo.
- **Oitão**: parede lateral triangular que sobe até a cumeeira, sob um telhado de duas águas.
- **Tacaniça**: água triangular na ponta de um telhado de quatro águas.
- **Beiral**: parte do telhado que **passa para fora da parede**.
- **Platibanda**: parede baixa que sobe além do telhado e o esconde (com calha interna).

| Tipo | Descrição | Comentário |
|---|---|---|
| **Uma água** (meia-água ou shed) | Um único plano | Simples e barato, boa para anexos e para casas contemporâneas. A água cai de um lado só, calha nesse lado |
| **Duas águas** | Dois planos com cumeeira, oitões laterais | Clássico, simples, econômico |
| **Quatro águas** | Quatro planos, cumeeira e espigões | Beirais em todo o perímetro, protege todas as paredes, mais peças e mão de obra |
| **Telhado embutido** (oculto pela platibanda) | Água vai para calha interna | Visual contemporâneo, mas exige impermeabilização e calha bem detalhados (mais risco de vazamento) |
| **Borboleta** | Dois planos inclinados para dentro (formato de V) | Calha central, visual moderno, ponto crítico de água |
| **Laje plana** (cobertura plana) | Laje de concreto com leve caimento, impermeabilizada | Pode receber terraço ou telhado verde. Depende totalmente da impermeabilização |

## Estrutura do telhado

Sob a telha existe um esqueleto que passa a carga para as paredes ou vigas. Peças em ordem de cima para baixo, as que você precisa reconhecer:

1. **Telha**: cobertura de fechamento.
2. **Ripa**: pequena peça horizontal (por exemplo, da ordem de 1,5 x 5 cm em madeira) onde a telha cerâmica se apoia. O espaçamento entre ripas depende do tamanho da telha.
3. **Caibro**: peça inclinada, na direção da água (por exemplo, 5 x 6 cm), com espaçamento de cerca de 50 cm, sobre a qual se pregam as ripas.
4. **Terça**: peça **horizontal** mais robusta (por exemplo, 6 x 12 cm a 6 x 16 cm), que **sustenta os caibros**.
5. **Estrutura principal**, que leva a carga das terças até as paredes: **tesoura** (treliça de madeira ou aço, formada por triângulos, com banzo superior inclinado, banzo inferior horizontal e diagonais e montantes) ou **pontaletes** (pequenos pilares sobre a laje ou sobre paredes) sustentando as terças. Em tesoura, o esforço é só **tração e compressão nas barras** (aula 1: triângulo não deforma).
6. **Frechal**: peça horizontal, contínua, sobre as paredes de apoio, que recebe e distribui as cargas da tesoura ou dos caibros.

As dimensões acima são valores usuais e servem só para você reconhecer proporção. As dimensões reais dependem da madeira (espécie, classe de resistência), do vão entre apoios (terças de vão em torno de 3 m são comuns) e da carga, e são definidas por projeto.

**Madeira x estrutura metálica**: madeira é tradicional, barata e fácil de trabalhar, mas exige tratamento contra cupim e umidade e madeira de boa origem. **Estrutura metálica** (perfis de aço, treliças, terças em perfil "U enrijecido") vence vãos maiores, é leve, não sofre com cupim e é industrializada, mas custa mais em casa pequena e exige proteção contra corrosão. Coberturas com telha metálica ou de fibrocimento aparecem muito com estrutura metálica leve, cerâmica muito com madeira.

**Peso do telhado**: a telha cerâmica cheia de água de chuva absorvida pesa por volta de 0,5 a 0,7 kN/m² ou mais (valor de ordem de grandeza, conferir a norma e o fabricante) e por isso a estrutura de madeira precisa ser mais robusta que a de uma telha metálica leve (da ordem de 0,05 a 0,15 kN/m²). Isso volta na aula 7.

### Vento e fixação

Da aula 1: o vento **suga** o telhado. Por isso:
- Telhas cerâmicas nas bordas e cumeeiras ganham **amarração** (arame, grampo ou argamassa).
- Telha metálica e de fibrocimento exigem **fixação por parafuso ou gancho** com vedação.
- **Beirais muito longos** aumentam a sucção e o esforço no encontro com a estrutura.
- A estrutura do telhado precisa ser **amarrada às paredes** (por meio do frechal fixado com ferragem na cinta ou na viga), para que o telhado inteiro não suba como uma tampa.

## Água que sai: calhas, rufos, algerozes

- **Calha**: canal que recebe a água do beiral e conduz até o **condutor** (tubo vertical de descida, "tubo de queda"), que leva a água para a rede de drenagem ou o jardim. Precisa de **caimento** (declividade) e dimensão suficiente para a vazão de chuva. Calha subdimensionada transborda.
- **Rufo**: chapa fina (metal) que **veda o encontro** do telhado com uma parede, na altura de uma platibanda ou de um oitão, impedindo a água de entrar por trás. **Contrarrufo** é a peça complementar embutida na parede.
- **Algeroz** e calha de encontro: calha interna no rincão.
- **Cumeeira e espigão** recebem **telhas de cumeeira** ou peças específicas.

A calha e o rufo fazem parte do **projeto de águas pluviais**, tema de instalações (módulo 5). Aqui interessa: **onde fica a calha define a queda da água e o desenho do beiral**.

## Impermeabilização

Onde **não há telha inclinada**, quem impede a água de entrar é a **impermeabilização**: laje descoberta, cobertura plana, terraços, varandas, calhas embutidas, piscinas, reservatórios, banheiros (áreas molhadas). Ela é feita por **mantas asfálticas**, **membranas** líquidas (acrílicas, poliuretano, asfálticas) ou argamassas poliméricas, aplicadas sobre uma **superfície regularizada com caimento** (referência usual: mínimo de 1% de declividade na direção do ralo). As normas de projeto e execução são da série **NBR 9575** (projeto) e **NBR 9574** (execução).

**Ponto-chave**: laje plana de concreto **não é impermeável por si só**, ela fissura e absorve água. Todas as lajes descobertas precisam de impermeabilização, proteção mecânica sobre ela e ralos. Os pontos mais críticos são **rodapés, ralos, juntas e encontros**. Recomenda-se **teste de estanqueidade** (encher com água por alguns dias) antes de cobrir com revestimento.

Sob a telha existe também a **subcobertura** (manta refletiva, de alumínio ou plástica, sob a telha), que reduz calor e barra respingos, e a **ventilação de ático** (espaço entre forro e telhado com aberturas para sair o ar quente), ligada a conforto (módulo 2).

## Como isso aparece na modelagem

- **A inclinação é parâmetro que você digita** (percentual ou graus). Escolha a telha primeiro, depois a inclinação (30% para cerâmica, por exemplo).
- **Beiral**: além da estética, é decisão de conforto e proteção: valores de projeto residencial comuns ficam em torno de **50 cm a 100 cm**, a depender de clima e sol. Beirais grandes precisam de estrutura em balanço (caibros que passam da parede).
- **Altura da cumeeira**: calculada como acima. Se a cumeeira ficar alta demais, o telhado domina a fachada.
- **Espessura visível**: telhado tem espessura (telha, caibro, ripa, madeiramento), então o beiral não é uma placa fina, é um "sanduíche" de uns 20 a 30 cm de altura. Em BIM (módulo 11) o telhado tem camadas.
- **Calha e rufo**: em modelos de hobby costumam ser omitidos, mas ajudam o realismo.

## Resumo

- O telhado existe para **tirar água**; a inclinação é o que garante a saída, e depende do **tipo de telha** (referência: cerâmica cerca de 30%, fibrocimento e metálica bem menos; confirmar sempre na ficha técnica).
- Inclinação em **%** (altura sobre distância horizontal) ou graus. Altura da cumeeira = meia largura x inclinação.
- Formas: uma, duas ou quatro águas, embutido com platibanda, borboleta, laje plana. Termos: cumeeira, espigão, rincão, oitão, beiral, platibanda.
- Estrutura: telha, ripa, caibro, terça, tesoura ou pontalete, frechal, sobre paredes ou vigas, em madeira ou aço. Triângulo (tesoura) é indeformável.
- Vento suga: fixação e amarração do telhado às paredes são obrigatórias. Beirais longos sofrem mais.
- Calhas, rufos e condutores organizam a saída da água; **impermeabilização** (NBR 9575 e 9574) protege lajes e áreas molhadas, e laje de concreto não é impermeável sozinha.
- Estrutura do telhado e impermeabilização são projeto de profissional habilitado.

## Para aprofundar

- [ ] [QUAL A DIFERENÇA ENTRE TERÇA, CAIBRO E RIPA? AS PARTES DO TELHADO](https://www.youtube.com/watch?v=tr71cQ_yqs8) (Flashcards Arquitetura): mostra as peças da estrutura do telhado (título e canal confirmados, conteúdo não assistido).
- [ ] [Madeiramento de telhado: Terças, Caibros e Ripas | Revit na Prática](https://www.youtube.com/watch?v=DRJZZ-hsUdQ) (Ana Girardi): ponte para a modelagem em BIM, para ver depois do módulo 11 (constava na curadoria anterior deste módulo, título e canal não reverificados nesta reescrita).

[Próxima aula: A estrutura na planta e as decisões de modelagem](./07%20-%20Estrutura%20na%20Planta%20e%20Decisoes%20de%20Modelagem.md)
