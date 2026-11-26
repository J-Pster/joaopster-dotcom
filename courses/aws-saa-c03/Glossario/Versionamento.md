---
aliases:
  - "S3 Versioning"
  - "versionamento de bucket"
  - "versionamento do S3"
tags:
  - glossario
  - dados
---
# Versionamento

O versionamento do S3 guarda todas as versões de um objeto no mesmo bucket, cada uma com um ID de versão. Com ele ligado, apagar um objeto cria só um delete marker, e é possível recuperar versões anteriores. Uma vez ligado, só pode ser suspenso, e cada versão é cobrada integralmente. É pré-requisito de replicação e de Object Lock.

> [!example] Exemplo
> Um funcionário apaga um relatório; o time remove o delete marker e a versão anterior volta a ser a atual.

Veja também: [[Lifecycle Policy]], [[Object Lock]], [[Replicacao do S3]], [[S3]]

## Onde aparece

- **Módulo 2:** [[02.07 - Anatomia de uma Questao|2.7]]
- **Módulo 5:** [[05.08 - CloudTrail e a Trilha de Auditoria|5.8]]
- **Módulo 8:** [[08.06 - Criptografia em Repouso nos Servicos AWS|8.6]], [[08.08 - Secrets Manager e Parameter Store|8.8]], [[08.09 - Governanca de Dados Object Lock e Macie|8.9]]
- **Módulo 10:** [[10.01 - Bloco Arquivo e Objeto Por Que Existem Tres Tipos|10.1]]
- **Módulo 11:** [[11 - Amazon S3 a Fundo|nota do módulo]], [[11.01 - O Modelo do S3 Buckets Objetos e Durabilidade|11.1]], [[11.03 - Ciclo de Vida e Custo no S3|11.3]], [[11.05 - Criptografia Versionamento e Retencao no S3|11.5]], [[11.06 - Replicacao do S3|11.6]], [[11.07 - Desempenho e Transferencia de Dados no S3|11.7]], [[11.08 - Eventos Site Estatico e Gestao em Escala no S3|11.8]]
- **Módulo 18:** [[18 - Borda e DNS CloudFront Global Accelerator e Route 53|nota do módulo]], [[18.01 - Por que a Borda e como o CloudFront Entrega Conteudo|18.1]], [[18.02 - Cache Behaviors Cache Key TTL e Invalidacao|18.2]]
- **Módulo 20:** [[20 - Alta Disponibilidade e Recuperacao de Desastres|nota do módulo]], [[20.02 - Multi-AZ e Multi-Region Servico por Servico|20.2]], [[20.03 - RPO e RTO e o Custo da Recuperacao|20.3]], [[20.05 - AWS Backup Snapshots e Cofres Imutaveis|20.5]], [[20.06 - Replicacao entre Regioes e Elastic Disaster Recovery|20.6]]
- **Módulo 21:** [[21.07 - Systems Manager Gerencia Remota e Parametros|21.7]], [[21.08 - Health Trusted Advisor License Manager e Remediacao Automatica|21.8]]
- **Módulo 22:** [[22.02 - Kinesis Data Streams|22.2]], [[22.05 - Data Lake no S3 Formatos e Particionamento|22.5]]
- **Módulo 23:** [[23.04 - Conversao de Esquemas e Escolha do Caminho para Bancos|23.4]]
- **Módulo 24:** [[24.05 - SageMaker AI e Modelo Proprio|24.5]]
- **Módulo 25:** [[25.07 - S3 Classes Ciclo de Vida e Custo de Objetos|25.7]]
- **Módulo 26:** [[26.03 - Iteracao 2 Resiliencia e Desacoplamento|26.3]], [[26.05 - Iteracao 4 Custo Otimizado|26.5]], [[26.06 - Multiconta Governanca e Auditoria|26.6]], [[26.07 - Plano de DR e Estimativa de Custo|26.7]], [[26.08 - Revisao Well-Architected e Trade-offs|26.8]]
- **Módulo 27:** [[27.04 - Simulado 1|27.4]], [[27.05 - Simulado 2|27.5]]
