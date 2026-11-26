[Voltar ao módulo](./README.md)

# Aula 9: Exercício guiado, casa de 2 quartos

*Pergunta que esta aula responde: como junto tudo (medidas digitadas, inferências, grupos, componentes, tags, cenas) para modelar uma casa completa e conferir que o resultado bate com a planta?*

Este exercício funciona no **SketchUp Free**: desenha a planta direto a partir de medidas (sem importar DWG) e não usa extensões nem LayOut. Se no módulo 09 você modelou uma casa de 2 quartos com outras medidas, pode usá-las; a tabela abaixo é uma planta pronta, com as contas conferidas, para você seguir sem ter de inventar números.

**Aviso:** as dimensões, espessuras (paredes de 15 cm, piso de 15 cm) e recuos abaixo são do exercício. Projeto real de estrutura, instalações e legislação exige profissional habilitado e as regras do seu município (módulos 04 a 06).

## A casa

Convenções: origem no canto externo esquerdo da fachada, eixo vermelho X (comprimento, de 0 a 9,00 m) e eixo verde Y (profundidade, de 0 a 7,00 m, a fachada está em Y = 0). Altura no eixo azul. Paredes de 0,15 m em todo o perímetro e nas divisórias. Pé-direito de 2,70 m.

| Ambiente | X (m) | Y (m) | Dimensões livres | Área |
|---|---|---|---|---|
| Sala e cozinha (integradas) | 0,15 a 8,85 | 0,15 a 3,45 | 8,70 x 3,30 | 28,71 m² |
| Corredor | 3,30 a 5,70 | 3,60 a 4,80 | 2,40 x 1,20 | 2,88 m² |
| Banheiro | 3,30 a 5,70 | 4,95 a 6,85 | 2,40 x 1,90 | 4,56 m² |
| Quarto 1 | 0,15 a 3,15 | 3,60 a 6,85 | 3,00 x 3,25 | 9,75 m² |
| Quarto 2 | 5,85 a 8,85 | 3,60 a 6,85 | 3,00 x 3,25 | 9,75 m² |

Conferência: a soma das áreas livres é 55,65 m². A área externa é 9,00 x 7,00 = 63,00 m². A diferença, 7,35 m², deve ser a área das paredes. Confirmando por partes: perímetro 63,00 - 58,29 (8,70 x 6,70) = 4,71; divisória horizontal 8,70 x 0,15 = 1,305; duas divisórias verticais 2 x (0,15 x 3,25) = 0,975; divisória corredor/banheiro 2,40 x 0,15 = 0,36; total 7,35. Bate. Você vai usar essa conta no fim para validar o modelo.

**Esquadrias** (medidas em metros). "Início" é a coordenada global onde o vão começa; a última coluna diz de qual aresta vertical medir com a fita métrica e quanto (é o Início menos a coordenada da aresta de referência).

| Código | Parede (face onde desenhar) | Início | Largura | Peitoril | Altura | Medir a partir de |
|---|---|---|---|---|---|---|
| P1 (entrada) | fachada, face externa (Y = 0) | X = 1,00 | 0,90 | 0 | 2,10 | canto X = 0: 1,00 |
| P2 sala/corredor | divisória Y = 3,45 a 3,60, face da sala | X = 4,10 | 0,80 | 0 | 2,10 | aresta X = 0,15: 3,95 |
| P3 corredor/quarto 1 | divisória X = 3,15 a 3,30, face do corredor | Y = 3,80 | 0,80 | 0 | 2,10 | junção Y = 3,60: 0,20 |
| P4 corredor/quarto 2 | divisória X = 5,70 a 5,85, face do corredor | Y = 3,80 | 0,80 | 0 | 2,10 | junção Y = 3,60: 0,20 |
| P5 corredor/banheiro | divisória Y = 4,80 a 4,95, face do corredor | X = 4,15 | 0,70 | 0 | 2,10 | aresta X = 3,30: 0,85 |
| J1 (sala) | fachada, face externa | X = 3,00 | 1,50 | 1,00 | 1,20 | canto X = 0: 3,00 |
| J2 (cozinha) | fachada, face externa | X = 6,00 | 1,20 | 1,10 | 1,20 | canto X = 0: 6,00 |
| J3 (quarto 1) | fundos, face externa (Y = 7,00) | X = 1,00 | 1,20 | 1,00 | 1,20 | canto X = 0: 1,00 |
| J4 (quarto 2) | fundos, face externa | X = 6,75 | 1,20 | 1,00 | 1,20 | canto X = 0: 6,75 |
| J5 (banheiro) | fundos, face externa | X = 4,20 | 0,60 | 1,50 | 0,60 | canto X = 0: 4,20 |

Terreno: lote de 12,00 x 20,00 m, com a casa a 5,00 m da frente e 1,50 m das laterais (recuos ilustrativos; os reais vêm do plano diretor do município, módulo 06). Telhado de duas águas, cumeeira paralela ao lado de 9,00 m, beiral de 0,50 m, inclinação 30% (altura da cumeeira acima do beiral: 1,20 m; conta na aula 6).

## Fase 0: preparação

1. Abra o SketchUp e crie um **modelo novo** com template **métrico** (aula 2). Confirme em Model Info > Units: formato decimal, unidade em metros ou milímetros, precisão de pelo menos milímetros.
2. Se o template traz uma figura humana ou outros objetos de exemplo, apague-os para não confundir a contagem de geometria.
3. Crie as tags (aula 5): `00_Referencia`, `01_Estrutura`, `02_Cobertura`, `03_Esquadrias`, `04_Mobiliario`, `05_Terreno`.
4. Salve com um nome claro. Salve a cada fase.

## Fase 1: a planta (2D) com medidas exatas

**Por quê:** todo o modelo vai nascer dessas linhas. Um erro de 1 cm aqui vira paredes que não fecham.

1. Vá para a vista de **topo** (Camera > Standard Views > Top, no desktop; na web use a vista de topo do menu de vistas; confira) em projeção paralela (aula 3).
2. **Rectangle**: clique na origem (o encontro dos eixos, com a inferência de extremidade) e digite `9m,7m` (formato da sua região, aula 4). Enter. É o contorno externo.
3. **Offset** (F): clique na face, mova para dentro e digite `15cm`. Enter. Você criou o retângulo interno de 8,70 x 6,70 m: o miolo livre.
4. **Guias** com a Tape Measure: clique na aresta de baixo (Y = 0), mova para cima e digite `3.45m`; depois `3.6m`, `4.8m` e `4.95m` (todas medidas a partir de Y = 0, paralelas à aresta). Clique na aresta da esquerda (X = 0), mova para a direita e digite `3.15m`, `3.3m`, `5.7m` e `5.85m`. Você terá oito guias.
5. **Line** (L): desenhe as divisórias apoiadas nas guias, com a inferência das cores:
   - Duas linhas horizontais atravessando o miolo em Y = 3,45 e Y = 3,60 (de uma parede externa à outra). Isso divide o miolo em 3 faixas.
   - Na faixa de trás (Y de 3,60 a 6,85), quatro linhas verticais em X = 3,15, 3,30, 5,70 e 5,85. A faixa fica em 5 blocos: quarto 1, divisória, meio, divisória, quarto 2.
   - No bloco do meio (X de 3,30 a 5,70), duas linhas horizontais em Y = 4,80 e Y = 4,95. Sobra corredor, divisória e banheiro.
6. Apague as guias que não precisa mais (a ajuda cita Edit > Delete no desktop, ou apague uma a uma com o Eraser; confira o nome na sua versão).

**Confira:** clique com o Select na face de cada ambiente. A janela **Entity Info** mostra a área da face selecionada (confira na sua versão). Compare com a tabela: 28,71 / 2,88 / 4,56 / 9,75 / 9,75 m².

## Fase 2: as paredes

**Por quê:** vamos usar o que a aula 6 explicou. A face das paredes é uma só (contorno mais divisórias), empurrada uma vez para todas terem a mesma altura.

1. Selecione as **cinco faces dos ambientes** (clique com Shift para adicionar) e apague (Delete). As arestas ficam; o que sobra preenchido é a **face única de todas as paredes**, com cinco buracos.
2. **Push/Pull** (P) na face das paredes: mova para cima e digite `2.7m`. Enter.
3. Selecione tudo (Ctrl+A) e **Make Group** (Edit > Make Group). Nomeie "Paredes" (Entity Info) e atribua a tag `01_Estrutura`.

**Confira:** orbite e olhe por dentro; as paredes devem ter espessura constante. Meça com a Tape Measure a altura de uma parede: 2,70 m.

## Fase 3: portas e janelas

**Por quê:** cada vão é um retângulo com medida real, aberto por Push/Pull (aula 6).

Para cada esquadria da tabela:

1. Dê **duplo clique** no grupo Paredes para entrar.
2. Com a Tape Measure, crie uma **guia vertical** clicando na aresta vertical de referência (última coluna da tabela), movendo ao longo da parede e digitando a distância (ex.: `1m` para P1). Uma guia criada a partir de uma aresta fica paralela a ela (aula 3). Se for janela, crie também uma **guia horizontal** clicando na aresta de base da parede e movendo para cima o valor do **Peitoril** (ex.: `1m` para J1).
3. **Rectangle** na face: clique na interseção das guias e digite largura e altura (ex.: `1.5m,1.2m` para J1; `0.9m,2.1m` para P1).
4. **Push/Pull** no retângulo para dentro da parede e digite `0.15m` (a espessura da parede). Isso cria as faces laterais do vão e, por a face oposta estar paralela e limpa, o furo abre. Se a face ao fundo do vão ficar, apague-a.
5. Use o **duplo clique** do Push/Pull nos vãos seguintes para repetir o `0.15m`.
6. Nas divisórias (P2 a P5), desenhe pela face indicada na tabela; o Push/Pull de `0.15m` atravessa a divisória até o outro ambiente.
7. Apague as guias ao terminar cada vão, para não confundir as seguintes.

**Confira:** os dez vãos abertos; nenhuma face fantasma cobrindo um vão (orbite para ver a face de trás de cada um).

## Fase 4: piso e terreno

**Por quê:** a casa precisa de um piso com espessura, e o piso precisa apoiar em algo.

1. Saia do grupo (clique em espaço vazio). Desenhe um retângulo `9m,7m` na origem, fora do grupo Paredes (ele fica no plano do chão, sem grudar nas paredes porque o grupo está fechado). **Push/Pull** para baixo `0.15m`. Agrupe: "Piso", tag `01_Estrutura`.
2. Terreno: em um espaço livre ao lado da casa, desenhe um retângulo `12m,20m` e agrupe ("Terreno", tag `05_Terreno`). Selecione o grupo, ative o **Move**, clique no canto do lote que ficará em X menor e Y menor e digite a coordenada global `[-1.5m,-5m,-0.15m]` (aula 3: coordenadas entre colchetes são medidas a partir da origem do modelo), Enter. O canto passa a X = -1,50, Y = -5,00, Z = -0,15: o lote cobre X de -1,50 a 10,50 e Y de -5,00 a 15,00, com o topo do terreno encostado na base do piso. Se a casa não ficar centrada no lote, o retângulo saiu com o sentido dos eixos trocado; confira e refaça.

## Fase 5: telhado

**Por quê:** fecha a casa e demonstra a inclinação como conta (aula 6).

1. Em um espaço livre, longe da casa e do lote, desenhe o triângulo da empena com a **Line**: clique em um ponto livre e, com o eixo verde travado, digite `8m` (a base). Na **linha média** (use a inferência de ponto médio), comece uma nova linha, trave no azul (seta para cima ou Shift) e digite `1.2m` (a altura da cumeeira). Ligue o ponto de cima às duas extremidades da base. Apague a linha vertical do meio com o **Eraser**. Sobra uma face triangular: base 8,00 m, altura 1,20 m (inclinação 1,20 / 4,00 = 30%).
2. **Push/Pull** no triângulo por `10m` na direção do eixo vermelho (9,00 m da casa mais 0,50 m de beiral em cada extremidade).
3. Agrupe: "Telhado", tag `02_Cobertura`.
4. **Move** o grupo: clique no vértice da base que ficará em X e Y menores (o canto de baixo do início do prisma) e digite a coordenada global `[-0.5m,-0.5m,2.7m]`. O telhado fica apoiado no topo das paredes, com beiral de 0,50 m em todo o contorno (a base vai de Y = -0,50 a Y = 7,50 e de X = -0,50 a X = 9,50). Confira orbitando: os quatro beirais devem ter a mesma medida.

## Fase 6: componentes (esquadrias)

**Por quê:** repetir 5 janelas e 5 portas sem refazer cada uma (aula 5).

1. Modele **uma janela** de 1,20 x 1,20 m: retângulo, **Offset** de `5cm` para dentro (o caixilho), **Push/Pull** do anel `6cm`. A face central é o vidro (aplicada depois com material transparente). Selecione tudo, **Make Component**, nome `Janela_120x120`, **Glue To: Vertical** (aula 5). Posicione nos vãos J2, J3 e J4.
2. Para J1 (1,50 x 1,20) e J5 (0,60 x 0,60): copie a janela, clique direito, **Make Unique**, e use o **Scale** com dimensão digitada. Renomeie.
3. Portas: modele uma porta de 0,80 x 2,10 m com folha (Push/Pull `4cm`) e batente e faça o componente `Porta_80x210`; para P1 (0,90) e P5 (0,70), Make Unique e Scale. Tag `03_Esquadrias`.
4. Alternativa: baixe janelas e portas do 3D Warehouse (aula 7), conferindo o tamanho.

## Fase 7: materiais e móveis

1. Materiais (aula 7): paredes em branco; piso em cinza ou porcelanato; telhado em cerâmica; terreno em verde; vidro transparente. Reaproveite materiais (peso).
2. Do 3D Warehouse: sofá, mesa, fogão e geladeira (pouco pesados), duas camas de casal e roupeiros para os quartos, vaso e pia para o banheiro. Confira o tamanho de cada peça com a fita métrica; tag `04_Mobiliario`.

## Fase 8: cenas e cortes

1. Cena **Fachada** (câmera frontal, sombras ligadas).
2. Cena **Planta**: vista de topo, projeção paralela, plano de seção horizontal na altura de corte de planta que você aprendeu no módulo 03 (por exemplo, `1.5m`: crie o plano sobre uma face horizontal e mova-o para cima no eixo azul com a distância digitada), e a tag `02_Cobertura` oculta.
3. Cena **Corte**: plano de seção vertical cruzando a sala e um quarto.
4. Cena **Interna**: câmera dentro da sala.

## Fase 9: verificação e limpeza

1. **Áreas:** repita a conferência das áreas dos ambientes (Fase 1) e da parede.
2. **Faces:** troque para um estilo monocromático (aula 10) e procure faces azuis voltadas para fora; use Reverse Faces ou Orient Faces (aula 10).
3. **Geometria solta:** abra o Outliner (aula 5); nada deve estar fora de grupos, exceto o que você decidiu deixar.
4. **Purge Unused** (Window > Model Info > Statistics > Purge Unused, aula 10) e salve.
5. Exporte uma imagem PNG (aula 8) da fachada.

## O que você conseguiu

Modelou uma casa de 63 m² a partir de uma tabela de medidas, com paredes de espessura constante, dez esquadrias, piso, telhado, terreno, cenas, tags e componentes. Se os passos funcionaram, você tem a base para o módulo 14 (projeto completo com a sua casa) e para levar a casa a outro programa (BIM no módulo 11, Blender no módulo 12, render no módulo 13).

## Resumo

- Uma planta em tabela vira modelo por etapas: contorno, Offset (espessura), guias, divisórias, face única de paredes, Push/Pull.
- A conferência de áreas (soma dos ambientes + paredes = área externa) valida a planta antes de subir paredes.
- Vãos: retângulo com medidas reais, guias para posicionar, Push/Pull pela espessura da parede.
- Piso, terreno e telhado ficam em grupos separados; esquadrias são componentes; móveis vêm do Warehouse.
- Cenas e cortes documentam o resultado; Purge Unused e verificação de faces fecham o trabalho.

## Para aprofundar

- [ ] [CASA COMPLETA NO SKETCHUP | TIMELAPSE DE 6 HORAS | A gente narrou o processo pra você!](https://www.youtube.com/watch?v=ns_PSOUcqFI) (Estúdio Mappa): casa completa do começo ao fim, com narração; use como fechamento.
- [ ] [Como modelar uma Casa no SketchUp - Aula 01](https://www.youtube.com/watch?v=ZJgA53f_O-Q) (Raquel Ynaliv - Arquitetura): primeira aula de uma série de modelagem de casa.
- [ ] [Projeto do zero no SketchUp - Parte 01: Antes do projeto](https://www.youtube.com/watch?v=Cu7pa0icn4E) (SketchUp Brasil): abertura de uma série longa do canal oficial; a lista completa não foi aberta e a série pode exigir plano pago.
- [ ] [How to Model a House in SketchUp Free (10 EASY Steps)](https://www.youtube.com/watch?v=LXpXVAgRLV0) (SketchUp School, inglês): casa simples em 10 etapas no Free.
- [ ] [Como fazer paredes e vãos de portas e janelas no sketchup](https://www.youtube.com/watch?v=yhk6eY5ADq0) (Amanda Goulart): paredes e vãos.
- [ ] [Como Fazer Planta Baixa no Sketchup Do Zero Passo A Passo](https://www.youtube.com/watch?v=MU30FQwWGQk) (Arnaldo Design): planta baixa do zero.
- [ ] [Tutorial: Modelando Telhado no Sketchup](https://www.youtube.com/watch?v=9_eUo3VlZ2o) (Guilherme Andrade): telhado; de 2017.

Nota: vídeos não assistidos; título e canal confirmados.

[Próxima aula: Erros comuns e boas práticas](./10%20-%20Erros%20Comuns%20e%20Boas%20Praticas.md)
