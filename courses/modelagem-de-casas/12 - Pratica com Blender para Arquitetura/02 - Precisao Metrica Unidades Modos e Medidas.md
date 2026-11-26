[Voltar ao módulo](./README.md)

# Aula 2: Precisão métrica: unidades, modos e medidas

*Pergunta que esta aula responde: como garantir que 2,90 m no projeto sejam exatamente 2,90 m no Blender, e como conferir isso?*

## Por que o método importa

No Sweet Home 3D e no SketchUp a precisão vem quase de graça: o programa entende "parede" ou oferece uma caixa de medida ao lado do cursor. No Blender, um `G` seguido de um arrasto de mouse coloca o vértice em qualquer lugar, com muitas casas decimais de erro. Para chegar a um modelo que passe na prova numérica (perímetro, alturas, vãos), você combina quatro ferramentas: **unidades corretas**, **valores digitados**, **transformações aplicadas** e **medição de conferência**. Esta aula ensina as quatro, nessa ordem, porque cada uma depende da anterior.

## 1. Unidades: o que "1" significa

O Blender trabalha internamente com **unidades do Blender** (BU). A pergunta é quanto vale 1 BU no mundo real. A resposta está em `Properties > Scene > Units` (Manual 5.2, Scene Properties):

| Campo | O que faz | Valor recomendado |
|---|---|---|
| **Unit System** | None, Metric ou Imperial: como a interface mostra e interpreta valores | **Metric** |
| **Unit Scale** | Fator entre a unidade interna e o valor exibido | **1,0** |
| **Length** | Unidade fixa de exibição (Meters, Centimeters etc.) ou Adaptive, que muda conforme a grandeza | **Meters** (ou Centimeters, ver abaixo) |
| **Separate Units** | Exibe "2 m 28,5 cm" em vez de "2,285 m" | à sua escolha |
| **Rotation** | Degrees ou Radians | **Degrees** |

O ponto fundamental do Manual: **Unit Scale altera só o que a interface mostra**, não o comportamento interno (simulações de física, por exemplo, ignoram). Com escala 1,0 e Metric, **1 BU = 1 metro**, e é isso que você quer: o número que aparece é o número real. Alguns tutoriais usam Unit Scale 0,01 com Length em milímetros; funciona, mas mistura duas escalas (a interna e a exibida) e é fonte clássica de confusão em exportação (aula 7). **Mantenha 1,0.**

O Blender 5.2.2 já abre com Metric, escala 1,0 e Length em metros (verificado rodando o programa em segundo plano). Confira mesmo assim, porque arquivos e configurações antigas podem alterar isso.

**Digitar com unidade.** Em qualquer campo numérico, você pode digitar o número com unidade, e o Blender converte (Manual, Input Fields): `20cm`, `1m 3mm`, `2.9m`. Sem unidade, o número segue a unidade de exibição. Isso resolve o dilema "metros ou centímetros": deixe a exibição em metros e digite `20cm` quando for mais natural.

## 2. Modo Objeto e modo Edição: dois níveis de edição

Este é o conceito mais importante para entender por que a precisão do Blender exige método. Todo objeto tem **dois níveis** (Manual, Object Modes):

- **Object Mode** (padrão): edita o objeto **como um todo**: sua posição (`Location`), rotação (`Rotation`) e escala (`Scale`). A malha em si não muda; o objeto é como uma caixa que carrega a malha e é movida, girada, esticada.
- **Edit Mode** (`Tab` alterna): edita a **malha**: vértices, arestas e faces. A geometria muda.

Analogia da maquete: Object Mode é mover a maquete inteira na mesa; Edit Mode é serrar e colar as paredes dela. Modelar é sobretudo Edit Mode.

O **ponto de origem** (origin) é o ponto pequeno que marca a posição do objeto. `Location` é a posição da origem no mundo; os vértices ficam em coordenadas relativas a ela (coordenadas **locais**). Um objeto pode ter a origem longe da malha, o que causa surpresas: por isso a prática recomendada é manter a **origem de cada objeto no centro do mundo (0, 0, 0)**, como faz o exercício (aula 8).

### Location, Rotation, Scale e Dimensions

Em `N > Item > Transform` (Manual, Sidebar), no Object Mode você vê:

- **Location, Rotation, Scale:** as três propriedades do objeto.
- **Dimensions:** o tamanho da caixa envolvente do objeto, alinhada aos eixos locais.

**Dimensions e Scale estão ligadas.** Digitar `Dimensions X = 5 m` faz o Blender ajustar `Scale X` para que a caixa fique com 5 m. Funciona e é o caminho mais rápido para dimensionar um objeto por um número exato, mas deixa `Scale` diferente de 1. É aí que entra a regra 4.

## 3. Aplicar transformações (`Ctrl-A`)

O **problema**: se você esticou um cubo em Object Mode, a malha continua sendo o cubo de 2 m, e o objeto apenas carrega "escala 3" para parecer maior. Ferramentas e modificadores costumam trabalhar com a **malha** e depois aplicar a escala do objeto por cima. Resultados: espessura de Solidify que varia por lado, chanfro (Bevel) que fica desigual, Array com espaçamentos errados, exportação com objetos em tamanho errado.

O Manual do Solidify avisa expressamente: a espessura é calculada com coordenadas locais dos vértices; se o objeto tem escala não uniforme, a espessura varia nos lados, e a solução é aplicar (Apply) ou limpar (Clear) a escala.

A **solução**: `Object > Apply` (`Ctrl-A`) e escolher `Scale` (ou `Rotation & Scale`). O Manual 5.2 descreve o efeito: `Scale` volta a 1,0, a geometria é ajustada para o objeto parecer igual, e o novo tamanho vira o "tamanho padrão" da malha. O objeto não muda de aparência. Regras práticas:

- Aplique `Scale` **assim que** mudar a escala em Object Mode. Quanto mais cedo, menos você esquece.
- **Não aplique `Location`** sem intenção: ela move a origem do objeto para o centro do mundo (o que, no nosso método, já é o desejado, mas surpreende quem não esperava).
- Se o objeto compartilha a malha com outros (instâncias, aula 6), o Blender pede para torná-lo de usuário único primeiro (Manual, Apply).
- Alternativa: escalar sempre em Edit Mode, que deixa `Scale` em 1 naturalmente. Também é possível travar os cadeados ao lado dos campos de `Scale` para impedir alteração interativa.

Regra de ouro para o resto do módulo: **antes de aplicar um modificador ou exportar, `Location` = (0,0,0) se você adotou origem no centro, `Rotation` = (0°,0°,0°) e `Scale` = (1,1,1).**

## 4. Valores digitados

### No painel lateral

- **Object Mode:** `N > Item > Transform`: digite `Location`, `Rotation` e `Dimensions` de um objeto.
- **Edit Mode:** com um vértice selecionado, o painel mostra suas coordenadas `X, Y, Z` (com vários selecionados, mostra a **mediana**, isto é, o centro). Um seletor alterna entre coordenadas **Global** e **Local**. Digitar aqui posiciona o vértice exatamente. É o método mais preciso e o usado no exercício.

### Durante uma transformação

Depois de `G`, `R` ou `S`, digite um número (Manual, Numeric Input):

- `G X 2 Enter`: move 2 m no eixo X global. `G X -2.5 Enter` move -2,5 m.
- `Tab` passa ao próximo eixo: `G 1 Tab 0 Tab 2.5 Enter` move (1, 0, 2,5).
- `R Z 90 Enter`: gira 90° em torno de Z. Valor positivo gira no sentido horário, segundo o Manual.
- `S 2 Enter`: dobra a escala. `S Z 0 Enter` achata no eixo Z.
- **Modo avançado** (`=` ou `NumpadAsterisk`): aceita **unidades e expressões**: `= 20cm`, `= 2.9 - 0.18`, `= 8/3`. `Ctrl-=` volta ao modo simples.
- No modo simples: `.` para decimais, `-` inverte o sinal, `/` inverte o valor, `Backspace` apaga o que digitou (Manual).

A mesma lógica vale para extrusão (`E`, aula 3): `E Z 2.9 Enter` sobe 2,90 m.

### O 3D Cursor: o ponto de partida

Todo objeto novo nasce no **3D Cursor**. Antes de adicionar, confirme onde ele está. Três formas de posicioná-lo com precisão (Manual, 3D Cursor):

- **Numericamente:** `N > View > 3D Cursor > Location`.
- **Menu Snap** (`Shift-S`, menu pie): *Cursor to World Origin*, *Cursor to Selected*, *Cursor to Grid*, *Cursor to Active*.
- Com o mouse: `Shift-clique direito` (impreciso; use só para posições aproximadas).

Depois de criar um objeto, o painel **Adjust Last Operation** (canto inferior esquerdo da vista) permite corrigir na hora seus parâmetros: por exemplo, em um cubo, `Size`, `Location` e `Rotation`. O cubo do Blender tem `Size` 2 m por padrão; com `Size` 1 m, **os campos de escala e de dimensão coincidem em valor**, o que simplifica o dimensionamento por digitação (usado na aula 8).

O cursor tem outro papel: pode ser o **pivô** de rotação e escala (seletor `Transform Pivot Point` no cabeçalho, atalho `.`). Definir o cursor num canto conhecido e escalar em torno dele é a técnica padrão para dimensionar uma imagem de planta (aula 5).

## 5. Snapping: alinhar com precisão sem digitar

**Snapping** faz o mouse "grudar" em alvos: vértices, arestas, faces, ou a grade. Liga e desliga no botão de ímã do cabeçalho (`Shift-Tab`), ou temporariamente segurando `Ctrl` (Manual, Snapping). Duas escolhas no menu do ímã:

- **Snap Base** (o que gruda): *Closest* (o vértice ou canto mais próximo do alvo), *Center*, *Median*, *Active*.
- **Snap Target** (a quê): *Increment* (passos da grade), *Grid*, *Vertex*, *Edge*, *Face*, *Volume*, *Edge Center*, *Edge Perpendicular*, *Face Center*. Vários alvos podem ficar ligados juntos com `Shift-clique`.

Duas observações para arquitetura:

- **Increment** anda em múltiplos da grade visível **e o passo muda com o zoom** (1 unidade no zoom padrão, 1/10 ao aproximar, e assim por diante; Manual, Precision). Serve para rascunho; para números exatos, digite.
- **Vertex** é o melhor amigo para alinhar: mover um vértice ou objeto até coincidir exatamente com outro vértice, sem digitar coordenadas, e para dar a uma extrusão a mesma altura de outro objeto.

Segurar `Shift` durante uma transformação reduz a velocidade a 1/10 (controle fino); `Ctrl+Shift` combina os dois (Manual, Precision). Quando um snap "não pega", o motivo mais comum é escala não aplicada (aula 9).

## 6. Medir e conferir

Você só sabe que o modelo está certo se medir. Quatro ferramentas:

1. **Campos do painel lateral:** `Dimensions` de cada objeto (caixa envolvente); coordenadas de um vértice em Edit Mode.
2. **Ferramenta Measure** (Toolbar > Measure, Manual 5.2): arraste uma régua na vista; `Ctrl` ao arrastar as pontas ativa snap em arestas e vértices; **`Shift` ao arrastar mede a distância entre faces**, que funciona bem com faces paralelas como paredes, ideal para conferir **vão livre** (a medida interna entre paredes que o módulo 9 chamou de área livre). Clicar no ponto do meio da régua a converte em transferidor (ângulo). Réguas usam as unidades da cena, aparecem só com a ferramenta ativa e não vão para o render. Para apagar, selecione a régua e `Delete`.
3. **Overlay Measurement** (só em Edit Mode, no popover Overlays): mostra automaticamente **Edge Length** (comprimento de arestas selecionadas), **Face Area** (área de faces), Edge Angle e Face Angle. Segundo o Manual, os valores respeitam o espaço de transformação do painel lateral: use **Global** se quiser que a escala do objeto entre na medida.
4. **Overlay Statistics:** conta objetos, vértices, arestas e faces. É a verificação mais simples de que uma operação fez o que você esperava (um cubo tem 8 vértices, 12 arestas, 6 faces).

### Exemplo numérico: uma parede de teste

1. `Shift-A > Mesh > Cube`. No painel **Adjust Last Operation**, `Size` = 1 m.
2. `N > Item`: `Dimensions` X = 5, Y = 0.2, Z = 2.7. `Scale` passa a (5, 0.2, 2.7).
3. `Ctrl-A > Scale`. `Scale` volta a (1, 1, 1) e `Dimensions` continua (5, 0,2, 2,7).
4. `Location` Z = 1.35: a base do cubo repousa em Z = 0 (a metade da altura).
5. Confira: Edit Mode, seleciona uma aresta vertical, overlay Measurement > Edge Length mostra 2,7 m.

Você acabou de fazer uma parede exata por números. O resto do módulo é repetir esse raciocínio com método.

## Resumo

- Configure `Scene > Units`: **Metric, Unit Scale 1,0, Length em Meters**. Assim 1 unidade = 1 m e o número na tela é o número real. Unit Scale só altera a exibição.
- **Object Mode** move o objeto (Location, Rotation, Scale); **Edit Mode** altera a malha. Mantenha a origem dos objetos no centro do mundo.
- **`Ctrl-A > Scale`** após qualquer escala em Object Mode; senão Solidify, Bevel, Array e exportação medem errado.
- Precisão vem de números: campos do painel `N` (Location, Dimensions, coordenadas de vértice), digitação em `G`/`R`/`S`/`E` e unidades digitadas (`20cm`).
- Snapping alinha (Vertex é o mais útil), Increment é aproximado. **Confirme medindo**: Dimensions, ferramenta Measure (com `Shift` entre faces), overlay Measurement e Statistics.

## Para aprofundar

Vídeos não assistidos; título e canal confirmados.

- [ ] [Blender 3D Unit Scale & Grid Snapping: Learn Precision Modelling](https://www.youtube.com/watch?v=6HgooYZ5obk) (MJ3D Blender, inglês): como Unit Scale e Length se relacionam com o passo da grade (o autor usa escala 0,01 e milímetros; leia a aula acima para saber por que aqui mantemos 1,0).
- [ ] [Getting Started with SNAPPING in Blender! Snapping Tools Tutorial](https://www.youtube.com/watch?v=0p06F1LzTjQ) (The CG Essentials, inglês): tour completo do snapping, com capítulos de incremento, vértice, aresta, face, volume e ponto médio. Menciona o uso para alinhar paredes.
- [ ] [How to Use Blender's Snapping Feature (Tutorial)](https://www.youtube.com/watch?v=-c0Evpf8V3A) (Ryan King Art, inglês): versão mais curta, com capítulos de snap em modo de edição e alvos múltiplos.
- [ ] [How to Scale a Floor Plan in Blender for Architectural Visualization](https://www.youtube.com/watch?v=8iMWUsqeopQ) (What Make Art, inglês): usa o painel de dimensões, o 3D Cursor como pivô e a ferramenta Measure para conferir; prepara a aula 5.
- [ ] [Curso de Blender para Arquitetura, Gratuito e Completo (4 horas)](https://www.youtube.com/watch?v=hPGc3RPD2Ls) (Allan Brito, português): a apresentação cita explicitamente ferramentas de precisão e o sistema de snap como partes do curso.
- [ ] [Bevel Not Working properly in Blender? Here's the Fix!](https://www.youtube.com/watch?v=hgKmMH2DijA) (3D Artisanal, inglês): vídeo curto sobre o sintoma clássico da escala não aplicada.
- [ ] [Why Do We Need To Apply The Scale Of Our Objects?](https://www.blenderbasecamp.com/why-do-we-need-to-apply-the-scale-of-our-objects/) (Blender Base Camp, artigo em inglês): explica, com exemplo de bevel, por que aplicar a escala e quando.
- [ ] [How and why do we apply scale in Blender?](https://artisticrender.com/how-and-why-do-we-apply-scale-in-blender/) (Artisticrender, artigo em inglês): o mesmo tema, com a alternativa de travar a escala e de escalar só em modo de edição.
- [ ] [Manual do Blender 5.2 LTS: Scene Properties (Units)](https://docs.blender.org/manual/en/latest/scene_layout/scene/properties.html) e [Numeric Input](https://docs.blender.org/manual/en/latest/scene_layout/object/editing/transform/control/numeric_input.html) (Blender Foundation): a fonte oficial das tabelas desta aula.
- [ ] [Manual do Blender 5.2 LTS: Measure](https://docs.blender.org/manual/en/latest/editors/3dview/toolbar/measure.html) (Blender Foundation): a ferramenta de medição, com as teclas `Ctrl` e `Shift`.

[Próxima aula: Ferramentas de malha](./03%20-%20Ferramentas%20de%20Malha.md)
