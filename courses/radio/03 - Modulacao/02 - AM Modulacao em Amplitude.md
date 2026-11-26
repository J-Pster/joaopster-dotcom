# Aula 2: AM, modulação em amplitude

[Voltar ao módulo](./README.md)

*Pergunta que esta aula responde: como a amplitude da portadora carrega o áudio, onde a informação fica no espectro e por que o AM gasta tanta potência e banda?*

## O mecanismo

Na Aula 1 vimos que modular é variar um parâmetro da portadora. No **AM** (amplitude modulation) a amplitude da portadora segue o sinal modulante `m(t)`:

```
s(t) = [Ac + m(t)] x cos(2 x pi x fc x t)
```

`Ac` é a amplitude da portadora sem modulação e `fc` sua frequência. O "envelope" (a curva que contorna os picos da onda) reproduz `m(t)` somado a `Ac`. A frequência da portadora não muda.

Para um tom de teste `m(t) = Am x cos(2 x pi x fm x t)`, define-se o **índice de modulação**:

```
mu = Am / Ac
```

- `mu = 0`: sem modulação, só portadora.
- `mu = 1` (100%): o envelope vai de zero a `2 x Ac`; é o máximo sem distorção.
- `mu > 1` (sobremodulação): o envelope tenta ficar negativo, a portadora "corta" e o receptor de envelope reproduz distorção, além de gerar sinais fora da banda que interferem nos canais vizinhos.

Em voz, `mu` varia continuamente; o transmissor ajusta o ganho para os picos ficarem perto de 100% sem passar.

## Bandas laterais: onde a informação realmente está

Pela identidade `cos(a) x cos(b) = 1/2 [cos(a-b) + cos(a+b)]`, o produto do tom pela portadora vira uma soma de três senoides:

```
s(t) = Ac cos(wc t) + (mu Ac / 2) cos((wc + wm) t) + (mu Ac / 2) cos((wc - wm) t)
```

(`w = 2 x pi x f`.) No espectro (Módulo 1) aparecem três linhas:

- uma na frequência da portadora `fc` (não carrega informação alguma);
- uma em `fc + fm`, a **banda lateral superior** (USB, upper sideband);
- uma em `fc - fm`, a **banda lateral inferior** (LSB, lower sideband).

Com voz (várias frequências de 300 Hz a 3 kHz), cada tom gera o seu par e as bandas laterais viram faixas inteiras: a superior é uma cópia do espectro do áudio deslocada para cima de `fc`; a inferior é o espelho dele. As duas bandas laterais carregam a **mesma** informação (uma é redundante).

### Largura de banda

```
B_AM = 2 x fm_max
```

`fm_max` é a maior frequência de áudio transmitida. Áudio até 5 kHz ocupa 10 kHz de espectro. Por isso uma estação de AM de ondas médias ocupa um canal de 10 kHz (espaçamento de canais no Brasil; confira o plano de canalização vigente da Anatel) e por isso o AM de radiodifusão soa "abafado": o áudio é limitado para caber.

## Eficiência de potência

A potência total, para uma carga qualquer, soma as três linhas. Com `Pc` a potência da portadora:

```
P_total = Pc x (1 + mu^2 / 2)
P_cada_banda_lateral = Pc x mu^2 / 4
Eficiência = P_bandas / P_total = mu^2 / (2 + mu^2)
```

Exemplo resolvido: transmissor com portadora de 100 W e `mu = 1`.

- Cada banda lateral: `100 x 1 / 4 = 25 W`; as duas: 50 W.
- Total: 150 W.
- Eficiência: 50/150 = **33%**. Os outros 100 W (67%) vão na portadora, que não carrega informação.

Com voz real, `mu` médio fica bem abaixo de 1 (por exemplo 0,3 a 0,5). Para `mu = 0,5`: eficiência = 0,25/2,25 = **11%**. Quase toda a potência é gasta na portadora.

Por que então a portadora existe? Porque ela permite um receptor barato. Um **detector de envelope** (um diodo e um filtro RC, o "rádio de galena") recupera `m(t)` simplesmente seguindo o contorno da onda, sem oscilador local nem sincronismo. No AM de radiodifusão um único transmissor gasta muita potência para atender milhões de receptores baratos: a economia está no lado do receptor.

## O problema do ruído

O ruído térmico e a interferência (relâmpagos, motores, luz fluorescente, plugues) **somam** amplitude ao sinal. Como o AM guarda a informação exatamente na amplitude, o receptor não distingue "variação de amplitude da mensagem" de "variação de amplitude do ruído". O ruído entra no áudio como chiado e estalos, e nenhum circuito simples o remove sem também remover parte da mensagem.

Além disso, a propagação real (Módulo 2) faz a amplitude variar por desvanecimento (fading), o que o AM interpreta como modulação indesejada.

A Aula 4 mostra como o FM contorna isso mudando o parâmetro que carrega a informação para a frequência.

## Onde o AM ainda é usado

- **Ondas médias e curtas (radiodifusão)**: 530 a 1700 kHz em MF. Simples, alcance grande à noite por reflexão na ionosfera.
- **Aeronáutica VHF (118 a 137 MHz)**: voz em AM. Uma vantagem operacional: se dois pilotos transmitem ao mesmo tempo, o AM produz um apito (batimento), mas ambos são ouvidos; no FM a estação mais forte apagaria a outra por "captura" (Aula 4), e o controlador não saberia da colisão.
- **Modo básico de rádio amador** em algumas faixas, e receptores de banda aérea em SDR (Módulo 6).

## Demodulação, em outra visão

O detector de envelope funciona porque a portadora está presente e forte. Sem ela (Aula 3), o receptor precisa gerar uma portadora local e multiplicá-la pelo sinal recebido, o que é o princípio de todo receptor moderno: `cos(a) x cos(b)` novamente, desta vez trazendo o espectro de volta para perto de zero. O Módulo 6 (SDR) mostra isso em software.

## Resumo

- No AM, `s(t) = [Ac + m(t)] cos(wc t)`; o índice `mu = Am / Ac` deve ficar em 1 ou menos para não distorcer.
- O espectro tem portadora + duas bandas laterais idênticas em informação, com `B = 2 x fm_max`.
- Eficiência = `mu^2 / (2 + mu^2)`: 33% no máximo (com `mu = 1`); a maior parte da potência vai na portadora, que não tem informação.
- A portadora permite um detector de envelope barato, por isso o AM sobrevive na radiodifusão e na aviação.
- A informação está na amplitude, exatamente o que o ruído corrompe: por isso o AM é sensível a ruído.

## Para aprofundar

- [ ] [Amplitude Modulation (Academo)](https://academo.org/demos/amplitude-modulation/) (Academo): demonstração interativa em que se ajustam frequências e amplitudes e se vê e ouve o resultado da multiplicação de uma senoide por um envelope (página aberta e confirmada em setembro de 2026).

[Próxima aula: SSB e DSB, por que a banda lateral única domina o HF](./03%20-%20SSB%20e%20DSB.md)
