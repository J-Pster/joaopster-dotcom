# Aula 5: Decibéis e potência (dB, dBm, dBi)

[Voltar ao módulo](./README.md)

*Pergunta que esta aula responde: por que engenheiros de rádio medem potência em uma escala logarítmica, e como somar ganhos e perdas em vez de multiplicá-los?*

## O problema: números absurdamente diferentes

Em rádio, as potências variam por ordens de grandeza enormes:

- um transmissor de FM comercial: 10.000 W;
- um rádio portátil: 5 W;
- um sensor de baixa potência: 0,025 W (25 mW);
- o sinal que chega ao receptor a alguns quilômetros: 0,000 000 000 000 1 W (10^-13 W).

Entre o primeiro e o último há uma razão de 10^17. Trabalhar com esses números em watts é impraticável, e ainda por cima os efeitos que importam (perda no espaço, ganho de antena, atenuação em cabo) **multiplicam** a potência por fatores. A escala logarítmica resolve as duas coisas: comprime a faixa e transforma multiplicações em somas.

## Um lembrete de logaritmo

`log10(x)` é o expoente ao qual é preciso elevar 10 para obter `x`.

- `log10(10) = 1`, `log10(100) = 2`, `log10(1000) = 3`, `log10(0,1) = -1`.
- `log10(2)` vale cerca de 0,301 (o valor que gera o famoso "3 dB").
- A propriedade essencial: `log10(a x b) = log10(a) + log10(b)`. Multiplicação vira soma.

Analogia de programação: é o mesmo raciocínio de trabalhar em bits em vez de valores (2^10 é 10 "passos"), ou de representar tamanhos em "ordens de magnitude".

## O decibel (dB)

O **decibel** mede a **razão entre duas potências**:

`dB = 10 x log10(P2 / P1)`

Pontos essenciais:

- dB **não é uma unidade de potência**, é uma razão sem dimensão. "Este amplificador tem 10 dB" quer dizer "multiplica a potência por 10".
- Positivo é ganho (P2 maior que P1); negativo é perda (atenuação); 0 dB é razão 1 (nada muda).

A origem do nome: a unidade nasceu na telefonia (Bell Labs) para medir a perda em linhas, e o "bel" homenageia Alexander Graham Bell; o deci é um décimo. Conveniência secundária: a audição humana também responde de modo aproximadamente logarítmico à intensidade do som.

### A tabela que vale decorar

| dB | Razão de potência |
|---|---|
| 0 | 1 (nada) |
| 3 | 2 (aproximadamente; valor exato 1,995) |
| 6 | 4 |
| 10 | 10 |
| 20 | 100 |
| 30 | 1.000 |
| -3 | 0,5 (metade) |
| -10 | 0,1 |
| -20 | 0,01 |
| -30 | 0,001 |
| 1 | 1,26 |
| 7 | 5 (aproximadamente) |

Como montar qualquer valor de cabeça, usando que dB somam:

- 13 dB = 10 + 3 = 10 x 2 = **20 vezes**.
- 16 dB = 10 + 3 + 3 = **40 vezes**.
- 7 dB = 10 - 3 = 10 / 2 = **5 vezes**.
- -6 dB = dois cortes de 3 dB = 1/4.

Ao converter razões para dB de forma exata, use a fórmula; os atalhos têm erro menor que 0,2 dB, suficiente para planejamento.

### Por que o cálculo em dB é conveniente: cadeia de ganhos e perdas

Em watts, uma cadeia de blocos exige multiplicar fatores. Em dB, soma-se:

Exemplo resolvido. Um sinal de 5 W passa por: um amplificador de +10 dB, um cabo de -3 dB, e uma antena que concentra energia com +6 dB.

- Em razões: `5 W x 10 x 0,5 x 4 = 100 W`.
- Em dB: `10 - 3 + 6 = +13 dB`, e `5 W x 20 = 100 W`. Conferido.

O ganho total da cadeia é somar os dB. Todo o cálculo de enlace de rádio (módulo 2) é uma soma de linhas positivas e negativas.

## Decibéis para tensão

Potência é proporcional a tensão ao quadrado (Aula 4), então, sobre a mesma impedância:

`dB = 20 x log10(V2 / V1)`

O fator é 20 e não 10 porque `log10(V^2) = 2 x log10(V)`. Consequência: dobrar a tensão dá +6 dB (e quadruplicar a potência). Use 10 para potência e 20 para tensão ou campo (V/m); nunca misture.

## dBm: dB com referência absoluta

Um número em dB não diz quantos watts são. Para uma escala **absoluta**, escolhe-se uma referência fixa:

- **dBm:** dB relativo a **1 miliwatt**. `dBm = 10 x log10(P em mW)`.
- **dBW:** dB relativo a 1 watt. `dBW = dBm - 30` (porque 1 W = 1000 mW = +30 dB acima de 1 mW).

Inversa: `P (mW) = 10^(dBm / 10)`.

| dBm | Potência | Exemplo |
|---|---|---|
| -120 | 10^-15 W (1 femtowatt) | sinal muito fraco, na região do piso de ruído de um canal de centenas de kHz (Aula 7) |
| -100 | 10^-13 W | sinal fraco de rádio |
| -90 | 1 pW (10^-12 W) | |
| -30 | 1 microwatt | |
| 0 | 1 mW | referência |
| 10 | 10 mW | |
| 14 | 25 mW | ordem de grandeza de dispositivos de baixa potência (limites variam por região, módulo 8) |
| 20 | 100 mW | ordem de grandeza de um roteador Wi-Fi |
| 27 | 0,5 W | |
| 30 | 1 W | |
| 36 | 4 W | |
| 40 | 10 W | |
| 50 | 100 W | transmissor de radioamador de HF |
| 60 | 1 kW | |
| 70 | 10 kW | emissora de FM de porte |

Exemplos de conversão:

- **250 mW em dBm:** `10 x log10(250) = 10 x 2,398 = 24 dBm`.
- **17 dBm em mW:** `10^(1,7) = 50 mW`.
- **100 W em dBm:** `100.000 mW`, `10 x log10(100.000) = 50 dBm`.

Uma armadilha clássica: **dBm não se soma como watts**. Ao somar potências, converta para mW, some e volte:
- 20 dBm + 20 dBm = 100 mW + 100 mW = 200 mW = **23 dBm** (não 40 dBm!).
Em contraste, `dBm + dB = dBm` (sinal de 20 dBm com ganho de 6 dB é 26 dBm), e `dBm - dBm = dB` (razão entre dois níveis).

Sinais de rádio recebidos são naturalmente negativos em dBm: menos que 1 mW. Valores típicos de recepção: -60 dBm (forte), -90 dBm (fraco mas comum), -120 dBm (limite de receptores muito sensíveis em banda estreita).

## dBi e dBd: ganho de antena

Uma antena **não amplifica**: não cria potência. Ela **redireciona** a energia, concentrando numa direção e tirando de outras. O ganho mede quanto mais potência ela entrega naquela direção, comparada com uma antena de referência.

- **dBi:** ganho em relação a uma **antena isotrópica**: fonte ideal e teórica que irradia igualmente em todas as direções (a mesma da esfera da Aula 2). Uma antena com 3 dBi entrega o dobro de densidade de potência, na sua melhor direção, que a isotrópica com a mesma potência de entrada.
- **dBd:** ganho em relação a um **dipolo de meia onda**, que já é direcional. Conversão: `dBi = dBd + 2,15`.

A escolha da referência muda o número (um mesmo dipolo é 0 dBd e 2,15 dBi), então anúncios de antenas usam dBi por soarem maiores; leia sempre a unidade.

Notas:
- O ganho da antena é sempre concentrado: aumentar um lado diminui outro. Uma antena vertical omnidirecional "achata" a esfera num "donut", concentrando no plano horizontal.
- O ganho vale para transmitir e receber igualmente.

### EIRP: a potência efetiva

Reguladores limitam a potência que um transmissor **efetivamente** irradia numa direção, não apenas a que sai do equipamento:

`EIRP (dBm) = Ptx (dBm) - perdas no cabo e conectores (dB) + ganho da antena (dBi)`

EIRP (equivalent isotropically radiated power) é a potência que uma antena isotrópica precisaria irradiar para produzir a mesma densidade na direção de máximo. Existe também a **ERP**, referida ao dipolo: `ERP = EIRP - 2,15 dB`. Qual delas o limite regulatório usa depende da norma da faixa; confira a regulamentação vigente (Aula 9).

Exemplo resolvido: transmissor de 20 dBm, cabo com 1 dB de perda, antena de 3 dBi.
- `EIRP = 20 - 1 + 3 = 22 dBm`, ou `10^2,2 = 158 mW` isotrópicos equivalentes.

## Exemplo completo: balanço de enlace simples

Todo o material acima junto, para um enlace de 2,4 GHz de 1 km:

| Item | Valor |
|---|---|
| Potência do transmissor | +20 dBm |
| Ganho da antena de transmissão | +2 dBi |
| Perda no espaço livre em 1 km, 2,4 GHz | -100 dB (o módulo 2 detalha; a Aula 6 mostra a fórmula) |
| Ganho da antena de recepção | +2 dBi |
| **Potência recebida** | `20 + 2 - 100 + 2 = -76 dBm` |

Se o receptor exige pelo menos -100 dBm para decodificar, a **margem** é `-76 - (-100) = 24 dB`, ou seja, o sinal pode ficar cerca de 250 vezes mais fraco antes de sumir (24 dB = 20 + 3 + 1 dB = 100 x 2 x 1,26, cerca de 250). Perceba como a conta inteira é uma soma de linhas.

## Exercícios (com resposta)

1. Um amplificador leva 2 W a 20 W. Ganho? `10 x log10(10) = 10 dB`.
2. Cabo com -6 dB. Quanto da potência chega? 1/4 (25%).
3. Converta 1 mW e 1 W a dBm: 0 dBm e 30 dBm.
4. Dois transmissores de 30 dBm cada, somados: 2 W = 33 dBm.
5. Um sinal de -85 dBm passa por um amplificador de +20 dB: resulta -65 dBm.

## Resumo

- dB é a razão entre duas potências em escala logarítmica: `dB = 10 x log10(P2 / P1)`. Multiplicar razões vira somar dB.
- Decore: 3 dB = 2x, 6 dB = 4x, 10 dB = 10x, 20 dB = 100x; -3 dB = metade, -10 dB = um décimo.
- Para tensão ou campo, o fator é 20 em vez de 10.
- dBm é dB relativo a 1 mW (0 dBm = 1 mW, 30 dBm = 1 W); dBW = dBm - 30. Nunca some dBm como se fossem watts.
- dBi é ganho de antena relativo à isotrópica; `dBi = dBd + 2,15`; antena redireciona, não amplifica.
- `EIRP = Ptx - perdas + ganho de antena`; balanço de enlace é uma soma de ganhos e perdas.

## Para aprofundar

Sem link: o assunto é cálculo puro e o texto acima resolve o que importa.

[Próxima aula: O espectro eletromagnético e as faixas de rádio](./06%20-%20Espectro%20e%20Faixas%20de%20Radio.md)
