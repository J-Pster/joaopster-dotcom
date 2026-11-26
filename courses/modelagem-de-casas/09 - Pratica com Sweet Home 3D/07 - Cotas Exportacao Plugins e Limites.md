[Voltar ao módulo](./README.md)

# Aula 7: Cotas, textos, exportação, plugins e limites

*Pergunta que esta aula responde: como transformo o modelo em documento (planta cotada em PDF), como levo a casa para outros programas, o que os plugins acrescentam e, principalmente, onde o Sweet Home 3D deixa de servir?*

## Cotas e textos: por que anotar

No módulo 3 você aprendeu que um desenho sem cota é uma imagem, e que "nunca se confia na escala do arquivo, só nas cotas". O plano do Sweet Home 3D é desenhado em medidas reais, mas **não mostra números** até você pedir. As anotações do programa (cotas, textos, polilinhas) são só desenho 2D: não alteram o 3D.

### Cotas (dimensions)

Botão **Criar dimensões** (guia em português). Há dois gestos (guia oficial):

1. **Clicar no ponto inicial, clicar no ponto final e mover o mouse para posicionar as linhas de chamada** (extension lines), clicando uma terceira vez.
2. **Passar o cursor sobre a borda de um móvel, parede ou cômodo:** aparece uma cota temporária; um **duplo clique** aceita, e você posiciona a linha de chamada.

O guia adverte: se não mover o mouse entre o segundo e o terceiro clique, a cota fica **sem linhas de chamada**. Existem também as cotas de elevação para alturas de itens (histórico do site, versão 7.0; confira na sua versão).

**Uso duplo:** (a) documento, para a prancha; (b) **ferramenta de verificação**: meça o vão livre de um cômodo, a folga de uma porta, a distância entre paredes e compare com o projeto. É o passo 10 da receita do módulo 3 (aula 9): o modelo está certo quando os números do modelo batem com os do projeto.

Regra do módulo 3 mantida: no plano, cote de **eixo a eixo** só se o projeto original estiver assim; cotas de **vão livre** para cômodos que serão mobiliados.

### Textos

Botão **Adicionar textos**: clique no local e digite no diálogo que aparece. Botões de estilo alteram tamanho e formatação do texto selecionado. Use para nomear ambientes que não tenham cômodo, indicar norte e escrever legendas. Para o **nome do cômodo** e sua **área**, use as opções do próprio cômodo (aula 3), que se atualizam sozinhas.

### Polilinhas

Desde a versão 5.0 (histórico do site), há uma ferramenta de **polilinha** com vários estilos, útil para setas de subida de escada, limites de terreno e traços de projeção. O blog oficial de escadas a menciona para indicar sentido.

## Imprimir e gerar PDF

Menu **Arquivo** (guia em português): **Imprimir…**, **Imprimir para PDF…**, **Visualizar impressão…** e **Configurar página…**. Em **Configurar página** você define papel, margens, orientação, **escala da planta**, cabeçalho e rodapé. Por padrão, a saída inclui **a lista de móveis, a planta e a vista 3D atual**. Não está disponível na versão online nem nas móveis.

Como transformar isso numa prancha usável (ligação com o módulo 3, aulas 3 e 7):

1. Escolha um papel padrão (por exemplo, A3 ou A4) e a **escala** da planta: para uma casa de 8 x 12 m em A3 (420 x 297 mm), a escala 1:50 dá desenho de 160 x 240 mm, que cabe com folga; em A4 (297 x 210 mm), 1:100 é mais realista (80 x 120 mm). Conta: `dimensão real / escala = dimensão no papel`, ou seja, 12,00 m / 50 = 0,24 m = 240 mm.
2. Ligue a **exibição da área** dos cômodos e adicione as cotas principais.
3. Gere PDF e **confira a escala com uma régua** (imprima em 100%, sem "ajustar à página", que deforma a escala; é o alerta da aula 3 do módulo 3).
4. Não trate esse PDF como projeto legal: falta carimbo, prancha de cortes e fachadas, quadro de áreas e a assinatura técnica.

A FAQ observa que a impressão de vista 3D depende de renderização fora de tela; se a impressão da vista 3D sair em branco, o problema costuma ser o driver de vídeo.

Além do PDF, a página de recursos cita exportação para **imagens bitmap** e **gráficos vetoriais**; confira o nome exato do menu de exportação na sua versão.

## Exportar para outros programas

### OBJ

**Visualização 3D > Exportar para o formato OBJ…** (guia). O programa grava um arquivo `.obj` com a geometria de tudo o que está na vista 3D, um arquivo `.mtl` (materiais) e as imagens das texturas. Se houver objetos selecionados, o programa oferece a opção de **exportar somente a seleção** (usada no tutorial oficial de tetos inclinados). Indisponível nas versões online e móveis.

Por que existe: o OBJ é um formato de **troca** simples e universal (módulo 8, aula 3). Serve para levar a casa ao **Blender** (módulo 12), para render (módulo 13) e para outros programas. Cuidados:

- **Unidades:** o programa exporta com uma unidade (a página oficial de modelos não especifica); ao importar no destino, meça uma parede conhecida e ajuste a escala, como no assistente de importação da aula 5.
- **Perda de inteligência:** o OBJ carrega faces e materiais, **não** paredes, níveis ou nomes de objetos como "parede". No destino você terá uma malha, não uma casa parametrizada.
- **Peso:** modelos importados de bibliotecas com muitos polígonos ficam pesados no destino também.

Veja: [3D Moving Day: How to Export OBJ Files from Sweet Home 3D](https://www.youtube.com/watch?v=0RJ5y6guEss) (3D Logic Class), [Sweet Home 3D How To Export To Blender](https://www.youtube.com/watch?v=m1fXAty2ppw) (Mufasu CAD) e [How to Import Sweet Home 3D Models into Blender (OBJ Workflow Tutorial)](https://www.youtube.com/watch?v=jZM_HWcbrHU) (3D Logic Class), todos em inglês.

Para SketchUp (módulo 10), o caminho comum é exportar em OBJ ou outro formato de troca e importar; a compatibilidade depende da versão do SketchUp e será tratada lá. Um tópico do fórum do site discute "exportar para o SketchUp"; não a li.

### Trazer a casa de volta

O caminho contrário existe: móveis do SketchUp entram pelo assistente de importação (aula 5). A casa inteira **não** volta como paredes editáveis: uma vez fora, é malha.

## Plugins

**Plugin** é um pacote de código Java que acrescenta menus e botões. Segundo o guia oficial, são arquivos **SH3P**. Instalar:

- **Windows e macOS:** duplo clique no arquivo `.sh3p`.
- **Linux:** copiar para a subpasta `.eteks/sweethome3d/plugins` da pasta do usuário, se o duplo clique não funcionar.
- Depois, **reiniciar** o programa para os novos menus e botões aparecerem. Para desinstalar, remova o arquivo da pasta de plugins e reinicie.

Fontes: [Plug-ins and tools](https://www.sweethome3d.com/plugins/) (site oficial) e o [tutorial de plugins e extensões](https://www.sweethome3d.com/pluginsUserGuide.pdf) (PDF oficial, que não li).

Plugins citados na documentação oficial: **Roof Generator** (telhado, FAQ), gerador de escadas (blog, disponível desde dezembro de 2022) e um plugin de render avançado (título de artigo antigo do blog). Regras de segurança: plugin é código executado com as permissões do seu usuário; baixe só de fontes reconhecidas (site oficial ou repositório do projeto) e verifique a compatibilidade com a versão que você usa.

## O que o Sweet Home 3D não faz bem (limites)

Conhecer o limite evita tentar forçar a ferramenta e economiza horas:

| Necessidade | Situação no Sweet Home 3D |
|---|---|
| **Telhado** | Sem ferramenta nativa (FAQ oficial); solução com paredes, modelos importados, peças giradas ou plugin (aula 4) |
| **Terreno em declive, cortes de terra** | O solo é plano; contorna-se com níveis ou modelos importados |
| **Cortes e fachadas técnicos** | Não gera cortes com hachura, cotas e simbologia; gera plantas e perspectivas |
| **Paredes em camadas** (estrutura, reboco, isolamento) | O diálogo de parede trata uma espessura única e acabamento por lado (guia); não há camadas com materiais construtivos como em BIM |
| **Quantitativos de obra** | Só a lista de móveis (com colunas personalizáveis); não calcula metragem de parede, concreto ou telhado como o BIM (módulo 11) |
| **Formas livres** | Parede reta ou curva; superfícies complexas exigem modelos importados |
| **Estrutura, instalações, normas** | Não verifica nada disso |
| **Render de nível profissional** | Aceitável para estudo; para luz e materiais mais realistas, usa-se Blender ou outros (módulos 12 e 13) |
| **Colaboração e formato aberto BIM (IFC)** | A documentação consultada não menciona IFC; para troca, usa-se OBJ (perda de informação) |

**Aviso de limite hobby x profissional:** o modelo não é projeto legal nem executivo. O que você verá é "parece bom", não "atende ao código de obras, à estrutura e às instalações". Para construir, o Brasil exige responsável técnico (arquiteto, CAU, RRT; ou engenheiro, CREA, ART; módulo 6).

## Boas práticas de projeto

1. **Uma unidade, um sistema de referência**, do primeiro ao último dia (aula 1).
2. **Nomeie tudo**: esquadrias com o código do quadro, cômodos com o nome do projeto, móveis com nome real.
3. **Modele do geral ao particular:** contorno externo, paredes internas, esquadrias, cômodos, níveis, cobertura, móveis, textura, luz (a mesma ordem do fluxo da aula 1).
4. **Salve versões** (`casa_v01.sh3d`, `casa_v02.sh3d`).
5. **Use modelos leves**; importe só o que aparece na cena.
6. **Verifique numericamente** com cotas, não pelo olhômetro.
7. **Decida a convenção eixo x face** (aula 2) antes de desenhar.
8. **Copie e cole entre níveis** para alinhar andares.
9. **Não modele o que o projeto não define.** Se o quadro de acabamentos não especifica a cor, escolha depois e registre a decisão.

## Resumo

- Cotas, textos e polilinhas são **anotações 2D**; a cota também serve para **verificar o modelo** contra o projeto (módulo 3).
- PDF: Arquivo > Imprimir para PDF…; defina papel e escala em Configurar página…; confira a escala com régua; o PDF não é prancha legal.
- **Exportar para o formato OBJ…** (Visualização 3D) gera OBJ, MTL e texturas, para Blender e outros; perde a "inteligência" de parede e nível; confira a unidade no destino.
- Plugins (arquivos SH3P): duplo clique ou pasta de plugins no Linux, reiniciar; use só fontes confiáveis.
- Limites: sem telhado nativo, terreno plano, sem cortes técnicos, sem camadas, sem quantitativos de obra, sem verificação de norma. Modele do geral ao particular e verifique com números.

## Para aprofundar

- [ ] [Curso Sweet Home 3D: Inserção de textos e cotas (Aula 6/16)](https://www.youtube.com/watch?v=Jr7Ieo8xmmM) (Bruno Toniolo): cotas e textos em português (2016).
- [ ] [3D Moving Day: How to Export OBJ Files from Sweet Home 3D](https://www.youtube.com/watch?v=0RJ5y6guEss) (3D Logic Class, inglês, 2025): exportação em OBJ passo a passo, pelo título.
- [ ] [Sweet Home 3D How To Export To Blender](https://www.youtube.com/watch?v=m1fXAty2ppw) (Mufasu CAD, inglês): levar ao Blender, antecipa o módulo 12.
- [ ] [How to Import Sweet Home 3D Models into Blender (OBJ Workflow Tutorial)](https://www.youtube.com/watch?v=jZM_HWcbrHU) (3D Logic Class, inglês, 2025): fluxo OBJ, pelo título.
- [ ] [COMO IMPORTAR UM MODELO 3D DO SWEET HOME PARA TWINMOTION](https://www.youtube.com/watch?v=lRI6sQC4Uv4) (CONSTRUIR EM 3D): levar a casa para um motor de render, em português, pelo título.
- [ ] [Plug-ins and tools](https://www.sweethome3d.com/plugins/) e [Tips and Tricks](https://www.sweethome3d.com/tips/) (site oficial, inglês): plugins e dicas oficiais.

[Próxima aula: Exercício guiado, a casa de 96 m²](./08%20-%20Exercicio%20Guiado%20a%20Casa%20de%2096%20m2.md)
