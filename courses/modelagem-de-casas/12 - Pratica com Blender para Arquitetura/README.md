# Módulo 12: Prática com Blender para Arquitetura

Nos módulos 1 a 6 você estudou a casa; no 7, como o computador guarda um objeto 3D (vértices, arestas, faces, hierarquia, formatos); no 8, como escolher software; nos módulos 9, 10 e 11, Sweet Home 3D, SketchUp e BIM (Revit e Archicad). O **Blender** é o programa mais livre e o mais exigente do curso: guarda **só malha**, sem nenhuma noção de "parede" ou "vão", e a troco disso oferece ferramentas de edição, modificadores e motores de render sem limite de uso (licença GPL). Este módulo responde: **como se mantém precisão métrica num programa que não a impõe, e como se modela uma casa inteira com ele?** Vem agora porque depende do módulo 7 (malha, normais, modificadores em conceito) e prepara o módulo 13 (materiais, luz e render), em que o Blender é o motor de imagem mais usado no curso.

**Versão e data (verificado em setembro de 2026).** Em blender.org, as versões de suporte longo são o **Blender 5.2 LTS** (5.2.2, de 15/09/2026) e o **4.5 LTS** (4.5.14). O módulo usa o **5.2 LTS** e o Manual 5.2 (docs.blender.org). Atalhos foram conferidos no mapa de teclas padrão do 5.2.2, e a geometria do exercício foi reproduzida por script nessa versão; **as sequências de cliques não foram executadas na janela do programa**, então rótulos em dúvida trazem "confira na sua versão". O **Bonsai** (BIM) declara suporte só até abaixo do Blender 5.1: para ele, use o 4.5 LTS.

**Sobre a curadoria dos vídeos.** Título e canal de cada vídeo foram confirmados (endpoint oEmbed do YouTube); o **conteúdo não foi assistido**, e as descrições vêm do título, dos capítulos e da apresentação. Muitos vídeos são de versões anteriores ao 5.2 (2.8 a 5.1): fundamentos e atalhos de malha valem, painéis podem mudar. Não encontrei série gratuita em português feita especificamente para o 5.2 com modelagem de casa; o mais próximo é a série de Allan Brito (Blender 5.1), citada nas aulas 1 e 8.

## Aulas

1. [A lógica do Blender e a interface](./01%20-%20A%20Logica%20do%20Blender%20e%20a%20Interface.md): o que o Blender guarda, por que é livre e exige método, as cinco regras de precisão, versão, workspaces, viewport, painel lateral, navegação e atalhos essenciais.
2. [Precisão métrica: unidades, modos e medidas](./02%20-%20Precisao%20Metrica%20Unidades%20Modos%20e%20Medidas.md): metros e Unit Scale, modo Objeto x modo Edição, aplicar escala, valores digitados, 3D Cursor, snapping e as quatro formas de medir.
3. [Ferramentas de malha](./03%20-%20Ferramentas%20de%20Malha.md): seleção, extrusão, inset, loop cut, bevel, faca, merge, dissolve, fill, com números.
4. [Modificadores para arquitetura](./04%20-%20Modificadores%20para%20Arquitetura.md): Solidify (espessura), Boolean (vãos), Array (degraus), Mirror, Bevel e Weld, com valores e armadilhas medidas.
5. [Da planta ao modelo](./05%20-%20Da%20Planta%20ao%20Modelo.md): imagem de fundo e escala real, paredes por eixo e Solidify, vãos, pisos, telhado e escada.
6. [Organização e instâncias](./06%20-%20Organizacao%20e%20Instancias.md): coleções, nomes, cópias vinculadas, instâncias de coleção, bibliotecas e versionamento.
7. [Complementos, formatos e ponte para o render](./07%20-%20Addons%20Formatos%20e%20Ponte%20para%20o%20Render.md): Archimesh, Bonsai (IFC/BIM), extensões de DXF, OBJ, FBX, glTF, troca com SketchUp e CAD, e preparação para o módulo 13.
8. [Exercício guiado: a casa de 96 m²](./08%20-%20Exercicio%20Guiado%20a%20Casa%20de%2096%20m2.md): a mesma casa do módulo 9, passo a passo com valores numéricos e conferência final.
9. [Erros comuns e boas práticas](./09%20-%20Erros%20Comuns%20e%20Boas%20Praticas.md): escala não aplicada, normais invertidas, malha suja, não manifold, Boolean e Solidify, e uma rotina de saúde do modelo.

**Trilha única em vídeo (opcional):** [Curso de Blender para Arquitetura, Gratuito e Completo (4 horas)](https://www.youtube.com/watch?v=hPGc3RPD2Ls) (Allan Brito, português, Blender 5.1) cobre interface, navegação, modelagem com precisão e snap, e importação do SketchUp e de OBJ.

## Checklist de saída do módulo

- [ ] Por que o Blender guarda apenas malha, e o que isso muda em relação ao SketchUp e ao BIM (liberdade de forma, mas espessura, vão e medida são responsabilidade sua)?
- [ ] Por que "1 unidade = 1 metro" exige Metric e Unit Scale 1,0, e por que Unit Scale só altera a exibição?
- [ ] Qual a diferença entre editar um objeto (Object Mode) e sua malha (Edit Mode), e por que `Scale` deve ficar em 1 (o que `Ctrl-A` faz e o que quebra sem isso)?
- [ ] Por que digitar valores (painel `N`, `E Z 2.9 Enter`) é mais confiável que arrastar, e como se confere uma medida (Dimensions, Measure com `Shift`, Statistics)?
- [ ] Por que a extrusão transforma vértice em aresta, aresta em face e face em volume, e por que cancelar uma extrusão com `Esc` deixa geometria duplicada?
- [ ] Por que paredes por eixo + Solidify precisam de modo Complex e Offset 0 (o que acontece no Simple e com o Offset padrão)?
- [ ] Por que o cortador de um vão deve atravessar a parede e ter a base abaixo do piso, e por que o Boolean vem depois do Solidify?
- [ ] O que distingue coleção, parentesco, cópia vinculada e instância de coleção, e quando usar cada uma?
- [ ] O que é uma malha manifold, o que são normais e como ver as invertidas (Face Orientation)?
- [ ] O que o Blender lê sem complemento (OBJ, FBX, glTF, STL) e o que exige um (IFC e DXF), e por que exportar exige checar escala e eixo para cima?

Quando estiver confiante, siga para o [Módulo 13: Materiais, Iluminação e Renderização](../13%20-%20Materiais%20Iluminacao%20e%20Renderizacao/README.md).

