[Voltar ao módulo](./README.md)

# Aula 3: Bandas, classes, potência e modos

*Pergunta que esta aula responde: em quais frequências, com quanta potência e com quais modos cada classe pode transmitir, e por que o plano de faixas é dividido em tantos pedaços?*

> Fonte principal: Ato SOR nº 926, de 1 de fevereiro de 2024 (Requisitos Técnicos e Operacionais para uso de radiofrequências associadas ao Serviço de Radioamador), texto da Anatel conferido em setembro de 2026. O Ato 926 continua referenciado pela Anatel como norma do plano de faixas. O texto do Ato "não substitui o publicado no DOU". Consulte sempre a tabela oficial antes de operar.

## Por que existem "bandas" e não "todas as frequências"

Do Módulo 2 você sabe que cada faixa de frequência se propaga de um jeito: HF reflete na ionosfera e alcança o mundo, VHF e UHF são em geral de linha de visada. Do Módulo 1: `c = f x lambda`, ou seja, `lambda = 300 / f(MHz)` metros. Por isso as bandas amadoras recebem o **nome do comprimento de onda aproximado**:

| Frequência | `lambda = 300 / f` | Nome |
|---|---|---|
| 3,65 MHz | 82 m | Banda de 80 metros |
| 7,1 MHz | 42 m | Banda de 40 metros |
| 14,2 MHz | 21 m | Banda de 20 metros |
| 28,5 MHz | 10,5 m | Banda de 10 metros |
| 146 MHz | 2,05 m | Banda de 2 metros |
| 433 MHz | 0,69 m | Banda de 70 centímetros |
| 915 MHz | 0,33 m | Banda de 33 centímetros |

O nome já sugere a antena (Módulo 4: um dipolo de meia onda em 40 m tem cerca de 20 m) e o comportamento de propagação. Por isso cada banda tem seu uso típico: 80 e 40 m são fortes à noite para médias distâncias, 20 m é a "banda do DX" de dia, 10 e 6 m dependem da atividade solar e de fenômenos como esporádica E, 2 m e 70 cm são a base do uso local com repetidoras.

## Quem opera onde: a Tabela I do Ato 926

O Ato 926 define, para cada segmento de frequência, quais classes de COER podem operar (Tabela I). Resumo prático das faixas de HF e superiores:

| Banda | Frequências | Classes |
|---|---|---|
| 2200 m | 135,7 a 137,8 kHz | A, B, C (todas) |
| 630 m | 472 a 479 kHz | Todas |
| 160 m | 1.800 a 1.850 kHz | Todas |
| 160 m | 1.850 a 2.000 kHz | **A** |
| 80 m | 3.500 a 3.800 kHz | Todas |
| 80 m | 3.800 a 4.000 kHz | **A** |
| 60 m | 5.351,5 a 5.366,5 kHz | **A** |
| 40 m | 7.000 a 7.047 kHz | Todas |
| 40 m | 7.047 a 7.300 kHz | **A e B** |
| 30 m | 10.100 a 10.150 kHz | **A** |
| 20 m | 14.000 a 14.350 kHz | **A** |
| 17 m | 18.068 a 18.168 kHz | **A** |
| 15 m | 21.000 a 21.150 kHz | Todas |
| 15 m | 21.150 a 21.300 kHz | **A e B** |
| 15 m | 21.300 a 21.450 kHz | **A** |
| 12 m | 24.890 a 24.990 kHz | Todas |
| 10 m | 28 a 29,7 MHz | Todas |
| 6 m | 50 a 54 MHz | Todas |
| 2 m | 144 a 148 MHz | Todas |
| 1,3 m | 220 a 225 MHz | Todas |
| 70 cm | 430 a 440 MHz | Todas |
| 33 cm | 902 a 907,5 MHz e 915 a 928 MHz | Todas |
| 23 cm | 1.240 a 1.300 MHz | Todas |
| 13 cm | 2.300 a 2.450 MHz | Todas |
| 9 cm | 3.300 a 3.500 MHz | Todas |
| 5 cm | 5.650 a 5.925 MHz | Todas |
| 3 cm a 1 mm (micro-ondas e ondas milimétricas) | 10 GHz a 250 GHz, em subfaixas | Todas |

Leituras importantes:

- **Um iniciante (Classe C) tem 80 m parcial, 40 m parcial, 15 m parcial, 12 m, 10 m, 6 m e todo o VHF/UHF acima.** Não tem 20 m, 17 m, 30 m nem 60 m: as bandas clássicas de DX estão reservadas à Classe A.
- **A Classe B ganha porções extras de 40 m e 15 m.**
- **A Classe A tem tudo.**
- A faixa de 33 cm (900 MHz) é compartilhada com equipamentos de radiação restrita (ISM). Voltaremos a ela na Aula 6.
- A Tabela I no site aparece com a linha de 915 a 928 MHz agrupada sob 33 cm. Na leitura da tabela, ela aplica-se a todas as classes.

## Limites de potência

O Ato 926 (item 5) diz primeiro que a potência usada deve ser **a mínima necessária** para realizar o serviço com boa qualidade e adequada confiabilidade. Só depois vêm os limites máximos. A **potência média na saída do transmissor**, na fração de tempo em que o sistema permanece ativo (duty cycle), é limitada a:

| Classe | Potência máxima geral |
|---|---|
| A | 1.500 W |
| B | 1.000 W |
| C | 100 W |

Exceções onde **prevalece** um limite menor, expresso em **e.i.r.p.** (potência efetivamente irradiada na direção do máximo, isto é, potência do transmissor mais o ganho da antena, conceito do Módulo 4):

- Subfaixa 135,7 a 137,8 kHz: e.i.r.p. máxima de **1 W**.
- Subfaixa 472 a 479 kHz: e.i.r.p. máxima de **5 W**.
- Subfaixa 5.351,5 a 5.366,5 kHz (60 m): e.i.r.p. máxima de **25 W**.
- Enlaces terrestres em 2.300 a 2.450 MHz, 3.400 a 3.500 MHz e 47 a 47,2 GHz: e.i.r.p. máxima de **100 W**.

**Exemplo resolvido.** Você é Classe C, tem um transmissor de 50 W e antena com 3 dBi de ganho em 2 m. Em VHF vale o limite geral: 50 W de saída é menor que os 100 W da Classe C, então a potência está dentro do limite geral (o Ato limita a potência na saída do transmissor). Se você fosse operar em uma banda com limite de e.i.r.p., precisaria considerar o ganho: 3 dBi equivale a fator `10^(3/10) = 2`, então 50 W de transmissor viram cerca de 100 W de e.i.r.p.

**Potência alta não é melhor.** Além do que o Ato manda ("a mínima necessária"), mais potência aumenta o risco de interferência, o consumo e a exposição do público ao campo de RF (Aula 9). O ganho de 3 dB (dobrar a potência) equivale a menos de um ponto na escala S de um receptor. Antena melhor e um bom local rendem mais que potência.

## O plano de faixas: por que cada banda é fatiada

Dentro de cada banda, o Ato 926 (item 7, Tabelas II a XXIX) divide a faixa em **segmentos com aplicação e modos permitidos**. Você não pode transmitir qualquer modo em qualquer ponto da banda. O motivo: os modos ocupam larguras de banda muito diferentes (Módulo 3) e precisam ficar separados para não se atrapalharem.

Exemplo real, tabela dos **40 metros** (extrato do Ato 926, Tabela VII):

| Início (kHz) | Fim (kHz) | Modos | Observação |
|---|---|---|---|
| 7.000 | 7.025 | CW | DX |
| 7.025 | 7.040 | CW | |
| 7.040 | 7.047 | CW, Digitais | |
| 7.047 | 7.050 | CW, SSB, Digitais | ACDS |
| 7.050 | 7.053 | CW, SSB, Voz Digital, Digitais, Demais | ACDS |
| 7.053 | 7.100 | CW, SSB, Voz Digital, Digitais, Demais | |
| 7.100 | 7.300 | CW, SSB, AM, Voz Digital, Digitais, Demais | |

Leitura: a Classe C tem só 7.000 a 7.047 kHz nessa banda, e nesse trecho o Ato só permite **CW e modos digitais**. **Fonia (voz) em 40 m só existe a partir de 7.047 kHz, faixa restrita às Classes A e B.** Por isso um iniciante que quer voz em HF tende a ir para 80 m (voz permitida em vários trechos a partir de 3.590 kHz), 10 m ou 6 m. Em 15 m a parte da Classe C (21.000 a 21.150 kHz) também é só CW e digitais; a voz começa em 21.151 kHz, dentro da faixa de A e B.

Alguns termos que aparecem nas tabelas:

- **CW** (Continuous Wave): telegrafia em código Morse por liga e desliga da portadora.
- **SSB** (Single Side Band): voz em banda lateral única (Módulo 3). Convenção do Ato: **LSB abaixo de 10 MHz, USB acima de 10 MHz** (item 6.3). Em 60 m usa-se USB.
- **AM, FM**: voz em modulação de amplitude ou frequência.
- **DV** (Digital Voice): voz digital (D-STAR, DMR, Fusion etc.). O Ato define DV como modo próprio.
- **Modos digitais**: dados e teletipo digital (FT8, PSK31 e outros, Módulo 7). Nem todos os pontos da banda permitem.
- **DX**: comunicações a longa distância. Segmentos marcados "DX" pedem que você não ocupe a frequência com conversa local.
- **Frequência de chamada**: frequência onde se faz o primeiro contato para depois combinar outra (ex.: 146,520 MHz em FM simplex, 50,110 MHz em 6 m, 144,2 MHz em SSB).
- **Emissões piloto e IBP** (International Beacon Project): faixas para faróis de propagação, usadas para descobrir se a banda está aberta. **Uso exclusivo**: não transmita conversas ali.
- **ACDS** (Automatic Controlled Data Stations): estações digitais de operação automática, sem operador presente, permitidas só nos segmentos assinalados.
- **IVG** (Internet Voice Gateway): estação que liga voz à Internet por VoIP (Echolink e similares), em simplex, só nos segmentos assinalados.
- **Repetidoras**: segmentos de entrada e saída de repetidoras, "exclusivos". Veja a Aula 7.
- **Faixa de guarda**: colchão entre segmentos, não usar.

### Regras técnicas que atingem modos digitais e redes

Estas regras do Ato 926 são o que mais interessa ao seu objetivo final. Vamos usar a Aula 5 para desdobrá-las:

- **6.11: "Não é permitida a criptografia nas aplicações de Modos Digitais e Voz Digital."**
- **6.12: "As técnicas de salto em frequência e de espalhamento espectral não são permitidas em faixas abaixo de 440 MHz."** Ou seja, spread spectrum (o que inclui o LoRa, que usa uma modulação chirp de espalhamento espectral, Módulo 8) é vedado abaixo de 440 MHz. Em bandas amadoras a partir de 440 MHz (por exemplo 33 cm e 23 cm), esta restrição específica não se aplica.
- **6.4: Comunicações de emergência são prioritárias** sobre as demais aplicações do serviço.
- **6.1: enlaces ponto a ponto** podem ser feitos em todas as faixas, exceto nas de guarda e de uso exclusivo, sem interferir nas aplicações prioritárias.
- **6.2: em 472 a 479 kHz**, estações amadoras não podem causar interferência nem têm direito a proteção contra estações de radionavegação aeronáutica.
- **6.7 a 6.10**: regras específicas de ACDS, IVG, repetidoras (canalização do item 9 do Ato).

## Como ler o plano de faixas na prática (método)

Antes de transmitir em qualquer frequência nova, faça este roteiro:

1. **A frequência está dentro da Tabela I para a minha classe?** Se não, pare.
2. **Qual é o segmento (Tabelas II a XXIX)?** Identifique aplicação e modos.
3. **O modo que vou usar está marcado com "x" nesse segmento?** Se não, pare.
4. **Há observação (DX, ACDS, repetidora, exclusivo, satélite)?** Se a frequência é de repetidora ou satélite, você precisa saber operar assim (Aula 7).
5. **Estou usando a potência mínima necessária e abaixo do limite da minha classe?**
6. **A frequência está livre?** (o Ato 3448, item 10.3, exige verificar se o canal está livre antes de transmitir, Aula 8).

## Um alerta sobre rádios "que transmitem em tudo"

Rádios portáteis baratos costumam ser capazes de transmitir em faixas muito maiores que as amadoras (por exemplo, de 136 a 174 MHz e de 400 a 520 MHz). **Poder transmitir não significa poder.** Nessas faixas há aviação, segurança pública, telefonia e serviços privados. Ter o COER autoriza apenas as faixas da Tabela I, na sua classe e nos modos previstos. Operar fora delas é infração e pode atingir serviços críticos.

## Resumo

- Bandas têm nome de comprimento de onda (`lambda = 300 / f(MHz)`), o que liga cada banda à sua antena típica e ao seu comportamento de propagação.
- A **Tabela I do Ato 926** diz quais classes operam onde: C tem menos HF (sem 20, 17, 30 e 60 m), B ganha porções de 40 e 15 m, A tem tudo. VHF/UHF e acima são para todas as classes.
- Potência máxima na saída do transmissor: **A 1.500 W, B 1.000 W, C 100 W**, sempre a **mínima necessária**; em algumas subfaixas prevalece limite de e.i.r.p. (1 W, 5 W, 25 W, 100 W conforme o caso).
- Cada banda é dividida em segmentos com modos permitidos, DX, chamada, piloto/IBP, ACDS, IVG, repetidoras e satélites. Verifique o segmento e o modo antes de transmitir.
- Sobre modos digitais: **criptografia proibida (6.11)** e **espalhamento espectral e salto em frequência proibidos abaixo de 440 MHz (6.12)**.

## Para aprofundar

- [ ] [Ato nº 926, de 1 de fevereiro de 2024 (Requisitos Técnicos e Operacionais)](https://informacoes.anatel.gov.br/legislacao/component/content/article/165-atos-de-requisitos-tecnicos-de-gestao-do-espectro/2024/1919-ato-926) (Anatel): a tabela oficial completa, com todas as bandas, modos e canalização de repetidoras.
- [ ] [MATERIAL ESTUDO RADIOAMADOR CLASSE C B A COMPLETO 2026](https://www.youtube.com/watch?v=uuTkiVIE4G0) (PY2LSW, André "Salim"): vídeo de um radioamador brasileiro que apresenta material de estudo em português e comenta o plano de faixas. Título e canal confirmados por oEmbed; o vídeo não foi assistido e o próprio autor oferece consultoria paga, então trate como material de apoio, não como fonte normativa.

[Próxima aula: Indicativos, alfabeto fonético e código Q](./04%20-%20Indicativos%20Alfabeto%20Fonetico%20e%20Codigo%20Q.md)
