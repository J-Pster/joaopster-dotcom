[Voltar ao módulo](./README.md)

# Aula 7: Medição, dummy load e erros comuns

*Pergunta que esta aula responde: como saber se a antena está funcionando (e não apenas "parece bem"), como testar o transmissor sem irradiar, e quais erros estragam a maior parte dos sistemas?*

## Aviso legal

Medir antena com transmissor de verdade significa **emitir** na frequência. Transmitir exige licença ou equipamento homologado para a faixa (Módulo 5 e Anatel). Analisadores de antena e NanoVNA geram sinais de potência muito baixa, mas ainda são emissões; use-os em frequências e situações permitidas para você, e prefira medir com a antena em ambiente onde o sinal não interfira com ninguém. A carga fictícia da seção seguinte existe justamente para testar sem irradiar.

## Por que medir

Nada do que foi visto até aqui dá o número exato para sua instalação: `k` do fio, cabo, altura e vizinhança deslocam a ressonância (aula 1) e o casamento (aula 2). O comprimento calculado é ponto de partida. Medir mostra em que frequência a antena realmente ressoa, qual o SWR, e se há um cabo ou conector defeituoso.

## Instrumentos

### Medidor de SWR (ponte direcional)

Fica entre o transmissor e o cabo, medindo a potência direta e a refletida (aula 2). Exige **transmitir** (com potência) durante a medição. Mostra um SWR em uma frequência de cada vez. Serve para monitorar; é ruim para ajustar, porque cada tentativa exige nova transmissão. Erro comum: ler SWR no rádio com cabo longo e perdas, que mascara a antena (aula 2).

### Analisador de antena

Gera o próprio sinal de baixa potência e varre uma faixa de frequências, mostrando SWR, resistência `R` e reatância `X` por frequência. Não precisa de transmissor e mostra num único gráfico onde está a ressonância (mínimo de SWR, `X = 0`).

### NanoVNA (analisador vetorial de redes)

Analisador de antena/rede portátil e barato. Um **VNA** (*Vector Network Analyzer*) mede, além do módulo, a **fase** da onda refletida, de onde tira `R` e `X`, e mostra em gráficos: SWR, perda de retorno, carta de Smith. O NanoVNA não está limitado à antena: também mede filtros, cabos e atenuadores. Faixa de frequência varia por modelo; confira a do seu, e a precisão cai fora da faixa de projeto.

#### Calibração (essencial)

Um VNA mede no plano em que foi calibrado. Sem calibração, o cabo de teste e os conectores entram na medição como se fossem parte da antena. Procedimento geral (o menu e os nomes dependem do firmware; siga o manual do modelo):

1. Configure a faixa de frequências que vai medir (a calibração vale só para ela).
2. Conecte, na ponta de teste (fim do cabo, onde a antena será ligada), três padrões, um de cada vez: **OPEN** (aberto, sem nada), **SHORT** (curto), **LOAD** (carga de 50 ohms), e registre cada um.
3. Se for medir transmissão (THRU), conecte as duas portas e registre.
4. Salve. **Recalibre** se mudar a faixa, adicionar cabo ou adaptador.

Para ver a antena e não o cabo, calibre na ponta que se conecta à antena (após qualquer cabo de teste, adaptador ou pigtail que você use). Medir a antena por um cabo longo e sem calibrar o cabo dá uma leitura melhor que a real (perda do cabo, aula 2).

#### Como ler

- **SWR**: procure o mínimo. Onde está o mínimo é a frequência de ressonância aproximada.
- **`X` (reatância)**: cruza zero na ressonância.
- **`R`**: deve ficar perto de 50 ohms para casar.
- **Largura de banda**: faixa onde o SWR fica abaixo de um limite (por exemplo, 2:1).

### Ajuste de uma antena (procedimento)

1. Corte o dipolo ou monopolo com folga (5% a mais que o calculado; é mais fácil cortar do que emendar).
2. Instale na altura e no local definitivos (o ambiente muda a ressonância).
3. Meça o SWR ao longo de uma faixa larga em torno da frequência desejada.
4. Se o mínimo de SWR ficar **abaixo** da frequência desejada, a antena está longa; se **acima**, curta.
5. Corte (ou alongue) de forma proporcional: `L_novo = L_atual x f_medida / f_desejada`. Exemplo: dipolo de 40 m com mínimo de SWR em 6,80 MHz e desejado 7,10 MHz: `L_novo = L x 6,80 / 7,10 = 0,958 L`, ou seja, cortar 4,2% do comprimento total (repartido entre os dois braços). Corte pouco, meça de novo.
6. Refaça até chegar; registre os valores finais.

## Dummy load (carga fictícia)

### Por que existe

Para testar, ajustar ou consertar um transmissor é necessário que ele opere com carga de 50 ohms, mas **sem emitir sinal no ar**: emitir causaria interferência em outros usuários (e pode ser irregular). A **dummy load** é uma resistência de 50 ohms, blindada e com dissipador, que converte toda a potência do transmissor em calor. Em vez de uma antena, o transmissor "enxerga" 50 ohms puros: SWR 1:1 (aula 2).

### Para que serve na prática

- **Testar e ajustar o rádio sem irradiar** (medir potência de saída, testar módulo, verificar que transmite).
- **Separar defeito de rádio de defeito de antena/cabo**: com a dummy load o rádio funciona normalmente e mede a potência esperada; ligado à antena e com desempenho ruim, o problema é antena, cabo ou conector.
- **Calibrar medições**: a carga é o padrão LOAD do NanoVNA, e uma carga de precisão serve de referência.
- **Proteger o estágio de saída** enquanto se mexe em algo: transmissor nunca fica sem carga (aula 2).

### O que observar

- **Potência suportada**: se a carga é de 5 W e o rádio dá 50 W, ela esquenta e queima. Confira a potência e o **tempo** (muitas suportam a potência máxima só por poucos minutos).
- **Frequência**: dummy loads baratas pioram (SWR sobe) em VHF/UHF e acima; a folha de dados diz até que frequência a carga é boa. Para GHz use carga própria para essa faixa. O SWR "perfeito" só vale dentro dessa faixa.
- **Conector**: SMA para módulos, PL/SO-239 para rádios HF, BNC para portáteis; use um conector direto (sem adaptador) para não introduzir descasamento.
- **Para módulos LoRa**: existem terminações SMA de 50 ohms de baixa potência que funcionam como dummy load para bancada.

## Erros comuns

1. **Antena errada para a banda.** Uma antena de 433 MHz usada em 915 MHz está fora da ressonância (aula 1): SWR alto, reatância não nula, diagrama diferente do projetado. Confira a banda de trabalho na folha de dados e, melhor, meça.
2. **Cabo longo demais em UHF/GHz.** Aula 3: cabo fino de 10 m em 2,4 GHz perde da ordem de 10 dB (estimativa). Em UHF e acima prefira cabo curto, grosso e de baixa perda; ou leve o rádio para perto da antena e use cabo de dados (Ethernet, USB) no trecho longo.
3. **Ignorar o SWR.** SWR ruim indica conector solto, cabo danificado, antena errada ou água. Transmitir assim aquece o transmissor e queima estágios. Meça antes de transmitir com potência.
4. **Confiar só no SWR baixo.** Ele mede casamento, não desempenho (aula 2). Uma antena sem eficiência (borracha, carga fictícia) tem SWR bom.
5. **Ligar o módulo sem antena.** Danifica a saída (aula 2).
6. **Polarização cruzada** entre as pontas (aula 4).
7. **Sem choke** em antenas balanceadas ou de fio alimentado na ponta; SWR que muda ao mexer no cabo, RF em casa (aula 3).
8. **Trocar adaptador por adaptador** até "caber": cada peça perde, e tudo que não é 50 ohms limpo em UHF vira problema (aula 3).
9. **Montar a antena dentro de casa, atrás de parede/vidro metalizado, ou perto de metal** (aula 6). Altura e visada valem mais que ganho.
10. **Confundir dBi com dBd** ao comparar catálogos (aula 4), ou assumir ganho "de fábrica" sem conferir.
11. **Não proteger conector externo** contra água.
12. **Instalar perto de rede elétrica** ou sem aterramento e protetor (aula 6): erro que custa a vida.

## Resumo

- Comprimento calculado é ponto de partida; mede-se e ajusta-se. Mínimo de SWR abaixo da frequência desejada = antena longa, acima = curta; `L_novo = L x f_medida / f_desejada`.
- Medidor de SWR exige transmitir; analisador de antena e NanoVNA geram sinal próprio de baixa potência e mostram SWR, `R` e `X` por frequência. Calibre o NanoVNA (OPEN, SHORT, LOAD) na ponta onde a antena se liga.
- Dummy load: 50 ohms que dissipa em calor; serve para testar o rádio sem irradiar e para separar defeito de rádio de defeito de antena. Confira potência, tempo e faixa de frequência.
- Erros clássicos: banda errada, cabo longo em UHF, SWR ignorado, módulo sem antena, polarização cruzada, sem choke, adaptadores demais, local ruim.
- Medir sempre respeitando a regulamentação: emitir exige licença ou equipamento homologado (Módulo 5).

## Para aprofundar

- [ ] [Dummy Loads for RF](https://www.youtube.com/watch?v=xed5E4go0CM) (DXCommander): vídeo sobre carga fictícia (título e canal confirmados; conteúdo não assistido).

Fim do módulo: confira o checklist no [README do módulo](./README.md).
