# Aula 1: Modos de propagação e mecanismos físicos

[Voltar ao módulo](./README.md)

*Pergunta que esta aula responde: por que uma onda que sai da antena chega (ou não) ao outro lado, e quais são os caminhos e os fenômenos físicos possíveis?*

## Por que isso existe

No Módulo 1 você viu que uma antena transmissora lança uma onda eletromagnética que viaja a `c = 300.000 km/s` e que a frequência `f` define o comprimento de onda `lambda = c / f`. Só que a Terra é curva, tem morros, prédios, chuva, um gás ionizado no alto e o solo condutor embaixo. A onda interage com tudo isso. **Propagação** é o estudo do que acontece com a onda entre a antena de transmissão (TX) e a de recepção (RX). O rádio só funciona quando algum caminho entrega energia suficiente ao RX; este módulo ensina a prever se existe esse caminho.

Toda a aula gira em torno de uma ideia: **o comportamento da onda depende da relação entre o comprimento de onda e o tamanho das coisas que ela encontra**. O resto é consequência.

## Os cinco fenômenos físicos

Quando uma onda encontra algo diferente do vácuo (uma parede, o ar úmido, uma colina), ocorre um ou mais destes:

**Reflexão.** A onda bate numa superfície grande comparada a `lambda` (solo, água, parede metálica, fachada) e volta, como luz num espelho. O ângulo de saída é igual ao de chegada. Metal e água salgada refletem quase tudo; concreto e solo seco refletem parte e absorvem parte. A onda refletida chega ao RX por um caminho mais longo, o que causa multipercurso (Aula 4).

**Refração.** A onda muda de direção ao passar de um meio para outro em que a velocidade é diferente. O índice de refração `n = c / v` do ar varia com temperatura, pressão e umidade; o da ionosfera varia com a densidade de elétrons livres. Pela lei de Snell, a onda "dobra" em direção à região de maior `n`. Refração gradual e contínua é o que faz uma onda ser curvada de volta para a Terra pela ionosfera (Aula 5) ou pelo ar (Aula 7).

**Difração.** Ao passar pela quina de um obstáculo, a onda "vaza" para a região de sombra. Pelo princípio de Huygens, cada ponto de uma frente de onda funciona como fonte de novas ondas circulares; na borda do obstáculo essas ondas preenchem parte da sombra. O efeito é forte quando o obstáculo é pequeno ou comparável a `lambda`, e fraco quando é enorme comparado a `lambda`. Por isso uma estação AM em 1 MHz (`lambda` = 300 m) contorna colinas, e um sinal de 2,4 GHz (`lambda` = 12,5 cm) é bloqueado por um prédio. Vamos quantificar isso na Aula 3.

**Espalhamento (scattering).** A onda bate em objetos pequenos ou superfícies rugosas, comparáveis a `lambda`, e é redistribuída em várias direções: folhas de árvore, postes, gotas de chuva, bolhas de ionização, rastros de meteoros, turbulência da troposfera. Vira uma "névoa" de energia fraca em todas as direções. Tem uso prático: espalhamento troposférico e por meteoros permitem enlaces além do horizonte (Aula 7).

**Absorção.** A onda entrega energia ao meio e vira calor. Água (chuva, folhas úmidas, o corpo humano), paredes de concreto, o solo e a camada D da ionosfera absorvem. A absorção depende da frequência e do material (Aula 4).

Cada um dos modos de propagação a seguir é uma combinação desses fenômenos dominando em certa faixa.

## Os três modos clássicos

Os textos de rádio dividem o caminho pelo meio onde a onda viaja.

### 1. Onda de superfície (ground wave)

**O que é:** a onda acompanha a curvatura da Terra, "grudada" no solo ou no mar. Funciona com **polarização vertical** (Módulo 1): o campo elétrico vertical induz correntes no solo; como o solo tem perdas, a parte da frente de onda mais próxima do chão anda um pouco mais devagar que a parte de cima, e a frente de onda se inclina para baixo, seguindo a curvatura.

**Quando domina:** frequências baixas (VLF, LF, MF, até cerca de 3 MHz). A perda no solo cresce rapidamente com a frequência, então acima de alguns MHz o alcance por superfície cai para poucas dezenas de km. Sobre o mar (condutividade alta) o alcance é bem maior que sobre terreno seco ou rochoso.

**Alcances típicos:** algumas centenas de km sobre o mar em MF baixo com potência alta; dezenas a poucas centenas de km sobre terra. Emissoras AM comerciais de dia dependem dela.

**Por que polarização vertical:** com polarização horizontal o campo elétrico fica paralelo ao solo e é curto-circuitado por ele, então a onda morre em metros. Por isso antenas AM são mastros verticais.

### 2. Onda espacial (space wave) ou linha de visada

**O que é:** o sinal vai do TX ao RX pelo ar, em linha reta ou quase, mais uma possível reflexão no solo. É o modo de tudo acima de 30 MHz: FM, TV, celular, Wi-Fi, LoRa, GPS, radar.

**Limite:** a curvatura da Terra. Dois pontos só se "enxergam" se nenhum obstáculo (incluindo o próprio abaulamento do planeta) cortar a linha entre eles. O horizonte de rádio é ligeiramente maior que o óptico porque a atmosfera curva o raio (Aula 3).

Nesse modo, a maior parte da perda vem da simples divergência da energia no espaço (Aula 2) e de obstáculos parciais (Aula 3).

### 3. Onda ionosférica (sky wave)

**O que é:** a onda vai para cima, é refratada na ionosfera (camadas de gás ionizado entre cerca de 60 e 500 km de altura) e volta para a Terra a centenas ou milhares de km de distância, saltando sobre o horizonte. Pode refletir no solo e subir de novo (salto múltiplo), dando volta ao mundo.

**Quando domina:** HF (3 a 30 MHz), e em condições especiais um pouco acima. Frequências mais altas atravessam a ionosfera sem voltar; mais baixas são absorvidas de dia. A Aula 5 explica a física completa.

### Resumo dos modos por faixa

| Faixa | Frequência | Modo principal | Alcance típico |
|---|---|---|---|
| LF/MF | 30 kHz a 3 MHz | Superfície; ionosférica à noite em MF | Centenas de km (superfície); milhares à noite (ionosférica) |
| HF | 3 a 30 MHz | Ionosférica; superfície curta | Dezenas a dezenas de milhares de km |
| VHF | 30 a 300 MHz | Linha de visada; modos especiais raros | Dezenas de km (visada); centenas a mais de mil km em eventos |
| UHF | 300 MHz a 3 GHz | Linha de visada | Poucos a dezenas de km (terreno), mais com altura |
| Micro-ondas | acima de 3 GHz | Linha de visada estrita | Enlaces ponto a ponto com antenas diretivas |

Os limites são convenções; a transição é gradual.

## Por que a frequência decide o modo

Quatro propriedades físicas mudam com `f`:

1. **Difração** (contorno de obstáculos) diminui com `f` porque `lambda` diminui.
2. **Reflexão ionosférica** só ocorre se `f` estiver abaixo de um limite ligado à densidade de elétrons (Aula 5): HF reflete, VHF e acima escapam para o espaço.
3. **Absorção** por atmosfera, chuva e vegetação aumenta com `f` (Aula 4); a absorção ionosférica de dia diminui com `f`.
4. **Perda de espaço livre** a uma distância fixa cresce com `f` (Aula 2) porque a antena receptora "captura" menos área quando `lambda` é menor.

A ligação com a Aula 3 do Módulo 1 (faixas do espectro): cada faixa tem "personalidade" porque esse conjunto de quatro efeitos combina de um jeito diferente. Por isso não existe faixa ideal; existe faixa adequada ao alcance, à obstrução e à capacidade exigidos.

## Onda direta e onda refletida no solo

Mesmo no modo de linha de visada, o RX costuma receber duas cópias: a **onda direta** e uma **onda refletida no solo**. Se as duas chegam em fase, somam; em oposição de fase, cancelam. Isso gera as variações de sinal que você notará em qualquer teste de LoRa ou Wi-Fi ao mudar a posição do RX em poucos centímetros. Detalhes na Aula 4.

## Resumo

- Cinco fenômenos governam tudo: reflexão, refração, difração, espalhamento e absorção. Qual domina depende do tamanho dos obstáculos em relação a `lambda`.
- Onda de superfície (polarização vertical, LF/MF) segue a curvatura; onda espacial (visada, acima de 30 MHz) é limitada pelo horizonte; onda ionosférica (HF) volta da ionosfera e cobre longas distâncias.
- Frequência baixa: contorna obstáculos e pode usar a ionosfera; frequência alta: comporta-se como luz, exige visada, mas permite antenas pequenas e direcionais.
- A escolha da faixa é sempre um compromisso entre alcance, obstrução e tamanho da antena.

## Para aprofundar

- [ ] [Wave Diffraction](https://www.youtube.com/watch?v=1bHipDSHVG4) (Bozeman Science): vídeo de física geral sobre difração, sem rádio; ajuda a visualizar a regra "obstáculo pequeno perto de lambda".
- [ ] [Radio Wave Diffraction: E/M Wave Diffraction](https://www.electronics-notes.com/articles/antennas-propagation/propagation-overview/radio-em-wave-diffraction.php) (Electronics Notes): artigo que aplica a difração ao rádio (não li a página nesta sessão; consta da curadoria anterior do módulo).

[Próxima aula: Perda no espaço livre e a fórmula de Friis](./02%20-%20Perda%20no%20Espaco%20Livre%20e%20Friis.md)
