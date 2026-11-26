[Voltar ao módulo](./README.md)

# Aula 4: Diagrama de radiação, ganho, polarização e EIRP

*Pergunta que esta aula responde: se a antena não cria energia, como ela "tem ganho"? E o que muda no enlace quando escolho uma antena de 3, 5 ou 12 dBi?*

## O problema: a energia não é criada, só distribuída

Uma antena é um componente passivo: não amplifica nada. A potência que sai dela é, no máximo, a que entrou. O que uma antena pode fazer é **escolher para onde** essa potência vai. Uma lanterna tem a mesma lâmpada com ou sem refletor; o refletor concentra a luz num feixe e o ponto iluminado fica mais forte, às custas do resto do ambiente ficar no escuro. **Ganho de antena** é exatamente isso: concentração de energia numa direção, cobrada em outras direções.

## Antena isotrópica: a régua

Para medir "concentração" é preciso uma referência sem preferência de direção. A **antena isotrópica** é uma fonte pontual imaginária que irradia igualmente em todas as direções da esfera. Não existe fisicamente (Módulo 2 usou essa ideia na perda de espaço livre), mas serve de régua. Toda antena real concentra em alguma direção e deixa fraco em outras.

## Diagrama de radiação

O **diagrama de radiação** (*radiation pattern*) é o gráfico que mostra, para cada direção ao redor da antena, quanta energia sai (ou entra). Como o espaço é 3D, o diagrama costuma ser mostrado em dois cortes:

- **Plano horizontal** (azimute): visto de cima, girando em torno da antena.
- **Plano vertical** (elevação): visto de lado, do horizonte para cima e para baixo.

Vocabulário:

- **Lóbulo principal**: a direção de máxima radiação. Os lóbulos menores em outras direções são **lóbulos laterais** e o de trás, **lóbulo traseiro**.
- **Nulo**: direção com radiação mínima ou zero. Um dipolo tem nulos nas pontas do fio (na direção do próprio eixo), e nada é irradiado ali.
- **Relação frente-costas** (*front-to-back ratio*): quantos dB o lóbulo frontal é mais forte que o traseiro. Importa contra interferência vinda de trás.

Formato do dipolo vertical ou monopolo: uma **rosca (donut)** em volta do fio. Em azimute é um círculo (por isso se chama **omnidirecional**: igual em todas as direções horizontais); em elevação são dois lóbulos, um para cada lado do fio, sem nada em cima nem embaixo. Toda a energia é comprimida numa faixa perto do plano horizontal.

## Diretividade, eficiência e ganho

- **Diretividade** (`D`): quanto a antena concentra a radiação, só pela geometria do diagrama. É a razão entre a intensidade na direção de maior radiação e a média sobre todas as direções. Uma antena sem nenhuma perda tem ganho igual à diretividade.
- **Eficiência** (`eta`, de 0 a 1): a parte da potência entregue à antena que realmente é irradiada (o restante vira calor no fio, na bobina, no solo).
- **Ganho** (`G`) = diretividade x eficiência. É o que interessa na prática. Ex.: antena com `D = 5 dBi` e `eta = 50%` (perde 3 dB) tem `G = 2 dBi`.

### dBi e dBd

O ganho é dado em **dB** (Módulo 1) em relação a uma referência. Duas usadas:

- **dBi**: em relação à antena isotrópica.
- **dBd**: em relação a um dipolo de meia onda.

Como o dipolo já concentra um pouco (nenhuma antena real é isotrópica), ele tem ganho de 2,15 dBi (diretividade 1,64; [Wikipedia, Dipole antenna](https://en.wikipedia.org/wiki/Dipole_antenna)). Conversão:

```
G (dBi) = G (dBd) + 2,15
```

Um Yagi de "6 dBd" tem 8,15 dBi. Cuidado em catálogos: quando a unidade não vem escrita, pergunte qual é; fabricantes preferem dBi porque o número fica maior. Por padrão, neste curso, ganho sem unidade específica é em dBi.

Consequência de somar dB: **+3 dB dobra** a potência na direção (concentra o dobro), **+6 dB** quadruplica. No espaço livre a potência cai com o quadrado da distância (Módulo 2), então **+6 dB dobram o alcance**. Uma antena de 2 dBi trocada por uma de 8 dBi (mesma polarização, mesmo enlace, mesma perda de cabo) pode, em teoria, dobrar a distância alcançável em linha de visada. Na prática, com obstáculos e multipercurso, o ganho se traduz em menos do que isso, mas ainda é o método mais barato de ganhar dB.

### Largura de feixe e a troca ganho x cobertura

**Largura de feixe** (*beamwidth*): o ângulo entre os pontos do lóbulo principal em que a potência cai 3 dB (metade) do máximo. Feixe estreito = alto ganho. Numa aproximação de antena sem perdas com feixe de larguras `theta_H` (horizontal) e `theta_V` (vertical), em graus:

```
D (aprox.) = 41253 / (theta_H x theta_V)
```

Exemplo: feixe de 60 x 60 graus: `41253 / 3600 = 11,5`, ou `10,6 dBi`. Fórmula aproximada: serve para ordem de grandeza (antena real tem lóbulos laterais que roubam energia).

**Antenas omni têm uma troca inevitável**: como o ganho é conservação de energia (o "donut" não cria potência), aumentar o ganho de uma omnidirecional é **achatar o donut**. O ganho dobra com metade da largura vertical. Isso é o que fazem as **colineares**: empilham vários elementos verticais, e o feixe fica mais estreito na vertical e igual em horizontal.

Exemplo numérico de consequência prática: uma antena omni de 5 dBi tem largura vertical da ordem de 30 graus (a de dipolo, 2,15 dBi, é da ordem de 78 graus; valores típicos, confira o datasheet). Coloque-a num mastro de 30 m e o alvo a 100 m de distância horizontal: o ângulo para baixo é `atan(30/100) = 16,7 graus`, fora do lóbulo de 15 graus para cada lado (meia largura de 30 graus). Uma omni de ganho maior **deixa alvos próximos e abaixo dela no vazio**. Regra: ganho maior serve para alcance em terreno plano, onde os alvos estão perto do horizonte; ganho menor serve quando os alvos ficam em morro, prédio ou muito abaixo/acima. Em terreno irregular, ou se o mastro balança ou a antena está inclinada (mão, carro), o feixe estreito falha.

Para antenas **diretivas** (Yagi, painel, parabólica), o feixe estreito tem que ser apontado, e o ganho maior é a razão de existirem. Elas também reduzem interferência vinda de outras direções (recepção de fora do feixe fica atenuada pelo mesmo diagrama).

## Polarização

Repetição do Módulo 1: o campo elétrico da onda oscila num plano. A **polarização** é a orientação desse plano:

- **Vertical**: o campo elétrico oscila para cima e para baixo. É o de um fio vertical (monopolo, colinear vertical).
- **Horizontal**: fio horizontal (dipolo deitado).
- **Circular**: o campo gira em círculo (antena helicoidal, algumas de satélite). Pode ser à direita ou à esquerda.

### Casamento de polarização e perda

A antena receptora capta a componente do campo alinhada com ela. Se as polarizações são lineares e giradas por um ângulo `theta`, a fração de potência captada é `cos^2(theta)`:

| Diferença de polarização | Potência recebida | Perda |
|---|---|---|
| 0 graus (igual) | 100% | 0 dB |
| 30 graus | 75% | 1,25 dB |
| 45 graus | 50% | 3 dB |
| 60 graus | 25% | 6 dB |
| 90 graus (cruzada) | 0 (na teoria) | infinita; na prática 20 a 30 dB |

Na prática, reflexões e obstáculos misturam e giram a polarização, então a cruzada nunca chega ao infinito, mas custa de 20 a 30 dB em enlace limpo (ordem de grandeza típica).

- Linear contra circular: perda de cerca de 3 dB, independente do ângulo (a componente linear é metade da circular).
- Circular à direita contra circular à esquerda: cruzadas, grande perda. Reflexão em superfície inverte o sentido da circular; é útil em satélite e radar.

Regra: em rádios terrestres (VHF, UHF, LoRa), **as duas pontas devem ter a mesma polarização, quase sempre vertical**, porque as antenas portáteis e de veículo são verticais. Um dipolo de LoRa deitado no chão contra um vertical do outro lado perde muito. Em comunicação com satélite, gira a polarização e por isso se usa circular.

## Potência efetiva: EIRP, ERP

O que interessa aos regulamentos e ao alcance é quanto a antena entrega **na direção de máximo**, não quanto o transmissor produz. Duas medidas:

- **EIRP** (*Effective Isotropic Radiated Power*): a potência que uma antena isotrópica precisaria irradiar para dar a mesma intensidade na direção do máximo. Em dB:

```
EIRP (dBm) = P_transmissor (dBm) - perdas de cabo e conectores (dB) + G_antena (dBi)
```

- **ERP** (*Effective Radiated Power*): igual, mas em relação a um dipolo: `ERP = EIRP - 2,15 dB`.

Exemplo: módulo LoRa de 20 dBm (100 mW), 1 dB de perda de cabo e conectores, antena de 3 dBi: `EIRP = 20 - 1 + 3 = 22 dBm`, ou 158 mW. Repare que **trocar uma antena de 3 por uma de 9 dBi eleva o EIRP em 6 dB (quadruplica)** sem mexer no transmissor, e é aí que a regulamentação importa: os limites de potência (por faixa, por país) costumam ser em EIRP ou ERP (o que vale para cada faixa e serviço está no Módulo 5 para radioamador e nas normas da Anatel; não aplique um número sem conferir a norma da sua faixa), portanto uma antena de ganho mais alto pode obrigar a reduzir a potência do transmissor para não ultrapassar o limite.

## Resumo

- Antena é passiva: ganho é concentração de energia numa direção, cobrada em outras. Ganho = diretividade x eficiência.
- Diagrama de radiação mostra a direção de cada lóbulo; dipolo/monopolo vertical é um donut omnidirecional.
- dBi (relativo à isotrópica) = dBd (relativo ao dipolo) + 2,15. +3 dB dobra a potência na direção, +6 dB dobra o alcance em espaço livre.
- Omni de ganho alto é uma omni "achatada": estreita na vertical e pior para alvos abaixo ou acima do horizonte. Feixe estreito exige apontamento (Yagi, painel).
- Polarização das duas antenas deve casar: `cos^2(theta)` em potência (45 graus = 3 dB); cruzada = 20 a 30 dB de perda na prática; linear contra circular = 3 dB.
- `EIRP = P_TX - perdas + G(dBi)`; `ERP = EIRP - 2,15 dB`. Regulamentos limitam essas potências, não a do transmissor.

## Para aprofundar

- [ ] [Dipole antenna](https://en.wikipedia.org/wiki/Dipole_antenna) (Wikipedia): ganho do dipolo (2,15 dBi = 0 dBd) e origem do diagrama de rosca.

[Próxima aula: Tipos de antenas](./05%20-%20Tipos%20de%20Antenas.md)
