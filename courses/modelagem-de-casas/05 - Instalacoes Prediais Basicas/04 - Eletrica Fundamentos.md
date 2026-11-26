# Aula 4: Elétrica residencial, fundamentos e proteções

[Voltar ao módulo](./README.md)

*Pergunta que esta aula responde: o que são tensão, corrente e potência, por que uma instalação precisa de disjuntor, DR e aterramento, e como a energia chega da rua ao quadro?*

> **Aviso obrigatório.** Eletricidade mata por choque e provoca incêndio. Projeto e execução de instalação
> elétrica exigem profissional habilitado (a NR-10 trata da segurança em instalações e serviços em
> eletricidade) e seguem a **ABNT NBR 5410** (instalações elétricas de baixa tensão). Esta aula explica o
> porquê das proteções para você entender e conversar com o eletricista ou engenheiro. Ela **não** ensina
> a mexer em fiação, quadro ou tomadas.

## Por que estudar eletricidade antes de desenhar tomadas

No Módulo 1 você posicionou móveis e viu a ergonomia dos cômodos. Cada aparelho que entra ali consome
energia; alguns consomem pouco (uma lâmpada), outros muito (chuveiro, forno, ar-condicionado). Para a
instalação aguentar o conjunto sem aquecer os fios, é preciso entender **quanta energia** cada coisa
consome e **como se protege** quem usa e a casa. O resto da elétrica (circuitos, quadro, pontos) decorre
dessas duas ideias.

## Grandezas: o que cada uma mede

Analogia com a água (só como apoio): o fio é o tubo; a **corrente** é a vazão; a **tensão** é a pressão; a
**resistência** é o atrito do tubo.

| Grandeza | Símbolo e unidade | O que é |
|---|---|---|
| **Tensão elétrica** | `V`, volt (V) | "empurrão" que move as cargas; diferença de potencial entre dois pontos |
| **Corrente elétrica** | `I`, ampère (A) | quantidade de carga que passa por segundo pelo fio |
| **Resistência** | `R`, ohm | oposição que o caminho faz à passagem da corrente |
| **Potência** | `P`, watt (W) | energia por segundo que o aparelho consome ou converte |
| **Energia** | quilowatt-hora (kWh) | potência multiplicada pelo tempo; é o que a conta de luz cobra |

Relações que você precisa saber:

- **Lei de Ohm**: `V = R x I`.
- **Potência**: `P = V x I` (em corrente contínua ou aparelhos resistivos, como chuveiro e ferro).
- **Energia**: `E = P x tempo`. Um chuveiro de 5.500 W ligado por 1 hora consome 5,5 kWh.

**Exemplo resolvido: a corrente do chuveiro.** Chuveiro de 5.500 W em 220 V:
`I = P / V = 5.500 / 220 = 25 A`. Em 127 V, o mesmo chuveiro (5.500 W) exigiria `5.500 / 127 = 43,3 A`, o
que pede cabo muito mais grosso. Por isso, na mesma casa, chuveiro e outros aparelhos potentes preferem
**220 V** (ou versões do chuveiro de menor potência em 127 V).

### Potência aparente: por que aparece "VA" no projeto

Em aparelhos com motor ou fonte eletrônica (geladeira, máquina de lavar, computador), a corrente não
acompanha exatamente a tensão, e parte da corrente circula sem produzir trabalho útil. Por isso, no
projeto, a carga aparece em **volt-ampère (VA)**, **potência aparente**, `S = V x I`. A potência útil é
`P = S x fator de potência`. No projeto residencial simplificado, a NBR 5410 dá cargas mínimas em VA, e
na primeira estimativa se trata VA e W como próximos (fator de potência perto de 1 para cargas
resistivas). Para aparelhos específicos, vale a placa (etiqueta) do fabricante.

## Por que fio esquenta e por que existe seção de condutor

Toda corrente que passa num fio o aquece (efeito Joule: `calor = R x I² x tempo`). Se a corrente é maior
que o fio suporta, ele esquenta até derreter a isolação, e começa o **incêndio**. Por isso cada cabo tem
**seção transversal** (a área do cobre, em mm²) e uma **capacidade de condução de corrente** (o máximo que
aguenta sem esquentar demais). Fio fino com corrente alta é o erro mais perigoso de instalação.

A NBR 5410 fixa seções mínimas: **1,5 mm² para circuitos de iluminação e 2,5 mm² para tomadas de uso
geral** (fontes técnicas consultadas, verificado em setembro de 2026). Aparelhos de maior potência exigem
seção maior, calculada pelo projetista pela corrente, pelo tipo de instalação (embutida em parede,
aparente, em eletroduto) e pela **queda de tensão** (a tensão que se perde ao longo de um fio comprido e
pode fazer o aparelho render menos).

## Tensão no Brasil, corrente alternada e o vocabulário de fios

- A rede residencial brasileira usa **corrente alternada (CA)**, cuja tensão muda de sentido 60 vezes por
  segundo (**60 Hz**).
- A tensão nominal varia por região: em algumas cidades a tensão entre **fase e neutro** é **127 V** e
  entre **duas fases** é **220 V**; em outras, é **220 V** entre fase e neutro. Depende da concessionária
  (verifique a sua). Um aparelho 127 V ligado em 220 V queima; por isso a etiqueta da tomada e o padrão
  local importam.
- **Fase**: condutor "vivo", que tem tensão em relação ao neutro e ao solo. Toque em fase, com os pés no
  chão, dá choque.
- **Neutro**: condutor que fecha o circuito; é ligado ao aterramento na origem da instalação, mas **não é
  seguro tocar**.
- **Terra (condutor de proteção, PE)**: condutor **não** destinado a conduzir corrente em uso normal; só
  a conduz em falha, levando-a ao solo.
- Cores segundo a NBR 5410: **azul-claro para neutro**, **verde ou verde-amarelo para terra**; fase pode
  ser de outras cores (preto, vermelho, etc.), exceto essas. A cor ajuda a identificar sem medição.

## Como a energia chega à casa

1. **Rede da concessionária** (poste, linha de distribuição na rua).
2. **Ramal de ligação**: cabos do poste até a entrada da casa.
3. **Padrão de entrada**: conjunto que inclui a **caixa do medidor** (de propriedade da concessionária, que
   mede seu consumo em kWh), o disjuntor geral e a **haste de aterramento**. Fica no **limite do lote,
   voltado para a rua**, em local acessível ao leiturista, seguindo o padrão da concessionária (que define
   altura, material e afastamentos).
4. **Ramal de entrada**: cabos do medidor ao interior.
5. **Quadro de distribuição de circuitos (QDC)**, também chamado de "quadro de luz" ou "caixa de
   disjuntores": o coração da instalação interna. Recebe a energia e a reparte em vários **circuitos**,
   cada um com seu disjuntor.
6. **Circuitos terminais**: fios em eletrodutos (tubos) que vão do quadro até tomadas, interruptores e
   luminárias.

### Tipos de ligação

| Tipo | Condutores (além do terra) | Uso típico |
|---|---|---|
| **Monofásico** | 1 fase + neutro | casas pequenas, cargas baixas |
| **Bifásico** | 2 fases + neutro | casas médias, aparelhos em 220 V |
| **Trifásico** | 3 fases + neutro | casas grandes, muitos aparelhos potentes, motores |

Quem define o tipo de ligação que a casa recebe é a **concessionária**, com base na **carga instalada**
e nas regras dela, e há um **consumo mínimo faturado** por tipo (comumente citado: 30 kWh no monofásico,
50 kWh no bifásico e 100 kWh no trifásico; valores da regulação da Aneel que **não** confirmei nesta
pesquisa, confira na sua fatura ou na concessionária). Escolher ligação maior que a necessária custa mais
todo mês; menor limita os aparelhos. Além disso, a **geração solar** (Aula 6) precisa de rede compatível.

## Proteções: para que serve cada uma

Existem três perigos distintos, e cada um tem um dispositivo.

### 1. Sobrecorrente: o **disjuntor**

**Problema:** corrente acima da que o fio aguenta (sobrecarga, muitos aparelhos no mesmo circuito) ou
**curto-circuito** (contato direto entre fase e neutro, corrente enorme). Ambos aquecem o cabo.

**Mecanismo:** o **disjuntor termomagnético** tem dois elementos. O **térmico** (uma lâmina que se
curva com o calor) age na sobrecarga lenta. O **magnético** (bobina) age no curto-circuito, instantâneo.
Quando disparam, o disjuntor **desarma**, interrompendo o circuito.

**Regra de dimensionamento (ideia central):** a corrente nominal do disjuntor deve ficar **entre** a
corrente do circuito e a capacidade do cabo. Ou seja, `I do circuito <= I do disjuntor <= I do cabo`. Assim
o disjuntor desarma **antes** do cabo aquecer demais. Disjuntor maior que o cabo suporta é perigoso, pois o
fio esquenta e o disjuntor não percebe.

### 2. Fuga de corrente: o **DR** (dispositivo diferencial-residual)

**Problema:** o disjuntor **não protege pessoas**. Se você tocar numa fase e a corrente passar pelo seu
corpo até o chão, essa corrente é pequena (uma fração de ampère), muito abaixo do que faria o disjuntor
desarmar, mas letal.

**Mecanismo:** o DR mede a corrente que **sai** pela fase e a que **volta** pelo neutro. Numa instalação sã,
elas são iguais. Se parte da corrente **foge** (por um corpo humano, por um fio com isolação
danificada encostado numa carcaça), a diferença é detectada e o DR **desliga em milissegundos**. A NBR
5410 exige DR de **alta sensibilidade (corrente diferencial nominal de até 30 mA)** em circuitos que
servem locais com chuveiro ou banheira, tomadas externas, áreas de serviço, cozinhas e copas, e tomadas de
uso geral em áreas molhadas (fontes técnicas consultadas). Não substitui o disjuntor: o DR protege
contra fuga e o disjuntor contra sobrecorrente. Existem disjuntores DR que fazem as duas funções.

Você testa o DR periodicamente apertando o **botão de teste** dele; ele deve desarmar. Se o DR dispara
sozinho, há fuga em algum ponto, e é hora de chamar um eletricista, não de tirar o DR.

### 3. Surto de tensão: o **DPS** (dispositivo de proteção contra surtos)

**Problema:** raios próximos e manobras na rede geram picos de tensão que queimam eletrônicos.
**Mecanismo:** o DPS desvia o pico para o terra. A NBR 5410 trata de sua exigência em casos previstos
(por exemplo, linha aérea de alimentação); a definição é do projetista.

### O aterramento

**Problema:** sem caminho seguro para a corrente de falha, a carcaça metálica de uma geladeira ou
máquina, se um fio dentro dela encostar, fica **energizada**, à espera de quem a tocar.

**Mecanismo:** liga-se a carcaça (por meio do pino terra da tomada, o terceiro pino) a um **condutor de
proteção (terra)** que vai ao quadro e a um **eletrodo de aterramento** (haste de cobre cravada no solo,
ou a própria ferragem da fundação), que faz contato com a terra. Em falha, a corrente fluirá pelo
condutor terra (caminho de baixa resistência) e **fará o disjuntor ou o DR desarmar**, em vez de
percorrer o corpo de quem tocou. Por isso o terra é obrigatório em **todos** os circuitos, inclusive
iluminação (fonte consultada, sobre a NBR 5410).

**Consequência de planta e obra:** o aterramento precisa ser previsto **desde a fundação** (Módulo 4): as
ferragens da sapata ou baldrame podem servir como eletrodo; a haste externa fica perto do padrão de
entrada. Por isso, a elétrica começa na obra antes da parede.

## Esquema resumido do quadro

Um quadro residencial típico tem, de cima para baixo (esquematizado):

1. **Disjuntor geral** (ou seccionador), que liga e desliga a casa toda.
2. **DPS** (se previsto).
3. **DR** (protegendo grupos de circuitos) e **disjuntores** de cada circuito.
4. **Barramentos** de neutro e de terra (barras de cobre onde se ligam os fios).
5. **Espaço de reserva** para circuitos futuros (a NBR 5410 pede reserva proporcional ao número de
   circuitos; o valor exato não confirmei aqui).

## Norma em vigor

A **NBR 5410:2004** (com versão corrigida de 2008) é a edição vigente em setembro de 2026; segundo fonte
consultada, há revisão em consulta nacional, sem validade até ser publicada. O texto legal da NBR 5410
é pago pela ABNT; para o hobby, você entende pelos resumos abaixo, e o profissional usa a norma inteira.

## Decisões de planta que nascem da elétrica (prévia da Aula 7)

- **Padrão de entrada** no limite frontal, com acesso pela rua.
- **Quadro de distribuição** em local **central e de fácil acesso** (corredor, sala de serviço), **longe
  de pia e chuveiro** e a altura acessível; não dentro de banheiro.
- **Aterramento** previsto na fundação.
- **Paredes com espessura** para eletrodutos e caixas embutidas; forros e lajes com caminho para
  eletrodutos.

## Resumo

- **Potência** = tensão x corrente (`P = V x I`); energia = potência x tempo (kWh). Chuveiro de 5.500 W em
  220 V puxa 25 A; em 127 V, 43 A.
- Corrente aquece o fio (efeito Joule); por isso cada cabo tem **seção mínima** (1,5 mm² iluminação,
  2,5 mm² tomadas) e capacidade de condução.
- **Disjuntor** protege o **cabo** contra sobrecarga e curto; **DR de até 30 mA** protege **pessoas** contra
  fuga; **DPS** protege eletrônicos contra surtos; **aterramento** dá caminho seguro à corrente de falha.
- A energia chega por ramal, **padrão de entrada com medidor** (limite frontal), **quadro de distribuição** e
  circuitos; a concessionária define o tipo de ligação (monofásico, bifásico, trifásico).
- Projeto e execução exigem profissional habilitado (NR-10, NBR 5410).

## Para aprofundar

- [ ] [NBR 5410 comentada! Resumo dos objetivos!](https://www.youtube.com/watch?v=carMIcdc2tY) (Mundo da Elétrica): visão geral da norma; segundo título e canal, comentário sobre seus objetivos. Conteúdo não assistido.

[Próxima aula: Circuitos, pontos por ambiente e exemplo resolvido](./05%20-%20Eletrica%20Circuitos%20e%20Exemplo.md)
