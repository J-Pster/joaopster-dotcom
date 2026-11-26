---
aliases:
  - "endpoint policies"
  - "política de endpoint"
  - "políticas de endpoint"
tags:
  - glossario
  - seguranca
---
# Endpoint Policy

A política de endpoint é um JSON de recurso, anexado a um VPC endpoint, que limita o que pode ser feito através dele (ações, recursos, principals). O padrão é acesso total. Ela não substitui o IAM nem as políticas de recurso: todas precisam permitir.

> [!example] Exemplo
> Uma política permite só s3:GetObject nos buckets da empresa, impedindo cópia para buckets de fora.

Veja também: [[Gateway Endpoint]], [[Interface Endpoint]], [[VPC Endpoint]]

## Onde aparece

- **Módulo 4:** [[04.01 - Por que IAM Autenticacao Autorizacao e Principals|4.1]], [[04.04 - Conditions e Condition Keys|4.4]]
- **Módulo 6:** [[06 - VPC a Fundo|nota do módulo]], [[06.03 - Route Tables Internet Gateway e IPs Publicos|6.3]], [[06.05 - Security Groups|6.5]], [[06.06 - Network ACLs e Defesa em Camadas|6.6]], [[06.08 - Gateway Endpoints para S3 e DynamoDB|6.8]], [[06.09 - Interface Endpoints PrivateLink e Endpoint Policies|6.9]]
- **Módulo 7:** [[07.04 - PrivateLink e Endpoint Services|7.4]]
- **Módulo 8:** [[08.02 - AWS KMS Chaves e Envelope Encryption|8.2]]
- **Módulo 11:** [[11.04 - Controle de Acesso e Rede no S3|11.4]]
- **Módulo 22:** [[22.12 - Seguranca da Ingestao e Decisao Final|22.12]]
- **Módulo 26:** [[26.02 - Iteracao 1 Seguranca em Camadas|26.2]]
- **Módulo 27:** [[27.04 - Simulado 1|27.4]]
