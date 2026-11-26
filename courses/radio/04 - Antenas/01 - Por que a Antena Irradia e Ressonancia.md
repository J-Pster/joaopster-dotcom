[Voltar ao módulo](./README.md)

# Aula 1: Por que a antena irradia e por que o tamanho importa

*Pergunta que esta aula responde: o que uma antena faz que um fio comum não faz, e por que o comprimento dela precisa ser uma fração do comprimento de onda?*

## O problema que a antena resolve

O transmissor produz uma corrente alternada dentro de um cabo. Essa energia está **guiada**: presa entre o condutor central e a malha do cabo, sem sair. O receptor do outro lado precisa de energia **livre**, viajando pelo espaço como a onda eletromagnética do Módulo 1. A antena é a peça que faz a transição entre os dois mundos: converte onda guiada em onda livre (transmissão) e onda livre em onda guiada (recepção). O mesmo pedaço de metal faz as duas coisas, com as mesmas propriedades (é o princípio da **reciprocidade**): tudo o que esta aula disser sobre transmitir vale para receber.

## Por que uma antena irradia: cargas aceleradas

Dado fundamental da eletrodinâmica: **uma carga elétrica acelerada emite radiação eletromagnética**. Carga parada só tem campo elétrico ao redor. Carga em movimento uniforme (corrente contínua) cria campo magnético estático. Só quando a velocidade da carga muda (acelera, freia, inverte) uma perturbação se desprende e viaja como onda. Corrente alternada é exatamente isso: os elétrons no fio vão e voltam, mudando de velocidade e sentido a cada meio ciclo. Na frequência `f`, são `f` inversões por segundo (em 146 MHz, 146 milhões).

Então por que um cabo coaxial ou um par de fios paralelos não irradia, embora conduza corrente alternada? Porque as correntes estão em sentidos opostos em dois condutores muito próximos (comparado a `lambda`). Os campos que cada uma cria no espaço têm sinais opostos e se cancelam. É o que se quer numa linha de transmissão: energia guiada, sem vazamento.

Uma antena faz o contrário: **abre a linha** para que os campos deixem de se cancelar. Imagine um par de fios paralelos e dobre as pontas em direções opostas, formando uma reta. Agora a corrente de um lado e a do outro fluem no mesmo sentido ao longo da reta, os campos se somam à distância e a energia escapa. Isso é um **dipolo**: dois braços retos em linha, alimentados no meio.

Quanto do fio irradia bem? Só quando o comprimento é comparável a `lambda`. Um fio muito curto tem cargas que vão e voltam por uma distância minúscula, e os campos gerados por partes vizinhas do fio, em sentidos opostos, quase se cancelam de novo. Isso leva à parte central desta aula: o tamanho.

## Onda guiada para onda livre: uma questão de impedância

Existe um número físico para o espaço livre: a **impedância intrínseca do vácuo**, cerca de 377 ohms (a razão entre campo elétrico e campo magnético de uma onda plana). O cabo coaxial típico tem 50 ohms (Aula 2 explica por quê). A antena funciona como um **transformador de impedância** entre esses dois mundos: adapta a relação tensão/corrente da linha à relação campo E/campo H do espaço. Uma boa antena faz essa passagem suave e a energia sai; uma ruim reflete parte de volta ao cabo. É essa a ideia por trás de tudo o que vem nas próximas aulas.

## Ressonância: por que o comprimento é uma fração de lambda

### Ondas estacionárias no fio

Quando a corrente alternada chega a um fio, ela viaja pelo metal quase à velocidade da luz. Ao chegar à ponta livre do fio, não tem para onde ir: a corrente na ponta é forçada a ser zero, e a onda **reflete** e volta. A onda que vai e a que volta se somam, formando uma **onda estacionária**: um padrão fixo de máximos e mínimos de corrente ao longo do fio, que só oscila em amplitude no tempo.

Analogia (para quem programa): é como um pacote que volta de um destino sem tratamento e se combina com o próximo pacote enviado. Se o "tempo de ida e volta" bate com o período do sinal, a reflexão reforça o que está sendo enviado; se não bate, a reflexão atrapalha.

Numa antena, o reforço acontece quando o fio tem comprimento tal que a onda, indo até a ponta e voltando, completa um número certo de ciclos. Para o fio mais curto que faz isso, o caso do **dipolo de meia onda** (`lambda/2`), a distribuição de corrente é a de meio ciclo de uma senoide:

- **Corrente**: zero nas duas pontas, máxima no centro (onde se conecta o cabo).
- **Tensão**: máxima nas pontas, mínima no centro.

Consequência prática: o centro tem corrente alta e tensão baixa, o que dá uma impedância baixa (cerca de 73 ohms para um dipolo fino no espaço livre). As pontas têm tensão alta (é onde isoladores e o cuidado com centelhamento importam em potência alta).

### O que "ressonante" significa

Um circuito com indutância e capacitância troca energia entre o campo elétrico (capacitor) e o magnético (indutor). Na **frequência de ressonância**, os dois efeitos se anulam e sobra só resistência. Chamamos de **reatância** (`X`, em ohms) essa parte que não dissipa: reatância indutiva é positiva, capacitiva é negativa. Numa antena:

- **Curta demais** para a frequência: a antena se comporta como um capacitor, `X` negativa.
- **Longa demais**: comporta-se como um indutor, `X` positiva.
- **Ressonante**: `X = 0`. Toda a tensão aplicada empurra corrente "de verdade", que se divide entre irradiar (útil) e aquecer o fio (perda).

Fora da ressonância o transmissor enxerga uma carga com reatância: parte da energia fica indo e voltando entre transmissor e antena em vez de sair. É por isso que se diz que a antena "precisa estar ressonante na frequência de uso". Vale ressaltar: **uma antena não deixa de funcionar fora da frequência de ressonância**, ela fica menos eficiente e casa pior com o cabo (Aula 2). A faixa de frequência onde ainda funciona aceitavelmente é a sua **largura de banda**.

### Meia onda e um quarto de onda

- **Dipolo de meia onda** (`lambda/2`): dois braços de `lambda/4` cada, alimentado no centro. É a antena de referência.
- **Monopolo de um quarto de onda** (`lambda/4`): um único braço vertical sobre uma superfície condutora (o "plano de terra"). O plano condutor funciona como espelho: a onda do braço real e sua "imagem" no espelho formam, juntas, algo equivalente a um dipolo de meia onda, mas só o semiespaço acima é usado. Por isso metade do comprimento basta. É a antena de rádios portáteis, de carros e de quase todo módulo LoRa.

## Como calcular o comprimento

Ponto de partida, direto do Módulo 1: `lambda = c / f`, com `c` = 299.792.458 m/s (na prática, 300 milhões). Com `f` em MHz e `lambda` em metros:

```
lambda (m) = 300 / f (MHz)      (aproximação; 299,79 / f dá o valor exato)
```

O comprimento elétrico ideal seria `lambda/2` ou `lambda/4`. Na prática, o fio real é **mais curto** que isso, por dois motivos:

1. **Efeito de ponta (end effect)**: o campo elétrico "vaza" um pouco além do fim do fio, fazendo a antena parecer eletricamente mais longa do que é. Compensa-se cortando menos.
2. **Espessura do condutor e isolamento**: fio mais grosso e fio encapado aumentam o encurtamento.

O ajuste é um **fator de encurtamento** `k`, tipicamente entre 0,94 (condutor grosso) e 0,98 (fio fino), com 0,95 como valor comum de projeto (fonte: [Wikipedia, Dipole antenna](https://en.wikipedia.org/wiki/Dipole_antenna)). A fórmula prática do dipolo, muito usada em radioamadorismo:

```
Dipolo (m)  = 143 / f (MHz)     (equivale a k = 0,95: 0,5 x 0,95 x 300 = 142,5)
Dipolo (ft) = 468 / f (MHz)
```

Isso é um **ponto de partida**, não o valor final. Altura do solo, objetos próximos e espessura do fio deslocam a ressonância, e por isso a antena de HF real se **corta longa e se apara** medindo (Aula 7).

### Exemplos resolvidos

Use `k = 0,95` para o comprimento total de dipolo e para o monopolo (`lambda/4 x 0,95`). Valores arredondados.

| Frequência | Uso típico | lambda | Dipolo `lambda/2 x 0,95` | Monopolo `lambda/4 x 0,95` |
|---|---|---|---|---|
| 7,1 MHz | Radioamador, 40 m | 42,3 m | 20,1 m (cada braço 10,0 m) | 10,0 m |
| 146 MHz | Radioamador, 2 m (VHF) | 2,05 m | 97,6 cm | 48,8 cm |
| 433 MHz | ISM, controles, LoRa (Ásia/EU e outros) | 69,3 cm | 32,9 cm | 16,4 cm |
| 868 MHz | LoRa Europa | 34,6 cm | 16,4 cm | 8,2 cm |
| 915 MHz | LoRa Américas, ISM | 32,8 cm | 15,6 cm | 7,8 cm |
| 2,45 GHz | Wi-Fi, Bluetooth | 12,2 cm | 5,8 cm | 2,9 cm |

Cálculo do 146 MHz, passo a passo: `lambda = 300 / 146 = 2,055 m`. `lambda/4 = 0,514 m`. Vezes `k`: `0,514 x 0,95 = 0,488 m = 48,8 cm`. É por isso que "chicote" de rádio VHF tem meio metro e a antena de um módulo LoRa em 915 MHz tem uns 8 cm.

Note a escala: em 7 MHz uma antena faz 20 m e exige um quintal; em 2,4 GHz cabe em uma unha. Frequência mais alta, antena menor, esse é o motivo de dispositivos modernos terem antena embutida.

### Fator de velocidade em cabos

O `k` acima é sobre antenas. Há outro fator parecido: o **fator de velocidade** (`VF`) de um cabo. Dentro de um cabo, a onda anda mais devagar que no ar, pois o isolante (dielétrico) a retarda. `VF = 0,66` significa que a onda anda a 66% de `c`, logo o comprimento de onda no cabo é 66% do do ar. O polietileno sólido dá `VF` de cerca de 0,66 e espumado de 0,78 a 0,88 (Wikipedia, Coaxial cable; valores por modelo: RG-58 e RG-213 0,66, LMR-400 0,85). Quando alguém corta um cabo em "meia onda elétrica" (para casar impedâncias ou fazer um balun), o comprimento é `VF x lambda / 2`. Exemplo em 146 MHz com `VF = 0,66`: `0,66 x 2,055 / 2 = 67,8 cm`. Dois fatores diferentes para dois fenômenos diferentes: `k` corrige o efeito de ponta da antena; `VF` descreve a velocidade dentro do cabo.

## Antenas pequenas: por que são ineficientes

E se a antena precisa caber num aparelho e é menor que `lambda/4`? Ela pode ser sintonizada (com uma bobina, ver antena de borracha na Aula 5), mas há um preço. A parte da resistência que efetivamente irradia é a **resistência de radiação** (`Rr`); a que aquece o metal, a **resistência de perda**. A eficiência é `Rr / (Rr + Rperda)`. Para um dipolo curto de comprimento total `L`, `Rr` cai com o quadrado do comprimento: aproximadamente `Rr = 20 x pi^2 x (L/lambda)^2`, ou seja, cerca de 2 ohms quando `L = 0,1 lambda`. As perdas (no fio, na bobina, no solo) continuam na casa de algumas frações de ohm a alguns ohms, e passam a competir com a radiação. Antena pequena tem largura de banda estreita e eficiência baixa: é uma lei física, não defeito de fabricante.

## Resumo

- Uma antena converte onda guiada (no cabo) em onda livre (no espaço) e vice-versa; é recíproca.
- Cargas aceleradas irradiam; numa linha de transmissão os campos se cancelam por causa das correntes opostas, e na antena a geometria "aberta" impede o cancelamento.
- Ressonância: o fio reflete a onda na ponta e a onda estacionária resultante reforça a corrente; na frequência de ressonância a reatância é zero.
- Dipolo de meia onda: corrente máxima no centro (73 ohms), tensão máxima nas pontas. Monopolo de um quarto de onda: usa um plano condutor como espelho.
- Comprimento prático: `lambda = 300 / f (MHz)`; dipolo = `143 / f` metros; monopolo = metade. Sempre um ponto de partida a ser ajustado por medição.
- Cabo tem fator de velocidade (0,66 a 0,88); antena tem fator de encurtamento (0,94 a 0,98). Não confunda.
- Antena muito menor que `lambda` é ineficiente e de banda estreita.

## Para aprofundar

- [ ] [Introduction to Antenna Theory for Ham Radio Beginners!](https://www.youtube.com/watch?v=7dBKfGwlqdU) (TheSmokinApe Ham Radio): introdução em vídeo à relação entre frequência, comprimento de onda e tamanho da antena (título e canal confirmados; o conteúdo do vídeo não foi assistido).
- [ ] [Dipole antenna](https://en.wikipedia.org/wiki/Dipole_antenna) (Wikipedia): resistência de radiação, fator de encurtamento e a fórmula do comprimento.

[Próxima aula: Impedância, casamento e SWR](./02%20-%20Impedancia%20Casamento%20e%20SWR.md)
