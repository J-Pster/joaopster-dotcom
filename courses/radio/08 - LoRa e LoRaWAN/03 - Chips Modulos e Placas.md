# Aula 3: Chips, módulos e placas LoRa

[Voltar ao módulo](./README.md)

*Pergunta que esta aula responde: que peças de hardware falam LoRa, o que muda entre um chip e outro, e como escolher uma placa sem cair nas armadilhas de faixa, alimentação e antena?*

Verificado em setembro de 2026 nas páginas dos fabricantes e de lojas citadas no fim. **Preços são em dólar, de lojas dos EUA ou do fabricante, sem frete, impostos nem homologação da Anatel. Não conferi preços no Brasil.** Preço muda toda semana; use como ordem de grandeza.

## Três camadas de hardware

Quando alguém diz "módulo LoRa", pode estar falando de três coisas diferentes:

1. **O chip transceptor**, o silício da Semtech (ou de quem licencia): SX1276, SX1262 etc. Sozinho ele não faz nada, precisa de cristal, casamento de impedância, chave de antena e um microcontrolador que fale SPI com ele.
2. **O módulo**, uma plaquinha pequena que já traz chip, cristal (às vezes TCXO), filtros, chave RF e um pad de antena. Você liga a um microcontrolador por SPI. Exemplos: Ai-Thinker Ra-01H, Ra-01SH-P, HopeRF RFM95.
3. **A placa de desenvolvimento**, que traz o módulo mais um microcontrolador (ESP32, nRF52), USB, carregador de bateria, às vezes tela e GPS. Exemplos: Heltec WiFi LoRa 32, LilyGO T-Beam, RAK WisBlock, Seeed Wio-SX1262 com XIAO.

Para aprender, a placa pronta é o caminho mais curto. Para entender o que vai na placa, é preciso conhecer o chip.

## As gerações de chip

A Semtech chama de "geração de IP LoRa" a evolução do modem. As famílias que você vai encontrar:

### SX127x (primeira geração): SX1272/73 e SX1276/77/78/79

- SX1276/77/78/79: 137 a 1.020 MHz, **+20 dBm** com amplificador (potência constante com a tensão) ou +14 dBm no amplificador eficiente, sensibilidade "acima de -148 dBm" e orçamento de enlace máximo de **168 dB** (números da página da Semtech). Corrente de recepção de 9,9 mA.
- O HopeRF **RFM95** é um módulo com chip da classe SX1276 pronto para 868/915 MHz; **RFM96/98** são as versões de 433 MHz (a tabela de configuração padrão do RadioLib usa 915 MHz como padrão de RFM95/97 e 434 MHz para RFM96/98).
- Uma pegadinha de nome: o SX1278 é a versão de faixa baixa (410 a 525 MHz, a faixa de 433). Um módulo com SX1278 **não sintoniza 915 MHz**.
- Aparece em muitos módulos baratos e tutoriais (os da lista de apoio do Módulo usam SX1276/78).

### SX126x (segunda geração): SX1261, SX1262, SX1268

- Consumo menor: corrente de recepção de **4,2 a 4,6 mA** (a página da Semtech cita os dois valores em lugares diferentes), com regulador DC-DC integrado.
- **SX1262: +22 dBm**. SX1261: +15 dBm. Orçamento de enlace máximo de **170 dB** (SX1262/68) e sensibilidade "até -148 dBm" (com BW de 7,8 kHz).
- SF de 5 a 12, BW de 7,8 a 500 kHz, modulação FSK e também **LR-FHSS** (*Long Range Frequency Hopping*, uma modulação de saltos para uplink, com mais alcance e capacidade, ainda pouco usada). Aceita chave de RF controlada pelo próprio chip (DIO2) e alimentação de TCXO (DIO3).
- É o chip das placas que consultei para esta aula (RAK4631, Heltec V3 e V4, T-Beam Supreme, Wio-SX1262).

### LLCC68: o SX1262 "capado"

- Compatível pino a pino com o SX1262, +22 dBm, mas com limites de LoRa: a Semtech o descreve como chip para "casa inteligente" com sensibilidade "até -129 dBm" e orçamento de enlace de **151 dB**.
- SF restrito por BW: **SF5 a SF9 em 125 kHz, SF5 a SF10 em 250 kHz e SF5 a SF11 em 500 kHz**. Ou seja, **não faz SF10 a SF12 em 125 kHz**: os modos mais longos do LoRa não existem nele.
- Armadilha: uma placa barata "SX1262" pode ter LLCC68. No RadioLib há classe própria (`LLCC68`). Se seu código pede SF12 e o chip é LLCC68, a chamada devolve erro de SF inválido.

### LR1110/LR1120/LR1121 e a família "LoRa Plus" (gerações 3 e 4)

- **LR1121**: multibanda. Sub-GHz (150 a 960 MHz) e 2,4 GHz, banda S e banda L (satélite). +22 dBm no sub-GHz e +11,5 dBm em 2,4 GHz; sensibilidade em SF12/125 kHz de **-141 dBm** e recepção de 5,4 mA (tabela da Semtech). Vem com LR-FHSS.
- A família LR2021/LR2022/LR2012 (quarta geração, "LoRa Plus", listada como nova na Semtech) traz SF5 a SF12, BW até 1 MHz, e modulações adicionais como FLRC.
- O RadioLib já suporta LR11x0 e LR2021, mas as placas são menos comuns e a documentação para hobby, mais rala. Vale conhecer, não vale comprar para o primeiro projeto.

### STM32WL

Microcontrolador da ST com o rádio LoRa dentro (o RadioLib lista como suportado). É o que aparece dentro de muitos sensores LoRaWAN industriais e não costuma ser a escolha do hobby.

### Quadro-resumo

| Chip | Potência máx. | Orçamento de enlace máx. | RX | SF | Quando usar |
|---|---|---|---|---|---|
| SX1276/78 | +20 dBm | 168 dB | ~10 mA | 6 a 12 | Módulos baratos, tutoriais, RFM95 |
| SX1262 | +22 dBm | 170 dB | 4,2 a 4,6 mA | 5 a 12 | Ponto de partida razoável para projetos novos |
| LLCC68 | +22 dBm | 151 dB | 4,6 mA | 5 a 9/10/11 (por BW) | Só se o alcance longo não importa |
| LR1121 | +22 dBm (sub-GHz) | não confirmado | 5,4 mA | 5 a 12 | Quando precisa de 2,4 GHz ou satélite |

## Módulos populares

Todos são de 3,3 V. Nenhum tem antena embutida no sentido útil: **você precisa ligar uma antena de 915 MHz** (Aula 8).

| Módulo | Chip | Faixa | Pontos que a ficha do fabricante diz |
|---|---|---|---|
| Ai-Thinker **Ra-02** | SX1278 | 410 a 525 MHz | +20 dBm, RX 12,15 mA, até -140 dBm. **Só serve para 433 MHz**, não para 915 |
| Ai-Thinker **Ra-01H** | SX1276 | 803 a 930 MHz | +20 dBm no máximo, corrente de pico de 105 mA (a ficha também fala em "acima de 200 mA" e recomenda alimentação por LDO), 17 x 16 mm, pinos em meia-cana. Serve para 915 MHz |
| Ai-Thinker **Ra-01SH-P** | SX1262 + amplificador | 803 a 930 MHz | Até +29 dBm, mas TX de **690 mA** e a saída do SX1262 deve ser configurada em no máximo **3 dBm** (senão o amplificador externo queima). Nunca transmitir com a porta de antena solta |
| **RFM95** (HopeRF) | classe SX1276 | 868/915 MHz | Módulo clássico do tutorial do ESP32 (Random Nerd Tutorials) |

O Ra-01 também é da linha SX1278 de 433 MHz; não abri a ficha específica dele.

Repare no que a ficha do **Ra-01SH-P** ensina: "+29 dBm" é o que sai do módulo com o amplificador externo, e para isso a entrada dele espera pouco sinal. Errar a configuração de potência destrói o módulo, e potência alta é uma decisão que precisa da Aula 4, não só da ficha.

## Placas de desenvolvimento

| Placa | Chip de rádio | MCU e extras | Preço (US$, set/2026) |
|---|---|---|---|
| **Heltec WiFi LoRa 32 (V3)** | SX1262 | ESP32-S3, Wi-Fi, BLE, OLED 0,96", USB-C, carregador de LiPo, conector IPEX para a antena LoRa. 863 a 928 MHz (também versão 470 a 510). TX máx. 21 ±1 dBm; sensibilidade anunciada de -134 dBm em SF12/125 kHz | 29,97 (Rokland, US915, com ou sem capa), 34,80 (CommsForAll, com antena tipo "gluestick"), 15,99 na versão sem tela em promoção (Arax Systems) |
| **Heltec WiFi LoRa 32 (V4)** | SX1262 com amplificador GC1109 | ESP32-S3R2 (2 MB de PSRAM) ou S3R8 (8 MB), 16 MB de flash, entrada de painel solar. Versão de 863 a 928 MHz com **28 ±1 dBm**; versão de 433 a 510 MHz com 22 dBm. Mesmos pinos da V3 | Não conferi |
| **LilyGO T-Beam SUPREME** | SX1262 | ESP32-S3, GPS (L76K ou u-blox), 8 MB de PSRAM, leitor de cartão microSD (segundo anúncio de loja) | 40,35 (loja global da LilyGO); 51,56 (loja "US" da LilyGO, 915 MHz); 59,97 (Rokland, 915 MHz) |
| **RAK4631** (WisBlock Core) | SX1262 | nRF52840 (BLE 5), 1 MB de flash. Precisa de uma placa-base WisBlock. Variantes de 779 a 923 MHz (inclui AU915) e de 433 a 470 MHz. Pilha LoRaWAN 1.0.2 (versão Arduino) ou 1.0.3 (versão RUI3) | 17,99 a 23,99 (só o módulo-núcleo) |
| **Seeed XIAO ESP32S3 + Wio-SX1262** | SX1262 | Kit do tamanho de um polegar, Wi-Fi, BLE, pinos I2C, UART | 10,90 |

Alguns pontos práticos:

- **A Heltec V3 é a placa mais fácil de conseguir e de achar exemplos** (a Heltec a descreve como amplamente usada em projetos como Meshtastic e MeshCore). O rádio é o SX1262, o RF é chaveado pelo DIO2 e o TCXO é alimentado pelo DIO3 em 1,8 V (valores do arquivo de definição da Heltec V3 no firmware do Meshtastic). Os pinos do rádio estão na Aula 7.
- **A Heltec V4 muda o RF**: tem um amplificador de saída (GC1109) que precisa de pinos de controle extras. Uma discussão pública no repositório do RadioLib (nº 1665) mostra um usuário que passou mais de 15 horas com dois V4 em que o TX "dava sucesso" e o RX nunca recebia, depois de configurar o SX1262 por comandos brutos por cima da biblioteca. O mantenedor explicou que o RadioLib controla o chip e mandou estudar o esquema da placa e o datasheet do amplificador; o usuário resolveu deixando o RadioLib inicializar sozinho e apenas mantendo em nível alto o pino de habilitação do amplificador (GPIO 2, segundo o relato). Se é o seu primeiro projeto, prefira placas sem amplificador externo.
- **O T-Beam** tem GPS, o que ajuda em teste de alcance (você registra as coordenadas de cada pacote), mas é maior e mais caro.
- **O RAK4631** é o que se compra para um nó LoRaWAN de bateria (nRF52840 dorme muito bem), mas tem curva de aprendizado maior (ecossistema WisBlock).
- **Preço não é tudo:** uma placa de US$ 15 sem antena não transmite nada útil.

## Homologação da Anatel: o que é diferente entre módulo e produto

As fichas e certificados que li mostram uma divisão importante:

- **Placas de desenvolvimento** (Heltec, LilyGO, Seeed) trazem marcações FCC/CE conforme cada produto. **Eu não confirmei homologação Anatel de nenhum desses modelos.** Comprar do exterior não os torna homologados.
- **Módulos e gateways industriais** vendidos no Brasil costumam ter Anatel: o **RAK5146** (concentrador, módulo) e o **RAK7240V2** (gateway) têm certificados de homologação publicados pela RAK; o **Altus GW700** e gateways da loja brasileira Kerax citam Anatel. Detalhes e ressalvas na Aula 4 e na Aula 6.
- Homologação é do **produto certificado como um todo** (transmissor mais antena). Trocar antena ou aumentar potência sai do certificado.

## Como escolher

| Objetivo | Escolha razoável |
|---|---|
| Aprender LoRa ponto a ponto (Aula 7) | Duas placas SX1262 (Heltec V3 ou Wio-SX1262) |
| Nó de sensor a bateria falando LoRaWAN | RAK4631 ou outro nó SX1262 com pilha LoRaWAN pronta |
| Teste de alcance com registro de posição | T-Beam (tem GPS) |
| Só 433 MHz | SX1278 (Ra-02) |
| Quer 2,4 GHz e sub-GHz numa placa só | LR1121, mas espere menos exemplos |
| O menor preço com rádio novo | Wio-SX1262 com XIAO |

## Armadilhas de hardware (ligue isso com a Aula 8)

1. **Faixa errada.** Módulo de 433 MHz não fala 915. Veja a faixa na ficha (Ra-02: 410 a 525 MHz).
2. **TCXO e chave de RF.** Nos SX126x, o TCXO é alimentado pelo pino DIO3 e a chave de antena pode ser controlada pelo DIO2. Se você não configura isso, o rádio pode nem inicializar ou pode transmitir sem sair pela antena. As bibliotecas (RadioLib) têm ajuste para os dois, mas o valor depende da placa.
3. **Alimentação.** Transmitir em +20 dBm pode puxar mais de 100 mA, e módulos com amplificador externo chegam a centenas de mA (690 mA no Ra-01SH-P). Fonte fraca ou fio fino causa reinicialização exatamente na hora de transmitir.
4. **Lógica de 3,3 V.** Ligar SPI de um Arduino de 5 V direto ao módulo pode danificá-lo (o tutorial do Random Nerd para o RFM95 reforça o cuidado com 3,3 V).
5. **Sem antena.** Transmitir sem antena danifica o estágio de saída; a ficha do Ra-01SH-P avisa que a porta de antena solta em TX dá VSWR muito alto e risco de queimar o amplificador.
6. **Pino de interrupção.** Bibliotecas usam DIO0 (SX127x) ou DIO1 (SX126x) como interrupção de "pacote recebido"; a placa precisa ter esse pino ligado ao MCU.

## Resumo

- Há chips (Semtech), módulos (chip mais peças de RF) e placas (módulo mais MCU). O SX1262 é a escolha padrão atual; o SX1276/78 é o clássico barato; o LLCC68 não faz SF10 a SF12 em 125 kHz.
- Confira a **faixa do módulo** contra sua região: Ra-02 (SX1278) é 433 MHz, Ra-01H (SX1276) e placas SX1262 "863 a 928" cobrem 915.
- A Heltec V3 (US$ 16 a 35 nas lojas consultadas) é o ponto de partida mais comum; a V4 tem amplificador externo e exige configuração diferente.
- Placas de desenvolvimento genéricas não são homologadas pela Anatel por si só; produtos industriais brasileiros têm certificado.
- Erros de hardware clássicos: faixa errada, TCXO e chave de RF sem configurar, fonte fraca, 5 V no SPI e antena ausente.

## Para aprofundar

- [ ] [SX1262 (Semtech)](https://www.semtech.com/products/wireless-rf/lora-connect/sx1262) (Semtech): página oficial do chip, com características, notas de aplicação e kits de desenvolvimento.
- [ ] [SX1276 (Semtech)](https://www.semtech.com/products/wireless-rf/lora-connect/sx1276) (Semtech): página oficial do chip clássico.
- [ ] [LLCC68 (Semtech)](https://www.semtech.com/products/wireless-rf/lora-connect/llcc68) (Semtech): página que lista as combinações de SF e BW suportadas.
- [ ] [LR1121 (Semtech)](https://www.semtech.com/products/wireless-rf/lora-connect/lr1121) (Semtech): chip multibanda.
- [ ] [WiFi LoRa 32 (V3) (Heltec)](https://heltec.org/project/wifi-lora-32-v3/) e [V4 (Heltec)](https://heltec.org/project/wifi-lora-32-v4/) (Heltec): fichas técnicas oficiais das placas.
- [ ] [Ra-01SH-P Specification](https://aithinker-static.oss-cn-shenzhen.aliyuncs.com/docs/Public%20Document%20Center/LoRa/lora/Specification/Ra-01SH-P_V1.0.3%20Specification-20260730A.pdf) (Ai-Thinker): ficha de um módulo com amplificador externo; leia os avisos de potência e de antena.
- [ ] [Heltec LoRa ESP32 Module Tutorial](https://www.youtube.com/watch?v=pI3NV2yPs4c) (RoboCircuits): vídeo cujo título indica um tutorial da placa Heltec com ESP32; conteúdo não assistido.

[Próxima aula: Frequências, regulamentação e duty cycle](./04%20-%20Frequencias%20Regulamentacao%20e%20Duty%20Cycle.md)
