---
aliases:
  - "CloudFormation StackSets"
  - "StackSet"
  - "stack set"
tags:
  - glossario
  - servico
---
# StackSets

StackSets estende o CloudFormation para implantar a mesma stack em várias contas e Regiões com uma única operação. Existe para padronizar baselines em organizações grandes. No modelo service-managed, integra com o AWS Organizations e pode implantar automaticamente em contas novas.

> [!example] Exemplo
> Um StackSet service-managed ativa o AWS Config em todas as contas e Regiões da organização.

Veja também: [[CloudFormation]], [[Service Catalog]], [[Stack]]

## Onde aparece

- **Módulo 5:** [[05.04 - Control Tower e Landing Zone|5.4]]
- **Módulo 21:** [[21 - Observabilidade Automacao e Operacoes|nota do módulo]], [[21.06 - CloudFormation Operacao StackSets Service Catalog e Governanca|21.6]], [[21.08 - Health Trusted Advisor License Manager e Remediacao Automatica|21.8]]
- **Módulo 26:** [[26.08 - Revisao Well-Architected e Trade-offs|26.8]]
