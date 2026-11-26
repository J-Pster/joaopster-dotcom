---
aliases:
  - "SageMaker Model Monitor"
tags:
  - glossario
  - servico
---
# Model Monitor

O SageMaker Model Monitor monitora modelos em produção (endpoints) para detectar deriva de dados (data drift) e queda de qualidade do modelo. Existe porque a qualidade de um modelo cai quando os dados do mundo mudam. A AWS marcou o recurso como fechado a novos clientes, mas ele ainda é a resposta clássica de prova para 'detectar degradação do modelo'.

> [!example] Exemplo
> Meses depois do deploy, os dados de entrada mudam; o Model Monitor compara com a linha de base do treino e alerta sobre a deriva.

Veja também: [[Clarify]], [[SageMaker AI]]

## Onde aparece

- **Módulo 24:** [[24 - Servicos de IA Gerenciados|nota do módulo]], [[24.05 - SageMaker AI e Modelo Proprio|24.5]]
