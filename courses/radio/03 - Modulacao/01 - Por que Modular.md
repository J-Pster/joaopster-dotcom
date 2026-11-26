# Aula 1: Por que modular

[Voltar ao módulo](./README.md)

*Pergunta que esta aula responde: por que não se irradia o sinal de áudio diretamente, e o que significa "pegar carona" numa onda portadora?*

## O problema: áudio puro não funciona como rádio

Uma voz, depois de passar por um microfone, vira uma tensão elétrica que oscila entre cerca de 300 Hz e 3 kHz (a faixa de inteligibilidade da voz; música vai até ~20 kHz). Ligar essa tensão numa antena e esperar que ela se propague como onda de rádio falha por três motivos independentes.

### Motivo 1: a antena teria o tamanho de uma cidade

Do Módulo 1: `c = f x lambda`. Uma antena eficiente tem dimensão comparável a uma fração do comprimento de onda, tipicamente `lambda/4` (o Módulo 4 explica o porquê). Com `c = 300.000 km/s`:

| Frequência | Comprimento de onda | Antena de `lambda/4` |
|---|---|---|
| 1 kHz (áudio) | 300 km | 75 km |
| 3 kHz (voz, extremo alto) | 100 km | 25 km |
| 20 kHz (áudio, extremo alto) | 15 km | 3,75 km |
| 100 MHz (rádio FM) | 3 m | 75 cm |
| 2,4 GHz (Wi-Fi) | 12,5 cm | 3,1 cm |
| 915 MHz (LoRa nas Américas) | 32,8 cm | 8,2 cm |

Uma antena muito menor que `lambda` existe, mas irradia pouquíssimo: a maior parte da potência vira calor na resistência do fio em vez de onda. Irradiar 1 kHz com uma antena de 1 m é, na prática, irradiar nada. Subir a frequência resolve: uma onda de 100 MHz se irradia bem com 75 cm de metal.

### Motivo 2: todo mundo falaria na mesma faixa

Toda voz humana ocupa aproximadamente a mesma faixa de 300 Hz a 3 kHz. Se duas estações transmitissem áudio direto, os sinais se somariam no ar e o receptor ouviria a mistura, sem como separar. Em redes de computadores, seria como todos os hosts usando a mesma porta e o mesmo endereço.

A solução é deslocar cada sinal para uma região diferente do espectro (Módulo 1), como se cada estação recebesse um "endereço" de frequência. Isso se chama **multiplexação por divisão de frequência** (FDM). O receptor "sintoniza" escolhendo qual região escutar.

### Motivo 3: propagação depende da frequência

Do Módulo 2: a forma como uma onda viaja (reflexão na ionosfera, linha de visada, difração) depende da frequência, não do conteúdo. Para escolher a faixa que atinge onde se quer (HF para longa distância, UHF para curta distância com alto volume de dados), é preciso poder levar a informação para a frequência escolhida. O sinal de áudio, sozinho, está preso em 0 a 20 kHz.

## A ideia: portadora e sinal modulante

Uma onda senoidal pura, `s(t) = A x cos(2 x pi x f x t + fase)`, tem três parâmetros: **amplitude** (A), **frequência** (f) e **fase**. Sozinha, ela não carrega informação alguma: é sempre a mesma. Mas ela se irradia bem, se propaga bem e fica na frequência que escolhemos.

Chamamos essa senoide de **portadora** (carrier), com frequência `fc`. A informação a transmitir (voz, bits) é o **sinal modulante** (baseband, message), com frequência baixa. **Modular** é variar um dos três parâmetros da portadora seguindo o sinal modulante. Em vez de enviar o áudio, envia-se uma onda de alta frequência cujo A, f ou fase "carrega" o áudio.

Isso dá exatamente três famílias, que o resto do módulo percorre:

| Parâmetro variado | Analógico | Digital |
|---|---|---|
| Amplitude | AM (Aula 2), SSB (Aula 3) | ASK / OOK (Aula 6) |
| Frequência | FM (Aula 4) | FSK, GFSK, MSK (Aula 6) |
| Fase | PM (Aula 4) | PSK (Aula 6) |
| Amplitude e fase | | QAM (Aula 6) |

O receptor faz o caminho inverso, a **demodulação**: recupera o parâmetro que variou e reconstrói a mensagem.

## O que acontece no espectro

Modular desloca o espectro. O sinal de voz ocupa 300 Hz a 3 kHz ao redor de zero. Depois de modulado numa portadora de 7,1 MHz, a informação passa a ocupar uma pequena região ao redor de 7,1 MHz, com largura da ordem de alguns kHz. A largura dessa região é a **largura de banda** (bandwidth, B) do sinal modulado, e cada técnica de modulação gasta uma quantidade diferente dela. Esse é o recurso que o módulo inteiro administra.

A vantagem prática: com portadora em 7,1 MHz e outra em 7,2 MHz, duas conversas convivem, e cada antena pode ter um tamanho razoável para sua frequência.

## Modular também é uma ferramenta de engenharia, não só de deslocamento

Além de resolver antena e canal, a escolha da modulação define:

- **Robustez a ruído e interferência**: FM e espalhamento espectral trocam banda por robustez (Aulas 4 e 8).
- **Eficiência de banda**: QAM e OFDM colocam muitos bits por segundo por Hz (Aulas 6 e 9).
- **Eficiência de energia**: modulações de envelope constante deixam o amplificador de transmissão trabalhar na eficiência máxima (Aula 4 e Aula 6).
- **Sensibilidade** do receptor: quanto sinal fraco ele consegue decodificar (Aula 7).

O compromisso entre esses quatro fatores (taxa, alcance, banda, potência) é o tema central e fecha o módulo (Aula 9). Nenhuma modulação vence em todos ao mesmo tempo.

## Resumo

- Áudio puro não é irradiado porque a antena teria km de comprimento (`lambda/4` a 1 kHz = 75 km), porque todas as fontes de áudio ocupam a mesma faixa e porque a propagação é escolhida pela frequência.
- A **portadora** é uma senoide de alta frequência que se irradia bem; o **sinal modulante** carrega a informação.
- **Modular** é variar amplitude, frequência ou fase da portadora conforme a mensagem; **demodular** é o caminho inverso.
- Modulação desloca o espectro para a frequência da portadora, e o sinal modulado ocupa uma largura de banda que cada técnica gasta de um jeito.
- A escolha da modulação define robustez, eficiência de banda, eficiência de energia e sensibilidade.

## Para aprofundar

- [ ] [Modulation and Carrier Waves](https://www.youtube.com/watch?v=2NUxz81_4Lg) (Telecom Education): vídeo introdutório sobre a relação entre portadora, modulação e tamanho de antena (título e canal confirmados por oEmbed; o vídeo não foi assistido).

[Próxima aula: AM, modulação em amplitude](./02%20-%20AM%20Modulacao%20em%20Amplitude.md)
