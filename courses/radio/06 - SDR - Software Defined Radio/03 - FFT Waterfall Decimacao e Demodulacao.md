# Aula 3: FFT, waterfall, decimação e demodulação em software

[Voltar ao módulo](./README.md)

*Pergunta que esta aula responde: como o computador transforma o fluxo de amostras I/Q (números no tempo) em espectro na tela e, depois, em som ou bits?*

## Por que precisamos de uma transformada

O que chega do SDR é uma lista de números complexos ao longo do tempo, milhões por segundo. Nessa forma, você não "vê" estações: todas estão somadas na mesma sequência. Mas você viu no Módulo 1 que um sinal periódico é uma soma de senoides de frequências diferentes, e no Módulo 3 que cada modulação ocupa uma região do espectro (AM, banda lateral, FM). O que se quer é separar o sinal por frequência. A ferramenta é a **transformada de Fourier discreta (DFT)**, e seu algoritmo rápido é a **FFT** (fast Fourier transform, complexidade `N log N` em vez de `N^2`).

**Entrada**: `N` amostras complexas consecutivas. **Saída**: `N` números complexos, um por "cesto" de frequência (**bin**). O módulo ao quadrado de cada bin é a **potência** naquela frequência. Como a entrada é complexa (Aula 2), os bins cobrem `-fs/2` a `+fs/2` em torno da frequência de sintonia; a FFT devolve primeiro as frequências positivas e depois as negativas, e por isso as bibliotecas oferecem `fftshift` para centralizar o 0 no meio.

## Resolução: o compromisso entre frequência e tempo

Cada bin tem largura:

```
largura do bin = fs / N
```

e a FFT precisa de `N/fs` segundos de amostras para produzir uma linha. Com `fs = 2,4 MS/s`:

| N (tamanho da FFT) | Largura do bin | Duração de uma linha |
|---|---|---|
| 1.024 | 2.344 Hz | 0,43 ms |
| 4.096 | 586 Hz | 1,7 ms |
| 32.768 | 73 Hz | 13,7 ms |

FFT grande dá **resolução fina em frequência** (dá para ver duas portadoras próximas ou uma portadora estreita destacada do ruído), mas cada linha é lenta em tempo (transmissões curtas se borram). FFT pequena é o contrário. Não existe FFT com as duas coisas: é o princípio da incerteza tempo-frequência, o mesmo que faz o Módulo 3 associar "banda estreita" com "símbolo longo". Programas deixam você escolher o tamanho (SDR#, SDR++, GQRX chamam de "FFT size" ou "resolution").

Além disso, a FFT trata as `N` amostras como se o trecho se repetisse; se o sinal não completa um número inteiro de ciclos nesse trecho, aparece "vazamento" (spectral leakage): a energia de uma portadora se espalha pelos bins vizinhos. A correção é multiplicar as amostras por uma **janela** (Hann, Hamming, Blackman-Harris) que suaviza as bordas do trecho, trocando um pouco de resolução por menos vazamento. Você não precisa escolher isso no dia a dia; saber que existe explica por que o pico de uma portadora tem "saias".

**Média.** O ruído aleatório faz cada bin oscilar de uma linha para outra. Tirar a média de várias linhas assenta o piso de ruído e deixa sinais fracos mais visíveis (o preço é menor resposta rápida). Muitos programas têm o controle "averaging".

Para ver a escala: o espectro é normalmente mostrado em **dB** (`10 x log10(potência)`), porque as diferenças entre sinais fortes e fracos são de dezenas de dB (Módulo 1, Aula 5). No gráfico de espectro, o eixo horizontal é a **frequência** e a altura do traço é a potência.

## O waterfall

Um espectro instantâneo mostra o que existe agora. Para ver **o que mudou**, empilhe as linhas: cada nova FFT vira uma linha de pixels no topo da imagem, com a cor codificando a potência (escuro = ruído, brilhante = sinal), e a imagem desce com o tempo. É o **waterfall** (cachoeira) ou espectrograma. Eixo horizontal: frequência. Eixo vertical: tempo. Cor: potência.

Como ler o waterfall (você usará muito):

| O que aparece | O que é |
|---|---|
| Linha vertical fina e contínua | Portadora contínua (portadora AM sem modulação, um rádio ligado, um "carrier") |
| Faixa estreita (poucos kHz) que pulsa de intensidade | Voz em FM estreita ou AM |
| Faixa larga (~150 a 200 kHz) que "dança" | Estação de FM de radiodifusão |
| Portadora no meio com "asas" simétricas dos lados | AM (Módulo 3, Aula 2) |
| Faixa de ~2,7 kHz só de um lado, sem portadora | SSB (Módulo 3, Aula 3) |
| Duas linhas paralelas, uma se acendendo por vez | FSK (dois tons) |
| Pontos ou traços horizontais curtos e regulares | Pulsos (OOK, dados curtos de sensores) |
| Diagonais repetidas, subindo ou descendo | Chirps: LoRa (Módulo 3, Aula 8; Aula 9 abaixo) |
| Pico fixo bem no centro | Pico de DC do próprio SDR (Aula 2), não é sinal |

O waterfall é a ferramenta que dá ao SDR seu poder: você **reconhece** um sinal desconhecido pela forma antes de saber o que ele é. Os controles de contraste (limites de dB mínimo e máximo, "range" e "offset") não mudam o sinal, só o mapeamento cor-dB.

## Decimação: do espectro largo ao canal estreito

O SDR entrega 2,4 MS/s. Mas uma estação de FM ocupa cerca de 200 kHz e um canal de rádio de voz estreito, 12,5 kHz. Demodular tudo a 2,4 MS/s desperdiça CPU e deixa entrar o ruído dos 2,2 MHz que você não quer. O caminho é extrair o canal: três passos.

**1. Deslocar o canal para 0 Hz.** Multiplique cada amostra por `e^(-j 2π f0 n / fs)`, onde `f0` é o deslocamento (em Hz) entre o canal e o centro. É um **mixer digital**, exatamente o que o RTL2832U faz com o oscilador de 5 MHz na Aula 1, e o que dá aos programas a sintonia "instantânea" dentro da janela: clicar em outra estação no waterfall só muda `f0`, sem tocar no hardware.

**2. Filtrar passa-baixas.** Um filtro deixa passar só `±B/2` em volta de 0 Hz e barra o resto. O tipo comum é o **FIR** (resposta finita ao impulso): cada amostra de saída é a soma ponderada das últimas `L` amostras de entrada (`L` é a "ordem" ou número de coeficientes, "taps"). Quanto mais abrupta a transição entre o que passa e o que é barrado, e quanto maior a atenuação exigida, mais coeficientes são necessários e mais CPU se gasta. É a explicação do controle "Filter Order" do SDR#: ordens baixas deixam vazar vizinhos, ordens altas "afiam" o filtro e pesam no processador (rtl-sdr.com).

**3. Decimar.** Descartar `M-1` de cada `M` amostras. A taxa cai de `fs` para `fs/M`. **A ordem importa**: se você descartar antes de filtrar, o que estava fora da banda dobra para dentro (aliasing, Aula 2). Por isso o RTL2832U tem filtros antes dos redutores de taxa (PA3FWM).

**Exemplo completo (FM de radiodifusão, tudo com números redondos).**

```
2,4 MS/s  ->  [mixer digital: canal para 0 Hz]
          ->  [passa-baixas ~ 100 kHz de meia largura]
          ->  decimar por 10  ->  240 kS/s
          ->  [demodulador FM]  (Módulo 3, Aula 4)
          ->  [passa-baixas de áudio, 15 kHz]
          ->  decimar por 5   ->  48 kS/s  ->  placa de som
```

A conta de banda: FM de radiodifusão tem desvio de 75 kHz e áudio até 15 kHz; a regra de Carson (Módulo 3, Aula 4) dá `2 x (75 + 15) = 180 kHz`, por isso o canal de ~200 kHz. Para 240 kS/s cobrir 200 kHz sem aliasing, a taxa deve ser maior que a largura do sinal complexo: 240 > 200, ok.

Para voz FM estreita (canal de 12,5 kHz), o filtro é mais estreito e a decimação vai direto a ~48 kS/s (`M = 50`): muito menos dados, e o piso de ruído dentro do canal cai por `10 log10(2,4M / 12,5k)`, cerca de 22,8 dB em relação ao ruído de todo o espectro (Aula 2).

## Demodulação: o Módulo 3 vira código

Depois do canal isolado (em banda base, complexo), a demodulação são poucas linhas por modo:

**AM.** A informação está na amplitude (Módulo 3, Aula 2). O software calcula o **módulo** `|x| = raiz(I^2 + Q^2)` de cada amostra e subtrai a média (que é a portadora, nível de DC). É o **detector de envelope** do Módulo 3, sem diodo nem capacitor. Para AM, o CAG (controle automático de ganho) do software normaliza o volume.

**FM.** A informação está na frequência, que é a taxa de variação da fase (Módulo 3, Aula 4). Entre duas amostras consecutivas, a mudança de fase é `angle(x[n] x conj(x[n-1]))`, em radianos por amostra; multiplicando por `fs / (2π)`, resulta em hertz de desvio, que é o sinal de áudio. Um receptor analógico precisa de um circuito discriminador sintonizado; em software é uma multiplicação e um `atan2`. Depois vêm a **de-emphasis** (desfazer a pré-ênfase, Módulo 3) e o filtro de áudio. Em FM estreita o mesmo detector serve, só com desvio menor.

**SSB.** Na Aula 3 do Módulo 3 você viu que o receptor precisa de um oscilador (BFO) preciso, e que um erro de dezenas de Hz muda o timbre da voz. No SDR o BFO é o mixer digital do passo 1: você o ajusta em passos de 1 Hz ou menos, sem problema de cristal. O filtro passa-baixas do passo 2, aplicado a um sinal complexo, pode ser **assimétrico**: mantém, por exemplo, só de `+300 Hz a +2.700 Hz` (USB) ou `-2.700 a -300 Hz` (LSB), e joga fora o lado indesejado. Tomando a parte real da saída, sai o áudio. Este é o "método da fase" que a Aula 3 do Módulo 3 disse ser natural em SDR: o sinal complexo já traz a defasagem de 90 graus.

**Sinais digitais.** FSK usa o mesmo detector de frequência do FM e depois decide "0 ou 1" (Módulo 3, Aula 6); PSK e QAM comparam fase e amplitude com uma constelação. Decodificadores como o do ADS-B, AIS e rtl_433 (Aula 9) fazem essas etapas e depois interpretam os bits.

**Squelch.** Um limite de potência (ou de razão sinal/ruído) que silencia o áudio enquanto não há sinal, para não ouvir chiado o tempo todo.

## Exercício guiado 3.1 (sem hardware): construir e demodular sinais em Python

Requer Python 3 e `numpy` (`pip install numpy`). O programa gera um tom de 1 kHz, modula em FM (desvio 5 kHz) e em AM, e demodula como descrito acima, e mostra onde a FFT enxerga tons complexos e reais.

```python
import numpy as np

fs = 240_000                     # taxa de amostragem do IQ (amostras/s)
t = np.arange(0, 0.05, 1/fs)     # 50 ms
m = np.sin(2*np.pi*1000*t)       # mensagem: tom de 1 kHz

# ---- FM: desvio de 5 kHz ----
dev = 5_000
phase = 2*np.pi*dev * np.cumsum(m) / fs
fm = np.exp(1j*phase)                       # I + jQ
fm += 0.02*(np.random.randn(len(t)) + 1j*np.random.randn(len(t)))  # ruido
d = np.angle(fm[1:] * np.conj(fm[:-1]))     # fase entre amostras vizinhas
audio_fm = d * fs / (2*np.pi*dev)           # normaliza para +-1
print("FM correlacao:", round(np.corrcoef(audio_fm, m[1:])[0, 1], 4))

# ---- AM: indice 0,5 ----
am = (1 + 0.5*m).astype(complex)            # portadora em 0 Hz (banda base)
audio_am = np.abs(am)
audio_am -= audio_am.mean()                 # tira a portadora (DC)
print("AM correlacao:", round(np.corrcoef(audio_am, m)[0, 1], 4))

# ---- FFT: onde esta o tom? ----
N = 4096
n = np.arange(N)
f = np.fft.fftshift(np.fft.fftfreq(N, 1/fs))
def pico(x):
    X = np.abs(np.fft.fftshift(np.fft.fft(x*np.hanning(N))))
    return X, f[np.argmax(X)]
print("largura do bin:", round(fs/N, 1), "Hz")
print("tom complexo +30 kHz, pico em:", pico(np.exp(1j*2*np.pi*30_000*n/fs))[1], "Hz")
print("tom complexo -30 kHz, pico em:", pico(np.exp(-1j*2*np.pi*30_000*n/fs))[1], "Hz")
Xr, _ = pico(np.cos(2*np.pi*30_000*n/fs))   # sinal REAL
print("cosseno real, dois picos em:", sorted(float(v) for v in f[np.argsort(Xr)[-2:]]))
```

Resultado esperado (o valor da correlação de FM varia um pouco com o ruído): FM com correlação próxima de 0,95 a 1, AM próxima de 1, largura de bin de 58,6 Hz, tom `+30 kHz` no bin `+30.000`, tom `-30 kHz` em `-30.000` e o cosseno real com os dois lados, `-30.000` e `+30.000`. Rodei este código durante a redação desta aula e a saída foi essa (correlação de FM: 0,9566 numa execução).

Perguntas para você responder mexendo no código:

1. Aumente o ruído do FM (`0.02` para `0.2`). A correlação cai? Isso é o efeito limiar do FM (Módulo 3, Aula 4) começando a aparecer.
2. Troque `dev` para 500 Hz. O áudio demodulado fica mais fraco em relação ao ruído? (Menos desvio, menos ganho de FM.)
3. Gere um sinal SSB: `usb = np.exp(1j*2*np.pi*1000*t)` (só um lado) e pegue `usb.real`. Compare com a mensagem `cos(2π 1000 t)`.
4. Mude `N` de 4096 para 512 e depois 32768: o que acontece com a largura do bin e com o pico?

## Resumo

- A FFT transforma `N` amostras I/Q em `N` bins de frequência com largura `fs/N`; FFT grande dá resolução fina em frequência e linhas lentas em tempo, e janelas (Hann, Blackman-Harris) reduzem o vazamento.
- O waterfall empilha FFTs no tempo (cor = potência): dá para reconhecer o tipo de sinal pela forma (portadora, faixa larga de FM, SSB sem portadora, FSK, chirp).
- Para isolar um canal: mixer digital leva-o a 0 Hz, filtro passa-baixas o isola e a decimação reduz a taxa; filtrar antes de decimar evita aliasing, e filtros mais afiados custam mais CPU.
- AM é `|x|` menos DC; FM é a fase entre amostras (`angle(x[n] conj(x[n-1]))`); SSB é um filtro assimétrico no complexo mais o mixer digital (BFO exato); FSK usa o detector de frequência do FM.
- É o Módulo 3 sem circuitos: cada demodulador vira poucas linhas de código.

## Para aprofundar

- [ ] [But what is the Fourier Transform? A visual introduction](https://www.youtube.com/watch?v=spUNpyF58BY) (3Blue1Brown): a intuição visual da transformada de Fourier, base da FFT; complementa o texto com animações.
- [ ] [PySDR, capítulo "Frequency Domain"](https://pysdr.org/content/frequency_domain.html) (Marc Lichtman): Fourier, FFT, janelas, `fftshift` e spectrogram (waterfall) com código Python.
- [ ] [PySDR, capítulo "Filters"](https://pysdr.org/content/filters.html) (Marc Lichtman): filtros FIR, decimação e como projetá-los; base do passo de decimação.
- [ ] [SDR with HackRF Training Series](https://www.youtube.com/playlist?list=PLu0BPYzTjiHru1KmPThmbY-8rRm3EWvUQ) (Great Scott Gadgets): curso de Michael Ossmann que usa GNU Radio para construir esses blocos na prática (filtro, decimação, demodulação de FM e AM).
- [ ] [Learn SDR with Prof Jason](https://www.youtube.com/playlist?list=PLywxmTaHNUNyKmgF70q8q3QHYIw_LFbrX) (Harvey Mudd College): playlist com 23 aulas, de recepção de FM em GNU Radio até modulação digital; material de apoio em [gallicchio.github.io/learnSDR](https://gallicchio.github.io/learnSDR/).
- [ ] [SDR# Users Guide](https://www.rtl-sdr.com/sdrsharp-users-guide/) (rtl-sdr.com): tabela de modos (NFM, WFM, AM, LSB, USB, CW, DSB, Raw IQ) e do que controlam filtro, ordem e FFT no programa mais usado no Windows.

Voltar aos módulos anteriores para revisar: [AM](../03%20-%20Modulacao/02%20-%20AM%20Modulacao%20em%20Amplitude.md), [SSB e DSB](../03%20-%20Modulacao/03%20-%20SSB%20e%20DSB.md), [FM e PM](../03%20-%20Modulacao/04%20-%20FM%20e%20PM.md).

[Próxima aula: RTL-SDR por dentro](./04%20-%20RTL-SDR%20por%20Dentro.md)
