[Voltar ao módulo](./README.md)

# Aula 7: Equipamentos e repetidoras

*Pergunta que esta aula responde: que equipamento compõe uma estação de radioamador, por que as repetidoras existem e como configuro meu rádio para usar uma?*

> Regras de repetidora conferidas no Ato nº 3448/2026 (item 10.5) e no Ato nº 926/2024 (item 6.8 e Tabelas II a XXIX), verificadas em setembro de 2026. Detalhes de menu variam por rádio: consulte o manual do seu modelo. Não invento comandos de rádio específicos; os exemplos de menu abaixo são de um modelo popular, descritos por fontes citadas.

## A estação de radioamador: peças e por que cada uma existe

Uma estação é o conjunto que transforma sua voz (ou dados) em onda de rádio e de volta. Use o diagrama de blocos que a prova cobra (ementa do Ato 3448: "diagrama de blocos de receptores, transmissores, transceptores e repetidoras"):

```
microfone/teclado -> [transmissor: oscilador, modulador, amplificador de potência]
                                    |
                     linha de transmissão (cabo coaxial)
                                    |
                                 antena  <---- ar ---->  antena do outro
                                    |
                     [receptor: amplificador de RF, misturador, filtro, demodulador] -> alto-falante
```

Um **transceptor** (transceiver) reúne transmissor e receptor no mesmo aparelho e a antena é comutada entre os dois pelo PTT (Push To Talk, botão de transmissão).

### Tipos de equipamento

| Tipo | O que é | Uso típico |
|---|---|---|
| **HT** (Handheld Transceiver, rádio portátil) | Mão, bateria, antena curta, poucos watts (tipicamente 1 a 8 W) | VHF/UHF local, repetidoras, uso portátil |
| **Rádio móvel** | Instalado no carro, alimentado pela bateria do veículo, tipicamente 25 a 75 W em VHF/UHF | Alcance maior em movimento, antena externa |
| **Rádio base VHF/UHF** | Mesmo tipo do móvel em casa, com fonte e antena fixa | Uso local em repetidoras e simplex |
| **Transceptor de HF** | Cobre várias bandas de 1,8 a 29,7 MHz, tipicamente 100 W, com SSB, CW e digitais | Contatos de longa distância, DX, emergência |
| **Fonte de alimentação** | Converte a rede em corrente contínua estável, tipicamente perto de 13,8 V | Alimenta rádios móveis e HF em casa |
| **Antena e cabos** | Ver abaixo | Definem alcance mais que a potência |
| **Acessórios de medida** | Wattímetro/medidor de ROE (SWR), antena artificial (carga fantasma), multímetro | Verificar o sistema com segurança |

### Coisas que a física do Módulo 4 diz sobre a escolha

- **O cabo coaxial perde sinal**, e perde mais em frequências altas. Em VHF/UHF, use cabo curto e de boa qualidade; um cabo fino e longo pode "comer" boa parte da potência antes da antena. Escolha cabo por frequência e comprimento, com a tabela de atenuação do fabricante.
- **O medidor de ROE** (razão de ondas estacionárias, SWR) mede quanta potência volta pela linha por descasamento entre cabo e antena (Módulo 4). ROE alto danifica o estágio final do rádio e desperdiça potência. A prova cobra "onda estacionária" e "uso de antena artificial" (ementa).
- **A antena artificial** (carga fantasma) é um resistor casado que dissipa a potência do transmissor **sem irradiar**. Serve para testar e ajustar o rádio sem interferir em ninguém. Sempre que for testar um transmissor sem antena adequada, use-a.

### Exemplo resolvido: dimensionar a fonte para um rádio de HF

Um transceptor de HF de 100 W de saída. A eficiência típica do amplificador de potência de rádios desse tipo fica na ordem de 50% (valor ilustrativo, confira o manual do seu rádio). Potência CC necessária: `100 W / 0,5 = 200 W`. Corrente a 13,8 V: `I = P / V = 200 / 13,8 = 14,5 A`. Então a fonte precisa entregar com folga algo como 20 A contínuos, e o cabo de alimentação precisa ter bitola para essa corrente sem aquecer, com fusível. É esse tipo de conta (`P = V x I`) que a matéria de eletrônica da prova cobra.

### Rádios "chineses" baratos

Os HTs mais baratos costumam ter dois problemas para o aluno: 1) transmitem em faixas muito além das amadoras (Aula 3), e 2) muitos são vendidos sem homologação brasileira. Regras:

- Ter o COER **não** autoriza transmitir fora da Tabela I do Ato 926 nem fora dos modos previstos.
- O equipamento precisa de homologação; para uso próprio, há a declaração de conformidade gratuita (Aula 2).
- Configure o rádio para operar **só** em faixas amadoras e programe as frequências que você vai realmente usar.

## Repetidoras: o problema e a solução

### O problema

Em VHF e UHF a propagação é de linha de visada (Módulo 2). Um HT no chão da cidade alcança poucos quilômetros porque o horizonte e os prédios bloqueiam. Mas a **linha de visada aumenta muito com a altura da antena**. A solução: colocar uma estação **no alto de um morro ou prédio**, que ouve sua chamada e a retransmite com potência e antena melhores. É isso uma **estação repetidora**.

### O mecanismo: duas frequências e o "offset"

Uma repetidora recebe e transmite **ao mesmo tempo**. Se ela recebesse e transmitisse na mesma frequência, o transmissor dela (perto e forte) taparia o receptor. Por isso usa duas frequências:

- **Entrada** (input): onde a repetidora **escuta**. É a frequência em que **o seu rádio transmite**.
- **Saída** (output): onde a repetidora **transmite**. É a frequência em que **o seu rádio recebe**.

A distância entre as duas é o **offset** (afastamento), padronizado em cada banda. A **direção** (mais ou menos) diz se a entrada fica acima ou abaixo da saída.

Do plano de faixas do Ato 926 (frequências de **saída** e a entrada correspondente):

| Banda | Saída da repetidora | Offset (entrada = saída ...) |
|---|---|---|
| 2 m | 145,200 a 145,500 MHz e 146,600 a 146,990 MHz | **menos 600 kHz** |
| 2 m | 146,990 a 147,400 MHz | **mais 600 kHz** |
| 70 cm | 439,000 a 440,000 MHz | **menos 5 MHz** |
| 6 m | 51,610 a 52,000 MHz | menos 500 kHz |
| 10 m | 29,620 a 29,700 MHz | menos 100 kHz |
| 1,3 m | 223,850 a 225,000 MHz | menos 1,6 MHz |
| 33 cm | 927,125 a 928,000 MHz | menos 25 MHz |
| 23 cm | 1.282 a 1.288 MHz | menos 12 MHz |

(A tabela do Ato também prevê pares na direção oposta para alguns trechos de 2 m: saídas em 144,600 a 144,900 MHz e 146,000 a 146,390 MHz, com offset mais 600 kHz. Consulte o plano completo.)

**Exemplo resolvido.** Repetidora com saída em **146,870 MHz** e offset **menos 600 kHz**. Seu rádio **recebe** em 146,870 MHz. Ele **transmite** em `146,870 - 0,600 = 146,270 MHz`. A repetidora escuta em 146,270 e retransmite em 146,870.

**Exemplo em 70 cm.** Saída 439,500 MHz e offset menos 5 MHz: seu rádio transmite em `439,500 - 5,000 = 434,500 MHz`.

### O subtom (CTCSS)

Muitas repetidoras só se abrem se receberem um **tom contínuo de baixíssima frequência** junto com sua voz. É o **CTCSS** (Continuous Tone-Coded Squelch System), com tons de **67,0 Hz a 254,1 Hz**. O tom fica abaixo da faixa de voz e o receptor da repetidora só é acionado se detectar o tom correto. Serve a três coisas: evitar que ruído e sinais espúrios acionem a repetidora; distinguir repetidoras que compartilham a mesma frequência em regiões que se sobrepõem; e reduzir interferência. **Não é criptografia nem privacidade** (Aula 5): quem escuta a saída ouve tudo.

### O que o regulamento exige da repetidora (Ato 3448, item 10.5)

- Deve **irradiar automaticamente seu indicativo** em intervalos **não superiores a uma hora**, e ter meio de ser **controlada e desligada remotamente**.
- Pode manter a emissão por no máximo **5 segundos** após o sinal de entrada sumir (o "rabicho" ou tail).
- Uso continuado **não pode exceder 10 minutos**, com desligamento automático e temporização reiniciada a cada pausa no sinal recebido.
- Pode transmitir unilateralmente, sem limite de tempo, em emergência, em medições e fins experimentais autorizados, boletins de interesse de radioamadores e aulas ou palestras de treinamento.
- Deve ser **aberta a todos os radioamadores**, respeitadas as classes, e o acesso **não pode ser codificado com o fim de restringir** a comunicação.
- Titular da licença: Classe A ou B, associação de radioamadores, universidade ou escola, entidade de defesa civil, escoteiros ou bandeirantes; com Classe A responsável quando é pessoa jurídica. Precisa entrar em funcionamento em um ano e é revogada se ficar inativa por mais de um ano.

**Dois efeitos práticos para o usuário:** faça transmissões curtas (cada vez, menos de 10 minutos) e **deixe uma pausa** entre trocas: o "rabicho" de 5 s e o reinício do temporizador tornam a pausa parte do protocolo.

### Repetidora "no seu rádio" (banda cruzada)

Alguns rádios dual band têm função de repetição própria (um sinal em UHF é retransmitido em VHF). Uma **estação repetidora** é, no regulamento, um tipo de estação com licença própria, com titulares específicos e regras (indicativo automático, desligamento remoto). **Ativar a função de repetidor de um rádio como estação permanente pode enquadrá-lo como estação repetidora.** Antes de usar assim de forma contínua, confirme com a Anatel. A regra permite combinar frequências de entrada e saída de bandas diferentes para repetidoras em banda cruzada (Ato 926, 6.8.1) desde que licenciadas.

## Como usar uma repetidora, passo a passo

1. **Encontre uma repetidora próxima**: com amigos radioamadores, clubes da região ou bases de dados de repetidoras (por exemplo, o site repetidoras.com.br exibe indicativo, frequência TX, offset, subtom e status). Listas podem estar desatualizadas.
2. **Anote**: frequência de saída, direção do offset, offset e subtom.
3. **Programe no rádio**: frequência de recepção = saída; direção do deslocamento (+, -); offset (600 kHz em 2 m, 5 MHz em 70 cm); tom de transmissão (T-CTCSS) com o subtom da repetidora. Grave em uma memória.
4. **Confirme** apertando o PTT (com antena ou antena artificial) e observando que a frequência de transmissão exibida é a esperada (146,270 no exemplo).
5. **Escute antes**: ouça alguns minutos para entender o ritmo e se há um "net" (rodada organizada).
6. **Aguarde a frequência livre** e chame, por exemplo: "PY2ABC escutando" ou "PY2ABC, procurando contato". Ceda a vez.
7. **Fale em trocas curtas**, com pausa entre elas. Diga seu indicativo completo, com fonética se necessário.
8. **Prioridade**: emergência tem precedência absoluta.
9. **Se acionar e não ouvir resposta**, verifique se o subtom está correto e se o sinal chega à repetidora. Muitas vezes o problema é distância ou antena ruim.

### Simplex

Falar direto entre dois rádios, na mesma frequência, sem repetidora: **simplex**. O Ato 926 marca **frequências de chamada** em FM (por exemplo 146,520 MHz em 2 m, 29,600 MHz em 10 m, 1.294,5 MHz em 23 cm). Chame e depois **combine outra frequência** para não ocupar a de chamada.

### Outros usos no plano de faixas

- **APRS** (rede de posicionamento e mensagens curtas): o Ato reserva 145,565 a 145,575 MHz para ACDS (APRS), em modos digitais.
- **IVG/Echolink e afins**: gateways de voz por internet em segmentos próprios (por exemplo 145,000 a 145,200 MHz), só simplex, e a estação deve seguir a canalização do item 10 do Ato.
- **Satélites**: segmentos marcados (por exemplo 145,800 a 146,000 MHz em 2 m e 435 a 438 MHz em 70 cm), de uso exclusivo.

## Resumo

- Uma estação amadora é transceptor + fonte + linha de transmissão + antena + instrumentos de medida. Alcance vem mais de antena, altura e cabo do que de potência.
- Rádios portáteis baratos transmitem fora das faixas amadoras: ter COER não autoriza; programe só o permitido e homologue o equipamento.
- Repetidora existe para dar altura à linha de visada de VHF/UHF. Usa duas frequências: entrada (você transmite) e saída (você recebe), separadas por um **offset** padronizado (2 m: 600 kHz; 70 cm: 5 MHz; direção conforme o trecho).
- **Subtom CTCSS** abre a repetidora; **não é privacidade**.
- Regras da repetidora: indicativo automático até 1 h, rabicho de 5 s, uso de até 10 min, aberta a todos os radioamadores. Falar em trocas curtas com pausa.

## Para aprofundar

- [ ] [Estudaê: Repetidoras e QRGs Simplex](https://estudae.com.br/repetidoras-e-simplex) (Estudaê): explicação em português de offset, direção do deslocamento e menu de um Baofeng.
- [ ] [Guia Rápido: Ham Repeater](https://repetidoras.com.br/guia/) (repetidoras.com.br): como consultar repetidoras por cidade (indicativo, frequência, offset, subtom, status). Lembre-se de que listas podem estar desatualizadas.
- [ ] [Como CONFIGURAR seu rádio para REPETIDORAS](https://www.youtube.com/watch?v=SJ3uMXkpDzg) (QRG Prepper): vídeo em português que mostra a configuração de um Baofeng V5R com offset e subtom. Título e canal confirmados por oEmbed; o vídeo não foi assistido por mim além do que a transcrição de busca indica.
- [ ] [Como funciona o CTCSS ou Subtom](https://www.cram.org.br/wordpress/?p=1538) (CRAM, PY2JF): texto sobre o funcionamento do subtom.

[Próxima aula: Operação: QSO, logs, QSL e concursos](./08%20-%20Operacao%20QSO%20Logs%20QSL%20e%20Contests.md)
