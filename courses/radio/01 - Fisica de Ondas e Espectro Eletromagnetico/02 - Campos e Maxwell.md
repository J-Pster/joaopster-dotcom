# Aula 2: Campos elétricos e magnéticos e a teoria de Maxwell

[Voltar ao módulo](./README.md)

*Pergunta que esta aula responde: como uma perturbação de campos consegue se sustentar e viajar pelo vácuo, e por que a velocidade dela é justamente c?*

## O problema

A Aula 1 disse que a onda EM viaja sem meio material. Isso soa como magia enquanto não se define o que oscila. Esta aula define, do zero, o que são campos elétrico e magnético, e mostra o mecanismo em que um sustenta o outro. O nível é conceitual: sem cálculo, mas com os números certos.

## Campo elétrico

Partículas como o elétron e o próton têm uma propriedade chamada **carga elétrica**. Cargas de mesmo sinal se repelem e de sinais opostos se atraem, sem contato, a distância. Para descrever isso sem "ação a distância", a física usa o conceito de **campo**: uma carga modifica o espaço ao redor dela, e outra carga colocada ali sente uma força por causa dessa modificação local.

O **campo elétrico** `E` num ponto é a força que uma carga de teste sentiria ali, por unidade de carga. Unidade: volt por metro (V/m). Em cada ponto do espaço, `E` tem valor e direção. Analogia de software: o campo é uma estrutura de dados indexada por posição (uma grade 3D de vetores), e a carga é o que a escreve.

Um campo elétrico pode ser criado por:

- cargas paradas (o campo em torno de um pente eletrizado);
- um campo **magnético que varia** no tempo (veremos abaixo).

## Campo magnético

Cargas **em movimento** (corrente elétrica) criam outro campo, o **campo magnético** `B`, que age sobre outras cargas em movimento e sobre ímãs. Unidade de `B`: tesla (T). O ímã de geladeira e a agulha da bússola respondem a `B`. Em ondas EM costuma-se usar o campo `H` (A/m), proporcional a `B` no vácuo; para o nosso propósito são a mesma ideia.

Ponto-chave: `E` e `B` parecem fenômenos diferentes quando tudo está parado, mas são duas faces de uma mesma coisa (o campo eletromagnético). Quem está parado vê só `E`; quem passa correndo perto de uma carga também vê `B`. Essa unidade é o que Maxwell formalizou.

## As duas ideias de acoplamento

Considere apenas dois resultados experimentais, cada um com um nome conhecido:

1. **Lei de Faraday (1831):** um campo magnético que **varia no tempo** cria um campo elétrico circulando em volta. É o princípio de geradores e transformadores: mova um ímã perto de uma bobina e aparece tensão na bobina.
2. **Lei de Ampère (corrigida por Maxwell):** uma corrente elétrica cria um campo magnético circulando em volta. Maxwell percebeu (por volta de 1861 a 1865) que a lei estava incompleta: **um campo elétrico que varia no tempo também cria um campo magnético**, mesmo sem nenhuma carga passando. A parcela adicionada por ele foi chamada "corrente de deslocamento". Não é corrente de cargas, é o efeito de `E` variando.

O passo de Maxwell foi enxergar a simetria: `B` variando cria `E` (Faraday), e `E` variando cria `B` (Maxwell). Cada um é a "fonte" do outro, e nenhum precisa de carga para existir depois que começou.

## O mecanismo da onda: um ciclo que se autossustenta

Junte as duas ideias:

1. Uma carga é sacudida (por exemplo, elétrons subindo e descendo numa antena). Isso cria um `E` variando no espaço próximo.
2. `E` variando cria `B` variando na região vizinha (Maxwell).
3. Esse `B` variando cria `E` variando ainda mais adiante (Faraday).
4. E assim indefinidamente: `E` gera `B` que gera `E` que gera `B`, cada elo um pouco mais longe da antena.

Uma vez lançada, a perturbação **não depende mais da fonte** para continuar: cada região do espaço dá origem à seguinte. É como o efeito dominó, mas o dominó é o campo e o "empurrão" de um vizinho é a variação do outro campo. Por isso a onda EM:

- **não precisa de meio material**: o "meio" é o próprio campo, que existe no vácuo;
- continua viajando mesmo depois que a antena é desligada (o que já saiu, já saiu; uma estrela apagada há muito tempo ainda "brilha" no nosso céu por um tempo, porque a luz já estava a caminho).

A configuração resultante tem estas propriedades (na região distante da antena, ver seção abaixo):

- `E` e `B` são **perpendiculares** entre si e ambos perpendiculares à direção de propagação (por isso a onda EM é transversal);
- `E` e `B` oscilam **em fase**: sobem e descem juntos;
- a razão entre as amplitudes é fixa: `E / B = c`.

## Por que a velocidade é c

Maxwell não só propôs o acoplamento: ele calculou a velocidade com que a perturbação teria de andar. O resultado, tirado das equações, é:

`c = 1 / raiz(mu0 x epsilon0)`

onde `mu0` (permeabilidade magnética do vácuo) mede quão forte é o acoplamento de corrente a campo magnético, e `epsilon0` (permitividade elétrica do vácuo) faz o mesmo para o campo elétrico. Ambas eram conhecidas de experimentos com bobinas e capacitores, sem nenhuma relação com luz.

Exemplo numérico:

- `mu0` = 1,2566 x 10^-6 H/m
- `epsilon0` = 8,854 x 10^-12 F/m
- produto = 1,1127 x 10^-17; raiz = 3,336 x 10^-9; inverso = **2,998 x 10^8 m/s**.

Esse número bateu com a velocidade da luz já medida (a partir de astronomia e experimentos). Maxwell concluiu que **a luz é uma onda eletromagnética**, e previu que ondas de outras frequências deveriam existir. Em 1887 e 1888, Heinrich Hertz gerou e detectou ondas de rádio em laboratório, confirmando a previsão. Isso é o nascimento do rádio.

Hoje `c` tem valor **exato por definição**: 299.792.458 m/s. Desde 1983 o metro é que é definido a partir dela. Em cálculos de campo usa-se `c = 3 x 10^8 m/s`, erro menor que 0,07%.

Um ponto de honestidade: a velocidade `c` em si não é "explicada" por Maxwell no sentido de por que a natureza escolheu esse valor; o que a teoria explica é que `c` sai da combinação de duas constantes elétrica e magnética e que a velocidade é a mesma para todo observador (base da relatividade de Einstein). Não é preciso ir além disso para o curso.

## De onde vem a onda: cargas aceleradas

Uma carga parada gera só `E` estático. Uma carga em velocidade constante gera `E` e `B` que acompanham a carga, sem se desprender. **Só cargas aceleradas irradiam**: quando a carga muda de velocidade, a "notícia" da mudança viaja para fora como onda, à velocidade `c`, e o campo distante fica para trás, desligado da carga.

Isso é o que uma **antena transmissora** faz: a corrente alternada de um transmissor faz elétrons acelerarem para lá e para cá num condutor; a aceleração periódica gera a onda EM, com a mesma frequência da corrente. Na recepção, o processo inverte: o campo da onda empurra os elétrons da antena receptora e gera uma corrente minúscula, que o receptor amplifica. O módulo 4 (Antenas) detalha isso. Aqui, importa uma conclusão: **a frequência da onda é a frequência da oscilação da corrente que a gerou**.

## Campo próximo e campo distante

Perto da antena (poucos comprimentos de onda), os campos ainda estão "presos" à antena, com energia indo e voltando; é o **campo próximo**. Longe da antena (dezenas de comprimentos de onda para cima), a onda já se desprendeu e tem o formato descrito acima, o **campo distante** (ou zona de irradiação). Quase todo o cálculo de enlace de rádio assume o campo distante. A fronteira depende do tamanho da antena e do comprimento de onda; o módulo 4 dá a regra prática. A segurança de RF (Aula 8) também presta atenção especial ao campo próximo.

## Números de campo distante e a lei do inverso do quadrado

Duas relações úteis no campo distante, no vácuo (e com boa aproximação no ar):

- **Impedância do espaço livre:** `E / H = 377 ohms` (mais exatamente 376,73). É a "resistência" do vácuo à onda, análogo a `V / I` em circuito.
- **Densidade de potência:** `S = E^2 / 377` (W/m2, com `E` em V/m).

Uma fonte que irradia igualmente em todas as direções (fonte isotrópica, ideal e teórica) com potência `P` espalha a energia numa esfera de área `4 x pi x r^2`. Logo:

`S = P / (4 x pi x r^2)`

Exemplo resolvido: transmissor isotrópico de 1 W, a 10 m de distância.

- `S = 1 / (4 x pi x 10^2) = 1 / 1256,6 = 0,000796 W/m2`, ou cerca de 0,8 mW/m2.
- `E = raiz(S x 377) = raiz(0,3001) = 0,548 V/m`.

Dobrar a distância divide `S` por 4; multiplicar por 10 divide por 100. Isso explica por que sinais de rádio ficam fracos rápido (módulo 2) e por que o receptor de um enlace de 1 km recebe uma fração ínfima do que o transmissor emitiu. Atenção: isso é diluição geométrica, a energia não desaparece, só se espalha por uma esfera maior. A antena real não é isotrópica; concentrar a energia numa direção é o "ganho" (Aula 5 e módulo 4).

## Resumo

- Campo elétrico `E` (V/m) e campo magnético `B` (T) são duas faces do campo eletromagnético.
- `B` variando cria `E` (Faraday); `E` variando cria `B` (acréscimo de Maxwell). Juntos formam um ciclo que se autossustenta e anda para frente sem precisar de matéria.
- A velocidade calculada por Maxwell, `c = 1 / raiz(mu0 x epsilon0)` = 299.792.458 m/s, coincidiu com a da luz: luz é onda EM. Hertz gerou ondas de rádio em 1887 e 1888.
- Só cargas aceleradas irradiam; a frequência da onda é a da corrente na antena.
- No campo distante, `E` e `B` são perpendiculares e em fase, `E / H = 377 ohms`, e a densidade de potência de uma fonte isotrópica cai com `1 / r^2`.

## Para aprofundar

- [ ] [Maxwell's Equations: Crash Course Physics #37](https://www.youtube.com/watch?v=K40lNL3KsJ4) (CrashCourse): visão geral das quatro equações de Maxwell e do acoplamento entre `E` e `B`; confirmado só pelo título e canal, não assistido.
- [ ] [Radio Waves & Electromagnetic Fields (PhET)](https://phet.colorado.edu/en/simulations/radio-waves) (PhET, Universidade do Colorado): simulador interativo de transmissor e receptor de rádio, que permite ver os campos gerados por cargas oscilando; bom para enxergar o campo próximo e o distante. O conteúdo exato da interface não foi verificado por mim, explore livremente.

[Próxima aula: Frequência, período e comprimento de onda](./03%20-%20Frequencia%20e%20Comprimento%20de%20Onda.md)
