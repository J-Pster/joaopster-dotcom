[Voltar ao módulo](./README.md)

# Aula 6: RNode, instalação e utilitários

*Pergunta que esta aula responde: que hardware transforma uma placa LoRa em interface Reticulum, como instalo e configuro a pilha no meu computador, e quais ferramentas de linha de comando me dizem o que a rede está fazendo?*

> Verificado em setembro de 2026 no manual oficial (*Using Reticulum on Your System*, *Getting Started Fast*, *Communications Hardware*), nos repositórios do RNS 1.5.4 e do RNode Firmware e por instalação e execução real do `rns` 1.5.4 em Windows 11 com Python 3.13 (ver notas). Parâmetros de rádio: **confira sempre o Módulo 8 e o regime legal (Módulo 5, Aula 6) antes de transmitir.**

## Por que o RNode existe

Um chip LoRa sozinho (Módulo 8) não fala com um computador nem resolve a MAC. O Reticulum precisa de um "adaptador de rede de rádio" simples: uma interface que recebe pacotes do computador e os transmite com os parâmetros LoRa que você escolher, e devolve o que ouvir, com RSSI e SNR. Isso é o **RNode**.

O manual insiste em três pontos:

1. **RNode não é um produto nem um fabricante.** É uma **plataforma aberta**: um firmware livre que transforma placas LoRa comuns em transceptores compatíveis entre si, mais o software para instalá-lo.
2. **RNode não é LoRaWAN.** Usa modulação LoRa "crua", sem protocolo de rede LoRaWAN por cima. A camada MAC é própria; toda a funcionalidade de alto nível é do Reticulum. Uma placa "LoRaWAN" de fábrica não serve sem o firmware certo.
3. O **dispositivo de referência** da pilha é um RNode em 430, 868 ou 900 MHz, conectado por USB a um computador Linux com Python. O manual estima um nó completo em torno de US$ 100 (ele mesmo avisa que isso depende de preços).

### Placas suportadas pelo instalador automático (manual, versão 1.5.1)

| Placa | Chip de rádio | Plataforma |
|---|---|---|
| LilyGO T-Beam Supreme | SX1262 ou SX1268 | ESP32 |
| LilyGO T-Beam | SX1262, SX1268, SX1276 ou SX1278 | ESP32 |
| LilyGO T3S3 | SX1262, SX1268, SX1276 ou SX1278 | ESP32 |
| LilyGO LoRa32 v1.0, v2.0, v2.1 | SX1276 ou SX1278 | ESP32 |
| LilyGO T-Deck | SX1262 ou SX1268 | ESP32 |
| LilyGO T-Echo | SX1262 ou SX1268 | nRF52 |
| RAK4631 (e placas baseadas nele) | SX1262 ou SX1268 | nRF52 |
| Heltec LoRa32 v2.0 | SX1276 ou SX1278 | ESP32 |
| Heltec LoRa32 v3.0 | SX1262 ou SX1268 | ESP32 |
| Heltec LoRa32 v4.0 | SX1262 | ESP32 |
| Heltec T114 | SX1262 ou SX1268 | nRF52 |
| OpenCom XL (Liberated Embedded Systems) | SX1262 e SX1280 (duplo) | nRF52 |
| Unsigned RNode v2.x | SX1276 ou SX1278 | ESP32 |

A escolha entre SX127x e SX126x, faixas (433, 868, 915 MHz) e o que isso muda no rádio é assunto do Módulo 8. O que importa aqui: **compre a variante de frequência certa** para a sua faixa e regime legal, e, para uso no Brasil, **confira a homologação da Anatel do produto** (Módulo 5, Aula 6): placas de desenvolvimento importadas frequentemente não a têm, e eu **não confirmei** a situação de nenhum modelo específico.

### Firmware: onde está e qual usar

- O firmware base é o **RNode Firmware** (GitHub `markqvist/RNode_Firmware`). O README diz que esse repositório é **espelho público** e passou a ser "referência estável", recebendo só correções de bugs e de segurança. A última versão que li foi a **1.86** (abril de 2026), instalável pelo `rnodeconf`, e exige `rnodeconf` 2.4.1 ou mais novo (pacote `rns` 1.1.9 ou mais novo).
- **Novos recursos e suporte a mais placas** estão no **RNode Firmware Community Edition**, mantido pela Liberated Embedded Systems (`liberatedsystems/RNode_Firmware_CE`, commits até agosto de 2026 quando li). A numeração de versões é diferente.

Qual usar: o manual descreve o `rnodeconf --autoinstall` (abaixo) para a linha base. Se a sua placa exige o firmware CE, siga a documentação do repositório dele.

### Instalar o firmware (auto-install)

Com o Reticulum instalado (`pip install rns`, abaixo), o programa `rnodeconf` já está disponível. O manual manda executar:

```
rnodeconf --autoinstall
```

O utilitário faz perguntas sobre o hardware e instala e provisiona o firmware. O manual também cita um **instalador web** como alternativa. Depois de provisionado, o dispositivo funciona com qualquer software que suporte RNode. Opções úteis do `rnodeconf` (da ajuda oficial): `-i` mostra informação do dispositivo; `-u` atualiza para o firmware mais recente; `-c` imprime a configuração; `-b`/`-B` liga e desliga Bluetooth; `-p` entra em modo de pareamento; `-T` e `-N` alternam modo TNC e modo normal; `-D`, `-t`, `-R` ajustam o display. **Sintaxe completa: `rnodeconf --help` na sua versão.**

**Cuidado prático:** flashar firmware sobrescreve o firmware original da placa. Nomes de porta variam: `/dev/ttyUSB0` ou `/dev/ttyACM0` no Linux, `COMx` no Windows (confira no Gerenciador de Dispositivos).

### Usar o RNode no Reticulum

Adiciona-se uma seção `RNodeInterface` ao `config` (exemplo do manual, versão 1.5.x):

```
[[RNode LoRa Interface]]
  type = RNodeInterface
  enabled = yes
  port = /dev/ttyUSB0          # serial; também aceita tcp://IP ou ble://nome
  frequency = 867200000        # Hz (exemplo do manual, faixa europeia 868)
  bandwidth = 125000           # Hz
  txpower = 7                  # dBm (o manual diz 7 dBm = 5 mW)
  spreadingfactor = 8          # de 7 a 12
  codingrate = 5               # de 5 a 8
```

**Não copie esses valores.** O manual os apresenta como **exemplo** para a Europa. A frequência, a potência e o que é legal dependem do país e do regime (no Brasil, LoRa em 915 a 928 MHz sob radiação restrita com equipamento certificado, Módulo 5 Aula 6 e Módulo 8). Os parâmetros SF, BW e CR determinam alcance, taxa e tempo no ar (Módulo 8). Duas vizinhanças só se falam se usarem **os mesmos** parâmetros.

Outras opções da interface (manual): `id_callsign` e `id_interval` para o RNode transmitir uma **identificação por indicativo** em intervalo fixo (útil sob licença de radioamador, com o cuidado da Aula 8); `flow_control` (para placas com pouca RAM); e limites de ocupação de ar, `airtime_limit_short` (janela de cerca de 15 s) e `airtime_limit_long` (janela móvel de 60 minutos), em porcentagem, úteis para respeitar ciclo de trabalho (duty cycle). O RNode com Wi-Fi ou BLE é conectado por `tcp://` e `ble://`; o BLE exige pareamento prévio com o computador.

## Instalação do Reticulum

O Reticulum é um módulo Python, **sem drivers nem privilégios especiais**. Comando principal do manual:

```
pip install rns
```

Notas do manual e do que vi:

- **Debian recente e Ubuntu recente** bloqueiam `pip` global: use `pipx install rns`, ou `pip install rns --break-system-packages` (nome enganoso; o manual explica que não quebra pacotes do sistema, a menos que você tenha instalado o Reticulum pelo gerenciador do sistema).
- **Raspberry Pi:** use o Raspberry Pi OS de **64 bits**; o de 32 bits nem sempre tem pacotes para as dependências.
- **Windows:** instale o Python (marque "Add Python to PATH"), depois `pip install rns`. Os utilitários (`rnsd`, `rnstatus` etc.) ficam disponíveis na linha de comando. O manual cita Python 3.12.7 como recomendado na época; eu testei com **Python 3.13.13** e **rns 1.5.4** e a instalação funcionou. O PyPI declara `requires_python >= 3.7`.
- **Android:** a forma fácil é o app Sideband; para mais controle, Termux (o manual traz os comandos).
- **macOS, OpenWRT, ARM64, RISC-V:** procedimentos no capítulo *Getting Started Fast*.
- **Pacote `rnspure`:** mesmo conteúdo do `rns`, mas sem dependências declaradas; permite instalar onde a biblioteca `cryptography` não existe, **usando primitivas Python puras que viram um risco de segurança** (o manual avisa). Só use se souber o que faz.

Versão lida em setembro de 2026: **PyPI `rns` 1.5.4, publicada em 11 de setembro de 2026**. `lxmf` 1.1.1 e `nomadnet` 1.4.3 (PyPI).

**Verificar a integridade das versões:** as notas de versão do projeto documentam que os artefatos de release trazem manifesto e assinaturas verificáveis com a identidade de assinatura de releases (a ferramenta `rnid`, opção `-V`); leia o `Changelog.md` do repositório para o procedimento atual.

## O arquivo de configuração

O manual (*Using Reticulum on Your System*): o Reticulum procura o diretório de configuração, nesta ordem, em `/etc/reticulum`, `~/.config/reticulum` e `~/.reticulum`. Se não existir, cria `~/.reticulum` com uma configuração padrão. Toda a configuração fica em **`~/.reticulum/config`**. No Windows, isso fica na pasta do seu usuário (`C:\Users\<usuario>\.reticulum\config`, como o README do Sideband confirma).

A configuração padrão gerada contém, essencialmente:

```
[reticulum]
enable_transport = No
share_instance = Yes
instance_name = default

[logging]
loglevel = 4

[interfaces]
  [[Default Interface]]
    type = AutoInterface
    interface_enabled = True
```

O que cada linha faz (comentários do próprio arquivo padrão):

- `enable_transport`: **transport node** (roteia para outros, propaga announces, atende pedidos de caminho). Padrão `No`; ligue só em nó fixo e sempre ligado (Aula 3).
- `share_instance`: o **primeiro programa** que iniciar o Reticulum cria uma **instância compartilhada**, e os outros programas do mesmo computador falam com ela por um socket local, de forma transparente. Só a instância compartilhada abre as interfaces.
- `instance_name`: nome da instância (em sistemas com sockets de domínio). Em sistemas **sem** sockets de domínio, como o Windows, isole instâncias diferentes com `shared_instance_port` e `instance_control_port`, ou force TCP com `shared_instance_type = tcp`. O padrão observado no meu teste foi TCP nas portas `37428` e `37429`.
- `loglevel`: 0 (crítico) a 7 (extremo); padrão 4.
- Outras: `enable_remote_management` e `remote_management_allowed` (gestão remota, com identidades autorizadas), `respond_to_probes` (o transport node responde ao `rnprobe`), `panic_on_interface_error`, `discover_interfaces`, `network_identity`, `blackhole_sources`, `publish_blackhole`, `autoconnect_discovered_interfaces` etc.

Para ver **todas** as opções comentadas, com exemplos de cada interface: **`rnsd --exampleconfig`**. É a fonte mais confiável para a sua versão.

Observação: o manual mostra `enabled = yes` nos exemplos de interface e `interface_enabled = True` no arquivo padrão. O código aceita **os dois**.

## Rodar o Reticulum: `rnsd`

Qualquer programa que use Reticulum o inicia sozinho se ainda não estiver rodando. Para deixá-lo sempre ativo (por exemplo, num transport node), use o daemon **`rnsd`**:

- `rnsd`: roda em primeiro plano.
- `rnsd -s` (`--service`): modo serviço, com log em arquivo.
- `rnsd --config <diretório>`: usa outro diretório de configuração (você pode rodar várias instâncias independentes).
- `rnsd --exampleconfig`: imprime a configuração de exemplo.

No Linux, o manual traz modelos de **serviço `systemd`** (de sistema em `/etc/systemd/system/rnsd.service` com `ExecStart=rnsd --service`, ou de usuário). Ele também recomenda, com várias portas seriais, usar nomes fixos em `/dev/serial/by-id/` em vez de `ttyUSB0`, para que a ordem de conexão não troque o dispositivo. No Windows, serviço de inicialização automática: **não confirmado no manual**; confira na sua versão.

## Utilitários de linha de comando

Todos vêm com o pacote `rns` e aceitam `--config <diretório>` para escolher a instância.

| Utilitário | Para que serve | Uso mínimo (do manual) |
|---|---|---|
| `rnstatus` | Estado das interfaces (como `ifconfig`). Mostra tráfego, modo, taxa, pares, IFAC | `rnstatus`; `rnstatus rnode` filtra por nome. Opções: `-a` todas, `-A` estatísticas de announce, `-l` links, `-t` totais, `-d` interfaces descobertas, `-D` detalhes com trecho de configuração, `-m` monitoramento contínuo |
| `rnpath` | Consultar e gerir caminhos | `rnpath <hash>` resolve o caminho; `-t` tabela de caminhos, `-r` taxas de announce, `-d` remove um caminho, blackhole com `-B`, `-U`, `-b` |
| `rnprobe` | "Ping" de um destino. Só responde quem tem **prova ligada** (transport nodes com `respond_to_probes`) | `rnprobe rnstransport.probe <hash>`; mostra RTT e saltos, e RSSI e SNR se a interface reportar |
| `rncp` | Copiar arquivos por Reticulum | Receptor: `rncp --listen -a <hash_identidade>`. Emissor: `rncp arquivo <hash_destino>`. `--fetch` para buscar do remoto |
| `rnx` | Executar um comando remoto e ver a saída | Listener: `rnx --listen -a <hash>`; cliente: `rnx <hash_destino> "comando"` |
| `rnsh` | Shell remoto interativo, tipo SSH | Listener: `rnsh -l -a <hash>`; cliente: `rnsh <hash_destino>` |
| `rnid` | Gerar e gerir identidades, calcular hashes, cifrar, decifrar, assinar | `rnid -g arquivo` gera; `rnid -i arquivo -p` mostra a chave pública; `-e`/`-d` cifra e decifra arquivo; `-s`/`-V` assina e valida |
| `rnodeconf` | Configurar e atualizar RNodes | Acima |
| `rngit` | Hospedar e usar repositórios Git sobre Reticulum (`rns://`), desde a versão 1.2.0 do RNS | O manual avisa que o `rngit` "não foi testado extensivamente"; cuidado ao hospedar repositórios públicos |

Detalhes que confirmei lendo o código e testando (versão 1.5.4):

- O `rncp -p` **imprime a identidade e o hash do destino de recebimento** daquela instância (`Identity : <...>` e `Listening on : <...>`). É assim que você obtém, no computador emissor, o hash de identidade que o receptor deve autorizar com `-a`.
- O receptor grava o arquivo no diretório onde foi iniciado, se não usar `-s`.
- Os utilitários `rnx`, `rncp`, `rnpath` e `rnprobe` têm **timeouts adaptativos** ao meio desde a 1.5.0, importante para links lentos.
- `rnsh` aparece como utilitário incluído no manual atual; o repositório antigo `markqvist/rnsh` está arquivado no GitHub, então instalações antigas separadas não são a referência.

**Nota de teste em Windows:** ao rodar os utilitários com a saída **redirecionada** (sem terminal interativo), alguns não imprimiram nada, ao passo que rodando o mesmo código via Python a saída apareceu. Use um terminal normal (PowerShell ou Windows Terminal). No meu teste, o `rncp` reportou "Transfer complete" no emissor e o arquivo chegou, mas o receptor registrou avisos de arquivo em uso ao salvar; isso pode ser peculiaridade do ambiente. Se ocorrer com você, confira a versão e relate à comunidade.

### Gestão remota e blackhole

- **Gestão remota:** com `enable_remote_management = yes` e `remote_management_allowed = <hashes>`, você pode rodar `rnstatus -R <hash do transport> -i <identidade>` e `rnpath -R ...` contra um nó distante, autenticado por identidade. Útil para um nó de morro sem teclado.
- **Blackhole:** `rnpath -B <hash>` bloqueia uma identidade **na sua própria instância**: seus announces não são propagados e o tráfego até ela não passa pelo seu nó. O manual é explícito: "**não existe forma de bloquear ou censurar globalmente** qualquer identidade ou destino": só nos seus segmentos. Listas de blackhole podem ser assinadas de fontes confiáveis (`blackhole_sources`), o que dá poder a quem mantém a lista: **verifique antes de assinar**.

## Resumo

- **RNode** é uma plataforma aberta que transforma placas LoRa comuns (T-Beam, Heltec, RAK4631 e outras do manual) em interface Reticulum, com firmware livre e instalação por `rnodeconf --autoinstall`. Não é LoRaWAN. O firmware "estável" é um espelho de correções; novos recursos ficam no fork Community Edition.
- Os parâmetros da `RNodeInterface` (frequência, banda, SF, CR, potência) são **seus** e legais ou não conforme país e regime; os valores do manual são exemplo europeu.
- Instalação: `pip install rns` (ou `pipx`, ou `--break-system-packages`); configuração em `~/.reticulum/config`; `rnsd --exampleconfig` mostra tudo. Instância compartilhada por padrão; em Windows, instâncias distintas usam portas distintas.
- `rnsd` deixa o Reticulum ativo (com `-s` como serviço, ou por `systemd`). Utilitários: `rnstatus`, `rnpath`, `rnprobe`, `rncp`, `rnx`, `rnsh`, `rnid`, `rnodeconf`, `rngit`.
- Blackhole bloqueia identidades só localmente. Não existe censura global; existe autonomia de cada operador.
- Versão lida: `rns` 1.5.4 (11 de setembro de 2026).

## Para aprofundar

- [ ] [Using Reticulum on Your System](https://reticulum.network/manual/using.html) (manual oficial): configuração, `rnsd`, todos os utilitários com opções completas, descoberta, gestão remota e blackhole.
- [ ] [Getting Started Fast](https://reticulum.network/manual/gettingstartedfast.html) (manual oficial): instalação por plataforma, começando rápido.
- [ ] [Communications Hardware](https://reticulum.network/manual/hardware.html) (manual oficial): RNode, placas suportadas e auto-install, hardware Wi-Fi e Ethernet, modems de packet radio.
- [ ] [RNode Firmware](https://github.com/markqvist/RNode_Firmware) e [RNode Firmware Community Edition](https://github.com/liberatedsystems/RNode_Firmware_CE) (GitHub): o firmware, placas e versões.
- [ ] [How to get started with Reticulum and RNode](https://www.youtube.com/watch?v=aBt56UpaQ0E) (andy kirby): do RNode ao Reticulum; não assisti.
- [ ] [Flashing RNode firmware on a Heltec v3 for MeshChat and Sideband](https://www.youtube.com/watch?v=_ky_oFmmZEk) (Liam Cottle): flash de um Heltec V3 como RNode; a data de publicação da busca é dezembro de 2024, então o procedimento pode ter mudado (confira o manual atual); não assisti.
- [ ] [Reticulum | Where to Start](https://www.youtube.com/watch?v=tf-CGKjsY8g) (EmComm Solutions): introdução prática; não assisti.

[Próxima aula: Aplicações sobre Reticulum](./07%20-%20Aplicacoes%20sobre%20Reticulum.md)
