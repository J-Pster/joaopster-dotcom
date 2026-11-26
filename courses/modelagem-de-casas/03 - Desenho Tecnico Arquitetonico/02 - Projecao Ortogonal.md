[Voltar ao módulo](./README.md)

# Aula 2: Projeção ortogonal, a lógica de ver um objeto 3D em vistas 2D

*Pergunta que esta aula responde: como uma casa, que é tridimensional, pode ser representada em folhas planas sem perder medidas, e por que planta, corte e fachada têm a posição e a aparência que têm?*

## O problema: papel tem duas dimensões, casa tem três

Uma folha só guarda largura e altura do desenho. Para registrar uma casa é preciso representar comprimento, largura e altura. Há duas famílias de soluções:

- **Perspectiva**: reproduz o que o olho vê. Objetos distantes ficam menores, linhas paralelas parecem convergir. É ótima para *entender* e *apresentar*, mas ninguém consegue tirar uma medida confiável dela: uma parede de 4 m pode aparecer com qualquer tamanho conforme a distância.
- **Projeção ortogonal**: abandona a aparência natural em troca de **medidas verdadeiras**. Em cada vista, tudo o que é paralelo ao papel aparece no seu tamanho real (multiplicado apenas pela escala).

O desenho técnico escolhe a segunda, porque o objetivo é construir, e construir é medir. A perspectiva entra depois, como documento complementar (a NBR 6492:2021 a lista como documento opcional no projeto executivo).

## O mecanismo: projetar é traçar retas perpendiculares ao papel

Imagine um objeto e um plano (uma "tela" de vidro) atrás dele. De cada ponto do objeto sai uma reta **perpendicular** à tela ("ortogonal" significa "em ângulo reto"). O ponto onde essa reta toca a tela é a **projeção** daquele ponto. Ligando todas as projeções, obtém-se a **vista** do objeto naquela tela.

Consequências diretas, que valem para qualquer peça do projeto:

1. **Vale a medida real nos planos paralelos à tela.** Uma parede de 4 m de comprimento vista de frente aparece com 4 m (na escala).
2. **A profundidade some.** Na vista frontal você não vê quanto o objeto se estende para trás. Essa informação vem de outra vista. Por isso é preciso mais de uma vista.
3. **Um plano perpendicular à tela vira uma linha.** Numa planta baixa, uma parede é um retângulo; no corte, a laje é uma faixa; numa fachada, o piso do térreo é apenas uma linha no chão. Isso explica por que desenhos técnicos "parecem simples": cada um só carrega o que o seu plano de projeção permite carregar.
4. **Não há perspectiva.** Duas paredes paralelas nunca convergem no desenho.

## Os diedros e como as vistas se organizam no papel

Para arrumar várias vistas numa folha, a norma usa um esquema geométrico: dois planos perpendiculares entre si, um **vertical** (a "parede") e um **horizontal** (o "chão"), dividem o espaço em quatro quadrantes, os **diedros**. O objeto é colocado num deles e projetado. Depois, os planos são "rebatidos" (girados) até ficarem no mesmo plano da folha.

A NBR 10067 (edição de 1995, que consultei) admite dois métodos:

- **1º diedro** (método europeu, o usado no Brasil no dia a dia): o objeto fica **entre o observador e o plano de projeção**. Cada vista é a "sombra" do objeto projetada na tela atrás dele.
- **3º diedro** (método americano): o plano de projeção fica **entre o observador e o objeto**, como um vidro na frente.

Cada método tem um símbolo identificador (Figuras 1 e 2 da norma), que aparece no carimbo quando necessário. No projeto de edificações brasileiro o 1º diedro é o padrão, e é o que você vai ver em todas as plantas.

### As seis vistas e onde ficam (1º diedro)

A NBR 10067 nomeia seis vistas e fixa a **vista frontal (A)** como referência. As outras ficam assim (item 4.2 da norma):

| Vista | Posição em relação à frontal |
|---|---|
| Frontal (A) | referência |
| Superior (B) | abaixo |
| Lateral esquerda (C) | à direita |
| Lateral direita (D) | à esquerda |
| Inferior (E) | acima |
| Posterior (F) | à direita ou à esquerda, conforme a conveniência |

O que parece contraintuitivo (a vista de cima ficar *embaixo* no papel, a lateral esquerda ficar à *direita*) tem uma explicação. No 1º diedro, o plano horizontal é girado para baixo até ficar no plano da folha. Como a projeção ocorre no plano que está atrás/embaixo do objeto, a imagem da vista superior aterrissa abaixo da frontal. A lateral esquerda é a imagem do objeto vista pelo lado esquerdo e projetada num plano à direita, por isso fica à direita.

Esquema em texto (1º diedro), com o objeto olhado de frente:

```
                 [ E: inferior ]
[ D: lat. dir. ] [ A: frontal  ] [ C: lat. esq. ] [ F: posterior ]
                 [ B: superior ]
```

Uma regra de bolso que evita decorar: **cada vista fica do lado oposto ao lado de onde ela foi olhada**. Quem olha o objeto pela esquerda vê a vista C e a desenha à direita da frontal.

### Quantas vistas usar

A NBR 10067 diz que devem ser executadas **tantas vistas quantas forem necessárias** para definir o objeto completamente, e que a vista principal (frontal) deve ser a que dá a melhor ideia da forma e traz o máximo de informação. Regra prática: só desenhe o que acrescenta informação. Uma peça simples pode ser definida com duas ou três vistas.

## Aplicação à arquitetura: os nomes mudam, a lógica é a mesma

Em edificações as vistas ganham nomes próprios e o papel delas se especializa:

| Nome em arquitetura | Vista de desenho técnico geral equivalente | Como é obtida |
|---|---|---|
| **Planta** (de pavimento, "planta baixa") | Vista superior | Plano secante horizontal a uma altura definida; tira-se a parte de cima e olha-se de cima |
| **Planta de cobertura** | Vista superior do telhado | Sem corte; vista de cima do conjunto, por cima da cobertura |
| **Fachadas** (norte, sul, leste, oeste, ou frontal, posterior, laterais) | Vistas frontal, posterior e laterais | Olha-se a casa de frente, de trás, de cada lado, sem corte |
| **Corte** | Vista frontal ou lateral **seccionada** | Plano secante vertical divide a casa; tira-se o pedaço mais próximo do observador e olha-se o que sobrou |

Duas diferenças em relação ao desenho de peças mecânicas:

1. **A escala de trabalho é reduzida.** Uma casa não cabe numa folha em tamanho real. A aula 3 trata disso.
2. **A "vista superior" quase nunca é sem corte.** Na peça mecânica, olha-se o objeto por cima. Na casa, olhar por cima só mostraria o telhado e esconderia os cômodos, que é o que interessa. Por isso a vista superior mais usada é a **seccional**: corta-se a casa horizontalmente e olha-se o que ficou do piso para baixo.

Como a casa é grande e as peças são muitas, a disposição dos desenhos na prancha costuma seguir a conveniência do projetista e não o arranjo rígido de seis vistas. O princípio geométrico, porém, continua: a planta é a vista superior, e a fachada e o corte compartilham com ela as mesmas coordenadas horizontais. É por isso que, na hora de desenhar, dá para transportar medidas horizontais da planta para a fachada ou o corte traçando linhas de projeção (os softwares de desenho e de modelagem fazem isso automaticamente).

## O corte: a projeção com um plano que "abre" o objeto

Numa vista comum, as partes internas ficam escondidas atrás das faces externas. Para mostrá-las, imagina-se um **plano secante** que atravessa o objeto e **remove** a parte entre ele e o observador. Olha-se, então, a face exposta.

A NBR 10067 prevê tipos de corte: **corte total** (o plano atravessa o objeto inteiro), **meio corte** (metade do objeto em corte e metade em vista, usado em peças simétricas), **corte parcial** (só uma região é aberta) e **corte composto** (o plano se desloca em degraus para pegar vários elementos). A NBR 6492:2021 acrescenta que, em edificações, o plano do corte **pode ser deslocado** onde necessário, desde que o início e o fim do deslocamento sejam assinalados de maneira precisa.

Regras que valem sempre:

- O que o plano **atravessa** (paredes, lajes, pilares, o solo) é desenhado como **material cortado**: contorno com linha grossa e, quando aplicável, hachura (padrão de traços que indica o material).
- O que está **atrás** do plano e é visível é desenhado com linha mais fina.
- O que foi removido (a parte entre o plano e o observador) **não aparece**.
- A **direção do olhar** é indicada na marcação do corte na planta (uma seta ou um lado indicado; a aula 4 mostra a simbologia).

A **planta baixa** é um corte, só que com plano **horizontal**. Ela tem o mesmo mecanismo do corte vertical; o que muda é a direção do plano. Esse é o fio condutor da aula 5.

## Exemplo resolvido: uma casinha simples nas quatro vistas

Considere uma casa térrea retangular de 8 m (largura, eixo x) por 6 m (profundidade, eixo y), paredes de 2,80 m e telhado de duas águas com cumeeira paralela ao lado de 8 m, com a cumeeira a 4,00 m do piso.

| Peça | O que aparece | Medidas reais que você consegue tirar |
|---|---|---|
| **Fachada frontal** (olhando o lado de 8 m) | Retângulo de 8 m por 2,80 m com o triângulo do telhado; janelas e porta desenhadas em posição | Largura 8 m, altura do pé-direito externo 2,80 m, cumeeira a 4,00 m; **não** dá a profundidade |
| **Fachada lateral** (olhando o lado de 6 m) | Retângulo de 6 m por 2,80 m com o telhado inclinado (aparece como uma faixa retangular acima da parede, porque a cumeeira é paralela ao lado de 8 m) | Profundidade 6 m, alturas; **não** dá a largura |
| **Planta de cobertura** (de cima) | Retângulo de 8 m por 6 m com uma linha de cumeeira ao meio (a 3 m de cada lado) e setas de caimento | Largura, profundidade, posição da cumeeira; **não** dá as alturas |
| **Planta baixa** (corte horizontal a 1,50 m) | Retângulo de 8 m por 6 m com paredes, portas, janelas, cômodos | Posição e espessura das paredes, medidas dos cômodos; **não** dá alturas |

Nenhuma peça sozinha define a casa. A combinação define. Você aprende a fazer essa síntese na aula 8 (leitura) e a automatizá-la no módulo 7 (modelo 3D).

Uma verificação prática de coerência que todo projetista faz: **medidas iguais em peças diferentes**. A largura de 8 m aparece na planta baixa, na fachada frontal e na planta de cobertura. Se num deles fosse 8,10 m, haveria erro de projeto. Essa redundância é um dos motivos pelos quais o desenho técnico consegue ser verificado.

## Por que isso importa para a modelagem 3D (módulo 7)

Um software de modelagem não "desenha" plantas e cortes. Ele guarda um modelo tridimensional e gera plantas, cortes e fachadas aplicando exatamente esta lógica: escolhe um plano, remove o que está de um lado, projeta o resto ortogonalmente. Quando você entende a projeção ortogonal, entende por que uma janela colocada errada no modelo 3D aparece errada em todas as vistas ao mesmo tempo, e por que os programas têm comandos de "seção" e "elevação" que pedem só um plano e uma direção.

## Resumo

- O desenho técnico usa projeção ortogonal (retas perpendiculares ao plano de projeção) para preservar medidas reais, trocando a aparência natural da perspectiva por exatidão.
- Em cada vista os planos paralelos ao papel aparecem em verdadeira grandeza e a profundidade desaparece, por isso são necessárias várias vistas.
- No 1º diedro (padrão brasileiro), com a frontal como referência: superior fica abaixo, inferior acima, lateral esquerda à direita, lateral direita à esquerda, posterior de qualquer lado (NBR 10067).
- Em arquitetura, planta = vista superior seccionada por plano horizontal; corte = vista seccionada por plano vertical; fachada = vista externa sem corte; cobertura = vista superior do telhado.
- Corte (NBR 10067): total, meio corte, parcial ou composto; em edificações o plano pode ser deslocado desde que o deslocamento seja marcado.
- Medidas repetidas em vistas diferentes devem coincidir; é o mecanismo de verificação do projeto.

## Para aprofundar

- [ ] [Projeções Ortogonais: Vistas Ortográficas no 1º Diedro](https://www.youtube.com/watch?v=ET2yaAm3Jnk) (Clovis Carvalho): aula sobre as vistas no 1º diedro, com a lógica dos rebatimentos. Vídeo de desenho técnico geral (peças), não de edificações; título e canal confirmados, conteúdo não assistido.
- [ ] [ABNT NBR 10067 (texto, edição de 1995, PDF hospedado pela UFPR)](https://exatas.ufpr.br/degraf-fabio/wp-content/uploads/sites/31/2017/08/NBR10067-Princ%C3%ADpios-gerais-de-representa%C3%A7%C3%A3o-em-desenho-t%C3%A9cnico.pdf) (ABNT): a fonte das seis vistas, dos dois diedros e dos tipos de corte. As figuras 3 a 5 mostram o arranjo visualmente.

[Próxima aula: Escalas e cotas](./03%20-%20Escalas%20e%20Cotas.md)
