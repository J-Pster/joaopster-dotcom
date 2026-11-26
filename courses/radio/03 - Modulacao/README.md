# Módulo 3: Modulação

Você já sabe o que é uma onda, o espectro e o dB (Módulo 1) e como a onda viaja e perde potência no caminho, com o link budget (Módulo 2). Este módulo responde: como colocar informação (voz, bits) nessa onda, e o que se ganha ou perde a cada escolha? Vem agora porque antenas (Módulo 4), SDR (Módulo 6), modos digitais (Módulo 7) e LoRa (Módulo 8) são todos aplicações das ideias aqui: um parâmetro da onda (amplitude, frequência ou fase) carrega a mensagem, e o preço é sempre pago em banda, potência e taxa.

## Aulas

1. [Por que modular](./01%20-%20Por%20que%20Modular.md): por que não se irradia o áudio direto e o que são portadora e sinal modulante.
2. [AM, modulação em amplitude](./02%20-%20AM%20Modulacao%20em%20Amplitude.md): índice de modulação, bandas laterais, banda e eficiência de potência.
3. [DSB e SSB](./03%20-%20SSB%20e%20DSB.md): por que cortar portadora e uma banda lateral e por que o HF usa SSB.
4. [FM e PM](./04%20-%20FM%20e%20PM.md): desvio, índice, regra de Carson, captura, pré-ênfase e por que FM rejeita ruído e gasta mais banda.
5. [Digitalização, bits, símbolos e baud](./05%20-%20Digitalizacao%20e%20Simbolos.md): Nyquist, quantização, símbolo vs bit, banda de um símbolo.
6. [Modulação digital, de ASK a QAM](./06%20-%20Modulacao%20Digital.md): OOK, FSK/GFSK/MSK, BPSK, QPSK, QAM, constelações e por que mais bits por símbolo exigem mais SNR.
7. [Shannon, Eb/N0 e sensibilidade](./07%20-%20Shannon%20e%20Sensibilidade.md): capacidade do canal, limite de -1,59 dB e cálculo de sensibilidade do receptor.
8. [Espalhamento espectral, DSSS, FHSS e CSS](./08%20-%20Espalhamento%20Espectral.md): ganho de processamento e introdução a chirps e LoRa.
9. [OFDM, correção de erros e o compromisso central](./09%20-%20OFDM%20FEC%20e%20Compromisso.md): muitas subportadoras, FEC e a tabela taxa x alcance x banda x potência.

## Nota sobre material de apoio

Os links são poucos e de fontes confirmadas: uma demonstração interativa de AM (Academo), o livro online PySDR (com código e animações) e páginas da Wikipedia. Não encontrei nesta revisão um simulador interativo confirmado de constelações ou de FM; o PySDR e o vídeo da Aula 6 cobrem o que texto não mostra. Os vídeos citados tiveram título e canal confirmados, mas o conteúdo não foi assistido.

## Checklist de saída do módulo

- [ ] Por que uma antena para 1 kHz teria dezenas de km, e como a portadora resolve isso?
- [ ] Onde está a informação no espectro do AM, e por que 67% da potência (com 100% de modulação) é "desperdiçada" na portadora?
- [ ] Por que SSB é a escolha do HF, e o que custa no receptor?
- [ ] Por que a FM rejeita ruído melhor que a AM, e qual é o preço em banda (regra de Carson)?
- [ ] Qual a diferença entre baud e bit/s, e como `Rb = Rs x log2(M)` relaciona os dois?
- [ ] Por que colocar mais pontos numa constelação exige mais SNR para o mesmo erro?
- [ ] O que diz `C = B x log2(1 + SNR)` e por que só banda e SNR compram taxa?
- [ ] Como o espalhamento espectral permite receber sinal abaixo do ruído (ganho de processamento)?
- [ ] Como um símbolo LoRa codifica `SF` bits e por que cada SF a mais dobra o tempo no ar e ganha ~2,5 dB?
- [ ] Como FEC troca taxa por sensibilidade, e como você escolheria entre Wi-Fi, FM, SSB e LoRa para um dado alcance e volume de dados?

Quando estiver confiante, siga para o [Módulo 4: Antenas](../04%20-%20Antenas/README.md).
