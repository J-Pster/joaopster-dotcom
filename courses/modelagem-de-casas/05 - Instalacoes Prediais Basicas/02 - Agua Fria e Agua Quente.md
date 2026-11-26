# Aula 2: Água fria e água quente

[Voltar ao módulo](./README.md)

*Pergunta que esta aula responde: como a água chega da rua até o chuveiro, por que a caixa d'água fica no alto e por que o caminho da água quente pesa na planta?*

> Aviso: dimensionar tubulação, reservatório e aquecedores é trabalho de profissional habilitado
> (projeto hidrossanitário com responsável técnico). Os números abaixo dão ordem de grandeza para você
> entender e conversar.

## Por que existe um reservatório dentro da casa

A rede pública entrega água com pressão que varia ao longo do dia e pode faltar (manutenção, pico de
consumo). Além disso, pressão alta demais estraga registros e louças. O **reservatório** resolve dois
problemas ao mesmo tempo: guarda água para os momentos de falta e, estando **elevado**, cria pressão
estável e moderada por gravidade em toda a casa. Por isso a caixa d'água tradicional fica em cima.

Um sistema sem reservatório existe (**alimentação direta**, água vai da rua direto aos pontos), mas
depende inteiramente da pressão e do abastecimento da concessionária. Em muitas cidades, a concessionária
ou a prática local exige ou recomenda reservatório; a regra é local, consulte a concessionária.

## O caminho da água fria, peça por peça

1. **Rede pública de distribuição**: tubulação da concessionária sob a rua.
2. **Ramal predial**: derivação da rede pública até o limite do terreno.
3. **Hidrômetro**: medidor de consumo, instalado num **cavalete** (conjunto de tubos e registro) que fica
   no limite do terreno, em local de fácil leitura e acesso pela concessionária. Ele é propriedade da
   concessionária e sua posição é definida por ela (padrão de cada empresa). É a primeira decisão de
   planta ligada à água: **a entrada da água fica na frente do lote, perto da calçada**.
4. **Alimentador predial**: tubo do hidrômetro até o reservatório.
5. **Reservatório inferior** (opcional, ver adiante) e **bomba de recalque**, se houver.
6. **Reservatório superior** (a caixa d'água), com bóia que fecha a entrada quando enche, e com **extravasor**
   (ladrão, tubo que descarrega o excesso), **limpeza** (saída de fundo para esvaziar) e **tampa**.
7. **Barrilete**: tubulação horizontal, logo abaixo da caixa, que reparte a água.
8. **Colunas de distribuição** (prumadas): descem do barrilete até os pavimentos e ambientes.
9. **Ramais e sub-ramais**: ligam a coluna aos aparelhos, com **registros** para isolar setores em caso de
   conserto.
10. **Pontos de utilização**: torneira, chuveiro, válvula de descarga ou caixa acoplada do vaso, máquina
    de lavar.

Toda a rede é **fria** e funciona por gravidade a partir da caixa (sistema **indireto por gravidade**, o
mais comum em casas brasileiras).

### Reservatório único, inferior e superior

- **Só superior**: a caixa fica no alto e é abastecida direto pela rede pública (pressão da rua tem de
  bastar para subir). Mais simples e comum em casas.
- **Inferior + superior**: água entra num reservatório no térreo (cisterna ou caixa baixa) e uma bomba
  sobe para o superior. Usado quando a pressão da rua é insuficiente ou o prédio é alto. A NBR 5626
  (instalação predial de água fria e água quente, edição de 2020) trata dessa divisão: em edificações
  maiores, boa parte do volume fica embaixo para aliviar o peso na estrutura.
- **Pressurizador ou sistema com bomba e hidropneumático**: fornece pressão sem caixa elevada; existe em
  casas com caixa baixa ou ocultas por razão de projeto, mas depende de energia (sem luz, sem água).

### Quanto reservar

A NBR 5626:2020, segundo material técnico consultado (verificado em setembro de 2026), pede que o volume
reservado atenda **pelo menos 24 horas** do consumo normal do edifício e recomenda um máximo de cerca de
**três dias** de consumo (mais que isso, a água parada perde qualidade). Na prática, adota-se
frequentemente **dois dias**. Um mínimo de **500 litros** é indicado por fontes técnicas consultadas.

**Exemplo resolvido: casa com 4 moradores**

1. Consumo por pessoa: usa-se um valor de projeto; 150 litros por pessoa por dia é um valor usual em
   exemplos residenciais (o valor real depende do padrão da casa e da norma ou do órgão local).
2. Consumo diário: `4 pessoas x 150 L = 600 L/dia`.
3. Reserva de dois dias: `600 L x 2 = 1.200 L`.
4. Escolha comercial: reservatórios vêm em volumes padronizados (por exemplo, 1.000 L e 1.500 L). O
   projetista escolheria pelo padrão disponível (1.500 L, ou dois de 750 L, etc.).

Consequência de estrutura: 1.000 a 1.500 litros pesam de 1 a 1,5 tonelada, mais o peso da caixa, sobre a
laje ou estrutura do telhado. Isso precisa de apoio calculado (Módulo 4), normalmente sobre laje e
paredes ou vigas, e não sobre o madeiramento do telhado sem cálculo.

## Pressão e altura mínima: o mecanismo

Pressão em água parada é a pressão do peso da coluna acima. Cada **1 metro de altura de água** dá cerca de
**9,8 kPa**, aproximadamente **10 kPa**. Por isso a unidade **metro de coluna d'água (mca)** é usada
como sinônimo de altura: 1 mca ≈ 10 kPa.

Dois conceitos que a NBR 5626 usa (valores conforme fontes técnicas consultadas sobre a edição de 2020;
verificado em setembro de 2026):

- **Pressão estática**: pressão com a água **parada**. O limite máximo é de **400 kPa (cerca de 40 mca)**
  em qualquer ponto, para proteger conexões e aparelhos de fadiga, ruído e golpe de aríete (pancada
  causada pela parada brusca da água).
- **Pressão dinâmica**: pressão com a água **correndo**. Ela é menor que a estática porque parte da
  energia se perde por atrito nas paredes dos tubos e conexões (**perda de carga**). A norma exige
  mínimo de **10 kPa (1 mca)** nos pontos de utilização em geral. Alguns aparelhos pedem mais: as fontes
  consultadas citam **15 kPa** para válvulas de descarga e **5 kPa** para bacias com caixa acoplada.

**Por que isso vira altura na planta:** a pressão disponível no chuveiro é aproximadamente a altura da
superfície da água na caixa acima do chuveiro, menos a perda de carga no trajeto. Se a caixa estiver só
1 m acima do chuveiro (10 kPa), o mínimo da norma mal se cumpre e, com perda de carga, falta pressão.
Muitos chuveiros e misturadores exigem pressão maior que o mínimo da norma; a exigência vem do
fabricante. Na prática comum de projeto (regra de bolso, não da norma), busca-se a caixa alguns metros
acima do ponto mais alto de uso. Por isso a caixa d'água fica sobre a laje de cobertura, no ponto mais
alto da casa, e por isso banheiro de sobrado **no andar de cima** sofre mais com pressão baixa se a caixa
for baixa.

Consequência para modelagem: no 3D, a altura do fundo da caixa em relação ao piso do banheiro mais alto
é uma informação de projeto, não estética. Em casas de um pavimento com telhado inclinado, a caixa costuma
ficar no forro ou sobre uma laje pequena; a altura entre o forro e o chuveiro importa.

## Materiais e por que importam

- **Água fria**: tubos e conexões de **PVC soldável** (marrom), **PPR** (termofusão) ou **PEX**, conforme o
  projeto e o costume local.
- **Água quente**: precisa de material que resista a temperatura mais alta: **CPVC**, **PPR**, **cobre** ou
  **PEX**. PVC comum de água fria não resiste (deforma e vaza). Misturar materiais sem conector adequado
  é erro clássico.
- **Embutimento**: tubos passam dentro de paredes de alvenaria (rasgos, com o cuidado de não enfraquecer
  a parede portante, Módulo 4) ou em shafts e forros, o que define o **acesso** para consertos.

## Água quente: por que o trajeto importa

**Água quente** é água fria aquecida em algum ponto e levada por uma segunda rede até chuveiro, pias e
máquinas. Todo sistema tem três elementos: fonte de calor, reservatório ou trocador de calor e tubulação.

### Tipos de aquecimento

| Tipo | Como funciona | Onde fica | Pontos de atenção |
|---|---|---|---|
| **Chuveiro elétrico** | resistência dentro do próprio chuveiro aquece a água que passa | no ponto de uso | alta potência (por exemplo, 5.500 W), circuito exclusivo; cada ponto tem seu aquecedor; pouca tubulação de água quente |
| **Aquecedor a gás de passagem** | queimador aquece a água quando ela passa pelo trocador | perto dos pontos, em local ventilado | precisa de gás e de **chaminé** ou ventilação para os gases da queima; nunca em local fechado |
| **Aquecedor elétrico de acumulação (boiler)** | resistência aquece a água num reservatório isolado | central, atende vários pontos | espera menor, perde calor parado |
| **Aquecimento solar** | coletores no telhado aquecem a água, que vai a um reservatório térmico | coletores no telhado e boiler perto | precisa de **apoio** (elétrico ou a gás) para dias nublados |
| **Bomba de calor** | usa ciclo de refrigeração para transferir calor (não converte energia elétrica direto em calor) | unidade externa e reservatório | consome menos energia elétrica que resistência, custo inicial maior |

### O caminho importa por dois motivos

1. **Água parada na tubulação esfria.** Quando você abre o chuveiro, a água que estava no tubo desde o
   último banho sai fria primeiro. Quanto mais **longo** o trajeto entre aquecedor e ponto, mais tempo e
   água fria sobra até chegar a quente (desperdício e espera). Por isso se posiciona o aquecedor
   **perto dos pontos**, e por isso banheiro e cozinha juntos economizam água e energia.
2. **Perda de calor.** Tubo quente longo perde calor para as paredes; por isso a tubulação de água quente
   é **isolada** termicamente em trechos maiores. Sistemas com anéis de recirculação (mantêm a água
   circulando) existem em prédios grandes, raramente em casas.

Conclusão de planta: no aquecimento central (gás, solar, boiler), o aquecedor deve ficar **encostado à
parede hidráulica**, entre os banheiros e a cozinha, com trajeto curto até os pontos.

### Aquecedor a gás: o que exige da planta

- **Ventilação permanente** do local onde fica o aparelho, para trazer ar para a combustão e evitar
  acúmulo de monóxido de carbono, gás tóxico e sem cheiro.
- **Chaminé** ou duto de exaustão dos gases para o exterior, para aparelhos que não sejam do tipo
  "estanque".
- **Proibição** de instalar aparelho a gás de combustão livre em banheiro ou dormitório, segundo
  material técnico consultado sobre a NBR 13103 (a Aula 6 detalha).
- Local comum: **área de serviço** ou varanda de serviço, ou um nicho externo ventilado.

### Aquecimento solar: o essencial

- Componentes: **coletores** (placas que absorvem sol), **reservatório térmico** (boiler, isolado) e
  tubulação. Em sistema por **termossifão**, a água quente, menos densa, sobe naturalmente do coletor ao
  reservatório sem bomba; por isso o reservatório precisa ficar **mais alto** que a parte superior dos
  coletores.
- **Orientação e inclinação** dos coletores dependem da latitude e do telhado (relação com o Módulo 2,
  Conforto Ambiental e Implantação): no hemisfério sul, o ideal é voltar para o **norte**, sem sombra.
- Requisito de **apoio** (aquecimento complementar elétrico ou a gás) para dias sem sol.
- Consequência de planta: telhado com **água voltada para o norte**, espaço e apoio estrutural para
  coletores e boiler, e um shaft ou percurso para os tubos até a parede hidráulica.

Nível conceitual: dimensionar (quantas placas, qual boiler) é para o projetista, com base no consumo de
água quente e na irradiação local.

## Decisões de planta que nascem da água

- **Hidrômetro no limite frontal**, com acesso livre pela calçada.
- **Caixa d'água no ponto mais alto**, com estrutura de apoio, ou reservatório inferior mais bomba.
- **Barrilete** acessível (normalmente no forro ou sobre a laje, perto da caixa).
- **Áreas molhadas agrupadas** para encurtar ramais e o percurso da água quente.
- **Registros acessíveis** (no banheiro, cozinha e área de serviço) para isolar consertos.
- **Prever espaço** para o aquecedor (gás ou boiler) e, no solar, para coletores e reservatório.

## Resumo

- O reservatório existe para **garantir água** em falta da rede e **dar pressão moderada e estável** por
  gravidade; fica elevado porque pressão vem da altura (1 mca ≈ 10 kPa).
- Caminho: rede pública, ramal predial, hidrômetro (limite frontal), reservatório, barrilete, colunas,
  ramais e pontos.
- Limites da NBR 5626:2020 (verificado em setembro de 2026): pressão estática máxima de 400 kPa;
  dinâmica mínima de 10 kPa em geral; reserva de pelo menos 24 h de consumo, até cerca de 3 dias.
- Exemplo: 4 moradores x 150 L = 600 L/dia; dois dias = 1.200 L; caixa pesa mais de 1 t e pede apoio
  estrutural.
- Água quente exige material resistente ao calor e trajeto **curto** do aquecedor ao ponto; solar pede
  telhado voltado para o norte e apoio complementar; aquecedor a gás exige ventilação e exaustão.

## Para aprofundar

- [ ] [Como Funciona o Aquecimento Solar](https://www.youtube.com/watch?v=EGry9YHDyhs) (TELHARE): explica o princípio de termossifão; o canal é de um fabricante, então há viés comercial. Conteúdo do vídeo não assistido.
- [ ] [ABNT NBR 5626:2020 (cópia hospedada em site de terceiro)](https://normadedesempenho.com.br/wp-content/uploads/2022/10/NBR-5626-2020.pdf): texto da norma de água fria e quente; não conferi a autenticidade da cópia. Consulte a versão oficial da ABNT para uso profissional.

[Próxima aula: Esgoto sanitário e águas pluviais](./03%20-%20Esgoto%20e%20Aguas%20Pluviais.md)
