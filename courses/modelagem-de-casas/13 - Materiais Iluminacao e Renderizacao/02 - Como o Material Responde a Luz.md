# Aula 2: Como o material responde à luz

[Voltar ao módulo](./README.md)

*Pergunta que esta aula responde: o que um material faz com a luz que chega nele, e como descrevemos isso com poucos números (PBR) e com imagens (mapas de textura)?*

## Por que o material importa tanto quanto a luz

A aula 1 mostrou de onde vem a luz. Mas o que chega à câmera nunca é a luz da fonte: é a luz **depois de interagir com uma superfície**. Uma parede branca, um espelho e um vidro recebem a mesma luz e devolvem imagens totalmente diferentes. Por isso, um render convincente precisa de materiais que respondam à luz como os reais. No módulo 10, ao aplicar materiais no SketchUp, e no módulo 9, ao aplicar texturas no Sweet Home 3D, você escolhia uma cor ou uma imagem. Aqui vemos o que acontece por baixo.

## O que a luz faz ao bater numa superfície

Quando um raio de luz atinge uma superfície, três coisas podem acontecer, em proporções que dependem do material:

1. **Reflexão especular:** o raio é refletido como num espelho (o ângulo de saída é igual ao de entrada). É o brilho e o reflexo que você vê em superfícies polidas.
2. **Reflexão difusa:** o raio entra no material, é espalhado e sai em direção aleatória, já tingido pela cor do material. É a "cor" do objeto que enxergamos numa parede pintada.
3. **Transmissão:** o raio atravessa o material (vidro, água), possivelmente mudando de direção.

O que não é refletido nem transmitido é absorvido e vira calor. É por isso que a parede preta esquenta mais que a branca (o módulo 2 tratou disso como absortância).

## PBR: descrever o material por parâmetros físicos

**PBR** (*physically based rendering*, renderização baseada em física) é uma convenção: em vez de o artista ajustar valores "no olho" para cada iluminação, descreve-se o material por propriedades que existem no mundo real, e o motor calcula o resto. A vantagem, segundo a documentação da Epic Games sobre materiais físicos: materiais PBR "funcionam igualmente bem em todos os ambientes de iluminação" e são mais naturais. Ou seja, o mesmo material de reboco funciona na sala de dia, à noite e no exterior.

Quase todo programa moderno usa o conjunto **cor base, rugosidade, metálico** (mais os extras abaixo). O Blender chama seu material universal de **Principled BSDF**, que o manual descreve como baseado no modelo **OpenPBR Surface** e compatível com modelos de outros programas (Disney, Standard Surface). BSDF significa *bidirectional scattering distribution function*, a função que descreve como a superfície espalha a luz; você não precisa da matemática, só do que os botões controlam.

### Cor base (base color, albedo)

A cor que o material tem quando iluminado de forma neutra, sem brilho especular. Em materiais não metálicos é a cor do espalhamento difuso; em metais é a cor do reflexo. No mundo da textura, "albedo" e "base color" são sinônimos práticos: a imagem de cor sem sombra e sem reflexo embutidos.

Ponto importante: **cor base tem faixa realista**. A Epic publica valores medidos de intensidade (em escala de 0 a 1) para materiais não metálicos:

| Material | Intensidade da cor base |
|---|---|
| Carvão | 0,02 |
| Asfalto novo | 0,02 |
| Asfalto gasto | 0,08 |
| Solo nu | 0,13 |
| Grama verde | 0,21 |
| Areia do deserto | 0,36 |
| Concreto novo | 0,51 |
| Neve fresca | 0,81 |

Lição prática: nada real é preto absoluto (0) nem branco absoluto (1). A neve, o mais claro da tabela, tem 0,81. **Uma parede "branca" pintada deve ter cor base por volta de 0,8 e não 1,0**, senão ela reflete mais luz do que recebe e o render estoura (o programa não te avisa). Da mesma forma, um piso "preto" fica em torno de 0,02 a 0,05 e não em 0.

### Rugosidade (roughness)

Descreve o quanto a superfície é irregular em escala microscópica. Uma superfície rugosa espalha a luz refletida em muitas direções, e o reflexo vira um borrão fraco. Uma superfície lisa reflete de forma nítida. O manual do Blender define: rugosidade 0,0 dá reflexo perfeitamente nítido; 1,0 dá um reflexo difuso (fosco).

Exemplos: espelho e vidro polido, 0 a 0,05; porcelanato polido, cerca de 0,1 a 0,2; madeira envernizada, 0,3 a 0,5; madeira crua e concreto, 0,7 a 1,0. (Faixas indicativas de prática, não medições de norma: ajuste comparando com fotos.) Erros típicos: piso com rugosidade 0 vira espelho; tudo com rugosidade 0,5 dá aparência de plástico.

A rugosidade quase sempre varia na superfície (marcas de dedo, poeira). Por isso ela é uma das principais imagens da textura (mapa de rugosidade, abaixo). A Epic destaca que os mapas de rugosidade dão "arranhões, manchas e imperfeições" e que **sem variação o material parece artificial**.

### Metálico (metallic)

Diz se o material é um metal ou não. Metais e não metais se comportam de maneira muito diferente:

- **Não metal (dielétrico):** reflete cerca de 4% da luz de forma especular (para o vidro comum) e o resto entra no material e sai como luz difusa colorida. O reflexo especular é **branco** (não tem a cor do material).
- **Metal:** não tem componente difusa; reflete quase toda a luz de forma especular e **o reflexo é colorido** (ouro reflete amarelo, cobre reflete avermelhado).

Por isso, o manual do Blender diz que Metallic em 0 gera uma base difusa ou transmissiva com camada especular por cima, e em 1 dá reflexo total tingido pela cor base, sem difusa nem transmissão. A Epic recomenda tratar o metálico como **binário (0 ou 1)** para superfícies puras; valores intermediários só para transições (metal enferrujado ou empoeirado). Tinta sobre metal é não metal, portanto Metallic 0 onde há tinta.

A Epic também publica cores base medidas de metais, úteis quando você quiser um ferro ou um cobre correto: ferro (0,560; 0,570; 0,580), alumínio (0,913; 0,921; 0,925), ouro (1,000; 0,766; 0,336), cobre (0,955; 0,637; 0,538) em RGB de 0 a 1.

### Transparência, transmissão e índice de refração (IOR)

- **Alpha (opacidade):** quanto do material é presente. 1 = opaco, 0 = invisível. Serve para folhas de vegetação, cercas, telas. O raio de luz passa reto, sem desvio.
- **Transmission (transmissão):** o material é sólido e transparente, e a luz **muda de direção** ao passar. Vidro e água. Aplicado com Metallic 0.
- **IOR** (*index of refraction*): número que diz quanto a luz é desviada ao entrar no material e quanto ele reflete na incidência frontal. O ar vale 1,0. O manual do Blender diz que o valor padrão de 1,5 é uma boa aproximação para vidro. Outros valores típicos de física: água, cerca de 1,33; diamante, cerca de 2,4 (valores de tabelas de física, não do manual).

A reflexão frontal de um dielétrico sai do IOR por `F0 = ((n - 1) / (n + 1))^2`. Para o vidro (n = 1,5): `(0,5 / 2,5)^2 = 0,04`, ou 4%. É o "4%" que a Epic usa como especular padrão. Para a água (n = 1,33): `(0,33 / 2,33)^2 = cerca de 0,02`, ou 2%.

Outro efeito físico que os motores calculam sozinhos: **a reflexão de qualquer superfície aumenta quando você a olha em ângulo rasante** (esse efeito tem o nome de Fresnel, em homenagem ao físico). É por isso que um piso de madeira encerada parece espelho quando você olha de longe, quase paralelo ao piso, e mostra a cor da madeira quando olha de cima. Você não configura Fresnel no Principled BSDF: ele já está dentro. O que você controla é o IOR e a rugosidade, e o resultado surge.

**Vidro de janela em arquitetura:** é uma lâmina fina, não um volume. Aplicar nela um material de vidro com transmissão pode fazer o sol não entrar (o vidro bloqueia os raios de sombra), e por isso o tutorial de Francesco Milanese (link abaixo) mistura um vidro com um Transparent BSDF, que deixa a luz passar. O manual do Cycles trata o Transparent BSDF de forma especial: o raio atravessa "como se não houvesse geometria". A aula 8 mostra o caminho prático; o manual do Blender oferece a opção **Thin Wall** no Principled BSDF, útil para "folhas de papel, folhas de vegetação e vidros de janela".

### Subsurface (espalhamento subsuperficial)

Alguns materiais deixam a luz entrar alguns milímetros, espalhar por dentro e sair por outro ponto: pele, cera, leite, mármore claro, folha, cortina fina. O resultado é uma aparência "macia" com as sombras suaves. O manual do Blender descreve **subsurface scattering** como usado para "pele, leite e cera" com luz espalhada abaixo da superfície e raio que pode ser especificado por canal de cor (a luz vermelha espalha mais fundo na pele). Em casas, você raramente precisa disso, mas vale para cortinas de tecido fino, velas, folhas de plantas e mármores translúcidos como o ônix.

### Emissão

Material que emite luz. Uma tela de TV, um LED, um painel luminoso. Pode-se usar um objeto emissor como fonte de luz real (motores path tracing calculam a luz que sai dele). Um plano emissor no lugar do vão da janela é um truque clássico (aula 4).

### Camadas extras do Principled BSDF

O manual lista **Coat** (verniz, como laca ou tinta de carro) e **Sheen** (fibrilas de tecido, poeira, veludo). Um piso de madeira com verniz combina rugosidade da madeira com **Coat** liso por cima. Tecido de sofá usa **Sheen**.

## Mapas de textura: variação sobre a superfície

Materiais reais não são uniformes. Uma cor base única dá um plástico liso; para o realismo, cada propriedade varia pela superfície. Um **mapa** (ou textura) é uma imagem cujos pixels dão o valor da propriedade em cada ponto.

| Mapa | O que guarda | Tipo de dado |
|---|---|---|
| **Albedo / Base Color** | A cor, sem sombra nem reflexo | Cor (sRGB) |
| **Roughness** | Rugosidade ponto a ponto (preto = liso, branco = rugoso) | Dado, em escala de cinza |
| **Metallic** | Preto e branco: onde é metal | Dado |
| **Normal** | Direção da superfície (relevo falso, RGB) | Dado |
| **Bump / Height** | Altura (relevo falso a partir de cinza) | Dado |
| **Displacement** | Altura para mover a malha de verdade | Dado |
| **AO** (*ambient occlusion*) | Sombra de cantos e frestas "assada" | Dado |

O Blender documenta a diferença entre **cor** e **dado**: mapas de dados (normal, rugosidade, metálico) devem ser lidos como **Non-Color**, sem conversão de cor. Se você abrir um mapa normal como cor comum, o relevo sai errado. O manual diz: para mapas normais de espaço tangente, "a textura de imagem deve ser ajustada em modo Non-Color para dar resultados corretos".

### Normal, bump e displacement: três formas de fingir relevo

O manual do Blender (páginas Bump, Normal Map e Displacement) descreve as três:

- **Bump:** gera um vetor perturbado a partir de uma imagem de altura. Simples. O manual diz que bump é o método "menos preciso, mas o que menos usa memória" e que **não altera a malha**, só o sombreamento.
- **Normal map:** guarda direção (RGB) em vez de altura; captura relevo mais complexo. Convenções: o Blender usa **OpenGL** (canal verde aponta para cima); mapas vindos de outros programas em convenção **DirectX** (verde aponta para baixo) precisam ser convertidos. Se os relevos do seu normal map parecem "invertidos", a causa provável é essa.
- **Displacement:** move a superfície de verdade. É o método "mais preciso e que mais consome memória", exige malha muito subdividida. O manual sugere subdivisão adaptativa e diz que mapas de 16 ou 32 bits dão resultado melhor que 8 bits.

Nenhum dos três funciona na silhueta se for só sombreamento (bump e normal): a borda do objeto continua reta. Para tijolo aparente e telhado com telhas, isso importa: vistos de perto ou em ângulo rasante, o relevo falso denuncia. O manual sugere combinar deslocamento para o relevo grande e bump para o fino.

O **mapa AO** não é usado em todos os pipelines: em path tracing a oclusão sai do cálculo de luz, e o mapa AO só ajuda em motores rápidos ou para escurecer frestas que a geometria não tem.

## UV mapping: como uma imagem 2D cobre um objeto 3D

Para aplicar uma imagem numa parede 3D, o programa precisa saber **qual pixel da imagem vai em qual ponto do objeto**. As **coordenadas UV** fazem isso: cada vértice da malha recebe duas coordenadas (U horizontal, V vertical) que apontam para uma posição na imagem (de 0 a 1 em cada eixo). **Desdobrar** (*unwrap*) a malha é planificá-la num mapa 2D, como abrir uma caixa de papelão. O módulo 7 explicou vértices, arestas e faces; UV é um atributo a mais dos vértices.

Em arquitetura, muita superfície é reta e plana; é comum usar **projeção em caixa** (*box*) em vez de UV manual. O manual do Blender, no nó Image Texture, diz que a projeção **Box** "é comumente usada em modelos arquitetônicos, por terem muitos objetos em forma de caixa": projeta a imagem nas seis faces de um cubo, pela direção mais próxima da normal.

### A escala da textura

O erro mais comum e mais visível em render de casa é **escala errada**: rejunte do piso do tamanho de uma mão, tijolo do tamanho de um travesseiro. Como acertar:

1. Descubra o **tamanho real** que a imagem cobre. Muitas bibliotecas informam esse tamanho na página de cada material (confira em cada uma; não verifiquei se todas informam).
2. Ajuste a escala para que esse tamanho real coincida com a dimensão do modelo.

Exemplo resolvido: uma textura de porcelanato que mostra 2 x 2 peças de 60 x 60 cm cobre 1,20 x 1,20 m. Se o seu piso mede 4,8 m de largura, a textura precisa repetir `4,8 / 1,2 = 4` vezes na largura. Em Blender isso é o **Scale** do nó de mapeamento; nos outros programas, o "tamanho do material" em metros.

Outros cuidados:
- **Repetição visível:** uma imagem repetida em mosaico deixa um padrão evidente na parede grande. Texturas boas são **contínuas** (*seamless*) e, ainda assim, para superfícies muito grandes convém variar (vários materiais, um mapa de ruído multiplicado, sujeira).
- **Direção do veio:** madeira com veio cruzado é um erro comum. A rotação do mapeamento resolve.
- **Resolução:** o pixel da textura precisa dar detalhe ao olho da câmera. Uma textura de 1K aparece pixelada num piso que ocupa a tela inteira.

## Cuidado com as texturas vindas de fora (licenças)

Texturas e materiais têm autor. A aula 7 mostra onde encontrar materiais em domínio público (CC0) e como ler as licenças.

## Resumo

- A luz que chega à câmera vem **depois** da interação com o material: reflexão especular, difusa, transmissão, e o resto é absorvido.
- **PBR** descreve o material por parâmetros físicos: cor base (albedo), rugosidade, metálico, mais IOR, transmissão, subsurface, emissão. Funciona sob qualquer luz.
- Nada real é preto ou branco absoluto: uma parede branca fica perto de 0,8 de cor base. Metálico é praticamente 0 ou 1.
- IOR de vidro é cerca de 1,5 (4% de reflexão frontal); reflexão sobe em ângulo rasante (Fresnel, automático).
- **Mapas:** cor base, rugosidade, metálico, normal, bump, displacement, AO. Mapas de dados usam Non-Color. Bump e normal fingem relevo; displacement move a malha.
- UV mapping liga imagem a superfície; em arquitetura, projeção em caixa é comum. **Escala**: tamanho real da imagem versus tamanho do objeto.

## Para aprofundar

- [ ] [MATERIAIS PBR - O que são e como criar?](https://www.youtube.com/watch?v=1LKGHozzLuU) (Gabriel Dib, PT-BR): conceito de PBR antes de qualquer software.
- [ ] [Principled BSDF Shader | Blender 4.1 Tutorial](https://www.youtube.com/watch?v=4l86JpmqdbM) (MK Graphics, inglês): percorre os painéis do Principled BSDF e mostra textura, normal map e subsurface, sobre a versão 4.1 (a interface de 5.2 pode ter diferenças).
- [ ] [Blender 2.8 : Everything About The Principled BSDF (In 3 Minutes)](https://www.youtube.com/watch?v=_IjSYLt9k2A) (Royal Skies, inglês): resumo curto de 2019; alguns nomes de parâmetros mudaram desde então.
- [ ] [Blender Materials - Principled BSDF Procedural Shader Explained + Displacement](https://www.youtube.com/watch?v=HT9CXEiiB9U) (Digital Fashion Blender, inglês): rugosidade e metálico em ação, mais deslocamento.
- [ ] [Como fazer UV MAPPING | O Básico do Blender #7](https://www.youtube.com/watch?v=m313RDPpHaA) (Augusto Cezar, Blender para Arquitetura, PT-BR): UV para arquitetura, em português.
- [ ] [Tudo o que você precisa saber sobre UV Mapping | Blender Tutorial #038](https://www.youtube.com/watch?v=fO1IYtP0LQ0) (InsightZ): UV em detalhe.
- [ ] [Physically Based Materials in Unreal Engine](https://dev.epicgames.com/documentation/unreal-engine/physically-based-materials-in-unreal-engine?lang=en-US) (Epic Games, documentação oficial, inglês): fonte das tabelas de cor base medida e das regras de rugosidade e metálico. Independente de software.
- [ ] [Principled BSDF](https://docs.blender.org/manual/en/latest/render/shader_nodes/shader/principled.html), [Normal Map](https://docs.blender.org/manual/en/latest/render/shader_nodes/displacement/normal_map.html), [Bump](https://docs.blender.org/manual/en/latest/render/shader_nodes/displacement/bump.html), [Displacement](https://docs.blender.org/manual/en/latest/render/materials/components/displacement.html) (Manual do Blender 5.2 LTS): definições oficiais.
- [ ] [O Material Correto para Vidros de Janela no Cycles](https://www.francescomilanese.com/pt/tutorials-br-all/tut-197-br-b3d-real-window-glass.html) (Francesco Milanese, transcrição em português; o vídeo é em inglês): vidro de janela que deixa o sol passar.
- [ ] [Como são materiais PBR e como acessar bibliotecas gratuitas?](https://solare.org.br/2022/09/30/como-sao-materiais-pbr-e-como-acessar-bibliotecas-gratuitas/) (Solare, português): artigo curto.

Nota: título e canal dos vídeos foram confirmados; o conteúdo não foi assistido. Vídeos de versões antigas do Blender podem mostrar nomes de parâmetros diferentes dos de hoje.

[Próxima aula: Câmera e composição](./03%20-%20Camera%20e%20Composicao.md)
