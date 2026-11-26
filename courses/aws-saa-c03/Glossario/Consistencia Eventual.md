---
aliases:
  - "consistência eventual"
  - "eventual consistency"
  - "eventualmente consistente"
  - "leitura eventual"
tags:
  - glossario
  - conceito
---
# Consistencia Eventual

Modelo em que, depois de uma escrita, uma leitura em outra réplica pode devolver o valor antigo por uma fração de segundo, até todas as cópias convergirem. Não significa perda de dados. No DynamoDB é o padrão e custa metade da leitura forte.

> [!example] Exemplo
> Você grava o novo nome do perfil e uma leitura 20 ms depois, em outra réplica, ainda mostra o nome antigo.

Veja também: [[Consistencia Forte]], [[DynamoDB]], [[GSI]]

## Onde aparece

- **Módulo 8:** [[08.03 - KMS Key Policy IAM e Grants|8.3]]
- **Módulo 11:** [[11.01 - O Modelo do S3 Buckets Objetos e Durabilidade|11.1]]
- **Módulo 13:** [[13.04 - RDS Read Replicas e Escala de Leitura|13.4]]
- **Módulo 14:** [[14 - DynamoDB Cache e Bancos de Proposito Especifico|nota do módulo]], [[14.01 - Por que NoSQL e Escolha pelo Padrao de Acesso|14.1]], [[14.02 - DynamoDB Modelo de Dados Chaves e Particoes|14.2]], [[14.03 - DynamoDB Capacidade RCU WCU e Custo|14.3]], [[14.04 - DynamoDB Indices Secundarios Query e Scan|14.4]], [[14.06 - Estrategias de Cache e DAX|14.6]], [[14.09 - Decisao Qual Banco para Qual Requisito|14.9]]
- **Módulo 15:** [[15.04 - SNS Topicos Fan-out e Filtros|15.4]]
- **Módulo 16:** [[16.02 - Como o Lambda e Invocado e Como Trata Erros|16.2]]
- **Módulo 25:** [[25.09 - Bancos de Dados Custo e Escolha da Ferramenta|25.9]]
- **Módulo 26:** [[26.07 - Plano de DR e Estimativa de Custo|26.7]]
