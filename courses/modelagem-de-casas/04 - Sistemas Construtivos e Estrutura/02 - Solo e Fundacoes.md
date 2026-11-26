[Voltar ao módulo](./README.md)

# Aula 2: Solo e fundações

*Pergunta que esta aula responde: por que a fundação não se escolhe pela planta, mas pelo solo, e o que cada tipo (sapata, radier, estaca, broca, baldrame) faz de diferente?*

> **Aviso.** Fundação é a parte da casa onde o erro é mais caro e mais difícil de corrigir depois. Projeto de fundação e sondagem são feitos por engenheiro habilitado com ART (a NBR 6122 é a norma de projeto e execução de fundações). Esta aula existe para você entender a lógica e conversar com o profissional, não para escolher ou dimensionar.

## Por que a fundação existe

Na aula 1, o solo aparece como o último elo: ele precisa devolver toda a carga da casa. O problema é que **o solo tem resistência limitada**, muito menor que a do concreto ou do aço. Um pilar de 14 x 30 cm recebendo 100 kN transmite uma pressão altíssima sobre a pequena área que toca o chão. Se apoiasse direto no solo, o pilar "afundaria" como um salto agulha no gramado.

A fundação faz duas coisas: **espalha** a carga numa área maior (para a pressão sobre o solo cair) ou **leva** a carga para camadas mais fundas e resistentes. A conta base é a definição de pressão:

`pressão = força / área`

Exemplo simplificado: pilar com carga de 100 kN. Um solo que suporta com segurança 200 kN/m² (0,2 MPa, valor plausível para um solo razoável, usado aqui só como exemplo). Área necessária: `100 / 200 = 0,5 m²`, ou seja, uma sapata com cerca de 0,7 m x 0,7 m. Se o solo for fraco e suportar só 100 kN/m², a área dobra (1,0 m²). Se for ainda mais fraco, sapatas viram tão grandes que se encostam, e outra solução é necessária. **O tipo e o tamanho da fundação dependem da carga e da capacidade do solo**, e a capacidade do solo só se conhece investigando o solo.

## Por que o solo precisa ser investigado

O solo não é um material fabricado com propriedade garantida. Dois terrenos lado a lado podem ser completamente diferentes. Os problemas típicos que a investigação procura:

- **Camadas moles** (argila mole, solo orgânico, turfa): cedem muito sob carga e demoram anos para estabilizar.
- **Aterro** mal compactado (comum em loteamentos e terrenos "nivelados"): recalca de forma imprevisível.
- **Nível da água (lençol freático)**: água reduz a resistência, complica a escavação e pode corroer materiais.
- **Solos expansivos** (algumas argilas incham quando molham e encolhem quando secam) e **colapsíveis** (perdem resistência quando molham).
- **Rocha ou solo rijo** a certa profundidade: pode ser o "chão bom" onde apoiar.
- **Terreno em declive**: risco de deslizamento e empuxo (Módulo 6 trata do terreno).

A casa recalcando de forma **desigual** (um canto afunda mais que outro) gera as fissuras diagonais que se veem em casas velhas. Recalque uniforme e pequeno é tolerado, o diferencial é o que quebra a alvenaria (que não resiste a tração, lembra da aula 1).

## A sondagem SPT

A investigação mais comum para casas no Brasil é a **sondagem a percussão com SPT** (*Standard Penetration Test*), padronizada pela **ABNT NBR 6484** (revisão de 2020). Como funciona, em termos simples:

1. Perfura-se o solo em um ponto, em trechos de cerca de 1 m.
2. A cada metro, crava-se no fundo do furo um tubo amostrador com **golpes de um martelo de 65 kg** caindo de **75 cm de altura**.
3. Conta-se quantos golpes são necessários para penetrar os últimos 30 cm (dos 45 cm cravados). Esse número é o **NSPT** daquele metro.
4. O tubo retorna com uma amostra do solo, que o sondador descreve (areia, argila, cor, umidade).
5. Registra-se também o **nível da água**.

O resultado é um **boletim de sondagem**: uma coluna por profundidade com o tipo de solo e o NSPT. **NSPT baixo (poucos golpes)** significa solo mole ou fofo. **NSPT alto** significa solo compacto ou rijo. Uma referência qualitativa usual: até cerca de 4 golpes o solo é muito mole ou fofo, acima de 20 a 30 é bem compacto ou duro (as faixas exatas e as classificações estão na NBR 6484, não as decore).

A sondagem tem custo pequeno perto da obra e é **exigida na prática** para qualquer projeto de fundação sério. Pular a sondagem para "economizar" é a economia mais arriscada de uma obra.

Sobre a quantidade de furos: a norma de investigação (NBR 8036, para edificações) relaciona o número de furos à área que a construção ocupa. Uma referência que aparece em fontes técnicas é um furo para cada 200 m² de projeção até 1.200 m², com no mínimo dois furos para construções pequenas. Isso é definido pela empresa de sondagem e pelo engenheiro, e a edição vigente da norma deve ser conferida por eles (não confirmei a última revisão; trate como orientação).

**Ordem correta:** primeiro a sondagem, depois o projeto de fundação, depois o projeto estrutural que aproveita a fundação. Nunca "desenhar a fundação" antes de conhecer o solo.

## Tipos de fundação

A NBR 6122 divide as fundações em **rasas** (superficiais, também chamadas diretas) e **profundas**.

- **Fundação rasa**: a base fica a pouca profundidade (menor que duas vezes a menor dimensão da base em planta, pela definição da norma) e a carga é transmitida ao solo pela **base**. Só funciona quando o solo perto da superfície é competente.
- **Fundação profunda**: transmite a carga pela **ponta**, pela **lateral** (atrito com o solo ao longo do fuste) ou por ambas. Sua base fica em profundidade grande (mais de oito vezes a menor dimensão em planta e no mínimo 3 m, segundo a norma). Serve quando o solo superficial é fraco e o bom está fundo.

### Fundações rasas

**Sapata isolada**: bloco de concreto armado, quadrado ou retangular, sob **cada pilar**. Espalha a carga do pilar numa área maior. É a mais usada em casas de concreto armado com bom solo. Sapatas vizinhas são unidas por **vigas de fundação** (também chamadas de vigas de equilíbrio ou de travamento) que amarram o conjunto.

**Sapata corrida**: uma faixa contínua de concreto sob uma **parede** (não sob um ponto). Usada em alvenaria estrutural e em light steel frame e wood frame, porque nesses sistemas a carga desce em linha, não em pontos.

**Radier**: uma laje contínua de concreto armado que ocupa toda a área da casa (ou boa parte dela) e apoia direto no solo. Espalha a carga em **toda a área**, o que reduz muito a pressão. É bom quando o solo é fraco mas homogêneo, ou quando há muitas paredes portantes (paredes de concreto e steel frame usam muito). Serve também como contrapiso. Vantagem: rapidez. Limitação: exige terreno bem preparado, drenagem cuidadosa (a água sob o radier pode causar problemas), e pouco tolera solos que mudam de comportamento sob a casa. **Radier estaqueado** combina radier com estacas quando só radier não basta.

**Bloco de fundação**: peça de concreto (às vezes ciclópico, com pedra) sob pilar ou parede, mais robusto e sem armadura de flexão. Aparece em obras pequenas com bom solo.

**Baldrame (viga baldrame)**: **não é um tipo de fundação sozinha.** É uma **viga de concreto armado** que corre rente ao terreno, ao longo do perímetro e das paredes, sobre a fundação (sapatas, estacas, brocas). Ela tem três funções: **amarrar** os elementos de fundação entre si, **receber e distribuir** o peso das paredes do térreo e servir de **apoio para a primeira fiada** de alvenaria, mantendo a umidade do solo longe da parede (por isso recebe impermeabilização). Casa com radier normalmente não tem baldrame, porque o próprio radier cumpre esse papel.

### Fundações profundas

**Estaca**: um elemento esbelto (uma "coluna" enterrada) que leva a carga para o fundo. Há vários tipos, diferentes na forma de execução:

- **Estaca broca**: escavada manualmente com um trado (uma espécie de furadeira gigante manual) e preenchida com concreto e armadura. Diâmetro pequeno (da ordem de 20 a 30 cm) e comprimento limitado. Só funciona **acima do nível d'água** e em solo que não desmorona no furo. É comum em casas pequenas e sobrados leves. A NBR 6122 cita comprimento mínimo de 3 m para ser considerada fundação profunda (fonte técnica consultada).
- **Estaca pré-moldada** (concreto já curado): cravada com bate-estaca. Rápida, mas dá vibração e barulho, e não serve perto de vizinhos frágeis.
- **Estaca escavada mecanicamente** (como Strauss ou hélice contínua): máquinas perfuram e concretam. Hélice contínua tem alta produtividade e é comum em obras maiores.
- **Tubulão**: um poço de grande diâmetro escavado e concretado, com base alargada. Para cargas altas.

Como o solo devolve a carga nas estacas: parte por atrito lateral, parte pela ponta. Quanto mais profunda e mais grossa, mais carga.

## Como escolher (a lógica, não a receita)

A escolha depende de **duas variáveis**: a **carga** que vem da casa e o **perfil do solo** (do boletim SPT). Um roteiro qualitativo, que o engenheiro refina com cálculo:

| Situação | Solução típica |
|---|---|
| Solo bom perto da superfície, casa leve | Sapatas isoladas ou corridas com baldrame |
| Solo razoável e homogêneo, muitas paredes portantes, obra padronizada | Radier |
| Solo superficial fraco, camada boa a poucos metros, lençol freático fundo | Estacas broca com baldrame |
| Solo fraco profundo, água alta, cargas maiores | Estacas mecanizadas, tubulões ou radier estaqueado |
| Aterro recente, argila mole | Tratamento do solo ou fundação profunda (decisão de projeto) |

Não existe "a fundação mais barata": a mais barata é aquela **adequada** ao solo e à carga. Uma fundação subdimensionada custa um reforço muito mais caro depois, se for possível.

Existe ainda uma regra prática histórica de correlação entre NSPT e pressão admissível em fundação rasa (algo como NSPT dividido por 50, em MPa, para certa faixa de NSPT). Cito só para você reconhecer o tipo de raciocínio que o engenheiro faz. **Não use** para dimensionar, porque a verificação real exige recalques, água, camadas abaixo e normas atuais.

## Como isso aparece na modelagem

Em um modelo de casa para hobby, fundação raramente precisa ser modelada em detalhe. O que importa é:

- A **cota do piso**: o piso interno costuma ficar de 15 a 30 cm acima do terreno externo (ordem de grandeza usual), para proteger da água e da umidade. Isso liga com o módulo 2 (implantação) e com o desenho de cortes (módulo 3).
- O **baldrame** aparece como uma faixa de concreto na base das paredes em cortes de detalhe.
- Se quiser desenhar a fundação, use **sapatas sob os pilares** (ou faixa sob paredes) e mantenha a lógica: **cada pilar ou parede portante termina numa fundação**.
- Em BIM (módulos 7 e 11), fundações são categorias próprias (por exemplo, "Fundação" no Revit), e podem ser escondidas em vistas normais.

## Resumo

- A fundação existe porque o solo resiste menos que o concreto: ela **espalha** a carga (pressão = força / área) ou a **leva para camadas fundas**.
- O solo é variável e imprevisível, e só se conhece por investigação. A **sondagem SPT** (NBR 6484) mede o NSPT por metro, descreve o solo e registra a água.
- Rasas: sapata isolada (sob pilar), sapata corrida (sob parede), radier (laje contínua), bloco. Profundas: estacas (broca, pré-moldada, escavada) e tubulões.
- **Baldrame** é viga que amarra a fundação e recebe as paredes, não um tipo de fundação isolado.
- Escolha depende de carga e solo, e é feita por engenheiro com ART. Sondagem vem primeiro.

## Para aprofundar

- [ ] [O QUE É SONDAGEM E PARA QUE SERVE? Veja 3 dicas sobre SPT e a importância antes de construir a casa](https://www.youtube.com/watch?v=DW1sXbypz5s) (Estruturas & BIM, Eng. Pedro): vídeo em português sobre o SPT (título e canal confirmados, conteúdo não assistido).
- [ ] [SAPATA, RADIER OU ESTACA? Qual Fundação é Melhor e Mais Barata?](https://www.youtube.com/watch?v=hEYtkSX61W8) (JH Engenharia): comparação direta dos três tipos (título e canal confirmados, conteúdo não assistido).
- [ ] [Quais são os tipos de fundação que existem? Como as fundações suportam tanta carga?](https://www.youtube.com/watch?v=uE9MGG4l5s8) (Engenharia Detalhada): visão geral dos tipos (título e canal confirmados, conteúdo não assistido).

[Próxima aula: Concreto armado, pilar, viga e laje](./03%20-%20Concreto%20Armado%20Pilar%20Viga%20e%20Laje.md)
