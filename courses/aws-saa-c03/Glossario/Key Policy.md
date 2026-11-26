---
aliases:
  - "key policies"
  - "key policy"
  - "política de chave"
  - "políticas de chave"
tags:
  - glossario
  - seguranca
---
# Key Policy

Política de recurso anexada a uma chave KMS que define quem pode administrar e quem pode usar a chave. É a única política que sempre é necessária: sem ela, nem as políticas do IAM da conta funcionam. A declaração padrão que habilita as políticas do IAM da conta delega o controle ao IAM.

> [!example] Exemplo
> A key policy tem a declaração padrão da conta e uma regra que permite a role da aplicação chamar Decrypt e GenerateDataKey.

Veja também: [[Customer Managed Key]], [[Grant]], [[IAM Policy]]

## Onde aparece

- **Módulo 4:** [[04.03 - Anatomia de uma Policy IAM|4.3]], [[04.04 - Conditions e Condition Keys|4.4]], [[04.05 - Logica de Avaliacao de Policies|4.5]], [[04.07 - Acesso entre Contas Resource Policies e Confused Deputy|4.7]]
- **Módulo 5:** [[05.07 - RAM e Compartilhamento entre Contas|5.7]]
- **Módulo 8:** [[08 - Criptografia e Protecao de Dados|nota do módulo]], [[08.01 - Por que Criptografar e os Fundamentos|8.1]], [[08.02 - AWS KMS Chaves e Envelope Encryption|8.2]], [[08.03 - KMS Key Policy IAM e Grants|8.3]], [[08.04 - KMS Rotacao Material Importado Multi-Region e Exclusao|8.4]], [[08.05 - CloudHSM e Custom Key Stores|8.5]], [[08.06 - Criptografia em Repouso nos Servicos AWS|8.6]], [[08.08 - Secrets Manager e Parameter Store|8.8]]
- **Módulo 9:** [[09.01 - Instancia Nitro e AMI|9.1]]
- **Módulo 11:** [[11 - Amazon S3 a Fundo|nota do módulo]], [[11.05 - Criptografia Versionamento e Retencao no S3|11.5]]
- **Módulo 13:** [[13 - Bancos Relacionais RDS e Aurora|nota do módulo]]
- **Módulo 15:** [[15.02 - SQS Filas Standard e o Ciclo de Vida da Mensagem|15.2]]
- **Módulo 21:** [[21.03 - CloudWatch Logs e o Agente|21.3]]
- **Módulo 22:** [[22 - Dados Analytics e Ingestao|nota do módulo]], [[22.02 - Kinesis Data Streams|22.2]]
- **Módulo 24:** [[24.01 - Por Que Servicos de IA Prontos e Como Escolher pelo Verbo|24.1]]
- **Módulo 26:** [[26.01 - O Projeto PropDesk e os Requisitos|26.1]], [[26.02 - Iteracao 1 Seguranca em Camadas|26.2]], [[26.06 - Multiconta Governanca e Auditoria|26.6]]
- **Módulo 27:** [[27.03 - Revisao Final Mapa Requisito Servico e Pares que Confundem|27.3]], [[27.04 - Simulado 1|27.4]], [[27.05 - Simulado 2|27.5]]
