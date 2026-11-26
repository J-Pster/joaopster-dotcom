[Voltar ao módulo](./README.md)

# Aula 5: Móveis, catálogo, modelos e texturas

*Pergunta que esta aula responde: o que é, para o programa, um móvel; como posiciono e dimensiono um com exatidão; como trago modelos 3D e texturas de fora; e por que uma textura precisa de escala real?*

## Por que o catálogo existe

Um modelo de casa só serve para decidir se a mobília cabe, se o corredor circula, se o ambiente "funciona" (módulo 1, ergonomia e circulação). Modelar cada cadeira à mão seria absurdo; por isso o programa entrega um **catálogo de modelos 3D prontos** e trata cada um como um objeto com nome, dimensões, posição, ângulo, elevação e material. Já vimos que portas, janelas e escadas são "móveis" para o programa; tudo o que você arrasta do catálogo obedece às mesmas regras.

Cada peça do catálogo é um **modelo 3D leve**, com uma imagem de ícone. A versão gratuita do site traz um catálogo básico e há bibliotecas gratuitas extras para instalar (esta aula).

## Usar o catálogo

### Onde está e como achar

O catálogo é o painel superior esquerdo, com categorias que se expandem por triângulos. Um tutorial de terceiros (sbcode.net) recomenda ativar em **Arquivo > Preferências…** a visualização do catálogo em "lista pesquisável", o que permite buscar por nome; confira o rótulo na sua versão. A **lista de móveis da casa** (painel inferior esquerdo) mostra o que já está no projeto, com colunas de nome, dimensões etc., que você ordena clicando no cabeçalho.

### Colocar

Duas formas (guia oficial): **arrastar** do catálogo para a planta ou para a lista, ou selecionar e clicar em **Adicionar móveis**.

Regras que o magnetismo aplica (guia oficial):

- Móvel solto perto de uma parede **gira para encostar a parte de trás** nela.
- Móvel solto sobre outro maior **sobe** para ficar em cima dele, se o valor de elevação padrão era o do piso. Isso é o que faz um abajur ficar sobre uma mesa sem você calcular a altura.

Para posicionar com exatidão, use o **diálogo**: duplo clique ou **Mobiliário > Modificar…**. Campos: nome, ângulo, coordenadas, elevação, dimensões, cor/textura/material, visibilidade, espelhar o modelo, potência (luminárias). Um item **invisível** continua na lista e no inventário, mas não aparece no plano nem no 3D (útil para guardar uma peça sem mostrar).

### Verificação de ergonomia

Antes de posicionar, pegue as dimensões de referência do módulo 1 (circulação mínima, espaços de uso) e confira **no plano**. O truque é a **cota** (aula 7): meça a distância livre entre a cama e a parede. Móveis do catálogo têm tamanhos "de catálogo", nem sempre iguais aos dos móveis reais que você comprará; ajuste largura, profundidade e altura para as medidas reais e **anote o nome do móvel**, porque a lista de móveis vira uma lista de compras aproximada.

### Agrupar

Desde a versão 5.0, é possível **agrupar** móveis (histórico do site): uma cozinha planejada com vários módulos pode virar um grupo que você move e copia inteiro. O histórico do site também cita a edição de itens dentro do grupo.

## Cor, material e brilho

No diálogo do móvel você escolhe entre manter o modelo original, aplicar uma **cor** ou uma **textura** ao objeto inteiro, ou modificar os **materiais** um a um. O ponto-chave: um modelo 3D é feito de **materiais** (por exemplo, "madeira", "tecido", "metal"), e você pode mudar o de cada parte. O blog oficial de renderização também recomenda ajustar o brilho (opção de brilho "Matt", fosco, no diálogo de modificação; confira o rótulo) de itens que não devem refletir, e o blog sobre escadas mostra o material "invisível" para ocultar partes.

## Importar modelos 3D

### Por que importar

O catálogo básico não tem a sua poltrona, o seu fogão ou uma esquadria específica. Importar também é a via para elementos que o programa não gera sozinho (aula 4: planos de telhado, escadas especiais).

### Formatos e caminho

Segundo a página oficial [3D Models Import](https://www.sweethome3d.com/import-models/) e o guia: o programa aceita **OBJ**, **DAE (Collada)**, **KMZ** e **3DS**, além de arquivos **ZIP** contendo um desses. No Windows e no macOS, arrastar o arquivo para a janela funciona. Menu: **Mobiliário > Importar mobiliário…** (o guia usa "Import furniture"; confira o rótulo em português). O **assistente de importação** tem quatro passos (guia oficial):

1. **Escolher o modelo** pelo botão de escolha do arquivo.
2. **Orientar o modelo**, com setas, para que a **frente** fique voltada para o lado certo.
3. **Definir propriedades:** nome, tamanho, elevação e cor.
4. **Girar o modelo** para definir como o ícone de catálogo aparece.

O assistente também é a hora de dar o **tamanho real**: modelos de outros programas chegam em unidades quaisquer (um sofá que mede "2" pode ser 2 metros ou 2 milímetros). Digite as medidas reais (largura, profundidade, altura) no passo 3 e confira no plano contra a cota.

Uma nota da FAQ: a versão do Mac App Store exige arquivos ZIP para os modelos, por questão de segurança do sistema; e arquivos 3DS problemáticos podem ser convertidos passando por FBX.

### Bibliotecas (SH3F)

Um arquivo **SH3F** é uma **biblioteca de móveis** (vários modelos com descrição e categoria). Instale por duplo clique ou **Mobiliário > Importar biblioteca de móveis…** (nome do guia em português). Depois de instalada, os itens aparecem no catálogo, em categoria própria. A página oficial lista bibliotecas gratuitas (por exemplo, "Contributions" com 511 modelos, "Scopia" com 500, coleções BlendSwap, árvores e figuras humanas). A página [Free 3D Models](https://www.sweethome3d.com/freeModels.jsp) traz 1.602 pacotes gratuitos, geralmente de **baixo número de polígonos**, sob licenças **Free Art** ou **Creative Commons Attribution**. Respeitar a licença (dar crédito quando exigido) é dever seu, mesmo em uso pessoal se você for publicar imagens.

Para criar a sua própria biblioteca, o site oferece o **Furniture Library Editor**, que gera arquivos SH3F.

### Cuidado: peso do modelo

A página oficial recomenda modelos leves. Cada modelo com dezenas de milhares de polígonos deixa a vista 3D lenta, e o render (aula 6) demora. A FAQ diz que imagens maiores, qualidade menor e modelos mais simples aceleram o render. Regra: **use modelos leves** e importe só o que aparece nas cenas importantes.

Veja: [Curso Sweet Home 3D: Importação de novas texturas e móveis (Aula 11/16)](https://www.youtube.com/watch?v=k6__beq6fvQ) e [Importação de móveis a partir do Sketchup (Aula 10/16)](https://www.youtube.com/watch?v=otctA_1C-V8) (Bruno Toniolo), [How to Import Furniture and 3D Models in Sweet Home 3D](https://www.youtube.com/watch?v=2mn5EnaHXTI) (CAD Guide).

## Texturas

### O que é e por que precisa de escala

Uma **textura** é uma imagem que "reveste" uma superfície repetindo-se como azulejo. O problema que resolve: dar aparência (madeira, tijolo, cerâmica) sem modelar detalhe geométrico. Como a imagem se repete, ela precisa saber **quanto mede na realidade**. Se uma imagem de 1 m de piso de madeira for aplicada com escala de 10 cm, as tábuas ficam minúsculas; se for aplicada a 10 m, viram tábuas gigantes. A versão 5.5 (histórico do site) trouxe **ajuste da escala da textura** no painel de modificação, e guarda as texturas usadas recentemente no perfil do usuário.

Por isso, a página oficial de texturas recomenda preferir **texturas contínuas** (seamless), cujas bordas se encaixam sem emenda visível, e diz que imagens de **256 x 256 pixels** já dão bons resultados. Ela também sugere priorizar melhor qualidade de JPEG em vez de mais resolução, para não sobrecarregar o programa.

### Onde aplicar

Em quatro lugares, sempre por **duplo clique** e diálogo:

| Onde | Caminho | O que aceita |
|---|---|---|
| Parede | **Planta > Modificar paredes…** | Cor ou textura **de cada lado** (esquerdo e direito) |
| Cômodo | **Planta > Modificar cômodos…** | Piso e teto |
| Móvel | **Mobiliário > Modificar…** | O objeto inteiro ou material por material |
| Solo e céu | **Visualização 3D > Modificar visualização 3D…** | Cor ou textura do chão e do céu (aula 6) |

Para trazer uma textura própria, o guia oficial diz para clicar em **Importar** no diálogo de parede e usar o **assistente de importação de texturas**. Esse assistente pergunta a imagem e o tamanho real que ela representa; confira os campos exatos na sua versão. Bibliotecas de textura em formato **SH3T** instalam-se por duplo clique ou **Furniture > Import textures library** (nome do menu na página oficial em inglês; confira o rótulo em português na sua versão). A página oficial lista as bibliotecas Textures-Contributions (57 texturas, licença CC-BY) e Textures-eTeksScopia (340 texturas, CC-BY), e sites externos gratuitos como ambientCG.

### Escolher texturas com critério (ligação com o módulo 4)

Não coloque textura decorativa antes de decidir o material: o **quadro de acabamentos** do projeto (módulo 3, aula 7) diz qual revestimento vai em cada ambiente. Textura de piso de madeira num banheiro é erro de projeto, não de modelagem.

Veja: [Curso Sweet Home 3D: Inserção de móveis (Aula 7/16)](https://www.youtube.com/watch?v=Qbq1FROgsTY) (Bruno Toniolo): uso do catálogo em português.

## Resumo

- Para o programa, "móvel" é qualquer modelo 3D do catálogo (mesmo esquadria e escada); tem nome, dimensões, posição, ângulo, elevação e material. O magnetismo encosta a parte de trás na parede e sobe o item sobre outro móvel.
- Precisão vem do diálogo (**Mobiliário > Modificar…**). Nomeie e dimensione pelas medidas reais; a lista de móveis serve de inventário.
- Importe modelos em OBJ, DAE, KMZ, 3DS ou ZIP pelo assistente de quatro passos (arquivo, orientação, propriedades e tamanho real, ícone); bibliotecas SH3F entram por **Mobiliário > Importar biblioteca de móveis…**.
- Modelos devem ser **leves** (poucos polígonos) e ter licença respeitada.
- Textura = imagem repetida; precisa de **escala real** para parecer correta; prefira texturas contínuas de cerca de 256 x 256 pixels; aplique em parede (cada lado), cômodo (piso e teto), móvel e solo.

## Para aprofundar

- [ ] [Curso Sweet Home 3D: Inserção de móveis (Aula 7/16)](https://www.youtube.com/watch?v=Qbq1FROgsTY) (Bruno Toniolo): catálogo em português (2016).
- [ ] [Curso Sweet Home 3D: Importação de novas texturas e móveis (Aula 11/16)](https://www.youtube.com/watch?v=k6__beq6fvQ) (Bruno Toniolo): texturas e móveis em português.
- [ ] [Curso Sweet Home 3D: Importação de móveis a partir do Sketchup (Aula 10/16)](https://www.youtube.com/watch?v=otctA_1C-V8) (Bruno Toniolo): trazer modelos do SketchUp, relevante para o módulo 10.
- [ ] [How to Import Furniture and 3D Models in Sweet Home 3D](https://www.youtube.com/watch?v=2mn5EnaHXTI) (CAD Guide, inglês): importar bibliotecas e baixar modelos, pelo título.
- [ ] [Importar Texturas y Modelos 3D Sweet Home 3D](https://www.youtube.com/watch?v=42NXhzt5ZLU) (Ricardo Andres Correa Narvaez, espanhol): o mesmo assunto em espanhol; útil para ver o assistente.
- [ ] [3D Models Import](https://www.sweethome3d.com/import-models/) e [Texture Import](https://www.sweethome3d.com/import-textures/) (site oficial, inglês): formatos, assistente, bibliotecas e recomendações.

[Próxima aula: Vista 3D, iluminação, render e vídeo](./06%20-%20Vista%203D%20Iluminacao%20e%20Render.md)
