[Voltar ao módulo](./README.md)

# Aula 2: Como o Revit e o Archicad pensam

*Pergunta que esta aula responde: se os dois fazem BIM, por que parecem tão diferentes, e como traduzir cada termo de um para o outro (e para as alternativas abertas)?*

## Por que comparar os dois

Revit (Autodesk) e Archicad (Graphisoft) são os dois programas BIM proprietários mais usados em arquitetura residencial. Quase todo material de estudo em português é de um ou de outro. Entender **a lógica interna de cada um** evita dois erros comuns: procurar no Archicad um botão que só existe no Revit, e achar que um conceito que você aprendeu num deles "não existe" no outro. Existe, com outro nome.

Um aviso de método: o que segue sobre a filosofia de cada programa é **interpretação** a partir da documentação oficial e de como as ferramentas se organizam, não uma declaração dos fabricantes.

## O pensamento do Revit: tudo é família, vista é consulta

A ajuda oficial da Autodesk afirma que **todo elemento que você usa no Revit é uma família**; algumas famílias (como paredes ou níveis) já fazem parte do ambiente do modelo, outras (como portas e luminárias específicas) precisam ser carregadas de uma biblioteca externa, e "não é possível criar nada no Revit sem usar uma família". A partir disso o Revit organiza tudo em uma **hierarquia de quatro degraus**:

**Categoria > Família > Tipo > Instância.** Exemplo: Portas (categoria) > Porta simples de uma folha (família) > 0,80 x 2,10 m (tipo) > a porta P4 do quarto 1 (instância).

### Três tipos de família (definições da ajuda oficial)

| Tipo de família | O que é | Exemplo na sua casa |
|---|---|---|
| **Família do sistema** | Já vem embutida no Revit; cria elementos básicos de construção; você não a carrega de fora nem a cria, mas pode **duplicar e modificar seus tipos** | Paredes, pisos, telhados, e também níveis, grades, folhas de desenho |
| **Família carregável** | Criada fora do projeto em arquivo `.rfa` e **carregada** nele; tipicamente hospedada por uma família do sistema | Portas, janelas, mobiliário, luminárias, legendas e símbolos de anotação |
| **Família no local** (*in-place*) | Elemento único, criado dentro do projeto, para geometria específica que não será reutilizada | Uma bancada de concreto com formato só seu |

A regra prática: **use família do sistema e carregável; evite a no local** (a aula 9 explica por quê).

### Tipo e instância no Revit

A ajuda em português descreve os dois tipos de propriedade:

- **Propriedades de tipo**: valem para **todas** as instâncias do mesmo tipo. Exemplo da própria ajuda: a espessura e a largura de uma porta. Alterar afeta todas as portas daquele tipo.
- **Propriedades de instância**: valem só para **aquela** ocorrência. Exemplo da ajuda: a altura do peitoril de uma janela e o material do batente.

Na paleta **Propriedades** você vê as propriedades de instância do que está selecionado; o **Seletor de tipo** troca o tipo; **Duplicar**, na caixa de propriedades de tipo, cria um novo tipo a partir de um existente. Esses nomes vêm da ajuda oficial em português; confira o rótulo exato na sua versão.

Aplicação imediata: na aula 4 você vai criar "Parede externa 20 cm" e "Parede interna 10 cm" como **tipos** de parede; as portas P2, P3, P4 e P6 (todas 0,80 x 2,10 m) serão **um tipo** com quatro instâncias.

### Por que o Revit pensa assim

Se tudo é elemento de uma categoria, com parâmetros, então **o modelo é um banco de dados** e cada vista é uma **consulta com regras de exibição**. Uma tabela de portas é uma consulta "todos os elementos da categoria Portas, colunas tipo e largura". Uma planta é a consulta "elementos deste nível, cortados a 1,20 m". Isso explica duas características do Revit: (1) ele é muito bom em tabelas e quantitativos, e (2) muita coisa exige configurar parâmetros de vista antes de "aparecer" na planta.

### Modelo de partida: o template

Um projeto novo no Revit começa de um **template de projeto**, arquivo `.rte` com níveis, tipos de parede, estilos de linha e vistas pré-configurados. Segundo a Autodesk, você não sobrescreve o template ao salvar (é pedido um novo nome) e worksets não podem ser guardados em `.rte`. Os templates que acompanham o programa variam por região e versão: escolha um de arquitetura em métrico.

## O pensamento do Archicad: o edifício virtual, objetos de biblioteca e o Navigator

O Archicad também é BIM completo, mas organiza o trabalho de outra forma.

### Elementos e objetos de biblioteca (GDL)

No Archicad há dois grandes grupos de coisas que você coloca:

1. **Ferramentas de elemento construtivo** (Parede, Laje, Pilar, Viga, Telhado, Escada, Zona e outras): elementos "nativos", cada um com a sua janela de configurações.
2. **Objetos de biblioteca** (*library parts*): portas, janelas, mobiliário, luminárias. São arquivos `.gsm` escritos em **GDL** (*Geometric Description Language*). A documentação da Graphisoft descreve o objeto GDL como algo que define sua **classificação estrutural, símbolo 2D, modelo 3D, opções paramétricas, conexões entre parâmetros e interface de entrada**. Ou seja, é o equivalente da família carregável: um pacote que carrega geometria, símbolo de planta e parâmetros, editável em script.

A biblioteca padrão traz "centenas de objetos predefinidos"; você carrega bibliotecas adicionais pelo **Library Manager** e pode buscar objetos no repositório **BIMcomponents.com** direto pela caixa de configurações. O **GDL Center** (gdl.graphisoft.com) é a base de conhecimento da Graphisoft para quem quer criar objetos.

### Pavimentos e o Navigator

No Archicad o "nível" se chama **pavimento** (*story*). Segundo a comunidade da Graphisoft, pavimentos dividem o espaço verticalmente, replicando a estrutura de pavimentos da edificação, como faixas de altura. O trabalho todo é navegado pelo **Navigator**, uma paleta em árvore com **quatro mapas**:

| Mapa | Para que serve |
|---|---|
| **Project Map** (mapa do projeto) | Modelar e navegar entre pontos de vista 2D e 3D (plantas por pavimento, cortes, elevações, 3D) |
| **View Map** (mapa de vistas) | **Vistas** salvas: um ponto de vista mais suas configurações de exibição (escala, camadas, filtros), para extrair informação do modelo |
| **Layout Book** (livro de layouts) | Montar os **layouts** (folhas) onde as vistas entram como **desenhos** |
| **Publisher Sets** (conjuntos do publicador) | Publicar layouts e vistas em vários formatos, com um clique |

A comunidade da Graphisoft destaca que os quatro mapas estão **interligados**: uma mudança no modelo se reflete em pontos de vista, vistas, layouts e conjuntos.

### Por que o Archicad pensa assim

O Archicad separa com clareza **onde estou no modelo** (ponto de vista), **como quero ver** (vista salva com suas regras) e **como entrego** (layout, publicador). É um fluxo de "construir o edifício virtual, depois extrair documentação por vistas salvas". Isso explica por que, no Archicad, muitos cursos gastam tempo com **mapa de vistas** e **sobreposições gráficas** (regras que mudam a aparência dos elementos por critério, sem alterá-los): é o controle gráfico do que sai no papel.

## Tabela de equivalência

| Conceito | Revit | Archicad | FreeCAD BIM | Bonsai / IFC |
|---|---|---|---|---|
| Objeto reutilizável com parâmetros | **Família** (sistema, carregável, no local) | **Ferramenta de elemento** ou **objeto de biblioteca GDL** (`.gsm`) | Objeto BIM com **predefinições** (presets) e propriedades | **Tipo** IFC (ex.: `IfcDoorType`) + ocorrências |
| Variante reutilizável | **Tipo** | Não confirmado na documentação lida (o Archicad guarda configurações de elemento e parâmetros do objeto; confira o recurso equivalente na sua versão) | Ainda em desenvolvimento (suporte básico a tipos IFC na versão 1.1) | **Tipo** IFC |
| Ocorrência no modelo | **Instância** | Elemento colocado | Objeto na árvore | Ocorrência do tipo |
| Piso de referência | **Nível** (*Level*) | **Pavimento** (*Story*) | **Nível** (*Level*; antes "Floor") | `IfcBuildingStorey` |
| Grade de eixos | **Grade** (*Grid*) | **Grelha** (elemento *Grid*) | Eixos e sistema de eixos (*Axis*, *Axis System*) | Grades IFC (*IFC Grids*) |
| Parede em camadas | **Parede composta** (estrutura do tipo) | **Composição** (*Composite*) feita de **Building Materials** | Multi-material | Conjunto de camadas de material |
| Cômodo com área | **Ambiente** (*Room*) | **Zona** (*Zone*) | **Espaço** (*Space*) | `IfcSpace` (ferramenta de espaço) |
| Recorte de exibição | **Vista** (planta, corte, elevação, 3D) | **Ponto de vista** (Project Map) e **Vista** (View Map) | Vistas do BIM Views / TechDraw | **Desenho** (*Drawing*) gerado de uma câmera |
| Folha de impressão | **Folha** (*Sheet*) | **Layout** (Layout Book) | Página do TechDraw | **Sheet** |
| Publicar | Imprimir / exportar PDF | **Publisher Sets** | Exportar PDF | Imprimir o desenho / folha |
| Tabela de quantitativos | **Tabela/Quantidades** (*Schedule*) | **Interactive Schedule** (tabelas interativas) | Ferramenta **Schedule** (gera planilha) | Aba de tabelas em Drawings and Documents |
| Arquivo de partida | **Template** `.rte` | Arquivo-modelo do Archicad (confira a extensão na sua versão) | Documento novo | Projeto IFC novo (em branco ou modelo demo) |
| Trabalho em equipe | Worksets / modelo em nuvem | **BIMcloud** | Sem equivalente nativo confirmado | Git e coordenação por IFC |

Os nomes em português variam por versão do programa e por tradução; onde a tabela dá o rótulo em português, ele vem da ajuda oficial ou de material em português usado neste módulo. **Confira o nome exato na sua versão.**

## O que cada filosofia custa ao iniciante

- **Revit:** pede que você entenda categorias, tipos e parâmetros logo cedo. Em troca, tabelas e famílias são muito poderosas. Material de aprendizado em português é abundante.
- **Archicad:** a modelagem inicial costuma parecer mais direta (você escolhe elemento, configura e desenha), e o controle gráfico via vistas e sobreposições é forte. Material em português existe, principalmente de escolas especializadas.
- **Ambos:** usam **IFC** (aula 7) para trocar com outros programas, e ambos exigem licença paga fora do teste ou da condição de estudante (aula 3).

## Resumo

- No **Revit**, tudo é **família** (sistema, carregável, no local) organizada em **categoria, família, tipo, instância**; a vista é uma consulta ao banco de dados do modelo.
- **Propriedades de tipo** valem para todas as instâncias; **propriedades de instância**, só para uma.
- No **Archicad**, você usa **ferramentas de elemento** e **objetos GDL**; o **Navigator** tem quatro mapas: Project Map, View Map, Layout Book e Publisher Sets, interligados.
- Os conceitos se traduzem: família ~ objeto GDL, nível ~ pavimento, ambiente ~ zona, folha ~ layout, tabela ~ tabela interativa.
- A escolha entre eles é de licença, material de estudo e gosto de fluxo, não de "qual faz BIM de verdade".

## Para aprofundar

- [ ] [Famílias: habilidade essencial](https://help.autodesk.com/cloudhelp/2025/PTB/Revit-GetStarted/files/GUID-7AEC5D66-C2E0-40E2-9504-3CC13781B87A.htm) (Autodesk, ajuda oficial em português): definições de família do sistema, carregável e no local, tipos, propriedades de tipo e de instância.
- [ ] [Parâmetros de tipo e instância em famílias](https://www.youtube.com/watch?v=82HmsoYxJ8c) (Vitrine Revit): vídeo em português, pelo título, sobre a diferença entre os dois tipos de parâmetro.
- [ ] [Revit | Edição de famílias paramétricas básicas | 3/3](https://www.youtube.com/watch?v=vLZwCrB1S_U) (FMantuano | FM Engenharia): terceiro episódio de uma série em português; pelo título, trata de edição de famílias paramétricas (pressupõe os episódios 1 e 2).
- [ ] [Mini Curso de FAMÍLIAS // Parâmetros e Planos de referência // Aula 3](https://www.youtube.com/watch?v=2uwURcV73y4) (BIMPWR): aula 3 de um minicurso de famílias em português; pelo título e descrição, aborda parâmetros e planos de referência, incluindo tipo versus instância.
- [ ] [Mapa de Vistas no Archicad: Guia Completo para Controle Gráfico e Pranchas](https://www.youtube.com/watch?v=UP80IktG5EM) (Mateus Leoni | A Curva): o mapa de vistas do Archicad em português.
- [ ] [Where to Find Objects for Use in Archicad](https://help.graphisoft.com/AC/28/INT/_AC28_Help/040_ElementsVB/040_ElementsVB-280.htm) (Graphisoft, ajuda oficial em inglês): biblioteca padrão, Library Manager e BIMcomponents.com.
- [ ] [Components of a Library Part](https://gdl.graphisoft.com/gdl-basics/components-of-a-libpart/) (GDL Center, Graphisoft, inglês): como um objeto GDL é composto.

[Próxima aula: Licenças para hobby e caminhos legais](./03%20-%20Licencas%20para%20Hobby%20e%20Caminhos%20Legais.md)
