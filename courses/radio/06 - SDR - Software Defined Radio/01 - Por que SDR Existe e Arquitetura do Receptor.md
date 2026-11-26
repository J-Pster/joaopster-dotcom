# Aula 1: Por que o rádio definido por software existe e como é um receptor

[Voltar ao módulo](./README.md)

*Pergunta que esta aula responde: que problema o SDR resolve, e quais blocos (antena, LNA, mixer, filtro, ADC) sobram no hardware quando o resto vira software?*

## O problema: rádio analógico é hardware de função fixa

Um receptor tradicional de FM é uma cadeia de circuitos fixos: sintonizador, misturador, filtro, discriminador de FM, amplificador de áudio. O discriminador de FM só demodula FM. Para receber AM, SSB ou um modo digital, é preciso outro circuito (ou outro rádio). Cada modo novo exige hardware novo, e cada ajuste (largura de banda do filtro, tipo de demodulação) exige trocar componentes.

Você viu no Módulo 3 que AM, SSB, FM e as modulações digitais diferem em como a informação está gravada na onda: amplitude, fase, frequência. Todas essas operações (multiplicar, filtrar, medir fase, medir envelope) são **matemática sobre uma sequência de números**. Se você converter a onda em números o mais cedo possível na cadeia, tudo depois disso é programa.

**Rádio definido por software (SDR, software defined radio)** é isso: o hardware faz só o mínimo que a física obriga (captar, amplificar, baixar a frequência, digitalizar), e o computador faz o resto. Analogia com o que você já conhece: o rádio analógico é um circuito integrado de função fixa (ASIC); o SDR é uma placa de captura genérica mais um software. Trocar de FM para SSB passa a ser trocar de módulo de código, não de aparelho. O fluxo que sai do hardware é um **stream de amostras** (números), como um pacote de captura de rede: você pode gravar em arquivo, reproduzir depois, processar offline, enviar pela rede a outro computador.

Consequências práticas:

- Um mesmo aparelho de poucas dezenas de dólares recebe FM, aviação, rastreadores de navios, satélites meteorológicos e sensores sem fio, apenas mudando o software.
- Você **vê** o espectro inteiro de uma vez (não escuta um canal por vez), como um analisador de espectro.
- Dá para gravar o sinal bruto e demodular depois, várias vezes, com parâmetros diferentes.
- Melhorias vêm de atualização de software (novos decodificadores), sem trocar hardware.

O custo: o computador precisa processar milhões de amostras por segundo, e o hardware que digitaliza tem limites (velocidade e precisão) que decidem o que dá para receber. As próximas duas aulas explicam esses limites.

## A cadeia de recepção, bloco a bloco

```
antena -> filtro -> LNA -> mixer <- oscilador local
                            |
                        filtro de canal -> ADC -> [digital] -> USB -> computador
```

**1. Antena.** Converte a onda em tensão (Módulo 4). O SDR é tão bom quanto a antena que o alimenta: nenhum software recupera sinal que a antena não captou.

**2. Filtro de entrada (preseletor).** Deixa passar a faixa de interesse e barra o resto. Existe porque o receptor tem limites (aula 2 e aula 8): sinais fortes fora da faixa, como estações de FM broadcast a poucos quilômetros, podem saturar o circuito e mascarar sinais fracos.

**3. LNA (amplificador de baixo ruído, low noise amplifier).** Os circuitos seguintes (mixer, ADC) adicionam ruído. Se o sinal for fraco, esse ruído o encobre. O LNA amplifica o sinal logo no início, com o mínimo de ruído próprio, de modo que o ruído dos estágios seguintes fica pequeno em comparação. A regra de cascata (Friis para ruído) resume isso:

```
F_total = F1 + (F2 - 1)/G1 + (F3 - 1)/(G1 x G2) + ...
```

`F` é a figura de ruído do estágio (razão, não dB) e `G` o ganho (razão). O primeiro estágio domina: o ruído do estágio 2 é dividido pelo ganho do estágio 1. Exemplo: LNA com `F1 = 1,26` (1 dB) e `G1 = 100` (20 dB), seguido de um receptor com `F2 = 10` (10 dB): `F_total = 1,26 + 9/100 = 1,35`, ou 1,3 dB. Sem o LNA, o sistema teria 10 dB de figura de ruído. Por isso o LNA fica **junto da antena** (com cabo longo depois, a perda do cabo entraria antes do amplificador e somaria à figura de ruído; Módulo 4, Aula 3).

**4. Mixer e oscilador local (LO).** O ADC não consegue amostrar diretamente centenas de MHz com a precisão e o custo de um dongle. A solução clássica é **baixar a frequência**: o **mixer** multiplica o sinal de RF pela onda do oscilador local. Pela identidade trigonométrica `cos(a) x cos(b) = [cos(a-b) + cos(a+b)]/2`, o produto tem componentes na soma e na diferença das frequências. Um filtro elimina a soma e fica a diferença, chamada **frequência intermediária (FI)**: `FI = |f_RF - f_LO|`. O sinal inteiro, com toda a modulação, é deslocado para uma frequência mais baixa sem alterar a informação (o deslocamento só translada o espectro; Módulo 3). Sintonizar passa a ser mudar a frequência do LO.

**5. Filtro de canal.** Depois do mixer, um filtro deixa passar só a faixa que o ADC vai digitalizar (a largura de banda instantânea, aula 2) e barra o resto, evitando o aliasing (aula 2).

**6. ADC (conversor analógico-digital).** Mede a tensão milhões de vezes por segundo e a transforma em números. É a **fronteira**: antes dele, tudo é analógico e fixo; depois, tudo é software. A velocidade (amostras/s) limita a largura de banda; o número de bits limita a faixa dinâmica (aula 2).

**7. Processamento digital.** Em geral parte dele já ocorre dentro do chip do próprio dongle (filtros e redução da taxa, aula 3), e o resto no PC: transformada de Fourier para o espectro, filtro de canal, demodulação, áudio.

## O problema da imagem: por que existem várias arquiteturas

O mixer tem um defeito de nascença. Como `FI = |f_RF - f_LO|`, **duas** frequências de entrada produzem a mesma FI: uma acima e outra abaixo do LO. A indesejada é a **frequência imagem**.

Exemplo do receptor de FM broadcast: para sintonizar 98,1 MHz com FI de 10,7 MHz (valor padrão de rádios FM), o LO fica em `98,1 + 10,7 = 108,8 MHz`. A imagem está em `108,8 + 10,7 = 119,5 MHz`, que por acaso é faixa de aviação. Se ela chegar ao mixer, aparece misturada com a estação de FM. O filtro de entrada (etapa 2) precisa barrá-la, e quanto mais próxima da FI a imagem estiver, mais difícil é filtrar. Como cada arquitetura lida com isso define seu desempenho:

| Arquitetura | Como funciona | Vantagem | Problema |
|---|---|---|---|
| **Superheteródino** | Um ou mais mixers levam o sinal a uma FI fixa (455 kHz em rádio AM, 10,7 MHz em FM), onde um filtro fixo muito bom seleciona o canal. | Seletividade excelente: filtros de cristal e cerâmica em FI fixa são precisos e baratos. | Precisa de filtro de entrada para a imagem; várias conversões aumentam complexidade e produtos espúrios. |
| **Conversão direta (FI zero)** | LO exatamente na frequência do sinal; a FI é 0 Hz (banda base). Usa mixer em quadratura (I e Q, aula 2) para não ter imagem. | Sem imagem "clássica"; ADCs lentos bastam; simples. | Desequilíbrio entre I e Q gera uma imagem residual; **pico de DC** no centro do espectro; ruído 1/f perto de 0 Hz. |
| **FI baixa (low-IF)** | LO fica alguns MHz ao lado do sinal (a FI é de poucos MHz, não zero). O chip suprime a imagem internamente. | Foge do DC e do 1/f; é o caso dos sintonizadores R820T/R820T2 do RTL-SDR (Aula 4). | Precisa de supressão de imagem no chip (finita). |
| **Amostragem direta (direct sampling)** | Sem mixer: a antena vai (com filtro) direto ao ADC, que amostra o RF. | Simplicidade máxima, muitos bits. | Precisa de ADC muito rápido; só é prático para HF em ADCs baratos; o filtro anti-aliasing é obrigatório. |

Resumo da escolha: o RTL-SDR (baixo custo) usa um sintonizador de FI baixa para VHF/UHF e, nas versões V3 e V4, mais um caminho para HF (Aula 4). receptores dedicados de HF costumam preferir amostragem direta com ADCs de mais bits (regra geral, não conferida aqui em fonte específica). Os SDRs de banda larga que também transmitem (Aula 5), como o PlutoSDR, concentram a conversão em um único chip transceptor.

**Exemplo com números (RTL-SDR, R820T2, banda de 2 m).** Segundo a análise do radioamador Pieter-Tjerk de Boer (PA3FWM), o sintonizador R820T coloca seu oscilador **alguns MHz abaixo** da faixa de interesse. Para receber 144 a 146 MHz, o LO fica em 140 MHz: a faixa cai em 4 a 6 MHz e a imagem (134 a 136 MHz) é suprimida dentro do chip. Esse sinal de 4 a 6 MHz vai a um ADC que opera a 28,8 milhões de amostras por segundo; dentro do chip RTL2832U um segundo mixer, digital, em 5 MHz, o leva a 0 Hz, e filtros digitais reduzem a taxa para o que o USB comporta (Aula 4).

## O que é hardware e o que é software, resumindo

| Função | Onde fica |
|---|---|
| Captar a onda | Hardware (antena) |
| Filtrar sinais fortes fora da faixa, amplificar com baixo ruído | Hardware |
| Baixar a frequência (mixer + LO) | Hardware analógico (ou digital no dongle) |
| Digitalizar | Hardware (ADC): a fronteira |
| Escolher o canal, medir o espectro, demodular AM/FM/SSB e digital | Software |
| Decodificar protocolos (ADS-B, AIS, rtl_433) | Software |

Quanto mais perto da antena o software começa, mais flexível é o rádio (e mais caro o ADC e o processamento). O dongle barato fica num meio-termo: um sintonizador analógico faz o grosso da seleção e só uma janela estreita (por volta de 2 MHz) é digitalizada.

## Por que começar por receber

Nas próximas aulas o foco é **receber**. Transmitir com SDR existe, mas exige mais hardware (amplificador de potência, filtros de harmônicas) e, sobretudo, autorização legal (Módulo 5); a Aula 6 explica por que receber é tão mais simples e o que a lei brasileira diz sobre o que se pode fazer com o que se recebe.

## Resumo

- SDR move a parte flexível do rádio (filtro de canal, demodulação, decodificação) para software; o hardware só capta, amplifica, baixa a frequência e digitaliza. O ADC é a fronteira.
- O LNA fica no início porque o primeiro estágio domina a figura de ruído da cadeia (`F_total = F1 + (F2-1)/G1 + ...`).
- O mixer translada o espectro (`FI = |f_RF - f_LO|`) e cria a frequência imagem, que precisa ser filtrada ou suprimida por quadratura.
- Arquiteturas: superheteródino (FI fixa), conversão direta (FI zero, com pico de DC), FI baixa (RTL-SDR) e amostragem direta (HF).
- Vantagens do SDR: um aparelho para muitos modos, espectro amplo visível, gravação do sinal bruto e demodulação posterior.

## Para aprofundar

- [ ] [#286 How does Software Defined Radio (SDR) work under the Hood? SDR Tutorial](https://www.youtube.com/watch?v=xQVm-YTKR9s) (Andreas Spiess): visão geral do que muda da cadeia analógica para a digital; boa para ver o diagrama em movimento.
- [ ] [Software Defined Radio with HackRF by Michael Ossmann, Lesson 1](https://www.youtube.com/watch?v=BeeSN14JUYU) (Great Scott Gadgets): primeira aula do curso oficial do criador do HackRF; introduz SDR e monta um receptor de FM em GNU Radio (a Aula 7 volta a isso).
- [ ] [How RTL-SDR dongles work](https://pa3fwm.nl/technotes/tn20.html) (PA3FWM): a arquitetura real do dongle (sintonizador, quadratura, filtros); base do exemplo numérico acima.
- [ ] [PySDR, capítulo "SDR and SDRs"](https://pysdr.org/content/sdr.html) (Marc Lichtman): explica a arquitetura de receptores (conversão direta, FI, amostragem direta) com diagramas; texto de referência em inglês.
- [ ] [Getting Started With SDR (Software Defined Radio): A Tutorial](https://www.youtube.com/watch?v=HUkaIJhoYUs) (Austin's Nerdy Things): demonstra na prática o que o mesmo hardware recebe (FM, ADS-B, outros), útil para ver o resultado do conceito.

[Próxima aula: Amostras IQ, taxa de amostragem e ADC](./02%20-%20Amostras%20IQ%20Amostragem%20e%20ADC.md)
