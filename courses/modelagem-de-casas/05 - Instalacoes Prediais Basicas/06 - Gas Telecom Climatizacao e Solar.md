# Aula 6: Gás, telecomunicações, climatização e fontes alternativas

[Voltar ao módulo](./README.md)

*Pergunta que esta aula responde: que outras redes a casa tem, o que cada uma exige do espaço e por que gás é a mais perigosa de errar?*

> **Aviso obrigatório.** Instalação de **gás** envolve risco de vazamento, incêndio e explosão; exige
> projeto e execução por profissional habilitado, com testes de estanqueidade e, em muitos casos,
> aprovação da concessionária e do Corpo de Bombeiros. Instalação **elétrica** de ar-condicionado,
> inversor solar e gerador exige profissional (NR-10). Esta aula explica o que cada sistema pede da
> planta, para você conversar com quem projeta. Não é manual de execução.

## Gás: por que exige tanto cuidado

O gás combustível é uma energia concentrada e inflamável. Vazamento em ambiente fechado forma mistura que,
com uma faísca, explode; e a queima em local sem ar suficiente produz **monóxido de carbono (CO)**, gás
tóxico, sem cheiro, que mata em silêncio. Toda regra de gás, portanto, gira em torno de dois objetivos:
**não vazar** e **ventilar**.

### Tipos de gás e por que a diferença importa para a planta

| Gás | Origem | Comportamento no ar | Consequência de projeto |
|---|---|---|---|
| **GLP** (gás liquefeito de petróleo, "gás de botijão", propano e butano) | botijão (P13, com 13 kg) ou cilindros maiores em **central** | mais **pesado que o ar**: se vaza, **acumula no chão** e em cantos baixos | ventilação **inferior** (rente ao piso) é importante; ralo e desníveis são pontos de risco |
| **GN** (gás natural) | rede da concessionária na rua | mais **leve que o ar**: se vaza, **sobe** | ventilação **superior** é importante |

(As características de densidade são físicas; a forma exata como a norma exige as aberturas e suas áreas
está nas normas NBR 13103 e NBR 15526 e depende da potência dos aparelhos. Não confirmei os valores
das áreas mínimas nesta pesquisa.)

### Normas e responsabilidade

- **NBR 15526** (redes de distribuição interna para gases combustíveis em instalações residenciais e
  comerciais, edição de 2016 segundo fonte consultada): tubulação, projeto, execução, testes.
- **NBR 13103** (instalação de aparelhos a gás para uso residencial): posição dos aparelhos, ventilação,
  chaminés. Fonte consultada cita edições recentes (2020 e 2024, verificado em setembro de 2026).
- **NBR 13523** (central de GLP): onde e como armazenar cilindros de GLP em central.
- Instalações de gás exigem **ART do responsável técnico** (fonte consultada) e, segundo o município e o
  tipo de edificação, aprovação do **Corpo de Bombeiros**.

### Central de gás e botijão

- Casas simples usam **botijão P13** perto do fogão. Casas maiores ou com aquecedor a gás usam **central
  de GLP** (abrigo externo com cilindros, ligado por tubulação fixa) ou **gás natural encanado**, se a
  rua tiver rede.
- A **central de GLP** fica **fora da edificação**, em abrigo **ventilado**, com **afastamentos mínimos** de
  aberturas, ralos, fontes de ignição e limites de terreno (as distâncias exatas estão na norma e nos
  regulamentos dos Bombeiros; não confirmei os valores). Ela precisa de **acesso** para troca de
  cilindros e para caminhão.
- **Medidor de GN**: instalado pela concessionária, em local acessível e ventilado (no limite frontal, como
  o hidrômetro e o medidor de energia).

### Regras que afetam a planta

- **Aparelhos a gás são proibidos em dormitório e banheiro** (fonte consultada, sobre NBR 13103), pelo risco
  de CO e de vazamento em local fechado. Isso restringe a posição do **aquecedor de passagem**: não pode
  ficar dentro do banheiro; fica na área de serviço, varanda ou nicho externo, e leva água quente por
  tubulação.
- **Ventilação permanente**: o cômodo com aparelho (cozinha, área de serviço) precisa de **aberturas
  permanentes** (que não fecham, como uma grelha) para entrada de ar de combustão e saída de gases, com
  área conforme a potência instalada. Janela que se fecha **não conta**. Essa exigência conflita com
  ideias como "fechar bem a cozinha", e o arquiteto deve prever a grelha na parede ou porta.
- **Chaminé ou duto de exaustão** para aparelhos que não sejam estanques (aquecedor de passagem), levando
  os gases **para fora**, acima da cobertura, com terminal apropriado.
- **Tubulação de gás** visível ou embutida com **proteção**, **identificação** (por cor, em geral
  amarela, segundo a prática) e **registro** de bloqueio acessível junto a cada aparelho. Nunca fica
  em local inacessível ou dentro de shaft de esgoto ou elétrica sem regra específica.
- **Distância de fontes de calor e faísca**: tubo de gás e tomada não ficam colados. Perto do fogão, forros, coifas
  e cortinas também pedem cuidado.
- **Mangueira** (flexível de ligação entre botijão/tubo e fogão) tem **prazo de validade** e deve ser a
  específica; improviso é causa comum de vazamento.

### Decisões de planta que nascem do gás

- **Fogão e aquecedor** na cozinha ou área de serviço, **com parede externa** para grelha de ventilação e
  para chaminé.
- **Central ou botijão em área externa ventilada**, com acesso.
- **Trajeto curto e reto** da central aos aparelhos; menos curvas, menos juntas, menos risco.

## Telecomunicações, dados e segurança (infraestrutura seca)

**Infra seca** é o nome dado às tubulações vazias (eletrodutos) e às caixas que **ainda vão receber
cabos**, sem ter água nem gás. O motivo: cabos de internet, TV, telefone, alarme e câmeras mudam de
tecnologia a cada poucos anos (par metálico, fibra óptica, coaxial), mas os **eletrodutos ficam na parede
para sempre**. Quem projeta bem deixa **caminhos livres** para trocar cabos sem quebrar parede.

Partes da rede de dados:

- **Entrada de serviços**: ponto onde a operadora chega ao lote (poste ou subterrâneo), com eletroduto até
  o interior, junto ao padrão de entrada ou no muro.
- **Quadro de telecom (QDT)** ou "quadro de dados": caixa central onde chegam a fibra e o roteador, e de onde
  saem os cabos de **rede (UTP, Ethernet, conectores RJ45)** para os cômodos. Deve ter **tomada elétrica**
  própria e ventilação, e ficar em posição central para o Wi-Fi e para cabos curtos.
- **Pontos de rede** (RJ45) em sala, quartos, escritório e onde houver TV, computador, ponto de acesso
  Wi-Fi ou câmera; **pontos de TV** (coaxial ou rede).
- **Interfone, portão automático, alarme e câmeras (CFTV)** têm eletrodutos e às vezes fonte de energia
  própria, que também exigem tomada.

Observações:

- Existem normas ABNT para cabeamento residencial e órgãos como a **Anatel** regulam certificação de
  equipamentos de telecom; não confirmei número e teor das normas aplicáveis nesta pesquisa.
- Cabo de baixa tensão (dados, alarme) **não deve dividir o mesmo eletroduto** que cabos de força
  (127/220 V): a interferência degrada o sinal e há risco de segurança (prática de projeto).
- **Wi-Fi** é afetado por paredes grossas e lajes; a posição do ponto de acesso (central, alto) faz parte
  da planta.

**Decisões de planta:** eletrodutos vazios até cada cômodo, **quadro de telecom central**, ponto no
escritório e na sala de TV, e caminho ao muro para portão e câmeras.

## Climatização e ventilação mecânica

O Módulo 2 ensinou que o primeiro recurso é **projetar bem** (orientação, ventilação cruzada, sombreamento)
para não precisar de máquinas. Mesmo assim, há três situações em que se usa **ventilação ou
climatização mecânica**:

1. **Cômodo cego** (sem janela), como banheiro interno: precisa de **exaustor** com **duto** até o exterior,
   sem descarregar no forro.
2. **Cozinha**: **coifa** ou **depurador** para tirar gordura e fumaça. Coifa com duto exige saída para
   fora, e o depurador filtra e devolve o ar ao ambiente.
3. **Ar-condicionado** por conforto térmico.

### Ar-condicionado tipo split: mecanismo e o que pede da planta

Um split é um **ciclo de refrigeração** em duas unidades ligadas por tubos de cobre:

- **Unidade interna (evaporadora)**: o ar do cômodo passa por uma serpentina fria, esfria e volta ao
  ambiente. Ao esfriar, o vapor de água do ar **condensa**, gerando água.
- **Unidade externa (condensadora)**: rejeita o calor para fora, com ventilador e compressor. Faz
  barulho e precisa de **ventilação livre**.
- **Tubulação de cobre** com gás refrigerante (linha de líquido e linha de sucção, isoladas) e **cabos de
  comando**.
- **Dreno**: tubo por **gravidade** que leva a água condensada ao ralo ou ao jardim; precisa de **caimento**
  (o mesmo princípio do esgoto).
- **Circuito elétrico próprio** (TUE, Aula 5), muitas vezes em 220 V.

O que decidir na planta, **antes do acabamento**:

- **Posição da evaporadora**: alta na parede, com espaço livre à frente, longe de correr o ar diretamente
  na cama ou no sofá.
- **Posição da condensadora**: parede externa, varanda técnica ou telhado, com afastamento da parede e
  circulação de ar, longe de janela do vizinho (ruído e calor).
- **Passagem embutida** da tubulação: distância curta entre as duas unidades (os fabricantes limitam o
  comprimento), com **eletroduto** embutido quando a estética exige.
- **Ponto de dreno** e **ponto elétrico** no local.

**Sistemas de ar-condicionado central e VRF** (dutos, grandes unidades) estão fora do escopo de casa
pequena; existe a norma **NBR 16401** para sistemas de ar-condicionado (fonte não consultada
nesta pesquisa para o conteúdo detalhado).

## Fontes alternativas em nível conceitual

### Energia solar fotovoltaica

**Por que existe:** converter luz do sol em eletricidade para reduzir a conta ou dar independência da rede.

**Componentes:**

1. **Módulos (painéis) fotovoltaicos**: células que geram corrente contínua (CC) quando iluminadas.
2. **Inversor**: converte a CC em corrente alternada (CA) na tensão e frequência da casa, e desliga se a
   rede cai (segurança).
3. **Proteções CC e CA**: dispositivos de proteção e seccionamento.
4. **Medidor bidirecional**: instalado pela concessionária, mede o que você **consome** e o que **injeta** na
   rede.
5. (Opcional) **Baterias**, num sistema híbrido ou isolado.

**Tipos de sistema:**

| Tipo | Conectado à rede? | Baterias | Para que serve |
|---|---|---|---|
| **On-grid** (conectado) | sim | não | reduz a conta; a maioria das casas |
| **Off-grid** (isolado) | não | sim | local sem rede (sítio) |
| **Híbrido** | sim | sim | reserva em caso de queda de energia |

**Regra legal (verificado em setembro de 2026 em fontes consultadas):** a **Lei 14.300/2022** (marco
legal da geração distribuída) define **microgeração** como sistemas de até **75 kW**, faixa em que se
enquadram as casas. A energia excedente injetada vira **créditos** com validade de **60 meses**, e desde
2023 há cobrança gradual do componente **Fio B** (custo de uso da rede), com 60% em 2026, chegando a
100% em 2029, segundo as fontes consultadas. As regras de compensação mudam; consulte a **Aneel** e a
sua concessionária antes de decidir.

**Exemplo resolvido: dimensionar por ordem de grandeza (valores hipotéticos).**

- Consumo médio: **300 kWh por mês**, ou 10 kWh por dia.
- **Horas de sol pleno** (HSP) do local: 4,5 h/dia (valor do lugar; use dado de irradiação da sua região).
- Eficiência global do sistema (perdas de inversor, cabo, sujeira, temperatura): 80%.
- Potência necessária do conjunto (kWp, potência de pico):
  `kWp = consumo diário / (HSP x eficiência) = 10 / (4,5 x 0,8) = 2,78 kWp`.
- Com módulos de **550 W** cada: `2.780 / 550 = 5,05`, ou seja, cerca de **5 módulos**.
- Área: cada módulo dessa potência tem cerca de 2,5 m² (valor típico; confira a ficha técnica), então
  `5 x 2,5 = 12,5 m²` de telhado livre.

Isso é estimativa de conversa; o dimensionamento real, com sombreamento, inclinação, perdas e regras da
concessionária, é do integrador ou engenheiro.

**Decisões de planta:**

- **Água do telhado** voltada ao **norte** (no hemisfério sul), livre de sombra
  de árvores, prédios e platibandas (relação com o Módulo 2).
- **Área livre** de telhado, e a **estrutura** deve suportar o peso extra (Módulo 4) e permitir fixação
  sem furar a impermeabilização.
- **Local do inversor**: sombreado, ventilado e **perto do quadro**; e **eletroduto** do telhado ao
  inversor e ao quadro (infra seca).
- O **padrão de entrada** e o quadro precisam aceitar o disjuntor do inversor.

### Aquecimento solar

Descrito na Aula 2. Não confunda com fotovoltaica: o coletor **aquece água diretamente**, sem gerar
eletricidade. As duas competem pelo **mesmo telhado voltado ao norte**, e o projeto precisa dividir a
área entre elas.

## Resumo

- **Gás**: risco de vazamento e de CO. GLP é mais pesado que o ar (acumula embaixo), GN é mais leve
  (sobe). Exige **ventilação permanente**, **central externa ventilada**, aparelhos **fora de dormitório e
  banheiro**, exaustão de gases e projeto por profissional.
- **Infra seca** de dados, TV e segurança: deixar **eletrodutos vazios** e um **quadro de telecom** central,
  porque os cabos mudam mas os dutos ficam.
- **Climatização**: projeto passivo primeiro; **exaustão** para cômodos cegos e cozinha; **split** pede
  posição de evaporadora e condensadora, **dreno com caimento**, circuito próprio e passagem de tubulação
  antes do acabamento.
- **Solar fotovoltaica**: painéis, inversor e medidor bidirecional; Lei 14.300/2022 para até 75 kW; exemplo:
  300 kWh/mês, HSP 4,5 e 80% de eficiência dão cerca de 2,8 kWp e cerca de 5 módulos.
- Cada sistema exige espaço e posição na planta (telhado norte, abrigo de gás, quadro de dados, local da
  condensadora).

## Para aprofundar

- [ ] [BÁSICO DO BÁSICO: Instalações de GÁS GLP E GN PREDIAL](https://www.youtube.com/watch?v=gC14TpCDPrI) (Escola Aplicar): introdução às instalações de gás. Conteúdo não assistido, descrito pelo título e canal.
- [ ] [ABNT NBR 13103 e NBR 15526: normas de instalação de gás explicadas](https://www.gasnetwork.org/post/abnt-nbr-13103-e-nbr-15526-normas-de-instala%C3%A7%C3%A3o-de-g%C3%A1s-explicadas-em-detalhes-guia-2026) (Gás Network): guia de mercado sobre as duas normas, útil para o vocabulário; é de empresa do setor.

[Próxima aula: Da rede à planta: decisões de projeto](./07%20-%20Da%20Rede%20a%20Planta.md)
