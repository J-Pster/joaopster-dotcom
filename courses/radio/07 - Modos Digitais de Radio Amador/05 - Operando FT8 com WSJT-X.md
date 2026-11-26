[Voltar ao módulo](./README.md)

# Aula 5: Operando FT8 com WSJT-X

*Pergunta que esta aula responde: como configurar o WSJT-X, ajustar áudio, PTT e potência, escolher a frequência dentro das subfaixas brasileiras, fazer um contato e usar o PSK Reporter para saber quem ouviu o seu sinal?*

> Verificado em setembro de 2026: WSJT-X 2.7.0 (guia oficial e página do projeto), Ato Anatel nº 926/2024 e Ato nº 3448/2026. Versões e menus mudam; confira o guia da sua versão. **Transmitir exige licença de radioamador com classe adequada à faixa (Módulo 5).** Recepção não exige. Faça o primeiro teste de transmissão com carga fantasma ou antena adequada e potência baixa.

## O que você precisa

Do guia do WSJT-X (seção 2, Requisitos):

- Transceptor SSB e antena.
- Computador com Windows 7 ou posterior, macOS, ou Linux (incluindo Raspberry Pi OS), CPU de 1,5 GHz ou mais e 200 MB de memória livre.
- Interface computador-rádio: porta serial (ou USB equivalente) para PTT ou CAT, ou VOX.
- Áudio de entrada e saída a **48.000 Hz, 16 bits**, e cabos de áudio (ou USB) entre rádio e computador.
- Relógio sincronizado com o UTC em ±1 s (Aula 3).

Programas relacionados:

- **WSJT-X**: o programa oficial de K1JT, Franke, Somerville e outros. Código aberto (GPLv3), para Windows, macOS e Linux. Versão 2.7.0 no guia consultado. Instale a partir do site oficial do projeto.
- **JTDX**: uma bifurcação (fork) do WSJT-X, voltada a DX. Seu código-fonte informa que o FT8 vem do WSJT-X 1.8 e 2.0, o FT4 do 2.1, e o projeto afirma decodificadores próprios que conseguem decodificar alguns sinais até -30 dB. Também é GPLv3 e distribuído em jtdx.tech. A interface e os menus diferem do WSJT-X.
- **JTAlert** e **GridTracker**: programas de apoio (alertas e mapa) que se conectam ao WSJT-X pelo "UDP Server" da aba Reporting. São opcionais.

## Instalação

**Windows.** Instale o WSJT-X em pasta própria sem espaços, por exemplo `C:\WSJTX`, e não em `C:\Program Files`. Os logs e arquivos graváveis ficam em `C:\Users\<você>\AppData\Local\WSJT-X`. Depois, no Painel de Som do Windows, abra as abas Gravação e Reprodução, clique em Propriedades, Avançado, e escolha **16 bits, 48000 Hz** e **desligue todos os efeitos de áudio**. O guia menciona ainda as bibliotecas OpenSSL (usadas só para baixar a lista de usuários do LoTW).

**Linux (Debian, Ubuntu, Raspberry Pi OS).** O guia oferece pacotes `.deb` por arquitetura (`amd64`, `armhf`, `arm64`), instalados com `sudo dpkg -i <pacote>.deb`, e uma lista de dependências para instalar com `apt`. Os pacotes são compilados para uma versão de distribuição por lançamento; se o seu sistema for diferente, o guia manda compilar do código-fonte.

**macOS.** Use o Audio MIDI Setup para 48000 Hz, dois canais, 16 bits; se o áudio voltar sozinho para a placa interna, o guia sugere tentar 44100 Hz.

## Configuração (File > Settings, ou F2)

O guia descreve oito abas; estas são as que importam no início:

**General.** Indicativo, localizador (de preferência de 6 caracteres) e **região IARU**: o Brasil está na **Região 2** (Américas).

**Radio.** Modelo do rádio (Rig), porta serial e parâmetros, intervalo de consulta (Poll Interval) de 1 a 3 s, método de PTT (VOX, CAT, DTR, RTS), **Mode** em USB ou Data/Pkt e **Split** em Rig ou Fake It (Aula 2). Clique em **Test CAT** e, depois, **Test PTT**.

**Audio.** Escolha os dispositivos de entrada e de saída do rádio (normalmente mono), a 48000 Hz. Se o dispositivo de saída for também o padrão do computador, desligue todos os sons do sistema.

**Reporting.** Habilite *Enable PSK Reporter Spotting* para enviar relatórios de recepção ao PSK Reporter. O "UDP Server" abre a comunicação com JTAlert e programas similares.

**Frequencies.** Tabela de frequências de trabalho por modo e banda, editável (clique com o botão direito para inserir, apagar ou *Reset*).

## Frequências do FT8 e as subfaixas do Brasil

Como cada sinal FT8 ocupa 50 Hz em algum ponto do áudio de 200 a 3000 Hz (Aula 2), a "frequência do FT8" é o **dial** em USB; os sinais ficam **de 0 a 3 kHz acima**. As frequências de dial usuais (K7UV; confira na aba Frequencies do seu WSJT-X) e a subfaixa do plano de faixas brasileiro (Ato 926, Tabelas V a XIV, verificado em setembro de 2026) que contém os 3 kHz seguintes:

| Banda | Dial FT8 (MHz) | Subfaixa que contém dial até dial + 3 kHz | Classes que operam a faixa (Tabela I) |
|---|---|---|---|
| 80 m | 3,573 | 3.570 a 3.580 kHz, modos digitais | A, B e C |
| 40 m | 7,074 | 7.053 a 7.100 kHz, modos digitais | A e B (7.047 a 7.300 kHz); a classe C só até 7.047 kHz |
| 30 m | 10,136 | 10.130 a 10.140 kHz, modos digitais, ACDS | A |
| 20 m | 14,074 | 14.070 a 14.089 kHz, modos digitais | A |
| 17 m | 18,100 | 18.095 a 18.105 kHz, modos digitais | A |
| 15 m | 21,074 | 21.070 a 21.090 kHz, modos digitais | A, B e C |
| 12 m | 24,915 | 24.915 a 24.925 kHz, modos digitais | A, B e C |
| 10 m | 28,074 | 28.070 a 28.120 kHz, modos digitais | A, B e C |
| 6 m | 50,313 | 50.125 a 50.400 kHz, modos digitais | A, B e C |

Observações:

- A tabela cruza a lista de dials do K7UV com o Ato 926, e a conferência de subfaixa é conta minha; **a classe do seu COER decide onde você pode operar** (Módulo 5, Aula 3). A 40 m, por exemplo, o FT8 em 7,074 MHz está fora do trecho da classe C. Os limites de potência (Ato 926, item 5.2) são 1.500 W, 1.000 W e 100 W, para as classes A, B e C.
- Algumas dessas subfaixas trazem a marca **ACDS** nas aplicações (por exemplo 10.130 a 10.140 kHz). O Ato 926 define "Aplicação" como a **utilização prioritária** da subfaixa (item 3.1.3), e só as aplicações de "uso exclusivo" restringem a subfaixa. Para operação manual, respeite a prioridade dos ACDS e, em dúvida, pergunte à LABRE ou à Anatel.
- Na faixa de 80 m, a Nota 3 do Ato 926 lembra que ACDS ali é para estações brasileiras em redes internacionais de estudo de propagação.

## A tela principal

O que aparece (guia do WSJT-X e materiais de clube):

- **Cascata (waterfall)**: eixo de frequência de áudio, tempo para baixo. Sinais FT8 aparecem como riscos verticais de 50 Hz. Um marcador **verde** mostra a frequência de recepção (Rx) e um **vermelho** a de transmissão (Tx).
- **Band Activity (janela da esquerda)**: todas as decodificações da banda. Colunas: hora UTC, SNR em dB, **DT** (desvio de tempo, Aula 3), frequência de áudio e mensagem.
- **Rx Frequency (janela da direita)**: decodificações na frequência Rx e as endereçadas a você.
- **Monitor**: liga a recepção normal. **Enable Tx**: autoriza transmitir no próximo ciclo. **Halt Tx**: cancela. **Tune**: emite um tom contínuo para ajuste de nível e de antena.
- **Tx even/1st**: define se você transmite nos ciclos que começam em 0 e 30 s (Aula 3).
- **Auto Seq**: monta sozinho a próxima mensagem do contato. **Hold Tx Freq**: mantém sua frequência de transmissão fixa.
- **Pwr**: nível do áudio de saída (não é potência de RF).
- **Tx1 a Tx6**: as seis mensagens do contato (Aula 4).

## Ajustes de nível

**Recepção.** Ligue o Monitor, confirme USB, e ajuste o ganho de recepção ou o mixer do computador até o **ruído de fundo, sem sinais, ficar em torno de 30 dB** na escala do programa. O guia recomenda desligar o AGC ou reduzir o ganho de RF para minimizar o efeito do AGC. Um material de clube diz também: AGC desligado, redução de ruído desligada, filtro notch **não** (o notch estraga o modem), noise blanker opcional; e passband larga (cerca de 3 kHz). A explicação de K1JT, citada em uma apresentação de operador, é que o WSJT-X mede o ruído a partir do espectro do áudio, então filtros estreitos e "redução de ruído" do rádio só atrapalham.

**Transmissão.** Antes, confirme que há carga fantasma ou antena com SWR aceitável. Depois:

1. Clique em **Tune**. O rádio transmite um tom.
2. Ouça o monitor do rádio: o tom deve ser liso, sem falhas, mesmo com o computador ocupado.
3. Reduza o **Pwr** a partir do máximo até a potência de RF cair ligeiramente (guia). Se o ALC começa a aparecer no rádio, você passou do ponto; volte um pouco (tutorial em vídeo, Ham Radio DX).
4. Clique em **Tune** de novo ou em **Halt Tx**.

**Quanta potência.** Com potência menor, o resto do sistema também sofre menos. K1JT, em uma frase citada na apresentação de W1DYJ, aconselha manter os relatórios recebidos em torno de **-5 dB**: se as estações o ouvem a +10 dB, sua potência está mais alta do que o necessário. Como o FT8 fica no ar 12,64 s a cada 15 s (84%), o transmissor trabalha quase como em portadora contínua. Um checklist comercial sugere começar com 25 a 50 W num rádio de 100 W; o guia do WSJT-X fala de "poucos watts, ou até miliwatts". O Ato 926, item 5.1, exige potência mínima necessária.

**Split (Rig ou Fake It).** Mantém o áudio de TX entre 1500 e 2000 Hz. O motivo, segundo o guia, é que os harmônicos do áudio (o segundo harmônico de 1500 Hz é 3000 Hz) ficam fora da banda do filtro de SSB. Exemplo do material de W1DYJ: com áudio em 1120 Hz, dial em 14.074,00 kHz, RF de 14.075,12 kHz; com *Fake It*, o dial vai a 14.073,50 kHz e o áudio a 1620 Hz, resultando na mesma RF, e o harmônico de 1620 Hz (3240 Hz) fica fora do filtro.

## Fazendo um contato

1. **Só ouça primeiro.** Observe a cascata e as decodificações por alguns ciclos. Se você vê sinais mas nada decodifica, verifique o relógio (Aula 3), o modo USB e o nível de recepção.
2. **Escolha uma frequência de TX livre.** O guia diz que, "para evitar QRM de outros chamando, normalmente é melhor responder a um CQ numa frequência diferente da estação que chama". A estação que chama decodifica todo o áudio, então você não precisa estar na frequência dela (o material de W1DYJ acrescenta que o Hold Tx Freq ajuda). Espalhar os chamadores pela banda de áudio evita que colidam entre si.
3. **Responder a um CQ**: dê duplo clique numa mensagem `CQ` da Band Activity. O WSJT-X preenche as mensagens Tx1 a Tx5 e, com **Enable Tx**, transmite no ciclo oposto ao da estação.
4. **Chamar CQ**: selecione a mensagem Tx6 (`CQ SEUCALL GRID`) e habilite **Enable Tx**.
5. **Deixar o Auto Seq trabalhar**: o programa envia relatório, confirmação e despedida (seis mensagens, cerca de 90 s).
6. **Registrar**: o WSJT-X abre uma caixa para confirmar os dados do contato e grava em um arquivo ADIF (um formato padrão de log). A Aula 8 do Módulo 5 trata do log em UTC e do QSL.

**Regras brasileiras de operação (Ato 3448/2026, item 10):** identifique-se (as mensagens do FT8 já carregam o indicativo), **a chamada pode ser repetida no máximo três vezes consecutivas, passando imediatamente à escuta** (item 10.3, II). O FT8 alterna transmissão e escuta a cada 15 s por construção; minha leitura é que isso cumpre o espírito da regra, mas não encontrei parecer da Anatel sobre esse caso. Transmissões entre estações limitadas a 10 minutos (item 10.3, V); o FT8 dura 12,64 s.

**Watchdog.** O WSJT-X tem um temporizador (*Tx watchdog*, em minutos) que aborta transmissões se você ficou sem interagir por esse tempo, segundo a descrição no código do programa. Ele reforça a política do programa de exigir um operador humano (Aula 4).

## PSK Reporter: quem ouviu meu sinal?

O **PSK Reporter** (pskreporter.info) é um banco de dados de recepção de modos digitais. Como funciona, segundo a página do projeto:

- Milhares de estações rodam um cliente que **decodifica** sinais e **reporta** os indicativos que ouviu. Na aba Reporting do WSJT-X, isso é ligado com *Enable PSK Reporter Spotting*.
- Quando você chama CQ e é decodificado, o seu sinal aparece no mapa poucos minutos depois, com quem o ouviu e com que SNR. **É preciso chamar CQ para ser reportado.**
- É útil para testar antena e propagação: você vê, praticamente em tempo real, onde o seu sinal chegou. Quando consultei a página do mapa, havia **6.345 monitores ativos**, dos quais 1.874 em 20 m e 1.336 em 40 m (retrato do momento).
- Quem só escuta pode participar: "você não precisa de licença de radioamador para participar", diz a página. Basta antena, rádio e computador.
- A página diz que os registros também são mantidos "para fins legais", já que "múltiplas autoridades licenciadoras governamentais" usam os dados em investigações, "tipicamente verificando se radioamadores licenciados estão cumprindo suas licenças".

O último ponto ilustra o Módulo 5, Aula 5: o serviço é público e auditável. Tudo o que você transmite em FT8 é registrado num banco de dados aberto, com hora, frequência e SNR.

Para o WSPR há um banco equivalente, o WSPRnet (Aula 6).

## Solução de problemas

Baseada no guia do clube SARC e no material do K6MEP:

| Sintoma | Verifique primeiro |
|---|---|
| Sem cascata | Cabos de áudio, dispositivo de entrada no WSJT-X, driver do dispositivo no Gerenciador de Dispositivos |
| Cascata, mas nenhuma decodificação | Relógio do PC (±1 s), modo USB, nível de recepção, filtro do rádio |
| WSJT-X reclama do rádio | Porta COM, baud rate, modelo de rádio; se a porta aparece no Gerenciador de Dispositivos |
| O rádio transmite, mas sem RF | Dispositivo de saída de áudio, mute, fonte de áudio do rádio (traseira, USB, frontal), nível do Pwr |
| RF alta e instável, sinal largo | Reduza o Pwr, reveja o alvo de ALC do seu rádio, reduza a potência, melhore cabos e ferrites |
| Ninguém responde | Sua frequência de TX está ocupada? Mova o marcador vermelho para um trecho vazio. Veja o PSK Reporter |
| O rádio esquenta | Ciclo de trabalho de 84%: reduza a potência, verifique refrigeração, SWR, ciclo do amplificador e da fonte |

Mude **uma coisa por vez** e faça na ordem receber, CAT, PTT, transmitir em baixa potência (recomendação do guia SARC). Anote a configuração que funciona (captura de tela e menus do rádio): uma atualização de software ou trocar de computador é a maior causa de "parou de funcionar".

## Resumo

- Requisitos: rádio SSB, interface (USB ou externa), áudio a 48 kHz 16 bits e relógio dentro de ±1 s. WSJT-X é o programa oficial; JTDX é uma bifurcação voltada a DX.
- Configure Radio (Rig, CAT, PTT, USB/Data, Split), Audio e Reporting; teste CAT e PTT; ruído de fundo em cerca de 30 dB na recepção; **Tune e Pwr** para ajustar o áudio de TX até a RF cair ligeiramente, sem ALC.
- Use dial padrão e confira as subfaixas do Ato 926 e a **sua classe**: 40 m em 7,074 MHz, por exemplo, está fora da classe C; várias frequências do FT8 estão em subfaixas com ACDS como aplicação prioritária.
- O contato são seis mensagens em cerca de 90 s; o Auto Seq automatiza, mas o operador inicia e registra; escolha uma frequência de TX livre.
- O PSK Reporter mostra em minutos quem o ouviu e é público, incluindo para as autoridades.

## Para aprofundar

- [ ] [WSJT-X 2.7.0 User Guide](https://wsjt.sourceforge.io/wsjtx-doc/wsjtx-main-2.7.0.html) (Joe Taylor, K1JT): guia oficial, com instalação, settings, ajuste de níveis e tutorial de FT8. **Documentação oficial.**
- [ ] [FT8 & WSJT-X Setup - STEP by STEP](https://www.youtube.com/watch?v=C04RPz4PuVk) (Ham Radio DX): configuração, níveis de RX e TX, sequência automática, resposta a estações, PSK Reporter e ferramentas de apoio (título e canal confirmados; conteúdo não assistido).
- [ ] [Get Started with FT8 - An Introduction for Beginners](https://www.youtube.com/watch?v=YyWX0i87P0o) (Ham Radio DX): introdução em vídeo ao fluxo do WSJT-X (título e canal confirmados; conteúdo não assistido).
- [ ] [Install & Setup of FT8 To Making Your First Contact](https://www.n9rjv.org/install-setup-ft8/) (SARC): passo a passo escrito e tabela de sintomas; lembra de seguir o manual de cada fabricante.
- [ ] [PSK Reporter: mapa](https://www.pskreporter.info/pskmap.html) (página do projeto): o mapa ao vivo; a página inicial do site explica como o sistema funciona.
- [ ] [JTDX](https://github.com/jtdx-project/jtdx/blob/master/package_description.txt) (projeto JTDX): descrição oficial do programa e dos modos que suporta.

[Próxima aula: WSPR, JS8Call e os modos de teclado](./06%20-%20WSPR%20JS8Call%20e%20Modos%20de%20Teclado.md)
