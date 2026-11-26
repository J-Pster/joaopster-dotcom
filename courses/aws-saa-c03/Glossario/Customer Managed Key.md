---
aliases:
  - "CMK"
  - "chave gerenciada pelo cliente"
  - "customer managed key"
  - "customer managed keys"
tags:
  - glossario
  - seguranca
---
# Customer Managed Key

Chave KMS que você cria e administra na sua conta, com controle total sobre a key policy, a rotação, a habilitação e a exclusão. Custa cerca de US$ 1 por mês e cobra pelas requisições além da faixa gratuita. É a escolha quando é preciso compartilhar a chave com outra conta, auditar quem a usa ou revogar o acesso.

> [!example] Exemplo
> Uma empresa cifra os snapshots de EBS com uma customer managed key e, para compartilhar o snapshot com um parceiro, inclui a conta dele na key policy.

Veja também: [[AWS Managed Key]], [[AWS Owned Key]], [[Key Policy]]

## Onde aparece

- **Módulo 2:** [[02.02 - Excelencia Operacional e Seguranca|2.2]], [[02.07 - Anatomia de uma Questao|2.7]]
- **Módulo 8:** [[08 - Criptografia e Protecao de Dados|nota do módulo]], [[08.01 - Por que Criptografar e os Fundamentos|8.1]], [[08.02 - AWS KMS Chaves e Envelope Encryption|8.2]], [[08.03 - KMS Key Policy IAM e Grants|8.3]], [[08.04 - KMS Rotacao Material Importado Multi-Region e Exclusao|8.4]], [[08.05 - CloudHSM e Custom Key Stores|8.5]], [[08.06 - Criptografia em Repouso nos Servicos AWS|8.6]], [[08.08 - Secrets Manager e Parameter Store|8.8]]
- **Módulo 9:** [[09.01 - Instancia Nitro e AMI|9.1]]
- **Módulo 10:** [[10 - Armazenamento em Bloco e Arquivos EBS EFS FSx|nota do módulo]], [[10.02 - EBS e Instance Store Armazenamento Anexado a Instancia|10.2]], [[10.05 - EBS Snapshots Criptografia e Operacao|10.5]], [[10.10 - Escolhendo o Armazenamento|10.10]]
- **Módulo 11:** [[11 - Amazon S3 a Fundo|nota do módulo]], [[11.05 - Criptografia Versionamento e Retencao no S3|11.5]]
- **Módulo 13:** [[13 - Bancos Relacionais RDS e Aurora|nota do módulo]], [[13.05 - RDS Backups PITR Snapshots Criptografia e Seguranca|13.5]]
- **Módulo 14:** [[14.05 - DynamoDB Streams TTL Backup e Global Tables|14.5]]
- **Módulo 15:** [[15.02 - SQS Filas Standard e o Ciclo de Vida da Mensagem|15.2]]
- **Módulo 17:** [[17.02 - ECR Repositorio de Imagens|17.2]]
- **Módulo 20:** [[20.05 - AWS Backup Snapshots e Cofres Imutaveis|20.5]]
- **Módulo 22:** [[22.02 - Kinesis Data Streams|22.2]]
- **Módulo 26:** [[26.02 - Iteracao 1 Seguranca em Camadas|26.2]]
- **Módulo 27:** [[27.03 - Revisao Final Mapa Requisito Servico e Pares que Confundem|27.3]], [[27.04 - Simulado 1|27.4]], [[27.05 - Simulado 2|27.5]]
