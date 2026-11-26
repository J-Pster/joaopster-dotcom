# Aula 7: Implantação da Casa no Terreno

[Voltar ao módulo](./README.md)

*Pergunta que esta aula responde: dado um terreno real, o que condiciona onde a casa fica, para onde ela olha e a que altura, e por que essa é a decisão mais difícil de corrigir depois?*

## O que é implantação e por que pesa tanto

**Implantação** é a decisão de onde a edificação fica no lote, com que **orientação** (para que lados as fachadas olham) e em que **nível** (cota em relação ao terreno e à rua). É a primeira decisão de projeto e a mais irreversível: beiral, brise e janela se mudam depois; a posição da casa no lote e o ângulo em relação ao sol, não.

Pense em custo de correção: uma casa mal orientada pode ganhar sombreadores e ar-condicionado, mas o problema (calor da tarde, sala escura, quarto voltado para a rua) fica embutido. Uma casa bem implantada dispensa boa parte desses remendos. E, como boa implantação é de graça (só desenho), é o melhor investimento de projeto.

Aqui estão os condicionantes. Na aula 8 você transforma isso em método.

## 1. Envelope legal: onde é permitido construir

Antes de qualquer conforto, o município define a **área edificável** por regras urbanísticas (detalhadas no módulo 6, que ainda não vimos; aqui só o necessário):

- **Recuos**: distâncias mínimas da construção aos limites do lote (frontal, laterais, fundos).
- **Taxa de ocupação**: quanto do lote pode ser coberto pela projeção da construção.
- **Coeficiente de aproveitamento**: relação entre área total construída e área do lote.
- **Taxa de permeabilidade**: parte do lote que deve permanecer sem impermeabilização (aula 5).

Esses números variam por município e por zona. Consulte a prefeitura antes de desenhar. O que sobra depois dos recuos é o **envelope**, a mancha dentro da qual você trabalha.

**Direito de vizinhança** (Código Civil, art. 1.301, conferido em fontes secundárias): é proibido abrir janela, eirado, terraço ou varanda a menos de 1,5 m do terreno vizinho; janelas cuja visão não incide sobre a divisa (perpendiculares) precisam de pelo menos 75 cm; aberturas de luz ou ventilação de até 10 cm x 20 cm e a mais de 2 m de altura de cada piso ficam fora da regra. O STJ decidiu que essa distância é objetiva (não depende de provar incômodo). Leis municipais costumam somar exigências. Confirme antes de projetar.

## 2. Sol: onde o sol entra, no lote e na casa

Da aula 1 e 2: o sol de inverno vem do norte e é bem-vindo em clima frio; o sol de verão e o do oeste são o problema em clima quente. Traduzindo para o lote:

- **Vizinhos e obstáculos ao norte** podem bloquear o sol de inverno. Meça o **ângulo de obstrução**: `atan((H - h_janela) / d)`, com H a altura do obstáculo, h_janela a altura do centro da janela e d a distância até ele.

**Exemplo resolvido**: parede de um vizinho ao norte com 6,0 m de altura, a 4,0 m da sua janela (centro a 1,6 m do piso). `atan((6,0 - 1,6) / 4,0) = atan(1,1) = 47,7 graus`. Em Belo Horizonte, o sol ao meio-dia de 21 de junho está a 46,7 graus (aula 1): a parede bloqueia o sol de inverno nessa janela. Se o objetivo é ganhar calor no inverno (zonas frias), é preciso afastar a janela do vizinho, subi-la ou mudá-la de lugar.

- **Sombra que você produz** nos vizinhos e no seu próprio quintal também conta. Uma regra útil de partido: **casa encostada na parte sul do lote**, deixando o quintal ao norte, para o quintal receber sol o ano todo e a casa ter uma fachada norte livre. Isso só vale se a frente do lote for compatível e se ao norte não houver vizinho alto (regra de bolso, dependente do caso).
- **Forma da casa**: em clima frio ou temperado, uma casa **alongada no eixo leste-oeste** (fachada longa ao norte) capta mais sol de inverno e tem menos parede leste e oeste para receber sol baixo. Em clima quente e úmido, a mesma forma alongada leste-oeste também serve, com pouca parede oeste e pouca profundidade (uma ou duas peças de largura) para ventilar por duas faces.
- **Compacidade**: a área das paredes e do telhado por volume construído (a razão superfície/volume) determina as trocas de calor. Formas compactas perdem menos calor no frio; formas abertas e finas ventilam melhor no calor úmido. Aqui o clima da aula 6 decide.

## 3. Vento

Onde vem o vento predominante (aula 4) e o que o barra: muros, prédios, árvores densas. Implantar a casa de modo que as janelas de entrada de ar fiquem viradas ao vento, com uma segunda abertura do lado oposto ou lateral. Cuide para que a casa não esconda a ventilação do vizinho, nem você da sua (uma linha de casas coladas, todas de frente para a rua e com fundos fechados, deixa a ventilação cruzada impossível). Recuos laterais servem também de corredor de vento.

## 4. Topografia

**Topografia** é a forma do relevo do terreno. Sua medida principal é a **declividade**:

```
declividade (%) = desnível / distância horizontal x 100
```

**Exemplo**: um terreno que sobe 3 m em 20 m de distância horizontal tem `3/20 x 100 = 15%` (ângulo de atan(0,15) = 8,5 graus). Para referência, a legislação federal de parcelamento do solo (Lei 6.766/1979, citada de memória e não confirmada nesta pesquisa) trata terrenos com declividade de 30% ou mais com restrições especiais; o módulo 6 detalha.

Efeitos e escolhas:

- **Terreno plano**: liberdade total, mas exige atenção ao escoamento de água (o lote não "se drena sozinho").
- **Aclive** (o terreno sobe a partir da rua): a casa fica acima da rua, ganha privacidade e vista, mas exige acesso em rampa/escada e corte de terra (escavação). O corte pode expor talude e água do lençol.
- **Declive** (o terreno desce a partir da rua): a casa pode ficar abaixo da rua (garagem no nível da rua e casa em baixo) ou apoiada em aterro/pilotis; cuidado com a água da rua que desce para o lote.
- **Corte e aterro**: retirar terra do ponto alto e colocá-la no baixo para fazer um platô. É mais simples de desenhar, mas custa: movimento de terra, contenção com **muro de arrimo** (parede que segura a terra), risco de deslizamento e de infiltração. **Aterro** mal compactado recalca (afunda) e trinca a casa. Uma alternativa é **acompanhar o terreno**, com meios níveis (**split-level**) ou pilotis, movimentando pouco a terra.
- **Água**: procure o **talvegue** (a linha mais baixa por onde a água corre em chuva). Não construa nela e não bloqueie o caminho da água; direcione o escoamento para longe das paredes e do vizinho (aula 5). Fundo de vale acumula ar frio à noite e umidade; topo de morro tem mais vento e sol.
- **Orientação da encosta**: no hemisfério sul, a encosta voltada para o **norte** recebe mais sol (mais quente e seca); a voltada para o **sul** recebe menos (mais fria e úmida). Casas em encosta sul de clima frio sofrem mais; em clima quente, podem ser vantagem.

**Aviso de limite**: corte, aterro, contenção, fundação e drenagem em terreno inclinado exigem **projeto de engenheiro** e sondagem do solo (módulo 4 e módulo 6). Esta aula ensina a ler o terreno e a decidir o partido, não a calcular contenção.

## 5. Vizinhos e privacidade

**Privacidade** é o controle de quem vê o interior e quem ouve. Ferramentas:

- **Posição**: não alinhar janelas de quarto e banheiro diretamente com as do vizinho; escalonar as janelas.
- **Altura do peitoril**: janelas altas (peitoril acima de 1,6 m, que é acima da linha de visão em pé) iluminam e ventilam sem expor.
- **Filtros**: cobogó (elemento vazado de cerâmica ou concreto), brises, treliça de madeira, muxarabi. Deixam passar ar e luz filtrando a visão.
- **Pátio interno**: janelas voltando-se para dentro do lote em vez de para o vizinho. É a solução de lote estreito.
- **Muros e vegetação**: muro alto protege, mas bloqueia vento e luz (aula 4); cerca-viva ou arbustos densos filtram e são mais permeáveis ao vento.
- **Parede cega** (sem janela) em divisa mais próxima que 1,5 m; janela só onde a lei permite.

## 6. Vegetação

- **Árvores existentes** valem muito: dão sombra imediata (uma árvore plantada hoje leva anos para dar sombra) e refrescam o ar por evapotranspiração (a água que as folhas liberam absorve calor ao evaporar). Em muitos municípios cortar árvore exige autorização (varia; consulte).
- **Caducifólia** (perde folhas no inverno) a oeste e a norte: sombra no verão, sol no inverno. **Perenifólia** (folhas o ano todo) como quebra-vento ou proteção de ruído e poeira.
- **Distância**: raiz e galho podem danificar fundação, calçada e telha. A distância segura depende da espécie e do solo; consulte um agrônomo ou paisagista (não há valor único).
- Vegetação densa a barlavento reduz o vento que chega às janelas; abra "corredores" de ventilação.

## 7. Ruído e entorno

Estude a rua, o vizinho, comércio, escola, indústria, e o que o entorno emite (som, cheiro, poeira, luz). Aula 5 deu a lógica: afastar os quartos da fonte, usar garagem e serviços como tampão, ventilar pelo lado quieto. Considere também o futuro: um terreno vizinho vazio pode ganhar um prédio.

## 8. Vistas, acesso e infraestrutura

- **Vista**: onde há o que ver, abra janelas, mas cuidando do sol (a vista boa muitas vezes fica a oeste). Solução: brise, vidro adequado, varanda profunda.
- **Acesso**: entrada de pedestres e de carros, largura da garagem, manobra, inclinação de rampa.
- **Infraestrutura** (água, esgoto, energia, rede pluvial): posição das ligações na rua e caimento do esgoto (o esgoto escoa por gravidade, então costuma ser mais barato quando a casa tem os banheiros voltados para o lado da rede). Módulo 5.

## Como levantar as informações do terreno

1. **Visite o terreno em vários horários** (manhã, tarde, fim de tarde, noite) e em dias diferentes: sol, vento, sombra dos vizinhos, ruído, cheiro.
2. **Determine o norte geográfico** (aula 1: use mapa de satélite, não bússola).
3. **Levantamento planialtimétrico**: é o desenho técnico feito por um topógrafo que registra dimensões do lote, curvas de nível (linhas de mesma cota, que mostram o relevo), árvores, construções vizinhas e posição de postes e ligações. É a base para qualquer projeto sério e o que você usará para modelar o terreno em 3D nos módulos de software.
4. **Fotografe** o entorno, incluindo vizinhos, e marque num mapa: obstáculos, vistas boas e ruins, pontos de escoamento de água.

## Resumo

- Implantação é posição, orientação e nível da casa no lote; é a decisão mais barata de tomar bem e a mais cara de corrigir.
- Ordem lógica: envelope legal (recuos, taxa de ocupação, permeabilidade), depois sol, vento, topografia, vizinhos e privacidade, vegetação, ruído, vistas, acesso e infraestrutura.
- Declividade (%) = desnível / distância x 100. Prefira acompanhar o terreno a movimentar muita terra; nunca construa sobre talvegue.
- Vizinho alto ao norte pode bloquear o sol de inverno: meça o ângulo de obstrução; janela a menos de 1,5 m da divisa é proibida pelo Código Civil (com exceções).
- Levante o terreno de verdade: visitas em vários horários, norte geográfico e levantamento planialtimétrico.

## Para aprofundar

- [ ] [Arquitetura Bioclimática: Princípios e estratégias](https://www.youtube.com/watch?v=9FyOMYDKrAE) (Eurico Vianna): título indica princípios e estratégias bioclimáticas, incluindo, provavelmente, a implantação (não confirmado). Não foi assistido.
- [ ] [Limite da janela do vizinho](https://www.tjdft.jus.br/institucional/imprensa/campanhas-e-produtos/direito-facil/edicao-semanal/limite-da-janela-do-vizinho) (TJDFT): explicação em linguagem simples da regra do Código Civil sobre janelas na divisa.

[Próxima aula: Método: Decidir a Implantação e a Orientação dos Ambientes](./08%20-%20Metodo%20de%20Decisao%20de%20Implantacao.md)
