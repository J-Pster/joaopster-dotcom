# Aula 7: Troposfera, modos especiais e onda de terreno

[Voltar ao módulo](./README.md)

*Pergunta que esta aula responde: por que às vezes VHF/UHF, que "deveriam" acabar no horizonte, chega a centenas ou milhares de km, e como o ar, o Sol e as estrelas cadentes causam isso?*

## Por que isso existe

A Aula 3 disse que acima de 30 MHz o alcance termina no horizonte de rádio (k = 4/3). Isso é a regra média. Há exceções que aparecem com regularidade suficiente para serem estudadas e, em alguns casos, usadas. Conhecê-las explica por que sua rede LoRa às vezes "ouve" algo distante e por que enlaces de micro-ondas às vezes falham sem chuva.

## Troposfera: a camada do tempo

A **troposfera** é a camada mais baixa da atmosfera (até cerca de 10 a 15 km), onde há clima. O que importa para a onda é o **índice de refração** `n`, quase 1, por isso se usa a **refratividade** `N = (n - 1) x 10^6` (unidades N). Ela depende de pressão, temperatura e vapor d'água: cresce com umidade e diminui com a temperatura e a altura. A fórmula clássica, conforme a ITU-R P.453 (versão em vigor na consulta: P.453-14, de 08/2019; verificado em setembro de 2026), é:

`N = 77,6 / T x (P + 4810 x e / T)`

com `T` em kelvin, `P` a pressão em hPa e `e` a pressão parcial de vapor em hPa. (Reproduzida da literatura; confira na norma antes de usar em projeto.)

### Atmosfera padrão: k = 4/3

Numa atmosfera "padrão", `N` cai com a altura numa taxa média de cerca de 40 unidades N por km. Isso curva o raio para baixo na medida certa para equivaler a uma Terra 4/3 maior (`k = 4/3`, Aula 3).

### Super-refração e dutos (ducting)

Se `N` cai **mais rápido** do que o padrão, o raio curva mais que a Terra. O limite crítico: se o gradiente for menor que cerca de **-157 unidades N por km**, o raio curva mais que a própria superfície: fica **preso**. A camada em que isso ocorre é um **duto** (duct), um guia de ondas atmosférico. O sinal fica confinado, com pouca perda além do espaço livre 2D (cai com `d` e não `d^2`), e viaja centenas e até mais de mil km.

Quando isso ocorre:

- **Inversão de temperatura:** normalmente o ar esfria com a altura; numa inversão, uma camada de ar quente fica sobre ar frio (típico em noites calmas e claras, sob alta pressão, perto de frentes). O ar quente em cima tem `N` menor por ser menos denso e, se seco, cria um salto forte de `N`.
- **Camadas de ar seco sobre ar úmido**, como brisa marítima sobre a terra quente, ou ar úmido sobre o mar e ar seco vindo do continente.
- **Duto de evaporação:** sobre o mar, logo acima da superfície, o ar é saturado; a umidade cai rapidamente com a altura nos primeiros metros. Isso cria um duto quase permanente, de 5 a 40 m de espessura (valor típico da literatura), que aprisiona sinais **em micro-ondas** (acima de cerca de 3 GHz) e permite enlaces marítimos além do horizonte.
- Dutos elevados (a centenas de metros) que carregam sinais em VHF/UHF entre estações distantes; costumam durar horas a dias.

Efeitos práticos: em UHF, sinais de emissoras de FM ou TV, de 500 km ou mais, aparecem de repente. Em LoRa, podem provocar recepção de nós distantes e interferência entre redes (não confirmei dados publicados de LoRa em dutos nesta sessão; é uma decorrência física para frequências nessa faixa, mas não é confiável para projeto).

### Sub-refração e fading atmosférico

O oposto: `N` cai mais devagar ou sobe, e `k` cai (por exemplo, 2/3). A Terra "sobe" e obstrui o caminho. Enlaces longos ponto a ponto sofrem **fading de multipercurso atmosférico** (várias camadas refratam e refletem) em noites calmas e úmidas, mesmo com céu limpo.

### Espalhamento troposférico (tropo scatter)

A turbulência da troposfera cria flutuações em `N` de tamanho da ordem do comprimento de onda; elas espalham uma fração muito pequena da energia para frente, além do horizonte. Com antenas grandes, potência alta e receptores sensíveis, entrega enlaces de 100 a 500 km, usado em sistemas militares, plataformas de petróleo e telecomunicações remotas. A perda é muito alta (dezenas a mais de 100 dB além do espaço livre), então não é uma técnica para hobby ou redes leves.

## Ionosfera especial: esporádica E (Es)

Fina camada de ionização muito densa dentro da camada E, de altura entre 90 e 120 km, com espessura de poucos km, que se forma de forma irregular ("esporádica"), por ventos e por íons metálicos de meteoros (o mecanismo exato é objeto de estudo; a explicação consensual envolve cisalhamento de vento e íons metálicos). Sua densidade local é tão alta que reflete VHF baixo: 28, 50 e 70 MHz com frequência, 144 MHz em eventos fortes, e até acima em casos raros.

- **Alcance de um salto:** cerca de 1.000 a 2.300 km.
- **Duração:** minutos a horas; a abertura vem e vai.
- **Sazonalidade:** picos no verão de cada hemisfério (no Brasil, por volta de dezembro e janeiro; no hemisfério norte, de maio a agosto). Pequeno segundo pico no inverno em algumas regiões (dado da literatura de radioamador).
- **Efeito prático:** sinais de FM comercial (88 a 108 MHz) ou de TV VHF vindos de milhares de km, aberturas em 6 m e 10 m para radioamadores. Não afeta LoRa em 433 ou 868/915 MHz de modo relevante, pois acima de 200 MHz é raro.

## Espalhamento por meteoros (meteor scatter)

Um meteoro que entra na atmosfera a 80 a 120 km deixa um rastro de gás ionizado (**trilha ionizada**), curto e denso. Por milissegundos a segundos, essa trilha reflete ondas de VHF baixo (30 a 150 MHz, com destaque para 50 e 144 MHz) e permite comunicação entre estações a 500 a 2.200 km. Cada rastro é uma "janela" rápida; por isso se usam **rajadas** de dados curtas, repetidas, com modos digitais próprios (Módulo 7). A taxa de meteoros é maior no início da manhã (quando a Terra "vai de frente" ao fluxo) e em chuvas de meteoros. Serve para comunicação de baixa taxa em VHF com estações distantes, sem infraestrutura.

## Onda de superfície em LF/MF (retomada)

Já vista na Aula 1: com polarização vertical, a onda segue a curvatura da Terra. O alcance depende da **condutividade** do solo (mar > solo úmido > solo seco/rocha) e da frequência (perda maior em frequências maiores). Em LF/MF, mesmo emissoras de baixa potência fazem cobertura estável de dezenas a centenas de km, sem depender do Sol, o que explica o uso de AM para radiodifusão regional e de radiofaróis de navegação em LF/MF. À noite, essas frequências também sofrem propagação ionosférica (E e F sem D), que traz sinais distantes, e causa interferência entre emissoras.

## Resumo dos modos

| Modo | Faixa típica | Alcance | Previsibilidade |
|---|---|---|---|
| Onda de superfície | LF/MF | Dezenas a centenas de km | Alta |
| Ionosfera E/F | HF | Até dezenas de milhares de km | Média (ciclo solar, hora) |
| Esporádica E | 28 a 144 MHz | 1.000 a 2.300 km | Baixa (sazonal, aleatória) |
| Meteoros | 30 a 150 MHz | 500 a 2.200 km | Média (estatística), pacotes curtos |
| Dutos troposféricos | VHF, UHF, micro-ondas | Centenas a mais de 1.000 km | Baixa (tempo) |
| Espalhamento troposférico | UHF, micro-ondas | 100 a 500 km | Alta, mas exige muita potência/antena |

## Resumo

- A refratividade `N` cai com a altura; o padrão dá k = 4/3. Se o gradiente passar de cerca de -157 N/km, o raio fica preso: **duto**.
- Inversões, camadas de ar seco sobre úmido e superfícies marítimas geram dutos; o duto de evaporação sobre o mar serve a micro-ondas.
- Esporádica E (camada E muito densa, sazonal) reflete VHF baixo a 1.000 a 2.300 km; meteoros refletem VHF baixo por instantes.
- Espalhamento troposférico exige potência e antenas grandes.
- Para um projeto de rede, trate esses modos como bônus ou interferência ocasional, não como base do alcance.

## Para aprofundar

- [ ] [Fast Track to Understanding Ham Radio Propagation, Hamvention 2023](https://www.youtube.com/watch?v=gfgy-i06ny8) (título do vídeo; consta da curadoria anterior como palestra baseada no livro de Michael Burnette, AF7KB): pelo que a curadoria anotava, cobre espalhamento troposférico, ducting e clima espacial; não assisti.
- [ ] [ITU-R P.453: The radio refractive index](https://www.itu.int/rec/R-REC-P.453/en) (ITU): a norma oficial da refratividade.

[Próxima aula: Orçamento de enlace (link budget)](./08%20-%20Orcamento%20de%20Enlace.md)
