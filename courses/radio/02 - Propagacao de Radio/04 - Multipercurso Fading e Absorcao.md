# Aula 4: Multipercurso, fading e absorção (chuva, vegetação, paredes)

[Voltar ao módulo](./README.md)

*Pergunta que esta aula responde: por que o sinal varia ao mover a antena poucos centímetros, por que a perda real passa da de espaço livre, e o que a chuva, as árvores e as paredes fazem com a onda?*

## Por que isso existe

A Aula 2 deu o piso de perda (espaço livre) e a Aula 3 adicionou obstrução. Ainda falta explicar dois efeitos que qualquer pessoa que testou um enlace Wi-Fi ou LoRa já viu: o sinal oscila sem motivo aparente, e a potência cai mais rápido que 20 dB por década de distância. Ambos vêm do fato de a onda chegar por vários caminhos e de o meio material absorver energia.

## Multipercurso

**Multipercurso (multipath)** é a chegada da mesma transmissão ao RX por vários caminhos: o direto, refletido no solo, em fachadas, em veículos, espalhado em árvores. Cada cópia tem atraso, amplitude e fase diferentes (Módulo 1: fase é a posição no ciclo da onda).

O RX vê a soma vetorial. Duas cópias de mesma amplitude e em oposição de fase (diferença de caminho de `lambda / 2`) se anulam; em fase, dobram a tensão (+6 dB).

### Quão pequeno é o deslocamento que muda tudo?

A fase depende da diferença de caminho em unidades de `lambda`. Mover a antena `lambda / 2` altera a diferença em cerca de `lambda`, passando de soma a cancelamento e voltando. Em 915 MHz (`lambda` = 32,8 cm) o ciclo é de aproximadamente 16 cm; em 2,4 GHz (12,5 cm) é de cerca de 6 cm. É por isso que virar um celular na mão muda o sinal do Wi-Fi.

### Fading

**Fading** é a variação da potência recebida no tempo ou no espaço. Duas escalas:

- **Fading rápido (de pequena escala):** causado por multipercurso; varia numa escala de `lambda`. Modelos estatísticos: **Rayleigh** (sem caminho direto dominante, todas as cópias comparáveis, por exemplo, dentro de prédios) e **Rice** (existe um componente direto forte mais espalhamento, comum em visada). Em Rayleigh, profundidades de fade de 20 a 30 dB acontecem com pouca probabilidade, mas acontecem; por isso se soma uma **margem de fading** ao orçamento de enlace (Aula 8), tipicamente 10 a 20 dB conforme a confiabilidade desejada.
- **Fading lento (sombreamento, shadowing):** causado por obstáculos que vêm e vão (um caminhão parando na Fresnel, uma árvore que cresce, mudança de umidade). Varia numa escala de metros a horas e segue aproximadamente uma distribuição log-normal (o valor em dB tem distribuição normal, com desvio-padrão da ordem de 4 a 10 dB em ambientes urbanos; ordem de grandeza da literatura, varia bastante).

**Diversidade** combate fading rápido: duas antenas separadas de meio `lambda` ou mais, ou duas frequências, raramente entram em fade ao mesmo tempo. Tecnologias de modulação robustas (Módulo 3, e LoRa no Módulo 8) também toleram atraso de multipercurso, o que explica por que LoRa funciona bem em cidades.

### Modelo de dois raios: por que a perda passa de 20 dB por década

O caso mais simples de multipercurso é o **modelo de dois raios**: onda direta mais onda refletida no solo plano. Com antenas a alturas `h1` e `h2` e distância `d` (muito maior que as alturas), a diferença de caminho vale aproximadamente `2 x h1 x h2 / d`. Enquanto essa diferença é grande frente a `lambda`, o sinal oscila em fade (interferência construtiva e destrutiva). Quando `d` ultrapassa o **ponto de quebra** (breakpoint):

`d_b = 4 x h1 x h2 / lambda`

a diferença de caminho fica menor que `lambda / 2` e, como a reflexão no solo inverte a fase para ângulos rasantes, as duas ondas se cancelam quase por completo. A potência recebida passa a cair com `d^4`: **40 dB por década**, em vez de 20. Passa-se de expoente `n = 2` a `n = 4` (Aula 2), e a frequência praticamente sai da equação.

**Exemplo:** antena TX a 10 m, RX a 2 m, em 915 MHz (`lambda` = 0,328 m): `d_b = 4 x 10 x 2 / 0,328 = 244 m`. Depois de cerca de 250 m, cada dobro de distância custa 12 dB, não 6. A 433 MHz (`lambda` = 0,693 m): `d_b = 115 m`.

Isso vale para solo plano e liso, como campo aberto. Em outras geometrias o expoente varia entre 2 e 6. Conclusão prática: para ir longe em solo plano, **suba as antenas**; `d_b` cresce com o produto das alturas.

## Absorção

Absorção é conversão da energia da onda em calor no meio. Diferente de multipercurso, ela realmente reduz o total de energia. O mecanismo básico: o campo elétrico da onda agita cargas ou moléculas polares do material; a fricção dissipa energia. A água é a grande vilã porque a molécula H2O é polar e tem ressonâncias em micro-ondas.

### Atmosfera clara

O oxigênio absorve com pico perto de 60 GHz e o vapor d'água perto de 22 GHz (valores clássicos de física atmosférica; não confirmei os números exatos nesta sessão). Abaixo de 10 GHz, o efeito é desprezível para enlaces de poucos km. Acima de 20 GHz, começa a pesar e, em 60 GHz, o oxigênio dá dezenas de dB por km, o que limita o alcance a poucas centenas de metros (uso proposital em redes de curto alcance).

### Chuva

Gotas de chuva têm tamanho da ordem de milímetros. Quando `lambda` chega perto disso (frequências acima de cerca de 10 GHz), as gotas espalham e absorvem fortemente. A atenuação específica segue aproximadamente:

`gama = k x R^alfa  (dB/km)`

com `R` a taxa de chuva em mm/h e `k` e `alfa` tabelados por frequência e polarização na **ITU-R P.838** (versão em vigor na consulta: P.838-3, de 03/2005; verificado em setembro de 2026). Para dar ideia de escala, em 10 GHz e chuva forte (50 mm/h) o resultado é da ordem de 1 a 2 dB/km (ordem de grandeza; consulte as tabelas oficiais antes de projetar). Em 2,4 GHz ou 915 MHz a chuva é desprezível para enlaces de rede privada; abaixo de 1 GHz, ignorável.

Consequência: enlaces de micro-ondas acima de 10 GHz sofrem chuva e são dimensionados com **margem de chuva** (10 a 30 dB conforme a região e a disponibilidade exigida). Regiões tropicais, como boa parte do Brasil, têm taxas de chuva altas.

### Vegetação

Folhas e galhos absorvem (por causa da água) e espalham. A perda cresce com a frequência, a espessura da mata e a umidade; uma árvore isolada custa poucos dB, uma floresta densa pode custar dezenas. Valores dependem tanto do tipo de folhagem e da estação que não há número universal; existe a ITU-R P.833 para atenuação por vegetação (não consultei nesta sessão). Regra prática: se você vê a antena remota através das folhas, o sinal em UHF costuma passar, mas com queda notável; em 2,4 GHz, cai bem mais. Chuva molhando folhas acrescenta perda.

### Paredes e construções

Perdas típicas de penetração, em ordem de grandeza (varia muito com a construção e a frequência; use como ponto de partida):

| Material | Perda típica em 2,4 GHz |
|---|---|
| Vidro simples, janela | 2 a 4 dB |
| Parede de gesso ou madeira | 3 a 5 dB |
| Parede de tijolo | 5 a 10 dB |
| Concreto armado (laje ou parede grossa) | 10 a 20 dB ou mais |
| Vidro metalizado, metal | Muito alta (blindagem) |

Frequência menor penetra melhor: 433 MHz atravessa paredes com bem menos perda que 2,4 GHz, o que explica a preferência por faixas sub-GHz em ambientes internos e com obstrução. Metal fecha: uma gaiola metálica (elevador, gabinete de rack, carro) forma uma **gaiola de Faraday** e atenua dezenas de dB.

### Corpo humano

O corpo tem muita água e absorve/desvia sinal; segurar um rádio de mão perto do corpo reduz o ganho da antena efetivamente em vários dB. Em conteúdo prático: antena longe do corpo, em posição alta.

## Como isso entra no orçamento de enlace

Toda essa aula vira duas parcelas na Aula 8: (1) uma **perda adicional** por ambiente (obstrução, vegetação, paredes, chuva), e (2) uma **margem de fading** para o multipercurso e sombreamento. Sem elas, o enlace calculado "fecha" no papel e falha na prática.

## Resumo

- Multipercurso: o RX soma cópias do sinal; uma diferença de caminho de `lambda / 2` cancela. Mover a antena cerca de `lambda / 2` (16 cm em 915 MHz) já muda o nível.
- Fading rápido (Rayleigh/Rice) exige margem de fading (10 a 20 dB); fading lento vem de sombreamento.
- Modelo de dois raios: depois de `d_b = 4 x h1 x h2 / lambda`, a perda cai de 20 para 40 dB por década; altura é a defesa.
- Absorção: chuva só pesa acima de cerca de 10 GHz (`gama = k x R^alfa`, ITU-R P.838); vegetação e paredes pesam mais em frequência alta; metal blinda.
- Sub-GHz (433, 868/915 MHz) penetra melhor que 2,4 GHz.

## Para aprofundar

- [ ] [ITU-R P.838: Specific attenuation model for rain](https://www.itu.int/rec/R-REC-P.838/en) (ITU): a norma que dá `k` e `alfa` por frequência; a página confirma título e versão.

[Próxima aula: Ionosfera e propagação em HF](./05%20-%20Ionosfera%20e%20Propagacao%20HF.md)
