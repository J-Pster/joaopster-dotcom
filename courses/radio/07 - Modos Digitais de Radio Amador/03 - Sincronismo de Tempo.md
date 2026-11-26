[Voltar ao módulo](./README.md)

# Aula 3: Sincronismo de tempo, o relógio como parte do modo

*Pergunta que esta aula responde: por que o FT8 e o WSPR exigem que dois computadores tenham o relógio certo, o que acontece com a janela de 15 s quando o relógio erra, como NTP e GPS entregam a hora certa e o que isso significa para uma rede que precisa funcionar sem internet?*

> Requisitos do WSJT-X conforme o guia 2.7.0 e materiais dos autores do WSPR e do JS8Call, consultados em setembro de 2026. As contas de deriva de relógio são ilustrações com valores hipotéticos, marcadas como tal.

## O problema: achar um sinal fraco no tempo e na frequência

Um receptor de rádio analógico procura a frequência do sinal girando o dial. Um receptor digital de sinal fraco precisa descobrir duas coisas: **em que frequência** o sinal está e **em que instante** cada símbolo começa. Se o sinal é 21 dB mais fraco que o ruído (Aula 1), nenhuma das duas descobertas é trivial. Quanto menos incerteza o receptor tiver de partida, menos ele precisa procurar, e mais energia sobra para decodificar.

A solução do WSJT-X, no FT8, FT4 e WSPR, é combinar dois mecanismos:

1. **Janelas de tempo fixas ancoradas no UTC.** Todo mundo sabe de antemão em que segundo a transmissão de cada ciclo começa. O receptor só precisa procurar o início do sinal numa pequena vizinhança do instante nominal.
2. **Sequências de sincronismo dentro do próprio sinal** (arranjos de Costas, Aula 4), que refinam a busca em tempo e em frequência por correlação.

O primeiro mecanismo depende de o relógio do computador estar certo. O guia do WSJT-X lista como requisito "um meio de sincronizar o relógio do computador ao UTC dentro de ±1 segundo".

## As janelas

Os ciclos de transmissão e recepção (T/R) do WSJT-X são:

| Modo | Ciclo T/R | Duração do sinal | Início |
|---|---|---|---|
| FT8 | 15 s | 12,64 s | Segundos 0, 15, 30 e 45 de cada minuto |
| FT4 | 7,5 s | cerca de 5 s (105 símbolos de 48 ms, conta minha) | A cada 7,5 s |
| WSPR | 2 min | 110,6 s | Um segundo depois do início de um minuto par (hh:00:01, hh:02:01...) |
| JT65 e JT9 (legado) | 60 s | | Minutos ímpares ou pares |

Fontes: guia do WSJT-X 2.7.0 (ciclos T/R de 15 s, 7,5 s e 60 s); artigo dos criadores (duração 12,64 s e início nominal 0,5 s após o início do ciclo, no FT8); Wikipedia (WSPR, com a fórmula de duração `162 x 8192 / 12000 = 110,6 s`).

Dois efeitos práticos:

**1. Dois lados se alternam.** Como cada estação ou transmite ou ouve, e ninguém escuta antes de falar como em FM, o modo usa **tempo como regra de acesso**: uma estação transmite nos ciclos pares (segundos 0 e 30) e a outra nos ímpares (15 e 45). No WSJT-X isso aparece como a caixa "Tx even/1st" (o termo "even" são os ciclos que começam em 0 e 30 s; confira o rótulo na sua versão). Em redes de computadores, é um esquema de **TDMA** com relógio global, ao contrário do CSMA do Wi-Fi (escutar e depois falar).

**2. Todas as estações da banda transmitem juntas, no mesmo compasso.** Qualquer sinal decodificado, na frequência que for, começou no mesmo instante que os demais. Isso permite ao receptor analisar todo o áudio de uma vez, por uma janela de tempo comum, e decodificar dezenas de sinais no mesmo ciclo (Aula 4).

## Quanto erro o modo tolera

O FT8 transmite 12,64 s dentro de um ciclo de 15 s e, segundo o artigo dos criadores, a transmissão nominal começa **0,5 s depois** do início do ciclo. Ela termina em `0,5 + 12,64 = 13,14 s`, sobrando `15 - 13,14 = 1,86 s` de folga no fim. O sinal continua dentro do ciclo mesmo se o relógio errar por algo em torno de 1 segundo, e o decodificador procura o início dentro de uma janela em torno do instante nominal.

Como **ambos** os relógios podem errar, o erro relativo entre transmissor e receptor pode somar. O tutorial do WSPR do ZS6SGM registra isso: "para resultados ótimos, o computador deve estar dentro de ±1 segundo" (frase atribuída a K1JT), com a explicação do radioamador G4FQZ de que isso "permite ± em ambas as estações, TX e RX", ou seja, no pior caso, uma diferença de até 2 s entre as duas pontas. O guia do JS8Call diz que um relógio errado em mais de 2 segundos pode impedir a decodificação de mensagens; o autor de um artigo sobre JS8Call (VA3ROM) relata mensagens decodificadas mesmo com mais de 2 s de erro, sinal de que esse modo é mais tolerante que o FT8. O sinal existe, o decodificador é que não o encontra.

**O sintoma clássico**: a cascata (waterfall) mostra sinais, mas a janela de decodificação fica vazia. O material de clube do K6MEP resume: se há cascata e nenhuma decodificação, "verifique a hora do PC, que precisa estar dentro de um segundo".

O WSJT-X mostra, para cada mensagem decodificada, a coluna **DT** (diferença entre o início do sinal que você recebeu e o seu relógio). Se quase todos os sinais da banda aparecem com DT deslocado no mesmo sentido, o erro é do **seu** relógio, não dos outros. Se só uma estação tem DT alto, o relógio dela é que está errado (e ela ainda foi decodificada porque a folga permite).

## Por que o relógio precisa ser "suave", e não só "certo"

O guia do WSJT-X traz uma exigência menos óbvia. Não basta a hora do PC parecer correta:

- O relógio deve ser **monotonicamente crescente**: nunca voltar para trás.
- O relógio deve ser **suavemente contínuo**: o tempo aumenta a uma taxa quase constante, sem saltos; qualquer correção deve ser aplicada ajustando a **taxa** (acelerar ou frear de leve), não com um pulo.
- O guia **não recomenda** ferramentas SNTP ou de correção periódica em degraus.

O motivo é que uma correção em degrau no meio de um ciclo de 12 s de transmissão corrompe um ciclo e pode confundir o programa. Ferramentas que ajustam a taxa (o `ntpd` e o `chrony` trabalham assim para pequenos desvios) evitam isso. A documentação da Meinberg descreve o mesmo comportamento: enquanto o desvio medido está abaixo do limite de salto (128 ms por padrão, no `ntpd`), o relógio é ajustado "lenta e suavemente", a no máximo 500 ppm (1,8 s por hora).

**Conta ilustrativa de deriva.** Um relógio de placa-mãe barato pode desviar algumas dezenas de partes por milhão. Com um desvio hipotético de 50 ppm:

```
50 ppm = 50 microssegundos por segundo
        = 3 ms por minuto = 0,18 s por hora = 4,3 s por dia
```

Sem correção, esse computador sairia da tolerância de 1 s em cerca de `1 / 0,18 = 5,6 horas`. Por isso o relógio precisa de correção **contínua**, e não de um acerto manual no início da noite.

## Como a hora certa chega ao computador

### NTP: hora pela internet

O **NTP** (Network Time Protocol) mede o desvio entre o relógio local e um servidor. O cliente anota quatro instantes: `t0` (envia o pedido), `t1` (o servidor recebe), `t2` (o servidor responde), `t3` (o cliente recebe). A fórmula padrão é:

```
desvio = ((t1 - t0) + (t2 - t3)) / 2
atraso de ida e volta = (t3 - t0) - (t2 - t1)
```

A conta supõe que a ida e a volta demoram o mesmo. Quando não demoram (como numa linha ADSL, com upload e download diferentes), o erro fica escondido no resultado. O artigo de base da Meinberg (NTP Basics) avisa que o desvio real pode ser de alguns milissegundos mesmo que o cliente reporte zero. Isso é irrelevante para o FT8: milissegundos são 3 ordens de grandeza abaixo dos ~1000 ms de tolerância. O NTP na internet **sobra**.

Recomendações, todas de fontes consultadas em setembro de 2026:

- **Windows**: o guia do WSJT-X afirma que o serviço de tempo embutido "geralmente não é adequado" e recomenda o **Meinberg NTP Client**; o Windows 10 recente tem um serviço mais capaz, "adequado se configurado apropriadamente".
- **Linux**: um artigo do desenvolvedor do Skywave Linux (AB9IL) diz que o Linux tem o melhor potencial por padrão porque muitas distribuições trazem o **chrony**, e detalha como chegar a milissegundos (mais do que o FT8 precisa).
- **macOS**: o guia manda selecionar uma fonte de tempo externa nas Preferências do Sistema; o mesmo artigo do AB9IL aponta o chrony via Homebrew como opção melhor que o `timed` padrão.
- **Site de verificação**: o tutorial do WSPR sugere conferir a hora do computador em `time.is`.

### GPS: hora sem internet

Um receptor GPS entrega hora com precisão de microssegundos (a documentação da Meinberg fala em "jitter ao nível de microssegundo" para GPS e PPS, contra milissegundos numa WAN). Serve para operação portátil, onde não há internet. O material de um operador de JS8Call (VA3ROM) cita um receptor GPS com software de hora como alternativa ao NTP quando não há internet.

O **Raspberry Pi não tem relógio de tempo real** embutido, lembra o vídeo do KM4ACK: sem internet e sem GPS, ele liga com a hora errada. Uma estação de campo baseada em Pi precisa de um módulo GPS ou de um RTC externo.

### Sincronizar pelos próprios sinais

O JS8Call tem uma função de correção manual de deriva usando os outros sinais recebidos. Um artigo do KK5JY propõe automatizar isso: ajustar o relógio local com a média das colunas DT das decodificações que o WSJT-X reporta. O argumento dele é que o objetivo real é alinhar o seu relógio com o das **outras estações** da banda, não com o UTC absoluto. A sua conclusão inclui uma opinião pessoal ("o WSJT-X deveria ter recuperação de relógio própria"); trate como opinião, não como norma. E, para funcionar, a maioria das estações fortes ainda precisa estar sincronizada ao UTC, como o próprio autor reconhece.

## O atraso de propagação não importa

Um sinal de HF de 10.000 km leva `10^7 m / (3 x 10^8 m/s) = 33 ms` para chegar. Mesmo dois saltos de 20.000 km somam só 67 ms, bem abaixo dos 500 ms de folga do início do ciclo. A propagação (Módulo 2) não entra na conta do sincronismo do FT8.

## O que muda para uma rede sem internet

Esta é a parte que interessa ao objetivo do curso:

- **Tempo é infraestrutura.** Um modo com janela de 15 s depende de uma fonte de hora comum. Com internet, o NTP entrega isso de graça. Sem internet, a fonte é o GPS, uma dependência de satélites, ou o ajuste manual contra outras estações, uma dependência de vizinhos.
- **Modos assíncronos não dependem disso.** APRS (Aula 7), packet, ARDOP e VARA (Aula 8), PSK31 e RTTY (Aula 6) detectam o início do sinal por si mesmos, com preâmbulos e sincronismo de portadora. Custam mais em sensibilidade e complexidade de modem, mas funcionam com um relógio qualquer.
- **JS8Call fica no meio**: janela de 15 s, mas tolerante a alguns segundos de erro, e com um recurso de correção de deriva pelos sinais recebidos. Por isso é um candidato natural para mensagens de sinal fraco em emergência sem internet (Aula 6).

Esse compromisso reaparece adiante: o LoRaWAN classe B usa beacons de tempo, e as redes mesh precisam decidir se pagam por um relógio global ou se usam protocolos assíncronos (Módulos 8 e 9).

## Resumo

- Um receptor de sinal fraco precisa achar o sinal em tempo e frequência; janelas ancoradas no UTC reduzem a busca em tempo. O WSJT-X exige relógio dentro de ±1 s.
- No FT8, o sinal dura 12,64 s e começa 0,5 s depois do início do ciclo de 15 s (folga final de 1,86 s); como os dois relógios podem errar, o erro relativo pode chegar a 2 s no pior caso. O JS8Call é mais tolerante.
- O relógio precisa ser monotônico e suave: correções em degrau prejudicam o ciclo, correções de taxa (ntpd, chrony, Meinberg NTP) não.
- NTP entrega milissegundos pela internet e GPS entrega microssegundos sem internet; o FT8 precisa de algo como centenas de milissegundos. O atraso de propagação (33 ms para 10.000 km) é irrelevante.
- Tempo é uma dependência de infraestrutura: modos assíncronos (packet, APRS, ARDOP, VARA) não têm essa dependência.

## Para aprofundar

- [ ] [WSJT-X 2.7.0 User Guide](https://wsjt.sourceforge.io/wsjtx-doc/wsjtx-main-2.7.0.html) (Joe Taylor, K1JT): requisito de ±1 s, exigência de relógio monotônico e suave, recomendação do Meinberg NTP no Windows.
- [ ] [NTP Basics](https://kb.meinbergglobal.com/kb/time_sync/ntp/ntp_basics) (Meinberg, base de conhecimento): como o NTP mede desvio, o efeito do atraso assimétrico e o ajuste suave do relógio.
- [ ] [NTP Configuration for Digital Radio Modes](https://skywavelinux.com/timing-for-digital-modes.html) (AB9IL, Skywave Linux): fontes de NTP, chrony e hardware timestamping para modos digitais.
- [ ] [Alternative Clock Management for WSJT-X](https://kk5jy.net/tweaktime/) (KK5JY): sincronizar o relógio pelas colunas DT dos sinais recebidos, para operação portátil sem internet (contém opinião do autor).
- [ ] [JS8 Calling, Part 1](http://www.va3rom.com/docs/ATD039.pdf) (VA3ROM): trecho sobre sincronismo por NTP, GPS e a correção manual do JS8Call.

[Próxima aula: FT8 e FT4 por dentro](./04%20-%20FT8%20e%20FT4%20por%20Dentro.md)
