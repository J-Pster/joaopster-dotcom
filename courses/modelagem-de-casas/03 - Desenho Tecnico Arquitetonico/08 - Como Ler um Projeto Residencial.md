[Voltar ao módulo](./README.md)

# Aula 8: Como ler um projeto residencial, passo a passo

*Pergunta que esta aula responde: diante de um conjunto de pranchas de uma casa, em que ordem olhar cada peça, o que perguntar a cada uma e como cruzar as informações até ter a casa inteira na cabeça?*

## O problema: um projeto é lido em conjunto, não peça a peça

Cada peça (aulas 5 a 7) responde a parte das perguntas. A casa só existe na cabeça do leitor quando ele **cruza** as peças: a planta diz onde está a janela, a fachada diz como ela é vista, o corte diz a que altura, o quadro diz de quê é feita. Ler bem é seguir uma ordem que vai do geral ao particular e conferir, a cada passo, as informações repetidas.

Ordem recomendada (e a razão de cada uma):

| Passo | Peça | Pergunta | Por que agora |
|---|---|---|---|
| 1 | Folha, carimbo, lista de pranchas, legenda | O que é este documento, em que versão, com que convenções? | Sem legenda e revisão, o resto pode estar errado ou desatualizado |
| 2 | Planta de situação | Onde fica? | Contexto da cidade |
| 3 | Implantação | Como está no lote, orientação, recuos? | Contexto do terreno |
| 4 | Planta baixa | Como é a casa por dentro, na horizontal? | O centro do projeto |
| 5 | Cortes | Como é em altura? | Complementa a planta |
| 6 | Fachadas | Qual a aparência de cada lado? | Confirma o que a planta e o corte sugerem |
| 7 | Planta de cobertura | Como é o telhado e a água sai por onde? | Fecha a forma externa |
| 8 | Detalhes e quadros | Como se resolvem os pontos críticos e o que exatamente é cada esquadria/acabamento? | Especificação |
| 9 | Conferência cruzada | Tudo bate? | Detecta erros |

## O projeto de exemplo (fictício)

Para ler passo a passo é preciso ter um projeto. O abaixo é **inventado para esta aula** e resumido em texto e tabelas (ele não substitui ver plantas de verdade; veja os links no final). Todos os números são consistentes entre si, para que você possa fazer as conferências da etapa 9.

**Casa térrea de 96 m², terreno de 10 x 25 m, rua ao sul.**

```
                       NORTE (fundos do lote)
        x=0 (oeste)        x=3      x=5            x=8 (leste)
   y=12  +------J3---------+---J4---+------J5-------+
         |                 | (alta) |              |
         |     Q1          |  BWC   |     Q2       |
         |    3,0x4,0      | 2,0x4,0|   3,0x4,0    |
   y=8   +---P4------------+---P5---+-------P6------+
         |            CORREDOR 8,0 x 1,0            |
   y=7   +---P3---------------------+---------------+
         |                         P2               |
      J1 |          SALA           |   COZINHA      | J2
         |         5,0 x 5,0       |   3,0 x 5,0    |
   y=2   +---P1---------------------+---------------+
         |                VARANDA 8,0 x 2,0         |
   y=0   o                                          o
        (pilar)   SUL (frente, rua)            (pilar)
```

Esquema sem escala (as posições exatas estão nas tabelas abaixo). As paredes reais têm espessura; para simplificar, as áreas são "nominais", medidas de eixo a eixo. As áreas livres reais são um pouco menores.

**Dados do projeto (todos de exemplo):**

| Item | Valor |
|---|---|
| Terreno | 10,00 m x 25,00 m = 250 m² |
| Recuo frontal / laterais / fundos | 5,00 m / 1,00 m cada / 8,00 m (5 + 12 + 8 = 25; 1 + 8 + 1 = 10) |
| Casa | 8,00 m x 12,00 m = 96 m² de projeção |
| Taxa de ocupação | 96 / 250 = 38,4% |
| Pé-direito interno | 2,70 m |
| Nível do piso | Sala e demais cômodos +0,00; varanda -0,05; banheiro -0,02 (N.A.); terreno na frente -0,30 |
| Telhado | Duas águas, cumeeira paralela ao lado de 12 m, em x = 4,00 m; inclinação 30%; beirais de 0,60 m nas laterais leste e oeste |
| Topo da parede (apoio do telhado) | +2,90 |
| Cumeeira | +4,10 |

**Ambientes e áreas:**

| Ambiente | Dimensões (m) | Área (m²) |
|---|---|---|
| Varanda | 8,0 x 2,0 | 16,0 |
| Sala | 5,0 x 5,0 | 25,0 |
| Cozinha | 3,0 x 5,0 | 15,0 |
| Corredor | 8,0 x 1,0 | 8,0 |
| Quarto 1 | 3,0 x 4,0 | 12,0 |
| Banheiro | 2,0 x 4,0 | 8,0 |
| Quarto 2 | 3,0 x 4,0 | 12,0 |
| **Total** | | **96,0** |

**Quadro de esquadrias (exemplo):**

| Código | Onde | Largura x altura (m) | Peitoril (m) | Tipo |
|---|---|---|---|---|
| P1 | Sala, para a varanda | 0,90 x 2,10 | | Giro |
| P2 | Sala para cozinha | 0,80 x 2,10 | | Giro |
| P3 | Sala para corredor | 0,80 x 2,10 | | Giro |
| P4 | Corredor para Q1 | 0,80 x 2,10 | | Giro |
| P5 | Corredor para banheiro | 0,70 x 2,10 | | Giro |
| P6 | Corredor para Q2 | 0,80 x 2,10 | | Giro |
| J1 | Sala, parede oeste | 1,50 x 1,20 | 1,10 | Correr |
| J2 | Cozinha, parede leste | 1,20 x 1,20 | 1,10 | Correr |
| J3 | Q1, parede norte | 1,50 x 1,20 | 1,10 | Correr |
| J4 | Banheiro, parede norte | 0,60 x 0,60 | 1,80 | Basculante |
| J5 | Q2, parede norte | 1,50 x 1,20 | 1,10 | Correr |

Posições usadas pelos cortes: P1 em x 1,00 a 1,90 (parede y = 2,00); P3 em x 1,00 a 1,80 (y = 7,00); P4 em x 0,80 a 1,60 (y = 8,00); J3 em x 0,75 a 2,25 (y = 12,00); J1 em y 3,50 a 5,00 (x = 0); P2 em y 3,60 a 4,40 (x = 5,00); J2 em y 3,80 a 5,00 (x = 8,00).

**Prancha e revisão:** o conjunto tem 5 pranchas (01 situação e implantação; 02 planta baixa e quadros; 03 cortes; 04 fachadas; 05 cobertura), todas em revisão R01.

## Passo 1: folha, carimbo e legenda

Olhe primeiro o **carimbo**, no canto inferior direito (aula 7): identificação do autor, do cliente, título do desenho, escala, data, **revisão**. Se a prancha 02 estiver em R01 e a 03 em R00, os dois desenhos não são da mesma versão do projeto: você pode estar comparando planta atual com corte antigo. Depois, a **lista de pranchas** (confira se você tem todas) e a **legenda** e notas gerais acima do carimbo (as convenções desta prancha: hachuras, siglas, unidade das cotas).

No exemplo: cinco pranchas, todas R01, escalas indicadas em cada desenho. As cotas estão em metros.

## Passo 2: planta de situação

Pergunta: **onde é?** No exemplo, a rua está ao **sul** do terreno. Note o norte na planta de situação e as ruas vizinhas. Isto já lhe diz, antes de olhar a casa, qual lado do terreno recebe sol e onde ficam os vizinhos (módulo 2): a frente da casa está voltada para o **sul**, ou seja, pega pouco sol direto no hemisfério sul; os fundos, ao **norte**, recebem o sol principal.

## Passo 3: planta de implantação

Perguntas: **como a casa está no lote e o que dá para conferir?**

1. Dimensões do terreno: 10 x 25 m.
2. Posição da casa: recuo frontal de 5,00 m, laterais de 1,00 m, fundos de 8,00 m (as somas conferem com o terreno).
3. Acesso: onde entra o carro e a pessoa; no exemplo, a porta de entrada P1 leva à varanda na frente.
4. Projeção da cobertura, com beirais: 0,60 m em cada lado, deixando 0,40 m livres até a divisa (se a lei local permitir beirais a essa distância, o que varia; módulo 6).
5. Áreas permeáveis e impermeáveis, com o quadro de áreas.
6. Níveis: o terreno na frente está a -0,30 e o piso da casa a +0,00 (o piso fica 30 cm acima do terreno, o que dá degraus de acesso e protege da água).

**Conferência já possível:** taxa de ocupação = 96 / 250 = 38,4%. Se a lei local permitisse, por exemplo, no máximo 50% (valor apenas ilustrativo), o projeto estaria dentro. Você não sabe ainda qual é a lei; o que importa é que o desenho mostra os números necessários.

## Passo 4: planta baixa (7 passos da aula 5)

1. **Escala e norte**: 1:50, norte para o topo da folha.
2. **Contorno**: 8,00 x 12,00 m. Área 96 m² (quadro de áreas confirma).
3. **Acessos**: a varanda é o filtro entre a rua e a sala. A sala é o centro de distribuição: dela saem cozinha (P2) e corredor íntimo (P3).
4. **Ambientes**: setor social na frente (varanda, sala, cozinha), setor íntimo nos fundos (dois quartos e banheiro), servido pelo corredor. Reconheça a **setorização** do módulo 1: social, serviço e íntimo separados.
5. **Portas e janelas**: J3 e J5 dos quartos e J4 do banheiro dão para o **norte** (bom para o sol, módulo 2); J1 da sala no oeste (sol da tarde, requer atenção de proteção); J2 da cozinha no leste (sol da manhã). O quadro de esquadrias dá as medidas.
6. **Níveis**: varanda -0,05; banheiro -0,02; resto +0,00.
7. **Referências cruzadas**: as marcações **Corte AA** (longitudinal, norte-sul, em x = 1,45 m, atravessando P1, P3, P4 e J3) e **Corte BB** (transversal, leste-oeste, em y = 4,00 m, atravessando J1, P2 e J2).

Testes de layout que a planta permite (ligação ao módulo 1):

- O **arco de giro** de cada porta cabe sem bater no mobiliário? (P4 e P6 abrem para dentro dos quartos.)
- O **corredor** de 1,00 m de largura comporta a passagem de uma pessoa, com portas que se abrem sobre ele (P4, P5, P6 abrem para dentro dos cômodos, o que evita invadir o corredor).
- A **cozinha** de 3,0 x 5,0 tem janela para ventilação e iluminação (J2).

## Passo 5: cortes

**Corte AA (longitudinal, em x = 1,45 m, olhando para o oeste ou para o leste, conforme a seta).**

Do sul para o norte você atravessa: varanda (piso -0,05), P1 (0,90 x 2,10), sala (piso 0,00), P3, corredor, P4, quarto 1, J3 (peitoril 1,10, topo 2,30). Alturas lidas:

| Elemento | Cota (m) | Como se lê |
|---|---|---|
| Piso da varanda | -0,05 | Cota de nível na varanda |
| Piso interno | 0,00 | Referência |
| Topo das portas | +2,10 | Altura 2,10 |
| Topo da janela J3 | +2,30 | 1,10 + 1,20 |
| Forro (teto) | +2,70 | Pé-direito |
| Topo da parede | +2,90 | Apoio do telhado |
| Linha do telhado no plano do corte | +3,34 | 2,90 + 0,30 x 1,45 |

A última linha ilustra uma leitura sutil: neste corte, que corre norte-sul, o telhado aparece como uma linha **horizontal** a +3,34 (valor aproximado), porque a água cai para leste e oeste e o plano de corte está a 1,45 m da parede oeste, onde o telhado ainda está subindo (30% x 1,45 m = 0,435 m acima do topo da parede). A cumeeira (+4,10) **não aparece cortada** neste corte, e só aparece no Corte BB.

**Corte BB (transversal, em y = 4,00 m).**

Da esquerda (oeste) para a direita (leste): parede oeste com J1 (peitoril 1,10, topo 2,30), sala, parede intermediária com P2 (topo 2,10), cozinha, parede leste com J2, e o telhado em duas águas: sobe de +2,90 nas paredes até +4,10 na cumeeira em x = 4,00 m, com beirais de 0,60 m descendo até +2,72 (2,90 - 0,30 x 0,60). **A forma de "A" do telhado só aparece neste corte.**

Regras da aula 6 aplicadas: só cotas verticais, hachura ou linha grossa nas paredes e lajes cortadas, projeção da topografia natural se o terreno fosse inclinado (aqui é plano, com o degrau de -0,30 na frente).

## Passo 6: fachadas

- **Fachada sul (frente)**: 8,00 m de largura; dois pilares da varanda nos cantos; a porta P1 vista através da varanda; o telhado em triângulo com base 8,00 m, altura de 1,20 m (4,10 - 2,90) acima do topo da parede. A varanda está a -0,05, com degraus desde o terreno a -0,30.
- **Fachada norte (fundos)**: janelas J3, J5 (1,50 x 1,20) e a janela alta J4 (0,60 x 0,60, peitoril 1,80), bem menor que as outras.
- **Fachada oeste**: só J1, da sala, posicionada entre 3,50 m e 5,00 m contados a partir da frente (a fachada mostra essa distância horizontal, que precisa coincidir com a da planta baixa).
- **Fachada leste**: só J2 na região da cozinha.

**Conferência:** a janela J4 na fachada norte aparece com a metade da largura das outras? Sim (0,60 contra 1,50). Se aparecesse do mesmo tamanho, haveria erro.

## Passo 7: planta de cobertura

Vista de cima: retângulo de 8,00 x 12,00 m mais 0,60 m de beiral em cada lateral (9,20 x 12,00 m de telhado, sem beirais nas empenas frente e fundos), **cumeeira** ao centro (x = 4,00 m) e setas de escoamento para leste e oeste com **30%**. Calhas nas duas laterais, com condutores em pontos indicados. Não há espigões ou rincões, por ser um telhado simples. A água cai nas duas laterais, onde restam 0,40 m entre o beiral e a divisa; por isso a calha e os condutores precisam levar a água ao próprio terreno, sem despejar no vizinho (confira na implantação).

## Passo 8: detalhes e quadros

- **Quadro de esquadrias**: cada porta e janela com código, medidas e tipo. É a fonte para pedir as esquadrias.
- **Detalhes**: no exemplo (só como ilustração do que se pode procurar), o peitoril das janelas com pingadeira, o encontro do beiral com a calha, o degrau entre varanda e sala (5 cm) e o rebaixo do banheiro (2 cm).
- **Quadro de acabamentos**: pisos, paredes, forros de cada ambiente.

## Passo 9: conferência cruzada

A leitura cruzada é onde erros aparecem. Confira, no exemplo:

| Verificação | Peças | Resultado no exemplo |
|---|---|---|
| Largura 8,00 m | Planta baixa, fachadas sul e norte, cobertura, implantação | 8,00 em todas |
| Profundidade 12,00 m | Planta baixa, fachadas leste e oeste, implantação | 12,00 |
| Soma das áreas | Quadro de áreas x planta | 16 + 25 + 15 + 8 + 12 + 8 + 12 = 96 |
| Alturas de janela J3 | Quadro, corte AA, fachada norte | 1,50 x 1,20 com peitoril 1,10 |
| Pé-direito | Cortes AA e BB | 2,70 |
| Cumeeira | Corte BB, fachadas sul e norte (triângulo do telhado) | +4,10 |
| Sentido de escoamento | Cobertura, corte BB | Águas para leste e oeste |
| Nível do banheiro | Planta baixa, corte, detalhe | -0,02 |
| Recuos | Implantação, carimbo do lote | 5 + 12 + 8 = 25; 1 + 8 + 1 = 10 |

**Exercício de erro plantado.** Suponha que o quadro de esquadrias diga J3 = 1,20 x 1,20, mas a planta baixa, o corte AA e a fachada norte mostrem 1,50 x 1,20. Não adivinhe: três peças concordam entre si e uma diverge, o que sugere erro no quadro, mas quem decide é o projetista. Na obra, o correto é **perguntar ao responsável técnico** e registrar a resposta, porque comprar a esquadria errada custa dinheiro. Alguns projetos trazem nas notas gerais uma ordem de precedência entre peças; se existir, ela vale. Procure-a antes de supor.

## O que o projeto **não** diz (e onde está)

A leitura do projeto arquitetônico tem limite: **estrutura** (dimensões de pilares, vigas, armação, fundação), **instalações** elétricas, hidráulicas e de esgoto, e **especificações técnicas detalhadas** vêm de projetos complementares e de memoriais (a NBR 6492:2021 lista o memorial descritivo e as planilhas quantitativas entre os documentos escritos do anteprojeto e do executivo). Os módulos 4 e 5 tratam de estrutura e instalações. Um projeto arquitetônico bem lido diz **o que** e **onde**; o projeto estrutural e os de instalações dizem **como** ele se sustenta e funciona.

## Resumo

- Leia em ordem do geral ao particular: carimbo, situação, implantação, planta baixa, cortes, fachadas, cobertura, detalhes e quadros, e cruze.
- Cada peça responde a uma pergunta: onde está (situação), como está no lote (implantação), como é dentro (planta), como é em altura (corte), como é por fora (fachada), como escoa a água (cobertura), como se resolve o ponto crítico (detalhe).
- A leitura cruzada verifica medidas repetidas (largura, pé-direito, cumeeira, aberturas) e detecta erro; com discrepância, pergunte ao responsável técnico em vez de adivinhar.
- O corte longitudinal de um telhado de duas águas cuja cumeeira é paralela ao corte mostra uma linha horizontal na altura que o telhado atinge naquele plano; a forma de "A" só aparece no corte transversal.
- O projeto arquitetônico não substitui os de estrutura e instalações, tratados nos módulos 4 e 5.

## Para aprofundar

- [ ] [Leitura de planta de casa, passo a passo, Desenho Arquitetônico interpretação](https://www.youtube.com/watch?v=7qtKj0XBVts) (Markoni Heringer): leitura de uma planta de residência. Título e canal confirmados; conteúdo não assistido.
- [ ] [APRENDA A LER [PROJETO ARQUITETÔNICO] - PLANTAS BAIXAS - CORTES - FACHADAS - TUDO DE FORMA SIMPLES](https://www.youtube.com/watch?v=E5bfwutC2CI) (Juan Inácio - Edificações & Design): pelo título, percorre planta baixa, cortes e fachadas em conjunto. Conteúdo não assistido.
- [ ] [Como Ler e Interpretar um Projeto de Arquitetura](https://www.youtube.com/watch?v=K9AupEd9G3Y) (Arquiteto Leandro Amaral): terceira leitura, para comparar as explicações. Conteúdo não assistido.
- [ ] [Tipos de plantas e desenhos que compõe um projeto arquitetônico](https://sienge.com.br/blog/tipos-de-plantas-e-desenhos/) (Sienge, artigo): imagens de exemplo de todas as peças, para comparar com o texto.

[Próxima aula: Do desenho 2D ao modelo 3D](./09%20-%20Do%20Desenho%202D%20ao%20Modelo%203D.md)
