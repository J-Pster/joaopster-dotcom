# Aula 2: Parâmetros SF, BW e CR: taxa, sensibilidade e tempo no ar

[Voltar ao módulo](./README.md)

*Pergunta que esta aula responde: como o fator de espalhamento, a largura de banda e a taxa de código se combinam para definir a velocidade, o alcance e o tempo que um pacote fica no ar, e como calcular cada um?*

## Por que isso importa

Na Aula 1 você viu que o SF troca taxa por sensibilidade. Mas existem outros dois botões (BW e CR) e um formato de pacote com preâmbulo, cabeçalho e CRC. Todos eles mexem no **tempo no ar** (*time on air*, ToA), a duração em que seu rádio ocupa o canal. O ToA decide quatro coisas: quanta bateria o pacote gasta, quantos pacotes por hora você pode mandar dentro do limite legal (Aula 4), quantos dispositivos cabem numa rede e a chance de colisão. Por isso esta aula termina com a fórmula oficial e exemplos calculados.

## Os três parâmetros

### SF: fator de espalhamento

`SF` é inteiro de 5 a 12 nos chips mais novos (SX126x, LR11xx). Os chips SX127x vão de 6 a 12, e o LoRaWAN historicamente usa 7 a 12. A revisão RP002-1.0.5 do LoRa Alliance (outubro de 2025) acrescentou taxas com SF5 e SF6 (15,6 e 9,4 kbit/s brutos, segundo o comunicado da própria Aliança). Efeitos de cada `+1`:

- `Ts` dobra, o ToA dobra (aproximadamente).
- A sensibilidade melhora cerca de **2,5 dB**.
- A taxa cai um pouco mais que a metade.

Em espaço livre, 2,5 dB de sensibilidade equivalem a `10^(2,5/20) = 1,33` vezes a distância. Com expoente de perda `n = 3,5` (ambiente com obstáculos, [Módulo 2](../02%20-%20Propagacao%20de%20Radio/02%20-%20Perda%20no%20Espaco%20Livre%20e%20Friis.md)), a mesma melhora dá `10^(2,5/35) = 1,18` vezes. De SF7 a SF12 são 12,5 dB: 4,2 vezes a distância no espaço livre, 2,3 vezes com `n = 3,5`. É por isso que o SF é o botão mais forte para alcance, e também o mais caro em tempo no ar (32 vezes mais longo de SF7 para SF12).

### BW: largura de banda

Valores usuais: **125, 250 e 500 kHz** (os chips SX126x aceitam também 7,8 a 62,5 kHz, segundo a documentação do RadioLib). Efeitos de dobrar o BW:

- `Ts` cai pela metade e a taxa dobra.
- O ruído que entra no receptor dobra, então a sensibilidade piora **3 dB** (`10 x log10(BW)` na fórmula do Módulo 3).
- O canal ocupa mais espectro e tolera mais deriva de frequência entre os rádios.

A Semtech mostra os dois lados: para SF10 e pacote de 10 bytes, BW 125/250/500 kHz dá ToA de 264,2/132,1/66 ms e sensibilidade de -132/-129/-126 dBm (AN1200.13, tabela 3, com CR 4/6; reproduzi os valores com CRC desligado e preâmbulo de 8). O BW também aparece na regulamentação: o requisito brasileiro para modulação digital de "banda larga" no Ato 14448 fala em largura de 500 kHz (Aula 4).

### CR: taxa de código

O LoRa aplica correção de erros direta (FEC): para cada 4 bits de dado, envia `4 + k` bits, com `k` de 1 a 4. A notação é **CR = 4/5, 4/6, 4/7 ou 4/8**. Os bits extras são de paridade. O algoritmo exato (a literatura de engenharia reversa descreve códigos tipo Hamming com entrelaçamento diagonal) não é publicado pela Semtech; o efeito, sim:

```
taxa útil = taxa bruta x 4 / (4 + k)
```

- CR 4/5 (`k = 1`): 80% dos bits são dado. É o padrão do LoRaWAN (a Semtech diz que "tipicamente todos os fabricantes usam 4/5", mas a especificação não obriga).
- CR 4/8 (`k = 4`): 50%; tempo no ar sobe.

A AN1200.13 avisa que a vantagem principal do FEC **não** está no ruído térmico (a curva de sensibilidade melhora pouco de 4/5 para 4/8), e sim contra **rajadas de interferência**: se um pedaço do pacote é destruído, os bits de paridade e o entrelaçamento recuperam o dado. Para SF10, BW 250 kHz e 10 bytes, o ToA sobe de 123,9 para 132,1 e 148,5 ms quando CR passa de 4/5 para 4/6 e 4/8 (na notação da AN, `CR = 1, 2, 4`).

## Tabela de referência: símbolo, taxa e sensibilidade

Valores calculados com as fórmulas do texto. A sensibilidade usa `-174 + 10 x log10(BW) + NF + SNR_min` com NF = 6 dB e os SNR da Aula 1. Chips e placas reais variam: a Aula 3 mostra que um mesmo SF12/125 kHz é anunciado como -134 dBm na ficha de uma placa Heltec e -141 dBm na tabela da Semtech para o LR1121. Use a tabela para entender a tendência, e o datasheet para projetar.

| SF | `Ts` (125 kHz) | Taxa útil CR 4/5 (125 / 250 / 500 kHz) | SNR mín. | Sensibilidade (125 / 250 / 500 kHz) |
|---|---|---|---|---|
| 7 | 1,024 ms | 5.469 / 10.938 / 21.875 bit/s | -7,5 dB | -124,5 / -121,5 / -118,5 dBm |
| 8 | 2,048 ms | 3.125 / 6.250 / 12.500 | -10 dB | -127,0 / -124,0 / -121,0 |
| 9 | 4,096 ms | 1.758 / 3.516 / 7.031 | -12,5 dB | -129,5 / -126,5 / -123,5 |
| 10 | 8,192 ms | 977 / 1.953 / 3.906 | -15 dB | -132,0 / -129,0 / -126,0 |
| 11 | 16,384 ms | 537 / 1.074 / 2.148 | -17,5 dB | -134,5 / -131,5 / -128,5 |
| 12 | 32,768 ms | 293 / 586 / 1.172 | -20 dB | -137,0 / -134,0 / -131,0 |

Confira contra a Semtech: a AN1200.13 lista -132 dBm para SF10/125, -129 dBm para SF10/250 e -134 dBm para SF12/250. A tabela bate. Os valores de taxa do LoRaWAN AU915 (Regional Parameters) são um pouco menores em SF11 e SF12 (440 e 250 bit/s em vez de 537 e 293) por causa da otimização de baixa taxa, explicada adiante.

## Anatomia do pacote

Um pacote LoRa, na ordem em que vai ao ar:

1. **Preâmbulo:** `n` upchirps idênticos (o RadioLib e o LoRaWAN usam 8 por padrão). Servem para detectar o pacote e medir o desvio de tempo e de frequência do transmissor.
2. **Sincronização:** dois chirps que carregam a **palavra de sincronismo** (*sync word*) e depois 2,25 downchirps, usados para o ajuste fino de frequência. Em conjunto, o preâmbulo dura `(n + 4,25) x Ts`, e é daí que sai o `4,25` da fórmula do ToA.
3. **Cabeçalho** (modo *explicit*): 20 bits com o tamanho do payload, a taxa de código do payload, um bit que diz se há CRC e um checksum próprio do cabeçalho. Ele é sempre enviado com CR 4/8, o modo mais robusto (Semtech, FAQ; detalhes de tamanho vêm de análises independentes, como Robyns et al. e o blog disk91, não da Semtech).
4. **Payload**, de 1 a 255 bytes, com o CRC de 16 bits (2 bytes) no fim, se ativado.

A **sync word** é uma etiqueta de rede: o rádio descarta pacotes cuja palavra não bate com a configurada. O LoRaWAN usa `0x34` (a "rede pública", segundo o documento de Regional Parameters), e o padrão do RadioLib para redes particulares é `0x12`. Ela **não é segurança**: é um filtro, qualquer receptor com a mesma palavra decodifica.

Modo **explicit header** (padrão): o cabeçalho viaja com o pacote e o receptor não precisa saber o tamanho antes. Modo **implicit header**: não há cabeçalho; transmissor e receptor combinam de antemão tamanho, CR e presença de CRC. Economiza tempo no ar (exemplo abaixo), mas o receptor precisa saber tudo. O LoRaWAN usa explicit nos dois sentidos (a especificação diz que o uplink carrega PHDR e CRC do payload, e o downlink não carrega o CRC do payload).

## Otimização de baixa taxa (LDRO)

Quando o símbolo é muito longo (`Ts` maior que 16 ms: SF11 e SF12 em 125 kHz, SF12 em 250 kHz), o cristal do transmissor ou do receptor pode derivar durante um só símbolo, com a temperatura ou o movimento. A **low data rate optimization** faz cada símbolo do payload carregar `SF - 2` bits em vez de `SF`, descartando os dois bits menos significativos (os mais sensíveis a erro de frequência). Custo: ToA um pouco maior. A Semtech a marca como obrigatória para SF11 e SF12 com BW 125 kHz. O RadioLib a liga automaticamente quando o símbolo passa de 16 ms (documentado no cabeçalho da biblioteca). Segundo Robyns et al., o cabeçalho do pacote é sempre enviado nesse modo reduzido, qualquer que seja o SF.

## A fórmula do tempo no ar

Da AN1200.13, com as definições:

- `PL`: bytes de payload.
- `SF`, `BW` (Hz), `CR` de 1 a 4 (4/5 a 4/8).
- `CRC`: 1 se o CRC do payload está ligado, 0 se não.
- `IH`: 1 se o cabeçalho é implícito, 0 se explícito.
- `DE`: 1 se LDRO está ligada, 0 se não.
- `n_pre`: número de símbolos de preâmbulo programados.

```
Ts          = 2^SF / BW
T_preambulo = (n_pre + 4,25) x Ts
n_payload   = 8 + max( ceil( (8xPL - 4xSF + 28 + 16xCRC - 20xIH) / (4 x (SF - 2xDE)) ) x (CR + 4), 0 )
ToA         = T_preambulo + n_payload x Ts
```

Interpretação: `8xPL` são os bits do payload; `-4xSF + 28` ajusta o alinhamento com os símbolos do cabeçalho (a fórmula vem do datasheet, aqui só a uso); `16xCRC` são os 16 bits do CRC; `-20xIH` tira os 20 bits do cabeçalho quando implícito; o denominador `4 x (SF - 2xDE)` é o tamanho, em bits, de cada bloco de símbolos que o entrelaçador processa; `(CR + 4)` é quantos símbolos cada bloco gera (com CR 4/5, cada bloco vira 5 símbolos; com 4/8, 8). O `8 +` são os 8 símbolos do cabeçalho. Você não precisa memorizar; precisa saber calcular e saber **o que muda o quê**.

Verificação contra a Semtech (todos com 10 bytes, preâmbulo de 8, cabeçalho explícito, sem CRC): SF12/250 kHz/CR 4/6 dá 528,4 ms; SF10/250 kHz/CR 4/6 dá 132,1 ms; SF8/250 kHz/CR 4/6 dá 39,2 ms. Reproduzi os três com a fórmula e batem.

## Exemplo resolvido 1: 20 bytes em SF7 e em SF12

Configuração: 125 kHz, CR 4/5 (`CR = 1`), preâmbulo de 8, cabeçalho explícito, CRC ligado.

**SF7** (`DE = 0`):
- `Ts = 128 / 125.000 = 1,024 ms`
- `T_preambulo = 12,25 x 1,024 = 12,54 ms`
- `n_payload = 8 + ceil((160 - 28 + 28 + 16 - 0) / 28) x 5 = 8 + ceil(176 / 28) x 5 = 8 + ceil(6,29) x 5 = 8 + 7 x 5 = 43` símbolos
- `ToA = 12,54 + 43 x 1,024 = 56,6 ms`

**SF12** (`DE = 1`, pois `Ts = 32,8 ms > 16 ms`):
- `Ts = 4.096 / 125.000 = 32,768 ms`
- `T_preambulo = 12,25 x 32,768 = 401,4 ms`
- `n_payload = 8 + ceil((160 - 48 + 28 + 16) / (4 x 10)) x 5 = 8 + ceil(156 / 40) x 5 = 8 + 4 x 5 = 28` símbolos
- `ToA = 401,4 + 28 x 32,768 = 1.318,9 ms`

O pacote de SF12 dura **23 vezes** o de SF7. Note que nos dois casos o **preâmbulo sozinho** é uma fatia enorme: em SF12, 30% do ToA é preâmbulo.

Tabela completa para os mesmos 20 bytes (125 kHz, CR 4/5):

| SF | ToA | Taxa efetiva (160 bits / ToA) |
|---|---|---|
| 7 | 56,6 ms | 2.828 bit/s |
| 8 | 102,9 ms | 1.555 bit/s |
| 9 | 185,3 ms | 863 bit/s |
| 10 | 370,7 ms | 432 bit/s |
| 11 | 741,4 ms | 216 bit/s |
| 12 | 1.318,9 ms | 121 bit/s |

A **taxa efetiva** (dado dividido pelo tempo total no ar) é bem menor que a taxa bruta da tabela anterior, porque preâmbulo, cabeçalho e CRC pesam muito em pacote curto. Em SF12, 20 bytes de dado se traduzem em 121 bit/s.

## Exemplo resolvido 2: o que cada botão faz em SF7

Mesmos 20 bytes, SF7:

| Variação | ToA |
|---|---|
| Base: 125 kHz, CR 4/5, explicit, CRC, preâmbulo 8 | 56,6 ms |
| BW 250 kHz | 28,3 ms |
| BW 500 kHz | 14,1 ms |
| CR 4/8 (em vez de 4/5) | 78,1 ms |
| Cabeçalho implícito, sem CRC | 46,3 ms |
| Implícito, sem CRC, preâmbulo de 6 | 44,3 ms |

Leitura: BW dobrado corta o ToA pela metade; CR 4/8 custa 38% a mais; tirar cabeçalho e CRC economiza 18%, mas perde a verificação de integridade e a flexibilidade; encurtar o preâmbulo economiza pouco e o receptor pode perder o pacote se ficar dormindo.

## Uma calculadora sua

Você pode conferir qualquer número acima com este script Python, que segue a fórmula da AN1200.13 (código meu, conferido contra os três valores da Semtech listados):

```python
import math

def toa_ms(pl, sf, bw_hz, cr=1, n_pre=8, crc=1, ih=0, de=None):
    # cr: 1 a 4 (4/5 a 4/8). ih: 1 = cabeçalho implícito. de: LDRO (None = automático).
    ts = 2**sf / bw_hz
    if de is None:
        de = 1 if ts > 0.016 else 0
    n_payload = 8 + max(
        math.ceil((8*pl - 4*sf + 28 + 16*crc - 20*ih) / (4*(sf - 2*de))) * (cr + 4), 0)
    return ((n_pre + 4.25) * ts + n_payload * ts) * 1000

print(toa_ms(20, 7, 125e3))    # 56.576
print(toa_ms(20, 12, 125e3))   # 1318.912
```

Se você usa o RadioLib, o método `getTimeOnAir(len)` devolve o ToA esperado em **microssegundos** para a configuração corrente (documentado no cabeçalho da biblioteca); use-o para conferir seu script. A Semtech tem uma calculadora oficial e o TTN tem uma para LoRaWAN (links no fim).

## O que decidir, na prática

- **Perto e muitos pacotes:** SF7 a SF9, BW 125 ou 250 kHz. Pouco ToA, menos colisão, menos bateria.
- **Longe ou dentro de prédio:** SF10 a SF12, BW 125 kHz. Sensibilidade máxima, poucos pacotes por hora.
- **Prioridade em velocidade:** BW 500 kHz, SF baixo. Perde 6 dB contra 125 kHz, com o mesmo SF.
- **Ambiente ruidoso, com interferência em rajada:** CR mais alto (4/6 a 4/8), aceitando ToA maior.
- **Nunca se esqueça:** os dois lados precisam ter **os mesmos** parâmetros (Aula 7).

## Resumo

- SF dobra o ToA e ganha 2,5 dB por degrau; BW dobrado corta o ToA pela metade e perde 3 dB; CR de 4/5 a 4/8 sobe o ToA e melhora a resistência a interferência em rajada.
- O pacote é: preâmbulo, sincronização (com a sync word), cabeçalho (explícito ou implícito), payload e CRC de 16 bits. A sync word é um filtro, não segurança.
- LDRO é ligada quando `Ts > 16 ms` (SF11 e SF12 em 125 kHz) e reduz os bits de dado por símbolo para `SF - 2`.
- `ToA = (n_pre + 4,25) x Ts + n_payload x Ts`, com `n_payload` dado pela fórmula da AN1200.13.
- 20 bytes levam 56,6 ms em SF7 e 1.318,9 ms em SF12 (125 kHz, CR 4/5): 23 vezes mais, com taxa efetiva de 2.828 bit/s contra 121 bit/s.

## Para aprofundar

- [ ] [LoRa Calculator](https://www.semtech.com/design-support/lora-calculator) (Semtech): calculadora oficial de tempo no ar, taxa e consumo.
- [ ] [LoRaWAN airtime calculator](https://www.thethingsnetwork.org/airtime-calculator) (The Things Network): calculadora de ToA para LoRaWAN, útil para decidir o intervalo entre mensagens.
- [ ] [LoRa Spreading Factor & Data Rate](https://www.youtube.com/watch?v=B580NvdXtjs) (Richard Wenner): vídeo cujo título trata de SF e taxa de dados; conteúdo não assistido.
- [ ] [LoRa/LoRaWAN tutorial 16: SNR Limit and Receiver Sensitivity](https://www.youtube.com/watch?v=NSjHWQMg6yo) (Mobilefish.com): o cálculo de sensibilidade por SF com NF = 6 dB.
- [ ] [The Hidden Side of LoRa](https://www.disk91.com/2024/technology/lora/the-hidden-side-of-lora/) (disk91): texto de análise independente da estrutura do pacote (preâmbulo, cabeçalho em CR 4/8, sync word); não é fonte da Semtech.
- [ ] [LoRa Modem Designer's Guide, AN1200.13](https://meshtastic.org/assets/files/LoRa_Design_Guide-b3f1bb6c4d86b62a065c50d5961bc6b2.pdf) (Semtech, hospedado pelo Meshtastic): a nota que contém as tabelas e a fórmula do ToA usadas aqui (as equações não aparecem no texto extraído deste PDF, mas as tabelas sim).

[Próxima aula: Chips, módulos e placas](./03%20-%20Chips%20Modulos%20e%20Placas.md)
