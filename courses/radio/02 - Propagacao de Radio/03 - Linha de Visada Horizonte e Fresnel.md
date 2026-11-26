# Aula 3: Linha de visada, horizonte de rádio, altura da antena e zona de Fresnel

[Voltar ao módulo](./README.md)

*Pergunta que esta aula responde: até onde dois rádios em VHF, UHF ou micro-ondas conseguem se comunicar, e por que "enxergar" o outro lado não basta?*

## Por que isso existe

Acima de cerca de 30 MHz a onda não segue o solo nem volta da ionosfera (Aula 1). Sobra a linha reta. Duas perguntas práticas decidem se o enlace fecha: (1) a Terra curva esconde o outro lado? (2) o caminho está livre não só na linha, mas numa região em volta dela? A resposta à segunda é a **zona de Fresnel**, e ela explica por que obstruir "só um pouquinho" já derruba o sinal.

## Parte A: o horizonte de rádio

### Geometria pura

A Terra tem raio `R` = 6.371 km. Uma antena a altura `h` acima de uma superfície esférica enxerga até o ponto de tangência. Pelo teorema de Pitágoras, a distância até o horizonte geométrico é `d = raiz(2 x R x h)` (para `h` muito menor que `R`). Com `h` em metros e `d` em km:

`d = raiz(2 x 6371 x h / 1000) = raiz(12,742 x h) = 3,57 x raiz(h)`

Antena a 10 m: `3,57 x 3,16 = 11,3 km`.

### Por que o horizonte de rádio é maior: refração atmosférica

O ar é mais denso perto do solo; o índice de refração `n` diminui com a altura (Aula 7 detalha). Pela lei de Snell (Aula 1), o raio curva levemente para baixo, seguindo mais a Terra do que a luz reta. O truque padrão é fingir que a onda viaja em linha reta e a Terra é maior: raio efetivo `Re = k x R`, com **fator k = 4/3** para atmosfera "padrão" (a ITU-R P.453 trata do índice de refração de rádio; é a convenção usada no planejamento de enlaces). Então:

**`d(km) = 4,12 x raiz(h em m)`** (horizonte de rádio de uma antena)

Para um enlace entre duas antenas com alturas `h1` e `h2`, os horizontes somam:

**`d_max(km) = 4,12 x (raiz(h1) + raiz(h2))`**

Isso vale para uma Terra lisa (mar, planície). Com morros no caminho, use os simuladores da Aula 9.

### Exemplos resolvidos

1. **Dois rádios de mão, antenas a 2 m (na altura da cabeça):** `4,12 x (1,414 + 1,414) = 11,7 km`. Em terreno plano, é o teto teórico, mesmo com potência enorme. Na prática, obstáculos reduzem para 1 a 5 km.
2. **Nó em mastro de 10 m falando com um handheld a 2 m:** `4,12 x (3,162 + 1,414) = 18,9 km`.
3. **Repetidora num morro a 500 m, mastro do outro lado a 10 m:** `4,12 x (22,36 + 3,16) = 105 km`. Altura da antena é o recurso mais barato de alcance que existe.
4. **Dois morros, 500 m cada:** `4,12 x (22,36 + 22,36) = 184 km`. É essa geometria (topo a topo) que permite enlaces de longuíssima distância em UHF e micro-ondas.
5. **Avião a 10.000 m falando com solo a 5 m:** `4,12 x (100 + 2,24) = 421 km`. É por isso que comunicação aeronáutica em VHF alcança centenas de km.

### Altura importa mais que potência

Como o alcance vai com `raiz(h)`, quadruplicar a altura dobra o horizonte. Já a potência: dobrar de 1 W para 2 W dá 3 dB, que em espaço livre aumenta o alcance de sinal em `10^(3/20) = 1,41 vezes`, mas não move o horizonte. Se o horizonte é o limite, a potência não ajuda. Altura ajuda em três frentes: distancia ao horizonte, menos obstrução e Fresnel mais limpa.

### Variação do fator k

Em dias de forte inversão térmica, `k` pode passar de 4/3 e o horizonte cresce (super-refração, Aula 7). Em atmosfera com gradiente contrário (sub-refração), `k` cai (por exemplo, 2/3 em condições ruins) e a Terra "sobe", escondendo o caminho. Projetos sérios de micro-ondas dimensionam para o `k` mínimo esperado na região.

## Parte B: a zona de Fresnel

### O problema

Você trata a onda como um raio fino? Errado: a energia viaja por um "tubo" ao redor da linha reta entre as antenas. O princípio de Huygens (Aula 1) diz que cada ponto do espaço é fonte secundária. O que chega ao RX é a soma (com fases) de todos os caminhos possíveis, não só o direto.

Considere caminhos que tocam um ponto fora da linha reta. O caminho desviado é um pouco mais comprido que o direto. Se a diferença for de meio comprimento de onda (`lambda / 2`), a onda desviada chega em oposição de fase à direta (defasagem de 180 graus, Módulo 1) e **subtrai**. Se for de um `lambda` inteiro, soma. As superfícies onde a diferença de caminho é `n x lambda / 2` são elipsoides com focos nas duas antenas: os **elipsoides de Fresnel** (Augustin Fresnel, óptica, século XIX).

- **Primeira zona de Fresnel (F1):** contém os caminhos cuja diferença de caminho vai até `lambda / 2`. É o "tubo" onde a energia que contribui de forma construtiva está concentrada. Cerca de 50% da energia recebida passa por dentro dela (valor usual na literatura).
- Zonas seguintes (F2, F3...) alternam: uma soma, outra subtrai.

### Raio da primeira zona

Num ponto do caminho a `d1` de uma antena e `d2` da outra (distâncias em km), com `d = d1 + d2` e frequência `f` em GHz, o raio da enésima zona é:

**`r_n(m) = 17,32 x raiz(n x d1 x d2 / (f x d))`**

(equivalente a `raiz(n x lambda x d1 x d2 / d)` em metros; a constante 17,32 vem das conversões de unidade). O raio é máximo no meio do caminho, onde `d1 = d2 = d/2`, e vai a zero nas antenas.

### Exemplo resolvido: 10 km, no meio do caminho (d1 = d2 = 5 km)

| Frequência | r1 (F1) | 60% de r1 |
|---|---|---|
| 433 MHz (0,433 GHz) | 17,32 x raiz(25/4,33) = **41,6 m** | 25,0 m |
| 915 MHz (0,915 GHz) | 17,32 x raiz(25/9,15) = **28,6 m** | 17,2 m |
| 2,4 GHz | 17,32 x raiz(25/24) = **17,7 m** | 10,6 m |

Confirme o do meio: `lambda` a 915 MHz = 0,3277 m; `raiz(0,3277 x 5000 x 5000 / 10000) = raiz(819) = 28,6 m`. Igual.

Leitura: a 915 MHz, num enlace de 10 km, precisa de um tubo de cerca de 57 m de diâmetro (dois raios) livre no meio. Uma antena com 2 m de altura passando sobre um terreno plano já invade essa zona. Frequência menor, zona maior: 433 MHz precisa de mais espaço livre que 2,4 GHz.

### Regra de projeto

- **F1 com 60% livre:** critério clássico de projeto. Com pelo menos 60% do raio da F1 desobstruído, a perda adicional é desprezível, próxima de zero em relação ao espaço livre.
- **Obstrução de 40% ou mais** (ou seja, pico invadindo mais que 40% da F1): a perda começa a subir de forma perceptível. 
- **Linha de visada tocando o pico (rasante):** a perda é de cerca de 6 dB acima do espaço livre.

### Por que obstruir "um pouco" derruba o sinal

Um ponto que costuma surpreender: o obstáculo não precisa estar na linha reta. Basta cortar parte das zonas de Fresnel. Ao remover parte da F1, você remove parte dos caminhos que somavam construtivamente. E, se o obstáculo deixa passar só o anel da F2 (que subtrai), o resultado pode ser pior que o esperado. Por isso, o sinal oscila (sobe e desce) enquanto a obstrução aumenta lentamente.

### Perda por difração numa quina: o modelo "gume de faca"

O modelo mais simples de obstáculo é uma **quina fina** (gume de faca, knife-edge) a altura `h` acima da linha de visada (`h` positivo = quina acima da linha, obstruindo). Definimos o parâmetro adimensional:

`v = h x raiz(2 x (d1 + d2) / (lambda x d1 x d2))`

Ele é `raiz(2) x h / r1`. A aproximação clássica da perda por difração, válida para `v > -0,78` (recomendação ITU-R P.526 traz o método completo; a versão em vigor na consulta foi a P.526-16, de 11/2025, verificado em setembro de 2026):

`J(v) = 6,9 + 20 x log10(raiz((v - 0,1)^2 + 1) + v - 0,1)  (dB)`

Valores calculados com essa fórmula:

| Posição da quina em relação à F1 | v | Perda extra |
|---|---|---|
| 60% de F1 livre abaixo da linha (h = -0,6 x r1) | -0,85 | aprox. 0 dB |
| Tocando a linha (h = 0) | 0 | 6,0 dB |
| Acima da linha, h = 0,5 x r1 | 0,71 | 11,9 dB |
| Acima da linha, h = r1 | 1,41 | 16,3 dB |
| Acima da linha, h = 1,7 x r1 | 2,4 | 20,5 dB |

(Para `v` abaixo de -0,78 use zero.) Note a assimetria: deitar um pouco a linha sobre o obstáculo já custa 6 dB; entrar mais custa 10 a 20 dB. Isso é a difração funcionando: sombra existe, mas não é uma parede preta; quanto menor o `lambda`, maior o `v` para o mesmo `h`, e mais escura a sombra.

**Aplicação prática:** o sinal a 915 MHz que atravessa a aresta de um morro terá menos perda que o de 2,4 GHz com a mesma geometria, porque `lambda` é maior. Perdas acima de 20 a 30 dB por um único obstáculo já matam enlaces de baixa potência.

### E se o obstáculo não for uma quina?

Morros arredondados, prédios e vegetação densa dão perdas maiores que o gume de faca. Múltiplos obstáculos somam perdas por métodos como Deygout ou Epstein-Peterson (existem e são usados em simuladores; não os detalhamos aqui). Os simuladores da Aula 9 já fazem isso a partir do perfil do terreno.

## Ligação com a difração e a frequência

Voltando à Aula 1: a difração melhora com `lambda` grande. A Fresnel quantifica isso: a mesma quina produz `v` menor (sombra mais rasa) em frequência menor. É por isso que VHF em 150 MHz atravessa cidades melhor que 2,4 GHz, ainda que pague mais espaço para sua F1.

## Resumo

- Horizonte de rádio: `d(km) = 4,12 x raiz(h em m)` por antena (com k = 4/3); soma-se `raiz(h1) + raiz(h2)` para um enlace. Altura vale mais que potência.
- Duas antenas a 2 m: cerca de 12 km em terreno plano; morro a 500 m: mais de 100 km.
- A energia vive num elipsoide (zona de Fresnel), não numa linha; `r1 = 17,32 x raiz(d1 x d2 / (f x d))` em m, com d em km e f em GHz.
- Projeto pede 60% de F1 livre. Rasante = 6 dB; invadir a F1 acima da linha custa 12 a 20 dB.
- Frequência menor tem F1 maior (mais espaço livre necessário) mas difração melhor.

## Para aprofundar

- [ ] [VHF/UHF HT Maximum Achievable Range - Part 2: Understanding Line of Sight & Horizon](https://www.youtube.com/watch?v=mMLRuWPLrfw) (título do vídeo): pelo título, explica linha de visada e horizonte para rádios de mão; não assisti, então não afirmo os números que ele usa.
- [ ] [ITU-R P.526: Propagation by diffraction](https://www.itu.int/rec/R-REC-P.526/en) (ITU): a norma de referência para difração, incluindo gume de faca; a página mostra a versão em vigor.

[Próxima aula: Multipercurso, fading e absorção](./04%20-%20Multipercurso%20Fading%20e%20Absorcao.md)
