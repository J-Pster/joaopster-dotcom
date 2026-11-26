# Aula 7: Shannon, Eb/N0 e sensibilidade do receptor

[Voltar ao módulo](./README.md)

*Pergunta que esta aula responde: existe um limite físico para a taxa de dados em um canal com ruído, e como isso se traduz em quanto sinal um receptor precisa?*

## O limite: capacidade de Shannon

Na Aula 6 vimos que mais bits por símbolo exigem mais SNR. Claude Shannon (1948) demonstrou que existe um limite absoluto: a **capacidade do canal**, a maior taxa de bits por segundo que pode ser transmitida com taxa de erro arbitrariamente pequena num canal com ruído branco gaussiano:

```
C = B x log2(1 + SNR)
```

`C` em bit/s, `B` em Hz, `SNR` em **razão linear** de potências (não em dB; 20 dB = 100, do Módulo 1). Não é uma regra de modulação: é uma fronteira que nenhuma tecnologia ultrapassa. Ela diz que só duas coisas compram taxa: **mais banda** e **mais SNR**.

### Exemplos numéricos resolvidos

**1. Canal de voz.** `B = 25 kHz`, `SNR = 20 dB = 100`:

`C = 25.000 x log2(101) = 25.000 x 6,66 = 166 kbit/s`.

**2. Mesmo canal, SNR de 0 dB (sinal igual ao ruído).** `SNR = 1`:

`C = 25.000 x log2(2) = 25 kbit/s`.

**3. Mesmo canal, SNR de -10 dB (sinal 10 vezes mais fraco que o ruído).** `SNR = 0,1`:

`C = 25.000 x log2(1,1) = 25.000 x 0,1375 = 3,4 kbit/s`.

Mesmo com sinal **abaixo** do ruído a capacidade não é zero: há informação, só que a taxa cai. É o que LoRa e o GPS exploram (Aula 8).

**4. Banda maior, mesmo SNR.** Com `B = 125 kHz` e `SNR = -10 dB`: `C = 125.000 x 0,1375 = 17,2 kbit/s`, cinco vezes mais que o exemplo 3 (banda 5 vezes maior). Cuidado: para a mesma potência recebida, alargar o canal admite mais ruído (`N = k x T x B`), então na prática o SNR cai quando a banda sobe. Quem quer alcance máximo com taxa baixa estreita a banda para ganhar sensibilidade (seção sobre sensibilidade, abaixo); quem quer taxa alta a alarga e paga em SNR.

### Dois regimes

- **SNR alto** (`SNR >> 1`): `C` cresce **logaritmicamente** com o SNR: cada 3 dB a mais rendem cerca de 1 bit/s/Hz extra. Dobrar a potência rende pouco. Aqui banda é o recurso valioso.
- **SNR baixo** (`SNR << 1`): `C ≈ 1,44 x B x SNR` e, como `SNR = S / (N0 x B)`, resulta `C ≈ 1,44 x S / N0`. **Capacidade proporcional à potência e independente da banda.** Aqui potência é o recurso valioso, e alargar a banda não muda o teto; o que a banda larga permite é operar com SNR por Hz muito baixo (espalhamento espectral, Aula 8).

## Eb/N0: a energia por bit

Comparar sistemas com bandas e taxas diferentes pede uma métrica normalizada. **Eb/N0** é a energia por bit dividida pela densidade espectral de ruído:

- `Eb`: energia gasta em um bit, `Eb = S / Rb` (watts x segundos = joules).
- `N0`: densidade de ruído, `N0 = k x T` (W/Hz). A 290 K, `N0 = -174 dBm/Hz`.

Relação com o SNR do canal:

```
SNR = (Eb / N0) x (Rb / B)      ou, em dB:   SNR(dB) = Eb/N0(dB) + 10 x log10(Rb / B)
```

`Rb / B` é a eficiência espectral. Se `Rb = B` (1 bit/s/Hz), `SNR = Eb/N0`; se `Rb < B` (sistemas de espalhamento), `SNR` é menor que `Eb/N0`, por isso LoRa opera com SNR negativo.

Cada modulação tem uma curva "taxa de erro de bit x Eb/N0". Da Aula 6, BPSK/QPSK precisam de ~9,6 dB para BER de `1e-5`. Comparar `Eb/N0` necessário é a forma justa de comparar modulações.

## O limite de Shannon em Eb/N0

Substituindo `Rb = C` e chamando `eta = C / B` (eficiência espectral no limite), a fórmula de Shannon vira:

```
Eb/N0 minimo = (2^eta - 1) / eta
```

| Eficiência espectral (bit/s/Hz) | Eb/N0 mínimo | em dB |
|---|---|---|
| 0,1 | 0,72 | -1,4 |
| 0,5 | 0,83 | -0,8 |
| 1 | 1 | 0 |
| 2 | 1,5 | 1,8 |
| 4 | 3,75 | 5,7 |
| 6 | 10,5 | 10,2 |
| 8 | 31,9 | 15,0 |

Quando `eta` tende a zero (banda muito maior que a taxa), o mínimo tende a `ln(2) = 0,693`, isto é, **-1,59 dB**: o **limite de Shannon absoluto**. Abaixo disso nenhuma comunicação confiável é possível, com qualquer tecnologia, e acima dele é possível, se houver banda suficiente e codificação perfeita. Note a direção do trade-off: **taxas baixas por Hz permitem operar com muito menos energia por bit**; taxas altas por Hz custam caro em energia.

### Quão perto estamos

QPSK sem codificação (`eta = 2` sem excesso de banda) precisa de ~9,6 dB para BER de `1e-5`; Shannon dá 1,8 dB. A diferença, ~7,8 dB, é o espaço que a **codificação de canal** (Aula 9) tenta ocupar. Códigos modernos (turbo, LDPC) chegam a cerca de 1 dB do limite (Wikipedia e PySDR: usados em 3G, 4G e Wi-Fi; margem exata depende do código e do comprimento do bloco).

## Ruído térmico e sensibilidade do receptor

**Sensibilidade** é o sinal mínimo, em dBm, que o receptor decodifica com taxa de erro aceitável. É o número que fecha o link budget do Módulo 2 (`potência recebida >= sensibilidade + margem`).

### Piso de ruído

Toda resistência à temperatura `T` gera ruído térmico de potência

```
N = k x T x B       k = 1,38e-23 J/K
```

A 290 K, `k x T = 4e-21 W/Hz = -174 dBm/Hz`. Para uma banda `B`:

```
N(dBm) = -174 + 10 x log10(B em Hz)
```

O receptor real piora isso com o **fator de ruído** `NF` (noise figure, em dB): os circuitos adicionam ruído próprio. Um bom receptor tem `NF` de 2 a 8 dB, dependendo do projeto.

### Fórmula de sensibilidade

```
Sensibilidade(dBm) = -174 + NF + 10 x log10(B) + SNR_min
```

`SNR_min` é o SNR que a modulação e a codificação exigem para a taxa de erro alvo.

**Exemplo A: rádio de voz SSB.** `B = 2,7 kHz` (`10 log 2700 = 34,3 dB`), `NF = 8 dB`, `SNR_min = 10 dB`:

`S = -174 + 8 + 34,3 + 10 = -121,7 dBm`.

**Exemplo B: LoRa, SF12, 125 kHz.** `B = 125 kHz` (`10 log 125000 = 51 dB`), `NF = 6 dB`, `SNR_min = -20 dB` (Aula 8):

`S = -174 + 6 + 51 - 20 = -137 dBm`. Esse valor coincide com o publicado pela Semtech para essa configuração em receptores SX127x (valores de datasheet: confira o da sua versão).

Note o mecanismo: o piso de ruído em 125 kHz é `-174 + 51 = -123 dBm`. O sinal a -137 dBm está **14 dB abaixo do ruído** na banda, e ainda assim é decodificado. É a Aula 8.

### Forma com Eb/N0 e taxa de bits

Usando `SNR = Eb/N0 x Rb / B`:

```
Sensibilidade(dBm) = -174 + NF + Eb/N0 + 10 x log10(Rb)
```

`B` desapareceu: a sensibilidade depende da taxa de bits e do `Eb/N0` da modulação. **Exemplo C:** 9600 bit/s, modulação que exige `Eb/N0 = 10 dB`, `NF = 6 dB`:

`S = -174 + 6 + 10 + 39,8 = -118,2 dBm`.

Mesma modulação a 1200 bit/s: `10 log 1200 = 30,8 dB`, então `S = -127,2 dBm`. Cada divisão da taxa por 2 dá **3 dB** de sensibilidade; em espaço livre 6 dB dobram a distância (Módulo 2), portanto cada divisão da taxa por 4 dobra o alcance, com o resto igual.

## Os quatro recursos

Shannon mostra que só existem quatro alavancas:

1. **Banda `B`.**
2. **Potência recebida** (potência de transmissão, ganho de antenas, distância).
3. **Ruído** (temperatura, `NF`, interferência).
4. **Taxa `Rb`** que se aceita.

Ganhar em um custa em outro. A Aula 9 organiza isso numa tabela.

## Resumo

- `C = B x log2(1 + SNR)`: limite absoluto de taxa; só banda e SNR compram capacidade.
- Em SNR alto a capacidade cresce de forma logarítmica com potência; em SNR baixo, é proporcional à potência e independente da banda.
- `Eb/N0` normaliza a comparação entre modulações; `SNR = Eb/N0 x Rb/B`.
- O limite mínimo de `Eb/N0` é -1,59 dB (banda muito maior que a taxa); Shannon a 2 bit/s/Hz exige 1,8 dB, contra ~9,6 dB do QPSK sem codificação.
- Piso de ruído: `-174 dBm/Hz + 10 x log10(B) + NF`. Sensibilidade = piso + SNR mínimo.
- Reduzir a taxa pela metade ou a banda pela metade dá 3 dB de sensibilidade.

## Para aprofundar

- [ ] [Shannon-Hartley theorem (Wikipedia)](https://en.wikipedia.org/wiki/Shannon%E2%80%93Hartley_theorem) (Wikipedia): fórmula, aproximações de SNR alto e baixo (página aberta e confirmada em setembro de 2026).
- [ ] [Noise and Random Variables (PySDR)](https://pysdr.org/content/noise.html) (Marc Lichtman): ruído gaussiano, dB, SNR, com código (página aberta e confirmada em setembro de 2026).

[Próxima aula: Espalhamento espectral, DSSS, FHSS e CSS](./08%20-%20Espalhamento%20Espectral.md)
