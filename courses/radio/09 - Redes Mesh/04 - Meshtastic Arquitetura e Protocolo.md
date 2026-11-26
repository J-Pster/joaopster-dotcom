[Voltar ao módulo](./README.md)

# Aula 4: Meshtastic, arquitetura e protocolo

*Pergunta que esta aula responde: como o Meshtastic aplica, com escolhas concretas, o que as Aulas 1 a 3 ensinaram (inundação controlada, limite de saltos, papéis, canais), e quais são as consequências dessas escolhas?*

> Fontes principais: documentação oficial em meshtastic.org (Overview, Mesh Broadcast Algorithm, Device Configuration, LoRa Configuration, Channel Configuration, Encryption) e blog oficial. Verificado em setembro de 2026. Na página de releases do GitHub, a versão marcada como "Latest" era o firmware 2.7.26 (beta, publicada em 24/06/2026), havendo 2.8.0 em alfa. Nomes de campos e comportamentos mudam entre versões: confira a documentação da versão que você instalar.

## O que é o Meshtastic

**Meshtastic** é um projeto de código aberto que roda em rádios LoRa baratos (placas a partir de algumas dezenas de dólares) e forma uma rede mesh de mensagens de texto, posição e telemetria, **sem internet e sem operadora**. A arquitetura tem duas peças:

- **O nó**: a placa com rádio LoRa e o firmware Meshtastic. É ele que fala pelo ar e repassa pacotes.
- **O cliente**: um app no celular (Android, iOS), no navegador (client.meshtastic.org) ou linha de comando (biblioteca/CLI em Python), ligado ao nó por Bluetooth, Wi-Fi ou USB (serial). O cliente é a interface humana: digita a mensagem, mostra o mapa. A rede funciona sem o cliente: o nó guarda uns 30 pacotes na memória para entregar quando o cliente reconectar.

Do ponto de vista de arquitetura, o celular **não é parte da mesh**. A mesh é feita de rádios. Isso é diferente do que muita gente imagina ("app de mensagem por rádio"), e importa para entender o consumo de energia e a repetição de pacotes: mesmo um nó guardado na mochila, sem o app aberto, continua repassando pacotes.

## As camadas do protocolo

A documentação do algoritmo descreve quatro camadas conceituais:

| Camada | O que faz |
|---|---|
| 0: rádio LoRa | Converte bytes em símbolos LoRa. Preâmbulo de **16 símbolos** (mais longo que o mínimo de 8, para o rádio SX126x poder "dormir" e economizar energia). Palavra de sincronismo `0x2B` |
| 1: zero salto, sem confirmação | Transmissão comum de pacote, com **CSMA/CA e CAD** (Aula 3) |
| 2: zero salto, confiável | Flag `WantAck`: confirmação apenas dos vizinhos imediatos, com **até 3 retransmissões** se ninguém confirmar |
| 3: multissalto | Inundação gerenciada (broadcast) e next-hop (mensagens diretas) |

### O pacote no ar

O cabeçalho vai **sem criptografia e sem protobuf** (bytes crus, para economizar tempo de ar e permitir que o hardware filtre pacotes antes de acordar o processador). São 16 bytes:

| Campo | Bytes | Papel |
|---|---|---|
| Destino | 4 | ID do nó de destino; `0xFFFFFFFF` = broadcast |
| Origem | 4 | ID do nó de origem (derivado do endereço MAC Bluetooth) |
| ID do pacote | 4 | Identificador de 32 bits: **deduplicação** e proteção contra ataques ao payload criptografado |
| Flags | 1 | `HopLimit` (3 bits), `WantAck` (1), `ViaMQTT` (1), `HopStart` (3, o limite original) |
| Hash do canal | 1 | Dica para o receptor saber qual chave tentar |
| Next hop | 1 | Retransmissor pretendido, usado na rota aprendida |
| Relay node | 1 | Último byte do ID de quem retransmitiu por último |

Depois vem o **payload criptografado** (cerca de 237 a 239 bytes no máximo, conforme a página; o conteúdo útil de aplicação chega a uns 200 bytes). Só o payload é criptografado. Isso é deliberado: um nó **retransmite pacotes que não consegue ler**, e é assim que a mesh pública ajuda redes privadas e vice-versa.

Consequência para a Aula 3: o cabeçalho de 16 bytes mais o preâmbulo fazem parte do custo de cada pacote. Uma mensagem de texto de 20 caracteres não custa 20 bytes de ar: com os 16 bytes de cabeçalho e alguns bytes de protobuf, fica em torno de 40 bytes (estimativa minha).

## Inundação gerenciada (managed flooding)

O broadcast usa uma inundação com controles, na ordem em que a documentação os descreve:

1. **Deduplicação**: um nó que já viu o ID do pacote o ignora.
2. **Limite de saltos**: se o `HopLimit` é diferente de zero, o nó o decrementa e tenta retransmitir; se é zero, descarta.
3. **Atraso proporcional ao SNR**: antes de retransmitir, o nó espera um tempo aleatório dentro de uma janela de contenção. A janela é **pequena para SNR baixo**. Ou seja: **os nós mais distantes da origem (que ouviram com sinal fraco) tentam retransmitir primeiro**, e os mais próximos, ao ouvirem essa retransmissão, cancelam a sua. Isso empurra o pacote para longe da origem com menos transmissões.
4. **Supressão por escuta**: se, durante a espera, o nó ouve outro retransmitindo o mesmo pacote, cancela.
5. **Exceção**: nós com papel `ROUTER` ou `REPEATER` retransmitem **mesmo que ouçam outro retransmitindo**, e têm prioridade de janela.

**Confirmação implícita.** Para broadcast, um ACK por nó inundaria o canal. Então a origem simplesmente **escuta se alguém retransmitiu o seu pacote**; se sim, considera entregue. Isso significa que o "visto" que o app mostra confirma que **algum** nó ouviu, não que o destinatário recebeu. Se ninguém retransmitir no prazo, ela reenvia (até 3 vezes). Isso é uma fonte comum de falsa confiança: o pacote pode ter chegado ao vizinho mais próximo e morrido dali.

**Mensagens diretas (DM) e next hop (versão 2.6 em diante).** A DM começa por inundação gerenciada. O nó anota **quais vizinhos** retransmitiram o pacote. Quando uma resposta volta (um NodeInfo, um ACK ou um traceroute) e o vizinho que a entregou é um dos que retransmitiu a ida, esse vizinho passa a ser o **next hop** daquele destino. A partir daí só o nó cujo byte de next hop coincide retransmite. Isso é decidido **por salto**; se o enlace for assimétrico ou houver nó com firmware antigo no caminho, aquele salto continua em inundação. Na última tentativa de retransmissão, se o next hop não responde, o nó volta à inundação gerenciada para reencontrar o caminho. É o roteamento aprendido "de carona" da Aula 2.

Um ponto de arquitetura: o Meshtastic não tem tabela global de rotas nem mapa da rede. Cada salto é uma decisão local, e o next hop só existe para conversas diretas que já tiveram resposta.

## Hop limit

O **hop limit** é o TTL do Meshtastic, no campo de 3 bits: portanto vai de 0 a 7. A documentação da configuração LoRa: **padrão 3, máximo 7**, e a frase "Really, 3 is fine." A página de dicas recomenda deixar em 3 a menos que se saiba que é preciso mais, e, se aumentar, aumentar só nos nós da **borda** da rede, não nos do meio.

Por que não simplesmente pôr 7? Pelas Aulas 2 e 3: cada salto extra multiplica as retransmissões. Um pacote com limite 7 numa mesh densa pode ser retransmitido por muitos nós, em ondas sucessivas. Além disso, aparecer no mapa não garante que o nó receba uma mensagem: segundo um desenvolvedor em discussão no GitHub do firmware, o que limita a distância de uma conversa é a **confiabilidade de cada salto**, não o contador.

Um recurso recente, dos **Zero-Cost Hops** (blog oficial, novembro de 2025, firmware 2.7.11 ou superior nos nós de infraestrutura): quando roteadores estão marcados como favoritos entre si, a passagem entre eles **não consome contador**. Permite que uma rede bem planejada de roteadores de morro atravesse cidades dentro do limite de 7, deixando os saltos para as pontas.

## Papéis (roles)

O **papel** do nó (`Role`) define se e como ele retransmite. Lista vigente na documentação de Device Configuration:

| Papel | Retransmite | Uso indicado |
|---|---|---|
| `CLIENT` | Sim, com supressão | Padrão. Celular, uso geral. "Retransmite quando ninguém mais retransmitiu." |
| `CLIENT_MUTE` | **Não** | Nó pessoal perto de outro mais forte, ou vários nós juntos: só um vira `CLIENT` |
| `CLIENT_HIDDEN` | Só local | Furtivo/economia: transmite o mínimo, não aparece na lista de nós |
| `CLIENT_BASE` | Sim; prioriza nós **favoritos** | Estação base da casa (sótão/telhado) que reforça seus outros nós |
| `TRACKER` | Só acordado | Envia posição com prioridade |
| `SENSOR` | Só acordado | Envia telemetria com prioridade |
| `LOST_AND_FOUND` | Sim | Transmite posição regularmente para recuperar o aparelho |
| `TAK`, `TAK_TRACKER` | Sim | Integração com o sistema ATAK, reduz transmissões de rotina |
| `ROUTER` | **Sempre**, com prioridade | Infraestrutura em local estratégico (cume). Aparece na topologia |
| `ROUTER_LATE` | Sempre, mas **por último** | Cobrir "sombra": aglomerado que os roteadores principais não alcançam |
| `REPEATER` | Sempre, com prioridade | Igual ao ROUTER, mas invisível na lista. **Descontinuado** a partir da 2.7.11, segundo a documentação |

`ROUTER_CLIENT` foi descontinuado no firmware 2.3.15.

### Janelas de retransmissão por papel

Segundo o blog "Demystifying ROUTER_LATE", há três janelas de tempo para retransmitir:

| Janela | Quem retransmite nela | Efeito |
|---|---|---|
| Cedo | `ROUTER`, `REPEATER`, `CLIENT_BASE` (para pacotes de/para favoritos) | Fura a fila e faz os clientes cancelarem a sua retransmissão |
| Padrão | Todos os demais, inclusive `CLIENT` | Retransmite se não ouviu ninguém antes |
| Tardia | `ROUTER_LATE`, se ouviu alguém retransmitir antes | "Cede a vez", mas garante cobertura |

### O erro mais comum: `ROUTER` demais

A recomendação oficial (página de dicas e blog "Choosing The Right Device Role"): use `CLIENT`, `CLIENT_MUTE` ou `CLIENT_BASE`, e **evite ROUTER e REPEATER** salvo local excepcional. Razões:

- **Colisões**: dois roteadores vizinhos retransmitem ao mesmo tempo (ambos ignoram a supressão), elevando ruído e taxa de erro.
- **Consumo prematuro de saltos**: um roteador mal colocado (num vale) "come" o contador antes de o pacote alcançar o nó melhor (no morro).
- **Enlaces assimétricos**: uma parte da rede alcança a outra, mas não recebe resposta.
- **Efeito colateral social**: usuários compensam aumentando o hop limit, o que piora o congestionamento.

Um **roteador no telhado da sua casa** é justamente o mau uso. O papel certo é `CLIENT_BASE` (ou `CLIENT`). A regra de ouro do blog: uma rede de `CLIENT` com **poucos** roteadores muito bem colocados é a configuração mais eficiente e estável.

## Canais: rede de rádio versus canal lógico

Duas camadas de "rede" coexistem, e confundir as duas é o erro de iniciante nº 1.

**A malha de rádio.** Nós que compartilham os mesmos parâmetros de modem (**frequência, largura de banda, SF**) formam uma **mesh de rádio**. Um nó só pertence a uma. Nós de meshes diferentes não se ouvem.

**Os canais lógicos.** Sobre a mesh de rádio, um **canal** é um nome mais uma **chave (PSK)**. Cada nó pode ter até **8 canais** (índices 0 a 7; o 0 é o `PRIMARY`, os demais `SECONDARY`, e não pode haver buracos). Só quem tem o mesmo nome e a mesma chave **lê** as mensagens daquele canal. Mas **todos** os nós da mesh de rádio recebem e podem retransmitir pacotes de qualquer canal, ainda que não possam lê-los, conforme o papel e o modo de retransmissão.

A **frequência real** vem do **hash do nome do canal primário** (a menos que se defina o *frequency slot* manualmente). Consequência: dois nós com nomes de canal primário diferentes, no mesmo preset, podem acabar em frequências diferentes e não se enxergarem, mesmo com a "mesma" região. Para redes privadas, a solução é definir o slot de frequência explicitamente.

### Chaves e o canal padrão

O canal padrão tem nome vazio (aparece como `LongFast`) e chave `AQ==`, a chave de 1 byte `0x01`. Essa chave é **pública**: está no código-fonte, qualquer nó a tem. A documentação diz que o canal padrão serve para "testes e canais públicos". Chaves possíveis:

| Tamanho da chave | Significado |
|---|---|
| 0 bytes | Sem criptografia |
| 16 bytes | AES-128 |
| 32 bytes | AES-256 |
| Valores `simple0` a `simple254` | Chaves de 1 byte, **conhecidas** |
| `random` | Gera chave aleatória de 256 bits (a certa para privacidade) |

O convite para um canal é o **QR code / URL de canal**: ele leva o nome, a chave **e as configurações de LoRa**. Só escaneie QR de fonte confiável: ele reconfigura o rádio do seu nó.

## Presets de modem

O preset agrupa largura de banda, SF e taxa de codificação. Tabela da documentação (taxa teórica máxima e margem de enlace com 22 dBm, antena 0 dBi):

| Preset | Taxa | SF | CR | Largura | Margem de enlace |
|---|---|---|---|---|---|
| Short Turbo | 21,88 kbps | 7 | 4/5 | 500 kHz | 140 dB |
| Short Fast | 10,94 kbps | 7 | 4/5 | 250 kHz | 143 dB |
| Short Slow | 6,25 kbps | 8 | 4/5 | 250 kHz | 145,5 dB |
| Medium Fast | 3,52 kbps | 9 | 4/5 | 250 kHz | 148 dB |
| Medium Slow | 1,95 kbps | 10 | 4/5 | 250 kHz | 150,5 dB |
| Long Turbo | 1,34 kbps | 11 | 4/8 | 500 kHz | 150 dB |
| **Long Fast** (padrão) | 1,07 kbps | 11 | 4/5 | 250 kHz | 153 dB |
| Long Moderate | 0,34 kbps | 11 | 4/8 | 125 kHz | 156 dB |
| Long Slow (obsoleto) | 0,18 kbps | 12 | 4/8 | 125 kHz | 158,5 dB |

A página de radio settings lista também presets mais novos (Lite, Narrow, Tiny, Medium Turbo), que não detalho aqui: confira a documentação da sua versão. O preset `VERY_LONG_SLOW` é descrito na página de configuração como "não recomendado para uso regular, pois não forma meshes bem e é pouco confiável". O `SHORT_TURBO`, de 500 kHz, "não é legal em todas as regiões".

Padrão de projeto: **todos os nós de uma mesh precisam do mesmo preset** (ou parâmetros manuais idênticos), senão não se ouvem. O preset default `LongFast` é o do "mesh público": se você quer que seu nó **participe e ajude** a mesh pública, mantenha o `LongFast` e o canal primário padrão.

## Regiões

O parâmetro `lora.region` define a faixa, a potência máxima e o duty cycle do firmware. **Enquanto não for definido, o nó não transmite.** É uma obrigação legal embutida no fluxo. Para o Brasil, a documentação lista duas: `ANZ` (915,0 a 928,0 MHz, 30 dBm, 100% de duty cycle) e `BR_902` (902,0 a 907,5 MHz, 30 dBm, 100%). A Aula 9 discute qual usar e o quadro legal.

## Criptografia (resumo técnico; a Aula 9 discute o que ela protege)

- **Payload de canal**: AES em modo CTR, com uma chave por canal (a página de criptografia fala em AES256-CTR; a chave do canal pode ter 16 bytes, AES-128, ou 32 bytes, AES-256). O cabeçalho vai aberto.
- **Mensagens diretas**: desde o firmware **2.5.0**, protegidas por **criptografia de chave pública (PKC)**. Cada nó tem um par de chaves; a DM é cifrada com a chave pública do destinatário e assinada com a privada do remetente. Antes, uma DM era um pacote do canal com o campo `to` preenchido: **qualquer um do canal a lia**. A troca de chaves acontece via NodeInfo; DMs para nós com firmware antigo (2.4.3 ou menor) **não** são protegidas.
- **Mensagens de administração**: também protegidas desde a 2.5.0, com IDs de sessão.

## MQTT, telemetria e mapa

- **Telemetria**: nível de bateria, tensão, sensores ambientais opcionais, enviada periodicamente pelo canal primário (intervalos na Aula 3).
- **Posição**: o nó com GPS (ou o celular) manda a posição no canal primário, com **precisão configurável** por canal (`position_precision`, de 0 a 32 bits; 13 bits equivalem a cerca de 2,9 km de granularidade, 16 bits a cerca de 364 m).
- **MQTT**: um nó com internet (Wi-Fi ou Ethernet) pode ser **gateway**: sobe (uplink) os pacotes da mesh a um servidor MQTT e desce (downlink) pacotes do servidor para a mesh. O servidor público oficial aplica **política de salto zero** (os pacotes chegam ao nó conectado mas **não se propagam** pela mesh local) e filtra posições precisas (só 10 a 16 bits). O tópico padrão é `msh/REGIAO/2/e/CANAL/ID`. Bandeiras como `OK to MQTT` são um **pedido educado**, não uma proteção criptográfica (a própria documentação diz isso). Servidor privado só deve usar canais com chave própria.
- **Mapa**: aplicativos e sites de comunidades mostram nós dos quais se recebeu um pacote de posição (inclusive via MQTT). Cuidado com a leitura: **o mapa mostra quem foi ouvido, não quem é alcançável**.

## Limites que decorrem da arquitetura

- **Sem ACK fim a fim para broadcast**: só há a confirmação implícita.
- **Sem roteamento global**: a inundação é robusta mas custosa (Aulas 2 e 3).
- **Um canal físico compartilhado** por toda a mesh de rádio.
- **Sem forward secrecy nem autenticação forte nos canais** (Aula 9).

## Resumo

- Meshtastic é firmware para rádios LoRa; o celular é só interface. A mesh é feita dos rádios, que repassam pacotes mesmo sem o app aberto.
- O broadcast usa **inundação gerenciada**: deduplicação por ID, hop limit (padrão 3, máximo 7), atraso menor para SNR baixo e supressão por escuta. DMs, desde a versão 2.6, aprendem um **next hop**.
- Papéis: `CLIENT` é o padrão certo; `ROUTER`/`REPEATER` em lugar errado causam colisões e consumo de saltos; `CLIENT_MUTE` e `CLIENT_BASE` resolvem a maioria dos casos de vários nós próprios.
- Rede de rádio (preset e frequência) e canal lógico (nome e chave) são camadas diferentes. O canal padrão tem chave pública `AQ==`.
- Desde a 2.5.0, DMs usam chave pública. O cabeçalho é sempre aberto.

## Para aprofundar

- [ ] [Mesh Broadcast Algorithm](https://meshtastic.org/docs/overview/mesh-algo/) (Meshtastic, documentação oficial): a descrição autoritativa das camadas, do cabeçalho e da inundação gerenciada, incluindo next hop.
- [ ] [Device Configuration](https://meshtastic.org/docs/configuration/radio/device/) (Meshtastic, documentação oficial): tabela de papéis vigentes e modos de retransmissão.
- [ ] [Choosing The Right Device Role](https://meshtastic.org/blog/choosing-the-right-device-role/) (blog oficial do Meshtastic): por que `ROUTER` demais prejudica a rede.
- [ ] [Meshtastic Explained - Flood Routing & Upcoming Changes!](https://www.youtube.com/watch?v=7v6UbC5blJU) (Meshtastic): explicação curta em vídeo da inundação e do hop limit.
- [ ] [38C3 - Hacker's Guide to Meshtastic: Off-Grid, Encrypted LoRa Meshnets for Cheap!](https://www.youtube.com/watch?v=KRyLt1Ad5iI) (media.ccc.de): palestra do Chaos Communication Congress sobre a arquitetura e as limitações do Meshtastic. Não vi o conteúdo, só confirmei título e canal.

[Próxima aula: Meshtastic na prática](./05%20-%20Meshtastic%20na%20Pratica.md)
