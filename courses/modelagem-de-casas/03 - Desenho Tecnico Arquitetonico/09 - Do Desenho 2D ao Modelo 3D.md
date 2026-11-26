[Voltar ao módulo](./README.md)

# Aula 9: Do desenho 2D ao modelo 3D

*Pergunta que esta aula responde: como tudo o que você aprendeu sobre plantas, cortes e fachadas se traduz no modelo tridimensional que você vai construir nos softwares, e o que o modelo muda e o que não muda em relação ao desenho técnico?*

Esta aula é a ponte para o [Módulo 7: Fundamentos de Modelagem 3D CAD e BIM](../07%20-%20Fundamentos%20de%20Modelagem%203D%20CAD%20e%20BIM/README.md), que aprofunda o assunto. Aqui você só precisa entender a relação entre as duas representações.

## O problema: duas maneiras de guardar a mesma casa

Até agora a casa foi guardada como **um conjunto de desenhos planos** (plantas, cortes, fachadas), cada um uma projeção ortogonal do objeto (aula 2). Isso tem uma consequência incômoda: **a casa em si não existe em lugar nenhum**. Ela existe apenas como o acordo entre vários desenhos que precisam ser consistentes entre si, e a consistência é mantida à mão: se você muda a janela na planta, tem que lembrar de mudá-la na fachada, no corte e no quadro de esquadrias (aula 8, etapa 9).

Um **modelo 3D** inverte a situação: guarda a casa **uma vez**, como geometria em três eixos, e obtém as vistas por cálculo. A planta, o corte e a fachada deixam de ser desenhos independentes e viram **vistas do mesmo objeto**, geradas exatamente pelo mecanismo da aula 2 (escolher um plano, remover o que está de um lado, projetar ortogonalmente o resto).

Os softwares dividem-se, grosso modo, em três níveis dessa ideia (detalhados no módulo 7):

| Nível | O que guarda | Vistas 2D | Exemplos (módulos 9 a 12) |
|---|---|---|---|
| **CAD 2D** | Linhas e símbolos em um plano | Desenhadas uma a uma | Programas de desenho técnico (fora do escopo do curso) |
| **Modelagem 3D geométrica** | Superfícies e volumes (o "formato" da casa) | Extraídas por seção e por câmera; anotação e espessura de linha feitas à mão | SketchUp, Blender, Sweet Home 3D |
| **BIM** (*Building Information Modeling*) | **Objetos** com significado (parede, porta, laje) e propriedades (espessura, material, tipo) | Geradas automaticamente, com quadros e cotas | Revit, Archicad, FreeCAD e Bonsai |

Em qualquer nível, **a linguagem do desenho técnico continua sendo o que você produz no fim** (pranchas, escalas, carimbos, cotas) e o que você precisa para ler projetos de outras pessoas, inclusive o da sua própria casa quando ela for construída por profissionais.

## Correspondência: cada conceito da aula 1 a 8 tem um equivalente no modelo

### Eixos e coordenadas

O desenho em planta usa dois eixos, **x** (largura) e **y** (profundidade). O corte e a fachada acrescentam o terceiro, **z** (altura). No modelo 3D, todo ponto tem (x, y, z). Isso reduz a aula 2 a uma frase: **uma planta é o modelo visto de cima, e um corte é o modelo visto de lado com uma parte removida**.

### Escala

No desenho, o papel impõe a escala (aula 3). **No modelo, não existe escala**: a casa é modelada em **tamanho real** (1:1), em metros ou milímetros, e a escala só entra quando você gera uma prancha para impressão ("esta vista sai em 1:50 numa folha A2"). Essa é a principal mudança de hábito. Regra prática: **nunca modele "na escala do desenho"**. Modele em unidades reais, senão a escala e as cotas geradas ficam erradas.

### Cotas

No desenho, uma cota é um número **escrito** por alguém. No modelo, é uma **medição da geometria**: os programas medem a distância entre dois pontos. Em BIM, a cota escrita na prancha pode ficar **associada** à geometria (se a parede muda de lugar, o valor da cota muda junto), o que elimina o erro de cota desatualizada. A regra de a cota escrita valer mais que a medição gráfica (aula 3) continua verdadeira no desenho de obra, mas o modelo evita a divergência na origem.

### Níveis (eixo z)

As **cotas de nível** (N.A. e N.O., aula 3) viram **planos horizontais de referência** (chamados "níveis" ou "pavimentos") aos quais paredes, lajes e portas se referem. Uma boa modelagem define os níveis primeiro (piso térreo +0,00, forro, cobertura, terreno) e ancora tudo neles. A distinção entre nível em osso e acabado reaparece na **composição do piso**: em BIM, um piso é um objeto de camadas (laje estrutural, contrapiso, argamassa, revestimento), e o nível pode ser referido ao topo da estrutura ou ao topo do acabamento. Em modelagem geométrica simples, você precisa decidir onde fica o "nível zero" (topo do piso acabado, por exemplo) e ser consistente.

### Paredes: espessura e linha de referência

A parede na planta é uma faixa com espessura (aula 5). No modelo, é um **volume** ou um **objeto parede** com espessura e altura. Cuidado com a linha de referência: se você desenha a parede "pelo eixo", metade da espessura fica de cada lado; "pela face externa", toda a espessura fica para dentro. Essa escolha muda as medidas internas dos ambientes. É o mesmo problema de cotar de eixo a eixo ou de face a face (aula 3), agora dentro do software. Programas BIM têm uma opção de linha de localização da parede; em modelagem geométrica, isso é feito pela sua escolha ao desenhar.

### Aberturas: portas e janelas

O quadro de esquadrias (P1, J1, aula 4) vira, em BIM, uma **tabela gerada automaticamente** a partir dos objetos porta e janela do modelo. Cada objeto tem largura, altura, **altura de peitoril** e tipo (as mesmas colunas da tabela da aula 8). Na modelagem geométrica, você cria a abertura na parede e coloca a esquadria por conta própria, e o quadro é feito à mão. Nos dois casos, os dados que você lê no projeto (largura, altura, peitoril) são exatamente os parâmetros que você digita.

### Cortes e fachadas

Em modelagem, um **plano de corte** (*section plane*) faz o papel do plano secante da aula 2: você posiciona o plano, escolhe o sentido do olhar e o programa mostra o modelo seccionado. Uma **fachada** é uma vista de câmera ortogonal sem perspectiva, em direção horizontal. Em BIM, essas vistas são objetos do projeto: você cria "corte AA" com uma linha na planta e o programa gera o desenho, mantendo a marcação de corte automática (aula 4).

### A altura de corte de 1,50 m

Em programas BIM, a planta baixa é uma **vista configurável** em que você define a altura do plano de corte (nos programas, o nome dessa configuração varia: por exemplo, "view range" no Revit e "cut plane" no Archicad; os detalhes ficam para o módulo 11). O que você aprendeu na aula 5 vira uma decisão de configuração: a 1,50 m (ou 1,20 m), você vê as janelas cortadas; a 1,80 m, a janela alta do banheiro (aula 8) também aparece cortada. Programas mais simples geram a planta como vista de cima do modelo sem o teto, ou permitem esconder o telhado, e o corte fica menos controlável.

### Linhas e hachuras

Espessuras de linha (aula 4) viram **configurações de estilo de linha por categoria ou por material**: elementos cortados com traço grosso, elementos em projeção com traço fino, beirais e o que está acima do plano com linha tracejada, hachura por material cortado. Em BIM, isso é automático. Em SketchUp e Blender, exige um passo de ajuste ou de exportação para outro programa de documentação. Você não precisa saber como agora; precisa saber o **objetivo**: o resultado deve respeitar o vocabulário de linhas que você aprendeu.

## Duas formas de construir o modelo de uma casa

### Rota A: começar pela planta 2D

O caminho mais comum de iniciante: se você já tem uma planta (feita por um arquiteto, uma imagem ou PDF), você a coloca de fundo no programa, **calibra a escala** e traça as paredes por cima, depois "levanta" o volume (dá altura). É o que os programas de casa (Sweet Home 3D, módulo 9) e também os de BIM permitem.

**Calibrar a escala de uma planta importada** (mecanismo, a aula 3 aplicada):

1. Ache uma medida **conhecida** na planta (uma cota escrita).
2. Meça essa distância no programa (no tamanho em que a imagem entrou).
3. Calcule o fator: **fator = medida real / medida no programa**.
4. Aplique o fator à imagem (a maioria dos programas tem "definir escala" ou "calibrar" que faz isso a partir de dois pontos e do valor real).

Exemplo: uma parede está cotada 8,00 m. No programa, a imagem entrou e a parede mede 3,20 unidades. Fator = 8,00 / 3,20 = 2,5, ou seja, a imagem precisa ser ampliada 2,5 vezes. Confira uma segunda cota (por exemplo, o vão de porta de 0,90 m) para ver se a planta não está distorcida. Se a planta veio de foto ou de PDF impresso "ajustado à página", ela pode estar deformada, e a conferência denuncia isso (a razão da regra da aula 3: nunca confie na escala do arquivo, só nas cotas).

### Rota B: começar pelo 3D

Você modela volumes primeiro (o bloco da casa, o telhado) e só depois extrai plantas e cortes. É comum em SketchUp e Blender, em estudos de forma. A vantagem é explorar o volume rapidamente; o risco é chegar a um modelo bonito em que **as cotas não fecham** (paredes com espessuras aleatórias, janelas em alturas ao acaso). Boa prática: **dar dimensões reais desde o começo** (o que exige entender ergonomia e módulos, dos módulos 1 e 4).

## Receita: a casa da aula 8 virando modelo

Para ver a correspondência concretamente, esta é a sequência com que se modelaria a casa de exemplo (a mesma ordem vale, com variações de interface, em qualquer programa; os passos e os números vêm dos desenhos lidos na aula 8):

| Passo | Ação no modelo | Fonte no projeto |
|---|---|---|
| 1 | Definir unidade em metros (ou milímetros) e escala 1:1 | Cotas em metros |
| 2 | Criar o terreno 10,00 x 25,00 m | Implantação |
| 3 | Definir os níveis: terreno da frente -0,30; varanda -0,05; piso +0,00; forro +2,70; topo de parede +2,90; cumeeira +4,10 | Cortes, implantação |
| 4 | Posicionar o contorno da casa 8,00 x 12,00 m, recuado 5,00 m da frente e 1,00 m das laterais | Implantação, planta baixa |
| 5 | Erguer as paredes externas até o topo de parede (+2,90) com a espessura definida | Planta, cortes |
| 6 | Traçar as paredes internas conforme as posições dos ambientes (corredor a y = 7,00 a 8,00; divisão sala e cozinha em x = 5,00; divisões dos quartos em x = 3,00 e x = 5,00) | Planta baixa |
| 7 | Abrir e posicionar as esquadrias com largura, altura e peitoril do quadro (por exemplo, J3 a 1,10 m do piso, largura 1,50 m em x 0,75 a 2,25) | Quadro de esquadrias, planta |
| 8 | Modelar a laje/forro a +2,70 e o telhado de duas águas: cumeeira em x = 4,00 m a +4,10, inclinação 30% e beirais de 0,60 m nas laterais | Cortes, cobertura |
| 9 | Aplicar materiais e acabamentos | Quadro de acabamentos (módulo 13) |
| 10 | **Verificar por vistas**: gerar planta, cortes e fachadas do modelo e comparar com o projeto (mesmas medidas, mesmas posições) | Aula 8, etapa 9 |

O passo 10 fecha o ciclo: **o modelo é aprovado quando os desenhos que ele gera coincidem com o projeto**. A leitura de projeto (aula 8) serve, portanto, de teste de qualidade da modelagem.

## O que o 3D acrescenta e o que não substitui

| O 3D acrescenta | O 3D não substitui |
|---|---|
| Consistência entre vistas (mesma geometria) | A **linguagem** do desenho técnico: normas, símbolos, carimbo, cotas nas pranchas |
| Visualização em perspectiva, percurso, sombras e luz (módulo 13) | A **leitura crítica** do projeto: se você não sabe ler uma planta, não reconhece erro do modelo |
| Em BIM, quantitativos e quadros automáticos | O **projeto para aprovação e execução**, que exige responsável técnico habilitado |
| Teste de solução antes de gastar | A **especificação** (materiais, detalhes construtivos), que precisa ser dada por quem projeta |

**Aviso (limite entre hobby e projeto profissional):** modelar a própria casa em 3D é uma ótima forma de entender e de testar ideias, e este curso é para isso. Um modelo 3D **não é um projeto legal nem executivo**. Para aprovar na prefeitura e para construir, é exigido, no Brasil, projeto assinado por profissional habilitado (arquiteto e urbanista pelo CAU, ou engenheiro pelo CREA), com Registro ou Anotação de Responsabilidade Técnica (RRT ou ART); as exigências variam por município (módulo 6). Use seu modelo como material para conversar com esse profissional.

## Resumo

- Um modelo 3D guarda a casa uma vez, em coordenadas (x, y, z), e gera planta, corte e fachada como vistas pelo mecanismo da aula 2; o desenho 2D guarda apenas as vistas, e a consistência depende do projetista.
- No modelo não existe escala: modele em tamanho real (1:1), e a escala só aparece na prancha gerada. Cotas são medições da geometria; em BIM, ficam associadas a ela.
- Níveis do desenho viram planos de referência no eixo z; espessura de parede exige decidir a linha de referência (eixo ou face); o quadro de esquadrias corresponde às propriedades de portas e janelas.
- A altura de corte de 1,50 m vira uma configuração da vista de planta; linhas e hachuras viram estilos por categoria ou material.
- Ao importar uma planta como fundo, calibre a escala com uma cota conhecida (fator = real / medido) e confira com uma segunda cota.
- O modelo é aprovado quando as vistas que ele gera coincidem com o projeto (aula 8, etapa 9). Um modelo não substitui o projeto legal, assinado por profissional habilitado.

[Voltar ao módulo](./README.md), ou siga para o [Módulo 4: Sistemas Construtivos e Estrutura](../04%20-%20Sistemas%20Construtivos%20e%20Estrutura/README.md).
