---
aliases:
  - Módulo 15
modulo: 15
parte: "V Arquiteturas modernas"
dominios:
  - 2
  - 3
lida: false
tags:
  - modulo
  - saa-c03
  - modulo-15
---

# Módulo 15: Desacoplamento, filas, eventos e workflows

Este módulo responde a uma pergunta de arquitetura: como fazer componentes de um sistema falharem, escalarem e evoluírem **de forma independente**? A resposta é o [[Desacoplamento]] por meio de mensageria. Você vai ver por que a chamada síncrona encadeada derruba o sistema inteiro, e como cada serviço da AWS resolve um pedaço do problema: [[SQS]] (fila), [[SNS]] ([[Pub-Sub|pub/sub]]), [[EventBridge]] ([[Event Bus|barramento de eventos]]), [[Step Functions]] ([[Orquestracao|orquestração]]), [[Amazon MQ]] (migração de brokers) e [[AppFlow]] (dados de SaaS). A comparação com o Kinesis fica para a última aula, e o detalhe de [[Streaming de Dados|streaming]] está no [[22 - Dados Analytics e Ingestao|Módulo 22]].

> [!info] O que este módulo assume
> Você já viu rede e computação ([[06 - VPC a Fundo|Módulo 6]] em diante) e vai usar [[Lambda]] como consumidor em vários exemplos; o detalhe do Lambda está no [[16 - Serverless Lambda e API Gateway|Módulo 16]]. Os nomes atuais dos serviços aparecem com os antigos entre parênteses: o [[EventBridge]] se chamava [[CloudWatch]] Events.

## Aulas

1. [[15.01 - Por Que Desacoplar e os Padroes de Mensageria|15.1 Por que desacoplar e os padrões de mensageria]]: falha em cascata, [[Disponibilidade|disponibilidade]] em série, quatro padrões, entrega at-least-once e [[Idempotencia|idempotência]].
2. [[15.02 - SQS Filas Standard e o Ciclo de Vida da Mensagem|15.2 SQS: filas Standard e o ciclo de vida da mensagem]]: [[Visibility Timeout|visibility timeout]], polling, [[Dead-Letter Queue|DLQ]], retenção, tamanho e escala por backlog.
3. [[15.03 - SQS FIFO e Padroes de Consumo|15.3 SQS FIFO e padrões de consumo]]: ordem, grupos de mensagens, deduplicação, [[Throughput|throughput]] e [[Idempotencia|consumidor idempotente]].
4. [[15.04 - SNS Topicos Fan-out e Filtros|15.4 SNS: tópicos, fan-out e filtros]]: modelo de tópico, [[SNS]] com [[SQS]], [[Filter Policy|filter policy]], tópicos FIFO e retentativas.
5. [[15.05 - EventBridge Barramento Regras Scheduler e Pipes|15.5 EventBridge: barramento, regras, Scheduler e Pipes]]: padrões de evento, [[Dead-Letter Queue|DLQ]], archive e replay, agendamento e Pipes.
6. [[15.06 - Step Functions Orquestracao de Workflows|15.6 Step Functions: orquestração de workflows]]: estados, Retry e Catch, Standard e Express, callbacks e Map.
7. [[15.07 - Amazon MQ e AppFlow|15.7 Amazon MQ e AppFlow]]: migrar brokers sem reescrever e trazer dados de SaaS sem código.
8. [[15.08 - Escolhendo entre SQS SNS EventBridge Kinesis e Step Functions|15.8 Escolhendo entre SQS, SNS, EventBridge, Kinesis e Step Functions]]: perguntas de decisão e combinações.

## Cobertura do exam guide

| Task statement | Onde está |
|---|---|
| **2.1** Projetar arquiteturas escaláveis e fracamente acopladas (filas, tópicos, barramentos, workflows, brokers) | [[15.01 - Por Que Desacoplar e os Padroes de Mensageria\|15.1]], [[15.02 - SQS Filas Standard e o Ciclo de Vida da Mensagem\|15.2]], [[15.03 - SQS FIFO e Padroes de Consumo\|15.3]], [[15.04 - SNS Topicos Fan-out e Filtros\|15.4]], [[15.05 - EventBridge Barramento Regras Scheduler e Pipes\|15.5]], [[15.06 - Step Functions Orquestracao de Workflows\|15.6]], [[15.07 - Amazon MQ e AppFlow\|15.7]], [[15.08 - Escolhendo entre SQS SNS EventBridge Kinesis e Step Functions\|15.8]] |
| **3.2** Projetar soluções de alta performance e escaláveis (integração, escala por backlog, [[Throughput\|throughput]]) | [[15.02 - SQS Filas Standard e o Ciclo de Vida da Mensagem\|15.2]], [[15.03 - SQS FIFO e Padroes de Consumo\|15.3]], [[15.05 - EventBridge Barramento Regras Scheduler e Pipes\|15.5]], [[15.08 - Escolhendo entre SQS SNS EventBridge Kinesis e Step Functions\|15.8]] |

## Checklist de saída do módulo

- [ ] Sei explicar por que a chamada síncrona encadeada derruba o sistema inteiro e como uma fila quebra essa dependência.
- [ ] Sei explicar por que o [[Visibility Timeout|visibility timeout]] existe e o que acontece quando ele é menor que o tempo de processamento.
- [ ] Sei explicar por que a entrega at-least-once exige [[Idempotencia|consumidor idempotente]].
- [ ] Sei explicar por que a [[Dead-Letter Queue|DLQ]] existe, e por que a [[Poison Message|mensagem venenosa]] sem DLQ trava o consumo.
- [ ] Sei explicar quando uma [[Fila FIFO|fila FIFO]] é necessária e o papel do [[Message Group|message group]].
- [ ] Sei explicar por que o padrão [[SNS]] com várias [[SQS]] é melhor que o SNS sozinho para consumidores lentos.
- [ ] Sei explicar quando escolher [[EventBridge]] em vez de [[SNS]], e por que o Scheduler substitui regras agendadas.
- [ ] Sei explicar por que Standard e Express do [[Step Functions]] existem e como a duração e o `.waitForTaskToken` decidem a escolha.
- [ ] Sei explicar por que o [[Amazon MQ]] existe se já há [[SQS]] e [[SNS]].
- [ ] Sei explicar por que replay e vários leitores independentes pedem stream, não fila.
- [ ] Sei explicar por que um atraso maior que 15 minutos pede o [[EventBridge Scheduler]] (ou um Wait do [[Step Functions]]) e não o delay do [[SQS]].

## Teste-se

**1.** Uma API síncrona chama três serviços internos em sequência, e a lentidão de um deles derruba toda a cadeia. Qual mudança desacopla melhor?

- [ ] a) Aumentar o timeout da API para 60 segundos e repetir automaticamente as chamadas que falharem no cliente
- [ ] b) Adicionar mais uma instância para cada serviço
- [ ] c) Colocar uma fila SQS entre a API e o serviço lento, respondendo assim que a mensagem entra
- [ ] d) Trocar o protocolo HTTP por gRPC

**2.** Uma [[SQS|fila SQS]] tem consumidores que levam em média 90 segundos por mensagem, e o [[Visibility Timeout|visibility timeout]] está no padrão. O que deve ocorrer?

- [ ] a) Cada mensagem será processada uma vez
- [ ] b) As mensagens reaparecem antes do fim do processamento e podem ser processadas em duplicidade
- [ ] c) O SQS aumenta o visibility timeout automaticamente para cobrir o tempo de processamento de cada mensagem
- [ ] d) As mensagens vão direto à DLQ

**3.** Uma mensagem malformada falha em todas as tentativas e fica reaparecendo, atrasando o resto da fila. Como isolar sem perder a mensagem?

- [ ] a) Reduzir a retenção da fila para 60 segundos
- [ ] b) Aumentar o delay da fila para 15 minutos, adiando a entrega de todas as mensagens da fila
- [ ] c) Apagar a fila e recriá-la
- [ ] d) Configurar uma dead-letter queue com maxReceiveCount

**4.** Um sistema de pagamentos exige que as operações de uma mesma conta sejam processadas na ordem, e contas diferentes podem rodar em paralelo. Qual configuração usar?

- [ ] a) Fila Standard com vários consumidores
- [ ] b) Uma fila FIFO com um único MessageGroupId para todas as contas
- [ ] c) Um tópico SNS Standard com uma fila por conta
- [ ] d) Fila FIFO com o ID da conta como MessageGroupId

**5.** O número de mensagens na fila cresce nos picos, e o grupo de [[EC2|instâncias EC2]] que as processa deve escalar. Qual [[Metrica|métrica]] é mais indicada?

- [ ] a) Uso de CPU médio das instâncias do grupo, que acompanha de perto o tamanho da fila de mensagens
- [ ] b) Backlog por instância, calculado com as mensagens visíveis e o número de instâncias
- [ ] c) Número de requisições ao balanceador
- [ ] d) Rede de saída das instâncias

**6.** Um evento "pagamento aprovado" deve chegar a três sistemas, cada um com ritmo e retentativa próprios. Qual padrão usar?

- [ ] a) Um tópico SNS com assinaturas HTTP diretas para cada um dos três sistemas internos da empresa
- [ ] b) Uma fila SQS lida pelos três sistemas
- [ ] c) Um tópico SNS com uma fila SQS para cada sistema
- [ ] d) Três chamadas síncronas da aplicação de origem

**7.** Dois assinantes de um tópico [[SNS]] devem receber apenas eventos de determinadas categorias, sem código de filtro. Qual recurso usar?

- [ ] a) Filter policy em cada assinatura
- [ ] b) Uma função Lambda que filtra antes de reenviar
- [ ] c) Um tópico por categoria e por consumidor, sempre
- [ ] d) Um stream com dois consumidores

**8.** Uma empresa quer reagir a eventos de um parceiro SaaS e encaminhá-los a destinos diferentes por padrão de conteúdo. Qual serviço atende?

- [ ] a) Amazon SQS FIFO
- [ ] b) Amazon EventBridge com um barramento de parceiros
- [ ] c) AWS Step Functions Express
- [ ] d) Amazon MQ com ActiveMQ

**9.** Um evento com falha de entrega para um alvo do [[EventBridge]] deve ser guardado para análise depois das retentativas. O que configurar?

- [ ] a) Uma dead-letter queue (SQS Standard) no alvo da regra
- [ ] b) Um tópico SNS FIFO como DLQ
- [ ] c) Aumentar a retenção do barramento para 1 dia
- [ ] d) Um segundo barramento personalizado, configurado para receber cópia dos eventos que falharam

**10.** (Escolha DUAS.) Uma [[Lambda|função Lambda]] consome uma [[SQS|fila SQS]] com [[Dead-Letter Queue|DLQ]], em lotes de 10 mensagens. Quais configurações estão corretas?

- [ ] a) Visibility timeout da fila de pelo menos seis vezes o timeout da função
- [ ] b) maxReceiveCount igual a 1 para que a mensagem com falha vá logo para a DLQ
- [ ] c) Partial batch response, devolvendo só as mensagens do lote que falharam
- [ ] d) Timeout da função maior que o visibility timeout da fila, para cobrir picos
- [ ] e) Um tópico SNS como DLQ da fila, para notificar a equipe a cada falha

**11.** (Escolha DUAS.) Cada novo objeto em um [[Bucket|bucket]] [[S3]] deve ser processado por três sistemas independentes, sem ordem entre eles, e a falha de um sistema não pode afetar nem atrasar os outros. Quais elementos fazem parte de um desenho adequado?

- [ ] a) Notificação de eventos do S3 publicando em um tópico SNS
- [ ] b) Uma fila SQS por sistema assinando o tópico, cada uma com a sua DLQ
- [ ] c) Notificação do S3 para uma única fila lida em conjunto pelos três sistemas
- [ ] d) Notificação do S3 para uma única função Lambda que chama os três sistemas em sequência
- [ ] e) Um workflow Express síncrono que chama os três sistemas e devolve o resultado ao S3

**12.** Um fluxo de aprovação de despesas leva dias e deve parar sem consumir recursos, retomando quando o gerente responde. Qual solução usar?

- [ ] a) Step Functions Standard com .waitForTaskToken
- [ ] b) Step Functions Express com Wait de 5 dias
- [ ] c) Lambda com laço de polling
- [ ] d) Instância EC2 pequena rodando um cron que consulta o banco de despesas a cada minuto

**13.** Uma aplicação Java usa JMS com um ActiveMQ local e a migração não pode alterar o código. Qual serviço atende?

- [ ] a) Reescrever a camada de mensageria para a API do Amazon SQS
- [ ] b) Amazon SNS com filas FIFO
- [ ] c) Amazon MQ com ActiveMQ
- [ ] d) Amazon Kinesis Data Streams

**14.** O ActiveMQ no [[Amazon MQ]] deve tolerar a falha de uma [[Zona de Disponibilidade|AZ]]. Qual implantação usar?

- [ ] a) Single-instance com EBS
- [ ] b) Active/standby em duas AZs com EFS
- [ ] c) Single-instance em uma AZ com backup diário
- [ ] d) Dois brokers em contas diferentes

**15.** Dados de oportunidades do Salesforce devem ir para o [[S3]] toda noite, sem escrever código. Qual serviço atende?

- [ ] a) Amazon AppFlow com um flow agendado
- [ ] b) Lambda com a API do Salesforce
- [ ] c) Amazon Kinesis Data Firehose
- [ ] d) Amazon SQS

**16.** Vários times precisam ler o mesmo fluxo de eventos de forma independente, e um deles quer reprocessar os últimos 30 dias. Qual serviço atende?

- [ ] a) Amazon SQS Standard
- [ ] b) Amazon SNS com filas SQS
- [ ] c) Amazon Kinesis Data Streams
- [ ] d) AWS Step Functions Standard com um estado Map sobre os eventos recebidos

**17.** Um processo tem seis passos, retentativas, uma compensação se a cobrança falhar e visibilidade por execução. Qual solução usar?

- [ ] a) Seis funções Lambda encadeadas
- [ ] b) Seis filas SQS em sequência
- [ ] c) Um tópico SNS com seis assinaturas
- [ ] d) Uma state machine Standard do Step Functions com Retry e Catch

**18.** Uma [[Fila FIFO|fila FIFO]] de alto volume deve processar mensagens em paralelo e manter a ordem apenas dentro de cada cliente. O que isso exige?

- [ ] a) Um MessageGroupId distinto por cliente
- [ ] b) Um MessageGroupId único para todos os clientes
- [ ] c) Trocar para fila Standard
- [ ] d) Aumentar o visibility timeout para 12 horas

> [!success]- Gabarito
> **1. c)** a fila entre a API e o serviço lento quebra a dependência síncrona e permite responder logo; a) [[Timeout|timeout]] maior só adia a falha; b) mais instâncias não removem o acoplamento; d) trocar de protocolo não desacopla.
> **2. b)** com o [[Timeout|timeout]] de 30 s menor que 90 s a mensagem reaparece e pode ser processada em duplicidade; a) não ocorre; c) o [[SQS]] não ajusta sozinho; d) a [[Dead-Letter Queue|DLQ]] só recebe depois de maxReceiveCount.
> **3. d)** a [[Dead-Letter Queue|DLQ]] com maxReceiveCount isola a [[Poison Message|mensagem venenosa]] sem perdê-la; a) retenção curta apaga; c) recriar perde dados; b) o delay não resolve.
> **4. d)** [[Message Group|MessageGroupId]] por conta garante ordem por conta e paralelismo entre contas; a) Standard não garante ordem; c) um tópico Standard não ordena; b) um único grupo serializa tudo.
> **5. b)** o [[Backlog por Instancia|backlog por instância]] reflete a carga real da fila; a) CPU pode estar baixa com a fila crescendo; c) requisições ao balanceador não medem a fila; d) rede não mede o trabalho pendente.
> **6. c)** [[SNS]] com uma fila por sistema dá cópia, buffer e retry independentes; a) [[HTTP]] direto perde o buffer durável; b) uma fila compartilhada divide as mensagens; d) chamadas síncronas acoplam.
> **7. a)** a [[Filter Policy|filter policy]] filtra no [[SNS]] sem código; b) a Lambda é overhead; c) um tópico por consumidor é desnecessário; d) o stream não é a solução.
> **8. b)** o [[EventBridge]] tem barramento de parceiros SaaS e regras por padrão; a) FIFO não roteia; c) [[Step Functions]] não recebe eventos de parceiros assim; d) o [[Amazon MQ]] não é para isso.
> **9. a)** a [[Dead-Letter Queue|DLQ]] do alvo é uma [[SQS|fila SQS]] Standard; b) [[SNS]] FIFO não é DLQ do [[EventBridge]]; c) a retenção do barramento não guarda falhas de entrega; d) outro barramento não guarda a falha.
> **10. a) e c)** a AWS recomenda 6x o [[Timeout|timeout]] da função para cobrir retentativas e o partial batch response evita reprocessar as mensagens que deram certo; b) com 1 qualquer falha isolada manda a mensagem para a [[Dead-Letter Queue|DLQ]] (a recomendação para Lambda é pelo menos 5); d) o timeout da função não pode superar o da fila; e) a DLQ de uma [[SQS|fila SQS]] precisa ser uma fila do mesmo tipo.
> **11. a) e b)** o [[S3]] publica uma vez no [[SNS]] e uma fila por sistema dá buffer, retentativa e [[Dead-Letter Queue|DLQ]] independentes; c) em uma fila compartilhada cada mensagem vai a um só sistema; d) a Lambda única acopla os três e a lentidão de um atrasa os outros; e) o Express síncrono é at-most-once e mantém o acoplamento de tempo.
> **12. a)** Standard com `.waitForTaskToken` pausa de forma durável; b) o Express termina em 5 minutos; c) o polling gasta execuções; d) a [[EC2]] é servidor ligado.
> **13. c)** o [[Amazon MQ]] mantém o broker e o protocolo JMS, sem alterar o código; a) reescrever para a API do [[SQS]] viola o requisito (e, mesmo a Amazon SQS Java Messaging Library, que dá JMS 1.1 sobre o SQS, exige trocar a connection factory e as dependências e não preserva as capacidades do ActiveMQ); b) [[SNS]] não é broker JMS; d) o Kinesis é para [[Streaming de Dados|streaming]].
> **14. b)** active/standby em duas [[Zona de Disponibilidade|AZs]] com [[EFS]] tolera a falha de uma AZ; a) e c) ficam em uma AZ; d) dois brokers independentes não são [[Alta Disponibilidade|HA]].
> **15. a)** o [[AppFlow]] faz a transferência sem código; b) a Lambda exige código; c) o [[Data Firehose|Firehose]] entrega streams; d) o [[SQS]] não conecta ao Salesforce.
> **16. c)** o Kinesis guarda registros e permite releitura por vários consumidores; a) o [[SQS]] apaga ao consumir; b) [[SNS]] com filas não permite replay; d) [[Step Functions]] orquestra.
> **17. d)** a [[State Machine|state machine]] Standard orquestra com Retry, Catch e histórico; a) funções encadeadas perdem estado; b) filas em sequência exigem código de cola; c) assinaturas não coordenam.
> **18. a)** um [[Message Group|MessageGroupId]] por cliente mantém a ordem por cliente e paraleliza entre clientes; b) um grupo único serializa; c) Standard não garante ordem; d) o [[Timeout|timeout]] não afeta a ordem.

## Próximo módulo

[[16 - Serverless Lambda e API Gateway|Próximo módulo: Serverless, Lambda e API Gateway]]
