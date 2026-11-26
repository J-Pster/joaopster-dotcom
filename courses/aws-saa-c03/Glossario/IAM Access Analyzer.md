---
aliases:
  - "Access Analyzer"
  - "analisador de acesso"
tags:
  - glossario
  - seguranca
---
# IAM Access Analyzer

Recurso do IAM que analisa policies e atividade para apontar riscos. Encontra recursos compartilhados com principais fora da zona de confiança (acesso externo), mostra acesso interno e permissões ou credenciais não utilizadas, gera policies de menor privilégio a partir do CloudTrail e valida policies. Ele detecta e reporta, mas não bloqueia nada.

> [!example] Exemplo
> Um analisador de acesso externo com a organização como zona de confiança lista os buckets acessíveis a contas de fora.

Veja também: [[CloudTrail]], [[Credential Report]], [[Menor Privilegio]], [[Resource-Based Policy]]

## Onde aparece

- **Módulo 4:** [[04 - IAM Identidade e Acesso|nota do módulo]], [[04.03 - Anatomia de uma Policy IAM|4.3]], [[04.07 - Acesso entre Contas Resource Policies e Confused Deputy|4.7]], [[04.08 - Guardrails e Menor Privilegio na Pratica|4.8]]
- **Módulo 5:** [[05.05 - IAM Identity Center|5.5]]
- **Módulo 8:** [[08.03 - KMS Key Policy IAM e Grants|8.3]]
- **Módulo 11:** [[11.04 - Controle de Acesso e Rede no S3|11.4]]
- **Módulo 21:** [[21.06 - CloudFormation Operacao StackSets Service Catalog e Governanca|21.6]]
- **Módulo 26:** [[26.09 - Mudancas de Requisito no Estilo da Prova|26.9]]
