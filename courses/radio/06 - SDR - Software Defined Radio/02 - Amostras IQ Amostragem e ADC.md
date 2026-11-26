# Aula 2: Amostras IQ, taxa de amostragem e ADC

[Voltar ao módulo](./README.md)

*Pergunta que esta aula responde: o que exatamente o SDR entrega ao computador, por que são dois números por amostra (I e Q), e o que a taxa de amostragem e o número de bits decidem sobre o que se consegue receber?*

## Por que uma amostra real não basta

Depois do mixer (Aula 1), o sinal é uma tensão que oscila em torno de 0 V, por exemplo um cosseno de frequência `f`. O ADC mede essa tensão em instantes regulares. Cada medida é **um único número real**, e um número só é ambíguo de duas maneiras:

1. **Fase.** Se o cosseno normalizado vale 0,5 na amostra, a fase pode ser 60 graus ou 300 graus (`cos 60° = cos 300° = 0,5`). Sem saber em que lado do ciclo o sinal está, não dá para recuperar a fase, e no Módulo 3 você viu que FM e PM guardam a informação justamente na fase e na frequência.
2. **Sinal da frequência.** Uma frequência `+f` e uma `-f` produzem o mesmo cosseno (`cos(-x) = cos(x)`). Com amostras reais, um sinal 800 kHz acima do centro de sintonia e outro 800 kHz abaixo são indistinguíveis. É exatamente o problema da frequência imagem (Aula 1).

A saída é medir **duas coisas ao mesmo tempo**, deslocadas 90 graus. Um cosseno e um seno com o mesmo argumento nunca são ambíguos juntos: onde o cosseno vale 0,5, o seno vale `+0,87` ou `-0,87`, e o par decide o ângulo.

## I e Q

O receptor usa **dois mixers** alimentados pelo mesmo oscilador local, mas com fases 90 graus diferentes (um recebe `cos`, o outro `sen`; é um **mixer em quadratura**, como no exemplo de PA3FWM da Aula 1). A saída de cada mixer vai a um ADC:

- **I** (in-phase, em fase): resultado da multiplicação pelo cosseno.
- **Q** (quadrature, em quadratura): resultado da multiplicação pelo seno.

Um sinal de RF de amplitude `A` e fase `φ` relativa ao oscilador é descrito por `A cos(2πft - φ) = I cos(2πft) + Q sen(2πft)`, com `I = A cos φ` e `Q = A sen φ`. Logo, a cada amostra o computador recebe `(I, Q)`, do qual tira:

```
amplitude:  A = raiz(I^2 + Q^2)
fase:       φ = atan2(Q, I)
```

Tratar o par como **número complexo** `x = I + jQ` (com `j` a raiz de -1) é só uma forma conveniente de guardar amplitude e fase juntas: `x = A e^(jφ)`. Essa é a **envoltória complexa** do sinal, ou seja, o sinal em **banda base**: o espectro foi deslocado (pelo mixer) para que a frequência de sintonia (o LO) seja 0 Hz. Toda a informação de modulação (Módulo 3) está preservada nele.

No RTL-SDR, cada amostra vem em 2 bytes (um para I, um para Q, 8 bits cada, sem sinal, com valor 127,5 como zero segundo a convenção comum). Um software só precisa converter os bytes em números complexos.

## Frequências negativas, em nível intuitivo

Se a frequência de sintonia é 0 Hz no complexo, um sinal 100 kHz **acima** do LO tem frequência `+100 kHz` e um 100 kHz **abaixo** tem `-100 kHz`. A frequência "negativa" tem sentido físico simples: é **o sentido de rotação** do número complexo.

- `e^(j 2π f t)` com `f > 0`: o ponto `(I, Q)` gira no sentido anti-horário, `f` voltas por segundo.
- `f < 0`: gira no sentido horário.

**Exemplo resolvido.** Taxa de amostragem `fs = 400 kHz`, tom em `+100 kHz`. Em 100 kHz o ponto dá 1/4 de volta por amostra (`100/400`). Amostras sucessivas:

| n | I | Q |
|---|---|---|
| 0 | 1 | 0 |
| 1 | 0 | +1 |
| 2 | -1 | 0 |
| 3 | 0 | -1 |

Para `-100 kHz`, a sequência de I é idêntica (1, 0, -1, 0), mas Q tem o sinal invertido (0, -1, 0, +1). **Só Q distingue as duas**. Um ADC real com uma amostra por vez veria os mesmos valores nos dois casos; com I e Q, o software separa "acima do centro" de "abaixo do centro". Por isso um sinal real (um cosseno puro) sempre aparece no espectro **duplicado**, uma cópia em `+f` e outra em `-f`, enquanto um sinal complexo pode ocupar só um lado.

## Taxa de amostragem, Nyquist e largura de banda instantânea

O ADC mede `fs` vezes por segundo (`fs` em amostras por segundo, S/s; múltiplos: kS/s, MS/s). O **teorema de Nyquist** (Módulo 3, Aula 5) diz que, com amostras **reais**, só se representa sem ambiguidade sinais com frequência abaixo de `fs/2`. Acima disso ocorre **aliasing**: a frequência "dobra" e aparece falsamente abaixo. É o mesmo efeito de uma roda de carro que parece girar ao contrário no vídeo.

Com amostras **complexas** (I e Q), cada amostra carrega duas medidas, e o que se representa sem ambiguidade é uma faixa de largura `fs` inteira: de `-fs/2` a `+fs/2` em torno da frequência do LO. Comparação:

- Real, taxa 2,4 MS/s: cobre 0 a 1,2 MHz (1,2 MHz de largura).
- Complexa (I e Q), taxa 2,4 MS/s: cobre -1,2 a +1,2 MHz (2,4 MHz de largura).

Essa faixa é a **largura de banda instantânea** do SDR: quanto de espectro se vê e se grava simultaneamente. Ela é igual (aproximadamente) à taxa de amostragem complexa. Os valores usuais:

| SDR | Largura de banda instantânea (fonte) |
|---|---|
| RTL-SDR | até 3,2 MS/s (instável, pode perder amostras); 2,56 MS/s é o máximo sem perdas (rtl-sdr.com) |
| Airspy R2 / Mini | 10 MS/s I/Q (fabricante); o Mini exibe 6 MHz |
| SDRplay RSPdx-R2 | até 10 MHz (fabricante) |
| HackRF One | 20 MS/s (fabricante) |
| PlutoSDR | 20 MHz de largura de banda, até 61,44 MS/s (Analog Devices) |

Na prática, as bordas da faixa são atenuadas pelo filtro anti-aliasing do dongle, então se conta com um pouco menos do que `fs`. Por exemplo, em 2,4 MS/s no RTL-SDR, é razoável contar com algo em torno de 2 MHz úteis (estimativa; o roll-off exato varia com o modelo e com a taxa, como mostrou PA3FWM).

**Aliasing com números.** Com `fs = 2,4 MS/s` e LO em 100 MHz, a faixa boa vai de 98,8 a 101,2 MHz. Uma estação de FM em 101,7 MHz está 1,7 MHz acima do LO, fora da faixa `±1,2 MHz`. Se nada a barrasse antes do ADC, ela apareceria "dobrada" em `1,7 - 2,4 = -0,7 MHz`, ou seja, 99,3 MHz, por cima de outra estação. É por isso que o filtro **antes** do ADC (Aula 1) é obrigatório: aliasing depois que a amostragem aconteceu é irrecuperável.

**Taxa de dados.** Para o desenvolvedor: 2,4 MS/s complexas com 8 bits em I e 8 em Q são `2,4 x 2 = 4,8 MB/s` pelo USB. O HackRF, a 20 MS/s, gera `20 x 2 = 40 MB/s` (8 bits I e 8 bits Q). Taxa maior significa mais banda vista, mais CPU e mais tráfego no barramento.

## O ADC: resolução (bits) e faixa dinâmica

O ADC não só mede no tempo (taxa), mede em **valor**: com `N` bits, divide a faixa de tensão em `2^N` degraus. O erro de arredondar ao degrau mais próximo, o **ruído de quantização**, é como um ruído branco adicionado ao sinal. Para um seno de escala plena, a razão sinal/ruído ideal é:

```
SNR = 6,02 x N + 1,76   (dB)
```

| Bits | SNR ideal | Observação |
|---|---|---|
| 8 | 49,9 dB | RTL-SDR e HackRF; o RTL-SDR tem ~7 bits efetivos (ENOB), ~44 dB (rtl-sdr.com) |
| 12 | 74 dB | Airspy, PlutoSDR, LimeSDR; o Airspy R2 declara 10,4 ENOB e 70 dB de SNR (fabricante) |
| 14 | 86 dB | SDRplay RSPdx-R2 (14 bits nativos em taxas mais baixas, menos bits em taxas mais altas; datasheet) |
| 16 | 98 dB | |

**Faixa dinâmica** é a diferença, em dB, entre o sinal mais forte e o mais fraco que se consegue tratar **ao mesmo tempo** sem que o forte estrague a leitura do fraco. Ela vem de dois limites:

- **Piso**: o ruído de quantização (e o ruído térmico e do amplificador). Sinais abaixo dele somem.
- **Teto**: `0 dBFS` (dB relativos à escala plena do ADC). Um sinal que o ultrapassa é cortado (clipping), o que gera distorção e falsos sinais espalhados pelo espectro (Aula 8).

**Por que isso importa no dongle.** Uma estação de FM broadcast a poucos km pode estar 60 a 80 dB acima de um sinal fraco de aviação. Um ADC de 8 bits tem cerca de 44 a 50 dB de faixa: os dois sinais **não cabem juntos** na escala. O ganho do receptor (Aula 8) decide onde cada um cai; se o forte for posicionado logo abaixo do teto, o fraco fica abaixo do piso. Um SDR de 12 ou 14 bits abre 24 a 36 dB de folga adicional. Não é frescura de especificação: é o que decide se um sinal fraco é recebível na presença de um forte.

**Ganho de processamento por decimação.** O ruído de quantização se espalha por toda a faixa `fs/2`. Se, depois, o software filtrar e reduzir a largura de banda de `fs` para uma banda `B` menor, só a fração do ruído dentro de `B` sobra. O ganho (quando o ruído é branco) é:

```
ganho = 10 x log10(fs / B)   (dB)
```

Exemplo: `fs = 2,4 MS/s`, banda de FM de `B = 200 kHz`: `10 x log10(12) = 10,8 dB`. Por isso a documentação do RTL-SDR diz que a decimação "pode elevar" os bits efetivos, e por isso o modo de sobreamostragem (oversampling) do Airspy anuncia até 16 bits em canais estreitos. Sinais estreitos aproveitam melhor um ADC do que sinais largos: **menos banda, menos ruído**.

**Ligação com o Módulo 1.** O ruído térmico em uma banda `B` é `-174 dBm/Hz + 10 log10(B)`. Em `B = 2,4 MHz`, `10 log10(2,4e6) = 63,8`, então o piso térmico ideal é `-174 + 63,8 = -110 dBm`. O receptor real acrescenta sua figura de ruído (Aula 1). Um sinal só é recebível se ficar acima desse piso com margem para a relação sinal/ruído de que o demodulador precisa (Módulo 3, Aula 7).

## Dois defeitos de I/Q que você vai ver na tela

- **Pico de DC no centro.** Offsets nos misturadores geram um traço fixo em 0 Hz (no meio do espectro). No SDR# há a opção "Correct IQ" que o remove nos dongles com R820T (rtl-sdr.com). Não é um sinal real; nunca tente sintonizá-lo. Basta sintonizar 0,1 a 0,3 MHz de lado.
- **Imagem residual.** Se I e Q não são exatamente 90 graus defasados nem têm ganhos idênticos (**desequilíbrio IQ**), uma cópia fraca e espelhada de cada sinal forte aparece do outro lado do centro. Sinal espelhado no waterfall = suspeite disso, ou de overload.

## Exercício guiado 2.1: I/Q no papel

1. Com `fs = 8 kHz`, escreva as 8 primeiras amostras `(I, Q)` de um tom complexo de `+1 kHz` (cada amostra gira `1/8` de volta: 45 graus; use `I = cos(45° x n)`, `Q = sen(45° x n)`).
2. Reescreva para `-1 kHz` e compare: qual coluna muda?
3. Com o mesmo `fs = 8 kHz`, qual é a faixa de frequências complexas representáveis? (`-4 a +4 kHz`.) Onde apareceria um tom de `+5 kHz`? (`5 - 8 = -3 kHz`: aliasing.)
4. Calcule o SNR ideal de um ADC de 10 bits. (`6,02 x 10 + 1,76 = 62 dB`.) Quanto ganha ao decimar de 1 MS/s para 10 kHz? (`10 log10(100) = 20 dB`.)

## Resumo

- Uma amostra real é ambígua na fase e no sinal da frequência; medir I e Q (dois mixers com LO defasado de 90 graus) resolve as duas, e `I + jQ` é a envoltória complexa: o sinal em banda base.
- Frequência negativa é o sentido de rotação: I sozinho não distingue `+f` de `-f`, o par sim.
- Com I/Q, a taxa de amostragem `fs` equivale a uma **largura de banda instantânea** de cerca de `fs` (de `-fs/2` a `+fs/2` em torno do LO); acima disso ocorre aliasing, e por isso há filtro antes do ADC.
- O número de bits `N` dá `SNR = 6,02 N + 1,76 dB` (ideal) e limita a faixa dinâmica; 8 bits (RTL-SDR) não comportam um sinal muito forte e um muito fraco ao mesmo tempo.
- Decimar um sinal de banda `B` a partir de `fs` melhora o SNR em `10 log10(fs/B)`; sinais estreitos aproveitam melhor o ADC.

## Para aprofundar

- [ ] [How to Get Phase From a Signal (Using I/Q Sampling)](https://www.youtube.com/watch?v=Ev3lZClnLhQ) (Marshall Bruner): vídeo curto que constrói o sistema de coordenadas I/Q a partir do problema da ambiguidade da fase; visualiza o que o texto descreve.
- [ ] [PySDR, capítulo "Sampling"](https://pysdr.org/content/sampling.html) (Marc Lichtman): Nyquist, amostragem em quadratura, números complexos, conversão para banda base e "DC spike", com código Python.
- [ ] [Digital Show & Tell (Monty Montgomery, xiph.org)](https://www.youtube.com/watch?v=UqiBJbREUgU) (Audio University): demonstração com equipamento real de que a amostragem não perde informação abaixo de Nyquist e de que o número de bits define o piso de ruído (mostrado em áudio, mas o princípio é o do ADC do SDR).
- [ ] [How RTL-SDR dongles work](https://pa3fwm.nl/technotes/tn20.html) (PA3FWM): mostra I e Q dentro do RTL2832U, o ADC a 28,8 MS/s e o filtro com redução de taxa.

[Próxima aula: FFT, waterfall, decimação e demodulação em software](./03%20-%20FFT%20Waterfall%20Decimacao%20e%20Demodulacao.md)
