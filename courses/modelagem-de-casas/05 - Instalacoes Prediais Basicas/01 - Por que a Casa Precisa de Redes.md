# Aula 1: Por que a casa precisa de redes

[Voltar ao módulo](./README.md)

*Pergunta que esta aula responde: por que uma casa não é só paredes, e como as redes de água, esgoto, energia e gás passam a mandar na planta?*

> **Aviso obrigatório.** Projeto e execução de instalações elétricas, de gás e hidráulicas exigem
> profissional habilitado (engenheiro ou técnico com ART/RRT/TRT, conforme a atividade), seguindo as normas
> da ABNT. Elétrica envolve risco de choque e incêndio (a NR-10 regula o trabalho com eletricidade); gás
> envolve risco de vazamento, incêndio e explosão; hidráulica mal feita causa infiltração, contaminação da
> água e danos à estrutura. Este módulo ensina a **entender e conversar** com projetistas e instaladores.
> Não ensina, e não autoriza, a executar. Os números aqui são para dar ordem de grandeza e compreender o
> raciocínio, não para dimensionar uma obra real.

## O problema: o que uma casa precisa receber e devolver

No Módulo 1 você viu que a casa é organizada por um programa de necessidades (dormir, cozinhar, lavar).
Cada uma dessas atividades consome algo e descarta algo:

| Atividade | O que precisa chegar | O que precisa sair |
|---|---|---|
| Banho, pia, vaso, máquina de lavar | água fria (e quente) | esgoto |
| Cozinhar | gás ou energia | gases da combustão, fumaça, gordura |
| Iluminar, usar aparelhos | energia elétrica | (nada físico, mas calor) |
| Comunicar | sinal de internet, TV, telefone | (nada) |
| Chover no telhado | (nada) | água da chuva |
| Respirar, conforto térmico | ar renovado | ar viciado, calor, umidade |

Cada linha dessa tabela é uma **rede**: um caminho físico (tubo, fio, duto) que liga uma fonte externa (rua,
concessionária, botijão, sol) aos pontos de uso, e os pontos de uso a um destino (rede de esgoto, rua,
solo). **Instalações prediais** é o nome do conjunto dessas redes dentro da edificação.

## Por que as redes mandam na planta: três leis físicas

Redes não são "detalhes que o engenheiro resolve depois". Elas obedecem a leis físicas que limitam onde
cada coisa pode ficar. São três.

### 1. Gravidade (esgoto e águas pluviais)

Esgoto e chuva descem sozinhos, sem bomba, porque a tubulação é inclinada. Isso tem consequências
diretas:

- O ponto de saída tem de ser **mais alto** que o ponto de chegada. Quanto mais longe o banheiro estiver
  da rede de esgoto, mais o tubo precisa descer (a inclinação mínima, você verá, é de 1% a 2%).
- Tubo de esgoto é grosso (o do vaso sanitário tem 100 mm de diâmetro) e não faz curva fechada. Passar
  por dentro de uma viga ou de uma parede fina não é possível.
- Se a inclinação não couber (por exemplo, banheiro no meio da casa, longe da saída, sobre laje), o piso
  precisa ser rebaixado ou elevado, ou o esgoto precisa de bomba (solução ruim, com manutenção e risco).

**Consequência de planta:** áreas com esgoto ficam **perto** umas das outras e **perto** de onde o
esgoto sai do terreno.

### 2. Pressão (água)

Água em tubulação predial se move por diferença de pressão. Numa casa comum, a pressão vem de duas fontes:
a rede pública da concessionária (que empurra a água até o reservatório) e a **altura da caixa d'água** em
relação aos pontos de uso (cada metro de coluna de água dá cerca de 10 kPa, ou 1 metro de coluna d'água,
"mca"; a Aula 2 detalha). Consequências:

- Chuveiro e torneira precisam de pressão mínima para funcionar; se a caixa d'água estiver pouco acima
  do chuveiro, a vazão é fraca.
- Reservatório cheio é pesado: 1.000 litros são cerca de 1 tonelada, mais o peso da caixa. Isso
  precisa de apoio estrutural (Módulo 4), e no alto da casa.
- O trajeto importa: para água quente, cada metro de tubo entre o aquecedor e o chuveiro é água fria que
  precisa sair antes de chegar a água quente (desperdício e espera).

### 3. Segurança e manutenção (todas as redes)

Tubos vazam, disjuntores desarmam, filtros entopem. Toda rede precisa ser **acessível** para inspeção e
conserto sem demolir a casa. Além disso, algumas redes **não podem se misturar**: água e eletricidade
convivem em banheiros só com proteções específicas; gás exige ventilação e distância de fontes de
faísca. Isso gera regras de posição (quadro elétrico longe de pia, botijão fora de dormitório) e o
conceito de **shaft**.

## Vocabulário de projeto que aparece a partir de agora

Os termos abaixo serão usados nas aulas seguintes e são a linguagem de conversa com projetistas.

- **Área molhada**: cômodo que tem água e esgoto (banheiro, cozinha, área de serviço, lavabo).
- **Ponto de utilização**: onde a rede termina em um uso (torneira, chuveiro, tomada, luminária).
- **Prumada**: trecho **vertical** de tubulação ou eletroduto que atravessa pavimentos (sobe ou desce).
  Em casa térrea a palavra aparece pouco; num sobrado, é central.
- **Barrilete**: tubulação horizontal, logo abaixo da caixa d'água, que distribui a água para as colunas.
- **Coluna de distribuição**: prumada de água que desce do barrilete para os pontos de uso.
- **Shaft**: espaço vertical (dentro de uma parede espessa ou de um vão dedicado) por onde passam
  tubulações, com acesso para inspeção. Em casa térrea, o equivalente é a **parede hidráulica**: uma parede
  ou faixa onde as redes se concentram.
- **Ramal**: tubulação que sai da principal e liga a um ou poucos pontos (ramal do chuveiro).
- **Concessionária**: empresa que fornece o serviço público (água/esgoto, energia, gás canalizado).
- **Rede pública**: a tubulação ou linha da concessionária na rua. Sua presença ou ausência decide, por
  exemplo, se você faz fossa (esgoto) ou liga na rede.
- **Compatibilização**: conferência de que a arquitetura, a estrutura e as instalações não conflitam
  entre si (o tubo não passa dentro da viga).

## O caminho de cada rede, em uma visão só

Antes de detalhar, um mapa mental que vale para as próximas aulas.

| Rede | Nasce em | Passa por | Termina em | Como se move | Aula |
|---|---|---|---|---|---|
| Água fria | rede pública, ramal predial, hidrômetro | reservatório, barrilete, colunas | torneiras, chuveiro, vaso | pressão e gravidade da caixa | 2 |
| Água quente | aquecedor (gás, elétrico, solar) | tubulação de água quente | chuveiro, pia | pressão da água fria + calor | 2 |
| Esgoto | pontos de uso (vaso, ralo, pia) | ramais, caixas, coletor | rede pública ou fossa/sumidouro | gravidade | 3 |
| Águas pluviais | telhado, terraços, pisos | calhas, condutores | rua, jardim, cisterna | gravidade | 3 |
| Elétrica | rede da concessionária, medidor | quadro de distribuição, circuitos | tomadas, luminárias, aparelhos | diferença de potencial | 4 e 5 |
| Gás | botijão/central ou rede | tubulação | fogão, aquecedor | pressão do gás | 6 |
| Dados/telecom | operadora | eletrodutos, cabos | pontos de rede, TV | sinal elétrico ou óptico | 6 |
| Ar (ventilação e climatização) | ar externo | dutos, aberturas, split | ambientes | ventilador, convecção | 6 |

## Como as redes viram decisões de planta (resumo)

Este é o fio condutor do módulo; a Aula 7 desenvolve com exemplo. Três decisões nascem das leis acima:

1. **Agrupar as áreas molhadas.** Se banheiro, cozinha e área de serviço ficam encostados (parede
   compartilhada ou próximas), uma única "parede hidráulica" recebe água, esgoto e, se houver, gás, e
   os tubos ficam curtos. Curto significa mais barato, menos perda de pressão, esgoto com declividade
   viável e menos pontos de vazamento.
2. **Escolher uma prumada ou parede técnica acessível.** Onde as redes concentram, precisa haver acesso
   (tampa, porta de shaft) sem quebrar revestimento.
3. **Posicionar os "cabeçotes" das redes.** Quadro elétrico, medidor, hidrômetro, caixa d'água,
   central de gás e caixa de gordura têm posições que respondem a acesso, segurança e trajeto (Aula 7).

Note que isso liga aos módulos anteriores: a **setorização** do Módulo 1 (zona de serviço, zona íntima)
já tende a agrupar áreas molhadas; a **estrutura** do Módulo 4 limita por onde tubos passam (não se corta
viga nem pilar para passar tubo; laje precisa de rebaixo ou enchimento para o caimento do esgoto); e o
**desenho técnico** do Módulo 3 é a linguagem em que os projetistas de instalações entregam seu trabalho
(plantas de hidráulica, elétrica e detalhes de shaft).

## Quem projeta o quê

Numa obra formal, a arquitetura fecha a planta e depois cada disciplina tem seu projeto, feito por
profissional próprio, com responsabilidade técnica (ART do CREA, RRT do CAU, TRT do CFT para técnicos):

- **Projeto hidrossanitário** (água fria, quente, esgoto, pluviais).
- **Projeto elétrico** (e, em separado, telecom e SPDA, o para-raios).
- **Projeto de gás** (aprovado, em muitos locais, pelo Corpo de Bombeiros e pela concessionária).
- **Projeto de climatização**, quando há.

O arquiteto precisa saber o suficiente para **dar a esses projetistas uma planta compatível** e para
entender as perguntas que eles fazem. Esse é o objetivo do módulo, e é também o que você fará quando
modelar em 3D: posicionar paredes, pisos e equipamentos de modo que as redes caibam.

Para o hobby (modelar a própria casa), isso significa: no modelo, você **não desenha cada tubo**, mas
posiciona corretamente banheiros agrupados, prevê o local do quadro, da caixa d'água e do shaft, e deixa
folgas em paredes e forros. Softwares BIM (Módulo 11) permitem modelar as redes, mas isso é território do
projetista de instalações.

## Resumo

- Toda atividade da casa consome algo e descarta algo; cada fluxo é uma **rede** com origem, trajeto e
  destino.
- Três leis físicas mandam na planta: **gravidade** (esgoto e chuva descem por inclinação), **pressão**
  (água depende de altura e da rede) e **segurança/manutenção** (acesso e separação de redes).
- Por isso as **áreas molhadas se agrupam** e as redes se concentram numa **parede hidráulica ou shaft**
  acessível.
- Prumada, barrilete, coluna, ramal, shaft e ponto de utilização são o vocabulário básico de conversa com
  projetistas.
- Projeto e execução de elétrica, gás e hidráulica exigem profissional habilitado; o módulo ensina a
  entender, não a executar.

## Para aprofundar

- [ ] [O que é Shaft em condomínio?](https://www.youtube.com/watch?v=PUEavGPBDsw) (Manutenção Predial, Felipe Lima): o foco é prédio de condomínio, mas mostra o que é um shaft e por que precisa de acesso; o conceito vale para a casa. Conteúdo do vídeo não assistido.

[Próxima aula: Água fria e água quente](./02%20-%20Agua%20Fria%20e%20Agua%20Quente.md)
