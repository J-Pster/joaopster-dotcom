[Voltar ao módulo](./README.md)

# Aula 2: Planta de fundo e paredes com medidas exatas

*Pergunta que esta aula responde: como faço o programa ter a escala certa desde o primeiro clique e como desenho paredes com a medida do projeto, e não "mais ou menos"?*

## Por que a escala vem antes de tudo

Um modelo com escala errada parece certo na tela e está errado em tudo: a porta de 0,90 m sai com 1,20 m, a área do quarto não fecha, a mobília não cabe. Como no módulo 3 (aula 3, escalas e cotas), a regra é **confiar nas cotas, nunca na aparência**. No Sweet Home 3D, o modelo tem sempre medidas reais (o plano trabalha em unidades reais, não em "pixels"); o que precisa de calibração é a **imagem de fundo**, se você usar uma.

Há dois caminhos para começar uma casa:

- **Sem fundo:** você digita medidas de projeto que já tem (tabelas do módulo 3, aula 8). É o caminho do exercício da aula 8 deste módulo.
- **Com fundo:** você tem uma planta em imagem (foto, escaneamento, captura de PDF) e traça as paredes por cima. É o caminho da reforma da sua casa real.

## Planta de fundo: importar e calibrar

Menu (guia oficial em português): **Planta > Importar imagem de fundo…**. Formatos aceitos: BMP, JPEG, GIF e PNG. O assistente tem quatro passos:

1. **Escolher a imagem.**
2. **Definir a escala:** aparece uma linha colorida sobre a imagem. Você arrasta as pontas da linha até as extremidades de **uma medida conhecida da planta** (por exemplo, a cota de uma parede de 8,00 m) e digita o comprimento real no campo "Comprimento da linha desenhada" (o rótulo aparece assim no guia em inglês: "Length of the drawn line"; confira o texto exato na sua versão).
3. **Definir a origem:** você marca qual ponto da imagem corresponde à coordenada (0, 0) do plano. Um tutorial de terceiros (sbcode.net) sugere o canto superior esquerdo da planta.
4. **Concluir:** a imagem aparece atrás da grade, já na escala.

Depois, a escala e a posição podem ser ajustadas em **Planta > Modificar imagem de fundo…**.

### O método de conferência (não pule)

A calibração usa **uma** medida. Uma imagem obtida de foto ou de PDF impresso "ajustado à página" pode estar deformada (esticada mais num eixo do que no outro). A conferência é a mesma da aula 9 do módulo 3:

1. Calibre com a maior medida horizontal confiável.
2. **Meça uma segunda cota**, de preferência vertical e de outro trecho: desenhe uma parede sobre ela e compare o comprimento mostrado com a cota do desenho.
3. Se a diferença passar de 1% ou 2%, a imagem está deformada; procure um arquivo melhor (PDF vetorial exportado como PNG na resolução original) em vez de "corrigir" no olho.

Exemplo: a planta traz uma parede de 8,00 m e você calibrou com ela. Uma segunda cota de 12,00 m aparece no plano medindo 11,70 m. Erro: 0,30/12,00 = 2,5%, sinal de deformação vertical. O fator de correção seria 12,00/11,70 = 1,026, mas o programa **só calibra uma escala uniforme**, portanto a saída é obter outra imagem ou aceitar o erro (reforma pede medir a casa de verdade).

Observação prática: o assistente é opcional. O próprio guia coloca a importação como o primeiro passo do fluxo, mas um tutorial de terceiros lembra que é opcional e que ele só ajuda a posicionar as paredes.

Veja: [como importar imagem de fundo no sweet home 3d](https://www.youtube.com/watch?v=jmNiUtbh5lc) (CAMINHO CERTO 3D) e [Import Floor Plans into Sweet Home 3D (Scale Them Correctly)](https://www.youtube.com/watch?v=RyPNBpD9X24) (CAD Guide).

## A parede: o que é e por que tem esses números

Uma **parede** no Sweet Home 3D é um segmento entre dois pontos com **espessura** e **altura**. O 3D sai de três consequências:

- O programa extruda o segmento na espessura e na altura.
- Paredes desenhadas em sequência **se encontram** nos vértices; o programa resolve o canto.
- Portas e janelas abrem vãos onde são soltas.

Duas escolhas de projeto que você precisa fazer conscientemente:

**1) Onde está a "linha" da parede: no eixo ou na face?** A cota do módulo 3 (aula 5) alerta: cota de eixo a eixo inclui metade da espessura de cada parede; a cota de vão livre, não. No programa, você precisa saber em que ponto da espessura a linha desenhada cai. **Não confirmei na documentação oficial** se a espessura é distribuída dos dois lados do traço; a leitura habitual é que sim, mas você deve **testar na sua versão** (procedimento abaixo) antes de confiar.

**Teste do eixo (dois minutos):**
1. Desenhe uma parede horizontal de 1,00 m com espessura 0,20 m.
2. Dê dois cliques nela (abre o diálogo de modificação) e procure os campos de coordenadas do ponto inicial e final e o campo de espessura (confira o nome exato na sua versão).
3. Coloque a régua ou a cota (aula 7) na borda de cima e na de baixo da parede e leia a coordenada. Se as bordas ficam a ±0,10 m do traço, a linha é o eixo. Anote o resultado.

**2) A altura.** A altura de uma parede é a distância do piso do nível até o topo dela. No exemplo do módulo 3, as paredes vão até +2,90 m (apoio do telhado) e o forro fica em +2,70 m; a aula 4 mostra como conviver com isso.

## Desenhar: cliques, tooltip e teclado

Clique em **Criar paredes** (botão da barra) e, no plano:

- **Clique** no ponto inicial, **clique** em cada vértice seguinte; um **duplo clique** ou a tecla **Esc** encerra a sequência. Cada clique fecha uma parede e abre a próxima.
- Uma **caixa de informação (tooltip)** acompanha o cursor mostrando as medidas da parede em construção (o guia cita comprimento, ângulo e espessura). Linhas de alinhamento aparecem quando o ponto está alinhado a outro elemento, e o zoom da planta ajuda a ser preciso.

### Medida exata pelo teclado

Com a ferramenta de parede ativa, pressione **Enter**: o guia oficial diz que você pode digitar **comprimento e ângulo** da parede em vez de mover o mouse. Essa função não existe na versão online nem nas versões móveis. Esse é o modo de desenhar "8,00 m" de verdade: você digita 8,00 (na unidade escolhida nas preferências), confirma, e o programa cria a parede.

A tooltip mostra comprimento, ângulo e espessura; como navegar entre esses campos ao digitar e a convenção do ângulo (absoluto no plano ou relativo à parede anterior, sentido horário ou anti-horário) **não foram confirmados na documentação oficial**, faça um teste rápido: desenhe uma parede de 1 m por teclado, depois a próxima com ângulo 90 e observe para onde ela vai. Anote a convenção. É a mesma lógica de quem aprende um sistema de coordenadas novo (módulo 7).

Método robusto para o contorno de uma casa retangular de 8 x 12 m:

1. Clique no ponto inicial (a posição absoluta da origem pouco importa se o desenho for coerente).
2. Pressione Enter, digite o comprimento e o ângulo do primeiro lado, confirme.
3. Repita para os outros lados. O último lado deve fechar exatamente no ponto inicial (se sobrar um vão de milímetros, a parede não se junta).
4. Confira a soma: 8,00 + 12,00 + 8,00 + 12,00 = 40,00 m de perímetro; se a soma das paredes na lista ou no plano não dá isso, há erro.

### Magnetismo

**Magnetismo** é o "imã" do cursor: ao desenhar, o programa força o ângulo para múltiplos de 15 graus (padrão do guia) e faz o cursor grudar em pontos e em paredes existentes. É o que faz a parede sair perfeitamente horizontal. Para desenhar **sem** magnetismo (paredes em ângulo qualquer), o guia mantém uma tecla pressionada durante o gesto: **Alt** no Windows, **cmd** no macOS, **Shift+Alt** no Linux; ou desative nas preferências.

### Parede curva

A FAQ oficial descreve parede redonda: segure **Ctrl** (Alt no Mac) ao clicar no segundo ponto e ajuste a abertura do arco arrastando ou pelo diálogo. Útil para uma bay window; use com moderação (cada arco é uma aproximação por segmentos).

## Editar paredes

Volte ao modo **Selecionar**. Clique numa parede para selecionar; **Shift+clique** soma paredes à seleção; um retângulo de seleção pega várias. Mover: arraste ou use as setas do teclado. Com uma só parede selecionada, os pontos das extremidades podem ser arrastados. Para dividir uma parede em duas (necessário para variar altura ou espessura em trechos, ver aula 4), use **Planta > Dividir parede**.

Duplo clique na parede (ou **Planta > Modificar paredes…**) abre o diálogo de propriedades. O guia lista:

| Campo | Para que serve |
|---|---|
| Cor ou textura do lado esquerdo e do lado direito | Cada face tem acabamento próprio (a face externa pode ser reboco e a interna, azulejo) |
| **Espessura** | Largura da parede |
| **Altura** | Altura do topo; com a opção de parede inclinada ("Sloping" no guia em inglês; confira o rótulo na sua versão), você informa altura no início e altura no fim (usada na aula 4) |
| Botão **Importar** de texturas | Abre o assistente de textura própria (aula 5) |

A versão 5.5 (setembro de 2017, histórico do site) trouxe a **junção de paredes** (wall joining), útil quando dois trechos precisam se encontrar em canto perfeito.

### Como o programa junta paredes internas às externas

Uma parede interna encosta na externa, e a parte que penetra é ocultada pelo volume. O que importa é o **centro**: se você desenha a divisória a partir do eixo da externa, o encontro fica no eixo. Se a espessura da externa é 0,20 m e a da interna 0,10 m, a interna se "embute" 0,10 m na externa; visualmente correto, e o cômodo mede o que a cota do eixo diz menos meia espessura de cada parede. Isso é exatamente a diferença eixo x vão livre do módulo 3.

Exemplo numérico: quarto de 3,00 m eixo a eixo, paredes de 0,10 m dos dois lados. Vão livre = 3,00 - 0,10 = 2,90 m (cada parede come 0,05 m para o interior). Se o projeto pede um vão livre de 3,00 m, o eixo precisa ser 3,10 m. Decida a convenção (eixo ou face) antes de começar e aplique em todo o projeto.

## Boas práticas de parede

1. **Uma sequência por pavimento e por altura:** paredes contínuas no mesmo contorno facilitam edição em bloco.
2. **Desenhe o contorno externo primeiro, depois as divisórias**, como o módulo 3 recomenda para ler uma planta (do geral ao particular).
3. **Nunca deixe parede "por cima" de outra:** paredes sobrepostas geram z-fighting (a face "pisca") e áreas de cômodo erradas.
4. **Espessura e altura padrão nas preferências**, editadas em grupo depois (selecione várias paredes e use Modificar paredes).
5. **Verifique numericamente:** o diálogo mostra comprimento e coordenadas; compare com a tabela do projeto.

## Resumo

- A escala é responsabilidade sua só na **imagem de fundo**: calibre com uma medida conhecida, defina a origem e **confira com uma segunda cota** (deformação denuncia imagem ruim).
- Parede = dois pontos + espessura + altura; portas e janelas abrem os vãos, **não desenhe o furo**.
- Para medida exata: ferramenta de parede + **Enter** e digite comprimento e ângulo; o magnetismo prende ângulos em múltiplos de 15 graus e é desligado com Alt (Windows), cmd (macOS) ou Shift+Alt (Linux).
- **Teste** na sua versão onde fica o traço em relação à espessura e como o ângulo é lido; a documentação oficial consultada não dá esses detalhes.
- Editar: modo Selecionar, duplo clique, Planta > Modificar paredes…; dividir com Planta > Dividir parede.

## Para aprofundar

- [ ] [Curso Sweet Home 3D: Criação de paredes (Aula 2/16)](https://www.youtube.com/watch?v=oY8g9xzdegs) (Bruno Toniolo): a base da construção, em português (2016).
- [ ] [como importar imagem de fundo no sweet home 3d](https://www.youtube.com/watch?v=jmNiUtbh5lc) (CAMINHO CERTO 3D): importação de fundo em português, pelo título.
- [ ] [Import Floor Plans into Sweet Home 3D (Scale Them Correctly)](https://www.youtube.com/watch?v=RyPNBpD9X24) (CAD Guide, inglês): foco na calibração da escala, pelo título.
- [ ] [SH3D Lesson 11 - Import Background & Plan Trace](https://www.youtube.com/watch?v=4rS7HN-t1zU) (TJ FREE, inglês, 2018): importar e traçar sobre o fundo.
- [ ] [Sweet Home 3D tutorial, PART1 - Create Walls, Rooms and floors](https://www.youtube.com/watch?v=iF7Wqwk1bX8) (iCADTUTOR, inglês): paredes, cômodos e pisos em sequência.
- [ ] [Importing A Blueprint](https://sbcode.net/sh3d/import-blueprint/) e [Drawing Walls](https://sbcode.net/sh3d/drawing-walls/) (sbcode.net, inglês): texto curto com o passo a passo.

[Próxima aula: Cômodos, portas e janelas](./03%20-%20Comodos%20Portas%20e%20Janelas.md)
