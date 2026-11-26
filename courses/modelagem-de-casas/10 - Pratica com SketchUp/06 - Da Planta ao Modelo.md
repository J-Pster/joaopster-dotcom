[Voltar ao módulo](./README.md)

# Aula 6: Da planta ao modelo

*Pergunta que esta aula responde: como transformo uma planta 2D (desenho técnico, módulo 03) em paredes, aberturas, lajes e telhado 3D, mantendo as medidas reais?*

## Por que partir da planta

A planta baixa já contém as decisões de projeto que definem a posição de tudo: onde ficam as paredes, quanto medem os cômodos, onde estão as portas e janelas. Modelar "de cabeça" produz uma casa que não bate com o projeto. Modelar sobre a planta faz o modelo 3D herdar as medidas, e a altura (o que a planta não mostra) vem dos cortes e elevações e das especificações (pé-direito, peitoril, altura de portas, módulo 03).

O método tem cinco passos, e a ordem importa:

1. Colocar a planta no SketchUp **na escala certa**.
2. Levantar as **paredes** (uma vez só, todas juntas).
3. Abrir as **portas e janelas**.
4. Modelar as **lajes**.
5. Modelar o **telhado**.

## Passo 1: colocar a planta no SketchUp

Você tem três caminhos, conforme o que você tem e o plano do SketchUp (aula 2).

### Caminho A: desenhar direto a partir de medidas (qualquer plano)

Se você tem a planta em papel ou em PDF, meça os cômodos e digite as medidas (aula 4). É o caminho mais preciso porque não depende de escala de imagem. O exercício da aula 9 usa esse caminho.

### Caminho B: importar a planta como imagem (JPG ou PNG, funciona no Free)

A ajuda oficial de imagens ([Importing and Exporting Image Files](https://help.sketchup.com/en/sketchup/importing-and-exporting-image-files)) descreve as formas de trazer uma imagem: como **sobreposição para traçar** plantas e desenhos técnicos, como material aplicado a faces, como foto 2D, ou via Photo Match. No SketchUp for Web, a importação fica no menu principal (Import), com origem "My Device" ou "Trimble Connect"; imagem importada vira imagem ou material.

Procedimento e cuidados:

1. Prepare a imagem: nítida, recortada só na planta, em JPG ou PNG (o Free só importa esses formatos).
2. Importe e coloque no chão como imagem, com o modelo ainda vazio.
3. **Escale**: use a fita métrica sobre uma dimensão conhecida da planta (por exemplo, a largura de um cômodo), digite o valor real e confirme o redimensionamento. Por isso o modelo deve conter só a imagem nesse momento: a redimensão afeta o contexto inteiro.
4. **Confira** com uma segunda medida (uma porta de 0,80 m, por exemplo). Se der diferente, a imagem tem distorção ou você mediu errado.
5. Agrupe a imagem e **bloqueie** o grupo (menu de contexto; confira o nome exato) para não movê-la sem querer.
6. Trace por cima com Line e Rectangle. A imagem só serve de gabarito; a geometria é a que você desenha.

Limite: uma foto de planta pode ter perspectiva e distorção. Só confie em plantas escaneadas ou exportadas em PDF/imagem.

### Caminho C: importar a planta em DWG (Go, Pro ou Studio)

Se você tem a planta em CAD (DWG ou DXF), a importação traz as linhas prontas. Segundo a [ajuda oficial](https://help.sketchup.com/en/sketchup/importing-and-exporting-cad-files) (verificado em setembro de 2026):

**Prepare o arquivo no CAD antes:**

- Explodir elementos não suportados e apagar layers inúteis (evita tags vazias).
- Posicionar a geometria **perto da origem** (senão há problemas de desempenho).
- Manter o arquivo abaixo de cerca de 15 MB.
- Salvar em versão recente do formato.
- **Não importam:** objetos proprietários ADT/ARX, dimensões (cotas), textos e XREFs. As cotas e os textos da planta ficam de fora; anote o que precisar.

**Importe:**

1. File > Import (na web, menu principal > Import). Escolha o arquivo e o tipo "AutoCAD Files".
2. Em **Options**, ajuste: preservar a origem do desenho, importar layers como grupos, **achatar as linhas** (Import Linework Flattened: força Z = 0 e elimina diferenças de altura), mesclar faces coplanares, orientar faces, importar materiais.
3. Escolha a **unidade** do arquivo CAD. **Este é o passo que mais causa erro.** A opção "Model Units" tenta usar a unidade gravada no arquivo; se o SketchUp não a identificar, assume 1 unidade de CAD = 1 polegada. Se o CAD foi desenhado em metros ou centímetros, indique a unidade certa. Uma planta importada em polegadas parece minúscula ou gigante.
4. Confira com a fita métrica em uma dimensão conhecida.

Na versão web, a ajuda observa que um arquivo CAD importado vira um **componente**. Selecione, agrupe ou trabalhe dentro dele e bloqueie.

**Aviso:** uma planta DWG pode trazer geometria suja (linhas duplicadas, sobrepostas, com pequenos desníveis). Isso atrapalha a criação de faces. Achatar as linhas e mesclar faces coplanares ajuda; na aula 10 há mais.

Vídeos de apoio (português): [Curso SketchUP EaD - Aula: Importação da planta baixa do CAD, Reconhecimento das faces](https://www.youtube.com/watch?v=j6eLOrDHQsU) (torchtecnologias), [Como exportar DWG para o Sketchup (Importar planta do Autocad)](https://www.youtube.com/watch?v=GC6N0KeQ6F4) (Professor Nisenbaum), e para plantas do zero: [Como fazer Planta Baixa no SketchUp (Aula prática com Material de Apoio)](https://www.youtube.com/watch?v=A3nWO98cNGA) (Expert Cursos) e [Como Fazer Planta Baixa no Sketchup Do Zero Passo A Passo](https://www.youtube.com/watch?v=MU30FQwWGQk) (Arnaldo Design).

## Passo 2: levantar as paredes

**Ideia central:** uma parede em planta é o espaço entre duas linhas paralelas (as faces interna e externa). No SketchUp, esse espaço é uma face. Se você criar uma **única face** que cobre todas as paredes (perímetro e divisórias), um único Push/Pull dá a todas a mesma altura de uma vez.

Como obter essa face:

- **Com o contorno externo desenhado:** desenhe (ou trace) o contorno externo da casa. Use **Offset** para o interior: clique na face e digite a espessura (por exemplo `15cm`). A faixa entre as linhas é a parede externa.
- **Com divisórias:** desenhe os cômodos (retângulos das áreas livres, com as medidas internas da planta). O que sobra entre os retângulos, dentro do contorno externo, são as faixas das paredes, conectadas em uma face só.
- **Guias:** marque com a fita métrica as posições das faces das paredes (a partir da origem) e clique nas interseções. Isso garante que as faixas tenham a espessura exata (aula 4).

Depois:

1. **Apague as faces dos cômodos** (piso), deixando só a face das paredes. Um piso separado, em outro grupo, será feito depois. Se você deixar a face do piso no mesmo grupo, ao empurrar as paredes a face do piso fica no fundo; funciona, mas dificulta editar.
2. **Push/Pull** na face das paredes até o pé-direito (por exemplo `2.7m`).
3. Selecione tudo e faça **Make Group**; nomeie "Paredes".

Vídeo de apoio: [Como fazer paredes e vãos de portas e janelas no sketchup](https://www.youtube.com/watch?v=yhk6eY5ADq0) (Amanda Goulart).

## Passo 3: abrir portas e janelas

O que a planta dá: posição e largura. O que ela não dá: alturas. Vêm dos cortes e da especificação (peitoril, verga, altura da porta; módulo 03).

Método por medidas:

1. Abra o grupo Paredes (duplo clique).
2. Em uma face da parede, desenhe um **retângulo** com a largura e altura reais do vão (`0.8m,2.1m` para uma porta). Posicione com guias (aula 4): por exemplo, para uma janela de 1,20 x 1,20 m com peitoril de 1,00 m, guias a 1,00 m e 2,20 m de altura.
3. **Push/Pull** no retângulo até a face oposta da parede. Regra da ajuda: a face empurrada precisa ficar **paralela** à face oposta, e se houver linhas dividindo a face oposta, apague-as antes; senão o furo não abre. Se o vão não abrir sozinho, empurre o retângulo pela espessura exata da parede (`15cm`), o que cria as faces laterais do vão, e depois apague (Delete) a face que ficou no fundo do recorte.
4. Para vãos repetidos com a mesma espessura de parede (`15cm`), o duplo clique do Push/Pull repete a última distância.

Depois de abrir o vão, você pode:

- Deixar como vão vazio (para o exercício).
- Modelar uma **janela** (caixilho, vidro, peitoril) como componente e inserir no vão (aula 5, Cut Opening) ou baixar uma do 3D Warehouse (aula 7).

## Passo 4: lajes

- **Piso (contrapiso/radier):** desenhe o retângulo da projeção da casa e **empurre para baixo** a espessura (por exemplo, `10cm`). Agrupe como "Piso".
- **Laje de forro ou de cobertura:** retângulo sobre a face superior das paredes, Push/Pull para cima, a espessura desejada. Agrupe.
- **Aviso profissional:** as espessuras usadas aqui (10 cm) são de exercício. A espessura real de laje, viga, pilar e fundação vem de projeto **estrutural** feito por profissional habilitado (módulo 04). O modelo 3D de hobby serve para visualizar, não para construir.

## Passo 5: telhado

**Por que é a parte mais engenhosa:** o telhado inclina, e a inclinação é definida por uma relação entre altura (h) e distância horizontal (d): inclinação em porcentagem = h / d x 100. Modelar o telhado é converter essa inclinação em faces inclinadas.

**Exemplo numérico resolvido.** Casa de 9,00 x 7,00 m de planta, telhado de duas águas com beiral de 0,50 m nos quatro lados. A cumeeira ficará ao longo do lado de 9,00 m (dividindo o vão de 7,00 m). O beiral aumenta o vão horizontal para 7,00 + 0,50 + 0,50 = 8,00 m; cada água cobre a metade: d = 4,00 m. Para inclinação de 30%: h = 4,00 x 0,30 = 1,20 m de altura entre a linha do beiral e a cumeeira. A inclinação mínima depende do tipo de telha (módulo 04).

Duas técnicas comuns:

### Técnica 1: perfil triangular extrudado (duas águas com empena)

1. No plano vertical da fachada lateral (ao nível do topo das paredes), desenhe o triângulo: base de 8,00 m (com beirais), ponto médio da base, e uma linha vertical para cima de 1,20 m (trave no azul e digite). Feche o triângulo com duas linhas.
2. **Push/Pull** na face triangular pelo comprimento da casa mais os beirais (por exemplo, `10m`, se houver beiral de 0,50 m nas duas extremidades). Resultado: um volume de telhado em forma de prisma triangular.
3. Agrupe como "Telhado". Para dar espessura de telha e forro, use o **Offset** no triângulo antes de extrudar, gerando um triângulo interno, ou trate como volume para o estudo de massa.

### Técnica 2: elevar a cumeeira com o Move (duas ou quatro águas)

1. Desenhe o contorno do telhado (planta da casa com beiral) como uma face.
2. Desenhe a linha da **cumeeira** de ponto médio a ponto médio dos lados menores (use a inferência de ponto médio).
3. Selecione a linha da cumeeira e use o **Move**, travando no azul e digitando a altura (`1.2m`). As faces adjacentes se inclinam. Se quiser telhado de **quatro águas**, desenhe antes as linhas de ligação (os espigões) do canto ao ponto extremo da cumeeira: quando as inclinações das águas são iguais e o telhado é retangular, os espigões saem a 45 graus em planta. Depois mova a cumeeira.
4. Dê espessura com Push/Pull ou Offset e agrupe.

Vídeo de apoio: [Tutorial: Modelando Telhado no Sketchup](https://www.youtube.com/watch?v=9_eUo3VlZ2o) (Guilherme Andrade). O vídeo é de 2017; a interface pode ter mudado.

## Escada (se a sua casa tiver)

A casa do exercício é térrea. Se a sua tiver escada, os cálculos vêm antes do desenho:

- Altura total a vencer: H. Altura de cada degrau (espelho): e. Número de espelhos: N = H / e.
- Comprimento de cada piso (pisada): p. Uma regra prática de conforto (fórmula de Blondel) relaciona os dois: 2e + p em torno de 63 a 64 cm. **Valores exatos e limites de norma (ABNT) devem ser conferidos** com o projetista e a norma aplicável (módulo 04).
- Exemplo: H = 2,80 m, e = 17,5 cm: N = 16 espelhos e 15 pisadas. Com p = 28 cm, a projeção horizontal é 15 x 0,28 = 4,20 m. Verificação: 2 x 17,5 + 28 = 63 cm.

No SketchUp: desenhe o perfil lateral da escada como polilinha de degraus (com as medidas digitadas) e use o Push/Pull para dar a largura, ou modele um degrau como componente e copie com `15x` no Move (aula 3). Vídeo: [Como fazer escada no sketchup: da modelagem ao detalhamento](https://www.youtube.com/watch?v=bFzf9t2Y9BM) (Suenny Oliveira, MSO Projetos). Qualidade não avaliada.

## Conferir antes de seguir

- Faces limpas: nenhuma face azul (invertida) visível de fora (aula 10).
- Paredes, piso, telhado em grupos separados.
- Medidas reais conferidas com a fita métrica (por exemplo, uma parede de 8,70 m livre).
- Guias apagadas ou ocultas.

## Resumo

- A planta fornece posição; alturas vêm de cortes e especificações. O método é: planta na escala certa, paredes, vãos, lajes, telhado.
- Planta como imagem (JPG/PNG) funciona no Free; DWG exige Go, Pro ou Studio e a unidade certa no import (padrão 1 unidade = 1 polegada se não identificada).
- Uma única face de paredes empurrada uma vez garante altura uniforme; Offset dá espessura; vãos são retângulos empurrados até a face oposta (que precisa estar limpa).
- Telhado: perfil triangular extrudado ou cumeeira elevada com Move; a inclinação é h/d x 100.
- Espessuras e dimensões estruturais do exercício são ilustrativas; projeto real exige profissional habilitado.

## Para aprofundar

- [ ] [Como fazer paredes e vãos de portas e janelas no sketchup](https://www.youtube.com/watch?v=yhk6eY5ADq0) (Amanda Goulart): o primeiro passo da casa.
- [ ] [Como Fazer Planta Baixa no Sketchup Do Zero Passo A Passo](https://www.youtube.com/watch?v=MU30FQwWGQk) (Arnaldo Design): planta baixa do zero.
- [ ] [Como fazer Planta Baixa no SketchUp (Aula prática com Material de Apoio)](https://www.youtube.com/watch?v=A3nWO98cNGA) (Expert Cursos): aula prática com material de apoio.
- [ ] [Curso SketchUP EaD - Aula: Importação da planta baixa do CAD, Reconhecimento das faces](https://www.youtube.com/watch?v=j6eLOrDHQsU) (torchtecnologias): importação de CAD.
- [ ] [Como exportar DWG para o Sketchup (Importar planta do Autocad)](https://www.youtube.com/watch?v=GC6N0KeQ6F4) (Professor Nisenbaum): DWG para o SketchUp.
- [ ] [Tutorial: Modelando Telhado no Sketchup](https://www.youtube.com/watch?v=9_eUo3VlZ2o) (Guilherme Andrade): telhado sem plug-ins; de 2017.
- [ ] [Como fazer escada no sketchup: da modelagem ao detalhamento](https://www.youtube.com/watch?v=bFzf9t2Y9BM) (Suenny Oliveira, MSO Projetos): escada; qualidade não avaliada.
- [ ] [Como modelar uma Casa no SketchUp - Aula 01](https://www.youtube.com/watch?v=ZJgA53f_O-Q) (Raquel Ynaliv - Arquitetura): primeira aula de uma série de modelagem de casa; não confirmei se há série completa.
- [ ] Documentação oficial: [Importing and Exporting CAD Files](https://help.sketchup.com/en/sketchup/importing-and-exporting-cad-files), [Importing and Exporting Image Files](https://help.sketchup.com/en/sketchup/importing-and-exporting-image-files), [Offsetting a Line from Existing Geometry](https://help.sketchup.com/en/sketchup/offsetting-line-existing-geometry).

Nota de lacuna: não encontrei um único vídeo que una planta importada, paredes, esquadrias, telhado e escada com foco no porquê; por isso o texto costura as etapas.

[Próxima aula: Materiais, 3D Warehouse, cenas e cortes](./07%20-%20Materiais%20Warehouse%20Cenas%20e%20Cortes.md)
