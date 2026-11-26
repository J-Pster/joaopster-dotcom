[Voltar ao módulo](./README.md)

# Aula 7: A estrutura na planta e as decisões de modelagem

*Pergunta que esta aula responde: como a estrutura condiciona a planta que você desenhou e que números concretos (espessuras, pé-direito, beirais) você usa no modelo 3D?*

> **Aviso obrigatório.** Os valores desta aula são **pré-dimensionamento para compatibilizar o modelo 3D**, ou seja, ordens de grandeza para o seu desenho ficar plausível. **Não servem para construir.** Dimensão de pilar, viga, laje e fundação é calculada por engenheiro habilitado, com ART, seguindo as normas (NBR 6118, NBR 6122, NBR 6120 e outras). Um modelo 3D que parece certo não prova que a estrutura fica em pé.

## Por que a estrutura mexe na planta

No módulo 1 você definiu o programa e a setorização, e no módulo 3 desenhou plantas. O que ficou implícito: **paredes e vãos não são livres**. A estrutura só funciona se as cargas encontram um caminho contínuo até o solo (aula 1), e esse caminho tem geometria. Quando o desenho ignora isso, o engenheiro tem de compensar com peças enormes (caras e feias) ou pedir mudança na planta. A conversa fica muito melhor quando você já chega com um desenho **estruturalmente razoável**.

## Como a estrutura condiciona a planta

### 1. Malha de pilares

Num sistema de concreto armado (aula 5), pilares tendem a ficar numa **malha regular**: alinhados em eixos, com distâncias entre eixos moderadas. O motivo é econômico e físico: vigas alinhadas descarregam em pilares alinhados, e o trajeto é curto.

- **Alinhe pilares** em duas direções ortogonais sempre que possível. Pilares "soltos", fora de eixo, obrigam vigas de transição.
- Os pilares vão nos **cantos**, **cruzamentos de paredes** e **extremidades de paredes longas**. Idealmente ficam **dentro** da parede.
- **Pilar no meio da sala, da garagem ou da cozinha** é sinal de vão grande demais: solução é aumentar viga (mais alta) ou aceitar o pilar.

### 2. Vãos econômicos

Da aula 1: dobrar o vão quadruplica o momento fletor. Por isso vãos moderados custam menos e dão peças mais finas. Referências usuais em casas residenciais (ordens de grandeza a confirmar com o engenheiro):

- **Vão entre pilares** de **3 m a 5 m**, é uma faixa em que o concreto armado convencional é econômico.
- **Laje maciça**: vão menor de até cerca de 4 a 5 m.
- **Laje treliçada**: vãos de poucos metros, dependendo do fabricante (a aula 4 explica por que não fixo um número).
- **Viga**: vãos de 3 a 6 m, altura crescendo com o vão.

Vão acima de 6 m (uma sala ampla, garagem para dois carros sem pilar central, um grande balcão) é possível, mas custa: viga alta, laje nervurada, armadura maior. **O custo sobe rápido com o vão.**

### 3. Pré-dimensionamento: as regras práticas

Regras de bolso reunidas em material acadêmico e técnico brasileiro (fontes na seção de aprofundamento) para concreto armado convencional. São **primeira aproximação**:

| Elemento | Regra prática | Exemplo |
|---|---|---|
| **Laje maciça** | espessura ≈ vão menor / 40 (mínimos da NBR 6118: 7 cm cobertura, 8 cm piso, 10 cm em balanço) | vão menor 4 m: 4 / 40 = 0,10 m, ou seja, 10 cm |
| **Viga** | altura ≈ vão / 10 a vão / 12 | vão 4 m: 33 a 40 cm |
| **Viga (largura)** | igual à largura da parede (9, 14 ou 19 cm, para embutir) | 14 cm |
| **Pilar** | menor lado em geral 19 cm (exceção de 14 cm com área mínima de 360 cm², NBR 6118) | 14 x 30 ou 19 x 19 cm |
| **Laje treliçada** | espessura total ≈ 16 a 20 cm em casas com vãos usuais | 12+4 ou 16+4 |

Em **alvenaria estrutural** a espessura é a do bloco estrutural (14 cm ou 19 cm). Em **steel frame** e **wood frame** os montantes definem a espessura da parede (da ordem de 9 cm de perfil, mais placas).

### 4. Alinhar pavimentos (sobrados)

A continuidade vertical da aula 1 vira regra de projeto:

- **Pilares e paredes portantes do pavimento superior devem cair sobre os do inferior.**
- **Paredes internas pesadas** (de alvenaria) no andar de cima, sem parede embaixo, exigem **viga sob a parede**, ou laje reforçada.
- **Escada** precisa de apoios coerentes (nas vigas, paredes ou pilares) e furo na laje com viga de borda.
- **Shafts** (dutos verticais para tubos) devem estar alinhados entre pavimentos e com áreas molhadas empilhadas (tema do módulo 5: banheiros de cima sobre os de baixo simplificam a tubulação).

### 5. Alvenaria estrutural exige uma planta diferente

Se o sistema é alvenaria estrutural, **paredes portantes formam uma malha** e a planta se organiza por ela: ambientes pequenos a médios entre paredes, sem paredes soltas. Cada parede portante é **marcada no projeto**, não pode ser removida. Aberturas grandes precisam de vergas robustas. **Modulação** manda: dimensões múltiplas do módulo do bloco.

### 6. Áreas molhadas e rebaixos

Banheiros e áreas de serviço têm **rebaixo** de laje (a laje fica alguns centímetros abaixo, para embutir tubulações e permitir caimento). Isso afeta a altura da laje ali e é combinado com o módulo 5.

## Decisões de modelagem: os números

Aqui a estrutura vira parâmetro no software. Valores usuais (ordens de grandeza, adapte ao sistema escolhido):

### Espessura de parede

O que você desenha em planta é a **parede acabada**: bloco mais revestimento nas duas faces (cerca de 1,5 a 2,5 cm em cada). Referências:

| Sistema | Elemento | Espessura acabada aproximada |
|---|---|---|
| Alvenaria convencional, parede interna | Bloco de 9 cm + revestimentos | 12 a 14 cm (bloco de 14 cm: 17 a 19 cm) |
| Alvenaria convencional, parede externa | Bloco de 14 cm (ou 19 cm) + revestimentos | cerca de 18 a 20 cm (com bloco de 19: 23 a 24 cm) |
| Alvenaria estrutural | Bloco estrutural de 14 cm ou 19 cm + revestimento fino | 16 a 21 cm |
| Light steel frame | Perfil, placas e revestimentos | da ordem de 12 a 17 cm (varia com o perfil e o número de camadas) |
| Wood frame | Montantes 38 x 89 mm, placas e revestimentos | da ordem de 14 a 20 cm |
| Paredes de concreto | Concreto de cerca de 10 cm + acabamento | 10 a 12 cm |

Cálculo de exemplo: bloco de 14 cm + 2 cm de reboco de cada lado = `14 + 2 + 2 = 18 cm`. O erro típico: modelar parede de 10 cm "porque é fina" e depois ver que portas, batentes e espessura de janela não batem com a realidade.

**Se pilares e vigas existem, dê a eles a mesma espessura acabada da parede**, ou eles "estufam" e aparecem no ambiente. Regras de modelagem: parede de 18 cm acabada, pilar de 14 x 30 cm com revestimento vira 18 x 34 cm, e pode ser desenhado alinhado à face externa.

### Pé-direito e altura do pavimento

**Pé-direito** é a altura livre do piso acabado ao teto (ou forro). Já vem do módulo 1 (ergonomia) e do módulo 3 (cortes). Referências residenciais: **2,60 m a 3,00 m** (o código de obras do município define o mínimo, normalmente algo perto de 2,50 m em ambientes de permanência prolongada, e muda por cidade, então consulte o módulo 6). **Pé-direito maior ajuda o conforto térmico em clima quente** (módulo 2), mas encarece e alonga paredes.

A **altura de piso a piso** (do piso de um pavimento ao piso do seguinte) **não é o pé-direito**. Soma-se a **espessura da laje mais contrapiso, piso e (se houver) forro rebaixado**:

`piso a piso = pé-direito + laje + contrapiso/piso + forro`

Exemplo: pé-direito 2,70 m, laje treliçada de 20 cm, contrapiso e piso de 5 cm: `2,70 + 0,20 + 0,05 = 2,95 m`. Esse é o valor que você usa para posicionar o pavimento superior no modelo e calcular a **escada**. Para vencer 2,95 m com degraus de altura (espelho) próxima de 17,5 cm, `2,95 / 0,175 = 16,9`, arredonda-se para 17 degraus de `2,95 / 17 = 17,35 cm` cada (a proporção entre espelho e piso é tema de escadas, e regras precisas cabem ao projetista e às normas).

**Vigas** que descem abaixo da laje reduzem o pé-direito **localmente**. Se uma viga de 40 cm de altura total (laje de 10 cm incluída) desce 30 cm abaixo da face inferior da laje, o pé-direito sob ela cai 30 cm. Cuidado com vigas sobre portas e sobre corredores.

**Alvenaria estrutural:** altura do pé-direito modulada em múltiplos do bloco (por exemplo, 2,60 m com 13 fiadas de 20 cm).

### Espessuras de laje no modelo

- Maciça: 10 a 12 cm.
- Treliçada: 16 a 20 cm (aula 4).
- Laje de cobertura plana com impermeabilização: some a **camada de proteção e caimento** (alguns centímetros, com queda até o ralo).
- Balanços (marquises e sacadas): espessura maior, com viga de borda, e visualmente aparente.

### Beirais e telhado

Da aula 6:

- **Beiral**: 50 cm a 100 cm em projeto residencial comum. Beiral maior protege mais as paredes e o interior do sol, e aumenta a sucção do vento e a estrutura de balanço.
- **Inclinação**: definida pela **telha** (cerâmica cerca de 30%, metálica e fibrocimento menos).
- **Altura da cumeeira**: `meia largura x inclinação`.
- **Espessura do telhado**: telha, ripa, caibro e madeiramento formam de 15 a 30 cm de altura no beiral (ordem de grandeza).
- **Platibanda**: se o telhado é embutido, a platibanda sobe acima da laje e define a **calha** e o caimento.

### Fundação e cotas

- **Piso interno** acima do terreno externo, cerca de **15 a 30 cm** (aula 2).
- **Baldrame** modelado, se quiser, como faixa sob as paredes térreas, rente ao terreno.
- Em **radier**, o piso pode ficar mais próximo do solo e a fundação vira a própria laje sob o piso.

## Fluxo de trabalho recomendado para o modelo

1. Escolha o **sistema construtivo** (aula 5). Isso define espessura de parede e se existem pilares e vigas.
2. Defina o **pé-direito** e a **altura de piso a piso**.
3. Desenhe as **paredes acabadas** com a espessura do sistema.
4. Se concreto armado: desenhe uma **malha de pilares** alinhada, escondida na parede, e **vigas** nos vãos, com altura pela regra vão/10 a vão/12.
5. Modele **lajes** com a espessura escolhida, e o **desnível** de áreas molhadas.
6. Modele o **telhado**: telha, inclinação, beiral, altura da cumeeira, calhas.
7. **Confira alinhamentos** (pilares e paredes empilhados nos sobrados) e **vãos** (nada absurdo).
8. **Leve o modelo a um engenheiro** para avaliar e projetar. Ele indicará ajustes.

Este é o fluxo que o módulo 14 (projeto completo) vai retomar, e os módulos de software (7 e 9 a 12) mostram como cada programa guarda essas informações: paredes com camadas e espessura, níveis (pé-direito), lajes e telhados por inclinação. O módulo 7 ([Fundamentos de Modelagem 3D CAD e BIM](../07%20-%20Fundamentos%20de%20Modelagem%203D%20CAD%20e%20BIM/README.md)) explica o que diferencia um modelo "só de imagem" de um modelo com informação.

## Resumo

- Estrutura exige **caminho contínuo de cargas**: pilares alinhados em malha, paredes portantes empilhadas em sobrados, vãos moderados. Vão grande custa muito porque o momento cresce com o quadrado do vão.
- Pré-dimensionamento de concreto armado (ordem de grandeza): laje maciça ≈ vão menor / 40 (mínimos da NBR 6118), viga com altura ≈ vão / 10 a vão / 12, pilar com lado mínimo de 19 cm (exceção 14 cm), laje treliçada de 16 a 20 cm totais.
- **Parede acabada** = bloco + revestimentos (cerca de 18 cm para bloco de 14 cm, cerca de 12 a 14 cm para bloco de 9 cm). Pilares e vigas com a mesma espessura da parede.
- **Pé-direito** (2,60 a 3,00 m) é a altura livre, e **piso a piso** soma laje, contrapiso, piso e forro. Escada e pavimento superior usam o piso a piso.
- **Beiral** de 50 a 100 cm, **inclinação** pela telha, **cumeeira** = meia largura x inclinação.
- Nada disso substitui o **projeto do engenheiro com ART**: o modelo 3D é uma base de conversa, não um projeto estrutural.

## Para aprofundar

- [ ] [Pré-dimensionamento de pilares, vigas e lajes de concreto (Guia da Engenharia)](https://www.guiadaengenharia.com/pre-dimensionamento-concreto-armado/) (Guia da Engenharia): artigo com as regras práticas de pré-dimensionamento (apareceu em resultado de busca, não li o texto completo, confira as fórmulas com um engenheiro).
- [ ] [Estudo do pré-dimensionamento de lajes, vigas e pilares de concreto](https://seer.ufu.br/index.php/horizontecientifico/article/view/38856/21398) (Horizonte Científico, UFU): artigo acadêmico sobre o mesmo tema (apareceu em resultado de busca, não li o texto completo).

Este é o último assunto do módulo. Volte ao [README do módulo](./README.md) para o checklist de saída.
