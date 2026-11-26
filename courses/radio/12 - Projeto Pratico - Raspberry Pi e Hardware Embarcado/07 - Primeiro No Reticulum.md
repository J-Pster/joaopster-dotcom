[Voltar ao módulo](./README.md)

# Aula 7: Primeiro nó Reticulum

*Pergunta que esta aula responde: como instalo o Reticulum em um Raspberry Pi, ligo um RNode LoRa, configuro o Pi como transport node e testo a rede com ferramentas e aplicações reais (Sideband, NomadNet), de modo que ele rode sozinho como serviço?*

> Esta aula **aplica** o [Módulo 10](../10%20-%20Reticulum/README.md), em especial a [Aula 6 (RNode, instalação e utilitários)](../10%20-%20Reticulum/06%20-%20RNode%20Instalacao%20e%20Utilitarios.md), a [Aula 7 (aplicações)](../10%20-%20Reticulum/07%20-%20Aplicacoes%20sobre%20Reticulum.md) e o [laboratório guiado](../10%20-%20Reticulum/10%20-%20Laboratorio%20Guiado.md), sem repeti-los. Versões e opções vêm do manual oficial e da leitura do Módulo 10 (setembro de 2026: `rns` 1.5.4). **Nenhum valor de rádio abaixo é recomendação:** frequência, banda e potência dependem do seu país e regime legal ([Módulo 5, Aula 6](../05%20-%20Radio%20Amador%20-%20Regulamentacao%20e%20Pratica/06%20-%20Rede%20Privada%20Legal%20PX%20e%20ISM.md), [Módulo 8, Aula 4](../08%20-%20LoRa%20e%20LoRaWAN/04%20-%20Frequencias%20Regulamentacao%20e%20Duty%20Cycle.md)). **Nunca transmita sem antena ou carga.**

## Etapa 0: pré-condições

- [ ] Placa compatível com o instalador do RNode (tabela do [Módulo 10, Aula 6](../10%20-%20Reticulum/06%20-%20RNode%20Instalacao%20e%20Utilitarios.md): T-Beam, T3S3, Heltec V3 e V4, RAK4631, Heltec T114, entre outras) com a variante de **frequência certa**.
- [ ] Situação de homologação anotada (o Módulo 10 diz que não confirmou a de nenhum modelo específico).
- [ ] Regime legal decidido e as consequências entendidas: **Reticulum cifra por padrão**, o que é incompatível com o serviço de radioamador ([Módulo 10, Aula 8](../10%20-%20Reticulum/08%20-%20Privacidade%20Ameacas%20e%20Legalidade.md)). Em radiação restrita, sim; em faixa amadora, não.
- [ ] Raspberry Pi da Aula 3, com o sistema de **64 bits** (o manual avisa que o de 32 bits nem sempre tem pacotes para as dependências).

## Etapa 1: instalar o Reticulum no Pi

Do manual (*Getting Started Fast*):

```
pip install rns
```

No Debian e Ubuntu recentes, o `pip` global é bloqueado: o manual oferece `pipx install rns` ou `pip install rns --break-system-packages` (o manual explica que o nome é enganoso). **`pipx` é a opção mais limpa** para um serviço. Depois da instalação, `rnsd`, `rnstatus`, `rnpath`, `rnprobe`, `rncp`, `rnid`, `rnodeconf` e companhia ficam no `PATH` do usuário (com `pipx`, em `~/.local/bin`; **confira com `which rnsd`**, porque o caminho aparece na unidade systemd).

Verifique com `rnsd --exampleconfig`, que imprime a configuração de exemplo **da sua versão** com todas as opções comentadas: é a fonte mais confiável.

## Etapa 2: gravar o firmware do RNode

Com o RNode ligado por USB ao Pi (antena conectada antes):

```
rnodeconf --autoinstall
```

O utilitário faz perguntas sobre o hardware, instala e provisiona o firmware. Outras opções (da ajuda oficial): `-i` mostra as informações do dispositivo; `-u` atualiza para o firmware mais recente; sintaxe completa em `rnodeconf --help`. **Flashar sobrescreve o firmware original da placa.** O firmware base é o **RNode Firmware** (espelho estável) e novidades e placas mais novas estão no **RNode Firmware Community Edition** (Módulo 10, Aula 6); se a sua placa exige o segundo, siga a documentação dele.

Porta serial: `/dev/ttyUSB0` ou `/dev/ttyACM0`. **Prefira os nomes fixos em `/dev/serial/by-id/`**, como o manual recomenda, para que reiniciar ou trocar a ordem dos cabos não troque o dispositivo. O usuário que roda o `rnsd` precisa ter permissão na porta (Aula 3).

## Etapa 3: configuração do transport node

O arquivo é `~/.reticulum/config` (ou `/etc/reticulum` em instalação de sistema). Um modelo para um nó fixo, sempre ligado, com um RNode. **Os valores entre sinais `< >` são seus e legais ou não conforme o país e o regime; não os copie de exemplos de outros países**:

```
[reticulum]
enable_transport = Yes
share_instance = Yes

[logging]
loglevel = 4

[interfaces]
  [[RNode LoRa]]
    type = RNodeInterface
    enabled = yes
    port = /dev/serial/by-id/<nome-do-seu-dispositivo>
    frequency = <Hz, dentro da faixa e regime que você justificou na Aula 1>
    bandwidth = <Hz, por exemplo um dos valores do Módulo 8>
    txpower = <dBm, não acima do certificado do seu equipamento>
    spreadingfactor = <7 a 12>
    codingrate = <5 a 8>
```

Notas, todas do manual:

- `enable_transport = Yes` faz o Pi **rotear** para os outros e propagar announces. O manual diz: "se um sistema rodando Reticulum é fixo e deve ficar disponível na maior parte do tempo, é um bom candidato a nó de transporte". O padrão é `No`. **Um nó de morro solar ligado 24 horas** também qualifica, mas gasta tempo de ar com announces e retransmissão (Módulo 10, Aula 3, e Módulo 9, Aula 3 para os limites físicos).
- A `RNodeInterface` **só fala com vizinhos que usam os mesmos parâmetros** (frequência, banda, SF, CR). Em rede privada, **você** escolhe; combine e anote.
- `airtime_limit_short` (janela de cerca de 15 s) e `airtime_limit_long` (janela móvel de 60 minutos), em porcentagem, limitam a ocupação do ar: úteis para se manter dentro dos limites que você decidiu (Módulo 8, Aula 4).
- `id_callsign` e `id_interval` fazem o RNode transmitir uma identificação por indicativo, útil sob licença de radioamador (Módulo 10, Aula 6 e 8: cuidado com a regra da cifra).
- **IFAC:** `network_name` e `passphrase` na interface criam uma rede lógica fechada (só quem tem a mesma senha se comunica por aquela interface). É autenticação do enlace, e não é a cifra fim a fim do Reticulum (Módulo 10, Aula 5).

## Etapa 4: rodar como serviço

Sem serviço, o Reticulum só existe enquanto algum programa o usa. O daemon é `rnsd`. Do manual: `rnsd -s` (`--service`) é o modo serviço, com log em arquivo, e o manual traz modelos de unidade systemd. Adaptação (**confira o modelo completo na sua versão do manual e o caminho de `rnsd` com `which rnsd`**):

```
[Unit]
Description=Reticulum Network Stack daemon
After=network-online.target

[Service]
User=reticulum
ExecStart=/caminho/para/rnsd --service
Restart=on-failure
RestartSec=5

[Install]
WantedBy=multi-user.target
```

`sudo systemctl daemon-reload`, depois `sudo systemctl enable --now rnsd`. O diretório de configuração do usuário `reticulum` será o dele; faça o backup dele (Aula 3).

## Etapa 5: verificar e testar

Ferramentas do Módulo 10 (opções da tabela oficial, `--help` para o resto):

| Comando | O que mostra |
|---|---|
| `rnstatus` | Estado das interfaces (tráfego, modo, taxa); `-m` monitora continuamente |
| `rnpath <hash>` | Resolve o caminho até um destino; `-t` lista a tabela de caminhos |
| `rnprobe rnstransport.probe <hash>` | "Ping": tempo de ida e volta, saltos, RSSI e SNR se a interface reportar. **Só responde nó com prova ligada** (`respond_to_probes`) |
| `rncp` | Copia arquivo (`rncp --listen -a <hash>` no receptor) |

**Teste 1: local.** `rnstatus` mostra a `RNodeInterface` ativa, com o modo e o SNR. Se o serviço não sobe, `journalctl -u rnsd`.

**Teste 2: dois nós.** Um segundo dispositivo (o seu PC com o `rns` instalado e outro RNode, ou o celular com o app **Sideband**) com os mesmos parâmetros de rádio. O [laboratório guiado do Módulo 10, Aula 10](../10%20-%20Reticulum/10%20-%20Laboratorio%20Guiado.md) tem a sequência completa (Etapa 4: RNode e LoRa; Etapa 1b: transport node no meio e a contagem de saltos).

**Teste 3: aplicações.**

- **Sideband** (Android, Linux, macOS, Windows): mensagem LXMF entre dois dispositivos.
- **NomadNet** (`nomadnet`, pacote PyPI; versão 1.4.3 no Módulo 10): cliente de terminal, servidor de páginas e nó de propagação.
- **MeshChat**: interface web, útil em um Pi sem tela (o guia oficial, "MeshChat on Raspberry Pi 4", está em Para aprofundar).

Estado das aplicações e licenças (Sideband CC BY-NC-SA 4.0, por exemplo) está no [Módulo 10, Aula 7](../10%20-%20Reticulum/07%20-%20Aplicacoes%20sobre%20Reticulum.md).

**Teste 4: alcance.** Igual ao Meshtastic: um nó fixo e outro móvel; anote posição, RSSI e SNR (`rnprobe` mostra os dois quando a interface os reporta) e alimente a Aula 9.

## Riscos e cuidados específicos

- **Projeto de mantenedor único e mudança rápida** (Módulo 10, Aula 9): fixe a versão do `rns` que testou e não atualize o nó remoto sem testar em bancada.
- **Rede aberta ou fechada.** O padrão de instância aceita AutoInterface, que descobre vizinhos na rede local: em um Pi com Wi-Fi compartilhado, entenda o que você está anunciando.
- **Gestão remota** (`enable_remote_management`, `remote_management_allowed`): útil para um nó de morro, mas concede controle a quem tem a identidade autorizada. Autorize só o mínimo.
- **Blackhole** (`rnpath -B`) bloqueia uma identidade **na sua instância**, não globalmente, e listas assinadas dão poder a quem as mantém (Módulo 10, Aula 6).
- **Chaves e identidades:** o backup do diretório de configuração é o backup da identidade (Aula 3).
- **Alternativa em Rust** (experimental): o `reticulum-router` da ReticulaLabs implementa transporte em Rust, com uma `LoRaInterface` **experimental** que conversa por SPI com o chip; o README avisa que é experimental. **Não recomendo para o primeiro nó**; é assunto da Aula 5.

## Entregável

1. **`config` sanitizado** (sem senhas e sem chaves) com um comentário justificando cada valor de rádio pelo regime legal escolhido.
2. **Unidade `rnsd.service`** funcionando, e saída de `rnstatus`.
3. **Registro do teste 2 ou 3:** mensagem entregue entre dois dispositivos (com hora e saltos).
4. **Backup** do diretório de configuração guardado em local separado.

## Checklist da etapa

- [ ] `rnsd --exampleconfig` lido: sei o que cada opção do meu `config` faz.
- [ ] Os parâmetros de rádio são iguais em todos os nós e cabem no regime legal.
- [ ] O `rnsd` sobe no boot e reinicia sozinho.
- [ ] Mandei uma mensagem por Sideband ou NomadNet entre dois dispositivos.
- [ ] Tenho a versão do `rns` fixada e o backup das identidades.

## Resumo

- Instalação: `pipx install rns` (ou `pip install rns`), firmware `rnodeconf --autoinstall`, configuração em `~/.reticulum/config`; `rnsd --exampleconfig` mostra tudo da sua versão.
- Transport node (`enable_transport = Yes`) é para nó fixo e sempre ligado; parâmetros de rádio precisam ser idênticos entre vizinhos e legais no seu regime.
- Serviço: `rnsd --service` em unidade systemd com `Restart=on-failure`; nomes fixos de porta em `/dev/serial/by-id/`.
- Ferramentas: `rnstatus`, `rnpath`, `rnprobe` (só transport com prova ligada), `rncp`; aplicações Sideband, NomadNet, MeshChat.
- Reticulum cifra por padrão: só em radiação restrita, nunca em serviço amador.

## Para aprofundar

- [ ] [Getting Started Fast](https://reticulum.network/manual/gettingstartedfast.html) (manual oficial do Reticulum): instalação por plataforma, inclusive Raspberry Pi.
- [ ] [Using Reticulum on Your System](https://reticulum.network/manual/using.html) (manual oficial): `rnsd`, configuração, utilitários e gestão remota.
- [ ] [MeshChat on Raspberry Pi 4](https://github.com/liamcottle/reticulum-meshchat/blob/master/docs/meshchat_on_raspberry_pi.md) (Liam Cottle, documentação oficial do projeto): como rodar o MeshChat sem tela, acessível pelo navegador.
- [ ] [How to get started with Reticulum and RNode](https://www.youtube.com/watch?v=aBt56UpaQ0E) (andy kirby): introdução em vídeo: flash do firmware em um módulo LoRa e ligação ao Reticulum (título e canal confirmados; conteúdo não assistido).
- [ ] [Install and Configure Reticulum Network Stack RNS for RNode](https://www.youtube.com/watch?v=D2sfkqeyQyg) (Simon Phillips): instalação e configuração do RNS para um RNode (título e canal confirmados; conteúdo não assistido).
- [ ] [ReticulaLabs/reticulum-router](https://github.com/ReticulaLabs/reticulum-router) (ReticulaLabs): transport node em Rust, com interface LoRa experimental por SPI e o aviso de estado do projeto.

[Próxima aula: Gateway e integração](./08%20-%20Gateway%20e%20Integracao.md)
