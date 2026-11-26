[Voltar ao módulo](./README.md)

# Aula 3: Partido, croqui e planta 2D

*Pergunta que esta aula responde: como transformar programa, envelope e implantação em uma planta 2D cotada e conferida, antes de abrir qualquer software 3D?*

## Por que desenhar em 2D antes de modelar

O 3D guarda a casa uma vez e gera as vistas a partir dela ([módulo 3, aula 9](../03%20-%20Desenho%20Tecnico%20Arquitetonico/09%20-%20Do%20Desenho%202D%20ao%20Modelo%203D.md)). Se você modelar sem planta, cada erro de proporção vira retrabalho de volume. Uma planta 2D é barata de mudar (uma borracha) e é o **gabarito numérico** contra o qual o modelo será conferido no fim: o modelo é aprovado quando as vistas que ele gera coincidem com o projeto (módulo 3). É a mesma prova numérica do exercício da casa de 96 m² do [módulo 9](../09%20-%20Pratica%20com%20Sweet%20Home%203D/08%20-%20Exercicio%20Guiado%20a%20Casa%20de%2096%20m2.md).

## Etapa 1: conceito, partido e três alternativas

Diferença que o [módulo 1, aula 7](../01%20-%20Fundamentos%20de%20Arquitetura%20Residencial/07%20-%20Do%20Partido%20ao%20Anteprojeto.md) fixou: **conceito** é a intenção (por exemplo, "casa aberta ao quintal, com a sala como coração"); **partido** é a decisão de organização da forma e da planta que executa a intenção, nascida do cruzamento de programa, terreno e conceito.

1. Escreva o **conceito em uma frase**.
2. Faça o **diagrama de setores e fluxos** ([módulo 1, aula 4](../01%20-%20Fundamentos%20de%20Arquitetura%20Residencial/04%20-%20Setorizacao%20e%20Fluxos.md)): bolhas de social, íntimo e serviço, com setas de acesso, de serviço e de circulação íntima, sobre o croqui de implantação da aula 2.
3. Desenhe **pelo menos três partidos** em croqui rápido (linha e retângulo, sem medida exata). Formas comuns em lote estreito: casa em linha com corredor lateral; casa em "L" abraçando o quintal; sobrado com áreas de serviço no térreo. O teste de três alternativas existe porque o primeiro partido quase nunca é o melhor.
4. Compare em uma **matriz de decisão**:

| Critério | Peso (1 a 3) | Partido A | Partido B | Partido C |
|---|---|---|---|---|
| Cabe no envelope e na área construída máxima | 3 | | | |
| Respeita orientação e ventilação da aula 2 | 3 | | | |
| Setorização e fluxos claros | 2 | | | |
| Estrutura simples (vãos moderados, alinhamento) | 2 | | | |
| Áreas molhadas agrupadas | 2 | | | |
| Preferência da família | 1 | | | |

Multiplique nota por peso, some e **justifique por escrito** a escolha. O critério mais pesado é o que elimina alternativas inviáveis.

## Etapa 2: dimensionar cada ambiente

Cada ambiente é `móveis + espaço de uso + circulação` ([módulo 1, aula 6](../01%20-%20Fundamentos%20de%20Arquitetura%20Residencial/06%20-%20Dimensionando%20Ambientes%20Mobiliario%20Portas%20e%20Janelas.md)). Refaça a conta de cada linha do programa com os móveis reais que você vai comprar. Referências de conferência (larguras mínimas, informativas; a lei é o código de obras do município):

| Ambiente | Largura mínima de referência | Circulações típicas |
|---|---|---|
| Sala de estar | 2,40 m | 0,50 m em frente ao sofá |
| Dormitório | 2,40 m (MCMV 2017) | 0,50 m entre cama e parede; 0,60 m entre camas de solteiro |
| Cozinha | 1,50 m (Anexo G) a 1,80 m (MCMV) | 0,85 m em frente à pia |
| Banheiro | 1,50 m (MCMV 2017) | 0,50 m à frente de lavatório e vaso (valor não confirmado, use 0,50 m ou mais) |
| Sala de jantar | 2,40 m | 0,75 m a partir da borda da mesa |

Portas: vão livre de **0,80 x 2,10 m**; espaço livre em frente de 1,20 m onde houver preocupação com acessibilidade. Janelas: use o **código de obras** para a fração mínima de área sobre o piso (não há valor único no país); como referência de projetos habitacionais, o MCMV 2017 fixou 1,50 m² nos quartos e 2,00 m² na sala. Pé-direito mínimo 2,50 m (2,30 m em banheiros, conforme o MCMV; confirme no código local).

Exemplo de conferência (cozinha em corredor, do módulo 1): comprimento `0,70 + 0,25 + 1,20 + 0,25 + 0,55 = 2,95 m`; largura `0,60 + 0,85 + 0,60 = 2,05 m`; área mínima `6,15 m²`, adotada em 7,2 m² com apoio de refeição.

## Etapa 3: desenhar a planta 2D

Sequência prática, em papel quadriculado, em planilha, ou em qualquer editor 2D:

1. **Grid**: adote uma malha de eixos coerente com a estrutura (módulo 4: pilares alinhados, vãos de 3 a 5 m). Decida se as cotas seguem o **eixo** ou a **face** da parede e mantenha a escolha (módulo 3, aula 9).
2. Desenhe o **contorno externo** dentro do envelope, deixando as espessuras de parede **acabada** de que a aula 4 tratará (por ora, 18 cm nas externas e 14 cm nas internas como valor provisório do módulo 4).
3. Trace as **divisórias** por setor.
4. Marque **portas** (arco de giro sem colidir com móvel ou outra porta) e **janelas** (com peitoril e largura).
5. **Cote**: cotas parciais entre eixos, cota geral e cotas de esquadrias, em metros, com duas casas. Cotas escritas valem mais que a medida no desenho (módulo 3, aula 3).
6. Escolha a **escala** de trabalho: 1:50 é usual para plantas de casa. Calcule o tamanho real de qualquer medida com `medida real = medida no desenho x denominador da escala`.
7. Desenhe os **móveis** em escala, para provar a circulação.

## Etapa 4: conferir a planta com a lista de oito verificações

O exercício do [módulo 1, aula 8](../01%20-%20Fundamentos%20de%20Arquitetura%20Residencial/08%20-%20Projetando%20a%20Organizacao%20de%20uma%20Casa%20Simples.md) confere a planta contra programa, setorização, fluxos, ergonomia, aberturas e legislação. Aqui a lista ganha mais dois itens (orientação e construtibilidade), que vêm dos módulos 2 e 4:

1. **Programa**: todos os ambientes da tabela existem, com área próxima da prevista.
2. **Setorização**: social, íntimo e serviço estão agrupados e o setor íntimo não é atravessado por visitas.
3. **Fluxos**: a cozinha liga à entrada de serviço e à sala; ninguém atravessa um quarto para chegar a outro.
4. **Ergonomia**: móveis e circulações respeitam as medidas mínimas.
5. **Aberturas**: cada ambiente de permanência tem janela; ventilação cruzada onde o clima pede.
6. **Orientação**: a matriz da aula 2 foi respeitada.
7. **Legislação**: cabe no envelope, área construída dentro do CA, permeável reservada.
8. **Construtibilidade**: sem pilar no meio da sala (adianta a aula 4).

## Etapa 5: produzir o quadro de áreas e o quadro de esquadrias

Estas duas tabelas serão o gabarito numérico do modelo.

**Quadro de áreas** (planilha com fórmulas):

| Ambiente | Largura | Comprimento | Área livre (fórmula) |
|---|---|---|---|
| Sala | 3,50 | 5,00 | `=C2*D2` |

Some por pavimento e compare com o programa. A área livre é sempre **menor** que a nominal por causa da espessura das paredes (foi a prova do módulo 9: 96,00 m² nominais contra 89,62 m² livres).

**Quadro de esquadrias** (módulo 3, aula 7): código (P1, J1), largura, altura, **peitoril**, ambiente, tipo (correr, abrir, maxim-ar) e quantidade.

## Entregável da aula 3

- Conceito em uma frase, diagrama de setores e fluxos, três croquis e a matriz de decisão com a escolha justificada.
- Planta baixa 2D cotada (com móveis), em escala.
- Quadro de áreas (com fórmulas) e quadro de esquadrias.
- Resultado das oito verificações, com o que falhou e o que foi corrigido.

## Checklist da aula 3

- [ ] O conceito cabe em uma frase e o partido decorre dele.
- [ ] Comparei pelo menos três partidos por critérios ponderados.
- [ ] Cada ambiente foi dimensionado com móveis reais e circulação, não por palpite.
- [ ] A planta está cotada, com eixo ou face definidos, e a escala confere com uma medida conhecida.
- [ ] Portas e janelas têm medidas e sentido de abertura sem colisão.
- [ ] Quadro de áreas e quadro de esquadrias existem e batem com a planta.
- [ ] As oito verificações foram feitas e as falhas, corrigidas.

## Resumo

- Planta 2D cotada é o gabarito numérico do modelo; corrigi-la é barato.
- Partido nasce de programa, terreno e conceito; teste no mínimo três e justifique a escolha.
- Ambiente = móveis + uso + circulação; use as medidas mínimas como piso, não como meta de conforto.
- A área livre é menor que a nominal por causa das paredes; isso é normal e serve de teste.
- Quadros de áreas e de esquadrias são as duas tabelas que o modelo precisa reproduzir.

[Próxima aula: Estrutura, sistema construtivo e instalações na planta](./04%20-%20Estrutura%20Sistema%20Construtivo%20e%20Instalacoes%20na%20Planta.md)
