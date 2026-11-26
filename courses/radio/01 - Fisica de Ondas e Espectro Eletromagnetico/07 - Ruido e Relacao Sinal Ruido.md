# Aula 7: Ruído e relação sinal-ruído

[Voltar ao módulo](./README.md)

*Pergunta que esta aula responde: se o sinal de rádio pode chegar tão fraco quanto 10^-13 W, o que decide se ainda dá para entendê-lo? Por que a potência recebida sozinha não basta?*

## Por que o ruído é o verdadeiro limite

Na Aula 6 vimos que o sinal enfraquece com a distância. Poderia parecer que, com um amplificador suficientemente bom no receptor, qualquer sinal fraco seria recuperável: bastaria amplificar. Isso não funciona, porque **o ruído é amplificado junto** com o sinal. O que determina se a informação é recuperável não é quão forte o sinal chega, e sim **quão forte ele é em relação ao ruído**. Essa razão é a **relação sinal-ruído**, SNR (signal-to-noise ratio).

Analogia: tentar ouvir uma conversa numa sala. Aumentar o volume do aparelho não ajuda se a sala é barulhenta, porque aumenta o barulho na mesma proporção. Ajuda mais aproximar-se ou pedir silêncio.

## Definições

- **Ruído:** qualquer sinal indesejado que se soma ao sinal desejado no receptor e limita a capacidade de extraí-lo. Não é uma "onda diferente"; é energia EM (ou eletrônica) que não carrega a informação de interesse.
- **Piso de ruído** (noise floor): a potência total de ruído no receptor, numa dada largura de banda. O sinal precisa estar acima dele.
- **SNR:** razão entre potência do sinal e potência do ruído, quase sempre em dB:

`SNR (dB) = S (dBm) - N (dBm)`

Como as duas estão em dBm, a subtração dá dB (Aula 5). Exemplo: sinal de -90 dBm e piso de ruído de -100 dBm dão SNR = 10 dB, isto é, o sinal é 10 vezes mais forte que o ruído em potência (cerca de 3,2 vezes em tensão).

SNR negativo (por exemplo -10 dB) significa que o sinal é mais fraco que o ruído. Isso não impede a comunicação em certos sistemas (veja abaixo).

## De onde vem o ruído

**1. Ruído térmico (inevitável).** Os elétrons em qualquer material acima do zero absoluto têm movimento térmico aleatório, que gera uma tensão flutuante em qualquer condutor, incluindo a antena e os primeiros circuitos do receptor. A potência dele depende só da temperatura `T` (em kelvin) e da largura de banda `B`:

`N = k x T x B`

com `k = 1,381 x 10^-23 J/K` (constante de Boltzmann). A 290 K (aproximadamente 17 graus C, temperatura de referência usada na engenharia):

`k x T = 4,0 x 10^-21 W/Hz`, que em dBm por hertz é **-174 dBm/Hz**.

Assim, em decibéis:

`N (dBm) = -174 + 10 x log10(B em Hz)`

Ele independe da frequência central, só da largura de banda. Exemplos:

| Largura de banda | 10 x log10(B) | Ruído térmico |
|---|---|---|
| 2,4 kHz (voz em SSB) | 33,8 | -140,2 dBm |
| 125 kHz (canal LoRa usual) | 51,0 | -123,0 dBm |
| 200 kHz (canal FM) | 53,0 | -121,0 dBm |
| 20 MHz (canal Wi-Fi) | 73,0 | -101,0 dBm |

Duas consequências importantes:
- **Dobrar a largura de banda dobra a potência de ruído** (+3 dB).
- Receber num canal mais estreito reduz ruído e permite ver sinais mais fracos. Comparar SSB (2,4 kHz) com FM (200 kHz): `10 x log10(200 / 2,4) = 19,2 dB` a menos de ruído. É por isso que modos estreitos (telegrafia, SSB, certos modos digitais, LoRa) alcançam mais distância com a mesma potência.

**2. Ruído do próprio receptor.** Os circuitos eletrônicos acrescentam ruído. A **figura de ruído** (noise figure, NF, em dB) mede quanto o receptor piora o SNR. Um receptor com NF de 6 dB tem piso `N = -174 + 10 x log10(B) + NF`. Para o canal LoRa de 125 kHz: `-123 + 6 = -117 dBm`. Quanto menor a NF, melhor o receptor.

**3. Ruído externo (o que a antena capta do ambiente):**
- **Atmosférico:** relâmpagos em todo o planeta geram pulsos de banda larga que se propagam pela ionosfera; dominam em HF e faixas mais baixas.
- **Galáctico e cósmico:** ruído vindo do espaço, relevante em locais silenciosos, principalmente de algumas dezenas a poucas centenas de MHz.
- **Artificial (man-made):** motores, fontes chaveadas, lâmpadas LED, carregadores, equipamentos digitais, linhas de energia, cercas elétricas. Em cidades, é o ruído dominante em HF e VHF, e faz o piso real ficar dezenas de dB acima do térmico. Uma referência técnica sobre níveis de ruído por faixa e ambiente é a recomendação ITU-R P.372 (não consultada diretamente para este texto; confira a versão vigente).

**4. Interferência.** Sinais legítimos de outros transmissores no mesmo canal (co-canal), em canal vizinho, ou produtos de mistura (intermodulação) de sinais fortes. Do ponto de vista do receptor, entram na mesma conta que o ruído e degradam a SNR, mas têm uma diferença: são estruturados e podem, às vezes, ser reduzidos com filtragem, direcionalidade ou coordenação de frequências (Aula 9).

## Sensibilidade: o menor sinal utilizável

O receptor precisa de uma SNR mínima (`SNR_min`) para decodificar. Então a **sensibilidade** (menor potência de sinal utilizável) é:

`Sensibilidade (dBm) = Piso de ruído + SNR_min`

Exemplo: receptor de 125 kHz de banda, NF de 6 dB, e sistema que precisa de SNR mínimo de 10 dB:
- piso = -117 dBm;
- sensibilidade = -117 + 10 = **-107 dBm**.

Na cadeia da Aula 5, o **balanço de enlace** compara a potência que chega (-76 dBm no exemplo) com a sensibilidade. A diferença é a **margem**; ela existe para absorver desvanecimentos (Aula 4), chuva, obstruções e ruído maior que o previsto.

## Quanto de informação a SNR permite: o teorema de Shannon-Hartley

Claude Shannon mostrou, em 1948, um limite teórico para a taxa de informação `C` (bits por segundo) que um canal com ruído aleatório pode transportar sem erros:

`C = B x log2(1 + SNR)`

com `B` em Hz e `SNR` como razão (não em dB; a conversão é `10^(SNR_dB / 10)`).

Exemplos, com `B = 1 MHz`:

| SNR | Razão | C |
|---|---|---|
| 30 dB | 1000 | 1e6 x log2(1001) = cerca de 9,97 Mbit/s |
| 10 dB | 10 | 1e6 x log2(11) = cerca de 3,46 Mbit/s |
| 0 dB | 1 | 1e6 x log2(2) = 1,0 Mbit/s |
| -10 dB | 0,1 | 1e6 x log2(1,1) = cerca de 0,14 Mbit/s |

Leitura importante para este curso:

- A capacidade cresce com a largura de banda e com a SNR. É o vínculo entre esta aula, a Aula 6 (largura de banda) e o módulo 3 (modulação).
- Mesmo com SNR negativa (sinal **abaixo** do ruído), a capacidade não é zero: é possível receber informação, mas a taxa fica baixa, e é preciso tempo (integrar por bastante tempo, repetir, usar códigos de correção de erro). É exatamente o princípio de sistemas de longo alcance como o LoRa e alguns modos digitais para radioamadores (módulos 7 e 8), que trocam velocidade por alcance. Analogia de programação: é como reduzir erros por redundância e média de muitas amostras.
- É um limite teórico; sistemas reais ficam abaixo dele.

## O que fazer em relação ao ruído (visão prática)

Da menor à maior dificuldade:

1. **Reduzir a largura de banda** do receptor ao mínimo que o sinal exige.
2. **Aumentar o sinal:** antena de maior ganho, posição mais alta e desobstruída, menos perda em cabo (cada dB conta), e mais potência de transmissão (dentro da regra legal).
3. **Reduzir o ruído externo:** afastar antenas de fontes de ruído, desligar equipamentos suspeitos, filtrar e aterrar corretamente. Em áreas urbanas, o simples fato de desligar uma fonte chaveada ruidosa pode baixar o piso em dezenas de dB.
4. **Melhorar o receptor:** menor NF e boa seletividade (filtros).
5. **Usar técnicas de modulação e codificação** que operam com SNR baixo (módulo 3).

Para ver o piso de ruído do seu local, será possível medir com um SDR (módulo 6).

## Resumo

- O que decide a recuperação da informação é a SNR, não a potência absoluta: amplificar amplifica também o ruído.
- Ruído térmico: `N = k x T x B`, que vale `-174 dBm/Hz` a 290 K; `N (dBm) = -174 + 10 x log10(B)`. Dobrar a largura de banda soma 3 dB de ruído.
- O piso real inclui a figura de ruído do receptor e o ruído externo (atmosférico, galáctico, artificial, este dominante nas cidades em HF e VHF).
- Sensibilidade = piso de ruído + SNR mínima; a margem de enlace é a potência recebida menos a sensibilidade.
- Shannon: `C = B x log2(1 + SNR)`. Mais banda ou mais SNR dá mais capacidade; com SNR baixa ainda se comunica, mais devagar.

## Para aprofundar

Sem link extra: os pontos exigem cálculo, feito acima, e o módulo 6 (SDR) permite observar ruído e sinal em tempo real.

[Próxima aula: Radiação ionizante, não ionizante e segurança de RF](./08%20-%20Radiacao%20e%20Seguranca%20de%20RF.md)
