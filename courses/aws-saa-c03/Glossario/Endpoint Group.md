---
aliases:
  - "endpoint groups"
  - "grupo de endpoints"
tags:
  - glossario
  - servico
---
# Endpoint Group

O endpoint group é o conjunto de endpoints de uma Região dentro de um listener do Global Accelerator. Cada grupo tem seu traffic dial, que regula quanto do tráfego destinado à Região ele recebe, e seus próprios health checks. Dividir por Região permite drenar uma Região para manutenção e fazer failover entre elas.

> [!example] Exemplo
> Um acelerador tem um endpoint group em us-east-1 e outro em eu-west-1, cada um com um ALB.

Veja também: [[Client IP Preservation]], [[Global Accelerator]], [[Traffic Dial]]

## Onde aparece

- **Módulo 18:** [[18 - Borda e DNS CloudFront Global Accelerator e Route 53|nota do módulo]], [[18.06 - Global Accelerator Anycast e Rede Global da AWS|18.6]]
