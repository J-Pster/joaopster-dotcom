---
aliases:
  - "CRR"
  - "Cross-Region Replication"
  - "S3 Replication"
  - "SRR"
  - "Same-Region Replication"
  - "replicação do S3"
  - "replicação entre Regiões"
tags:
  - glossario
  - dados
---
# Replicacao do S3

A replicação do S3 copia objetos de forma assíncrona e automática de um bucket de origem para um ou mais de destino, na mesma Região (SRR) ou em outra (CRR), na mesma conta ou em outra. Exige versionamento nos dois buckets e uma IAM role. A regra ativa só copia objetos novos, e deleções permanentes e, por padrão, delete markers não são replicados.

> [!example] Exemplo
> Um bucket em us-east-1 replica para sa-east-1 como cópia de recuperação de desastres.

Veja também: [[Batch Replication]], [[Durabilidade]], [[Regiao AWS]], [[Versionamento]]

## Onde aparece

- **Módulo 2:** [[02.07 - Anatomia de uma Questao|2.7]]
- **Módulo 8:** [[08.04 - KMS Rotacao Material Importado Multi-Region e Exclusao|8.4]], [[08.08 - Secrets Manager e Parameter Store|8.8]], [[08.09 - Governanca de Dados Object Lock e Macie|8.9]]
- **Módulo 10:** [[10.09 - FSx for NetApp ONTAP e FSx for OpenZFS|10.9]]
- **Módulo 11:** [[11 - Amazon S3 a Fundo|nota do módulo]], [[11.01 - O Modelo do S3 Buckets Objetos e Durabilidade|11.1]], [[11.03 - Ciclo de Vida e Custo no S3|11.3]], [[11.05 - Criptografia Versionamento e Retencao no S3|11.5]], [[11.06 - Replicacao do S3|11.6]]
- **Módulo 13:** [[13.08 - Aurora Global Database Serverless v2 e Recursos|13.8]]
- **Módulo 14:** [[14.07 - ElastiCache e MemoryDB|14.7]]
- **Módulo 15:** [[15.07 - Amazon MQ e AppFlow|15.7]]
- **Módulo 17:** [[17.02 - ECR Repositorio de Imagens|17.2]]
- **Módulo 18:** [[18 - Borda e DNS CloudFront Global Accelerator e Route 53|nota do módulo]], [[18.03 - Origens OAC Failover e Origin Shield|18.3]], [[18.10 - Padroes de Arquitetura e Decisao de Borda e DNS|18.10]]
- **Módulo 19:** [[19.08 - Credenciais da Aplicacao e Decisao Final|19.8]]
- **Módulo 20:** [[20 - Alta Disponibilidade e Recuperacao de Desastres|nota do módulo]], [[20.02 - Multi-AZ e Multi-Region Servico por Servico|20.2]], [[20.03 - RPO e RTO e o Custo da Recuperacao|20.3]], [[20.06 - Replicacao entre Regioes e Elastic Disaster Recovery|20.6]], [[20.09 - Tornar Aplicacao Legada Resiliente sem Mudar o Codigo|20.9]]
- **Módulo 22:** [[22.01 - Por Que um Pipeline de Dados e o Mapa de Servicos|22.1]]
- **Módulo 23:** [[23.08 - Storage Gateway e o Armazenamento Hibrido|23.8]]
- **Módulo 25:** [[25.01 - Como a AWS Cobra e o Pilar de Custos|25.1]], [[25.07 - S3 Classes Ciclo de Vida e Custo de Objetos|25.7]]
- **Módulo 26:** [[26.07 - Plano de DR e Estimativa de Custo|26.7]], [[26.08 - Revisao Well-Architected e Trade-offs|26.8]], [[26.09 - Mudancas de Requisito no Estilo da Prova|26.9]]
- **Módulo 27:** [[27.02 - Tecnica de Resolucao Tempo e Eliminacao|27.2]], [[27.03 - Revisao Final Mapa Requisito Servico e Pares que Confundem|27.3]], [[27.05 - Simulado 2|27.5]]
