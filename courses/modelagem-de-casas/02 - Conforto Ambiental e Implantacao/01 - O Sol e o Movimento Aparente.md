# Aula 1: O Sol e o Movimento Aparente

[Voltar ao módulo](./README.md)

*Pergunta que esta aula responde: por que o sol nasce e se põe em lugares diferentes ao longo do ano, e o que isso muda para uma casa no Brasil?*

## Por que começar pelo sol

No módulo 1 você decidiu o que a casa precisa abrigar (programa, setorização, partido). Antes de posicionar esses ambientes, é preciso entender a principal fonte de calor e de luz que age sobre eles: o sol. Ele entra pelas janelas, aquece telhado e paredes e muda de posição a cada dia. Uma casa com a mesma planta pode ser agradável ou insuportável dependendo de para onde cada parede olha.

O movimento do sol não é aleatório. É geometria, e dá para prever a posição do sol em qualquer lugar, dia e hora. Esta aula explica de onde vem essa geometria; a aula 2 transforma isso em ferramenta de projeto (a carta solar).

## Mecanismo: por que o sol parece se mover

**Movimento aparente** é o movimento que o sol parece ter visto da Terra, embora quem se move seja a Terra. Dois movimentos reais produzem duas variações que você percebe:

1. **Rotação** (a Terra gira em torno do próprio eixo em cerca de 24 horas). Causa o ciclo do dia: o sol nasce a leste, sobe, cruza o ponto mais alto e se põe a oeste.
2. **Translação com eixo inclinado** (a Terra dá uma volta em torno do sol em cerca de 365 dias, com o eixo de rotação inclinado cerca de 23,4 graus em relação ao plano da órbita). Causa as estações e faz o caminho do sol no céu mudar ao longo do ano.

Se o eixo não fosse inclinado, o sol faria todo dia o mesmo caminho e não existiriam estações. A inclinação é o que faz o sol ficar mais alto no verão e mais baixo no inverno.

### Declinação solar

**Declinação solar** (símbolo δ) é o ângulo entre os raios do sol e o plano do equador terrestre. Ela varia ao longo do ano entre aproximadamente +23,4 graus e -23,4 graus:

| Data aproximada | Evento | Declinação | Para o hemisfério sul |
|---|---|---|---|
| ~21 de dezembro | solstício de dezembro | -23,4 graus | início do verão, sol mais alto e mais ao sul |
| ~20 de março | equinócio de março | 0 | início do outono |
| ~21 de junho | solstício de junho | +23,4 graus | início do inverno, sol mais baixo |
| ~22 de setembro | equinócio de setembro | 0 | início da primavera |

(As datas oscilam um ou dois dias conforme o ano.) **Solstício** é o dia em que o sol atinge o ponto mais extremo ao sul ou ao norte; **equinócio** é o dia em que a declinação é zero e o sol nasce exatamente a leste e se põe exatamente a oeste em qualquer lugar da Terra, com dia e noite de mesma duração.

Repare: no hemisfério sul, o sol vai para o extremo sul em dezembro (verão) e para o extremo norte em junho (inverno). No hemisfério norte é o contrário. Por isso, regras de orientação de livros europeus e americanos ("fachada sul é a ensolarada") **se invertem no Brasil**.

## As duas coordenadas do sol

Para dizer onde o sol está, usam-se dois ângulos:

- **Altura solar** (ou altitude, símbolo h ou α): ângulo entre a direção do sol e o plano horizontal. 0 graus é o sol no horizonte; 90 graus é o sol a pino (no zênite, sobre a sua cabeça).
- **Azimute solar** (símbolo A ou γ): ângulo horizontal medido a partir do norte geográfico, no sentido horário. Norte = 0, leste = 90, sul = 180, oeste = 270 graus. (Existem convenções diferentes, com origem no sul; a maioria dos materiais brasileiros de carta solar usa o norte como referência. Ao ler um material, confira qual convenção ele adota.)

### Fórmula da altura ao meio-dia solar

O **meio-dia solar** é o instante em que o sol cruza o plano norte-sul do lugar (é o ponto mais alto do dia). Não coincide necessariamente com 12h do relógio, porque depende da longitude e do horário de verão/fuso. Nesse instante:

```
h = 90 - |latitude - declinação|
```

Use a latitude com sinal (sul é negativo) e a declinação com sinal (como na tabela acima). O resultado está sempre entre 0 e 90 graus. A direção do sol nesse instante é norte se a declinação for maior (menos negativa) que a latitude, e sul no caso contrário.

**Exemplos resolvidos** (altura ao meio-dia solar, valores arredondados):

| Cidade (latitude) | Solstício de dezembro | Equinócios | Solstício de junho |
|---|---|---|---|
| Manaus (-3,1) | 90 - abs(-3,1+23,4) = 69,7 graus (sol ao sul) | 86,9 | 90 - abs(-3,1-23,4) = 63,5 (ao norte) |
| Brasília (-15,8) | 82,3 graus (sol ao sul) | 74,2 | 50,8 (ao norte) |
| São Paulo (-23,6) | 89,9 graus (quase a pino) | 66,4 | 43,0 |
| Porto Alegre (-30,0) | 83,4 graus (ao norte) | 60,0 | 36,6 |

Três conclusões práticas que saem dessa tabela:

1. **Quanto mais ao sul, maior a diferença entre verão e inverno.** Em Porto Alegre o sol de meio-dia varia de 36,6 a 83,4 graus (quase 47 graus de amplitude, sempre 2 x 23,4). Essa amplitude é a mesma em todas as latitudes; o que muda é o nível médio (mais baixo, quanto mais longe do equador).
2. **Nos trópicos (entre o equador e 23,4 graus S), o sol de verão pode passar ao sul de você.** Em Manaus e Brasília, ao meio-dia de dezembro o sol está ao sul do zênite: a fachada sul recebe sol direto no verão. Só ao sul do Trópico de Capricórnio (latitude de cerca de 23,4 graus S; passa perto de São Paulo) o sol de meio-dia fica ao norte o ano inteiro.
3. **No verão o sol de meio-dia está quase sobre o telhado; no inverno está baixo e entra pelas janelas ao norte.** Isso é a base de toda a estratégia de beirais (aula 2).

### Altura para qualquer hora do dia

Para outras horas, usa-se a fórmula geral:

```
sen(h) = sen(latitude) x sen(δ) + cos(latitude) x cos(δ) x cos(H)
```

`H` é o **ângulo horário**: 0 ao meio-dia solar, e 15 graus a cada hora (positivo depois do meio-dia, negativo antes; o cosseno é simétrico, então só importa o valor absoluto). Você não vai calcular isso à mão em projeto; softwares e a carta solar já fazem. Mas convém saber de onde vêm os números.

## Onde o sol nasce e se põe

Isso decide quais paredes recebem sol de manhã e à tarde. O azimute do nascer do sol (medido do norte, no hemisfério sul) segue:

```
cos(A_nascer) = sen(δ) / cos(latitude)
```

O pôr do sol é simétrico (360 menos o azimute do nascer). Para uma latitude de -23,5 graus (região de São Paulo):

- Solstício de dezembro (δ = -23,4): cos(A) = -0,398 / 0,917 = -0,434, logo A ≈ 115,7 graus. O sol nasce **ao sul do leste** (cerca de 26 graus para o sul), e se põe ao sul do oeste (A ≈ 244,3 graus).
- Equinócios: A = 90 graus. Nasce exatamente a leste.
- Solstício de junho: A ≈ 64,3 graus. Nasce **ao norte do leste** e se põe ao norte do oeste.

Consequência para as paredes:

- Fachadas **leste e oeste** recebem sol o ano todo, com o sol baixo (ângulos pequenos de altura) no começo e fim do dia. Sol baixo penetra fundo no ambiente e é difícil de bloquear com beiral horizontal.
- A fachada **sul**, no verão, recebe sol direto no começo da manhã e no fim da tarde (o sol passa "por trás" da casa, ao sul do leste-oeste). No inverno nunca recebe sol direto nas latitudes ao sul dos trópicos. Perto do equador (Manaus, Belém), recebe sol quase o ano todo em algum momento do dia.
- A fachada **norte** recebe sol o dia inteiro no inverno (sol baixo, entra fundo), e no verão, ao sul do Trópico de Capricórnio, recebe sol só em faixas de altura elevada, fácil de bloquear.
- O **telhado** (superfície horizontal) recebe o maior fluxo de radiação no verão, quando o sol está alto. É a superfície mais crítica de uma casa térrea em clima quente (aula 3).

## O caminho diário e a duração do dia

Em um dia comum, o sol descreve um arco. O arco é **maior e mais alto no verão** (dia mais longo) e **menor e mais baixo no inverno** (dia mais curto). Quanto mais longe do equador, mais a duração do dia varia ao longo do ano. Perto do equador o dia dura quase 12 horas o ano inteiro.

Isso importa por dois motivos: quanto de sol a casa recebe no dia (energia) e quando esse sol chega (a tarde quente é pior que a manhã fresca; aula 3).

## Norte verdadeiro, norte magnético e a bússola

Todos os ângulos acima usam o **norte geográfico** (a direção do polo norte da Terra). A bússola, porém, aponta o **norte magnético**, e a diferença entre os dois é a **declinação magnética**. No Brasil ela é para o oeste (negativa) e é grande: dados de 2011 indicam cerca de 20,5 graus a oeste em São Paulo e 15,9 graus a oeste em Porto Alegre, com variação de cerca de 0,1 grau por ano (fonte: Observatório Nacional, citada em material de atividade da UFOP; o valor atual do seu local deve ser consultado em calculadora do Observatório Nacional ou do NOAA).

Na prática de projeto: use o norte geográfico. Uma bússola de celular sem correção erra a orientação do lote em cerca de 15 a 22 graus, o que muda qual parede pega sol da tarde. Imagem de satélite de mapa on-line, com o norte para cima, é mais confiável que bússola para orientar um terreno.

## Ferramentas para visualizar

Ver o caminho do sol num mapa fixa a ideia melhor que texto:

- **SunCalc** (suncalc.org): mostra num mapa o arco do sol, nascer e pôr para a data escolhida e a faixa de variação ao longo do ano. Você digita o endereço do seu terreno e vê onde o sol nasce em cada estação.
- **Sun Earth Tools** (sunearthtools.com): calcula altura e azimute para qualquer local, dia e hora.

## Resumo

- O sol parece se mover por causa da rotação da Terra (dia) e da translação com eixo inclinado 23,4 graus (estações).
- A declinação solar vai de -23,4 (dezembro, sol mais ao sul) a +23,4 graus (junho, sol mais ao norte). No hemisfério sul, o verão é em dezembro e o sol de inverno vem do norte, oposto ao hemisfério norte.
- Altura ao meio-dia solar: `h = 90 - |latitude - declinação|`. Em São Paulo varia de 43 graus (junho) a quase 90 (dezembro).
- O sol nasce ao sul do leste no verão e ao norte do leste no inverno (hemisfério sul); leste e oeste recebem sol baixo o ano todo, o telhado recebe o máximo no verão, a fachada norte recebe sol baixo no inverno.
- Orientação de projeto usa o norte geográfico, não o da bússola (declinação magnética de cerca de 15 a 22 graus a oeste na maior parte do Brasil).

## Para aprofundar

- [ ] [SunCalc](https://www.suncalc.org/) (SunCalc.org): ferramenta interativa que mostra num mapa a direção do nascer, do pôr e o arco do sol para o seu terreno em qualquer data. Esta aula não substitui ver isso no seu lote.
- [ ] [Conforto Ambiental, Módulo 3 (Geometria Solar e Cartas Solares)](https://www.youtube.com/watch?v=UhTN3C0wJxQ) (Conforto e Projeto): vídeo de aula cujo título indica abordar geometria solar e cartas solares. Não foi assistido; serve como segunda explicação da geometria antes da aula 2.

[Próxima aula: Carta Solar, Orientação e Proteção Solar](./02%20-%20Carta%20Solar%20Orientacao%20e%20Protecao%20Solar.md)
