# Aula 2: Perda no espaço livre e a fórmula de Friis

[Voltar ao módulo](./README.md)

*Pergunta que esta aula responde: mesmo sem nenhum obstáculo, quanto do sinal se perde só por a distância aumentar, e por que essa perda cresce com a frequência?*

## Por que isso existe

Sem obstáculos, sem chuva e sem solo, a onda ainda enfraquece. Não é porque o espaço "absorva" energia (o vácuo não absorve), e sim porque a energia se espalha por uma área cada vez maior. A **perda no espaço livre** (Free Space Path Loss, **FSPL**) é o piso de perda: nenhum enlace real perde menos que isso. Todo cálculo de alcance começa aqui.

## De onde vem a perda: a geometria da esfera

Imagine um transmissor com uma antena **isotrópica** (Módulo 1 e Módulo 4: uma antena ideal que irradia igualmente para todos os lados) e potência `Pt`. A energia atravessa cada casca esférica ao redor da antena. A área da casca de raio `d` é `4 x pi x d^2`. A **densidade de potência** (W/m²) é:

`S = Pt / (4 x pi x d^2)`

Dobrar a distância quadruplica a área, então `S` cai a um quarto. Em dB, isso é uma queda de 6 dB por dobro de distância (Módulo 1: `10 x log10(4) = 6 dB`). Esta é a **lei do inverso do quadrado**.

Se a antena TX concentra energia numa direção, ela tem **ganho** `Gt` (Módulo 4), e a densidade naquela direção vira `S = Pt x Gt / (4 x pi x d^2)`.

## Da densidade de potência à potência recebida

A antena RX "captura" potência proporcional à sua **área efetiva** `Ae`. Para uma antena com ganho `Gr` (razão linear, não dB), vale:

`Ae = Gr x lambda^2 / (4 x pi)`

Aqui está o ponto sutil: **a área efetiva de uma antena de ganho fixo diminui com `lambda^2`.** Uma antena isotrópica em 2,4 GHz é literalmente menor (em área de captura) do que uma em 433 MHz. Ou seja, a perda extra em frequência alta não é o meio absorvendo mais; é a antena RX capturando menos energia.

Multiplicando:

`Pr = S x Ae = Pt x Gt x Gr x (lambda / (4 x pi x d))^2`

Esta é a **equação de Friis** (Harald Friis, 1946), valida para espaço livre, em campo distante, com antenas alinhadas e polarização casada (Módulo 1). Se você separar o termo que só depende de distância e frequência:

`FSPL = (4 x pi x d / lambda)^2`, ou em dB: `FSPL(dB) = 20 x log10(4 x pi x d / lambda)`

Substituindo `lambda = c / f` e usando unidades práticas, chega-se à fórmula que você vai usar sempre:

**`FSPL(dB) = 32,44 + 20 x log10(d em km) + 20 x log10(f em MHz)`**

(A constante 32,44 absorve `4 x pi / c` e as conversões de unidade. A ITU-R P.525 é a recomendação que trata do cálculo da atenuação no espaço livre; a versão em vigor na consulta foi a P.525-5, de 11/2024, verificado em setembro de 2026.)

E a equação de Friis em dB vira uma soma simples, base do orçamento de enlace (Aula 8):

`Pr(dBm) = Pt(dBm) + Gt(dBi) + Gr(dBi) - FSPL(dB)`

## Leitura da fórmula

- Cada vez que a distância dobra: +6 dB de perda.
- Cada vez que a frequência dobra: +6 dB de perda.
- Ir de 433 MHz para 2,4 GHz (fator 5,54): `20 x log10(5,54) = +14,9 dB`. É como um alcance cerca de 5,5 vezes menor com a mesma potência e antenas do mesmo ganho.
- Antenas de ganho maior compensam: cada dobro de ganho linear (3 dB) em TX ou RX devolve 3 dB.

## Exemplos resolvidos

Vamos calcular para três frequências muito usadas em redes privadas: 433 MHz (LoRa/ISM em muitos países), 915 MHz (LoRa nas Américas) e 2,4 GHz (Wi-Fi, Bluetooth, LoRa 2.4). As faixas exatas permitidas no Brasil são tratadas no Módulo 8 e dependem da Anatel.

Primeiro os termos de frequência: `20 x log10(433) = 52,73`; `20 x log10(915) = 59,23`; `20 x log10(2400) = 67,60`. E de distância: 1 km = 0 dB; 10 km = 20 dB; 100 km = 40 dB.

| Distância | 433 MHz | 915 MHz | 2,4 GHz |
|---|---|---|---|
| 1 km | 32,44 + 0 + 52,73 = **85,2 dB** | 32,44 + 0 + 59,23 = **91,7 dB** | 32,44 + 0 + 67,60 = **100,0 dB** |
| 10 km | **105,2 dB** | **111,7 dB** | **120,0 dB** |
| 100 km | **125,2 dB** | **131,7 dB** | **140,0 dB** |

Conferência de sanidade: 433 MHz e 10 km: `32,44 + 20 + 52,73 = 105,17`. Confere.

### Exemplo: qual a potência recebida?

Um nó a 915 MHz transmite 14 dBm (25 mW), antenas de 2 dBi nos dois lados, sem outras perdas, a 10 km em espaço livre.

`Pr = 14 + 2 + 2 - 111,7 = -93,7 dBm`

Para comparar: um receptor LoRa em SF12 tem sensibilidade de cerca de -137 dBm (Aula 8), então há 43 dB de folga em espaço livre. Em 2,4 GHz, com os mesmos números: `14 + 2 + 2 - 120 = -102 dBm`.

### Exemplo inverso: qual a distância máxima para uma perda tolerável?

Dá para inverter: `20 x log10(d) = FSPL - 32,44 - 20 x log10(f)`. Se você tolera 139 dB de perda em 915 MHz: `20 x log10(d) = 139 - 32,44 - 59,23 = 47,33`, logo `d = 10^(47,33/20) = 232 km`. É o alcance teórico em espaço livre puro; o mundo real dá muito menos, e é isso que as próximas aulas explicam.

## Limitações honestas do modelo

- **Só vale em campo distante.** A distância precisa ser bem maior que `lambda` e que as dimensões da antena. Perto da antena vale outro regime (Módulo 4).
- **Assume espaço livre**: sem solo, sem obstáculos, sem atmosfera. Na prática, o solo reflete e interfere (Aula 4), obstáculos difratam (Aula 3), chuva e vegetação absorvem (Aula 4).
- **É um piso de perda**, não uma previsão. Modelos empíricos (Okumura-Hata, por exemplo) e simuladores de terreno (Aula 9) adicionam essas perdas.
- Mesmo com visada, obstrução da zona de Fresnel acrescenta perda; é o tema da próxima aula.

## Expoente de perda: o "n" prático

Em ambientes reais, o que se usa muito é o modelo log-distância:

`PL(d) = PL(1 km) + 10 x n x log10(d em km)`

Com `n = 2` é o espaço livre (20 dB por década). Medições costumam dar `n` de 2,7 a 3,5 em ambiente urbano ou suburbano com obstrução parcial, e 4 a 6 dentro de prédios. O mecanismo físico que leva `n` a 4 (reflexão no solo) aparece na Aula 4. Esses valores são faixas típicas da literatura de rádio móvel; use como ordem de grandeza e calibre com medições.

## Resumo

- FSPL vem da geometria: a energia se espalha numa esfera de área `4 x pi x d^2`; dobrar a distância custa 6 dB.
- A perda cresce com a frequência porque a área efetiva de captura da antena RX vai com `lambda^2`, não porque o espaço absorve.
- Fórmula: `FSPL(dB) = 32,44 + 20 x log10(d km) + 20 x log10(f MHz)`; Friis em dB: `Pr = Pt + Gt + Gr - FSPL`.
- Exemplo: 10 km custa 105,2 dB em 433 MHz, 111,7 dB em 915 MHz e 120,0 dB em 2,4 GHz.
- FSPL é o mínimo possível; obstáculos, solo e clima somam perdas por cima.

## Para aprofundar

- [ ] [ITU-R P.525: Calculation of free-space attenuation](https://www.itu.int/rec/R-REC-P.525/en) (ITU): a recomendação oficial; a página mostra versão e status (o texto completo pode exigir acesso ao PDF).

[Próxima aula: Linha de visada, horizonte, altura da antena e Fresnel](./03%20-%20Linha%20de%20Visada%20Horizonte%20e%20Fresnel.md)
