# Aula 4: FM e PM, a informação na frequência e na fase

[Voltar ao módulo](./README.md)

*Pergunta que esta aula responde: como carregar informação na frequência, por que isso rejeita ruído melhor que o AM e que preço se paga em largura de banda?*

## O mecanismo

Na **FM** (frequency modulation), a amplitude da portadora é constante e a **frequência instantânea** segue o sinal modulante:

```
f_inst(t) = fc + kf x m(t)
```

`kf` é a sensibilidade do modulador em Hz por volt. Quando `m(t)` está no pico positivo, a frequência sobe; no pico negativo, desce; em silêncio, fica em `fc`. Define-se:

- **Desvio de frequência** (`delta_f`, deviation): o quanto a frequência se afasta de `fc` no pico da modulação.
- **Índice de modulação** `beta = delta_f / fm`, onde `fm` é a frequência do sinal modulante (para voz e música, a mais alta relevante).

Exemplo: FM de radiodifusão usa `delta_f = 75 kHz` e áudio até `fm = 15 kHz`, então `beta = 5`.

Note a diferença fundamental: no AM a **potência** varia com a modulação; no FM a **amplitude é constante**, a potência é a mesma silêncio ou não. Quem carrega a informação é a rapidez com que a onda oscila.

## Largura de banda: a regra de Carson

Ao contrário do AM (`2 x fm`), o FM produz **infinitas bandas laterais**, espaçadas de `fm` em torno de `fc`, com amplitudes dadas por funções de Bessel (a matemática exata é fora do escopo). Na prática, quase toda a potência fica numa faixa finita que a **regra de Carson** estima:

```
B = 2 x (delta_f + fm)
```

Exemplo 1, FM de radiodifusão: `B = 2 x (75 + 15) = 180 kHz`. Os canais são espaçados de 200 kHz. Com o sinal estéreo (multiplexado até 53 kHz), a regra dá `2 x (75 + 53) = 256 kHz` (a Wikipedia usa esse exemplo); o espectro real tem pouca energia nas bordas e cabe no canal de 200 kHz.

Exemplo 2, FM de voz em VHF/UHF (rádio amador, comunicação de serviço): `delta_f` típico de 2,5 a 5 kHz e `fm = 3 kHz`. Com `delta_f = 5 kHz`: `B = 2 x (5 + 3) = 16 kHz`, `beta = 1,7`. Canais de 25 kHz (ou 12,5 kHz com desvio menor) são usuais; valores exatos dependem do serviço e do país.

Se `beta` é muito menor que 1 (**FM de banda estreita**, NBFM), `B` aproxima `2 x fm`, como o AM. Se `beta` é grande (**FM de banda larga**, WBFM), `B` aproxima `2 x delta_f`, muito maior que o AM: **FM gasta mais banda**.

## Por que FM é mais robusta a ruído

O ruído (perturbação aleatória que se soma ao sinal) chega ao receptor somado ao sinal e perturba a **amplitude** e a **fase** da onda recebida.

1. **Limitador.** O receptor FM tem um estágio que corta a amplitude num valor fixo (limitador). Como no FM a informação não está na amplitude, apagar as variações de amplitude apaga o ruído de amplitude sem perder informação. Isso não é possível em AM. Os estalos de motores e relâmpagos, que são ruído de amplitude, desaparecem.
2. **Ganho de banda.** O ruído que resta perturba só a frequência instantânea. Com desvio grande, a mensagem produz uma variação de frequência larga comparada à perturbação do ruído, e a relação sinal/ruído do áudio final melhora. Para um tom senoidal e com o sinal acima do limiar (descrito adiante), a melhoria em relação ao sinal em banda-base vale:

```
SNR_saida = 1,5 x beta^2 x SNR_banda_base
```

Com `beta = 5`: fator 37,5, ou cerca de 15,7 dB de melhoria. Cada dobra de `delta_f` (que dobra `beta`) ganha 6 dB no áudio, e a banda dobra. É o princípio "troque banda por relação sinal/ruído", que a Aula 7 (Shannon) formaliza.

### O limiar (threshold)

O ganho só vale enquanto o sinal na entrada está acima do ruído por uma margem (da ordem de 10 dB de SNR na banda de RF, valor típico). Abaixo disso o desempenho **despenca** (o áudio vira chiado forte, e o "clique" característico aparece), pior que o AM nessa faixa. O FM é ótimo com sinal razoável, ruim com sinal muito fraco. Em link budget (Módulo 2), significa que é preciso margem suficiente.

## Efeito de captura

Quando dois sinais FM ocupam o mesmo canal, o receptor demodula apenas o **mais forte**, mesmo que ele esteja só poucos dB acima (números típicos de receptores: da ordem de 1 a 6 dB; varia). O mais fraco é suprimido. Vantagem: rejeita interferência. Desvantagem: uma transmissão simultânea não é percebida por quem fala (o controlador de voo prefere o AM por isso, Aula 2), e uma estação forte apaga repetidoras fracas.

## Pré-ênfase e de-ênfase

A demodulação de FM gera ruído cuja potência **cresce com a frequência do áudio** (espectro em parábola). Já a energia da voz e da música cai nas altas frequências. Resultado: o chiado predomina nos agudos, onde o sinal é mais fraco.

Solução em duas etapas:

- **Pré-ênfase (transmissor)**: um filtro passa-altas leve reforça os agudos antes de modular.
- **De-ênfase (receptor)**: um filtro passa-baixas correspondente atenua os agudos depois de demodular, o que devolve o áudio ao equilíbrio original e derruba junto o ruído dos agudos.

O filtro é um circuito RC simples, especificado por sua **constante de tempo**: 75 microssegundos nas Américas (uso corrente no Brasil; confira a norma da Anatel) e 50 microssegundos na Europa. Frequência de corte: `1 / (2 x pi x tau)`; para 75 us, `1 / (2 x pi x 75e-6) = 2122 Hz`. Acima desse ponto o transmissor reforça o áudio a +6 dB por oitava; o receptor aplica o inverso. Pré-ênfase e de-ênfase precisam concordar, senão o som fica abafado ou estridente.

## Envelope constante e eficiência

FM tem envelope constante. O amplificador de potência do transmissor pode operar saturado (classe C ou E), com eficiência de 70% a 90%, sem distorcer a informação, pois ela não está na amplitude. AM e SSB exigem amplificadores lineares, menos eficientes. Para dispositivos alimentados por bateria, isso importa; por isso a maioria dos rádios portáteis e das modulações digitais para IoT que veremos (FSK, GFSK, LoRa) são de envelope constante.

## PM: modulação em fase

Na **PM** (phase modulation), a **fase** da portadora segue `m(t)` diretamente:

```
s(t) = Ac x cos(2 x pi x fc x t + kp x m(t))
```

FM e PM são a mesma coisa vista de ângulos diferentes: a frequência é a taxa de variação da fase. FM equivale a PM com o sinal modulante **integrado**; PM equivale a FM com o sinal modulante **derivado**. Em PM, o desvio de fase depende só da amplitude de `m(t)`; em FM, o desvio de frequência depende da amplitude, e o desvio de fase depende também de `fm`.

Na prática:

- Muitos rádios de voz "FM" (especialmente de rádio amador) geram, na verdade, PM com um circuito integrador/derivador no áudio (o resultado se comporta como FM); a diferença só importa a quem projeta.
- PM digital é o **PSK** (Aula 6): a fase salta entre valores discretos para representar bits.
- Detectores de fase são a base de PLLs (phase-locked loops) que sintetizam frequências e recuperam FM.

## Onde a FM é usada

- Radiodifusão FM (cerca de 88 a 108 MHz; limites e canalização exatos conforme a Anatel).
- Comunicação de voz em VHF/UHF: rádios de serviço, marítimo (canal 16 em 156,8 MHz), repetidoras de radioamador.
- Base da FSK e GFSK digitais (Aula 6), usada em sub-GHz e Bluetooth.

## Resumo

- FM: amplitude constante, frequência instantânea `fc + kf x m(t)`. Índice `beta = delta_f / fm`.
- Largura de banda pela regra de Carson: `B = 2 x (delta_f + fm)`. FM gasta mais banda que AM.
- Robustez a ruído: o limitador apaga ruído de amplitude e o desvio largo melhora o SNR do áudio (`1,5 x beta^2` em tom, acima do limiar).
- Abaixo do limiar de ~10 dB de SNR na RF, a FM piora rapidamente.
- Efeito de captura: o sinal mais forte suprime o mais fraco no mesmo canal.
- Pré-ênfase no transmissor e de-ênfase no receptor (75 us nas Américas) reduzem o ruído dos agudos.
- Envelope constante permite amplificador de alta eficiência; PM varia a fase e é a base do PSK.

## Para aprofundar

- [ ] [Amplitude vs Frequency Modulation | How AM and FM Work: Modulation Comparison](https://www.youtube.com/watch?v=q7Ysx1DaELQ) (Kognito Key): comparação visual entre AM e FM (título e canal confirmados por oEmbed; vídeo não assistido).
- [ ] [Carson bandwidth rule (Wikipedia)](https://en.wikipedia.org/wiki/Carson_bandwidth_rule) (Wikipedia): fórmula e exemplos, incluindo o cálculo com estéreo (página aberta e confirmada em setembro de 2026).

[Próxima aula: Digitalização, símbolos e bits](./05%20-%20Digitalizacao%20e%20Simbolos.md)
