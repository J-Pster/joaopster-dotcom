[Voltar ao módulo](./README.md)

# Aula 6: WSPR, JS8Call e os modos de teclado

*Pergunta que esta aula responde: como a mesma troca "taxa por sensibilidade" produz uma baliza a -31 dB (WSPR), um sistema de mensagens com retransmissão sobre a modulação do FT8 (JS8Call) e os modos clássicos de conversa por texto (PSK31, RTTY, Olivia), e o que cada um serve para uma rede de mensagens sem internet?*

> Verificado em setembro de 2026: guia do WSJT-X 2.7.0, guia do JS8Call, WSPRnet, Ato Anatel nº 926/2024 e nº 3448/2026. Valores marcados "conta minha" são aritmética a partir das fontes. **Transmitir exige licença; estações automáticas (baliza, heartbeat sem operador) têm regras próprias, ver o fim de cada seção.**

## WSPR: uma baliza que ouve o mundo

### Por que existe

O WSPR (Weak Signal Propagation Reporter, pronuncia-se "whisper") não é um modo para conversar. É uma **baliza de propagação**: sua estação transmite baixa potência e cada estação que a decodifica **reporta** isso a um banco de dados público (o WSPRnet). Você descobre em minutos, sem falar com ninguém, para onde seu sinal chega, em quais bandas e com que SNR. O guia do WSJT-X o descreve como "projetado para sondar caminhos de propagação com transmissões de baixa potência".

Um efeito colateral é diagnóstico: ele testa **toda a cadeia**, do computador à antena. Se o seu sinal foi ouvido lá longe, a cadeia toda funciona.

### O que é transmitido

Uma mensagem padrão é composta por três campos, segundo a Wikipedia e o artigo de K1JT no QST:

| Campo | Bits |
|---|---|
| Indicativo | 28 |
| Localizador de 4 caracteres | 15 |
| Potência em dBm | 5 |
| Tipo de mensagem | 2 |
| **Total** | **50** |

Exemplo: `K1ABC FN20 37` significa "K1ABC, quadrado FN20, 37 dBm". A potência em **dBm** é o dB relativo a 1 mW (Módulo 1): `P(dBm) = 10 x log10(P / 1 mW)`. Então 1 W = 30 dBm, 200 mW = 23 dBm, 5 W = 37 dBm (o exemplo da Wikipedia é o limite de 5 W da faixa de 630 m em alguns países).

### Como é modulado

| Parâmetro | Valor |
|---|---|
| Codificação | Convolucional, rate 1/2, comprimento de restrição K = 32 |
| Símbolos | `(50 + 32 - 1) x 2 = 162` |
| Modulação | 4-FSK contínua em fase |
| Taxa de símbolos e espaçamento | `12000 / 8192 = 1,4648 baud` e `1,4648 Hz` |
| Banda ocupada | cerca de 6 Hz |
| Duração | `162 x 8192 / 12000 = 110,6 s` |
| Início | 1 s depois do início de um minuto par (`hh:00:01`, `hh:02:01`...) |
| Limiar | cerca de -31 dB em 2500 Hz (guia do WSJT-X) |

Compare com o FT8 (Aula 4): símbolo de 683 ms contra 160 ms, banda de 6 Hz contra 50 Hz, ciclo de 2 minutos contra 15 s. A sensibilidade sobe cerca de 10 dB (de -21 para -31 dB) e a taxa cai:

```
FT8:  77 bits / 12,64 s = 6,09 bit/s
WSPR: 50 bits / 110,6 s = 0,45 bit/s
razão = 13,5 vezes = 11,3 dB
```

A taxa caiu 11,3 dB e a sensibilidade subiu 10 dB: é a regra do Módulo 3, cada 3 dB de sensibilidade custam metade da taxa. Pode-se conferir com o Eb/N0, como na Aula 4:

```
WSPR: S/N0 = 2500 x 10^(-3,1) = 2,0 Hz;  Eb/N0 = 2,0 / 0,45 = 4,4  ->  6,4 dB   (FT8: 5,3 dB)
```

Os dois modos operam com eficiência de energia semelhante (Eb/N0 de 5 a 6 dB); o WSPR só escolhe um ponto mais lento da mesma curva. (Conta minha, com os limiares de -31 dB e -20,8 dB.)

### Como usar

- **Frequências.** O WSPRnet lista os diais em USB (MHz): 0,136; 0,4742; 1,8366; 3,5686; 5,2872; 5,3647; 7,0386; 10,1387; 13,5539; 14,0956; 18,1046; 21,0946; 24,9246; 28,1246; 50,293; 70,091; 144,489; 432,300; 1296,500. A frequência central do sinal fica 1,5 kHz acima do dial (`dial = centro - 1,5 kHz`, do tutorial de ZS6SGM).
- **Transmitir e receber alternam** por sorteio: uma **fração de TX** (por exemplo 20 a 25%) decide se em cada janela de 2 minutos você transmite ou ouve. Várias estações no mesmo canal se dividem no tempo. O WSJT-X tem *band hopping* programável, com o qual uma estação troca de banda sozinha conforme um horário.
- **Reportar.** O WSJT-X pode **enviar os relatórios** para o WSPRnet (com internet). O banco tem mapa e busca por indicativo, banda e período.
- **Estabilidade.** O tutorial de ZS6SGM avisa que o WSPR é intolerante a mais de cerca de 4 Hz de deriva do rádio durante a janela de 2 minutos, e que o relógio precisa estar dentro de ±1 s (Aula 3).
- **Sem transmissor de HF**: baliza de baixo custo com Raspberry Pi. O projeto **Wsprry Pi** gera o sinal por um pino do Pi (onda quadrada por PWM) ou com um chip Si5351; sua documentação avisa: "não use sem um filtro passa-baixas apropriado", ou a saída cria interferência de harmônicos em outras bandas. Isso liga ao Módulo 12.

### Regras no Brasil

O Ato 926 trata especificamente disso: "as estações brasileiras participantes de redes internacionais de modos digitais voltadas para estudos de rádio propagação em frequência nominal única devem seguir orientações referentes a ACDS" (item 6.6). A baliza de WSPR é uma estação ACDS. Os diais acima, somados a 1,5 kHz, caem em subfaixas de modos digitais com ACDS ou com a Nota 3 do Ato (que autoriza ACDS de estações brasileiras nessas redes) em várias bandas: 14,0971 MHz está em 14.089 a 14.099 kHz (ACDS); 21,0961 MHz em 21.090 a 21.110 kHz (ACDS); 28,1261 MHz em 28.120 a 28.150 kHz (ACDS); 3,5701 MHz, 7,0401 MHz, 10,1402 MHz e 50,2945 MHz em subfaixas com a Nota 3 (conferência minha nas Tabelas do Ato 926, verificada em setembro de 2026). A classe do COER continua valendo (Aula 5). Uma baliza que fica ligada sozinha é operação automática: confirme com a LABRE ou a Anatel antes de deixá-la sem supervisão.

## JS8Call: mensagens livres sobre a modulação do FT8

### Por que existe

O FT8 é ótimo em sinal fraco, mas só carrega mensagens rígidas de 13 caracteres livres no máximo. Jordan Sherer (KN4CRD) propôs em 2017 combinar a robustez do FT8 com uma camada de **mensagens e rede**. O guia do JS8Call diz que o programa é "um experimento em combinar a robustez do FT8 com uma camada de protocolo de mensagens e de rede para comunicação de sinal fraco", com mensagens teclado a teclado, mensagens guardadas (caixa de entrada), retransmissão e anúncios automáticos de estação. Ele deriva do código do WSJT-X (GPLv3), mas **não é apoiado nem endossado** pela equipe do WSJT-X.

Fórmula do guia: **JS8 + chamada dirigida = JS8Call**. JS8 é a modulação (uma 8-FSK derivada da do FT8); "chamada dirigida" é o protocolo por cima.

### Modulação e velocidades

Um texto longo é dividido em **quadros** (frames) enviados em ciclos consecutivos, com poucos segundos de silêncio entre eles. Os quadros de dados têm 75 bits com codificação variável para caber o máximo de caracteres. Velocidades (guia do JS8Call):

| Velocidade | Duração do quadro | Taxa de símbolos | Espaçamento / banda | Sensibilidade relativa ao Normal |
|---|---|---|---|---|
| Slow | 25,28 s | 3,125 baud | 3,125 Hz / 25 Hz | +3 dB |
| **Normal** | **12,64 s** | **6,25 baud** | **6,25 Hz / 50 Hz** | referência (a mais próxima do FT8) |
| Fast | 7,9 s | 10 baud | 10 Hz / 80 Hz | -2 dB |
| Turbo (JS8 40) | 3,95 s | 20 baud | 20 Hz / 160 Hz | -6 dB |

A estrutura é a do FT8: 79 símbolos. Todas as velocidades seguem o mesmo compromisso: mais lento, mais sensível. Um material de VE3TRQ resume o desempenho como decodificação até -20 dB e "confiável" a -18 dB (relato, não especificação).

Uma mensagem JS8 **não é decodificável pelo WSJT-X** e vice-versa. O guia recomenda **evitar as frequências principais do FT8** e usar as que o programa sugere, tipicamente de 4 a 8 kHz do FT8.

### Tipos de mensagem e comandos

- **Padrão (texto livre)**: só aparece nas estações que estiverem com o deslocamento de receptor dentro de 10 Hz do seu, como nos modos PSK, RTTY e Olivia.
- **Dirigida**: começa com o indicativo do destinatário; o programa acrescenta o seu automaticamente. Chega ao destinatário **qualquer que seja a frequência de áudio**, desde que ele esteja na mesma passband.
- **Comandos** que o outro programa responde sozinho quando o modo AUTO está ligado: `SNR?`, `GRID?`, `INFO?`, `STATUS?`, `HEARING?` (quem você está ouvindo).

### A parte de rede: heartbeats, relé, guardar e recuperar

Aqui está o valor para uma rede sem internet.

- **Heartbeat (HB)**: quando ligado, o programa transmite periodicamente seu localizador ao grupo `@HB`, numa frequência de áudio aleatória entre 500 e 1000 Hz. As outras estações com AUTO respondem com um **ACK** e o SNR com que ouviram você. O guia enfatiza que o objetivo **não** é medir propagação, e sim preencher a **lista de estações ouvidas** para saber quem provavelmente é alcançável. É descoberta de vizinhos automática.
- **Relé (`>`)**: uma mensagem pode ser enviada por caminho: `KN4CRD>DR4CNK>OLA` manda "OLA" a DR4CNK **através** de KN4CRD. Cada salto é um **novo** sinal de rádio com a mensagem, um checksum e o caminho de volta. O guia explica que um relé JS8 "não retransmite automaticamente o sinal de rádio na mesma frequência ou em outra", "isso faria dele um repetidor". O relé **recria** a mensagem e a transmite outra vez. É como um roteador de pacotes IP, não como um repetidor de camada 1.
- **Guardar e recuperar**: `MSG TO:CALLSIGN texto` guarda uma mensagem no disco de uma estação para retirada posterior; `QUERY MSGS` pede as mensagens guardadas para você. O programa também verifica se o destinatário apareceu na lista de estações ouvidas nos últimos 15 minutos e, com AUTO ligado, avisa (`RETRIEVE MSG`). Isso é **armazenar e encaminhar** (store-and-forward): a mensagem espera até que haja propagação, como um email SMTP. Um relato de VE3TRQ diz que radioamigos usam isso para jogar xadrez em HF.
- **Grupos**: `@GRUPO` envia a um conjunto de estações.
- **Ponte com o APRS**: o comando `@APRSIS` (experimental) faz uma estação com internet **postar um pacote APRS** em nome de outra, inclusive mensagens SMS, segundo o material de VE3TRQ. Exige que alguém com internet e recepção ativa ouça a mensagem.

Em tempo de transmissão: cada quadro vale um ciclo de 15 s. Uma estimativa grosseira, contando 75 bits por quadro sem nenhuma compactação (o guia diz que há compactação variável, então a prática é melhor): `100 caracteres x 8 bits = 800 bits; 800 / 75 = 10,7 quadros x 15 s = 160 s`, ou seja, da ordem de poucos minutos para uma frase curta. O JS8Call é um meio de mensagens **lento e robusto**, não de dados.

### Por que é relevante para redes de mensagens e emergência

- Não precisa de infraestrutura além de rádio SSB, computador e um relógio (com tolerância de alguns segundos, Aula 3).
- Descobre vizinhos por heartbeat, roteia por relé e guarda mensagens para recuperação: as três funções de uma rede DTN (delay-tolerant network) improvisada, em um único programa.
- Funciona a -18 a -20 dB, quando o telefone, a internet e a voz já falharam. O material de VA3ROM o recomenda como o modo de sinal fraco multifuncional para um "kit de ferramentas" de emergência (é uma opinião do autor).
- Cobre distâncias de HF (centenas a milhares de km), o que é diferente do APRS (local) e do LoRa (Módulo 8).

### Cuidados e regras

- O guia do JS8Call adverte que **transmissões sem operador presente podem ser contra as regras da jurisdição** e por isso há um temporizador de inatividade (padrão de 60 minutos segundo VA3ROM, ajustável) que desliga o AUTO. Recomenda enviar heartbeats só quando você está no ponto de controle da estação.
- No Brasil, uma estação que responde sozinha (AUTO, heartbeat) é **operação automática em modo digital**, ou seja, ACDS (Ato 926, item 3.1.1), que só pode usar as subfaixas ACDS (item 6.7). As frequências sugeridas pelo JS8Call ficam de 4 a 8 kHz do FT8 e, em várias bandas, **fora** das subfaixas ACDS do plano brasileiro. Essa é a **minha interpretação** do texto dos atos, sem parecer da Anatel: use o JS8Call com operador presente e sem respostas automáticas fora de subfaixas ACDS, ou confirme com a LABRE ou a Anatel.
- Relé de mensagens de terceiros: o Ato 3448, item 4.3, proíbe **comunicado internacional** de terceira parte (exceto emergência ou acordo de reciprocidade). A ponte `@APRSIS` envolve uma estação conectada à internet: veja a nota sobre "tráfego entre redes" (Res. 777, art. 10-B, § 2) na Aula 7.
- Conteúdo em claro: nada é criptografado, e o conteúdo tem de respeitar as regras de conteúdo do Módulo 5, Aula 5.

## Os modos de teclado clássicos

Anteriores ao FT8, foram os primeiros a usar a placa de som. São **assíncronos**: sem janela de tempo, sem exigência de relógio. Todos podem ser operados no **fldigi** (programa multimodo e gratuito, de W1HKJ e equipe, para Windows, Linux e macOS), que segundo o guia inclui PSK31, RTTY, MFSK16 e DominoEX, entre outros. O guia do fldigi lembra que muitos modos "exigem alta linearidade do transmissor" e por isso recomenda **potência abaixo de cerca de 30% do máximo** (Aula 2).

### PSK31

Criado por Peter Martinez (G3PLX) e apresentado em dezembro de 1998. A taxa de **31,25 baud** foi escolhida porque digitar a 50 palavras por minuto exige cerca de 32 bit/s, e 31,25 Hz vem de 8 kHz dividido por 256 (fácil de gerar em DSP). Veja: [PSK31 na Wikipedia](https://en.wikipedia.org/wiki/PSK31).

- **BPSK31**: 180 graus de inversão de fase = bit 0, sem inversão = bit 1, num intervalo de 32 ms. A inversão ocorre no ponto de amplitude nula, com filtro em cosseno para suavizar (sem cliques).
- **Varicode**: código de comprimento variável; os caracteres mais frequentes têm o código mais curto (como no Morse), e o limite entre caracteres é marcado por dois zeros seguidos, o que permite ao software achar as fronteiras em qualquer ponto do fluxo.
- **QPSK31**: mesma taxa e banda, com 4 fases e um código convolucional de taxa 1/2, restrição 5 (FEC).
- Ocupa cerca de 60 Hz (designação 60H0J2B): muitas conversas cabem na largura de um canal de voz. Serve a 5 W em HF.
- Fraquezas: sensível a perturbações de fase (caminhos polares); sem FEC no BPSK; não serve a dados grandes.
- Variantes mais lentas (PSK10, PSK05) trocam taxa por robustez; PSK63 é mais rápida.

### RTTY

Teletipo por rádio, a família mais antiga. No HF amador: código **Baudot de 5 bits**, mais um bit de início e 1 a 2 de parada, a **45,45 baud** (60 palavras por minuto), tons de marca e espaço em geral de 2125 Hz e 2295 Hz, ou seja, **170 Hz de deslocamento** (AA5AU). Não tem correção de erro e transmite **100% do tempo**. Sem FEC, perde em sensibilidade para os modos mais novos, mas ainda vive nos concursos. Duas práticas: FSK direto no transmissor ou AFSK pela placa de som (Aula 2, com o cuidado da inversão USB/LSB).

### Olivia (e MFSK em geral)

Desenvolvido por Pawel Jalocha no fim de 2003 para condições difíceis de HF (baixo SNR mais multipercurso). Notação **Olivia X/Y**: X tons, Y Hz de banda (por exemplo 16/500 ou 32/1000). Veja: [Olivia MFSK na Wikipedia](https://en.wikipedia.org/wiki/Olivia_MFSK).

- Camada inferior: MFSK clássica (padrão 32 tons em 1000 Hz, a 31,25 baud); um único tom de 32 é enviado por vez, e o receptor mede a amplitude dos 32 por uma transformada de Fourier.
- Camada superior: um código de correção de erros com **funções de Walsh**: cada caractere ASCII é uma de 64 funções de Walsh, e o receptor escolhe a de maior correlação. Os dois níveis são códigos "1 entre N".
- Blocos de 5 caracteres por 2 s: **2,5 caracteres por segundo**, 150 por minuto.
- Decodifica com ruído até 10 dB mais forte que o sinal (SNR de -14 dB, conforme a Wikipedia). Em troca, é lento e largo: 500 a 1000 Hz.
- A Wikipedia cita a convenção de iniciar os contatos em Olivia 8/250 numa frequência de chamada e depois combinar outra configuração.

### Comparação

| Modo | Modulação | Banda | Sensibilidade (relato) | FEC | Relógio | Uso típico |
|---|---|---|---|---|---|---|
| RTTY | FSK, 45,45 baud | deslocamento de 170 Hz | não confirmado | não | não | Concursos, tradição |
| PSK31 | BPSK, 31,25 baud | cerca de 60 Hz | não confirmado | só no QPSK31 | não | Conversa em QRP |
| Olivia 32/1000 | 32-MFSK + Walsh | 1000 Hz | cerca de -14 dB | sim | não | Comunicação em HF ruidoso |
| JS8Call Normal | 8-FSK + LDPC | 50 Hz | cerca de -20 dB | sim | sim (2 s) | Mensagens e relé |
| FT8 | 8-GFSK + LDPC | 50 Hz | -21 dB | sim | sim (1 s) | Contatos rápidos |
| WSPR | 4-FSK + conv. | 6 Hz | -31 dB | sim | sim | Baliza de propagação |

Quem quiser transferir **formulários e mensagens estruturadas** por modos de teclado encontra o conjunto NBEMS (o **flmsg**, do mesmo projeto do fldigi), demonstrado em vídeo de HuthandBoothPhoto (formulários ARRL Radiogram e ICS-213 sobre PSK); é usado por grupos de emergência americanos (ARES) com Olivia e MT63.

## Resumo

- **WSPR**: mensagem de 50 bits (indicativo, localizador, potência em dBm), 162 símbolos de 4-FSK, 110,6 s e 6 Hz de banda, limiar de cerca de -31 dB: mesma eficiência do FT8 (Eb/N0 de 5 a 6 dB) num ponto 11 dB mais lento. É baliza, não conversa; o WSPRnet mostra o mapa público. No Brasil, é ACDS (Ato 926, item 6.6).
- **JS8Call**: modulação do FT8 com camada de rede: quadros de 15 s (Normal), heartbeat para descobrir vizinhos, relé por caminho (`A>B>msg`), guardar-e-recuperar (`MSG TO:`, `QUERY MSGS`), grupos. Relé recria a mensagem: não é repetidor. Lento (minutos por frase), robusto (cerca de -20 dB), sem infraestrutura além de rádio e relógio.
- **Regras**: respostas automáticas e heartbeats sem operador são ACDS no Brasil e restritos a subfaixas ACDS (minha leitura do Ato 926); relé para o exterior de mensagens de terceiros é proibido, salvo emergência.
- **PSK31, RTTY, Olivia**: modos assíncronos de conversa, sem relógio; PSK31 tem cerca de 60 Hz e 31,25 baud; RTTY, 45,45 baud e 170 Hz de deslocamento, sem FEC; Olivia troca banda e velocidade por robustez (FEC de Walsh, cerca de -14 dB).

## Para aprofundar

- [ ] [ZS6SGM - WSPR Tutorial v1.03](http://www.wsprnet.org/drupal/sites/wsprnet.org/files/ZS6SGM%20-%20WSPR%20Tutorial%20v1.03.pdf) (Stewart Moss, hospedado no WSPRnet): passo a passo do WSPR, dial versus frequência central, tolerância de tempo e de deriva.
- [ ] [WSPRnet: mapa e frequências](https://wsprnet.org/drupal/wsprnet/map) (WSPRnet): mapa público de spots e a lista oficial de frequências de dial.
- [ ] [JS8Call User Guide](https://js8call.com/JS8Call-improved/d6/d14/md_docs_2user__guide_2JS8Call__User__Guide.html) (JS8Call-improved): tipos de mensagem, comandos, heartbeat, relé e regras de operação sem operador.
- [ ] [Getting Started with JS8Call](https://www.youtube.com/watch?v=PV-BNN3adxU) (The Tech Prepper): configuração e uso de heartbeats, mensagens deixadas e recuperadas (título e canal confirmados; conteúdo não assistido).
- [ ] [NFARL JS8Call Presentation 2019-02-19](https://www.youtube.com/watch?v=mZKhVcFOljY) (CodeMasseur): apresentação de Jordan Sherer, o criador, com demonstração ao vivo (título e canal confirmados; conteúdo não assistido).
- [ ] [Beginners' Guide to Fldigi](https://www.w1hkj.org/beginners.html) (W1HKJ): configuração do fldigi (placa de som, CAT, PTT) e modos suportados, com o aviso sobre potência.

[Próxima aula: Packet radio, AX.25 e APRS](./07%20-%20Packet%20AX25%20e%20APRS.md)
