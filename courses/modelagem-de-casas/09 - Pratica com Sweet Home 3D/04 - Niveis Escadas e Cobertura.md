[Voltar ao módulo](./README.md)

# Aula 4: Níveis, escadas e cobertura

*Pergunta que esta aula responde: como o programa entende andares, como ligo dois pavimentos por uma escada e, como não existe ferramenta de telhado, como represento a cobertura?*

## Por que existem "níveis"

No módulo 3 (aula 3), as cotas de nível (piso +0,00, forro +2,70, topo de parede +2,90) são **planos horizontais de referência** aos quais paredes, lajes e portas se referem. O módulo 7 chamou isso de "níveis" ou "pavimentos". O Sweet Home 3D usa a mesma ideia: um **nível** é um plano de trabalho com três números:

| Campo | Significado | Observação do guia oficial |
|---|---|---|
| **Elevação** | Cota do piso do nível em relação ao nível zero | Valor negativo para subsolo |
| **Altura do nível** | Distância até o teto do nível | "Computa" a elevação do teto |
| **Espessura do piso** | Espessura da laje entre este nível e o de baixo | Afeta a altura total |

Cada nível aparece como uma **aba** no alto do plano. Você só desenha "no nível ativo"; os elementos dos níveis abaixo aparecem em tom claro como guia de alinhamento (guia oficial e blog oficial), e o 3D mostra todos.

Relação com a aula 2: sem níveis, o programa tem um só pavimento. **Você não precisa de níveis para uma casa térrea.** Mas eles são a única forma de dar ao forro uma altura diferente da das paredes e de representar pisos em cotas diferentes.

## Criar e configurar níveis

Menu (guia em português): **Planta > Níveis > Adicionar nível** ou a aba "+" que surge quando a casa já tem mais de um nível. Para editar: duplo clique na aba ou **Planta > Níveis > Modificar nível…**, que mostra uma tabela com todos os níveis e permite alterar elevação, altura e espessura do piso.

**Exemplo com os valores padrão** (blog oficial sobre escadas): paredes de 250 cm e piso de 12 cm. O segundo nível fica então a 262 cm (250 + 12): altura das paredes de baixo somada à espessura do piso. Você pode mudar isso; no projeto do módulo 3 o pé-direito é 2,70 m, então o piso de um sobrado ficaria a 2,70 + espessura da laje.

Além de adicionar, o guia permite:

- **Copiar e colar** objetos entre níveis (paredes de um térreo, por exemplo, viram ponto de partida do andar superior).
- **Tornar um nível não visível** (versão 5.0 em diante, segundo o histórico do site) para ver o de baixo sem ser atrapalhado.
- **Níveis subterrâneos** com elevação negativa (subsolo, garagem enterrada). O histórico registra correção de renderização de níveis subterrâneos na versão 7.5.

Veja: [How to Create a Multi-Level Home with Sweet Home 3D](https://www.sweethome3d.com/blog/how-to-create-a-multi-level-home-sh3d/) (blog oficial) e [Como fazer o segundo pavimento com o sweet home 3d](https://www.youtube.com/watch?v=bnN66AaElqI) (CONSTRUIR EM 3D).

### Método para um sobrado

1. Termine o térreo, incluindo forro (cômodos com teto).
2. **Adicionar nível.** Copie as paredes externas do térreo e cole no nível 1: o alinhamento sai perfeito. Apague o que não vale para cima.
3. Desenhe cômodos com piso no nível 1 (o piso dele é a laje entre andares).
4. Desenhe as paredes internas do andar de cima, alinhadas com as de baixo (ver a aula em português sobre [alinhamento de paredes de um sobrado](https://www.youtube.com/watch?v=7sCeEjI2vic), Bruno Toniolo).

Regra de projeto vinda do módulo 4: paredes do andar de cima devem, sempre que possível, cair sobre paredes ou vigas do de baixo. O programa não avisa quando você viola isso: é decisão sua.

## Escadas

### Por que a escada é "móvel"

O programa não tem ferramenta de escada. Escadas são **peças do catálogo** que você posiciona como qualquer móvel, com uma propriedade especial: **cruzam o nível**. O tutorial da sbcode.net resume: colocar escada é igual a colocar um móvel, exceto que ela normalmente é mais alta que as paredes do nível onde está e "atravessa" o piso do nível acima.

O programa **abre o furo no piso de cima automaticamente**, do mesmo modo que abre os vãos de portas nas paredes. O blog oficial acrescenta uma condição: o furo só acontece **se existir um nível acima**. Sem segundo nível, a escada aparece, mas não corta nada.

### Altura e cálculo do degrau

A escada padrão do catálogo tem altura final de **262 cm**, casada com os valores padrão de nível (250 + 12). Ao mudar a altura da escada (indicador de altura ou diálogo), a altura de cada degrau muda **proporcionalmente**; o blog diz que o degrau padrão tem cerca de 20 cm de altura.

Você deve dimensionar a escada, não aceitar o valor padrão. Conta:

1. Altura a vencer `H` = altura do nível + espessura do piso do nível de cima (o módulo 4, aula 7, mostra como somar laje e contrapiso: no exemplo de lá, 2,70 + 0,20 + 0,05 = 2,95 m). Aqui usaremos uma laje mais fina só para o cálculo: 2,70 + 0,12 = 2,82 m.
2. Escolha o número de degraus `n` de modo que o espelho (altura do degrau) fique confortável, entre 16 cm e 19 cm em escadas residenciais usuais: `n = 15` dá espelho `e = 2,82 / 15 = 0,188 m`.
3. Aplique a **fórmula de Blondel**, regra clássica de conforto de projeto (não a verifiquei em fonte normativa nesta pesquisa; trate como orientação): `2e + p` entre 0,63 m e 0,64 m, onde `p` é o piso (a parte pisada). Com `e = 0,188`: `p = 0,64 - 2 x 0,188 = 0,264 m`.
4. Comprimento horizontal da escada reta = `(n - 1) x p`. Aqui: `14 x 0,264 = 3,70 m` (o número de pisos é o número de degraus menos um, porque o último degrau é o próprio piso do andar de cima).

Esses são parâmetros de conforto, não a norma. A largura mínima, a altura máxima do espelho e outras exigências vêm do código de obras do município e de normas técnicas (módulo 6); confirme com o profissional responsável antes de construir.

### Personalizar

O blog oficial sobre escadas descreve, para modelos recentes do catálogo: espelhar o formato (para trocar o lado do corrimão), duplicar e espelhar para ter dois corrimãos, alterar materiais separadamente (balaústres, corrimão, espelhos, pisos) e ocultar componentes com o material "invisível" (versão 5.2 em diante). O site também fala de um **plugin gerador de escadas** (disponível desde dezembro de 2022), no qual você informa o número de degraus e as dimensões. Para indicar o sentido da subida no plano, use uma **polilinha** com seta.

Veja: [como fazer uma escada no sweet home 3d](https://www.youtube.com/watch?v=AEz6UwT_DSg) (CONSTRUIR EM 3D), [How to add a staircase using Sweet Home 3D](https://www.youtube.com/watch?v=Mn-s9xVL2TE) (RedTop Learning) e [Sweet Home 3D Stairs Tutorial](https://www.youtube.com/watch?v=LbYvFqAPj4Y) (CAD Guide).

## Cobertura: o limite mais importante desta aula

**Fato oficial (FAQ, verificado em setembro de 2026):** o Sweet Home 3D não tem uma ferramenta simples de criar telhados. Ele cria tetos vistos por baixo, mas não cobertura. A própria FAQ sugere: telhado plano por meio de cômodos no nível do telhado; ou telhados inclinados montando **modelos 3D**; e cita um **plugin Roof Generator**. Portanto, desconfie de qualquer tutorial que fale de uma "ferramenta Roof" nativa: pode ser outro programa, outra versão ou um plugin. A documentação oficial consultada não mostra tal ferramenta.

Quatro abordagens, da mais simples à mais trabalhosa:

### 1) Laje plana (cobertura plana ou platibanda)

Adicione um nível no topo e desenhe um **cômodo** com piso: esse piso é a laje de cobertura. Serve para casa de laje impermeabilizada. Não representa telhado de duas águas.

### 2) Empenas com parede de altura variável

Uma **empena** (gable) é a parede triangular que fecha as pontas de um telhado de duas águas. No diálogo de modificação de parede existe a opção de **altura no início e altura no fim** diferentes ("Sloping" no guia em inglês): o topo da parede fica inclinado. O guia oficial de tetos inclinados (PDF do site, [Tutorial for sloping roofs and ceilings](https://www.sweethome3d.com/slopingCeilingGuide.pdf), cujo texto não pude extrair, pois é um PDF de imagens) mostra a técnica a partir de paredes divididas com **Planta > Dividir parede**.

Exemplo do módulo 3: parede norte de 8 m, topo de apoio +2,90 m, cumeeira +4,10 m em x = 4,00. Divida a parede em duas metades de 4 m:
- metade esquerda: altura no início 2,90, no fim 4,10;
- metade direita: altura no início 4,10, no fim 2,90.

O contorno superior vira um "A" de telhado de duas águas. Pronto: o triângulo do frontão existe.

### 3) Planos de telhado por modelos importados

As águas do telhado são superfícies inclinadas, e o programa só tem paredes verticais e pisos horizontais. Alternativas:

- **Importar um modelo de telhado** de uma biblioteca. Um tutorial de terceiros (sbcode.net) usa um objeto "Red Slate Roof" da biblioteca de contribuições do site (arquivo `3DModels-Contributions-1.6.4.zip`) e o redimensiona.
- **Peça retangular achatada girada** (uma "caixa" fina), inclinada pelo ângulo do telhado. Desde a versão 5.5, móveis (não portas/janelas) podem ser girados em torno de um eixo horizontal, segundo o histórico do site e o blog oficial de tetos inclinados. É a técnica da aula 8. O nome exato do campo de rotação no diálogo: confira na sua versão.

**Cálculo do ângulo:** inclinação de telhado no Brasil é comumente dada em porcentagem, que é a razão altura/vão. 30% significa subir 0,30 m a cada 1,00 m horizontal. Ângulo = `arctan(0,30)`, cerca de 16,7 graus. Comprimento da água (em inclinação, útil para dimensionar a peça) = `vão horizontal / cos(ângulo)`.

Exemplo do módulo 3: da parede oeste (com beiral de 0,60 m) até a cumeeira, o vão horizontal vale 0,60 + 4,00 = 4,60 m; comprimento da água = 4,60 / cos(16,7 graus) = 4,60 / 0,958 = 4,80 m. A altura sobe 0,30 x 4,60 = 1,38 m; a ponta do beiral fica em 2,90 - 0,18 = 2,72 m e a cumeeira em 4,10 m (2,72 + 1,38 = 4,10, como no corte BB do módulo 3).

### 4) Plugin

Existe plugin de gerador de telhado (citado na FAQ oficial). Plugins são instalados pela aula 7. Verifique compatibilidade com a sua versão e leia a documentação do próprio plugin: o que ele faz não foi confirmado por mim.

Veja: telhados em português (CONSTRUIR EM 3D): [como fazer um telhado com o SWEET HOME 3D](https://www.youtube.com/watch?v=2QXcZY5NhxM) e [como fazer um telhado em L NO SWEET HOME 3D](https://www.youtube.com/watch?v=28cU7G7g1NI). Como a FAQ oficial diz que não há ferramenta nativa, não sei qual técnica cada vídeo usa; assista com essa ressalva.

## Terreno e nível do solo

O programa desenha um **solo plano** ao redor da casa (cor ou textura ajustável em **Visualização 3D > Modificar visualização 3D…**, aula 6). Terreno em declive não é um recurso de primeira classe; usa-se o expediente de níveis em elevações diferentes, ou modelos importados. No exemplo do módulo 3, o terreno da frente está a -0,30 m e a varanda a -0,05 m: são diferenças pequenas que a aula 8 trata como simplificação.

## Resumo

- **Nível** = elevação + altura + espessura do piso; abas no plano; níveis abaixo aparecem em tom claro; copiar e colar entre níveis alinha andares. Casa térrea não exige níveis.
- Escada é **peça do catálogo**; o furo no piso de cima é **automático, se existir um nível acima**. A altura padrão de 262 cm casa com 250 cm de parede + 12 cm de piso.
- Dimensione a escada: `n` degraus, espelho `e = H / n`, piso `p = 0,64 - 2e` (Blondel); comprimento reto = `(n - 1) x p`. Normas e código de obras mandam no que é permitido.
- **Não há ferramenta nativa de telhado**; alternativas: laje plana em cômodo, empenas por parede de altura variável, planos importados ou peças giradas, plugin.
- Telhado de 30% tem ângulo de cerca de 16,7 graus; água em inclinação = vão horizontal / cos(ângulo).

## Para aprofundar

- [ ] [How to Create a Multi-Level Home with Sweet Home 3D](https://www.sweethome3d.com/blog/how-to-create-a-multi-level-home-sh3d/) (blog oficial, inglês): níveis, elevação, altura e espessura de piso.
- [ ] [How to customize staircases](https://www.sweethome3d.com/blog/how-to-customize-staircases/) (blog oficial, inglês): furo automático, altura padrão de 262 cm, personalização.
- [ ] [Como fazer o segundo pavimento com o sweet home 3d - casa com dois andares](https://www.youtube.com/watch?v=bnN66AaElqI) (CONSTRUIR EM 3D): segundo pavimento em português, pelo título.
- [ ] [Curso Sweet Home 3D: Alinhamento de paredes de um sobrado (Aula 12/16)](https://www.youtube.com/watch?v=7sCeEjI2vic) (Bruno Toniolo): alinhamento entre andares.
- [ ] [como fazer uma escada no sweet home 3d](https://www.youtube.com/watch?v=AEz6UwT_DSg) (CONSTRUIR EM 3D): escada em português, pelo título.
- [ ] [Sweet Home 3D Stairs Tutorial | Import & Create Custom Staircases](https://www.youtube.com/watch?v=LbYvFqAPj4Y) (CAD Guide, inglês): importar e criar escadas personalizadas, pelo título.
- [ ] [How to: Design a Sloping Ceiling with a Window](https://www.sweethome3d.com/blog/2015/05/28/how_to_design_a_sloping_ceiling_with_a_window.html) (blog oficial, inglês, 2015): técnica com paredes inclinadas e exportação e importação de OBJ; cita a versão 5.5 e a rotação horizontal.

[Próxima aula: Móveis, catálogo, modelos e texturas](./05%20-%20Moveis%20Catalogo%20Modelos%20e%20Texturas.md)
