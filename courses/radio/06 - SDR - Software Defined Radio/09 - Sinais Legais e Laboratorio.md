# Aula 9: Sinais legais para receber e o SDR como laboratório

[Voltar ao módulo](./README.md)

*Pergunta que esta aula responde: que sinais você pode receber e decodificar com um RTL-SDR (aviões, navios, clima, sensores, LoRa) e como usar o SDR para ver com os próprios olhos o que os Módulos 2 e 3 ensinaram?*

> Status de satélites e projetos conferido em setembro de 2026. Regra do curso (Aula 6): aqui só entram sinais **feitos para serem recebidos livremente** ou de uso livre. Você observa e aprende; não decodifica comunicação privada, cifrada ou celular, não divulga conteúdo alheio e não transmite.

## ADS-B: aviões em tempo real (1090 MHz)

**Por que existe.** O controle de tráfego aéreo quer saber onde cada avião está sem depender só de radar. O **ADS-B** (Automatic Dependent Surveillance-Broadcast) faz cada aeronave transmitir, por conta própria e para qualquer receptor, sua identificação, posição, altitude e velocidade. É radiodifusão de dados, e o RTL-SDR a recebe em **1090 MHz** (o guia do RTL-SDR Blog recomenda R820T2/R860/R828D, bem mais sensíveis nessa frequência que outros sintonizadores). Os decodificadores usam taxa de amostragem de 2 a 2,4 MS/s (README do dump1090 para Windows).

**Mecanismo.** O receptor detecta rajadas de pulsos curtos, decodifica os bits, verifica o **CRC** (código de detecção de erro, o mesmo princípio de checksum de rede) e descarta mensagens corrompidas. O que aparece é uma mensagem "DF 17" com o endereço ICAO da aeronave (identificador de 24 bits), tipo de mensagem (posição, identificação, velocidade) e campos. O `dump1090` mostra na tela exemplos como `DF 17: ADS-B message` e `ICAO Address` (README do projeto Windows).

**Antena.** Vertical, para 1090 MHz: `λ = 300/1090 = 27,5 cm`, `λ/4 = 6,9 cm` (Módulo 4, Aula 1), mais ~5%: cerca de 6,5 cm. As hastes do kit dipolo (5 a 13 cm) servem, com um plano de terra (uma chapa metálica, como a "forma de pizza" de um vídeo de demonstração). O que mais vale é **altura e visada** (Módulo 2, Aula 3). Um LNA com filtro passa-faixa de 1090 MHz, alimentado pelo bias tee (Aulas 4 e 8), ajuda; o RTL-SDR Blog vende um LNA específico para ADS-B.

**Instalação no Windows (caminho mais curto).** Segundo o README do projeto e o fórum da FlightAware:

1. Baixe o repositório [gvanem/Dump1090](https://github.com/gvanem/Dump1090) (zip do GitHub) e extraia; o executável `dump1090.exe` já vem pronto na pasta. Ele traz o `librtlsdr` embutido, mas você precisa do driver WinUSB (Zadig, Aula 7).
2. Execute `setup.exe` uma vez (define geolocalização, indicado pelo README).
3. Em um terminal na pasta: `.\dump1090.exe --interactive --net`.
4. No navegador abra `localhost:8080`. O mapa é o **tar1090**, interface web moderna para decodificadores ADS-B.
5. Para centrar o mapa na sua posição, edite `dump1090.cfg` (a linha `homepos = latitude,longitude`).

Na primeira execução ele baixa um banco de aeronaves da OpenSky (cerca de 24 MB compactados) e o carrega. A opção de ganho automático costuma funcionar melhor (README).

**No Linux/Raspberry Pi**, o caminho comum é o **readsb** (ou dump1090-fa) mais o **tar1090** (`github.com/wiedehopf/tar1090`), com um script de instalação em uma linha (README do tar1090). Com RTL-SDR V4 é preciso atualizar os drivers antes (guia do V4). Não testei essa rota nesta pesquisa.

**Cuidado ao "alimentar" sites (FlightAware, ADS-B Exchange etc.):** você publica dados de sua estação e de sua localização aproximada; leia os termos.

**Exercício 9.1 (ADS-B com o Módulo 2).** A Aula 3 do Módulo 2 dá `d(km) = 4,12 x (raiz(h1) + raiz(h2))` para o horizonte de rádio. Deixe o `dump1090` rodando por uma hora e, no mapa, anote o avião **mais distante** e sua altitude. Calcule o alcance teórico para essa altitude e a altura da sua antena, e compare. Exemplo: avião a 10.000 m, antena a 10 m: `4,12 x (100 + 3,16) = 425 km`. Um avião a 1.000 m: `4,12 x (31,6 + 3,16) = 143 km`. Você deve ver aviões altos muito mais longe que baixos, e nenhum além do horizonte (o tar1090 tem o modo `?pTracks`, que desenha o histórico e ajuda a ver o contorno de alcance). Suba a antena e repita. Isso é o horizonte de rádio medido.

## AIS: navios (161,975 e 162,025 MHz)

O **AIS** (Automatic Identification System) é o equivalente marítimo: navios transmitem posição, identificação e rumo em dois canais de VHF, **161,975 MHz (canal 1)** e **162,025 MHz (canal 2)** (Tech Minds, tutorial sobre o AIS-catcher). Você precisa estar perto de **costa, porto ou rio navegável**. Antena vertical de VHF em ~162 MHz: `λ/4 = 46 cm`, com fator, ~44 cm.

Como decodificar: o **AIS-catcher** é um receptor de AIS de código aberto (compatível com RTL-SDR, Airspy, HackRF, SDRplay). Em Windows, segundo o guia oficial do projeto: baixe o release, extraia, instale o driver WinUSB via Zadig (uma vez por dongle) e execute `start-GUI.bat`; abra `http://localhost:8118` no navegador, onde um assistente escolhe o dispositivo e mostra um mapa. Versões antigas usavam a opção `-N 8100`. Para desenhar os navios em uma carta náutica, o OpenCPN recebe os dados do AIS-catcher (a documentação do projeto explica a conexão). **Não há AIS em toda parte**: se você mora longe da água, use uma fonte remota ou pule esta seção.

## Aviação civil por voz (118 a 137 MHz, AM)

A comunicação de torres e aproximações usa **AM** em VHF (Módulo 3, Aula 2). Uma razão frequentemente dada é que, em AM, dois transmissores simultâneos se ouvem juntos, enquanto na FM o mais forte apaga o mais fraco ("efeito de captura"); é uma regra geral que não conferi em fonte aqui. Sintonize no modo AM (Aula 7). É escuta de aprendizado: **não grave nem divulgue** as conversas (Aula 6). A faixa é ao lado da FM de radiodifusão, onde o overload mais ocorre (Aula 8): um filtro rejeita-faixa de FM ajuda muito.

## Clima por satélite: o fim do NOAA APT e o que o substitui (verificado em setembro de 2026)

O clássico "receber imagens do NOAA" era um sinal analógico **APT** em ~137 MHz dos satélites NOAA-15, NOAA-18 e NOAA-19. **Isso acabou.** Segundo a página de status do POES no OSPO/NOAA e o comunicado do NESDIS:

| Satélite | Descomissionado (UTC) |
|---|---|
| NOAA-18 | 6 de junho de 2025, 17:40 (falha irrecuperável do transmissor de banda S) |
| NOAA-19 | 13 de agosto de 2025, 16:55 (falha em bateria) |
| NOAA-15 | 19 de agosto de 2025, 20:37 |

Os três estão listados como "Decommissioned" na página do OSPO. Tutoriais antigos de "receber NOAA APT" **não funcionam mais**.

**O substituto atual:** **Meteor-M2-3 e Meteor-M2-4** (russos), com o formato **LRPT** (Low Rate Picture Transmission), **digital**, em **137,9 MHz** (canal principal; 137,1 MHz reserva), modulação **OQPSK a 72 kbit/s**, banda ~100 kHz, polarização circular à direita (a-centauri; Meteor-M2-4 foi lançado em 29/fev/2024). Outras notas: segundo um blog de radioamador, o Meteor-M2-2 não transmite mais em 137 MHz (colisão com detrito espacial); o Meteor-M2-3 sofreu falha de abertura da antena, o que causa desvanecimento forte (a-centauri). Em abril de 2026, um radioamador canadense recebeu o Meteor-M2-3 com um dipolo em V e RTL-SDR, com SNR de mais de 10 dB (jeremyclark.ca). Ainda assim, transmissores desses satélites já tiveram períodos de teste e desligamento: **confirme a atividade** antes de montar uma estação.

**Como (SatDump, conforme a-centauri):**

1. **Antena:** dipolo em V (duas hastes de ~52 a 55 cm formando um V com cerca de 120 graus entre elas, valores usados nas fontes; use as hastes do kit) apontado ao satélite; ou uma QFH (quadrifilar) para cobertura omni. Filtro/LNA para 137 MHz ajudam, com bias tee.
2. **Previsão de passagem:** veja quando o satélite passa sobre você (sites como N2YO, ou o painel Tracking do SatDump). Os satélites são de órbita **polar** e cada passagem dura ~10 a 15 minutos (regra geral); passagens de alta elevação dão sinais melhores.
3. **SatDump:** aba Recorder, escolha o SDR, ajuste o ganho, ligue o bias tee se houver LNA, taxa de amostragem 1,024 MS/s; aba Processing, "METEOR M2-x LRPT 72k", marque "DC Blocking"; frequência Primary (137,9) ou Backup (137,1). Quando o satélite surgir, aparece uma "bolha" no waterfall: aperte Start.
4. Sinal de bom lock: o SatDump mostra a constelação **QPSK** com **4 aglomerados** e os contadores de Reed-Solomon (RS) verdes ou amarelos.

Este é o Módulo 3 em ação: QPSK (Módulo 3, Aula 6), FEC de Reed-Solomon (Módulo 3, Aula 9) e Doppler (o satélite se move a ~7,4 km/s: `Δf = f x v/c = 137e6 x 7.400 / 3e8 ≈ 3,4 kHz` no máximo, dentro da banda de 100 kHz; ordem de grandeza).

## Sensores e o mundo ISM: `rtl_433`

Estações meteorológicas, sensores de temperatura, controles remotos, pneus, medidores e outros dispositivos de baixa potência transmitem em faixas de uso livre: **433,92 MHz**, 868 MHz, 315 MHz e **915 MHz** (README do `rtl_433`). No Brasil, dispositivos assim operam em **radiação restrita** (Módulo 5, Aula 6). O `rtl_433` é um receptor de dados genérico que decodifica centenas de protocolos, com RTL-SDR e também com SoapySDR (Lime, Pluto, HackRF).

Instalação (README): Debian/Ubuntu `sudo apt install rtl-433`, macOS `brew install rtl_433`; para Windows veja `BUILDING.md` e a página de releases do projeto. Comandos do README:

```
rtl_433                                   # padrão: 433,92 MHz, 250 kS/s
rtl_433 -f 868M -s 1024k                  # 868 MHz, 1024 kS/s
rtl_433 -f 433.53M -f 434.02M -H 15       # alterna 2 frequências a cada 15 s
rtl_433 -F json                           # saída em JSON
rtl_433 -w amostra.cu8 -T 60              # grava 60 s de I/Q cru (uint8)
```

O `-p <ppm>` corrige o erro do cristal (Aula 8), `-g <ganho>` ajusta o ganho e `-R <n>` seleciona o decodificador. Para um sinal **desconhecido**: use `-A` (analisador de pulsos) e grave amostras; o site triq.org/pdv mostra um espectrograma "de lado" do arquivo. Como o `rtl_433` decodifica tudo em volta, você vai ver sensores de vizinhos: **é ótimo para entender protocolos**, mas mesmo aqui, não registre identificadores para monitorar pessoas (Aula 6).

## LoRa no waterfall: 433, 868 e 915 MHz

Você viu no Módulo 3 (Aula 8) que LoRa usa **chirp spread spectrum**: um **chirp** é uma varredura de frequência ao longo do tempo. No waterfall isso aparece como **linhas diagonais** (varredura ascendente ou descendente). Duração de um símbolo: `T = 2^SF / BW`. Exemplos:

| Configuração | T do símbolo | Como aparece |
|---|---|---|
| SF7, BW 125 kHz | `128/125.000 = 1,02 ms` | Muito rápido: cabe em ~2 linhas de uma FFT rápida |
| SF11, BW 250 kHz (Meshtastic LONG_FAST) | `2048/250.000 = 8,2 ms` | Diagonais visíveis com FFT rápida |
| SF12, BW 125 kHz (Meshtastic LONG_SLOW) | `4096/125.000 = 32,8 ms` | Diagonal longa e nítida |

(Os presets vêm da documentação do plugin `ChirpChat` do SDRangel; confira nos dispositivos.)

O problema técnico é a **resolução tempo-frequência da Aula 3**: com `fs = 2,4 MS/s` e uma FFT de 1.024 pontos, cada linha dura 0,43 ms e cada bin tem 2,3 kHz: um chirp de 125 kHz ocupa ~53 bins de largura, e um de 32,8 ms se estende por ~76 linhas. Para ver a diagonal, **use FFT pequena** (linhas rápidas) e **SF alto**. Dicas de guias: um blog de radioamador (marxy) afirma que os chirps "eram sempre rápidos demais" até se usarem parâmetros mais lentos; um guia de Meshtastic (Jkpg Mesh) mostra no SDRangel a banda de 868 MHz com nó transmitindo, e que **BW 250 kHz aparece visivelmente mais largo que 125 kHz**.

**Como:** centre no canal (no Brasil, LoRa usa a faixa de 915 a 928 MHz, Módulo 5, Aula 6), taxa de 2,4 MS/s, FFT do menor tamanho que aguente, e espere um nó transmitir. Com 2,4 MHz de visão, você não vê os 26 MHz da banda de uma vez: varie a frequência central (Mesh America). Um **RTL-SDR não decodifica LoRa** por si; ele mostra o sinal. Para decodificar, existem demoduladores da comunidade (o plugin ChirpChat do SDRangel; LoRa é propriedade da Semtech e seu protocolo é implementado por engenharia reversa, segundo o próprio README dele). **Regra do curso:** observe **seus próprios** nós. Rede de terceiros e conteúdo cifrado não são seu alvo (Aula 6).

## O SDR como laboratório dos Módulos 2 e 3

Cada item abaixo liga um conceito a um experimento que você já sabe montar.

| Módulo | Conceito | Experimento |
|---|---|---|
| **1** | Ruído térmico `-174 dBm/Hz + 10 log B` | Anote o piso de ruído de 2,4 MHz sem sinal (Aula 8) e compare com `-110 dBm` (Aula 2). Não será calibrado, mas veja o efeito de LNA e cabo. |
| **2, Aula 3** | Horizonte de rádio | ADS-B: alcance máximo vs altitude (Exercício 9.1). |
| **2, Aula 4** | Multipercurso e desvanecimento | Mova a antena por cerca de meio comprimento de onda (1,5 m em 100 MHz; 14 cm em 1090 MHz) e veja o nível do sinal oscilar (lobos de interferência); no ADS-B, o número de mensagens por segundo muda. No Meteor-M2-3, o desvanecimento da antena solta é visível. |
| **2, Aula 5** | Ionosfera dia e noite | Com V3/V4 e fio como antena: compare o mesmo horário de dia e à noite nas ondas curtas (31 m e 49 m) e no 40 m amador. Muitas bandas mudam entre dia e noite (Módulo 2, Aula 5). |
| **2, Aula 7** | Dutos troposféricos | Em noites calmas e limpas com alta pressão, conte as estações de FM que aparecem além do normal (só FM largo, 88 a 108 MHz) e compare noites diferentes. Uma inversão pode trazer estações distantes. |
| **3, Aula 2** | AM: portadora e bandas laterais | Aviação em AM com zoom máximo (Aula 7). |
| **3, Aula 3** | SSB e BFO | 40 m em LSB; erre a banda lateral (Aula 7). |
| **3, Aula 4** | FM larga vs estreita | Filtro de 30 kHz em uma FM larga (Aula 7). |
| **3, Aula 6** | ASK/OOK e FSK | Pulsos no waterfall com `rtl_433 -A`; FSK em 868 ou 915 MHz. |
| **3, Aula 6** | QPSK, constelação | Meteor LRPT no SatDump: 4 aglomerados. |
| **3, Aula 8** | Espalhamento espectral | Chirp LoRa no waterfall. |

## Resumo

- Sinais legais e didáticos para o RTL-SDR: ADS-B (1090 MHz), AIS (161,975 e 162,025 MHz), voz de aviação em AM, clima por satélite e sensores ISM; observe e aprenda, sem decodificar o que é privado ou cifrado.
- O NOAA APT acabou (NOAA-18, 19 e 15 descomissionados em jun/ago de 2025); o substituto é o Meteor-M2-3/M2-4 em LRPT digital, OQPSK 72 kbit/s, 137,9 MHz, com SatDump.
- ADS-B no Windows: `dump1090.exe --interactive --net` e o mapa tar1090 em `localhost:8080`; AIS-catcher em `localhost:8118`; `rtl_433` para sensores.
- LoRa aparece como diagonais no waterfall; o símbolo dura `2^SF/BW`, então use FFT pequena e SF alto; o RTL-SDR mostra, não decodifica.
- Cada experimento fecha um conceito dos Módulos 2 e 3: horizonte de rádio com ADS-B, QPSK com Meteor, chirps com LoRa, AM e SSB no rádio real.

## Para aprofundar

- [ ] [Dump1090 for Windows (README)](https://github.com/gvanem/Dump1090) (gvanem): instalação, opções, uso com tar1090 e sample rate; base do passo a passo de ADS-B.
- [ ] [ADS-B Receiver With RTL SDR | Tracking Aircraft In Real-time!](https://www.youtube.com/watch?v=6pJyCHh_cpE) (SignalsEverywhere): demonstra o `dump1090` com Virtual Radar Server (vídeo de 2019; a interface mudou, mas o fluxo é o mesmo).
- [ ] [AIS-catcher, Quick Start](https://www.aiscatcher.org/quickstart) (aiscatcher.org) e [A multi-platform AIS Receiver For Software Defined Radio](https://www.youtube.com/watch?v=8wRIYuFXOqE) (Tech Minds): instalação e uso do AIS-catcher, com os dois canais de AIS.
- [ ] [POES Instrument & Subsystem Performance Status](https://www.ospo.noaa.gov/operations/poes/status.html) (NOAA/OSPO): status oficial dos NOAA-15, 18 e 19.
- [ ] [METEOR-M satellites reception](https://www.a-centauri.com/articoli/meteor-satellite-reception) (Jacopo Cassinis) e [RTL-SDR for Satellite Weather - Meteor M2-3/4](https://www.youtube.com/watch?v=fwhOLI0Rp9Q) (Jeremy Clark): guia de antena, SatDump e um exemplo de recepção com V-dipole.
- [ ] [rtl_433](https://github.com/merbanan/rtl_433) (merbanan): decodificador de sensores ISM, opções e protocolos suportados; docs em [triq.org/rtl_433](https://triq.org/rtl_433/).
- [ ] [Seeing the Invisible](https://jkpg-mesh.se/blog/seeing-the-invisible) (Jkpg Mesh): waterfall de LoRa com RTL-SDR e SDRangel, larguras de banda no espectro.

[Voltar ao README do módulo](./README.md) ou siga para o próximo: [Módulo 7: Modos Digitais de Rádio Amador](../07%20-%20Modos%20Digitais%20de%20Radio%20Amador/README.md)
