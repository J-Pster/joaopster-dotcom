# Aula 4: Ventilação Natural

[Voltar ao módulo](./README.md)

*Pergunta que esta aula responde: por que o ar se move dentro de uma casa sem ventilador, e como posicionar janelas e volumes para aproveitar isso?*

## Para que serve ventilar

Segundo o ProjetEEE (Ministério de Minas e Energia), a ventilação natural cumpre três funções:

1. **Renovação do ar** (higiene): trocar o ar interno, com CO2, vapor, cheiros e poluentes, por ar externo.
2. **Resfriamento psicofisiológico**: o movimento do ar sobre a pele aumenta a perda de calor por convecção e evaporação (aula 3) e faz o corpo sentir-se mais fresco sem baixar a temperatura do ar.
3. **Resfriamento convectivo** (da edificação): o ar que passa retira calor acumulado nas paredes, no teto e nos objetos, especialmente à noite, quando o ar externo é mais frio.

Em clima quente e úmido (zona 8 na NBR 15220), essa é a principal estratégia de conforto. Em clima frio, o que se busca é só a função 1, com o mínimo de perda de calor.

## O motor: diferença de pressão

O ar se move quando há **diferença de pressão** entre dois pontos: vai do ponto de alta pressão para o de baixa pressão. Dois fenômenos produzem essa diferença em uma casa.

### 1. O vento (ventilação por pressão do vento, ou cruzada)

Ao encontrar a casa, o vento cria **pressão positiva** na fachada voltada para ele (o ar "amontoa" e desacelera) e **pressão negativa** (sucção) nas laterais, no lado protegido e na maior parte do telhado (o ar se descola e acelera). Se existir uma abertura na fachada de pressão positiva e outra em região de pressão negativa, o ar atravessa a casa. É a **ventilação cruzada**: exige **duas aberturas em faces diferentes** (opostas ou adjacentes) e um caminho livre entre elas.

A pressão dinâmica do vento é:

```
P = 0,5 x densidade_do_ar x v2      (densidade do ar ~ 1,2 kg/m3)
```

Para v = 3 m/s: `0,5 x 1,2 x 9 = 5,4 Pa`. A pressão real em cada ponto da casa é essa pressão multiplicada por um **coeficiente de pressão** Cp, que depende da forma da casa e do ângulo do vento (valores ilustrativos para casas baixas: cerca de +0,6 na face de barlavento e -0,3 na de sotavento, variando bastante).

A vazão que atravessa duas aberturas iguais, cada uma de área A, é aproximadamente:

```
Q = Cd x (A / raiz(2)) x raiz(2 x delta_P / densidade)
delta_P = 0,5 x densidade x v2 x (Cp1 - Cp2)
```

`Cd` é o **coeficiente de descarga** da abertura (em torno de 0,6 para janelas, valor típico).

**Exemplo resolvido**: vento de 3 m/s, Cp1 = +0,6, Cp2 = -0,3, duas janelas com 1,5 m2 de área livre. `delta_P = 5,4 x 0,9 = 4,86 Pa`; `raiz(2 x 4,86 / 1,2) = 2,85 m/s`; `Q = 0,6 x (1,5/1,414) x 2,85 = 1,81 m3/s`, ou cerca de 6.500 m3/h. Em um cômodo de 4 x 4 x 2,7 m (43 m3), isso seria uma renovação a cada 24 segundos. É um valor teórico máximo (janelas totalmente abertas, obstruções desprezadas); o que se aprende é que, com vento moderado, a ventilação cruzada renova o ar do cômodo dezenas de vezes por hora. A velocidade do vento cai muito perto do solo e no meio da cidade (obstáculos), então a realidade é bem menor.

Nota de honestidade: as fórmulas acima são a forma clássica da física de edificações; o exemplo foi calculado aqui e não conferido contra fonte online. Use como ordem de grandeza.

### 2. A diferença de temperatura (efeito chaminé)

**Efeito chaminé** (efeito de empilhamento): ar quente é menos denso que ar frio e sobe. Se há uma abertura baixa e outra alta, o ar quente sai pela alta e o ar mais frio é puxado pela baixa, sem vento nenhum. A abertura alta funciona como chaminé. O ProjetEEE descreve o mecanismo pela pressão: o ar mais frio e denso exerce pressão positiva, o ar quente, menos denso, exerce baixa pressão e sobe, criando correntes de convecção.

A vazão, na forma usada em manuais de física de edificações (ASHRAE, aberturas iguais, abertura de área A cada, plano neutro no meio da altura h entre elas):

```
Q = Cd x A x raiz( 2 x g x (h/2) x (T_int - T_ext) / T_int )      temperaturas em kelvin (K = C + 273)
```

**Exemplo resolvido**: h = 3 m entre aberturas, A = 0,5 m2 em cada, T_int = 30 graus (303 K), T_ext = 25 graus, Cd = 0,6. `raiz(2 x 9,81 x 1,5 x 5 / 303) = raiz(0,486) = 0,70 m/s`; `Q = 0,6 x 0,5 x 0,70 = 0,21 m3/s`, cerca de 750 m3/h. Com diferença de só 2 graus, `Q` cai para 0,13 m3/s (cerca de 480 m3/h): a vazão varia com a raiz quadrada da diferença de temperatura, então mesmo diferenças pequenas ainda ajudam.

Três lições:

- Só funciona quando **o ar interno está mais quente que o externo**. É útil à noite e nos dias amenos; em pleno calor de tarde, com ar externo tão quente quanto o interno, o efeito some.
- Quanto **maior a distância vertical** entre entrada e saída (pé-direito alto, escada, lanternim, pé-direito duplo, chaminé solar), maior a vazão (varia com a raiz da altura).
- As duas aberturas precisam ter **área generosa**; uma abertura pequena de saída estrangula o fluxo.

Na prática os dois mecanismos se somam: em dias de vento domina o vento; em dias calmos, a chaminé continua funcionando. Um projeto bem pensado tem aberturas que servem aos dois.

## Como projetar aberturas

### Área e tipo de janela

A NBR 15220-3 (2005), tabela C.1, classifica as **aberturas para ventilação** pela área efetiva em porcentagem da área do piso do ambiente (áreas efetivas, ou seja, a parte que de fato abre): **pequenas** entre 10% e 15%, **médias** entre 15% e 25% e **grandes** acima de 40%. As zonas da norma recomendam: pequenas na 7, médias nas 1 a 6 e grandes na 8.

Área **efetiva** não é a área do vão. Uma janela de correr de duas folhas abre no máximo metade do vão (uma folha passa por trás da outra); janelas maxim-ar, pivotantes, projetantes e de abrir podem abrir mais, dependendo do tipo. Venezianas fixas reduzem bastante a passagem de ar. Ao especificar, pergunte quanto abre.

**O código de obras do município** define área mínima de iluminação e ventilação por ambiente (variando de cidade para cidade; confira o da sua, e veja o módulo 6).

### Regras de posicionamento

- **Duas faces por ambiente** sempre que possível. Ambiente com janelas em uma face só depende de ventilação unilateral, muito menos eficiente. Se for inevitável, a porta aberta para outro ambiente com janela em outra face ajuda (é o que a própria NBR 15220 aponta na descrição da estratégia de ventilação cruzada).
- **Percurso livre**: portas internas com venezianas, bandeiras (aberturas altas sobre as portas), ou vãos abertos, para que o ar realmente cruze.
- **Alturas**: para resfriar as pessoas, a entrada de ar deve estar na altura do corpo. Para expulsar ar quente, a saída deve estar no alto (bandeiras, janelas altas, lanternim).
- **Entrada menor que saída**: a velocidade do ar na entrada aumenta quando a abertura de entrada é menor que a de saída (a mesma vazão passa por menos área). É uma técnica para acelerar o vento sobre os moradores.
- **Vento oblíquo** (em cerca de 45 graus de incidência): a literatura da área costuma indicar que distribui o fluxo melhor pelo ambiente que o vento perpendicular, embora capte menos vazão total. Resultados variam por geometria; use como regra de cautela, não como lei.
- **Profundidade**: regra prática de manuais britânicos (CIBSE), não brasileira e não confirmada nesta pesquisa: ventilação unilateral eficaz até cerca de 2,5 vezes o pé-direito de profundidade; ventilação cruzada até cerca de 5 vezes.

### Ventos predominantes

**Vento predominante** é a direção de onde o vento sopra com mais frequência e/ou mais força em uma região e estação. A **rosa dos ventos** é o gráfico que mostra isso: cada raio é uma direção e seu comprimento é a frequência ou a velocidade. Fontes:

- **Analysis SOL-AR** (LabEEE/UFSC): para as cidades incluídas (Belém, Brasília, Curitiba, Florianópolis, Fortaleza, Maceió, Natal, Porto Alegre, Recife, Rio de Janeiro, Salvador, São Luís, São Paulo, Vitória), gera a rosa dos ventos por estação em oito direções.
- **Arquivos climáticos** de estações meteorológicas (do INMET e de bases como a Climate.OneBuilding, usada na revisão de 2024 da NBR 15220-3).
- **Observação local**: converse com vizinhos, veja para onde as árvores se inclinam, use o vento sentido no terreno em dias diferentes.

**Cuidados**: dados de estação (medidos a 10 m de altura em campo aberto) superestimam o vento que chega às janelas de uma casa baixa em bairro construído. O relevo muda o vento local (**brisa marítima** sopra do mar para a terra de dia e o inverso à noite; vales canalizam o vento). O **entorno** (muros, prédios vizinhos, árvores densas) pode desviar ou bloquear o vento (a NBR 15220 chama a atenção para isso). Muros altos, por exemplo, reduzem a ventilação térrea; recuar o muro ou usar elementos vazados (cobogós, grades) preserva a passagem.

### Quando fechar as janelas

A ventilação **não é sempre boa**:

- Quando o ar externo é **mais quente** que o interno (tarde de clima seco e quente): abrir traz calor. A estratégia é a **ventilação seletiva** (nome usado na NBR 15220 para as zonas 4, 6 e 7): fechar de dia, abrir à noite, combinada com massa térmica (aula 3).
- Em ambientes com **umidade relativa muito alta** e sem movimento por vento, ventilar pouco ajuda (o ProjetEEE lembra que a ventilação natural é ineficaz nesse caso), embora o movimento do ar ainda ajude o corpo por evaporação.
- **Chuva, ruído, poeira e segurança** pedem aberturas protegidas: beirais generosos sobre as janelas, venezianas, bandeiras basculantes (aula 5 trata de chuva e ruído).
- Em clima **frio**: ventile o mínimo higiênico, com aberturas pequenas, para evitar mofo e acúmulo de CO2 sem perder muito calor.

## Resumo

- Ventilar serve para renovar o ar, refrescar as pessoas e retirar calor da construção.
- Dois motores: pressão do vento (ventilação cruzada: duas aberturas em faces com pressões diferentes) e diferença de temperatura (efeito chaminé: entrada baixa e saída alta; só funciona se dentro está mais quente que fora).
- Vazão pelo vento cresce linearmente com a velocidade; pelo efeito chaminé, com a raiz da altura e da diferença de temperatura.
- Abrir bem: área efetiva (não a do vão), duas faces, percurso livre, entrada na altura do corpo e saída no alto.
- Vento predominante vem da rosa dos ventos, mas o entorno e o relevo alteram a direção. Em calor seco, a ventilação deve ser seletiva (noturna).

## Para aprofundar

- [ ] [Ventilação Natural](https://projeteee.mme.gov.br/estrategia/ventilacao-natural/) (ProjetEEE, Ministério de Minas e Energia): referência técnica em português, base das três funções da ventilação descritas aqui.
- [ ] [Efeito Chaminé na Arquitetura, Glossário Animado de Arquitetura Sustentável #13](https://www.youtube.com/watch?v=9cxYHJxE5uo) (UGREEN): animação; título indica explicação do efeito chaminé. Não foi assistido.
- [ ] [Conforto Térmico #2: Ventilação Cruzada](https://www.youtube.com/watch?v=f7KVHyLBcfg) (Perelopes Arquitetura): título indica explicação da ventilação cruzada. Não foi assistido.

[Próxima aula: Luz Natural, Umidade, Chuva e Ruído](./05%20-%20Luz%20Natural%20Umidade%20Chuva%20e%20Ruido.md)
