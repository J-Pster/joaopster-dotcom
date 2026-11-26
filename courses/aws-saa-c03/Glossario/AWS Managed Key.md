---
aliases:
  - "AWS managed key"
  - "AWS managed keys"
  - "chave gerenciada pela AWS"
tags:
  - glossario
  - seguranca
---
# AWS Managed Key

Chave KMS criada pela AWS na sua conta quando você ativa a criptografia de um serviço, com aliases como aws/s3 ou aws/ebs. Você a vê e acompanha o uso no CloudTrail, mas não altera a key policy nem a compartilha com outras contas. A AWS a rotaciona automaticamente e não cobra pela chave, apenas pelo uso.

> [!example] Exemplo
> Ao criar um volume EBS cifrado sem escolher uma chave, o EBS usa a chave aws/ebs da conta.

Veja também: [[AWS Owned Key]], [[Customer Managed Key]], [[KMS]]

## Onde aparece

- **Módulo 8:** [[08 - Criptografia e Protecao de Dados|nota do módulo]], [[08.01 - Por que Criptografar e os Fundamentos|8.1]], [[08.02 - AWS KMS Chaves e Envelope Encryption|8.2]], [[08.03 - KMS Key Policy IAM e Grants|8.3]], [[08.04 - KMS Rotacao Material Importado Multi-Region e Exclusao|8.4]], [[08.06 - Criptografia em Repouso nos Servicos AWS|8.6]]
- **Módulo 10:** [[10.05 - EBS Snapshots Criptografia e Operacao|10.5]]
- **Módulo 13:** [[13.05 - RDS Backups PITR Snapshots Criptografia e Seguranca|13.5]]
- **Módulo 14:** [[14.05 - DynamoDB Streams TTL Backup e Global Tables|14.5]]
- **Módulo 22:** [[22.02 - Kinesis Data Streams|22.2]], [[22.12 - Seguranca da Ingestao e Decisao Final|22.12]]
- **Módulo 26:** [[26.02 - Iteracao 1 Seguranca em Camadas|26.2]]
- **Módulo 27:** [[27.04 - Simulado 1|27.4]], [[27.05 - Simulado 2|27.5]]
