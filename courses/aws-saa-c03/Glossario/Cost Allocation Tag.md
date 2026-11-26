---
aliases:
  - "cost allocation tags"
  - "tag de alocação de custo"
  - "tag de alocação de custos"
  - "tags de alocação de custo"
tags:
  - glossario
  - custo
---
# Cost Allocation Tag

Tag de recurso que, depois de ativada no Billing, passa a aparecer nos relatórios de custo e permite dividir os gastos por projeto, time ou ambiente. Existe porque a fatura sozinha não diz quem gerou cada custo, e a tag só entra nos relatórios a partir da ativação, sem retroatividade. Uma tag policy do Organizations ajuda a padronizar as chaves, e as mesmas tags também alimentam o ABAC.

> [!example] Exemplo
> A tag Projeto=Loja, ativada como tag de alocação, permite ver quanto o projeto Loja custou no mês no Cost Explorer.

Veja também: [[ABAC]], [[Condition Key]], [[Consolidated Billing]], [[Cost Explorer]], [[IAM Policy]], [[Tag Policy]]

## Onde aparece

- **Módulo 1:** [[01.07 - A Conta AWS como Fronteira|1.7]]
- **Módulo 2:** [[02.04 - Custos Sustentabilidade e Tensoes entre Pilares|2.4]]
- **Módulo 4:** [[04.04 - Conditions e Condition Keys|4.4]]
- **Módulo 5:** [[05.02 - SCPs e Politicas de Organizacao|5.2]], [[05.03 - Cobranca Consolidada e Custos Multiconta|5.3]]
- **Módulo 11:** [[11.03 - Ciclo de Vida e Custo no S3|11.3]]
- **Módulo 22:** [[22.07 - Amazon Athena Consultas SQL no Lago|22.7]]
- **Módulo 25:** [[25.02 - Visibilidade de Custos Cost Explorer Budgets e Anomalias|25.2]], [[25.03 - Atribuicao de Custos Tags Cobranca Consolidada e Data Exports|25.3]]
- **Módulo 27:** [[27.03 - Revisao Final Mapa Requisito Servico e Pares que Confundem|27.3]], [[27.05 - Simulado 2|27.5]]
