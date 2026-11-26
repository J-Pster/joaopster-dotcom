---
aliases:
  - "ARNs"
  - "Amazon Resource Name"
tags:
  - glossario
  - seguranca
---
# ARN

Identificador único de um recurso na AWS, no formato arn:partição:serviço:região:conta:recurso. É usado nos elementos Resource e Principal das policies. Alguns serviços globais, como o IAM, deixam a Região vazia, e o S3 deixa Região e conta vazios.

> [!example] Exemplo
> arn:aws:iam::123456789012:role/analytics-reader identifica uma role específica da conta 123456789012.

Veja também: [[IAM Policy]], [[IAM Role]], [[Principal]], [[Resource-Based Policy]]

## Onde aparece

- **Módulo 1:** [[01.07 - A Conta AWS como Fronteira|1.7]]
- **Módulo 4:** [[04 - IAM Identidade e Acesso|nota do módulo]], [[04.01 - Por que IAM Autenticacao Autorizacao e Principals|4.1]], [[04.03 - Anatomia de uma Policy IAM|4.3]], [[04.04 - Conditions e Condition Keys|4.4]], [[04.05 - Logica de Avaliacao de Policies|4.5]], [[04.06 - Roles e STS Credenciais Temporarias|4.6]], [[04.07 - Acesso entre Contas Resource Policies e Confused Deputy|4.7]], [[04.08 - Guardrails e Menor Privilegio na Pratica|4.8]]
- **Módulo 5:** [[05 - Multiconta Governanca e Federacao|nota do módulo]], [[05.07 - RAM e Compartilhamento entre Contas|5.7]], [[05.08 - CloudTrail e a Trilha de Auditoria|5.8]]
- **Módulo 7:** [[07.06 - Direct Connect|7.6]]
- **Módulo 8:** [[08 - Criptografia e Protecao de Dados|nota do módulo]], [[08.02 - AWS KMS Chaves e Envelope Encryption|8.2]], [[08.03 - KMS Key Policy IAM e Grants|8.3]], [[08.04 - KMS Rotacao Material Importado Multi-Region e Exclusao|8.4]], [[08.06 - Criptografia em Repouso nos Servicos AWS|8.6]], [[08.07 - Criptografia em Transito ACM e Private CA|8.7]], [[08.08 - Secrets Manager e Parameter Store|8.8]]
- **Módulo 11:** [[11.04 - Controle de Acesso e Rede no S3|11.4]], [[11.06 - Replicacao do S3|11.6]]
- **Módulo 15:** [[15.02 - SQS Filas Standard e o Ciclo de Vida da Mensagem|15.2]], [[15.04 - SNS Topicos Fan-out e Filtros|15.4]], [[15.05 - EventBridge Barramento Regras Scheduler e Pipes|15.5]], [[15.06 - Step Functions Orquestracao de Workflows|15.6]]
- **Módulo 16:** [[16.05 - Empacotamento Versoes e Custo do Lambda|16.5]]
- **Módulo 17:** [[17.03 - ECS Cluster Task Definition e Service|17.3]]
- **Módulo 18:** [[18.03 - Origens OAC Failover e Origin Shield|18.3]]
- **Módulo 20:** [[20.05 - AWS Backup Snapshots e Cofres Imutaveis|20.5]]
- **Módulo 21:** [[21.05 - CloudFormation Stacks Templates e Change Sets|21.5]]
- **Módulo 23:** [[23.05 - DataSync e a Transferencia Online de Arquivos|23.5]]
