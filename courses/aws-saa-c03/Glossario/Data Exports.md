---
aliases:
  - "AWS Data Exports"
  - "CUR 2.0"
  - "FOCUS"
tags:
  - glossario
  - custo
---
# Data Exports

Serviço que entrega dados de custo e uso em um bucket S3, incluindo o CUR 2.0 e o formato aberto FOCUS, além de exportações como o histórico de recomendações do Cost Optimization Hub. Substitui a configuração antiga do Cost and Usage Report com um esquema mais completo. É a base para análises próprias com Athena e QuickSight.

> [!example] Exemplo
> O time cria um export CUR 2.0 em Parquet e consulta o custo por recurso e por tag com Athena.

Veja também: [[Athena]], [[Cost and Usage Report]], [[S3]]

## Onde aparece

- **Módulo 25:** [[25 - Otimizacao de Custos|nota do módulo]], [[25.03 - Atribuicao de Custos Tags Cobranca Consolidada e Data Exports|25.3]], [[25.11 - Decisao de Custo na Prova e Revisao|25.11]]
- **Módulo 26:** [[26.05 - Iteracao 4 Custo Otimizado|26.5]]
- **Módulo 27:** [[27.03 - Revisao Final Mapa Requisito Servico e Pares que Confundem|27.3]]
