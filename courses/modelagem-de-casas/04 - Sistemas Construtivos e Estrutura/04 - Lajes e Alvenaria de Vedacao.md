[Voltar ao módulo](./README.md)

# Aula 4: Lajes e alvenaria de vedação

*Pergunta que esta aula responde: que tipos de laje existem, por que cada um existe, e o que é a parede de vedação que preenche o esqueleto de concreto?*

> **Aviso.** Escolha e dimensionamento de laje e verificação de parede portante ou não são do engenheiro com ART. Aqui você aprende a diferença entre as soluções e as espessuras típicas, para compatibilizar o modelo 3D.

## Lajes: o problema que elas resolvem

A aula 3 mostrou que laje é uma peça plana que trabalha em flexão. O problema de engenharia é: **concreto embaixo do eixo neutro trabalha pouco**, porque na flexão a parte de baixo, tracionada, só serve para envolver o aço. Em uma laje maciça, todo o concreto abaixo da linha neutra é peso morto que serve só de proteção e cobrimento. Cada tipo de laje é uma resposta diferente para a pergunta: **como economizar concreto e peso onde ele não trabalha, ou como acelerar a obra?**

### Laje maciça

Uma placa de **concreto armado com espessura constante**, apoiada nas vigas em todo o seu perímetro. Espessuras usuais em casas: **de 8 a 12 cm** (a NBR 6118 fixa mínimos: 7 cm para laje de cobertura não em balanço, 8 cm para piso não em balanço, 10 cm para laje em balanço, e mais para carga de veículos). O engenheiro escolhe pelo vão (aula 7 traz a referência vão menor / 40).

- **Vantagens**: simples de calcular, rígida, trabalha nas duas direções, boa para áreas molhadas e para lajes de cobertura impermeabilizadas, comporta cargas maiores e furos para tubulações com menos restrições.
- **Limitações**: pesada (10 cm pesam 2,5 kN/m²), exige muita forma e escoramento (as fôrmas de madeira sustentam o concreto fresco até endurecer), mais concreto e mais aço, obra mais lenta.

### Laje pré-moldada treliçada (vigotas)

Uma laje formada por **vigotas** (pequenas vigas pré-fabricadas com uma **treliça de aço** que sai da parte de cima e serve de armadura) colocadas lado a lado, com **elementos de enchimento** entre elas: **lajotas cerâmicas** (tijolinho furado) ou **blocos de EPS** (isopor). Sobre tudo isso lança-se uma **capa de concreto** de poucos centímetros, no local, que solidariza o conjunto.

Por que funciona: as vigotas são pequenas "vigas" que vencem o vão numa direção (laje **unidirecional**). O enchimento ocupa o espaço que numa laje maciça seria concreto sem função, e a capa de concreto forma a mesa comprimida no topo. Ou seja, o concreto fica **onde a compressão acontece** (a capa) e nas nervuras (onde estão as vigotas), e o vazio fica na região que trabalha pouco.

- **Espessura total**: dada como "enchimento + capa". Exemplos em composições de obra públicas (SINAPI): 16 + 4 = 20 cm, 20 + 5 = 25 cm (bloco de EPS). Fontes comerciais citam espessura total usual de 12 a 30 cm, conforme vão e carga. Ou seja, **a laje treliçada é mais espessa que a maciça**, porque o vazio mais leve compensa em peso.
- **Vantagens**: leve, rápida de montar, pouco escoramento e pouca forma, boa para os vãos de porte residencial (o vão máximo depende do fabricante e da carga, e fontes comerciais divulgam números diferentes, por isso não fixo um valor aqui), EPS melhora isolamento térmico e acústico.
- **Limitações**: trabalha basicamente em **uma direção** (a das vigotas), então a direção importa na planta e no modelo. A qualidade da capa de concreto e da armadura de distribuição importa muito. Furos e rebaixos grandes exigem cuidado, e a impermeabilização de laje descoberta é mais sensível.

É a **laje mais comum em casas brasileiras** de padrão econômico e médio.

### Laje nervurada

Uma laje com **nervuras** (pequenas vigas) em uma ou duas direções, e entre as nervuras vazios preenchidos por **cubetas** (fôrmas plásticas ou de outro material, que ficam ou saem) ou blocos de enchimento. Por cima, uma mesa de concreto de poucos centímetros. É o mesmo princípio da treliçada, mas moldada no local com fôrmas, geralmente em **duas direções**, o que permite **vãos maiores** (garagens, salões) com menos peso que uma maciça. Custa mais que a treliçada em vãos pequenos e compensa quando o vão passa de alguns metros. Em casas aparece em vãos grandes ou onde o teto ficará aparente (visual de "caixotes").

### Laje painel (pré-laje)

Chamada de **laje painel** ou pré-laje, é uma placa **pré-fabricada de concreto** (às vezes com treliça, às vezes protendida, nas variações **alveolar**, com furos longitudinais que a alivia) que chega à obra pronta, é içada e recebe uma capa de concreto no local. A vantagem é a **rapidez** e quase nenhuma fôrma. A limitação é a **logística** (caminhão com guindaste, acesso, transporte) e a menor flexibilidade: cortes e furos devem ser previstos na fábrica. Em casa térrea pequena é rara, aparece mais em sobrados feitos em série ou obras maiores. (Os termos "pré-laje", "painel treliçado" e "painel alveolar" variam entre fabricantes, então confirme o que o fornecedor entende por painel.)

### Comparativo

| Laje | Como trabalha | Espessura usual em casa | Peso | Velocidade | Onde se usa |
|---|---|---|---|---|---|
| Maciça | Uma ou duas direções | 8 a 12 cm | Alto | Baixa | Áreas molhadas, coberturas planas, balanços, cargas maiores |
| Treliçada (EPS ou cerâmica) | Uma direção | 12 a 25 cm totais, conforme vão | Baixo a médio | Alta | Pisos e forros de casas em geral |
| Nervurada | Uma ou duas direções | 20 a 40 cm ou mais (vão grande) | Médio | Média | Vãos grandes, teto aparente |
| Painel | Normalmente uma direção | Varia com o fabricante | Baixo a médio | Muito alta | Obras com logística e repetição |

Valores são ordens de grandeza reunidas de fontes técnicas e comerciais. O fabricante e o engenheiro fixam os números.

### Sistemas de laje que não são concreto

Em steel frame e wood frame o **piso** é feito de perfis (vigas de aço ou de madeira, chamadas de **vigas de piso**) recobertos por placas (OSB, cimentícia). Sobre elas vai o contrapiso leve. É uma **laje seca**, mais leve e mais fina, com menos inércia térmica e um cuidado especial com ruído de impacto (norma de desempenho, NBR 15575).

## Alvenaria de vedação

**Alvenaria de vedação** é a parede que **fecha os vãos** entre pilares e vigas (ou entre lajes) e **não tem função estrutural**: só suporta o próprio peso, a chuva e o vento que a atingem, e pequenas cargas de uso (armários, quadros). Sua função é **separar** ambientes (vedar) e proteger: do **frio, do calor, do ruído, do fogo, da chuva, da vista**. Aqui se liga ao módulo 2: a parede é a "pele" que dá conforto.

### Por que existe separada da estrutura

Se pilares e vigas suportam a casa, as paredes podem ser feitas do material mais barato e leve que atenda aos requisitos de conforto. É por isso que a parede de vedação é feita de bloco furado (mais leve, isola melhor do que o maciço), e por isso é **removível ou realocável** sem risco (com as ressalvas abaixo).

### Materiais usuais no Brasil

- **Bloco cerâmico de vedação** (o "tijolo furado", também chamado tijolo baiano ou de oito furos): fabricado com argila queimada, com furos horizontais que aliviam o peso e retêm ar para isolar. Regido pela **ABNT NBR 15270**. Larguras usuais: **9 cm, 11,5 cm, 14 cm e 19 cm**, com altura 19 cm e comprimentos de 19, 29 ou 39 cm (as dimensões variam por fabricante e região). O bloco assentado "de pé" (furos horizontais) ou "de lado" gera espessuras diferentes de parede.
- **Bloco de concreto de vedação**: mais pesado e resistente, larguras e alturas comparáveis (por exemplo, 9, 14 ou 19 cm de largura e 19 cm de altura, com 39 cm de comprimento), com mais inércia térmica e ruído menor, usado muito em muros e obras de porte.
- **Tijolo maciço** (o tijolo de barro): pequeno (cerca de 5 x 10 x 20 cm, ordem de grandeza), pesado, dá parede fina e fácil de ornamentar (aparente), mas pesa, isola pouco pelo peso e gasta mais argamassa.
- **Bloco de concreto celular autoclavado** (do tipo Sical/Siporex): leve e bom isolante, cortável, com espessuras de cerca de 10 a 20 cm. Tem limitação em locais úmidos e exige argamassa colante fina.
- **Drywall** (gesso acartonado): placas de gesso sobre estrutura de aço, para paredes internas leves. Não resiste bem à umidade (versões resistentes à umidade existem para áreas molhadas) e não suporta cargas pesadas sem reforço.

### Como a parede se monta

1. **Marcação**: primeira fiada assentada sobre a viga baldrame ou sobre a laje (com impermeabilização na base, para não puxar umidade por capilaridade).
2. **Assentamento** com **argamassa** (mistura de cimento, cal e areia), juntas de cerca de 1 cm, **amarrando** as fiadas alternadas (juntas desencontradas, como um tijolo de Lego).
3. **Verga e contraverga** nas aberturas (aula 3).
4. **Encunhamento**: a última fiada, contra a viga ou laje de cima, é fechada com argamassa expansiva ou cunha de bloco inclinado, deixando a parede **sem carga** da estrutura acima, mas travada.
5. **Instalações** (elétrica, hidráulica) por rasgos cortados na parede e depois preenchidos (tema do módulo 5).
6. **Revestimento**: **chapisco** (camada áspera para aderir), **emboço** ou **massa grossa**, **reboco** ou **massa fina** (camada final), depois **pintura** ou cerâmica. Cada lado costuma receber cerca de 1,5 a 2,5 cm de revestimento, o que engrossa a parede.

### Alvenaria de vedação não é "à prova de tudo"

A parede de vedação sofre **fissuras** quando o pórtico deforma (recalque, dilatação, flechas de laje). Por isso há juntas, telas de reforço nos encontros com a estrutura e detalhes de encunhamento. Não é parede estrutural, mas **não trate como algo que se pode retirar sem olhar**: pode haver carga de laje ou de parede superior descarregando sobre ela sem viga sob a parede (defeito de projeto), ou pilaretes escondidos, ou cintas. Antes de mexer, o engenheiro confirma.

## Como isso aparece na modelagem

- **Laje**: modele a espessura correta se ela aparece em corte, fachada ou escada. Treliçada com EPS: 16 a 20 cm totais é um valor razoável para casa. Maciça: 10 a 12 cm.
- **Parede de vedação**: o que você desenha em planta como "parede de 14" é normalmente o bloco de 9 ou de 14 cm **mais o revestimento nas duas faces** (aula 7 dá a soma). Modele a espessura **acabada**, e cuide para o pilar e a viga terem a mesma dimensão, senão surgem "dentes".
- Em BIM, as camadas de parede (bloco, chapisco, reboco, pintura) são definidas dentro do tipo de parede, uma característica que o módulo 11 mostra.

## Resumo

- Cada tipo de laje responde à pergunta de como tirar peso onde o concreto não trabalha. **Maciça** (8 a 12 cm, bidirecional, pesada), **treliçada** (vigotas mais EPS ou cerâmica mais capa, unidirecional, leve e rápida, 12 a 25 cm totais), **nervurada** (vãos grandes, duas direções), **painel** (pré-fabricada, muito rápida, exige logística).
- Em laje treliçada a **direção das vigotas** importa e a espessura total é maior que a da maciça.
- Alvenaria de vedação **veda, não sustenta**: proteção térmica, acústica, contra chuva e vento. Bloco cerâmico (NBR 15270) é o material mais comum, com larguras de 9, 11,5, 14 e 19 cm.
- A parede acabada soma o bloco mais 1,5 a 2,5 cm de revestimento por face. Vergas protegem as aberturas e o encunhamento trava a parede sem carregá-la.
- Nunca remova uma parede sem conferir com o engenheiro se ela recebe carga.

## Para aprofundar

Sem links de apoio nesta aula. Os vídeos pesquisados para lajes não puderam ser confirmados como neutros (muitos são de fabricantes de laje), então preferi deixar de fora a incluir material fraco.

[Próxima aula: Sistemas construtivos residenciais](./05%20-%20Sistemas%20Construtivos%20Residenciais.md)
