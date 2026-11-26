---
aliases:
  - "criptografia de dados em repouso"
  - "criptografia em repouso"
  - "dados em repouso"
  - "encryption at rest"
tags:
  - glossario
  - seguranca
---
# Criptografia em Repouso

A criptografia em repouso protege os dados enquanto estão armazenados em disco, banco, snapshot ou backup, de modo que quem obtiver o meio físico ou uma cópia não consiga lê-los sem a chave. Na AWS costuma usar o KMS com AES-256 e é oferecida por serviços como S3, EBS, RDS, DynamoDB, Kinesis, Redshift e OpenSearch. Existe porque proteger só o transporte deixa os dados expostos no armazenamento; ela não protege o dado enquanto trafega pela rede.

> [!example] Exemplo
> Um volume EBS cifrado com KMS guarda os blocos cifrados no disco, e os snapshots dele também ficam cifrados.

Veja também: [[Criptografia em Transito]], [[KMS]], [[Lake Formation]], [[S3]], [[SSE-KMS]]

## Onde aparece

- **Módulo 3:** [[03.07 - TLS HTTPS e Certificados|3.7]]
- **Módulo 5:** [[05.02 - SCPs e Politicas de Organizacao|5.2]]
- **Módulo 8:** [[08 - Criptografia e Protecao de Dados|nota do módulo]], [[08.01 - Por que Criptografar e os Fundamentos|8.1]], [[08.02 - AWS KMS Chaves e Envelope Encryption|8.2]], [[08.06 - Criptografia em Repouso nos Servicos AWS|8.6]], [[08.07 - Criptografia em Transito ACM e Private CA|8.7]], [[08.08 - Secrets Manager e Parameter Store|8.8]]
- **Módulo 10:** [[10 - Armazenamento em Bloco e Arquivos EBS EFS FSx|nota do módulo]], [[10.05 - EBS Snapshots Criptografia e Operacao|10.5]], [[10.06 - EFS Arquivos NFS Compartilhados|10.6]], [[10.08 - FSx for Windows File Server e FSx for Lustre|10.8]], [[10.09 - FSx for NetApp ONTAP e FSx for OpenZFS|10.9]]
- **Módulo 11:** [[11.01 - O Modelo do S3 Buckets Objetos e Durabilidade|11.1]], [[11.04 - Controle de Acesso e Rede no S3|11.4]], [[11.05 - Criptografia Versionamento e Retencao no S3|11.5]]
- **Módulo 13:** [[13 - Bancos Relacionais RDS e Aurora|nota do módulo]], [[13.05 - RDS Backups PITR Snapshots Criptografia e Seguranca|13.5]]
- **Módulo 14:** [[14.05 - DynamoDB Streams TTL Backup e Global Tables|14.5]], [[14.06 - Estrategias de Cache e DAX|14.6]], [[14.07 - ElastiCache e MemoryDB|14.7]], [[14.08 - Bancos de Proposito Especifico|14.8]]
- **Módulo 15:** [[15.02 - SQS Filas Standard e o Ciclo de Vida da Mensagem|15.2]]
- **Módulo 17:** [[17.02 - ECR Repositorio de Imagens|17.2]]
- **Módulo 19:** [[19 - Seguranca de Aplicacoes e Deteccao de Ameacas|nota do módulo]], [[19.01 - Ameacas Externas e Defesa em Profundidade|19.1]]
- **Módulo 22:** [[22.03 - Data Firehose Kinesis Video Streams e Flink|22.3]], [[22.06 - AWS Glue Catalogo Crawlers e Jobs de ETL|22.6]], [[22.07 - Amazon Athena Consultas SQL no Lago|22.7]], [[22.09 - Amazon Redshift Data Warehouse na AWS|22.9]], [[22.11 - OpenSearch Quick Data Exchange e Servicos Auxiliares|22.11]], [[22.12 - Seguranca da Ingestao e Decisao Final|22.12]]
- **Módulo 23:** [[23.03 - Migracao de Bancos com o DMS|23.3]]
- **Módulo 24:** [[24 - Servicos de IA Gerenciados|nota do módulo]], [[24.01 - Por Que Servicos de IA Prontos e Como Escolher pelo Verbo|24.1]], [[24.06 - Padroes de Arquitetura e Escolha pelo Verbo|24.6]]
- **Módulo 26:** [[26 - Projeto Pratico - Arquitetura de Referencia|nota do módulo]], [[26.02 - Iteracao 1 Seguranca em Camadas|26.2]]
- **Módulo 27:** [[27.03 - Revisao Final Mapa Requisito Servico e Pares que Confundem|27.3]]
