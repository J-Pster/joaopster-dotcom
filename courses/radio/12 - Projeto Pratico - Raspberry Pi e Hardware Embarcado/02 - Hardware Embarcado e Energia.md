[Voltar ao módulo](./README.md)

# Aula 2: Hardware embarcado e energia

*Pergunta que esta aula responde: qual computador (Raspberry Pi ou microcontrolador) vai em cada ponto da rede, como eu o alimento, por que o GPIO de 3,3 V não perdoa um sinal de 5 V, e como dimensiono energia solar, caixa, antena e mastro para um nó que ninguém visita?*

> Especificações e preços de Raspberry Pi verificados em setembro de 2026 nas páginas e na documentação oficiais. Valores de consumo e insolação usados nas contas são **exemplos** rotulados como tais: meça o seu hardware e consulte os dados solares do seu local. **Perigos desta aula:** instalação de antena perto de rede elétrica e raios (Módulo 4, Aula 6), transmitir sem antena ou carga, e baterias de lítio (fogo). Cada um tem aviso próprio abaixo.

## Por que existem dois mundos: SBC e microcontrolador

Um **SBC** (*single-board computer*, computador de placa única) como o Raspberry Pi roda Linux: sistema de arquivos, processos, rede TCP/IP, `apt`, SSH. Você trabalha nele como em um servidor pequeno. O custo é energia: um SBC nunca "dorme" de verdade e exige fonte estável.

Um **microcontrolador** (MCU) como ESP32, nRF52 ou RP2040 roda um firmware único, sem sistema operacional completo. Não tem SSH nem `apt`, mas acorda, faz o trabalho e volta a dormir, consumindo miliampères. A rede LoRa que você já estudou (Meshtastic, MeshCore, RNode) roda dentro de um MCU ligado a um chip de rádio.

Regra de decisão: **use o que o serviço exige, e nada além**.

| Você precisa de... | Use | Exemplo neste curso |
|---|---|---|
| Linux, serviços, Python/Rust, banco de dados, ponte para TCP | SBC (Raspberry Pi) | Gateway, `rnsd` como transport node, broker MQTT |
| Rádio LoRa autônomo, bateria, sol | MCU com rádio | Nós Meshtastic e RNode de morro |
| Só um interruptor de PTT ou um sensor | MCU barato (RP2040) ou o GPIO do Pi | Aula 4 |

## Raspberry Pi: modelos e escolha em 2026

Dados das páginas oficiais dos produtos e dos comunicados de preço, setembro de 2026:

| Modelo | O que traz | Alimentação | Preço (US$) | Quando escolher |
|---|---|---|---|---|
| **Zero 2 W** | Quad-core Arm Cortex-A53 a 1 GHz, 512 MB, Wi-Fi 2,4 GHz, Bluetooth 4.2, 65 x 30 mm, cabeçalho de 40 pinos sem pinos soldados | Micro USB; fonte oficial de 12,5 W | 15 | Gateway leve e barato, uso com energia solar ou 12 V. Produção garantida ao menos até janeiro de 2030 |
| **Pi 4** | Cortex-A72, 1 a 8 GB, Gigabit Ethernet, USB 3 | USB-C | 35 (1 GB) a mais de 100 (4 GB ou mais, depois dos aumentos de 2026) | Gateway com mais folga, boot por USB |
| **Pi 5** | Cortex-A76 a 2,4 GHz, 1 a 16 GB, PCIe 2.0 x1 (SSD NVMe por HAT), relógio de tempo real (RTC) com bateria externa, botão de energia | **5 V, 5 A** (a Raspberry Pi recomenda a fonte oficial de 27 W) | 45 (1 GB) a 305 (16 GB) | Quando há carga (banco de dados, vários serviços). Produção até ao menos janeiro de 2036 |
| **Pico 2 W** (não é Linux) | Microcontrolador RP2350 com Wi-Fi | USB ou bateria | ver página oficial | Automação simples; sem rádio LoRa |

O sistema operacional atual é o Raspberry Pi OS **Trixie**, com o **Bookworm** ainda suportado como versão legada (a página do Pi 5 diz que versões anteriores ao Bookworm não funcionam nele).

**Escolha para este projeto:** Pi Zero 2 W ou Pi 4 de 1 GB para o gateway de LoRa. Um `rnsd`, um broker MQTT e um script de monitoramento são cargas minúsculas. Os aumentos de 2026 punem quem compra 8 ou 16 GB sem necessidade (Aula 1).

### Alimentação: a causa número um de problemas estranhos

Um Raspberry Pi mal alimentado não avisa com clareza: reinicia, corrompe o cartão, perde USB (a USB é onde o seu RNode ou nó Meshtastic está ligado). O que a documentação e o fabricante dizem:

- Pi 5: 5 V e 5 A pela USB-C, com a fonte oficial de 27 W recomendada; a Raspberry Pi avisa que uma fonte de Pi 4 pode dar problema.
- Zero 2 W: micro USB, com fonte oficial de 12,5 W recomendada.
- Fontes de carregador de celular baratas e cabos finos causam queda de tensão. **Cabo curto, grosso e de boa qualidade.**
- Para alimentar de bateria de 12 V (solar), use um conversor DC-DC (*buck*) de qualidade dimensionado com folga de corrente; um regulador linear desperdiça energia em calor.

### Cartão SD ou SSD?

O cartão microSD desgasta com escritas constantes (logs, banco de dados) e corrompe em queda de energia. Alternativas:

- **SSD por USB** (Pi 4 e 5) ou **NVMe** pela HAT M.2 (Pi 5): a documentação oficial lista boot por USB e por NVMe. Mais confiável, mais caro e mais consumo.
- **Cartão com sistema de arquivos protegido**: o `raspi-config` tem "Overlay File System" (Performance Options) e "Boot Partition: Read-only". O sistema roda com a raiz somente leitura e as mudanças ficam em memória. Bom para nós que devem sobreviver a quedas de energia; ruim para tudo que precisa gravar (dados, logs). A Aula 3 mostra como combinar com um pequeno disco de dados.
- Em ambos os casos, **faça backup da imagem**: uma cópia do cartão pronta é o seguro mais barato da rede.

## GPIO: por que 3,3 V e por que nunca 5 V direto

O **GPIO** (*general-purpose input/output*) é o cabeçalho de 40 pinos. A documentação oficial diz: "Uma saída em nível alto está a 3,3 V; uma entrada lida 3,3 V como alto; os pinos restantes são todos de 3,3 V, ou seja, saídas são 3,3 V e entradas são **tolerantes a 3,3 V**", e adverte: "Não use 5 V para componentes de 3,3 V".

Por quê: o processador (SoC) do Pi é fabricado para trabalhar a 3,3 V nos pinos. A folha de dados do Pi 4 lista o nível alto de entrada como no máximo `VDD IO` (o próprio 3,3 V), com mínimo de 2,0 V, e o nível baixo até 0,8 V. Um sinal de 5 V excede o máximo, e a corrente flui por diodos de proteção internos para a alimentação do chip: pode queimar o pino, ou o processador inteiro.

Mais três limites que a documentação dá, e que afetam o PTT (Aula 4):

- A intensidade de saída padrão é de 8 mA, configurável até 16 mA. A documentação diz que **16 mA é o valor para o qual os circuitos do pino foram projetados**: acima disso não há garantia de nível de tensão nem de segurança.
- O suprimento de 3,3 V foi projetado para cerca de **3 mA por pino** em média: se você puxar 16 mA de cada pino, a alimentação colapsa e pode interferir com o cartão SD e a memória.
- Por isso: **nunca acione carga direto do GPIO** (relé, LED de alta corrente, entrada de rádio). Sempre por transistor ou acoplador óptico (Aula 4).

**Exemplo resolvido: levar um sinal de 5 V a um pino de 3,3 V (sinal lento).** Divisor resistivo com `R1 = 1 kohm` (em série, do sinal) e `R2 = 2 kohm` (do pino ao terra): `V = 5 x R2 / (R1 + R2) = 5 x 2 / 3 = 3,33 V`. Funciona para sinais lentos e unidirecionais (por exemplo, ler um "rádio ocupado"). Para I2C e outros barramentos bidirecionais use um conversor de nível pronto.

Nos módulos LoRa da [Aula 3 do Módulo 8](../08%20-%20LoRa%20e%20LoRaWAN/03%20-%20Chips%20Modulos%20e%20Placas.md) já apareceu a mesma regra: os módulos são de 3,3 V, e ligar um Arduino de 5 V direto a eles pode danificá-los.

## Microcontroladores: ESP32, nRF52, RP2040

Resumo da tabela de [Meshtastic na prática](../09%20-%20Redes%20Mesh/05%20-%20Meshtastic%20na%20Pratica.md), com a leitura da Raspberry Pi para a família RP:

| MCU | Ponto forte | Ponto fraco | Uso neste projeto |
|---|---|---|---|
| **ESP32 / ESP32-S3** | Wi-Fi e Bluetooth, potência de processamento, custo baixo | Consome bem mais energia | Nó fixo com energia ou gateway MQTT por Wi-Fi |
| **nRF52840** | Muito mais eficiente em energia; atualização por UF2 | Só Bluetooth (sem Wi-Fi) | Nós de bateria e solar, repetidores remotos |
| **RP2040 / RP2350** (família Raspberry Pi Pico) | Barato, MicroPython e C/C++ SDK, documentação excelente, PIO | Sem rádio próprio (use um módulo LoRa externo); Bluetooth do Pico W não suportado no Meshtastic segundo a documentação | Montagem própria, PTT dedicado (Aula 4) |
| **STM32WL** | Rádio LoRa e MCU no mesmo chip | Poucos recursos (sem MQTT, sem tela) | Nós mínimos |

**Quando MCU e quando SBC:** se a resposta a "preciso de SSH e de um serviço rodando?" for não, é MCU. Se a resposta for sim, é SBC. Se o ponto está a horas de caminhada de qualquer tomada, é MCU sem discussão.

## Placas LoRa e como ligá-las ao Pi

Modelos e armadilhas de hardware estão no [Módulo 8, Aula 3](../08%20-%20LoRa%20e%20LoRaWAN/03%20-%20Chips%20Modulos%20e%20Placas.md); o que importa aqui é a **forma de ligar ao Raspberry Pi**:

1. **Placa LoRa com USB (RNode, ou nó Meshtastic) ligada ao Pi.** A mais simples e a recomendada para o primeiro projeto: o Pi enxerga uma porta serial. É o que as Aulas 6 e 7 usam.
2. **HAT LoRa por SPI, com o Pi controlando o chip de rádio.** A documentação do Meshtastic (`meshtasticd`) diz que só funcionam HATs com **rádio SPI** (SX126x, RFM9x); **HATs baseadas em SX1302/SX1303 (concentradores de gateway LoRaWAN) e HATs UART não são suportadas**. Ela cita como testados o MeshAdv-Pi v1.1, o Adafruit RFM9x e o Elecrow LoRa RFM95, e diz que a HAT Waveshare SX1262 "não é recomendada para implantação" por limitações de hardware. Placas empilhadas podem ter conflito de pinos.

**Aviso:** módulos com amplificador de potência (por exemplo o Ra-01SH-P, do Módulo 8) queimam se a saída for mal configurada ou se transmitirem sem antena. **Nunca ligue o transmissor sem antena ou carga.** Conecte a antena antes da bateria ou do USB.

## Energia solar e bateria: dimensionar com uma conta

Nós de morro são o item de maior risco do projeto. Dimensione por conta, não por palpite. O método tem quatro passos: consumo diário, bateria, painel, verificação de recuperação.

**Conceito:** a **insolação** é dada em kWh por metro quadrado por dia. Numericamente, 1 kWh/m2/dia equivale a **1 hora de sol pleno** (*horas de sol pleno*, HSP), que é uma hora com 1 kW/m2 de potência solar. Um painel de `P` watts-pico entrega, em um dia com `HSP` horas de sol pleno, aproximadamente `P x HSP x rendimento` Wh, onde o rendimento (controlador de carga, cabos, sujeira, temperatura) é estimado em torno de 0,7 (**estimativa minha**, típica de projetos pequenos; meça). Os dados do seu local vêm do [SunData do CRESESB](https://cresesb.cepel.br/index.php?section=sundata), que dá a irradiação diária média **mensal** em kWh/m2/dia por ângulo de inclinação; dimensione para o **pior mês** (a linha "Maior mínimo mensal" da tabela do SunData é a que interessa).

**Exemplo A: repetidor nRF52 (consumo do exemplo: 12 mA médios a 3,7 V).** O valor de 12 mA é um número representativo de uma configuração otimizada de repetidor em placas nRF52, citado em guias da comunidade (Mesh America); a documentação oficial do Meshtastic insiste que o consumo depende do uso e manda **medir o seu nó** com um medidor que acumule watt-hora (o guia oficial "Measure Power Consumption").

1. Consumo: `12 mA x 24 h = 288 mAh = 0,288 Ah` por dia. Em energia: `0,288 Ah x 3,7 V = 1,07 Wh` por dia.
2. Bateria para 5 dias sem sol, com 80% de profundidade de descarga utilizável e mais um fator de 0,8 para perda de capacidade no frio: `1,07 x 5 = 5,33 Wh`; `5,33 / (0,8 x 0,8) = 8,3 Wh`. Em uma célula de 3,2 V (LiFePO4), `8,3 / 3,2 = 2,6 Ah` no mínimo. Uma bateria de 10.000 mAh a 3,7 V (37 Wh), como no relato de montagem da bibliografia, dá 4,4 vezes essa folga.
3. Painel, supondo pior mês com 3 HSP (**valor hipotético; consulte o SunData**): `P = 1,07 / (3 x 0,7) = 0,51 Wp`. O mínimo teórico é pouco; na prática se usa 2 a 6 W para recuperar depois de dias nublados.
4. Recuperação com painel de 2 W: produz `2 x 3 x 0,7 = 4,2 Wh` por dia, e sobram `4,2 - 1,07 = 3,13 Wh` por dia. Para repor o déficit de 5,33 Wh: `5,33 / 3,13 = 1,7 dia`. Bom.

**Exemplo B: um Raspberry Pi como gateway em local remoto (consumo do exemplo: 2 W médios, valor hipotético que você deve medir).** Energia diária: `2 W x 24 h = 48 Wh`, que é `48 / 1,07 = 45` vezes o repetidor. Com 2 dias de autonomia: `48 x 2 = 96 Wh`; `96 / (0,8 x 0,8) = 150 Wh`, o que dá uma bateria de 12,8 V e 12 Ah (`12,8 x 12 = 153,6 Wh`). Painel: `48 / (3 x 0,7) = 22,9 Wp`, na prática 30 a 50 Wp. É um sistema **muitas vezes** maior e mais caro que o do exemplo A. Conclusão: **o Pi fica onde há tomada; o morro recebe MCU.**

**Aviso de bateria de lítio.** LiFePO4 é mais seguro que outras químicas de lítio, mas não é imune a fogo. Use BMS (*battery management system*), fusível próximo ao polo positivo da bateria e conector com polaridade correta (o relato de montagem da Dan Pupius destaca que a polaridade do conector da bateria era invertida em relação à placa RAK e que foi preciso inverter os fios). **Não carregue lítio abaixo de 0 graus C** sem BMS com proteção de baixa temperatura: a carga em frio causa deposição de lítio metálico, perda permanente de capacidade e risco de curto interno (fonte: Red Arc Electronics e o guia de bateria da Mesh America; em climas frios, use controlador de carga com sensor de temperatura). Em clima quente, uma caixa preta e selada ao sol pode passar de 60 a 70 graus C por dentro (relato do site NEPA Mesh, 2026).

## Caixa estanque, conectores e antena

O que o relato de montagem, o guia do NEPA Mesh e o de Dan Pupius concordam em apontar:

- **Caixa** de polipropileno ou policarbonato com grau de proteção IP65 ou IP67 (IP65: protegida contra jatos de água; IP67: imersão temporária; o segundo algarismo vem da norma IEC 60529, que eu não abri, então trate como referência). Cor clara para reduzir calor.
- **Entradas de cabo para baixo**, com prensa-cabos (*cable gland*) e vedação; gravidade ajuda a impermeabilizar.
- **Condensação, não chuva, é o inimigo.** Uma válvula de respiro (*breather*) e sílica-gel dentro da caixa, trocada uma vez por ano, reduzem a umidade acumulada por ciclos de calor e frio.
- **Conector de antena passante** (SMA fêmea de painel) com curto cabo até a placa, e fita autoamalgamante sobre a junta. Atenção com **U.FL/IPEX versus SMA**: um relato de montagem perdeu semanas de alcance porque usou o conector U.FL da placa em vez do SMA que ela indicava; conecte no conector de RF que o fabricante manda.
- **Antena** no ar livre, na frequência certa (915 MHz), com casamento verificado ([Módulo 4, Aula 7](../04%20-%20Antenas/07%20-%20Medicao%20Dummy%20Load%20e%20Erros%20Comuns.md)); cabo curto e de baixa perda ([Módulo 4, Aula 3](../04%20-%20Antenas/03%20-%20Linhas%20de%20Transmissao%20Conectores%20e%20Balun.md)).

## Mastro, aterramento e segurança

Tudo o que o [Módulo 4, Aula 6](../04%20-%20Antenas/06%20-%20Solo%20Altura%20e%20Instalacao%20Segura.md) ensinou vale aqui, sem atalho. Os pontos que matam:

- **Rede elétrica.** Antena, mastro e cabo de sustentação são condutores. Se qualquer parte tocar ou cair na rede, a corrente passa por você. Mantenha distância de segurança (regra prática do Módulo 4: no mínimo o comprimento total da estrutura mais margem; a concessionária define as distâncias oficiais). Instale com duas pessoas, tempo seco, sem vento forte e sem trovoada.
- **Descargas atmosféricas.** Mastro aterrado e interligado ao aterramento da instalação elétrica, protetor de linha coaxial na entrada quando há cabo até o prédio, e desconexão em tempestade. Um SPDA da edificação segue a NBR 5419 e exige projetista.
- **Altura.** Torre e telhado: equipamento de proteção contra queda; estruturas altas, profissional.
- **Exposição a RF.** Com 10 a 100 mW de módulo LoRa, o risco é baixíssimo em distâncias normais; ainda assim, não deixe a ponta da antena colada em pessoas de forma contínua ([Módulo 1, Aula 8](../01%20-%20Fisica%20de%20Ondas%20e%20Espectro%20Eletromagnetico/08%20-%20Radiacao%20e%20Seguranca%20de%20RF.md)).

**Limite entre hobby e profissional:** um nó pequeno em poste baixo, longe da rede elétrica, você faz com cuidado. Torre, mastro de vários metros perto de fios, instalação em telhado alto e sistema elétrico de potência (tomada de 127/220 V, inversores) exigem profissional habilitado e, quando cabível, responsável técnico.

## Entregável: lista de materiais e memória de cálculo

1. **Lista de materiais (BOM)** por nó: placa, antena, cabo, conector, caixa, prensa-cabo, bateria, painel, controlador, fusível, suporte. Com preço e fornecedor.
2. **Memória de cálculo de energia** de cada nó remoto: consumo medido (mAh/dia), autonomia desejada, capacidade de bateria, painel e HSP do pior mês com a fonte (SunData).
3. **Desenho de instalação**: onde a antena, a caixa e o mastro ficam, distância de qualquer fio, caminho de aterramento.

## Checklist da etapa

- [ ] Escolhi SBC ou MCU para cada nó, justificado pelo serviço (não por gosto).
- [ ] Sei o consumo de cada nó em mAh por dia, medido ou de fonte confiável.
- [ ] Refiz a conta de bateria e painel do exemplo A com os meus números.
- [ ] Nenhum pino 3,3 V vai receber 5 V; nenhum GPIO aciona carga direta.
- [ ] A antena estará conectada antes de qualquer energia, e a distância de fios foi medida.
- [ ] Sei o limite do que farei sozinho e do que exige profissional.

## Resumo

- SBC (Pi) roda Linux e serviços mas gasta muito; MCU (ESP32, nRF52, RP2040) dorme e vive de bateria. Use o Pi onde há tomada, MCU no morro.
- Para gateway de LoRa basta um Pi Zero 2 W ou Pi 4 de 1 GB; o Pi 5 precisa de fonte de 5 V e 5 A.
- GPIO é 3,3 V, com entradas que não toleram 5 V e corrente de projeto de poucos mA por pino: divisor resistivo para sinal lento e transistor ou acoplador para carga.
- Energia solar: consumo diário, bateria com autonomia e perda no frio, painel pelo pior mês de sol pleno e verificação de recuperação. Um Pi remoto custa cerca de 45 vezes a energia de um repetidor nRF52 (nos exemplos).
- Lítio: nunca carregar abaixo de 0 graus C sem proteção, com BMS e fusível. Mastro: distância da rede elétrica, aterramento e, se for alto, profissional.

## Para aprofundar

- [ ] [Raspberry Pi 5 (página oficial do produto)](https://www.raspberrypi.com/products/raspberry-pi-5/) (Raspberry Pi): especificações, fonte de 5 V e 5 A, RTC e prazo de produção.
- [ ] [GPIO pads control (documentação oficial)](https://github.com/raspberrypi/documentation/blob/master/documentation/asciidoc/computers/raspberry-pi/gpio-pad-controls.adoc) (Raspberry Pi): intensidade de saída, o limite de 16 mA e o que acontece se o suprimento de 3,3 V é sobrecarregado.
- [ ] [GPIO and the 40-pin header (documentação oficial)](https://github.com/raspberrypi/documentation/blob/master/documentation/asciidoc/computers/raspberry-pi/gpio-on-raspberry-pi.adoc) (Raspberry Pi): níveis de tensão e o aviso "não use 5 V para componentes de 3,3 V".
- [ ] [How To Measure Meshtastic Device Power Consumption](https://meshtastic.org/docs/hardware/solar-powered/measure-power-consumption/) (Meshtastic, documentação oficial): como medir o consumo médio do seu nó antes de dimensionar painel e bateria.
- [ ] [Building a Solar-Powered Meshtastic Node](https://pupius.com/resources/meshtastic/solar) (Dan Pupius): montagem completa de um nó solar com lista de peças e alertas de polaridade e antena.
- [ ] [Putting a Node Outside: Enclosures, Weatherproofing, and Not Destroying Your Hardware](https://nepamesh.com/putting-a-node-outside-enclosures-weatherproofing-and-not-destroying-your-hardware/) (NEPA Mesh, maio de 2026): caixas, prensa-cabos, condensação e calor.
- [ ] [Meshtastic Solar Node, NYME, NY State](https://www.youtube.com/watch?v=6HcKak2dxn8) (TheFossilChannel): vídeo de um nó solar completo (caixa, painel, antena caseira); conteúdo não assistido além do que o resultado de busca mostra.

[Próxima aula: Preparar o Raspberry Pi](./03%20-%20Preparar%20o%20Raspberry%20Pi.md)
