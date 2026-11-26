[Voltar ao módulo](./README.md)

# Aula 5: Hierarquia e organização do modelo

*Pergunta que esta aula responde: como agrupar, repetir e nomear as peças de um modelo para que ele seja editável, leve e compreensível daqui a um mês?*

## Por que isso existe

Uma casa tem milhares de faces. Se tudo for uma "sopa" única de geometria, três problemas aparecem:

1. **Geometria que gruda.** Em modeladores de faces como o SketchUp, arestas e faces que se tocam se fundem: mover uma parede arrasta ou corta o piso e as paredes vizinhas. Peças não isoladas se contaminam.
2. **Repetição sem controle.** Uma casa tem 10 janelas iguais. Se cada uma é uma cópia independente de faces, corrigir a altura do peitoril exige mexer em dez peças. Se elas são "a mesma janela repetida", muda uma e as dez mudam.
3. **Ilegibilidade.** Sem estrutura e nomes, você não acha nada, e não consegue esconder o telhado para ver o interior.

A solução é dar ao modelo uma **hierarquia**: peças agrupadas dentro de peças maiores, com definição reutilizável quando o objeto se repete, e com nomes e categorias que descrevem o que cada coisa é. É o equivalente digital da organização do canteiro: cada material no seu lugar.

## Grupo, componente, instância e definição

Quatro palavras que aparecem em quase todos os programas (os nomes exatos mudam):

- **Grupo (group):** um conjunto de geometria tratado como um único objeto, isolado do resto (não gruda). Serve para separar. A ajuda oficial do SketchUp descreve Grupos como reunir várias entidades em um único objeto, facilitando o gerenciamento e o controle de visibilidade.
- **Componente (component):** um objeto **reutilizável**. Ao inserir várias vezes, cada inserção é uma **instância** que aponta para uma única **definição**. Editar a definição atualiza todas as instâncias; editar só uma instância a torna independente do restante, quando o programa permite (segundo a ajuda oficial, instâncias mantêm relação pai-filho com o componente base e é possível editar todas de uma vez ou uma só).
- **Instância:** cada ocorrência de um componente no modelo. Tem posição, rotação e escala próprias (o referencial local da aula 1), mas a forma vem da definição.
- **Definição:** o "molde" guardado uma única vez.

Analogia útil: a definição é a receita; as instâncias são os pratos servidos. Uma janela de 1,20 m x 1,10 m usada em oito quartos é uma definição e oito instâncias.

### Quando usar cada um

| Situação | Use | Motivo |
|---|---|---|
| Parte única do modelo (o volume do telhado, o piso do térreo) | **Grupo** | Isola a geometria, sem custo de "definição" |
| Objeto que se repete (janela, porta, cadeira, pilar típico) | **Componente** | Uma mudança propaga para todas as instâncias; o arquivo fica mais leve, pois a geometria é guardada uma vez |
| Qualquer coisa que precise de dados ou classificação | **Componente** | Costuma ser mais adequado para atributos |

A regra que os cursos repetem: se tem **mais de uma cópia**, componente; se é **único**, grupo. Ao errar essa escolha, o custo aparece depois (editar cada cópia manualmente).

### Aninhamento

Grupos e componentes podem ser colocados dentro de outros. Um exemplo de árvore:

```
Casa
  Pavimento Térreo
    Paredes externas (grupo)
    Paredes internas (grupo)
    Laje (grupo)
    Esquadrias
      Janela 120x110 (componente, 8 instâncias)
      Porta 80x210 (componente, 6 instâncias)
  Pavimento Superior
  Cobertura
```

O **Outliner** do SketchUp é o painel que mostra essa árvore: a ajuda oficial o descreve como "um mapa de todos os Grupos, Componentes e planos de seção do modelo" e permite navegar, identificar objetos e controlar visibilidade.

Regra de bom senso para aninhar: dê a cada nível **um critério claro** (por pavimento, depois por sistema construtivo, depois por tipo de peça). Estruturas com dez níveis anônimos ("Grupo#12" dentro de "Grupo#3") são pior do que nenhuma.

## Tags, layers e camadas: organizar a visibilidade

Grupos e componentes definem **o que pertence a quê** (hierarquia física). **Tags** (no SketchUp, antes chamadas de layers; em CAD, "layers" ou camadas; em BIM, "categorias" e "filtros") definem **o que aparece junto** (visibilidade e atributos de exibição).

A diferença é essencial e muito confundida:

- **Hierarquia (grupos):** relaciona e isola geometria; mexer no grupo move tudo o que está dentro.
- **Tags:** não agrupam nem isolam nada; só marcam objetos com um rótulo que pode ser ligado, desligado ou colorido. Um objeto só pode ter **uma** tag no SketchUp.

Exemplos de uso de tags:

- Ligar e desligar "Telhado" para ver o interior.
- Desligar "Mobiliário" para gerar o corte limpo.
- Ligar só "Estrutura" para conferir alinhamento de pilares com o módulo de estrutura.
- Separar "Terreno", "Vegetação" e "Anotações".

Erro comum: **não use tags como se fossem grupos**, nem o inverso. Em SketchUp, a orientação corrente é manter a geometria "solta" na tag padrão (Untagged) e aplicar tags aos grupos e componentes, e não à geometria solta dentro deles (recomendação corrente em cursos; a ajuda oficial trata tags como controle de visibilidade). Em arquivos DWG, layers têm papel semelhante: o SketchUp oferece importar as layers do CAD como grupos (ajuda oficial de importação de CAD).

## Comparativo entre programas

| Ideia | SketchUp | Blender | Revit | Sweet Home 3D |
|---|---|---|---|---|
| Agrupar/isolar | Grupo | Objeto (e "Empty" pai) | Grupo de modelo | Grupo de móveis |
| Reutilizar | Componente e instâncias | "Linked duplicate" (dados compartilhados) | Família > tipo > instância | Modelo de móvel/porta (cada inserção usa o mesmo arquivo 3D) |
| Visibilidade | Tags | Coleções | Categorias, filtros, fases | Níveis |
| Árvore | Outliner | Outliner | Navegador de projeto | Lista de móveis |

Mesmo conceito, três nomes. Em **Revit**, a hierarquia de reutilização é **família** (tipo de objeto, por exemplo "Janela de correr"), **tipo** (uma variante com medidas, "1,20 x 1,10") e **instância** (cada janela colocada). É a mesma lógica de definição e instâncias, com um degrau a mais para as variantes.

## Nomeação: a parte que ninguém faz e todos se arrependem

Nomes servem para você, para o próximo que abrir o arquivo (talvez você mesmo) e, mais tarde, para o BIM e o IFC, em que **nome e tipo** são dados. Um bom esquema:

- **Padrão único, curto e ordenável:** por exemplo `NN_Pavimento_Sistema_Peça`. Ex.: `01_Terreo_Parede_Externa`, `01_Terreo_Laje`, `02_Superior_Janela_Quarto1`.
- **Números à frente** mantêm a ordem alfabética coerente com a ordem construtiva (fundação, estrutura, vedação, cobertura).
- **Sem acento nem espaço** quando o arquivo vai transitar entre programas (alguns exportadores e caminhos de arquivo se confundem com caracteres especiais).
- **Nomes de componentes descrevem o objeto e a medida** (`Janela_120x110`), não "Componente#7".
- **Tags com poucas categorias** (dez a vinte, não cem).
- **Um documento de convenções** de duas linhas no início do projeto (por exemplo, dentro do próprio arquivo, num grupo de texto chamado `LEIA-ME`).

## Como organizar um modelo de casa (roteiro)

1. Defina a hierarquia em papel: pavimentos > sistemas > peças.
2. Crie as tags de visibilidade que você vai realmente usar (Estrutura, Alvenaria, Esquadrias, Cobertura, Mobiliário, Terreno, Referência 2D).
3. Ao terminar cada peça, **agrupe ou transforme em componente imediatamente**, nomeie e coloque na tag; não deixe "para depois".
4. Objetos repetidos: componente desde a primeira cópia.
5. Mantenha a geometria solta apenas dentro de grupos ou componentes; o nível raiz do modelo só contém os grupos maiores.
6. Ao final de cada sessão, abra o Outliner (ou equivalente) e confira: há algo sem nome? Algo fora da hierarquia?

## Resumo

- Sem hierarquia, a geometria gruda, a repetição vira retrabalho e o modelo fica ilegível.
- **Grupo** isola uma peça única; **componente** é uma definição reutilizável cujas **instâncias** compartilham a forma: editar a definição atualiza todas.
- **Hierarquia** diz o que pertence a quê (árvore de grupos e componentes); **tags** só controlam visibilidade; não são substitutos uma da outra.
- Em BIM a mesma lógica aparece como família, tipo e instância; o nome e o tipo passam a ser dados do modelo.
- Adote desde o início um padrão de nomes curto, ordenável e sem acento, e confira a árvore ao fim de cada sessão.

## Para aprofundar

- [ ] [Organizing a Model](https://help.sketchup.com/en/sketchup/organizing-model) (Ajuda do SketchUp, inglês, conteúdo confirmado por leitura): grupos, componentes, tags e Outliner.
- [ ] [Curso de Sketchup [EP7] - Diferença entre Grupo e Componente](https://www.youtube.com/watch?v=nBqT1YsT8N4) (Arquiteto Leandro Amaral): a diferença que mais gera retrabalho.
- [ ] [APRENDA A USAR O SKETCHUP 2026 - AULA 05 GRUPOS E COMPONENTES](https://www.youtube.com/watch?v=mX7--R3ZX5I) (Reis Studio): alternativa em português.
- [ ] [Aula 16 - Qual a diferença entre Grupos e Componentes no SketchUp?](https://www.youtube.com/watch?v=-SrVQcMX1IQ) (Henrique Barsa): mais uma explicação do mesmo ponto.
- [ ] [Sketchup - Aula 04 - Criar Grupos e Etiquetas / Layers / Tags](https://www.youtube.com/watch?v=SlxfnGXWEOI) (Amanda Goulart): grupos e etiquetas (tags) em português.
- [ ] [Groups vs Components vs Tags in SketchUp | Complete Beginner Guide 2026](https://www.youtube.com/watch?v=a7CAuO73rNE) (SketchUp Core, inglês): compara os três conceitos.
- [ ] [Curso SketchUp 2017 - Aula 10: Grupos e Componentes](https://www.youtube.com/watch?v=oomxkw4Q3gg) (Chahoud Cursos): versão mais antiga, o conceito é o mesmo.

[Próxima aula: CAD 2D, modelo 3D e BIM](./06%20-%20CAD%202D%20Modelo%203D%20e%20BIM.md)
