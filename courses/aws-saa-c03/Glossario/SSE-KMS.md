---
aliases:
  - "criptografia no servidor com KMS"
tags:
  - glossario
  - seguranca
---
# SSE-KMS

SSE-KMS é a criptografia em repouso do S3 em que as chaves de dados são protegidas por uma chave do KMS, o que dá controle pela key policy e trilha de auditoria de cada uso no CloudTrail. Em troca, gera chamadas ao KMS e custo, que as S3 Bucket Keys reduzem. Quem envia precisa de kms:GenerateDataKey e quem lê precisa de kms:Decrypt, a chave tem de estar na mesma Região do bucket, e a chave gerenciada pela AWS não pode ser compartilhada entre contas (use uma customer managed key).

> [!example] Exemplo
> Um bucket de dados financeiros usa SSE-KMS com uma chave gerenciada pelo cliente, e cada leitura aparece no CloudTrail.

Veja também: [[Criptografia em Repouso]], [[Customer Managed Key]], [[KMS]], [[S3 Bucket Keys]], [[SSE-S3]]

## Onde aparece

- **Módulo 2:** [[02.02 - Excelencia Operacional e Seguranca|2.2]], [[02.04 - Custos Sustentabilidade e Tensoes entre Pilares|2.4]]
- **Módulo 5:** [[05.08 - CloudTrail e a Trilha de Auditoria|5.8]]
- **Módulo 8:** [[08 - Criptografia e Protecao de Dados|nota do módulo]], [[08.01 - Por que Criptografar e os Fundamentos|8.1]], [[08.02 - AWS KMS Chaves e Envelope Encryption|8.2]], [[08.03 - KMS Key Policy IAM e Grants|8.3]], [[08.06 - Criptografia em Repouso nos Servicos AWS|8.6]], [[08.07 - Criptografia em Transito ACM e Private CA|8.7]]
- **Módulo 11:** [[11 - Amazon S3 a Fundo|nota do módulo]], [[11.02 - Classes de Armazenamento do S3 e Glacier|11.2]], [[11.05 - Criptografia Versionamento e Retencao no S3|11.5]], [[11.06 - Replicacao do S3|11.6]], [[11.07 - Desempenho e Transferencia de Dados no S3|11.7]], [[11.08 - Eventos Site Estatico e Gestao em Escala no S3|11.8]]
- **Módulo 15:** [[15.02 - SQS Filas Standard e o Ciclo de Vida da Mensagem|15.2]], [[15.03 - SQS FIFO e Padroes de Consumo|15.3]], [[15.04 - SNS Topicos Fan-out e Filtros|15.4]]
- **Módulo 18:** [[18 - Borda e DNS CloudFront Global Accelerator e Route 53|nota do módulo]], [[18.03 - Origens OAC Failover e Origin Shield|18.3]]
- **Módulo 21:** [[21.03 - CloudWatch Logs e o Agente|21.3]]
- **Módulo 22:** [[22 - Dados Analytics e Ingestao|nota do módulo]], [[22.02 - Kinesis Data Streams|22.2]], [[22.03 - Data Firehose Kinesis Video Streams e Flink|22.3]], [[22.06 - AWS Glue Catalogo Crawlers e Jobs de ETL|22.6]], [[22.07 - Amazon Athena Consultas SQL no Lago|22.7]], [[22.12 - Seguranca da Ingestao e Decisao Final|22.12]]
- **Módulo 26:** [[26.02 - Iteracao 1 Seguranca em Camadas|26.2]], [[26.06 - Multiconta Governanca e Auditoria|26.6]]
- **Módulo 27:** [[27.03 - Revisao Final Mapa Requisito Servico e Pares que Confundem|27.3]]
