[Voltar ao módulo](./README.md)

# Aula 1: Definir o projeto (terreno, restrições e programa)

*Pergunta que esta aula responde: quais são os três dados de entrada (terreno, regras e programa de necessidades) que precisam existir, por escrito, antes de qualquer croqui ou clique?*

> **Aviso obrigatório.** O modelo que você vai construir neste módulo é um **estudo de hobby**. Ele **não é projeto legal**: construir exige projeto aprovado na prefeitura e responsável técnico (arquiteto com RRT, engenheiro com ART). A estrutura e as instalações que aparecerem no modelo **não são projeto estrutural, elétrico nem hidráulico**. Os números de exemplo deste módulo são fictícios ou didáticos; os do seu projeto precisam vir de documentos reais.

## Por que começar por aqui

Um projeto é uma resposta a três perguntas: **o que a família precisa** (programa), **onde a casa vai ficar** (terreno) e **o que a lei permite** (restrições). Se qualquer uma das três for vaga, o modelo vira uma casa bonita que não cabe, não é aprovada ou não serve para quem mora. Foi a lógica do curso inteiro: módulo 1 (programa), módulo 6 (terreno e lei). Nesta aula você só **reúne e registra**; não desenha nada.

## Etapa 1: escolher o terreno do projeto

Há dois caminhos. Ambos são válidos; o que muda é a confiança nos números.

| Caminho | Quando usar | Cuidado |
|---|---|---|
| **Terreno real** (o seu, ou um que você pretende comprar) | Você quer que o modelo sirva de base para uma obra futura | Precisa de documentos reais (matrícula, levantamento, consulta à prefeitura). Sem eles, marque tudo como "estimado" |
| **Terreno hipotético** | Você quer praticar o método sem ter lote | Invente um lote plausível e **registre todos os parâmetros como fictícios**, para não confundir com regra de nenhuma cidade |

Se optar pelo hipotético, use o lote do módulo 6 como modelo: 10 m x 25 m (250 m²), com um desnível suave. Ele já vem com um exemplo resolvido na [aula 3 do módulo 6](../06%20-%20Terreno%20e%20Legislacao%20no%20Brasil/03%20-%20Parametros%20Urbanisticos%20com%20Exemplo%20Resolvido.md) e na [aula 5](../06%20-%20Terreno%20e%20Legislacao%20no%20Brasil/05%20-%20Como%20Analisar%20um%20Terreno%20Antes%20de%20Modelar.md). Neste módulo, ele aparece como **"lote de referência"** para os números de exemplo.

## Etapa 2: levantar o terreno

O método é o da [aula 5 do módulo 6](../06%20-%20Terreno%20e%20Legislacao%20no%20Brasil/05%20-%20Como%20Analisar%20um%20Terreno%20Antes%20de%20Modelar.md): do documento legal ao real. A ordem importa porque cada fonte responde a uma pergunta diferente ([aula 4 do módulo 6](../06%20-%20Terreno%20e%20Legislacao%20no%20Brasil/04%20-%20O%20Terreno%20Documentos%20Topografia%20e%20Restricoes.md)): a matrícula diz o que é o lote no papel; o levantamento topográfico diz o que ele é no chão.

Preencha esta **ficha do terreno** (copie para uma planilha ou caderno):

| Campo | Onde obter | Valor (lote de referência) | Seu valor |
|---|---|---|---|
| Endereço, zona, uso permitido | Consulta de viabilidade / mapa de zoneamento da prefeitura | zona residencial (fictícia) | |
| Área registrada | Matrícula | 250 m² | |
| Testada (frente) e profundidade | Levantamento topográfico (não confie no muro) | 10 m x 25 m | |
| Orientação da frente | Bússola, mapa ou carta solar | frente para o sul (fictício) | |
| Cotas do terreno e desnível | Levantamento com curvas de nível | 100,00 na frente, 102,50 nos fundos | |
| Declividade | `desnível / distância x 100` | 10% (1,80 m em 18 m dentro do envelope) | |
| Restrições especiais | Matrícula, prefeitura, condomínio | nenhuma no exemplo | |
| Infraestrutura | Conferir na rua | água, esgoto e energia na frente | |
| Vizinhos e entorno | Observação e fotos | casas nas duas divisas | |

Regra de honestidade: se um campo não tem fonte, escreva **"estimado"** ao lado. Ao final, o modelo terá um mapa claro do que é dado e do que é suposição.

## Etapa 3: levantar as restrições legais

A hierarquia (Constituição, Estatuto da Cidade, plano diretor, zoneamento, código de obras) e onde encontrar cada regra estão na [aula 2 do módulo 6](../06%20-%20Terreno%20e%20Legislacao%20no%20Brasil/02%20-%20Hierarquia%20Legal%20e%20Onde%20Achar%20as%20Regras.md). O que interessa aqui é uma **tabela de parâmetros** com a fonte de cada número.

| Parâmetro | O que limita | Valor (lote de referência) | Fonte no seu caso |
|---|---|---|---|
| Recuo frontal | distância mínima da frente | 4 m | |
| Recuos laterais | distância mínima das divisas | 1,5 m cada | |
| Recuo de fundos | distância mínima do fundo | 3 m | |
| Taxa de ocupação (TO) | projeção da casa / área do lote | 60% | |
| Coeficiente de aproveitamento (CA) | área construída total / área do lote | 1,2 | |
| Gabarito (altura máxima) | altura da edificação | 8 m | |
| Taxa de permeabilidade | área livre permeável / área do lote | 20% | |
| Vagas | mínimo de vagas cobertas ou descobertas | conforme a lei | |
| Restrições do Código Civil | janelas a 1,5 m da divisa, água do telhado no próprio lote | ver [aula 7 do módulo 6](../06%20-%20Terreno%20e%20Legislacao%20no%20Brasil/07%20-%20Acessibilidade%20e%20Vizinhanca.md) | |

Onde não há valor confirmado, escreva **"pendente: confirmar com a prefeitura"**. Os parâmetros variam por município e mudam com revisão de plano diretor; não copie os de outra cidade.

## Etapa 4: calcular o envelope e a folga

O **envelope** é o volume máximo em que a casa pode existir (aula 5 do módulo 6). Cálculo com o lote de referência:

1. Largura útil: `10,00 - 1,5 - 1,5 = 7,00 m` no papel; o módulo 6 usa 6,90 m por causa das medidas reais do levantamento (postura conservadora).
2. Profundidade útil: `25,00 - 4,00 - 3,00 = 18,00 m`.
3. Envelope em planta: `6,90 x 18,00 = 124,2 m²` (menor que os 150 m² permitidos por TO de 60%: **o menor limite vence**).
4. Área construída máxima: com CA 1,2, `1,2 x 250 = 300 m²`; mas dois pavimentos no envelope dão `2 x 124,2 = 248,4 m²`. Também vale o menor.
5. Área permeável mínima: `20% x 250 = 50 m²`.
6. Altura máxima: 8 m (conferir como o município mede em terreno inclinado).

Anote na ficha os três números que vão guiar o projeto: **projeção máxima**, **área construída máxima** e **área permeável mínima**.

## Etapa 5: escrever o programa de necessidades

O programa é a tradução das atividades da sua família em ambientes com área. O método completo está nas aulas [2](../01%20-%20Fundamentos%20de%20Arquitetura%20Residencial/02%20-%20Programa%20de%20Necessidades%20Metodo%20e%20Exemplo.md) e [3](../01%20-%20Fundamentos%20de%20Arquitetura%20Residencial/03%20-%20Preenchendo%20Sua%20Propria%20Tabela.md) do módulo 1; a planilha `TABELA PROGRAMA DE NECESSIDADES.xlsx` já está na [pasta do módulo 1](../01%20-%20Fundamentos%20de%20Arquitetura%20Residencial/README.md). Sequência resumida:

1. Liste as **atividades** (dormir, cozinhar, receber, lavar roupa, trabalhar em casa, guardar carro), não os cômodos.
2. Agrupe por **setor** (social, íntimo, serviço).
3. Para cada ambiente, defina o **mobiliário**, o **módulo mínimo** e a **área unitária**.
4. Some e aplique a **margem de 30%** (paredes, circulação) do módulo 1.
5. Classifique cada ambiente como **essencial, desejável ou luxo**.
6. Registre as **características** (ventilação, sol, vizinhança).

Exemplo ilustrativo de uma linha completa (valores fictícios, com a cozinha em corredor da [aula 6 do módulo 1](../01%20-%20Fundamentos%20de%20Arquitetura%20Residencial/06%20-%20Dimensionando%20Ambientes%20Mobiliario%20Portas%20e%20Janelas.md), que dá 7,2 m² com apoio de refeição):

| Setor | Ambiente | Mobiliário | Área unit. | Qtd | Área total | Prioridade | Características |
|---|---|---|---|---|---|---|---|
| Serviço | Cozinha | pia, fogão, geladeira, apoio | 7,2 m² | 1 | 7,2 m² | essencial | ventilação natural, junto à área de serviço, parede hidráulica |

**Prova de encaixe.** Some a coluna "área total", aplique 30% e compare com a **área construída máxima** da etapa 4. Se o programa ultrapassa o envelope, corte ambientes (luxo primeiro, depois desejáveis), nunca ergonomia. Fazer essa conta agora evita descobrir na modelagem que a casa sonhada não cabe.

## Entregável da aula 1

Uma **ficha de projeto de uma a duas páginas** contendo:

- ficha do terreno (com "estimado" onde faltar fonte);
- tabela de parâmetros legais (com "pendente" onde faltar confirmação);
- envelope calculado (projeção máxima, área construída máxima, área permeável mínima, altura);
- tabela do programa de necessidades com total e margem de 30%;
- resultado da prova de encaixe.

## Checklist da aula 1

- [ ] Decidi se o terreno é real ou hipotético e marquei isso na ficha.
- [ ] Cada medida do terreno tem fonte (matrícula, levantamento) ou está marcada como "estimado".
- [ ] Cada parâmetro legal tem fonte ou está marcado como "pendente".
- [ ] Calculei o envelope e sei qual limite venceu (TO, CA, recuo ou gabarito).
- [ ] O programa tem atividades, setores, áreas, prioridades e características.
- [ ] O programa mais 30% cabe no envelope; se não coube, cortei ambientes, não ergonomia.

## Resumo

- Antes de desenhar, registre três coisas por escrito: terreno, regras e programa.
- Cada número precisa de fonte; o que não tem fonte é "estimado" ou "pendente".
- O envelope é o volume permitido pelo **menor** de todos os limites (TO, CA, recuos, gabarito).
- A prova de encaixe (programa + 30% contra o envelope) descobre cedo se a casa cabe.
- Terreno hipotético serve para praticar, mas os parâmetros são fictícios e não valem para nenhuma cidade.

## Para aprofundar

- [ ] [Etapas do Projeto Arquitetônico na Prática com Exemplos](https://www.youtube.com/watch?v=pWUr67AIT9I) (Escola Santorini): pelo título, mostra a sequência de etapas de um projeto com exemplos, útil como mapa do capstone. Título e canal confirmados por oEmbed; conteúdo não assistido.

[Próxima aula: Estudo de implantação e conforto](./02%20-%20Estudo%20de%20Implantacao%20e%20Conforto.md)
