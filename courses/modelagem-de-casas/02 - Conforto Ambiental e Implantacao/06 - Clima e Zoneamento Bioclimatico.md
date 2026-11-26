# Aula 6: Clima e Zoneamento Bioclimático Brasileiro

[Voltar ao módulo](./README.md)

*Pergunta que esta aula responde: por que a mesma casa não serve em Curitiba e em Belém, e como a norma brasileira transforma o clima de cada cidade em diretrizes de projeto?*

## O problema: um país, muitos climas

Tudo o que você viu (sol, massa térmica, ventilação, chuva) tem peso diferente conforme o clima. Em Curitiba você quer sol de inverno entrando e paredes que retenham calor. Em Belém você quer sombra, vento e nada de massa. Aplicar a mesma receita a todo o país erra nos dois.

O clima brasileiro varia por **latitude** (mais ao sul, invernos mais frios e maior diferença entre estações), **altitude** (mais alto, mais frio), **proximidade do mar ou da floresta** (umidade, temperaturas mais estáveis) e **continentalidade** (interior seco tem noites frias e tardes quentes, a chamada grande amplitude térmica diária). São razões gerais de climatologia; a norma abaixo é quem as converte em número.

**Arquitetura bioclimática** é projetar usando o clima local a favor do conforto, reduzindo dependência de ar-condicionado e aquecedor. O **zoneamento bioclimático** é a divisão do território em zonas de clima parecido, cada uma com estratégias de projeto recomendadas.

## A ferramenta por trás: carta bioclimática

Para saber que estratégia serve a um clima, usa-se a **carta bioclimática** (de Givoni, base da norma): um gráfico com temperatura e umidade do ar. Marcam-se nele as condições típicas do lugar mês a mês; a região em que cada ponto cai indica a estratégia que traz aquela condição de volta ao conforto. A NBR 15220-3 codifica as estratégias com letras. As que aparecem nas tabelas da norma de 2005:

| Letra | Estratégia (resumo do texto da norma) |
|---|---|
| A | Aquecimento artificial necessário. |
| B | Aquecimento solar da edificação (forma, orientação, implantação, vidros voltados ao sol, cor externa). |
| C | Vedações internas pesadas (inércia térmica) para manter o interior aquecido. |
| D, E | Zona de conforto térmico (D a baixas umidades). |
| F | Desumidificação dos ambientes por renovação do ar (ventilação). |
| G, H | Resfriamento evaporativo (vegetação, fontes de água) em clima quente e seco. |
| H, I | Massa térmica para resfriamento: parede e cobertura pesadas guardam calor de dia e o devolvem à noite. |
| I, J | Ventilação cruzada. |
| K | Resfriamento artificial necessário. |
| L | Umidificação do ar (ar muito seco a 21 a 30 graus). |

## A NBR 15220-3: zoneamento por norma

A **NBR 15220** é a norma brasileira de desempenho térmico de edificações. A **Parte 3** trata do zoneamento bioclimático brasileiro e de diretrizes construtivas para habitações unifamiliares de interesse social. Ela existe em duas gerações:

### Versão de 2005: 8 zonas

A norma de 2005 dividiu o Brasil em **8 zonas bioclimáticas** e classificou **330 cidades** (anexo A da norma). Cada zona tem uma tabela com: tamanho das aberturas para ventilação, se se deve sombrear ou permitir sol, tipo de vedação externa e estratégias passivas de verão e inverno. Ela é a versão que aparece em quase todo material didático e ainda serve para aprender a lógica.

| Zona | Cidades (anexo A) | Aberturas | Sol nas aberturas | Parede | Cobertura | Estratégias |
|---|---|---|---|---|---|---|
| 1 | Curitiba, Caxias do Sul, Lages | médias | permitir sol no período frio | leve | leve isolada | inverno: B, C (insuficiente nos meses mais frios) |
| 2 | Ponta Grossa, Bagé, Itajubá | médias | permitir sol no inverno | leve | leve isolada | verão: J; inverno: B, C |
| 3 | Florianópolis, São Paulo, Porto Alegre, Belo Horizonte, Campinas | médias | permitir sol no inverno | leve refletora | leve isolada | verão: J; inverno: B, C |
| 4 | Brasília, Ribeirão Preto | médias | sombrear | pesada | leve isolada | verão: H, J (seletiva); inverno: B, C |
| 5 | Santos, Garanhuns, Governador Valadares | médias | sombrear | leve refletora | leve isolada | verão: J; inverno: C |
| 6 | Goiânia, Campo Grande | médias | sombrear | pesada | leve isolada | verão: H, J (seletiva); inverno: C |
| 7 | Picos, Cuiabá, Teresina | pequenas | sombrear | pesada | pesada | verão: H, J (seletiva) |
| 8 | Belém, Manaus, Rio de Janeiro, Salvador, Fortaleza, Recife | grandes | sombrear | leve refletora | leve refletora | verão: J (cruzada permanente), insuficiente nas horas mais quentes |

(Cidades e zonas conferidas na lista do anexo A e nas tabelas 1 a 24 do texto de 2005. Com a revisão de 2024, a classificação de cada cidade pode ter mudado; ver adiante.)

Como ler: a Zona 8 (quente e úmida) pede aberturas grandes, sombra permanente, ventilação cruzada permanente, paredes e telhado leves e refletores, exatamente o oposto da Zona 1. Na Zona 7 (quente e seco, noites mais frescas), aberturas pequenas, sombra e massa pesada em parede e telhado para amortecer e atrasar o calor (aula 3). Em climas de meia estação (3, 5), a receita mistura ventilação no verão e ganho de sol no inverno.

**Definições de vedação (anexo C, texto de 2005)**, sempre em três números (transmitância U em W/m2.K, atraso térmico em horas, fator solar FSo em %):

| Tipo | U | Atraso | FSo |
|---|---|---|---|
| Parede leve | 3,00 ou menos | 4,3 h ou menos | 5,0% ou menos |
| Parede leve refletora | 3,60 ou menos | 4,3 h ou menos | 4,0% ou menos |
| Parede pesada | 2,20 ou menos | 6,5 h ou mais | 3,5% ou menos |
| Cobertura leve isolada | 2,00 ou menos | 3,3 h ou menos | 6,5% ou menos |
| Cobertura leve refletora | 2,30 x FT ou menos | 3,3 h ou menos | 6,5% ou menos |
| Cobertura pesada | 2,00 ou menos | 6,5 h ou mais | 6,5% ou menos |

("Refletora" é um elemento de cor clara ou superfície que reflete, o que reduz o fator solar; FT é um fator de correção para coberturas ventiladas na Zona 8. Reveja na aula 3 o que U, atraso e fator solar significam.)

### Versão de 2024: 12 zonas

Segundo o LabEEE/UFSC e o portal de normalização em eficiência energética, a **revisão da NBR 15220-3 foi publicada em 3 de dezembro de 2024**. Mudanças confirmadas nas fontes consultadas:

- O zoneamento passou de **8 para 12 zonas**. Há seis zonas principais (ZB 01, muito fria, a ZB 06, muito quente), e as subdivisões são feitas por carga térmica de aquecimento (para as mais frias) e por umidade relativa (para as demais).
- O método mudou: em vez de só carta bioclimática, a revisão usa **simulações de desempenho térmico** e indicadores como a **porcentagem de horas ocupadas em faixa de temperatura operativa** (PHFT), as **cargas térmicas de resfriamento e aquecimento** (CgTR, CgTA) e as **horas de umidade abaixo de 30% ou acima de 70%**.
- A base de clima são **298 arquivos climáticos** (TMYx, período 2007 a 2021), com dados de reanálise (ERA5-Land, NASA-POWER, CRU) que permitem classificar todos os **5.570 municípios**.
- A norma abrange residências (unifamiliares e multifamiliares) e edificações não residenciais e não industriais.

**O que não consegui confirmar**: o nome, os limites e as diretrizes detalhadas de cada uma das 12 zonas novas, e como cada cidade da tabela acima foi reclassificada. Para o seu município, consulte a página do LabEEE (mapa interativo e listas de cidades) e a norma vigente. Uma fonte de mercado (CBCS) alerta que o zoneamento é **ponto de partida**, que exige adaptação local e simulação.

**Como usar na prática, mesmo sem a tabela nova em mãos**:

1. Identifique a sua cidade na lista do LabEEE e a zona correspondente.
2. Leia a lógica: zona fria pede sol e retenção; zona quente e úmida pede sombra, vento e leveza; zona quente e seca pede massa e ventilação noturna.
3. Confirme os limites numéricos na versão vigente da norma antes de detalhar.

## Escala menor: o microclima do seu terreno

O zoneamento é uma média de cidade ou região. O que realmente atua na sua casa é o **microclima**: o clima do terreno, alterado por altitude do lote, encosta, vegetação, vizinhos, asfalto, corpos d'água. Um lote de meia encosta ventilada e outro de fundo de vale (onde o ar frio se acumula à noite) têm climas diferentes na mesma cidade. Por isso a aula 7 vai do mapa da cidade para o lote.

## Resumo

- Clima brasileiro varia por latitude, altitude, mar e continentalidade; a receita de projeto muda com ele.
- A NBR 15220-3 (2005) tem 8 zonas com receita por zona: tamanho de abertura, sol ou sombra, tipo de parede e cobertura, estratégias de verão e inverno.
- Em resumo: fria (1 e 2) capta sol e retém calor; quente e úmida (8) sombreia, ventila e usa envelope leve; quente e seca (4, 6, 7) usa massa e ventilação seletiva.
- Revisão de dezembro de 2024: 12 zonas (6 principais, subdivididas por carga de aquecimento e umidade), calculadas por simulação com 298 arquivos climáticos; detalhes por zona não confirmados aqui.
- O zoneamento é ponto de partida; o microclima do lote refina a decisão.

## Para aprofundar

- [ ] [Zoneamento Bioclimático Brasileiro](https://labeee.ufsc.br/pt-br/zoneamentobioclimatico) (LabEEE/UFSC): fonte de referência com mapa interativo, listas de cidades e projeto de revisão em PDF. Use para achar a zona do seu município.
- [ ] [Publicado novo zoneamento bioclimático brasileiro](https://normalizacaoee.com.br/publicado-novo-zoneamento-bioclimatico-brasileiro/) (Normalização EE): resumo da revisão de 2024, com indicadores e base de dados.
- [ ] [Zoneamento bioclimático brasileiro e o conforto térmico em edificações](https://www.youtube.com/watch?v=xlw0mUh26js) (TV UFBA): título indica explicação do zoneamento. Não foi assistido.

[Próxima aula: Implantação da Casa no Terreno](./07%20-%20Implantacao%20da%20Casa%20no%20Terreno.md)
