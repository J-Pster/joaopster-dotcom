[Voltar ao módulo](./README.md)

# Aula 4: Construindo volumes: extrusão, subtração e booleanas

*Pergunta que esta aula responde: como se cria um volume a partir de um desenho plano, e como se abre um vão de janela numa parede de forma que o modelo continue coerente?*

## Por que isso existe

Você não posiciona milhares de vértices um a um. Todo modelador oferece **operações** que transformam formas simples em formas complexas. Quase toda casa se resolve com meia dúzia delas. Entender a lógica de cada uma evita o erro típico do iniciante: desenhar cada face à mão e acabar com um modelo cheio de buracos.

O ponto de partida é a pergunta de arquitetura que você já conhece: uma casa é um conjunto de volumes (paredes, lajes, telhado) com vazios (portas, janelas, cômodos). Modelar é reproduzir isso: **criar volumes cheios e subtrair vazios**.

## Do plano ao volume: extrusão

**Extrusão** é empurrar um perfil plano ao longo de uma direção para criar um volume. Um retângulo de 4 m x 3 m no piso, extrudado 2,70 m para cima, vira o cômodo (caixa). É exatamente o que o desenho 2D não faz: a planta tem a forma no plano; a extrusão dá altura.

No SketchUp a ferramenta é o **Push/Pull** (Empurrar/Puxar): você clica numa face e puxa. O programa cria automaticamente as faces laterais e o topo. Em programas BIM, a extrusão é o que acontece por baixo quando você desenha uma parede: a linha da planta vira o perfil, e a altura do nível define o comprimento da extrusão. Sweet Home 3D faz o mesmo, sem você ver: a parede é desenhada em planta e o programa levanta o volume pela altura configurada.

Variações da ideia, que você encontrará nos menus:

- **Extrusão simples:** o perfil sobe em linha reta (paredes, lajes, pilares).
- **Varredura (sweep):** o perfil percorre um **caminho** (rodapés, beirais, corrimãos, calhas). A Wikipédia lista varredura como um dos esquemas clássicos de modelamento de sólidos.
- **Revolução (lathe):** o perfil gira em torno de um eixo (colunas redondas, luminárias, vasos).
- **Loft:** transição entre perfis diferentes (formas orgânicas; raro em casas simples).

## Subtração de volumes: o vão da janela

Considere uma parede (uma caixa) e uma janela. Como se cria o vão?

**Solução intuitiva no SketchUp básico:** desenhar o retângulo da janela na face da parede e empurrar para dentro até atravessar. O programa apaga o material ali. Funciona em situações simples porque o Push/Pull também subtrai (empurrando para dentro). Mas se o vão atravessa e a face oposta está grudada em outra, é preciso conferir que o furo realmente vazou.

**Solução geral: operações booleanas.** É o mesmo conceito, formalizado.

## Operações booleanas

Operações **booleanas** combinam dois volumes fechados usando lógica de conjuntos. Uma operação booleana combina dois sólidos verificando se cada ponto está dentro de cada um deles (definição usada por documentações de bibliotecas de geometria). Há três básicas:

| Operação | Nome em inglês | Resultado | Exemplo em casa |
|---|---|---|---|
| **União** | Union | Um volume só, somando os dois | Juntar o volume da sala e o da varanda em um bloco |
| **Diferença (subtração)** | Difference / Subtract | O primeiro volume menos a parte que o segundo ocupa | Parede menos a caixa da janela: sai o vão |
| **Interseção** | Intersection | Só o volume comum aos dois | Cortar um telhado pelo contorno da casa |

Passo a passo, o vão de janela por subtração:

1. Modele a parede como uma caixa (por exemplo 4,00 m x 0,15 m x 2,70 m).
2. Modele o "volume de corte": uma caixa do tamanho do vão (1,20 m x mais que a espessura da parede x 1,10 m), posicionada onde a janela vai ficar (peitoril a 1,00 m do piso, por exemplo). O volume de corte deve atravessar a parede por inteiro e um pouco além, senão restam películas.
3. Aplique **Diferença**: parede menos volume de corte.
4. O resultado é uma parede com um furo passante. Guarde o volume de corte (ou não): em alguns programas ele desaparece, em outros permanece como objeto para reaplicar.

A vantagem de pensar assim: o vazio é um volume, com medida e posição próprias. Mudar o tamanho da janela é mudar o volume de corte.

### Como cada programa oferece isso

- **SketchUp:** **Solid Tools** (Ferramentas de Sólidos): Union, Subtract, Trim, Intersect, entre outras. Só funcionam com **grupos ou componentes sólidos** (fechados e bem orientados; aula 2). A ajuda oficial define um sólido como um modelo com volume finito e fechado, sem vazamentos.
- **Blender:** o **Boolean Modifier** oferece as operações Union, Difference e Intersect, e é aplicado sobre uma malha, usando outra como "cortador".
- **AutoCAD (3D):** comandos UNION, SUBTRACT e INTERSECT sobre sólidos.
- **BIM (Revit, Archicad):** você raramente aplica booleanas manualmente. Ao posicionar uma janela numa parede, o programa **abre o vão automaticamente**, porque a janela é um objeto "hospedado" na parede (aula 6). A lógica interna é a mesma, mas ela é feita sob demanda e reversível: apague a janela e a parede se fecha.

### Destrutivo versus não destrutivo

- **Destrutivo:** a operação altera a geometria e não guarda a receita. No SketchUp, ao subtrair, o resultado é uma nova geometria. Para mudar depois, é preciso refazer.
- **Não destrutivo:** a receita é mantida e pode ser mudada. O Boolean Modifier do Blender (enquanto não aplicado) e os objetos BIM funcionam assim.

Para iniciantes, a versão destrutiva parece mais simples. Só que é a que gera arquivo desorganizado quando você quer alterar a janela três dias depois. Quanto mais "receita" o programa guarda, mais fácil mudar.

## Requisitos para as booleanas funcionarem

Booleanas são o ponto onde erros de geometria aparecem de forma dolorosa:

- Os dois volumes precisam ser **fechados** e com faces **bem orientadas** (aula 2). Uma face invertida ou um furo pode dar resultado vazio ou estranho.
- Evite volumes que **encostam exatamente** numa face coincidente (por exemplo, o volume de corte com a face ao ras da parede). Faça o volume de corte atravessar um pouco além; assim a operação não precisa decidir sobre superfícies coincidentes.
- Evite geometria duplicada (dois volumes idênticos empilhados).
- Prefira volumes simples e poucos lados.

Se a booleana falhar, o caminho é verificar: é sólido? há faces internas? há duplicidades? Isso conecta com a aula 9.

## Modelar como se constrói

A construção real é uma sequência de operações: fundação, alvenaria, laje, cobertura, depois vãos e acabamentos. Modelar seguindo essa lógica (não a ordem cronológica exata, mas a lógica de camadas) traz vantagens:

- **Conhecimento aplicado:** você já estudou sistemas construtivos e estrutura nos módulos anteriores; usar essa ordem torna o modelo coerente com a obra.
- **Erros aparecem cedo:** se a laje não encaixa nas paredes, você vê ao modelar, do mesmo jeito que o pedreiro veria na obra.
- **Organização natural:** cada etapa vira um grupo ou uma tag (aula 5).

Exemplo de ordem: terreno e eixos, fundações (se quiser), pilares e vigas (se for estrutura convencional), paredes por pavimento, lajes, aberturas, cobertura, esquadrias, acabamentos. A aula 9 detalha isso como boa prática.

## Resumo

- Um volume nasce de um perfil plano por **extrusão** (empurrar), **varredura** (perfil ao longo de um caminho) ou **revolução** (girar em torno de um eixo).
- Vazios como portas e janelas são volumes subtraídos: pense "parede cheia menos caixa do vão".
- **Booleanas** combinam volumes fechados por lógica de conjuntos: união (somar), diferença (subtrair) e interseção (parte comum).
- Elas exigem sólidos fechados e faces bem orientadas; o volume de corte deve atravessar além da parede e não duplicar faces.
- Em BIM, o vão nasce ao colocar a janela na parede (objeto hospedado), de forma automática e reversível; em SketchUp você opera sobre geometria, de forma destrutiva.
- Modelar na lógica da obra (estrutura, paredes, lajes, aberturas, cobertura) deixa o modelo coerente e organizado.

## Para aprofundar

- [ ] [Boolean Operations in CAD & 3D Modelling - Basics (animation)](https://www.youtube.com/watch?v=HEMNv4mze3Q) (Maker Clan, inglês): animação das operações booleanas, ilustra o que texto explica mal.
- [ ] [AutoCAD 2017 Tutorial: 3D Modelling, Boolean Commands](https://www.youtube.com/watch?v=E6clWL_yMws) (Joe Robinson Training, inglês): união, subtração e interseção no AutoCAD.
- [ ] [Ferramentas de Sólidos - Parte 1 - Desenvolvimento SketchUp](https://www.youtube.com/watch?v=-ivhMvQgV7w) (SketchUp Brasil): as Solid Tools do SketchUp em português (pelo título; conteúdo não confirmado).
- [ ] [Como utilizar os sólidos do Sketchup](https://www.youtube.com/watch?v=PWWKiRCyEHI) (LEV DESIGN): segunda explicação das Solid Tools.
- [ ] [FORMAS COMPLEXAS NO SKETCHUP: adicionando e subtraindo volumes # 03/03](https://www.youtube.com/watch?v=XWQt_gmkz3g) (CtrlArq Cursos): pelo título, mostra como adicionar e subtrair volumes.
- [ ] [Aula 12 - Como usar o Empurrar/Puxar no SketchUp?](https://www.youtube.com/watch?v=ipNDY07pRgk) (Henrique Barsa): a ferramenta de extrusão do SketchUp em português.
- [ ] [Modeling Complex 3D Shapes with the Solid Tools](https://help.sketchup.com/en/sketchup/modeling-complex-3d-shapes-solid-tools) (Ajuda do SketchUp, inglês, visto em busca): a documentação oficial das Solid Tools.

[Próxima aula: Hierarquia e organização do modelo](./05%20-%20Hierarquia%20e%20Organizacao%20do%20Modelo.md)
