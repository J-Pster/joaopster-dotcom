# Aula 5: LoRaWAN: arquitetura, classes, ativação e segurança

[Voltar ao módulo](./README.md)

*Pergunta que esta aula responde: o que o LoRaWAN acrescenta ao LoRa, quem faz o quê na rede, como um dispositivo entra e fala com segurança, e por que essa rede é uma estrela e não uma malha?*

## Por que LoRaWAN existe

O LoRa (Aulas 1 e 2) só entrega uma camada física com um enquadramento mínimo: dois rádios trocam um pacote. Não há endereço, confirmação, autenticação, criptografia, escolha automática de SF, nem forma de ligar milhares de sensores a um servidor. A analogia com redes é direta, e a própria Semtech a faz: o **LoRaWAN é carregado dentro do payload do pacote LoRa**, "como pacotes IP dentro de quadros Ethernet". LoRa é o cabo e a modulação; LoRaWAN é a camada de enlace e de rede sobre ele.

- **LoRa**: modulação e camada física, proprietária da Semtech (Aula 1).
- **LoRaWAN**: protocolo de rede **aberto**, mantido pela **LoRa Alliance**. Especificação de enlace TS001-1.0.4 (publicada em 2020) e v1.1; parâmetros regionais RP002-1.0.5 (outubro de 2025).

Você pode usar LoRa sem LoRaWAN (Aula 7, Meshtastic, Reticulum) e pode usar LoRaWAN sem entender de rádio, mas para o objetivo do curso vale saber o que ele resolve e o que ele custa.

## Os elementos

O modelo é uma **estrela de estrelas**: os dispositivos falam com gateways e os gateways falam com um servidor central por uma rede IP comum.

```
 [Sensor] --LoRa--> [Gateway] --\
 [Sensor] --LoRa--> [Gateway] ---+-- IP --> [Servidor de rede (NS)] --> [Servidor de aplicação (AS)]
 [Sensor] --LoRa--> [Gateway] --/                     |
                                                 [Join Server]
```

- **Dispositivo final** (*end device*): sensor ou atuador, geralmente a bateria, que transmite por LoRa.
- **Gateway**: recebe qualquer pacote LoRa que ouça e o repassa ao servidor pela internet (Ethernet, Wi-Fi, celular). Segundo a Semtech, gateways "operam inteiramente na camada física": só conferem o **CRC**, descartam pacote com CRC errado e mandam o resto ao servidor com metadados (RSSI, SNR, carimbo de tempo). Nos downlinks, cumprem a ordem do servidor sem interpretar o conteúdo.
- **Servidor de rede** (*Network Server*, NS): o cérebro. Segundo a documentação do TTN, ele valida a autenticidade e a integridade das mensagens, **elimina duplicatas** (o mesmo uplink chega por vários gateways), escolhe o melhor gateway para o downlink, envia comandos de **ADR**, responde comandos MAC e roteia o payload ao servidor de aplicação.
- **Servidor de aplicação** (*Application Server*, AS): processa os dados do dispositivo (decodifica, guarda, integra com bancos e painéis) e gera os downlinks de aplicação.
- **Join Server**: guarda as chaves-raiz e cuida da ativação segura (introduzido na versão 1.1, também presente na 1.0.4).

Não há **associação** entre dispositivo e gateway. Cada uplink é ouvido por todos os gateways ao alcance, e o servidor mantém uma cópia. Isso reduz a taxa de perda (a chance de pelo menos um gateway ouvir é alta) e economiza bateria de dispositivos móveis. O acesso ao canal é do tipo **ALOHA**: o dispositivo transmite quando quer, sem escutar antes, e aceita a chance de colisão.

## Estrutura do quadro

O que vai dentro do pacote LoRa (`PHYPayload`), segundo a especificação e a documentação do TTN:

```
MHDR (1)  |  MACPayload = [ FHDR = DevAddr (4) + FCtrl (1) + FCnt (2) + FOpts (0 a 15) ] + [ FPort (0 a 1) ] + [ FRMPayload (N) ]  |  MIC (4)
```

- `MHDR`: tipo da mensagem (join-request, dados confirmados ou não, etc.).
- `DevAddr`: endereço de 32 bits do dispositivo na rede, atribuído na ativação.
- `FCnt`: contador de quadros (2 bytes), que impede repetição de mensagens capturadas.
- `FPort`: 0 significa que o payload é comando MAC; de 1 a 223, dado de aplicação.
- `MIC`: código de integridade de 4 bytes.

**Overhead fixo: 13 bytes** (1 + 4 + 1 + 2 + 1 + 4), sem `FOpts`. Um dado de aplicação de 20 bytes vira um pacote LoRa de **33 bytes**, e o tempo no ar cresce em consequência:

| SF (125 kHz, CR 4/5) | ToA de 33 bytes | Contra 20 bytes sem LoRaWAN |
|---|---|---|
| 7 | 71,9 ms | 56,6 ms |
| 12 | 1.810 ms | 1.319 ms |

Além disso, o uplink LoRaWAN leva o cabeçalho LoRa (PHDR), o CRC do cabeçalho e o CRC do payload; o downlink não leva CRC do payload (especificação 1.0.3).

## Classes A, B e C

Todo dispositivo LoRaWAN implementa a **classe A**; B e C são extensões (TTN):

- **Classe A (todos os sensores a bateria).** O dispositivo transmite quando quiser. Depois de cada uplink, abre **duas janelas de recepção curtas** (RX1 e RX2), depois de atrasos (*RX delay*). Pelos parâmetros regionais, o valor de referência é RECEIVE_DELAY1 = 1 s e RECEIVE_DELAY2 = 2 s. Se o servidor não responde nessas janelas, o próximo downlink só sai depois do próximo uplink. Consumo mínimo, **latência alta** de downlink.
- **Classe B.** Acrescenta janelas de recepção agendadas (*ping slots*), sincronizadas por **beacons** que a rede transmite periodicamente. Latência de downlink moderada; a bateria dura menos. Exemplos: medidores e iluminação pública.
- **Classe C.** A janela RX2 fica **aberta o tempo todo**, exceto quando o dispositivo transmite. Latência mínima, consumo alto: dispositivos ligados à energia elétrica (alarmes, atuadores).

## ADR: adaptação automática de taxa

O **Adaptive Data Rate** deixa o **servidor** escolher SF e potência de cada dispositivo estático. O mecanismo, segundo a documentação do TTN:

- O servidor guarda os SNR dos últimos uplinks (a The Things Stack usa os 20 mais recentes).
- Calcula a **margem** como o SNR medido (melhor gateway) menos o SNR exigido pelo SF em uso (a tabela da Aula 1).
- Se a margem é grande, pede ao dispositivo para aumentar a taxa (baixar o SF) ou baixar a potência.

**Exemplo da documentação:** uplink em SF12 com SNR de 5,0 dB. O SNR exigido em SF12 é -20 dB, então a margem é 25 dB. Passar para SF7 (exigência de -7,5 dB) ainda deixaria 12,5 dB de margem, com **muito** menos tempo no ar e energia. O ADR deve ser ligado para dispositivos parados, e desligado para os que se movem ou têm rádio instável. Quem decide se usa ADR é o **dispositivo**, por um bit no cabeçalho; e o dispositivo pede uma confirmação do servidor a cada 64 uplinks sem downlink (parâmetro `ADR_ACK_LIMIT` = 64 no documento regional).

Essa mesma conta de **margem = SNR medido - SNR exigido** é uma ferramenta de campo (Aula 8).

## Ativação: OTAA e ABP

Todo dispositivo precisa estar registrado antes de falar. Há dois métodos (TTN):

- **OTAA** (*Over-The-Air Activation*), o recomendado. O dispositivo guarda `JoinEUI` (antigo `AppEUI`), `DevEUI` e a chave-raiz **`AppKey`** (AES-128, secreta). Ele envia um **Join-request** (não cifrado, com `DevNonce` de 2 bytes aleatório, autenticado por um MIC calculado com a `AppKey`, e a `AppKey` **nunca** trafega). O servidor responde com **Join-accept** (cifrado com a `AppKey`) contendo o `DevAddr` e parâmetros. Os dois lados derivam as chaves de sessão. A cada nova ativação as chaves mudam, e o `DevNonce` repetido é rejeitado, o que impede repetição de join.
- **ABP** (*Activation By Personalization*): você grava no dispositivo `DevAddr` e as chaves de sessão. Não há troca de join. É menos seguro, não muda de operadora sem regravar chaves e tem uma armadilha de desenvolvimento: **os contadores de quadro voltam a zero a cada reinicialização**, e o servidor rejeita mensagens com contador menor que o último visto (o TTN recomenda registrar o dispositivo de novo a cada reset).

## Chaves e segurança

O LoRaWAN 1.0.x usa **AES-128** com três tipos de chave de 128 bits (TTN):

- **`AppKey`**: raiz, só o dispositivo e o servidor de aplicação/join conhecem.
- **`NwkSKey`** (chave de sessão de rede): calcula e confere o **MIC** de cada mensagem (AES-CMAC). Garante **integridade e autenticidade** para o servidor de rede.
- **`AppSKey`** (chave de sessão de aplicação): **cifra o payload** de ponta a ponta entre o dispositivo e o servidor de aplicação. O servidor de rede, que roteia a mensagem, **não consegue ler o dado**.

Na versão 1.1, a chave-raiz se divide em `NwkKey` e `AppKey`, e surgem chaves para criptografar comandos e *rejoin* (o Join-accept usa `NwkKey` e, em rejoin, uma chave derivada `JSEncKey`, segundo a tabela do TTN).

Quatro limites que você precisa ter claros:

1. **A rede é pública no ar.** Qualquer receptor ouve o pacote. O que protege é a criptografia do payload e o MIC, não o sigilo do canal. A própria documentação do TTN diz que o chirp "não é usado para esconder o sinal", e sim por robustez.
2. **Metadados não são cifrados** de ponta a ponta: quem opera o servidor de rede vê quem transmitiu, quando, com que RSSI e SNR, e por qual gateway.
3. **As chaves ficam no firmware.** Quem extrai a memória do dispositivo obtém as chaves.
4. **Com ABP as chaves de sessão são fixas** enquanto você não as trocar.

A proteção contra repetição depende do **contador de quadros**: uma mensagem com `FCnt` menor que a última é ignorada.

## Plano AU915 (o do Brasil): canais e taxas

Segundo os Regional Parameters (versão 1.0.3 rev A, seção AU915-928):

- **Uplink, 64 canais de 125 kHz**, numerados de 0 a 63, de 915,2 MHz a 927,8 MHz em passos de 200 kHz, com DR0 a DR5.
- **Uplink, 8 canais de 500 kHz** (64 a 71), de 915,9 MHz a 927,1 MHz em passos de 1,6 MHz, com DR6.
- **Downlink, 8 canais de 500 kHz**, de 923,3 MHz a 927,5 MHz em passos de 600 kHz.
- Sync word LoRaWAN: `0x34`, preâmbulo de 8 símbolos.

| DR | Modulação (uplink) | Taxa indicativa |
|---|---|---|
| 0 | SF12 / 125 kHz | 250 bit/s |
| 1 | SF11 / 125 kHz | 440 bit/s |
| 2 | SF10 / 125 kHz | 980 bit/s |
| 3 | SF9 / 125 kHz | 1.760 bit/s |
| 4 | SF8 / 125 kHz | 3.125 bit/s |
| 5 | SF7 / 125 kHz | 5.470 bit/s |
| 6 | SF8 / 500 kHz | 12.500 bit/s |

Os downlinks usam DR8 a DR13 (SF12 a SF7 em 500 kHz). Atenção: os valores de 250 e 440 bit/s são menores que os brutos da Aula 2 por causa da otimização de baixa taxa.

**Sub-bandas.** Como um gateway comum ouve só **8 canais de uplink** ao mesmo tempo, o AU915 é dividido em 8 grupos (*sub-bands*), cada um com 8 canais de 125 kHz mais um de 500 kHz. O dispositivo precisa usar os canais que o gateway escuta. O TTN adota a **sub-banda 2** (canais 8 a 15, mais o canal 65): uplinks em 916,8 a 918,2 MHz e o canal de 500 kHz em 917,5 MHz (SF8/500). Para o Brasil, o TTN mantém planos com sufixo `_BR` e o rótulo "dwell time disabled" (Brazil 915-928 MHz, FSB 1 a 8).

**Join.** O dispositivo AU915 envia o Join-request em DR2 (SF10/125) num canal aleatório de 125 kHz, alternando com um canal de 500 kHz em DR6.

**Tamanho de payload** (sem limite de *dwell*): DR0, DR1 e DR2 carregam até **51 bytes** de aplicação; DR3, 115; DR4 e DR5, 222. Se o regulamento local impusesse 400 ms de *dwell* no uplink, DR0 e DR1 não estariam disponíveis e DR2 carregaria só 11 bytes (mesma tabela). A Aula 4 deixou em aberto como a Anatel trata esse limite de tempo por frequência; os planos do TTN para o Brasil adotam a opção sem limite.

## Por que é uma estrela e não uma malha

A pergunta que este curso pede: uma rede pessoal deveria ser mesh. Por que o LoRaWAN não é?

1. **Bateria e sono.** O dispositivo classe A dorme quase o tempo todo e só escuta depois de transmitir. Um nó que retransmite para os outros teria de escutar sempre. A vida útil de anos (a Semtech cita até 10 anos) acaba.
2. **Gateways fazem o trabalho pesado.** Concentradores como o SX1302/SX1303 escutam oito ou mais canais e várias SFs em paralelo, alimentados por tomada e com antena alta (Aula 6). Isso concentra a inteligência de recepção onde há energia e visão do céu.
3. **O servidor tem visão global.** Deduplicar, escolher gateway de downlink, aplicar ADR e checar contadores exige que todos os quadros passem por um lugar só.
4. **Capacidade.** ALOHA em canal compartilhado não escala bem se cada pacote for repetido por vários saltos: o mesmo dado ocuparia o ar várias vezes (tempo no ar da Aula 2, multiplicado).
5. **Simplicidade e previsibilidade.** Um salto para o gateway, depois IP. É fácil de calcular, de planejar cobertura (Módulo 2) e de certificar.

O preço é a **dependência de infraestrutura**: sem gateway e sem backhaul IP, nada anda, e o servidor (seu ou de terceiros) enxerga tudo o que passa.

Há exceções e extensões que mostram o limite dessa escolha:

- **LoRaWAN Relay (TS011, versões 1.0.0 e 1.0.1)** da LoRa Alliance: um dispositivo com função de relé transporta quadros entre um dispositivo sem cobertura e o gateway. É um salto adicional padronizado, para cobrir pontos cegos, e não uma malha geral.
- **ChirpStack Gateway Mesh**: projeto do ChirpStack (licença MIT) para gateways retransmitirem entre si quando um deles não tem backhaul. É extensão do ecossistema, não parte da especificação da Aliança.
- **Meshtastic, MeshCore e Reticulum** usam LoRa com lógica de malha e sem servidor central: é o tema dos [Módulos 9 e 10](../09%20-%20Redes%20Mesh/README.md).

## Carga útil: projete pequeno

Como cada byte custa tempo no ar e `FPort` e MIC já gastam 13 bytes (mais o dado), o padrão é **enviar binário compacto** (por exemplo, temperatura em 2 bytes) e decodificar no servidor. Formatos como o Cayenne LPP têm suporte em alguns servidores. Não mande JSON num dispositivo LoRaWAN.

## Resumo

- LoRaWAN é o protocolo aberto de rede (LoRa Alliance) carregado dentro do pacote LoRa; acrescenta endereço, ADR, ativação e segurança.
- Elementos: dispositivos, gateways (só repassam e checam CRC), servidor de rede (dedup, ADR, roteamento), join server e servidor de aplicação. Não há associação dispositivo-gateway.
- Classe A: duas janelas de recepção após cada uplink (consumo mínimo, latência alta); B: com ping slots; C: escuta contínua.
- OTAA gera chaves de sessão AES-128 a cada join a partir da `AppKey`; ABP usa chaves fixas. `NwkSKey` garante integridade; `AppSKey` cifra o payload de ponta a ponta. Metadados continuam visíveis para o operador da rede.
- O Brasil usa o plano AU915 (64 + 8 canais, DR0 a DR6, sub-banda 2 no TTN). O overhead fixo do quadro é de 13 bytes.
- É estrela porque o dispositivo precisa dormir, o gateway concentra a recepção e o servidor precisa ver todos os quadros; relé e mesh existem como extensões e como projetos próprios.

## Para aprofundar

- [ ] [LoRaWAN Architecture](https://www.thethingsnetwork.org/docs/lorawan/architecture/) (The Things Network): papéis de dispositivo, gateway, servidores de rede, aplicação e join.
- [ ] [Device Classes](https://www.thethingsnetwork.org/docs/lorawan/classes/), [End Device Activation](https://www.thethingsnetwork.org/docs/lorawan/end-device-activation/), [Security](https://www.thethingsnetwork.org/docs/lorawan/security/) e [Adaptive Data Rate](https://www.thethingsnetwork.org/docs/lorawan/adaptive-data-rate/) (The Things Network): as páginas em que baseei os quatro tópicos.
- [ ] [TS001-1.0.4 LoRaWAN L2 1.0.4 Specification](https://resources.lora-alliance.org/technical-specifications/ts001-1-0-4-lorawan-l2-1-0-4-specification) (LoRa Alliance): a especificação de enlace.
- [ ] [#112 LoRa / LoRaWAN De-Mystified / Tutorial](https://www.youtube.com/watch?v=hMOwbNUpDQA) (Andreas Spiess): vídeo cujo título trata de desmistificar LoRa e LoRaWAN; conteúdo não assistido.
- [ ] [LoRa Explained: How It Differs from LoRaWAN](https://www.youtube.com/watch?v=CweHMNx46qQ) (Hacker University): vídeo curto sobre a diferença; conteúdo não assistido.
- [ ] [TS011-1.0.1 Relay](https://resources.lora-alliance.org/technical-specifications/ts011-1-0-1-relay) (LoRa Alliance): a especificação de relé que estende a estrela.

[Próxima aula: Redes: The Things Network, ChirpStack, Helium e gateway próprio](./06%20-%20Redes%20TTN%20ChirpStack%20Helium%20e%20Gateway%20Proprio.md)
