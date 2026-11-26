# Aula 2: Carta Solar, Orientação e Proteção Solar

[Voltar ao módulo](./README.md)

*Pergunta que esta aula responde: como saber se o sol vai entrar por uma janela em determinada data e hora, e como bloquear o sol que não queremos sem perder o que queremos?*

## Que problema a carta solar resolve

Na aula 1 você viu que a posição do sol depende de latitude, data e hora. Fazer essa conta para cada janela e cada estação é inviável. A **carta solar** (também chamada diagrama solar) condensa tudo em um desenho: a **projeção das trajetórias do sol ao longo do ano sobre um plano horizontal**, vista de cima, como se você olhasse para a abóbada do céu de dentro para fora e a achatasse num círculo. Cada latitude tem a sua carta.

Com ela você responde, em uma olhada: "em 21 de junho, às 15h, o sol está em que direção e a que altura?", e portanto se ele bate numa janela voltada para o oeste.

## Como ler a carta

Elementos de uma carta solar típica (o desenho varia um pouco entre fontes):

- **Círculo externo**: o horizonte. Nele estão as marcas de **azimute** (0 a 360 graus), com o norte no topo. O azimute é o ângulo horizontal a partir do norte (aula 1).
- **Círculos concêntricos**: a **altura solar**. O horizonte é 0 grau; o centro é 90 graus (zênite, sol a pino). Perto da borda o sol está baixo; perto do centro está alto.
- **Curvas em arco**: cada arco é a trajetória do sol num dia representativo (em geral os solstícios, os equinócios e às vezes o dia 21 de cada mês). Para o hemisfério sul, os arcos ficam inclinados para o lado norte da carta, porque o sol passa ao norte na maior parte do ano (aula 1). O arco de verão (dezembro) é o mais alto e fica mais perto do centro; o de inverno (junho) é o mais baixo, mais perto da borda.
- **Linhas transversais**: as horas do dia (hora solar). Onde a linha da hora cruza o arco do dia, está o sol naquele instante.

**Como ler um ponto**: encontre a curva da data, encontre a linha da hora, olhe onde elas se cruzam. Trace uma linha do centro até esse ponto e prolongue até a borda: o azimute está ali. A distância do ponto até o centro dá a altura (os círculos concêntricos).

**Exemplo**: na carta de uma cidade a 23 graus S, em 21 de junho às 15h, o ponto fica numa altura de cerca de 26 graus e num azimute em torno de 314 graus (a noroeste). Um sol baixo e vindo do noroeste: ele bate na fachada oeste e também na norte, em ângulo rasante. (Valores de leitura ilustrativos, não medidos numa carta oficial; use uma ferramenta para números exatos.)

Ferramentas gratuitas para gerar a carta:

- **Analysis SOL-AR** (LabEEE/UFSC): programa gratuito que gera a carta solar de qualquer latitude e permite estudar máscaras de sombra; também traz, para algumas cidades com dados, a rosa dos ventos e os intervalos de temperatura do ano. Está na lista de ferramentas do ProjetEEE, do Ministério de Minas e Energia.
- [Carta Solar no ProjetEEE](https://projeteee.mme.gov.br/grafico/carta-solar/): explicação e acesso ao SOL-AR.

## Orientação: o que cada fachada recebe

**Fachada** é a face externa de uma parede. Chame de **orientação** a direção para a qual ela olha. Resumo para o Brasil (hemisfério sul), em síntese e com a ressalva de que a latitude altera o quadro:

| Fachada | Sol que recebe | Problema ou vantagem |
|---|---|---|
| **Norte** | No inverno, sol baixo o dia todo. No verão, sol muito alto (ao sul do Trópico de Capricórnio) ou até passando pelo sul (no norte do país). | O sol alto do verão é fácil de barrar com beiral horizontal; o sol baixo do inverno passa por baixo dele. É a orientação mais **controlável**. |
| **Leste** | Sol da manhã, começando baixo, subindo. | O ar externo ainda está fresco. Sol baixo entra fundo, mas por poucas horas. |
| **Oeste** | Sol da tarde, baixo, se pondo. | Pior fachada em clima quente: o sol chega quando a temperatura do ar já está no pico e o sol baixo é difícil de barrar com beiral horizontal. |
| **Sul** | No inverno, nenhum sol direto (ao sul do trópico). No verão, sol rasante cedo e tarde. Em latitudes baixas, sol em várias épocas. | Luz uniforme e difusa (boa para trabalho); paredes mais frias e úmidas em clima frio. |

Notas de cuidado:

- Fachadas **nordeste** e **noroeste** misturam os comportamentos: o noroeste, por exemplo, pega o sol da tarde e é problemático como o oeste.
- Perto do equador (Manaus, Belém), o sol está sempre alto, a diferença entre norte e sul é pequena e o que mais pesa é o **telhado** e as fachadas leste e oeste.
- Ao sul do Trópico de Capricórnio, o sol de verão sempre passa ao norte: a regra "norte fácil de proteger" vale melhor.
- A decisão final depende do clima (aula 6). Em Curitiba, você quer o sol de inverno; em Belém, quase nenhum sol direto.

## Proteção solar: por que e como

**Proteção solar** (ou sombreamento) é qualquer elemento que impede a radiação solar direta de atingir uma superfície, principalmente vidros e paredes. A razão de ser: o vidro transparente deixa passar a maior parte da radiação solar (ordem de 85%, valor típico para vidro incolor simples, não confirmado com fonte normativa aqui), que se converte em calor dentro do ambiente e não sai com facilidade (é o **efeito estufa** de uma janela ao sol). Barrar o sol **antes** do vidro é muito mais eficiente que uma cortina interna: na cortina, a radiação já entrou e vira calor no ambiente.

Tipos de proteção:

- **Beiral** (a parte do telhado que avança além da parede) e **marquise**: plano horizontal. Barra sol alto.
- **Brise-soleil** (brise, do francês "quebra-sol"): conjunto de lâminas horizontais (bloqueia sol alto), verticais (bloqueia sol lateral, de leste e oeste) ou em grelha, fixas ou móveis.
- **Venezianas, persianas externas, folhas de correr** (treliças de madeira, muxarabis): controlam luz e permitem ventilar.
- **Vegetação**: árvores caducifólias (que perdem folhas no inverno) dão sombra no verão e deixam o sol passar no inverno; trepadeiras em pérgolas.
- **Vidros e películas** com fator solar baixo (proporção da radiação solar que efetivamente entra): reduzem o ganho, mas também podem escurecer o ambiente.

## Como dimensionar: ângulos de sombra

Para projetar um beiral ou brise, usam-se dois ângulos que descrevem o sol **em relação à parede** e não em relação ao norte:

- **Ângulo horizontal de sombra** (HSA): diferença de azimute entre o sol e a direção perpendicular à parede (a normal). Para uma parede voltada ao norte (normal em 0 graus), é o próprio azimute do sol, a menos do sinal.
- **Ângulo vertical de sombra** (VSA, ou ângulo de perfil): ângulo do sol visto de um corte perpendicular à parede. Relaciona-se com a altura solar h:

```
tan(VSA) = tan(h) / cos(HSA)
```

Quando o sol está exatamente de frente para a parede (HSA = 0), VSA = h. Quando está de lado, VSA fica maior que h: o sol parece "mais alto" visto de frente para a parede.

**Fórmula do beiral horizontal**: se o beiral projeta L metros para fora da parede e o sol tem ângulo vertical de sombra VSA, a sombra do beiral desce pela parede uma distância:

```
sombra = L x tan(VSA)
```

O beiral protege a janela por inteiro quando essa sombra alcança o peitoril (base da janela).

### Exemplo resolvido: beiral para uma janela ao norte em Belo Horizonte (latitude -19,9)

Dados (medidas hipotéticas de projeto): do fundo do beiral até o peitoril (base do vidro) há 1,8 m; do fundo do beiral até a verga (topo do vidro) há 0,6 m; a janela tem 1,2 m de altura.

Alturas do sol ao meio-dia solar em Belo Horizonte, pela fórmula da aula 1: 70,1 graus nos equinócios, 46,7 graus em junho, e 86,5 graus em dezembro (o sol passa levemente ao sul, então nesse dia a fachada norte praticamente não recebe sol direto ao meio-dia).

Meta: no inverno, deixar o sol entrar por inteiro; no verão, sombrear o vidro.

1. Inverno (junho, meio-dia, parede norte, HSA = 0, VSA = h = 46,7 graus): a sombra que o beiral projeta é `L x tan(46,7) = L x 1,06`. Para que o topo da janela (0,6 m abaixo do beiral) não fique na sombra, é preciso `L x 1,06 <= 0,6`, ou seja, `L <= 0,57 m`.
2. Escolha `L = 0,55 m`. No meio-dia de junho a sombra é 0,58 m: a janela inteira recebe sol.
3. Equinócio (h = 70,1): sombra de `0,55 x 2,75 = 1,51 m`, cobrindo o vidro do topo (0,6 m) até 1,51 m: cerca de três quartos superiores do vidro ficam na sombra e o sol só atinge o pedaço de baixo.
4. Sombra total: quando `L x tan(h) >= 1,8`, ou `tan(h) >= 3,27`, ou seja `h >= 73 graus`. Como no meio-dia, com o sol ao norte, `h = 90 - (δ - latitude)`, isso pede `δ - latitude <= 17`, ou seja `δ <= -2,9 graus`. Isso ocorre, aproximadamente, do final de setembro a meados de março, que na região cobre a estação quente. Fora desse período a janela recebe algum sol no meio-dia.

Conclusão: um beiral de cerca de 55 cm, que é pequeno, faz na latitude de BH exatamente o que se quer, e por isso beirais generosos são uma solução clássica no Brasil. O mesmo beiral não serve na fachada oeste, onde o sol da tarde vem baixo e de lado: `tan(VSA) = tan(h)/cos(HSA)` com h = 30 graus e HSA = 20 graus dá `0,577/0,940 = 0,614`, VSA = 31,6 graus, e a sombra de um beiral de 0,55 m é de só 0,34 m, longe de cobrir uma janela de 1,2 m. Para o oeste use **brise vertical**, folhas móveis, vegetação ou reduza a janela.

Verificações que este cálculo não faz (aplique quando projetar de verdade): sol nas horas fora do meio-dia (o beiral ajuda menos quando o sol vem de lado, ver o VSA); sombra de vizinhos; a mudança do dia mais quente do ano em relação ao solstício (a carga térmica de verão pode continuar até março, e o pico de calor acontece semanas depois de dezembro).

## Máscara de sombra: como conferir na carta

A **máscara de sombra** é um desenho que mostra, para um ponto de observação (o centro da janela), qual parte do céu está bloqueada por um beiral, brise ou obstáculo externo. Desenhada sobre um **transferidor de ângulos** (uma folha que mede ângulos horizontais e verticais de sombra), ela é sobreposta à carta solar. Onde a região bloqueada cobre um trecho da trajetória do sol, naquele período a janela está à sombra. É o método tradicional para verificar um beiral ou brise sem calcular ponto a ponto. O Analysis SOL-AR desenha isso.

O curso "Conforto Ambiental", do canal Conforto e Projeto, tem aulas em vídeo sobre proteções solares, transferidor de ângulos e máscaras de sombra (veja abaixo).

## Resumo

- A carta solar é a projeção da trajetória do sol ao longo do ano sobre um plano horizontal: azimute na borda, altura nos círculos concêntricos, horas e datas como linhas.
- No Brasil: fachada norte é a mais controlável (sol baixo no inverno entra, sol alto do verão é barrado por beiral); oeste é a mais difícil (sol baixo da tarde no calor); leste dá sol da manhã; sul é a mais estável e sem sol de inverno.
- Proteção externa (beiral, brise, veneziana, vegetação) é bem mais eficiente que interna, porque barra o sol antes do vidro.
- Beiral horizontal: `sombra = L x tan(VSA)`; o ângulo vertical de sombra é `tan(VSA) = tan(h)/cos(HSA)`. Ao norte um beiral de poucas dezenas de centímetros já protege no verão; a oeste e leste é preciso elemento vertical.
- Máscara de sombra sobre a carta mostra quando a janela está protegida ao longo do ano.

## Para aprofundar

- [ ] [Como ler uma Carta Solar?](https://www.youtube.com/watch?v=srC8rMkq_qo) (Amuleto Arquitetura): título indica leitura prática da carta. Não foi assistido; útil como complemento visual ao primeiro tópico desta aula.
- [ ] [Conforto Ambiental, Módulo 4 (Proteções Solares e Transferidor de Ângulos)](https://www.youtube.com/watch?v=2pI547NdpiA) (Conforto e Projeto): parte do curso de conforto ambiental; título indica proteções solares e uso do transferidor. Não foi assistido.
- [ ] [Conforto Ambiental, Módulo 7 (Máscaras de Sombra: Proteções Solares, Parte 1)](https://www.youtube.com/watch?v=pq13zoz_5P4) (Conforto e Projeto): sequência do curso, sobre máscaras de sombra. Não foi assistido.

[Próxima aula: Conforto Térmico, Materiais e Cor](./03%20-%20Conforto%20Termico%20Materiais%20e%20Cor.md)
