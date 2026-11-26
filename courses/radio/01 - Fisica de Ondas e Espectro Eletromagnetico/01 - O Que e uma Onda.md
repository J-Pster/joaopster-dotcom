# Aula 1: O que é uma onda

[Voltar ao módulo](./README.md)

*Pergunta que esta aula responde: o que exatamente "viaja" quando uma onda viaja, e por que o som precisa de ar enquanto a luz atravessa o vácuo?*

## Por que começar pela onda

Rádio é comunicação a distância sem fio. Para mandar informação de A até B sem nenhum fio entre eles, alguma coisa precisa ir de A até B. A pergunta central do curso inteiro é: o que vai? A resposta curta é **energia, e não matéria**. Nenhum elétron, nenhum átomo sai da sua antena e chega na do vizinho. O que chega é um padrão de perturbação, e é isso que uma onda é. Entender esse conceito com precisão evita o erro mais comum de iniciantes: imaginar o sinal de rádio como "coisas" navegando pelo ar.

## Definição

Uma **onda** é uma perturbação que se propaga, transportando energia (e informação) de um ponto a outro **sem transportar matéria** de um ponto a outro.

Três exemplos que mostram a ideia:

- **Corda esticada.** Você balança a ponta de uma corda para cima e para baixo. Um pulso corre pela corda até a outra ponta. Cada pedaço da corda apenas sobe e desce no lugar; nenhum pedaço da corda andou da sua mão até a parede. O que andou foi o formato do pulso.
- **Onda no estádio (a "ola").** Cada torcedor levanta e senta no seu lugar. A "onda" dá a volta no estádio, mas ninguém trocou de assento.
- **Onda no mar.** Uma rolha boiando sobe e desce e pouco se desloca na horizontal, enquanto a crista passa por ela.

Analogia de programação: uma onda é como um pacote de dados atravessando uma rede. Os nós (roteadores, ou os pedaços da corda) ficam no lugar e retransmitem a perturbação para o vizinho; o que percorre a distância é a informação, não os nós. Cuidado com o limite da analogia: numa rede de pacotes o dado é copiado de nó em nó; numa onda mecânica a perturbação é passada por interação física entre vizinhos.

## Onda mecânica: precisa de um meio

Numa **onda mecânica** a perturbação é passada de vizinho para vizinho por forças entre as partículas de um **meio material** (corda, água, ar, aço). O mecanismo é sempre o mesmo: uma partícula é empurrada, empurra a vizinha, e volta ao lugar de origem por causa da força de restauração do material.

Exemplo: **som**. Um alto-falante empurra as moléculas de ar próximas, comprimindo-as. Essa região comprimida empurra a seguinte, e assim a compressão se propaga. Cada molécula só oscila em torno de uma posição média. Sem moléculas não há quem empurre quem: **som não se propaga no vácuo**. Isso não é regra arbitrária, é consequência direta do mecanismo.

Velocidades típicas, que dependem do meio (rigidez e densidade):

| Onda | Meio | Velocidade aproximada |
|---|---|---|
| Som | ar a 20 graus C | 343 m/s |
| Som | água | cerca de 1.480 m/s |
| Som | aço | cerca de 5.000 m/s |
| Onda EM (luz, rádio) | vácuo | 299.792.458 m/s |

Repare na última linha: é quase um milhão de vezes mais rápida que o som no ar, e o meio é "nenhum". A próxima aula mostra por quê.

## Onda eletromagnética: não precisa de um meio

Uma **onda eletromagnética** (onda EM) é uma perturbação de **campos elétrico e magnético**, e não de partículas de um meio. A luz do Sol atravessa cerca de 150 milhões de km de vácuo e chega aqui, o que já prova que não há meio necessário. Por isso o mesmo tipo de onda leva o sinal de uma antena de FM até o seu rádio, e também o de satélites e sondas espaciais.

Ao final do século XIX os físicos ainda supunham que devia existir um meio invisível ("éter") para a luz. Experimentos posteriores e a teoria de Maxwell (Aula 2) mostraram que não é necessário: o "meio" é o próprio campo. A Aula 2 explica esse mecanismo, aqui basta fixar a diferença de natureza:

| | Onda mecânica | Onda eletromagnética |
|---|---|---|
| O que oscila | posição/pressão de partículas do meio | campos elétrico e magnético |
| Precisa de meio material | sim | não |
| Velocidade | depende do meio, baixa | c no vácuo, muito alta |
| Exemplos | som, ondas no mar, sísmicas | rádio, Wi-Fi, luz, raios X |

Ondas EM também podem atravessar meios materiais (ar, vidro, água, paredes), mas o meio só altera velocidade e intensidade; ele não é necessário para existir a onda.

## Ondas transversais e longitudinais

Há duas geometrias, conforme a direção da oscilação em relação à direção de propagação:

- **Onda transversal:** a oscilação é perpendicular ao sentido de propagação (corda, ondas na superfície da água, **ondas eletromagnéticas**).
- **Onda longitudinal:** a oscilação é paralela ao sentido de propagação (som no ar, que são compressões e rarefações ao longo da direção em que ele anda).

Isso importa para rádio por causa da **polarização** (Aula 4): só ondas transversais têm uma direção de oscilação perpendicular que possa ser escolhida e medida. Uma onda EM é transversal, então a direção do campo elétrico pode apontar na vertical, na horizontal ou girar, e a antena receptora "enxerga" isso.

## Descrevendo uma onda com números

Para uma onda simples (senoidal) que viaja no sentido +x, a perturbação `y` em cada ponto `x` e instante `t` é:

`y(x, t) = A x sen(2 x pi x f x t - 2 x pi x x / lambda + fase0)`

Cada símbolo é uma propriedade que você vai medir e usar durante todo o curso:

- `A`: **amplitude**, o valor máximo da perturbação (Aula 4).
- `f`: **frequência**, quantas oscilações completas por segundo, em hertz (Hz). Definida na Aula 3.
- `lambda` (letra grega lambda): **comprimento de onda**, a distância espacial entre duas cristas consecutivas, em metros.
- `fase0`: **fase inicial**, o ponto do ciclo em que a onda estava em `t = 0` e `x = 0` (Aula 4).

A fórmula tem duas partes que se enxergam olhando para "congelamentos" diferentes:

- Fixe `x` e deixe `t` correr: você vê um ponto sobe-e-desce com frequência `f`. É a oscilação no tempo.
- Fixe `t` e deixe `x` correr: você vê uma senoide ao longo do espaço com período espacial `lambda`. É a foto da onda.

Mover-se com a onda significa manter constante o argumento do seno: a crista anda `lambda` de distância a cada período `T = 1/f`. Logo a velocidade de propagação é `v = lambda / T = f x lambda`. Essa é a relação fundamental da Aula 3.

## O que determina a velocidade da onda

Em toda onda, a velocidade `v` é propriedade do **meio** (e do tipo de onda), não da fonte. Se você balança a corda mais rápido, aumenta a frequência `f`, mas a velocidade continua igual e o comprimento de onda encolhe para manter `v = f x lambda`. Esse ponto é a chave da Aula 3.

Para ondas EM num material transparente, a velocidade é `v = c / n`, onde `n` é o **índice de refração** do meio (1 no vácuo). Exemplos: água tem `n` de cerca de 1,33 (luz a cerca de 225.000 km/s), vidro comum cerca de 1,5. O ar tem `n` de cerca de 1,0003, praticamente vácuo para a maior parte dos cálculos. Um cabo coaxial faz efeito parecido (fator de velocidade, Aula 3).

## Energia e intensidade

Uma onda carrega **energia**, e a energia por unidade de área e de tempo que atravessa uma superfície é a **intensidade** (potência por área, W/m2). Duas consequências práticas que voltam ao longo do curso:

- Numa onda que se espalha em todas as direções a partir de uma fonte pontual, a mesma energia se distribui em esferas cada vez maiores; a intensidade cai com o inverso do quadrado da distância. Detalhe na Aula 2.
- A intensidade é proporcional ao **quadrado da amplitude**. Dobrar a amplitude quadruplica a potência.

## Resumo

- Onda é perturbação que se propaga levando energia e informação, sem levar matéria.
- Onda mecânica (som, corda, água) precisa de meio material, porque a perturbação é passada de vizinho a vizinho; por isso som não existe no vácuo.
- Onda eletromagnética é perturbação de campos elétrico e magnético, não precisa de meio, e no vácuo viaja a 299.792.458 m/s.
- Ondas EM são transversais, o que torna a polarização possível.
- A velocidade é propriedade do meio; frequência e comprimento de onda se ajustam por `v = f x lambda`.

## Para aprofundar

- [ ] [Wave on a String (PhET)](https://phet.colorado.edu/en/simulations/wave-on-a-string) (PhET, Universidade do Colorado): simulador interativo de uma onda numa corda; permite variar amplitude e frequência e observar o efeito, útil para ver que cada ponto só sobe e desce enquanto o padrão viaja.
- [ ] [Traveling Waves: Crash Course Physics #17](https://www.youtube.com/watch?v=TfYCnOvNnFU) (CrashCourse): vídeo introdutório sobre ondas viajantes, com amplitude, comprimento de onda e frequência; confirmado só pelo título e canal, não assistido.

[Próxima aula: Campos elétricos e magnéticos e a teoria de Maxwell](./02%20-%20Campos%20e%20Maxwell.md)
