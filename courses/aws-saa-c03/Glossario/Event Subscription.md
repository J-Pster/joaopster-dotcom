---
aliases:
  - "assinatura de eventos"
  - "event subscription"
  - "event subscriptions"
tags:
  - glossario
  - servico
---
# Event Subscription

Uma event subscription do RDS envia notificações de eventos, como failover, reinício ou falha de backup, para um tópico do SNS. Ela existe para a equipe saber do que aconteceu com o banco sem olhar o console. Os eventos também chegam ao EventBridge, para disparar automações.

> [!example] Exemplo
> Uma assinatura de eventos avisa o time por e-mail quando o Multi-AZ faz failover.

Veja também: [[Blue Green Deployment]], [[Failover]], [[Multi-AZ DB Instance]]

## Onde aparece

- **Módulo 13:** [[13.03 - RDS Multi-AZ Instancia e Cluster|13.3]], [[13.05 - RDS Backups PITR Snapshots Criptografia e Seguranca|13.5]]
