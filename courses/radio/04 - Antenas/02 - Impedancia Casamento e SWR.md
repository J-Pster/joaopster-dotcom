[Voltar ao módulo](./README.md)

# Aula 2: Impedância, casamento e SWR

*Pergunta que esta aula responde: por que o transmissor, o cabo e a antena precisam "combinar" entre si, o que acontece quando não combinam e o que o número SWR realmente diz?*

## O problema: energia que não passa volta

A energia do transmissor sai por um cabo até a antena. Em cada junção (transmissor-cabo, cabo-antena) a onda encontra uma "parede" ou um "degrau" que decide quanto passa e quanto volta. Se a antena aceita toda a energia e irradia, ótimo. Se rejeita parte, essa parte **reflete** de volta pelo cabo. A quantidade refletida depende de um só conceito: a impedância.

Para quem programa: pense em duas camadas de uma rede com MTU ou taxas diferentes. Onde não casam, há perda de pacote. Aqui o "pacote" é a onda eletromagnética, e o critério de casamento é a impedância.

## Impedância

**Impedância** (`Z`, em ohms) é a oposição total de um circuito à corrente alternada. Tem duas partes: `Z = R + jX`, onde `R` é a resistência (a parte que dissipa energia, seja irradiando ou aquecendo) e `X` a reatância (energia armazenada, aula anterior). O `j` só indica que `X` está "em quadratura" com `R`; não é preciso mais que isso aqui.

Duas impedâncias diferentes aparecem:

- A **impedância característica** (`Z0`) do cabo: uma propriedade do cabo, determinada pela geometria (razão entre os diâmetros dos condutores) e pelo isolante. Não depende do comprimento do cabo nem é medida com multímetro. É a relação entre tensão e corrente de uma onda que viaja pelo cabo.
- A **impedância da carga** (`ZL`): o que está no fim do cabo (a antena), que é o que o cabo "enxerga".

### Regra do casamento

Quando uma onda que viaja num cabo de `Z0` encontra uma carga `ZL`, a fração de tensão que volta é o **coeficiente de reflexão**:

```
Gamma = (ZL - Z0) / (ZL + Z0)        (|Gamma| vai de 0 a 1)
```

- `ZL = Z0`: `Gamma = 0`. Nada reflete: **casamento perfeito**, toda a energia entra na carga.
- Circuito aberto (`ZL` infinita): `Gamma = 1`. Tudo volta, com a mesma fase.
- Curto-circuito (`ZL = 0`): `Gamma = -1`. Tudo volta, com fase invertida.

Exemplo: cabo de 50 ohms alimentando um dipolo ideal de 73 ohms (só resistivo): `Gamma = (73 - 50) / (73 + 50) = 0,187`. Reflete 18,7% da tensão, ou `0,187^2 = 3,5%` da potência (potência vai com o quadrado da tensão).

Analogia física: uma corda grossa presa a uma corda fina. Uma onda que vai da grossa para a fina reflete parcialmente porque a "resistência" ao movimento muda. Nas cordas, o fim é livre ou preso; em RF, o fim tem uma impedância. Só quando as duas cordas (ou impedâncias) são iguais a onda passa sem sentir a junção.

## SWR (ROE, razão de onda estacionária)

Onda direta e onda refletida viajam em sentidos opostos no mesmo cabo, e se somam formando um padrão de **ondas estacionárias**: pontos do cabo com tensão máxima (onde as duas estão em fase) e mínima (em oposição), fixos no espaço. O **SWR** (*Standing Wave Ratio*; em português **ROE**, Relação de Onda Estacionária, ou VSWR quando medido em tensão) é a razão entre essa tensão máxima e a mínima:

```
SWR = Vmax / Vmin = (1 + |Gamma|) / (1 - |Gamma|)
|Gamma| = (SWR - 1) / (SWR + 1)
```

Sem reflexão, `Vmax = Vmin`, `SWR = 1` (escreve-se 1:1, o melhor caso). Se a carga é puramente resistiva, sai direto: `SWR = ZL / Z0` (ou o inverso, o que der maior que 1). Ex.: 73 ohms em 50: `SWR = 73/50 = 1,46`, coerente com `Gamma = 0,187` (`(1,187)/(0,813) = 1,46`). Um dipolo ideal em cabo de 50 ohms dá SWR 1,46, e isso é considerado ótimo.

## Perda de retorno e perda por descasamento

O SWR é uma razão, difícil de comparar com dB. Duas outras grandezas em dB dizem a mesma coisa:

- **Perda de retorno** (*return loss*, `RL`): quantos dB abaixo da onda incidente está a refletida. `RL = -20 x log10(|Gamma|)`. Valor **maior é melhor** (mais dB de atenuação da reflexão). Sem reflexão, `RL` é infinito.
- **Perda por descasamento** (*mismatch loss*, `ML`): quantos dB de potência **deixam de entrar** na carga por causa da reflexão. `ML = -10 x log10(1 - |Gamma|^2)`. Valor **menor é melhor**.

E a fração de potência refletida é `|Gamma|^2`, a que entra é `1 - |Gamma|^2`.

### Tabela de conversão

Calculada com as fórmulas acima; confere com a tabela de referência da [Wikipedia, Standing wave ratio](https://en.wikipedia.org/wiki/Standing_wave_ratio) nos pontos em que ela dá valores (nos SWR 5 e 10 a Wikipedia traz `RL` aproximado diferente do calculado aqui; use as fórmulas, que são exatas).

| SWR | `\|Gamma\|` | Potência refletida | Perda de retorno | Perda por descasamento |
|---|---|---|---|---|
| 1,0 | 0 | 0% | infinita | 0 dB |
| 1,1 | 0,048 | 0,2% | 26,4 dB | 0,01 dB |
| 1,2 | 0,091 | 0,8% | 20,8 dB | 0,04 dB |
| 1,5 | 0,200 | 4,0% | 14,0 dB | 0,18 dB |
| 2,0 | 0,333 | 11,1% | 9,5 dB | 0,51 dB |
| 3,0 | 0,500 | 25,0% | 6,0 dB | 1,25 dB |
| 4,0 | 0,600 | 36,0% | 4,4 dB | 1,94 dB |
| 5,0 | 0,667 | 44,4% | 3,5 dB | 2,55 dB |
| 10,0 | 0,818 | 66,9% | 1,7 dB | 4,80 dB |

Leia assim: SWR 2:1 reflete 11% da potência, mas a **perda por descasamento é só 0,5 dB**: 89% da potência ainda entra na antena. Meio dB é imperceptível em um enlace real (uma variação de 1 dB é pequena perto da variação típica da propagação, Módulo 2). Mesmo o SWR 3:1 perde 1,25 dB.

## O que um SWR alto realmente significa (e o que não significa)

O SWR é uma grandeza de **casamento**, não de **qualidade** da antena. Isso desfaz vários mitos:

1. **SWR baixo não significa antena boa.** Uma carga fictícia (dummy load, Aula 7) tem SWR 1,0 e não irradia nada. Uma antena de borracha cega em 433 MHz medida com perda alta também pode mostrar SWR bom porque a energia é dissipada como calor. SWR só diz que a energia entra; não diz que sai como onda.
2. **SWR alto não significa que a potência é "perdida".** A energia refletida volta pelo cabo até o transmissor. Num sistema sem perdas ela seria reenviada e acabaria irradiada. O que se perde é energia **dentro do cabo**, pois a onda percorre o cabo várias vezes; por isso o problema real cresce com cabo longo, fino ou em frequência alta.
3. **O SWR medido na ponta do transmissor mascara o SWR da antena quando o cabo tem perda.** A onda refletida atravessa o cabo duas vezes (ida e volta) e o `RL` medido no transmissor é `RL da antena + 2 x perda do cabo (dB)`. Exemplo: antena desconectada (aberta, `RL = 0 dB`) num cabo com 3 dB de perda: `RL` medido = 6 dB, ou seja, SWR 3:1. Parece "razoável", mas a antena nem está lá. Um SWR "ótimo" medido no fim de um cabo ruim e longo pode esconder uma antena péssima.
4. **Para o transmissor, o SWR importa porque o estágio de saída (PA) foi projetado para 50 ohms.** Rádios modernos reduzem a potência automaticamente quando o SWR passa de um limite (proteção); em rádios antigos ou módulos simples, a potência refletida pode sobreaquecer ou destruir o amplificador. Por isso nunca se transmite sem carga: sem antena o SWR é infinito. Módulos LoRa e transceptores portáteis não devem ser ligados sem antena ou carga fictícia (regra comum em manuais de fabricantes; confira o datasheet do seu módulo).
5. **SWR alto em linha paralela (cabo de fio aberto, Aula 3) e sintonizador de antena é normal**: linha paralela tem tão pouca perda que trabalha bem com SWR de 5:1 ou mais e o sintonizador (tuner) devolve 1:1 ao transmissor.

Faixas de uso comuns: SWR abaixo de 1,5 é excelente; até 2:1 é ok para qualquer uso; entre 2 e 3, procure o motivo; acima de 3, há problema (antena errada para a banda, conector solto, cabo danificado) que deve ser resolvido antes de transmitir. Esses cortes são convenção da prática amadora, não lei física; o dado físico é a tabela acima.

## Por que 50 ohms

Duas ideias que se opõem, num cabo coaxial de mesmo diâmetro externo:

- A impedância que dá **maior capacidade de potência** (menos risco de faísca no isolante) fica em torno de 30 ohms.
- A que dá **menor perda** (menor atenuação por metro) fica em torno de 77 ohms.

50 ohms fica entre as duas: um compromisso adotado como padrão em radiocomunicação e instrumentação. Para TV, a preocupação era só perda (sinal fraco, sem potência), e por isso o cabo padrão de antena de TV é de 75 ohms. Também há coincidência favorável: a resistência de radiação de um monopolo de um quarto de onda é de cerca de 36 ohms e a de um dipolo, 73 ohms; o cabo de 50 ohms fica no meio e casa razoavelmente com as duas. A explicação do compromisso 30/77 é a que aparece em fontes didáticas de coaxial; não confirmei uma atribuição histórica (quem escolheu 50 ohms) nesta pesquisa.

O mais importante para o aluno: **o padrão importa mais que o valor**. Todo equipamento (transmissor, cabo, conector, antena, instrumento) foi fabricado para 50 ohms, logo tudo se encaixa; TV e vídeo usam 75 ohms. Misturar (ex.: cabo de TV de 75 ohms num rádio de 50) dá SWR de 1,5, que ainda é tolerável mas evitável.

## Casamento: como se conserta um descasamento

O objetivo é fazer o transmissor enxergar 50 ohms mesmo que a antena tenha outra impedância. Formas de fazer:

- **Cortar a antena** para a ressonância (`X = 0`), aula anterior. Corrige a reatância; sobra `R`, que pode ainda ser diferente de 50.
- **Mudar a geometria da antena** para mudar `R`. Exemplos: dobrar os braços de um dipolo de meia onda em "V invertido" reduz a impedância de 73 para cerca de 50 ohms com ângulo aberto de 90 a 120 graus. Um plano de terra de um quarto de onda com radiais inclinados (cerca de 45 graus para baixo) sobe a impedância de 36 para perto de 50 ohms.
- **Transformador de impedância (unun/balun com relação de espiras)**: por exemplo, 4:1 e 9:1 para HF, ou 49:1 para uma antena de fio de meia onda alimentada na ponta (a impedância dessas antenas é de alguns milhares de ohms).
- **Sintonizador de antena (tuner/ATU)**: circuito ajustável de bobinas e capacitores entre o rádio e o cabo. Mostra 50 ohms ao rádio. Importante: o tuner não muda a antena; se a antena é ineficiente, continuará ineficiente (Aula 7).
- **Casamento com seção de linha**: usar trechos de cabo com comprimento em múltiplos de `VF x lambda / 4` como transformador de impedância. Não é usado em iniciantes; fica apenas o conceito: comprimentos de cabo afetam a impedância vista quando o SWR não é 1:1.

## Resumo

- Onde a impedância muda, parte da onda reflete: `Gamma = (ZL - Z0) / (ZL + Z0)`. Casamento perfeito = `ZL = Z0`, sem reflexão.
- SWR = `(1 + |Gamma|) / (1 - |Gamma|)`; perda de retorno = `-20 log10 |Gamma|`; perda por descasamento = `-10 log10 (1 - |Gamma|^2)`. Decore o padrão: SWR 1,5 = 4% refletido; 2:1 = 11% e 0,5 dB; 3:1 = 25% e 1,25 dB.
- SWR mede casamento, não qualidade: uma dummy load tem SWR 1,0 e irradia zero.
- Cabo com perda mascara o SWR real da antena porque a reflexão atravessa o cabo duas vezes.
- O perigo de SWR alto é para o estágio de saída do transmissor e para as perdas no cabo; nunca transmita sem antena ou carga.
- 50 ohms é um compromisso entre potência máxima (30 ohms) e perda mínima (77 ohms) e virou padrão; tudo no seu sistema deve ser de 50 ohms.

## Para aprofundar

- [ ] [What is Standing Wave Ratio (SWR)?](https://www.youtube.com/watch?v=MddghjDThsM) (Johnson's TechWorld): explicação do conceito de onda estacionária e reflexão (título e canal confirmados; conteúdo não assistido).
- [ ] [SWR: How Standing Waves ACTUALLY Behave!](https://www.youtube.com/watch?v=sYyG-cUCS24) (TheSmokinApe Ham Radio): sobre o comportamento das ondas estacionárias e sua relação com SWR (título e canal confirmados; conteúdo não assistido).
- [ ] [Standing wave ratio](https://en.wikipedia.org/wiki/Standing_wave_ratio) (Wikipedia): fórmulas e tabelas de SWR, coeficiente de reflexão e perda de retorno.

[Próxima aula: Linhas de transmissão, conectores e balun](./03%20-%20Linhas%20de%20Transmissao%20Conectores%20e%20Balun.md)
