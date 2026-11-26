---
aliases:
  - "IAM policy simulator"
  - "simulador de policies"
  - "simulador de políticas"
tags:
  - glossario
  - seguranca
---
# Policy Simulator

Ferramenta do IAM que avalia o efeito de policies sem fazer chamadas reais, informando se uma ação seria permitida ou negada e qual statement decidiu. Funciona para uma identidade existente ou para policies coladas no modo customizado. O resultado pode divergir do ambiente real quando falta contexto da requisição.

> [!example] Exemplo
> Antes de aplicar uma policy nova, o engenheiro simula s3:PutObject e confirma que o resultado seria negado.

Veja também: [[IAM Access Analyzer]], [[IAM Policy]], [[Menor Privilegio]], [[Permissions Boundary]]

## Onde aparece

- **Módulo 4:** [[04 - IAM Identidade e Acesso|nota do módulo]], [[04.03 - Anatomia de uma Policy IAM|4.3]], [[04.04 - Conditions e Condition Keys|4.4]], [[04.05 - Logica de Avaliacao de Policies|4.5]], [[04.08 - Guardrails e Menor Privilegio na Pratica|4.8]]
