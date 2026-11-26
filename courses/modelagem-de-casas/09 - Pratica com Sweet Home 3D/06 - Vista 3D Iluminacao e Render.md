[Voltar ao módulo](./README.md)

# Aula 6: Vista 3D, iluminação, render e vídeo

*Pergunta que esta aula responde: qual a diferença entre a vista 3D que vejo enquanto trabalho e uma imagem "fotorrealística", como controlo câmera, sol e luzes, e como gero foto e vídeo?*

## Duas maneiras de desenhar a mesma casa

A vista 3D do painel é gerada em **tempo real**: a placa de vídeo desenha os polígonos do modelo várias vezes por segundo, para você girar e navegar sem espera. O custo é que ela **não calcula luz de verdade**: não há sombras suaves, reflexos entre superfícies nem penetração de sol pela janela.

A **foto** e o **vídeo** (a partir do menu de criação) usam outro processo: um **motor de render** (renderer) que calcula, para cada pixel, o caminho da luz entre as fontes (sol, lâmpadas), as superfícies e a câmera. É lento (segundos a horas), usa apenas o processador (a FAQ oficial afirma que foto e vídeo usam CPU, não a placa de vídeo) e produz sombras e luz indireta convincentes. O módulo 13 aprofunda o princípio e outros motores; aqui vemos o que o Sweet Home 3D oferece.

## A vista 3D: câmera, visita e ajustes

### Duas câmeras

Em **Visualização 3D** (menu, guia em português), escolha:

- **Visualização aérea** (padrão): a câmera orbita a casa. Arrastar com o botão esquerdo do mouse gira; a rolagem ou as setas do teclado aproximam e afastam.
- **Visita virtual**: a câmera vira uma pessoa dentro da casa, com ícone de **visitante** no plano; mover o ícone no plano atualiza o 3D e vice-versa.

No modo de visita, o guia descreve quatro indicadores no ícone do visitante (que também refletem no plano): **ângulo da cabeça** (olhar para cima ou para baixo), **campo de visão** (abertura da lente), **ângulo do corpo** (direção horizontal) e **altura dos olhos**. A altura dos olhos importa: a 1,60 m de altura você vê a casa como um adulto, a 3 m vê como um drone. O campo de visão é a abertura da lente: valores maiores mostram mais cena e distorcem mais as bordas, como uma grande angular de câmera fotográfica.

A visita virtual é a melhor verificação de projeto: você "entra" e enxerga se a janela está alta demais, se o corredor é apertado, se a porta esbarra no móvel. É a etapa 10 do módulo 3 (verificar o modelo contra o projeto), agora na perspectiva humana.

### Ajustar o ambiente

**Visualização 3D > Modificar visualização 3D…** (guia): cor ou textura do **solo**, cor ou textura do **céu**, **brilho da luz** e **transparência das paredes**. Esta última é útil para ver a mobília por trás das paredes na vista aérea sem esconder as paredes de fato.

Um artigo do blog oficial ("How to add a scenery around your home") mostra como colocar uma imagem de paisagem ao fundo. Prefira algo simples, para o fundo não competir com o projeto.

## Luz: onde ela nasce no modelo

Um render só é tão bom quanto as fontes de luz. No Sweet Home 3D, há três origens:

1. **O sol:** definido pelo **dia, hora e local** (data e hora no painel de criação de foto; a orientação da casa em relação ao norte vem da bússola do plano). A página de recursos afirma que a luz solar pode ser ajustada pela hora e pelo local geográfico.
2. **Luminárias do catálogo:** categoria de luzes (tetos, abajures, spots); cada uma é um móvel com **potência de luz** editável no diálogo (guia).
3. **Luz ambiente geral:** o brilho ajustado em Modificar visualização 3D.

**Ligação com o módulo 2:** a orientação e a trajetória do sol que você estudou lá agora podem ser **testadas**. Ajuste a bússola para a orientação real do lote, escolha uma data (por exemplo, o solstício de inverno em junho) e uma hora (15h) e gere uma imagem rápida: o sol da tarde entra pela janela oeste da sala? A varanda, ao sul, fica na sombra? Isso valida o raciocínio do módulo 2 com o seu projeto, não com um diagrama genérico. Confira onde está a opção da bússola no menu **Planta** da sua versão.

## Criar uma foto

Botão ou menu **Criar foto…** (guia em português). Ele abre um painel onde você define:

- **Tamanho da imagem** (largura e altura em pixels): quanto maior, mais lento.
- **Qualidade:** segundo o blog oficial de renderização, há **quatro níveis**, do mais rápido, que usa a mesma qualidade da vista 3D, ao melhor, que calcula uma imagem mais fotorrealística. O guia explica que só os **dois melhores níveis** usam o motor de render.
- **Data e hora** (para o sol), nos níveis avançados; controle da **potência das luzes**.
- **Motor:** **SunFlow** (padrão) e, conforme o guia, **YafaRay** (introduzido na versão 6.0 segundo o histórico do site), em geral mais rápido.

O resultado é gravado como imagem **PNG**. O guia informa que você pode continuar editando a casa enquanto uma foto de melhor qualidade é calculada, e que só um painel de criação de foto abre por vez. Como a FAQ observa, o tempo depende de resolução, qualidade e complexidade do modelo.

### Fluxo econômico

1. Comece com a **qualidade rápida** e resolução pequena para escolher ângulo e enquadramento.
2. Suba um nível e teste com resolução pequena (por exemplo, 800 pixels de largura) para ajustar luzes.
3. Só então renderize a imagem final no nível mais alto e em resolução maior, e deixe rodando.

Regra prática: **ajuste com render pequeno, entregue com render grande.** Se uma prévia leva 2 minutos, a dobra de largura e altura multiplica o número de pixels por 4, e o tempo tende a crescer na mesma ordem de grandeza (regra de bolso, não medida oficial).

### Dicas oficiais de iluminação

O blog oficial de renderização, com uma cena de Natal, recomenda:

- A **potência padrão** de lâmpadas é 50% do máximo; no exemplo, para cenas noturnas, lâmpadas entre 10% e 30% e velas entre 5% e 20%.
- **Desativar as luzes automáticas de teto** quando a cena já tem luminárias suficientes.
- **Luzes maiores** dão sombras mais suaves.
- **Não deixe a luz encostada no teto**: a interseção cria manchas escuras.
- A data e a hora mudam radicalmente a imagem (o mesmo lugar às 13h e às 20h).
- Objetos que não devem refletir devem ter o brilho em "fosco".
- Para render noturno, troque o céu por uma **cor sólida** escura.

Veja: [Sweet Home 3D : How To Render Beautiful Night Photo With Light](https://www.youtube.com/watch?v=hyqFH9oprNo) (Tipsnfreeware, inglês) e [Sweet Home 3D - How to add lights](https://www.youtube.com/watch?v=vAobRrLtD04) (RedTop Learning, inglês).

## Criar um vídeo

**Criar vídeo…** (guia; indisponível nas versões online e móveis). O gesto:

1. Posicione a câmera no ponto inicial da vista 3D.
2. Clique no **botão vermelho** para marcar o ponto.
3. Mova a câmera para o próximo ponto e clique de novo. Repita.

O programa **interpola** o movimento entre os pontos (a câmera desliza de um a outro). Parâmetros controláveis por ponto: posição no plano, altura, os dois ângulos de rotação e o campo de visão. Botões de reprodução permitem **prévia do caminho** antes de renderizar. A qualidade tem os mesmos níveis da foto. O guia informa que a saída é um arquivo **QuickTime**, que pode ser convertido por ferramentas como o **VLC** para MPEG-4 ou outros formatos, e que o cálculo pode levar de **minutos a horas**.

Cada quadro do vídeo é uma foto renderizada: o tempo do vídeo é o tempo de uma foto vezes o número de quadros. Por isso, faça vídeos curtos (10 a 20 segundos), com qualidade média, e teste o caminho antes.

Veja: [Creating a video walkthrough in SweetHome3D](https://www.youtube.com/watch?v=zNQ8RBcvr9s) (Loreto College Coorparoo, inglês) e [Video-Virtual Visit in Sweet Home 3D](https://www.youtube.com/watch?v=kMK2jQ_wXkM) (Bob Eslami).

## Plugins de iluminação e render

O ecossistema oferece plugins de render e de luz (o site tem uma página de plugins; aula 7). Os vídeos [Sweet Home Lights Plugin: A Step-by-Step Guide to LED Lighting in Sweet Home 3D](https://www.youtube.com/watch?v=1aclRhvHEQE) (3D Logic Class) e a playlist "Sweet Home Lights" indicam um plugin de iluminação; não verifiquei o plugin em fonte oficial, portanto confira compatibilidade com a sua versão antes de usar.

## Resumo

- A vista 3D do painel é **tempo real** (sem luz física); foto e vídeo passam por um **motor de render** (SunFlow padrão; YafaRay conforme o guia) que calcula sombras e luz, só com CPU.
- Duas câmeras: **Visualização aérea** e **Visita virtual** (altura dos olhos, ângulo da cabeça, campo de visão); a visita é a melhor verificação humana do projeto.
- **Modificar visualização 3D**: solo, céu, brilho e transparência das paredes.
- A luz vem do **sol** (data, hora, orientação pela bússola), das **luminárias** (potência editável) e do brilho geral; use o sol para validar o estudo do módulo 2.
- Foto: quatro níveis de qualidade (os dois melhores usam o motor de render); ajuste em pequeno, entregue em grande. Vídeo: pontos de câmera com o botão vermelho, saída QuickTime, convertida por VLC.
- Dicas oficiais: lâmpadas a 10 a 30% em cenas noturnas, luzes maiores dão sombras suaves, luz não deve tocar o teto.

## Para aprofundar

- [ ] [Curso Sweet Home 3D: Renderização, cenas e vídeos (Aula 8/16)](https://www.youtube.com/watch?v=R0lTyS4jHb8) (Bruno Toniolo): em português, fotos e vídeos renderizados.
- [ ] [Nice photo rendering Sweet Home 3D](https://www.sweethome3d.com/blog/nice-photo-rendering-sweet-home-3d/) (blog oficial, inglês): fonte das dicas de luz e qualidade.
- [ ] [Sweet Home 3D : How To Render Beautiful Night Photo With Light](https://www.youtube.com/watch?v=hyqFH9oprNo) (Tipsnfreeware, inglês, 2018): render noturno com luzes, pelo título.
- [ ] [Sweet Home 3D - How to add lights](https://www.youtube.com/watch?v=vAobRrLtD04) (RedTop Learning, inglês, 2016): adicionar luzes e ajustar o resultado, pelo título.
- [ ] [Creating a video walkthrough in SweetHome3D](https://www.youtube.com/watch?v=zNQ8RBcvr9s) (Loreto College Coorparoo, inglês): caminho de câmera em vídeo.
- [ ] [Video-Virtual Visit in Sweet Home 3D](https://www.youtube.com/watch?v=kMK2jQ_wXkM) (Bob Eslami, inglês): visita virtual em vídeo.

[Próxima aula: Cotas, textos, exportação, plugins e limites](./07%20-%20Cotas%20Exportacao%20Plugins%20e%20Limites.md)
