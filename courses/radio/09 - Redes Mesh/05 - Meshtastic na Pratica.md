[Voltar ao módulo](./README.md)

# Aula 5: Meshtastic na prática

*Pergunta que esta aula responde: o que comprar, como gravar o firmware, como configurar região e canal, como montar o primeiro par de nós e medir o alcance, e que hábitos evitam que sua rede prejudique as dos outros?*

> Verificado em setembro de 2026 na documentação oficial (meshtastic.org, "Getting Started", "Initial Configuration", "Range Test Module", "Configuration Tips") e em guias de comunidades brasileiras. Menus, nomes de botões e passos de flash mudam entre versões dos apps: siga a documentação da versão que você tiver. Antes de transmitir, leia a Aula 9 sobre legalidade e use equipamento **homologado pela Anatel** (Módulo 5, aula sobre radiação restrita).

## 1. Escolher o hardware

Um nó Meshtastic é uma placa com **microcontrolador (MCU)** e **chip de rádio LoRa**. A documentação organiza o hardware suportado pelo MCU, e a escolha tem consequência direta:

| MCU | O que traz | Ponto fraco | Uso típico |
|---|---|---|---|
| **ESP32** (inclui ESP32-S3) | Wi-Fi e Bluetooth; mais potência de processamento | **Consome bem mais energia** | Nó fixo com alimentação forte, gateway MQTT por Wi-Fi |
| **nRF52** (nRF52840) | Muito mais eficiente em energia; atualização por UF2 (arrasta e solta) | Só Bluetooth, sem Wi-Fi | Nós de bateria e solares, repetidores remotos |
| **RP2040/RP2350** | Baratos, bom para montagem própria | Bluetooth do Pico W não suportado (segundo a documentação) | Projetos DIY |
| **STM32WL** | Chip único com MCU e rádio; menor consumo e custo | Faltam recursos por falta de memória (sem MQTT, sem tela, entre outros) | Nós mínimos, comunidade |

Exemplos de **hardware de parceiros** listados na documentação oficial (setembro de 2026): Heltec LoRa32 V4 e Mesh Node T096, LILYGO T-Deck e T-Echo, RAK WisMesh e módulos WisBlock (por exemplo o módulo RAK3312, baseado em ESP32-S3), Seeed T1000-E e SenseCAP Indicator, Elecrow ThinkNode. Não há "melhor" universal: bateria e sol pedem nRF52; Wi-Fi e custo baixo pedem ESP32.

Outros pontos práticos, de guias das comunidades brasileiras (meshbrasil.com, SC Mesh; fonte secundária, sem pesquisa própria):

- **Compre a versão 915 MHz** (e não 433 ou 868 MHz, vendidas por diferentes vendedores para outros países), pois elas não falam com as redes do Brasil. O chip de rádio costuma ser SX1262 (modelos novos) ou SX1276 (antigos). A documentação lembra que o SX127x só faz SF7 a SF12.
- Evite as placas de primeira geração (por exemplo TTGO LoRa v1 e Heltec V1): o guia do Meshtastic Brasil diz que elas não têm mais suporte e apresentam falhas de projeto. Confirme o status do seu modelo na lista de dispositivos suportados.
- Uma **tela** é opcional se você usa o celular como interface (consome bateria).
- **Homologação**: a placa importada de loja estrangeira tipicamente não tem certificação Anatel. O Módulo 5 explica por que isso importa. Consulte a Aula 9.

### Regra número um de segurança do equipamento

A documentação oficial avisa (com um "STOP" no topo do passo): **nunca ligue o rádio sem antena conectada**, porque isso pode queimar o chip de rádio (a potência transmitida volta em vez de irradiar; ver [impedância, casamento e SWR](../04%20-%20Antenas/02%20-%20Impedancia%20Casamento%20e%20SWR.md)). Conecte a antena antes de conectar o cabo USB ou a bateria.

## 2. Gravar o firmware

Passo a passo, seguindo a estrutura da documentação oficial ("Getting Started"):

1. **Verifique o cabo USB**: alguns só carregam e não transferem dados. Teste conectando a outro aparelho e copiando um arquivo.
2. **Instale drivers seriais, se preciso.** Placas ESP32 costumam exigir o driver do conversor USB-serial (por exemplo CP210x). Placas nRF52, RP2040 e RP2350 normalmente **não** precisam: aparecem como pen drive pelo bootloader UF2.
3. **Grave o firmware.**
   - **ESP32**: use o **web flasher** (flasher.meshtastic.org, funciona em Chrome ou Edge). Escolha o modelo da placa, a versão, e clique em gravar. Tutoriais em vídeo recomendam "erase and install" (apagar tudo) na primeira gravação; confirme o que a documentação atual pede para o seu caso.
   - **nRF52 / RP2040 / RP2350**: baixe o arquivo de firmware (o web flasher também entrega o arquivo), ponha a placa em modo bootloader e **arraste o arquivo** para o pen drive que aparece.
   - **STM32**: procedimento próprio na documentação.
4. **Não interrompa** a gravação e, se a placa ficar em "waiting for download" após o fim, use o botão de reset.

Sobre versão: o firmware evolui rápido. Na página de releases do GitHub, consultada em setembro de 2026, a última marcada "Latest" era a 2.7.26 (beta), com versões alfa mais novas. Para uma rede que você quer estável, use a versão que o web flasher oferece como estável e **mantenha todos os seus nós na mesma versão** (nós com firmware antigo não participam de recursos como next hop e DMs protegidas por chave pública).

Veja: [How to setup a Heltec V3 device for Meshtastic](https://www.youtube.com/watch?v=CqBT0cXJsD8) (IT Potato Farm), demonstração em vídeo de gravação e configuração inicial.

## 3. Configuração inicial

Ordem que funciona, baseada na documentação e nos guias:

1. **Instale o app oficial** (Android, iOS, ou o cliente web/CLI) e **pareie por Bluetooth**. Se o nó tem tela, ela mostra o PIN; sem tela, o guia da comunidade cita o PIN padrão `123456`. Troque o PIN depois: ele é o mesmo em todo nó de fábrica.
2. **Defina a região primeiro.** Sem ela, o nó **não transmite** (a tela avisa). No Brasil, a documentação lista `ANZ` e `BR_902` para o país. A Aula 9 explica a diferença e a escolha. Se você quer conversar com a mesh pública brasileira, siga o que a comunidade local usa (fonte secundária: as comunidades brasileiras que consultei usam `ANZ`).
3. **Nome do nó**: nome longo e nome curto de 4 caracteres.
4. **Papel**: deixe `CLIENT` (Aula 4).
5. **Preset**: deixe `LongFast` (padrão) se quer participar da mesh pública, ou combine outro com o seu grupo.
6. **Hop limit**: deixe em **3**.
7. **MQTT**: mantenha **desligado** a menos que você queira, conscientemente, publicar seus pacotes na internet. A documentação avisa que conectar ao servidor MQTT público pode publicar a localização de todos os nós da sua mesh.
8. **Posição**: decida se compartilha; ajuste a **precisão** por canal.

No menu do app Apple, a documentação indica `Settings > Radio Configuration > LoRa` para a configuração de LoRa e `Settings > Radio Configuration > Channels` para os canais; no Android, `Settings > Channels`. Os nomes mudam entre versões.

## 4. O primeiro par de nós, em um canal privado

Objetivo: dois nós que se falam, sem serem lidos por quem está por perto na mesh pública.

1. Grave e configure os dois nós como acima (mesma região, mesmo preset).
2. No **primeiro nó**, crie um canal com **chave aleatória** (`random`, ou "gerar" no app): é uma chave de 256 bits. A documentação avisa que as opções `default` e `simple` usam chaves **conhecidas de todos**. Se for usar o canal como primário, dê também um nome.
3. Compartilhe o canal por **QR code ou URL** e leia no segundo nó. Lembre: o QR leva também as configurações de LoRa e sobrescreve as suas.
4. Envie uma mensagem em cada sentido. No app, veja os indicadores de entrega, sabendo o que eles significam (Aula 4: confirmação implícita).

Se o seu canal primário tem nome diferente do padrão, a frequência de transmissão muda (o hash do nome escolhe o slot). Para dois nós que **não** se enxergam, essa é uma causa clássica: confira que ambos têm o mesmo **frequency slot** ou o mesmo nome de canal primário.

Comando de referência, da documentação do CLI Python (o comando faz o dispositivo reiniciar a cada chamada, então a documentação recomenda encadear vários `--ch-set` em um só):

```
meshtastic --ch-set name "MeuCanal" --ch-set psk random --ch-index 0
```

Não invento outros comandos aqui: confira `meshtastic --help` na sua versão.

## 5. Teste de alcance

O **módulo Range Test** foi criado para isso (documentação oficial):

- Um nó **fixo** é o **remetente**: envia pacotes sequenciais em um intervalo configurado. Um nó **móvel** é o **receptor**, idealmente com GPS.
- O receptor pode **salvar em CSV** a posição de cada pacote recebido. Dá para abrir em Google Earth ou outro programa de mapas e ver a cobertura.
- Ambos precisam ter o módulo habilitado. Intervalos recomendados de envio: 30 s no LongFast, 15 s em Medium e Short Fast, 60 s no Long Slow.
- **Desligue depois**: gasta muito tempo de ar e "spamma" o canal. O módulo desliga sozinho após 8 horas.
- Para o log de posição ficar correto, a precisão de posição do canal precisa estar alta durante o teste.

Sem o módulo, o teste manual é caminhar com o rádio, mandando mensagens, anotando local, se voltou o "ok" e o **RSSI/SNR** reportado, e repetindo com outra antena ou altura.

Veja: [Meshtastic Beginners Guide: Best Devices, Easy Flashing & Setup Tutorial](https://www.youtube.com/watch?v=CZMHWFDZ77Y) (ShotokuTech), guia em vídeo de hardware, gravação e configuração.

## 6. Alcance real, com honestidade

O alcance depende **mais de altura e visada que de potência** (Aula 3: horizonte de 26 km entre antenas a 10 m, e margem de enlace de sobra). Ordens de grandeza que posso sustentar com a documentação:

- A documentação oficial diz que uma antena "stubby" de 1/4 de onda **bem sintonizada** (menos de 10 cm) tem alcance real de "alguns km" **sem obstáculos significativos** (prédios, morros). Em cidade, com prédios, é bem menos.
- Alcances de dezenas ou centenas de km são casos de **visada entre topos de montanha** ou balão, e a página oficial de range tests reúne relatos, mas eu não verifiquei recordes específicos.
- Não use o **mapa** como prova de alcance: ele mostra pacotes ouvidos, muitas vezes por retransmissão de nós móveis ou de altitude, não enlaces confiáveis.

Para prever cobertura antes de comprar, o Meshtastic mantém o **Site Planner** (site.meshtastic.org, código aberto, baseado em SPLAT!): você informa local, altura da antena, potência, ganho e sensibilidade (a documentação sugere -130 dBm para LongFast), e ele gera um mapa de cobertura com dados de terreno SRTM (precisão de ~90 m, sem prédios e árvores: use o parâmetro de *clutter*). A própria documentação manda **validar por teste real**.

## 7. Antena e posição: o que mais melhora a rede

Conteúdo dos Módulos 2 e 4 aplicado a Meshtastic:

- **Altura acima de tudo.** Um nó no alto de um poste ou telhado, com visada, vale mais que qualquer ganho de antena. Ver [solo, altura e instalação segura](../04%20-%20Antenas/06%20-%20Solo%20Altura%20e%20Instalacao%20Segura.md).
- **Antena sintonizada na frequência** (915 MHz), 50 ohms, conector correto (SMA ou U.FL/IPEX), **VSWR menor que 2**, ganho maior que 0 dBi. A documentação oficial alerta para fornecedores que não informam a frequência de sintonia ou anunciam ganhos enormes em omni. Antenas baratas rotuladas de 915 MHz frequentemente estão fora de sintonia (relato do desenvolvedor do MeshCore, Liam Cottle, em uma palestra; ver [medição, dummy load e erros comuns](../04%20-%20Antenas/07%20-%20Medicao%20Dummy%20Load%20e%20Erros%20Comuns.md)). Um analisador vetorial (VNA) mostra se casou.
- **Polarização vertical** e antena longe de metal e do corpo. Nós de mão dentro de casa perdem muitos dB.
- **Cabo curto e de baixa perda**: cada dB perdido no cabo é dB perdido da margem.
- **Quantidade x qualidade.** A documentação sugere ponderar o custo de uma antena melhor contra o custo de mais nós baratos, porque numa mesh cada nó retransmite.
- **Segurança**: antena em mastro perto de rede elétrica é risco de morte. Módulo 4, aula sobre instalação segura. Baterias de lítio exigem cuidado. Exposição a RF: Módulo 1, aula sobre segurança de RF (a potência típica é baixa, mas não coloque a antena colada em pessoas de forma contínua).

## 8. Hábitos de boa vizinhança (o que a documentação e o blog oficial pedem)

1. Papel `CLIENT`. Não use `ROUTER` no telhado de casa: use `CLIENT_BASE`.
2. Vários nós seus no mesmo lugar: **um** `CLIENT` e os demais `CLIENT_MUTE`.
3. Hop limit 3; só suba nas bordas se precisar.
4. Não deixe **Range Test** ligado.
5. Se a mesh da sua região ficou grande e densa, converse com a comunidade sobre trocar para um **preset mais rápido** (o blog oficial recomenda considerar acima de 60 nós próximos).
6. **Mantenha o firmware** atualizado.
7. **Não configure a chave privada em nós sem vigilância** (roteadores no alto de um poste): quem os pegar fisicamente extrai a chave. Recomendação da documentação de criptografia.
8. Se você não sabe o que uma configuração faz e está em uma mesh grande, **não a altere**.

## 9. Polêmicas e limitações que a comunidade discute

Elas estão documentadas em fontes abertas (discussões do GitHub, blogs de comunidades, blog oficial):

- **A mesh pública em LongFast satura.** O blog oficial admite que o projeto começou pensando em pequenas redes privadas, não nas meshes públicas gigantes de hoje, e que o `LongFast` continua padrão pela compatibilidade. A equipe diz estar considerando um novo preset padrão para o Meshtastic 3.0 (ainda em estudo). Trocar o padrão quebraria a descoberta entre nós existentes.
- **"Mapa bonito, mensagem que não chega".** Uma comunidade regional publicou uma crítica de que o mapa de nós mostra sinais ouvidos, não alcançáveis, e que o indicador de "entregue" pode ter sido só um vizinho. A mesma crítica lembra que hop limit alto e roteadores mal colocados agravam o problema.
- **Debate sobre filtrar tráfego na mesh pública** (por exemplo, retransmitir só mensagens de texto). Contra: a mesh é "mais que texto", o NodeInfo é necessário para descobrir nós e trocar chaves; a resposta oficial recorrente é "use preset mais rápido ou faça uma mesh privada".
- **Limites de segurança** (Aula 9): sem sigilo futuro, sem autenticação forte em canais, integridade limitada.
- **Um só canal físico**: um nó de telemetria pode atropelar uma mensagem (Aula 3), e não há ACK fim a fim como TCP para broadcast.

Isso não é motivo para descartar o Meshtastic. É motivo para **usá-lo dentro do que ele suporta** (redes pequenas e médias, tráfego curto) e para conhecer as alternativas (Aulas 6 e 7).

## Resumo

- Escolha o MCU pelo uso: **nRF52** para bateria e sol, **ESP32** para Wi-Fi e custo. Compre a versão 915 MHz e prefira placas atuais com homologação Anatel.
- **Nunca ligue sem antena.** Gravação: web flasher (ESP32) ou arrasta-e-solta UF2 (nRF52/RP2040). Mantenha os nós na mesma versão.
- Ordem de configuração: parear, **região primeiro**, nome, papel `CLIENT`, preset, hop limit 3, MQTT desligado, precisão de posição.
- Canal privado: **chave aleatória** e QR code; `default` e `simple` são chaves públicas. Nomes de canal primário diferentes podem mudar a frequência.
- Alcance vem de **altura e visada**; use o módulo Range Test (e desligue depois) e o Site Planner para prever, sempre validando na prática.
- Boa vizinhança: `CLIENT`, hop 3, sem `ROUTER` no telhado, um `CLIENT` e o resto `CLIENT_MUTE`.

## Para aprofundar

- [ ] [Getting Started](https://meshtastic.org/docs/getting-started/) (Meshtastic, documentação oficial): lista o hardware suportado por MCU, e o caminho de verificação de cabo, drivers, gravação e configuração.
- [ ] [Initial Configuration](https://meshtastic.org/docs/getting-started/initial-config/) (Meshtastic, documentação oficial): configuração inicial e códigos de região.
- [ ] [Meshtastic - Guia Inicial Completo de Compra, Configuração e Uso de Rádios LoRa](https://www.youtube.com/watch?v=xHwG4JZLvws) (Development Tactical Team): guia em português sobre escolha de placas, compra e configuração, gravado em novembro de 2024 (versões e preços podem estar defasados).
- [ ] [Meshtastic - Montagem e configuração de um node Heltec Tracker](https://www.youtube.com/watch?v=f8zv2qso7G8) (Renato C. Druziani): vídeo em português, que o guia do Meshtastic Brasil cita como companheiro do passo a passo de configuração no Android. Não assisti.
- [ ] [Meshtastic For Wireless Data in Maker Projects | 1 Hour Beginner Course](https://www.youtube.com/watch?v=51Bgt5E5PZg) (Core Electronics): curso de uma hora, útil para quem quer usar a mesh em projetos de eletrônica.
- [ ] [Meshtastic Site Planner](https://meshtastic.org/docs/software/site-planner/) (Meshtastic, documentação oficial): como prever cobertura por terreno antes de instalar.

[Próxima aula: MeshCore](./06%20-%20MeshCore.md)
