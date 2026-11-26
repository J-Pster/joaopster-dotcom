---
aliases:
  - "identity policies"
  - "identity policy"
  - "identity-based policies"
  - "policies de identidade"
  - "policy de identidade"
tags:
  - glossario
  - seguranca
---
# Identity-Based Policy

Policy anexada a um usuário, grupo ou role, que define o que aquela identidade pode fazer. Pode ser gerenciada (reutilizável, mantida pela AWS ou pelo cliente) ou inline (embutida em uma só identidade). Como a identidade já é o principal, o statement não leva o elemento Principal.

> [!example] Exemplo
> A policy AmazonS3ReadOnlyAccess anexada a uma role dá leitura em todos os buckets para quem a assumir.

Veja também: [[IAM Group]], [[IAM Policy]], [[IAM Role]], [[Resource-Based Policy]]

## Onde aparece

- **Módulo 4:** [[04 - IAM Identidade e Acesso|nota do módulo]], [[04.01 - Por que IAM Autenticacao Autorizacao e Principals|4.1]], [[04.03 - Anatomia de uma Policy IAM|4.3]], [[04.04 - Conditions e Condition Keys|4.4]], [[04.05 - Logica de Avaliacao de Policies|4.5]], [[04.07 - Acesso entre Contas Resource Policies e Confused Deputy|4.7]], [[04.08 - Guardrails e Menor Privilegio na Pratica|4.8]]
- **Módulo 5:** [[05 - Multiconta Governanca e Federacao|nota do módulo]]
- **Módulo 8:** [[08.03 - KMS Key Policy IAM e Grants|8.3]]
- **Módulo 11:** [[11.04 - Controle de Acesso e Rede no S3|11.4]], [[11.05 - Criptografia Versionamento e Retencao no S3|11.5]]
- **Módulo 17:** [[17.02 - ECR Repositorio de Imagens|17.2]]
- **Módulo 27:** [[27.03 - Revisao Final Mapa Requisito Servico e Pares que Confundem|27.3]], [[27.04 - Simulado 1|27.4]], [[27.05 - Simulado 2|27.5]]
