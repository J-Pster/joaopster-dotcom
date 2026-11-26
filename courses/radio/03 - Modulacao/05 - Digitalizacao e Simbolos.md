# Aula 5: Digitalização, bits, símbolos e baud

[Voltar ao módulo](./README.md)

*Pergunta que esta aula responde: como um sinal contínuo vira bits, o que é um símbolo, por que "baud" e "bit/s" são coisas diferentes e quanta banda um símbolo custa?*

## Por que digitalizar

As Aulas 2 a 4 modularam sinais **analógicos** (contínuos no tempo e na amplitude). Um sinal digital é uma sequência de números. Digitalizar vale o custo por três razões:

- **Regeneração.** Um sinal analógico acumula ruído a cada etapa (amplificação, cabo, enlace) e não tem como separá-lo do sinal depois. Um sinal digital só precisa que o receptor decida "é 0 ou 1"; com sinal suficiente, o ruído é totalmente eliminado.
- **Correção de erros.** Bits aceitam redundância matemática (Aula 9); ondas contínuas não.
- **Universalidade.** Voz, texto, telemetria e imagem viram bits, e um único canal os transporta. Isso é o que permite pacotes, roteamento e criptografia, os temas de redes mesh (Módulo 9) e de Reticulum (Módulo 10).

## Amostragem e o teorema de Nyquist

**Amostrar** é medir o valor do sinal a intervalos regulares. A taxa é a **frequência de amostragem** `fs` (samples per second).

Perguntar "quantas amostras por segundo bastam?" tem resposta exata. O **teorema de Nyquist-Shannon** diz: um sinal que não contém frequências acima de `B` pode ser reconstruído perfeitamente se

```
fs >= 2 x B
```

Por quê? Amostrar no tempo cria cópias do espectro do sinal deslocadas por múltiplos de `fs`. Se `fs` for pelo menos `2B`, as cópias não se tocam e um filtro passa-baixas recupera o original. Se `fs < 2B`, as cópias se sobrepõem, e uma frequência alta vira uma frequência baixa falsa: o **aliasing** (as rodas de carro que parecem girar para trás nos filmes são o mesmo fenômeno).

Em prática, filtra-se o sinal antes da amostragem (filtro anti-aliasing) para garantir que não há nada acima de `fs/2`.

Exemplos:

- Telefonia: voz limitada a 4 kHz, `fs = 8 kHz`.
- CD de áudio: 20 kHz de banda útil, `fs = 44,1 kHz`.
- SDR (Módulo 6): um receptor que digitaliza 2 MHz de espectro precisa de pelo menos 2 milhões de amostras I/Q por segundo (a forma complexa I/Q é explicada na Aula 6; o capítulo "IQ Sampling" do PySDR trata do tema).

## Quantização: quantos bits por amostra

Cada amostra é um valor contínuo; o conversor A/D o arredonda para um de `2^n` níveis, onde `n` é o número de bits. O erro de arredondamento é o **ruído de quantização**. Para um sinal senoidal de fundo de escala, a relação sinal/ruído de quantização é aproximadamente

```
SQNR = 6,02 x n + 1,76 dB
```

Cada bit a mais dá 6 dB. Com 8 bits: cerca de 50 dB (suficiente para voz de telefone); com 16 bits: cerca de 98 dB (CD).

A taxa bruta, com um canal:

```
taxa = fs x n
```

Telefonia digital (PCM): `8000 x 8 = 64 kbit/s`. CD estéreo: `44100 x 16 x 2 = 1,41 Mbit/s`.

## Compressão: menos bits para a mesma voz

64 kbit/s são um luxo para um link de rádio de baixa banda. Codecs de voz exploram o fato de a voz humana ter um modelo (tom da voz, envelope do trato vocal) e enviam parâmetros em vez de amostras. O **Codec2**, um codec aberto usado no modo de voz digital FreeDV do rádio amador, opera em taxas da ordem de 700 a 3200 bit/s (Módulo 7), e códecs de telefonia celular ficam em 5 a 13 kbit/s aproximadamente. O ganho de compressão (dezenas de vezes) é o que faz voz digital caber num canal de HF de 3 kHz.

## Bit, símbolo e baud

Aqui aparece a confusão clássica, e vale precisão.

- **Bit**: unidade de informação, 0 ou 1.
- **Símbolo**: a forma de onda que o transmissor emite durante um intervalo fixo `Ts`. Cada símbolo pertence a um conjunto de `M` possibilidades (o "alfabeto").
- **Taxa de símbolos** ou **baud**: `Rs = 1 / Ts`, símbolos por segundo.
- **Taxa de bits**: `Rb`, bits por segundo (bit/s ou bps).

A ligação:

```
Rb = Rs x log2(M)
```

`log2(M)` é o número de bits que cada símbolo carrega. Em uma modulação binária (`M = 2`), 1 símbolo = 1 bit, e baud = bit/s. Em QPSK (`M = 4`, Aula 6), cada símbolo tem 2 bits: 2400 baud rendem 4800 bit/s. Em 256-QAM, `log2(256) = 8` bits por símbolo.

Analogia para desenvolvedores: um símbolo é como um campo de largura fixa num quadro; aumentar `M` é aumentar o tamanho do campo (mais bits por quadro), sem mudar quantos quadros por segundo se emitem. O que muda é a dificuldade de o receptor distinguir os valores: esse é o preço, e é o fio condutor do resto do módulo.

Por isso "baud" e "bit/s" só coincidem no caso binário. Em conversa técnica, a banda ocupada relaciona-se com o baud (a taxa de símbolos), não com os bits.

## Quanto de banda custa um símbolo

Se cada símbolo fosse um pulso quadrado (retangular no tempo), seu espectro seria uma função sinc que se estende infinitamente e transborda para os canais vizinhos. Filtra-se o pulso para limitar a banda (**pulse shaping**), mas filtrar alonga o pulso no tempo e ele invade o intervalo dos vizinhos: **interferência entre símbolos** (ISI, intersymbol interference).

Nyquist mostrou que existem formatos de pulso que passam por zero exatamente nos instantes em que os outros símbolos são amostrados, então não há ISI. O mais usado é o **cosseno levantado** (raised cosine), com fator de **roll-off** `alfa` entre 0 e 1, que define o excesso de banda. A banda ocupada por um sinal passa-faixa é

```
B = Rs x (1 + alfa)
```

Exemplo resolvido: 9600 baud com `alfa = 0,35`:

`B = 9600 x 1,35 = 12.960 Hz`, cabendo num canal de 25 kHz. Com `alfa = 0`, o mínimo teórico, `B = Rs`; um filtro com alfa zero é irrealizável e muito sensível a erro de tempo, por isso `alfa` de 0,2 a 0,5 é comum.

Na prática, divide-se o filtro entre transmissor e receptor (o par "root raised cosine" com filtro casado), o que maximiza a relação sinal/ruído. O PySDR tem um capítulo sobre isso, com o diagrama de olho (eye diagram), a ferramenta visual para verificar ISI.

### Eficiência espectral

```
eficiencia_espectral = Rb / B    (bit/s por Hz)
```

Com `alfa = 0,35` e QPSK (2 bits/símbolo): `2 / 1,35 = 1,48 bit/s/Hz`. Com 64-QAM: `6 / 1,35 = 4,44 bit/s/Hz`. Aumentar bits por símbolo eleva a eficiência espectral sem aumentar a banda; a Aula 7 mostra o limite teórico (Shannon).

## Resumo

- Digitalizar dá regeneração de sinal, correção de erros e transporte universal de dados.
- Nyquist: `fs >= 2 x B`; abaixo disso ocorre aliasing. A quantização de `n` bits dá SQNR de `6,02 x n + 1,76 dB`.
- Codecs de voz reduzem 64 kbit/s para centenas ou poucos milhares de bit/s.
- Símbolo = forma de onda por intervalo `Ts`; baud = símbolos/s; `Rb = Rs x log2(M)`.
- Banda ocupada: `B = Rs x (1 + alfa)`, com pulsos de cosseno levantado para evitar ISI.
- Eficiência espectral = `Rb / B`: aumentar bits por símbolo eleva o rendimento por Hz.

## Para aprofundar

- [ ] [IQ Sampling (PySDR)](https://pysdr.org/content/sampling.html) (Marc Lichtman): capítulo do livro online sobre Nyquist, aliasing e amostragem I/Q (página aberta e confirmada em setembro de 2026).
- [ ] [Pulse Shaping (PySDR)](https://pysdr.org/content/pulse_shaping.html) (Marc Lichtman): ISI, cosseno levantado, roll-off e diagrama de olho, com código Python (página aberta e confirmada em setembro de 2026).

[Próxima aula: Modulação digital, de ASK a QAM](./06%20-%20Modulacao%20Digital.md)
