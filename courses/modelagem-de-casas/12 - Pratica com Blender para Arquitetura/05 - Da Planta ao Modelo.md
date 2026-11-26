[Voltar ao módulo](./README.md)

# Aula 5: Da planta ao modelo

*Pergunta que esta aula responde: em que ordem e com que técnicas se transforma uma planta baixa (imagem ou números) em paredes, vãos, pisos, telhado e escada no Blender?*

## Por que essa aula existe

No módulo 7 (aula 8, [Da planta ao modelo](../07%20-%20Fundamentos%20de%20Modelagem%203D%20CAD%20e%20BIM/08%20-%20Da%20Planta%20ao%20Modelo.md)) você viu que planta, corte e fachada são consequência do modelo, e que as paredes precisam de espessura real. No módulo 3 (aula 9) você viu a passagem do desenho 2D ao 3D. Aqui é a versão Blender, em oito passos. O que muda em relação ao Sweet Home 3D e ao SketchUp é que **nenhuma ferramenta "sabe" o que é parede**: você escolhe uma técnica e a aplica com disciplina de números. As aulas 2 a 4 deram as peças; esta aula as junta na ordem certa.

## Passo 1: a referência (opcional, mas útil)

Se você tem a planta como **imagem** (PNG, JPG), o Blender a mostra dentro da cena como referência para traçar. Duas formas (Manual e interface do 5.2):

- **`Add > Image > Reference...`** (na interface, `Shift-A > Image`): cria um **objeto Empty do tipo imagem**. O Empty só existe para exibir a imagem; não tem geometria e não sai no render. Coloque a vista em **topo (`Numpad 7`) antes de adicionar**, senão a imagem entra inclinada. Se entrar torta, `Alt-R` limpa a rotação.
- **`Add > Image > Mesh Plane...`**: cria um **plano** com a imagem como textura. O painel de opções tem `Size Mode`; em **Absolute** você digita a **altura em metros** e a largura acompanha a proporção da imagem (Manual, Mesh Plane). Se a imagem estiver recortada exatamente sobre uma dimensão conhecida (por exemplo, 12 m de profundidade), a escala já sai certa. `Align` define a orientação (Z+ para deitar no piso); o plano nasce no 3D Cursor.

Arquivos aceitos: formatos de imagem comuns. Um **PDF** de planta precisa ser convertido em imagem antes.

**Propriedades de exibição do Empty de imagem** (Manual, Empties; `Properties > Object Data`): `Size` e `Offset X/Y` (posição da origem dentro da imagem), `Opacity`, **`Depth`** (Front faz aparecer na frente dos outros objetos), `Show in: Perspective/Orthographic` (desligue Perspective para a referência não atrapalhar as vistas 3D) e `Only Axis Aligned`. O Manual sugere, para modelar sobre uma planta, **Depth em Front com Opacity baixa**.

**Trave a referência** para não movê-la sem querer: coloque-a numa coleção própria (aula 6) e desligue **Selectable** nessa coleção (o Manual cita esse caso: "referências").

### Escalar a imagem para 1:1 (o passo que decide a precisão)

Uma imagem não tem escala real. Método (mostrado no vídeo de What Make Art, listado abaixo):

1. Identifique uma **cota conhecida e grande** na planta (a maior dimensão dá mais precisão): por exemplo, a largura externa da casa de 8,00 m.
2. Ponha o **3D Cursor** no canto onde a cota começa (`Shift-S > Cursor to Selected`, sobre um vértice de referência, ou digite em `N > View > 3D Cursor`).
3. Mude o **Transform Pivot Point** (cabeçalho, atalho `.`) para **3D Cursor**.
4. Com a imagem selecionada, meça na vista o comprimento que a cota ocupa (ferramenta **Measure**, aula 2), calcule `fator = real / medido` e digite `S`, o fator, `Enter`. O pivô no cursor mantém o canto no lugar.
5. **Verifique com uma segunda cota** em outro lugar da planta. Um erro de alguns centímetros é esperado.

**Limite honesto:** medir sobre imagem não é CAD. A precisão é a da imagem (resolução e distorção do escaneamento). Para plantas em **DXF** (o formato de troca do CAD 2D, módulo 7, aula 7), existe um importador de DXF disponível como extensão (aula 7), que preserva medidas.

## Passo 2: escolher a técnica de parede

| Técnica | Como | Vantagens | Limites |
|---|---|---|---|
| **A. Eixo + Solidify** (a deste módulo) | Desenhar só o **eixo** das paredes, extrudar para cima, dar espessura com o modificador | Espessura editável em um campo; convenção "eixo a eixo" do projeto; poucas faces para editar | Uma espessura por objeto: paredes de espessuras diferentes pedem objetos separados |
| B. Contorno fechado + extrudar | Traçar o contorno interno e o externo, criar faces, extrudar | Espessuras livres, uma peça só | Muito mais trabalho, e o T entre paredes exige cuidado |
| C. Um cubo por parede | `Add > Cube`, dimensões digitadas | Direto para poucas paredes | Cantos exigem sobreposição consciente; cada parede é um objeto; sem soldagem |
| D. Extensões | Archimesh, Archipack, Home Builder e outros (aula 7), ou Bonsai para BIM | Paredes paramétricas, portas e janelas prontas | Dependência de versão; comportamentos próprios |

A técnica A é a do vídeo de Dude Blender (Part 1, 2025) e a que o exercício da aula 8 detalha. O mesmo vídeo observa que, quando algumas paredes precisam ser mais finas, é preciso criar **outro objeto de paredes**, cada um com seu Solidify.

## Passo 3: traçar o eixo com números

Detalhe do método (aula 3, "Fluxo típico"):

1. **Um vértice inicial:** `Add > Mesh > Plane`, `Tab`, `A`, `M > At Center`. Sobra um vértice na origem do objeto. Em `N > Item` digite suas coordenadas `X, Y, Z` (global).
2. **Extrudar por trechos**, com valores da planta: `E`, `X` (ou `Y`), comprimento, `Enter`. Se a planta tem cotas de eixo a eixo (como o quadro de esquadrias do módulo 3, aula 8), você copia as cotas sem conta.
3. **Fechar o contorno:** extrude o último trecho até coincidir com o primeiro vértice e use `M > By Distance` para soldar. Confira com **Statistics**: um retângulo fechado tem 4 vértices e 4 arestas.
4. **T e cruzamentos:** para uma parede interna encontrar outra, o encontro precisa de um **vértice compartilhado**. Se a parede passa direto, crie o vértice nesse ponto (por exemplo, extrudando em dois trechos) e sai dele a ramificação. Sem o vértice, as paredes se sobrepõem em vez de se unirem.
5. **Linhas soltas:** para começar uma linha separada, selecione um vértice, `Shift-D`, botão direito (cancela o movimento e deixa a cópia) e digite as novas coordenadas.
6. **Snapping para traçar sobre imagem:** com a referência escalada, ligue o snap (aula 2) e trace a partir dos cantos visíveis; depois **corrija para os números do projeto** digitando em `N`. O que vale é o número, não o pixel.

## Passo 4: subir as paredes e dar espessura

1. Em modo de edição, `A` (tudo) e `E Z altura Enter`: cada aresta vira uma face vertical.
2. `M > By Distance` (limpeza).
3. Modificador **Solidify: Complex, Thickness = espessura, Offset = 0** (aula 4). Se houver mais de uma espessura, repita o processo em objetos separados (externas 0,20 m e internas 0,10 m no exercício).
4. **Empena (topo triangular):** para uma parede que sobe até a cumeeira, subdivida a aresta do topo (`Edge > Subdivide`), selecione o vértice do meio e digite sua altura em `N`. A face vira um pentágono de "casinha". A aula 8 faz isso com valores.
5. **Face Orientation** (overlay): confira se as faces estão azuis por fora. Se ficarem vermelhas, `A` e `Shift-N` (Recalculate Outside), ou `Alt-N > Flip`.

## Passo 5: os vãos

Cada porta e janela do quadro de esquadrias vira um **cortador** (cubo) e um **Boolean** com coleção (aula 4). Conversão do quadro do módulo 3 para o Blender:

| No quadro de esquadrias | No cortador |
|---|---|
| Posição ao longo da parede (início e fim) | Centro = (início + fim) / 2 |
| Largura x altura do vão | Dimensão ao longo da parede = largura; dimensão em Z = altura |
| Peitoril (janela) | Centro em Z = peitoril + altura / 2 |
| Porta (peitoril 0) | Base em Z = -0,10 m (abaixo do piso, para evitar faces coincidentes), topo na altura da porta; Dimensão Z = altura + 0,10; centro em Z = (altura - 0,10) / 2 |
| Espessura da parede | Dimensão transversal = espessura + folga (0,40 m para paredes de 0,20 m; 0,20 m para as de 0,10 m) |

Exemplo, porta P1 do módulo 9 (0,90 x 2,10 m, posição de x = 1,00 a 1,90 na parede frontal em y = 2): centro X = 1,45; Y = 2,00 (eixo da parede); Z = (2,10 - 0,10) / 2 = 1,00; dimensões (0,90; 0,40; 2,20). Exemplo, janela J1 (1,50 x 1,20 m, peitoril 1,10, parede oeste em x = 0, y de 3,50 a 5,00): centro (0; 4,25; 1,10 + 0,60 = 1,70); dimensões (0,40; 1,50; 1,20).

**Alternativa sem Boolean**, quando você vai exportar geometria limpa: em Edit Mode, marcar o contorno do vão com **Loop Cut** (ou Knife/Inset), **apagar as faces** (`X > Faces`) e ligar os dois lados com **Bridge Edge Loops** (aula 3). O resultado é uma malha mais limpa, ao custo de mais trabalho a cada mudança. O artigo da blender.fi listado abaixo descreve, pelos capítulos, vãos abertos por edição da malha e o preenchimento das aberturas.

## Passo 6: pisos e lajes

Piso e laje são **volumes achatados**: um cubo com dimensões digitadas, com a face de cima na cota do piso acabado (Z = 0). Regra: **espessura real** (a laje de 10 a 12 cm do módulo 4, aula 4, ou os 10 cm usados no exercício). Como o módulo 4 (aula 7) lembra, o piso a piso soma laje, contrapiso e piso (por exemplo, 2,70 + 0,20 + 0,05 = 2,95 m). Para um segundo pavimento, **duplique** (`Shift-D`) os objetos e mova em Z o piso a piso; as instâncias vinculadas (aula 6) dispensam refazer o que se repete.

Ambientes com pisos diferentes (madeira na sala, cerâmica no banheiro) pedem faces separadas por ambiente: crie planos (ou separe faces com `P`) para receber materiais no módulo 13.

## Passo 7: o telhado

Telhado é **superfície inclinada** definida por altura de beiral, altura de cumeeira e inclinação. Conta do módulo 9 (30%):

- Inclinação de 30% = 30 cm de subida por 100 cm de projeção horizontal = arctan(0,30) = **16,7°**.
- **Beiral:** o telhado avança 0,60 m além do eixo da parede em cada lado. A altura do beiral cai `0,30 x 0,60 = 0,18 m` abaixo do topo da parede: 2,90 - 0,18 = **2,72 m**.
- **Cumeeira:** 4,00 m de projeção do eixo da parede ao centro, mais o beiral de 0,60, dá 4,60 m; a subida é `0,30 x 4,60 = 1,38 m`: 2,72 + 1,38 = **4,10 m**.

**No Blender:** desenhe o **perfil** (uma linha em V invertido: beiral esquerdo, cumeeira, beiral direito) em três vértices, na vista de frente, com as alturas acima; extrude essa linha na direção da cumeeira pelo comprimento do telhado (`E Y 12 Enter` no exercício); aplique **Solidify** (0,04 m) para dar espessura de telha e madeiramento. Os números batem com o corte BB do módulo 3. Tipos diferentes (quatro águas, meia-água, mansarda) mudam o perfil e o número de planos; o vídeo "How to Model 7 Different Kinds of ROOFS" mostra como fazê-los com loop cut e extrusão.

## Passo 8: a escada

Aula 4 (Array com deslocamento fixo). Dados do módulo 9: 15 degraus, espelho 0,188 m, piso 0,264 m, comprimento horizontal 3,70 m. A abertura na laje para a escada é um cortador (mais uma booleana), igual a um vão.

## Passo 9: conferir

1. `Statistics`: contagens esperadas em cada objeto (a aula 8 dá os números).
2. `Dimensions` de cada objeto: bate com o projeto?
3. Ferramenta **Measure** com `Shift` (entre faces) nos vãos livres: 4,85 m na sala, 0,90 m no corredor etc.
4. Vistas ortogonais lado a lado com a referência.
5. `Face Orientation` sem vermelho por fora.

## Resumo

- A referência (Empty de imagem ou Mesh Plane) é **apoio visual**, escalada com uma cota conhecida e o 3D Cursor como pivô; o modelo vale pelos **números**, não pelos pixels.
- Técnica deste módulo: **eixo + Solidify**: um vértice, extrusões digitadas, `E Z altura`, `Merge by Distance`, Solidify Complex com Offset 0; uma espessura por objeto.
- **Vãos** = cortadores com a largura e a altura do quadro de esquadrias, centro = média de início e fim, profundidade maior que a parede, base abaixo do piso nas portas, agrupados numa coleção com Boolean Difference.
- **Telhado** = perfil de três vértices extrudado + Solidify; alturas por conta (2,72 m no beiral, 4,10 m na cumeeira, 16,7° de inclinação); **escada** = Array com espelho e piso.
- Confira com Statistics, Dimensions, Measure e Face Orientation antes de seguir.

## Para aprofundar

Vídeos não assistidos; título e canal confirmados. Versões variam: verifique o menu na sua versão.

- [ ] [In-Depth Floor Plan Tutorial Part 1 [UPDATED 2025]](https://www.youtube.com/watch?v=94kAIpRnhcY) (Dude Blender, inglês): o mais próximo do método desta aula: importar a planta, criar um plano na dimensão real, traçar o contorno com extrusões, subir as paredes e dar espessura com Solidify. Usa o Blender 4.3.
- [ ] [Step-by-Step Floor Plan Guide for Blender [Updated 2024]](https://www.youtube.com/watch?v=u2Ywe1vbl30) (Dude Blender, inglês): versão de 2024 da mesma ideia, em cerca de 20 minutos, incluindo mobiliário a partir de uma biblioteca de ativos.
- [ ] [How to Scale a Floor Plan in Blender for Architectural Visualization](https://www.youtube.com/watch?v=8iMWUsqeopQ) (What Make Art, inglês): a técnica de escalar a imagem com uma cota conhecida, o pivô no 3D Cursor e a conferência com uma segunda medida.
- [ ] [Modeling FLOOR PLANS From IMAGES in Blender! Step by Step Tutorial PART 1](https://www.youtube.com/watch?v=eiDVmoecTw4) (The CG Essentials, inglês): importar imagem, escalar, criar paredes (aqui com a extensão Archipack), de 2020.
- [ ] [Architectural Modeling In Blender Part 1: Modeling from a FLOOR PLAN](https://blender.fi/2021/08/13/architectural-modeling-in-blender-part-1-modeling-from-a-floor-plan/) (blender.fi, página com o vídeo, inglês): outro tutorial de modelagem a partir de planta, de 2021; pelos capítulos: escalar a referência, paredes com a ferramenta plano, snapping, vãos na edição 2D e extrusão para 3D.
- [ ] [The EASIEST Way to Create Floor Plans FROM IMAGES in Blender!](https://www.youtube.com/watch?v=xlmbZHIaHJw) (The CG Essentials, inglês): usa uma extensão gratuita (Home Builder) para escalar a imagem por dois pontos e desenhar paredes; alternativa se você preferir extensão (aula 7).
- [ ] [How to Model 7 Different Kinds of ROOFS in Blender](https://www.youtube.com/watch?v=Pcb-BBeGt8w) (The CG Essentials, inglês): duas águas, mansarda, quatro águas e outros, com loop cut, extrusão e "extrude along normals".
- [ ] [COMO MODELAR UMA CASA COMPLETA DO 0 NO BLENDER | DO INICIO AO FIM | ARCHVIZ](https://www.youtube.com/watch?v=uWykB7-elHk) (Janary Junior, Archblinder, português): casa completa em português; do README anterior, de maio de 2022, provavelmente Blender 3.x.
- [ ] [Como modelar uma casa simples: O Básico do Blender #4](https://www.youtube.com/watch?v=8BcWZ-v-jsw) (Augusto Cezar, Blender para Arquitetura, português): casa simples, versão não confirmada.
- [ ] [Modelagem Completa de uma Casinha no Blender, Do Zero ao Render](https://www.youtube.com/watch?v=-N50BssA5qA) (Lupi Studio, português): do README anterior, de julho de 2023.
- [ ] [Manual do Blender 5.2 LTS: Empties (imagem de referência)](https://docs.blender.org/manual/en/latest/modeling/empties.html) e [Mesh Plane (Images as Planes)](https://docs.blender.org/manual/en/latest/modeling/meshes/import_images_as_planes.html) (Blender Foundation): opções de exibição e de tamanho.

[Próxima aula: Organização e instâncias](./06%20-%20Organizacao%20e%20Instancias.md)
