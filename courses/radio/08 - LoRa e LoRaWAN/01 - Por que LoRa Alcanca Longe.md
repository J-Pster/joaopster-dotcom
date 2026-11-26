# Aula 1: Por que o LoRa alcança longe com pouca potência

[Voltar ao módulo](./README.md)

*Pergunta que esta aula responde: se o alcance de um rádio depende de potência, antena e sensibilidade, o que o LoRa faz de diferente para receber um sinal que está abaixo do ruído?*

## O problema: alcance é sensibilidade

Pelo orçamento de enlace ([Módulo 2, Aula 8](../02%20-%20Propagacao%20de%20Radio/08%20-%20Orcamento%20de%20Enlace.md)), o sinal chega ao receptor com `Pr = Pt - Lt + Gt - PL + Gr - Lr`, e o enlace fecha enquanto `Pr` for maior que a **sensibilidade** do receptor. Para ir mais longe, você só tem três caminhos: aumentar `Pt` (limitado por lei e por bateria), aumentar os ganhos de antena (limitado por lei e por geometria) ou **baixar a sensibilidade** (receber sinais mais fracos).

A sensibilidade vem da fórmula do [Módulo 3, Aula 7](../03%20-%20Modulacao/07%20-%20Shannon%20e%20Sensibilidade.md):

```
Sensibilidade (dBm) = -174 + 10 x log10(BW) + NF + SNR_min
```

- `-174 dBm/Hz` é o ruído térmico: não se controla.
- `BW` é a largura de banda em Hz: reduzir BW reduz o ruído que entra, mas também reduz a taxa.
- `NF` é a figura de ruído do receptor (cerca de 6 dB nos chips LoRa antigos, conforme o tutorial de sensibilidade citado no fim): é hardware.
- `SNR_min` é a relação sinal-ruído mínima que a modulação exige para decodificar. **É aqui que o LoRa ataca.** Uma modulação como GMSK exige cerca de +9 dB de SNR (tabela da nota de aplicação AN1200.13 da Semtech); o LoRa em SF12 exige -20 dB, ou seja, decodifica com o sinal **100 vezes mais fraco que o ruído** dentro da banda. A diferença é de 29 dB, o que em espaço livre dá quase 28 vezes a distância.

O resto da aula explica por que isso é possível e o que se paga por isso.

## O que é LoRa e o que é proprietário

**LoRa** (de *long range*) é uma técnica de modulação da camada física, derivada do *Chirp Spread Spectrum* (CSS, [Módulo 3, Aula 8](../03%20-%20Modulacao/08%20-%20Espalhamento%20Espectral.md)). Segundo o material de um curso da BYU, foi desenvolvida em 2014 pela empresa francesa Cycleo, depois comprada pela Semtech. A Semtech descreve a modulação como proprietária. Isso quer dizer duas coisas práticas:

- Os chips LoRa (família SX12xx e LR11xx) são da Semtech, ou usam propriedade intelectual licenciada por ela (o STM32WL, da ST, é um exemplo que o RadioLib lista como suportado). Os fabricantes de módulos compram o chip e montam a placa (a Aula 3 detalha).
- O algoritmo exato do receptor não é publicado. Existem receptores abertos feitos por engenharia reversa e por SDR, e esta aula descreve o mecanismo geral, que é bem entendido. Onde algo veio de engenharia reversa acadêmica e não da Semtech, o texto avisa.

Não confunda com **LoRaWAN**, o protocolo de rede aberto que roda em cima do LoRa (Aula 5).

## O chirp: uma varredura de frequência

Um **chirp** é um sinal cuja frequência varia de forma linear no tempo dentro de uma faixa de largura `BW`. O **upchirp** sobe de `f_baixa` a `f_alta`; o **downchirp** desce. Num gráfico de frequência contra tempo (espectrograma), é uma reta inclinada.

Três consequências úteis:

1. **O sinal ocupa a banda toda o tempo todo.** A energia fica espalhada por `BW`, não concentrada numa frequência (é a definição de espalhamento espectral).
2. **Envelope constante.** A amplitude não varia, só a frequência. O amplificador de potência pode operar saturado, com alta eficiência, o que ajuda na bateria (a Semtech lista "constant envelope / low-power" entre as vantagens na AN1200.22).
3. **Frequência e tempo se confundem.** Um erro de frequência no chirp equivale a um deslocamento no tempo. Isso simplifica a sincronização e explica a tolerância a deriva de relógio (adiante).

## Como um símbolo carrega bits

O LoRa não muda a inclinação do chirp para codificar dado. Ele parte de um **upchirp base** que varre a banda inteira e usa o **deslocamento cíclico**: o símbolo é o mesmo chirp, mas começando em outro ponto da varredura e "dando a volta" quando chega ao topo da banda, de modo a terminar no ponto de partida.

Quantos pontos de partida existem? A banda é dividida em `2^SF` "chips" (o **fator de espalhamento**, SF, é um inteiro entre 5 e 12). Cada ponto de partida é um valor de símbolo, então um símbolo carrega `SF` bits. Definições e fórmulas:

```
Taxa de chips   Rc = BW  chips/s     (a largura de banda define a taxa de chips)
Duração do símbolo   Ts = 2^SF / BW
Taxa de símbolos     Rs = BW / 2^SF
Taxa de bits bruta   Rb = SF x BW / 2^SF
```

**Exemplo resolvido (SF7, BW = 125 kHz):** `2^7 = 128` chips por símbolo. `Ts = 128 / 125.000 = 1,024 ms`. `Rs = 976,6 símbolos/s`. `Rb = 7 x 976,6 = 6.836 bit/s`. Com a correção de erros CR 4/5 (Aula 2), só 4 de cada 5 bits são dado: `6.836 x 4/5 = 5.469 bit/s`.

**Exemplo resolvido (SF12, BW = 125 kHz):** `2^12 = 4.096` chips. `Ts = 32,768 ms`. `Rs = 30,5 símbolos/s`. `Rb = 12 x 30,5 = 366 bit/s`; com CR 4/5, 293 bit/s.

Repare: cada `+1` em SF **dobra** `Ts` (o símbolo dura o dobro), mas o número de bits por símbolo só sobe de `SF` para `SF+1`. Por isso a taxa cai um pouco mais que a metade a cada degrau (SF7 para SF8, 125 kHz: de 6.836 para 3.906 bit/s brutos). Foi o que o Módulo 3 chamou de trocar taxa por sensibilidade.

## Como o receptor decodifica: dechirp e FFT

Aqui está o segredo do ganho. O receptor faz duas operações:

1. **Dechirp:** multiplica o sinal recebido por um downchirp (o conjugado do chirp base). A multiplicação de um upchirp deslocado por um downchirp resulta em uma **senoide de frequência constante**, e essa frequência é proporcional ao deslocamento cíclico, ou seja, ao valor do símbolo (a lição da BYU descreve exatamente isso, incluindo o salto da frequência quando o chirp "dá a volta").
2. **FFT** de `2^SF` pontos: a senoide vira um pico em um único *bin*. A posição do pico é o símbolo.

Por que isso ajuda contra o ruído? O símbolo dura `2^SF` amostras (chips). A multiplicação por um sinal conhecido alinha a fase de **todas** as amostras do símbolo, e a FFT soma essa energia de forma **coerente** num único bin. O ruído térmico, que é branco e sem estrutura, se distribui por todos os `2^SF` bins e soma de forma incoerente. O resultado é o **ganho de processamento**:

```
Gp = 10 x log10(2^SF) = SF x 3,01 dB
```

- SF7: `Gp = 21 dB`.
- SF12: `Gp = 36 dB` (o mesmo cálculo do Módulo 3, Aula 8).

Isso é o que permite decodificar com SNR negativo na entrada: antes da FFT o sinal está 20 dB abaixo do ruído em `BW`; depois, o pico está muito acima do ruído do bin. A decisão final é escolher entre `2^SF` picos possíveis, e quanto mais candidatos, um pouco mais de SNR pós-FFT é preciso para não confundir o pico do sinal com um pico de ruído. Por isso o ganho real não é 3 dB por SF, e sim **2,5 dB por SF** (explicação qualitativa minha; o número exato vem do datasheet).

Os limites de SNR de demodulação para SX1272/SX1276 (conforme o tutorial de Robert Lie/Mobilefish, que reproduz a tabela do datasheet):

| SF | SNR mínimo para demodular |
|---|---|
| 7 | -7,5 dB |
| 8 | -10 dB |
| 9 | -12,5 dB |
| 10 | -15 dB |
| 11 | -17,5 dB |
| 12 | -20 dB |

A AN1200.13 da Semtech confirma pelo menos SF12 (-20 dB) e SF10 (-15 dB). Com esses valores e a fórmula da sensibilidade, a Aula 2 calcula a tabela completa. Um resultado já conhecido: `-174 + 51 + 6 - 20 = -137 dBm` em SF12/125 kHz (o valor típico do datasheet).

## Por que resiste a interferência, multipercurso e deriva

**Interferência de banda estreita.** Um interferente estreito, depois do dechirp, também é "chirpado" (espalhado) por toda a banda, e a FFT o dilui entre os bins. Só uma fração pequena da energia dele cai no bin do símbolo.

**Rajadas de interferência.** A AN1200.22 afirma que a modulação LoRa tolera interferência em rajada, de potência arbitrária, por até 30% da duração do símbolo com menos de 6 dB de degradação de sensibilidade. Isso vale porque o símbolo é longo e a correção de erros (Aula 2) reparte cada bit por vários símbolos (entrelaçamento).

**Rejeição co-canal.** A Semtech anuncia "rejeição co-canal de 19 dB em modo LoRa" no SX1262: o receptor consegue demodular mesmo com um interferente LoRa no mesmo canal, desde que ele seja no máximo cerca de 19 dB mais forte (o texto da Semtech não detalha a condição; use como ordem de grandeza).

**Multipercurso e Doppler.** O chirp é robusto a essas degradações porque o pico da FFT sobrevive a pequenos desvios de tempo e de frequência (a AN1200.22 cita robustez a *multipath, fading* e Doppler; a Semtech tem uma nota inteira sobre imunidade Doppler, AN1200.80).

**Deriva de relógio.** Como um erro de frequência equivale a um deslocamento no tempo, o receptor mede o desvio no preâmbulo (uma sequência de upchirps sem dado) e corrige todos os símbolos seguintes. Por isso módulos LoRa baratos funcionam com cristal comum, sem exigir um oscilador de precisão como um sistema DSSS tradicional (comparação feita pela própria Semtech). O caso limite é o pacote muito longo: em SF11 e SF12 com BW de 125 kHz, o símbolo é tão longo que a temperatura pode fazer o cristal derivar durante o pacote; por isso existe a **otimização de baixa taxa** (Aula 2).

**Sinais em SFs diferentes.** Chirps de SFs diferentes na mesma banda são quase ortogonais: um sinal em SF9 aparece para o receptor de SF7 como ruído com pouca correlação. Essa é a base para vários dispositivos usarem o mesmo canal ao mesmo tempo. A ortogonalidade não é perfeita: um sinal muito forte em outro SF ainda atrapalha. Dois sinais no **mesmo SF** e no mesmo canal ao mesmo tempo colidem, e normalmente o mais forte vence (efeito de captura).

## O que se paga

- **Taxa baixa.** De 293 bit/s (SF12/125 kHz, CR 4/5) a 5,5 kbit/s (SF7). Wi-Fi e Bluetooth estão milhares de vezes acima.
- **Tempo no ar longo.** Um pacote de 20 bytes leva 57 ms em SF7 e 1,3 s em SF12 (Aula 2). Como o canal é compartilhado e há limites legais de ocupação (Aula 4), isso limita quantos pacotes por hora cada dispositivo pode mandar.
- **Meio-duplex.** O chip transmite ou recebe, não os dois ao mesmo tempo.
- **Sem garantia de entrega.** LoRa puro não tem confirmação, retransmissão nem endereçamento: é só uma camada física com um enquadramento mínimo. Tudo isso vem de protocolos acima (LoRaWAN, Meshtastic, Reticulum).

## Quão longe, na prática

Os recordes são feitos com balão em altitude, onde a linha de visada é enorme. Em 2019, um pacote LoRaWAN de um balão a 24,9 km de altitude foi recebido a 766 km, com 14 dBm (25 mW), em SF11/125 kHz, RSSI -120 dBm e SNR -14,25 dB (The Things Network). Em 2020 o recorde foi de 832 km (também 25 mW), e em 2023 de 1.336 km, mas ao nível do mar, de um barco de pesca em Portugal para as Ilhas Canárias (The Things Network). O próprio TTN avisa que esses são resultados excepcionais. O que dá para esperar em condição normal é o assunto da Aula 8.

## Resumo

- Alcance depende da sensibilidade, e a sensibilidade depende de `BW`, `NF` e `SNR_min`. O LoRa reduz `SNR_min` a valores negativos (-7,5 dB em SF7 até -20 dB em SF12).
- O símbolo é um chirp com **deslocamento cíclico**; `2^SF` deslocamentos possíveis, então `SF` bits por símbolo; `Ts = 2^SF / BW`.
- O receptor faz **dechirp + FFT**: a energia do símbolo vira um pico único, o ruído se espalha; o ganho de processamento é `SF x 3,01 dB` (21 dB em SF7, 36 dB em SF12).
- Chirps toleram interferência, multipercurso, Doppler e deriva de cristal, e SFs diferentes são quase ortogonais.
- O preço é taxa baixa e tempo no ar longo, e a modulação é proprietária da Semtech; LoRaWAN é outra coisa (protocolo aberto de rede).

## Para aprofundar

- [ ] [How LoRa Modulation really works - long range communication using chirps](https://www.youtube.com/watch?v=jHWepP1ZWTk) (Visual Electric): vídeo cujo título indica explicação do funcionamento da modulação por chirps; conteúdo não assistido.
- [ ] [Chirp Spread Spectrum LoRa Modulation](https://www.youtube.com/watch?v=WwJ5iaLO8S8) (Lady Tasnim): vídeo curto sobre chirp e CSS, para reforçar a visualização; conteúdo não assistido.
- [ ] [How far can I broadcast LoRa packets WITHOUT a radio? - LoLRa](https://www.youtube.com/watch?v=eIdHBDSQHyw) (CNLohr): gera chirps LoRa a partir de um microcontrolador sem chip de rádio e mostra a diferença entre canais de 125 e 500 kHz; a descrição do vídeo indica SNR de -18 dB decodificado. Conteúdo não assistido.
- [ ] [LoRa/LoRaWAN tutorial 16: SNR Limit and Receiver Sensitivity](https://www.youtube.com/watch?v=NSjHWQMg6yo) (Mobilefish.com): tabela de SNR por SF e o cálculo de sensibilidade com NF = 6 dB, que a Aula 2 reaproveita.
- [ ] [LoRa Modulation (lab de ECEn 626, BYU)](https://ecenetworking.byu.edu/626/labs/lab_07/) (BYU): texto e exercício que geram chirps, deslocam ciclicamente e demodulam por dechirp + FFT em Python, além da estrutura do pacote.
- [ ] [LoRa and LoRaWAN](https://www.semtech.com/uploads/technology/LoRa/lora-and-lorawan.pdf) (Semtech): visão geral oficial de LoRa e LoRaWAN, com a comparação com DSSS e a topologia em estrela.

[Próxima aula: Parâmetros SF, BW, CR e tempo no ar](./02%20-%20Parametros%20SF%20BW%20CR%20e%20Tempo%20no%20Ar.md)
