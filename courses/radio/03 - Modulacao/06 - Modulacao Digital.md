# Aula 6: Modulação digital, de ASK a QAM

[Voltar ao módulo](./README.md)

*Pergunta que esta aula responde: como bits viram amplitude, frequência ou fase, o que mostra uma constelação e por que mais bits por símbolo exigem mais SNR?*

## A ideia: um alfabeto de formas de onda

Na Aula 5 vimos que cada símbolo é uma de `M` formas de onda emitidas por `Ts` segundos. Modulação digital escolhe **quais** formas. As mesmas três alavancas da Aula 1 (amplitude, frequência, fase) dão as famílias, agora com valores **discretos** em vez de contínuos: ASK, FSK e PSK, e uma combinação, QAM.

## Duas dimensões: I e Q

Uma portadora de amplitude `A` e fase `phi` se escreve como soma de duas portadoras defasadas de 90 graus (cosseno e seno):

```
s(t) = I x cos(2 x pi x fc x t) - Q x sin(2 x pi x fc x t)
A = raiz(I^2 + Q^2)      phi = atan2(Q, I)
```

`I` (in-phase) e `Q` (quadrature) são dois números que descrevem completamente a amplitude e a fase naquele instante. Cosseno e seno são **ortogonais**: dá para modular cada um independentemente sem que um atrapalhe o outro, e o receptor os separa. Isso dobra a capacidade sem gastar mais banda.

Um símbolo digital, portanto, é um ponto `(I, Q)`, um número complexo `I + jQ`. Desenhar todos os pontos possíveis num plano com eixo `I` horizontal e `Q` vertical é o **diagrama de constelação**: distância à origem = amplitude, ângulo = fase. Receptores SDR (Módulo 6) trabalham direto com pares I/Q.

Na presença de ruído, cada símbolo recebido cai num ponto **próximo** do ideal, formando uma nuvem. O receptor decide o símbolo pelo ponto ideal mais próximo. Erra quando o ruído empurra o ponto para a região de outro símbolo.

## ASK e OOK: amplitude

**ASK** (amplitude shift keying) associa níveis de amplitude a símbolos. O caso mais simples é **OOK** (on-off keying): portadora ligada = 1, desligada = 0. O código Morse por telegrafia (CW) é OOK.

- Vantagens: transmissor e receptor baratíssimos (um detector de envelope, como na Aula 2). É o que controla chaveiros de carro, campainhas sem fio e sensores simples de 433 MHz.
- Desvantagens: sofre do mesmo problema do AM: o ruído e o desvanecimento agem exatamente na amplitude. O limiar de decisão precisa se ajustar ao nível do sinal, e a sensibilidade é ruim.

## FSK, GFSK e MSK: frequência

**FSK** (frequency shift keying) usa frequências diferentes para símbolos diferentes. Em FSK binário, `f1` para 0 e `f2` para 1. É a FM digital: amplitude constante, com todas as vantagens da Aula 4 (amplificador eficiente, insensibilidade a ruído de amplitude).

O **índice de modulação** de FSK é `h = 2 x delta_f / Rb` (com `delta_f` o desvio de cada frequência em relação ao centro). Ele é a razão entre a separação dos tons e a taxa de bits: `h` pequeno economiza banda; `h` grande melhora a distinção entre tons e gasta banda.

Duas variantes essenciais:

- **MSK** (minimum shift keying): `h = 0,5`, o menor espaçamento para o qual os dois tons são ortogonais (distinguíveis sem interferência) e a fase é contínua entre símbolos. Fase contínua evita saltos bruscos, que espalhariam energia para os lados.
- **GFSK** (Gaussian FSK): antes do modulador, os bits passam por um filtro gaussiano que suaviza as transições e estreita o espectro. O filtro é descrito pelo produto **BT** (largura de banda do filtro vezes duração do bit); BT menor = espectro mais estreito, porém mais ISI. O Bluetooth usa GFSK com BT de 0,5; muitos transceptores de sub-GHz (como a família SX127x, que também faz LoRa) têm GFSK como modo.

FSK/GFSK é o padrão para IoT e telemetria de baixa taxa: simples, envelope constante, receptor tolerante. No rádio amador, FT8 e WSPR (Módulo 7) são variações de FSK com muitos tons.

## PSK: fase

**PSK** (phase shift keying) codifica os bits na fase da portadora, amplitude constante.

### BPSK

Duas fases: 0 e 180 graus. `M = 2`, 1 bit/símbolo. Na constelação, dois pontos opostos sobre o eixo `I`. É a mais robusta de todas: os pontos ficam o mais distantes possível para uma dada potência. Usada no PSK31 do rádio amador e em enlaces de espaçonaves.

Problema: o receptor só percebe fase **relativa** a uma referência que ele precisa recuperar da própria onda. Essa recuperação tem ambiguidade de 180 graus (um 1 pode virar 0). Solução: **codificação diferencial** (DBPSK): o bit é codificado como "mudou ou não mudou de fase em relação ao símbolo anterior", que dispensa a referência absoluta ao custo de um pequeno aumento na taxa de erro.

### QPSK

Quatro fases (por exemplo 45, 135, 225, 315 graus): 2 bits por símbolo, quatro pontos num círculo. Mesma banda que BPSK com o **dobro** de bits. Usa **código Gray**: pontos vizinhos diferem em um único bit, então o erro mais provável (confundir com o vizinho) vira apenas 1 bit errado em vez de 2. QPSK é a base de comunicações por satélite, TV digital, LTE e Wi-Fi em taxas médias.

Ainda mais fases: 8-PSK (3 bits), 16-PSK (4 bits). Os pontos se aproximam no círculo, então cada aumento exige mais SNR.

## QAM: amplitude e fase juntas

**QAM** (quadrature amplitude modulation) varia I e Q em níveis independentes, formando uma grade:

| Modulação | Pontos (`M`) | Bits/símbolo | Formato |
|---|---|---|---|
| QPSK (4-QAM) | 4 | 2 | quadrado 2 x 2 |
| 16-QAM | 16 | 4 | grade 4 x 4 |
| 64-QAM | 64 | 6 | grade 8 x 8 |
| 256-QAM | 256 | 8 | grade 16 x 16 |
| 1024-QAM | 1024 | 10 | grade 32 x 32 |

O Wi-Fi moderno usa até 1024-QAM (Wi-Fi 6) e até 4096-QAM (Wi-Fi 7); redes celulares usam 256-QAM e além; TV a cabo, modems e micro-ondas ponto a ponto também. QAM está em qualquer link de banda larga.

## Por que mais bits por símbolo exigem mais SNR

Este é o ponto conceitual central da Aula. Suponha que a potência média do transmissor é fixa. Colocar mais pontos na constelação obriga a **distância mínima entre pontos vizinhos** a diminuir. Para `M`-QAM quadrado com energia média `Es` por símbolo:

```
d_min = raiz( 6 x Es / (M - 1) )
```

Exemplo resolvido, mesma `Es`:

- QPSK (`M = 4`): `d_min = raiz(6 x Es / 3) = raiz(2 x Es) = 1,41 x raiz(Es)`.
- 16-QAM (`M = 16`): `d_min = raiz(6 x Es / 15) = raiz(0,4 x Es) = 0,63 x raiz(Es)`.

A razão é `raiz(5)`, ou seja, uma razão de potência de 5, o que dá `10 x log10(5) = 7 dB`. O ruído (que empurra o símbolo recebido para longe do ideal por uma distância típica) tem a mesma intensidade nos dois casos. Como os pontos estão a menos da metade da distância, o mesmo ruído os confunde muito mais. Para manter a mesma taxa de erro de símbolos, 16-QAM precisa de **cerca de 7 dB a mais** de relação sinal/ruído por símbolo. Em termos de energia por bit (`Eb`, Aula 7), como 16-QAM leva 2 vezes mais bits por símbolo, a diferença cai para cerca de 4 dB.

Valores aproximados de `Eb/N0` necessário para taxa de erro de bit de `1e-5` (canal com ruído gaussiano, detecção coerente, código Gray; valores clássicos de tabelas, arredondados):

| Modulação | Eb/N0 (dB) aproximado |
|---|---|
| BPSK e QPSK | 9,6 |
| 8-PSK | ~13 |
| 16-QAM | ~13,4 |
| 64-QAM | ~17,8 |

Cada ordem a mais custa vários dB, isto é, distância (link budget do Módulo 2: 6 dB dobram a distância em espaço livre). Trocar 64-QAM por QPSK ganha ~8 dB de margem, mas reduz a taxa em 3 vezes.

Por isso sistemas modernos usam **modulação adaptativa**: quando o sinal é bom (perto do ponto de acesso), sobem para 256-QAM ou mais; quando cai, descem para 16-QAM, QPSK, BPSK. Um roteador Wi-Fi faz exatamente isso: a "taxa do link" que ele mostra oscila porque a modulação muda com o SNR.

## Envelope constante e amplificador

PSK e QAM com mais de dois níveis de amplitude não têm envelope constante: em QAM a potência instantânea varia entre pontos internos e externos da constelação. O amplificador de potência precisa ser **linear** (trabalhar com folga abaixo do limite, o chamado *back-off*), menos eficiente. FSK e GFSK, por terem envelope constante, aceitam amplificadores saturados. Regra de projeto: alta taxa e banda estreita pedem QAM/PSK e amplificador caro; longo alcance e baixo consumo pedem FSK/LoRa (Aula 8).

## Resumo

- Um símbolo digital é um ponto I/Q; a constelação mostra todos os símbolos possíveis, e o ruído os espalha em nuvens.
- OOK/ASK: amplitude, simples e frágil. FSK/GFSK/MSK: frequência, envelope constante, comum em IoT. PSK: fase, a mais eficiente em potência para poucos bits. QAM: amplitude e fase, muitos bits por símbolo.
- BPSK = 1 bit; QPSK = 2 bits; 16-QAM = 4; 64-QAM = 6; 256-QAM = 8.
- Mais pontos na mesma potência = pontos mais próximos = mais erros com o mesmo ruído; cada dobra de bits/símbolo exige vários dB extras de SNR.
- QAM exige amplificadores lineares; FSK/GFSK aceitam amplificadores eficientes.
- Sistemas adaptam a modulação ao SNR disponível.

## Para aprofundar

- [ ] [Digital Modulation (PySDR)](https://pysdr.org/content/digital_modulation.html) (Marc Lichtman): capítulo com constelações, ASK, PSK, QAM, FSK e exemplo em Python de QPSK com ruído (página aberta e confirmada em setembro de 2026).
- [ ] [Visualising Digital Modulation: ASK, FSK, BPSK, DPSK, QPSK and QAM](https://www.youtube.com/watch?v=8e4Sf6rL3zk) (Iain Explains Signals, Systems, and Digital Comms): visualização das formas de onda de cada modulação (título e canal confirmados por oEmbed; vídeo não assistido).
- [ ] [Constellation diagram (Wikipedia)](https://en.wikipedia.org/wiki/Constellation_diagram) (Wikipedia): definição e exemplos de constelações (página aberta e confirmada em setembro de 2026).

[Próxima aula: Shannon, Eb/N0 e sensibilidade do receptor](./07%20-%20Shannon%20e%20Sensibilidade.md)
