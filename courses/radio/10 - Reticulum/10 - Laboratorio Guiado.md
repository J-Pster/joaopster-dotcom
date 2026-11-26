[Voltar ao módulo](./README.md)

# Aula 10: Laboratório guiado

*Pergunta que esta aula responde: como eu vejo, com as minhas mãos, endereços por hash, announces, caminhos, links, transporte de vários saltos e mensagens LXMF, primeiro só no computador, depois em dispositivos reais e por fim com um rádio LoRa?*

> **Etapas 0 a 2 (só computador)** foram executadas por mim em 24 de setembro de 2026, em Windows 11 com Python 3.13.13, `rns` 1.5.4 e `lxmf` 1.1.1; os comandos e configurações abaixo são os que rodei. **Etapas 3 a 5 (dispositivos e rádio)** eu **não executei**: seguem o manual e os READMEs oficiais e dizem "confira" onde há detalhe de menu ou de hardware que não verifiquei.
>
> **Aviso de segurança e legalidade.** As etapas 0 a 3 não usam radiofrequência. **A etapa 4 transmite em rádio**: só faça com equipamento **certificado pela Anatel** em regime de **radiação restrita**, dentro dos requisitos técnicos, **ou** sob licença de radioamador com **conteúdo aberto** (o Reticulum cifra por desenho, então a faixa amadora não serve para este laboratório; Aula 8 e Módulo 5, Aulas 5 e 6). Antena longe de rede elétrica e com instalação segura (Módulo 4, Aula 6). Quando em dúvida, **não transmita**.

## O que você vai fazer

| Etapa | Onde | Objetivo |
|---|---|---|
| 0 | Computador | Instalar o Reticulum em um ambiente isolado |
| 1 | Computador | Dois nós Reticulum conversando por TCP local, com transferência de arquivo |
| 1b | Computador | Três nós: um transport node no meio e a contagem de saltos |
| 2 | Computador | Uma mensagem LXMF de um nó para outro, por script |
| 3 | Dois dispositivos na mesma rede | AutoInterface e mensagem pelo Sideband |
| 4 | Hardware LoRa (opcional, com regime legal) | RNode, `RNodeInterface` e mensagem sobre rádio |
| 5 | Raspberry Pi ou PC (opcional) | Gateway LoRa para Wi-Fi e internet |

## Etapa 0: preparar o ambiente

Use um ambiente virtual do Python para não misturar com o resto do sistema (PowerShell no Windows; no Linux use `python3 -m venv` e `source .../bin/activate`).

```
python -m venv rns-lab
.\rns-lab\Scripts\Activate.ps1
pip install rns lxmf
rnsd --version
```

Esperado (na minha máquina): `rnsd 1.5.4`. Se o PowerShell bloquear a ativação do ambiente, é a política de execução de scripts; resolva conforme a documentação do PowerShell ou chame os executáveis por caminho completo (`.\rns-lab\Scripts\rnsd.exe`).

Crie uma pasta de trabalho com três subpastas de configuração, `lab\A`, `lab\B` e `lab\C`. Cada uma será **um nó Reticulum independente** no mesmo computador.

## Etapa 1: dois nós por TCP local

**Ideia (Aulas 3 e 5):** um nó é uma **instância** com suas interfaces. Vamos fazer o nó A ouvir em TCP e o B se conectar a ele, como dois computadores em rede, só que ambos em `127.0.0.1`.

**Um cuidado do mesmo computador:** cada instância abre uma **instância compartilhada** local. Em Windows (sem sockets de domínio) isso usa portas TCP; duas instâncias precisam de portas **diferentes**. No Linux, o manual manda usar `instance_name` distinto.

Arquivo `lab\A\config` (sem acento, sem BOM):

```
[reticulum]
enable_transport = No
share_instance = Yes
shared_instance_port = 37428
instance_control_port = 37429

[logging]
loglevel = 4

[interfaces]
  [[TCP Server]]
    type = TCPServerInterface
    interface_enabled = True
    listen_ip = 127.0.0.1
    listen_port = 4242
```

Arquivo `lab\B\config`:

```
[reticulum]
enable_transport = No
share_instance = Yes
shared_instance_port = 47428
instance_control_port = 47429

[logging]
loglevel = 4

[interfaces]
  [[TCP Client]]
    type = TCPClientInterface
    interface_enabled = True
    target_host = 127.0.0.1
    target_port = 4242
```

Em Linux, troque as duas linhas de porta por `instance_name = a` (no A) e `instance_name = b` (no B). Interfaces e chaves vêm do manual; para ver todas as opções na sua versão, `rnsd --exampleconfig`.

**Passo 1.1: subir os dois nós.** Em duas janelas de terminal:

```
rnsd --config lab\A
rnsd --config lab\B
```

**Passo 1.2: verificar.** Em um terceiro terminal (`--config` diz a qual nó o utilitário fala):

```
rnstatus --config lab\A
rnstatus --config lab\B
```

O que eu vi (trecho; os números variam): no A, `TCPServerInterface[TCP Server/127.0.0.1:4242]` com `Status : Up` e **`Clients : 1`**; no B, `TCPInterface[TCP Client/127.0.0.1:4242]` com `Status : Up`. Além disso, cada um mostra a linha `Shared Instance[porta]`. Se o A mostrar `Clients : 0`, o B não conectou: confira a porta e se o A subiu primeiro.

**Passo 1.3: transferir um arquivo (Aula 4).** O `rncp` usa link e Resource. O receptor precisa **autorizar a identidade** do emissor. Em um terminal:

```
rncp --config lab\B -p
```

Saída (formato confirmado): `Identity : <hash>` e `Listening on : <hash>`. Anote a **Identity do B** (`hashB`). Depois:

```
rncp --config lab\A -p
```

Anote o **Listening on do A** (`destA`). Agora suba o receptor em A, autorizando o B, **a partir da pasta onde quer receber**:

```
rncp --config lab\A --listen -a hashB -b 0
```

E, em outro terminal, envie de B:

```
rnpath --config lab\B destA
rncp --config lab\B teste.txt destA
```

O que eu vi: o `rnpath` respondeu **"Path found, destination ... is 1 hop away"** e o `rncp` terminou com **"Transfer complete 100.0% ... copied to <destA>"**. O arquivo apareceu na pasta em que o receptor foi iniciado. No meu Windows o receptor também registrou avisos de "arquivo em uso" ao gravar, mesmo com o arquivo presente (Aula 6); não investiguei a causa.

**O que observar e por quê:**

- **`destA` é o hash de um destino (Aula 2).** Você não configurou endereço algum: o hash veio da identidade que o `rncp` gerou no diretório do nó.
- O B **não sabia** onde estava `destA` até o **announce** dele (o `-b 0` faz o `rncp` anunciar ao iniciar). O `rnpath` mostra o resultado: **1 salto**, mesmo estando na mesma máquina, porque A e B são **nós diferentes**.
- `rnstatus --config lab\A -A` mostra estatísticas de announces; `rnpath --config lab\B -t` lista a **tabela de caminhos** do B (Aula 3).
- Experimento (previsão minha, não testei): encerre o listener e repita o envio. O `rncp` deve falhar ao estabelecer o link, porque o destino sumiu, mas o caminho continua na tabela por um tempo (validade padrão de uma semana, Aula 3).

## Etapa 1b: um transport node no meio e a contagem de saltos

**Ideia (Aula 3):** dois nós ligados a um terceiro só se enxergam se ele **fizer transporte**. Vamos ver isso.

1. Crie `lab\C\config` igual ao B, mas com portas próprias (`shared_instance_port = 57428`, `instance_control_port = 57429`), também como **cliente** de `127.0.0.1:4242`.
2. No `lab\A\config`, mude para **`enable_transport = Yes`** e reinicie o A. Agora A é o nó do meio, ao qual B e C se conectam.
3. Suba B e C. Em C, rode `rncp --config lab\C -p`, anote `Listening on` (`destC`) e a Identity, e coloque o receptor no ar (`rncp --config lab\C --listen -a hashB -b 0`).
4. Em B: `rnpath --config lab\B destC`.

O que eu vi: **"Path found, destination ... is 2 hops away via <hash do transport>"**. Repare: `rnstatus --config lab\A` agora mostra **`Clients : 2`** e a linha **`Transport Instance <hash> running`**. O "via" é o **hash de identidade do transport node** (o campo de endereço do cabeçalho tipo 2, Aula 3).

**Perguntas para você responder sem consultar:** por que o caminho é de 2 saltos e não de 1? O que B sabe sobre C? Nenhum nó sabe o caminho completo: o que cada um sabe? Se você desligar a opção `enable_transport` do A e repetir, o que o manual diz que acontece? (Sem transport node, só nós dentro de alcance direto se comunicam: previsão do manual, que eu não testei.)

## Etapa 2: uma mensagem LXMF por script

**Ideia (Aula 7):** LXMF é o protocolo de mensagens sobre o Reticulum. Vamos mandar uma mensagem do B para um receptor no A, com a API oficial. Os scripts são os que rodei, baseados nos exemplos `docs/example_sender.py` e `docs/example_receiver.py` do repositório LXMF (que trazem também envio oportunista e por nó de propagação).

Mantenha os `rnsd` A e B rodando (com `enable_transport = No` ou `Yes`, tanto faz aqui).

`lx_recv.py` (receptor; roda em A por 60 s):

```python
import RNS, LXMF, time, sys

def cb(m):
    print("RECEBIDO:", m.title_as_string(), "|", m.content_as_string(),
          "| assinatura ok:", m.signature_validated, flush=True)

RNS.Reticulum(configdir=sys.argv[1])
router = LXMF.LXMRouter(storagepath=sys.argv[1] + "/lxmf_store")
ident = RNS.Identity()
dest = router.register_delivery_identity(ident, display_name="Receptor A")
router.register_delivery_callback(cb)
print("Endereco LXMF:", RNS.prettyhexrep(dest.hash), flush=True)
time.sleep(3)
router.announce(dest.hash)
time.sleep(int(sys.argv[2]))
```

`lx_send.py` (remetente; roda em B):

```python
import RNS, LXMF, time, sys

RNS.Reticulum(configdir=sys.argv[1])
router = LXMF.LXMRouter(storagepath=sys.argv[1] + "/lxmf_store")
ident = RNS.Identity()
source = router.register_delivery_identity(ident, display_name="Remetente B")
router.announce(source.hash)
time.sleep(5)

dest_hash = bytes.fromhex(sys.argv[2])
if not RNS.Transport.has_path(dest_hash):
    RNS.Transport.request_path(dest_hash)
    t = time.time()
    while not RNS.Transport.has_path(dest_hash) and time.time() - t < 30:
        time.sleep(0.2)

rid = RNS.Identity.recall(dest_hash)
dest = RNS.Destination(rid, RNS.Destination.OUT, RNS.Destination.SINGLE, "lxmf", "delivery")
lxm = LXMF.LXMessage(dest, source, "Ola pelo Reticulum", "Teste",
                     desired_method=LXMF.LXMessage.DIRECT)
lxm.register_delivery_callback(
    lambda m: print("Estado:", m.state, "(DELIVERED =", LXMF.LXMessage.DELIVERED, ")", flush=True))
router.handle_outbound(lxm)
time.sleep(20)
```

Execução:

```
python lx_recv.py lab\A 60
    (anote o "Endereco LXMF")
python lx_send.py lab\B <endereco_lxmf_sem_os_sinais_de_menor_e_maior>
```

O que eu vi: o receptor imprimiu `RECEBIDO: Teste | Ola pelo Reticulum | assinatura ok: True` e o remetente `Estado: 8 (DELIVERED = 8 )`.

**Uma lição que apareceu no teste.** Na primeira tentativa, o remetente **não anunciou** o próprio endereço antes de enviar, e a mensagem chegou com **`assinatura ok: False`**. O receptor não conhecia a chave pública do remetente, então **não conseguia verificar a assinatura Ed25519** (o código de exemplo do LXMF prevê esse motivo: "Cannot verify, source is unknown"). Com `router.announce(source.hash)` antes de enviar, ficou `True`. É exatamente o que a Aula 2 disse: assinatura só se valida com a chave pública, e a chave pública vem do announce.

**Observação:** cada execução dos scripts cria `RNS.Identity()` **novo**, ou seja, um endereço LXMF novo. Aplicativos como Sideband guardam a identidade em arquivo (Aula 7). Trocar o método para `OPPORTUNISTIC` ou `PROPAGATED` está comentado no exemplo oficial.

## Etapa 3: dois dispositivos reais com AutoInterface e Sideband

**Ideia (Aula 5):** o `AutoInterface` padrão já une, sem configuração, dispositivos na mesma rede local.

1. **Material:** um PC (Windows, Linux ou macOS) e um celular Android na **mesma rede Wi-Fi**. Instale o **Sideband** nos dois (Aula 7): no Android, o APK da página de releases, **verificando o certificado de assinatura** que o README publica; no PC, o pacote da plataforma (no Windows, o ZIP com `Sideband.exe`, que cria `C:\Users\<usuario>\.reticulum\config` se não existir).
2. **Não mexa na configuração:** a padrão traz o `AutoInterface`.
3. **Firewall:** o manual manda liberar **UDP nas portas 29716 e 42671** se a descoberta falhar. Roteadores baratos que **isolam clientes** também bloqueiam; às vezes dá para desligar isso no roteador.
4. Abra o Sideband nos dois, use a função de **anunciar (announce)** e procure o outro na lista de contatos ou anúncios recebidos. Nomes exatos de menus e telas variam por versão: **confira o Guide embutido no app**. Envie uma mensagem de texto e depois uma imagem pequena.
5. **Verifique no PC:** com o Sideband aberto, `rnstatus` deve mostrar a `AutoInterface` com `Status : Up` e **`Peers : 1 reachable`** (formato de exemplo do manual). Se `Peers : 0`, veja o firewall e o isolamento de clientes.

**Observe:** o endereço do outro é um **hash LXMF** (Aula 7). Você não fez cadastro. Em Wi-Fi a mensagem chega em instantes; guarde essa referência para comparar com o LoRa.

## Etapa 4 (opcional, com equipamento e regime legais): um RNode e LoRa

**Pré-requisitos, sem os quais você não deve ligar o rádio:**

- **Regime legal escolhido** e coerente (Aula 8): rede privada = **radiação restrita** com hardware **certificado**; a **faixa amadora não serve** para tráfego Reticulum cifrado no Brasil.
- **Frequência, largura de banda, spreading factor, coding rate e potência** decididos com base no Módulo 8 e no Ato vigente da Anatel: **não copie** os valores do exemplo do manual (867,2 MHz, faixa europeia).
- **Duas placas compatíveis** (lista da Aula 6) para haver com quem falar.

**Passos (manual):**

1. Com `rns` instalado, conecte a placa por USB e rode `rnodeconf --autoinstall`. Siga as perguntas. Depois, `rnodeconf -i <porta>` mostra a informação do dispositivo (porta serial: `COMx` no Windows, `/dev/ttyUSB0` ou `/dev/ttyACM0` no Linux). Confira as opções com `rnodeconf --help`.
2. Adicione a interface ao `config` do nó que usará o rádio (Aula 5 e 6):

   ```
   [[RNode LoRa]]
     type = RNodeInterface
     enabled = yes
     port = <sua porta serial>
     frequency = <Hz>
     bandwidth = <Hz>
     txpower = <dBm>
     spreadingfactor = <7 a 12>
     codingrate = <5 a 8>
   ```

   **Os dois nós precisam ter exatamente os mesmos parâmetros de rádio.** Opcional: `airtime_limit_short`/`airtime_limit_long` para limitar a ocupação do ar.
3. Reinicie o `rnsd`. `rnstatus` deve mostrar a `RNodeInterface` com `Status : Up` e uma **taxa em kbps** bem menor que a de Wi-Fi (o manual mostra `Rate : 1.30 kbps` como exemplo de um RNode; o seu depende do SF e da largura de banda, Módulo 8).
4. **Teste de conectividade:** o `rnprobe` só responde a destinos com prova ligada. Em um transport node, ligue `respond_to_probes = Yes` em `[reticulum]`; ele imprime o destino de probe no log ao iniciar; do outro nó rode `rnprobe rnstransport.probe <hash>`. O manual mostra que a saída inclui **RTT e, se a interface reportar, RSSI e SNR**, exemplo de `Round-trip time is 1.809 seconds over 1 hop [RSSI -73 dBm] [SNR 12.0 dB]`. Não espere números iguais.
5. **Teste de dados:** rode o Sideband (ou o `rncp`) sobre o nó com o RNode e envie **uma frase curta**. Note a latência **em segundos** e compare com o Wi-Fi da etapa 3.
6. **Apps:** o Sideband também suporta conectar-se a um RNode; como configurar (USB, Bluetooth) muda por versão e plataforma: **siga o Guide do app**. O vídeo sobre parear RNode e Sideband, na lista abaixo, ilustra isso (não assisti).

**Experimentos que ensinam:**

- **Alcance e parâmetros:** aumente o spreading factor e observe RSSI/SNR e a latência (Módulo 8).
- **Announces no LoRa:** com `rnstatus -A`, veja quantos announces a interface trata (Aula 3: teto de 2%).
- **Uma mensagem de 500 bytes** leva cerca de `500 x 8 / taxa` s, mais sobrecarga. Meça e compare com a conta da Aula 3.

## Etapa 5 (opcional): gateway LoRa para Wi-Fi e internet

**Ideia (Aula 5):** um sistema com **LoRa mais Wi-Fi mais uplink** faz o papel de gateway; os outros dispositivos usam só o `AutoInterface`.

1. Em um Raspberry Pi (Raspberry Pi OS de 64 bits) ou PC fixo, instale o `rns`, o RNode e coloque no `config`: `enable_transport = Yes`, o `AutoInterface`, a `RNodeInterface` da etapa 4 e um enlace para o restante da rede.
2. Se o enlace for TCP para uma rede rápida, marque-o **`mode = boundary`** (Aula 5).
3. Suba como serviço (`rnsd -s` ou `systemd`, Aula 6).
4. **Teste:** do celular, no Wi-Fi da casa, alcance um nó do outro lado do LoRa. `rnpath` mostra o caminho e os saltos; `rnstatus` mostra o tráfego por interface.

Um gateway com internet **muda o modelo de ameaça**: TCP revela IPs (Aula 8). Se o seu objetivo é rede privada, considere ficar **só em LoRa e Wi-Fi**, sem uplink.

## Solução de problemas

| Sintoma | Causa provável | O que fazer |
|---|---|---|
| `rnstatus` não mostra a interface esperada | Interface com `enabled` ausente (padrão falso) ou erro de nome | Confira `enabled = yes` (ou `interface_enabled`) e o log com `loglevel = 5` |
| Duas instâncias no mesmo PC brigam | Mesmas portas da instância compartilhada | Portas diferentes (Windows) ou `instance_name` distinto (Linux) |
| `rnpath` não acha o destino | O destino nunca anunciou, ou não há transport node entre os dois | Anunciar; ligar `enable_transport` no nó do meio |
| Mensagem LXMF chega sem assinatura válida | O remetente não anunciou antes | `router.announce(...)` antes de enviar |
| `AutoInterface` sem pares | Firewall bloqueia UDP 29716 e 42671, ou o roteador isola clientes | Liberar as portas; testar em outra rede ou por cabo |
| RNode "Up" mas sem vizinhos | Parâmetros de rádio diferentes entre os nós; antena; distância | Igualar frequência, largura de banda, SF e CR; conferir antena (Módulo 4) |
| Saída de utilitário vazia ao redirecionar | Peculiaridade que vi ao redirecionar a saída no Windows | Rode em terminal normal |

## Checklist do laboratório

- [ ] Explico por que `destA` não foi configurado por mim (endereço = hash da identidade).
- [ ] Mostro no `rnstatus` que a interface TCP subiu e no `rnpath` o número de saltos.
- [ ] Explico por que com um transport node no meio o caminho passou a 2 saltos.
- [ ] Explico por que a assinatura da mensagem LXMF só validou depois do announce do remetente.
- [ ] (Etapa 4) Mostro o `rnstatus` com a `RNodeInterface` e os parâmetros de rádio que escolhi e justifico o regime legal.

## Resumo

- Um **nó** é uma instância Reticulum com interfaces; dois nós no mesmo PC precisam de portas ou nomes de instância distintos.
- Sem endereço configurado: o hash vem da identidade; o caminho vem de um **announce**; `rnpath` e `rnstatus` mostram o que a rede aprendeu.
- Com um **transport node** no meio, B alcança C a **2 saltos**; sem ele, só há alcance direto.
- Para o destinatário **validar a assinatura** de uma mensagem LXMF, o remetente precisa ter anunciado.
- Wi-Fi e LoRa usam a mesma pilha; muda a **velocidade** e a **latência**. O RNode exige os **mesmos parâmetros de rádio** nas duas pontas e o **regime legal** correto.

## Para aprofundar

- [ ] [Using Reticulum on Your System](https://reticulum.network/manual/using.html) (manual oficial): configuração, `rnsd`, `rnstatus`, `rnpath`, `rncp`, `rnprobe`.
- [ ] [Getting Started Fast](https://reticulum.network/manual/gettingstartedfast.html) (manual oficial): instalação e primeiros passos.
- [ ] [Exemplos do LXMF: `example_sender.py` e `example_receiver.py`](https://github.com/markqvist/LXMF/tree/master/docs) (GitHub): o código-base dos scripts da Etapa 2.
- [ ] [Sideband (GitHub)](https://github.com/markqvist/Sideband) (espelho oficial): instalação por plataforma.
- [ ] [How to get started with Reticulum and RNode](https://www.youtube.com/watch?v=aBt56UpaQ0E) (andy kirby): do RNode ao Reticulum; não assisti.
- [ ] [How To Pair RNode With Sideband | Ghost Off Grid Network Setup Part 4 (Reticulum)](https://www.youtube.com/watch?v=FrTnSp-hsyI) (GhostStrats): parear um RNode com o Sideband; não assisti.
- [ ] [Flashing RNode firmware on a Heltec v3 for MeshChat and Sideband](https://www.youtube.com/watch?v=_ky_oFmmZEk) (Liam Cottle): flashar um Heltec V3 como RNode; de dezembro de 2024 pela busca, confira o manual atual; não assisti.
- [ ] [Reticulum - Wi-Fi + LoRa RNode Transport Architecture and Field Test](https://www.youtube.com/watch?v=KZuDMd5iThA) (The Tech Prepper): teste de campo com Wi-Fi e LoRa; não assisti.

[Voltar ao módulo: checklist de saída e próximo módulo](./README.md)
