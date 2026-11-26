[Voltar ao módulo](./README.md)

# Aula 5: Interfaces e como ligar meios diferentes

*Pergunta que esta aula responde: como uma mesma rede Reticulum junta LoRa, Wi-Fi, internet e packet radio sem que o restante da pilha saiba a diferença, e como se monta um gateway entre um segmento LoRa lento e uma rede rápida sem afogar o LoRa?*

> Verificado em setembro de 2026 no manual oficial (*Configuring Interfaces*, *Getting Started Fast*, *Building Networks*, *Communications Hardware*; páginas com rodapé de versão 1.4.2 a 1.5.4) e no código do RNS 1.5.4. As chaves de configuração vêm dos exemplos do manual. **Confira `rnsd --exampleconfig` na sua versão.** Aviso legal sobre rádio nesta aula: veja também a Aula 8 e o Módulo 5, Aula 6.

## Por que existe o conceito de interface

Na Aula 1: o Reticulum é agnóstico de meio. O mecanismo é a **interface**: um módulo de software que sabe (a) receber bytes do meio e entregar à pilha e (b) pegar pacotes da pilha e colocar no meio. Todo o resto (endereços, announces, links) roda **acima** da interface e não sabe se o pacote foi por LoRa ou por TCP. Em termos de programação, é o padrão de projeto *strategy*: a mesma API, várias implementações.

Consequência prática: o manual diz que você só precisa configurar **por quais interfaces** falar, e o Reticulum "decide automaticamente quais são adequadas em cada situação". Você lista as interfaces no arquivo `~/.reticulum/config`, na seção `[interfaces]`.

## Catálogo de interfaces (manual, capítulo *Configuring Interfaces*)

| Tipo (`type =`) | Meio | Observações confirmadas |
|---|---|---|
| `AutoInterface` | Ethernet e Wi-Fi locais | Descoberta de pares via **IPv6 link-local** e transporte UDP. Não precisa de roteador, DHCP nem configuração. Se houver firewall, libere UDP **29716** e **42671**. Roteadores baratos que isolam clientes podem bloquear |
| `BackboneInterface` | TCP sobre IPv4/IPv6 | Muito rápida e leve, backend por eventos do kernel, **só em Linux e Android**. Compatível com `TCPServerInterface` e `TCPClientInterface`; o manual recomenda usá-la quando disponível |
| `TCPServerInterface`, `TCPClientInterface` | Internet ou redes IP privadas | Toleram enlaces intermitentes e reconectam sozinhos. Vários clientes conectam a um servidor. Opção `kiss_framing` só para dispositivos externos (soundmodems), **nunca** entre um Client e um Server Reticulum |
| `UDPInterface` | UDP em redes IP | Permite difusão local. O manual diz que o **AutoInterface é melhor** para isso, principalmente em Wi-Fi |
| `I2PInterface` | Rede I2P | Precisa de um roteador I2P local (o manual recomenda `i2pd`). Dá endereço globalmente alcançável mesmo atrás de NAT e sem IP público |
| `RNodeInterface` | **LoRa** via RNode | Porta serial, `tcp://` (RNode com Wi-Fi) ou `ble://` (Bluetooth LE). Parâmetros de rádio: frequência, largura de banda, potência, spreading factor, coding rate. Aula 6 |
| `RNodeMultiInterface` | RNode com vários transceptores | Sub-interfaces individuais (exemplo do manual: 2,4 GHz e 865,6 MHz no mesmo dispositivo) |
| `SerialInterface` | Porta serial | Fio, rádios de dados, lasers |
| `PipeInterface` | Qualquer programa via stdin/stdout | Cola para hardware ou protocolos exóticos (o manual cita túneis por ICMP como exemplo de comunidade) |
| `KISSInterface` | TNC de packet radio (KISS) | Inclui `id_callsign` e `id_interval` para beacons de identificação |
| `AX25KISSInterface` | TNC via KISS com **encapsulamento AX.25** | O manual avisa: só use se realmente precisar. O Reticulum não precisa do AX.25 e o encapsulamento **adiciona sobrecarga** por pacote; prefira o KISS simples com beacon |
| Interfaces customizadas | Qualquer coisa | Módulos Python carregados em tempo de execução, em pé de igualdade com os nativos |

Há ainda módulos de comunidade citados no manual (ex.: sobre HTTP, DNS, HF, `Modem73` para modems OFDM via KISS). Trate-os como experimentais.

### Windows, Linux, Android

Na sua máquina Windows, **`BackboneInterface` não está disponível**: use `TCPServerInterface` e `TCPClientInterface` (são compatíveis com ela). `AutoInterface` funciona em qualquer sistema com IPv6 link-local.

## Opções comuns e o que elas significam para uma rede mista

Todas as interfaces aceitam (lista abreviada do manual):

- `enabled` (ou `interface_enabled`, ambos aceitos pelo código): **padrão falso**. A interface só sobe se estiver habilitada.
- `mode`: comportamento da interface, abaixo.
- `network_name` e `passphrase`: **IFAC**, abaixo.
- `announce_cap`: teto de banda para announces (**padrão 2%**, Aula 3).
- `outgoing`: se falso, a interface só recebe.
- `bitrate`: taxa em bits por segundo, quando o hardware não informa.
- `bootstrap_only`: interface temporária para descobrir conectividade melhor (abaixo).
- `announce_rate_target`, `announce_rate_grace`, `announce_rate_penalty`: contenção de announces por destino.
- `gravity`: afinidade de caminho.

### Modos de interface: dizer ao Reticulum o papel de cada enlace

O modo padrão é `full`. Os outros existem porque a rede não é homogênea: um enlace de 1 Gbps e um de 1,3 kbps não podem tratar announces da mesma forma.

| Modo | Para que serve (manual) |
|---|---|
| `full` | Descoberta, malha e transporte completos. Padrão |
| `gateway` (`gw`) | Como `full`, mas **descobre caminhos desconhecidos em nome dos clientes** daquela interface: se um cliente pede o caminho de um destino que não conhece, o gateway o procura pelas outras interfaces e devolve. Deve ser aplicado à **interface voltada aos clientes**, não à voltada à rede ampla |
| `access_point` (`ap`) | Interface "silenciosa": **não transmite announces automaticamente** e os caminhos nela expiram mais rápido (1 dia no código). Bom para um rádio de área ampla onde usuários aparecem, usam e somem |
| `roaming` | Para interfaces **fisicamente móveis**, do ponto de vista dos outros nós (ex.: o LoRa de um veículo). Caminhos expiram mais rápido (6 h no código) |
| `boundary` | Liga a segmentos **muito diferentes** do seu (ex.: você está numa rede LoRa e tem um enlace rápido para a internet). Announces que chegam por uma interface `boundary` **não** são propagados às interfaces `internal` |
| `internal` | Interfaces de uma rede diferente das marcadas `boundary`. Announces fluem de `internal` para `boundary`, mas não o inverso. Os pedidos de caminho recursivos ficam ativos por padrão nelas, então o lado interno ainda resolve caminhos do outro lado sob demanda |

Se o seu nó não é transport node, o manual diz que quase nunca vale a pena mexer nos modos.

## IFAC: redes virtuais e redes fechadas na mesma frequência

**IFAC** (*Interface Access Code*) é o mecanismo para criar **redes privadas sobre um meio compartilhado** ou restringir quem entra em uma interface. Configuração: `network_name` e/ou `passphrase`.

Como funciona (manual, *Protocol Specifics*): a interface deriva uma identidade Ed25519 compartilhada a partir do nome e da senha, **assina cada pacote de saída** e coloca a assinatura (completa de 512 bits ou truncada, de 8 a 512 bits, `ifac_size`) no pacote como código de acesso. O receptor verifica e **descarta** o que não confere. Aplica-se a qualquer tipo de interface, inclusive legados como modems. Você pode misturar interfaces abertas e autenticadas no mesmo sistema. O `rnstatus` mostra o tamanho do IFAC em uso.

O que o IFAC **é**: controle de acesso à interface e separação de redes lógicas (dois grupos na mesma frequência LoRa sem se misturar). O que **não é**: substituto da criptografia fim a fim (essa continua em todo pacote Single); e quem conhece a senha vê o que a rede vê. No manual (*Building Networks*): num pacote com IFAC, um observador de fora "não consegue determinar nada".

## Como uma rede une meios diferentes

Recapitulando as peças das aulas anteriores, montam-se assim:

1. Cada meio vira uma interface no `config`.
2. Um nó com **mais de uma interface e `enable_transport = Yes`** vira ponte: o que ele ouve numa interface, se for announce, é retransmitido nas demais (respeitando modos, `announce_cap` e prioridade por proximidade).
3. Pacotes de dados entre dois nós em meios diferentes seguem a tabela de caminhos (Aula 3) através dessa ponte, sem tradução de endereços, porque o endereço é o mesmo hash em todo lugar.

O exemplo do manual (*What is Reticulum?*): um Raspberry Pi ligado a um rádio LoRa, a um TNC de packet radio e a uma rede Wi-Fi. Depois de adicionar as interfaces, "o Reticulum cuida do resto" e qualquer dispositivo no Wi-Fi conversa com os nós do LoRa e do packet radio, e vice-versa.

Desenho recomendado pelo *Getting Started Fast*: se você já tem uma rede Wi-Fi e muitos dispositivos que querem usar os mesmos caminhos externos (por exemplo, LoRa), basta **um sistema atuar como gateway**: adicione as interfaces externas na configuração dele, habilite transport nele, e os demais dispositivos usam só o `AutoInterface` padrão.

### Exemplo de gateway LoRa mais Wi-Fi mais internet

Composição minha a partir dos exemplos do manual; os valores de rádio são **marcadores**, não recomendações. Frequência, potência e demais parâmetros de LoRa dependem da sua região e do regime legal (Módulo 8 e Módulo 5, Aula 6).

```
[reticulum]
enable_transport = Yes

[interfaces]

  # Rede local (celulares e notebooks da casa)
  [[Default Interface]]
    type = AutoInterface
    enabled = yes

  # Lado LoRa (segmento lento, do seu bairro)
  [[RNode LoRa]]
    type = RNodeInterface
    enabled = yes
    port = /dev/ttyUSB0
    frequency = <Hz da sua região e do seu regime legal>
    bandwidth = <Hz>
    txpower = <dBm>
    spreadingfactor = <7 a 12>
    codingrate = <5 a 8>

  # Enlace para uma rede rápida (internet): segmento "muito diferente" do LoRa
  [[Internet Uplink]]
    type = TCPClientInterface
    enabled = yes
    target_host = <host do seu ponto de entrada>
    target_port = <porta>
    mode = boundary
```

Por que `boundary` no enlace de internet: os announces da rede global (rápida, com milhares de destinos) **não são jogados no seu LoRa** (que caberia menos de cem por hora, Aula 3), mas os announces dos nós LoRa **sobem** para a rede maior, e os nós do lado LoRa resolvem, por pedido de caminho recursivo, os destinos do outro lado que realmente precisam. É o desenho do manual para "um segmento lento conectado a uma rede pública rápida". Quantos e quais parâmetros mais ajustar (`announce_rate_target`, modo do RNode etc.): confira o *Configuring Interfaces* da sua versão.

## Encontrar conectividade: o testnet, o backbone e a descoberta de interfaces

O Reticulum **não é uma rede a que se "entra"**, mas existe uma **rede voluntária global**: o manual chama de "distributed backbone" uma coleção heterogênea de transport nodes públicos e privados, sem coordenação central, operados por voluntários. O manual não lista servidores fixos. Ele aponta para diretórios mantidos pela comunidade (`directory.rns.recipes` e `rmap.world`, citados no manual e na página oficial de conexão) e adverte:

- **Não dependa de poucos pontos de entrada fixos.** Depender de uma lista pequena de IPs públicos "torna a rede frágil, centralizada". O manual diz: "você tem uma responsabilidade aqui."
- Use **mais de uma conexão redundante** e **descoberta de interfaces**.

### Descoberta e conexão automática

Desde versões recentes (documentada no manual 1.5.x), o Reticulum publica e descobre interfaces **pela própria rede**:

- Quem hospeda um ponto de entrada coloca `discoverable = yes` na interface. O nó passa a emitir announces periódicos (padrão a cada 360 min) com o endereço, a localização opcional e um **selo criptográfico de custo computacional** (*stamp*, prova de trabalho, valor padrão 14) que encarece o spam.
- Quem quer descobrir liga `discover_interfaces = yes` em `[reticulum]` e lista com `rnstatus -d` (detalhes e trecho de configuração pronto com `rnstatus -D`).
- `autoconnect_discovered_interfaces = N` (padrão 0) deixa o Reticulum conectar sozinho a até N interfaces descobertas, e `interface_discovery_sources` restringe a quais identidades de rede você confia.
- `bootstrap_only = yes` numa interface a usa **só para descobrir** conectividade melhor e depois a desliga.

A ideia do manual, "infraestrutura pessoal": em vez de ligar todos os aparelhos da casa ao gateway público, coloque um Raspberry Pi (ou roteador) como **seu transport node**, com um túnel de bootstrap e um RNode, que descobre vizinhos locais e forma links diretos. O tráfego passa a fluir por caminhos locais de outras pessoas reais, não por um servidor distante.

O **Network Identity** (identidade de rede) é uma identidade comum usada para assinar (e opcionalmente cifrar) esses announces de descoberta, para você aceitar só interfaces de redes em que confia. Ela é gerada com `rnid -g` e configurada em `network_identity` na seção `[reticulum]`. Requer `pip install lxmf` no ambiente para a descoberta funcionar (manual).

**Sobre segurança da descoberta:** o manual avisa que um announce de descoberta é "um convite para conectar ao seu sistema" e revela que existe um nó conectável ali (e a localização, se você informar). Em cenário que exige sigilo operacional, avalie antes de anunciar.

### Hospedar um ponto de entrada público (só entenda; não é o caso do lab)

O manual recomenda `BackboneInterface` em `mode = gateway`, com `announce_rate_target`, `announce_rate_penalty` e `announce_rate_grace` sensatos (exemplo 3600, 3600 e 6). Para um ponto privado, use `network_name` e `passphrase` (IFAC). Quem hospeda também precisa de IP público alcançável.

## Internet: TCP, I2P e o que cada um revela

| Interface | Vantagem | Custo |
|---|---|---|
| TCP/Backbone | Mais rápida, menor latência, mais eficiente | **Revela o IP** das duas pontas a quem inspecionar; o adversário pode registrar tamanho e horário dos pacotes e notar que é Reticulum; exige IP público alcançável para hospedar |
| I2P | Cifra e mistura o tráfego, oculta os IPs, funciona atrás de NAT | Mais lenta e com mais latência; exige rodar um roteador I2P |

Regra do manual: quer hospedar algo acessível publicamente e preservar anonimato, use I2P. Quer desempenho e configuração simples, use TCP.

## Gateways e a lei

Um gateway LoRa para TCP é **uma escolha técnica**, mas o regime legal do rádio dele importa (Módulo 5, Aulas 5 e 6):

- Em **radiação restrita** (faixa ISM com equipamento certificado), o gateway é permitido pelo regime desde que respeite os requisitos técnicos do equipamento.
- Sob **licença de radioamador**, o Ato de requisitos da Anatel e a Res. 777/2025 (art. 10-B, § 2º, conforme o Módulo 5) **vedam usar a estação amadora como trânsito de tráfego entre redes de telecomunicações**, salvo emergência. Um gateway de radioamador que ligue o ar amador à internet como ponte de tráfego contraria isso. Não misture os dois regimes no mesmo nó.

## Resumo

- Interface é o módulo que liga a pilha a um meio. Você lista interfaces no `config`; a pilha decide onde usar cada uma. O restante do Reticulum é o mesmo em LoRa ou TCP.
- Principais: `AutoInterface` (LAN, sem configuração), `TCP`/`Backbone` (internet, Backbone só em Linux e Android), `I2P`, `RNodeInterface` (LoRa), `Serial`, `Pipe`, `KISS` e `AX25KISS` (packet radio; AX.25 só se necessário).
- Modos de interface (`full`, `gateway`, `access_point`, `roaming`, `boundary`, `internal`) ensinam a pilha o papel de cada enlace; num gateway entre LoRa e internet, o enlace rápido é `boundary`, para não afogar o LoRa com announces.
- IFAC (`network_name`, `passphrase`) assina cada pacote da interface e descarta o que não confere: redes privadas ou virtuais sobre meio compartilhado.
- Ponte entre meios = um nó com várias interfaces e `enable_transport = Yes`; o gateway resolve caminhos por pedido recursivo.
- Para achar conectividade, use descoberta de interfaces e infraestrutura pessoal, não uma lista fixa de IPs públicos.
- TCP revela IPs; I2P oculta. Gateways com rádio amador para internet têm restrição legal; em ISM certificado, o regime é outro.

## Para aprofundar

- [ ] [Configuring Interfaces](https://reticulum.network/manual/interfaces.html) (manual oficial): todos os tipos, opções comuns, modos, descoberta e controle de announces, com exemplos de configuração.
- [ ] [Getting Started Fast: Bootstrapping Connectivity, Build Personal Infrastructure, Hosting Public Entrypoints](https://reticulum.network/manual/gettingstartedfast.html) (manual oficial): a filosofia de conectividade e o desenho recomendado.
- [ ] [Bootstrapping Connectivity](https://reticulum.network/connect.html) (site oficial): resumo de como se conectar ao backbone voluntário.
- [ ] [Building Networks](https://reticulum.network/manual/networks.html) (manual oficial): destinos, transport nodes, redes sem confiança e conectividade heterogênea.
- [ ] [Reticulum - Wi-Fi + LoRa RNode Transport Architecture and Field Test](https://www.youtube.com/watch?v=KZuDMd5iThA) (The Tech Prepper): teste de campo combinando Wi-Fi e LoRa; não assisti, título e canal confirmados por oEmbed.
- [ ] [Reticulum - Encrypted Packet Radio + WiFi Network Demo](https://www.youtube.com/watch?v=NSOOJW66E9A) (The Tech Prepper): demonstração de um gateway entre packet radio e Wi-Fi; não assisti. Lembre da restrição de criptografia em rádio amador (Aula 8).
- [ ] [Módulo 9: Redes Mesh](../09%20-%20Redes%20Mesh/README.md): contraste com a mesh de flooding.

[Próxima aula: RNode, instalação e utilitários](./06%20-%20RNode%20Instalacao%20e%20Utilitarios.md)
