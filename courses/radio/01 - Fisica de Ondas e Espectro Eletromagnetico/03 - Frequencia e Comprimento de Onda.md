# Aula 3: Frequência, período e comprimento de onda (c = f x lambda)

[Voltar ao módulo](./README.md)

*Pergunta que esta aula responde: por que frequência e comprimento de onda são duas formas de dizer a mesma coisa, e por que o tamanho da onda decide quase tudo em rádio?*

## Por que essa relação é a mais usada de todo o curso

Quando alguém diz "rádio FM em 100 MHz", "Wi-Fi em 2,4 GHz" ou "LoRa em 915 MHz", está dando a **frequência**. Mas o que a antena "sente" e o que o obstáculo "sente" é o **tamanho da onda no espaço**. A relação `c = f x lambda` é a tradução entre os dois, e você vai fazê-la de cabeça centenas de vezes.

## Definições

- **Ciclo:** uma oscilação completa do campo (sobe, desce, volta ao início).
- **Frequência (`f`):** quantos ciclos por segundo passam por um ponto. Unidade: **hertz (Hz)** = 1 ciclo por segundo. Homenagem a Heinrich Hertz.
- **Período (`T`):** duração de um ciclo. `T = 1 / f`, em segundos.
- **Comprimento de onda (`lambda`):** distância percorrida pela onda durante um ciclo, ou seja, a distância entre duas cristas consecutivas. Unidade: metro (m).

Múltiplos de hertz usados em rádio:

| Símbolo | Nome | Valor |
|---|---|---|
| kHz | quilo-hertz | 1.000 Hz |
| MHz | mega-hertz | 1.000.000 Hz (10^6) |
| GHz | giga-hertz | 10^9 Hz |
| THz | tera-hertz | 10^12 Hz |

## Derivação: por que c = f x lambda

Uma onda viaja com velocidade `v`. Durante um período `T`, a crista avança exatamente um comprimento de onda. Então:

`v = distância / tempo = lambda / T = lambda x f`

No vácuo (e, com erro desprezível, no ar), `v = c`:

`c = f x lambda`, ou `lambda = c / f`, ou `f = c / lambda`

Com `c = 3 x 10^8 m/s` (aproximação de 0,07%; o valor exato é 299.792.458 m/s).

Atalho prático que evita potências de dez. Com `f` em MHz e `lambda` em metros:

`lambda (m) = 300 / f (MHz)`

Prova rápida: `lambda = 3 x 10^8 / (f_MHz x 10^6) = 300 / f_MHz`.

## O que a relação diz

- **Frequência e comprimento de onda são inversamente proporcionais.** Dobrou a frequência, o comprimento cai pela metade.
- **A frequência é definida pela fonte** e não muda quando a onda passa de um meio para outro. O que muda é `v`, e portanto `lambda` (ver "Ondas em cabos", abaixo).
- Frequência baixa: onda longa. Frequência alta: onda curta. Daí os nomes históricos: "ondas longas" (LF) têm quilômetros, "ondas curtas" (HF) têm dezenas de metros e micro-ondas têm centímetros.

## Exemplos numéricos resolvidos

Usando `lambda = 300 / f (MHz)`, e período `T = 1 / f`.

**1. FM comercial, 100 MHz.**
- `lambda = 300 / 100 = 3,0 m`
- `T = 1 / (100 x 10^6) = 10 ns` (nanossegundos)

**2. Wi-Fi / Bluetooth, 2,4 GHz (= 2.400 MHz).**
- `lambda = 300 / 2400 = 0,125 m = 12,5 cm`
- `T = 1 / (2,4 x 10^9) = 0,417 ns = 417 ps` (picossegundos)

**3. 433 MHz (dispositivos de curto alcance, alguns LoRa).**
- `lambda = 300 / 433 = 0,693 m = 69,3 cm`
- `T = 1 / (433 x 10^6) = 2,31 ns`

**4. 915 MHz (região das ISM da América, muito usada em LoRa).**
- `lambda = 300 / 915 = 0,328 m = 32,8 cm`
- `T = 1,09 ns`

**5. 7 MHz (banda de 40 metros do radioamadorismo).**
- `lambda = 300 / 7 = 42,9 m`
- `T = 1 / (7 x 10^6) = 143 ns`

**6. Rede elétrica, 60 Hz (Brasil).**
- `lambda = 3 x 10^8 / 60 = 5 x 10^6 m = 5.000 km`. Uma "onda de rádio" a 60 Hz teria comprimento do tamanho do país; por isso a fiação doméstica não irradia de forma útil (a fiação é minúscula perto de `lambda`). Curiosidade: a 50 Hz seriam 6.000 km.

**7. Luz verde, 550 nm (550 x 10^-9 m).**
- `f = 3 x 10^8 / (550 x 10^-9) = 5,45 x 10^14 Hz = 545 THz`.

**8. Caminho inverso: quanto vale a frequência de uma onda de 21 m?**
- `f = 300 / 21 = 14,29 MHz` (a banda de 20 metros, radioamadorismo).

Tabela de referência (para os casos do curso):

| Frequência | Comprimento de onda | 1/4 de onda | 1/2 onda |
|---|---|---|---|
| 7 MHz | 42,9 m | 10,7 m | 21,4 m |
| 100 MHz | 3,0 m | 75 cm | 1,5 m |
| 433 MHz | 69,3 cm | 17,3 cm | 34,6 cm |
| 868 MHz (LoRa na Europa) | 34,6 cm | 8,6 cm | 17,3 cm |
| 915 MHz | 32,8 cm | 8,2 cm | 16,4 cm |
| 2,4 GHz | 12,5 cm | 3,1 cm | 6,3 cm |
| 5 GHz | 6,0 cm | 1,5 cm | 3,0 cm |

As colunas de 1/4 e 1/2 onda importam porque uma antena eficiente costuma ter comprimento em torno de uma fração simples de `lambda`. A razão física está no módulo 4; por ora guarde a regra: **o tamanho da antena acompanha o comprimento de onda**. Antenas reais são cortadas cerca de 5% mais curtas que o valor teórico por efeitos do condutor (também no módulo 4); a tabela é o ponto de partida.

## Por que o tamanho da onda decide tanto

1. **Antena:** a antena é eficiente quando tem dimensão comparável a `lambda` (ou frações dela). Uma antena de 7 MHz precisa ter dezenas de metros; a de 2,4 GHz cabe numa placa de circuito (3 cm). Por isso o celular tem antenas minúsculas e um radioamador de HF tem fios entre árvores.
2. **Obstáculos:** uma onda contorna (difrata) obstáculos menores que `lambda` e é bloqueada ou refletida por obstáculos maiores que `lambda`. Ondas de 3 m passam por uma árvore quase sem notar; ondas de 12,5 cm são bloqueadas por uma parede de concreto e por folhagem úmida. Detalhe no módulo 2.
3. **Circuitos de alta frequência:** quando `lambda` fica comparável ao tamanho do circuito, os fios deixam de ser "fios" e viram linhas de transmissão. Programadores conhecem o efeito em placas de circuito: a 1 GHz, um ciclo do clock dura 1 ns, tempo em que o sinal percorre cerca de 30 cm no ar (menos no cobre da placa). A trilha da placa passa a importar como parte do circuito.
4. **Quantidade de informação:** a largura de faixa disponível (Aula 6) é uma fração da frequência central; em frequências mais altas há mais espaço absoluto em hertz.

## Atraso de propagação

`c` é finita. Atraso = distância / `c`:

| Distância | Atraso de ida |
|---|---|
| 1 km | 3,3 microssegundos |
| 300 km (ionosfera, HF) | cerca de 1 ms |
| 35.786 km (satélite geoestacionário, subindo) | 119 ms |
| Terra-satélite-Terra (geoestacionário) | cerca de 239 ms |
| Terra-Lua (384.400 km) | 1,28 s |

Numa rede, `ping` via satélite geoestacionário tem RTT (ida e volta) de cerca de 480 ms **só por causa da física**, antes de qualquer processamento. Nenhum protocolo consegue reduzir isso.

## Ondas em cabos: fator de velocidade

Em um material, a onda EM viaja a `v = c / n` (Aula 1), portanto mais devagar que `c`. Num cabo coaxial, a razão `v / c` é chamada **fator de velocidade (VF)**. Para coaxial com dielétrico de polietileno sólido, o VF costuma ser em torno de 0,66 (varia por cabo; veja o datasheet do seu cabo).

A frequência não muda; o comprimento de onda **dentro do cabo** encolhe:

`lambda_cabo = VF x c / f`

Exemplo: a 100 MHz, com VF = 0,66: `lambda_cabo = 0,66 x 3 = 1,98 m`, contra 3 m no ar. Isso importa no módulo 4, quando cabos são cortados em múltiplos de `lambda` para casar impedância.

## Exercícios (com resposta)

1. Qual `lambda` para 145 MHz? `300 / 145 = 2,07 m`. Quarto de onda: 51,7 cm.
2. Qual `f` para `lambda = 6 m`? `300 / 6 = 50 MHz`.
3. Qual o período de 1 kHz? `1 / 1000 = 1 ms`.
4. Uma onda de 2,4 GHz percorre quantos centímetros em 1 ns? `3 x 10^8 x 10^-9 = 0,3 m = 30 cm`; equivale a 2,4 comprimentos de onda.

## Resumo

- Frequência `f` (Hz) é ciclos por segundo; período `T = 1 / f`; comprimento de onda `lambda` é a distância de um ciclo.
- `c = f x lambda`, ou `lambda (m) = 300 / f (MHz)`. Frequência e comprimento são inversamente proporcionais.
- A frequência é definida pela fonte e fica igual ao mudar de meio; o que muda é `v` e, por consequência, `lambda`.
- 100 MHz = 3 m; 433 MHz = 69 cm; 915 MHz = 33 cm; 2,4 GHz = 12,5 cm; 7 MHz = 43 m.
- `lambda` decide o tamanho da antena, como a onda interage com obstáculos, e quando os fios do circuito viram linhas de transmissão.
- `c` é finita: há atraso mínimo de 3,3 microssegundos por km.

## Para aprofundar

- [ ] [Worked example: Propagation of EM waves](https://www.youtube.com/watch?v=O7v1xTVctiE) (Khan Academy India - English): exemplo resolvido de `c = f x lambda` aplicado a ondas eletromagnéticas; confirmado só pelo título e canal, não assistido.

[Próxima aula: Amplitude, fase e polarização](./04%20-%20Amplitude%20Fase%20e%20Polarizacao.md)
