[Voltar ao módulo](./README.md)

# Aula 1: Por que o BIM existe e o que muda ao modelar

*Pergunta que esta aula responde: que problema o BIM resolve, e o que muda concretamente no seu jeito de modelar quando a parede deixa de ser um conjunto de faces e passa a ser um objeto com dados?*

## O problema que o BIM resolve

No módulo 3 você viu que uma casa é descrita por várias folhas: planta, cortes, fachadas, tabelas. No módulo 7 você viu que, em CAD 2D, cada folha é um desenho separado, e em um modelo 3D geométrico (SketchUp, Sweet Home 3D) as vistas saem de uma geometria só, mas a geometria não sabe o que é. O problema que sobra é este:

- Você desloca uma janela 30 cm na planta. No CAD, o corte e a fachada ficam errados até você corrigi-los à mão.
- Você quer saber quantas portas de 0,80 m existem. Em um modelo de faces, você conta olhando.
- Você troca o bloco cerâmico de 14 cm por um de 19 cm. Em nenhum lugar o programa sabe que aquilo era "bloco de 14 cm", então nada se atualiza: nem a espessura da parede, nem a área de reboco, nem o custo.

O **BIM** (Building Information Modeling, Modelagem da Informação da Construção) ataca a raiz: o programa guarda a casa como **objetos com significado e dados**, e todo o resto (planta, corte, tabela) é **calculado a partir deles**. A resposta ao "por quê" é a mesma de qualquer banco de dados: informação guardada uma vez, em um lugar, e consultada de vários ângulos, não duplicada em cada folha.

A documentação do Bonsai (o BIM aberto que você verá na aula 6) resume assim: BIM é "uma maneira de descrever digitalmente o ambiente construído para computadores", e "dados BIM são muito diferentes de um modelo 3D comum", porque a geometria é opcional e a maior parte dos dados não é geométrica.

## O que "a parede é uma parede" significa

Pegue a parede externa de 3,00 m de comprimento e 2,70 m de altura do módulo 7. Em um modelo de faces ela é uma caixa. Em BIM ela é um **objeto** com:

| O que o objeto guarda | Exemplo | O que isso permite |
|---|---|---|
| **Categoria** (o que é) | Parede | Sabe-se que ela recebe portas e janelas, que aparece com hachura em corte, que entra na tabela de paredes |
| **Tipo** (qual receita) | "Externa, bloco 14 cm, reboco dos dois lados" | Mudar o tipo muda todas as paredes daquele tipo de uma vez |
| **Camadas** (de que é feita) | Reboco 2 cm, bloco 14 cm, reboco 2 cm | A espessura total (18 cm) sai da soma; as quantidades por material saem das camadas |
| **Parâmetros** (medidas e dados) | Comprimento, altura, nível de base, nível de topo | A altura pode "seguir" o nível: mude o pé-direito e a parede acompanha |
| **Relações** | A janela J1 está "hospedada" nesta parede | Mover ou apagar a parede leva a janela junto e refaz o vão |
| **Localização** | Pavimento térreo | Vira coluna da tabela, filtro de vista, agrupamento de áreas |

Essa lista é o que separa "desenhar" de "construir virtualmente". Você não desenha as linhas da parede: você **coloca** a parede, diz o tipo e onde ela começa e termina, e o programa desenha a hachura, o vão, a espessura.

## Os cinco conceitos que aparecem em todo software BIM

O nome muda de programa para programa (a aula 2 traz a tabela de equivalência), mas os conceitos são os mesmos.

### 1. Nível (pavimento)

**Nível** é um plano horizontal de referência: piso do térreo, piso do pavimento superior, topo da cobertura. No módulo 7 você viu que paredes ficam "presas" a níveis. A consequência prática é que a altura de uma parede não é um número digitado, é uma **relação**: "do nível 0,00 ao nível 2,70". Se o pé-direito mudar, altera-se o nível uma vez, e tudo que depende dele acompanha.

Na documentação do Revit, cada nível criado normalmente já gera as vistas de planta de piso e de forro associadas a ele. No IFC (a aula 7 detalha), o nível é o `IfcBuildingStorey`.

### 2. Tipo e instância

Um **tipo** é uma definição reutilizável (porta 0,80 x 2,10 m de madeira). Uma **instância** é uma ocorrência dela em um lugar do modelo. Alterar o tipo altera todas as instâncias; alterar a instância altera só aquela (por exemplo, a altura do peitoril de uma janela específica). Vamos ver isso em detalhe na aula 2, porque é a chave para entender famílias no Revit e objetos no Archicad. Em uma casa, o ganho é grande: você define "janela de quarto 1,50 x 1,20" uma vez e a usa em três lugares.

### 3. Vistas geradas do modelo

Planta, corte, fachada, perspectiva 3D e tabela são **vistas**: cada uma é um recorte e uma regra de exibição aplicados ao mesmo modelo. Você não desenha um corte, você **posiciona uma linha de corte** e o programa gera o desenho. Mudou o modelo, todas as vistas mudam. É a resposta ao problema das folhas inconsistentes.

Consequência importante para quem vem do CAD: **não existe "editar a linha no corte"**. Se o corte mostra algo errado, o erro está no modelo; corrija lá.

### 4. Quantitativos (tabelas)

Como cada objeto conhece sua categoria, tipo e parâmetros, o programa pode listar: "5 janelas, sendo 3 do tipo 1,50 x 1,20, 1 do tipo 1,20 x 1,20 e 1 do tipo 0,60 x 0,60". A tabela é outra vista do modelo, e se atualiza sozinha. O módulo 7 chamou isso de *schedule*; a aula 5 mostra como se constrói.

### 5. Coordenação

Em obra real, arquitetura, estrutura e instalações (módulos 4 e 5) são projetadas por pessoas diferentes. A **coordenação** é sobrepor esses modelos e achar conflitos (*clash detection*): a viga que atravessa o tubo, o pilar dentro da porta. Para uma casa de hobby você não vai coordenar disciplinas, mas vai usar a versão pequena da ideia: conferir seu modelo contra o projeto (áreas, alturas, esquadrias) como fez no módulo 9. A aula 5 volta a isto.

## O que muda no jeito de trabalhar

| CAD 2D / modelo de faces | BIM |
|---|---|
| Você desenha linhas, depois faz a parede | Você escolhe o **tipo** de parede e a coloca |
| Espessura é a distância entre duas linhas | Espessura é a soma das **camadas** do tipo |
| A janela é um desenho ou bloco sobre a parede | A janela **fura** a parede e depende dela |
| A altura é digitada em cada parede | A altura é a distância entre **níveis** |
| Você desenha cada vista | Você **configura** cada vista |
| Contar e medir é trabalho manual | Contar e medir é uma **tabela** |
| Liberdade total de forma | Liberdade dentro do que as ferramentas de elemento permitem |

O trabalho não diminui, ele **muda de lugar**: gasta-se mais tempo no início definindo tipos, níveis e camadas, e muito menos depois, quando aparecem mudanças. É por isso que a primeira sensação de quem vem do SketchUp costuma ser "isto é lento": você não vê a casa bonita nos primeiros dez minutos. O ganho aparece na primeira mudança de projeto.

## O custo e o limite honestos

- **Curva de aprendizado maior.** Você precisa entender níveis, tipos e vistas antes de produzir algo apresentável.
- **Modelo mais pesado** e menos livre: formas orgânicas são difíceis. Para volumetria livre, o módulo 10 (SketchUp) e o 12 (Blender) são melhores.
- **BIM não é sinônimo de bonito.** Render e materiais realistas são outro trabalho (módulo 13); os programas BIM têm render, mas costuma-se exportar para ferramentas visuais.
- **O modelo é tão bom quanto os dados.** Uma parede com tipo errado gera tabela errada com toda a aparência de certa. A aula 9 trata disso.
- **Não obriga nada legalmente numa casa particular**: o Decreto 10.306/2020 (módulo 7) impõe BIM a obras públicas federais, não a residências.

## Quando vale a pena para a sua casa

BIM compensa quando você quer: (a) plantas, cortes e fachadas que **não se contradizem**; (b) uma tabela de esquadrias e áreas sem contar à mão; (c) trocar ideias com quem já trabalha em BIM (engenheiro, projetista) por IFC; (d) aprender a lógica que o mercado usa. Se seu objetivo é só visualizar e mobiliar, os módulos 9, 10 e 12 chegam lá com menos atrito. O módulo 8 já mostrou como escolher.

## Resumo

- BIM guarda a casa como **objetos com categoria, tipo, camadas, parâmetros e relações**; planta, corte, fachada e tabela são **vistas calculadas** do mesmo modelo.
- Altura de parede é relação entre **níveis**; janela é objeto **hospedado** na parede; espessura é soma de **camadas**.
- **Tipo** define a receita, **instância** é a ocorrência: mudar o tipo muda todas as instâncias.
- Quantitativos e coordenação só existem porque os objetos carregam dados.
- O custo é planejar antes (tipos, níveis, camadas) e aceitar menos liberdade formal; o ganho vem na primeira mudança.

## Para aprofundar

- [ ] [Afinal, o que é BIM? Entenda.](https://www.youtube.com/watch?v=freYVfVT7a4) (engenhaBIM, Eng. Fabricio Ferreira): introdução em português à diferença entre CAD e BIM e ao fluxo de trabalho.
- [ ] [DIFERENÇA ENTRE CAD x BIM NA PRÁTICA](https://www.youtube.com/watch?v=_yyJ1GKit9Q) (Rafael Ferrera): comparação em português, pelo título.
- [ ] [Qual a diferença entre BIM e CAD? | Série BIM - Vídeo 2](https://www.youtube.com/watch?v=4VLzziiw0hE) (Escola Desenhar): mais uma comparação em português, pelo título.
- [ ] [O que é BIM? - Introdução ao ARCHICAD](https://www.youtube.com/watch?v=v2vihOdcDSA) (Graphisoft Brasil): a lógica do modelo único do ponto de vista do Archicad.
- [ ] [COMO FUNCIONA O BIM 3D NA PRÁTICA](https://www.youtube.com/watch?v=j0ip0zEmAv0) (Inova Civil): visão geral em português, pelo título.
- [ ] [CAD vs BIM: Saiba as diferenças e porque utilizar o BIM](https://spbim.com.br/cad-vs-bim/) (SPBIM, artigo em português): no CAD uma linha "parede" não sabe que é parede; no BIM, cortes, elevações e tabelas se atualizam quando o modelo muda.
- [ ] [Introduction to BIM](https://docs.bonsaibim.org/quickstart/introduction_to_bim.html) (documentação oficial do Bonsai, inglês): leitura curta e neutra de ferramenta sobre BIM e IFC.

[Próxima aula: Como Revit e Archicad pensam](./02%20-%20Como%20Revit%20e%20Archicad%20Pensam.md)
