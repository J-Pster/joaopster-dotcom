[Voltar ao módulo](./README.md)

# Aula 4: Indicativos, alfabeto fonético e código Q

*Pergunta que esta aula responde: como uma estação se identifica de forma única no ar, e por que o radioamadorismo usa um alfabeto fonético e um conjunto de abreviações em vez de conversa comum?*

> Fonte: Ato nº 3448, de 11 de março de 2026, itens 10 e 12 (Anatel), conferido em setembro de 2026. Faixas de indicativos e regras de indicativo especial podem ser alteradas por atos futuros.

## Por que o indicativo existe

No Módulo 1 você viu que qualquer receptor no alcance ouve o transmissor, e você não vê quem está falando. Um transmissor **anônimo** é impossível de responsabilizar: se alguém interferir, mentir ou transmitir onde não deve, ninguém sabe quem foi. O **indicativo de chamada** (call sign) é o "endereço de origem" de cada transmissão. É como o campo de origem em um pacote: sem ele, a rede não pode aplicar política nem fiscalizar.

O Ato 3448 define:

- Indicativo de chamada é a característica que identifica uma estação e **deve ser usada no início, durante e no término das emissões ou comunicados**.
- **É vedada a operação de estação sem identificação** (item 10.2).
- O indicativo deve ser declarado **completo, sem supressões ou acréscimos** (item 10.3 IV).
- Numa comunicação, mencionam-se os indicativos **de ambas** as estações (10.3 III).
- É vedado compartilhar ou usar o mesmo indicativo em duas estações simultaneamente (12.8).
- O indicativo **acompanha a estação** na transferência, e cada estação tem um indicativo único (12.5, 12.9).

## A estrutura de um indicativo brasileiro

Um indicativo é **prefixo + dígito + sufixo**:

```
P Y 2 A B C
| | | |___| 
| | |  sufixo (2 ou 3 letras)
| | dígito da região
| segunda letra do prefixo
primeira letra do prefixo
```

- **Prefixo**: duas letras que a UIT reservou ao Brasil (as séries PP a PY e ZV a ZZ são as usadas no Ato 3448). Ele indica o país e, no Brasil, também o estado de origem do indicativo.
- **Dígito**: número que corresponde à região do país, de 1 a 9. O dígito **0** identifica ilhas oceânicas e a Antártica.
- **Sufixo**: letras que identificam a estação.

### Classe A ou B

Prefixo **do estado onde a estação está localizada**, dígito da região e **2 ou 3 letras**. Exemplos da Tabela II do Ato 3448:

| Estado | Faixa de indicativos (Classes A ou B) |
|---|---|
| Rio de Janeiro | PY1 (PY1AA a PY1ZZ e PY1AAA a PY1YZZ) |
| São Paulo | PY2 e, desde a atualização do Ato, também PR2 |
| Minas Gerais | PY4 |
| Rio Grande do Sul | PY3 |
| Paraná | PY5 |
| Bahia | PY6 |
| Pernambuco | PY7 |
| Pará | PY8 |
| Mato Grosso | PY9 |
| Distrito Federal | PT2 |
| Santa Catarina | PP5 |
| Espírito Santo | PP1 |

(A tabela completa, com todos os estados e as faixas exatas, está no Ato.)

### Classe C

Prefixo **PU**, dígito da região e **sempre 3 letras**. A faixa de letras depende do estado. Exemplos: PU2 (SP, faixas PU2KAA a PU2YZZ e, com a atualização, PV2KAA a PV2YZZ), PU4 (MG), PU3 (RS).

**Como ler:** `PU2ABC` é um Classe C (prefixo PU), região 2, estação ABC. `PY2ABC` é Classe A ou B em São Paulo. Isso é útil ao ouvir: o prefixo já diz aproximadamente a classe e a região.

### Estados com mudança recente

O Ato 3448 acrescentou faixas novas para São Paulo (PR2 e PV2) por causa da alta demanda por indicativos. É um exemplo de que a regra muda, então consulte a tabela vigente ao pedir seu indicativo.

### Estação estrangeira, ilhas e espacial

- Estação de radioamador **estrangeiro** no Brasil: prefixo do estado, e o sufixo tem 3 letras **começando com Z**.
- **Ilhas oceânicas**: dígito 0, e a primeira letra do sufixo identifica a ilha (F, Fernando de Noronha; M, Martim Vaz; R, Atol das Rocas; S, Penedos de São Pedro e São Paulo; T, Trindade; A, Antártica).
- **Estações espaciais brasileiras**: prefixo PY, dígito 0, sufixo de 2 ou 3 letras, excetuadas combinações reservadas.

### Restrições no sufixo

Não podem aparecer como sufixo, no todo ou em parte, os grupos **DDD, SNM, SOS, SVH, TTT, XXX, PAN, RRR** e a série **QAA a QZZ** (item 12.2). Faz sentido: eles se confundiriam com sinais de socorro e com códigos Q.

### Você escolhe o indicativo (se estiver disponível)

O radioamador pode escolher o indicativo efetivo, desde que disponível (12.1). Um indicativo só fica vago um ano depois da exclusão de todas as licenças dele; quem o tinha pode pedi-lo de novo nesse período.

### Indicativos especiais

O indicativo especial é concedido a pedido para **um evento** e vale apenas durante ele (12.3). Exige informar o evento (9.1). Só um por vez por estação. Podem ter até 10 caracteres. Prefixos ZV a ZZ podem ser pedidos por A, B e C; prefixos PP a PX só por Classe A que comprove participação em pelo menos dois concursos internacionais (12.12.3). No caso de Classe C o sufixo especial deve começar por W.

### Uma confusão frequente: PX

O prefixo **PX** também é usado pelo **Serviço de Rádio do Cidadão** (PX1A0000, por exemplo). Radioamador é outro serviço: um indicativo PX de PX (CB) não dá acesso às faixas amadoras. Veja a Aula 6.

## O alfabeto fonético da UIT

**Por que existe:** em rádio, o áudio é ruidoso, com estática, desvanecimento (fading) e largura de banda estreita (uma voz em SSB ocupa cerca de 2,4 kHz, Módulo 3). Letras que rimam ("B", "D", "P", "T", "V") se confundem facilmente. Em vez de soletrar "PY2ABC" com as letras cruas, substitui-se cada uma por uma **palavra de fonemas bem distintos**. A prova cobra o **Alfabeto Fonético da UIT** e o Ato 3448 (10.4) autoriza seu uso.

| Letra | Palavra | Letra | Palavra |
|---|---|---|---|
| A | Alfa | N | November |
| B | Bravo | O | Oscar |
| C | Charlie | P | Papa |
| D | Delta | Q | Quebec |
| E | Echo | R | Romeo |
| F | Foxtrot | S | Sierra |
| G | Golf | T | Tango |
| H | Hotel | U | Uniform |
| I | India | V | Victor |
| J | Juliett | W | Whiskey |
| K | Kilo | X | X-ray |
| L | Lima | Y | Yankee |
| M | Mike | Z | Zulu |

Os números são ditos normalmente (em português, no Brasil).

**Exemplo:** o indicativo `PY2ABC` é dito "Papa Yankee Dois Alfa Bravo Charlie". Em vez de "PY2ABC, aqui é o PU4XYZ", diz-se "Papa Yankee Dois Alfa Bravo Charlie, aqui é Papa Uniform Quatro X-ray Yankee Zulu". O alfabeto se decora em poucas sessões de prática, e você vai usá-lo em todo contato.

Boa prática: soletre foneticamente sempre que der o indicativo em condições ruins, e use letras como palavras quando precisar de um nome ou local ("Rio, Romeo India Oscar").

## O código Q

**Por que existe:** origem na telegrafia, onde cada letra custa tempo. Um grupo de três letras começando por Q vale uma frase inteira. Ele também serve para **vencer barreiras de idioma**: um brasileiro e um japonês que não falam a língua do outro se entendem com "QTH?" (onde você está) e "QSL" (recebi).

O Ato 3448 (10.4) permite o Código Q **limitado às séries QRA a QUZ**. Os códigos abaixo estão nessa faixa. O sentido de cada um pode ser afirmação ou pergunta, conforme entonação ou "?" (em CW). Lista dos mais usados:

| Código | Significado prático |
|---|---|
| **QRA** | Nome da estação ou do operador |
| **QRB** | Distância entre as estações |
| **QRG** | Frequência exata |
| **QRK** | Inteligibilidade (compreensibilidade) do sinal |
| **QRL** | A frequência está ocupada / estou ocupado (uso: "QRL?" antes de chamar, "a frequência está em uso?") |
| **QRM** | Interferência de origem artificial (outras estações, ruído humano) |
| **QRN** | Interferência natural (estática, raios) |
| **QRO** | Aumentar potência |
| **QRP** | Reduzir potência (e "QRP" como modalidade: operar com pouquíssima potência) |
| **QRT** | Encerrar a transmissão |
| **QRV** | Estou pronto |
| **QRX** | Aguarde |
| **QRZ** | Quem está me chamando? |
| **QSA** | Intensidade do sinal (1 a 5) |
| **QSB** | Variação (fading) de intensidade |
| **QSL** | Confirmo recebimento (também usado para o cartão QSL) |
| **QSO** | Contato entre estações |
| **QSY** | Mudar de frequência |
| **QTH** | Localização |
| **QTR** | Hora exata |

Esta lista é um conjunto de códigos bem consagrados. A prova cobra "noções do Código Q" (ementa do Ato 3448); estude também a lista da própria Cartilha.

### Outros códigos e abreviações usuais

Fora do código Q existem abreviações de uso corrente, como **73** (cumprimentos), **88** (beijos e abraços, usado principalmente por e para operadoras), **CQ** (chamada geral), **DX** (longa distância), **OM** (colega homem), **YL** (colega mulher), **XYL**, **RIG** (rádio), **SK** (fim de contato em CW). São convenções da comunidade, não normas; você as verá nas aulas seguintes.

## O relatório RST

Ao contatar, você informa como o sinal chegou:

- **R (Readability, legibilidade)**: de 1 a 5.
- **S (Strength, intensidade)**: de 1 a 9.
- **T (Tone, tom)**: de 1 a 9, usado só em CW.

Em voz usa-se **RS**: "59" significa "perfeitamente legível e muito forte" (o padrão dado em contatos rápidos, em concursos por convenção). Em CW "599". Em modos digitais como FT8 (Módulo 7) troca-se relatório em dB de relação sinal/ruído.

O RST é subjetivo. Sua função é retroalimentação: informar ao outro como ele está saindo, para ele ajustar potência ou antena.

## Regras de identificação: o mínimo obrigatório

Do Ato 3448 (item 10):

1. Verificar se o canal está livre antes de transmitir.
2. A chamada pode ser repetida no máximo **três vezes seguidas**, passando imediatamente à escuta.
3. Ao estabelecer contato, dizer o indicativo de **ambas** as estações.
4. Indicativo **sempre completo**.
5. Transmissão limitada a **10 minutos** por vez, exceto em emergência.
6. Repetidoras precisam transmitir automaticamente seu indicativo em intervalos **não superiores a uma hora**.

**Detalhe importante para modos digitais:** o regulamento diz "indicativo no início, durante e no término das emissões". Nos modos digitais e nos experimentos de rede (Módulos 7 a 10), isso significa que o **indicativo deve ir dentro do sinal**. Um sistema que oculte a origem ou a identificação não é compatível com o serviço.

## Resumo

- O indicativo é o "endereço de origem" que torna cada transmissão rastreável; operar sem identificação é proibido.
- Estrutura: **prefixo + dígito da região + sufixo**. Classes A e B: prefixo do estado + 2 ou 3 letras. Classe C: **PU** + dígito + 3 letras. Dígito 0 = ilhas oceânicas e Antártica.
- Indicativo identifica a **estação**, é único, acompanha a estação e não pode ter sufixo como SOS, XXX ou a série QAA-QZZ.
- O **alfabeto fonético da UIT** existe para vencer ruído e confusão de letras semelhantes.
- O **código Q** (permitido de QRA a QUZ) condensa frases e vence barreiras de idioma. RST informa legibilidade e intensidade.

## Para aprofundar

- [ ] [Phonetic alphabets in ham radio](https://www.youtube.com/watch?v=FwO-znAQzbk) (Ria's Ham Shack): vídeo curto, em inglês, sobre o alfabeto fonético no radioamadorismo. Título e canal confirmados por oEmbed; o conteúdo não foi assistido.
- [ ] [Ato nº 3448/2026, itens 10 e 12](https://informacoes.anatel.gov.br/legislacao/atos-de-requisitos-operacionais-de-outorga-e-licenciamento/2148-ato-3448-26) (Anatel): regras de identificação e todas as tabelas de indicativos por estado.

[Próxima aula: Radioamador é público e aberto](./05%20-%20Radioamador%20e%20Publico%20e%20Aberto.md)
