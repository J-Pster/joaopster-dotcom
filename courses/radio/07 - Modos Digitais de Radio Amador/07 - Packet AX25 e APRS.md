[Voltar ao módulo](./README.md)

# Aula 7: Packet radio, AX.25 e APRS

*Pergunta que esta aula responde: como pacotes de dados atravessam um canal de voz FM, por que o APRS é um sistema de posição e mensagem de área e não uma rede ponto a ponto, quem faz o quê (digipeater, iGate, TNC) e como o Direwolf junta tudo numa estação?*

> Verificado em setembro de 2026: Ato Anatel nº 926/2024 e nº 3448/2026, Resolução Anatel nº 777/2025, especificação APRS 1.2, "Understanding APRS Packets", repositório do Direwolf (versão 1.8.1, novembro de 2025) e o arquivo de exemplo `conf/generic.conf`. **Digipeaters e iGates são estações automáticas e mal configuradas congestionam o canal de todos: aprenda em modo só de recepção e fale com o grupo local (LABRE regional) antes de transmitir.**

## Por que o packet existe

Nos anos 1980, radioamadores quiseram **redes de computadores sobre rádio**: mandar dados de um computador a outro sem depender de linha telefônica. A ideia se chama **packet radio**: cortar os dados em pacotes com endereço e mandar cada um por rádio. Para isso adaptaram o protocolo de enlace X.25 e o chamaram **AX.25** (Amateur X.25). Segundo a Wikipedia, ele é uma camada de enlace de dados, e seus endereços "derivam dos indicativos" das estações de origem, destino e repetição, o que ajuda a cumprir a exigência de identificação (Módulo 5, Aula 4).

O AX.25 só define o **enlace** (quadros e endereços). A camada física fica a cargo do modem. Na prática:

- **1200 baud, tons Bell 202**, em VHF/UHF, pelo microfone e alto-falante de um rádio FM comum.
- **9600 baud, G3RUH** (FSK filtrada), em VHF/UHF, que exige a porta de dados do rádio (Aula 2).
- **300 baud, tons Bell 103**, em HF SSB.

## Camada física: AFSK 1200

No Bell 202, os dois níveis lógicos são dois tons de áudio: **1200 Hz e 2200 Hz**. Como mostra o laboratório de rádio-pacote da Universidade de Stanford, a 1200 bit/s cada bit dura `1/1200 = 0,83 ms`, tempo em que o tom de 1200 Hz faz **1 ciclo** e o de 2200 Hz faz **1,8 ciclo**, o suficiente para o receptor distinguir. A modulação é a AFSK da Aula 2: o áudio entra no rádio FM, que o transmite como frequência modulada (Módulo 3, Aula 4). A Anatel classifica essa emissão como dados em FM com subportadora (F2D, Ato 926, Tabela XLII).

A camada de enlace usa a sintaxe **HDLC**, herdada do X.25, o que traz três truques de sincronismo, já que o receptor não tem relógio combinado (contraste com a Aula 3):

| Recurso | O que faz |
|---|---|
| **Bandeira** `01111110` (0x7E) | Marca o início e o fim do quadro |
| **NRZI** | Codificação de linha em que um bit 0 é uma **mudança** de tom e um bit 1, **nenhuma mudança** |
| **Bit stuffing** | Depois de cinco bits 1 seguidos, o transmissor insere um 0, para que a sequência da bandeira (seis 1s) nunca apareça dentro dos dados |

Juntos, esses recursos dão ao receptor transições frequentes de tom para recuperar o relógio de bit e uma forma de achar o início do quadro, sem sincronismo externo. (A explicação da razão é geral; a descrição do NRZI e do bit stuffing vem do laboratório de Stanford e da Wikipedia.) O acesso ao canal é **CSMA**: cada estação ouve antes de transmitir; colisões ainda são possíveis (no modo conectado o quadro perdido é reenviado; no modo UI, ele simplesmente se perde).

### O quadro AX.25 UI

Segundo a especificação APRS, todo pacote APRS é um quadro **UI** (Unnumbered Information) com nove campos:

```
[flag] [destino 7] [origem 7] [digipeaters 0 a 56] [controle 0x03] [PID 0xF0] [informação] [FCS 2] [flag]
```

- **Destino, origem e digipeaters**: cada endereço tem 7 bytes: um indicativo de até 6 letras ou dígitos (em maiúsculas) mais um **SSID** de 0 a 15.
- **Controle 0x03**: quadro UI, sem numeração.
- **PID 0xF0**: sem protocolo de camada 3.
- **FCS**: soma de verificação de 16 bits (CRC do HDLC), como a verificação de CRC do FT8.
- **Informação**: até 256 bytes no AX.25 v2.0.

Tempo no ar: um pacote APRS típico de umas dezenas de bytes de informação mais cerca de 30 bytes de endereços tem algo como 70 a 100 bytes, ou 560 a 800 bits, ou seja, de 0,5 a 0,7 s a 1200 baud, mais o preâmbulo de sincronismo (estimativa minha).

### Conectado versus não conectado

O AX.25 tem dois modos, como TCP e UDP:

- **Conectado**: a estação abre um circuito virtual, numera quadros e pede retransmissão dos perdidos (ARQ). A versão 2.2 (1998) trouxe janelas maiores e "Selective Reject" (reenviar só o que faltou); segundo a Wikipedia, em 2020 poucas implementações a adotavam e a única completa conhecida era o **Direwolf**.
- **UI (sem conexão)**: um quadro solto, sem confirmação, como um datagrama UDP. É o que o APRS usa.

Para levar dados a longa distância com o AX.25, usa-se uma estação intermediária, o **digipeater** (digital repeater, repetidor digital): o AX.25 tem um roteamento por origem simples, em que o transmissor lista no cabeçalho os digipeaters que quer usar. Ao contrário de um repetidor de voz, o digipeater trabalha em **simplex, numa única frequência**, e retransmite o pacote depois de recebê-lo por inteiro. A LABRE-CE descreve assim o seu digipeater PT7BCN, em Fortaleza.

## APRS: um sistema de área, não uma rede de conversa

### Origem e objetivo

O **APRS** (Automatic Packet Reporting System) foi desenvolvido por Bob Bruninga, WB4APR, da Academia Naval dos EUA, a partir dos anos 1980. Sua primeira versão rodava num Apple II em 1982 e, em 1984, num VIC-20, para acompanhar cavalos numa prova de resistência de 160 km. A sigla vem do indicativo dele; Bruninga dizia que não é um sistema de rastreamento de veículos, mas de "presença" (Wikipedia). Ele faleceu em 2022; a Fundação APRS foi criada no mesmo ano.

A especificação (versão 1.2) define o objetivo como uma **ferramenta de comunicação tática em tempo real**, que:

- exibe mapas de veículos, pessoas, clima;
- usa protocolo **de um para muitos**, para que todos sejam atualizados imediatamente;
- usa **digipeating genérico**, sem conhecimento prévio da topologia;
- dá suporte a **mensagens** de texto curtas e boletins.

A ideia é a de um **quadro de situação compartilhado**: cada estação transmite periodicamente "estou aqui" (posição, símbolo, comentário), e todo mundo no alcance monta o mesmo mapa. Mensagens ponto a ponto de uma linha existem, com confirmação, mas o núcleo é a posição. Por isso, no vocabulário deste curso, APRS é um sistema de **posição e mensagem de área**: local por concepção.

### Pacotes, tipos e repetição

Os pacotes carregam posição, objeto, item, status, mensagem, consulta, clima e telemetria. Um símbolo (centenas de ícones) define o desenho no mapa. Não há confirmação para posição: para compensar a perda de pacotes sem retransmissão, as balizas são repetidas em **ritmo decrescente**: segundo o arquivo de protocolo de Bruninga, o intervalo entre transmissões é de **1,5 a 2 vezes** o anterior, até um "tempo de ciclo da rede". Assim, informação nova é enviada com frequência e a antiga, com pouca.

Como todos transmitem na mesma frequência e digipeaters multiplicam cada pacote, a confiabilidade é **probabilística**: a Wikipedia explica que "pacotes são mais multiplicados do que perdidos". É o oposto do TCP: broadcast com redundância em vez de conexão com confirmação.

### A frequência no Brasil: 145,570 MHz

- O plano de faixas do Ato 926, Tabela XV (2 metros), reserva **145,565 a 145,575 MHz** para modos digitais, com aplicação **"ACDS (APRS)"**, o que verifiquei em setembro de 2026.
- A LABRE-CE, ao inaugurar o digipeater PT7BCN (novembro de 2023), cita **145,570 MHz** como a frequência "padrão destinada pela ANATEL" ao APRS nos 2 metros.
- Outros países usam outra frequência (o laboratório de Stanford cita 144,390 MHz nos EUA).

Convenções brasileiras de SSID, segundo o site aprsbrasil.com (uma convenção da comunidade, em migração para regras mais novas, segundo o próprio site): estações-base com SSID -2, -3, -4; digipeaters com -12 a -15, com ícone de estrela verde. A mesma página avisa que "um digi mal configurado pode ocasionar um congestionamento drástico" e recomenda contatar quem tenha experiência antes de montar um.

### O caminho (path) e o digipeating genérico

O transmissor põe no cabeçalho um **caminho** de apelidos. Os mais comuns são `WIDE1-1` e `WIDE2-1`, na forma `WIDEn-N`: `n` é a classe do digipeater e `N`, o número de saltos restantes. O algoritmo que o "Understanding APRS Packets" descreve:

1. O digipeater olha o **primeiro endereço ainda não usado** do caminho.
2. Se for o seu próprio indicativo, marca como usado e retransmite.
3. Se for um apelido do tipo `WIDEn-N`: com `N = 0`, não repete; com `N = 1`, troca o apelido pelo próprio indicativo, marca como usado e repete; com `N >= 2`, **decrementa** N, mantém o apelido no caminho e insere o próprio indicativo antes, marcado como usado.
4. Nunca altera origem, destino ou informação, só o caminho. Guarda os pacotes recentes para **não repetir duplicatas**.

Um exemplo com indicativos fictícios, para uma baliza com caminho `WIDE1-1,WIDE2-1`:

```
original:                MEUCALL-9>APRS,WIDE1-1,WIDE2-1:...
depois do digi de bairro: MEUCALL-9>APRS,DIGI1-1*,WIDE2-1:...     (WIDE1-1 virou DIGI1-1, usado)
depois do digi do morro:  MEUCALL-9>APRS,DIGI1-1,DIGI2-3*:...      (WIDE2-1 virou DIGI2-3, usado)
```

O asterisco (`*`) marca o último digipeater que você ouviu. Ler o caminho de trás para frente mostra por quais estações o pacote passou. A ideia dos dois tipos é: digipeaters de **preenchimento** ficam baixos (bairro, prédio) e atendem só `WIDE1-1`, apanhando quem fala de vales ou de rádios portáteis; digipeaters de **área ampla** ficam no alto (morro, torre) e atendem `WIDE2-N` (guia da aprs.world, que descreve a prática dos EUA: `WIDE1-1,WIDE2-1` para móveis e `WIDE2-2` para estações fixas). No Brasil, um operador (página "aprs-radio", opinião pessoal, não norma) afirma que a rede não tem digipeaters completos com o roteamento regional `SSn-N`. Use o caminho que o grupo local recomenda.

### iGate e APRS-IS

O **iGate** é a estação que faz a ponte **radio para internet**. Ela recebe pacotes por RF e os envia ao **APRS-IS** (APRS Internet System), a rede de servidores que agrega tudo e alimenta mapas como o aprs.fi. Regras principais (Understanding APRS Packets e a documentação do Direwolf):

- Pacotes com `TCPIP` no caminho não são reenviados a RF nem de volta à internet (**evita laços**).
- Um iGate leva à internet o que ouve; **da internet para o rádio, só mensagens** (o comentário do arquivo do Direwolf fala em "mensagens APRS"; a página "aprs-radio", de um operador brasileiro, pede só mensagens de indicativo a indicativo). Encher a frequência com tráfego de outras regiões a congestiona, o que a comunidade brasileira critica (páginas "aprs-radio" e aprsbrasil.com).
- O login no APRS-IS usa o indicativo e um **passcode** derivado dele, obtido por utilitário (`callpass`) ou por site de geração, segundo tutoriais.
- Para uma estação na América do Sul, o arquivo de exemplo do Direwolf lista o endereço regional `soam.aprs2.net`.

Sem internet, a rede APRS por RF funciona localmente por digipeaters, mas se perde a **visão global**. Esse é o ponto: o APRS é local de origem, e a internet só o amplia.

### O que isso significa para privacidade

Uma baliza APRS é pública: qualquer receptor a lê e o aprs.fi guarda o histórico. O aprs.fi mostra, por exemplo, uma estação Winlink brasileira com o aviso "precisão reduzida no transmissor em 2 dígitos, resolução aproximada de 1,9 km": o transmissor pode reduzir a precisão da posição de propósito. Para uma rede privada (objetivo do curso), o APRS **não** serve: é público por desenho.

## TNC e Direwolf

### TNC

O **TNC** (Terminal Node Controller) é o modem mais o processador de AX.25. Tradicionalmente era uma caixa com microprocessador. O **KISS** é o protocolo simples de enquadramento pelo qual um computador fala com um TNC (derivado do SLIP, por enlace serial ou TCP; **não vai pelo ar**); o TNC faz o modem, e o computador faz o resto do AX.25.

### Direwolf

O **Direwolf** (de WB2OSZ) é um **TNC de software**: um modem que roda no computador, usando a placa de som (Aula 2) e DSP. O README do projeto descreve:

- decodificação por DSP, modem de **300 a 9600 bps**, correção de erro **FX.25** (compatível com equipamentos antigos) e IL2P;
- AX.25 v2.2;
- **rastreador** APRS, baliza e telemetria; **digipeater**; **iGate**; gateway APRStt (entrar dados no APRS por tons DTMF);
- interfaces **KISS** e **AGW** para aplicativos (o exemplo de configuração diz porta 8000 para AGW e 8001 para KISS sobre TCP);
- Windows, Linux (incluindo Raspberry Pi) e macOS.

Versão 1.8.1, de novembro de 2025, quando consultei o repositório. O projeto mantém um Guia do Usuário e notas técnicas sobre iGates, digipeaters e interface de rádio.

Para o que o FX.25 vale: um teste da equipe do Winlink (simulador Teensy IONOS, 2020) mostrou que o AX.25 puro deixou de funcionar abaixo de cerca de 1 dB de SNR, e o FX.25 continuou a -1 dB, à custa de overhead. É um ganho de cerca de 2 dB, e a mesma troca de taxa por sensibilidade.

### Configuração mínima do `direwolf.conf`

Trechos do arquivo de exemplo `conf/generic.conf` do repositório (ramo master, consultado em setembro de 2026). Só as linhas cuja finalidade está no próprio arquivo; para a sintaxe completa, use o Guia do Usuário.

```
ADEVICE plughw:1,0
CHANNEL 0
MYCALL N0CALL
MODEM 1200
PTT CM108
PBEACON delay=1 every=30 overlay=S symbol="digi" lat=... long=... comment="..."
DIGIPEAT 0 0 ^TEST$ ^WIDE1-1$
IGSERVER soam.aprs2.net
IGLOGIN SEUCALL-SSID SENHA
IGTXVIA 0 WIDE1-1,WIDE2-1
```

O que cada uma faz (segundo os comentários do arquivo):

| Linha | Função |
|---|---|
| `ADEVICE plughw:1,0` | Dispositivo de áudio. Em Linux, use o número de cartão que o comando `arecord -l` mostra |
| `CHANNEL 0` e `MYCALL` | Canal 0 e o indicativo com SSID opcional (até 6 letras ou dígitos e SSID de 1 a 15; a especificação APRS exige maiúsculas) |
| `MODEM 1200` | Velocidade. 1200 é o padrão de VHF/UHF; 300 para HF; 9600 não pode usar microfone e alto-falante |
| `PTT CM108` | Acionamento por GPIO do chip C-Media; há também RTS serial, GPIO do Raspberry Pi e hamlib |
| `PBEACON ...` | Baliza de posição. O exemplo do arquivo é `delay=1 every=30 ...` |
| `DIGIPEAT 0 0 ...` | Regra de digipeater: entrada e saída no canal 0; dois padrões (expressões regulares) dizem quais apelidos atende. O arquivo traz um exemplo de preenchimento (`^WIDE1-1$`) e um de área ampla |
| `IGSERVER` e `IGLOGIN` | O servidor do APRS-IS e o login. **Só isso é um iGate somente de recepção.** |
| `IGTXVIA 0 WIDE1-1,WIDE2-1` | Habilita levar **mensagens** da internet ao rádio, no canal 0 e com esse caminho |

Uma recomendação segura de aprendizado, que decorre do arquivo de exemplo: comece com só recepção (`IGSERVER` e `IGLOGIN`, sem `IGTXVIA`, sem `DIGIPEAT`, sem `PBEACON`), confira no aprs.fi que os pacotes chegam, e só então habilite transmitir, depois de conversar com a comunidade local. O repositório inclui uma nota técnica sobre iGate com SDR ("Raspberry Pi SDR IGate") e um arquivo de exemplo `sdr.conf`, e o arquivo de exemplo prevê áudio vindo de um SDR: é o caminho para um iGate de recepção com um **RTL-SDR** (Módulo 6) no lugar do rádio; confira a nota para os detalhes.

## Regras no Brasil

- **Frequência e modo**: 145,565 a 145,575 MHz, modos digitais, ACDS (APRS) (Ato 926, Tabela XV).
- **Estações automáticas**: digipeaters e iGates são estações de operação automática em modos digitais, ou seja, ACDS (Ato 926, itens 3.1.1 e 6.7, leitura minha). Abaixo de 5 GHz, devem usar só as subfaixas com essa aplicação. Nos 2 metros há várias (por exemplo 145,000 a 145,100 MHz e 145,565 a 145,575 MHz, esta marcada como APRS).
- **Identificação**: cada pacote leva o indicativo (e SSID) de origem. O Ato 3448, item 10.3, IV, diz que o indicativo é declarado "completo, sem supressões ou acréscimos". Um SSID como `-9` é, em sentido estrito, um acréscimo; a regra foi escrita para comunicados e não encontrei orientação da Anatel sobre SSID; a comunidade brasileira o usa amplamente (aprsbrasil.com). Registro a dúvida.
- **Ligação com a internet**: o artigo 10-B, § 2º, do regulamento de licenciamento (Resolução 777/2025) diz que, em "qualquer estação do Serviço Radioamador com conexões a redes de outros serviços de telecomunicações é vedado o uso da mesma para a fruição de tráfego entre redes desses serviços, exceto em caso de emergência". Não encontrei parecer da Anatel sobre como isso se aplica a **iGates** (uma ponte de RF a internet); existem iGates em operação no Brasil (aprsbrasil.com e a página "aprs-radio" os descrevem), mas a existência de estações não é um parecer. Um iGate **somente de recepção** que só envia à internet o que ouviu é o caso mais defensável; um iGate que injeta tráfego da internet no ar é o que mais aciona a dúvida. Confirme com a LABRE ou a Anatel antes de montar um.
- **Comércio e conteúdo**: nada de fins comerciais (Res. 777, art. 26); sem criptografia (Ato 926, item 6.11). Os pacotes APRS são texto claro.
- **Potência**: mínima necessária (Ato 926, item 5.1). Em VHF, um rádio portátil de 5 W costuma bastar.

## Resumo

- **AX.25** é o enlace de pacotes dos radioamadores: quadros HDLC com endereços de indicativo, bandeira 0x7E, NRZI e bit stuffing; a camada física típica é AFSK de 1200 baud (tons de 1200 e 2200 Hz, Bell 202) sobre FM.
- **APRS** usa só quadros UI (sem conexão, sem confirmação) em broadcast com repetição decrescente; seu propósito é dar um quadro de situação local em tempo real (posição e mensagens curtas), não uma rede de conversa.
- **Digipeaters** repetem no mesmo canal, guiados pelo caminho `WIDEn-N`; **iGates** levam o que ouvem ao APRS-IS e trazem mensagens de volta; sem internet, o APRS por RF funciona só localmente.
- No Brasil, a frequência é 145,570 MHz (145,565 a 145,575 MHz digital, ACDS APRS); estações automáticas e iGates levantam dúvidas legais (ACDS, tráfego entre redes) que não consegui fechar com fonte oficial.
- **Direwolf** é o TNC de software padrão: placa de som, AX.25 v2.2, FX.25, digipeater e iGate; configure primeiro como iGate só de recepção.

## Para aprofundar

- [ ] [Understanding APRS Packets](https://raw.githubusercontent.com/wb2osz/aprsspec/main/Understanding-APRS-Packets.pdf) (WB2OSZ): a leitura recomendada pelo próprio arquivo de configuração do Direwolf; explica caminho, digipeaters, iGates e erros comuns.
- [ ] [Direwolf: documentação](https://github.com/wb2osz/direwolf/tree/master/doc) (WB2OSZ): Guia do Usuário, Raspberry Pi APRS, Successful APRS IGate Operation, AX.25 + FEC = FX.25 e outras notas técnicas.
- [ ] [APRS Digipeater Raspberry Pi Buster](https://www.youtube.com/watch?v=AYhVDgRJBNw) (KM4ACK): montagem completa de digipeater e iGate com Direwolf e Xastir num Raspberry Pi, com capítulos por etapa (título e canal confirmados; conteúdo não assistido).
- [ ] [Direwolf.conf for your APRS Digipeater](https://www.youtube.com/watch?v=JQKSV4FEyFw) (KM6LYW Radio): explicação linha a linha de um `direwolf.conf` de digipeater (título e canal confirmados; conteúdo não assistido).
- [ ] [Reliable Communication with VHF Packet Ham Radio (APRS)](https://www.youtube.com/watch?v=5ey96ubpUxw) (Ham Radio Crash Course): aplicação prática de pacotes, digipeaters e AX.25 (título e canal confirmados; conteúdo não assistido).
- [ ] [LABRE-CE inaugura digipeater APRS em Fortaleza](https://www.labre.org.br/labre-ce-inaugura-digipeater-aprs-em-fortaleza/) (LABRE): em português, confirma 145,570 MHz como frequência padrão do APRS nos 2 metros e explica digipeater e iGate.

[Próxima aula: Winlink, e-mail sobre rádio](./08%20-%20Winlink%20Email%20sobre%20Radio.md)
