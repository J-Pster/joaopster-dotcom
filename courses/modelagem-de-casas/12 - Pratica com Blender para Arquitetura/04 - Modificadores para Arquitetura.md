[Voltar ao módulo](./README.md)

# Aula 4: Modificadores para arquitetura

*Pergunta que esta aula responde: como dar espessura às paredes, abrir vãos, repetir degraus e chanfrar quinas sem "gastar" a geometria, mantendo tudo editável por números?*

## Por que essa aula existe

Na aula 3 você edita a malha diretamente: cada extrusão é definitiva (só o `Ctrl-Z` volta). Um **modificador** é diferente: é uma "receita" ligada ao objeto que **calcula um resultado a partir da malha** sem alterá-la (Manual, Modifiers). A malha continua simples (uma linha de paredes), e o resultado (paredes com espessura, vãos abertos) é recalculado toda vez que você muda um número. É o mais próximo que o Blender chega do comportamento paramétrico do módulo 7 (aula 3) sem ser BIM: você muda a espessura de 0,20 para 0,15 m em um campo, e todas as paredes se ajustam.

Quatro modificadores resolvem a maior parte da arquitetura: **Solidify** (espessura), **Boolean** (vãos), **Array** (repetição) e **Mirror** (simetria). **Bevel** e **Weld** completam. Os valores padrão citados foram lidos no Blender 5.2.2 LTS, rodando o programa em setembro de 2026.

## Onde ficam e como funcionam

- **Onde:** `Properties > Modifiers` (a aba da chave inglesa) > `Add Modifier` (ou `Shift-A` com o mouse nessa aba). Os menus são agrupados: **Edit, Generate, Deform, Simulate**. Os desta aula estão em **Generate**.
- **Pilha (stack):** vários modificadores por objeto, **executados de cima para baixo**. Novos entram no fim. Dá para arrastar para reordenar. A ordem muda o resultado (ver "Ordem" abaixo).
- **Cabeçalho de cada modificador:** ícones para mostrar no **viewport**, no **render** e (em Edit Mode) na malha editável; um menu com **Apply** (torna o resultado definitivo) e **Duplicate**.
- **Aplicar (Apply):** transforma o resultado em malha real e remove o modificador. Só é necessário para editar o resultado à mão ou para certos formatos de exportação (aula 7, alguns exportadores oferecem "Apply Modifiers" e dispensam isso). Não dá para aplicar em objeto cuja malha é compartilhada por instâncias (aula 6).
- **Requisito de qualquer modificador dimensional:** **escala aplicada** (aula 2). Os modificadores usam coordenadas locais, então uma escala diferente de 1 distorce espessura, chanfro e distância.

## Solidify: espessura de parede

**O que faz:** pega uma **superfície** (faces sem volume) e a engrossa (Manual, Solidify). É como as paredes nascem no método da aula 5: você desenha só o **eixo** da parede, extruda para cima e o Solidify dá a espessura.

Campos principais:

| Campo | Significado | Valor no exercício |
|---|---|---|
| **Mode** | *Simple* (extrude simples) ou *Complex* (resolve qualquer geometria) | **Complex** |
| **Thickness** | espessura, em metros | 0,20 (externas), 0,10 (internas), 0,04 (telhado) |
| **Offset** | de -1 a 1: para que lado da superfície a espessura cresce; **0 = centrada** | **0** |
| **Even Thickness** (Simple) | compensa cantos vivos | não necessário no Complex |
| **Thickness Mode**, **Boundary** (Complex) | ajustes finos | deixe os padrões |

**Duas armadilhas medidas.**

1. **O padrão de Offset é -1, não 0** (lido no Blender 5.2.2). Com -1, a espessura cresce para dentro, a partir da superfície. Se você quer a parede **centrada no eixo** (a convenção "eixo a eixo" que você usou no módulo 3 e no módulo 9, em que as áreas nominais são de eixo a eixo), ajuste **Offset = 0**.
2. **No modo Simple, os cantos "encolhem".** Reproduzi a mesma planta de 8 x 10 m (paredes de 0,20 m) com três configurações e medi a caixa envolvente do resultado (Blender 5.2.2):

| Configuração | Dimensões medidas (X, Y) | Esperado |
|---|---|---|
| Simple, sem Even Thickness | 8,141 x 10,171 m | 8,20 x 10,20 m |
| Simple, com Even Thickness | 8,200 x 10,210 m (o Y ficou 1 cm acima; não investiguei a causa) | 8,20 x 10,20 m |
| **Complex** | **8,200 x 10,200 m** | 8,20 x 10,20 m |

No modo Simple sem compensação, cada vértice de canto anda ao longo da média das normais das duas faces (na diagonal), e o resultado fica menor que o real: **um erro de quase 6 cm em cada lado**. O modo **Complex** dá o volume exato (21,84 m³ para o contorno com empena da aula 8, igual ao cálculo à mão) e é, segundo o Manual, o modo capaz de tratar "layouts de paredes de arquitetura" com **junções em T**, em que três faces compartilham a mesma aresta (o Simple não funciona nessas). O custo do Complex é mais tempo de cálculo, irrelevante numa casa.

Regra: **para paredes, Solidify em modo Complex, Offset 0.**

## Boolean: abrir vãos

**O que faz:** combina duas formas por operação lógica (Manual, Boolean): **Difference** (tira uma forma da outra), **Union**, **Intersect**. É a versão do Blender do "vão como volume subtraído" que você viu no módulo 7 (aula 4).

Campos principais:

- **Operation:** *Difference* (padrão): a parede menos os cortadores.
- **Operand Type:** *Object* (um cortador) ou **Collection** (todos os objetos de uma coleção, de uma vez).
- **Solver:** *Float* (rápido, não lida com geometria sobreposta), **Exact** (padrão, o mais completo e mais lento) e *Manifold* (rápido, mas exige malha "manifold", isto é, fechada e sem defeitos). O padrão **Exact** foi o testado aqui.

**Método dos cortadores.**

1. Cada vão vira um **cubo** ("cortador") com a **largura e altura reais do vão** e uma **profundidade maior que a parede**: espessura da parede mais folga (o exercício usa 0,40 m para paredes de 0,20 e 0,20 m para paredes de 0,10). Isso garante que o vão **atravesse** a parede, como o módulo 7 (aula 4) exige.
2. **Evite faces coincidentes**: se a base do cortador de porta está exatamente na base da parede (Z = 0), as duas faces ficam no mesmo plano, situação que gera erros de recorte. Prolongue o cortador **abaixo** do piso: uma porta de 2,10 m de altura recebe cortador com base em Z = -0,10 e topo em Z = 2,10.
3. Ponha todos os cortadores de um conjunto de paredes em uma **coleção** (aula 6) e use `Operand Type = Collection`. Adicionar um vão novo é criar mais um cubo naquela coleção; nada muda no modificador.
4. **Esconda os cortadores**: em `Properties > Object > Viewport Display > Display As` escolha **Wire** ou **Bounds** para vê-los como contorno, e na coleção desligue **Show In > Renders** (o Manual da coleção chama a opção "Show In: Renders") para que não apareçam no render final. Se preferir esconder os cortadores de outro jeito (o olho do Outliner, `Include` da coleção, o ícone de desativar no viewport), **teste se o recorte continua**: não confirmei como cada interruptor interage com o operando por coleção.
5. O **Boolean vem depois do Solidify** na pilha: o recorte precisa acontecer sobre a parede já grossa.

**Verificação numérica.** No exercício da aula 8, a parede externa com Solidify e as seis aberturas externas tem, conforme meu cálculo à mão, 21,84 m³ - 1,818 m³ de vãos = 20,022 m³; o Blender 5.2.2 retornou 20,022 m³, sem arestas não manifold (0). Para as paredes internas, 7,7895 m³ - 0,819 m³ = 6,9705 m³, também exato. O modelo booleano funciona quando a preparação está correta.

**Limitações e alternativas.** Manual: só malhas **manifold** têm resultado garantido. Se o Boolean falhar, veja a aula 9 (normais, malha não manifold). Existe também o **Intersect (Boolean)** dentro do modo de edição (Manual), para uma operação única e destrutiva.

## Array: repetição

**O que faz:** cria várias cópias de um objeto em linha, círculo ou curva (Manual, Array). Em arquitetura: **degraus de escada**, prumos de guarda-corpo, ripas, colunas alinhadas, telhas, janelas repetidas.

**Aviso de versão (verificado no Blender 5.2.2).** No 5.2 há **dois** modificadores no menu Generate: **Array** (novo, baseado em nós de geometria, documentado como "Array Modifier" no Manual 5.2) e **Array (Legacy)**, o antigo. Vídeos e tutoriais anteriores ensinam o antigo, e o Blender 4.5 LTS só tem o antigo. Os dois fazem o essencial:

| | **Array (Legacy)** e Blender 4.5 | **Array (novo)** do 5.2 |
|---|---|---|
| Quantidade | `Fit Type: Fixed Count` e `Count` | `Count Method: Count` e `Count` (padrão 3) |
| Deslocamento fixo | ligar `Constant Offset`, `Distance` X Y Z | `Offset Method: Offset` e o vetor `Offset` (nomes conforme o Manual e a interface do modificador; confira na sua versão) |
| Deslocamento proporcional ao tamanho | `Relative Offset` (padrão, fator 1 no X) | `Offset Method: Relative` (padrão) |
| Outros | `Object Offset` (rotação em espiral), `Merge` | `Shape: Circle/Curve/Transform`, `Realize Instances` (ligado por padrão), `Merge` (exige Realize) |

**Exemplo: a escada do módulo 9.** Os valores já calculados na [aula 4 do módulo 9](../09%20-%20Pratica%20com%20Sweet%20Home%203D/04%20-%20Niveis%20Escadas%20e%20Cobertura.md): altura a vencer 2,82 m; 15 degraus, espelho e = 0,188 m; piso p = 0,264 m (fórmula de Blondel, 2e + p entre 0,63 e 0,64 m, tratada como orientação de conforto, não como norma); comprimento horizontal 14 x 0,264 = 3,70 m. No Blender:

1. Um degrau: cubo com dimensões (largura 0,90; piso 0,264; espelho 0,188), escala aplicada.
2. Array com **deslocamento fixo** de (0; 0,264; 0,188) por cópia (Y e Z; degraus voltados para +Y) e **quantidade 14**.
3. O resultado é uma "escadinha" de blocos flutuantes; feche a parte de baixo com um bloco de apoio (uma laje inclinada ou um volume sólido). Aplique o modificador e extrude para baixo as faces inferiores se quiser um sólido único.

A largura mínima do degrau, o número máximo de degraus por lance e o corrimão vêm do código de obras (módulo 6); aqui é só geometria.

Outras aplicações: **Array com Merge** liga cópias encostadas; **Array em Circle** faz colunas em roda; **Object Offset** (legado) ou **Shape: Transform** faz escada em espiral (um empty gira e sobe a cada cópia).

## Mirror: simetria

**O que faz:** espelha a malha em relação à **origem do objeto** (ou de outro objeto) nos eixos X, Y e/ou Z (Manual, Mirror). Modele metade e o resto aparece.

Campos: `Axis` (X, Y, Z; cada eixo marcado dobra as cópias), `Bisect` (corta a malha no plano e mantém um lado), `Mirror Object` (usa outro objeto, geralmente um empty, como plano de espelho), `Clipping` (impede que vértices atravessem o plano em Edit Mode), `Merge` e `Merge Distance` (solda o que encosta no plano; o padrão é 1 mm).

Uso: fachada simétrica, cômodos espelhados, casas geminadas (uma metade e a outra espelhada). **A origem do objeto é o plano de simetria**: para mudar o plano, mova o objeto com precisão (`Object > Set Origin > Origin to 3D Cursor`, com o cursor posto no meio de uma aresta) ou use um empty como Mirror Object. Nossa casa **não é simétrica**, então não usa Mirror; o modificador aparece aqui porque geminadas e fachadas simétricas são comuns.

## Bevel e Weld

- **Bevel (modificador):** o mesmo chanfro da aula 3, só que **editável**. Campos: `Affect` (Vertices/Edges), `Width Type` (Offset é o padrão), `Width` (0,1 m por padrão: valor grande para arquitetura, ajuste para 0,005 a 0,02 m), `Segments` (1 por padrão), `Limit Method` (padrão **Angle**, 30°: só chanfra arestas mais vivas que isso). Serve para dar aparência realista às quinas no render (uma quina perfeita "reflete" luz de forma pouco natural, e o chanfro de milímetros a corrige). Não use em geometria que você depois exporta para outro programa por medida, a não ser que aplique.
- **Weld:** o `Merge by Distance` da aula 3, mas como modificador (padrão 1 mm).

## Ordem da pilha

A pilha lê de cima para baixo, e o resultado depende disso. Um exemplo da CG Cookie: espelhar depois de repetir ou repetir depois de espelhar produz formas diferentes. Regras práticas em arquitetura:

1. **Solidify primeiro** (dá espessura às paredes).
2. **Boolean depois** (corta a parede já grossa).
3. **Bevel por último** (chanfra o resultado, inclusive as bordas dos vãos).
4. **Array** antes do Boolean se você quer o vão repetido nos degraus, ou depois se quer só uma cópia cortada.

Na dúvida, desligue o ícone de "viewport" de cada modificador, de baixo para cima, para ver o efeito de cada um.

## Resumo

- Um modificador calcula um resultado **sem alterar** a malha: mantenha a malha simples e mude números nos campos.
- **Solidify** dá espessura: use **Complex** (Simple encolhe os cantos: 8,141 em vez de 8,200 m) e **Offset 0** (o padrão é -1). Espessura em coordenadas locais: **escala aplicada**.
- **Boolean Difference** abre vãos: cortadores com a medida do vão, **atravessando a parede** (0,40 m para paredes de 0,20 m), com base **abaixo do piso** para evitar faces coincidentes, agrupados em **coleção**, escondidos do render. Solver **Exact**.
- **Array** repete (degraus, prumos); no 5.2 existem **Array** (novo) e **Array (Legacy)**; no 4.5 só o legado. **Mirror** espelha em torno da origem do objeto. **Bevel** chanfra; **Weld** funde.
- Ordem: Solidify, Boolean, Bevel. **Apply** só quando precisar da malha real.

## Para aprofundar

Vídeos não assistidos; título e canal confirmados.

- [ ] [BLENDER BASICS 16 - Object Modifiers](https://www.youtube.com/watch?v=dN-r43DB-fA) (CG Cookie, inglês): mostra pilha, Bevel, Array (relative, constant e object offset) e Mirror, com a ordem da pilha. É de uma série do Blender 2.9x, mas as ideias servem; no Blender 5.2 o Array mostrado corresponde ao "Array (Legacy)".
- [ ] [Blender 5.0: Blender Modifiers every beginner needs to know, 13 Essential modifiers for Modeling](https://www.youtube.com/watch?v=KMM8-bjcRsg) (BlenderTutsWithRob, inglês): visão rápida de treze modificadores, de 2025, incluindo Mirror, Array, Bevel, Solidify e Boolean.
- [ ] [How to Use the Boolean Modifier in Blender (Tutorial)](https://www.youtube.com/watch?v=CHqH5oz0DvQ) (Ryan King Art, inglês): Difference, Union, Intersect, solvers Exact e Fast, e a técnica da coleção de cortadores.
- [ ] [The RIGHT Way to Use Booleans for Architecture in Blender!](https://www.youtube.com/watch?v=O096KljrPh4) (The CG Essentials, inglês): coleções booleanas para cortar várias aberturas de uma vez, no contexto de arquitetura.
- [ ] [How to Cut Holes for DOORS AND WINDOWS in Walls in Blender](https://www.youtube.com/watch?v=kZD8sSX7NtU) (The CG Essentials, inglês): recorte de vãos de portas e janelas em paredes.
- [ ] [In-Depth Floor Plan Tutorial Part 1 [UPDATED 2025]](https://www.youtube.com/watch?v=94kAIpRnhcY) (Dude Blender, inglês): mostra "adicionando espessura às paredes com modificadores" (capítulo 18:15) e a nota de que espessuras diferentes exigem objetos de parede separados, exatamente a solução usada na aula 8. Feito no Blender 4.3.
- [ ] [Create stairs quickly and easily in Blender 4.2, no add-ons, no complicated math](https://www.youtube.com/watch?v=3HrJfaCbGs8) (Expose Academy, inglês): escada sem Array, com duplicatas vinculadas (`Alt-D`, aula 6) e a ferramenta Scale Cage; boa alternativa ao modificador.
- [ ] [Modificadores do Blender: guia completo](https://www.tonka3d.com.br/blog/modificadores-blender/) (Tonka3D, artigo em português): resumo dos principais modificadores, com exemplos de Solidify para paredes e Boolean para aberturas (não confirmei a versão do Blender do artigo).
- [ ] [Manual do Blender 5.2 LTS: Solidify](https://docs.blender.org/manual/en/latest/modeling/modifiers/generate/solidify.html), [Boolean](https://docs.blender.org/manual/en/latest/modeling/modifiers/generate/booleans.html), [Array](https://docs.blender.org/manual/en/latest/modeling/modifiers/generate/array.html), [Array (Legacy)](https://docs.blender.org/manual/en/latest/modeling/modifiers/generate/array_legacy.html), [Mirror](https://docs.blender.org/manual/en/latest/modeling/modifiers/generate/mirror.html) e [Bevel](https://docs.blender.org/manual/en/latest/modeling/modifiers/generate/bevel.html) (Blender Foundation): a fonte de cada seção.

[Próxima aula: Da planta ao modelo](./05%20-%20Da%20Planta%20ao%20Modelo.md)
