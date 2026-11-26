[Voltar ao módulo](./README.md)

# Aula 3: Preparar o Raspberry Pi

*Pergunta que esta aula responde: como deixo um Raspberry Pi pronto para rodar, sozinho e por meses, os serviços da minha rede (SSH por chave, atualizado, com logs, serviços que reiniciam e um watchdog que reinicia a máquina travada), sem depender de teclado e monitor?*

> Fontes: documentação oficial da Raspberry Pi (remote access, Imager), páginas de manual do systemd (`systemd.service` e `systemd-system.conf`, consultadas em setembro de 2026) e relatos técnicos citados. Versões e menus mudam: onde há dúvida, escrevo "confira na documentação da sua versão". Esta aula é o Linux que você provavelmente já conhece, aplicado a um dispositivo que ficará onde você não alcança fácil.

## Por que "preparar" é uma etapa de projeto

Um servidor no seu escritório você corrige sentado. Um gateway em um sítio ou um nó em um telhado quebra quando você não está lá, e a diferença entre "reinicia sozinho em 30 segundos" e "fica morto até eu ir lá" decide se a rede tem disponibilidade. As cinco propriedades que esta aula constrói são: **acesso remoto seguro**, **estado reproduzível** (imagem e backup), **serviços que se recuperam**, **logs úteis sem matar o cartão** e **watchdog**.

## 1. Sistema operacional e imagem (Raspberry Pi Imager)

O Raspberry Pi Imager grava o sistema no cartão ou SSD e, na etapa de **personalização**, deixa hostname, usuário, Wi-Fi, fuso e SSH prontos antes do primeiro boot. Usar essa personalização é a forma oficial de fazer instalação sem monitor.

1. Escolha o dispositivo e o **Raspberry Pi OS de 64 bits**. O manual do Reticulum avisa que o de 32 bits nem sempre tem pacotes para as dependências (Módulo 10, Aula 6). A versão atual é a Trixie (página do Pi 5, setembro de 2026).
2. Na personalização, defina **hostname** (um nome por nó: `gw-sala`, `gw-sitio`), **usuário e senha** (não use o nome padrão que todo mundo tenta), **Wi-Fi** com o país correto e **fuso**.
3. Em **Remote Access**, habilite o SSH e escolha **autenticação por chave pública** (a documentação oficial descreve o campo "Use public key authentication" e a geração de chave pelo próprio Imager).
4. Grave, ponha o cartão no Pi e ligue. Depois de cerca de um minuto, o Pi aparece na rede.

Veja: [Raspberry Pi Headless Setup in 5 Minutes](https://www.youtube.com/watch?v=vybsBox704A) (Sam The Engineering Man), demonstra o Imager 2.0 e o SSH sem monitor (usa senha em vez de chave; siga a seção de SSH abaixo para trocar).

## 2. SSH por chave e acesso remoto

Por padrão, o Raspberry Pi OS **desabilita o servidor SSH**; o Imager o liga na personalização. Para acesso sem senha, a documentação oficial manda:

```
ssh-copy-id <usuario>@<endereco-ip>
```

(pede a senha uma vez e copia sua chave pública para `~/.ssh/authorized_keys` do Pi). Se o seu sistema não tem `ssh-copy-id`, ela descreve o caminho por `scp` e o ajuste de permissões do arquivo.

Depois que a chave funciona, **desligue a senha**: no arquivo `/etc/ssh/sshd_config` (ou em um arquivo de `/etc/ssh/sshd_config.d/`), coloque `PasswordAuthentication no` e recarregue o serviço SSH. **Antes** de fechar a sessão atual, teste em uma segunda sessão que a chave entra, senão você se tranca fora. (Nome exato do serviço, `ssh` ou `sshd`, e caminhos: confira na documentação da sua versão.)

Regras de segurança básica, sem enfeite:

- **Nunca abra a porta 22 do roteador para a internet.** Para acesso de fora, use uma VPN (por exemplo WireGuard) ou o serviço oficial **Raspberry Pi Connect** (a documentação o lista; ele depende de uma conta Raspberry Pi ID e de um serviço de terceiros: pese isso contra a sua ameaça de privacidade, [Módulo 10, Aula 8](../10%20-%20Reticulum/08%20-%20Privacidade%20Ameacas%20e%20Legalidade.md)). O Reticulum tem o seu próprio meio: `rnsh` e a gestão remota por identidade (Módulo 10, Aula 6), útil para um nó que só tem LoRa.
- **Usuário sem privilégio para os serviços.** Cada serviço roda com um usuário próprio, não com `root`.
- **Nada de serviço aberto sem necessidade.** Liste as portas em escuta e desligue o que não usa. Um firewall (`ufw` ou `nftables`, conforme a sua distribuição) que só deixa entrar o necessário é barato; confira a documentação da sua versão.

## 3. Rede

- **Cabo Ethernet** sempre que possível: Wi-Fi cai e muda de canal. Em nós sem cabo (Pi Zero 2 W), Wi-Fi com o país certo.
- **IP fixo ou reserva DHCP** no roteador, para o Pi ter sempre o mesmo endereço (os seus serviços e sua documentação vão citá-lo).
- **Sincronismo de tempo.** Logs, mensagens e alguns protocolos dependem de relógio certo (Módulo 7, [Sincronismo de tempo](../07%20-%20Modos%20Digitais%20de%20Radio%20Amador/03%20-%20Sincronismo%20de%20Tempo.md)). O Pi 5 tem RTC com conector de bateria; os demais perdem a hora sem rede. `timedatectl` mostra se o relógio está sincronizado (comando padrão do systemd; confira a saída na sua versão).

## 4. Atualização

Comando padrão do Debian que a documentação da Raspberry Pi usa: `sudo apt update` e depois `sudo apt full-upgrade`. Faça na primeira instalação e periodicamente. Para nós que ficam meses sem visita, considere atualizações de segurança automáticas (o pacote `unattended-upgrades` do Debian existe para isso; confira a documentação do Debian para a sua versão) e teste sempre uma atualização em um Pi de bancada antes de aplicar no remoto.

O **firmware do próprio Pi** (bootloader/EEPROM) também tem atualização, tratada na documentação oficial (seções "Raspberry Pi boot EEPROM"). Guarde o número da versão no seu inventário (Aula 9).

## 5. Serviços com systemd

Tudo que a rede precisa (o `rnsd` da Aula 7, um decodificador em Rust da Aula 5, o `meshtasticd`, um broker MQTT) deve ser uma **unidade systemd**: sobe no boot, reinicia se cair, registra logs. Modelo genérico (adapte nomes e caminhos; **não copie sem ler**):

```
[Unit]
Description=Descrição do serviço
After=network-online.target
Wants=network-online.target

[Service]
User=servico
ExecStart=/caminho/completo/do/programa --opcoes
Restart=on-failure
RestartSec=5

[Install]
WantedBy=multi-user.target
```

O que cada linha faz, segundo o manual `systemd.service`:

- `Restart=on-failure` reinicia o serviço se ele sair com erro, for morto por sinal ou estourar um tempo limite. O manual chama essa opção de "recomendada para serviços de longa duração".
- `RestartSec=` é a espera antes de reiniciar (padrão de 100 ms, muito curto se o serviço falha por dependência ausente; use segundos).
- `User=` roda o serviço sem privilégio.

Passos: salve como `/etc/systemd/system/<nome>.service`, rode `sudo systemctl daemon-reload`, depois `sudo systemctl enable --now <nome>`. Estado: `systemctl status <nome>`. O modelo oficial do Meshtastic (`meshtasticd`) usa `Restart=always` e `RestartSec=3` (documentação em meshtastic.org). **Cuidado com laços de falha:** um serviço que falha imediatamente e reinicia a cada 3 s em uma placa LoRa pode transmitir repetidamente; se o serviço aciona transmissor, prefira limites (`StartLimitBurst`, como o modelo do Meshtastic mostra) e um intervalo maior.

**Serviço com watchdog próprio.** O systemd também oferece `WatchdogSec=`: o serviço deve chamar `sd_notify` periodicamente com `WATCHDOG=1`; se não chamar dentro do prazo, é morto e, com `Restart=`, reiniciado. **Só funciona com programas que implementam esse protocolo** (o manual pede também `NotifyAccess=`); com programas comuns, fique com `Restart=`.

Serial: se o serviço usa uma placa LoRa por USB, o usuário precisa de permissão na porta (em muitas distribuições, o grupo `dialout`; verifique com `ls -l /dev/ttyACM0` e `groups`). Para não depender da ordem em que as portas aparecem, o manual do Reticulum recomenda os nomes fixos de `/dev/serial/by-id/`.

## 6. Logs

`journalctl` lê o **journal** do systemd: `journalctl -u <nome> -f` segue os logs de um serviço, `journalctl -b` mostra os do boot atual. Dois problemas de sistemas embarcados:

- **Persistência.** Por padrão, em muitas instalações o journal fica na memória e se perde no reboot, justo quando você quer saber por que reiniciou. Para guardar em disco, use `Storage=persistent` em `/etc/systemd/journald.conf` (confira na sua versão) e limite o tamanho com `SystemMaxUse=`.
- **Desgaste do cartão.** Logs constantes gravam muito. Com sistema de arquivos protegido (Aula 2), mande os logs para um disco de dados pequeno separado, para um Pi vizinho ou os limite.

Com o cartão comum, a alternativa de "raiz somente leitura + tmpfs" é comum entre projetos embarcados; um relato técnico detalha os passos, incluindo o tratamento do relógio e do NTP em raiz somente leitura (veja Para aprofundar). O guia da Adafruit sobre o modo somente leitura via `raspi-config` também. **Faça isso por último**, depois de tudo funcionar, e com um backup do cartão.

## 7. Backup

O backup mais valioso de uma rede de rádio são as **chaves e identidades**, que não se regeneram:

- Reticulum: o diretório de configuração (`~/.reticulum`, incluindo `config` e o armazenamento de identidades; confira a estrutura na sua versão) com todas as identidades. Perder a identidade de um nó muda o endereço dele na rede ([Módulo 10, Aula 2](../10%20-%20Reticulum/02%20-%20Destinos%20Identidades%20e%20Criptografia.md)).
- Meshtastic: a configuração do nó (a CLI oficial tem `--export-config`, listada na sua documentação) e as **chaves de canal** guardadas com segurança (não em um e-mail).
- O que você editou: arquivos de unidade systemd, `config.yaml` do `meshtasticd`, scripts.

Como copiar: `rsync` (a documentação oficial da Raspberry Pi lista `rsync` e `scp` em "Remote access") para outra máquina, e uma **imagem completa** do cartão pronto e testado, guardada em pelo menos dois lugares. Cartões ficam baratos, e o "cartão reserva" gravado é o método mais rápido de recuperar um nó.

## 8. Watchdog: reiniciar a máquina que travou

Um **watchdog** (cão de guarda) é um temporizador em hardware: se ninguém o "alimenta" dentro do prazo, ele reinicia a placa. Serve para o caso de o sistema todo travar, o que nenhum `Restart=` resolve, porque o systemd também travou.

O Raspberry Pi tem watchdog em hardware (driver `bcm2835-wdt`). O systemd pode usá-lo: `RuntimeWatchdogSec=` em `/etc/systemd/system.conf` (ou um arquivo em `/etc/systemd/system.conf.d/`) programa o hardware para reiniciar o sistema se o systemd não o contatar dentro do intervalo. O manual do `systemd-system.conf` diz que o sistema contata o hardware **pelo menos uma vez na metade do intervalo** e que, se o hardware não aceita o valor exato, pega o mais próximo. Relatos técnicos sobre o Pi dizem que o intervalo máximo do hardware é de **15 segundos**, então um valor válido é `15`. Exemplo de arquivo (`/etc/systemd/system.conf.d/10-watchdog.conf`):

```
[Manager]
RuntimeWatchdogSec=15
```

Como conferir: `dmesg | grep -i watchdog` deve mostrar `bcm2835-wdt` e uma linha do systemd dizendo que usa o watchdog de hardware, e `systemctl show | grep -i watchdog` mostra `RuntimeWatchdogUSec`. Detalhe: em algumas versões do sistema, o watchdog já vem ativado com 15 s; confira antes de mexer (a resposta varia entre versões, e eu não a confirmei para o Trixie).

**Limite honesto:** o watchdog salva de travamento, não de erro lógico. Um serviço em laço que responde mas não faz nada útil não é detectado. Para isso, você escreve verificações de saúde (Aula 8: monitoramento).

## Entregável: a imagem base do nó e o roteiro de instalação

1. **Roteiro de instalação** (`instalacao.md`): cada passo desta aula, com os comandos que você usou e o que conferir, para reproduzir o nó em 30 minutos.
2. **Imagem base** do cartão pronto (sistema atualizado, SSH por chave, usuário, rede, journal, watchdog), gravada em dois lugares.
3. **Inventário** (uma tabela): hostname, modelo, IP, versão do sistema, data da última atualização, onde está a chave de acesso.

## Checklist da etapa

- [ ] Instalei o sistema de 64 bits com SSH por chave e senha desligada, depois de testar a chave.
- [ ] Nenhuma porta do Pi está aberta para a internet sem necessidade.
- [ ] O relógio sincroniza e sei o que acontece sem rede.
- [ ] Os serviços do projeto são unidades systemd com `Restart=on-failure`.
- [ ] O journal é persistente e limitado (ou os logs vão para outro lugar).
- [ ] Tenho backup das identidades e chaves e uma imagem do cartão.
- [ ] O watchdog está ativo e conferido em `dmesg` e `systemctl show`.

## Resumo

- Imager com personalização faz instalação sem monitor; SSH por chave (`ssh-copy-id`) e senha desligada depois de testar; nunca exponha a porta 22.
- Todo serviço vira unidade systemd com `Restart=on-failure`, usuário próprio e limite de reinícios quando aciona transmissor.
- `journalctl -u nome -f` para logs; persistir o journal em disco e limitar o tamanho; proteger o cartão com raiz somente leitura por último.
- Backup de identidades e chaves (perder uma identidade muda o endereço do nó), mais imagem do cartão.
- Watchdog de hardware: `RuntimeWatchdogSec=15` no systemd; confira em `dmesg`. Ele salva de travamento, não de erro lógico.

## Para aprofundar

- [ ] [Remote access (documentação oficial da Raspberry Pi)](https://www.raspberrypi.com/documentation/computers/remote-access.html) (Raspberry Pi): habilitar SSH, autenticação por chave, `ssh-copy-id`, `scp`, `rsync` e Raspberry Pi Connect.
- [ ] [systemd.service(5)](https://www.man7.org/linux/man-pages/man5/systemd.service.5.html) (manual do Linux, man7.org): `Type`, `Restart`, `RestartSec`, `WatchdogSec` e `NotifyAccess` com as definições exatas.
- [ ] [systemd-system.conf(5), seção Hardware Watchdog](https://man7.org/linux/man-pages/man5/systemd-system.conf.5.html) (manual do Linux, man7.org): `RuntimeWatchdogSec`, `RebootWatchdogSec` e o dispositivo `/dev/watchdog0`.
- [ ] [Running a Raspberry Pi with a read-only root filesystem](https://www.dzombak.com/blog/2024/03/running-a-raspberry-pi-with-a-read-only-root-filesystem/) (Cody Dzombak): passo a passo detalhado de raiz somente leitura, `tmpfs` e o problema do relógio.
- [ ] [Read-Only Raspberry Pi](https://learn.adafruit.com/read-only-raspberry-pi.md?view=all) (Adafruit): o modo somente leitura via `raspi-config` (Overlay File System), com ressalvas de quando usar.
- [ ] [Raspberry Pi Imager 2.0: Set Up Your Raspberry Pi in Minutes](https://www.youtube.com/watch?v=MepM1juFYzA) (Gary Explains): o assistente do Imager 2.0, incluindo SSH e Raspberry Pi Connect; resumo do vídeo confirmado na busca, conteúdo não assistido.

[Próxima aula: GPIO e PTT com segurança](./04%20-%20GPIO%20e%20PTT%20com%20Seguranca.md)
