[Voltar ao módulo](./README.md)

# Aula 9: Erros comuns e boas práticas

*Pergunta que esta aula responde: quando o Blender "não obedece" (chanfro torto, faces pretas, recorte que falha, medida fora), qual é a causa mais provável, como diagnosticar e como evitar?*

## Por que essa aula existe

O Blender tem poucos "erros" com mensagem. Quase sempre o sintoma é visual (uma face escura, um vão que não abre, uma medida 6 cm menor) e a causa está no **estado da malha** ou do **objeto**. O módulo 7 (aula 9, [Boas práticas de modelagem](../07%20-%20Fundamentos%20de%20Modelagem%203D%20CAD%20e%20BIM/09%20-%20Boas%20Praticas%20de%20Modelagem.md)) lista os hábitos gerais; aqui estão os erros que mais aparecem no Blender, com **sintoma, causa, diagnóstico e correção**, e depois uma rotina de saúde do modelo.

## Erro 1: escala não aplicada

- **Sintoma:** chanfro desigual entre lados, Solidify com espessura diferente por face, Array com espaçamento estranho, snap que não "encaixa", objeto que chega em tamanho errado a outro programa.
- **Causa:** o objeto foi esticado em Object Mode; a malha continua no tamanho original e o objeto carrega `Scale` diferente de 1. Modificadores e ferramentas usam coordenadas da malha (aula 2). O Manual do Solidify confirma que, com escala não uniforme, a espessura varia nos lados.
- **Diagnóstico:** `N > Item > Scale`: qualquer valor diferente de (1, 1, 1).
- **Correção:** `Object > Apply > Scale` (`Ctrl-A`). Se a malha é compartilhada com cópias vinculadas, torne o objeto de usuário único antes.
- **Prevenção:** escalar em Edit Mode, ou aplicar assim que escalar; digitar `Dimensions` e aplicar em seguida.

## Erro 2: normais invertidas

- **Sintoma:** faces escuras ou pretas no render, faces "sumindo" com Backface Culling, recorte booleano estranho, sombreamento que parece "do avesso".
- **Causa:** cada face tem um lado "de frente" (a **normal** aponta para fora; módulo 7, aula 2). Extrusões e importações podem deixar faces com a frente para dentro.
- **Diagnóstico:** `Overlays > Face Orientation`: o lado de trás das faces aparece em **vermelho** (segundo o Manual, uma face vermelha do lado de fora de uma malha provavelmente está orientada errado); o lado de frente aparece azul. Também há a opção `Backface Culling` em Viewport Shading.
- **Correção:** em Edit Mode, selecione as faces e use `Mesh > Normals > Flip` (o popover de normais abre com `Alt-N`) ou, para orientar tudo de uma vez, **`Shift-N`** (`Recalculate Outside`). O Manual diz que o Recalculate **não exige malha fechada**.
- **Prevenção:** ligue Face Orientation depois de extrudar contornos abertos (paredes, telhado) e depois de importar de outro programa.
- **Nota:** paredes com **Solidify, Offset 0** têm espessura simétrica e dão as mesmas dimensões com ou sem normais viradas (verifiquei no 5.2.2), mas o **render** e os **recortes** ainda dependem delas.

## Erro 3: malha suja

"Suja" é malha com vértices ou faces que não deveriam existir. Quatro tipos comuns:

| Tipo | Origem típica | Como achar | Como corrigir |
|---|---|---|---|
| **Vértices duplicados** (dois no mesmo lugar) | extrusão cancelada com `Esc`, importação | `Statistics` acima do esperado; vértice que "não solda" | `A` e `M > By Distance` (ou `Mesh > Clean Up > Merge by Distance`) |
| **Geometria solta** (vértices ou arestas sem face) | ferramentas de corte, apagar faces | `Select > Select All by Trait > Loose Geometry` | `Mesh > Clean Up > Delete Loose` |
| **Faces internas** (dentro de um volume) | união de sólidos, booleanas antigas | `Select > Select All by Trait > Interior Faces` | apagar as faces selecionadas |
| **Faces não planares ou côncavas** | mover um vértice de face grande | overlay `Mesh Analysis > Distortion` | `Mesh > Clean Up > Make Planar Faces`, `Split Non-Planar Faces` ou `Split Concave Faces` |

O `Mesh Analysis` (overlay em Edit Mode, Solid) também mostra **Intersections** (faces que se cruzam). O Manual avisa que ele foi pensado para impressão 3D, mas as verificações servem à arquitetura.

**Contagem como diagnóstico.** No exercício da aula 8, cada etapa tem uma contagem esperada de vértices, arestas e faces. Se `Statistics` mostra mais, há geometria sobrando.

## Erro 4: malha não manifold

- **O que é.** Uma malha é **manifold** quando cada aresta pertence a **exatamente duas faces** e o volume é fechado, de modo que existe um "dentro" e um "fora" definidos. Não manifold: arestas com uma face (buracos), com três ou mais (paredes em T mal soldadas), vértices soltos, faces com normais opostas.
- **Por que importa.** O Manual do Boolean: só malhas manifold têm resultado **garantido**; o solver *Manifold* **não funciona** em malhas não manifold; o *Exact* pode ter falhas. O Solidify em modo *Simple* não trata arestas com mais de duas faces (por isso o exercício usa *Complex*). E a impressão 3D exige malha fechada.
- **Diagnóstico.** Em Edit Mode, modo de vértice ou de aresta: `Select > Select All by Trait > Non Manifold` (atalho `Shift-Ctrl-Alt-M`, conferido no mapa de teclas 5.2.2). As opções do Manual: **Wire** (arestas sem face), **Boundaries** (bordas e buracos), **Multiple Faces** (três ou mais faces), **Non Contiguous** (duas faces com normais opostas), **Vertices**.
- **Correção.** Buracos: `Mesh > Clean Up > Fill Holes` ou `F`. Vértices duplicados: Merge by Distance. Faces sobrepostas: apagar. Normais: `Shift-N`.
- **Atenção.** Uma malha **aberta de propósito** (uma fita de parede antes do Solidify, o telhado antes do Solidify) é não manifold e está correta: o modificador a fecha. O que importa é a malha **depois dos modificadores**. No exercício, medi 0 arestas não manifold nas paredes e nos recortes.

## Erro 5: Boolean que não corta (ou corta errado)

| Sintoma | Causa | Correção |
|---|---|---|
| Nada acontece | cortador não está na coleção do operando, ou o operando está vazio; modificador desligado no viewport | conferir `Operand Type` e a coleção; ligar o ícone do viewport |
| O vão não atravessa (fica uma "pele") | cortador com profundidade menor que a parede | aumentar a profundidade (parede + folga) |
| Faces "piscando" ou restos no piso | cortador com face no mesmo plano da parede (Z = 0) | prolongar a base do cortador abaixo do piso |
| Recorte com defeito | parede ou cortador não manifold; solver *Float* com sobreposição | corrigir a malha (Erro 4); usar *Exact* |
| Resultado errado depois de mexer | Boolean **antes** do Solidify na pilha | reordenar: Solidify, depois Boolean |
| Lento | *Exact* em malha muito densa | reduzir densidade; testar *Manifold* se a malha é manifold |
| Vãos fora de posição | `Location` ou `Dimensions` do cortador diferentes da tabela (a origem do cubo é o seu centro) | conferir os dois campos em `N > Item` |

Aviso do Manual a lembrar: o solver Manifold não funciona em malhas não manifold.

## Erro 6: Solidify que engana

- **Padrão de Offset -1** (lido no 5.2.2): parede deslocada meia espessura do eixo. **Ajuste Offset = 0.**
- **Modo Simple:** cantos encolhem (8,141 em vez de 8,200 m na planta da aula 8) e não trata T. **Use Complex.**
- **Espessura varia por face:** escala não aplicada (Erro 1).
- **Uma espessura só por objeto:** paredes de espessuras diferentes pedem objetos separados.

## Erro 7: medidas que não batem

- **Unit Scale diferente de 1,0:** o número na tela deixa de ser o real (aula 2). Volte a 1,0.
- **Snap por incremento** varia com o zoom: só serve para rascunho. Digite o valor.
- **Vértice movido "no olho":** confira em `N`. A ferramenta **Measure** (com `Shift`, entre faces) e `Dimensions` são as verificações.
- **Origem fora do centro:** `Location` de um objeto com origem afastada não é a posição da malha. Mantenha origens em (0, 0, 0) ou entenda onde estão (`Object > Set Origin`).
- **Importação com escala errada:** cubo de 1 m de teste (aula 7); ajuste `Scale` da importação.

## Erro 8: aparência que engana

- **Quinas "borradas" ou sombras estranhas:** faces com sombreamento **suave** onde deveria ser plano. Em arquitetura de faces planas, use `Object > Shade Flat`. (O sombreamento suave é para superfícies curvas.)
- **Objetos que "somem" ao aproximar ou afastar a câmera:** os limites **Clip Start / Clip End** do viewport (`N > View`). O Manual avisa que um intervalo muito grande reduz a precisão de profundidade e causa artefatos, e que, no Knife, um Clip Start pequeno demais pode gerar vértices duplicados.
- **Cortadores no render:** esqueceu de tirar a coleção do render (aula 6).

## Erro 9: cópias vinculadas surpreendem

Editou uma janela e todas mudaram? Elas compartilham a malha (`Alt-D`). É a vantagem; se quer uma exceção, `Make Single User` (aula 6). Aplicar escala em malha compartilhada também exige isso.

## Erro 10: seguir tutorial de versão antiga sem checar

Vídeos de 2.8 a 4.x podem mostrar painéis e nomes diferentes (o Array, por exemplo, mudou no 5.2; aula 4). Cheque a versão no início do vídeo e, na dúvida, use a **busca de menu** (`F3` ou `Space`) para achar a função pelo nome. Extensões (Bonsai, Archimesh) têm faixa de versões própria (aula 7).

## Boas práticas: rotina em três momentos

**Antes de modelar**

1. Unidades: Metric, Unit Scale 1,0, Length em metros.
2. 3D Cursor na origem; coleções e nomes definidos (aula 6).
3. Arquivo salvo com versão (`casa96_v01.blend`), Statistics ligado.

**Enquanto modela**

4. **Números, não mouse**: digite Location, Dimensions e distâncias (aulas 2 e 3).
5. `Ctrl-A > Scale` assim que escalar em Object Mode.
6. **Uma etapa por vez, uma conferência por etapa**: contagem em Statistics, Dimensions, Measure.
7. Não cancele extrusões com `Esc` sem necessidade; se cancelou, `Ctrl-Z` ou `Merge by Distance`.
8. Modele **como se constrói** (módulo 7, aula 9): paredes com espessura real, vão como volume que atravessa, laje com espessura.
9. Poucos polígonos: superfícies planas com poucas faces; cópias vinculadas para repetição.
10. `Ctrl-S` com frequência e `Save Incremental` antes de mudanças grandes.

**Antes de fechar ou exportar: rotina de saúde (2 minutos)**

| # | Verificação | Como |
|---|---|---|
| 1 | Transformações aplicadas | `N > Item`: Location (0,0,0), Rotation 0°, Scale 1 nos objetos de estrutura |
| 2 | Sem duplicatas | Edit Mode, `A`, `M > By Distance`: a mensagem diz quantos foram removidos (esperado 0) |
| 3 | Normais para fora | Overlay Face Orientation sem vermelho por fora |
| 4 | Sem geometria solta e sem faces internas | `Select All by Trait > Loose Geometry` e `Interior Faces` sem seleção |
| 5 | Manifold depois dos modificadores | `Select All by Trait > Non Manifold` (na versão aplicada, se necessário) sem seleção |
| 6 | Medidas do projeto | Dimensions, Measure com `Shift`, contagens da aula 8 |
| 7 | Cortadores e referências fora do render/exportação | Show In > Renders; exportar só a seleção |
| 8 | Limpeza | `File > Clean Up > Purge Unused Data...`; guardar o `.blend` original |

## Resumo

- Escala não aplicada explica a maioria dos "chanfro torto", "espessura irregular" e "snap ruim": `Ctrl-A > Scale`.
- **Normais**: `Face Orientation` mostra o lado errado em vermelho; `Shift-N` recalcula para fora.
- **Malha suja**: duplicatas (`Merge by Distance`), geometria solta e faces internas (`Select All by Trait`), faces não planares (`Clean Up`).
- **Não manifold**: arestas com número de faces diferente de dois; impede o solver *Manifold* e atrapalha o *Exact*. `Select All by Trait > Non Manifold` acha; `Fill Holes`, `F` e Merge corrigem. Malha aberta antes de um modificador é normal.
- **Solidify**: Complex, Offset 0, escala aplicada. **Boolean**: cortador atravessando, base abaixo do piso, depois do Solidify.
- Rotina de saúde em oito itens antes de fechar ou exportar.

## Para aprofundar

Vídeos não assistidos; título e canal confirmados.

- [ ] [Stop!!! Fix Your Normals Before Texturing in Blender!](https://www.youtube.com/watch?v=_Zd5onk1_Qo) (Max Makes, inglês): vídeo curto: Face Orientation e `Shift-N`.
- [ ] [Blender: Fix Flipped Normals FAST! Stop Weird Shading & Invisible Faces](https://www.youtube.com/watch?v=lPoaeVu6g5Q) (Pantheon, inglês): vídeo curto: Face Orientation e `Alt-N > Flip`.
- [ ] [How to FIX Inverted/Flipped Normals | Blender](https://www.youtube.com/watch?v=2sp3bEDyNWM) (iPaintSmallThings, inglês): normais invertidas explicadas com foco em impressão 3D; mostra Face Orientation, Backface Culling e o complemento 3D-Print Toolbox (não confirmei se ele está disponível na sua versão).
- [ ] [Videoguide: Find and Fix Non-Manifold Edge, Vertex, Holes, Overlapping Faces, Blender Mesh Errors](https://www.youtube.com/watch?v=usrk-Dy9nMg) (jbdtube, inglês): pelo título, localização e correção de erros de malha não manifold.
- [ ] [Bevel Not Working properly in Blender? Here's the Fix!](https://www.youtube.com/watch?v=hgKmMH2DijA) (3D Artisanal, inglês): vídeo curto: o sintoma da escala não aplicada.
- [ ] [Why Do We Need To Apply The Scale Of Our Objects?](https://www.blenderbasecamp.com/why-do-we-need-to-apply-the-scale-of-our-objects/) (Blender Base Camp, artigo em inglês) e [How and why do we apply scale in Blender?](https://artisticrender.com/how-and-why-do-we-apply-scale-in-blender/) (Artisticrender, artigo em inglês): quando aplicar e alternativas.
- [ ] [How to Cut Holes for DOORS AND WINDOWS in Walls in Blender](https://www.youtube.com/watch?v=kZD8sSX7NtU) (The CG Essentials, inglês): recorte de vãos, para comparar com o método da aula 8.
- [ ] [Manual do Blender 5.2 LTS: Editing Normals](https://docs.blender.org/manual/en/latest/modeling/meshes/editing/mesh/normals.html), [Select All by Trait](https://docs.blender.org/manual/en/latest/modeling/meshes/selecting/all_by_trait.html), [Clean Up](https://docs.blender.org/manual/en/latest/modeling/meshes/editing/mesh/cleanup.html) e [Mesh Analysis](https://docs.blender.org/manual/en/latest/modeling/meshes/mesh_analysis.html) (Blender Foundation): a fonte de cada diagnóstico desta aula.

Quando estiver confiante, siga para o [Módulo 13: Materiais, Iluminação e Renderização](../13%20-%20Materiais%20Iluminacao%20e%20Renderizacao/README.md).
