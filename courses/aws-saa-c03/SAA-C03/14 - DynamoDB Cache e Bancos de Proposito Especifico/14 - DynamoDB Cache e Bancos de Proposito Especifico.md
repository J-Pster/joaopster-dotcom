---
aliases:
  - Módulo 14
modulo: 14
parte: "IV Bancos de dados"
tags:
  - modulo
  - saa-c03
---

# Módulo 14: DynamoDB, cache e bancos de propósito específico

O [[13 - Bancos Relacionais RDS e Aurora|Módulo 13]] mostrou o que fazer quando o requisito é SQL, joins e transações. Este módulo trata do restante do mapa de bancos da prova: o [[DynamoDB]], o NoSQL de chave-valor que escala sem servidores, as camadas de **cache** que tiram leitura repetida do banco ([[DAX]] e [[ElastiCache]]) e os serviços de **propósito específico** (documento, Cassandra, grafo, série temporal). A pergunta que guia o módulo: **dado um padrão de acesso e um requisito de [[Latencia|latência]], escala, compatibilidade ou custo, qual banco ou cache atende, e por que os outros não?**

Ele é **prático**: as aulas de capacidade do [[DynamoDB]] e de [[ElastiCache]] trazem laboratórios opcionais (em conta pessoal, com aviso de custo e limpeza), mas nenhum é obrigatório para a prova.

> [!info] Pré-requisitos
> [[01 - Nuvem e Infraestrutura Global AWS|Módulo 1]] ([[Regiao AWS|Regiões]] e [[Zona de Disponibilidade|AZs]]), [[08 - Criptografia e Protecao de Dados|Módulo 8]] ([[KMS]]) e [[13 - Bancos Relacionais RDS e Aurora|Módulo 13]] (relacionais, para comparar com NoSQL).

## Aulas

1. [[14.01 - Por que NoSQL e Escolha pelo Padrao de Acesso|Aula 14.1: Por que NoSQL e escolha pelo padrão de acesso]]: modelos de dados, partição por [[Hash|hash]], [[Transacoes ACID|ACID]] versus [[Consistencia Eventual|consistência eventual]] e o fluxo de decisão.
2. [[14.02 - DynamoDB Modelo de Dados Chaves e Particoes|Aula 14.2: DynamoDB, modelo de dados, chaves e partições]]: itens, [[Partition Key|chave de partição]] e de ordenação, operações, consistência e transações.
3. [[14.03 - DynamoDB Capacidade RCU WCU e Custo|Aula 14.3: DynamoDB, capacidade, RCU, WCU e custo]]: on-demand versus provisioned, contas de [[RCU]] e [[WCU]], [[Hot Partition|partição quente]] e [[S3 Standard-IA|Standard-IA]].
4. [[14.04 - DynamoDB Indices Secundarios Query e Scan|Aula 14.4: DynamoDB, índices secundários, Query e Scan]]: [[LSI]], [[GSI]], índice esparso e quando usar cada operação.
5. [[14.05 - DynamoDB Streams TTL Backup e Global Tables|Aula 14.5: DynamoDB, Streams, TTL, backup e Global Tables]]: reação a mudanças, expiração, [[Point-in-Time Recovery|PITR]], exportação e multi-Região.
6. [[14.06 - Estrategias de Cache e DAX|Aula 14.6: Estratégias de cache e DAX]]: camadas de cache, [[Lazy Loading|lazy loading]], [[Write-Through|write-through]], [[TTL]] e o [[DAX]].
7. [[14.07 - ElastiCache e MemoryDB|Aula 14.7: ElastiCache e MemoryDB]]: Redis, [[Valkey]] e [[Memcached]], modo [[Serverless|serverless]] e por nós, [[Alta Disponibilidade|alta disponibilidade]], segurança e [[MemoryDB]].
8. [[14.08 - Bancos de Proposito Especifico|Aula 14.8: Bancos de propósito específico]]: [[DocumentDB]], [[Keyspaces]], [[Neptune]], séries temporais e a ponte para analytics.
9. [[14.09 - Decisao Qual Banco para Qual Requisito|Aula 14.9: Decisão, qual banco para qual requisito]]: fluxo de decisão, palavras que decidem sozinhas, custo e combinações.

**Por que 9 aulas e nesta ordem.** Primeiro o porquê do NoSQL e a regra de ouro, o padrão de acesso (14.1). O [[DynamoDB]] ocupa quatro aulas porque é o serviço mais cobrado do módulo: modelo e chaves (14.2), capacidade e custo (14.3), índices e consultas (14.4) e recursos de operação (14.5). Com o banco compreendido, entra o cache (14.6 e 14.7), que existe para aliviar um banco. Os serviços de propósito específico (14.8) vêm depois, porque dependem de reconhecer o modelo de dados. A decisão final (14.9) junta tudo.

## Cobertura do exam guide

| Task statement | Onde está |
|---|---|
| Task 3.3: soluções de banco de dados de alto desempenho | [[14.02 - DynamoDB Modelo de Dados Chaves e Particoes\|Aula 14.2]], [[14.03 - DynamoDB Capacidade RCU WCU e Custo\|Aula 14.3]], [[14.04 - DynamoDB Indices Secundarios Query e Scan\|Aula 14.4]], [[14.06 - Estrategias de Cache e DAX\|Aula 14.6]], [[14.07 - ElastiCache e MemoryDB\|Aula 14.7]] e [[14.09 - Decisao Qual Banco para Qual Requisito\|Aula 14.9]] |
| Task 4.3: bancos de dados com custo otimizado | [[14.03 - DynamoDB Capacidade RCU WCU e Custo\|Aula 14.3]], [[14.08 - Bancos de Proposito Especifico\|Aula 14.8]] e [[14.09 - Decisao Qual Banco para Qual Requisito\|Aula 14.9]] |
| Task 2.1: componentes [[Desacoplamento\|desacoplados]] e serviços de propósito específico | [[14.01 - Por que NoSQL e Escolha pelo Padrao de Acesso\|Aula 14.1]], [[14.05 - DynamoDB Streams TTL Backup e Global Tables\|Aula 14.5]] e [[14.08 - Bancos de Proposito Especifico\|Aula 14.8]] |
| Task 2.2: resiliência, replicação e recuperação (inclui DR entre [[Regiao AWS\|Regiões]]: [[Global Tables]] MREC/MRSC, global clusters do [[DocumentDB]] e do [[Neptune]]) | [[14.05 - DynamoDB Streams TTL Backup e Global Tables\|Aula 14.5]], [[14.07 - ElastiCache e MemoryDB\|Aula 14.7]] e [[14.08 - Bancos de Proposito Especifico\|Aula 14.8]] |
| Task 1.3: proteção de dados, controle de acesso, criptografia e backup | [[14.02 - DynamoDB Modelo de Dados Chaves e Particoes\|Aula 14.2]] ([[IAM]] e `LeadingKeys`), [[14.05 - DynamoDB Streams TTL Backup e Global Tables\|Aula 14.5]] e [[14.07 - ElastiCache e MemoryDB\|Aula 14.7]] |

Analytics ([[Redshift]], Athena, [[OpenSearch Service|OpenSearch]]) fica no [[22 - Dados Analytics e Ingestao|Módulo 22]]; mensageria, no [[15 - Desacoplamento Filas Eventos e Workflows|Módulo 15]].

> [!warning] Fatos que mudam
> Valores citados com "verificado em novembro de 2026" vêm da documentação oficial da AWS na data indicada. Itens marcados como "não confirmado" indicam dado que a documentação consultada não mostrou (por exemplo, prazos de capacidade reservada); os descontos aproximados da [[S3 Standard-IA|Standard-IA]] foram confirmados, mas o preço exato está na página oficial. O [[Timestream|Timestream for LiveAnalytics]] está fechado a novos clientes desde junho de 2025. O [[DAX]] é um recurso do [[DynamoDB]] e não consta como serviço separado na lista do exam guide v1.1, mas aparece em questões de desempenho do DynamoDB; o [[MemoryDB]] e o Timestream não constam na lista. Confira a página oficial antes de decidir em produção.

## Checklist de saída do módulo

- [ ] Sei explicar por que o NoSQL escala melhor com partição por [[Hash|hash]] e o que se abre mão em troca (joins e consultas livres)?
- [ ] Sei dizer por que a [[Partition Key|chave de partição]] precisa de muitos valores distintos e o que é uma [[Hot Partition|partição quente]]?
- [ ] Sei calcular RCUs e WCUs para um item e uma taxa dadas, lembrando de 4 KB de leitura e 1 KB de escrita?
- [ ] Sei escolher entre on-demand e provisioned conforme o padrão de tráfego?
- [ ] Sei diferenciar [[LSI]] de [[GSI]] e explicar por que Scan é a exceção, não a regra?
- [ ] Sei dizer o que o [[DynamoDB Streams]], o [[TTL]] e as [[Global Tables]] resolvem?
- [ ] Sei explicar [[Lazy Loading|lazy loading]] e [[Write-Through|write-through]] e quando cada um deixa o dado velho?
- [ ] Sei dizer quando usar [[DAX]] e quando usar [[ElastiCache]]?
- [ ] Sei associar MongoDB, Cassandra, grafo e série temporal ao serviço certo?
- [ ] Sei aplicar o fluxo de decisão: padrão de acesso, palavra decisiva, escala, custo?

## Teste-se

**1.** Uma loja virtual precisa guardar carrinhos acessados por ID, com picos imprevisíveis na Black Friday, sem administrar servidores nem planejar capacidade. Qual solução atende com menor esforço?

- [ ] a) Amazon RDS for PostgreSQL Multi-AZ, dimensionado para o pior pico estimado do ano inteiro
- [ ] b) Amazon DynamoDB no modo on-demand, chaveado pelo ID do carrinho
- [ ] c) Cassandra em EC2 com Auto Scaling
- [ ] d) Amazon Redshift

**2.** Uma tabela do [[DynamoDB]] tem milhões de leituras por segundo sobre poucos itens populares, e a equipe quer microssegundos sem reescrever a lógica. O que usar?

- [ ] a) Um segundo DynamoDB em outra Região para dividir as leituras
- [ ] b) Amazon ElastiCache com a lógica de cache escrita na aplicação
- [ ] c) Amazon MemoryDB no lugar do DynamoDB
- [ ] d) Amazon DAX na frente da tabela

**3.** A tabela de clientes usa o ID como [[Partition Key|chave de partição]], e agora a aplicação também precisa consultar eficientemente pelo e-mail. Qual é a solução recomendada?

- [ ] a) Um índice secundário global (GSI) com o e-mail como chave de partição
- [ ] b) Um Scan com filtro por e-mail a cada consulta
- [ ] c) Um índice secundário local (LSI) criado agora com o e-mail como chave de partição
- [ ] d) Uma segunda tabela mantida manualmente pela aplicação, com o e-mail como chave

**4.** Um sistema de cadastro faz 100 leituras fortemente consistentes por segundo de itens de 6 KB em uma tabela provisionada, e a empresa quer a menor capacidade que evite [[Throttling|throttling]]. Quantas RCUs são necessárias?

- [ ] a) 100
- [ ] b) 150
- [ ] c) 200
- [ ] d) 400

**5.** Um pipeline de IoT grava 50 itens de 3 KB por segundo em uma tabela [[DynamoDB]] provisionada, com escrita padrão, e a empresa quer a menor capacidade de escrita que evite [[Throttling|throttling]]. Quantas WCUs são necessárias?

- [ ] a) 50
- [ ] b) 150
- [ ] c) 300
- [ ] d) 75

**6.** Uma plataforma de ingressos sofre [[Throttling|throttling]] em uma tabela [[DynamoDB]] cujas escritas se concentram em poucos valores de [[Partition Key|partition key]], embora a capacidade total esteja sobrando. Quais DUAS práticas ajudam a evitar [[Hot Partition|partições quentes]]? (Escolha DUAS.)

- [ ] a) Escolher uma chave de partição com muitos valores distintos e acesso distribuído
- [ ] b) Usar a data do dia como única chave de partição
- [ ] c) Acrescentar um sufixo aleatório às chaves muito populares para espalhar a carga (write sharding)
- [ ] d) Usar um valor constante como chave de partição
- [ ] e) Aumentar as RCUs de toda a tabela e manter a chave como está

**7.** Sessões de login devem ser removidas automaticamente depois do vencimento, sem consumir capacidade de escrita nem código próprio. Qual recurso do [[DynamoDB]] atende?

- [ ] a) Uma Lambda agendada que faz Scan e DeleteItem de hora em hora
- [ ] b) Um cron em EC2 que apaga os itens expirados
- [ ] c) Uma exportação diária para o S3 com limpeza manual
- [ ] d) O TTL do DynamoDB, com um atributo de expiração

**8.** Uma equipe quer que o cache reflita sempre as escritas mais recentes, aceitando escrever em dois lugares. Qual estratégia de cache escolher?

- [ ] a) Write-through
- [ ] b) Lazy loading puro, sem TTL
- [ ] c) Cache somente em leitura, com TTL de 24 horas
- [ ] d) Desligar o cache durante as escritas

**9.** Uma empresa quer migrar um cluster Apache Cassandra com consultas CQL para a AWS sem administrar nós. Qual serviço escolher?

- [ ] a) Amazon DynamoDB, reescrevendo as consultas
- [ ] b) Amazon DocumentDB com um driver Cassandra
- [ ] c) Amazon Keyspaces (for Apache Cassandra)
- [ ] d) Amazon Neptune com Gremlin

**10.** Uma rede social quer descobrir "amigos de amigos" a vários saltos de distância, em milissegundos, sobre bilhões de conexões. Qual serviço foi construído para isso?

- [ ] a) Amazon DynamoDB com GSIs invertidos
- [ ] b) Amazon Neptune, banco de grafo gerenciado
- [ ] c) Amazon RDS for MySQL com uma tabela de relacionamentos
- [ ] d) Amazon ElastiCache for Memcached

**11.** Uma aplicação de recomendações em tempo real precisa de um banco principal em memória, durável e compatível com Redis, com leituras em microssegundos. O que escolher?

- [ ] a) Amazon MemoryDB, compatível com Valkey e Redis OSS
- [ ] b) Amazon ElastiCache for Memcached como banco principal
- [ ] c) Amazon DAX
- [ ] d) Amazon S3 com cache local nos servidores

**12.** Uma equipe escolhe o motor do [[ElastiCache]] para sessões de login e rankings de jogo, exigindo [[Alta Disponibilidade|alta disponibilidade]] entre [[Zona de Disponibilidade|AZs]]. Quais DUAS características favorecem o Redis (ou [[Valkey]]) em vez do [[Memcached]]? (Escolha DUAS.)

- [ ] a) Replicação com failover automático entre AZs
- [ ] b) Arquitetura multithreaded simples como único diferencial
- [ ] c) Estruturas de dados ricas, como conjuntos ordenados
- [ ] d) Ausência total de replicação e de persistência
- [ ] e) Suporte apenas a chave-valor simples de texto

**13.** Uma empresa global quer a mesma tabela do [[DynamoDB]] em três [[Regiao AWS|Regiões]], com escrita local em cada uma e resistência à queda de uma Região. Qual recurso atende com o menor [[Overhead Operacional|esforço operacional]]?

- [ ] a) DynamoDB Streams com uma Lambda copiando os itens à mão
- [ ] b) Backup entre Regiões restaurado uma vez por dia
- [ ] c) Um cluster DAX espalhado por três Regiões
- [ ] d) DynamoDB Global Tables

**14.** Cada vez que um item muda em uma tabela do [[DynamoDB]], uma função deve ser executada para enviar uma notificação. Qual recurso dispara isso?

- [ ] a) Um Scan periódico comparando versões
- [ ] b) O TTL, configurado com prazo de um segundo
- [ ] c) DynamoDB Streams integrado ao AWS Lambda
- [ ] d) Um alarme do CloudWatch sobre as RCUs

**15.** Um sistema financeiro precisa de joins entre muitas tabelas, [[Transacoes ACID|transações ACID]] e relatórios ad hoc em SQL. Qual é a escolha adequada?

- [ ] a) Amazon Aurora, relacional, com SQL e transações ACID
- [ ] b) Amazon DynamoDB, com índices para cada relatório
- [ ] c) Amazon Keyspaces
- [ ] d) Amazon ElastiCache

> [!success]- Gabarito
> **1. b)** [[DynamoDB]] on-demand é [[Serverless|serverless]] e escala com os picos; a) exige dimensionar para o pior caso, c) exige administrar nós, d) é analítico.
> **2. d)** O [[DAX]] é cache compatível com a API do [[DynamoDB]], em microssegundos, sem reescrever a lógica; a) não reduz a [[Latencia|latência]], b) exige código de cache próprio, c) trocaria o banco.
> **3. a)** O [[GSI]] permite outra [[Partition Key|chave de partição]] e pode ser criado depois; b) é lento e caro, c) o [[LSI]] mantém a mesma chave de partição e só nasce com a tabela, d) duplica dados manualmente.
> **4. c)** Um item de 6 KB consome 2 RCUs por [[Consistencia Forte|leitura forte]] (4 KB por unidade, arredondando para cima); 100 leituras exigem 200 RCUs.
> **5. b)** Um item de 3 KB consome 3 WCUs por escrita (1 KB por unidade, arredondando para cima); 50 escritas exigem 150 WCUs.
> **6. a) e c)** Muitos valores distintos e o write sharding espalham a carga; b) e d) concentram o tráfego em poucas partições, e) aumentar RCUs não conserta a distribuição.
> **7. d)** O [[TTL]] remove itens vencidos sem consumir capacidade de escrita; a), b) e c) exigem código ou infraestrutura próprios.
> **8. a)** No [[Write-Through|write-through]] toda escrita atualiza banco e cache; b) e c) deixam o dado velho até o [[TTL]], d) elimina o benefício.
> **9. c)** [[Keyspaces]] é [[Serverless|serverless]] e compatível com Cassandra e CQL; a) exige reescrita, b) [[DocumentDB]] fala MongoDB, d) [[Neptune]] é grafo.
> **10. b)** [[Neptune]] é banco de grafo para travessias de vários saltos; a), c) e d) simulam o grafo com custo e lentidão.
> **11. a)** [[MemoryDB]] é durável, em memória e compatível com Redis, e serve como banco principal; b) [[Memcached]] não persiste, c) o [[DAX]] só atende o [[DynamoDB]], d) o [[S3]] não dá microssegundos.
> **12. a) e c)** Redis e [[Valkey]] têm replicação com [[Failover|failover]] e estruturas ricas; b), d) e e) descrevem o [[Memcached]] ou o inverso.
> **13. d)** [[Global Tables]] replicam entre [[Regiao AWS|Regiões]] com escrita em qualquer uma; a) e b) são manuais ou atrasados, c) o [[DAX]] é cache regional.
> **14. c)** O Streams registra as mudanças e dispara a Lambda; a) é ineficiente, b) o [[TTL]] apaga itens, d) alarme não dispara por item.
> **15. a)** [[Aurora]] é relacional, com joins, [[Transacoes ACID|ACID]] e SQL; b) não faz joins, c) é Cassandra, d) é cache.

## Próximo módulo

[[15 - Desacoplamento Filas Eventos e Workflows|Módulo 15: Desacoplamento, filas, eventos e workflows]]
