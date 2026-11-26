[Voltar ao módulo](./README.md)

# Aula 5: Vistas, pranchas, quantitativos e coordenação

*Pergunta que esta aula responde: como o modelo vira os desenhos e as tabelas do projeto (planta, corte, fachada, prancha, quantitativo), e o que "se atualizar sozinho" quer dizer na prática?*

## Por que esta é a aula que justifica o BIM

Modelar objetos com dados só compensa se, no fim, o modelo **produz o que você antes fazia à mão**: as folhas do módulo 3 e as tabelas de esquadrias e de áreas do módulo 9. A diferença é de **direção**: no CAD, o desenho é o produto e você o mantém; no BIM, o **modelo** é o produto e os desenhos são **saídas**. Esta aula mostra os quatro tipos de saída (vistas, pranchas, tabelas, conferência) e como testar que elas realmente seguem o modelo.

## 1. Vistas: o modelo visto de um ponto, com regras

Uma **vista** é composta de três decisões:

1. **De onde se olha** (planta do térreo, corte AA, fachada sul, perspectiva);
2. **O que aparece** (quais categorias, quais camadas ou filtros ficam visíveis);
3. **Como aparece** (escala, espessura de linha, hachura, nível de detalhe).

No módulo 3 você aprendeu que a planta baixa é um **corte horizontal** imaginário a cerca de 1,20 m do piso (as janelas aparecem cortadas). Em BIM essa é uma configuração da vista: você a altera, não a desenha.

| Tipo de vista | Como nasce | O que controlar |
|---|---|---|
| **Planta** | Existe uma por nível ou pavimento (no Revit, criada junto com o nível, segundo a ajuda oficial) | Altura do corte, escala, o que aparece |
| **Corte** | Você desenha uma **linha de corte** sobre a planta, com direção e profundidade | Posição da linha, profundidade visível |
| **Elevação (fachada)** | Você posiciona um marcador de elevação apontando para uma direção | Direção, limites laterais |
| **3D** | Perspectiva ou isométrica, com opção de caixa de corte | Ponto de vista, recorte |
| **Tabela** | Consulta ao modelo, sem geometria (item 3) | Campos, filtros, agrupamento |

**Revit.** Cada vista aparece no **Navegador de projeto**; as propriedades de cada vista (escala, nível de detalhe, filtros, gabarito de vista) ficam na paleta Propriedades. **Archicad.** Os **pontos de vista** ficam no **Project Map**; a vista com suas configurações, no **View Map** (aula 2); os controles gráficos por critério ficam em **sobreposições gráficas** (*Graphic Overrides*), regras que mudam a aparência de elementos que atendem a um critério sem alterá-los. Um vídeo de escola de Archicad mostra, por exemplo, uma regra que deixa objetos sanitários tracejados e transparentes na planta de piso. **Bonsai.** Um *drawing* nasce de uma câmera no modelo (aula 6).

**Regra de ouro:** se o desenho está errado, o erro está no **modelo** ou na **configuração da vista**. Você não "corrige a linha".

### Anotações: cotas, etiquetas, cotas de nível

Cotas, etiquetas de porta e janela, nomes de cômodos e cotas de nível são **anotações**: pertencem à vista, mas **leem o modelo**. Uma etiqueta de porta mostra o código do tipo; uma cota entre paredes acompanha a parede se ela se mover. Isso é o que faz o desenho "se atualizar": as anotações são ligadas a objetos, não a linhas soltas.

## 2. Pranchas: montar a folha

Uma **prancha** (folha, *sheet*, *layout*) é a folha de papel em A3 ou A1, com moldura e carimbo, onde as vistas são **posicionadas** em uma escala.

**Revit.** Segundo a ajuda oficial, você adiciona vistas a uma folha arrastando-as do Navegador de projeto, ou pela guia **Vista**, painel **Composição da folha** (*Sheet Composition*), com **Place View** (colocar vista). Pode-se colocar plantas, cortes, elevações, 3D, detalhes e vistas renderizadas, e também **legendas e tabelas**, inclusive em várias folhas.

**Archicad.** As vistas salvas entram nos **layouts** do **Layout Book**, como **desenhos**; e os **Publisher Sets** publicam layouts e vistas em vários formatos (por exemplo, PDF) com um clique. Segundo a comunidade da Graphisoft, mudanças no modelo se refletem em todo o encadeamento: ponto de vista, vista, layout, publicador.

**Como pensar:** a prancha é só **moldura e posição**. O conteúdo vem das vistas; a escala, da vista. O erro de iniciante é tentar "ajustar" o desenho na prancha; volte à vista.

Prancha mínima para a casa de 96 m²: (1) planta baixa cotada em 1:50 com nomes e áreas; (2) dois cortes (AA e BB do módulo 3); (3) fachadas sul e norte; (4) tabelas de esquadrias e de áreas; (5) uma perspectiva 3D. É a mesma lista da aula "Como ler um projeto residencial" do módulo 3, agora **produzida** do modelo.

## 3. Quantitativos: tabelas que leem o modelo

Uma **tabela** (*schedule*) é uma vista de dados: uma linha por objeto (ou por grupo), uma coluna por parâmetro. O mecanismo é sempre o mesmo em três passos: **o que listar** (categoria e filtros), **quais colunas** (campos) e **como organizar** (agrupar, classificar, totalizar).

**Revit.** A ajuda oficial: **Vista > Criar > Tabelas > Tabela/Quantidades** (*Schedule/Quantities*), escolhe-se a categoria (Portas, Janelas, Ambientes, Paredes, Pisos...), marca-se "Tabela de componentes de construção" e, nas **propriedades da tabela**, define-se **campos**, **filtro**, **classificar/agrupar** e **formatação**. Materiais em português mostram duas opções que valem conhecer: desmarcar **"Itemizar cada instância"** para agrupar linhas iguais (uma linha por tipo, com contagem) e usar **totais gerais**. Para o Revit, a categoria de cômodos precisa ser **Ambientes** (no plural, segundo um artigo em português). Há ainda a **tabela-chave** (*key schedule*), em que você preenche padrões de acabamento por tipo de ambiente. Os caminhos de menu acima seguem a ajuda em inglês; os rótulos em português são a tradução usual dos materiais em português. Confira o nome exato na sua versão.

**Archicad.** A tabela é a **Interactive Schedule**. O fluxo ensinado em português: você define **critérios** de busca dos elementos (tipo de elemento, nome do item de biblioteca, pavimento, etc.), depois **adiciona campos** (nome, quantidade, dimensões, vista em planta ou 3D do objeto) e escolhe **agrupar** itens iguais. Quanto mais critérios, mais específica a busca. Os nomes exatos (tabela, mapa, lista) variam por versão e tradução: confira.

**FreeCAD.** A ferramenta **Schedule** gera uma **planilha** de três colunas (descrição, valor, unidade) a partir de consultas: a propriedade pode ser `count` (contagem) ou o nome de uma propriedade dos objetos (com ponto para propriedades aninhadas, como `Shape.Volume`), e há filtros (por exemplo, por rótulo), e exportação para CSV pela bancada de planilhas.

### O que a tabela da casa de 96 m² deve mostrar

Com as esquadrias do módulo 9 (um tipo por dimensão):

| Tipo | Largura x altura (m) | Peitoril (m) | Quantidade | Onde |
|---|---|---|---|---|
| Porta 0,90 | 0,90 x 2,10 | 0 | 1 | P1 |
| Porta 0,80 | 0,80 x 2,10 | 0 | 4 | P2, P3, P4, P6 |
| Porta 0,70 | 0,70 x 2,10 | 0 | 1 | P5 |
| Janela 1,50 x 1,20 | 1,50 x 1,20 | 1,10 | 3 | J1, J3, J5 |
| Janela 1,20 x 1,20 | 1,20 x 1,20 | 1,10 | 1 | J2 |
| Janela 0,60 x 0,60 | 0,60 x 0,60 | 1,80 | 1 | J4 |

Total: **6 portas e 5 janelas, 11 esquadrias**.

Conferência de áreas de vão: portas 1,89 + 4 x 1,68 + 1,47 = **10,08 m²**; janelas 3 x 1,80 + 1,44 + 0,36 = **7,20 m²**; total **17,28 m²**. Vãos nas paredes externas (P1, J1 a J5): 1,89 + 7,20 = **9,09 m²**; nas paredes internas (P2 a P6): **8,19 m²**.

Quantidades de parede a esperar, por uma face e sem descontar nada: externas 36,00 m x 2,90 m = **104,40 m²**; internas 29,00 m x 2,70 m = **78,30 m²**. Descontando os vãos: externas **95,31 m²**, internas **70,11 m²**. Cuidado: cada programa pode calcular a "área" de uma parede de um jeito (uma face, duas faces, com ou sem vão descontado). Confira a definição do parâmetro na sua versão antes de comparar. E o comprimento de uma parede interna depende de onde ela termina (no eixo ou na face da parede vizinha), o que pode causar diferenças pequenas.

Cobertura: duas águas de 4,80 m x 12,00 m = **57,60 m² cada, 115,20 m²** no total (módulo 9).

Tabela de ambientes: nome, nível, área. Os valores esperados estão na aula 4 (soma dos fechados 73,62 m²; varanda 16,00 m²).

## O teste que prova que é BIM

Faça este teste depois que a tabela existir:

1. Anote a área do banheiro e a largura de P5 na tabela.
2. **Mude o tipo** de P5 de 0,70 m para 0,80 m (uma vez, no tipo).
3. Confira que: a **planta** mostra a porta mais larga; o **corte** que atravessa P5, se houver, também; a **tabela** mostra 5 portas de 0,80 m e nenhuma de 0,70 m; a **etiqueta** na planta mudou.
4. Mova uma parede interna 10 cm: a **área** do cômodo e a **cota** acompanham?

Se algum desses não acompanhar, o modelo tem um elemento solto, uma anotação desligada do objeto, ou uma vista fora do modo automático. É o teste mais útil da aula.

## 4. Coordenação: conferir contra outra fonte

**Coordenação** é sobrepor modelos ou referências e achar inconsistências. Em obra são arquitetura, estrutura e instalações. Você vai fazer uma versão de hobby:

- **Contra o projeto de referência** (módulo 3): áreas, alturas, esquadrias, como você fez no módulo 9.
- **Contra outro modelo** (módulo 9): abra a mesma casa modelada no Sweet Home 3D e compare áreas e quantidades.
- **Contra outra disciplina**: se um dia tiver o modelo da estrutura (módulo 4), sobreponha e procure **conflitos** (*clash*): pilar dentro de porta, viga atravessando esquadria.
- **Contra si mesmo por IFC** (aula 7): exportar para IFC e abrir em outro programa mostra o que o seu modelo realmente contém.

Em programas BIM, modelos de outras disciplinas ou versões entram como **vínculos** (no Revit, por exemplo, a exportação IFC tem opção específica para modelos vinculados, segundo a ajuda oficial); o modelo do arquiteto, do estrutural e do instalador continuam separados, mas visíveis juntos.

## Resumo

- Uma **vista** é ponto de vista mais regras de exibição; o desenho errado se corrige no **modelo ou na configuração da vista**, nunca na linha.
- A **prancha** só posiciona vistas em escala; no Revit, arraste ou use Colocar vista; no Archicad, o Layout Book e os Publisher Sets.
- A **tabela** é uma consulta: escolher o que listar, as colunas e o agrupamento. Para a casa: 6 portas, 5 janelas, 17,28 m² de vãos, 115,20 m² de telhado, 73,62 m² de cômodos fechados.
- **Teste BIM:** mude um **tipo** e veja planta, corte, etiqueta e tabela seguirem; se algo não seguir, há elemento solto.
- **Coordenação** de hobby é conferir contra o projeto, contra outro modelo e contra uma exportação IFC.

## Para aprofundar

- [ ] [Aula 29: Pranchas e Tabelas no Revit, Organização e Quantitativos Detalhados](https://www.youtube.com/watch?v=trakjS4ZhuA) (Nômade BIM): o ponto em que o modelo vira documento, em português.
- [ ] [Tudo sobre Tabelas e quantitativos no Revit](https://www.youtube.com/watch?v=Rw02ugpYPTo) (Bee1): como o modelo alimenta a tabela, em português.
- [ ] [Aula 29 | Como fazer quadro de esquadrias (portas e janelas) e tabela de áreas | Curso de Revit](https://www.youtube.com/watch?v=Mwwqe3YzDCQ) (TIME AD CURSOS): quadro de esquadrias e tabela de áreas passo a passo, em português; a transcrição mostra exatamente o mesmo caso da casa (portas e janelas por tipo).
- [ ] [Identificadores de Ambientes, Portas e Janelas/Tabelas](https://www.youtube.com/watch?v=GCffmTcr8vE) (Carla Rimkus, Arquitetura e Design): etiquetas e tabelas de ambientes, portas e janelas em Revit, em português.
- [ ] [Mapa de Vistas no Archicad: Guia Completo para Controle Gráfico e Pranchas](https://www.youtube.com/watch?v=UP80IktG5EM) (Mateus Leoni | A Curva): vistas e pranchas no Archicad, em português.
- [ ] [ARCHICAD INICIANTE - COMO CRIAR PLANILHAS DE QUANTITATIVOS SIMPLES (AULA COMPLETA)](https://www.youtube.com/watch?v=ctPmq5651kg) (EIXO, Escola de Archicad): critérios de busca, campos e agrupamento na tabela interativa, em português.
- [ ] [Create a Schedule or Quantity](https://help.autodesk.com/view/RVT/2025/ENU/?guid=GUID-6D4DBBDA-3611-40CD-9A45-BE40EB07188A) (Autodesk, ajuda oficial em inglês): passo a passo oficial de tabelas no Revit.
- [ ] [Add Views to a Sheet](https://help.autodesk.com/view/RVT/2024/ENU/?caas=caas%2FCloudHelp%2Fcloudhelp%2F2024%2FENU%2FRevit-DocumentPresent%2Ffiles%2FGUID-D3E7FDC3-57AB-4497-AB87-D195476254C2-htm.html) (Autodesk, inglês): como colocar vistas em folhas.
- [ ] [Tabela de ambientes no Revit](https://qualificad.com.br/tabela-de-ambientes-no-revit/) (QualifiCAD, artigo em português): ambientes, legendas e tabela de ambientes por nível.

[Próxima aula: Alternativas abertas, FreeCAD BIM e Bonsai](./06%20-%20Alternativas%20Abertas%20FreeCAD%20BIM%20e%20Bonsai.md)
