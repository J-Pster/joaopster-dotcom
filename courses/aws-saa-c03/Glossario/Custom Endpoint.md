---
aliases:
  - "custom endpoint"
  - "custom endpoints"
  - "endpoint customizado"
  - "endpoints customizados"
tags:
  - glossario
  - rede
---
# Custom Endpoint

O custom endpoint de um Aurora agrupa um subconjunto de instâncias escolhido por você. Ele existe para separar cargas, por exemplo, apontando as consultas de BI só para as réplicas maiores. Um cluster tem até 5 por padrão.

> [!example] Exemplo
> O endpoint relatorios aponta apenas para a réplica db.r6g.4xlarge e isola as consultas pesadas.

Veja também: [[Aurora Replica]], [[Cluster Endpoint]], [[Reader Endpoint]]

## Onde aparece

- **Módulo 13:** [[13 - Bancos Relacionais RDS e Aurora|nota do módulo]], [[13.01 - Por Que Banco Gerenciado e Escolha do Engine|13.1]], [[13.07 - Aurora Arquitetura Endpoints e Replicas|13.7]], [[13.09 - Padroes de Arquitetura Escolha e Custo|13.9]]
