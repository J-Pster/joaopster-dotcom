[Voltar ao módulo](./README.md)

# Aula 8: Exercício guiado, a casa de 96 m²

*Pergunta que esta aula responde: como aplico, na ordem certa e com números, tudo o que vi nas aulas 1 a 7 para modelar no Blender a mesma casa do módulo 9 e provar, por conferência numérica, que o modelo bate com o projeto?*

Esta é a **casa térrea de 96 m², terreno de 10 x 25 m, rua ao sul** do módulo 3 (aula 8) e do exercício do [módulo 9, aula 8](../09%20-%20Pratica%20com%20Sweet%20Home%203D/08%20-%20Exercicio%20Guiado%20a%20Casa%20de%2096%20m2.md). Reutilizo exatamente as **coordenadas, espessuras, alturas e esquadrias** de lá, para você comparar os dois programas número a número. (O exercício do módulo 10, no SketchUp, usa outra casa, de 9 x 7 m. Se preferir modelar aquela, os métodos desta aula valem igual; troque os números pela tabela dela.)

**Como esta aula foi validada.** Reproduzi a geometria por script no **Blender 5.2.2 LTS** (setembro de 2026): contagens de vértices e faces, dimensões, modificadores e recortes. Os números de conferência abaixo saíram dessa reprodução. Os **cliques e teclas** seguem o Manual 5.2 e o mapa de teclas padrão lidos no programa, mas **não foram executados na janela do Blender**: se um rótulo ou tecla diferir na sua versão, o texto diz "confira", e a conferência numérica ao final é o juiz.

## O que você vai fazer e o que fica de fora

| Item do projeto | Como fica no modelo | Motivo |
|---|---|---|
| Convenção de medida | **Eixo a eixo** (paredes centradas no eixo: Solidify com Offset 0) | Módulo 3, aula 8 |
| Espessura das paredes | Externas 0,20 m; internas 0,10 m | Mesmos valores do módulo 9 |
| Alturas | Internas 2,70 m; externas e pilares 2,90 m; cumeeira 4,10 m | Módulo 9 |
| Desníveis (varanda -0,05 m, banheiro -0,02 m, terreno -0,30 m) | **Ignorados** | Como no módulo 9 |
| Telhado | Duas águas, 30%, beiral 0,60 m a leste e oeste, empena na parede norte | Módulo 9 |
| Empena sul (sobre a varanda) | **Não modelada** | Como no módulo 9 |
| Portas e janelas | **Só os vãos** (sem folhas, caixilhos, vidros) | Foco em precisão geométrica; esquadrias completas entram no módulo 13 |
| Piso | Laje de 0,10 m | Escolha do exercício |
| Ambientes, móveis, materiais | Fora desta aula | Módulo 13 |

**Convenção de direções:** X para leste, Y para norte, Z para cima. Origem no **canto sudoeste da varanda**; o piso da casa em Z = 0. A casa fechada (sala, cozinha, corredor e quartos) mede 8,00 x 10,00 m, de y = 2 a y = 12; a varanda de 8 x 2 m fica ao sul, de y = 0 a y = 2, sem paredes. É a mesma convenção do módulo 9: você pode copiar as tabelas de lá. Use **ponto decimal** ao digitar (`0.2`).

## Passo 0: preparar o arquivo

1. Abra o Blender e crie `File > New > General`. Apague o cubo padrão: no 3D Viewport, selecione-o e `X > Delete`. (Deixe a câmera e a luz, serão úteis no módulo 13.)
2. **Salve** como `casa96_blender_v01.blend` (`Shift-Ctrl-S`).
3. `Properties > Scene > Units`: **Unit System = Metric**, **Unit Scale = 1,0**, **Length = Meters** (aula 2). No 5.2.2 já vêm assim; confira.
4. Ligue o overlay **Statistics** (botão Overlays > Statistics): você lerá contagens de vértices, arestas e faces.
5. Confirme que o **3D Cursor** está na origem: `Shift-S > Cursor to World Origin`.
6. No **Outliner**, crie as coleções (botão direito em Scene Collection > New Collection; renomeie com `F2` ou duplo clique): **`01_Estrutura`**, **`02_Cobertura`**, **`90_Cortes_Externas`**, **`91_Cortes_Internas`**. (Se quiser a planta como referência, crie também **`00_Referencia`**, posicione-a como na aula 5 e desligue **Selectable**.) Para o objeto novo entrar numa coleção, **clique na coleção** para torná-la ativa; se errar, `M` move o objeto.

## Passo 1: paredes externas (o contorno fechado)

Na coleção `01_Estrutura`:

1. `Shift-A > Mesh > Plane`. `Tab` (Edit Mode). `A` seleciona tudo; **`M > At Center`**: os quatro vértices viram um. **Conferência:** Statistics mostra 1 vértice.
2. Painel lateral `N > Item > Transform`: o vértice selecionado tem campos `X, Y, Z`, com o seletor em **Global**. Digite **X = 0, Y = 2, Z = 0**.
3. Vista de topo (`Numpad 7`). Extrude cada trecho com o eixo e a distância:

| Comando | Vértice novo |
|---|---|
| `E`, `X`, `8`, `Enter` | (8, 2) |
| `E`, `Y`, `10`, `Enter` | (8, 12) |
| `E`, `X`, `-8`, `Enter` | (0, 12) |
| `E`, `Y`, `-10`, `Enter` | (0, 2): **sobre o vértice inicial** |

4. `A`, `M > By Distance`: funde o vértice duplicado. **Conferência:** 4 vértices, 4 arestas, 0 faces. Com o overlay **Measurement > Edge Length** ligado (Overlays em Edit Mode), cada aresta selecionada mostra 8,00 ou 10,00 m. Perímetro de eixo: 8 + 10 + 8 + 10 = **36,00 m**.
5. `A` e **`E`, `Z`, `2.9`, `Enter`**: as arestas viram as quatro paredes. **Conferência:** 8 vértices, 12 arestas, 4 faces.
6. **Empena (topo triangular da parede norte).** Vista de fundo (`Ctrl-Numpad 1`), modo de aresta (`2`). Clique na aresta do **topo da parede norte** (a que fica em y = 12, z = 2,9; confira em `N`: a mediana mostra Y = 12, Z = 2,9). Menu **`Edge > Subdivide`** (1 corte). Modo de vértice (`1`), selecione o vértice novo do meio (`N` deve mostrar X = 4, Y = 12, Z = 2,9) e digite **Z = 4.1**. **Conferência:** 9 vértices, 13 arestas, 4 faces.
7. `Tab` (Object Mode). `F2`: renomeie para **`Paredes_Externas`**.
8. Aba **Modifiers** (chave inglesa) > `Add Modifier > Generate > Solidify`:
   - **Mode: Complex**
   - **Thickness: 0.2**
   - **Offset: 0** (o padrão é -1: sem trocar, a parede sai deslocada)
9. **Conferência:** em `N > Item`, `Dimensions` = **8,2 x 10,2 x 4,1 m**. (Simple sem Even Thickness daria 8,141 x 10,171: aula 4.) `Location` (0, 0, 0) e `Scale` (1, 1, 1).
10. Overlay **Face Orientation**: as faces externas devem estar **azuis**. Se ficarem vermelhas: `Tab`, `A`, `Shift-N` (Recalculate Outside).

## Passo 2: paredes internas

Ainda em `01_Estrutura`. A ideia é a mesma, com uma rede de linhas (com T) em um só objeto.

1. `Shift-A > Mesh > Plane`, `Tab`, `A`, `M > At Center`. Em `N`: **X = 0, Y = 7, Z = 0**.
2. `E X 5 Enter` (chega a (5, 7)) e `E X 3 Enter` (chega a (8, 7)). É a **parede sul do corredor**, com um vértice em (5, 7) para receber a parede sala/cozinha.
3. Selecione o vértice em **(5, 7)** (clique nele; confira em `N`) e `E Y -5 Enter`: chega a **(5, 2)**. É a parede **sala/cozinha**.
4. Selecione qualquer vértice, **`Shift-D`** e **botão direito** (cancela o movimento e deixa a cópia parada e selecionada). Em `N`: **X = 0, Y = 8, Z = 0**. Esse vértice solto começa a **parede norte do corredor**: `E X 3 Enter` (3, 8); `E X 2 Enter` (5, 8); `E X 3 Enter` (8, 8).
5. Selecione o vértice **(3, 8)** e `E Y 4 Enter` (chega a (3, 12)): parede **Quarto 1/banheiro**. Selecione **(5, 8)** e `E Y 4 Enter` (chega a (5, 12)): parede **banheiro/Quarto 2**.
6. **Conferência do plano:** 10 vértices, 8 arestas. Comprimentos de aresta (overlay Measurement): 5, 3, 5, 3, 2, 3, 4 e 4 m. Soma: **29,00 m** (a mesma conferência do módulo 9).
7. `A` e **`E Z 2.7 Enter`**. **Conferência:** 20 vértices, 26 arestas, 8 faces.
8. `Tab`, `F2`: **`Paredes_Internas`**. `Add Modifier > Generate > Solidify`: **Complex**, **Thickness 0.1**, **Offset 0**.
9. **Conferência:** `Dimensions` = **8,0 x 10,0 x 2,7 m** (as divisórias vão de eixo a eixo das paredes externas). Face Orientation sem vermelho por fora.

## Passo 3: portas e janelas (cortadores e Boolean)

Regras (aula 4): cada vão é um **cubo** com a largura e a altura do vão e profundidade maior que a parede (**0,40 m** nas externas, **0,20 m** nas internas); as portas têm a base em **Z = -0,10** (abaixo do piso, para evitar faces coincidentes), então o cortador é 0,10 m mais alto. Centro ao longo da parede = média do início e do fim do quadro do módulo 9.

Tabela dos cortadores (metros; **Location** é o centro do cubo, **Dimensions** é a caixa final):

**Coleção `90_Cortes_Externas`** (profundidade 0,40 m)

| Código | Parede | Location X, Y, Z | Dimensions X, Y, Z | Vão real |
|---|---|---|---|---|
| P1 | frontal (y = 2) | 1,45; 2,00; 1,00 | 0,90; 0,40; 2,20 | 0,90 x 2,10, peitoril 0 |
| J1 | oeste (x = 0) | 0,00; 4,25; 1,70 | 0,40; 1,50; 1,20 | 1,50 x 1,20, peitoril 1,10 |
| J2 | leste (x = 8) | 8,00; 4,40; 1,70 | 0,40; 1,20; 1,20 | 1,20 x 1,20, peitoril 1,10 |
| J3 | norte (y = 12) | 1,50; 12,00; 1,70 | 1,50; 0,40; 1,20 | 1,50 x 1,20, peitoril 1,10 |
| J4 | norte (y = 12) | 4,50; 12,00; 2,10 | 0,60; 0,40; 0,60 | 0,60 x 0,60, peitoril 1,80 |
| J5 | norte (y = 12) | 6,50; 12,00; 1,70 | 1,50; 0,40; 1,20 | 1,50 x 1,20, peitoril 1,10 |

**Coleção `91_Cortes_Internas`** (profundidade 0,20 m)

| Código | Parede | Location X, Y, Z | Dimensions X, Y, Z | Vão real |
|---|---|---|---|---|
| P2 | sala/cozinha (x = 5) | 5,00; 4,00; 1,00 | 0,20; 0,80; 2,20 | 0,80 x 2,10 |
| P3 | sul do corredor (y = 7) | 1,40; 7,00; 1,00 | 0,80; 0,20; 2,20 | 0,80 x 2,10 |
| P4 | norte do corredor (y = 8) | 1,20; 8,00; 1,00 | 0,80; 0,20; 2,20 | 0,80 x 2,10 |
| P5 | norte do corredor (y = 8) | 4,00; 8,00; 1,00 | 0,70; 0,20; 2,20 | 0,70 x 2,10 |
| P6 | norte do corredor (y = 8) | 6,80; 8,00; 1,00 | 0,80; 0,20; 2,20 | 0,80 x 2,10 |

Origem dos números: as posições e medidas são as do quadro de esquadrias do módulo 3, com as escolhas de P5, P6, J4 e J5 feitas no módulo 9. J4 tem peitoril 1,80 e altura 0,60, portanto o centro em Z é 1,80 + 0,30 = 2,10. Para cada janela, o centro em Z é o peitoril mais a metade da altura (1,10 + 0,60 = 1,70).

**Como criar um cortador (repita para os onze):**

1. Torne ativa a coleção `90_Cortes_Externas` (ou `91_...`).
2. `Shift-A > Mesh > Cube`. No painel **Adjust Last Operation** (canto inferior esquerdo da vista): **Size = 1 m**. Digite **Location X, Y, Z** da tabela nesse painel (ou em `N`).
3. `N > Item > Dimensions`: digite X, Y, Z da tabela. (Com `Size` 1, o `Scale` fica igual às dimensões.)
4. `F2`: renomeie com o código (`P1`, `J1`...).
5. Do segundo em diante, você pode **duplicar** um cortador existente (`Shift-D`, botão direito) e apenas **retipar Location e Dimensions** e renomear: é mais rápido que criar do zero.

Quando os onze existirem:

6. Selecione todos os cortadores (clique com o botão direito em uma coleção no Outliner > **Select Objects**), `Ctrl-A > Scale` (aula 2). `Scale` volta a 1 e as dimensões se mantêm.
7. **Exibição:** `Properties > Object > Viewport Display > Display As = Wire` (ou Bounds) para vê-los como contorno. Se você selecionou vários, segurar `Alt` ao alterar o campo costuma aplicar o valor a todos (confira na sua versão); senão, repita por objeto.
8. **Fora do render:** em cada coleção de cortes, desligue **Show In > Renders** (aba Collection do Properties, ou o ícone de câmera do Outliner).
9. **Boolean nas paredes:**
   - Selecione `Paredes_Externas` > Modifiers > `Add Modifier > Generate > Boolean` (**depois do Solidify**): **Operation = Difference**, **Operand Type = Collection**, **Collection = 90_Cortes_Externas**, **Solver = Exact**.
   - Em `Paredes_Internas`, o mesmo, com **91_Cortes_Internas**.
10. **Conferência:** os vãos abrem. Em Edit Mode não aparecem (o recorte é do modificador); em Object Mode sim. Por cálculo, o volume das paredes externas cai de 21,84 m³ para **20,022 m³** e o das internas de 7,7895 m³ para **6,9705 m³**; foi o que o Blender 5.2.2 devolveu na reprodução, sem arestas não manifold. Você não precisa medir volume; olhe as aberturas e faça a conferência de medidas do passo 6.
11. **Conferência do corte AA do módulo 3** (linha x = 1,45): os vãos P1 (x de 1,00 a 1,90), P3 (1,00 a 1,80), P4 (0,80 a 1,60) e J3 (0,75 a 2,25) devem conter x = 1,45. O topo de J1 e J3 fica em Z = 1,10 + 1,20 = **2,30 m**.

## Passo 4: piso e pilares

Em `01_Estrutura`:

1. **Piso:** `Shift-A > Mesh > Cube`, `Size = 1 m`. `Dimensions` **8,2; 12,2; 0,10**. `Location` **4,0; 6,0; -0,05** (a face de cima fica em Z = 0). `Ctrl-A > Scale`. Nome `Piso`. A laje cobre do lado externo das paredes (x de -0,1 a 8,1) e a varanda (y de -0,1 a 12,1).
2. **Pilar da varanda:** cubo `Size = 1 m`, `Dimensions` **0,2; 0,2; 2,9**, `Location` **0; 0; 1,45**, `Ctrl-A > Scale`, nome `Pilar_1`.
3. **Segundo pilar como cópia vinculada:** com `Pilar_1` selecionado, **`Alt-D`**, `X`, `8`, `Enter` (cópia vinculada 8 m a leste), nome `Pilar_2`. Confira `Location` X = 8. Em Edit Mode de um deles, qualquer alteração aparece nos dois (aula 6).

## Passo 5: o telhado de duas águas

Na coleção `02_Cobertura`. Números do módulo 9 (30% = 16,7°): beiral 0,60 m a leste e oeste; beiral a **2,72 m** (2,90 - 0,30 x 0,60), cumeeira a **4,10 m** (2,72 + 0,30 x 4,60), com 4,60 m de projeção do beiral à cumeeira; comprimento ao longo da cumeeira 12,00 m (y = 0 a y = 12).

1. `Shift-A > Mesh > Plane`, `Tab`, `A`, `M > At Center`. Em `N`: **X = -0.6, Y = 0, Z = 2.72** (beiral oeste).
2. `E`, depois **`Esc`**: o movimento é cancelado, mas o vértice novo permanece, sobre o antigo e selecionado (é a "armadilha" da aula 3 usada de propósito; confirme que Statistics passou a mostrar 2 vértices; se o novo não ficou selecionado, selecione-o). Em `N`: **X = 4, Y = 0, Z = 4.1** (cumeeira).
3. `E`, `Esc`, e em `N`: **X = 8.6, Y = 0, Z = 2.72** (beiral leste).
4. **Conferência do perfil:** 3 vértices, 2 arestas. Vista de frente (`Numpad 1`): um "V invertido".
5. `A` e **`E`, `Y`, `12`, `Enter`**: o perfil vira as **duas águas**. **Conferência:** 6 vértices, 7 arestas, 2 faces.
6. `Tab`, nome **`Telhado`**, `Solidify`: **Thickness 0.04**, **Offset 0** (Simple ou Complex servem).
7. **Conferência:** `Dimensions` ≈ **9,21 x 12,00 x 1,42 m**. (O pequeno excesso vem da espessura de 0,04 m em torno do plano teórico; a cumeeira superior fica em 4,12 m.) Face Orientation: a face de cima azul.
8. Para inspecionar o interior, esconda a coleção `02_Cobertura` (olho no Outliner).

## Passo 6: conferência final (a "prova" do módulo 3)

| Item | Valor esperado | Como conferir |
|---|---|---|
| Perímetro de eixo externo | 36,00 m | plano do passo 1, overlay Measurement (8 + 10 + 8 + 10) |
| Comprimento das paredes internas | 29,00 m | plano do passo 2 (5 + 3 + 5 + 3 + 2 + 3 + 4 + 4) |
| `Paredes_Externas` | 8,2 x 10,2 x 4,1 m | `N > Item > Dimensions` |
| `Paredes_Internas` | 8,0 x 10,0 x 2,7 m | idem |
| `Telhado` | ≈ 9,21 x 12,00 x 1,42 m | idem |
| Pé-direito interno | 2,70 m; topo das paredes externas 2,90 m; cumeeira 4,10 m | vista de frente + Measure |
| Beiral (2,72 m) e cumeeira (4,10 m) | 2,72 e 4,10 m | vértices do perfil do telhado (Edit Mode, `N`) |
| Onze vãos | posição e tamanho da tabela | vista de topo/frente e Measure |
| Corte AA (x = 1,45) | P1, P3, P4, J3 contêm x = 1,45 | vista de topo com os cortadores |

**Vão livre (o teste que separa modelo certo de modelo aproximado).** No módulo 9, as áreas livres saíram menores que as nominais porque as paredes ocupam espaço. Aqui, meça com a ferramenta **Measure** segurando **`Shift`** (mede entre faces paralelas, aula 2), em vista de topo:

| Cômodo | Largura x comprimento livres | Área livre |
|---|---|---|
| Sala | 4,85 x 4,85 | 23,52 m² |
| Cozinha | 2,85 x 4,85 | 13,82 m² |
| Corredor | 7,80 x **0,90** | 7,02 m² |
| Quarto 1 | 2,85 x 3,85 | 10,97 m² |
| Banheiro | 1,90 x 3,85 | 7,32 m² |
| Quarto 2 | 2,85 x 3,85 | 10,97 m² |

Soma dos ambientes fechados: **73,62 m²**, mais a varanda de 16,00 m² = 89,62 m², contra 96,00 m² nominais (mesma conta do módulo 9). Se o corredor medir 1,00 m em vez de 0,90 m, o Solidify das paredes internas está com espessura errada ou com Offset diferente de 0 (deve ser 0,10 m com Offset 0).

**Se algo não bate:** consulte a aula 9. Os erros mais prováveis são Offset do Solidify no padrão (-1), Solidify em Simple, `Scale` diferente de 1 nos cortadores ou nas paredes, vértice duplicado por extrusão cancelada, e cortadores sem profundidade suficiente.

## Passo 7: guardar e, se quiser, trocar arquivos

1. **Salvar** (`Ctrl-S`). Faça `File > Save Incremental` antes de mudanças grandes.
2. **Exportar** (aula 7): selecione `Paredes_Externas`, `Paredes_Internas`, `Piso`, `Pilar_1`, `Pilar_2`, `Telhado` (os cortadores **não**). `File > Export > Wavefront (.obj)`, **Export Selected Objects**, **Apply Modifiers** ligado (padrão), e, para um programa com Z para cima, **Forward Axis = Y, Up Axis = Z**. Teste importando e medindo.
3. **Extra (sobrado):** para praticar Array, modele uma escada com os números do módulo 9 (15 degraus, espelho 0,188 m, piso 0,264 m, comprimento 3,70 m) como na aula 4.
4. **Primeira imagem (opcional):** `Add > Camera`, `F12`. O módulo 13 trata de luz, materiais e render.

## O que você conseguiu

Modelou, sem nenhuma ferramenta de arquitetura, a casa do módulo 9 com **as mesmas medidas**, em uma estrutura de objetos e coleções que você pode alterar mudando números (espessura, altura, posição de um vão). Se cada conferência bateu, seu método de precisão está correto, e você está pronto para o **projeto completo do módulo 14**, no programa de sua escolha.

## Resumo

- Método: **eixo + `E` digitado + Solidify Complex (Offset 0)**, em objetos separados por espessura; **cortadores** (cubos com dimensões digitadas, base abaixo do piso nas portas) + **Boolean Difference por coleção**; piso, pilares (cópia vinculada `Alt-D`) e telhado (perfil de três vértices extrudado, `E Y 12`) por números.
- As conferências saem do próprio programa: **Statistics**, **Measurement** de arestas, **Dimensions** e **Measure com Shift** entre faces (vão livre 4,85 m na sala e 0,90 m no corredor).
- O que bate com o módulo 9: as mesmas coordenadas de paredes, os mesmos vãos e as mesmas alturas (2,70 / 2,90 / 2,72 / 4,10).
- O que difere: aqui as portas e janelas são só vãos, a empena norte é parte da parede (sem dividi-la) e as paredes têm espessura por modificador.

## Para aprofundar

Vídeos não assistidos; título e canal confirmados. Nenhum deles usa a casa deste exercício; servem para ver o gesto no programa.

- [ ] [In-Depth Floor Plan Tutorial Part 1 [UPDATED 2025]](https://www.youtube.com/watch?v=94kAIpRnhcY) (Dude Blender, inglês): o fluxo mais parecido com o deste exercício: plano na dimensão real, contorno com extrusões, subida das paredes e Solidify (Blender 4.3). A parte 2 (portas, janelas e mobiliário) e a 3 (materiais, luz e render) estão descritas na página do vídeo.
- [ ] [Curso de Blender para Arquitetura, Gratuito e Completo (4 horas)](https://www.youtube.com/watch?v=hPGc3RPD2Ls) (Allan Brito, português, Blender 5.1): pela apresentação, cria "um pequeno ambiente 3D" com modelagem de precisão e snap, e importa SketchUp e OBJ. É a melhor trilha em português para o assunto.
- [ ] [Blender for Architects: Complete Free Course by an Architect (3.5 Hours)](https://www.youtube.com/watch?v=Zq5uOnFjAIE) (Blender 3D Architect, inglês): curso completo do mesmo autor (a versão do Blender não foi confirmada).
- [ ] [Blender for Architecture: Design a Complete House in 3D](https://www.youtube.com/watch?v=iR70lDUWlzs) (Expose Academy, inglês): uma casa completa; não sei se cobre escada e mobiliário.
- [ ] [COMO MODELAR UMA CASA COMPLETA DO 0 NO BLENDER | DO INICIO AO FIM | ARCHVIZ](https://www.youtube.com/watch?v=uWykB7-elHk) (Janary Junior, Archblinder, português): terreno, piso, paredes, forro e telhado, em português (de 2022, provavelmente Blender 3.x).
- [ ] [Modelagem Completa de uma Casinha no Blender, Do Zero ao Render](https://www.youtube.com/watch?v=-N50BssA5qA) (Lupi Studio, português): casinha completa, de 2023.
- [ ] [The RIGHT Way to Use Booleans for Architecture in Blender!](https://www.youtube.com/watch?v=O096KljrPh4) (The CG Essentials, inglês): coleções booleanas, o método dos passos do cortador.
- [ ] [Create stairs quickly and easily in Blender 4.2, no add-ons, no complicated math](https://www.youtube.com/watch?v=3HrJfaCbGs8) (Expose Academy, inglês): para o extra da escada.

[Próxima aula: Erros comuns e boas práticas](./09%20-%20Erros%20Comuns%20e%20Boas%20Praticas.md)
