[Voltar ao módulo](./README.md)

# Aula 4: O fluxo de modelagem de uma casa em BIM

*Pergunta que esta aula responde: em que ordem se modela uma casa em BIM, o que cada etapa faz no modelo, e como isso aparece no Revit e no Archicad?*

## Por que a ordem importa mais do que em SketchUp

Em um modelo de faces (módulos 9 e 10) você pode começar por qualquer lugar e consertar depois. Em BIM, cada objeto **depende** de outro: a parede depende do nível, a janela depende da parede, o cômodo depende das paredes que o cercam, a cobertura depende das alturas. Se você inverte a ordem, refaz relações. A ordem abaixo é a mesma nos dois programas e nas alternativas abertas; só os nomes das ferramentas mudam (tabela da aula 2).

Como no módulo 9, trabalhe **eixo a eixo** e confira números ao longo do caminho.

**Sobre os nomes de menu:** esta aula descreve os gestos genéricos e cita nomes só onde a documentação oficial os confirma. Onde não há confirmação, o texto diz "confira o nome exato na sua versão". Os dois programas mudam de interface a cada ano.

## Etapa 0: arquivo de partida, unidades e convenções

**Por quê:** todo o resto herda essas escolhas. Unidade errada gera alturas de 2,7 mm.

- Use um **template** de arquitetura em unidades métricas (no Revit, arquivo `.rte`; no Archicad, um arquivo-modelo; no Bonsai, "New Metric (m) Project").
- Salve cedo e com versão (`casa96_v01`).
- Decida a convenção de medida: eixo a eixo, como no módulo 3.
- Decida o **norte** e a orientação: no exemplo, rua ao sul, norte para o topo da planta.

## Etapa 1: níveis (pavimentos)

**Por quê:** níveis são a "régua vertical" do modelo. Tudo que tem altura se prende a eles.

**Mecanismo:** um nível é um plano horizontal com uma cota. Paredes têm **base** em um nível e **topo** em outro (ou uma altura em relação ao nível de base).

**Revit.** Segundo a ajuda oficial, níveis são criados em uma vista de **corte ou elevação**, com a ferramenta Nível na faixa de opções, desenhando a linha horizontalmente. A opção **Criar vista de planta** (*Make Plan View*), marcada por padrão, faz com que cada nível criado seja um nível de pavimento com sua planta de piso e planta de forro; se você a desmarca, o nível vira de referência, sem vista. Níveis de referência servem para marcar coisas como o topo da cobertura.

**Archicad.** Os níveis se chamam **pavimentos** e são definidos nas configurações de pavimento (*Story Settings*, conforme a comunidade da Graphisoft); cada pavimento é uma faixa de altura, e os elementos ficam "presos" ao pavimento de origem. Confira o caminho de menu na sua versão.

**Para a casa de 96 m²:** pelo menos três níveis:

| Nível | Cota | Uso |
|---|---|---|
| Térreo (piso acabado) | 0,00 m | Base das paredes |
| Forro | 2,70 m | Pé-direito interno (módulo 3) |
| Topo de parede / beiral | 2,90 m | Onde a estrutura do telhado apoia |

A cumeeira (4,10 m no módulo 9) é resultado da inclinação; não precisa de nível.

## Etapa 2: eixos (grade)

**Por quê:** a grade de eixos é a "malha" onde paredes e pilares se apoiam, como as linhas do projeto no módulo 3.

**Mecanismo:** linhas de referência, com rótulos (A, B, C... e 1, 2, 3...), que aparecem em todas as vistas. Paredes e pilares podem "grudar" nelas.

**Revit:** o elemento Grade (*Grid*), uma família do sistema. **Archicad:** o elemento **Grelha** (*Grid*), segundo material em português. **FreeCAD:** eixos (*Axis*) e sistema de eixos. **Bonsai:** grades IFC.

**Para a casa:** eixos verticais nas posições x = 0, 3, 5 e 8 m (as divisões do módulo 9) e horizontais em y = 0, 2, 7, 8 e 12 m. Em casa pequena os eixos são opcionais, mas ajudam a **conferir** posições no fim.

## Etapa 3: paredes com camadas

**Por quê:** parede em BIM tem **tipo**, e o tipo carrega a receita de camadas. Espessura, hachura, quantidades e até isolamento térmico saem dela.

**Mecanismo:** o tipo de parede lista camadas de fora para dentro (reboco, bloco, reboco), cada uma com **material** e **espessura**. A soma é a espessura da parede.

**Revit.** Na ajuda: selecione a parede, **Editar tipo** na paleta Propriedades, **Editar** ao lado do parâmetro Estrutura; abre a caixa de montagem (*Edit Assembly*), onde cada camada tem **Função** (estrutura, acabamento etc.), **Material** e **Espessura**. A caixa tem uma **fronteira do núcleo** (*Core Boundary*): as camadas entre as fronteiras são a estrutura; as de fora são acabamentos. Você duplica um tipo existente e o renomeia ("Externa 20").

**Archicad.** O **Material de construção** (*Building Material*) é definido globalmente e aplicado em elementos; uma **composição** (*Composite*) empilha camadas de Building Materials. Para uma parede simples, escolhe-se o material direto nas configurações da ferramenta Parede. Um vídeo de escola de Archicad relata que, ao usar geometria trapezoidal em uma composição, o programa ajusta a espessura do **núcleo**, nunca a dos acabamentos, e que novas paredes passam a fazer parte da mesma composição (é relato do vídeo; confira na sua versão).

**Linha de localização (alinhamento):** ao desenhar a parede, você escolhe **qual linha** do desenho é o seu traço: eixo, face externa ou face interna. No Revit a opção chama-se linha de localização (*Location Line*); no FreeCAD, `Align` (esquerda, direita, centro); no Bonsai, alinhar a linha de centro, à face externa ou à interna. Para trabalhar eixo a eixo, escolha o **eixo** (centro). Confira o nome exato na sua versão.

**Para a casa:**

| Tipo | Espessura total | Camadas ilustrativas | Altura | Uso |
|---|---|---|---|---|
| Externa 20 | 0,20 m | reboco 2,5 + bloco 15 + reboco 2,5 (cm) | 2,90 m | Contorno |
| Interna 10 | 0,10 m | reboco 2 + bloco 6 + reboco 2 (cm) | 2,70 m | Divisórias |

As camadas são **ilustrativas**, para o exercício fechar em 0,20 e 0,10 m; as dimensões reais dos blocos e as recomendações construtivas estão no módulo 4.

**Como desenhar:** escolha o tipo, clique no ponto inicial, digite ou arraste o comprimento e clique no final; feche o contorno. Nos cruzamentos, o programa **junta** as paredes (limpa a interseção). Um erro clássico: paredes soltas que se sobrepõem em vez de se unir. Aula 9.

## Etapa 4: pisos e lajes

**Por quê:** o piso tem espessura, material e nível, e define a área que aparece nas tabelas.

**Mecanismo:** o piso (ou laje) é um elemento **plano com espessura**, definido por um **contorno fechado** em planta, mais o nível e a espessura. Também tem camadas (contrapiso, cerâmica).

**Revit:** ferramenta Piso, com croqui de contorno (dá para usar "selecionar paredes"). **Archicad:** ferramenta Laje. **Bonsai:** ferramenta Create Slab (a documentação a descreve como criadora de lajes de piso e de telhado, sem detalhar o procedimento; confira). **FreeCAD:** ferramenta Slab, a partir de um retângulo ou contorno.

**Para a casa:** uma laje de piso cobrindo o retângulo fechado de 8,00 x 10,00 m (80 m²) e, opcionalmente, outra para a varanda de 8,00 x 2,00 m (16 m²). Total da laje: 96 m², o mesmo do projeto.

## Etapa 5: portas e janelas

**Por quê:** é a etapa em que se percebe a diferença entre "furo na parede" e "objeto hospedado".

**Mecanismo:** porta e janela são **objetos hospedados** por uma parede. Ao colocá-los sobre a parede, o programa abre o vão automaticamente e o mantém.

**Revit:** portas e janelas são **famílias carregáveis** hospedadas por paredes. Você escolhe o **tipo** no Seletor de tipo, clica na parede, e ajusta propriedades de instância (peitoril, por exemplo). Se o tipo que você quer (0,70 x 2,10 m) não existe, **duplique** um existente e mude largura e altura nas propriedades de tipo.

**Archicad:** ferramentas Porta e Janela usam **objetos de biblioteca (GDL)**; parâmetros (largura, altura, peitoril) ficam nas configurações.

**Bonsai:** procedimento documentado: selecionar a parede primeiro (assim a relação de vão é criada automaticamente), posicionar o cursor 3D no local, escolher a ferramenta Create Door ou Create Window, nomear o tipo e clicar em "+ Add IfcDoorType" (ou WindowType), e criar com Shift+A; largura e altura na barra superior; depois "regenerar" a parede (Shift+G) para recortar o vão.

**Para a casa:** reaproveite a tabela de esquadrias do módulo 3 e do módulo 9 (P1 a P6, J1 a J5). Crie **um tipo por dimensão**: o mesmo tipo "Porta 0,80 x 2,10" serve para P2, P3, P4 e P6. A elevação (peitoril) é **propriedade de instância** (1,10 m para J1, J2, J3, J5; 1,80 m para J4).

## Etapa 6: escada

A casa de 96 m² é térrea e não tem escada; mas se a sua tiver dois pavimentos, é aqui que ela entra, **depois** dos dois níveis existirem. A escada em BIM é definida por **nível de base e de topo**, altura total dividida em degraus (o espelho); o programa calcula quantos. A conta é a do módulo 4 (aula 7): altura entre pisos acabados dividida por um espelho próximo de 17,5 cm, arredondada para um número inteiro de degraus (por exemplo, 2,95 m dividido em 17 degraus dá 17,35 cm cada). Regras precisas de proporção entre espelho e piso cabem às normas e ao projetista.

## Etapa 7: telhado

**Por quê:** o telhado define a cumeeira, os beirais e, em BIM, cobertura e paredes se relacionam (a parede pode "subir até" o telhado).

**Revit.** Segundo a ajuda oficial, em **Arquitetura > Construção > Telhado** há duas rotas: **por perímetro** (*by footprint*, contorno fechado em planta, com beiral e bordas que "definem inclinação") e **por extrusão** (perfil desenhado em corte ou elevação, para formas como telhado curvo). O caminho geral para duas águas: desenhar o perímetro sobre as paredes externas, deixar "define inclinação" ligado só nas **duas bordas opostas** (as que caem), ajustar a inclinação, finalizar e depois **anexar** o topo das paredes ao telhado, para que as empenas subam até ele. Verifique esses rótulos no seu idioma.

**Archicad:** ferramenta Telhado (cursos em português dedicam aulas inteiras a coberturas, sinal de que há variações de método; confira o fluxo na sua versão). **FreeCAD:** ferramenta Roof a partir de um contorno fechado; cada aresta do contorno vira uma água com **ângulo**, **run** (projeção horizontal), **espessura** e **beiral** (documentação oficial); a inclinação é dada em graus (0 a 90). **Bonsai:** lajes inclinadas ou elemento com classe de cobertura (`IfcRoof`); a documentação de telhado ainda está incompleta.

**Para a casa:** duas águas, 30% (16,7 graus), beiral de 0,60 m a leste e oeste, cumeeira em 4,10 m, cada água com 4,80 m de comprimento inclinado por 12,00 m ao longo da cumeeira: **57,6 m² por água, 115,2 m² no total**. Esses números vêm do módulo 9 e serão o teste da tabela de quantitativos.

## Etapa 8: forro

O forro é um elemento **plano em nível** (2,70 m) com material e espessura. No Revit e no Archicad há ferramenta própria de forro (ou de laje/teto). Se o objetivo é área e volume, o forro serve de teto do cômodo; se é só visualizar, dá para pular. No exercício, ele ajuda a checar o pé-direito.

## Etapa 9: cômodos e áreas

**Por quê:** o cômodo é o objeto que tem **nome, número e área**, base da tabela de áreas e do quadro do módulo 3.

**Mecanismo:** um cômodo é um **volume invisível** delimitado pelas paredes, piso e forro; dele saem área, perímetro e volume. É um objeto separado das paredes: ele **lê** o entorno.

- **Revit:** o objeto chama-se **Ambiente**. A ajuda oficial explica que a área é medida em um plano a certa **altura de cálculo** acima do nível, e que **por padrão a área do ambiente usa a face do acabamento da parede** como limite; dá para mudar para o **centro da parede**, **face do núcleo** ou **centro do núcleo** no menu suspenso do painel Room & Area da guia Architecture (*Area and Volume Computations* na ajuda em inglês; confira o rótulo em português na sua versão). Isso é decisivo: a área "livre" (com acabamento) é menor que a nominal eixo a eixo.
- **Archicad:** o elemento é a **Zona**, um elemento 3D que aparece na planta como preenchimento e etiqueta (*stamp*). Zonas não se aninham (não há subzona dentro de zona) e a comunidade discute com frequência a diferença entre área líquida e bruta de zonas em tabelas: confira nas configurações da ferramenta como a sua versão calcula a área.
- **FreeCAD:** ferramenta Space; a área vem da interseção de um plano horizontal com o volume, e fica na propriedade `Area`.
- **Bonsai:** ferramenta de espaço (*Create Space*, citada nos tutoriais oficiais), com nome e cálculo de área.

**Conferência com o módulo 9** (paredes externas 0,20 m, internas 0,10 m, medidas do eixo): sala 23,52 m², cozinha 13,82 m², corredor 7,02 m², quarto 1 10,97 m², banheiro 7,32 m², quarto 2 10,97 m²; soma dos cômodos fechados 73,62 m²; varanda 16,00 m². Se o programa mostrar valores muito diferentes (mais de 0,05 m² de diferença), o limite do cômodo está diferente do esperado (acabamento, núcleo ou centro), ou há uma parede fora de posição.

## O ciclo de trabalho (o que se repete)

1. Modele um elemento.
2. Olhe **em 3D e em planta**: é o que confirma que o nível, o tipo e a posição estão certos.
3. Confira **um número** (comprimento, área, altura).
4. Salve com versão.

A documentação (cortes, fachadas, pranchas, tabelas) entra na aula 5, e é o motivo de tudo isto.

## Aviso: hobby não é projeto

Este fluxo produz um **modelo de estudo** e desenhos coerentes. Não substitui projeto arquitetônico, estrutural e de instalações assinado por profissional habilitado, exigido pela prefeitura e pela obra (módulo 6).

## Resumo

- Ordem: template e unidades, **níveis**, **eixos**, **paredes com camadas**, **pisos e lajes**, **portas e janelas**, escada, **telhado**, forro, **cômodos**, e só depois a documentação.
- Parede em BIM é **tipo com camadas**; a linha de localização decide se você desenha pelo eixo ou pela face.
- Porta e janela são **objetos hospedados**: um tipo por dimensão, elevação (peitoril) como propriedade de instância.
- Cômodo (ambiente, zona, espaço) é um objeto que **lê** as paredes; a **regra de limite** (acabamento, núcleo ou centro) muda a área.
- Números para conferir na casa de 96 m²: contorno de 36 m, divisórias de 29 m, cômodos fechados de 73,62 m², telhado de 115,2 m².

## Para aprofundar

- [ ] [Tutorial Completo para INICIANTES: aprenda a fazer uma CASA POPULAR do ZERO no REVIT 2025](https://www.youtube.com/watch?v=Do8Sadp7Oxo) (Roberta Vendramini, Cursos Construir): casa térrea simples do zero em um único vídeo, em português.
- [ ] [Do 0 à Prancha no Revit | Criando um projeto do Zero (playlist)](https://www.youtube.com/playlist?list=PLdKt54q724LxXBCuy4WmgfPbfp6R5cYHh) (Danyel Iglesias, ILARQ): do zero à prancha, em português.
- [ ] [Revit: Você Pode! - Curso Gratuito - Aula 01 - Arquitetura](https://www.youtube.com/watch?v=Xx9mT3mN56Q) (Pedro Leite | Hidráulica | Engenharia Civil): primeira aula de um curso gratuito de arquitetura em Revit, em português; pelo trecho de transcrição, desenha paredes de uma casa quadrada.
- [ ] [Aula 15 Revit Como fazer telhado de varanda, 2 águas e com desnível](https://www.youtube.com/watch?v=lYgS191PQcY) (Samuel João da Silveira): telhado no Revit em português, com anexar paredes ao telhado.
- [ ] [Archicad - Passo a Passo de um Projeto Completo em 20 minutos (Atualizado)](https://www.youtube.com/watch?v=TSKP8wBZSnA) (Lucas Bacelar, BIM Archicad): visão geral rápida do fluxo completo no Archicad.
- [ ] [Aprendendo o Archicad do zero (playlist)](https://www.youtube.com/playlist?list=PLqZxkS8O2DRhzjXzOGpcihZxHiMUa7u03) (Sala BIM, Escola de Archicad): série de Archicad em português.
- [ ] [Como criar paredes com diferentes espessuras no Archicad usando uma única composição](https://www.youtube.com/watch?v=qFvzaCUKbko) (EIXO, Escola de Archicad): vídeo curto sobre composição de parede no Archicad.
- [ ] [Add Levels](https://help.autodesk.com/view/RVT/2025/ENU/?guid=GUID-54EDD889-9AEA-40B5-BD60-FC2F860DF95D) (Autodesk, ajuda oficial em inglês): como criar níveis no Revit e o efeito de "Make Plan View".
- [ ] [Edit Layers in a Compound Structure](https://help.autodesk.com/cloudhelp/2025/ENU/Revit-Model/files/GUID-B6EEDFEF-641E-409A-8C42-AB5A66BDC554.htm) (Autodesk, inglês): camadas, função, material e fronteira do núcleo.
- [ ] [Room Area and Volume](https://help.autodesk.com/view/RVT/2024/ENU/?guid=GUID-22B6D041-F6D8-4DB0-8094-B325CC3CC6B4) (Autodesk, inglês): altura de cálculo e limite de área do ambiente.
- [ ] [Criar um telhado por extrusão](https://help.autodesk.com/cloudhelp/2024/PTB/Revit-ArchDesign/files/GUID-E0DB4409-4E19-421F-ABCF-4DDA3A0F9953.htm) (Autodesk, ajuda oficial em português): passos e nomes de menu.
- [ ] [Paredes compostas, canetas e cores no Archicad](https://lucasbacelar.com.br/paredes-compostas-canetas-e-cores-archicad/) (Lucas Bacelar, artigo em português): como definir camadas de uma parede e sua representação em planta.

[Próxima aula: Vistas, pranchas, quantitativos e coordenação](./05%20-%20Vistas%20Pranchas%20Quantitativos%20e%20Coordenacao.md)
