[Voltar ao módulo](./README.md)

# Aula 6: Primeiro nó Meshtastic

*Pergunta que esta aula responde: seguindo o meu projeto (Aula 1), como monto, configuro e testo os primeiros nós Meshtastic de forma reproduzível, e como o Raspberry Pi se liga a eles (USB, TCP, MQTT ou rádio SPI direto) sem abrir a rede para o mundo sem querer?*

> Esta aula **aplica** o [Módulo 9, Aula 5 (Meshtastic na prática)](../09%20-%20Redes%20Mesh/05%20-%20Meshtastic%20na%20Pratica.md) e a [Aula 9 (segurança e legalidade)](../09%20-%20Redes%20Mesh/09%20-%20Seguranca%20Privacidade%20e%20Legalidade.md); não as repete. Leia-as antes. Comandos e opções abaixo vêm da documentação oficial do Meshtastic (meshtastic.org), consultada em setembro de 2026; o firmware muda rápido, então confira na documentação da sua versão. **Regra número um: nunca energize a placa sem antena conectada.** **Legalidade:** use equipamento com homologação da Anatel e a região correta (Aula 11 e Módulo 9, Aula 9).

## Etapa 0: pré-condições (antes de ligar)

- [ ] Regime decidido (radiação restrita) e equipamento com homologação ou declaração de conformidade, ou o regime amador com as regras dele (sem cifra) (Aula 1).
- [ ] Antena de 915 MHz correta, do tipo certo de conector, conectada **antes** de USB ou bateria.
- [ ] Placa da variante de 915 MHz (as de 433 ou 868 MHz não falam com as redes do Brasil, Módulo 9, Aula 5).
- [ ] Um caderno de versões: modelo da placa, versão do firmware, data, quem a configurou.

## Etapa 1: escolher o hardware do projeto

Do desenho da Aula 1 saem dois perfis:

| Papel no projeto | Escolha | Por quê |
|---|---|---|
| **Nó de morro** (solar, remoto) | Placa nRF52 (por exemplo RAK4631 ou T-Echo, listadas pela documentação) | Consome bem menos (Aula 2, exemplo A) |
| **Nó de bancada e de gateway** (com tomada, Wi-Fi) | ESP32-S3 (por exemplo Heltec V3) | Wi-Fi para MQTT e TCP; mais fácil de conseguir |

Uma rede de teste de dois nós já valida quase tudo. Compre **duas placas iguais** para o primeiro teste: elimina uma variável.

## Etapa 2: gravar o firmware

O procedimento está no Módulo 9, Aula 5 (seção 2): cabo USB que transfere dados, driver serial para ESP32 se preciso, **web flasher** em `flasher.meshtastic.org` (Chrome ou Edge) para ESP32, arrastar o arquivo UF2 para nRF52 e RP2040. Aqui, três regras de projeto:

1. **Todos os nós na mesma versão.** O Módulo 9 avisou: nós com firmware antigo não participam de recursos novos.
2. **Use a versão estável que o flasher oferece**, não a beta, para uma rede que você quer que dure. Anote a versão no caderno.
3. **Grave uma vez, em bancada**, todos os nós que você usará. Testar no morro é caro.

Veja: [Meshtastic Beginners Guide: Best Devices, Easy Flashing & Setup Tutorial](https://www.youtube.com/watch?v=CZMHWFDZ77Y) (ShotokuTech) e [How to setup a Heltec V3 device for Meshtastic](https://www.youtube.com/watch?v=CqBT0cXJsD8) (IT Potato Farm).

## Etapa 3: configuração da rede privada

A ordem que o Módulo 9 estabeleceu, agora como checklist do projeto (interface: app oficial, ou CLI):

1. **Região** primeiro (sem ela o nó não transmite). No Brasil, a documentação do Meshtastic lista `ANZ` (915,0 a 928,0 MHz) e `BR_902` (902,0 a 907,5 MHz); as comunidades brasileiras que o Módulo 9 consultou usam `ANZ`. **Não use `US`** (Módulo 9, Aula 9).
2. **Nome** longo e curto do nó (um esquema: `SITIO-MORRO1`).
3. **Papel:** `CLIENT` para a maioria; `CLIENT_BASE` para o nó alto de casa; nunca `ROUTER` no telhado de casa ([Módulo 9, Aula 4](../09%20-%20Redes%20Mesh/04%20-%20Meshtastic%20Arquitetura%20e%20Protocolo.md)).
4. **Preset:** o mesmo em todos os nós. `LongFast` (padrão) se quer a mesh pública; combinado com o grupo se é privada.
5. **Canal privado com chave aleatória** (256 bits), compartilhado por QR code ou URL. Lembrete da documentação: as opções `default` e `simple` usam chaves **conhecidas de todos**. Comando de referência da documentação da CLI (o dispositivo reinicia a cada chamada, então encadeie as opções em um só):

```
meshtastic --ch-set name "MeuCanal" --ch-set psk random --ch-index 0
```

6. **PIN de Bluetooth:** troque o padrão.
7. **Hop limit:** 3.
8. **MQTT desligado** até a Etapa 5.
9. **Posição:** decida a precisão por canal. Nó fixo com posição precisa em um canal público entrega a localização da sua casa.

## Etapa 4: teste em bancada e em campo

**Teste 1: bancada.** Dois nós a alguns metros, antenas conectadas. Envie uma mensagem em cada sentido. Se falhar: mesma região, mesmo preset, mesmo nome de canal primário (o nome afeta a frequência, Módulo 9, Aula 5), mesma chave.

**Teste 2: campo (o teste que interessa).** Use o **Range Test** (módulo do firmware): um nó fixo envia pacotes em intervalo (30 s no LongFast, segundo a documentação); o nó móvel, com GPS, salva em CSV a posição de cada pacote recebido (em dispositivos ESP32 o próprio nó pode gravar `rangetest.csv`, e no Android o app exporta o CSV do painel de depuração). Ambos precisam ter o módulo habilitado, e a precisão de posição do canal precisa estar alta durante o teste. Opções da CLI, da documentação: `meshtastic --set range_test.enabled true` nos dois e `meshtastic --set range_test.sender 30` no fixo (o valor `0` desliga o envio). **Desligue o módulo depois** (ele desliga sozinho após 8 horas): gasta tempo de ar e "spamma" o canal.

Registre para cada ponto: local (coordenadas), distância, altura das antenas, se a mensagem chegou, RSSI e SNR, hora. Esta tabela alimenta o orçamento de enlace real da Aula 9.

**Aviso de segurança em campo:** ao levar um nó a um ponto alto, aplique a instalação segura do Módulo 4, Aula 6 (rede elétrica, altura, trovoada). Nada de subir em telhado com tempo ruim por causa de um teste.

## Etapa 5: ligar o Raspberry Pi ao nó

Quatro formas, da mais simples à mais ambiciosa. **Comece pela A.**

### A) USB serial: a CLI e a API Python

O nó Meshtastic ligado por USB ao Pi aparece como porta serial. A documentação oficial da CLI Python:

```
pip3 install --upgrade "meshtastic[cli]"
meshtastic --port /dev/ttyUSB0 --info
meshtastic --nodes
```

`--info` mostra a configuração do rádio e `--nodes` imprime a lista de nós em tabela. (Em Raspberry Pi OS recente o `pip` global é bloqueado, como o Módulo 10, Aula 6 avisou para o Reticulum: use `pipx` ou um ambiente virtual.) O nome da porta varia (`/dev/ttyUSB0`, `/dev/ttyACM0`); o usuário precisa de permissão (Aula 3).

A biblioteca Python oficial fornece uma API de publicação e assinatura. Exemplo mínimo, que **só escuta** mensagens de texto (baseado no exemplo oficial `meshtastic_serial_message_reader.py`):

```python
import time
from pubsub import pub
import meshtastic.serial_interface

def on_receive(packet, interface):
    decoded = packet.get("decoded", {})
    if decoded.get("portnum") != "TEXT_MESSAGE_APP":
        return
    print(packet.get("fromId", "?"), decoded.get("text"))

pub.subscribe(on_receive, "meshtastic.receive")
iface = meshtastic.serial_interface.SerialInterface()   # ou devPath="/dev/ttyUSB0"
try:
    while True:
        time.sleep(1)
finally:
    iface.close()
```

A biblioteca também tem `sendText("...")` e `getNode('^local')` (a documentação mostra os dois). **Cuidado ao automatizar envio:** cada mensagem gasta tempo de ar compartilhado (Módulo 9, Aula 3). Um programa que envia a cada poucos segundos degrada a rede de todos.

### B) TCP pela rede local

Um nó com **Wi-Fi ou Ethernet** expõe a API na **porta TCP 4403** (documentação do `meshtasticd`). A biblioteca tem `meshtastic.tcp_interface.TCPInterface(hostname='...')`, e a CLI aceita o endereço do nó (`-t` no exemplo da documentação, com `meshtastic.local`; confira `--help`). Vantagem: o Pi não precisa estar perto do nó, mas o nó precisa de energia e rede.

### C) MQTT (broker no Pi)

MQTT é um protocolo de publicação e assinatura. Um nó com Wi-Fi ou Ethernet **publica** o que recebe da mesh em um servidor ("broker") e pode **receber** dali mensagens para injetar na mesh. Configuração oficial (nomes da documentação):

- `mqtt.enabled`, `mqtt.address` (endereço do broker), `mqtt.username`, `mqtt.password`, `mqtt.encryption_enabled`, `mqtt.tls_enabled`, `mqtt.root` (tópico raiz).
- **Em cada canal:** `uplink_enabled` e `downlink_enabled` (na CLI: `meshtastic --ch-set uplink_enabled true --ch-index 0`).

Fatos de segurança, todos da documentação oficial:

1. **Sem `encryption_enabled`, o nó envia as mensagens ao broker sem criptografia**, "mesmo quando os canais de uplink têm chaves". Ligue essa opção para o conteúdo não ficar legível no broker.
2. **O padrão de fábrica aponta para o broker público** (`mqtt.meshtastic.org`, com usuário e senha públicos). Conectar ali pode publicar a posição de todos os nós da sua mesh. **Use um broker seu, no Pi**, com TLS (`tls_enabled`) e usuário e senha próprios. A configuração do broker em si (por exemplo o Mosquitto) não está neste curso: siga a documentação dele.
3. A opção de **JSON** existe para integração fácil, mas as mensagens JSON **não são cifradas**, não funciona em nRF52 e um guia do app da Apple diz que o suporte a JSON foi **removido** do firmware. **Confira na documentação da sua versão** antes de depender dele.

Isto é o que forma a ponte "rádio para TCP" da Aula 8.

### D) `meshtasticd` com HAT LoRa por SPI

O Pi roda o próprio Meshtastic (`meshtasticd`), com a HAT LoRa por SPI, sem placa de rádio USB. A documentação diz: suportado em todos os modelos de Raspberry Pi; só HATs com **rádio SPI**; `sudo systemctl restart meshtasticd` reinicia o serviço; configuração em `/etc/meshtasticd/config.yaml` com predefinições em `/etc/meshtasticd/available.d`, copiadas para `config.d`; requer SPI ligado em `/boot/firmware/config.txt`. A API fica em TCP 4403. **Limitação da Aula 2:** HATs UART e concentradores SX1302/1303 não são suportados. É mais trabalhoso que a opção A: use quando quiser um só aparelho.

## Etapa 6: aceitação

O nó só "existe" para a rede depois destes testes:

- [ ] Dois nós trocam mensagem nos dois sentidos, em bancada.
- [ ] Teste de campo feito, com tabela de RSSI e SNR por ponto.
- [ ] O Pi lê a lista de nós e as mensagens por A, B, C ou D.
- [ ] O canal privado está com chave aleatória e o MQTT (se ligado) usa broker próprio e cifra ligada.
- [ ] Versão do firmware anotada, em todos os nós.
- [ ] Backup da configuração e da chave do canal guardado (Aula 3).

## Entregável

1. **Configuração de cada nó** (arquivo exportado pela CLI e a lista de opções que você mudou).
2. **Tabela do teste de campo.**
3. **Um pequeno programa ou comando no Pi** que lê a lista de nós ou as mensagens (opção A ou B).
4. **Nota de segurança**: o que está e o que não está cifrado na sua rede (use a tabela do Módulo 9, Aula 9).

## Resumo

- Repita o método do Módulo 9 em forma de projeto: pré-condições (antena, homologação, 915 MHz), firmware estável igual em todos, configuração com região `ANZ` (ou a que você justificou), canal com chave aleatória e MQTT desligado.
- O teste que importa é o de campo, com o Range Test e uma tabela de RSSI e SNR por ponto.
- O Pi liga por USB (CLI e biblioteca Python), TCP 4403, MQTT ou `meshtasticd` com HAT SPI.
- MQTT: sem `encryption_enabled` as mensagens vão em claro ao broker, e o broker padrão é público; use um broker próprio com TLS.
- Automatizar envio custa tempo de ar de toda a rede.

## Para aprofundar

- [ ] [Meshtastic Python CLI: instalação](https://meshtastic.org/docs/software/python/cli/installation/) (Meshtastic, documentação oficial): instalação por `pip` e requisitos de driver.
- [ ] [Using the Meshtastic Python Library](https://meshtastic.org/docs/development/python/library/) (Meshtastic, documentação oficial): exemplos de `SerialInterface`, `TCPInterface`, `sendText` e assinatura de eventos.
- [ ] [MQTT Module Configuration](https://meshtastic.org/docs/configuration/module/mqtt/) (Meshtastic, documentação oficial): cada opção do módulo e o aviso sobre mensagens sem cifra.
- [ ] [MQTT, visão geral de integrações](https://meshtastic.org/docs/software/integrations/mqtt/) (Meshtastic, documentação oficial): tópicos, `uplink_enabled` e `downlink_enabled`.
- [ ] [Raspberry Pi (Linux), meshtasticd](https://meshtastic.org/docs/meshtasticd/hardware/boards/raspberry-pi/) (Meshtastic, documentação oficial): SPI, HATs testadas e configuração do `meshtasticd`.
- [ ] [Meshtastic Raspberry Pi Setup Guide | Fix USB Dropouts](https://news.rakwireless.com/how-to-build-a-cleaner-more-repeatable-meshtastic-raspberry-pi-setup/) (RAKwireless): Raspberry Pi com HAT LoRa e quedas de USB, citado no roteiro original do módulo (conteúdo não reconferido nesta versão).

[Próxima aula: Primeiro nó Reticulum](./07%20-%20Primeiro%20No%20Reticulum.md)
