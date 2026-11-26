[Voltar ao módulo](./README.md)

# Aula 3: Concreto armado, pilar, viga e laje

*Pergunta que esta aula responde: por que concreto e aço trabalham juntos, e que papel cada peça (pilar, viga, laje) cumpre no esqueleto da casa?*

> **Aviso.** Dimensionar concreto armado (tamanho das peças, quantidade e posição do aço) é atribuição de engenheiro habilitado, seguindo a **ABNT NBR 6118**, com ART. Esta aula explica a lógica para você entender o projeto estrutural e modelar de forma coerente. Nada aqui serve para calcular peça de obra.

## Por que o concreto precisa do aço

Da aula 1: o **concreto resiste bem à compressão e mal à tração** (na ordem de grandeza, resiste dez vezes menos a puxar do que a esmagar). O **aço resiste muito bem à tração**. Uma viga sofre os dois esforços ao mesmo tempo (compressão em cima, tração embaixo). Se fosse só concreto simples, romperia pela face de baixo ao primeiro carregamento relevante.

A solução é combinar: **concreto onde há compressão, aço onde há tração**. O aço é posicionado na região tracionada (embaixo, no meio do vão de uma viga apoiada), e o concreto envolve tudo.

Para essa combinação funcionar, três coisas precisam ser verdade, e são as que respondem ao "por que dá certo":

1. **Aderência**: o concreto endurecido gruda no aço (as barras têm nervuras que travam). Assim, quando o concreto tenta esticar, o aço estica junto, sem escorregar.
2. **Dilatação térmica parecida**: concreto e aço dilatam quase o mesmo com a temperatura (coeficiente da ordem de 10 milionésimos por grau, para os dois). Se dilatassem muito diferente, o calor romperia a ligação.
3. **Proteção do aço pelo concreto**: o concreto é alcalino (pH alto), o que cria uma película que protege o aço da corrosão, e o próprio concreto isola o aço do fogo e da umidade, desde que exista **cobrimento** suficiente (a camada de concreto entre a barra e a superfície, da ordem de 2 a 4 cm dependendo da peça e da agressividade do ambiente, definida na NBR 6118). Se o cobrimento é fino ou o concreto fissura, a água chega ao aço, ele enferruja, expande e estoura o concreto ao redor (o defeito familiar de "ferro aparente" em marquises velhas).
A esse conjunto chama-se **concreto armado**. (Concreto protendido usa aço tensionado previamente, é raro em casas comuns.)

### Os ingredientes

**Concreto**: mistura de cimento, água, areia (agregado miúdo) e brita (agregado graúdo). O cimento reage com a água (**hidratação**) e endurece. A resistência é medida em MPa (megapascal) e denominada **fck**: o "C25" (ou fck 25 MPa) é um concreto de resistência característica à compressão de 25 MPa aos 28 dias, muito comum em casas. **Cura** é o cuidado de manter o concreto úmido nos primeiros dias para a hidratação se completar. Concreto que seca cedo demais fissura e perde resistência.

**Aço**: no Brasil, barras de aço para concreto são identificadas por categorias como **CA-50** e **CA-60** (CA = concreto armado; o número é a resistência de escoamento em kgf/mm², ou seja, 50 e 60, correspondendo a 500 e 600 MPa). Barras são identificadas pelo diâmetro em milímetros (por exemplo, 8 mm, 10 mm, 12,5 mm). **Estribos** são anéis de barras finas que envolvem as barras longitudinais e resistem ao cisalhamento e "cintam" o pilar. **Formas** são os moldes (tradicionalmente de madeira) que dão o formato ao concreto fresco até endurecer.

## Pilar

**Pilar** é o elemento **vertical** que recebe cargas das vigas e conduz até a fundação, em **compressão**. Tem seção quadrada, retangular (o mais comum em casas, como 14 x 30 cm ou 19 x 19 cm) ou circular. Contém barras de aço verticais (a **armadura longitudinal**) e estribos.

Por que o pilar leva aço se trabalha em compressão? Porque o concreto sozinho é frágil, o pilar pode receber flexão devido a cargas excêntricas ou vento, e o aço ajuda a resistir a compressão também e a ligar o pilar às vigas (nas ligações há flexão). O estribo impede as barras verticais de flambar para os lados.

Regras de forma (que afetam o modelo): a NBR 6118 exige, em geral, que o menor lado do pilar não seja menor que **19 cm**, com uma exceção para 14 cm sob condições, com áreas mínimas e acréscimo de esforços (área não menor que 360 cm²). Por isso, quando você vê "pilar 14 x 30" em projeto de casa, é essa exceção. O engenheiro decide.

Onde ele aparece na planta: no encontro das paredes (cantos, cruzamentos) e onde há grandes vãos. Costuma ser **escondido dentro da parede** (largura do pilar igual à espessura da parede acabada) para não aparecer como um "pedaço" saindo.

## Viga

**Viga** é o elemento **horizontal** que recebe cargas de lajes e paredes e as leva aos pilares, trabalhando principalmente em **flexão** e **cisalhamento** (aula 1). Tem armadura longitudinal principal **embaixo** (para a tração no vão) e nas extremidades **em cima** (onde, sobre os apoios, o esforço se inverte), mais estribos que resistem ao cisalhamento e por isso ficam **mais juntos perto dos apoios**.

Em casas, as vigas têm normalmente a **mesma largura da parede** (por exemplo, 14 cm ou 19 cm) e escondem-se na parede, por isso não são vistas. A **altura** depende do vão: como a flexão cresce com o quadrado do vão, vigas de vãos maiores têm que ser mais altas. Uma regra de pré-dimensionamento usual: altura ≈ **vão / 10 a vão / 12** (aula 7). Exemplo: vão de 4 m dá altura de cerca de 33 a 40 cm. Uma viga assim fica sob a laje; ela aparece "descendo" do teto se não houver forro ou rebaixo.

Tipos usuais em casa:

- **Viga baldrame**: na fundação (aula 2).
- **Viga de piso ou de teto** (também chamada cinta ou viga de respaldo): no nível dos pisos ou tetos, recebe lajes e paredes superiores.
- **Verga** e **contraverga**: pequenas vigas sobre e sob as **aberturas** (portas e janelas) que desviam a carga da parede para os lados da abertura, senão o vão da porta viraria ponto de fissura. Aparecem em toda parede de alvenaria com aberturas.
- **Viga de cobertura**: sustenta terças ou pontaletes do telhado.
- **Viga de transição**: recebe um pilar do pavimento superior que não tem continuidade embaixo. Cara e evitável.

## Laje

**Laje** é a peça **plana e horizontal** que forma o piso ou o teto de um pavimento. Recebe as cargas de uso (pessoas, móveis, piso) e as transmite às **vigas** ou **paredes** que a contornam. Trabalha principalmente em **flexão** (como uma viga larga).

Em vez de olhar como uma peça só, pense assim: laje é uma "viga larga" apoiada em várias bordas. Se apoia em **duas bordas paralelas** (uma laje que vence só um vão), a carga vai em **uma direção** (laje **unidirecional**, ou armada em uma direção). Se apoia nas **quatro bordas** e é aproximadamente quadrada, a carga se divide nas **duas direções** (**bidirecional**, armada em cruz), e isso permite espessura menor. A regra usual é: se a razão entre o maior e o menor lado passa de 2, a laje trabalha praticamente numa direção só.

Detalhes sobre os tipos de laje (maciça, treliçada/pré-moldada, nervurada, painel) estão na aula 4.

## Como as peças se ligam

Pilares, vigas e lajes são moldados juntos (**monolíticos**), com as barras de aço atravessando as ligações. Isso forma um **pórtico**: uma moldura rígida que também resiste a esforços horizontais como o vento (contraventamento, aula 1). A sequência de obra: fundação, pilares, formas de vigas e lajes, armação, concretagem de vigas e lajes em conjunto, e assim por cima. A parede de vedação (aula 4) só é erguida depois, preenchendo o pórtico, sem função estrutural.

Por isso a **estrutura de concreto armado é chamada de "esqueleto"**: pilares e vigas carregam a casa, e as paredes são o preenchimento. Essa é a grande vantagem do sistema em relação à alvenaria estrutural: **você pode mover ou tirar uma parede de vedação sem derrubar a casa** (com projeto, claro, e conferindo que a parede não recebe carga concentrada). A liberdade de planta vem daí.

## Como isso aparece na modelagem

- Em CAD/SketchUp, pilares e vigas costumam ser desenhados como **volumes simples** (caixas) que **coincidem** com a parede. O erro comum de iniciante é desenhar a parede e o pilar com espessuras diferentes e criar "dentes" na parede.
- Em BIM (Revit, Archicad), pilar, viga e laje são **categorias** diferentes com parâmetros (seção, material, nível de referência). Vale o que a aula 7 diz sobre modelar a espessura com coerência.
- A **laje** pode ser modelada como piso (sem a estrutura) ou como um elemento espesso. Quando a laje aparece na fachada (marquise, balanço), a espessura visível importa.

## Resumo

- **Concreto** vai bem na compressão, mal na tração. **Aço** resolve a tração. Funcionam juntos por **aderência**, **dilatação térmica semelhante** e **proteção do aço pelo concreto** (por isso o cobrimento importa).
- **Pilar**: vertical, em compressão, leva a carga até a fundação. Lado mínimo em geral 19 cm (exceção de 14 cm com condições, NBR 6118).
- **Viga**: horizontal, trabalha em flexão e cisalhamento. Aço principal embaixo no vão. Altura cresce com o vão (vão/10 a vão/12 como referência de pré-dimensionamento). Vergas e contravergas protegem aberturas.
- **Laje**: piso ou teto plano, em flexão, apoia em vigas. Uma direção ou duas, conforme a proporção dos lados.
- Estrutura em **esqueleto** libera as paredes da função portante, o que dá liberdade de planta.
- Concreto armado é dimensionado por engenheiro com ART, segundo a NBR 6118.

## Para aprofundar

- [ ] [LAJES, VIGAS, PILARES e FUNDAÇÕES: ELEMENTOS ESTRUTURAIS em CONCRETO ARMADO](https://www.youtube.com/watch?v=ooCibpiRktM) (Facilitando a Engenharia): nomeia as peças que aparecem no modelo (título e canal confirmados, conteúdo não assistido).

[Próxima aula: Lajes e alvenaria de vedação](./04%20-%20Lajes%20e%20Alvenaria%20de%20Vedacao.md)
