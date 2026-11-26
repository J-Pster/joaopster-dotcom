[Voltar ao módulo](./README.md)

# Aula 4: GPIO e PTT com segurança

*Pergunta que esta aula responde: como o Raspberry Pi aciona o transmissor de um rádio (PTT) sem queimar o pino nem deixar o rádio preso em transmissão, e quando CAT, GPIO ou VOX é a escolha certa?*

> **Escopo e aviso legal.** PTT por GPIO serve a rádios com interface de áudio (FT8, packet, APRS, Winlink, Módulo 7). **Módulos LoRa, Meshtastic e RNode não usam PTT**: o chip LoRa controla o próprio amplificador. Esta aula só é útil se você tem um rádio e a autorização para transmitir com ele (licença de radioamador, [Módulo 5, Aula 2](../05%20-%20Radio%20Amador%20-%20Regulamentacao%20e%20Pratica/02%20-%20Do%20Zero%20ao%20Indicativo.md)); caso contrário, faça só a parte de eletrônica e software com LED e multímetro. Comandos e trechos de código vêm de documentação oficial (libgpiod, gpiozero, Direwolf), consultada em setembro de 2026; nomes de pinos e do dispositivo de GPIO variam por modelo e versão.

> **Perigos.** (1) Pinos do Raspberry Pi são de 3,3 V e suportam poucos miliampères: nunca ligue o pino direto ao rádio (Aula 2). (2) Uma falha no PTT pode deixar o transmissor **ligado continuamente**: superaquece o amplificador, interfere em outros e pode ser irregular. (3) **Nunca transmita sem antena ou carga fictícia** ([Módulo 4, Aula 7](../04%20-%20Antenas/07%20-%20Medicao%20Dummy%20Load%20e%20Erros%20Comuns.md)). (4) Alguns rádios têm tensões e correntes na linha de PTT que você deve ler no manual do seu modelo.

## Por que o PTT existe e por que o Pi o controla

Um rádio de voz transmite quando você aperta o botão do microfone: o **PTT** (*push-to-talk*). Um modo digital que usa a placa de som (Módulo 7, [aula 2](../07%20-%20Modos%20Digitais%20de%20Radio%20Amador/02%20-%20Placa%20de%20Som%20como%20Modem%20e%20Interface%20com%20o%20Radio.md)) produz áudio pelo computador, mas alguém precisa dizer ao rádio "agora transmita" no instante certo. Se o rádio ficasse sempre em transmissão, seria um farol permanente. Em muitos rádios, o PTT é acionado quando um pino do conector de microfone é ligado ao terra (confira no manual: há rádios com outras convenções). Um transistor pode fazer esse papel de botão: veja o [vídeo de demonstração](https://www.youtube.com/watch?v=wgZmwwxZj4g).

Em um Raspberry Pi sem monitor rodando um modem de software (Direwolf, Pat, WSJT-X), o GPIO é o meio mais direto de acionar o PTT: um pino do Pi vira o "dedo" que aperta o botão.

## As alternativas: CAT, GPIO, VOX, RTS/DTR, CM108

O Módulo 7 apresentou todas. Comparação para decidir em um projeto embarcado:

| Método | Como funciona | Vantagens | Riscos |
|---|---|---|---|
| **CAT** (via Hamlib) | Comando serial ao rádio | Um cabo USB só; controla também frequência e modo | Só rádios com CAT; latência; se o software trava, o estado do PTT depende do rádio |
| **GPIO do Pi** | Pino do Pi aciona um circuito | Simples, barato, sem cabo extra | Exige circuito de proteção; estado no boot e em falha é por sua conta |
| **RTS/DTR** de porta serial | Linha da serial fecha o PTT | Interfaces prontas | Exige circuito de acionamento |
| **CM108/CM119** (placas de som USB) | Pino do chip de áudio USB | Um cabo USB para áudio e PTT | Só com esse chip |
| **VOX** | O rádio ou a interface transmite ao detectar áudio | Sem cabo de controle | Perde o começo do áudio; ruído dispara transmissão; **é o menos previsível** |

A documentação do Direwolf (modem de packet) diz que, sem porta serial, "GPIO pode ser usado em sistemas Linux adequados; caso contrário, será preciso um circuito VOX com desligamento muito rápido", e o guia de interface de rádio dele detalha os casos. **Recomendação:** GPIO ou CAT para operação real; VOX apenas para teste ou quando não há alternativa. Em modos de relógio estrito (FT8), um PTT explícito é preferível, pois o áudio só começa depois que o rádio já está em transmissão (Módulo 7, Aula 2).

## O circuito de proteção

**Regra do guia do Direwolf**, que resume a aula: *não conecte direto; use um interruptor a transistor ou um opto-isolador.* Duas montagens comuns:

### A) Transistor NPN em coletor aberto (o mais simples)

O transistor faz o papel de botão: quando o pino do Pi está em nível alto, ele conduz e liga o pino de PTT do rádio ao terra.

```
GPIO (3,3 V) ---[R_base]---+---- Base
                           |
                        [R_pull-down 10 kohm]
                           |
                          GND        Coletor ---- PTT do rádio
                                     Emissor ---- GND do rádio
```

**Como dimensionar (exemplo com números ilustrativos; leia o manual do seu rádio e a folha de dados do seu transistor):**

- Corrente que a linha de PTT do rádio exige do transistor: suponha `Ic = 10 mA` (o manual do rádio diz o valor real).
- Para o transistor saturar de verdade (comportar-se como chave), use um ganho "forçado" de cerca de 10: `Ib = Ic / 10 = 1 mA`.
- Resistor de base: `R = (3,3 V - 0,7 V) / 1 mA = 2,6 kohm`. Use o valor comercial `2,2 kohm` (dá `Ib` de cerca de 1,2 mA). Em nível alto o pino do Pi fornece 1,2 mA, muito abaixo dos 8 mA de intensidade padrão que a documentação oficial dá para saída.
- **Resistor de pull-down de 10 kohm** entre a base e o terra: mantém o transistor desligado quando o pino do Pi está desconfigurado (boot, reinício, programa morto). Essa é a **proteção de falha**: sem energia ou sem programa, não há transmissão.

O terra do Pi e o terra do rádio ficam ligados por este circuito. Isso costuma funcionar, mas pode criar laços de terra e trazer RF para o Pi.

### B) Optoacoplador (isola eletricamente o Pi do rádio)

Um **optoacoplador** tem um LED e um fototransistor no mesmo encapsulamento: o LED acende, o fototransistor conduz, e **não há ligação elétrica** entre os dois lados. O Pi e o rádio ficam isolados, e o ruído de RF do rádio não volta ao Pi.

```
GPIO (3,3 V) ---[R_LED]--- Anodo (LED do opto) --- Catodo --- GND do Pi

Coletor do opto ---- PTT do rádio
Emissor do opto ---- GND do rádio
```

**Exemplo numérico (valores típicos, confira a folha de dados do seu componente):** um optoacoplador de uso geral (família PC817) tem tensão do LED por volta de 1,2 V. Para `IF = 5 mA`: `R_LED = (3,3 - 1,2) / 0,005 = 420 ohm`; use `470 ohm` (dá cerca de 4,5 mA). Atenção: o **CTR** (*current transfer ratio*, razão entre a corrente do fototransistor e a do LED) de um optoacoplador desse tipo é da ordem de dezenas de por cento, então com 4,5 mA no LED o fototransistor só garante uma corrente de coletor de alguns miliampères. **Se o PTT do seu rádio exige mais que isso**, use um optoacoplador de saída mais forte, ou combine: o opto aciona a base de um transistor que aciona o PTT.

O guia do Direwolf também lembra a via mais pronta: interfaces comerciais e o **CM108** (`PTT CM108` no arquivo de configuração), que dispensam a montagem.

**Para uma linha de PTT com tensão maior que 3,3 V, ou ligada a um rádio de alta potência, não improvise.** Leia o manual do seu rádio e valide o circuito com multímetro com o rádio **desligado** antes de ligar o rádio.

## Software: acionar o pino do jeito certo

Duas bibliotecas oficiais, ambas em Python:

**1) libgpiod (interface de GPIO do kernel Linux, usada por bibliotecas modernas; o guia do Direwolf diz que Bookworm e Trixie precisam desse método).** O pacote Python (`pip install gpiod`, como diz a documentação) usa a API de requisição de linhas. Exemplo baseado no exemplo oficial do README do libgpiod (a linha `LINE = 5` da documentação foi trocada por uma variável configurável):

```python
import gpiod
from gpiod.line import Direction, Value

CHIP = "/dev/gpiochip0"   # confira com o comando gpioinfo (varia por modelo e sistema)
LINE = 17                 # exemplo: use a linha do GPIO que você ligou ao circuito

with gpiod.request_lines(
    CHIP,
    consumer="ptt",
    config={LINE: gpiod.LineSettings(direction=Direction.OUTPUT,
                                     output_value=Value.INACTIVE)},
) as request:
    request.set_value(LINE, Value.ACTIVE)    # liga o PTT
    request.set_value(LINE, Value.INACTIVE)  # desliga
```

O guia do Direwolf explica que o dispositivo pode mudar: no **Pi 5 com Bookworm, o cabeçalho de 40 pinos está em `gpiochip4`, e não em `gpiochip0`; com o Trixie ele volta a ser `gpiochip0`** (segundo o guia). O comando `gpioinfo` lista as linhas. Não chute: confira.

**2) gpiozero (mais alto nível).** A documentação oficial dela mostra `LED(17)` com `on()` e `off()`; a classe base para saídas em geral é `OutputDevice`, com `active_high` e `initial_value` (a documentação da `LED` os descreve). A biblioteca usa `lgpio` como padrão (e `RPi.GPIO` como segunda preferência).

```python
from gpiozero import OutputDevice

ptt = OutputDevice(17, active_high=True, initial_value=False)  # BCM 17 é um exemplo
ptt.on()
ptt.off()
ptt.close()
```

Confira a assinatura na documentação da sua versão do gpiozero.

**Exclusividade.** No modelo do kernel, **uma linha só pode ser controlada por um processo por vez**. Se outro programa já a requisitou, o seu falha; `gpioinfo` mostra `[used]` nas linhas ocupadas.

**Programas prontos.** O Direwolf tem o PTT por GPIO na configuração: em `direwolf.conf`, `PTT GPIO 25` (método antigo, sysfs) ou, com libgpiod, `PTT GPIOD gpiochip0 25`; um sinal `-` antes do número inverte a polaridade. O guia diz que Raspberry Pi OS Bookworm e Trixie precisam da forma nova (GPIOD). Você não precisa escrever código para PTT se o modem que usa já tem essa opção.

## Comportamento seguro: timeout e fail-safe

Regras para qualquer código ou circuito de PTT:

1. **Estado seguro é "desligado".** O circuito com pull-down e transistor garante isso sem energia ou sem processo. Verifique ligando o Pi com o programa parado, medindo a linha de PTT com multímetro: ela deve estar em repouso.
2. **Sempre desligar no fim.** `try/finally` ou o bloco `with` e o tratamento de `SIGTERM` (o que o systemd envia ao parar o serviço). Ao sair do `with`, o libgpiod solta a linha; **não assuma o nível que ela terá depois** (depende do hardware e do driver, e eu não confirmei o comportamento na documentação): por isso o pull-down externo.
3. **Timeout de transmissão (TOT) em software.** O programa nunca mantém o PTT ativo por mais que um limite duro, mesmo que o áudio continue.
4. **Timeout de hardware no rádio.** Muitos rádios têm o próprio TOT (temporizador que corta a transmissão depois de N segundos): ative-o (o manual do rádio diz como).
5. **Atraso entre PTT e áudio.** O rádio precisa de alguns décimos de segundo para entrar em transmissão (o JS8Call sugere 0,2 s, Módulo 7, Aula 2); áudio antes disso é perdido.
6. **Intervalo mínimo entre transmissões** e contagem: evita laços.

Exemplo de esqueleto com limite duro e desligamento garantido:

```python
import signal
import sys
import time
import gpiod
from gpiod.line import Direction, Value

CHIP = "/dev/gpiochip0"    # confira com gpioinfo
LINE = 17                  # exemplo
MAX_TX_S = 10.0            # limite duro de uma transmissão (TOT de software)
TX_DELAY_S = 0.2           # tempo para o rádio entrar em transmissão

def transmit(request, play_audio, expected_seconds):
    """Aciona o PTT, chama play_audio() e desliga, com limite de duração."""
    if expected_seconds > MAX_TX_S:
        raise ValueError("transmissão acima do limite")
    request.set_value(LINE, Value.ACTIVE)
    try:
        time.sleep(TX_DELAY_S)
        play_audio()               # sua função que toca o áudio (bloqueia até o fim)
    finally:
        request.set_value(LINE, Value.INACTIVE)   # sempre desliga

def main():
    signal.signal(signal.SIGTERM, lambda *_: sys.exit(0))   # o finally roda
    with gpiod.request_lines(
        CHIP, consumer="ptt",
        config={LINE: gpiod.LineSettings(direction=Direction.OUTPUT,
                                         output_value=Value.INACTIVE)},
    ) as request:
        ...  # sua lógica; chame transmit(request, ...)

if __name__ == "__main__":
    main()
```

Note as limitações do esqueleto: o `finally` cobre exceções e `SIGTERM`, mas **não** um travamento em `play_audio()` sem fim (por isso a Aula 3 ensina `Restart=` e watchdog, e o rádio deve ter TOT próprio) nem `kill -9` (só o pull-down e o TOT do rádio protegem).

## Ordem de teste segura

1. **Sem rádio.** Ligue um LED com resistor (Aula 2: nunca sem resistor) no lugar do circuito; teste `on` e `off`. Meça com multímetro a saída do circuito (transistor ou opto) sem o rádio conectado.
2. **Rádio desligado, circuito ligado.** Meça a linha de PTT com o Pi parado (repouso) e com o programa ligando o PTT (ativo).
3. **Rádio com carga fictícia, potência mínima.** Ligue o rádio a uma dummy load de potência compatível ([Módulo 4, Aula 7](../04%20-%20Antenas/07%20-%20Medicao%20Dummy%20Load%20e%20Erros%20Comuns.md)) e teste o PTT com o programa. Confirme que o rádio entra e sai de transmissão, e que o TOT do rádio corta.
4. **Só então a antena**, em faixa e modo em que você está autorizado, com a identificação regulamentar (Módulo 5).

## Entregável

1. **Esquemático** do circuito de PTT (desenho à mão ou ASCII), com valores dos resistores e a origem de cada valor (manual do rádio, folha de dados).
2. **Registro de testes** com as medições do teste 1 e 2 (tensão em repouso, tensão em ativo).
3. **Script de PTT** com TOT de software, ou o arquivo de configuração do modem com a linha de PTT.
4. **Unidade systemd** do seu programa com `Restart=on-failure` (Aula 3).

## Checklist da etapa

- [ ] Sei por que o PTT existe e por que LoRa e Meshtastic não usam.
- [ ] Nenhum GPIO está ligado direto ao rádio.
- [ ] O circuito tem pull-down e repouso "desligado" medido com multímetro.
- [ ] O programa desliga o PTT em `finally` e em `SIGTERM`.
- [ ] Ativei o TOT do rádio, e o software tem seu próprio limite.
- [ ] Testei com LED, depois com carga fictícia, antes de qualquer antena.

## Resumo

- PTT é o "botão de transmitir"; o GPIO do Pi o aciona por um circuito. Módulos LoRa não usam PTT.
- Nunca ligue o pino direto ao rádio: transistor NPN com pull-down ou optoacoplador. Exemplos: `R_base = (3,3 - 0,7) / 1 mA`, arredondado para 2,2 kohm; `R_LED = (3,3 - 1,2) / 5 mA`, cerca de 470 ohm. Valores reais dependem do seu rádio.
- CAT dá controle e um cabo só; GPIO é simples e sem cabo extra; VOX é o menos previsível.
- libgpiod (`gpiod.request_lines`, `LineSettings`, `set_value`) ou gpiozero (`OutputDevice`); o dispositivo (`gpiochip0` ou `gpiochip4`) depende do modelo e do sistema; use `gpioinfo`.
- Fail-safe: repouso desligado por hardware, `try/finally` e `SIGTERM`, TOT em software e no rádio, e teste com carga fictícia antes da antena.

## Para aprofundar

- [ ] [Ham Radio Digital Modes: How a Tiny Transistor Pushes PTT for You!](https://www.youtube.com/watch?v=wgZmwwxZj4g) (Temporarily Offline): explica o "porquê" do PTT com um transistor, antes de qualquer software (título e canal confirmados; conteúdo não assistido).
- [ ] [Dire Wolf Radio Interface Guide](https://raw.githubusercontent.com/wb2osz/direwolf-doc/main/Radio-Interface-Guide.pdf) (WB2OSZ): PTT por GPIO, `gpioinfo`, diferença de `gpiochip0` e `gpiochip4`, CM108 e interfaces de rádio.
- [ ] [libgpiod, bindings Python (README oficial)](https://github.com/brgl/libgpiod/blob/master/bindings/python/README.md) (libgpiod): o exemplo oficial de `request_lines`, `LineSettings`, `Direction` e `Value`.
- [ ] [gpiozero, API de dispositivos de saída](https://gpiozero.readthedocs.io/en/stable/api_output.html) (gpiozero): `LED`, `OutputDevice`, `on()`, `off()`, `active_high` e `initial_value`.
- [ ] [GPIO Usage on Raspberry Pi Devices (white paper oficial)](https://pip-assets.raspberrypi.com/categories/685-app-notes-guides-whitepapers/documents/RP-006553-WP-2-A%20history%20of%20GPIO%20usage%20on%20Raspberry%20Pi%20devices,%20and%20current%20best%20practices.pdf) (Raspberry Pi): a história das bibliotecas de GPIO e a recomendada hoje.
- [ ] [Getting Started with KM4ACK Build a Pi](https://www.youtube.com/watch?v=GkGcu6WaWsc) (KM4ACK): demonstra o Build-a-Pi, instalador de modos digitais para Raspberry Pi (título e canal confirmados; conteúdo não assistido).

[Próxima aula: Decodificadores em Rust](./05%20-%20Decodificadores%20em%20Rust.md)
