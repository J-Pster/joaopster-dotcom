---
aliases:
  - "ARC Region switch"
  - "plano de Region switch"
tags:
  - glossario
  - servico
---
# Region Switch

O Region switch é o recurso do Application Recovery Controller que orquestra a recuperação de uma aplicação entre Regiões por meio de um plano com blocos de execução, executado a partir do plano de dados de cada Região. Pode ser disparado por alarmes do CloudWatch, funciona entre contas e checa a paridade de cotas entre as Regiões. É a recomendação atual para quem antes usaria o readiness check.

> [!example] Exemplo
> Um alarme de taxa de checkout dispara o plano, que escala o ASG, promove o banco e atualiza o DNS.

Veja também: [[Application Recovery Controller]], [[CloudWatch]], [[Failover]], [[Service Quotas]]

## Onde aparece

- **Módulo 20:** [[20.04 - As Quatro Estrategias de Recuperacao de Desastres|20.4]], [[20.07 - Failover de Trafego e Application Recovery Controller|20.7]]
