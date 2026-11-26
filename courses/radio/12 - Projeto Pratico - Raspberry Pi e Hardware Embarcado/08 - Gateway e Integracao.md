[Voltar ao módulo](./README.md)

# Aula 8: Gateway e integração

*Pergunta que esta aula responde: como ligo a minha rede LoRa a TCP e à internet (ou a um segundo sítio) sem afogar o rádio nem vazar o que era privado, que serviços locais faz sentido rodar no Raspberry Pi, e como monitoro tudo para saber que a rede está viva antes que o usuário reclame?*

> Esta aula usa o desenho de gateway do [Módulo 10, Aula 5](../10%20-%20Reticulum/05%20-%20Interfaces%20e%20Ligacao%20de%20Meios.md), o MQTT do [Módulo 9, Aula 4](../09%20-%20Redes%20Mesh/04%20-%20Meshtastic%20Arquitetura%20e%20Protocolo.md) e as aulas [6](./06%20-%20Primeiro%20No%20Meshtastic.md) e [7](./07%20-%20Primeiro%20No%20Reticulum.md) deste módulo. **Legalidade:** um gateway entre o ar e a internet muda o quadro; sob licença de radioamador ele é restrito (seção "Gateways e a lei" do Módulo 10, Aula 5); em radiação restrita depende do equipamento e do serviço. Veja a Aula 11. O que segue é técnica para uso próprio.

## Por que um gateway existe, e o que ele custa

A rede LoRa é lenta (dezenas a centenas de bytes por segundo no melhor caso, Módulo 8) e local. A internet é rápida e global. Um **gateway** é um nó com dois meios (LoRa e IP) que passa o que precisa de um para o outro. Os motivos legítimos: ligar **dois sítios** distantes por uma rota IP (sua casa e o sítio) em uma só rede; **guardar e consultar** o tráfego em um servidor local; e **ser alcançado de fora** (para operar seus nós).

O que ele custa, e o que o [Módulo 11](../11%20-%20Arquitetura%20Descentralizada%20e%20P2P/README.md) pede para você examinar em qualquer arquitetura:

1. **Tempo de ar.** Uma ponte descuidada joga no LoRa o tráfego de uma rede rápida. Ele é escasso (Módulo 9, Aula 3).
2. **Fronteira de segurança.** Tudo que estava "só no ar, para quem está por perto" passa a estar em um computador ligado à internet: metadados, IP e superfície de ataque.
3. **Ponto único de falha.** Se um só gateway liga os dois lados, ele é o elo mais fraco.

Regra: **projete o gateway como uma fronteira, não como um cano.**

## Padrão 1: Reticulum, LoRa para TCP

O Reticulum foi desenhado para isso: uma mesma rede com vários meios. O Pi com `enable_transport = Yes`, uma `RNodeInterface` e uma interface TCP já é um gateway. As opções de TCP, do manual do Reticulum:

**Lado servidor** (um nó com IP acessível, por exemplo o Pi do sítio ou uma VPS):

```
[[TCP Server Interface]]
  type = TCPServerInterface
  enabled = yes
  listen_ip = 0.0.0.0
  listen_port = 4242
```

**Lado cliente** (o outro Pi):

```
[[TCP Client Interface]]
  type = TCPClientInterface
  enabled = yes
  target_host = <endereço ou nome do servidor>
  target_port = 4242
```

(O manual mostra `127.0.0.1` e a porta `4242` como exemplo local; troque `target_host`.) As interfaces TCP toleram enlaces intermitentes e reconectam sozinhas (Módulo 10, Aula 5).

**O que muda tudo: o modo da interface.** O Módulo 10 ensinou `mode`: na interface TCP de um Pi que também tem LoRa, o modo `boundary` impede que announces da rede rápida sejam propagados ao seu segmento LoRa, enquanto os announces do seu segmento LoRa **sobem** para a rede maior. Sem isso, o Pi despeja no ar o volume de announces da rede grande. É o desenho do manual para "um segmento lento conectado a uma rede rápida". Confira o *Configuring Interfaces* da sua versão para o restante dos parâmetros.

**Autenticação da interface (IFAC).** Se o TCP é entre os seus dois sítios, use `network_name` e `passphrase` na interface (o manual: podem ser usados juntos, ou a senha sozinha). Só quem conhece a senha forma o enlace; os pacotes com assinatura inválida são descartados (Módulo 10, Aula 5). É um filtro de quem entra, não um substituto da cifra fim a fim.

**Exposição.** Uma porta TCP pública anuncia que há um nó Reticulum no seu IP: o Reticulum não oculta o IP em TCP (o I2P oculta, Módulo 10, Aula 5). Se os dois sítios são seus, considere **uma VPN entre eles** e deixe o Reticulum ouvir só nela, sem porta pública. Firewall que só permite a origem esperada.

## Padrão 2: Meshtastic, LoRa para MQTT

Descrito na [Aula 6 (Etapa 5C)](./06%20-%20Primeiro%20No%20Meshtastic.md): um nó com Wi-Fi ou Ethernet publica pacotes da mesh em um broker MQTT, com `uplink_enabled` e `downlink_enabled` por canal. Consequências de projeto:

- **O broker é o seu ponto de fronteira.** Coloque-o no Pi, com TLS, usuário e senha, e ouvindo só a rede local (ou VPN). Broker público, só se você aceita publicar a mesh.
- **`encryption_enabled` ligado**, ou o broker vê o conteúdo.
- **`downlink` injeta na mesh o que chega ao tópico.** Quem consegue publicar no broker consegue escrever na sua rede LoRa. Autorização por usuário no broker e, se possível, um canal dedicado a esse fim (a documentação descreve um canal chamado `mqtt` no exemplo de JSON).
- **Laços:** duas meshes ligadas por um broker, cada uma com uplink e downlink no mesmo canal, podem repetir mensagens uma na outra. Teste com poucos nós antes de ligar, e use um só ponto de ponte por mesh.

## Padrão 3: gateway LoRaWAN (só citação)

Para sensores, um gateway LoRaWAN próprio (concentrador com um servidor como ChirpStack) é outro desenho, em estrela, e está no [Módulo 8, Aula 6](../08%20-%20LoRa%20e%20LoRaWAN/06%20-%20Redes%20TTN%20ChirpStack%20Helium%20e%20Gateway%20Proprio.md). Não o misture com Meshtastic ou Reticulum no mesmo rádio.

## Serviços locais no Raspberry Pi

O ponto de ter um Pi é rodar coisas úteis. Ideias, cada uma com o custo de tempo de ar:

| Serviço | Como | Custo no ar |
|---|---|---|
| **Nó de propagação LXMF** (guarda e entrega mensagens a quem está offline) | `lxmd` (vem no pacote `lxmf`), ou o NomadNet ([Módulo 10, Aula 7](../10%20-%20Reticulum/07%20-%20Aplicacoes%20sobre%20Reticulum.md)) | Baixo: só quando alguém sincroniza |
| **Página de status para os membros** (Micron no NomadNet, ou uma página web local) | NomadNet serve páginas e arquivos | Baixo, sob demanda |
| **Registro (log) de mensagens e sinais** | Script Python com a biblioteca do Meshtastic (abaixo) | Nenhum (só ouve) |
| **Painel de saúde do gateway** | Script e timer systemd (abaixo) | Nenhum |
| **Mensagem de alerta para você** | Uma mensagem LXMF ou Meshtastic do Pi quando algo falha | Um pacote por alerta: limite a frequência |

**Registro de mensagens e qualidade do sinal (Meshtastic, biblioteca oficial).** Baseado no exemplo oficial de leitura de mensagens, gravando em SQLite (biblioteca padrão do Python). Os campos que aparecem no dicionário do pacote variam com a versão: **imprima um pacote antes** e confira os nomes; usei `.get` para não quebrar se faltar um campo (`rxRssi` e `rxSnr` são os nomes que aparecem nos pacotes da biblioteca Python, **confira na sua versão**).

```python
import sqlite3
import time
from pubsub import pub
import meshtastic.serial_interface

db = sqlite3.connect("mesh.db")
db.execute("""CREATE TABLE IF NOT EXISTS rx (
    ts REAL, from_id TEXT, port TEXT, rssi REAL, snr REAL, text TEXT)""")

def on_receive(packet, interface):
    d = packet.get("decoded", {})
    db.execute("INSERT INTO rx VALUES (?,?,?,?,?,?)", (
        time.time(), packet.get("fromId"), d.get("portnum"),
        packet.get("rxRssi"), packet.get("rxSnr"),
        d.get("text") if d.get("portnum") == "TEXT_MESSAGE_APP" else None))
    db.commit()

pub.subscribe(on_receive, "meshtastic.receive")
iface = meshtastic.serial_interface.SerialInterface()
try:
    while True:
        time.sleep(1)
finally:
    iface.close()
    db.close()
```

**Privacidade do registro.** O arquivo `mesh.db` guarda o conteúdo das mensagens dos seus usuários e quem falou com quem. Trate como dado sensível: proteja o disco, defina por quanto tempo guarda, e considere não gravar o texto (só metadados de sinal). O tratamento de dados pessoais de terceiros pode ter regras legais (a LGPD); **não pesquisei o enquadramento**, e para uso familiar o mínimo necessário é a política mais segura.

## Monitoramento: saber antes do usuário

Quatro camadas, da mais barata:

1. **Sistema:** o serviço está ativo (`systemctl is-active <nome>`), temperatura, espaço em disco, memória. No Pi, a temperatura do processador está em `/sys/class/thermal/thermal_zone0/temp`, em milésimos de grau (o valor 45000 é 45 graus); há também `vcgencmd` para tensão e subtensão (`vcgencmd get_throttled`; confira o significado dos bits na documentação da sua versão).
2. **Rádio:** há quanto tempo o último pacote foi ouvido; contagem de nós vistos. No Reticulum, `rnstatus` (interface, taxa, tráfego) e `rnprobe` até um transport com prova ligada; no Meshtastic, a lista de nós (`meshtastic --nodes`) e a telemetria.
3. **Ocupação do ar.** O Módulo 9 citou dois números que o Meshtastic reporta, `ChUtil` (ocupação do canal que o seu nó vê) e `AirUtilTX` (a sua parte), com o limiar de 25% e de 7 a 8% sugerido em texto oficial. Registre-os: mostram quando a sua rede está afogando a si mesma.
4. **Energia:** tensão da bateria, quando o nó a reporta.

Um **verificador de saúde** simples em Python, chamado por um temporizador systemd. Ele **não usa a rede de rádio**; só escreve um arquivo de estado (você lê por SSH ou serve por uma página local):

```python
#!/usr/bin/env python3
import json
import shutil
import subprocess
import time

SERVICES = ["rnsd"]   # troque pelos serviços do seu projeto

def active(name):
    r = subprocess.run(["systemctl", "is-active", name],
                       capture_output=True, text=True)
    return r.stdout.strip() == "active"

def cpu_temp_c():
    with open("/sys/class/thermal/thermal_zone0/temp") as f:
        return int(f.read()) / 1000.0

total, used, free = shutil.disk_usage("/")
state = {
    "ts": time.time(),
    "services": {s: active(s) for s in SERVICES},
    "cpu_temp_c": cpu_temp_c(),
    "disk_free_pct": round(100 * free / total, 1),
}
with open("/run/gw-health.json", "w") as f:
    json.dump(state, f)
```

Unidade e temporizador do systemd (`oneshot` roda uma vez e sai; `OnUnitActiveSec` reexecuta em intervalo, ambos do manual do systemd; **confira as opções na sua versão**):

```
# /etc/systemd/system/gw-health.service
[Service]
Type=oneshot
ExecStart=/usr/local/bin/gw-health.py

# /etc/systemd/system/gw-health.timer
[Timer]
OnBootSec=1min
OnUnitActiveSec=1min

[Install]
WantedBy=timers.target
```

`sudo systemctl enable --now gw-health.timer`. O passo seguinte, se quiser alertas, é outro programa que lê esse arquivo e avisa quando `services` tem um `false` ou o `ts` está velho. **Alerte pouco:** cada alerta pelo ar custa tempo de ar de toda a rede.

**Limite honesto:** o verificador detecta serviço parado, disco cheio e superaquecimento. Não detecta "o rádio está ativo mas ninguém me ouve" nem "a antena caiu". Para isso serve a camada 2 (idade do último pacote ouvido), que você precisa escrever para o seu caso.

## Teste de resiliência (o teste que justifica a arquitetura)

O objetivo de uma rede descentralizada é continuar funcionando com pedaços fora. Teste, com um gateway montado:

1. Mensagem do nó A ao nó B pelo gateway (LoRa, TCP e LoRa): meça o tempo.
2. **Desconecte o cabo de internet do gateway.** A rede local LoRa continua? O que deixa de funcionar exatamente (a ponte com o outro sítio, o MQTT)?
3. Reconecte: o Reticulum reconecta as interfaces TCP sozinho (Módulo 10, Aula 5). Quanto tempo leva?
4. **Reinicie o Pi.** Volta sozinho? Os serviços sobem na ordem certa? (Aula 3.)
5. **Desligue o gateway inteiro.** O que sobra? Isso é o seu ponto único de falha, medido.

## Entregável

1. **Diagrama do gateway** com as interfaces, os modos (`boundary`, `full`) e o que cada uma anuncia; e uma tabela **"o que atravessa a fronteira"** (o que sai do ar para a internet e vice-versa).
2. **Configuração real** (sanitizada) do gateway e o resultado de `rnstatus` ou da lista de nós.
3. **Registrador e verificador de saúde** funcionando, com a política de retenção dos dados.
4. **Relatório do teste de resiliência** com os tempos e o ponto único de falha.

## Checklist da etapa

- [ ] Sei o que atravessa o meu gateway e a que custo de tempo de ar.
- [ ] A interface TCP tem modo adequado e autenticação (IFAC) ou está atrás de VPN.
- [ ] O broker MQTT é meu, com TLS, usuário e cifra ligada; o downlink está restrito.
- [ ] Tenho monitoramento de sistema, rádio e ocupação do ar, e o que ele não detecta está anotado.
- [ ] Fiz o teste de resiliência e conheço o meu ponto único de falha.

## Resumo

- Um gateway é uma fronteira: custa tempo de ar, expõe metadados e pode ser um ponto único de falha.
- Reticulum: `RNodeInterface` mais `TCPServerInterface` ou `TCPClientInterface`, com `mode = boundary` na interface rápida e IFAC ou VPN.
- Meshtastic: MQTT com broker próprio, TLS e cifra ligada; o downlink escreve na sua mesh, então restrinja quem publica.
- Serviços locais úteis: nó de propagação LXMF, páginas de status, registro de sinal (com política de retenção) e painel de saúde.
- Monitore sistema, rádio, ocupação do ar e energia; teste o que acontece sem internet e sem o gateway.

## Para aprofundar

- [ ] [Interfaces do Reticulum (manual oficial)](https://reticulum.network/manual/interfaces.html) (Reticulum): `TCPServerInterface`, `TCPClientInterface`, `RNodeInterface`, IFAC e modos de interface.
- [ ] [Understanding Reticulum (manual oficial)](https://reticulum.network/manual/understanding.html) (Reticulum): o que é um nó de transporte e quando habilitar.
- [ ] [MQTT, visão geral de integrações](https://meshtastic.org/docs/software/integrations/mqtt/) (Meshtastic, documentação oficial): tópicos, `uplink_enabled` e `downlink_enabled`, e o canal `mqtt` do exemplo de JSON.
- [ ] [Using the Meshtastic Python Library](https://meshtastic.org/docs/development/python/library/) (Meshtastic, documentação oficial): a API de eventos usada no registrador.
- [ ] [systemd.service(5)](https://www.man7.org/linux/man-pages/man5/systemd.service.5.html) (manual do Linux): `Type=oneshot` e `Restart=`; para temporizadores, veja também o manual `systemd.timer` da sua versão.
- [ ] [Reticulum, Encrypted Packet Radio + WiFi Network Demo](https://www.youtube.com/watch?v=NSOOJW66E9A) (The Tech Prepper): demonstração de um gateway entre packet radio e Wi-Fi, citada no Módulo 10 (não assisti; lembre da restrição de cifra em rádio amador).

[Próxima aula: Testes, medições e documentação da rede](./09%20-%20Testes%20Medicoes%20e%20Documentacao.md)
