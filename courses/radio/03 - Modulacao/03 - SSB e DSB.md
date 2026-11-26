# Aula 3: DSB e SSB, por que a banda lateral única domina o HF

[Voltar ao módulo](./README.md)

*Pergunta que esta aula responde: se a portadora e uma das bandas laterais do AM não carregam informação nova, por que transmiti-las, e por que o rádio de HF descartou ambas?*

## O raciocínio: cortar o que não carrega informação

Na Aula 2, o AM transmite três coisas: portadora (sem informação, 67% da potência com `mu = 1`) e duas bandas laterais com a mesma informação. Dá para remover cada uma:

1. **AM completo**: portadora + USB + LSB. Largura `2 x fm`.
2. **DSB-SC** (double sideband, suppressed carrier): remove a portadora. Sinal `m(t) x cos(wc t)`, largura `2 x fm`. Toda a potência vai em informação.
3. **SSB** (single sideband): remove também uma das bandas laterais. Largura `fm`. Transmite USB **ou** LSB.

O custo de cada remoção é no receptor, não no transmissor.

## Por que a portadora ausente complica a demodulação

O detector de envelope (Aula 2) só funciona com a portadora forte presente: o contorno da onda segue `m(t)` porque `Ac` mantém tudo positivo. Sem portadora, o contorno do DSB-SC é `|m(t)|`, o áudio "dobrado" e distorcido.

Solução: o receptor recria a portadora com um oscilador local e faz o **detector de produto**: multiplica o sinal recebido por `cos(wc t)` e filtra. Em SSB o oscilador de reinserção é chamado de **BFO** (beat frequency oscillator).

O preço é a precisão. Se o oscilador local está errado por `df` Hz, todo o áudio se desloca `df` Hz: 100 Hz de erro transformam a voz em "voz de pato" (mais aguda ou grave), e a inteligibilidade cai quando o erro passa de algumas dezenas de Hz. Receptores SSB, por isso, têm osciladores estáveis e sintonia fina. Em DSB-SC, além da frequência, a **fase** da portadora local precisa coincidir, pois um erro de 90 graus zera o áudio; por isso DSB-SC é raro em rádio de voz.

## Como se gera SSB

Dois métodos clássicos:

- **Filtro**: gera DSB-SC e passa por um filtro muito seletivo (cristal ou mecânico) que deixa uma banda lateral e elimina a outra, que está a poucos centenas de Hz de distância (o áudio começa em 300 Hz, então as duas bandas ficam separadas por cerca de 600 Hz em torno de `fc`). Por isso o áudio de SSB é limitado a ~300 Hz a ~2,7 kHz.
- **Fase**: usa dois moduladores com sinais defasados de 90 graus de modo que uma banda lateral se soma e a outra se cancela. É o método natural em SDR, no qual o sinal complexo I/Q já tem a defasagem (Módulo 6).

## Convenção USB/LSB no rádio amador

Qual banda lateral usar não é regra física, é convenção: em geral, **LSB abaixo de 10 MHz** e **USB acima**. Modos digitais (Módulo 7) quase sempre usam USB. Se um interlocutor usar a banda errada, o sinal fica ininteligível, mas o rádio dele funciona. Exceções e variações existem por região e por banda; confira o plano de banda vigente da LABRE.

## Ganho: banda e potência

Duas economias se somam:

**Banda.** SSB ocupa metade do AM. Ruído térmico é proporcional à banda (`N = k x T x B`, Aula 7); banda pela metade recebe metade do ruído: **3 dB de melhoria** de SNR.

**Potência.** Nas HF, a potência é limitada em **PEP** (peak envelope power, potência de pico do envelope). Um transmissor AM a 100% de modulação tem `PEP = Pc x (1 + mu)^2 = 4 x Pc`, e cada banda lateral leva só `Pc/4`, isto é, 1/16 da PEP. Um transmissor SSB com a mesma PEP concentra tudo na banda lateral útil. A vantagem prática combinada costuma ser citada na literatura de radioamadorismo como algo perto de 9 dB (o valor exato depende das premissas de modulação e da forma de detecção; não confirmado em fonte primária nesta pesquisa). Em qualquer premissa, o ganho é de várias vezes em potência efetiva.

Outra vantagem: SSB **só gasta potência quando alguém fala**. Um transmissor AM emite a portadora o tempo todo.

Exemplo: transmissor de 100 W SSB fala e gasta em média bem menos que 100 W (voz tem fator de pico alto, potência média em torno de 10 a 25% da PEP, valor típico, varia com processamento de voz); o AM equivalente queima 25 W só de portadora em silêncio.

## Por que SSB é a escolha do HF

O HF (3 a 30 MHz, Módulo 2) tem três características que combinam com SSB:

1. **Espectro lotado e escasso.** Muitas estações disputam faixas de poucas centenas de kHz de largura (as faixas exatas de radioamador estão no Módulo 5). SSB cabe em ~3 kHz por conversa; AM ocuparia o dobro.
2. **Sinais fracos e distantes.** Reflexão ionosférica traz sinais a milhares de km, mas atenuados; os 3 dB de banda e o ganho de PEP decidem se a estação é ouvida ou não.
3. **Desvanecimento seletivo.** A ionosfera faz portadoras e bandas laterais chegarem por caminhos diferentes, com desvanecimento em frequências distintas. Em AM, a perda da portadora enquanto as bandas laterais estão presentes produz distorção forte; em SSB não há portadora para desaparecer.

## Custos do SSB

- Receptor mais complexo (BFO, sintonia fina).
- Não se usa em receptores de radiodifusão baratos.
- Sensível a erro de sintonia (dezenas de Hz).
- Ruído em amplitude ainda afeta (a informação continua em amplitude e fase da banda lateral); o ganho é de banda e potência, não de robustez a ruído como no FM.

## Conexão com os modos digitais

Um transceptor SSB entrega ao operador uma "faixa de áudio" de ~3 kHz. Modos como FT8 e PSK31 (Módulo 7) usam esse canal: um programa no computador gera tons de áudio, o rádio SSB os desloca para RF. Por isso um mesmo rádio serve para voz e para dados.

## Resumo

- AM = portadora + 2 bandas laterais; DSB-SC remove a portadora; SSB remove também uma banda lateral.
- A portadora ausente exige oscilador local (BFO) no receptor, com erro de frequência de poucas dezenas de Hz.
- SSB usa metade da banda do AM (3 dB de ganho de SNR) e concentra toda a PEP na informação.
- SSB só gasta potência quando há voz.
- HF pede SSB por causa de espectro escasso, sinais fracos e desvanecimento seletivo.
- Convenção: LSB abaixo de 10 MHz, USB acima.

[Próxima aula: FM e PM, a informação na frequência e na fase](./04%20-%20FM%20e%20PM.md)
