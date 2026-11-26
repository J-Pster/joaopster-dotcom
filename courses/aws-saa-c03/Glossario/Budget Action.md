---
aliases:
  - "Budgets Actions"
  - "ação do Budgets"
  - "ações de orçamento"
tags:
  - glossario
  - custo
---
# Budget Action

Ação que o AWS Budgets executa quando um limiar de orçamento é atingido, automaticamente ou depois de aprovação manual. Pode aplicar uma política IAM ou uma SCP, ou parar instâncias EC2 e RDS específicas. Funciona como rede de segurança, não como trava em tempo real, porque os dados do Budgets são atualizados até três vezes por dia.

> [!example] Exemplo
> Ao chegar a 100% do orçamento de uma conta de laboratório, o Budgets aplica uma política IAM que nega ec2:RunInstances.

Veja também: [[Budgets]], [[Cost Explorer]], [[SCP]]

## Onde aparece

- **Módulo 25:** [[25.01 - Como a AWS Cobra e o Pilar de Custos|25.1]], [[25.02 - Visibilidade de Custos Cost Explorer Budgets e Anomalias|25.2]], [[25.04 - Ferramentas de Recomendacao Compute Optimizer e Trusted Advisor|25.4]]
