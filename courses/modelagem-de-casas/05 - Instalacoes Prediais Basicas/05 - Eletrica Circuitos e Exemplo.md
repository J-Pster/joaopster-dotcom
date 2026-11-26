# Aula 5: Circuitos, pontos por ambiente e um exemplo resolvido

[Voltar ao módulo](./README.md)

*Pergunta que esta aula responde: como uma planta vira uma lista de circuitos, e quantas tomadas e quanta iluminação a norma pede em cada cômodo?*

> **Aviso obrigatório.** O exemplo abaixo é **didático**, com regras simplificadas da NBR 5410 e valores de
> equipamento hipotéticos. **Não** serve para executar, comprar cabo ou montar quadro. Projeto e execução
> de elétrica exigem profissional habilitado (NR-10, NBR 5410), com responsabilidade técnica. Erros aqui
> significam choque e incêndio.

## Por que a instalação é dividida em circuitos

Um **circuito** é um conjunto de pontos (tomadas, luminárias) alimentados pelo **mesmo disjuntor**. Por que
não ligar a casa toda num circuito só?

1. **Proteção seletiva.** Se um aparelho tem defeito e o disjuntor desarma, só aquele circuito cai, não a
   casa toda (não fica no escuro por causa do ferro de passar).
2. **Limite de corrente do cabo.** Um só cabo não aguentaria a soma de tudo (Aula 4). Dividir a carga
   permite cabos e disjuntores moderados.
3. **Manutenção.** Desligar só um trecho para consertar é mais seguro e prático.
4. **Cargas potentes precisam de caminho próprio.** Chuveiro e ar-condicionado devem ter circuito exclusivo.
5. **Exigência da norma.** A NBR 5410 pede **circuitos distintos** para iluminação e tomadas, e circuitos
   separados para tomadas de cozinha, área de serviço e locais análogos, além de circuito individual
   para aparelhos de corrente elevada.

## Dois tipos de tomada

- **TUG (tomada de uso geral)**: aquela em que se ligam aparelhos móveis e pequenos (carregador, TV,
  liquidificador, abajur). Sua potência no projeto é **estimada**, porque não se sabe o que será ligado.
- **TUE (tomada de uso específico)**: destinada a **um aparelho** determinado e de potência conhecida
  (chuveiro, forno elétrico, ar-condicionado, máquina de lavar de alta potência). Recebe **circuito
  próprio** quando a corrente é alta.

## Regras mínimas de pontos por ambiente (NBR 5410)

Regras resumidas a partir de material técnico consultado (verificado em setembro de 2026); confira sempre
a norma ou um profissional. Todas se aplicam ao **mínimo**: nada impede prever mais e é recomendável.

### Tomadas de uso geral: quantidade

| Ambiente | Regra de quantidade |
|---|---|
| Salas e dormitórios | 1 ponto de tomada a cada **5 m** de perímetro (ou fração), distribuídos o mais uniformemente possível |
| Cozinha, copa, área de serviço, lavanderia e similares | 1 ponto de tomada a cada **3,5 m** de perímetro (ou fração); na cozinha, ao menos 1 acima da bancada |
| Banheiro | **pelo menos 1** ponto de tomada junto ao lavatório, com restrições de posição em relação ao chuveiro e circuito protegido por **DR** |
| Demais (varanda, corredor, garagem) | regras próprias; consulte a norma ou o projetista (não confirmei os valores nesta pesquisa) |

### Tomadas de uso geral: potência atribuída

A potência que se **assume** em cada TUG, para dimensionar o circuito:

| Ambiente | Atribuição |
|---|---|
| Cozinha, copa, área de serviço, lavanderia, banheiro | **600 VA** para cada uma das **três primeiras** tomadas, **100 VA** para as demais |
| Demais ambientes (sala, quarto etc.) | **100 VA** por tomada |

Lógica: em cozinha e área de serviço se ligam vários aparelhos de alta potência ao mesmo tempo (chaleira,
liquidificador, ferro, máquina), por isso as três primeiras tomadas valem 600 VA cada.

### Iluminação: potência mínima

Regra para a carga de iluminação de cada cômodo (potência que se **prevê** no projeto, não a das lâmpadas
que você colocar):

- Cômodo de até **6 m²**: **100 VA**.
- Cômodo maior: 100 VA para os primeiros 6 m² mais **60 VA a cada 4 m² inteiros** que excedem os 6 m².

Além disso, a NBR 5410 pede **pelo menos um ponto de luz fixo no teto** por cômodo, comandado por
interruptor (informação da prática de projeto, não confirmada em fonte aberta nesta pesquisa).

### Proteção por DR

Circuitos de tomada de **banheiro, cozinha, copa, área de serviço, lavanderia, varanda e áreas externas**,
e circuitos de locais com **chuveiro ou banheira**, exigem DR de até 30 mA (Aula 4).

### Alturas comuns (prática de projeto, não obrigação da norma)

- **Tomada baixa**: cerca de 30 cm do piso (sala, quarto).
- **Tomada média**: cerca de 110 cm (bancada de cozinha, área de serviço, lavatório).
- **Tomada alta**: cerca de 210 a 220 cm (ar-condicionado, exaustor).
- **Interruptor**: cerca de 110 cm, junto à porta, do lado da maçaneta.

Estas alturas mudam com o projeto e a acessibilidade (Módulo 1, ergonomia). Cadeirantes, por exemplo,
pedem tomadas mais altas e interruptores mais baixos.

## Método: da planta ao quadro, em 6 passos

1. **Medir** área e perímetro de cada cômodo (você já tem isso do desenho técnico, Módulo 3).
2. **Contar os pontos** de tomada pela regra do perímetro.
3. **Atribuir potência** às tomadas (600 VA ou 100 VA) e à iluminação (100 + 60 VA por 4 m²).
4. **Listar as TUEs** (chuveiro, ar-condicionado, forno etc.) com potência da etiqueta.
5. **Agrupar em circuitos** (iluminação separada de tomadas; cozinha e área de serviço separadas; TUE
   com circuito próprio), somando as potências de cada circuito e calculando a corrente `I = S / V`.
6. **Escolher** seção do cabo (não menor que 1,5 mm² para iluminação e 2,5 mm² para tomadas) e
   disjuntor (`I do circuito <= I do disjuntor <= I do cabo`), aplicando **DR** nos circuitos que exigem.

## Exemplo resolvido: casa pequena de 2 quartos

**Premissas (hipotéticas):** tensão 127 V para iluminação e tomadas, 220 V para chuveiro e ar-condicionado.
Uma sala, dois quartos, uma cozinha, um banheiro e uma área de serviço:

| Ambiente | Dimensões | Área | Perímetro |
|---|---|---|---|
| Sala | 3 x 4 m | 12 m² | 14 m |
| Quarto 1 | 3 x 3 m | 9 m² | 12 m |
| Quarto 2 | 3 x 3 m | 9 m² | 12 m |
| Cozinha | 2 x 4 m | 8 m² | 12 m |
| Banheiro | 1,8 x 2 m | 3,6 m² | 7,6 m |
| Área de serviço | 2 x 2 m | 4 m² | 8 m |

### Passo 1: número de tomadas (TUG) e potência

- **Sala**: `14 / 5 = 2,8`, arredonda para cima: **3** tomadas x 100 VA = **300 VA**.
- **Quarto 1**: `12 / 5 = 2,4`, **3** x 100 = **300 VA**.
- **Quarto 2**: igual, **300 VA**.
- **Cozinha**: `12 / 3,5 = 3,43`, **4** tomadas: 3 x 600 + 1 x 100 = **1.900 VA**.
- **Banheiro**: **1** tomada junto ao lavatório, 600 VA = **600 VA**.
- **Área de serviço**: `8 / 3,5 = 2,29`, **3** tomadas x 600 = **1.800 VA**.

### Passo 2: iluminação

- **Sala** (12 m²): 100 VA + excesso de `12 - 6 = 6 m²`, que contém 1 bloco inteiro de 4 m², logo `+60`: **160 VA**.
- **Quarto 1** (9 m²): excesso de 3 m², nenhum bloco inteiro de 4: **100 VA**.
- **Quarto 2**: **100 VA**.
- **Cozinha** (8 m²): excesso de 2 m²: **100 VA**.
- **Banheiro** (3,6 m²): **100 VA**.
- **Área de serviço** (4 m²): **100 VA**.
- **Total iluminação**: `160 + 100 + 100 + 100 + 100 + 100 = 660 VA`.

### Passo 3: TUEs (valores hipotéticos; na vida real, ler a etiqueta)

- **Chuveiro**: 5.500 W em 220 V.
- **Ar-condicionado split no quarto 1**: 1.500 VA em 220 V.

### Passo 4: circuitos, correntes, cabos e disjuntores

Correntes por `I = S / V`. Cabos e disjuntores são **valores de exemplo** coerentes com a regra
`I do circuito <= I do disjuntor <= I do cabo`; o projetista confirma por tabela de capacidade de
condução, tipo de instalação e queda de tensão.

| Circuito | Carga | Tensão | Corrente | Cabo | Disjuntor | DR 30 mA |
|---|---|---|---|---|---|---|
| 1. Iluminação (casa toda) | 660 VA | 127 V | 5,2 A | 1,5 mm² | 10 A | não exigido |
| 2. TUG sala + quartos | 900 VA | 127 V | 7,1 A | 2,5 mm² | 16 A | não exigido |
| 3. TUG cozinha | 1.900 VA | 127 V | 15,0 A | 2,5 mm² | 20 A | **sim** |
| 4. TUG área de serviço | 1.800 VA | 127 V | 14,2 A | 2,5 mm² | 20 A | **sim** |
| 5. TUG banheiro | 600 VA | 127 V | 4,7 A | 2,5 mm² | 10 A | **sim** |
| 6. TUE chuveiro | 5.500 W | 220 V | 25,0 A | 6 mm² (escolha comum) | 32 A | **sim** |
| 7. TUE ar-condicionado | 1.500 VA | 220 V | 6,8 A | 2,5 mm² | 10 A | não exigido |

Conferências:

- Circuito 3: `15,0 A <= 20 A` (disjuntor) e o cabo de 2,5 mm² suporta mais de 20 A em instalação comum
  embutida, então a cadeia `circuito <= disjuntor <= cabo` fecha. (Valores de capacidade de cabo variam
  com o método de instalação; confirme na tabela da norma.)
- Circuito 6: `25 A <= 32 A`. Um cabo de 4 mm² também poderia servir conforme a tabela, mas é comum usar
  **6 mm²** por folga e queda de tensão em trajeto longo.
- Circuito 1: 5,2 A é baixo, mas a iluminação não é dividida em muitos circuitos numa casa tão pequena;
  em casa maior, separa-se por área, para que uma falha não apague tudo.

### Passo 5: proteção diferencial

Os circuitos **3, 4, 5 e 6** exigem DR de 30 mA. Duas formas:

- **Um DR para cada circuito** (ou disjuntor-DR): mais caro, mas uma fuga na cozinha não derruba o
  chuveiro.
- **Um DR para um grupo** de circuitos: mais barato, mas o DR precisa suportar a corrente da soma dos
  circuitos que protege, e uma fuga em um circuito desliga todos do grupo.

O projetista escolhe o arranjo; conceitualmente, agrupa por área e por conveniência de uso.

### Passo 6: carga total e ligação

Carga instalada estimada:
`660 + 900 + 1.900 + 1.800 + 600 + 5.500 + 1.500 = 12.860 VA`, cerca de **12,9 kVA**.

Nem tudo liga ao mesmo tempo (a demanda real é menor que a soma), e a concessionária tem critérios próprios
de **demanda** e de **tipo de ligação** (monofásico, bifásico ou trifásico). Nesta faixa de carga é
provável que a casa precise de ligação **bifásica ou trifásica**, mas a definição é da concessionária e do
projetista (não confirmei limites numéricos nesta pesquisa; consulte a norma de fornecimento da sua
distribuidora).

**Quadro**: 7 circuitos ativos mais espaço de reserva. Perceba que um quadro com apenas 7 posições fica
sem folga; por isso o quadro é maior que o necessário.

### O que este exemplo **não** cobre (e o profissional faz)

- Queda de tensão, comprimento dos trechos, método de instalação e fatores de agrupamento dos cabos.
- Demanda real e curva de disparo dos disjuntores.
- Aterramento, DPS, esquema de aterramento da instalação (TN, TT).
- Iluminação externa, portão, bomba d'água, gerador solar.
- Compatibilização com a concessionária e ART.

## Como isso vira decisões de planta

- **Onde colocar tomadas** é decisão de **layout de móveis**: cama, mesa, bancada, TV. Por isso o
  arquiteto define os pontos junto com o layout, no desenho de elétrica (Módulo 3 mostra símbolos).
- **A parede da cozinha** recebe muitas tomadas (uma a cada 3,5 m de perímetro, e mais acima da bancada),
  o que pede espaço e cuidado com **ponto de água** por perto (DR e afastamentos).
- **O quadro** recebe todos os circuitos; sua posição decide o comprimento dos eletrodutos (Aula 7).
- **Ar-condicionado e chuveiro** pedem definição cedo: o chuveiro define ponto elétrico, ponto de água quente
  e posição do box; o split pede ponto alto, dreno e passagem de tubulação de gás refrigerante.
- **Circuitos de banheiro** exigem consideração da **zona do chuveiro**: a NBR 5410 divide o banheiro em
  volumes (regiões em torno do chuveiro/banheira) onde tomadas e interruptores têm restrições. O
  projetista define; para o hobby, a regra prática é manter tomadas e interruptores **longe do chuveiro**.

## Resumo

- Circuitos separam a instalação para dar **proteção seletiva**, respeitar a **capacidade dos cabos** e
  permitir **manutenção**; TUE (aparelho fixo/potente) tem circuito próprio.
- Tomadas mínimas: 1 a cada **5 m de perímetro** (sala, quarto) e 1 a cada **3,5 m** (cozinha, área de
  serviço); banheiro tem pelo menos 1 junto ao lavatório, com DR.
- Potências: **600 VA** para as 3 primeiras tomadas de cozinha/área de serviço/banheiro e **100 VA** nas
  demais; iluminação: **100 VA** até 6 m², **+60 VA a cada 4 m² inteiros** além.
- O exemplo da casa de 2 quartos gera **7 circuitos e cerca de 12,9 kVA**, com DR nos circuitos de cozinha,
  área de serviço, banheiro e chuveiro.
- Nada disto substitui projeto e execução por profissional habilitado.

## Para aprofundar

- [ ] [Como Fazer PROJETO ELÉTRICO RESIDENCIAL do ZERO! | Semana do Diagrama #01](https://www.youtube.com/watch?v=G9G515Qimw0) (Sala da Elétrica): pelo título, mostra o passo a passo de um projeto residencial com cargas, circuitos e quadro, para iniciante. Conteúdo não assistido.
- [ ] [Pontos de Tomada por Cômodo: o que diz a NBR 5410?](https://www.saladaeletrica.com.br/pontos-de-tomada-por-comodo/) (Sala da Elétrica): artigo que resume as regras de quantidade e potência de tomadas por ambiente.

[Próxima aula: Gás, telecomunicações, climatização e fontes alternativas](./06%20-%20Gas%20Telecom%20Climatizacao%20e%20Solar.md)
