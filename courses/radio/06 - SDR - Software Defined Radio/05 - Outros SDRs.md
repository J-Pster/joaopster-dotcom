# Aula 5: Outros SDRs, o que cada um faz e quanto custa

[Voltar ao módulo](./README.md)

*Pergunta que esta aula responde: o que se ganha ao pagar mais que um RTL-SDR, quais SDRs transmitem, o que significam half duplex e full duplex, e qual faz sentido para o seu objetivo?*

> Preços conferidos em setembro de 2026 em páginas de fabricantes e lojas, com a fonte indicada. Valores de lojas variam por região e por dia; onde a página era antiga ou inconsistente, digo isso. Confirme antes de comprar.

## As três coisas que os SDRs de preços diferentes mudam

As Aulas 1 e 2 já dão as três variáveis; um SDR mais caro melhora uma ou mais delas:

1. **Largura de banda instantânea** (taxa de amostragem, Aula 2): de 2,4 MHz (RTL-SDR) a 10, 20 ou 40 MHz.
2. **Resolução e faixa dinâmica do ADC** (bits, Aula 2): de 8 bits a 12 ou 14. Mais bits significa suportar sinais fortes e fracos ao mesmo tempo.
3. **Qualidade do front-end analógico** (Aula 1): filtros de entrada comutáveis, LNA de baixo ruído, oscilador estável, blindagem. Um exemplo de especificação: o Airspy R2 declara figura de ruído de 3,5 dB entre 42 e 1002 MHz, filtros de rastreamento na entrada e IIP3 de +35 dBm no front-end (fabricante); IIP3 mede o nível de sinal forte a partir do qual surgem produtos de intermodulação (falsos sinais), então maior é melhor.

E uma quarta variável, **transmitir ou não**, que muda tudo em custo e em lei (Aula 6).

## Half duplex e full duplex

Um SDR que transmite tem, no mínimo, um caminho de recepção e um de transmissão, que compartilham antena ou não.

- **Half duplex** (semiduplex): ora recebe, ora transmite, mas não ao mesmo tempo. O hardware compartilha circuitos entre RX e TX. Exemplo: HackRF One.
- **Full duplex**: recebe **e** transmite simultaneamente, com sintonias possivelmente diferentes (por exemplo, transmite em uma frequência enquanto recebe a resposta em outra, como em um teste de repetidora, Módulo 5, Aula 7). Exemplo: PlutoSDR e LimeSDR.

Note que "full duplex" aqui é de **hardware**: você ainda precisa de duas antenas (ou de um duplexador) separadas o suficiente, ou o transmissor "cega" o receptor.

## Quadro comparativo

| SDR | Faixa | Banda instantânea | ADC | Transmite? | Preço verificado |
|---|---|---|---|---|---|
| **RTL-SDR Blog V4** | 24 a 1766 MHz (HF pelo conversor interno) | 2,4 MHz típico | 8 bits | Não | US$ 44,95 (dongle), loja oficial rtl-sdr.com |
| **Airspy R2** | 24 a 1700 MHz | 10 MHz | 12 bits (10,4 ENOB) | Não | US$ 169 em página do Airspy.US, **sem data nem estoque confiáveis** (não confirmado em 2026) |
| **Airspy Mini** | 24 a 1700 MHz | 6 MHz | 12 bits | Não | US$ 99 na mesma página, mesma ressalva |
| **SDRplay RSP1B** | 1 kHz a 2 GHz | até 10 MHz | não confirmei | Não | £ 105,80 sem IVA (~US$ 144), sdrplay.com |
| **SDRplay RSPdx-R2** | 1 kHz a 2 GHz | até 10 MHz | 14 bits nativos (taxas até 6 MS/s) | Não | £ 188 sem IVA (~US$ 254), sdrplay.com |
| **HackRF One** | 1 MHz a 6 GHz | 20 MHz | 8 bits | Sim, half duplex | US$ 319,95 (Nooelec) |
| **HackRF Pro** | 100 kHz a 6 GHz, TCXO | 20 MHz | 8 bits (mesma arquitetura) | Sim, half duplex | US$ 399,95 (Nooelec), US$ 400 (SparkFun) |
| **PlutoSDR (ADALM-PLUTO)** | 325 MHz a 3,8 GHz | 20 MHz (até 61,44 MS/s) | 12 bits | Sim, full duplex (1 TX, 1 RX) | US$ 349,95 (Nooelec), US$ 399,99 (Neutron, 25/ago/2026) |
| **LimeSDR Mini 2.0** | 10 MHz a 3,5 GHz | 40 MHz (30,72 MS/s) | 12 bits | Sim, full duplex (1 TX, 1 RX), até ~10 dBm | **não confirmei**: US$ 399 no lançamento (2022); a loja do fabricante mostra um valor claramente anômalo e "sold out" |

Fontes: página "About RTL-SDR" e loja (rtl-sdr.com); airspy.com; sdrplay.com; greatscottgadgets.com; Nooelec e SparkFun; Analog Devices (developer.analog.com); limemicro.com e Crowd Supply. Números de banda e bits que o fabricante publica são "de folha de dados": não os medi.

## O papel de cada família

**RTL-SDR (US$ 40 a 60).** Porta de entrada, receptor puro. Suficiente para tudo que as Aulas 7 a 9 fazem. Limitado por 8 bits e 2,4 MHz (Aula 4).

**Airspy (R2, Mini) e SDRplay (RSP1B, RSPdx-R2).** Receptores puros de melhor desempenho. Mais bits (12 a 14), mais banda (6 a 10 MHz), filtros e oscilador melhores. O SDRplay tem filtros de faixa comutáveis internos, **notch** (filtro rejeita-faixa) para AM, FM e DAB e bias tee, e cobre até VLF (1 kHz), incluindo HF sem conversor externo. O Airspy tem ADC de 12 bits e o modo de oversampling que chega até 16 bits em canais estreitos (Aula 2). São a **atualização natural** de quem já esbarrou nos limites do dongle: overload em cidade, sinais fracos ao lado de fortes, HF de qualidade.

**HackRF One e Pro.** Transceptores baratos de banda muito larga (1 MHz a 6 GHz), half duplex. São uma ferramenta de **laboratório e segurança de RF** (por isso o nome e o público: pesquisadores e curiosos), projetada para "teste e desenvolvimento de tecnologias de rádio" (Great Scott Gadgets). O ADC de 8 bits limita a recepção de alta qualidade; o Pro acrescenta faixa mais baixa (100 kHz) e TCXO. É de código e hardware abertos e tem curso oficial gratuito (Aula 3, links). Um revendedor britânico (hamradio.co.uk) publica uma "nota de compatibilidade" sobre escuta geral (aeronáutica, FM de radiodifusão) na página do Pro, que só consegui ler parcialmente; leia-a antes de comprar para esse fim.

**PlutoSDR (ADALM-PLUTO).** "ADALM" é o nome da linha "Active Learning Module" da Analog Devices; o Pluto é um módulo didático com um transceptor AD9363 e um FPGA Zynq, 12 bits, full duplex, feito para ensino de comunicações. Programa-se por libiio (C, C++, C#, Python), com blocos de GNU Radio, MATLAB e Simulink. Alimentado por USB 2.0. É o SDR de **aprendizado de processamento de sinais e modulação digital** com transmissão. Cobertura de 325 MHz a 3,8 GHz (não chega aos 137 MHz nem à faixa de HF).

**LimeSDR Mini 2.0.** Transceptor USB 3.0 de código aberto, full duplex, 12 bits, 40 MHz de banda, com o chip LMS7002M e uma FPGA Lattice ECP5. Aparece entre as plataformas que o `rtl_433` suporta (Aula 9). Potência máxima de transmissão declarada de ~10 dBm (10 mW; depende da frequência, folha de dados). O preço e a disponibilidade atuais não pude confirmar.

## Abstração de hardware para o desenvolvedor: SoapySDR

Cada SDR tem seu driver e sua API. O **SoapySDR** é uma camada de abstração: um único conjunto de chamadas (`setFrequency`, `setSampleRate`, leitura de stream) que funciona com RTL-SDR, HackRF, Pluto, Lime, SDRplay e outros. Muito software (o `rtl_433` e o `AIS-catcher`, por exemplo, citam suporte via SoapySDR, segundo os READMEs) usa esse padrão, e por isso trocar de SDR raramente exige reescrever o programa. É o mesmo raciocínio de um driver de banco de dados portável.

## Como decidir (para o seu curso)

| Objetivo | SDR sugerido | Motivo |
|---|---|---|
| Aprender, ver waterfall, ADS-B, AIS, sensores, ver LoRa, satélites de clima | RTL-SDR Blog V4 (ou V3, ou V4L) | Barato, cobre tudo isso, recebe HF |
| Cidade com muito sinal forte (FM, TV, celular) e reclamação de overload | SDRplay RSP1B/RSPdx-R2 ou Airspy R2 | Mais bits, filtros e notch |
| Aprender modulação e demodulação digital com transmissão em bancada | PlutoSDR | Foi feito para isso; full duplex; MATLAB e GNU Radio |
| Análise ampla de dispositivos ISM/IoT e segurança | HackRF | Faixa e banda amplas; comunidade grande |

Para o objetivo final do curso (uma rede de comunicação privada em LoRa e mesh, Módulos 8 a 10), **um RTL-SDR basta**: você o usa para **observar** o que seus nós LoRa transmitem (Aula 9), não para gerar o sinal. O transmissor da sua rede será um módulo LoRa certificado (Módulo 5, Aula 6; Módulo 8), não um SDR. Comprar um SDR transmissor só faz sentido para estudar processamento de sinais em bancada, e mesmo assim a transmissão tem regras (Aula 6).

## Resumo

- Um SDR mais caro melhora banda instantânea (2,4 para 10 a 40 MHz), resolução do ADC (8 para 12 a 14 bits) e a qualidade do front-end (filtros, ruído, IIP3, oscilador); e alguns transmitem.
- Half duplex alterna entre RX e TX (HackRF); full duplex recebe e transmite ao mesmo tempo (PlutoSDR, LimeSDR), mas pede antenas separadas.
- Só receptores: RTL-SDR, Airspy, SDRplay. Transceptores: HackRF (US$ 320 a 400), PlutoSDR (US$ 350 a 400), LimeSDR Mini 2.0 (preço atual não confirmado).
- SoapySDR é uma camada de abstração de hardware; muito software funciona com vários SDRs.
- Para observar LoRa e aprender, um RTL-SDR basta; um SDR transmissor só é necessário para estudo de sinais e exige cuidado legal.

## Para aprofundar

- [ ] [Beginner's Guide | Don't Start SDR Until You Watch This! (RTL-SDR vs HackRF vs Pluto vs Portapack)](https://www.youtube.com/watch?v=9lrAsIxnkEU) (Muhammed Mustaqim): compara os SDRs desta aula lado a lado, em vídeo.
- [ ] [HackRF One](https://greatscottgadgets.com/hackrf/one/) (Great Scott Gadgets): especificações oficiais e lista de revendedores.
- [ ] [ADALM-PLUTO, documentação oficial](https://developer.analog.com/docs/system-level/tools/pluto/index.html) (Analog Devices): especificações, bibliotecas e exemplos do PlutoSDR.
- [ ] [LimeSDR Mini 2.0](https://limemicro.com/sdr/limesdr-mini-2-0/) (Lime Microsystems): especificações oficiais e requisitos.
- [ ] [SDRplay RSP1B](https://www.sdrplay.com/rsp1b/) (SDRplay): filtros, notch e bias tee; o [Airspy R2](https://airspy.com/airspy-r2/) (Airspy) tem as especificações do front-end citadas acima.
- [ ] [About RTL-SDR, comparação com SDRs comerciais](https://www.rtl-sdr.com/about-rtl-sdr/) (rtl-sdr.com): tabela de banda, bits e preço de vários SDRs (a tabela é antiga e os preços estão desatualizados; use-a para comparar ordens de grandeza).

[Próxima aula: Por que receber é mais simples que transmitir, e o que a lei brasileira diz](./06%20-%20RX%20e%20TX%20e%20a%20Lei.md)
