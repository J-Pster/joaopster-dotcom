[Voltar ao módulo](./README.md)

# Aula 1: Por que modos digitais existem

*Pergunta que esta aula responde: por que um sinal digital consegue ser decodificado quando a voz já sumiu no ruído, o que se paga por isso e como os modos digitais do rádio amador se classificam?*

> Regulamentação verificada em setembro de 2026 no Ato Anatel nº 926/2024 e no Ato nº 3448/2026. Transmitir exige licença de radioamador; receber é passivo. Esta aula explica tecnologia, não substitui a leitura dos atos (ver Módulo 5).

## O problema: o ouvido humano é um decodificador caro

Uma conversa em SSB (Módulo 3, Aula 3) ocupa cerca de 2,4 a 3 kHz e depende de um decodificador biológico: o ouvido e o cérebro. Ele é ótimo, mas exige que a voz esteja acima do ruído por uma margem confortável. Como ordem de grandeza, a voz é inteligível com uma relação sinal-ruído (SNR) na casa de **+10 dB** medida em 2500 Hz. Isso é uma regra prática de operador, não uma norma.

O ruído térmico que entra num receptor cresce com a largura de banda (Módulo 1, Aula 7 e Módulo 3, Aula 7):

```
N (dBm) = -174 + 10 x log10(B em Hz)
```

Para B = 2500 Hz: `N = -174 + 34 = -140 dBm`. Voz com SNR +10 dB precisa de um sinal de cerca de `-130 dBm` na entrada do receptor. Esse número é o piso ideal de ruído térmico; no HF o ruído atmosférico e artificial costuma ser maior, mas a comparação abaixo em dB não muda.

O FT8, o modo digital que você vai estudar a fundo na Aula 4, decodifica com SNR de cerca de **-21 dB** na mesma referência de 2500 Hz. O sinal necessário passa a ser `-140 - 21 = -161 dBm`.

```
diferença = -130 - (-161) = 31 dB  ->  10^(3,1) = cerca de 1.260 vezes em potência
```

Mantidos o caminho de propagação e o ruído, o mesmo alcance de uma estação de voz com 100 W exigiria, no papel, cerca de `100 W / 1.260 = 0,08 W`, ou 80 mW, no modo digital. O guia oficial do WSJT-X (o programa do FT8) diz que QSOs mundiais no HF são possíveis "com potências de poucos watts, ou até miliwatts, e antenas de compromisso" (WSJT-X 2.7.0 User Guide, seção 1, consultado em setembro de 2026).

## "Abaixo do ruído" é uma questão de referência

A frase "o FT8 decodifica abaixo do ruído" confunde porque o SNR de -21 dB está definido em 2500 Hz, largura de um canal SSB. O sinal FT8 ocupa apenas cerca de 50 Hz. Refaça a conta com a banda que o sinal realmente usa:

```
SNR em 50 Hz  = -21 + 10 x log10(2500 / 50) = -21 + 17 = -4 dB
SNR em 6,25 Hz (um único tom) = -21 + 10 x log10(2500 / 6,25) = -21 + 26 = +5 dB
```

Dentro da largura de um tom, o sinal está **5 dB acima** do ruído. A decodificação não é mágica: o receptor filtra em software uma banda de poucos hertz onde o sinal domina, e o ruído das outras dezenas de milhares de hertz que o ouvido ouvia simplesmente não entra na conta. Essa é a primeira ferramenta do digital: **concentrar a energia em pouca banda**.

## As quatro ferramentas

Tudo o que os modos digitais fazem para chegar a -21 dB ou menos se resume a quatro decisões, todas já apresentadas no Módulo 3:

| Ferramenta | O que faz | O que custa |
|---|---|---|
| Banda estreita | Menos ruído captado (10 x log10 da razão de bandas) | Menos taxa (Shannon: `C = B x log2(1 + SNR)`) |
| Símbolos longos | Cada símbolo dura muito tempo, o receptor integra mais energia por símbolo | Menos símbolos por segundo |
| FEC (correção de erros) | Bits redundantes permitem corrigir erros no destino (ganho de codificação de alguns dB) | Menos bits úteis por bit transmitido |
| Sincronismo conhecido | Sequências de sincronismo e relógio comum tornam a busca do sinal barata | Overhead de sincronismo e dependência de tempo (Aula 3) |

O preço agregado é sempre **taxa**. O FT8 entrega 77 bits de informação em 15 s, cerca de 5 bit/s. A voz digitalizada em PCM telefônico (8 kHz de amostragem x 8 bits, Módulo 3, Aula 5) seria 64.000 bit/s. O digital fraco troca 4 ordens de grandeza de taxa por 30 dB de sensibilidade. É o compromisso do Módulo 3, Aula 9, na versão mais radical.

## O penhasco digital

Com voz analógica, a qualidade cai devagar: o ruído aumenta, a inteligibilidade diminui, o operador ainda entende "meia palavra". Um modo digital com FEC se comporta diferente: até certo SNR, a mensagem sai perfeita; abaixo dele, sai nada. É o "efeito penhasco".

Dois mecanismos explicam isso:

1. O decodificador FEC ou corrige todos os erros ou falha. Não entrega "quase".
2. Cada mensagem carrega um **CRC** (verificação de redundância cíclica), como um checksum de rede: o FT8 usa 14 bits. O software só mostra a mensagem se o CRC fecha. Uma decodificação falsa ainda é possível, e é mais provável quando o decodificador usa informação a priori sobre o QSO (artigo dos criadores, "The FT4 and FT8 Communication Protocols", QEX 2020), mas é rara.

Para quem vem de redes: o FEC é o que o TCP não faz (o TCP retransmite, não corrige), e o CRC é o que ele faz (detecta corrupção e descarta). No rádio de sinal fraco você geralmente não pode pedir retransmissão, por isso o FEC é obrigatório; no rádio de dados com conexão (Winlink, packet), se combina FEC com **ARQ** (pedido automático de repetição), o mesmo princípio do TCP.

## O que é "um modo"

No rádio amador, "modo" é um pacote fechado de decisões:

- **modulação** (como bits viram tons, fase ou frequência: FSK, PSK, OFDM, Módulo 3);
- **codificação** (FEC, CRC, compressão da mensagem);
- **protocolo** (formato da mensagem, quem fala quando, se há confirmação);
- **sincronismo** (relógio comum ou detecção assíncrona).

Duas estações só se entendem se usarem o mesmo modo. Um sinal FT8 não é decodificável por um programa de JS8Call, mesmo que a modulação seja parecida (o guia do JS8Call afirma que suas mensagens não são decodificadas pelo WSJT-X e vice-versa).

## Mapa dos modos que você vai ver neste módulo

| Família | Exemplos | Ideia central | Aula |
|---|---|---|---|
| Sinal fraco estruturado, com janela de tempo | FT8, FT4, WSPR | Mensagens curtas e rígidas, FEC forte, relógio comum | 3, 4, 5, 6 |
| Teclado a teclado | PSK31, RTTY, Olivia, JS8Call | Conversa de texto livre em banda estreita | 6 |
| Pacote, sem conexão | APRS sobre AX.25 | Broadcast local de posição e mensagens curtas | 7 |
| Dados com conexão e ARQ | Packet AX.25 conectado, Pactor, ARDOP, VARA | Transferência confiável de arquivos e e-mail | 7, 8 |
| Voz digital | D-STAR, DMR, System Fusion, FreeDV, M17 | Vocoder + FEC + modulação digital | 9 |

## O que se perde

Ser honesto sobre o custo é parte do "porquê":

- **Tempo no ar.** Um QSO em FT8 leva pelo menos um minuto e meio de troca de seis mensagens de 15 s. Voz e CW fluem mais rápido quando o sinal é forte.
- **Ciclo de trabalho alto.** O FT8 transmite 12,64 s a cada 15 s, ou 84% do tempo, um esforço contínuo para o transmissor (Aula 5).
- **Dependência de computador e de tempo.** Sem computador e sem relógio certo, não há FT8. Sem internet, muitos modos ficam dependentes de GPS (Aula 3).
- **Perda do ouvido.** Você não escuta o sinal que decodificou. Para o operador que "sente a banda", isso muda a experiência. Há quem chame de jogo de computador contra computador; o guia de FT8 exige que uma pessoa inicie cada QSO (QEX, seção 7) exatamente para evitar operação totalmente robótica.
- **Ocupação de espectro.** Um modo de banda larga e ciclo contínuo pode atrapalhar os vizinhos; por isso existem subfaixas de modos digitais.

## Regras que valem para todos os modos digitais no Brasil

Conteúdo dos Atos 926/2024 e 3448/2026 (verificado em setembro de 2026):

- **Modos Digitais** são definidos como emissões de comunicações de dados e teletipos digitais (Ato 926, item 3.1.14). Cada faixa do plano de faixas indica em quais subfaixas o modo digital é permitido.
- **ACDS (Automatic Controlled Data Stations)** são estações de operação automática em modos digitais, com subfaixas próprias (Ato 926, itens 3.1.1 e 6.7). Pela definição, digipeaters, iGates, gateways do Winlink e beacons automáticos se enquadram nessa categoria (é a minha leitura do texto; não encontrei parecer da Anatel sobre cada caso), o que restringe onde podem operar. Voltamos a isso na Aula 9.
- **Criptografia não é permitida** em Modos Digitais e Voz Digital (Ato 926, item 6.11). Compressão e correção de erro com algoritmo público não escondem o significado (Módulo 5, Aula 5).
- **Espalhamento espectral e salto em frequência não são permitidos abaixo de 440 MHz** (Ato 926, item 6.12). Nenhum modo desta aula usa isso; o LoRa (Módulo 8), sim, e por isso precisa de outro regime.
- **Potência mínima necessária** é uma obrigação geral (Ato 926, item 5.1). Modos que funcionam com 5 W não justificam 500 W.
- **Identificação** obrigatória e chamadas com indicativo completo (Ato 3448, itens 10.2 e 10.3). Cada modo tem sua forma de fazer isso; as mensagens do FT8, por exemplo, sempre carregam os indicativos.

## Resumo

- O digital fraco vence a voz em sensibilidade por cerca de 30 dB (mil vezes em potência) porque concentra energia em poucos hertz, alonga os símbolos, adiciona FEC e usa sincronismo conhecido.
- "Abaixo do ruído" é relativo à banda de referência de 2500 Hz; na banda do próprio sinal, o SNR de um tom de FT8 é positivo (+5 dB).
- O preço é taxa: cerca de 5 bit/s no FT8, contra dezenas de kbit/s de uma voz digitalizada.
- Com FEC + CRC, o resultado é um penhasco: a mensagem sai correta ou não sai.
- Um "modo" é modulação + codificação + protocolo + sincronismo; famílias diferentes resolvem problemas diferentes.
- No Brasil, modos digitais têm subfaixas, estações automáticas (ACDS) têm subfaixas ainda mais restritas, e criptografia é proibida.

## Para aprofundar

- [ ] [Why Do We Use Ham Radio Digital Modes?](https://www.youtube.com/watch?v=v6ACnG6IuqQ) (Ham Radio Crash Course): vídeo introdutório que confronta digital e voz em ruído, banda estreita e alcance (título e canal confirmados; conteúdo não assistido).
- [ ] [Digital Radio Modes Explained for Ham Radio and DMR Users](https://www.youtube.com/watch?v=G42wI3-58uw) (BridgeCom Systems): visão geral dos modos digitais, incluindo voz digital (título e canal confirmados; conteúdo não assistido).
- [ ] [The FT4 and FT8 Communication Protocols](https://wsjt.sourceforge.io/FT4_FT8_QEX.pdf) (Franke, Somerville, Taylor; QEX): o artigo dos criadores com a motivação do projeto, fonte dos números da Aula 4.
- [ ] [WSJT-X 2.7.0 User Guide, seção 1 Introdução](https://wsjt.sourceforge.io/wsjtx-doc/wsjtx-main-2.7.0.html) (Joe Taylor, K1JT): lista os modos do WSJT-X e para que cada um foi projetado.
- [ ] [Ato Anatel nº 926/2024](https://informacoes.anatel.gov.br/legislacao/component/content/article/165-atos-de-requisitos-tecnicos-de-gestao-do-espectro/2024/1919-ato-926) (Anatel): plano de faixas com as subfaixas de modos digitais e ACDS.

[Próxima aula: A placa de som como modem e a interface com o rádio](./02%20-%20Placa%20de%20Som%20como%20Modem%20e%20Interface%20com%20o%20Radio.md)
