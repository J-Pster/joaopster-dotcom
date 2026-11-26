[Voltar ao módulo](./README.md)

# Aula 3: Limites físicos da mesh sobre LoRa

*Pergunta que esta aula responde: por que uma rede mesh LoRa entope com poucas dezenas de nós ativos, e como calcular, com números, quanto tráfego ela aguenta?*

> Os cálculos de tempo no ar desta aula usam a fórmula do datasheet Semtech (mostrada abaixo) com os parâmetros dos presets do Meshtastic (documentação oficial, verificada em setembro de 2026). São contas minhas, coerentes com a calculadora da Semtech, mas confirme os valores da sua configuração com uma calculadora de airtime antes de decidir algo.

## O recurso escasso: tempo de ar

No Módulo 8 você viu que o LoRa troca **taxa de dados por alcance**: cada passo a mais no **fator de espalhamento (SF)** dobra o tempo de transmissão e ganha cerca de 2,5 dB de margem de enlace. O resultado prático é que um pacote LoRa de longo alcance é **muito lento**: mensagem curta = fração de segundo, no ar.

Numa rede mesh todos os nós no mesmo alcance disputam **o mesmo canal**: mesma frequência, mesma largura de banda, mesmo SF. Quando um nó transmite, os vizinhos que o ouvem **não conseguem transmitir ao mesmo tempo** (dois sinais na mesma frequência se atrapalham). O que você tem para dividir entre todos é tempo. Por isso o recurso a medir é o **tempo no ar (airtime)**.

## Calculando o tempo no ar de um pacote

Definições (Semtech SX1262/SX127x, com cabeçalho explícito e CRC ligado, que é o modo do Meshtastic):

```
Tsym      = 2^SF / BW                     (duração de um símbolo, s)
Tpreamble = (Npreamble + 4,25) x Tsym     (Meshtastic usa Npreamble = 16)
Nsym_pl   = 8 + max( ceil( (8 x PL - 4 x SF + 28 + 16) / (4 x (SF - 2 x DE)) ) x (CR + 4), 0 )
Tair      = Tpreamble + Nsym_pl x Tsym
```

`PL` é o tamanho do pacote em bytes (no Meshtastic, os 16 bytes de cabeçalho mais o conteúdo criptografado). `CR` vale 1 para 4/5, 2 para 4/6, 3 para 4/7 e 4 para 4/8. `DE` (otimização de baixa taxa) vale 1 quando `Tsym` passa de 16 ms, senão 0.

**Exemplo resolvido, preset LongFast (SF11, BW 250 kHz, CR 4/5), pacote de 56 bytes:**

- `Tsym = 2048 / 250.000 = 8,192 ms`
- `Tpreamble = (16 + 4,25) x 8,192 ms = 165,9 ms`
- `Nsym_pl = 8 + ceil((448 - 44 + 28 + 16) / (4 x 11)) x 5 = 8 + ceil(448 / 44) x 5 = 8 + 11 x 5 = 63`
- `Tpayload = 63 x 8,192 ms = 516,1 ms`
- `Tair = 165,9 + 516,1 = 682 ms`

Resultados para os presets mais usados (BW e SF da documentação do Meshtastic; tempos calculados por mim):

| Preset | SF / BW / CR | Símbolo | 32 bytes | 56 bytes | 100 bytes | 255 bytes |
|---|---|---|---|---|---|---|
| ShortFast | 7 / 250 kHz / 4/5 | 0,51 ms | 40 ms | 58 ms | 91 ms | 204 ms |
| MediumFast | 9 / 250 kHz / 4/5 | 2,05 ms | 140 ms | 191 ms | 293 ms | 642 ms |
| **LongFast** (padrão) | 11 / 250 kHz / 4/5 | 8,19 ms | 477 ms | 682 ms | 1.010 ms | 2.157 ms |
| LongModerate | 11 / 125 kHz / 4/8 | 16,4 ms | 1.511 ms | 2.167 ms | 3.478 ms | 7.934 ms |
| LongSlow (obsoleto) | 12 / 125 kHz / 4/8 | 32,8 ms | 2.761 ms | 4.071 ms | 6.169 ms | 14.295 ms |

Duas leituras:

- Um pacote curto no LongFast ocupa cerca de **meio segundo**. Um pacote de 56 bytes no ShortFast, **58 ms**, ou seja, **11,8 vezes menos** ar (`682 / 58`).
- O custo cresce quase linear com o tamanho, mas há um **piso** alto: o preâmbulo sozinho gasta 166 ms no LongFast. Mensagens muito curtas não são baratas.

O que o preset dá em troca: o ShortFast tem margem de enlace de 143 dB e o LongFast 153 dB (documentação do Meshtastic, com 22 dBm e antena 0 dBi). São 10 dB de diferença, e no espaço livre 10 dB é um fator de 3,2 em distância. Na prática, em terreno real, a diferença é menor que isso ou maior, conforme obstáculos.

## Duty cycle: a régua legal

**Duty cycle** é a fração do tempo em que um transmissor pode ficar no ar. Na Europa, a faixa de 869,4 a 869,65 MHz (usada pelo Meshtastic em EU_868) tem limite de **10%**: 360 s de transmissão por hora por nó. Com pacotes de 56 bytes no LongFast (0,682 s), isso dá no máximo `360 / 0,682 = 527` pacotes por hora por nó (e o firmware para de transmitir ao chegar ao limite, calculado por janela deslizante de 1 hora).

Para o Brasil, a documentação do Meshtastic lista para as regiões ANZ e BR_902 duty cycle de 100% (sem limite, na forma como o firmware modela). A Aula 9 trata do que a regulamentação brasileira diz; na leitura do texto do Ato 14448 (item 10) não há limite de duty cycle para 915 a 928 MHz, apenas ocupação média por frequência de salto ([Módulo 8, Aula 4](../08%20-%20LoRa%20e%20LoRaWAN/04%20-%20Frequencias%20Regulamentacao%20e%20Duty%20Cycle.md)). A ausência de limite legal **não** elimina o limite físico: ele só muda de mãos, da lei para a física e para a boa educação com os vizinhos.

## Colisões: por que o canal compartilhado falha

Duas transmissões que se sobrepõem no tempo, na mesma frequência, no receptor, se destroem (com uma exceção abaixo). Como os nós não têm coordenação central, eles usam um esquema de acesso aleatório. A referência teórica é o **ALOHA puro**: cada nó transmite quando quer. Se o **tráfego oferecido** `G` for medido em "pacotes por tempo de pacote" (ocupação do canal), a probabilidade de um pacote chegar sem colisão é `e^(-2G)`, porque qualquer outra transmissão iniciada na janela de duas durações de pacote em torno da sua o destrói.

| Ocupação do canal (G) | Probabilidade de o pacote passar (ALOHA puro) |
|---|---|
| 5% | `e^(-0,1)` = 90% |
| 10% | `e^(-0,2)` = 82% |
| 25% | `e^(-0,5)` = 61% |
| 40% | `e^(-0,8)` = 45% |

Isso é o **pior caso** (sem escutar antes), mas descreve bem os nós que não se ouvem (abaixo). O máximo de vazão útil do ALOHA puro é 18% da capacidade do canal (com `G = 50%`); acima disso, mais tráfego significa menos entregas.

### CSMA e CAD: escutar antes de falar

**CSMA/CA (Carrier Sense Multiple Access with Collision Avoidance)** é a estratégia do Wi-Fi: antes de transmitir, escute o canal; se estiver ocupado, espere. Em LoRa, o rádio tem um recurso chamado **CAD (Channel Activity Detection)**, projetado para detectar o **preâmbulo LoRa** de outra transmissão. O Meshtastic faz CAD antes de transmitir; se o canal está ocupado, espera. Como, quando o canal libera, vários nós querem falar juntos, cada um sorteia um número de **slots** de espera dentro de uma **janela de contenção (contention window)** cujo tamanho **cresce com a utilização do canal**. O tempo de um slot é o tempo necessário para fazer um CAD confiável. Isso reduz, mas não elimina, as colisões.

### O nó escondido (hidden node)

O CAD só ajuda se o nó **ouve** o outro. Considere A e C, ambos ouvidos por B, mas A e C **não se ouvem** (uma colina entre eles). A não detecta C transmitindo, transmite junto, e B recebe as duas sobrepostas. Esse é o **problema do nó escondido**. Em uma mesh de área ampla ele é a regra, não a exceção, pois a geometria de longo alcance cria muitos pares que se enxergam só por intermediários. Nesses pares, o acesso se comporta como ALOHA, e a tabela acima vale.

Existe o **efeito de captura**: se um dos sinais for bem mais forte que o outro no receptor (a diferença necessária depende do chip e do SF), o mais forte ainda é decodificado. Ajuda em alguns casos, mas não pode ser projetado como garantia.

## Por que inundação piora tudo

Cada pacote retransmitido é mais uma transmissão que ocupa o canal para toda a vizinhança. A carga real sobre o ar é o **tráfego originado vezes o número de transmissões por pacote**. Em um grupo onde todos se ouvem, a supressão do Meshtastic deixa em geral uma retransmissão por pacote (a origem mais um relay). Em uma malha espalhada, com vários relays em regiões diferentes, cada pacote é transmitido dezenas de vezes.

E o tráfego não é só o de mensagens de usuário. Sem módulos extras, cada nó Meshtastic gera, segundo a documentação do algoritmo:

| Tráfego automático | Intervalo padrão documentado |
|---|---|
| Telemetria do dispositivo | 30 minutos |
| Posição | 15 minutos (com "smart broadcast") |
| NodeInfo (nome, chave pública) | 3 horas |

Observação: a documentação diz que a partir do firmware 2.4.0 esses intervalos são ampliados quando há mais de 40 nós vistos nas últimas 2 horas, pela fórmula `Intervalo_novo = Intervalo x (1,0 + (Nós_online - 40) x 0,075)`. Exemplo do próprio texto: 62 nós online levam a telemetria de 30 min para 79,5 min. E há relato de desenvolvedores em discussões do GitHub de que no 2.7 a telemetria não está mais habilitada por padrão (confirme na sua versão; o comportamento de padrões muda entre versões).

### Exemplo resolvido: quantos nós cabem em um canal?

Premissas, todas explícitas: LongFast; pacotes de 56 bytes (682 ms); cada nó origina posição (4 por hora), telemetria (2 por hora) e NodeInfo (1/3 por hora), total `6,33` pacotes por hora; todos os nós se ouvem (um domínio de colisão); cada pacote é transmitido **2 vezes** (origem e um relay). Sem nenhuma mensagem de usuário.

- Ar por nó por hora: `6,33 x 2 x 0,682 s = 8,63 s`
- Utilização do canal: `N x 8,63 / 3600 = N x 0,24%`

| Nós (N) | Utilização só de tráfego automático |
|---|---|
| 40 | 9,6% |
| 100 | 24% |
| 150 | 36% |

Com 100 nós, quase 1/4 do canal já está tomado só por os nós avisarem que existem, sem nenhum humano ter digitado nada. Compare com a tabela de ALOHA: a 25%, cerca de 4 em cada 10 pacotes colidem no pior caso. O mesmo cenário no **ShortFast** (58 ms por pacote): `N x 6,33 x 2 x 0,058 / 3600`, ou seja `N x 0,020%`, e 100 nós usam **2%**.

A documentação do Meshtastic confirma o quadro com um caso real: uma mesh de mais de 150 nós, em LongFast, tinha picos de utilização acima de 65% em sítios movimentados, composta principalmente por NodeInfo, posição e telemetria, e mesmo mensagens de texto ficaram pouco confiáveis; migrando para ShortFast, o problema cedeu (post oficial "Is LongFast Holding Your Mesh Back?", que também é a fonte do limiar acima de 60 nós próximos como candidato a preset mais rápido). E um outro texto oficial (Demystifying ROUTER_LATE) sugere olhar dois números no seu nó: `ChUtil` (ocupação do canal vista por ele) e `TXUtil`/`AirUtilTX` (a parte que é dele). Sugestão do texto: abandonar o papel de infraestrutura se `ChUtil` passar de 25% ou `AirUtilTX` de 7 a 8%. Firmware já corta telemetria: por relato da comunidade, clientes param telemetria acima de 25% de utilização e roteadores acima de 40%.

### Capacidade agregada

Um canal LongFast entrega no máximo `3600 / 0,682 = 5.279` pacotes de 56 bytes por hora para **toda a área que se ouve**, e isso já é o teto absoluto, sem colisão e sem espera: **1,47 pacote por segundo**, ou cerca de 1 kbps de dado bruto (o número de 1,07 kbps da documentação é o máximo teórico do preset). Não há como adicionar canais paralelos sem outro rádio, porque cada nó tem **um** receptor sintonizado em **uma** frequência.

Compare com a estrela LoRaWAN do Módulo 8: o gateway tem um **concentrador de múltiplos canais** que demodula vários canais e vários SFs ao mesmo tempo, e os sensores mandam poucas vezes por hora. A capacidade da estrela cresce com o hardware do gateway. Na mesh, **não existe esse nó especial**: cada nó, inclusive o que só quer avisar que está vivo, gasta o único recurso comum.

Há também um resultado teórico clássico (Gupta e Kumar, 2000) para redes ad hoc de rádio com N nós que querem falar com destinos aleatórios: a capacidade por nó **cai** com N, na ordem de `1 / raiz(N)` no melhor caso, e pior ainda quando o roteamento é por inundação (quase `1 / N`). Não recalculei o artigo aqui; ele é a base para a intuição que os números acima mostram: **mais nós dividem o mesmo bolo, não o aumentam**.

### Cadeias de saltos

Um pacote que atravessa `h` saltos ocupa `h` vezes o ar do salto simples, no mínimo. E numa cadeia longa, em geral só um a cada três saltos pode transmitir ao mesmo tempo sem se atrapalhar (regra prática de cadeias com um só canal e nós escondidos), então a vazão ponta a ponta fica em torno de 1/3 da taxa de um enlace. Um pacote de 56 bytes no LongFast por 4 saltos gasta no mínimo `4 x 0,682 = 2,7 s` de ar total, mais as esperas aleatórias de cada nó. Por isso latência de vários segundos por mensagem é normal, e por isso o TTL curto (3) é recomendado.

## O limite físico de alcance, por outro lado

Os limites acima são de **capacidade**. O **alcance** é outro assunto, já coberto no Módulo 2: no LongFast a margem de enlace é 153 dB (com 22 dBm, antena 0 dBi). A perda no espaço livre em 906 MHz a 10 km é `32,44 + 20 x log10(10) + 20 x log10(906) = 32,44 + 20 + 59,14 = 111,6 dB`, ou seja, sobram cerca de 41 dB de margem. Em espaço livre, o alcance teórico seria de mais de mil quilômetros. O que limita é o **horizonte e o terreno**: com a aproximação de horizonte de rádio `d = 4,12 x (raiz(h1) + raiz(h2))` km, com alturas em metros, duas antenas a 10 m se enxergam a até `4,12 x (3,16 + 3,16) = 26 km`, e um nó em morro de 100 m com outro a 2 m, `4,12 x (10 + 1,41) = 47 km`. Alcance de LoRa é, sobretudo, **linha de visada e altura** (ver [Aula de linha de visada, horizonte e Fresnel](../02%20-%20Propagacao%20de%20Radio/03%20-%20Linha%20de%20Visada%20Horizonte%20e%20Fresnel.md) e [orçamento de enlace](../02%20-%20Propagacao%20de%20Radio/08%20-%20Orcamento%20de%20Enlace.md)).

Isso cria uma tensão de projeto: **alcance grande significa que muitos nós se ouvem**, e mais nós no mesmo domínio de colisão significa mais disputa. Um nó em um morro que ouve 200 nós da cidade é ao mesmo tempo o melhor relay e o ponto mais congestionado.

## O que se faz para escalar (e por que só ajuda em parte)

- **Presets mais rápidos** em áreas densas (menos ar por pacote, menos alcance por salto). Foi a saída da mesh de 150 nós citada acima.
- **Menos tráfego automático**: intervalos maiores, telemetria desligada, posição só onde importa.
- **Papéis**: poucos nós de infraestrutura bem colocados, o resto só cliente sem retransmitir (Aula 4).
- **Roteamento aprendido em vez de inundação**, o caminho do MeshCore (Aula 6): a mensagem de A para B passa por poucos repetidores em vez de por todos.
- **Redes separadas por frequência**: cada comunidade com o seu canal, ligadas por um backbone.
- **Sair do canal único**: outras tecnologias com mais canais paralelos (Aula 7).

Nenhuma destas remove o limite: o meio tem uma capacidade finita e compartilhada.

## Resumo

- Numa mesh LoRa, o recurso escasso é o **tempo no ar**: um pacote de 56 bytes gasta 682 ms no LongFast, contra 58 ms no ShortFast.
- Sem coordenação, os nós usam **CSMA com CAD**, mas **nós escondidos** colidem como no **ALOHA** (a 25% de ocupação, cerca de 61% passam; a 40%, 45%).
- A inundação multiplica as transmissões, e o tráfego automático (posição, telemetria, NodeInfo) sozinho já ocupa cerca de 24% do canal com 100 nós no LongFast, no exemplo resolvido.
- A capacidade total do canal é fixa (cerca de 1,5 pacote por segundo no LongFast), e cresce **para cada nó novo no mesmo domínio** só a disputa, não a vazão.
- O alcance é limitado por horizonte e terreno, não pela potência, e alcance grande aumenta o número de nós que se ouvem, o que piora a disputa.

## Para aprofundar

- [ ] [Is LongFast Holding Your Mesh Back? Better LoRa Presets](https://meshtastic.org/blog/why-your-mesh-should-switch-from-longfast/) (blog oficial do Meshtastic): explica, com um caso de mesh de 150 nós que migrou de LongFast para ShortFast, por que presets rápidos escalam melhor.
- [ ] [Radio Settings](https://meshtastic.org/docs/overview/radio-settings/) (documentação oficial do Meshtastic): tabela de presets com taxa, margem de enlace, SF e largura de banda, e explicação do custo de cada parâmetro.
- [ ] [Do LoRa Low-Power Wide-Area Networks Scale?](https://www.link-labs.com/hubfs/DOCS.linklabs.com/2017/01/lora-scalability_r254.pdf) (artigo acadêmico hospedado pela Link Labs): estuda limites de capacidade em LoRa **estrela** (colisões, captura, SF). Não é sobre mesh, mas dá a base experimental sobre colisões e efeito de captura em LoRa.

[Próxima aula: Meshtastic, arquitetura e protocolo](./04%20-%20Meshtastic%20Arquitetura%20e%20Protocolo.md)
