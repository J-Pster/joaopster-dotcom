[Voltar ao módulo](./README.md)

# Aula 3: Malha, sólido, superfície NURBS e paramétrico

*Pergunta que esta aula responde: existem várias maneiras de o computador guardar "a mesma" forma, e como isso muda o que cada software consegue fazer com ela?*

## Por que isso existe

Duas pessoas modelando uma parede, uma em SketchUp e outra em Revit, produzem coisas que parecem iguais na tela e são radicalmente diferentes por dentro. Uma guarda faces; a outra guarda uma **descrição** ("parede, 15 cm, tipo tal, do nível 1 ao nível 2"). Entender essa diferença é o que permite escolher software (módulo 8) e prever o que se perde ao trocar de programa (aula 7).

Há quatro famílias. Elas não são excludentes: programas modernos misturam mais de uma.

## 1. Malha poligonal (mesh)

A que você viu na aula 2: vértices, arestas e faces planas. Só guarda a **superfície**, não o volume: a Wikipédia distingue as malhas volumétricas (que representam superfície e interior) das malhas poligonais (que só representam a superfície de forma explícita).

- **Vantagens:** simples, rápida de exibir (placas de vídeo são feitas para isso), flexível para formas livres, leve quando bem feita. É a base de jogos, animação, visualização e do SketchUp.
- **Limites:** curvas são aproximadas por facetas; não há noção nativa de "material", "espessura" ou "parede": é só pele. Se a pele estiver aberta, ninguém sabe se o objeto é um volume.
- **Onde:** SketchUp, Blender (modo padrão), Sweet Home 3D (ao exibir e ao exportar; internamente as paredes e cômodos são objetos, veja abaixo), quase todo arquivo OBJ, FBX e glTF.

## 2. Sólido (solid, B-rep e CSG)

Um **sólido** é um modelo que sabe que tem interior: um volume fechado com bordas bem definidas. A Wikipédia descreve o modelamento de sólidos como aquele em que o computador consegue responder qualquer pergunta geométrica sobre o objeto (isso está dentro? qual o volume?). Há duas formas principais de guardar:

- **B-rep (boundary representation):** guarda a fronteira do volume (faces, arestas, vértices), com regras de consistência, de modo que a fronteira sempre fecha. Uma malha fechada e bem orientada é uma B-rep simples.
- **CSG (constructive solid geometry):** guarda a **receita**: "caixa menos cilindro mais outra caixa". O volume final vem de combinar primitivas com booleanas (aula 4).

Um sólido válido tem interior e exterior sem ambiguidade. Por isso o SketchUp só marca um grupo como "Solid" quando é fechado e sem vazamento, e só então habilita as Solid Tools.

- **Vantagens:** volume, massa e área confiáveis; booleanas robustas.
- **Limites:** exige geometria limpa; um furo mínimo já invalida.
- **Onde:** softwares CAD de engenharia mecânica (não usados neste curso) e os modos de sólido de programas de arquitetura (AutoCAD 3D, Solid Tools do SketchUp).

## 3. Superfície matemática (NURBS)

**NURBS** (Non-Uniform Rational B-Splines) descreve uma superfície por **equações**: alguns pontos de controle mais parâmetros definem uma curva ou superfície suave. Uma esfera perfeita não é um poliedro: é uma fórmula.

- **Vantagens:** curvas realmente lisas em qualquer ampliação; poucos dados descrevem formas complexas; precisão para fabricação.
- **Limites:** mais difícil de criar e editar; para exibir ou renderizar, costuma ser convertida em malha ("tesselada") no fim; nem toda superfície com topologia arbitrária se representa bem como NURBS.
- **Malha versus NURBS, em uma frase:** a diferença é comparável à de uma imagem vetorial (poucos pontos ligados por curvas) e uma imagem de pixels (o equivalente às faces de uma malha), como resume a documentação de uso do CGTrader.
- **Onde:** Rhino, programas de design industrial e de arquitetura de forma livre. Vale saber que existem; não são o foco deste curso.

## 4. Paramétrico e baseado em características (feature-based)

Aqui a unidade não é "a superfície" nem "o volume", e sim **a regra que gera a forma**. Em um modelo paramétrico, um objeto é definido por parâmetros (largura, altura, tipo, material) e por relações (a janela pertence a esta parede; a laje se apoia neste nível). Mudar o parâmetro reconstrói a geometria.

Dois grandes usos:

- **CAD paramétrico de engenharia** (FreeCAD, Fusion): você desenha um esboço com cotas, extruda, fura, arredonda, e o programa guarda essa **história de operações**. Altere uma cota do esboço e o resto se recalcula.
- **BIM:** os objetos (parede, porta, laje, telhado) são **objetos paramétricos com significado de construção**: sabem que são paredes, têm camadas de material, dependem de níveis e carregam dados. A Wikipédia lista o paramétrico como um dos esquemas de representação de sólidos ("formas paramétricas associadas a atributos, como dimensões e tolerâncias").

Por baixo, um objeto BIM ainda vira geometria (malha ou sólido) para ser exibido. A diferença é que essa geometria é **produto** da descrição, e não o dado principal.

## Comparação direta

| | Malha | Sólido (B-rep/CSG) | NURBS | Paramétrico/BIM |
|---|---|---|---|---|
| Guarda | superfície em faces planas | volume fechado | superfície por equações | regras + parâmetros + dados |
| Curvas | aproximadas | aproximadas ou exatas | exatas | depende do objeto |
| Sabe que é uma parede? | não | não | não | sim |
| Editar depois | mexe em vértices e faces | refaz operações | mexe em pontos de controle | muda parâmetro |
| Peso do arquivo | cresce com o número de faces | médio | baixo | médio a alto (com dados) |
| Uso típico | visualização, rascunho volumétrico | engenharia, impressão 3D | formas livres, fabricação | projeto de edifícios |

## E os programas do curso?

Uma orientação inicial (módulos 9 a 12 detalham cada um):

- **Sweet Home 3D:** modelo de casa por objetos simples (paredes, cômodos, portas, móveis) com parâmetros básicos como espessura e altura, e sobre eles se aplicam modelos 3D importados (malhas). É um meio-termo entre desenho e visualização, sem a riqueza de dados do BIM.
- **SketchUp:** modelador por faces (B-rep/malha de faces planas), com grupos e componentes. Não tem noção nativa profunda de "parede", mas permite classificar objetos para gerar dados (a ajuda oficial cita Classificação para relatórios e compatibilidade com IFC).
- **Revit e Archicad:** BIM paramétrico. Paredes, lajes e telhados são objetos com tipos, camadas e níveis.
- **FreeCAD (Workbench BIM) e Bonsai (add-on do Blender):** caminhos abertos para BIM; FreeCAD é paramétrico, Bonsai trabalha diretamente sobre o formato IFC (aula 6 e 7).
- **Blender:** modelador de malhas de uso geral, muito bom para arte e visualização, e que também tem curvas e superfícies. Não é BIM por si só (só com o add-on).

## O que isso muda na sua escolha

- Precisa só **enxergar** a casa e passear nela? Malha basta e é a via mais leve.
- Quer **planta, corte e lista de esquadrias saindo do modelo sem redesenhar**? Precisa de paramétrico/BIM.
- Quer uma **forma curva** perfeita ou pretende imprimir em 3D? Sólido ou NURBS são melhores.
- Quer **vídeo e render de alta qualidade**? Malha bem construída (com materiais e luz), em qualquer programa.

Não existe o melhor; existe o que responde à pergunta que você tem sobre a casa.

## Resumo

- Malha guarda só a superfície em faces planas; é leve e flexível, mas não sabe o que é uma parede nem se é um volume.
- Sólido guarda um volume fechado (por fronteira, B-rep, ou por receita de booleanas, CSG), habilitando volume e operações confiáveis.
- NURBS guarda superfícies por equações: curvas exatas, edição mais difícil, e convertidas em malha para exibir.
- Paramétrico e BIM guardam regras e parâmetros; a geometria é consequência, e por isso planta, corte e quantitativos podem sair do próprio modelo.
- A escolha do software depende do que você quer obter do modelo: visualizar, desenhar plantas, extrair dados ou imprimir.

## Para aprofundar

- [ ] [What is the difference between a NURBS-Model and a Polygon mesh?](https://www.youtube.com/watch?v=0h2M-1BuR1E) (Holocreators GmbH, inglês): pelo título, compara NURBS e malha.
- [ ] [NURBS vs Polygons in Maya | Understand Geometry & Mesh Types in 3D Modeling](https://www.youtube.com/watch?v=RMYQ0eQf6Gw) (Maya By Zeeshan Academy, inglês): segunda visão da comparação; a interface é a do Maya, o conceito vale para todos.
- [ ] [Polygon 3D Mesh Explained](https://www.youtube.com/watch?v=IiAuqwAJMvo) (ProAnywhere): pelo título, malha poligonal.
- [ ] [Polygonal mesh vs. Solid (NURBS/Spline)](https://help.cgtrader.com/hc/en-us/articles/4411967422481-Polygonal-mesh-vs-Solid-NURBS-Spline) (CGTrader Help Center, inglês, artigo curto visto em busca): resume malha versus sólido/NURBS.
- [ ] [Solid modeling](https://en.wikipedia.org/wiki/Solid_modeling) (Wikipédia, inglês, conteúdo confirmado por leitura): B-rep, CSG, varredura e paramétrico.
- [ ] [Polygon mesh](https://en.wikipedia.org/wiki/Polygon_mesh) (Wikipédia, inglês, conteúdo confirmado por leitura): malha versus malha volumétrica.

[Próxima aula: Construindo volumes: extrusão, subtração e booleanas](./04%20-%20Construindo%20Volumes%20Extrusao%20e%20Booleanas.md)
