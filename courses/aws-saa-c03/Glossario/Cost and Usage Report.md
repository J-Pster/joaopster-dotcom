---
aliases:
  - "AWS Cost and Usage Report"
  - "CUR"
  - "Cost and Usage Reports"
tags:
  - glossario
  - custo
---
# Cost and Usage Report

Relatório detalhado de custo e uso entregue num bucket S3, com o nível mais granular de dados de cobrança disponível. É a base para análises customizadas, por exemplo com o Athena. Costuma ser configurado na conta de gerenciamento para cobrir toda a organização.

> [!example] Exemplo
> Uma empresa carrega o CUR no Athena para calcular o custo por tag de cada projeto em todas as contas.

Veja também: [[Budgets]], [[Consolidated Billing]], [[Cost Explorer]]

## Onde aparece

- **Módulo 2:** [[02.06 - Dominios Pesos e o Mapa para os Pilares|2.6]]
- **Módulo 5:** [[05.03 - Cobranca Consolidada e Custos Multiconta|5.3]]
- **Módulo 7:** [[07.08 - Custo de Transferencia e Escolha da Conexao|7.8]]
- **Módulo 25:** [[25 - Otimizacao de Custos|nota do módulo]], [[25.01 - Como a AWS Cobra e o Pilar de Custos|25.1]], [[25.02 - Visibilidade de Custos Cost Explorer Budgets e Anomalias|25.2]], [[25.03 - Atribuicao de Custos Tags Cobranca Consolidada e Data Exports|25.3]], [[25.11 - Decisao de Custo na Prova e Revisao|25.11]]
- **Módulo 26:** [[26.05 - Iteracao 4 Custo Otimizado|26.5]], [[26.08 - Revisao Well-Architected e Trade-offs|26.8]]
- **Módulo 27:** [[27.03 - Revisao Final Mapa Requisito Servico e Pares que Confundem|27.3]]
