---
aliases:
  - "detecção de anomalias de custo"
tags:
  - glossario
  - custo
---
# Cost Anomaly Detection

Serviço de gerenciamento de custo que usa machine learning para identificar gastos fora do padrão, considerando sazonalidade e crescimento natural. Você define monitores (por serviço, conta, tag ou categoria de custo) e assinaturas de alerta, e cada anomalia vem com as causas prováveis por serviço, conta, Região e tipo de uso. Existe porque um orçamento fixo só avisa quando o limite é cruzado, enquanto uma anomalia pode acontecer muito abaixo dele.

> [!example] Exemplo
> Um laço infinito em uma Lambda triplica o gasto diário, e o monitor gerenciado envia um alerta por SNS, apontando a Lambda como causa.

Veja também: [[Budgets]], [[Cost Explorer]], [[SNS]]

## Onde aparece

- **Módulo 25:** [[25 - Otimizacao de Custos|nota do módulo]], [[25.02 - Visibilidade de Custos Cost Explorer Budgets e Anomalias|25.2]], [[25.11 - Decisao de Custo na Prova e Revisao|25.11]]
- **Módulo 26:** [[26.05 - Iteracao 4 Custo Otimizado|26.5]], [[26.08 - Revisao Well-Architected e Trade-offs|26.8]]
- **Módulo 27:** [[27.03 - Revisao Final Mapa Requisito Servico e Pares que Confundem|27.3]]
