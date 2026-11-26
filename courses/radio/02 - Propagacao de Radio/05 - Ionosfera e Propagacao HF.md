# Aula 5: A ionosfera e a propagação em HF

[Voltar ao módulo](./README.md)

*Pergunta que esta aula responde: por que uma onda de HF é devolvida à Terra pelo céu e uma de VHF escapa para o espaço, e como isso vira alcance, zona de silêncio e salto múltiplo?*

## Por que isso existe

Em linha de visada (Aula 3), o alcance máximo termina no horizonte. Mesmo assim, radioamadores falam com outros continentes com 100 W e uma antena de fio. O que "dobra" a onda de volta é a **ionosfera**, uma região da atmosfera alta em que o gás está parcialmente ionizado. Entender o mecanismo mostra por que só o HF é refletido e por que o resultado muda de dia para noite e ao longo do ciclo solar.

## O que é a ionosfera e por que existe

Entre aproximadamente 60 e 1.000 km de altura, a radiação ultravioleta e os raios X do Sol têm energia suficiente para arrancar elétrons de átomos e moléculas do ar (fotoionização), criando **elétrons livres** e íons positivos. Como o ar lá em cima é muito rarefeito, os elétrons demoram a se recombinar com os íons, então a nuvem de elétrons persiste, principalmente onde há radiação para renovar.

O que importa para o rádio é a **densidade de elétrons livres** `N` (elétrons por metro cúbico). Ela não é uniforme: forma camadas por causa de duas coisas concorrentes. Em altitudes maiores há mais radiação, mas pouco gás para ionizar; em altitudes menores há muito gás, mas a radiação já foi consumida na parte de cima. O compromisso produz picos de `N` em certas alturas.

## As camadas

Valores de altura são típicos e variam com hora, estação e ciclo solar:

| Camada | Altura aproximada | Comportamento | Papel no rádio |
|---|---|---|---|
| **D** | 60 a 90 km | Só existe de dia; densidade baixa mas o ar é denso, então colisões são frequentes | Não reflete HF; **absorve** frequências baixas (MF e HF baixo) de dia |
| **E** | 90 a 150 km (pico perto de 110) | Fraca à noite, forte de dia | Reflete até cerca de 10 MHz em condições normais; salto de até cerca de 2.000 km; também hospeda a esporádica E (Aula 7) |
| **F1** | 150 a 220 km | Só de dia, mescla-se com F2 à noite | Pouco importante para reflexão; contribui para absorção |
| **F2** | 250 a 400 km (varia muito) | Mais densa; existe de dia e de noite, mais fraca à noite | **Principal camada de HF de longa distância**; salto de até cerca de 4.000 km |

À noite, sem radiação, D some e a densidade em E e F cai; F1 e F2 fundem-se em uma única camada F. Isso não é desprezível: veja adiante.

## O mecanismo: por que HF reflete e VHF passa

Elétrons livres, quando sacudidos pelo campo elétrico de uma onda, oscilam e reirradiam. O gás ionizado se comporta como um **plasma**, com uma frequência natural de oscilação, a **frequência de plasma**:

**`fp = 9 x raiz(N)`** (`fp` em Hz, `N` em elétrons/m³)

Para uma onda de frequência `f`:

- se `f < fp`, os elétrons acompanham o campo e o índice de refração `n = raiz(1 - (fp/f)^2)` fica imaginário: a onda não penetra e é **refletida**;
- se `f > fp`, o meio fica transparente e o índice de refração é menor que 1 (mas real), e a onda continua, sendo apenas **refratada** (dobrada) um pouco.

Na prática, como `N` cresce gradualmente com a altura, o índice de refração diminui gradualmente, e a onda é curvada progressivamente (refração contínua) até voltar. A onda que incide na vertical volta se `f` for menor que a frequência de plasma máxima da camada, a **frequência crítica** `fc`:

`fc = 9 x raiz(N_max)`

**Exemplo:** se a camada F2 tem `N_max` = 10^12 elétrons/m³ (valor típico de dia, ordem de grandeza), `fc = 9 x 10^6 = 9 MHz`. Um sinal de 5 MHz enviado para cima na vertical volta; um de 15 MHz, na vertical, atravessa e some no espaço.

Uma onda de VHF (30 a 300 MHz) tem `f` muito maior que qualquer `fc` normal (poucos MHz a cerca de 15 MHz) e atravessa. É por isso que satélites em VHF/UHF funcionam: a ionosfera é transparente para eles.

### Incidência oblíqua: por que se reflete acima de fc

Uma onda que sobe na vertical exige `f < fc`. Uma que sobe inclinada (o caso real, com antenas de HF irradiando em ângulo baixo em relação ao horizonte) "vê" um caminho mais longo pela camada e reflete mesmo sendo mais alta que `fc`. A relação (**lei da secante**, para Terra plana) é:

**`MUF = fc / cos(phi)  = fc x sec(phi)`**

onde `phi` é o ângulo de incidência medido da vertical na camada. A **MUF** (Maximum Usable Frequency, frequência máxima utilizável) é a maior frequência que ainda reflete para aquele caminho. Acima dela, a onda escapa.

**Exemplo:** `fc` = 9 MHz, camada F2 a 300 km, TX e RX a 2.000 km de distância. Metade da distância é 1.000 km; `tan(phi) = 1000/300`, logo `phi = 73,3 graus`, `cos(phi) = 0,287`, `MUF = 9 / 0,287 = 31 MHz`. Com a curvatura da Terra o número real é menor (ordem de 25 a 28 MHz); a aproximação de Terra plana superestima em distâncias grandes.

O quadro completo: quanto mais longo o salto, maior o ângulo de incidência, maior a MUF. Ou seja, a MUF de 3.000 km é maior que a de 500 km, e a frequência que serve para o outro lado do mundo pode não refletir para um vizinho a 200 km (zona de silêncio, abaixo).

## O limite inferior: LUF e absorção da camada D

No outro extremo, frequências baixas sofrem **absorção**. Na camada D o ar é relativamente denso: elétrons sacudidos pela onda colidem com moléculas, perdendo energia como calor. A absorção é aproximadamente proporcional a `1/f^2`, ou seja, muito mais forte em 3 a 7 MHz que em 20 MHz, e só ocorre onde há D, ou seja, de dia.

A **LUF** (Lowest Usable Frequency) é a menor frequência para a qual o sinal ainda chega com SNR aceitável, dados a potência, a antena e o ruído (Aula 8). Abaixo dela, o sinal é absorvido antes de chegar ou fica soterrado pelo ruído.

Resulta uma **janela** entre LUF e MUF. A **FOT** (Frequência Ótima de Trabalho) fica em torno de 85% da MUF: bem abaixo dela, para ter margem contra variações. Os radioamadores usam esse raciocínio para escolher a banda do momento.

## Dia versus noite

| Situação | O que muda | Efeito |
|---|---|---|
| Dia | Camada D forte, F2 densa (`fc` alta) | Bandas altas (por volta de 14 a 28 MHz) abrem para longa distância; bandas baixas (1,8 a 7 MHz) têm absorção grande em longa distância, mas servem para distâncias curtas |
| Noite | D some, F2 perde densidade (`fc` cai) | Bandas baixas (1,8, 3,5, 7 MHz) abrem para longa distância; bandas altas frequentemente fecham |
| Amanhecer/anoitecer (linha do terminador) | Transição | Condições especiais; a "greyline" costuma favorecer alguns caminhos |

Por que a noite favorece frequências baixas: sem D, a absorção acaba; a MUF cai porque `fc` cai. Por isso emissoras AM (MF) só chegam longe à noite (onda ionosférica entre estações), e de dia só têm onda de superfície.

## Alcance, salto e zona de silêncio

### Salto

Um salto pela camada F2 chega a cerca de 4.000 km (limitado pela geometria: o ângulo mais rasante possível que sai da antena e volta à Terra); por E, cerca de 2.000 km. Sinal chegando ao solo pode ser refletido e voltar a subir: **salto múltiplo** (multi-hop). Cada salto acrescenta perda (absorção em D duas vezes por salto, reflexão no solo, espalhamento). Assim, dar a volta ao mundo exige boas condições e mais potência ou modos eficientes (Módulo 7).

### Zona de silêncio (skip zone)

Onda de superfície cobre até um raio (pequeno em HF). Onda ionosférica só volta ao solo a partir de uma distância mínima, o **skip distance**, determinada pelo ângulo máximo de saída que ainda reflete (frequência vs `fc`). Entre o fim da onda de superfície e o início do retorno da onda ionosférica, não há sinal: é a **zona de silêncio**. Aumentar a frequência aumenta a zona; diminuí-la a diminui. Por isso 20 m pode servir para 2.000 km e falhar para 200 km, enquanto 80 m serve para 200 km.

### NVIS: quando o objetivo é perto

**NVIS** (Near Vertical Incidence Skywave): usa frequências abaixo da `fc` (tipicamente 2 a 10 MHz) e antenas que irradiam quase na vertical, para cobrir de 0 a cerca de 500 km sem zona de silêncio. É útil em comunicações regionais em terreno montanhoso ou sem infraestrutura, e é a razão de HF baixo ser usado em emergências. Um tópico técnico que reaparece no projeto de rede privada sem infraestrutura (Aula 9).

## Como a ionosfera se comporta na prática

- **Não é um espelho.** É um meio contínuo, ondulante, com irregularidades; por isso o sinal HF tem fading (variação lenta e rápida, incluindo o **efeito Faraday**, que gira a polarização; lembre do Módulo 1: polarização não é preservada em HF).
- **Múltiplos caminhos ionosféricos** (via E e via F, ou saltos de ordens diferentes) causam o multipercurso ionosférico, com atrasos de milissegundos, que degrada modulações sensíveis a atraso (Módulo 3).
- **Polarização:** a onda que volta é elipticamente polarizada; a polarização da antena RX importa pouco em HF.
- **Aurora e regiões polares** têm ionosfera irregular, com absorção adicional de partículas; a propagação por lá é mais instável.

## Resumo

- A ionosfera é gás parcialmente ionizado pelo Sol; a **densidade de elétrons** `N` define a frequência de plasma `fp = 9 x raiz(N)` (Hz, N em m^-3).
- Onda com `f < fp` é refletida, com `f > fp` atravessa. Para incidência vertical, o limite é a frequência crítica `fc`; para incidência inclinada, a MUF `= fc / cos(phi)`.
- D (só de dia) absorve frequências baixas, `~1/f^2`; E e F2 refletem. A LUF vem da absorção e do ruído; a janela útil é entre LUF e MUF, com FOT em cerca de 85% da MUF.
- Dia favorece bandas altas, noite favorece bandas baixas; o salto por F2 chega a cerca de 4.000 km e pode repetir; há zona de silêncio entre a onda de superfície e o primeiro retorno; NVIS resolve o alcance curto em HF.
- VHF e acima atravessam a ionosfera, por isso o alcance é limitado ao horizonte (exceto modos especiais na Aula 7).

## Para aprofundar

- [ ] [The Ionosphere Explained: The Secret Behind HF Radio](https://www.youtube.com/watch?v=LyQ2uzGqajc) (título do vídeo): pelo título, explica a ionosfera e o HF; não assisti nem confirmei o canal.
- [ ] [The Ionosphere, Shortwave Radio, and Propagation](https://www.youtube.com/watch?v=dRpXiwS41Z4) (Dr. Philip J. Erickson, MIT Haystack Observatory, conforme a curadoria anterior): palestra científica, mais rigorosa, sobre camadas e plasma.
- [ ] [Understanding Ham Radio: Why Does the Ionosphere Refract RF?](https://www.youtube.com/watch?v=vWV9-hgKhHc) (título do vídeo): foco na refração pelo plasma; não assisti.

[Próxima aula: Ciclo solar, índices e previsão de propagação HF](./06%20-%20Clima%20Espacial%20e%20Previsao%20HF.md)
