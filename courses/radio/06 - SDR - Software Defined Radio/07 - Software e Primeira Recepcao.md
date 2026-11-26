# Aula 7: Software, drivers e a primeira recepção

[Voltar ao módulo](./README.md)

*Pergunta que esta aula responde: que programas existem, o que faz o driver no Windows, e como instalar tudo e ouvir a primeira estação de FM (e ver os modos do Módulo 3 na tela)?*

> Passos conferidos em setembro de 2026 no guia de início rápido do RTL-SDR Blog e nos READMEs dos projetos. Versões e nomes de menu mudam: se algo não bater com a sua versão, siga a documentação do programa.

## Por que existe um passo de "driver"

Ao ligar o dongle, o Windows reconhece um **receptor de TV digital** e instala o driver de TV. Esse driver não entrega I/Q ao seu programa. É preciso substituí-lo por um driver USB genérico, o **WinUSB**, que deixa qualquer programa "conversar" com o dispositivo por meio da biblioteca **libusb**, e o `rtlsdr.dll` (a biblioteca do projeto) sabe usá-lo para pedir amostras. A ferramenta que instala o WinUSB é o **Zadig**. Em Linux e macOS o processo é diferente: no Linux é preciso "blacklistar" o driver de TV (`dvb_usb_rtl28xxu`) para ele não tomar o dispositivo (guia do V4).

## O ecossistema de software

| Programa | Plataforma | Para que serve | Observação |
|---|---|---|---|
| **SDR#** (SDRSharp) | Windows | Receptor gráfico mais usado com RTL-SDR; plugins | Distribuído gratuitamente pela Airspy (airspy.com/download). Recomendado pelo RTL-SDR Blog como o mais fácil de instalar. |
| **SDR++** | Windows, Linux, macOS, BSD, Android | Receptor gráfico moderno, código aberto (GPL-3), modular | Descrito como "sem inchaço" e simples de usar; há builds "nightly" (README). É a segunda escolha do RTL-SDR Blog. |
| **GQRX** | Linux e macOS (Windows via radioconda) | Receptor AM/FM/SSB ou instrumento só de FFT | Feito sobre GNU Radio e Qt; expõe ganchos por soquete de rede (README). |
| **CubicSDR** | Windows, macOS, Linux | Receptor gráfico multiplataforma | Último commit no repositório: fev/2022; o RTL-SDR Blog o chama de "aparentemente abandonado". Prefira SDR++. |
| **SDRangel** | Multiplataforma | Receptor avançado com muitos demoduladores (inclusive um demodulador de LoRa/chirps) | Interface complexa, poderosa. |
| **SatDump** | Multiplataforma | Recebe e decodifica satélites (Meteor LRPT, outros) | Aula 9. |
| **SDRconnect** (SDRplay) | Windows, macOS, Linux | Programa oficial de SDRplay | Para os SDRs da SDRplay. |
| **GNU Radio** | Multiplataforma | Toolkit para **construir** cadeias de processamento | Abaixo. |
| Decodificadores de linha de comando | Todas | `rtl_433`, AIS-catcher, dump1090 | Aula 9. |

**GNU Radio em nível conceitual.** Os programas acima são aplicações prontas. O **GNU Radio** é uma biblioteca e ambiente para você montar sua própria cadeia de processamento como um **flowgraph**: um grafo de blocos ligados por streams de amostras. É o mesmo modelo que você conhece de pipelines de dados: cada bloco recebe um stream, aplica uma operação e emite outro. O **GNU Radio Companion** (GRC) é a interface gráfica em que você arrasta e liga blocos; blocos são escritos em C++ ou Python. Um receptor de FM em GNU Radio, por exemplo, seria (nomes de blocos variam com a versão):

```
Source (SDR)  ->  filtro passa-baixas com decimação  ->  demodulador de FM (WBFM)
              ->  reamostrador  ->  saída de áudio
```

É exatamente a cadeia da Aula 3, em blocos. O GQRX é construído em cima do GNU Radio. O curso oficial de Michael Ossmann e a série de Daniel Estévez (links no fim) usam GRC.

## Passo a passo (Windows): do dongle ao primeiro sinal

O caminho oficial do RTL-SDR Blog. O texto abaixo segue o guia de início rápido.

**Antes de começar:**

- Ligue o dongle **direto** em uma porta USB do computador (sem hub sem alimentação e sem cabo longo de má qualidade; isso causa "linhas onduladas" no espectro ou "no compatible devices found", segundo o guia).
- **Não** instale o software do CD ou o driver de TV que vier com o dongle.
- Se você tem um **V4** (ou V4L), precisa de um `rtlsdr.dll` recente do RTL-SDR Blog (a última versão do SDR# e do SDR++ já traz). Sem ele, o V4 "não recebe nada" ou mostra sinais na frequência errada.

**Instalação com SDR# (caminho do guia):**

1. Instale o **.NET Desktop Runtime** que o SDR# pedir (o guia cita o 8.0 x86; um vídeo de 2025 usa o 9.0; o SDR# avisa qual instalar) e o Visual C++ redistributable (o Windows costuma já ter).
2. Baixe o pacote do SDR# em `airspy.com/download` (o "Software Defined Radio Package", `sdrsharp-x86.zip`; o guia adverte contra a edição "community managed", que costuma estar quebrada).
3. **Extraia** o zip para uma pasta (por exemplo, `C:\SDR`). **Nunca** execute de dentro do zip e **não** extraia em `Program Files` (o Windows torna a pasta somente leitura e a instalação falha).
4. Execute `install-rtlsdr.bat` (se aparecer SmartScreen, "Mais informações" e "Executar assim mesmo"). Ele baixa `rtlsdr.dll` e `zadig.exe` para a pasta.
5. **Conecte o dongle** e espere alguns segundos.
6. Clique com o botão direito em `zadig.exe` e "Executar como administrador".
7. No Zadig, menu **Options > List All Devices**. No Windows 10/11 pode ser preciso desmarcar "Ignore Hubs or Composite Parents".
8. No menu suspenso, escolha **"Bulk-In, Interface (Interface 0)"** (é o zero, não o 1). Em alguns computadores aparece "RTL2832U" ou "Blog V4". Confirme que o **USB ID** é `0BDA 2838`.
9. O quadro à direita da seta deve mostrar **WinUSB**. (O da esquerda é o driver atual; "NONE" ali é normal.)
10. Clique em **Replace Driver** e aceite avisos de "editor não verificado" se aparecerem.

> **Cuidado (repetido pelo guia com ênfase):** no passo 8, **não escolha outro dispositivo**. Zadig instalará o driver no que estiver selecionado e você pode sobrescrever o driver de mouse, teclado, placa de som ou impressora. Selecione só o dongle, com o ID `0BDA 2838`.

11. Abra `SDRSharp.dotnet8.exe` (o nome do executável varia com a versão). No menu de três linhas (canto superior esquerdo), **Source: RTL-SDR USB**.
12. Aperte **Play** (triângulo). Espectro e waterfall devem aparecer. Um vídeo de 2025 mostra taxa de amostragem em 2,4 MS/s e "quadrature sampling".
13. **Ajuste o ganho de RF** no painel do Source (por padrão, é zero; ganho zero quase só mostra FM forte). Aumente até ver outros sinais (Aula 8 explica como escolher).

**Problemas comuns (guia oficial):**

- **"Memory integrity" do Windows** (Isolamento de núcleo): o Windows pode marcar o WinUSB como incompatível logo após a instalação; para desativar, Configurações > Privacidade e segurança > Segurança do Windows > Segurança do dispositivo > Detalhes do isolamento de núcleo > Integridade da memória > desligar. É uma mudança de segurança do sistema; entenda o que faz antes.
- **"No Device Selected"**: `install-rtlsdr.bat` não baixou o `rtlsdr.dll` (pasta somente leitura?) ou o driver foi instalado na **interface 1**.
- **Zadig diz "Cancelled by User"** sem você cancelar: às vezes ajuda instalar em Modo de Segurança.

## Passo a passo alternativo: SDR++

1. Instale o WinUSB pelo Zadig como acima.
2. Baixe `sdrpp_windows_x64.zip` em `sdrpp.org` (aba Releases/Assets), extraia e abra `sdrpp.exe`.
3. Em **Source** (canto superior esquerdo), escolha **RTL-SDR**. Clique em **Play**.
4. Ajuste o **Gain** no painel da fonte; escolha a **demodulação** no menu **Radio** (por exemplo, WFM).
5. Sintonize pelo campo de frequência no topo ou clicando no espectro.

## Exercício guiado 7.1: sua primeira estação de FM

**Objetivo:** ouvir uma estação de FM e ver o que a Aula 3 descreveu.

1. Com o programa aberto e o dongle rodando, use a antena de haste do kit, aberta em cerca de 70 cm por haste (Aula 4).
2. Ponha a frequência central em torno de **98 MHz** (a faixa de FM no Brasil vai de cerca de 88 a 108 MHz). Taxa de amostragem 2,4 MS/s: você vê 2,4 MHz de cada vez, ou cerca de 12 canais de 200 kHz.
3. No waterfall procure faixas largas e "dançantes" (~200 kHz): são estações de FM.
4. Clique sobre uma, selecione o modo **WFM** (wideband FM) e largura de filtro na casa de **180 a 200 kHz**. Escolha a saída de áudio. Aumente o volume.
5. **Perguntas para responder:**
   - As portadoras vizinhas estão espaçadas de quantos kHz? (Conte pelo waterfall; no Brasil espera-se 200 kHz.)
   - Troque o modo para **NFM** ou reduza a largura do filtro para 30 kHz. O que acontece com o áudio? (Distorção e som abafado: o filtro corta as bandas laterais da FM larga, Módulo 3, Aula 4, regra de Carson.)
   - Aumente e diminua o **ganho**. Com ganho demais, aparecem estações "fantasma" em frequências onde não deveria haver nada? (Overload, Aula 8.)
   - Troque a **resolução da FFT** (FFT size) e veja o efeito na finura das linhas e na velocidade do waterfall (Aula 3).
6. **Grave o sinal bruto.** Use o gravador de banda base do SDR# (Baseband Recorder) ou o módulo Recorder do SDR++ (nomes conforme a versão) por ~10 segundos. Reabra o arquivo como fonte e demodule outra estação da mesma gravação. Isso mostra a ideia central do SDR: o sinal é **dado**, e você pode reprocessá-lo depois.

## Exercício guiado 7.2: ver AM, FM e SSB do Módulo 3

Com o mesmo programa, procure um exemplo real de cada modulação e compare com a teoria:

| Modulação | Onde procurar | O que ver e o que responder |
|---|---|---|
| **AM** | Aviação civil, **118 a 137 MHz** (torres e aproximação, com sinal só se houver tráfego; o waterfall mostra pequenos picos) | Selecione o modo **AM**. Aumente o zoom: uma portadora no meio com bandas laterais estreitas (Módulo 3, Aula 2). Se sintonizar em NFM, a voz sai distorcida: por quê? (O detector de FM lê fase, não amplitude.) |
| **FM larga** | Estações de FM de radiodifusão, 88 a 108 MHz | Faixa larga de 200 kHz. |
| **SSB** | HF: **V3 ou V4** e uma antena de fio; à noite, o 40 m (7 MHz, Módulo 5), modo **LSB** (abaixo de 10 MHz, Módulo 3, Aula 3) | Uma faixa de ~2,7 kHz só de um lado, sem portadora. Sintonize o lado errado (USB) e a voz vira ininteligível; corrija a frequência em passos de 100 Hz, como o BFO da Aula 3 do Módulo 3. |

Se você não tem HF, faça só os dois primeiros e pule o SSB. Se não há tráfego aéreo no momento, escolha outro horário (o dia útil e o horário de maior movimento funcionam melhor).

## Resumo

- No Windows, o Zadig troca o driver de TV por WinUSB, e um `rtlsdr.dll` recente (obrigatório no V4) deixa o programa pedir amostras ao dongle.
- SDR# (Windows, o mais fácil) e SDR++ (multiplataforma, código aberto) são os dois programas recomendados; CubicSDR está parado desde 2022; GQRX é para Linux e macOS.
- GNU Radio é um toolkit para montar sua própria cadeia em blocos (fonte, filtro, decimação, demodulador, saída); é a Aula 3 em grafo.
- Na primeira instalação, o erro mais comum é selecionar o dispositivo errado no Zadig (perigoso), extrair em Program Files ou esquecer de ajustar o ganho.
- Você pode gravar o sinal bruto e reprocessá-lo, o que faz do SDR uma fonte de dados, não só um rádio.

## Para aprofundar

- [ ] [RTL-SDR Quick Start Guide](https://www.rtl-sdr.com/rtl-sdr-quick-start-guide/) (rtl-sdr.com): guia oficial de instalação (SDR#, SDR++, Linux, macOS) e solução de problemas; base dos passos acima.
- [ ] [Setting Up Your RTL-SDR Blog V4](https://www.youtube.com/watch?v=0kYzoZ4Za84) (Reality Tech): vídeo de instalação do V4.
- [ ] [RTL-SDR Blog V4, SDRSharp (SDR#), How to Update V4 drivers](https://www.youtube.com/watch?v=v70EH-2t0oc) (Darren N4VFR): mostra Zadig, o runtime .NET, a seleção do Source, o áudio, voz de aviação e ondas curtas.
- [ ] [SIGINT, SDR How To using the RTL-SDR v4 and SDR++](https://www.youtube.com/watch?v=7U8bUcQfX1E) (The Tech Prepper): uso do SDR++ com o V4.
- [ ] [Zadig](https://zadig.akeo.ie/) (Akeo): página oficial da ferramenta de drivers (versão 2.9, junho de 2024, na consulta).
- [ ] [SDR++](https://github.com/AlexandreRouma/SDRPlusPlus) (AlexandreRouma) e [GQRX](https://github.com/gqrx-sdr/gqrx) (gqrx-sdr): repositórios oficiais, com instalação e módulos.
- [ ] [Software Defined Radio with HackRF, Lesson 1](https://www.youtube.com/watch?v=BeeSN14JUYU) (Great Scott Gadgets): apresenta o GNU Radio Companion e monta um receptor de FM em blocos.
- [ ] [Daniel Estévez: GNU Radio Tutorial I (2024)](https://www.youtube.com/watch?v=ynXNcBqBLSg) (BSRC Tech): introdução ao GNU Radio Companion, junto com o RTL-SDR e o GQRX; página do projeto em [gnuradio.org](https://www.gnuradio.org/).

[Próxima aula: Ganho, overload, ruído local e calibração](./08%20-%20Ganho%20Overload%20Ruido%20e%20Calibracao.md)
