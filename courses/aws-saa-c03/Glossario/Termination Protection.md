---
aliases:
  - "proteção contra exclusão da stack"
  - "termination protection"
tags:
  - glossario
  - conceito
---
# Termination Protection

Termination protection é uma configuração que impede a exclusão acidental de uma stack do CloudFormation até ser desativada. Não impede atualizações nem a substituição de recursos dentro da stack.

> [!example] Exemplo
> A stack de produção tem proteção ligada, e o comando de exclusão é recusado.

Veja também: [[DeletionPolicy]], [[Stack]], [[Stack Policy]]

## Onde aparece

- **Módulo 9:** [[09.04 - Ciclo de Vida User Data e Metadados|9.4]]
- **Módulo 21:** [[21 - Observabilidade Automacao e Operacoes|nota do módulo]], [[21.02 - Alarmes do CloudWatch e Acoes Automaticas|21.2]], [[21.05 - CloudFormation Stacks Templates e Change Sets|21.5]], [[21.06 - CloudFormation Operacao StackSets Service Catalog e Governanca|21.6]]
