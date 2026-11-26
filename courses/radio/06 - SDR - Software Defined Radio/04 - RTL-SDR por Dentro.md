# Aula 4: RTL-SDR por dentro, o que dá e o que não dá para fazer

[Voltar ao módulo](./README.md)

*Pergunta que esta aula responde: como um dongle USB de dezenas de dólares vira um receptor de rádio de 24 a 1766 MHz, o que há dentro dele e quais são seus limites reais?*

> Preços, estoque e versões conferidos em setembro de 2026 na página de compra do RTL-SDR Blog e na documentação oficial. Mudam rápido; confirme antes de comprar.

## De onde vem: um receptor de TV que virou SDR

O RTL-SDR nasceu de um acidente. Sintonizadores USB de TV digital terrestre (DVB-T) usam um chip demodulador chamado **RTL2832U** (da Realtek). Antti Palosaari, Eric Fry e o projeto Osmocom (em especial Steve Markgraf, autor do primeiro driver) descobriram que dava para **pular o demodulador de TV** e ler as amostras I/Q cruas que o chip produz. Como esses dongles são fabricados em massa para TV, custam muito menos do que qualquer receptor de rádio equivalente. O nome "RTL-SDR" e o software são um esforço da comunidade; o RTL-SDR Blog, hoje o vendedor mais conhecido, faz versões melhoradas para uso em SDR.

## O que há dentro: dois chips

Segundo a análise de PA3FWM (radioamador holandês), um dongle é essencialmente dois circuitos integrados:

1. **Sintonizador (tuner)**: um conversor analógico que baixa VHF/UHF para uma frequência de poucos MHz (arquitetura de FI baixa, Aula 1).
2. **RTL2832U**: contém dois ADCs de 8 bits amostrando a **28,8 MS/s**, lógica digital (mixer digital, filtros FIR, redutores de taxa) e a interface USB. A taxa é reduzida para o que o USB comporta (algo abaixo de ~3 MS/s), e o PC recebe I e Q.

O fluxo da Aula 1 aplicado ao 2 m: o R820T tem seu oscilador 4 a 6 MHz abaixo da faixa, o sinal cai em 4 a 6 MHz, o ADC amostra a 28,8 MS/s, o chip o desloca a 0 Hz com um mixer digital de 5 MHz, filtra (dois filtros passa-baixas, o primeiro FIR programável e o segundo fixo) e decima. O sintonizador mais comum é o **Rafael Micro R820T/R820T2** (o **R860** é o mesmo chip com nome diferente, segundo o RTL-SDR Blog; o **R828D** está no V4). Os antigos E4000 (Elonics) saíram de produção e estão caros por raridade, não por serem melhores.

| Sintonizador | Faixa (Osmocom, via rtl-sdr.com) |
|---|---|
| Rafael Micro R820T/R820T2/R860 | 24 a 1766 MHz |
| Rafael Micro R828D (RTL-SDR Blog V4) | 24 a 1766 MHz |
| Elonics E4000 | 52 a 2200 MHz (lacuna de 1100 a 1250 MHz) |
| Fitipower FC0013 / FC0012 | 22 a 1100 MHz / 22 a 948,6 MHz |
| FCI FC2580 | 146 a 308 MHz e 438 a 924 MHz |

## Características que você precisa saber (e o porquê)

| Característica | Valor | Consequência |
|---|---|---|
| Faixa de sintonia | 24 a 1766 MHz (R820T2 e R828D); 500 kHz a 28,8 MHz em HF só nas versões V3 e V4 | Cobre FM, aviação, marítimo, ISM (433, 868, 915 MHz), ADS-B (1090 MHz). Não cobre 2,4 GHz (Wi-Fi/Bluetooth) nem 5 GHz. |
| Largura de banda | 2,4 MS/s típica; 2,56 MS/s máximo sem perdas; 3,2 MS/s instável | Você vê no máximo cerca de 2 MHz de cada vez (Aula 2). Amostras perdidas não atrapalham a visualização, mas estragam a demodulação. |
| ADC | 8 bits, ~7 efetivos | Faixa dinâmica de ~45 dB: um sinal forte pode mascarar os fracos (Aulas 2 e 8). |
| Entrada | SMA 50 ohms (V3, V4 e muitos modernos); dongles antigos usam 75 ohms | O descasamento 75/50 ohms custa menos que 0,18 dB (rtl-sdr.com), então é tolerável. |
| Transmissão | Não transmite | É receptor puro (Aula 6). |
| Clock | Cristal de 28,8 MHz | Erro de frequência em ppm (abaixo). |

### Erro de frequência (ppm) e deriva

O oscilador de cristal que comanda tanto o LO quanto a amostragem não é exato. A imprecisão é medida em **ppm** (partes por milhão): `erro em Hz = f x ppm / 1.000.000`. O oscilador de todo o dongle é referenciado a ele, então o mesmo erro multiplicado pela frequência de sintonia desloca tudo.

- Dongles genéricos: erros de **30 a 50 ppm** são comuns (Skywave Linux), e o valor **muda com a temperatura**, ou seja, **deriva** enquanto o dongle esquenta. Por isso convém deixar o dongle ligado por alguns minutos antes de calibrar (PE2KMV).
- RTL-SDR Blog V3 e V4: oscilador compensado em temperatura (**TCXO**, temperature compensated crystal oscillator), com **erro inicial de no máximo 2 ppm e deriva de 0,5 a 1 ppm** (especificação do fabricante). Na prática você pode ignorar a calibração.

Exemplos em Hz:

- Estação de FM em 100 MHz com erro de 30 ppm: `100.000.000 x 30 / 1.000.000 = 3.000 Hz` (3 kHz). Irrelevante para FM de 200 kHz de largura.
- Canal de voz FM estreita em 162 MHz (AIS/marítimo) com 30 ppm: `162e6 x 30 / 1e6 = 4.860 Hz`. Para um canal de 12,5 kHz isso é quase metade da largura: o sinal aparece deslocado e pode ficar meio fora do filtro.
- ADS-B em 1090 MHz com 1 ppm (TCXO): `1.090 Hz`, sem problema; com 30 ppm seriam 32,7 kHz, ainda assim tolerável para ADS-B por ser de banda larga (~2 MHz).

A calibração prática é a **Aula 8**.

### Bias tee (alimentar um amplificador pelo cabo)

Um **bias tee** injeta corrente contínua no cabo de antena para alimentar um amplificador (LNA, Aula 1) ou uma antena ativa **remotamente**, sem outro cabo de alimentação. O RTL-SDR Blog V3 e V4 tem um bias tee de **4,5 V**, comutado por software, capaz de fornecer até **180 mA** (guia do V4). Ele acende um LED vermelho.

**Cuidado (guia oficial):** não ligue o bias tee com o dongle diretamente conectado a uma antena em curto DC (por exemplo, dipolo de terminais em curto ou um loop) sem LNA no meio, porque isso curto-circuita a saída de 4,5 V. O guia afirma que há fusível térmico e proteção no regulador, mas curto prolongado pode danificar. Regra: só ligue o bias tee quando houver um dispositivo alimentado (LNA, antena ativa, SpyVerter) na outra ponta. Em Windows a opção aparece reaproveitada como o botão "Offset Tuning" do SDR# (só com o driver do RTL-SDR Blog). Também há o utilitário `rtl_biast` no pacote de drivers.

### HF: direct sampling (V3) e conversor (V4)

O sintonizador não recebe abaixo de 24 MHz. Para HF (onde SSB, Módulo 3, e o rádio amador de 40 m e 20 m, Módulo 5, vivem), existem dois caminhos:

- **V3, amostragem direta (direct sampling):** um caminho liga a antena direto ao ADC (o "Q ADC"), com filtro passa-baixas de 25 MHz. Como o ADC roda a 28,8 MS/s, sinais acima de 14,4 MHz "dobram" (aliasing, Aula 2): ao sintonizar 14,4 a 28,8 MHz podem aparecer espelhos de sinais fortes de 0 a 14,4 MHz e vice-versa, e a solução é um filtro passa-baixas ou passa-altas externo para a faixa de interesse (guia do V3). Com o driver do RTL-SDR Blog, o modo liga sozinho ao sintonizar abaixo de 28,8 MHz; com outros drivers é preciso escolher a "Q branch" no menu de configuração do SDR# (guia do V3).
- **V4, conversor de subida (upconverter):** o dongle traz um conversor de HF embutido. **Não** se ativa direct sampling: basta sintonizar a frequência de HF. Ativar direct sampling no V4 não recebe nada (guia do V4).

Limitação geral: um ADC de 8 bits em HF é frágil diante de estações de radiodifusão de ondas médias, que são muito fortes; podem ser necessários filtros externos.

## O que o RTL-SDR dá e o que não dá

| Dá | Não dá |
|---|---|
| FM e AM de radiodifusão, aviação (AM, 118 a 137 MHz), marítimo, radioamador em VHF/UHF | Transmitir |
| ADS-B (aviões), AIS (navios), sensores 433/868/915 MHz (`rtl_433`), satélites meteorológicos em 137 MHz, radiosondas | Receber 2,4 GHz ou 5 GHz (Wi-Fi, Bluetooth, drones) |
| HF com V3 ou V4: SSB, radiodifusão de ondas curtas, modos digitais | Ver mais de ~2,4 MHz de espectro de uma vez |
| Ver LoRa no waterfall em 433/868/915 MHz (Aula 9) | Decodificar LoRa sem software especializado |
| Gravar arquivos IQ para análise posterior | Medir potência em unidades calibradas (não é calibrado) |
| Funcionar como analisador de espectro didático | Bom desempenho com sinais fortes e fracos ao mesmo tempo (8 bits) |

## Kits, antena inclusa e o que comprar

**Preços e disponibilidade (loja oficial rtl-sdr.com, setembro de 2026):**

| Produto | Preço (USD) | Observação |
|---|---|---|
| RTL-SDR Blog V4 (dongle) | 44,95 | R828D, TCXO 1 ppm, bias tee, conversor de HF; a loja o marca como **EOL** (fim de linha) |
| RTL-SDR Blog V4 com kit de antena dipolo | 59,95 | Mesmo dongle mais o kit; estoque baixo (último lote) |
| RTL-SDR Blog V4L (Lite) | 37,95 | Tuner R828S com um ramo de filtro a menos (melhor sensibilidade); primeiro lote pequeno; exige drivers atuais |

A página lista um **revendedor local no Brasil** entre os revendedores independentes, e o preço deles é independente do da loja. Imposto de importação e frete para o Brasil **não confirmei**; considere-os à parte. A loja alerta contra **falsificações** ("Blog V3/V4" azuis, verdes ou prateadas com quatro parafusos por painel, ou vendidas como "Pro"): compre da loja oficial ou de revendedores listados por ela. Dongles genéricos sem nome não têm TCXO nem SMA e costumam ser piores.

**O kit dipolo** (V4): base com 60 cm de cabo RG174, duas hastes telescópicas de 23 cm a 1 m, duas de 5 cm a 13 cm, extensão de 3 m, tripé flexível e ventosa. O comprimento das hastes se ajusta à frequência. Como você aprendeu no Módulo 4 (Aula 1), o dipolo de meia onda tem `λ/2`, e cada haste `λ/4` menos ~5% de fator de velocidade:

| Alvo | Frequência | Cada haste (aproximado) |
|---|---|---|
| FM de radiodifusão | 100 MHz | `λ/4 = 75 cm`, ~71 cm |
| Meteor LRPT (V invertido) | 137,9 MHz | `λ/4 = 54 cm`, ~52 a 55 cm (valores usados nas fontes) |
| ADS-B | 1090 MHz | `λ/4 = 6,9 cm`, ~6,5 cm |

Antenas de fábrica em dongles sem kit (um chicote curto com base magnética) servem para teste, não para uso sério (rtl-sdr.com). **Antena melhor vale mais que dongle melhor** (Módulo 4).

**Requisitos de PC:** basta um processador de dois núcleos para o software gráfico; decodificadores de linha de comando rodam até em um Raspberry Pi (rtl-sdr.com).

## Exercício guiado 4.1

1. **Identifique seu dongle** (ou o que planeja comprar): qual sintonizador, com TCXO ou sem? Se genérico, qual o erro esperado a 162 MHz com 40 ppm? (`162e6 x 40 / 1e6 = 6.480 Hz`.)
2. **Calcule** o comprimento de cada haste de um dipolo para o 2 m amador (146 MHz). (`λ = 300/146 = 2,05 m`; `λ/4 = 51 cm`; com fator 0,95, ~49 cm.)
3. **Conte** quanto de espectro (em MHz) cobre um RTL-SDR a 2,4 MS/s e quantos canais de FM de 200 kHz cabem ao mesmo tempo. (2,4 MHz, 12 canais teóricos, ~10 na prática.)
4. **Decida** se um LNA com bias tee é apropriado para o seu caso e por que exige que o cabo não seja curto DC.

## Resumo

- O RTL-SDR é um sintonizador de TV com o demodulador pulado: um sintonizador de FI baixa (R820T2/R828D) mais o RTL2832U, com ADC de 8 bits a 28,8 MS/s reduzido por filtros e decimação.
- Cobre 24 a 1766 MHz, vê ~2,4 MHz por vez e só recebe; V3 e V4 alcançam HF (direct sampling no V3, conversor no V4).
- O cristal impreciso gera erro em ppm que cresce com a frequência (`Hz = f x ppm / 1e6`) e deriva com a temperatura; V3 e V4 têm TCXO com 2 ppm no máximo e deriva de 0,5 a 1 ppm.
- Bias tee de 4,5 V (até 180 mA) alimenta LNA e antenas ativas, mas nunca deve ser ligado a antena em curto DC sem LNA.
- Preços de setembro de 2026: V4 US$ 44,95, kit US$ 59,95, V4L US$ 37,95; V4 marcado como fim de linha; evite falsificações.

## Para aprofundar

- [ ] [How RTL-SDR dongles work](https://pa3fwm.nl/technotes/tn20.html) (PA3FWM): a análise técnica do interior do dongle, com diagramas dos dois tipos de sintonizador, do direct sampling e dos filtros.
- [ ] [About RTL-SDR](https://www.rtl-sdr.com/about-rtl-sdr/) (rtl-sdr.com): história, tabela de faixas por sintonizador, taxa de amostragem, resolução do ADC, comparação com outros SDRs.
- [ ] [RTL-SDR Blog V4 Users Guide](https://www.rtl-sdr.com/V4/) (rtl-sdr.com): drivers do V4, bias tee, modo HF e como atualizar o software.
- [ ] [RTL-SDR Blog V3 Users Guide](https://www.rtl-sdr.com/V3/) (rtl-sdr.com): direct sampling em HF (500 kHz a 28,8 MHz), aliasing, bias tee e dicas de antena para HF no V3.
- [ ] [Where to Buy RTL-SDR dongles](https://www.rtl-sdr.com/buy-rtl-sdr-dvb-t-dongles/) (rtl-sdr.com): loja oficial, preços, melhorias de cada versão, alerta de falsificações e lista de revendedores.
- [ ] [RTL SDR introduction](https://www.youtube.com/watch?v=n7-yi4ixYSY) (BATC Online): palestra introdutória sobre o RTL-SDR e seus usos.
- [ ] [Beginner's Guide | Don't Start SDR Until You Watch This! (RTL-SDR vs HackRF vs Pluto vs Portapack)](https://www.youtube.com/watch?v=9lrAsIxnkEU) (Muhammed Mustaqim): compara o RTL-SDR com SDRs que transmitem, de onde vem a decisão de comprar; será útil na Aula 5.

[Próxima aula: Outros SDRs e o que cada um faz](./05%20-%20Outros%20SDRs.md)
