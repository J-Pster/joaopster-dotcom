---
aliases:
  - Módulo 22
modulo: 22
parte: "VII Dados, migração e IA"
lida: false
tags:
  - modulo
  - saa-c03
---

# Módulo 22: Dados, Analytics e Ingestão

Este módulo responde a uma pergunta de arquitetura de dados: **como levar dados de onde nascem até onde geram decisão, escolhendo o serviço certo em cada etapa e pagando só pelo necessário?** Primeiro vem o mapa do pipeline (ingestão, armazenamento, processamento, análise e visualização) e a diferença entre [[Processamento em Lote|lote]] e [[Streaming de Dados|streaming]]. Depois a **ingestão em streaming**: [[Kinesis Data Streams]] ([[Shard|shards]] e consumidores), [[Data Firehose]] (entrega com buffer e conversão), [[Kinesis Video Streams]], [[Managed Service for Apache Flink]] e o [[MSK]], com a decisão entre eles. Em seguida o **[[Data Lake|data lake]] no [[S3]]** ([[Parquet]], compressão, partições), o **Glue** (catálogo, [[Glue Crawler|crawlers]], jobs), o **Athena** (consulta cobrada por dado lido), o **[[Lake Formation]]** (governança), o **[[Redshift]]** ([[Data Warehouse|data warehouse]]) e o **[[EMR]]** ([[Apache Spark|Spark]] e Hadoop). Fecham o módulo os serviços de consumo e apoio ([[OpenSearch Service|OpenSearch]], [[Amazon Quick]], [[Data Exchange]], [[Data Pipeline]], [[AppFlow]]) e a **segurança da ingestão**, com uma árvore de decisão final.

O raciocínio é o da prova: dado um requisito de dados, qual serviço gerenciado entrega o resultado **com o menor [[Overhead Operacional|esforço operacional]] e o menor custo**, e qual palavra-chave do enunciado decide entre dois candidatos parecidos.

## Aulas

1. [[22.01 - Por Que um Pipeline de Dados e o Mapa de Servicos|Aula 22.1: Por que um pipeline de dados e o mapa de serviços]]
2. [[22.02 - Kinesis Data Streams|Aula 22.2: Kinesis Data Streams]]
3. [[22.03 - Data Firehose Kinesis Video Streams e Flink|Aula 22.3: Data Firehose, Kinesis Video Streams e Flink]]
4. [[22.04 - MSK e a Escolha do Servico de Streaming|Aula 22.4: MSK e a escolha do serviço de streaming]]
5. [[22.05 - Data Lake no S3 Formatos e Particionamento|Aula 22.5: Data lake no S3, formatos e particionamento]]
6. [[22.06 - AWS Glue Catalogo Crawlers e Jobs de ETL|Aula 22.6: AWS Glue, catálogo, crawlers e jobs de ETL]]
7. [[22.07 - Amazon Athena Consultas SQL no Lago|Aula 22.7: Amazon Athena, consultas SQL no lago]]
8. [[22.08 - Lake Formation Governanca do Data Lake|Aula 22.8: Lake Formation, governança do data lake]]
9. [[22.09 - Amazon Redshift Data Warehouse na AWS|Aula 22.9: Amazon Redshift, data warehouse na AWS]]
10. [[22.10 - EMR Big Data com Spark e Hadoop|Aula 22.10: EMR, big data com Spark e Hadoop]]
11. [[22.11 - OpenSearch Quick Data Exchange e Servicos Auxiliares|Aula 22.11: OpenSearch, Quick, Data Exchange e serviços auxiliares]]
12. [[22.12 - Seguranca da Ingestao e Decisao Final|Aula 22.12: Segurança da ingestão e decisão final]]

## Cobertura do exam guide

| Task do exam guide | Onde é coberto |
|---|---|
| **Task 3.5**: Determinar soluções de ingestão e transformação de dados de alto desempenho | [[22.01 - Por Que um Pipeline de Dados e o Mapa de Servicos\|Aula 22.1]], [[22.02 - Kinesis Data Streams\|22.2]], [[22.03 - Data Firehose Kinesis Video Streams e Flink\|22.3]], [[22.04 - MSK e a Escolha do Servico de Streaming\|22.4]], [[22.05 - Data Lake no S3 Formatos e Particionamento\|22.5]], [[22.06 - AWS Glue Catalogo Crawlers e Jobs de ETL\|22.6]], [[22.07 - Amazon Athena Consultas SQL no Lago\|22.7]], [[22.08 - Lake Formation Governanca do Data Lake\|22.8]], [[22.09 - Amazon Redshift Data Warehouse na AWS\|22.9]], [[22.10 - EMR Big Data com Spark e Hadoop\|22.10]], [[22.11 - OpenSearch Quick Data Exchange e Servicos Auxiliares\|22.11]], [[22.12 - Seguranca da Ingestao e Decisao Final\|22.12]] (decisão final) |
| **Task 2.1**: Projetar arquiteturas desacopladas (parcial: [[Streaming de Dados\|streaming]] com Kinesis, [[MSK]], [[SQS]] e [[SNS]] como pontos de [[Desacoplamento\|desacoplamento]]) | [[22.02 - Kinesis Data Streams\|Aula 22.2]], [[22.04 - MSK e a Escolha do Servico de Streaming\|22.4]] |
| **Task 4.3**: Projetar soluções de banco de dados com custo otimizado (parcial: custo de análise com Athena, [[Redshift]], [[EMR]] e formatos de arquivo) | [[22.02 - Kinesis Data Streams\|Aula 22.2]] (conta de [[Shard\|shards]], provisionado x on-demand), [[22.05 - Data Lake no S3 Formatos e Particionamento\|22.5]], [[22.06 - AWS Glue Catalogo Crawlers e Jobs de ETL\|22.6]], [[22.07 - Amazon Athena Consultas SQL no Lago\|22.7]], [[22.09 - Amazon Redshift Data Warehouse na AWS\|22.9]], [[22.10 - EMR Big Data com Spark e Hadoop\|22.10]] |
| **Task 1.3**: Determinar controles apropriados de segurança de dados (parcial: governança do lake, criptografia e rede da ingestão) | [[22.08 - Lake Formation Governanca do Data Lake\|Aula 22.8]], [[22.12 - Seguranca da Ingestao e Decisao Final\|22.12]] |

## Checklist de saída do módulo

Antes de seguir, você deveria conseguir responder, sem consultar:

- [ ] Por que o [[Kinesis Data Streams]] escala por [[Shard|shards]], e como somar escrita e leitura mostra quantos você precisa?
- [ ] Por que o [[Enhanced Fan-out|enhanced fan-out]] existe, e quando vários consumidores compartilhando um shard deixam de ser suficientes?
- [ ] Por que o [[Data Firehose]] entrega em lotes (buffer) em vez de registro a registro, e o que isso muda na [[Latencia|latência]] e no número de arquivos?
- [ ] Por que o [[MSK]] é a resposta quando a aplicação já usa [[Apache Kafka|Kafka]], e o Kinesis é a resposta quando o [[Streaming de Dados|streaming]] é novo?
- [ ] Por que o [[Parquet]] com partições reduz o custo do Athena, se a cobrança é por dado lido?
- [ ] Por que o [[Glue Data Catalog]] é compartilhado por Athena, [[Redshift Spectrum]] e [[EMR]]?
- [ ] Por que o [[Lake Formation]] não substitui o [[IAM]], e como as duas camadas se combinam?
- [ ] Por que o [[Redshift]] é indicado para muitos usuários de BI e o Athena para consultas esporádicas?
- [ ] Por que usar [[Spot Instance|Spot]] só nos nós de task do [[EMR]], e por que os dados duráveis ficam no [[S3]]?
- [ ] Por que um endpoint de interface mantém a ingestão fora da internet, e quando o endpoint de gateway do [[S3]] é a escolha?

## Teste-se

Questões de cenário que cruzam várias aulas do módulo. Quase todas são inéditas em relação às das aulas.

**1.** Milhares de sensores IoT enviam leituras continuamente. A empresa quer guardá-las no [[S3]] em [[Armazenamento Colunar|formato colunar]], consultá-las com SQL e montar painéis, com o MENOR [[Overhead Operacional|overhead operacional]] e custo. Qual arquitetura atende?

- [ ] a) IoT Core, SQS, consumidores em EC2, uma instância RDS PostgreSQL e Amazon Quick
- [ ] b) IoT Core, Kinesis Data Streams, Firehose em Parquet, S3, Athena e Quick
- [ ] c) IoT Core, Amazon MSK, um cluster EMR persistente, Redshift provisionado e Amazon Quick
- [ ] d) IoT Core, uma função Lambda por mensagem, uma tabela do DynamoDB e painéis no Amazon Quick

**2.** Uma aplicação escreve 8.000 registros por segundo de 1 KB cada em um [[Kinesis Data Streams|Kinesis Data Stream]] provisionado. Quatro consumidores padrão (sem [[Enhanced Fan-out|enhanced fan-out]]) leem todo o fluxo. Quantos [[Shard|shards]] são necessários, considerando escrita e leitura?

- [ ] a) 4 shards
- [ ] b) 8 shards
- [ ] c) 12 shards, com 50% de folga
- [ ] d) 16 shards

**3.** O tráfego de um stream é estável e conhecido, cerca de 6 MB/s o dia inteiro, e o objetivo é o MENOR custo. Qual modo de capacidade escolher?

- [ ] a) Modo provisionado com 6 shards
- [ ] b) Modo on-demand
- [ ] c) Modo provisionado com 20 shards, para ter folga
- [ ] d) MSK Serverless com um tópico

**4.** Um processamento [[Apache Spark|Spark]] com bibliotecas [[Apache Hive|Hive]] customizadas, que só rodam no [[EMR]], executa duas horas por noite sobre dados do [[S3]]. A equipe quer reduzir o custo sem perder resultados. O que fazer?

- [ ] a) Usar Spot em todos os nós, inclusive o primary
- [ ] b) Manter um cluster persistente com instâncias reservadas de três anos
- [ ] c) Usar um cluster transitório, com Spot nos nós de task e dados no S3
- [ ] d) Guardar os dados só no HDFS, para evitar as leituras do S3

**5.** (Escolha DUAS.) Um painel de BI consulta um [[Data Warehouse|data warehouse]] apenas três horas por dia. Quais ações reduzem o custo?

- [ ] a) Manter um cluster provisionado ligado 24 horas, com reserva de três anos
- [ ] b) Usar o Redshift Serverless, limitando a capacidade máxima em RPUs
- [ ] c) Trocar por um cluster provisionado maior, para terminar mais depressa
- [ ] d) Pausar o cluster provisionado fora do horário do painel e retomá-lo depois
- [ ] e) Ativar o concurrency scaling durante todo o dia

**6.** Uma conta produtora precisa dar a uma conta consumidora acesso às tabelas do lake, só às colunas não sensíveis, sem copiar dados. O que usar?

- [ ] a) Replicar o bucket para a conta consumidora e apagar a coluna sensível
- [ ] b) Dar à conta consumidora acesso total ao bucket por política de bucket
- [ ] c) Compartilhar as tabelas pelo Lake Formation, só com as colunas liberadas
- [ ] d) Exportar as tabelas para CSV e enviá-las por uma transferência segura de arquivos

**7.** O [[Data Firehose|Firehose]] gera milhões de arquivos de 50 KB no [[S3]], e as consultas do Athena ficaram lentas. Qual mudança resolve com o MENOR esforço?

- [ ] a) Aumentar o buffer do Firehose e gravar em Parquet
- [ ] b) Particionar os arquivos também por minuto e por segundo
- [ ] c) Trocar o Firehose por uma função Lambda gravando cada registro
- [ ] d) Aumentar o número de workers do workgroup do Athena para ler mais depressa

**8.** (Escolha DUAS.) Um [[Data Warehouse|data warehouse]] [[Redshift]] provisionado de produção roda em uma única [[Zona de Disponibilidade|AZ]]. Quais afirmações estão corretas?

- [ ] a) Os nós DC2 suportam a implantação Multi-AZ
- [ ] b) O cluster fica indisponível se a AZ falhar
- [ ] c) O bucket do COPY pode estar em qualquer Região
- [ ] d) Snapshots mantêm o cluster no ar durante a falha da AZ
- [ ] e) O Multi-AZ exige nós RA3 ou RG

**9.** Logs de 40 [[Microsservicos|microsserviços]] precisam de busca de texto livre em quase tempo real, e os índices antigos devem custar menos, sem sair do mesmo serviço. O que escolher?

- [ ] a) Athena sobre os logs em S3 Standard, consultando sem nenhum índice
- [ ] b) OpenSearch com todos os dados em nós quentes por um ano
- [ ] c) Um data warehouse Redshift com uma tabela por serviço
- [ ] d) OpenSearch com UltraWarm e cold storage nos índices antigos

**10.** Um job de [[ETL]] do Glue roda toda madrugada e o resultado só é lido na manhã seguinte. Qual ajuste reduz o custo com a MENOR mudança?

- [ ] a) Trocar o job por um cluster EMR permanente
- [ ] b) Usar a classe de execução Flex
- [ ] c) Dobrar o número de workers do job
- [ ] d) Rodar o job a cada hora

**11.** Um painel operacional precisa da média de pedidos dos últimos 5 minutos, atualizada a cada minuto, sobre um [[Kinesis Data Streams|stream do Kinesis]]. Qual serviço calcula isso continuamente?

- [ ] a) Amazon Data Firehose com buffer de 60 segundos
- [ ] b) Amazon Athena consultando o S3 a cada minuto, por agendamento
- [ ] c) Managed Service for Apache Flink e janela deslizante
- [ ] d) Um crawler do Glue agendado a cada minuto

**12.** Cinco aplicações precisam ler todo o mesmo [[Kinesis Data Streams|stream do Kinesis]] com baixa [[Latencia|latência]], e o fluxo também deve ser entregue ao [[S3]] sem código. Qual combinação atende?

- [ ] a) Enhanced fan-out nos cinco consumidores e Firehose para o S3
- [ ] b) Cinco consumidores padrão e uma função Lambda que grava no S3
- [ ] c) Uma fila SQS para cada aplicação e um job do Glue para o S3
- [ ] d) Um tópico SNS com cinco assinantes e o DataSync para o S3

**13.** O produtor de um [[Kinesis Data Streams|stream do Kinesis]] com criptografia [[SSE-KMS]] por chave do cliente recebe AccessDenied ao gravar, embora a role tenha kinesis:PutRecords. Qual é a causa mais provável?

- [ ] a) O stream precisa estar em outra Região para poder usar a chave
- [ ] b) O Kinesis não aceita chaves gerenciadas pelo cliente
- [ ] c) O produtor precisa de um endpoint de gateway do S3
- [ ] d) Falta kms:GenerateDataKey na role, ou a key policy não a permite

**14.** Uma tabela do lake está registrada no [[Lake Formation]] em us-east-1, e analistas em eu-west-1 querem consultá-la com o Athena sem copiar os dados. O que fazer?

- [ ] a) Criar resource links em eu-west-1 e conceder as permissões lá
- [ ] b) Nada, pois as permissões do Lake Formation valem em todas as Regiões
- [ ] c) Replicar o bucket para eu-west-1 e recatalogar com um crawler
- [ ] d) Criar um usuário IAM com chaves de acesso em cada Região

**15.** Uma tabela de 4 TB em CSV custa US$20 por consulta no Athena (US$5 por TB lido). Depois de converter para [[Parquet]] comprimido (1 TB no total), as consultas leem 10% das colunas e filtram 1 dia entre 30 de partições. Qual é o custo aproximado por consulta?

- [ ] a) US$5,00
- [ ] b) US$0,02
- [ ] c) US$0,50
- [ ] d) US$2,00

> [!success]- Gabarito
> **1. b)** o fluxo Kinesis, [[Data Firehose|Firehose]] em [[Parquet]], [[S3]], Athena e Quick é gerenciado e cobra pelo uso; a) fila, [[EC2]] e [[RDS]] exigem operação e não são colunares; c) [[MSK]], [[EMR]] e [[Redshift]] provisionado têm custo fixo e muita gestão; d) o [[DynamoDB]] não faz análise SQL em escala.
> **2. d)** escrita: 8.000 x 1 KB = 8 MB/s, logo 8 [[Shard|shards]]; leitura: 4 consumidores x 8 MB/s = 32 MB/s, e com 2 MB/s compartilhados por shard dá 16 shards; a) e c) ignoram a conta da leitura; b) só vale com [[Enhanced Fan-out|enhanced fan-out]].
> **3. a)** com tráfego estável e conhecido, o provisionado costuma ser mais barato (6 MB/s pedem 6 [[Shard|shards]]); b) o on-demand paga por GB e serve a tráfego imprevisível; c) shards extras pagam capacidade ociosa; d) o [[MSK]] [[Serverless]] é outro serviço, para [[Apache Kafka|Kafka]].
> **4. c)** cluster transitório elimina a ociosidade, [[Spot Instance|Spot]] em task nodes tolera interrupção e o [[S3]] guarda os dados; a) Spot no primary arrisca o cluster; b) reserva de três anos para duas horas por noite desperdiça; d) o [[HDFS]] some com o cluster.
> **5. b), d)** o [[Serverless]] cobra só pelo uso e a pausa do provisionado interrompe a cobrança de computação; a) paga as 24 horas; c) cluster maior custa mais por hora; e) o concurrency scaling adiciona capacidade e custo.
> **6. c)** o compartilhamento do [[Lake Formation]] concede por coluna e entre contas, sem cópia; a) replicar duplica dados; b) acesso total expõe a coluna sensível; d) exportar para CSV cria cópias e perde governança.
> **7. a)** buffer maior gera menos arquivos e maiores, e o [[Parquet]] reduz bytes lidos; b) partições demais pioram o problema; c) uma Lambda por registro cria ainda mais arquivos pequenos; d) o Athena é [[Serverless|serverless]] e não tem workers a ajustar.
> **8. b), e)** o Single-AZ cai com a [[Zona de Disponibilidade|AZ]], e o [[Multi-AZ]] exige [[RA3]] ou RG; a) DC2 não suporta Multi-AZ; c) o [[Bucket|bucket]] do COPY deve estar na mesma Região; d) [[Snapshot|snapshots]] restauram, mas não mantêm o cluster no ar.
> **9. d)** o [[OpenSearch Service|OpenSearch]] faz busca de texto, e [[UltraWarm]] e cold storage baratem os índices antigos no mesmo serviço; a) o Athena não indexa texto para busca em quase tempo real; b) nós quentes por um ano custam mais; c) o [[Redshift]] não é busca de texto.
> **10. b)** o [[Glue Flex|Flex]] serve a cargas sem urgência e custa menos por DPU-hora; a) o [[EMR]] permanente cobra o tempo todo; c) mais workers aumentam o custo por hora; d) rodar mais vezes aumenta o custo.
> **11. c)** o [[Managed Service for Apache Flink|Flink]] calcula agregações em janelas deslizantes sobre streams; a) o [[Data Firehose|Firehose]] só entrega; b) o Athena consulta arquivos, não stream contínuo; d) o [[Glue Crawler|crawler]] cataloga, não calcula.
> **12. a)** o [[Enhanced Fan-out|enhanced fan-out]] dá [[Throughput|vazão]] dedicada a cada consumidor e o [[Data Firehose|Firehose]] entrega ao [[S3]] sem código; b) consumidores padrão dividem 2 MB/s e a Lambda é código a manter; c) uma fila por aplicação perde o stream e o replay; d) o [[SNS]] não lê do stream e o [[DataSync]] move arquivos.
> **13. d)** com chave do cliente, o produtor precisa de kms:GenerateDataKey e a [[Key Policy|key policy]] precisa permitir; a) a chave deve ficar na mesma Região do stream; b) o Kinesis aceita chaves do cliente; c) o endpoint de gateway é do [[S3]].
> **14. a)** o acesso cross-Region usa [[Resource Link|resource links]] na outra Região com concessões lá, sem copiar dados; b) as permissões são regionais e não se propagam sozinhas; c) replicar duplica dados e custo; d) chaves de longo prazo são insegurança.
> **15. b)** 1 TB x 10% = 100 GB, e 1/30 disso é cerca de 3,3 GB, ou US$0,017, perto de US$0,02; a) ignora a [[Particao de Dados|poda de partições]]; c) e d) ignoram a leitura de só 10% das colunas ou de 1 dia.

## Próximo módulo

[[23 - Migracao e Transferencia de Dados|Próximo módulo: Migração e Transferência de Dados]]
