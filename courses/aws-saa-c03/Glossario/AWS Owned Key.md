---
aliases:
  - "AWS owned key"
  - "AWS owned keys"
  - "chave de propriedade da AWS"
tags:
  - glossario
  - seguranca
---
# AWS Owned Key

Chave que pertence e é gerenciada pela AWS em contas da própria AWS, usada por um serviço para cifrar dados de vários clientes. Ela não aparece na sua conta, não gera eventos no seu CloudTrail e não pode ser auditada nem controlada por você. É gratuita e é o padrão de serviços como o DynamoDB quando você não escolhe outra chave.

> [!example] Exemplo
> Uma tabela do DynamoDB criada sem opções de criptografia usa uma AWS owned key: ela está cifrada, mas você não controla a chave.

Veja também: [[AWS Managed Key]], [[Customer Managed Key]], [[KMS]]

## Onde aparece

- **Módulo 8:** [[08 - Criptografia e Protecao de Dados|nota do módulo]], [[08.01 - Por que Criptografar e os Fundamentos|8.1]], [[08.02 - AWS KMS Chaves e Envelope Encryption|8.2]], [[08.04 - KMS Rotacao Material Importado Multi-Region e Exclusao|8.4]], [[08.06 - Criptografia em Repouso nos Servicos AWS|8.6]]
- **Módulo 14:** [[14.05 - DynamoDB Streams TTL Backup e Global Tables|14.5]]
- **Módulo 15:** [[15.05 - EventBridge Barramento Regras Scheduler e Pipes|15.5]]
