[Voltar ao módulo](./README.md)

# Aula 1: Forças, cargas e o caminho até o chão

*Pergunta que esta aula responde: o que uma casa precisa suportar, e por qual caminho cada peso chega ao solo sem que nada quebre?*

> **Aviso obrigatório do módulo.** Projeto estrutural e projeto de fundação são responsabilidade de engenheiro civil habilitado, que assina a **ART** (Anotação de Responsabilidade Técnica, criada pela Lei 6.496/1977). Este módulo ensina a **entender e conversar** com quem projeta e a **modelar com coerência**. Os números que aparecem aqui servem para compreender ordens de grandeza e compatibilizar um modelo 3D. Não servem para dimensionar nem construir nada. Uma estrutura dimensionada por leigo pode cair, e o risco é de vida.

## Por que isso existe

Nos módulos anteriores você decidiu o que a casa contém (módulo 1), como ela recebe sol e vento (módulo 2) e como se desenha (módulo 3). Falta responder algo que o desenho não mostra: **o que impede tudo aquilo de desabar**. Cada objeto tem peso, a gravidade puxa tudo para baixo, e o chão é o único lugar que pode "segurar". A estrutura é o conjunto de peças que recebe esses pesos e os conduz até o chão. Se você entende esse trajeto, entende por que pilares ficam alinhados, por que vigas existem, por que uma parede pode sumir numa reforma e outra não.

## Forças, cargas e a regra do equilíbrio

**Força** é o que empurra ou puxa algo. Sua unidade no Sistema Internacional é o newton (N). Na engenharia de edificações usa-se o **quilonewton (kN)**: 1 kN = 1.000 N, e equivale aproximadamente ao peso de 100 kg (100 kgf). Uma pessoa de 70 kg pesa cerca de 0,7 kN.

**Carga** é uma força que atua na estrutura. Pode ser:

- **Concentrada**: aplicada num ponto (o pilar apoiado sobre uma viga, uma banheira cheia num ponto).
- **Distribuída em linha** (kN/m): uma parede sobre uma viga.
- **Distribuída em área** (kN/m²): o piso, a laje, a telha.

A regra que governa tudo é o **equilíbrio**: para a casa ficar parada, a soma das forças para baixo tem que ser igual à soma das forças para cima que o solo devolve. O solo empurra a casa de volta (**reação de apoio**) com a mesma intensidade com que ela o pressiona. Se o solo não consegue devolver essa força, ele cede e a casa afunda ou inclina. É por isso que a próxima aula é sobre solo.

## Que cargas atuam numa casa

A norma brasileira que define as cargas de cálculo de edificações é a **ABNT NBR 6120** (revisão de 2019). Ela separa três famílias:

| Tipo | O que é | Exemplos |
|---|---|---|
| **Permanentes** | Estão lá o tempo todo, com valor praticamente fixo | **Peso próprio** da estrutura (concreto, aço), paredes, contrapiso, revestimentos, telhado |
| **Variáveis** (também chamadas de acidentais) | Variam no tempo ou de lugar | Pessoas, móveis, água em reservatório, uso do piso, manutenção do telhado, **vento** |
| **Excepcionais** | Raras e violentas | Explosão, impacto de veículo, sismo em regiões onde conta |

**Peso próprio** é o peso do próprio elemento estrutural. Cálculo: volume x peso específico. O concreto armado pesa cerca de **25 kN/m³** (2.500 kgf por metro cúbico, valor da NBR 6120). Uma laje maciça de 10 cm (0,10 m) de espessura pesa, por metro quadrado, `0,10 m x 25 kN/m³ = 2,5 kN/m²`, ou seja, 250 kg em cada metro quadrado só de concreto.

**Carga acidental (sobrecarga de uso)** é o que a norma manda considerar pela ocupação do ambiente, para representar pessoas e mobília. Valores da NBR 6120:2019 para residências (confirmados em fontes técnicas que reproduzem a Tabela 10 da norma, mas confira sempre a edição vigente com o engenheiro):

- Dormitórios, salas, copas, cozinhas e banheiros: **1,5 kN/m²** (cerca de 150 kg/m²).
- Áreas de serviço e lavanderias: **2,0 kN/m²**.
- Escadas e corredores: valores maiores, da ordem de 2,5 a 3,0 kN/m² conforme o caso.

Repare que a carga de uso é pequena perto do peso da própria casa. Numa residência, a maior parte do que a estrutura carrega é ela mesma, as paredes e o telhado.

**Vento** age de duas maneiras que importam para a modelagem:

1. **Empurra** a fachada que está de frente para ele (pressão).
2. **Suga** o telhado e as faces laterais (sucção). Um telhado leve pode ser arrancado pelo vento como uma asa de avião que levanta. A NBR 6123 trata do vento e define a **velocidade básica**, uma rajada de 3 segundos que se espera exceder em média uma vez a cada 50 anos, a 10 m de altura em terreno aberto. No Brasil ela varia por região, aproximadamente de 30 a 50 m/s (cerca de 108 a 180 km/h). Beirais grandes e telhados leves sofrem mais sucção, e por isso a fixação da estrutura do telhado importa (aula 6).

Um exemplo numérico ajuda a fixar. Um quarto de 3 m x 4 m tem 12 m². Laje maciça de 10 cm: 2,5 kN/m². Contrapiso e piso cerâmico: cerca de 1,0 kN/m² (ordem de grandeza). Carga de uso: 1,5 kN/m². Total: `2,5 + 1,0 + 1,5 = 5,0 kN/m²`. Sobre os 12 m²: `5,0 x 12 = 60 kN`, cerca de 6 toneladas apoiadas em vigas e paredes só por esse quarto.

Na prática, o engenheiro multiplica as cargas por **coeficientes de segurança** (por exemplo, da ordem de 1,4 sobre as cargas) e reduz a resistência dos materiais também por coeficientes. A ideia é que a estrutura suporte bem mais do que o esperado. Você não precisa saber aplicar isso, só saber que existe uma margem deliberada.

## Os esforços: o que as forças fazem dentro da peça

Uma carga aplicada numa peça cria **esforços internos**. São cinco, e todos os elementos da casa sofrem uma combinação deles.

| Esforço | O que acontece | Exemplo na casa |
|---|---|---|
| **Compressão** | A peça é comprimida, tenta encurtar | Pilar, parede portante, sapata no solo |
| **Tração** | A peça é esticada, tenta alongar | Tirante de tesoura, barra de aço numa viga, tirantes de uma escada suspensa |
| **Cisalhamento** (ou cortante) | Duas partes vizinhas tentam deslizar uma sobre a outra, como uma tesoura corta papel | Perto dos apoios de uma viga, parafuso entre duas peças de madeira |
| **Flexão** | A peça curva. Um lado é comprimido e o outro tracionado | Viga, laje, terça do telhado |
| **Torção** | A peça é torcida como pano de chão | Viga que recebe uma marquise ou sacada em balanço |

### Flexão, o esforço mais importante para entender

Apoie uma régua de plástico em dois livros e coloque um peso no meio. A régua curva. Olhe o que acontece: a face de cima **encurta** (compressão), a de baixo **estica** (tração), e no meio existe uma linha que não muda de comprimento (a **linha neutra**). Quanto mais longe da linha neutra, maior o esforço. Por isso vigas são **altas e estreitas**, não largas e baixas: a altura afasta as fibras extremas da linha neutra e aumenta muito a resistência. Uma régua colocada "em pé" (de ponta) é muito mais rígida do que deitada, sem gastar mais material.

Para uma viga apoiada nas duas pontas, com carga uniforme `q` (kN/m) e vão `L` (m), os valores máximos são (fórmulas clássicas da resistência dos materiais):

- Momento fletor máximo (no meio): `M = q x L² / 8`
- Cortante máximo (junto aos apoios): `V = q x L / 2`

Exemplo: `q = 10 kN/m`, `L = 4 m`. `M = 10 x 16 / 8 = 20 kN.m` e `V = 10 x 4 / 2 = 20 kN`. Note que `L` está ao quadrado no momento: **dobrar o vão quadruplica o momento**. Essa é a razão física pela qual vão grande custa caro (viga mais alta, mais aço), e por que planta que respeita vãos moderados fica mais barata.

O que você precisa guardar: **compressão no topo e tração embaixo** (na viga apoiada). Isso decide onde vai o aço no concreto (aula 3).

### Estabilidade: além de aguentar carga

Uma peça pode falhar sem o material romper:

- **Flambagem**: um pilar muito esbelto (fino e alto) não esmaga, ele **arqueia de lado**, como uma régua comprimida pelas pontas. Por isso pilar tem seção mínima em função da altura.
- **Recalque**: o solo cede, e se cede de forma desigual (**recalque diferencial**) a casa racha.
- **Tombamento e escorregamento**: o vento tenta virar ou empurrar a casa. É preciso peso e fixação suficientes.
- **Estabilidade global**: o conjunto precisa resistir a forças horizontais (vento) sem deformar demais. Isso vem de **contraventamento**: pórticos rígidos (pilares e vigas ligados rigidamente), paredes portantes, ou diagonais em aço ou madeira (triângulos são a forma geométrica indeformável, base da tesoura do telhado).

## O caminho das cargas

Regra geral: **a carga desce pelo caminho mais rígido**, do elemento menos robusto para o mais robusto, até encontrar o solo. Cada peça apoia na seguinte e, em ordem, elas ficam maiores e mais fortes.

Numa casa de concreto armado, o caminho é:

1. **Telhado**: telha, ripa, caibro, terça, tesoura ou pontalete. Peso da telha e chuva descem para a estrutura de madeira/aço, que descarrega em **vigas ou paredes**.
2. **Laje**: recebe peso do piso, das pessoas, dos móveis e das paredes que estão sobre ela. Descarrega nas **vigas** que a contornam.
3. **Vigas**: recebem as lajes e as paredes que estão sobre elas e descarregam nos **pilares** (as vigas vencem os vãos, os pilares só recebem nas extremidades).
4. **Pilares**: transmitem tudo para baixo em compressão até a fundação.
5. **Fundação** (sapata, estaca, radier): espalha a carga numa área maior do solo.
6. **Solo**: devolve a reação.

Um exemplo numérico de repartição: uma laje quadrada de 4 m x 4 m com 5 kN/m² tem carga total de `5 x 16 = 80 kN`. Apoiada nas quatro vigas, cada viga recebe aproximadamente 20 kN (o desenho real de distribuição é trapezoidal, mas a ordem de grandeza é essa). Cada viga tem 4 m, então recebe `20 / 4 = 5 kN/m` da laje, além do peso próprio e da parede acima. Essa soma vira a carga `q` da fórmula anterior. As vigas descarregam nos pilares das quatro pontas. Se um pilar recebe metade de duas vigas vizinhas, junta a carga dos dois lados.

Numa casa de **alvenaria estrutural** o caminho é mais curto: laje, direto sobre as **paredes**, e as paredes descem em compressão até a fundação, que é contínua sob elas (aula 5). Em **steel frame** e **wood frame**, a laje ou piso apoia em **montantes** (as peças verticais da parede) que descem em compressão. A lógica é sempre a mesma, o que muda é quais peças fazem o papel.

### Duas regras que decorrem disso

1. **Continuidade vertical**: pilar e parede portante devem se sobrepor de piso a piso, do telhado até a fundação. Um pilar que "morre" no meio de uma viga, sem continuar embaixo, cria uma carga concentrada sobre a viga, que precisa ser bem mais forte (e a solução de cálculo mais cara). Esse é o motivo de a planta do pavimento superior conversar com a do térreo (aula 7).
2. **Mais carga, mais seção**: a peça mais baixa, que acumula tudo o que está acima, é a mais robusta. Pilares e fundações do térreo carregam o que o pavimento superior soma.

## Diferentes materiais, diferentes forças

Cada material se dá melhor num esforço:

- **Concreto**: excelente em compressão, fraco em tração (resiste a tração cerca de dez vezes menos que a compressão, ordem de grandeza clássica). Por isso ele precisa de aço (aula 3).
- **Aço**: forte em tração e compressão, mas fino demais para trabalhar sozinho sem flambar, e corrói.
- **Madeira**: boa em tração e em compressão ao longo das fibras, mais fraca em cisalhamento entre fibras. Muito leve.
- **Alvenaria (tijolo, bloco)**: boa em compressão, quase nula em tração. Uma parede resiste ao peso que desce, mas rompe se puxada de lado ou se recalcar o solo sob ela.

Esse é o motivo de pilares serem de concreto e vigas exigirem aço inferior, de a alvenaria fissurar quando o solo recalca, e de a madeira trabalhar bem em tesouras (só compressão e tração nas barras).

## Como isso aparece na modelagem

Ainda sem entrar em software: o que você precisa carregar desta aula para o modelo 3D é a **ordem** dos elementos (telhado sobre parede ou viga, laje sobre viga, viga sobre pilar, pilar sobre fundação) e que **cada peça tem um apoio**. Se ao modelar você perceber uma laje "flutuando" sem nada embaixo, ou um pilar com nada sob ele, o modelo está errado, mesmo que a imagem pareça boa.

## Resumo

- Cargas: **permanentes** (peso próprio, paredes, revestimentos), **variáveis** (uso, vento) e excepcionais. Na casa, o que domina é o peso da própria construção. Concreto armado: cerca de 25 kN/m³. Carga de uso residencial usual: 1,5 kN/m² (2,0 em áreas de serviço), segundo a NBR 6120:2019.
- Cinco esforços: compressão, tração, cisalhamento, flexão e torção. A flexão comprime um lado da peça e traciona o outro, por isso vigas são altas.
- Em viga apoiada com carga uniforme, `M = q x L² / 8`: dobrar o vão quadruplica o momento.
- O caminho das cargas: telhado, laje, viga, pilar, fundação, solo (ou laje, parede portante, fundação contínua). Nenhuma peça pode ficar sem apoio.
- Além de resistir, a estrutura precisa ser estável (flambagem, recalque, vento, contraventamento).
- O engenheiro com ART dimensiona e assina. Você entende, compatibiliza e conversa.

## Para aprofundar

- [ ] [#5 Esforços em Estruturas: Tração, compressão, cisalhamento, flexão e torção](https://www.youtube.com/watch?v=75ydRwiCBLI) (Eng. Pablo Saraiva, Estruturas): vídeo em português com o vocabulário dos esforços (título e canal confirmados, conteúdo não assistido). É o episódio 5 de uma série, então pode pressupor os anteriores.
- [ ] [Como a carga se distribui na estrutura: laje, viga, pilar (Aula 1)](https://www.youtube.com/watch?v=-r0Z6LUlEx0) (Filipi França, Engenharia Civil): o caminho das cargas de laje a pilar, tema central desta aula (título e canal confirmados, conteúdo não assistido).

[Próxima aula: Solo e fundações](./02%20-%20Solo%20e%20Fundacoes.md)
