# Aula 8: Espalhamento espectral, DSSS, FHSS e CSS

[Voltar ao módulo](./README.md)

*Pergunta que esta aula responde: por que gastar propositalmente muito mais banda do que a informação precisa e como isso permite receber sinais abaixo do nível do ruído?*

## Por que espalhar

A Aula 7 mostrou que, em SNR baixo, a capacidade de Shannon depende da **potência** e quase não da banda: `C ≈ 1,44 x S / N0`. Se a banda é abundante e a potência é escassa, o caminho é operar com **densidade de potência muito baixa**: espalhar a energia sobre uma banda muito maior que a taxa de dados. O sinal fica "sob o ruído" em cada Hz, mas o receptor, que conhece a receita do espalhamento, recolhe a energia de volta.

Isto é **espalhamento espectral** (spread spectrum): usar uma banda `B` muito maior que a banda mínima necessária `Rb` para a informação. Benefícios:

- **Ganho de processamento**: recupera sinais fracos (abaixo do ruído).
- **Resistência a interferência**: uma interferência estreita afeta só uma fração da banda.
- **Robustez a multipercurso** (Módulo 2: reflexos que chegam atrasados).
- **Acesso múltiplo**: vários transmissores no mesmo espectro com códigos diferentes (CDMA).
- **Baixa probabilidade de detecção**: um sinal espalhado parece ruído para quem não conhece o código (origem militar; não é criptografia, e a detecção não é impossível).

O custo é banda. Regulamentação de bandas ISM (2,4 GHz, 915 MHz) historicamente incentivou o espalhamento como forma de conviver com outros usuários.

## Ganho de processamento

Definição: a razão entre a banda espalhada e a banda da informação, o "fator de espalhamento":

```
Gp = B_espalhada / Rb          Gp(dB) = 10 x log10(Gp)
```

É o quanto o SNR **melhora** na saída do receptor em relação à entrada. Um receptor de espalhamento com `Gp = 30 dB` decodifica sinais 30 dB mais fracos que o ruído medido na banda, com relação a uma demodulação sem espalhamento que precisasse do mesmo SNR de saída. É o mecanismo da Aula 7 (`SNR = Eb/N0 x Rb/B`): a razão `Rb/B` pequena faz o SNR na banda ser bem menor que o `Eb/N0` necessário.

## DSSS: sequência direta

Em **DSSS** (direct sequence spread spectrum), cada bit é multiplicado por uma sequência rápida de "chips" (valores +1 ou -1, pseudoaleatórios, conhecidos do receptor). A taxa de chips (chip rate) é muito maior que a taxa de bits:

```
Gp = taxa de chips / taxa de bits
```

Espalhamento no transmissor: `sinal_transmitido = bit x sequencia_de_chips`. Multiplicar por uma sequência rápida alarga o espectro na mesma razão (Módulo 1: pulsos curtos no tempo, espectro largo).

Desespalhamento no receptor: multiplica pelo mesmo código, sincronizado, e integra sobre a duração do bit (**correlação**). O sinal desejado se soma coerentemente (todos os chips concordam); o ruído e as interferências, sem correlação com o código, se somam de forma aleatória e ficam pequenos. Na saída sobra o bit, com SNR melhorado por `Gp`. Analogia: procurar uma assinatura conhecida num fluxo de dados; ruído aleatório raramente coincide com a assinatura.

Exemplos:

- **Teórico**: 1 kbit/s espalhado com 1 Mchip/s: `Gp = 1000 = 30 dB`.
- **GPS civil (C/A)**: 1,023 Mchip/s sobre dados de 50 bit/s, `Gp = 20.460 = 43 dB` (Wikipedia menciona o mecanismo do espalhamento em GPS, Galileo e GLONASS, e o cálculo acima segue das taxas conhecidas do sinal C/A). O sinal GPS chega ao solo com potência da ordem de -130 dBm, abaixo do ruído térmico da banda usada; só o ganho de processamento o torna decodificável. (Taxas do C/A, a potência de -130 dBm e a sequência de Barker do 802.11b são números clássicos citados de memória; não reconfirmados em fonte primária nesta pesquisa.)
- **Wi-Fi 802.11b (1 Mbit/s)**: sequência de Barker de 11 chips, `Gp = 11 = 10,4 dB`. Modos mais rápidos do 802.11b usam outras técnicas.
- **Telefones sem fio, redes CDMA (2G/3G)**: também usavam DSSS.

Cada usuário com um código diferente e boa correlação cruzada compartilha a mesma banda: é o CDMA.

## FHSS: saltos de frequência

Em **FHSS** (frequency hopping spread spectrum), a portadora **salta** entre muitos canais estreitos seguindo uma sequência pseudoaleatória conhecida por transmissor e receptor. A banda total ocupada durante muito tempo é grande, mas em cada instante o sinal é estreito.

- Uma interferência em um canal só corrompe os instantes em que o salto cai ali.
- Um desvanecimento seletivo em uma frequência é evitado nos outros saltos.
- Um espião sem a sequência não sabe onde procurar.

Exemplo: o **Bluetooth clássico** usa 79 canais de 1 MHz e cerca de 1600 saltos por segundo; a versão com **AFH** (adaptive frequency hopping) evita canais ocupados, por exemplo por Wi-Fi. (Números clássicos do Bluetooth BR/EDR, de memória do autor; não reconfirmados nesta pesquisa.) FHSS exige sincronismo de tempo preciso entre os dois lados. Regras de uso de espalhamento espectral por faixa dependem da Anatel e, no radioamadorismo, da regulamentação do serviço (Módulo 5).

## CSS: espalhamento por chirp

**Chirp** é um sinal cuja frequência varre continuamente uma faixa, como o gorjeio de um pássaro. Um **upchirp** sobe de `f_baixa` a `f_alta` em um tempo `T`; um **downchirp** desce.

**CSS** (chirp spread spectrum) usa chirps que percorrem toda a banda alocada `B`. Diferente de DSSS, não há sequência pseudoaleatória: a propriedade matemática do chirp faz o trabalho. A Wikipedia destaca a robustez a ruído, a multipercurso e ao **efeito Doppler** (típico de rádio móvel). CSS foi padronizado no IEEE 802.15.4a e é a base da modulação **LoRa**, desenvolvida pela Semtech.

### Como LoRa usa chirps (introdução; o Módulo 8 aprofunda)

O receptor e o transmissor combinam três ideias:

1. **Símbolo = chirp deslocado ciclicamente.** Um upchirp base varre a banda `B`. Um símbolo é o mesmo chirp com um **atraso circular** (começa em outro ponto da varredura e "dá a volta"). Existem `2^SF` deslocamentos distintos, portanto cada símbolo carrega `SF` bits. `SF` é o **spreading factor** (fator de espalhamento); LoRa admite de 5 a 12 na documentação pública consultada (Wikipedia).
2. **Duração do símbolo.** `Ts = 2^SF / B`. Cada aumento de 1 em `SF` **dobra** o tempo de cada símbolo.
3. **Recepção por dechirp + FFT.** O receptor multiplica o sinal recebido por um **downchirp**. Um chirp deslocado, multiplicado pelo downchirp, vira uma **senoide de frequência fixa** cujo valor corresponde ao deslocamento. Uma FFT localiza essa frequência: a energia de todo o símbolo se concentra em um único "bin". O ruído, sem essa estrutura, se espalha por todos os bins. Esse é o ganho de processamento, `2^SF`.

### Taxa de bits e SNR

A taxa de bits (sem correção de erros) é

```
Rb = SF x B / 2^SF
```

Com correção de erros de taxa de código `CR` (de 4/5 a 4/8, Aula 9), a taxa efetiva é `Rb x CR`. Exemplos com `B = 125 kHz` e `CR = 4/5`:

| SF | Símbolo `Ts` | `Rb` sem FEC | com `CR = 4/5` |
|---|---|---|---|
| 7 | 1,02 ms | 6,8 kbit/s | 5,5 kbit/s |
| 9 | 4,1 ms | 2,2 kbit/s | 1,8 kbit/s |
| 12 | 32,8 ms | 366 bit/s | 293 bit/s |

Os números seguem das fórmulas acima; os valores 5,5 kbit/s e 293 bit/s são os mesmos conhecidos em tabelas de LoRaWAN.

SNR mínimo de demodulação, valores de datasheet de receptores SX127x (confira o da versão que você usar): aproximadamente -7,5 dB em SF7, subindo em degraus de 2,5 dB até -20 dB em SF12. Cada aumento de SF: **+2,5 dB de sensibilidade** e **metade da taxa** e **o dobro do tempo no ar**. Da Aula 7: SF12 em 125 kHz, `NF = 6 dB`, dá `-174 + 6 + 51 - 20 = -137 dBm`, o valor típico de datasheet.

Por que dá para decodificar com SNR de -20 dB (sinal 100 vezes mais fraco que o ruído em `B`): em SF12 o receptor acumula a energia de `2^12 = 4096` chips de forma coerente, um ganho de `10 x log10(4096) = 36 dB`, e a decisão final sobre qual dos 4096 símbolos chegou precisa de um SNR pós-FFT bem menor que o da entrada.

### Detalhes que ficam para o Módulo 8

Cabeçalho, preâmbulo, CRC, ortogonalidade entre SFs diferentes (SFs distintos no mesmo canal são quase ortogonais), regras de duty cycle por região e a camada de rede LoRaWAN: [Módulo 8: LoRa e LoRaWAN](../08%20-%20LoRa%20e%20LoRaWAN/README.md).

## Resumo

- Espalhar é gastar banda para trocar por potência: a energia fica abaixo do ruído por Hz e é recolhida no receptor.
- `Gp = B_espalhada / Rb` melhora o SNR na saída na mesma razão.
- DSSS multiplica bits por chips rápidos e correlaciona no receptor (GPS 43 dB, Wi-Fi 802.11b 10,4 dB); FHSS salta entre canais (Bluetooth, 1600 saltos/s).
- CSS usa chirps que varrem toda a banda; LoRa codifica `SF` bits por símbolo como deslocamento cíclico do chirp e decodifica por dechirp + FFT.
- `Rb = SF x B / 2^SF`; cada SF a mais dobra o tempo no ar, corta a taxa pela metade e ganha ~2,5 dB de sensibilidade.
- LoRa opera com SNR negativo (até -20 dB em SF12).

## Para aprofundar

- [ ] [Chirp spread spectrum (Wikipedia)](https://en.wikipedia.org/wiki/Chirp_spread_spectrum) (Wikipedia): definição e aplicações de CSS (página aberta e confirmada em setembro de 2026).
- [ ] [LoRa (Wikipedia)](https://en.wikipedia.org/wiki/LoRa) (Wikipedia): modulação, fatores de espalhamento, taxas e bandas (página aberta e confirmada em setembro de 2026).
- [ ] [Direct-sequence spread spectrum (Wikipedia)](https://en.wikipedia.org/wiki/Direct-sequence_spread_spectrum) (Wikipedia): definição de ganho de processamento e DSSS (página aberta e confirmada em setembro de 2026).

[Próxima aula: OFDM, correção de erros e o compromisso central](./09%20-%20OFDM%20FEC%20e%20Compromisso.md)
