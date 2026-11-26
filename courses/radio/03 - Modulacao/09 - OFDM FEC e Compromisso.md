# Aula 9: OFDM, correção de erros e o compromisso central

[Voltar ao módulo](./README.md)

*Pergunta que esta aula responde: como se transmite muita informação num canal com reflexos, como se compra sensibilidade com redundância e como escolher entre taxa, alcance, banda e potência?*

## OFDM: muitos canais lentos em vez de um rápido

### O problema

Em altas taxas de símbolos, cada símbolo dura pouco (por exemplo, 1 microssegundo). Com **multipercurso** (Módulo 2), o mesmo sinal chega por caminhos de comprimentos diferentes e as cópias atrasadas atingem o receptor durante os símbolos seguintes: interferência entre símbolos (ISI, Aula 5). Se o atraso extra (delay spread) de um ambiente urbano é da ordem de 1 a 5 microssegundos, um símbolo de 1 microssegundo é destruído.

Equalizar isso num único canal rápido é difícil. **OFDM** (orthogonal frequency-division multiplexing) muda a estratégia: divide o fluxo de bits em `N` fluxos lentos, cada um modulando uma **subportadora** própria. Se `N = 64`, cada subportadora tem símbolos 64 vezes mais longos, muito maiores que o atraso dos reflexos, e a ISI passa a atingir só uma pequena fração de cada símbolo.

### Mecanismo

1. **Subportadoras ortogonais.** As subportadoras são espaçadas de exatamente `1 / Ts` (o inverso da duração útil do símbolo). Nessa condição, o espectro de cada uma tem zero exatamente onde as outras têm pico, então elas se sobrepõem sem interferir. É uma forma eficiente de usar a banda (sem faixas de guarda entre subportadoras).
2. **IFFT.** Gerar `N` portadoras moduladas em separado seria caro. Mas o sinal resultante é a **transformada inversa de Fourier** dos `N` símbolos (um por subportadora, pontos QAM, Aula 6). O transmissor coloca os símbolos QAM numa IFFT; o receptor aplica uma FFT para recuperá-los. É o mesmo algoritmo de FFT do Módulo 1 e do SDR.
3. **Prefixo cíclico.** No início de cada símbolo OFDM, copia-se o final dele. Esse trecho serve de **guarda**: reflexos atrasados atingem apenas o prefixo, sem contaminar a parte útil, e como a cópia é cíclica, a ortogonalidade se mantém. (A Wikipedia destaca o prefixo cíclico como o elemento que elimina a ISI.)
4. **Modulação por subportadora.** Cada subportadora pode usar uma modulação diferente (BPSK, QPSK, 64-QAM), escolhida conforme a qualidade daquela frequência; se um trecho do espectro sofre desvanecimento seletivo, só ele perde taxa.

Exemplo, Wi-Fi 802.11a/g (números clássicos do padrão, não reconfirmados nesta pesquisa): canal de 20 MHz, FFT de 64 pontos, 48 subportadoras de dados, espaçamento de 312,5 kHz, símbolo de 4 microssegundos incluindo 0,8 microssegundo de prefixo cíclico. A largura de 20 MHz com 64 subportadoras dá 20 MHz / 64 = 312,5 kHz, o que confere.

### Onde OFDM aparece e limitações

Wi-Fi (802.11a/g/n/ac/ax), LTE e 5G, TV digital (o padrão brasileiro ISDB-Tb usa OFDM), rádio digital DAB, DSL (variante chamada DMT). OFDM é a modulação da banda larga moderna.

Limitações: sensível a erro de frequência (perde a ortogonalidade), e a soma de muitas subportadoras produz picos de potência altos (PAPR alto), exigindo amplificadores lineares (Aula 6). Por isso OFDM é raro em IoT de baixa potência: LoRa usa chirps (Aula 8), não OFDM.

## Codificação de canal e FEC

### Por que

A Aula 7 mostrou que o limite de Shannon está ~8 dB abaixo do que QPSK cru exige. A ponte é **redundância**: transmitir bits extras derivados dos bits de dados, de modo que o receptor **detecte e corrija** erros sem pedir retransmissão. Isso é **FEC** (forward error correction).

Em redes de computadores o equivalente é: CRC detecta erros; TCP os corrige por retransmissão (ARQ). Em rádio, retransmitir custa muito, ou é impossível (broadcast, satélite), e o canal tem erros constantes; FEC corrige no destino.

### Ideia mínima: repetição

Envie cada bit 3 vezes e decida por maioria. Se a probabilidade de erro de um bit é `p = 0,01`, a decisão errada exige pelo menos 2 erros em 3: `P ≈ 3 x p^2 = 3e-4`. Erro caiu 33 vezes, mas a **taxa de código** (`k/n`, bits úteis por bits enviados) é 1/3: gasta 3 vezes mais tempo no ar ou banda.

Códigos reais são muito mais inteligentes: obtêm o mesmo ganho com bem menos redundância.

### Famílias

- **Códigos de bloco**: pegam `k` bits e produzem `n` bits. O **Hamming(7,4)** codifica 4 bits em 7 (taxa 4/7), corrige 1 bit errado e detecta 2 (PySDR). **Reed-Solomon** corrige rajadas de símbolos errados (CDs, DVD, TV).
- **Convolucionais**: geram a saída como função dos últimos bits; decodificados pelo algoritmo de Viterbi. Usados em Wi-Fi e satélite.
- **Turbo e LDPC**: chegam perto do limite de Shannon (PySDR: usados em 3G, 4G e Wi-Fi). O modo digital amador FT8 usa um código LDPC (174 bits enviados a partir de 91 bits, incluindo CRC; dado de memória, Módulo 7 detalha).
- **Interleaving** (entrelaçamento): embaralha a ordem dos bits antes do envio. Um desvanecimento que corrompe um trecho contínuo vira erros espalhados, que os códigos corrigem bem. Rajadas de erro concentradas são o pesadelo de códigos de bloco.

### Decisão dura e branda

O demodulador pode entregar ao decodificador só o bit decidido (0 ou 1, **decisão dura**), ou o valor contínuo que diz "quão perto do limite estava" (**decisão branda**, soft decision). A branda dá cerca de 2 dB de ganho a mais (valor típico citado na literatura; não confirmado aqui) porque preserva a confiança de cada bit.

### Ganho de codificação e custo

**Ganho de codificação**: quantos dB de `Eb/N0` a menos se precisa para a mesma taxa de erro, com código e sem. Códigos modernos dão 5 a 8 dB. Custo: taxa de código menor (menos bits úteis por segundo) e mais processamento.

Em LoRa, o `CR` de 4/5 a 4/8 é a taxa de código: 4 bits de dados viram 5 a 8 bits transmitidos (Aula 8). Um `CR` maior sacrifica taxa e ganha robustez contra interferências curtas, sem mudar a modulação.

## O compromisso central: taxa, alcance, banda, potência

As Aulas 4 a 8 e a de Shannon mostram um único jogo de quatro variáveis.

| Variável | O que muda com ela |
|---|---|
| **Taxa** (`Rb`) | Alta = mais bits por segundo, mais SNR, ou mais banda. Baixa = mais sensibilidade. |
| **Alcance** | Depende de potência recebida menos sensibilidade (link budget, Módulo 2). |
| **Banda** (`B`) | Larga = mais taxa possível, mas mais ruído recebido (`N = k T B`) e menos canais disponíveis. |
| **Potência** | Mais potência = mais alcance, mais consumo, mais interferência nos vizinhos, e limites legais. |

### Alavancas e efeito

| Ação | Efeito de sensibilidade | Efeito em taxa | Efeito em banda |
|---|---|---|---|
| Dividir a taxa por 2 (mesma banda) | +3 dB | -50% | igual |
| Dividir a banda por 2 (mesma modulação) | +3 dB (piso de ruído menor) | -50% (a taxa de símbolos cai junto com a banda) | -50% |
| Subir de QPSK para 16-QAM | cerca de -4 dB em `Eb/N0` | +100% | igual |
| Adicionar FEC (`CR` 1/2) | ganho de codificação (alguns dB, conforme o código) | -50% | igual |
| LoRa: SF7 para SF12 | +12,5 dB | de 5,5 para 0,29 kbit/s (~19x menor) | igual (125 kHz) |
| Subir potência 4x (+6 dB) | +6 dB | igual | igual |

Sobre alcance, em espaço livre (Módulo 2: `FSPL` cresce 20 dB por década de distância, 6 dB por dobra): +6 dB dobram a distância. LoRa de SF7 para SF12 (+12,5 dB) multiplica a distância por `10^(12,5/20) = 4,2` em espaço livre; em ambiente real, com expoente de perda maior, o ganho em alcance é menor.

### Perfil dos sistemas que veremos

| Sistema | Banda | Taxa | Sensibilidade / SNR mínimo | Escolha |
|---|---|---|---|---|
| Wi-Fi (OFDM, 64-QAM ou mais) | 20 a 160 MHz | centenas de Mbit/s | SNR alto (ordem de 25 dB ou mais) para as taxas máximas; ordem de grandeza, não confirmado | banda larga, curto alcance |
| Voz FM VHF/UHF | 12,5 a 25 kHz | analógica, ~3 kHz de áudio | SNR de RF ~10 dB (limiar) | qualidade estável, alcance médio |
| SSB no HF | ~2,7 kHz | voz | SNR ~10 dB em 2,7 kHz | economia de banda, longa distância |
| FT8 (Módulo 7) | ~50 Hz | 6,25 baud, poucos bit/s efetivos | decodifica perto de -20 dB de SNR na referência de 2500 Hz (dado de memória; confira no Módulo 7) | sinais fracos, taxa mínima (mensagens curtas em janelas de ~15 s) |
| LoRa SF12 125 kHz | 125 kHz | 0,3 kbit/s | -20 dB, -137 dBm | máximo alcance com mínimo consumo |
| LoRa SF7 | 125 kHz | 5,5 kbit/s | -7,5 dB | mais taxa, menos alcance |

Conclusão para o seu objetivo (rede privada de baixa potência, com voz não necessária): os requisitos "longa distância" e "baixo consumo" empurram para modulações de envelope constante, taxa baixa e muito espalhamento, como LoRa. A troca é aceitar centenas de bit/s a poucos kbit/s, o que basta para mensagens de texto, telemetria e protocolos como Reticulum (Módulo 10), mas nunca para vídeo. Para volume alto, usa-se Wi-Fi ou outro link de banda larga e curto alcance.

## Aviso: modulação não é licença

Entender modulação não autoriza transmitir. No Brasil, a operação de transmissores de radiofrequência depende de regras da Anatel conforme a faixa e o equipamento (homologação de equipamentos, limites de potência e faixas de uso livre). O radioamadorismo tem regras próprias de conteúdo: por exemplo, os modos usados precisam permitir, em princípio, que outros decodifiquem o conteúdo, sem cifra para ocultar o significado, e há restrição a fins comerciais. Este material **não** foi reconfirmado nas fontes oficiais nesta revisão (a verificação em fonte oficial da Anatel e da LABRE fica para o Módulo 5, "Rádio Amador: Regulamentação e Prática"); antes de transmitir, consulte-as. Há também riscos físicos de RF e elétricos quando se monta hardware (potência de saída, antenas perto de rede elétrica), tratados nos módulos de antena e de prática.

## Resumo

- OFDM divide o fluxo em muitas subportadoras ortogonais lentas (IFFT no transmissor, FFT no receptor) e usa prefixo cíclico para vencer multipercurso; é a base do Wi-Fi, LTE e TV digital.
- FEC acrescenta redundância para corrigir erros no destino; a taxa de código `k/n` mede o custo; interleaving combate rajadas; decisão branda ganha mais que a dura.
- Codificação moderna fecha a maior parte da distância até o limite de Shannon; o preço é taxa.
- Taxa, alcance, banda e potência formam um compromisso: para dobrar o alcance é preciso +6 dB, comprável com potência, com menos taxa (3 dB por metade), com FEC ou com espalhamento.
- Longo alcance e baixo consumo empurram para FSK/GFSK ou chirps, taxa baixa e envelope constante; alta taxa empurra para QAM/OFDM, banda larga e curto alcance.
- Saber modular não autoriza transmitir: Anatel e regras do radioamadorismo valem.

## Para aprofundar

- [ ] [Channel Coding (PySDR)](https://pysdr.org/content/channel_coding.html) (Marc Lichtman): FEC, taxa de código, Hamming, decisão branda, turbo e LDPC (página aberta e confirmada em setembro de 2026).
- [ ] [Orthogonal frequency-division multiplexing (Wikipedia)](https://en.wikipedia.org/wiki/Orthogonal_frequency-division_multiplexing) (Wikipedia): IFFT, prefixo cíclico e histórico do OFDM (página aberta e confirmada em setembro de 2026).

[Voltar ao módulo e ao checklist](./README.md)
