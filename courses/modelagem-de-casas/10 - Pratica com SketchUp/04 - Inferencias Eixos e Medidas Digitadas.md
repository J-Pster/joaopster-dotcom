[Voltar ao módulo](./README.md)

# Aula 4: Inferências, eixos e medidas digitadas

*Pergunta que esta aula responde: como um mouse em uma tela 2D consegue posicionar geometria com precisão milimétrica em um espaço 3D?*

## O problema

Um mouse fornece duas coordenadas (x, y da tela). O modelo tem três (x, y, z no espaço). Sem ajuda, o programa não sabe em que ponto do espaço você clicou: pode ser um ponto da parede da frente, ou um ponto do chão bem atrás. E uma mão livre não acerta 2,70 m exatos. O SketchUp resolve com dois mecanismos que se combinam: **inferências** (o programa adivinha e mostra a que geometria você quer se referir) e **medidas digitadas** (você diz o valor exato e o programa obedece). Dominar esses dois mecanismos é o que separa um modelo preciso de um rabisco.

## Mecanismo 1: inferências

Segundo a [ajuda oficial](https://help.sketchup.com/en/sketchup/introducing-drawing-basics-and-concepts) (verificado em setembro de 2026), o motor de inferência mostra três tipos de dicas:

1. **Inferências de ponto:** extremidade (Endpoint), ponto médio (Midpoint), interseção (Intersection), centro (Center), sobre a face (On Face) e sobre a aresta (On Edge). Ao mover o cursor perto desses pontos, ele "gruda" e um rótulo com o nome do ponto aparece ao lado. Cada tipo tem uma cor de marcador própria; leia o rótulo em vez de decorar cores. Quando o ponto está dentro de um componente, a ajuda informa que o marcador aparece em magenta.
2. **Inferências lineares:** direções para as quais a linha pode "encaixar": os três eixos coloridos (vermelho, verde, azul), paralelo, perpendicular e tangente (em arcos).
3. **Inferências de forma:** reconhecem quando um retângulo é um quadrado ou tem proporção áurea, e frações de círculo (metade, um quarto, três quartos).

Para o mundo real, o que muda? Você não precisa cravar coordenadas absolutas para encaixar uma parede na outra: encaixe na extremidade, no ponto médio ou na interseção que já existe. Isso mantém o modelo coerente (as arestas se encontram de verdade) e evita micro-lacunas, que na aula 10 aparecem como o erro clássico de "face que não fecha".

### Por que existem os eixos de cor

O modelo tem três direções perpendiculares entre si, e cada uma tem uma cor:

| Cor | Eixo | Em uma casa |
|---|---|---|
| Vermelho | X | uma das direções horizontais (normalmente o comprimento) |
| Verde | Y | a outra direção horizontal (a profundidade) |
| Azul | Z | vertical: altura, pé-direito |

Se a linha que você desenha está com a cor do eixo, ela está exatamente alinhada com ele. Se estiver preta ou cinza, está torta. Em um edifício ortogonal (paredes em ângulo reto), quase todas as linhas devem ser vermelhas, verdes ou azuis. Uma linha "quase vermelha" é um problema esperando para acontecer: paredes que não fecham, faces que não se formam.

### Travar uma inferência

A inferência desaparece quando você move o mouse para longe. Para **manter** a direção enquanto você move o cursor (por exemplo, para apontar para um ponto distante mas continuar no eixo vermelho), existem dois recursos, ambos confirmados na ajuda de mover entidades e em fontes de treinamento:

- **Shift:** quando a linha de desenho estiver da cor do eixo desejado, segure Shift. A direção fica travada (a linha tracejada colorida vira sólida).
- **Setas do teclado:** atalho para travar sem precisar primeiro achar o eixo com o mouse. Segundo os treinamentos consultados: seta para a **direita** trava no eixo **vermelho**, seta para a **esquerda** no **verde**, seta para **cima** (ou para baixo) no **azul**. Como esse mapeamento não veio de uma página de ajuda que consegui abrir, confirme na sua versão (e veja como destravar).

Aplicando à casa:

- Para desenhar uma parede de 4,00 m ao longo do eixo vermelho, clique no ponto inicial, mova para a direita até a linha ficar vermelha (ou aperte a seta direita) e digite `4m`.
- Para subir 2,70 m, use Push/Pull (ele já vai na perpendicular) ou, com o Move, trave no azul e digite `2.7m`.

Outro atalho de inferência citado na ajuda: com a linha no meio de um desenho, as inferências lineares podem ser alternadas entre todas, nenhuma ou só paralelo/perpendicular com Command (Mac) ou Alt (Windows). Confira o comportamento na sua versão.

### Referenciar pontos distantes

Uma técnica útil: em vez de digitar coordenadas, você pode "adquirir" um ponto passando o cursor sobre ele (sem clicar) e depois alinhar com ele. Isso permite alinhar uma janela com outra, ou posicionar uma parede alinhada com uma face distante. É como usar linhas de construção de uma prancha em papel. Confira o efeito na sua versão; a ideia aparece em vários tutoriais de inferência.

### Guias e o eixo do modelo

- **Guias** (fita métrica, aula 3) são linhas de construção. Use-as para marcar posições que você vai usar várias vezes (a face externa da parede, a altura do peitoril). Apague ao final; guias em excesso pesam.
- **Axes** (ferramenta **Axes**, no conjunto expandido da web) redefine a origem e a orientação dos eixos. Se o lote tem um ângulo em relação ao Norte e você quer paredes alinhadas com o terreno e não com o Norte, mover os eixos para alinhar com a divisa faz as linhas ficarem coloridas. Confira o procedimento em "Adjusting the Drawing Axes" na ajuda.

## Mecanismo 2: medidas digitadas (a caixa de medidas)

A **caixa de medidas** (Measurements Box, tradicionalmente chamada VCB, "value control box") fica no canto inferior direito da janela. Ela faz duas coisas ao mesmo tempo:

1. **Mostra** o valor da operação em andamento (comprimento da linha, dimensões do retângulo, distância do movimento, ângulo, escala, profundidade do Push/Pull).
2. **Aceita** um valor que você digita. Não precisa clicar na caixa: basta começar a digitar e teclar Enter.

Segundo a [ajuda oficial](https://help.sketchup.com/en/using-measurements-box), os valores podem ser informados durante o desenho para especificar dimensões exatas, no Move e no Rotate para posicionar com precisão, e no Scale para escalar a um valor exato.

### Regras de uso

- **A operação precisa estar em andamento ou recém-terminada.** Digite logo depois do movimento. Se você trocar de ferramenta ou clicar em outro lugar, o valor não pode mais ser corrigido pela caixa. A ajuda de formas básicas confirma: depois que você desenhou um retângulo e passou para outra operação, não dá mais para alterar largura e comprimento por ali.
- **Unidades:** você pode acrescentar a unidade ao número para sobrepor a unidade padrão do modelo: `10cm`, `10mm`, `10m`, `10'` (pés), `10"` (polegadas). Em um modelo em metros, digitar apenas `10` significa dez metros; se o modelo estiver em polegadas, `10` significa dez polegadas. Por segurança, digite a unidade quando estiver em dúvida. Isso resolve o erro clássico de digitar `15` para uma parede de 15 cm em um modelo em metros e receber 15 m.
- **Separador decimal:** depende da configuração regional do computador (vírgula ou ponto). Se um número não é aceito, tente o outro.
- **Duas dimensões (retângulo):** `comprimento, largura`, como `4m,3m`. Se o computador usa vírgula como separador decimal, o separador entre os dois valores pode ser outro caractere; confira na sua versão.
- **Uma só dimensão:** a ajuda mostra `3',` (só a primeira) e `,5'` (só a segunda).
- **Valor negativo:** inverte a direção (`-35mm` em um Move).
- **Coordenadas no Move:** `[3', 4', 5']` (globais, a partir da origem do modelo) e `<3', 4', 5'>` (relativas ao ponto inicial do movimento), segundo a ajuda.
- **Cópias em série:** ao copiar com Move (ou com Flip), `3x` cria três cópias com a mesma distância entre original e primeira cópia; `3/` cria três divisões iguais entre original e cópia. (A ajuda da caixa de medidas também lista uma variante com `*`; confira o efeito exato.)
- **Rotate:** digite o ângulo em graus ou, na notação de inclinação, `8:12` (a ajuda mostra os dois formatos).
- **Scale:** aceita porcentagem ou dimensão; para esticar em eixos separados, use valores separados por vírgula (conforme a ajuda de escala).

### Exemplo resolvido: o cômodo da aula 1, com toda a precisão

1. Vista de topo (projeção paralela). Ative o Rectangle, clique na origem, mova o cursor na direção positiva dos eixos e digite `4m,3m` (ou o formato da sua região) e Enter. Resultado: 4,00 x 3,00 m.
2. Ative o Push/Pull, clique na face, mova para cima e digite `2.7m` (ou `2,7m`). Enter. Caixa de 4,00 x 3,00 x 2,70 m.
3. Ative o Tape Measure, clique na aresta inferior da parede de 4,00 m, mova perpendicularmente à aresta e digite `0.9m`: guia a 90 cm do canto. Repita com `1.7m` a partir do mesmo canto. As duas guias delimitam uma porta de 0,80 m de largura, entre 0,90 m e 1,70 m.
4. Ative o Rectangle, clique na interseção da primeira guia com a base da parede e digite `0.8m,2.1m`: porta de 0,80 x 2,10 m desenhada como face na parede.

Se em vez de digitar você tivesse confiado só no mouse, teria uma porta com 0,79 ou 0,83 m e arestas que não se encontram limpas.

### Precisão do "snap"

No Model Info > Units existe a opção **Enable Length/Angle Snapping** (segundo a [ajuda de unidades](https://help.sketchup.com/en/managing-units-measurement)), que faz as ferramentas encaixarem na unidade mais próxima da precisão configurada. Vale a pena ajustar a precisão para milímetros ou centímetros na hora de modelar, para que arrastes livres do mouse caiam em valores redondos.

## Regra de ouro

Para qualquer dimensão que você conhece (as do projeto), **digite**. Use o mouse e as inferências para achar **onde** algo começa (o ponto), a caixa de medidas para dizer **quanto** (a distância), e as travas de eixo para dizer **para onde** (a direção). Onde, quanto, para onde: as três perguntas de cada clique.

## Resumo

- Inferências (ponto, linear e forma) resolvem o problema de posicionar em 3D com um mouse 2D; os eixos vermelho (X), verde (Y) e azul (Z) indicam alinhamento.
- Shift trava a direção quando a linha tem a cor do eixo; as setas do teclado são atalho para travar sem procurar o eixo (confirmar o mapeamento na sua versão).
- A caixa de medidas mostra e aceita valores; digite logo após a operação, com a unidade (`15cm`, `2.7m`), e tecle Enter.
- Retângulo: `comprimento, largura`. Move: distância, coordenadas globais `[ ]` ou relativas `< >`, cópias `3x` e `3/`. Rotate: graus ou inclinação `8:12`.
- Guias criadas com a fita métrica são construção temporária; apague no final.

## Para aprofundar

- [ ] [Aula 07 B - Como travar os Eixos no SketchUp?](https://www.youtube.com/watch?v=qJj39E5en6w) (Henrique Barsa): travar eixos, em português.
- [ ] [Eixos - Tutoriais Avançados SketchUp](https://www.youtube.com/watch?v=jJCO926WKQM) (SketchUp Brasil, canal oficial): o título indica o tema dos eixos do modelo.
- [ ] [SketchUp - Dica#02 - Como Movimentar e Rotacionar objetos sem sair do Eixo](https://www.youtube.com/watch?v=Y4c7QVAKZA4) (Chahoud Cursos): mover e rotacionar mantendo o eixo travado.
- [ ] [Aula 02 - Sketchup Caixa de Medidas - Do Zero ao Profissional: Curso Completo de SketchUp](https://www.youtube.com/watch?v=ZUX6aC_U4OU) (Izabel de Lima | Xdeai): a caixa de medidas em português.
- [ ] [Sketchup Tutorial 03 - Tirando Medidas e Criando objetos com medidas exatas](https://www.youtube.com/watch?v=Y1U9Yq7yWv0) (F. Rower): medir e criar objetos com dimensões exatas.
- [ ] [Como alterar as unidades do SketchUp (metros, centímetros, milímetros)](https://www.youtube.com/watch?v=75F6N67JY6Y) (Expert Cursos): ajuste de unidades antes de começar.
- [ ] Documentação oficial: [Using the Measurements Box](https://help.sketchup.com/en/using-measurements-box), [Drawing Basic Shapes](https://help.sketchup.com/en/sketchup/drawing-basic-shapes), [Managing Units of Measurement](https://help.sketchup.com/en/managing-units-measurement).

Nota: vídeos não assistidos; título e canal confirmados.

[Próxima aula: Grupos, componentes e tags](./05%20-%20Grupos%20Componentes%20e%20Tags.md)
