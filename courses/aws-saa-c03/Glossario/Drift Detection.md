---
aliases:
  - "deriva de configuração"
  - "detecção de drift"
  - "drift detection"
tags:
  - glossario
  - conceito
---
# Drift Detection

A detecção de drift compara as propriedades reais dos recursos de uma stack com o template e informa os que foram alterados por fora do CloudFormation. Detecta, mas não corrige. Pode ser automatizada com uma regra do AWS Config.

> [!example] Exemplo
> A auditoria descobre que um Security Group foi alterado pelo console, e a stack aparece como DRIFTED.

Veja também: [[Change Set]], [[CloudFormation]], [[Stack]]

## Onde aparece

- **Módulo 2:** [[02 - Well-Architected e o Formato da Prova|nota do módulo]]
- **Módulo 21:** [[21.05 - CloudFormation Stacks Templates e Change Sets|21.5]], [[21.06 - CloudFormation Operacao StackSets Service Catalog e Governanca|21.6]]
- **Módulo 26:** [[26.08 - Revisao Well-Architected e Trade-offs|26.8]]
- **Módulo 27:** [[27.05 - Simulado 2|27.5]]
