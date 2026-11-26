[Voltar ao módulo](./README.md)

# Aula 5: Grupos, componentes e tags

*Pergunta que esta aula responde: por que o SketchUp exige que eu agrupe a geometria, qual a diferença entre grupo, componente e tag, e como organizar o modelo de uma casa para que ele continue editável?*

## O problema: geometria que gruda

Na aula 1 você viu que o SketchUp trabalha com malha solta: arestas e faces que se encostam se fundem. Isso é ótimo enquanto você desenha um cômodo, e desastroso quando a casa cresce. Exemplo concreto: você modela a parede e depois a laje que apoia nela. Se laje e parede estiverem soltas na malha, as faces que se tocam se dividem e compartilham arestas. Ao mover a laje 10 cm, você arrasta pedaços da parede. Ao apagar uma aresta da laje, some um pedaço da parede.

A ajuda oficial dá a razão de existirem grupos: em um grupo, "objetos não grudam em outras entidades", e cada grupo pode ser editado de forma independente, mesmo empilhados; o exemplo dela é justamente uma casa em que você muda o piso de um cômodo sem afetar os outros ([Grouping Geometry](https://help.sketchup.com/en/sketchup/grouping-geometry), verificado em setembro de 2026).

Três ferramentas resolvem o problema de organização, e cada uma tem um papel diferente:

| Ferramenta | Problema que resolve | Como pensar |
|---|---|---|
| **Grupo** | geometria que gruda | uma caixa fechada em torno de um pedaço do modelo |
| **Componente** | objeto que se repete | uma "receita" (definição) com várias cópias (instâncias) ligadas a ela |
| **Tag** | visibilidade | uma etiqueta que liga ou desliga conjuntos, sem alterar geometria |

## Grupos

Um **grupo** reúne várias entidades (arestas, faces, outros grupos) em um objeto único que o Select seleciona com um clique. Segundo a ajuda oficial:

- **Criar:** selecione a geometria e use **Edit > Make Group** (ou o menu de contexto, clique direito). Aparece uma caixa delimitadora ao redor. Também dá para criar um grupo vazio e desenhar dentro dele.
- **Editar:** **duplo clique** no grupo com o Select. Uma caixa pontilhada indica que você está dentro do grupo; o resto do modelo fica esmaecido. Para sair, clique em um espaço vazio ou use **Edit > Close Group/Component**.
- **Desfazer o grupo mantendo a geometria:** selecione e use **Edit > Group > Explode**. Se a geometria explodida encostar em outra, ela volta a grudar.
- Cada **cópia de um grupo é independente**: se você copiar um grupo e mudar a cópia, o original não muda.

Push/Pull, Offset e a maioria das ferramentas só editam a geometria de dentro do grupo quando o grupo está aberto. Isso é uma proteção: enquanto o grupo está fechado, você não estraga o conteúdo sem querer.

**Contexto de edição.** Quando você abre um grupo, está trabalhando dentro dele (o "contexto" ativo). A ajuda dos planos de seção usa a palavra: "só um plano de seção pode ser o corte ativo em cada contexto", e cada grupo ou componente cria um contexto próprio. Grupos podem estar **aninhados** (um grupo "Casa" com grupos "Paredes", "Laje" e "Telhado" dentro).

## Componentes

Um **componente** é um objeto reutilizável. Há dois conceitos:

- **Definição:** a geometria e as propriedades do componente (a "receita").
- **Instância:** cada cópia colocada no modelo, ligada à definição.

A regra de ouro, segundo a ajuda: **editar a definição muda todas as instâncias**. É por isso que componentes existem: uma janela de 1,50 x 1,20 m usada em 6 lugares; se você decidir que o caixilho é mais grosso, edita uma vez e as seis mudam. Com grupos, você editaria seis vezes.

- **Criar:** selecione a geometria e use **Edit > Make Component** (ou clique direito). Na janela, dê um **nome** de definição específico (para achar no Outliner) e uma descrição.
- **Opções** (confirmadas na [ajuda](https://help.sketchup.com/en/sketchup/creating-basic-component)):
  - **Set Component Axes:** define o ponto de origem do componente (onde o cursor "segura" o objeto ao colocar).
  - **Glue To:** faz o componente grudar em planos do tipo **Any, Horizontal, Vertical ou Sloped** (qualquer, horizontal, vertical ou inclinado). Uma janela deve grudar em plano vertical; um móvel, em horizontal.
  - **Cut Opening:** o componente **corta uma abertura** na face onde é colocado. É o recurso que faz uma janela ou porta abrir o vão sozinha.
  - **Always Face Camera:** o componente sempre se vira para a câmera (usado em figuras humanas 2D e árvores).
  - **Shadows Face Sun:** orienta as sombras como se o objeto olhasse para o sol.
  - **Replace Selection with Component:** já vem marcado; converte a seleção em componente.
- **Editar todas as instâncias:** abra qualquer instância (duplo clique) e edite. Todas mudam.
- **Editar só uma instância:** clique direito e **Make Unique**. O SketchUp cria uma nova definição só para essa instância, que passa a ser independente das outras ([Changing a Single Component Instance](https://help.sketchup.com/en/sketchup/changing-single-component-instance)). Use quando uma janela específica precisa de outra largura.
- **Peso do arquivo:** a ajuda sobre desempenho recomenda reusar componentes em vez de duplicar geometria; várias instâncias consomem menos recursos do que várias cópias separadas ([Improving Performance](https://help.sketchup.com/en/sketchup/improving-performance)).

**Cuidado com o corte de abertura.** O corte acontece na geometria do mesmo contexto em que o componente é colocado. Se as paredes estão dentro de um grupo, abra o grupo (duplo clique) antes de posicionar a janela, para que ela consiga cortar as faces daquela parede. Confira o comportamento na sua versão.

### Grupo ou componente? Como decidir

Pergunta única: **esse objeto vai se repetir ou eu vou querer mudar todas as cópias de uma vez?** Se sim, componente. Se é uma peça única, grupo.

| Elemento da casa | Escolha | Por quê |
|---|---|---|
| Conjunto de paredes | grupo | peça única |
| Laje do piso | grupo | peça única |
| Telhado | grupo | peça única |
| Janela padrão (usada várias vezes) | componente | repete; mudar uma muda todas |
| Porta interna 0,80 x 2,10 | componente | repete |
| Cama, mesa, cadeira | componente | repete, reaproveitável em outro projeto |
| Terreno | grupo | peça única |

## Tags (antigas layers)

**Tags** são a evolução do que se chamava **layers** (camadas) nas versões antigas. A ajuda oficial: "Tags help you organize the objects in your SketchUp model and control their visibility" ([Controlling Visibility with Tags](https://help.sketchup.com/en/sketchup/controlling-visibility-tags)). Na interface em português costumam aparecer como **Etiquetas**; confira.

O que a tag **faz**: liga e desliga a visibilidade (o ícone de olho ao lado de cada tag), esconde de uma vez todas as paredes, ou só os móveis. Também guarda estados em cenas (aula 7): uma cena pode mostrar a casa com telhado e outra sem telhado, para ver o interior.

O que a tag **não faz**: não isola geometria (não impede a aderência). Isolar é papel do grupo. Isso é a confusão mais comum: colocar todas as paredes em uma tag "Paredes" não impede que elas grudem umas nas outras; elas precisam estar em grupos.

**Regra crítica da documentação oficial:** aplique tags a **grupos e componentes**, nunca a arestas e faces soltas. A ajuda diz que o modelo fica "muito mais previsível" se você evitar atribuir tags a entidades como arestas ou faces ou trocar a tag ativa. Geometria nova nasce com a tag **Untagged** por padrão; mantenha assim para geometria solta.

Como usar:

1. Abra o painel **Tags** (no macOS: Window > Tags; no Windows: bandeja padrão, Window > Default Tray). Clique no **+** e digite o nome.
2. Atribua a um grupo ou componente selecionado: pela ferramenta **Tag** (ative no painel, selecione uma tag e clique nos objetos) ou pelo campo **Tag** na janela **Entity Info**.
3. Clique no olho para ocultar; Ctrl (ou Command) permite selecionar várias tags de uma vez.
4. Dá para criar **pastas** de tags para organizar.

Tags também podem ter linhas tracejadas, segundo a ajuda de organização, que trocam todas as linhas do objeto tagueado de sólidas para tracejadas (útil para indicar elementos ocultos).

## O Outliner: o mapa do modelo

A ajuda descreve o **Outliner** como "um mapa de todos os grupos, componentes e planos de seção do modelo". Ele mostra a hierarquia (quem está dentro de quem), permite selecionar e ocultar itens. É a forma de achar um grupo perdido em um modelo grande e de ver se algo que deveria estar dentro de um grupo ficou solto. Se você encontra uma aresta solta no modelo, ela está fora de qualquer grupo.

## Estrutura recomendada para a casa

Uma organização simples e suficiente:

```
Casa (grupo)
  Fundacao_Piso (grupo)         tag: 01_Estrutura
  Paredes (grupo)               tag: 01_Estrutura
  Laje_Forro (grupo)            tag: 01_Estrutura
  Telhado (grupo)               tag: 02_Cobertura
  Esquadrias (componentes)      tag: 03_Esquadrias
  Moveis (componentes)          tag: 04_Mobiliario
Terreno (grupo)                 tag: 05_Terreno
Referencia_Planta (grupo, bloqueado)   tag: 00_Referencia
```

Convenções:

- Nomes de grupos e componentes claros, sem "Group#1". O nome aparece no Outliner.
- Um prefixo numérico nas tags mantém a ordem na lista.
- Ao importar uma planta (aula 6), coloque-a em um grupo e bloqueie-o (clique direito, Lock) para não movê-la sem querer. O bloqueio é um recurso do menu de contexto; confira o nome exato na sua versão.
- Agrupe cedo. A regra prática recomendada por vários tutoriais: agrupe assim que a peça estiver "pronta", antes de começar a próxima.

## Erros típicos desta aula

- **Tag em vez de grupo:** achar que a tag protege a geometria. Não protege.
- **Geometria solta com tag:** atribuir tag a faces soltas e depois esconder a tag: o resultado fica imprevisível.
- **Explodir por engano:** um grupo explodido volta a colar no resto. Se algo se "desmanchou", desfaça.
- **Componente que virou grupo:** se você faz "Make Unique" em todas as cópias, perde a vantagem de mudar tudo de uma vez.
- **Editar a instância errada:** você abre uma janela para mudar a largura, e todas as 6 mudam. Se queria só uma, use Make Unique antes.

## Resumo

- Geometria solta gruda; **grupos** isolam pedaços do modelo, cada cópia de um grupo é independente e o Push/Pull só edita o grupo aberto (duplo clique).
- **Componentes** têm uma definição e várias instâncias: editar a definição muda todas; Make Unique separa uma instância; Cut Opening faz janelas e portas abrirem o vão.
- **Tags** controlam visibilidade, não isolam geometria; aplique-as a grupos e componentes, nunca a faces e arestas soltas.
- O Outliner mostra a hierarquia e ajuda a achar geometria solta.
- Estruture a casa em grupos (Paredes, Laje, Telhado, Terreno) e componentes (esquadrias, móveis), com tags para ligar e desligar conjuntos.

## Para aprofundar

- [ ] [Curso de Sketchup [EP7] - Diferença entre Grupo e Componente](https://www.youtube.com/watch?v=nBqT1YsT8N4) (Arquiteto Leandro Amaral): explica a diferença em português.
- [ ] [Groups vs Components vs Tags in SketchUp | Complete Beginner Guide 2026](https://www.youtube.com/watch?v=a7CAuO73rNE) (SketchUp Core, inglês): os três conceitos lado a lado.
- [ ] [Etiquetas e estrutura - Tutoriais Avançados SketchUp](https://www.youtube.com/watch?v=2hclGtpK-u4) (SketchUp Brasil): tags e estrutura do modelo, canal oficial.
- [ ] [How to Model a House in SketchUp Free (10 EASY Steps)](https://www.youtube.com/watch?v=LXpXVAgRLV0) (SketchUp School, inglês): a série de passos inclui agrupar cedo, editar grupos, tags e componentes, segundo a descrição da comunidade oficial.
- [ ] [Diferença entre Etiquetas, Grupos e Componentes no SketchUp: o que organizar em cada um?](https://spbim.com.br/diferenca-entre-etiquetas-grupos-e-componentes-no-sketchup-o-que-organizar-em-cada-um/) (SPBIM, artigo, não aberto por mim): artigo em português com o mesmo tema, indicado pela busca.
- [ ] Documentação oficial: [Grouping Geometry](https://help.sketchup.com/en/sketchup/grouping-geometry), [Creating a Basic Component](https://help.sketchup.com/en/sketchup/creating-basic-component), [Editing Components](https://help.sketchup.com/en/sketchup/editing-components), [Organizing a Model](https://help.sketchup.com/en/sketchup/organizing-model).

Nota: vídeos não assistidos; título e canal confirmados.

[Próxima aula: Da planta ao modelo](./06%20-%20Da%20Planta%20ao%20Modelo.md)
