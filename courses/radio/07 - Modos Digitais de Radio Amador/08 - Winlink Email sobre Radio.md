[Voltar ao módulo](./README.md)

# Aula 8: Winlink, e-mail sobre rádio

*Pergunta que esta aula responde: como uma mensagem de e-mail viaja por rádio quando a internet não existe, por que essa transferência precisa de um modem com confirmação (ARQ), o que muda entre Pactor, ARDOP e VARA, e por que o VARA ser proprietário importa para quem quer entender, auditar e replicar um sistema?*

> Verificado em setembro de 2026: página do autor do VARA (preço e versões), página do Winlink (comparação de clientes), repositórios do Pat e do ardopcf, artigos da LABRE e da LABRE-DF, Ato Anatel nº 926/2024 e nº 3448/2026 e Resolução nº 777/2025. **O Winlink é um serviço de radioamador: exige licença e obedece às regras de conteúdo do Módulo 5. Como a legislação brasileira trata alguns usos (gateway, e-mail para o exterior) não foi esclarecido por fonte oficial que eu tenha encontrado; ver a seção "Regras no Brasil".**

## Por que existe

Voz, FT8 e APRS carregam frases curtas. Uma emergência (furacão, enchente, queda de telefonia e internet) pede algo diferente: **um relatório com anexo, um formulário preenchido, um e-mail para alguém que nem tem rádio**, entregue mesmo que os dois lados nunca estejam online ao mesmo tempo. O **Winlink** (Winlink Global Radio Email) é a resposta: um sistema mundial, mantido por voluntários, que dá a cada radioamador um endereço `indicativo@winlink.org` e transporta mensagens por HF, VHF e UHF. A LABRE resume assim, ao inaugurar o gateway PT2AA em 2023: um meio para enviar e receber e-mail "em situações de emergência em que não haja conectividade pelas redes públicas e/ou privadas".

O princípio é o de um **correio com armazenamento e encaminhamento** (store-and-forward): a mensagem espera na caixa de saída até que haja um enlace de rádio para entregá-la.

## Arquitetura

O artigo da LABRE descreve três níveis:

```
[Cliente: Winlink Express, Pat] --rádio--> [Gateway RMS] --internet--> [Servidores CMS] --> [outro gateway] --rádio--> [destinatário]
       nível 1 (você)                        nível 2 (voluntário)        nível 3 (central)
```

- **Cliente**: o programa no seu computador (Winlink Express, Pat...). Compõe a mensagem e fala com o rádio.
- **RMS (Radio Message Server)** ou **gateway**: estação de voluntário (sysop) com rádio e internet que recebe seu sinal e repassa a mensagem ao servidor central. Há gateways para HF (SSB e modems) e para VHF/UHF (a página do Winlink cita o software "RMS Packet", que fala AX.25 e VARA FM, e o "RMS Relay").
- **CMS (Common Message Servers)**: servidores centrais que guardam e roteiam as mensagens no mundo. Segundo a Wikipedia, eram vários servidores e, em 2017 e 2018, migraram para um agrupamento redundante na Amazon Web Services, com balanceadores de carga.
- **P2P (peer to peer)**: em falha total de infraestrutura, duas estações trocam e-mail **diretamente por rádio**, sem servidores. O Winlink Express e o Pat têm essa função.
- **Winlink Hybrid Network**: gateways de HF que oferecem encaminhamento por rádio "quando as ligações locais de internet não estão disponíveis" (mapa de sistema do Winlink).
- **Códigos de serviço**: `PUBLIC` (radioamador aberto, inclusive gateways de emergência abertos ao público) e `EMCOMM` (gateways de emergência sem acesso ao público); outros códigos são privados de grupos.

Para o objetivo do curso: o Winlink é **centralizado** (o CMS é um ponto único de coordenação), mas tem duas saídas descentralizadas (P2P e Hybrid). É o exemplo de arquitetura cliente-servidor sobre rádio que os Módulos 10 e 11 vão contrastar com redes sem centro.

## Por que a transferência precisa de ARQ

Uma mensagem com anexo facilmente passa de 1.000 bytes, e mesmo um FEC forte às vezes falha; sem confirmação, o emissor nunca saberia. Para dados que **não podem ter erro**, combina-se FEC com **ARQ** (Automatic Repeat reQuest): o receptor confirma cada bloco e o emissor reenvia o que faltou (Módulo 3, Aula 9; Aula 1). Isso exige **conexão de duas vias**: os dois lados ouvem e falam alternadamente, e o modem ajusta a modulação à qualidade do canal. Segundo o autor do VARA, o modem "usa ARQ completo e gestão adaptativa do enlace", com modulações FSK, PSK e QAM conforme a taxa possível.

Em comparação: o FT8 (Aula 4) é uma transmissão de sentido único com FEC forte; o APRS é broadcast; o Winlink é uma **sessão** entre dois pontos. A sessão tem começo e fim: nela se enviam e recebem todas as mensagens pendentes de uma vez (LABRE-DF, parte 3).

Nas sessões, o protocolo **B2F** (o "protocolo de transferência de rádio" do Winlink Express, com base no formato FBB de forwarding de BBS) troca **propostas** de mensagens (o exemplo de sessão do README do Pat mostra o lado receptor aceitando a proposta por identificador, "Accepting ...") e transfere o conteúdo comprimido. Ele permite anexos, vários endereços e endereços táticos. A equipe do Winlink afirma, desde 9 de julho de 2024, que o software só usa um formato binário comprimido aberto, o **Open B2F**, no lugar das compressões proprietárias que alguns fabricantes de modems usam (Wikipedia). O Pat também tem um experimento de compressão gzip como extensão do B2F, ativo entre nós do Pat.

## Os modos: Telnet, packet, Pactor, ARDOP, VARA

Quadro de compatibilidade do Winlink (página "Compare Client Programs"), para os dois clientes principais:

| Modo | Winlink Express | Pat |
|---|---|---|
| Telnet (internet, para treino) | sim | sim |
| Packet AX.25 (VHF/UHF, Aula 7) | sim | sim |
| Pactor 1 a 3 | sim | sim |
| Pactor 4 | sim | sim |
| ARDOP | sim | sim |
| VARA HF e FM | sim (velocidade limitada sem registro) | sim, "limitado" |

**Pactor** (SCS): Pactor 1 é um protocolo aberto; as versões posteriores são proprietárias e só rodam nos modems da SCS (Wikipedia), que segundo um material do SEA-PAC custam mais de US$ 1.500. Foi o padrão de qualidade no HF por muito tempo.

**ARDOP** (Amateur Radio Digital Open Protocol): protocolo **aberto** para trocar dados codificados como áudio. Roda em placa de som. O **ardopcf** é uma implementação de código aberto e multiplataforma; seu README avisa que ainda "provavelmente contém bugs" e está em desenvolvimento ativo, com metas de estabilidade e desempenho no ar. O Winlink Express traz um modem ARDOP embutido, e o Pat tem suporte nativo.

**VARA** (José Alberto Nieto Ros, EA5HVK): modem de placa de som, com três versões: **VARA HF**, **VARA FM** e **VARA SAT**. O VARA HF tem três larguras: 500 Hz (Narrow), 2300 Hz (Standard) e 2750 Hz (Tactical), com taxa máxima de **8.489 bps** sem compressão no Tactical (16.100 bps com compressão), segundo o site do autor. Um material do SEA-PAC descreve o HF como **OFDM** multiportadora (Módulo 3, Aula 9). As mensagens a 2 kB abaixo mostram o efeito prático das taxas.

### Quanto tempo uma mensagem leva

Cálculo ideal, sem overhead de protocolo nem compressão, para 2.000 bytes (16.000 bits):

| Situação | Taxa | Tempo |
|---|---|---|
| VARA HF sem registro | 18 bps | `16.000 / 18 = 889 s` (15 min) |
| VARA HF sem registro | 41 bps | `16.000 / 41 = 390 s` (6,5 min) |
| Packet 1200 baud | 1.200 bps | `13 s` |
| VARA HF, teste em simulador a 30 dB de SNR | cerca de 5.900 bps | `2,7 s` |

Os valores de 18 e 41 bps são os que a equipe do Winlink cita para usuários **sem registro** do VARA (aviso de agosto de 2021); os 5.900 bps são a conversão de 44,4 KB/min medidos pela equipe do Winlink com o VARA a 30 dB de SNR num simulador de canal (conta minha: `44.400 x 8 / 60`). Em HF com sinal fraco a taxa cai muito. Por isso o guia da LABRE-DF pede mensagens **breves**: "o canal de comunicação deve ficar livre o mais rápido possível, outros colegas também querem enviar e receber".

### Desempenho relativo

O relatório de testes da equipe do Winlink (simulador Teensy IONOS, três edições em 2020; os autores são membros da equipe, ou seja, não são independentes) concluiu que os **modems SCS Pactor** tiveram desempenho excelente e o Pactor 4 dominou a faixa realista de SNR; o **VARA** teve desempenho "excelente", ficando atrás do Pactor 4 e à frente do Pactor 3 acima de certos SNR; o **ARDOP** e o WINMOR (descontinuado) ficaram a "uma pequena fração da velocidade" e menos estáveis em canais com multipercurso e baixo SNR. No VHF, o **VARA FM** foi muito mais rápido que AX.25 e FX.25. Duas ressalvas: os testes são de **2020**, anteriores ao ardopcf (2024), e são simulações; o desempenho real varia.

## Por que o VARA é proprietário, e o que fazer com isso

**O que consta.** A especificação do VARA diz que ele "é um sistema proprietário desenvolvido por José Alberto Nieto Ros, EA5HVK, e pode ser usado sob licença shareware". O Pat o descreve como "não é código aberto e só está disponível como executável Windows x86", que funciona em Linux com o WINE. **Não encontrei declaração do autor sobre o motivo** de manter o protocolo fechado; qualquer explicação seria especulação minha. O que consta é o modelo comercial:

- **Gratuito com velocidade limitada** (18 e 41 bps segundo a equipe do Winlink), e uma licença **paga**: US$ 75 por uma licença permanente que cobre VARA HF, VARA FM e VARA SAT (página do autor, setembro de 2026; um material de 2024 citava US$ 69, então **confira o valor atual**). A licença tira o limite de taxa, habilita compressão e sessões ilimitadas de Winlink.
- Gateways do Winlink podem limitar sessões de VARA HF sem registro: em 2021, a equipe passou a 25 minutos por padrão, "porque muitos usuários não registrados estão ocupando os gateways e as bandas com conexões de 18 e 41 bps".

**Consequências para quem quer entender e construir:**

1. **Caixa-preta.** Sem especificação pública, não se pode auditar, portar (só há Windows x86 e WINE) nem reimplementar. A dependência é de um único autor. O Módulo 5 ensinou que o serviço amador é público e auditável; um protocolo que só se decodifica com o programa do autor está na fronteira do espírito de abertura (na prática, qualquer pessoa pode baixar o VARA grátis e decodificar, então o conteúdo não fica escondido; **isso é minha análise, não posição da Anatel**).
2. **Criptografia.** A página do autor lista entre as vantagens da licença uma "opção de criptografia para uso comercial". No serviço amador brasileiro, criptografia em modos digitais não é permitida (Ato 926, item 6.11): essa opção **não pode ser usada**.
3. **Alternativas abertas**, com custo de desempenho:
   - **ARDOP / ardopcf**: protocolo aberto, código aberto, HF, placa de som.
   - **Packet AX.25 + FX.25** em VHF/UHF, com o Direwolf (Aula 7): aberto e simples, muito mais lento que o VARA FM.
   - **Pactor 1**: aberto, mas antigo.
   - Para uma rede própria, o caminho é **projetar sobre padrões abertos**, o que é o assunto dos Módulos 9 a 11.

## Clientes

**Winlink Express**: cliente oficial para **Windows**, gratuito (o LABRE-DF diz que ele "pede uma doação voluntária para remover a tela de espera inicial"). Funciona como um cliente de e-mail: pastas, contatos, formulários HTML embutidos, relatórios ICS-309 e mapas. Suporta conexão direta por Telnet e P2P por rádio. Inclui o modem ARDOP.

**Pat**: cliente **multiplataforma** (Linux, macOS, Windows, Android), escrito em Go por LA5NTA, licença **MIT**. Tem interface de linha de comando ao estilo Git e uma interface web amigável a celular; controle de rádio pelo Hamlib (mais de 200 rádios); modos AX.25, ARDOP, Pactor, VARA e Telnet; **escuta P2P em vários modos ao mesmo tempo**; agendamento tipo cron para trocar de frequência; e pastas sincronizáveis (por exemplo com Syncthing). Não é afiliado à equipe do Winlink.

Comandos de exemplo da documentação do Pat (wiki do VARA):

```
pat rmslist -s -m varahf LA               # lista gateways VARA HF com prefixo LA, por distância
pat connect "varahf:///LA1J?bw=2300&freq=3601.5"   # conecta a um gateway VARA HF
```

O Pat **não inicia** o VARA: espera que ele já esteja rodando. Para o packet, a configuração recomendada com o Direwolf usa a interface AGWPE (Aula 7):

```
{
  "ax25": { "engine": "agwpe", "beacon": {"every": 3600, "message": "Winlink P2P", "destination": "IDENT"} },
  "agwpe": {"addr": "localhost:8000", "radio_port": 0}
}
```

(trecho da wiki do Pat; requer Direwolf 1.5 ou mais novo, recomendado 1.6 ou mais.) Não copio outros campos de configuração: use a wiki e o `pat help` da sua versão.

## Configuração passo a passo (Winlink Express com VARA HF)

Baseada na série de cinco artigos da LABRE-DF (abril de 2026), que é o material em português mais completo que encontrei:

1. **Instalar o VARA HF** (site do autor) e o **Winlink Express** (winlink.org, seção User Programs; instale na pasta sugerida). São programas separados; você precisa dos dois.
2. No VARA: **Settings > Soundcard**: entrada e saída da sua interface (por exemplo "USB Audio Codec", Digirig ou SignaLink). Ao transmitir, ajuste o volume do computador para que o **ALC do rádio fique no mínimo recomendado**: "se o áudio estiver muito alto, a mensagem não será decodificada pelo gateway" (Aula 2).
3. No Winlink Express, abra a tela de **Properties** e preencha o indicativo. O sistema cria sua conta no servidor central na primeira conexão (internet ou rádio) e você passa a usar `seuindicativo@winlink.org`.
4. **Settings > Radio Setup**: modelo do rádio, porta serial CAT e método de PTT. Depois **Settings > Vara TNC Setup**: confira o caminho do VARA (por exemplo `C:\VARA\VARA.exe`).
5. Escolha o modo (Vara HF Winlink), clique em **Open Session** e depois em **Start**. Antes, escolha um gateway (para o Brasil, ver abaixo; a lista ao vivo está em winlink.org/RMSChannels) e ajuste a frequência de dial.

**Uso.** Escreva uma nova mensagem como um e-mail comum e clique em **Post to Outbox**: a mensagem **ainda não foi enviada**; ela espera a próxima conexão. Em uma mesma sessão, o programa **envia tudo que está na caixa de saída e recebe tudo que está endereçado a você**.

**Para treinar sem rádio:** o modo Telnet permite praticar usando a internet (não é uma conexão de rádio).

## No Brasil

**Gateways.** Em 2023, a LABRE instalou em sua sede, em Brasília, o gateway **PT2AA**, operado por Marcos Ascencio (PY2FLP). O artigo o descreve nos modos Pactor I a III e VARA e ARDOP em placa de som, e cita PY4LF (Minas Gerais) como outro gateway. A LABRE-DF (abril de 2026) lista os gateways da América do Sul: **PT2AA** (dial 21.114,000 kHz, centro 21.115,500 kHz, largura 2300 Hz, 15 m) e **LU4AA** (Argentina, dial 28.094,000 kHz, 10 m). O que existe hoje mudou: **confira a lista viva do Winlink** (winlink.org/RMSChannels) antes de contar com qualquer gateway.

Conferência com o plano de faixas (Ato 926): 21,1155 MHz está na subfaixa de 21.110 a 21.120 kHz, marcada ACDS, e a de LU4AA em 28.070 a 28.120 kHz, modos digitais (conta minha). Um gateway de packet do Winlink em Curitiba (PY5FOC-10) anuncia no aprs.fi a frequência 145,030 MHz, dentro de 145,000 a 145,100 MHz ("ACDS, IVG"); a última posição dele no aprs.fi é de janeiro de 2026, e não sei se está ativo.

**Regras (o que está claro e o que não).**

| Ponto | O que li | Situação |
|---|---|---|
| Conteúdo comercial | Proibido (Res. 777, art. 26). A própria Winlink diz não ser apropriado para comunicações de negócios | Claro |
| Criptografia | Proibida em modos digitais (Ato 926, 6.11). Deixe desligadas as opções do VARA | Claro |
| Estação automática | Um gateway RMS é estação de operação automática em modo digital, ou seja, ACDS (Ato 926, 3.1.1 e 6.7) | Leitura minha |
| Tráfego entre redes | Res. 777, art. 10-B, § 2º: em estação amadora conectada a outras redes é vedado usá-la "para a fruição de tráfego entre redes desses serviços, exceto em caso de emergência" | **Não consegui fechar**: um gateway liga rádio e internet; não encontrei parecer da Anatel. A LABRE opera um gateway, o que não é um parecer |
| Mensagem a terceiro no exterior | Ato 3448, 4.3: proibido o comunicado internacional "procedente de terceira parte ou destinado a terceiro", salvo emergência, desastre ou acordo de reciprocidade | Leitura literal sugere cautela com e-mail a não radioamador fora do Brasil |
| Duração da transmissão | Ato 3448, 10.3, V: "a transmissão entre estações deve se limitar à duração máxima de 10 minutos, excetuando-se os casos de emergência" | **Não encontrei** como se aplica a uma sessão ARQ de vários minutos |

O uso mais defensável no Brasil, com base só no que li: **treinamento, P2P entre radioamadores e emergência**. Para qualquer uso além disso, consulte a LABRE ou a Anatel antes.

## O que o Winlink ensina para a rede que você vai projetar

- **Armazenar e encaminhar** resolve a indisponibilidade dos dois lados ao mesmo tempo.
- **ARQ com modulação adaptativa** dá transferência confiável, mas custa uma sessão de duas vias e tempo no ar; a taxa varia por mais de 2 ordens de grandeza entre os modos e o canal (18 bps a mais de 5.000 bps nos números acima).
- **Centro versus periferia**: o CMS facilita a entrega global, mas é uma dependência; o P2P e o Hybrid são a rota descentralizada.
- **Modem aberto versus fechado**: o melhor desempenho (Pactor 4, VARA) é proprietário; o aberto (ARDOP) é mais lento. A escolha entre entender/auditar e ter velocidade é sua.

## Resumo

- O Winlink é um correio de e-mail sobre rádio com armazenamento e encaminhamento: cliente, gateway RMS e servidor central CMS, com P2P (só por rádio) e Hybrid como saídas sem internet.
- Dados sem erro pedem FEC mais ARQ, ou seja, uma sessão de duas vias com modem adaptativo; por isso o modem é o coração do sistema (Pactor, ARDOP, VARA, packet).
- VARA é proprietário (só Windows x86, licença paga de US$ 75 para tirar o limite de velocidade), tem a melhor relação preço-desempenho segundo os testes da equipe do Winlink (2020) e a opção de criptografia comercial não pode ser usada no Brasil. ARDOP (e o ardopcf) é a alternativa aberta, mais lenta em 2020.
- Pat é o cliente aberto e multiplataforma; Winlink Express é o cliente oficial para Windows; ambos falam com o Direwolf e o VARA.
- No Brasil, o uso mais defensável é treinamento, P2P e emergência; gateways, e-mail para o exterior e sessões longas têm dúvidas legais que precisam de confirmação oficial.

## Para aprofundar

- [ ] [WINLINK (Parte 1/5): Como Funciona e Como Você Pode Usar](https://labredf.org.br/2026/04/winlink-como-funciona-e-como-voce-pode-usar) (LABRE-DF): em português, a arquitetura cliente, gateway e CMS. As partes 2 (instalação), 3 (envio e recebimento) seguem em labredf.org.br/tag/winlink.
- [ ] [WINLINK (Parte 2/5): Instalação e Configuração](https://labredf.org.br/2026/04/winlink-instalacao-e-configuracao) (LABRE-DF): passo a passo do VARA HF e do Winlink Express, ajuste de áudio e ALC.
- [ ] [Compare Client Programs](https://winlink.org/ClientSoftware) (Winlink): tabela de clientes e modos suportados.
- [ ] [VARA Modem](https://varamodem.com/) (EA5HVK): versões, larguras, taxas máximas e licença do VARA.
- [ ] [Pat, a modern Winlink client](https://getpat.io/) (LA5NTA) e a [wiki do VARA no Pat](https://github.com/la5nta/pat/wiki/VARA) (Pat): recursos, licença MIT, instalação do VARA em WINE e comandos de exemplo.
- [ ] [Getting Started With Pat Winlink on Linux](https://www.youtube.com/watch?v=47SkH0iCEOQ) (KM4ACK): configuração de Pat com VARA e FLRig num sistema Linux (título e canal confirmados; conteúdo não assistido).

Outros vídeos do README anterior do módulo, com título e canal confirmados (conteúdo não assistido): [VARA HF, Email Over Ham Radio, Winlink Express Tutorial](https://www.youtube.com/watch?v=SegKxnJSmiM) (HamRadioConcepts); [EmCom Email? Deep dive into VARA Winlink](https://www.youtube.com/watch?v=2x-1UZ3iejE) (Ham Radio Crash Course); [Setting Up A VARA FM and Packet Winlink Gateway](https://www.youtube.com/watch?v=UcnM0QdGGKY) (WaveTalkers).

[Próxima aula: Voz digital e a rede sem internet](./09%20-%20Voz%20Digital%20e%20Rede%20sem%20Internet.md)
