[Voltar ao módulo](./README.md)

# Aula 6: Modelar volumes, paredes, aberturas, cobertura e escada

*Pergunta que esta aula responde: em que ordem se constrói o corpo da casa no modelo, com que números, e onde está o passo a passo de cada programa?*

> Lembrete: o modelo é estudo de hobby. Paredes, lajes e pilares que você modela têm a espessura e a altura que você digitou; isso **não** prova que a estrutura existe ou resiste (módulo 4).

## Por que existe um fluxo independente de software

Os módulos 9 a 12 ensinam o gesto de cada programa. O que muda entre eles é a ferramenta; o que **não** muda é a lógica de construção: modelar como se constrói, do geral ao particular, com espessura real, e conferindo com números a cada etapa ([módulo 7, aula 9](../07%20-%20Fundamentos%20de%20Modelagem%203D%20CAD%20e%20BIM/09%20-%20Boas%20Praticas%20de%20Modelagem.md)). Esta aula dá essa sequência e aponta, para cada passo, a aula do módulo do seu programa. Você **não reexplica** o gesto aqui; aplica.

## Onde está o passo a passo de cada programa

| Passo | Sweet Home 3D (módulo 9) | SketchUp (módulo 10) | BIM e Blender |
|---|---|---|---|
| Paredes | [aula 2](../09%20-%20Pratica%20com%20Sweet%20Home%203D/02%20-%20Planta%20de%20Fundo%20e%20Paredes.md) | [aulas 3](../10%20-%20Pratica%20com%20SketchUp/03%20-%20Ferramentas%20Essenciais.md), [4](../10%20-%20Pratica%20com%20SketchUp/04%20-%20Inferencias%20Eixos%20e%20Medidas%20Digitadas.md) e [6](../10%20-%20Pratica%20com%20SketchUp/06%20-%20Da%20Planta%20ao%20Modelo.md) | [módulo 11](../11%20-%20Pratica%20com%20BIM%20Revit%20e%20Archicad/README.md) e [módulo 12](../12%20-%20Pratica%20com%20Blender%20para%20Arquitetura/README.md) |
| Cômodos, portas e janelas | [aula 3](../09%20-%20Pratica%20com%20Sweet%20Home%203D/03%20-%20Comodos%20Portas%20e%20Janelas.md) | [aula 6](../10%20-%20Pratica%20com%20SketchUp/06%20-%20Da%20Planta%20ao%20Modelo.md) | idem |
| Níveis, escada e cobertura | [aula 4](../09%20-%20Pratica%20com%20Sweet%20Home%203D/04%20-%20Niveis%20Escadas%20e%20Cobertura.md) | [aula 6](../10%20-%20Pratica%20com%20SketchUp/06%20-%20Da%20Planta%20ao%20Modelo.md) | idem |
| Organização (grupos, tags) | não se aplica (sem camadas) | [aula 5](../10%20-%20Pratica%20com%20SketchUp/05%20-%20Grupos%20Componentes%20e%20Tags.md) | idem |
| Exercício completo de referência | [aula 8](../09%20-%20Pratica%20com%20Sweet%20Home%203D/08%20-%20Exercicio%20Guiado%20a%20Casa%20de%2096%20m2.md) | [aula 9](../10%20-%20Pratica%20com%20SketchUp/09%20-%20Exercicio%20Guiado%20Casa%20de%202%20Quartos.md) | README do módulo |
| Erros comuns | [aula 9](../09%20-%20Pratica%20com%20Sweet%20Home%203D/09%20-%20Erros%20Comuns%20e%20Como%20Corrigir.md) | [aula 10](../10%20-%20Pratica%20com%20SketchUp/10%20-%20Erros%20Comuns%20e%20Boas%20Praticas.md) | README do módulo |

## O fluxo, passo a passo

O fluxo padrão do [módulo 7, aula 8](../07%20-%20Fundamentos%20de%20Modelagem%203D%20CAD%20e%20BIM/08%20-%20Da%20Planta%20ao%20Modelo.md): limpar a planta, importar com unidade correta como referência bloqueada, traçar por cima, levantar volumes, definir níveis, abrir vãos, conferir contra a planta, gerar as vistas. Como você já fez a importação na aula 5, comece no passo 1 abaixo. **Salve uma versão ao fim de cada passo** e faça a **conferência numérica** indicada.

### Passo 1: massa volumétrica (opcional, mas útil)

Antes das paredes, levante um bloco simples do corpo da casa dentro do envelope, com altura estimada. Serve para ver a implantação em 3D, o que os vizinhos veem e como as sombras caem. **Conferência:** o bloco cabe dentro do envelope e a projeção está abaixo da projeção máxima da aula 1.

### Passo 2: paredes com espessura real

- Trace as paredes **sobre a planta**, na espessura acabada da aula 4 (por exemplo, 18 cm externas e 13 ou 14 cm internas), respeitando a linha de referência (eixo ou face) definida na aula 3.
- Use o teclado para medidas exatas (Enter no Sweet Home 3D, caixa de medidas no SketchUp).
- Altura das paredes = pé-direito (mais a laje, se o programa modelar assim).

**Conferência:** cada cômodo tem a **área livre** do quadro de áreas da aula 3, com tolerância de poucos centímetros. Lembre-se: a área livre é menor que a nominal por causa das paredes. Se a diferença for maior que 1 a 2%, algo foi traçado fora do eixo.

### Passo 3: níveis, pisos e lajes

- Crie os níveis com o piso a piso da aula 4 (exemplo: 0,00 e 2,95 m).
- Modele o piso e a laje com a espessura decidida (10 a 12 cm maciça, 16 a 20 cm treliçada, mais contrapiso).
- Onde há escada, **fure a laje** com folga.

**Conferência:** cota do piso superior igual ao piso a piso; espessura da laje visível em corte.

### Passo 4: aberturas

Um vão é **um volume subtraído da parede**; ele precisa atravessá-la (módulo 7, aula 4). No BIM, a esquadria é objeto que abre o vão sozinha. Insira portas e janelas com o **quadro de esquadrias** da aula 3: largura, altura e **peitoril** (no Sweet Home 3D o peitoril vira "elevação"; posição inicial e final viram centro).

**Conferência:** conte as esquadrias e compare com o quadro. Verifique que as vergas (acima do vão) e o arco de giro das portas não colidem com viga, pilar ou móvel.

### Passo 5: estrutura aparente (se o sistema tiver)

Se o sistema é concreto armado, modele pilares e vigas com a mesma espessura acabada da parede, para que não "estufem" o ambiente (módulo 4). Em BIM, use os objetos estruturais; em SketchUp, componentes; em Sweet Home 3D, paredes curtas ou móveis-pilar.

**Conferência:** os pilares estão alinhados como na planta compatibilizada; vigas sobre portas não reduzem o pé-direito abaixo do mínimo.

### Passo 6: cobertura

O telhado é o passo em que os programas mais divergem: o Sweet Home 3D não gera telhado sozinho (alternativas no [módulo 9, aula 4](../09%20-%20Pratica%20com%20Sweet%20Home%203D/04%20-%20Niveis%20Escadas%20e%20Cobertura.md)); SketchUp e Blender exigem construir os planos; BIM tem ferramentas de telhado. A geometria é a mesma:

- **Inclinação** definida pela telha (cerâmica cerca de 30%, ou 16,7 graus).
- **Altura da cumeeira** = `meia largura x inclinação`.
- **Beiral** de 50 a 100 cm (a aula 2 pode ter indicado mais, se a proteção pedir).
- **Água ao norte** para painéis, se decidido.
- **Calhas e condutores** nos pontos definidos na aula 4.

**Conferência:** a inclinação medida no modelo bate com a da aula 4; o beiral tem a projeção prevista; o telhado não passa do gabarito. **Área real do telhado:** `projeção / cos(ângulo)`; para 16,7 graus o fator é cerca de 1,044 (usado na aula 9).

### Passo 7: escada

Use os números da aula 4 (espelho `e`, piso `p`, número de degraus). Modele com a ferramenta nativa ou com degraus repetidos; deixe o **furo na laje** e verifique a **altura livre** (cabeça) sobre a escada.

**Conferência:** `n x e = piso a piso`; `2e + p` na faixa de conforto; comprimento reto coerente com o furo.

### Passo 8: terreno, calçada, muro e acessos

Encaixe o terreno (curvas ou plano inclinado), a calçada, o muro, o portão e os acessos. **Conferência:** o piso interno está 15 a 30 cm acima do terreno externo e a rampa de acesso, se houver, respeita a inclinação máxima de 8,33% citada no módulo 6.

## Estratégia contra retrabalho

- **Geral para particular**: massa, paredes, lajes, vãos, telhado, detalhes.
- **Componentes para o repetido** (janelas iguais, pilares iguais), em programas que os têm.
- **Poucos polígonos**: detalhe só o que será visto ou medido.
- **Sem duplicatas** de paredes ou faces (quebram quantitativos e renders).
- Ao terminar cada passo, **compare a vista em planta do modelo com a planta 2D** sobreposta ou lado a lado.

## Entregável da aula 6

- Arquivo `casa_v0N` com o corpo completo: paredes, níveis, lajes, aberturas, cobertura, escada, terreno e acessos.
- Registro de conferência numérica por passo (área livre por cômodo, número de esquadrias, piso a piso, inclinação, degraus).
- Lista de erros encontrados e como foram corrigidos.

## Checklist da aula 6

- [ ] As paredes têm espessura real acabada, não linhas de 10 cm.
- [ ] A área livre de cada cômodo bate com o quadro de áreas dentro de 1 a 2%.
- [ ] Os níveis têm o piso a piso da aula 4 e as lajes têm espessura.
- [ ] Todas as esquadrias do quadro existem, com peitoril e largura corretos.
- [ ] Cobertura com a inclinação, o beiral e a cumeeira calculados.
- [ ] Escada com número de degraus coerente com a altura e furo na laje.
- [ ] Salvei uma versão por etapa e mantive o modelo leve e organizado.

## Resumo

- A ordem é massa, paredes, níveis e lajes, aberturas, estrutura aparente, cobertura, escada, terreno e acessos.
- A lógica é a mesma em todo programa; o gesto está nos módulos 9 a 12.
- Cada etapa termina com uma conferência numérica contra a planta, os quadros e os parâmetros da aula 4.
- O telhado é o passo em que os programas mais diferem; a geometria (inclinação, cumeeira, beiral) é a mesma.
- Salve versões e mantenha poucos polígonos, sem duplicatas.

[Próxima aula: Mobiliário, materiais e vegetação](./07%20-%20Mobiliario%20Materiais%20e%20Vegetacao.md)
