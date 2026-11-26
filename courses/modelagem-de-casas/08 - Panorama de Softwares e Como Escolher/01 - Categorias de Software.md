# Aula 1: Categorias de software e o que cada uma resolve

[Voltar ao módulo](./README.md)

*Pergunta que esta aula responde: por que existem tantos programas para "modelar uma casa" e como separá-los em grupos que façam sentido antes de comparar nomes?*

## Por que agrupar antes de comparar

Comparar Sweet Home 3D com Revit é como comparar uma bicicleta com um caminhão: os dois transportam coisas, mas foram feitos para problemas diferentes. Cada programa nasceu para resolver um problema específico e carrega as escolhas técnicas desse problema. No módulo 7 você viu as diferenças de fundo: **malha** (superfície feita de polígonos), **sólido**, **modelo paramétrico** (medidas e regras que recalculam a forma) e a distinção entre **CAD** (desenhar geometria), **modelagem 3D** (esculpir ou extrudar volumes) e **BIM** (Building Information Modeling: modelo em que cada elemento sabe o que é). Aqui essas ideias viram seis categorias de software. Cada categoria é definida pelo que o programa entende como "objeto" e pelo produto final que ele entrega bem.

## As seis categorias

### 1. Planejadores de interiores e plantas simples

**Problema que resolve:** uma pessoa sem formação técnica quer desenhar paredes, colocar portas, janelas e móveis e ver o resultado em 3D em poucas horas.

**Como funciona:** o programa oferece uma planta 2D onde você traça paredes com espessura e altura. Portas e janelas são "objetos" que se encaixam na parede e a abrem automaticamente. Móveis vêm de um catálogo. O 3D é gerado sozinho a partir da planta, e você não modela geometria livre. O preço da simplicidade é o limite: formas incomuns, telhados complexos e precisão de canteiro de obra ficam fora do alcance ou exigem gambiarra.

**Exemplos:** Sweet Home 3D, Live Home 3D, Home Designer (Chief Architect), Planner 5D, HomeByMe.

### 2. Modelagem 3D geral e direta

**Problema que resolve:** dar forma a qualquer volume de maneira intuitiva, sem exigir que você pense em "parede" ou "laje".

**Como funciona:** o método central é **push/pull** (empurrar e puxar): você desenha um contorno 2D numa face e o extruda para virar volume. O programa não sabe o que é uma parede, só conhece faces e arestas. Isso dá enorme liberdade e uma curva de aprendizado curta, mas nenhuma inteligência: se você mudar a altura do pé-direito, tem de ajustar tudo à mão, e planta e corte precisam ser extraídos do modelo com trabalho extra.

**Exemplo principal:** SketchUp.

### 3. CAD 2D e 3D

**Problema que resolve:** produzir desenho técnico preciso, com linhas, cotas e escala, seguindo convenções de prancha (plantas, cortes, fachadas, como visto no módulo 3).

**Como funciona:** o objeto básico é a linha, o arco e o polígono, com coordenadas exatas. É o "papel milimetrado digital". Alguns CADs têm modo 3D, mas o núcleo é o desenho. Nada impede uma parede de ser "duas linhas paralelas" que o programa não reconhece como parede.

**Exemplos:** AutoCAD e AutoCAD LT, Vectorworks (que mistura CAD e BIM), Fusion (mais voltado a produto e mecânica).

### 4. BIM autoral

**Problema que resolve:** manter um único modelo do qual saem planta, corte, fachada, lista de materiais e quantitativos, todos coerentes entre si.

**Como funciona:** cada elemento é um objeto com **classe** (parede, porta, laje), **parâmetros** (espessura, material, altura) e **relações** com os outros (a porta pertence a uma parede; a parede pertence a um pavimento). Ao mudar o pé-direito de um pavimento, as paredes acompanham, e as vistas 2D se atualizam. É o mais poderoso e também o mais exigente: curva de aprendizado longa, hardware mais forte e conceitos próprios (famílias, níveis, fases).

**Exemplos:** Revit, Archicad, FreeCAD com o ambiente BIM, Bonsai (o complemento do Blender que trabalha nativamente com o formato IFC, o "idioma aberto" do BIM, visto em detalhe na aula 5).

### 5. Malha e DCC com render

**Problema que resolve:** criar imagens, animações e objetos com liberdade total de forma e alta qualidade visual.

**Como funciona:** **DCC** (Digital Content Creation) é a família de programas de arte 3D usados em cinema, jogos e visualização. O objeto é a malha: vértices, arestas e faces. Você modela qualquer coisa, aplica materiais fotográficos, luzes realistas e renderiza com um motor de traçado de raios. Não há noção de "parede" nem cotagem de projeto nativa. A precisão métrica depende de você.

**Exemplo principal:** Blender (que, com o complemento Bonsai, também atravessa a fronteira para o BIM).

### 6. Motores de render em tempo real

**Problema que resolve:** transformar um modelo pronto em imagens, vídeos e passeios virtuais bonitos rapidamente, sem configurar luz por horas.

**Como funciona:** não servem para modelar a casa. Eles importam o modelo de outro programa (SketchUp, Revit, Archicad e outros), permitem aplicar vegetação, pessoas, céu e luz e mostram o resultado ao vivo, enquanto você mexe. "Tempo real" quer dizer que a placa de vídeo calcula a imagem a cada fração de segundo, como num videogame, em vez de esperar minutos por um quadro.

**Exemplos:** Twinmotion, Enscape, D5 Render, Lumion. O módulo 13 cobre esse assunto.

## Quadro-resumo

| Categoria | Objeto que o programa entende | Ponto forte | Ponto fraco | Exemplos |
|---|---|---|---|---|
| Planejador simples | Parede, porta, móvel | Rapidez para quem começa | Pouco controle de forma e precisão | Sweet Home 3D, Live Home 3D, Planner 5D |
| Modelagem 3D direta | Face e aresta | Liberdade e facilidade | Sem inteligência de construção | SketchUp |
| CAD 2D/3D | Linha, arco, polígono | Precisão no desenho técnico | 3D limitado ou trabalhoso | AutoCAD, Vectorworks |
| BIM autoral | Elemento construtivo com dados | Um modelo, todos os documentos | Curva longa, hardware forte | Revit, Archicad, FreeCAD, Bonsai |
| Malha/DCC | Vértice, aresta, face | Liberdade visual e render | Sem semântica de obra | Blender |
| Render em tempo real | Modelo importado | Imagem rápida e bonita | Não modela | Twinmotion, Enscape, D5, Lumion |

## As categorias se cruzam

As fronteiras são porosas, e isso confunde quem está começando:

- **SketchUp** é modelagem direta, mas permite atribuir classes IFC aos componentes e exportar IFC, e a assinatura Studio se posiciona para fluxos com BIM (verificado em setembro de 2026 na página oficial de planos).
- **Vectorworks** e **Chief Architect** têm CAD, modelagem e informação de construção no mesmo produto.
- **Blender** com **Bonsai** vira uma ferramenta BIM em cima de um programa de arte 3D.
- **Archicad** e **Revit** trazem visualização própria, mas os motores da categoria 6 costumam dar resultado mais rápido.
- Um mesmo projeto costuma percorrer várias categorias: esboço no SketchUp, documentação no Revit, imagem no Twinmotion.

Por isso a pergunta útil não é "qual programa é o melhor", e sim "qual categoria resolve o que eu preciso e em que ordem passo por elas". A aula 6 transforma isso numa árvore de decisão.

## Resumo

- Um programa é definido pelo que ele entende como objeto: parede (planejador), face (modelagem direta), linha (CAD), elemento com dados (BIM), malha (DCC) ou modelo importado (motor de render).
- Planejadores simples e SketchUp são os caminhos mais curtos para ver a casa em 3D; BIM é o mais completo e o mais exigente.
- Motores de render não modelam: dependem de outro programa que entregue o modelo.
- As categorias se sobrepõem (SketchUp com IFC, Blender com Bonsai), então um projeto pode passar por mais de um programa.

## Para aprofundar

- [ ] [Modelagem 2D, 3D ou BIM?](https://blog.totalcad.com.br/modelagem-2d-3d-ou-bim/) (Blog totalCAD): separa as três abordagens pelo que cada uma resolve. O blog pertence a uma empresa que vende ZWCAD e ARCHLine, então há viés comercial.
- [ ] [DIFERENÇA ENTRE CAD x BIM NA PRÁTICA](https://www.youtube.com/watch?v=_yyJ1GKit9Q) (Rafael Ferrera): pelo título, mostra em software a diferença entre linhas e objetos.
- [ ] [Afinal, o que é BIM? Entenda.](https://www.youtube.com/watch?v=freYVfVT7a4) (Eng. Fabricio Ferreira, engenhaBIM): a mudança de fluxo de trabalho do BIM, com foco em engenharia, pode ser mais amplo do que você precisa.

Não há vídeo bom localizado que trate de planejadores simples e motores de render como categorias; o módulo 13 cobre os motores.

[Próxima aula: Os candidatos, um a um](./02%20-%20Os%20Candidatos%20Um%20a%20Um.md)
