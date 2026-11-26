# Aula 3: Conforto Térmico, Materiais e Cor

[Voltar ao módulo](./README.md)

*Pergunta que esta aula responde: por que uma casa esquenta ou esfria, e como parede, telhado, isolamento e cor mudam isso?*

## Por que sentimos calor ou frio

O corpo humano em repouso produz cerca de 100 W de calor (ordem de grandeza; sentado, em atividade leve). Precisa perder esse calor na mesma taxa para manter a temperatura interna em torno de 37 graus. Se perde menos, sente calor; se perde mais, sente frio. **Conforto térmico** é o estado em que esse equilíbrio se dá sem esforço perceptível do corpo (sem suar muito, sem tremer).

O corpo perde calor por quatro caminhos (definidos aqui porque a casa mexe em todos):

- **Condução**: contato direto com uma superfície (pé no piso frio).
- **Convecção**: troca com o ar que passa pela pele. Ar parado perto de você esquenta e isola; ar em movimento leva o calor embora.
- **Radiação**: troca de calor por ondas infravermelhas com as superfícies ao redor (parede quente irradia para você; parede fria "puxa" calor do seu corpo), sem precisar de ar entre elas.
- **Evaporação**: o suor evaporando resfria a pele.

Por isso a sensação não depende só da temperatura do ar. São seis variáveis: **temperatura do ar**, **temperatura radiante média** (média das temperaturas das superfícies ao redor), **umidade relativa** (o quanto de vapor o ar contém em relação ao máximo possível à temperatura atual), **velocidade do ar**, **atividade** (quanto calor o corpo gera) e **vestimenta**. O arquiteto controla as quatro primeiras; as duas últimas dependem de quem mora.

Consequências diretas:

- Uma parede quente irradia calor mesmo com o ar a 26 graus. Conforto depende do **entorno radiante**, não só do termômetro.
- Umidade alta atrapalha a evaporação do suor: 30 graus úmidos incomodam mais que 30 secos.
- Ar em movimento (cerca de 1 m/s) compensa alguns graus de sensação de calor, por convecção e evaporação (ordem de 2 a 3 graus segundo a ordem de grandeza da literatura; depende de temperatura e umidade). É por isso que a aula 4 (ventilação) vale tanto em clima quente.
- Pessoas em casas ventiladas naturalmente se adaptam e aceitam faixas de temperatura mais amplas que em ambientes climatizados. Isso é a base do "conforto adaptativo" (não aprofundado aqui).

## Como o calor entra ou sai da casa

A casa é um envelope (paredes, telhado, piso, janelas) entre dois climas. O calor atravessa esse envelope de quatro formas:

1. **Condução através de paredes e telhado**, empurrada pela diferença de temperatura entre fora e dentro.
2. **Radiação solar** que atravessa o vidro (aula 2) e bate nas superfícies externas (que absorvem e aquecem).
3. **Ventilação**: ar que entra com a temperatura de fora.
4. **Cargas internas**: pessoas, iluminação, equipamentos, fogão.

Esta aula trata da 1 e da 2 (a 3 é a aula 4).

### Transmitância térmica (U)

A condução em regime estável, por metro quadrado, é:

```
q = U x (T_fora - T_dentro)      [W/m2]
```

**U** é a **transmitância térmica** do elemento (W/m2.K): quantos watts passam por metro quadrado para cada grau de diferença. Quanto **menor o U**, melhor o isolamento. Ele vem da soma das **resistências** térmicas das camadas. Cada camada de espessura `e` e condutividade `lambda` (W/m.K, o quanto o material conduz calor) tem resistência `R = e / lambda`; o elemento todo tem `U = 1 / (R_superficie_interna + soma dos R + R_superficie_externa)`. Uma película de ar junto a cada superfície também resiste um pouco.

Condutividades da tabela D.1 e D.2 da NBR 15220-3 (2005): concreto 1,75 W/m.K; cerâmica 0,90 a 1,05; fibrocimento 0,95; madeira 0,14; lã de vidro 0,045. A lã de vidro conduz cerca de 40 vezes menos calor que o concreto. **Isolante térmico** é material de condutividade baixa e, tipicamente, cheio de ar parado (lãs, espumas como EPS, cortiça).

### Capacidade térmica, inércia e atraso térmico

Além de deixar o calor passar, um material o **armazena**. **Capacidade térmica** (CT, kJ/m2.K) é a quantidade de calor que um metro quadrado do elemento armazena por grau de variação de temperatura. Material pesado e denso (concreto, tijolo maciço) tem CT alta; material leve (madeira fina, telha metálica) tem CT baixa.

**Inércia térmica** é a resistência de um elemento a mudar de temperatura, e vem da capacidade térmica. Ela produz dois efeitos:

- **Amortecimento**: a variação de temperatura de dentro é menor que a de fora.
- **Atraso térmico** (φ, em horas): o pico de temperatura interna chega **depois** do pico externo. Uma parede pesada pode fazer o calor das 14h chegar dentro às 22h, quando o ar de fora já esfriou e a casa pode ser ventilada.

Valores da tabela D.3 e D.4 da NBR 15220-3 (2005), para comparar:

| Elemento | U (W/m2.K) | CT (kJ/m2.K) | Atraso (h) |
|---|---|---|---|
| Parede de concreto maciço, 10 cm | 4,40 | 240 | 2,7 |
| Parede de tijolo de 6 furos quadrados, 14 cm total, com emboço | 2,48 | 159 | 3,3 |
| Cobertura de telha de fibrocimento sem forro | 4,60 | 11 | 0,2 |
| Cobertura de telha de barro sem forro | 4,55 | 18 | 0,3 |
| Cobertura de telha de fibrocimento com forro de madeira | 2,00 | 25 | 1,3 |
| Cobertura de telha de barro com laje de concreto de 20 cm | 1,84 | 458 | 8,0 |

Leia assim: a telha sem forro tem U muito alto e quase nenhuma inércia (o calor atravessa em minutos); um forro de madeira corta o U pela metade; uma laje de concreto por baixo dá o maior atraso.

**Atenção às unidades e aos contextos**: esses valores são do texto de 2005, cuja Parte 3 foi atualizada em 2024 (aula 6). Servem para entender ordens de grandeza; para projeto real, use tabelas vigentes.

### Cor e absortância

Uma superfície exposta ao sol **absorve** parte da radiação e **reflete** o resto. **Absortância solar** (α) é a fração absorvida (0 a 1). Cores claras absorvem pouco (branco em torno de 0,2, valor típico ilustrativo); cores escuras e telhas velhas absorvem muito (0,7 a 0,9, também típico). Os valores variam por fonte; as normas NBR 15220-2 e NBR 15575 trazem tabelas.

Para combinar radiação com condução, usa-se a **temperatura sol-ar** (temperatura equivalente do ar externo que produziria o mesmo aquecimento que ar + sol juntos):

```
T_sol-ar = T_ar + (alfa x I) / h_e
```

`I` é a irradiância solar na superfície (W/m2) e `h_e` é o coeficiente de troca externa (para o fluxo horizontal da NBR 15220, a resistência externa é 0,04 m2.K/W, logo `h_e` = 25 W/m2.K).

## Exemplo resolvido: o telhado

Dia quente: ar externo a 32 graus, irradiância no telhado de 800 W/m2 (sol alto, verão), ar interno a 28 graus. Compare quatro telhados (fluxo estável, simplificação):

| Telhado | α | T_sol-ar | U | q = U x (T_sol-ar - 28) |
|---|---|---|---|---|
| fibrocimento sem forro, cor escura | 0,7 | 32 + 0,7 x 800/25 = 54,4 | 4,6 | 4,6 x 26,4 = **121 W/m2** |
| fibrocimento sem forro, cor branca | 0,2 | 32 + 0,2 x 800/25 = 38,4 | 4,6 | 4,6 x 10,4 = **48 W/m2** |
| com forro de madeira, escura | 0,7 | 54,4 | 2,0 | 2,0 x 26,4 = **53 W/m2** |
| com forro de madeira, branca | 0,2 | 38,4 | 2,0 | 2,0 x 10,4 = **21 W/m2** |

Em um telhado de 60 m2, a diferença entre o pior e o melhor caso é de 7,3 kW contra 1,25 kW entrando na casa: mais de 5 vezes. Nenhum dos dois artifícios (cor clara, forro) sozinho basta em clima muito quente, mas os dois somados chegam perto de eliminar o problema. O modelo é de regime estável e superestima o pico (o atraso térmico da laje "espalharia" o calor ao longo da noite). Serve para mostrar **qual variável pesa** e em que proporção.

Isso explica a recomendação recorrente em climas quentes: **telhado é a prioridade número um** (recebe o máximo de sol, aula 1) e vem antes de paredes.

## O que fazer em cada situação

**Quando a inércia ajuda**: clima com **grande amplitude térmica diária** (dia quente e noite fresca, típico de regiões secas do interior) e possibilidade de ventilar à noite. A massa absorve calor de dia e o devolve à noite, com o ar de fora já frio. Em invernos frios com sol, paredes internas pesadas guardam o calor do sol e o liberam à noite (é a estratégia C na NBR 15220-3).

**Quando a inércia atrapalha**: clima quente e úmido com noites quentes (litoral norte, Amazônia). A massa acumula calor durante o dia e o devolve à noite, quando ninguém consegue ventilar para resfriar porque o ar de fora também está quente. Aqui prefere-se envelope leve, bem ventilado, com cobertura leve e refletora (a norma de 2005 prescreve isso para a Zona 8).

**Onde o isolamento compensa mais**: no telhado (recebe mais radiação), nas fachadas oeste e nas regiões de clima frio (para reter o calor dentro). Isolar parede em clima muito quente e úmido faz menos sentido que ventilar.

**Barreira radiante**: manta metalizada (por exemplo, alumínio sob a telha) reflete radiação infravermelha e só funciona voltada para uma camada de ar. Reduz a parcela radiante da troca no ático. Eficiência real depende da instalação (a poeira acumulada e o contato com a telha anulam o efeito); dados de desempenho variam por fabricante, não confirmados aqui.

**Outros recursos**: vegetação e sombreamento das paredes (aula 2); ático ventilado (câmara de ar entre telhado e forro com aberturas nos beirais, que ajuda a levar o calor embora); pérgolas; jardins e espelhos d'água para resfriamento evaporativo em clima seco.

## Ligação com a norma brasileira

A NBR 15220-3 (aula 6) transforma tudo isso em receita por zona bioclimática: tipo de parede (**leve**, **leve refletora**, **pesada**) e de cobertura (**leve isolada**, **leve refletora**, **pesada**), com limites de U, de atraso e de **fator solar** (parcela da radiação incidente que entra como calor pelo elemento, em %). A tabela C.2 do texto de 2005 fixa, por exemplo, para parede leve refletora `U <= 3,60`, atraso `<= 4,3 h`, fator solar `<= 4,0%`; para parede pesada `U <= 2,20`, atraso `>= 6,5 h`, fator solar `<= 3,5%`.

**Aviso de limite**: esta aula dá o raciocínio. O desempenho térmico de habitações no Brasil é regulado pela NBR 15575 (norma de desempenho) e, para simulação e comprovação, exige-se cálculo por profissional. Você entende o porquê e decide o partido; a verificação formal é trabalho de projeto profissional.

## Resumo

- Conforto vem do equilíbrio do calor do corpo, que depende de temperatura do ar, temperatura radiante, umidade, velocidade do ar, atividade e roupa. A casa controla as quatro primeiras.
- O calor entra pela condução (`q = U x delta T`), pela radiação solar e pela ventilação. Menor U, maior isolamento.
- Massa térmica (capacidade térmica) causa amortecimento e atraso. Ajuda em clima com noite fresca; atrapalha em clima quente e úmido de noites quentes.
- Cor clara reduz a absortância: no exemplo, telhado branco com forro entra com 21 W/m2 contra 121 W/m2 do escuro sem forro.
- Prioridade em clima quente: telhado, depois fachadas oeste e leste. Em clima frio: isolar e captar sol (aula 6).

## Para aprofundar

- [ ] [Conforto Ambiental Arquitetura: Isolamento Térmico Explicado](https://www.youtube.com/watch?v=RZU5uKoa3mI) (Consultoria com Marcelo Nudel): título indica explicação do isolamento térmico. Não foi assistido.
- [ ] [Conforto Ambiental Arquitetura: Inércia Térmica Explicada](https://www.youtube.com/watch?v=aWT6bk9ifww) (Consultoria com Marcelo Nudel): mesmo canal, sobre inércia. Não foi assistido.
- [ ] [NBR 15220-3 (2005), texto na página do LabEEE](https://labeee.ufsc.br/sites/default/files/publicacoes/15220_3.pdf) (LabEEE/UFSC): a norma antiga é a fonte das tabelas usadas nesta aula (anexos C e D). Referência histórica; confira a versão vigente.

[Próxima aula: Ventilação Natural](./04%20-%20Ventilacao%20Natural.md)
