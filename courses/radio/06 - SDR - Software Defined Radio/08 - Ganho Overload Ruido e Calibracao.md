# Aula 8: Ganho, overload, ruído local e calibração de ppm

[Voltar ao módulo](./README.md)

*Pergunta que esta aula responde: por que o ajuste do ganho decide se você vê ou não um sinal, como reconhecer e curar saturação do receptor, como reduzir o ruído do seu ambiente e como corrigir o erro de frequência do dongle?*

## Ganho: o botão que mais faz diferença

O **ganho de RF** amplifica o sinal antes do ADC (Aula 1). Ele posiciona o que você recebe **dentro da faixa do ADC** (Aula 2):

- **Ganho baixo demais:** sinais fracos ficam abaixo do piso do ADC e do ruído do receptor; a relação sinal/ruído (SNR) é ruim, embora haja folga de faixa acima.
- **Ganho alto demais:** o sinal mais forte (ou a soma de todos dentro da banda) chega perto de 0 dBFS e satura. Surge distorção que espalha falsos sinais e ergue o piso de ruído (**overload**, abaixo).

O SDR# entrega o ganho de RF **em zero** por padrão, o que só deixa ver FM muito forte (guia de início rápido). Na Aula 7 você viu esse aviso.

**AGC, ou ajuste manual.** O RTL-SDR tem dois controles automáticos: o **RTL AGC** (no chip RTL2832U) e o **Tuner AGC** (no sintonizador). Foram feitos para sinais de TV digital de banda larga, não para canais estreitos. O guia do SDR# recomenda **manter o RTL AGC desligado** (quase sempre piora o sinal) e usar o ganho **manual**; o Tuner AGC pode servir para "navegar" casualmente.

**Como escolher o ganho (roteiro do guia do SDR#):**

1. Sintonize o sinal que você quer (ou uma frequência em que espera ver ruído).
2. Comece com ganho baixo e **suba** aos poucos, observando o espectro.
3. O sinal sobe e o piso de ruído também. **Pare** quando o piso de ruído começar a subir **mais rápido** que o sinal: aí você só amplifica ruído.
4. Confira o espectro: apareceram sinais "novos" onde não havia nada? Isso é overload: **desça** um degrau.

Uma dica prática de medições de terceiros (rtl-sdr.com, teste com R820T): ajuste a escala do espectro para mostrar no máximo cerca de **60 dB acima do piso de ruído**; se um sinal estiver perto do topo, você está perto da saturação.

## Overload: o que é e como reconhecer

**Overload** (saturação, ou compressão) é o receptor saindo da região linear porque um sinal forte demais entra. Analogia do guia oficial: tentar ouvir um amigo em um show com a música muito alta. Ocorre mesmo que o sinal forte esteja **centenas de MHz** longe do que você quer, e é pior quanto mais perto na frequência. As causas mais comuns citadas: estações de **FM de radiodifusão**, **pagers**, **TV**, **DAB** e **celular** (GSM).

**Sintomas no espectro (guia do SDR#):**

- **Imagens** de um sinal forte em frequências onde ele não deveria estar. Exemplo do guia: estações de FM aparecendo em 206 MHz. Baixar o ganho as faz desaparecer.
- **Piso de ruído que sobe** quando um sinal forte transmite (o exemplo do guia é um pager).
- **Espinhos estranhos** por toda a parte que aparecem e somem com um transmissor.
- **Sinais fracos somem** ("dessensibilização"): o forte "rouba" a folga do front-end.

**O teste para distinguir sinal real de falso.** Reduza o ganho em uma quantia conhecida (por exemplo, 10 dB) e observe:

- Um sinal real cai por aproximadamente essa quantia.
- **Produtos de intermodulação** (falsos sinais criados quando dois sinais fortes se misturam no amplificador saturado) variam 3 dB para cada 1 dB de mudança nos sinais que os geram (comportamento de terceira ordem, regra geral de RF), então caem **muito mais rápido**, ou desaparecem. Se algo some ao baixar o ganho e o sinal "verdadeiro" continua legível, era overload.

**Medições de terceiros** (2013, dongles R820T/E4000, artigo no rtl-sdr.com; valem como ordem de grandeza): no R820, reduzir o ganho de 11, 20 e 30 dB melhorou o limite de overload em 12, 20 e 30 dB (medido a 145 MHz); o filtro interno do R820 tem cerca de ±3 MHz de largura, então sinais **dentro** dessa janela pesam mais; e sinais fortes fora dela são suportados com muito menos degradação. Quando há muitos sinais fortes juntos (bandas de radiodifusão), as potências somam (+3 dB cada vez que o número de sinais fortes iguais dobra) e o ganho precisa ser ainda menor. Sinais acima de -40 dBm na entrada devem ser atenuados com filtros.

## Curas para o overload, em ordem

1. **Baixar o ganho.** Grátis. Se isso limpa os falsos sinais, era overload.
2. **Trocar de antena ou posição.** Uma antena menos sensível ou de banda estreita, ou fora da linha de visada de uma torre de FM, reduz os fortes na entrada. Você trocou ganho de antena por menos sinal forte; nem sempre é um ganho líquido.
3. **Filtro externo antes do dongle:**
   - **Rejeita-faixa (notch) de FM de radiodifusão**, que elimina 88 a 108 MHz e deixa passar o resto: a cura mais comum em cidades para VHF e UHF. Exemplo em vídeo: um usuário mostra a faixa de aviação (118 a 137 MHz) ilegível por interferência de FM, e limpa ao inserir um filtro rejeita-faixa de FM (Frugal Radio, com um Airspy R2).
   - **Rejeita-faixa de AM** (ondas médias) para HF.
   - **Passa-faixa** (por exemplo, um filtro SAW) para a banda de interesse, como 1090 MHz (ADS-B) ou 137 MHz (satélites).
   - **Regra geral:** filtre **antes** de amplificar. Um LNA amplifica também a interferência e pode saturar mais rápido. A ordem correta é antena, filtro, LNA, dongle. Se o LNA é alimentado pelo bias tee do dongle, o filtro **não pode bloquear a corrente contínua** entre o bias tee e o LNA (o filtro vai do lado da antena).
   - Todo filtro tem perda de inserção (algo como 1 a 3 dB), mas remover um interferente forte reduz o ruído mais do que a perda custa (regra geral; valores de fontes secundárias).
4. **Um SDR com mais bits e filtros internos** (SDRplay, Airspy; Aula 5). O RTL-SDR Blog V4 tem filtragem de entrada melhorada; a loja cita um "notch filter" e menor tendência a saturar com radiodifusão, mas **não conferi** quais frequências ele cobre; consulte o datasheet.

## Ruído local: o inimigo que você mesmo gera

Um SDR revela o que os rádios comuns escondem: o **ruído de RF gerado em casa** que sobe o piso e come sinais fracos. Fontes típicas: o próprio **computador** (e monitor), **carregadores e fontes chaveadas**, **lâmpadas de LED** (um vídeo de 2025 mostra LED causando RFI enquanto o usuário escuta ondas curtas), roteadores, cabos USB e de rede. Para o SDR, o **cabo USB** é especialmente traiçoeiro porque a malha do USB pode virar antena: segundo um experimento (SDR for Mariners, 2013, 76 cm de cabo de extensão), o cabo USB **aumentou o ruído em 13 dB**; e quando o dongle está sem blindagem, ele capta RF dos circuitos próximos mesmo sem antena.

**Como diagnosticar (método de eliminação):**

1. Sintonize uma frequência onde você espera silêncio e olhe o waterfall.
2. **Desconecte a antena** (com o dongle ligado). Se o ruído continua, ele entra pelo dongle e pelo USB, não pela antena.
3. **Desligue tudo o que der**, um item por vez (monitor, carregador, lâmpadas, roteador), e veja o que muda. Use um notebook **na bateria** para comparar.
4. **Afaste o dongle e a antena** do computador e da casa. Antena para fora, longe de fontes.

**Correções, das mais simples às mais trabalhosas:**

- **Cabo USB de extensão** para afastar o dongle do computador (mas veja que o cabo pode pegar ruído; combine com ferrites).
- **Núcleos de ferrite** (clamp-on) no cabo USB, perto do dongle e perto do computador, e no cabo de antena. Relatos: 6 a 7 dB de redução (SDR for Mariners); "2 a 3 núcleos reduziram o piso em 10 a 15 dB" (comentário de leitor, anedótico). Mais voltas não ajudaram nos testes de Akos (8 voltas ≈ 4 voltas). Ferrites do tipo "clamp" grande e vários ajudam mais.
- **Caixa metálica** ligada à malha do USB e ao conector de antena (dongles de plástico não têm blindagem; V3/V4 têm caixa de alumínio).
- **Choke de modo comum** no cabo coaxial da antena, como no Módulo 4 (Aula 3): a malha do coaxial também conduz ruído para dentro. Cabo curto e de boa qualidade.
- **Modificar o USB** (desconectar a malha do cabo do terra do dongle) é um truque documentado que reduziu 10 dB em um teste, mas é uma **modificação do equipamento por sua conta e risco**.
- Ideia de arquitetura: montar o dongle **junto da antena** (com um cabo USB ativo até o computador) elimina cabo coaxial longo e afasta o dongle do ruído; o cabo USB precisa respeitar a especificação (ham.stackexchange).

## Calibração de ppm: corrigindo o erro de frequência

Da Aula 4: o cristal do dongle erra `f x ppm / 1e6` Hz, e o erro cresce com a frequência. Para FM larga é irrelevante; para sinais estreitos (voz FM de 12,5 kHz, AIS, satélites, rtl_433 em FSK) importa. Se você tem um **V3 ou V4** (TCXO, 0,5 a 1 ppm de deriva), **não precisa calibrar**. Para dongles genéricos:

**Passo 1: medir o erro (ppm).** Você precisa de um sinal cuja frequência exata você conhece.

- **`kalibrate-rtl` (`kal`):** usa as estações-base de celular **GSM**, que são referenciadas ao GNSS (Skywave Linux; RTL-SDR.com). Exemplo de uso: varrer canais com `kal -s GSM900` e então medir em um canal forte com `kal -c <canal>`. A saída dá um "average absolute error" em ppm (o exemplo do OpenWebRX mostra `-25,348 ppm`). Requer GSM na região: **não confirmei se e onde a 2G segue ativa no Brasil em 2026**; se não achar estações, o método não funciona. Comece antes com uma estimativa inicial (`-e`), se o erro for grande (PE2KMV).
- **`rtl_test -p`:** o utilitário `rtl_test` do pacote de drivers tem a opção `-p`, que mede o desvio de ppm do dongle ao longo do tempo (usada por um autor de projeto com Raspberry Pi para achar 69 ppm). Como a saída varia, consulte `rtl_test -h` na sua versão.
- **Referência manual:** compare com um sinal cuja frequência exata você conhece (por exemplo, um canal de referência de sua região), e calcule `ppm = (f_medida - f_real) / f_real x 1e6`.

**Passo 2: aplicar a correção.** Digite o valor no campo de correção de ppm do programa (o SDR# tem o campo de correção de ppm no painel do RTL-SDR; o GQRX tem um campo equivalente; o `rtl_433` documenta a opção `-p <ppm_error>`; nos demais, procure "frequency correction" ou "ppm" na documentação). Os nomes exatos variam com a versão; confira na documentação. O sinal da correção pode ser convencionado de forma diferente entre programas: **teste** com um sinal conhecido depois de aplicar.

**Exemplo numérico.** Você mediu **+25 ppm** (o dongle lê frequências acima da real). Em 162 MHz (AIS, marítimo), o erro é `162e6 x 25 / 1e6 = 4.050 Hz`: um canal de 25 kHz de largura fica deslocado de 16% de sua largura. Corrigido o ppm, o sinal cai onde deveria.

**Detalhes:**

- **Aqueça o dongle** alguns minutos antes de medir: a temperatura muda a frequência do cristal (PE2KMV). Não confirmei o tempo exato de estabilização.
- **A correção vale para todo o espectro** de forma proporcional: erro em ppm é uma razão, não um deslocamento fixo em Hz. Um único valor cobre 100 MHz e 1 GHz.
- O ppm corrige também a taxa de amostragem (o mesmo cristal), por isso a correção sai proporcional.

## Exercícios guiados

**8.1: achar o ponto de ganho.**

1. Sintonize a faixa de FM (Aula 7) e ponha o ganho em zero.
2. Suba de 3 em 3 dB. A cada passo anote: (a) nível do sinal mais forte; (b) nível do piso de ruído em uma região vazia.
3. Ache o ponto em que o **piso sobe mais que o sinal**. Continue mais dois passos: aparecem estações em posições estranhas? Marque o ganho em que isso começa.
4. Volte três passos abaixo do ponto de imagens. Esse é o seu ganho de trabalho para essa faixa.

**8.2: distinguir real de falso.**

1. Com o ganho alto (onde vê imagens), escolha um "sinal fantasma" e anote o nível.
2. Baixe 10 dB. Calcule: um sinal real deveria cair ~10 dB; o fantasma caiu mais (idealmente ~30 dB)?

**8.3: a caça ao ruído.**

1. Escolha uma frequência calma (por exemplo, entre estações de FM ou uma faixa livre de VHF) e anote o piso de ruído.
2. Desconecte a antena: o piso mudou? Ligue a antena de novo.
3. Ligue e desligue, um de cada vez: monitor, carregador do celular, lâmpada de LED. Registre o que causa espinhos.
4. Coloque um ferrite no USB e compare (dB).

**8.4 (se tiver dongle genérico): medir o ppm.** Use o `kal` (Linux) ou compare com um V3/V4. Aplique o valor e confirme que uma estação conhecida cai na frequência esperada.

## Resumo

- Ganho manual, ajustado até o piso de ruído subir mais que o sinal, dá a melhor SNR; o RTL AGC deve ficar desligado.
- Overload aparece como imagens de sinais fortes (FM em 206 MHz), piso subindo e espinhos; baixar o ganho o cura, e produtos de intermodulação caem mais rápido que sinais reais.
- Curas: menos ganho, mudar antena, filtro notch de FM (antes do LNA), SDR com mais bits e filtros.
- Ruído local vem do computador, USB, fontes chaveadas e LEDs; diagnostique por eliminação (desconecte a antena, desligue itens) e trate com ferrites, distância, blindagem e choke no coaxial.
- Erro de ppm desloca frequências em `f x ppm / 1e6`; V3 e V4 (TCXO) dispensam calibração; nos genéricos meça com `kal` ou `rtl_test -p` e aplique no programa.

## Para aprofundar

- [ ] [SDR# Users Guide](https://www.rtl-sdr.com/sdrsharp-users-guide/) (rtl-sdr.com): a seção sobre ganho e "What Overload Looks Like" é a base desta aula.
- [ ] [2020 SDR Guide EP8: Overcoming FM Broadcast Interference with a Nooelec flamingo band stop filter](https://www.youtube.com/watch?v=-vWf_Tp2CZ8) (Frugal Radio): demonstração antes e depois de um filtro notch de FM na faixa de aviação.
- [ ] [RTL-SDR RF Filters](https://www.youtube.com/watch?v=zT1_T25rg3g) (TheSmokinApe Ham Radio): vídeo sobre filtros de RF para o RTL-SDR.
- [ ] [Reducing USB Shield Interference on RTL-SDR Dongles](https://www.rtl-sdr.com/reducing-usb-shield-interference-rtl-sdr-dongles/) (rtl-sdr.com) e [Tip to Reduce Radio Interference on the RTL-SDR](https://www.rtl-sdr.com/tip-reduce-radio-interference-rtl-sdr/) (rtl-sdr.com): técnicas de blindagem e ferrite, com discussão de leitores.
- [ ] [SDR for Mariners: Reducing electrical noise](http://sdrformariners.blogspot.com/2013/09/reducing-electrical-noise.html) (Akos): medições em dB de cada medida (cabo USB, ferrite, blindagem).
- [ ] [How to Calibrate RTL-SDR using Kalibrate-RTL on Linux](https://www.rtl-sdr.com/how-to-calibrate-rtl-sdr-using-kalibrate-rtl-on-linux/) (rtl-sdr.com): explica ppm e o `kal`, com um vídeo tutorial. Repositório em [kalibrate-rtl](https://github.com/steve-m/kalibrate-rtl).

[Próxima aula: Sinais legais para receber e o SDR como laboratório](./09%20-%20Sinais%20Legais%20e%20Laboratorio.md)
