# Aula 7: Primeiro link ponto a ponto entre dois módulos

[Voltar ao módulo](./README.md)

*Pergunta que esta aula responde: como fazer dois rádios LoRa "puros" (sem LoRaWAN) trocarem um pacote com Arduino/ESP32 e RadioLib, o que precisa ser igual dos dois lados e como saber se o enlace está bom?*

> **Antes de ligar qualquer coisa: a base legal.** Transmitir exige produto homologado pela Anatel (ou homologação por declaração para uso próprio) ou operação sob licença de radioamador em 33 cm, aberta, identificada e sem criptografia (Aula 4 e Módulo 5). **Eu não confirmei que uma placa de desenvolvimento genérica esteja coberta por qualquer um desses caminhos**, e a Aula 4 mostra que um LoRa de canal fixo em 125 kHz é um ponto em aberto no enquadramento da Anatel. O passo a passo abaixo é **técnico**: entenda o código e o rádio, e resolva a parte legal antes de emitir. Nunca use potência acima da que o certificado do seu produto declara, nunca troque a antena por uma que o certificado não cobre, e nunca transmita sem antena.

## Por que começar sem LoRaWAN

LoRaWAN esconde o rádio: você configura chaves e um servidor, e o SF é decidido por ADR. No ponto a ponto, **você controla cada parâmetro** e vê os números do rádio (RSSI, SNR, erro de frequência) diretamente, que é o que faz o Módulo 8 virar intuição. É também a base do que Meshtastic e Reticulum fazem por baixo.

## O que precisa ser igual nos dois lados

Um receptor só decodifica se os seguintes parâmetros baterem com os do transmissor (lista da própria documentação do RadioLib):

| Parâmetro | Por quê |
|---|---|
| **Frequência** | O receptor sintoniza uma frequência (tolera pequeno erro, adiante) |
| **BW** | Define a taxa de chips; largura errada não gera picos na FFT |
| **SF** | Define quantos chips por símbolo |
| **CR** | Define como os símbolos formam bytes |
| **Sync word** | Se não bate, o rádio descarta o pacote |
| **Comprimento do preâmbulo** | O receptor precisa detectá-lo |
| **Modo de cabeçalho e CRC** | Padrão do RadioLib: cabeçalho explícito, CRC de 2 bytes ligado |

O RadioLib, com `begin()` sem argumentos, usa: 434 MHz, BW 125 kHz, SF9, CR 4/7, sync word `0x12`, potência de 10 dBm, preâmbulo de 8 símbolos, cabeçalho explícito e CRC ligado (página "Default configuration" da wiki). **Repare no CR 4/7**: o padrão do RadioLib não é 4/5 (que é o do LoRaWAN). Bibliotecas diferentes têm padrões diferentes, então escreva todos os parâmetros explicitamente nos dois códigos e não dependa de padrão.

## Hardware

- **Duas placas SX1262** de 915 MHz (o exemplo usa a Heltec WiFi LoRa 32 V3, Aula 3). Um par de Wio-SX1262 também serve, mas os pinos são outros.
- **Duas antenas de 915 MHz, ligadas antes de energizar.** Um quarto de onda em 915 MHz tem `0,328 m / 4 = 8,2 cm` (Módulo 4, Aula 1). A antena de fábrica deve ser a do produto.
- **Dois cabos USB de dados** para gravar e para ver a saída serial.
- **Arduino IDE** (ou PlatformIO) com o pacote de placas ESP32 e a **biblioteca RadioLib**. A versão mais recente que vi é a **7.7.1 (31 de maio de 2026)**, no GitHub. Escolha no pacote de placas o modelo da Heltec WiFi LoRa 32 (V3) (o nome exato depende do pacote; confira a documentação da Heltec). Se a placa não entrar em modo de gravação, o procedimento descrito pela Heltec (na página da V4) é segurar o botão PRG, tocar em RST e soltar o PRG.
- Sem placa SX1262? Com SX127x (Ra-01H, RFM95), troque a linha do módulo (veja a variante no fim); o resto do código é igual.

Pinos da **Heltec V3**, conforme o arquivo de definição dessa placa no firmware do Meshtastic (confira o esquema da sua revisão): NSS = 8, DIO1 = 14 (interrupção), RESET = 12, BUSY = 13, SCK = 9, MISO = 11, MOSI = 10. Essa placa usa o DIO2 para chavear a antena e alimenta o TCXO pelo DIO3 em **1,8 V** (mesmo arquivo). Se você usar outra placa, esses valores mudam.

## Frequência

Use uma frequência **dentro de 915 a 928 MHz** e longe das bordas: um canal de 125 kHz centrado em 915,0 MHz vaza abaixo de 915 MHz. O exemplo usa **917,1 MHz**. Não é canal do LoRaWAN, o que evita confusão com dispositivos vizinhos.

## Transmissor

```cpp
#include <RadioLib.h>
#include <SPI.h>

// Pinos da Heltec WiFi LoRa 32 (V3) (ver Meshtastic variant.h). Mude para a sua placa.
constexpr int PIN_NSS  = 8;    // chip select do SPI
constexpr int PIN_DIO1 = 14;   // interrupção do SX1262
constexpr int PIN_RST  = 12;   // reset
constexpr int PIN_BUSY = 13;   // o SX1262 sinaliza "ocupado" aqui
constexpr int PIN_SCK  = 9, PIN_MISO = 11, PIN_MOSI = 10;

// A ordem do construtor é: NSS, DIO1, RESET, BUSY (exemplos do RadioLib para SX126x).
SX1262 radio = new Module(PIN_NSS, PIN_DIO1, PIN_RST, PIN_BUSY);

int counter = 0;

void setup() {
  Serial.begin(115200);
  delay(1000);

  // Diz ao ESP32 quais pinos são do SPI (na Heltec V3 são os do rádio).
  SPI.begin(PIN_SCK, PIN_MISO, PIN_MOSI, PIN_NSS);

  // TCXO alimentado pelo DIO3 do SX1262. Na Heltec V3 é 1,8 V (Meshtastic).
  // Se a sua placa tem cristal comum em vez de TCXO, use 0. Deve vir ANTES do begin().
  radio.tcxoVoltage = 1.8;

  // Todos os parâmetros explícitos. Os DOIS lados precisam ter os mesmos valores.
  ConfigLoRa_t cfg;
  cfg.frequency       = 917.1;  // MHz (dentro de 915 a 928 MHz, longe das bordas)
  cfg.bandwidth       = 125.0;  // kHz
  cfg.spreadingFactor = 9;      // SF9
  cfg.codingRate      = 5;      // 5 significa CR 4/5 (faixa aceita: 4 a 8)
  cfg.syncWord        = 0x12;   // rede "privada" no RadioLib (LoRaWAN usa 0x34)
  cfg.power           = 2;      // dBm. Baixo para teste de bancada; veja o certificado do produto
  cfg.preambleLength  = 8;      // símbolos

  int state = radio.begin(cfg);
  if (state != RADIOLIB_ERR_NONE) {
    Serial.print(F("begin falhou, codigo "));
    Serial.println(state);            // veja a tabela de erros abaixo
    while (true) { delay(10); }
  }

  // O SX1262 da Heltec V3 usa o DIO2 para trocar a antena entre TX e RX.
  state = radio.setDio2AsRfSwitch(true);
  if (state != RADIOLIB_ERR_NONE) {
    Serial.print(F("RF switch falhou, codigo "));
    Serial.println(state);
    while (true) { delay(10); }
  }

  Serial.println(F("TX pronto"));
}

void loop() {
  String msg = "ola LoRa #" + String(counter++);

  uint32_t t0 = millis();
  int state = radio.transmit(msg);          // bloqueante: só volta quando o pacote acabou
  uint32_t dt = millis() - t0;

  if (state == RADIOLIB_ERR_NONE) {
    Serial.print(F("enviado: "));
    Serial.print(msg);
    Serial.print(F(" | tempo medido: "));
    Serial.print(dt);
    Serial.print(F(" ms | tempo esperado (ToA): "));
    Serial.print((unsigned long)(radio.getTimeOnAir(msg.length()) / 1000));  // getTimeOnAir devolve microssegundos
    Serial.println(F(" ms"));
  } else {
    Serial.print(F("falha, codigo "));
    Serial.println(state);
  }

  delay(5000);   // pausa entre pacotes (tempo no ar baixo; respeite o que o seu produto exige)
}
```

`radio.transmit()` é o modo **bloqueante**: o exemplo oficial do RadioLib o usa, mas avisa que o modo por interrupção (`startTransmit` com `setPacketSentAction`) é o recomendado para uso real, porque o bloqueante desperdiça tempo do processador. Para o primeiro teste, o bloqueante é mais simples.

## Receptor

```cpp
#include <RadioLib.h>
#include <SPI.h>

constexpr int PIN_NSS  = 8;
constexpr int PIN_DIO1 = 14;
constexpr int PIN_RST  = 12;
constexpr int PIN_BUSY = 13;
constexpr int PIN_SCK  = 9, PIN_MISO = 11, PIN_MOSI = 10;

SX1262 radio = new Module(PIN_NSS, PIN_DIO1, PIN_RST, PIN_BUSY);

// Bandeira levantada pela interrupção quando chega um pacote completo.
volatile bool receivedFlag = false;

// Esta função roda dentro da interrupção. Regras do RadioLib: retorno void,
// sem argumentos, e no ESP32 marcada como ICACHE_RAM_ATTR (padrão dos exemplos).
#if defined(ESP8266) || defined(ESP32)
  ICACHE_RAM_ATTR
#endif
void setFlag(void) {
  receivedFlag = true;
}

void setup() {
  Serial.begin(115200);
  delay(1000);
  SPI.begin(PIN_SCK, PIN_MISO, PIN_MOSI, PIN_NSS);

  radio.tcxoVoltage = 1.8;

  // Os MESMOS parâmetros do transmissor.
  ConfigLoRa_t cfg;
  cfg.frequency       = 917.1;
  cfg.bandwidth       = 125.0;
  cfg.spreadingFactor = 9;
  cfg.codingRate      = 5;
  cfg.syncWord        = 0x12;
  cfg.power           = 2;
  cfg.preambleLength  = 8;

  int state = radio.begin(cfg);
  if (state != RADIOLIB_ERR_NONE) {
    Serial.print(F("begin falhou, codigo "));
    Serial.println(state);
    while (true) { delay(10); }
  }
  radio.setDio2AsRfSwitch(true);

  // Chama setFlag quando um pacote chegar, e entra em recepção contínua.
  radio.setPacketReceivedAction(setFlag);
  state = radio.startReceive();
  if (state != RADIOLIB_ERR_NONE) {
    Serial.print(F("startReceive falhou, codigo "));
    Serial.println(state);
    while (true) { delay(10); }
  }
  Serial.println(F("RX pronto"));
}

void loop() {
  if (receivedFlag) {
    receivedFlag = false;

    String str;
    int state = radio.readData(str);      // lê o pacote do buffer do rádio

    if (state == RADIOLIB_ERR_NONE) {
      Serial.print(F("recebido: "));
      Serial.println(str);
      Serial.print(F("  RSSI: "));
      Serial.print(radio.getRSSI());      // potência do último pacote, dBm
      Serial.println(F(" dBm"));
      Serial.print(F("  SNR: "));
      Serial.print(radio.getSNR());       // relação sinal-ruído do último pacote, dB
      Serial.println(F(" dB"));
      Serial.print(F("  erro de frequencia: "));
      Serial.print(radio.getFrequencyError());   // Hz (a documentação avisa: baseado na
      Serial.println(F(" Hz"));                  // implementação do SX128x, usar com cautela)
    } else if (state == RADIOLIB_ERR_CRC_MISMATCH) {
      Serial.println(F("pacote com CRC errado (chegou, mas corrompido)"));
    } else {
      Serial.print(F("erro de leitura, codigo "));
      Serial.println(state);
    }
  }
}
```

Como usar: grave o transmissor numa placa e o receptor na outra, abra o monitor serial de cada uma a 115200, com as duas antenas ligadas, a **1 a 2 metros** de distância. Em poucos segundos o receptor deve mostrar o texto, RSSI, SNR e o erro de frequência.

**Nota sobre a API.** O código usa o formato `radio.begin(ConfigLoRa_t)` da versão 7.7.1. Em versões anteriores existe `begin(freq, bw, sf, cr, syncWord, power, preambleLength, tcxoVoltage, useRegulatorLDO)`, que continua na 7.7.1 marcado como obsoleto. Se seu compilador reclamar de `ConfigLoRa_t`, atualize a biblioteca ou use a forma antiga (mesmos valores, na mesma ordem). Consulte sempre os exemplos da sua versão e a [referência da API](https://jgromes.github.io/RadioLib/).

## Conferindo se está certo

**Sanidade do RSSI.** Com 2 dBm, antenas de 2 dBi e 1 m de distância, a perda no espaço livre em 917 MHz é `20 x log10(0,001) + 20 x log10(917) + 32,44 = -60 + 59,25 + 32,44 = 31,7 dB`. Logo `Pr = 2 + 2 + 2 - 31,7 = -25,7 dBm`. Você deve ver um RSSI na vizinhança de **-25 a -45 dBm** (a antena do tipo "borracha" dentro de uma sala, com reflexões, varia bastante). A cada vez que a distância dobra, ele cai cerca de 6 dB em campo aberto (Módulo 2, Aula 2). Se o RSSI está em -100 dBm a 1 metro, algo está errado (antena, frequência, potência).

**SNR a curta distância** é alto e positivo. O SNR mínimo de demodulação em SF9 é **-12,5 dB** (Aula 1): quando o SNR chegar perto disso, os pacotes começam a se perder.

**Tempo no ar.** O "tempo medido" e o "esperado" devem ser próximos. Para 12 bytes em SF9, a fórmula da Aula 2 dá cerca de 145 ms.

## Cinco experimentos que ensinam

1. **SF diferente.** Mude o SF do receptor para 10 e regrave. Nada chega. O receptor faz o dechirp com o SF errado e não vê pico.
2. **Sync word diferente.** Mude para `0x34` no receptor. Nada chega: a palavra de rede não bate.
3. **CR diferente.** Deixe o receptor em CR 5 e o transmissor em CR 7. A documentação do RadioLib manda igualar o CR dos dois lados; como o cabeçalho explícito carrega o CR, o resultado pode variar (não confirmei). Anote o que acontece na sua placa.
4. **Erro de frequência.** No receptor, desloque a frequência em passos de 5 kHz (917,105; 917,110...). Observe o valor de "erro de frequência" que o RadioLib imprime e **em que deslocamento o pacote deixa de chegar**. É a tolerância a deriva da Aula 1, medida por você.
5. **Atenuação.** Afaste as placas gradualmente, ou tire a antena do receptor por um instante (só o receptor, nunca o transmissor), e veja o SNR cair até o pacote sumir. Anote o SNR em que isso aconteceu e compare com -12,5 dB.

## Se não funciona: erros e o que checar

| Sintoma | Causa provável |
|---|---|
| `begin` devolve `-2` (`RADIOLIB_ERR_CHIP_NOT_FOUND`) | Pinos errados, SPI não configurado, alimentação, ou o chip é outro (SX127x com classe SX1262) |
| `begin` devolve erro de TCXO ou timeout de comando SPI (`-703`, `-705`, `-707`) | `tcxoVoltage` errado para a placa |
| Frequência inválida (`RADIOLIB_ERR_INVALID_FREQUENCY`) | O módulo não cobre a frequência (módulo de 433 MHz em 917 MHz) |
| SF inválido (`RADIOLIB_ERR_INVALID_SPREADING_FACTOR`) | Chip LLCC68 pedindo SF10 a SF12 em 125 kHz |
| TX "sucesso" e o RX nunca recebe | Antena, parâmetros diferentes (CR, SF, sync word), chave de RF (DIO2) sem configurar, placa com amplificador externo (V4) |
| `RADIOLIB_ERR_CRC_MISMATCH` | O pacote chegou com bits errados: sinal fraco, interferência ou parâmetros quase certos |
| Placa reinicia ao transmitir | Alimentação insuficiente (Aula 3) |
| Recebe só de perto | Antena ruim ou ausente, cabo, parâmetros diferentes de sensibilidade (Aula 8) |

O RadioLib também traz um decodificador de códigos de status na documentação, e uma [discussão real](https://github.com/jgromes/RadioLib/discussions/1665) sobre uma placa (Heltec V4) em que o TX "dava certo" e o RX não recebia mostra o tipo de investigação necessária.

## Variante para SX127x (RFM95, Ra-01H)

Só muda a linha do módulo, e desaparecem `tcxoVoltage` e `setDio2AsRfSwitch`. Segundo o exemplo do RadioLib para SX1278, a ordem dos pinos é NSS, DIO0, RESET, DIO1:

```cpp
SX1276 radio = new Module(PIN_NSS, PIN_DIO0, PIN_RST, PIN_DIO1);
```

No SX127x, a interrupção de "pacote recebido" sai do **DIO0**. A ligação física (fiação de um RFM95 ao ESP32, tensão de 3,3 V) está no tutorial do Random Nerd. Para o SX127x, a escolha entre os dois pinos de saída de potência (RFO e PA_BOOST) depende de como o módulo foi ligado; consulte a ficha do módulo.

## E depois

- Troque o exemplo por **ping-pong** (o RadioLib tem `SX126x_PingPong`): as duas placas alternam, você mede perda de pacote e RSSI nos dois sentidos.
- Use **interrupção** no transmissor (`startTransmit` mais `setPacketSentAction` mais `finishTransmit`, como no exemplo oficial).
- Registre número de sequência, RSSI e SNR, e calcule a **taxa de perda** em várias distâncias (Aula 8).
- Passe para SF diferentes e compare ToA e alcance com as tabelas da Aula 2.
- Na sequência do curso, [Meshtastic e malhas](../09%20-%20Redes%20Mesh/README.md) fazem exatamente isso, mais roteamento.

## Resumo

- Para que o link funcione, frequência, BW, SF, CR, sync word, preâmbulo, modo de cabeçalho e CRC precisam ser iguais nos dois lados. O padrão do RadioLib usa **CR 4/7**, então escreva tudo explicitamente.
- SX1262 exige configurar o TCXO (DIO3) e a chave de antena (DIO2) conforme a placa; na Heltec V3 são 1,8 V e DIO2 como chave, segundo o firmware do Meshtastic.
- O receptor por interrupção (`setPacketReceivedAction` mais `startReceive` mais `readData`) entrega RSSI, SNR e erro de frequência do último pacote.
- Confira o RSSI contra a perda no espaço livre (-25 dBm a 1 m com 2 dBm e 2 dBi de cada lado) e o SNR contra o limite do SF (-12,5 dB em SF9).
- A base legal vem antes de emitir: produto homologado ou licença de radioamador, nunca antena ou potência fora do certificado, nunca TX sem antena.

## Para aprofundar

- [ ] [RadioLib (GitHub)](https://github.com/jgromes/RadioLib): a biblioteca, com a lista de módulos suportados e os exemplos oficiais (pasta `examples/SX126x` e `SX127x`).
- [ ] [Default configuration (RadioLib Wiki)](https://github.com/jgromes/RadioLib/wiki/Default-configuration): os parâmetros padrão de cada módulo; conferi a tabela de LoRa (CR 4/7, sync word privada `0x12`).
- [ ] [ESP32 with LoRa using Arduino IDE](https://randomnerdtutorials.com/esp32-lora-rfm95-transceiver-arduino-ide/) (Random Nerd Tutorials): tutorial escrito de ESP32 com RFM95, com esquema de ligação (usa outra biblioteca, mas explica o hardware).
- [ ] [LoRa SX1278/76 Arduino Interfacing Tutorial | Sending Sensor Data Wirelessly with LoRa](https://www.youtube.com/watch?v=esKi_iWqb6M) (How To Electronics): vídeo cujo título indica ligação e código de um par SX1278/76 com Arduino; conteúdo não assistido.
- [ ] [LoRa Module VS nRF24 VS Generic RF Module || Range & Power Test](https://www.youtube.com/watch?v=nP6YuwNVoPU) (GreatScott!): vídeo cujo título indica teste de alcance e consumo comparando LoRa com outros módulos; conteúdo não assistido.
- [ ] [heltec_esp32_lora_v3 (ropg, GitHub)](https://github.com/ropg/heltec_esp32_lora_v3): biblioteca de terceiros que já traz os pinos e a inicialização da Heltec V3 com o RadioLib, e exemplos testados.
- [ ] [Heltec LoRa ESP32 Module Tutorial](https://www.youtube.com/watch?v=pI3NV2yPs4c) (RoboCircuits): vídeo cujo título indica um tutorial da placa; conteúdo não assistido.

[Próxima aula: Alcance, antena e erros comuns](./08%20-%20Alcance%20Antena%20e%20Erros%20Comuns.md)
