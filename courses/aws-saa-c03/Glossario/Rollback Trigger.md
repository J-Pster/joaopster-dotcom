---
aliases:
  - "gatilho de rollback"
  - "rollback trigger"
  - "rollback triggers"
tags:
  - glossario
  - conceito
---
# Rollback Trigger

Rollback trigger associa alarmes do CloudWatch a uma operação do CloudFormation: se um alarme disparar durante a atualização ou no período de monitoramento depois dela, o CloudFormation desfaz a mudança. Aceita até 5 alarmes e monitoramento de 0 a 180 minutos.

> [!example] Exemplo
> Se o alarme de erros 5xx disparar durante o deploy, a stack volta à versão anterior.

Veja também: [[Change Set]], [[CloudWatch Alarm]], [[Stack]]

## Onde aparece

- **Módulo 21:** [[21.02 - Alarmes do CloudWatch e Acoes Automaticas|21.2]], [[21.06 - CloudFormation Operacao StackSets Service Catalog e Governanca|21.6]]
