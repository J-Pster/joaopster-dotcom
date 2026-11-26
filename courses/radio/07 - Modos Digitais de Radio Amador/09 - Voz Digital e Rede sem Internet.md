[Voltar ao módulo](./README.md)

# Aula 9: Voz digital e a rede sem internet

*Pergunta que esta aula responde: como a voz vira dados (D-STAR, DMR, System Fusion, FreeDV, M17), o que significa o codec AMBE ser proprietário, e, juntando o módulo inteiro, quais modos servem para mensagens sem internet e o que a lei brasileira permite fazer com eles?*

> Verificado em setembro de 2026: Ato Anatel nº 926/2024 e nº 3448/2026, Resolução nº 777/2025, páginas do M17 e do FreeDV, comparações de sistemas de voz digital de clubes de rádio e a Wikipedia sobre o vocoder MBE. **Voz digital com criptografia não é permitida no serviço amador (Ato 926, item 6.11); desligue as opções "privacy" e "encryption" dos rádios.**

## Parte 1: voz digital em visão geral

### Por que existe

Voz analógica em FM ou SSB é uma onda contínua de áudio (Módulo 3). Voz **digital** aplica o que você viu neste módulo a um sinal de fala:

```
microfone -> [vocoder: fala vira poucos parâmetros] -> [FEC] -> [modulação digital] -> RF
```

O **vocoder** (voice coder) é um compressor feito para a fala: em vez de amostrar a onda, ele descreve como a voz foi produzida (frequência fundamental, se o som é vozeado ou não, envelope espectral) e transmite só isso. Voz de 64 kbit/s (PCM telefônico, Módulo 3, Aula 5) cai para poucos kbit/s (o Codec 2 opera de 0,7 a 3,2 kbit/s; o AMBE, de 2 a 9,6). O FEC protege esses poucos bits e a modulação é digital (FSK de 4 níveis, GMSK). O ganho é **banda estreita e robustez** (o mesmo raciocínio da Aula 1) e, como bônus, dados ao lado da voz: indicativo, posição, texto curto.

A Wikipedia registra, sobre o AMBE, um quadro de 20 ms a 8 kHz de amostragem e taxas de 2 a 9,6 kbit/s, com largura de RF total em torno de 2.250 Hz, contra 2.700 a 3.000 Hz de um SSB analógico.

### Os sistemas

Dados de uma comparação de Roland Kraatz (clube Charlotte D-STAR), de "Intro to Digital Voice" (Ham Radio School) e da comparação do clube Duke City:

| | D-STAR | DMR | System Fusion (YSF) | M17 | FreeDV |
|---|---|---|---|---|---|
| Origem | JARL (Japão), Icom lidera | ETSI (comercial, Motorola e outros) | Yaesu (2013) | Projeto aberto (SP5WWP e outros) | Projeto aberto (VK5DGR e outros) |
| Vocoder | AMBE+ | AMBE+2 | AMBE+2 | **Codec 2** | **Codec 2** e RADE (aprendizado de máquina) |
| Modulação | GMSK | 4FSK | C4FM (4FSK contínua) | 4FSK | HF em SSB (OFDM e outros, via placa de som) |
| Acesso | FDMA | **TDMA** (2 slots de 30 ms) | FDMA | FDMA | Canal SSB |
| Taxa no ar | 4,8 kbps (3,6 voz, 1,2 dados) | 4,8 kbps x 2 slots | 9,6 kbps | 9,6 kbps (4.800 símbolos/s) | n/d |
| Banda | 6,25 kHz | 12,5 kHz | 12,5 kHz | 9 kHz | cerca de 1500 Hz (RADE V1) |
| Identificação | Indicativo | ID numérico de 7 dígitos | Indicativo | Indicativo (48 bits, base 40) | Indicativo |
| Fabricantes | Icom, Kenwood | Muitos (de US$ 100 a US$ 500+) | Só Yaesu | Rádios com firmware aberto (OpenRTX), módulos | Qualquer rádio SSB e PC |

Notas rápidas:

- **D-STAR**: primeiro sistema de voz digital projetado para radioamadores (JARL, fim dos anos 1990). Roteamento por **indicativo**; conexão a redes por **refletores** (REF, DCS, XRF, XLX).
- **DMR**: nasceu no rádio profissional. **TDMA** de 2 slots: cada ciclo de 60 ms tem dois intervalos de 30 ms, um para cada conversa, o que exige sincronismo forte entre repetidora e rádios (a Aula 3 mostrou o custo de depender de relógio). Não tem indicativo nativo, e sim um **Radio ID**, mapeado a indicativos por um banco mundial. Redes: Brandmeister, TGIF, DMR+. A configuração do rádio (codeplug: talkgroups, color code, slots) tem curva de aprendizado íngreme.
- **System Fusion (YSF)**: FDMA de 12,5 kHz com modo de voz e dados (DN), modo de voz larga (VW, melhor qualidade, sem dados) e detecção automática de FM analógica. Só a Yaesu vende rádios; a rede Wires-X é da Yaesu.
- Os três **não interoperam** por RF. Há pontes de rede (por exemplo servidores que transcodificam com chips AMBE), mas a qualidade sofre.

Em todos, o alcance amplo vem da **internet**: repetidoras e **hotspots** (pequenos gateways pessoais de RF para internet, muitas vezes um Raspberry Pi com Pi-Star ou WPSD) ligam o rádio a refletores, talkgroups ou salas. Uma repetidora isolada, sem internet, funciona como repetidora local.

## O codec AMBE e a honestidade sobre "aberto"

D-STAR, DMR, Fusion (e também NXDN e P25 fase 2, no rádio profissional) usam o vocoder **AMBE** (Advanced Multi-Band Excitation) da empresa **DVSI**. A Wikipedia registra:

- O AMBE é uma família de padrões **proprietários**. O método MBE original foi patenteado em 1997 (a patente expirou), mas as melhorias (IMBE, AMBE, AMBE+, AMBE+2) são da DVSI.
- **Usar o AMBE exige licença da DVSI**, e os termos de licença de software não são divulgados. Para uso pequeno, a alternativa é comprar um **chip** de hardware da DVSI (a Wikipedia cita menos de US$ 100 em pequenas quantidades).
- A comunidade amadora critica isso porque a natureza da patente e da licença "vai contra a abertura do radioamador", inclusive por causa da regra americana contra "código digital não divulgado" (FCC 97.309(b)). **Essa regra não é a brasileira.**

Para o Brasil: o Ato 926 define "Voz Digital" (DV) como modo de emissão (Tabela XL: emissões F7E, G7E e J2E), permite DV em subfaixas indicadas e **proíbe a criptografia** (item 6.11). No que li nos atos, **não há proibição de DV por causa do codec** (Módulo 5, Aula 5, chega à mesma conclusão). O que existe é um problema prático de abertura:

1. Não se pode **implementar** um rádio AMBE sem pagar à DVSI (um receptor aberto e de código livre de D-STAR, DMR ou Fusion não pode incluir o vocoder livremente).
2. Não se pode **auditar** o vocoder; ele é uma caixa-preta.
3. O mercado depende de um fornecedor de chips.

O mesmo caso já apareceu no Winlink com o VARA (Aula 8): melhor desempenho, comportamento fechado.

### Alternativas abertas

**Codec 2** (David Rowe, VK5DGR): vocoder aberto, licença LGPL 2.1, de 700 a 3.200 bit/s, projetado para rádio de banda estreita HF e VHF. O Bruce Perens promoveu a ideia de um codec livre para radioamadores. É a base do FreeDV e do M17.

**M17** (site do projeto): "um protocolo completo de rádio digital para dados e voz, feito por e para radioamadores", com a promessa de "sem patentes, sem royalties e sem barreiras de licença" porque usa o Codec 2. Características (especificação do projeto e resumo do GopherTrunk, uma fonte de terceiros):

- Modulação **4FSK**, 4.800 símbolos/s (9.600 bit/s), filtro de cosseno elevado raiz.
- Quadros de **40 ms**, com sincronismo, e um canal **LICH** que carrega origem, destino e metadados espalhados em vários quadros, de modo que um receptor que entra no meio da transmissão reconstrói o cabeçalho ("late entry").
- FEC: código convolucional (K = 5, taxa perto de 1/2) mais **Golay(24,12)**, com entrelaçamento.
- Voz: Codec 2 a **3.200 bit/s** (há opção de 1.600 bit/s com 1.600 de dados).
- Endereços: indicativos codificados em **base 40** em 48 bits.
- Modos **stream** (voz e fluxo contínuo) e **packet** (mensagens de texto, mais parecido com AX.25/APRS).
- Rede: **refletores** abertos, IP sobre UDP. Firmware aberto **OpenRTX** para alguns rádios DMR baratos (com modificação de hardware em modelos como o MD-380), módulos como o Module17, e hotspots MMDVM com firmware v1.6 ou mais novo. A versão da especificação que consultei (setembro de 2026) é a 3.0.0, em rascunho.
- Ainda é um modo **de nicho e em desenvolvimento**, mas é o mais aberto dos modos VHF/UHF de voz digital.

**FreeDV** (site do projeto): voz digital para **HF** que roda em qualquer rádio SSB com uma placa de som (como os modos de dados da Aula 2), em Windows, Linux e macOS. Todo o software é aberto (LGPL 2.1 para a interface e os modos legados; BSD de duas cláusulas para o RADE). O modo principal, o **RADE** (Radio Autoencoder), combina aprendizado de máquina com DSP clássico: usa o vocoder FARGAN (ligado ao Opus, segundo uma apresentação do projeto; não é o Codec 2), envia voz com SNR **tão baixo quanto -2 dB**, ocupando **1.500 Hz** de RF; exige mais CPU (um PC ou Raspberry Pi 4 ou mais novo). O projeto é financiado por uma bolsa da ARDC. Uma entrevista com K6AQ (mantenedor do FreeDV) afirma decodificação a cerca de -5 dB, uma declaração verbal que não confirmei em documento.

**Por que o FreeDV importa aqui**: é voz que se comporta como um modo digital de sinal fraco (Aula 1): estreita, com correção de erros e o "penhasco" digital.

## Parte 2: o módulo inteiro em uma tabela

Quem quer **mensagens sem internet** compara modos por: o que carrega, alcance, dependências e custo.

| Modo | O que carrega | Alcance típico | Dependências de infraestrutura | Relógio | Ritmo |
|---|---|---|---|---|---|
| FT8 | Mensagens estruturadas de 77 bits (texto livre de 13 caracteres) | HF: mundial, conforme a propagação | Nenhuma além do rádio; relógio | Sim (±1 s) | 6 bit/s, QSO em 90 s |
| WSPR | Baliza de 50 bits | HF, VHF | Internet só para o mapa | Sim | 0,45 bit/s |
| JS8Call | Texto livre, relé, guardar-e-recuperar, grupos | HF | Nenhuma; relógio (~2 s) | Sim (tolerante) | Minutos por frase |
| PSK31, RTTY, Olivia (fldigi) | Texto e formulários (flmsg) | HF (ou VHF FM com Olivia/MT63) | Nenhuma | Não | PSK31 na velocidade de digitação (cerca de 50 palavras/min); Olivia 32/1000: 150 caracteres/min |
| APRS | Posição e mensagens curtas | VHF: área local, ampliada por digipeaters | RF só; internet opcional (iGate) | Não | 1200 baud |
| Packet AX.25 (conectado), Winlink packet | Dados com ARQ | VHF/UHF local | Um nó de rede | Não | 1200 a 9600 baud |
| Winlink (Pactor, ARDOP, VARA) | E-mail com anexo | HF e VHF | Gateway + CMS (com internet) ou P2P/Hybrid | Não | 18 bps a mais de 5.000 bps |
| Voz digital (D-STAR, DMR, YSF, M17) | Voz, texto curto, posição | VHF/UHF local; amplo via internet | Repetidora, hotspot | Só DMR (TDMA) | Voz |
| FreeDV | Voz em HF | HF | Nenhuma | Não | Voz |

## Parte 3: o que a lei brasileira permite

Ponto de partida (Módulo 5, Aula 5): o serviço de radioamador é **público, aberto e auditável**. Os atos vigentes (verificados em setembro de 2026):

**Pode (dentro das faixas e da classe do COER, identificado):**

- Experimentar modos digitais em subfaixas de modos digitais (Ato 926, item 3.1.14 e tabelas), inclusive redes de mensagens entre radioamadores, abertas e identificadas.
- Enlaces ponto a ponto em todas as faixas, exceto guarda e subfaixas de aplicação exclusiva, respeitando os modos previstos (item 6.1).
- Em **emergência**, as comunicações têm prioridade sobre as demais aplicações (item 6.4) e há exceções nas regras de comunicado internacional de terceiros (Ato 3448, 4.3), transmissão simultânea em várias bandas (10.1, II), duração de 10 minutos (10.3, V) e tráfego entre redes (Res. 777, art. 10-B, § 2º).

**Não pode:**

- **Criptografia** em modos digitais e voz digital (Ato 926, 6.11).
- **Acesso codificado com o fim de restringir** repetidoras e redes (Ato 3448, 10.5.5). Um **subtom** (CTCSS), um color code de DMR ou uma seleção de talkgroup são, na minha leitura, roteamento e não segredo; mas nenhuma rede pode se fechar aos demais radioamadores.
- **Fins comerciais ou pecuniários** (Res. 777, art. 26).
- **Espalhamento espectral e salto em frequência abaixo de 440 MHz** (Ato 926, 6.12).
- **Operar estação sem identificação** (Ato 3448, 10.2).

**Zonas cinzentas que não consegui fechar com fontes oficiais**, todas já sinalizadas nas aulas:

1. iGate, gateway do Winlink, hotspot de voz digital e ponte `@APRSIS` do JS8Call ligam RF à internet: aplica-se o art. 10-B, § 2º da Res. 777 (tráfego entre redes)? (Aulas 6 a 8)
2. Estações automáticas (digipeater, iGate, gateway, baliza, resposta automática do JS8Call) são ACDS e ficam restritas a subfaixas ACDS (Ato 926, 6.7): alguns usos comuns, como o heartbeat do JS8Call fora dessas subfaixas, parecem fora do plano (leitura minha).
3. SSID no indicativo (APRS) e Radio ID numérico (DMR) versus a regra de indicativo completo (Ato 3448, 10.3, IV).
4. E-mail a terceiro no exterior (Ato 3448, 4.3) pelo Winlink.
5. Sessões ARQ de mais de 10 minutos (Ato 3448, 10.3, V).

Para cada um, o caminho responsável é perguntar à **LABRE** ou à **Anatel** antes de operar de forma permanente.

**A consequência para o objetivo do curso.** Uma rede de mensagens **privada**, com conteúdo cifrado, não pode rodar sob licença de radioamador. Os módulos seguintes mostram o outro lado: LoRa e LoRaWAN (Módulo 8) e o Reticulum (Módulo 10) usam criptografia por padrão, e por isso pertencem ao regime de **radiação restrita** em faixas de uso livre como 915 MHz, não ao serviço amador (Módulo 5, Aula 6). O serviço amador serve, aqui, como **laboratório**: você experimenta as técnicas (FEC, ARQ, store-and-forward, beacons, relé, sincronismo) em modos abertos, e monta a rede privada em outro regime. O Ato 926 só proíbe o espalhamento espectral abaixo de 440 MHz (item 6.12): abaixo disso, o LoRa não roda em faixa amadora; a faixa de 33 cm (902 a 907,5 e 915 a 928 MHz) fica acima desse limite (Módulo 8).

## O que levar para as redes LoRa e mesh

| Ideia deste módulo | Onde reaparece |
|---|---|
| Trocar taxa por sensibilidade (Shannon; FT8, WSPR) | LoRa: fator de espalhamento (Módulo 8) |
| FEC versus ARQ (FT8 versus Winlink) | LoRaWAN e Reticulum (Módulos 8 e 10) |
| Armazenar e encaminhar (JS8Call, Winlink) | Redes tolerantes a atraso (Módulos 9 a 11) |
| Heartbeat e lista de estações ouvidas (JS8Call) | Descoberta de vizinhos em redes mesh (Módulo 9) |
| Flooding limitado por hops (`WIDEn-N` do APRS) e congestionamento | Roteamento mesh (Módulo 9) |
| Tempo como infraestrutura (FT8) | Sincronismo em LoRaWAN classe B, mesh (Módulos 8 e 9) |
| Centro (CMS) versus P2P (Winlink) | Arquitetura descentralizada (Módulos 10 e 11) |
| Protocolo aberto versus proprietário (ARDOP e VARA; Codec 2 e AMBE) | A escolha das ferramentas do seu projeto (Módulo 12) |

## Trilha prática mínima (do mais barato ao mais complexo)

1. **Só recepção** (nada exige licença): um receptor SSB ou SDR com cobertura de HF (Módulo 6) e o WSJT-X mostram FT8 real e o PSK Reporter mostra o mapa. Um RTL-SDR com o Direwolf (`sdr.conf`) permite montar um iGate somente de recepção.
2. **HF digital** (exige licença): um transceptor com USB (áudio e CAT por um cabo) ou uma interface externa (Digirig, SignaLink), WSJT-X para FT8 e WSPR, JS8Call para mensagens (Aulas 2 a 6).
3. **APRS/packet em VHF**: um rádio FM com porta de dados ou microfone, interface de áudio e Direwolf (Aula 7).
4. **Winlink**: Winlink Express ou Pat mais VARA ou ardopcf (Aula 8), treinando antes por Telnet.
5. **Voz digital**: um rádio D-STAR, DMR ou Fusion (ou M17 com OpenRTX) e um hotspot.

## Resumo

- Voz digital é vocoder + FEC + modulação digital: 64 kbit/s de PCM caem para poucos kbit/s, em 6,25 a 12,5 kHz; D-STAR (GMSK, FDMA), DMR (4FSK, TDMA, ID numérico) e Fusion (C4FM, FDMA) **não interoperam** por RF.
- AMBE (DVSI) é proprietário: licença obrigatória, termos não públicos, chip de hardware. Não há proibição de DV por causa do codec nos atos que li; a criptografia é que é proibida.
- Alternativas abertas: **Codec 2**, **M17** (4FSK, 9,6 kbit/s, aberto de ponta a ponta) e **FreeDV/RADE** (HF, -2 dB, 1500 Hz).
- Para mensagens sem internet: JS8Call (HF, relé e guardar-e-recuperar), Winlink P2P (e-mail, HF ou VHF), APRS (posição e mensagens locais), packet e fldigi; cada um com suas dependências (relógio, gateway, digipeater).
- A lei permite experimentar em aberto, identificado e sem fim comercial; proíbe criptografia e redes fechadas. Uma rede privada precisa de outro regime (radiação restrita, Módulo 8), e o serviço amador serve de laboratório.

## Para aprofundar

- [ ] [Intro to Digital Voice](https://www.hamradioschool.com/articles/intro-to-dv.html) (Ham Radio School): D-STAR, DMR e Fusion em texto claro (taxas, TDMA, ID de rádio, repetidoras e hotspots).
- [ ] [A Comparison of Amateur Radio Digital Voice Systems](https://charlottedstar.org/Introduction%20to%20D-STAR%20TAPR%202022.pdf) (Roland Kraatz): tabela técnica com vocoder, modulação, acesso, taxa, banda e M17.
- [ ] [About, M17 Project](https://m17project.org/about/) (M17 Project): objetivos e a razão de usar o Codec 2 aberto; a especificação do protocolo está no mesmo site.
- [ ] [RADE, Radio Autoencoder](https://freedv.org/radio-autoencoder/) (FreeDV): como funciona o modo de voz digital aberto para HF.
- [ ] [FreeDV Explained: Open-Source Digital Voice for HF Bands](https://www.youtube.com/watch?v=vv2ceThcJRg) (Ham Radio Prep): entrevista com o mantenedor do FreeDV, com demonstração (título e canal confirmados; conteúdo não assistido).
- [ ] [Multi-Band Excitation](https://en.wikipedia.org/wiki/Multi-Band_Excitation) (Wikipedia): a família de vocoders AMBE, patentes e licenciamento.

[Voltar ao módulo](./README.md)
