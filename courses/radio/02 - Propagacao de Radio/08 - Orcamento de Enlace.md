# Aula 8: Orçamento de enlace (link budget)

[Voltar ao módulo](./README.md)

*Pergunta que esta aula responde: dado um transmissor, um receptor, antenas e um ambiente, como saber com números se o enlace fecha e com que margem?*

## Por que isso existe

As aulas anteriores deram peças: perda de espaço livre, obstrução, fading, absorção, ionosfera. O **orçamento de enlace** junta todas numa conta de contabilidade em dB: o que sai do TX, o que ganha e perde no caminho, e o que sobra na entrada do RX comparado com o mínimo que o RX precisa. É a ferramenta central de projeto de qualquer rede de rádio.

## A conta

Em dB, tudo soma e subtrai (Módulo 1):

`Pr(dBm) = Pt(dBm) - Lt(dB) + Gt(dBi) - PL(dB) + Gr(dBi) - Lr(dB)`

- `Pt`: potência de saída do transmissor.
- `Lt`, `Lr`: perdas em cabos, conectores e adaptadores em TX e RX.
- `Gt`, `Gr`: ganhos das antenas (dBi, Módulo 4).
- `PL`: perda de percurso total (Aula 2 mais obstrução, absorção, ionosfera etc.).
- `Pr`: potência na entrada do receptor.

Comparação com o requisito do receptor:

`Margem (dB) = Pr - Sensibilidade`

A margem inclui a **margem de fading** (Aula 4): você exige que sobre uma folga para variações. Uma margem de 10 a 20 dB é usual; enlaces de missão crítica pedem mais.

Duas grandezas úteis:

- **EIRP** (Effective Isotropic Radiated Power) `= Pt - Lt + Gt`: potência que uma antena isotrópica precisaria irradiar para dar o mesmo campo. As regras de regulamentação limitam a EIRP em cada faixa (Módulo 8 para LoRa; Módulo 5 para radioamador). Você não pode compensar potência acima do limite com antenas de ganho.
- **Perda máxima admissível (MAPL)** `= Pt - Lt + Gt + Gr - Lr - Sensibilidade`: o quanto de `PL` o enlace aguenta. Comparado ao `PL` calculado, dá a margem.

## Sensibilidade e ruído: de onde vem o número

A **sensibilidade** do receptor é a potência mínima na entrada que permite decodificar. Ela vem do ruído térmico e do SNR necessário:

`Sensibilidade(dBm) = -174 + 10 x log10(B em Hz) + NF + SNR_min`

- `-174 dBm/Hz` é o ruído térmico a 290 K (`k x T`, Módulo 1 mencionou ruído).
- `B` é a largura de banda do receptor.
- `NF` é a **figura de ruído** do receptor (o quanto ele soma de ruído, dB).
- `SNR_min` é a relação sinal-ruído mínima que a modulação e o código conseguem decodificar (Módulo 3).

Isso mostra que sensibilidade melhora ao reduzir banda (menos ruído entra) ou usando modulação que decodifica com SNR menor.

## Exemplo 1: enlace LoRa

Sistema em 915 MHz, LoRa, SF12, banda de 125 kHz. Dados do receptor:

- `B` = 125.000 Hz: `10 x log10(125000) = 51 dB`.
- `NF` de um receptor típico da linha SX127x: cerca de 6 dB (ordem de grandeza).
- `SNR_min` em SF12: cerca de -20 dB (LoRa decodifica com sinal abaixo do ruído; explicado no Módulo 8).

`Sensibilidade = -174 + 51 + 6 - 20 = -137 dBm`

Bate com o valor típico que se costuma citar para o SX1276 em SF12/125 kHz, cerca de -137 dBm (não reconferi a tabela do datasheet nesta sessão). A página oficial da Semtech cita sensibilidade "até -148 dBm" e "orçamento de enlace de 168 dB" como valores máximos do chip (verificado em setembro de 2026). Esses máximos usam a menor banda e a maior potência (+20 dBm); confira a tabela do datasheet da sua revisão para cada SF e banda.

Agora o orçamento, com uma configuração comum de nó:

| Item | Valor |
|---|---|
| Potência TX (`Pt`) | +14 dBm |
| Perdas de cabo/conector TX | 0,5 dB |
| Ganho antena TX | 2 dBi |
| Ganho antena RX | 2 dBi |
| Perdas RX | 0,5 dB |
| Sensibilidade RX (SF12, 125 kHz) | -137 dBm |
| **MAPL** = 14 - 0,5 + 2 + 2 - 0,5 + 137 | **154 dB** |
| Margem de fading | 15 dB |
| **Perda de percurso utilizável** = 154 - 15 | **139 dB** |

Qual distância cabe em 139 dB? Depende do ambiente. Para 915 MHz, `PL(1 km)` em espaço livre = 91,7 dB (Aula 2). Com o modelo log-distância `PL(d) = 91,7 + 10 x n x log10(d)`, `d = 10^((139 - 91,7) / (10 x n))`. Valores ilustrativos:

| Ambiente | n | Distância que fecha |
|---|---|---|
| Espaço livre (visada, alturas grandes) | 2 | 10^(47,3/20) = **232 km** |
| Suburbano com árvores, visada quase limpa | 3 | 10^(47,3/30) = **38 km** |
| Urbano denso | 3,5 | 10^(47,3/35) = **22 km** |
| Urbano com obstruções fortes / baixo | 4 | 10^(47,3/40) = **15 km** |

Os números de `n` são ilustrativos (Aula 2). Eles mostram o ponto: **o alcance é dominado pelo ambiente**, não pela potência. Um teste típico com antenas a 2 m em cidade fica muito abaixo do teórico; o limite pode ser o horizonte (Aula 3: 12 km para duas antenas a 2 m em terreno plano). Para chegar a 100 km ou mais, é preciso altura e visada (topo a topo).

**Sensibilidade de SF7 vs SF12:** em SF7 a sensibilidade típica citada é de cerca de -123 dBm, 14 dB pior. A MAPL cai para cerca de 140 dB e, com margem de 15 dB, sobram 125 dB; a distância diminui por um fator de 3 (n = 3) a 5 (n = 2). A troca é taxa de dados por alcance (Módulo 8).

## Exemplo 2: enlace HF

Cenário: SSB voz em 14 MHz (banda de 20 m), de dia, distância de solo cerca de 3.000 km, um salto por F2 a 300 km de altura.

**Perda de percurso.** O caminho oblíquo tem cerca de `2 x raiz(1500² + 300²)` = 3.060 km (aproximação com Terra plana; suficiente para ordem de grandeza).

`FSPL = 32,44 + 20 x log10(3060) + 20 x log10(14) = 32,44 + 69,7 + 22,9 = 125,0 dB`

**Perdas ionosféricas e extras** (ilustrativo): absorção D nos dois trajetos de atravessar (ida e volta) cerca de 6 dB, reflexão no solo, desfocalização, polarização e outros, cerca de 8 dB. Total extra: 14 dB. (Números de ordem de grandeza; programas como o VOACAP calculam isso com modelos.) `PL = 139 dB`.

**Ruído: o receptor de HF é limitado pelo ruído externo, não pelo do receptor.** Em HF o ruído que entra pela antena (atmosférico, galáctico, artificial vindo de eletrônicos e redes elétricas) é muito maior que o ruído térmico do RX. Ele é descrito por um fator externo `Fa` (dB acima de `-174 dBm/Hz`). Assumimos `Fa` = 35 dB (ilustrativo: área residencial em 14 MHz; áreas rurais silenciosas têm menos, cidades, mais; valores para ajustes vêm da ITU-R P.372, que não consultei nesta sessão).

Ruído em SSB, `B` = 2.400 Hz: `-174 + 33,8 + 35 = -105,2 dBm`. SNR necessária para voz legível: cerca de 10 dB. Precisa de `Pr` >= -95 dBm. Sensibilidade "efetiva" do enlace: **-95 dBm**.

**Orçamento com 100 W (50 dBm):**

`Pr = 50 - 1 + 2,15 - 139 + 2,15 - 1 = -86,7 dBm`

(dipolos de 2,15 dBi e 1 dB de cabo em cada ponta). Margem: `-86,7 - (-95) = 8,3 dB`. O enlace fecha com folga modesta. (Em dBm, `-86,7 dBm` fica logo abaixo de S7 num medidor de S no padrão IARU de HF, em que S9 = -73 dBm e cada ponto de S vale 6 dB.)

**Com 5 W (QRP, 37 dBm), SSB:** `Pr = -99,7 dBm`, abaixo do necessário por 4,7 dB. Não fecha em voz.

**Com 5 W e CW (telegrafia), banda de 500 Hz:** ruído `-174 + 27 + 35 = -112 dBm`; SNR = `-99,7 - (-112) = 12,3 dB`. A telegrafia decodifica com SNR de alguns dB, então fecha com bastante folga. Modos digitais fracos (Módulo 7) operam ainda com SNR negativo em 2,5 kHz; por isso QRP em modo digital dá contatos intercontinentais. **A lição do HF: o modo define o SNR mínimo, o ruído externo define o piso, e por isso o que decide é potência, ganho da antena TX e escolha do modo.**

Duas ressalvas: (1) quando o ruído é externo, o ganho da antena RX amplifica sinal e ruído juntos, então não melhora o SNR (a antena RX ajuda ao rejeitar ruído vindo de outras direções); (2) os 2,15 dBi são só ilustração, pois dipolos baixos em HF têm ganho bem diferente na direção útil por causa do solo (Módulo 4).

## Checklist de um orçamento de enlace honesto

1. EIRP dentro do limite legal da faixa.
2. `PL` = espaço livre + obstrução (Fresnel/difração) + absorção (chuva, vegetação, paredes) + extras do meio (ionosfera).
3. Sensibilidade correta para o modo/taxa usados (não o melhor caso do folheto).
4. Ruído: em HF e VHF baixo, usar o ruído externo; em UHF e acima, o do receptor domina.
5. Margem de fading de 10 a 20 dB; mais para enlaces que não podem falhar.
6. Verificar o horizonte (Aula 3) antes de confiar em alcance calculado.
7. Validar em campo com medição de RSSI/SNR; o orçamento é modelo, não verdade.

## Resumo

- `Pr = Pt - Lt + Gt - PL + Gr - Lr`; margem = `Pr` menos sensibilidade; MAPL é o quanto de perda o enlace tolera.
- Sensibilidade = `-174 + 10 x log10(B) + NF + SNR_min`; LoRa SF12/125 kHz dá cerca de -137 dBm.
- LoRa 915 MHz, +14 dBm, antenas de 2 dBi: MAPL de 154 dB, 139 dB com margem de 15 dB; alcance de 15 km (urbano) a 232 km (espaço livre): o ambiente manda.
- HF: ruído externo domina; com 100 W e um salto, a margem em SSB é de cerca de 8 dB; CW e modos digitais deixam QRP funcionar.
- Sempre confirme com medição em campo.

## Para aprofundar

- [ ] [SX1276 (Semtech)](https://www.semtech.com/products/wireless-rf/lora-connect/sx1276) (Semtech): página do chip LoRa citado, com sensibilidade e potência máximas do fabricante.

[Próxima aula: Ferramentas de estimativa e escolha de faixa](./09%20-%20Ferramentas%20e%20Escolha%20de%20Faixa.md)
