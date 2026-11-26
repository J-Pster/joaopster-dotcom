---
aliases:
  - "AWS Health"
  - "AWS Health Dashboard"
  - "Health API"
  - "eventos do Health"
  - "painel do Health"
tags:
  - glossario
  - servico
---
# Health Dashboard

O AWS Health Dashboard é o painel do AWS Health, com duas visões: o estado geral dos serviços (eventos públicos) e os eventos da sua conta, que afetam recursos específicos, como aposentadoria de instância ou manutenção programada. Os eventos são publicados no EventBridge para automação. O acesso à AWS Health API exige plano de suporte Business ou superior.

> [!example] Exemplo
> Um evento de aposentadoria de instância chega ao EventBridge e dispara um runbook que recria a máquina em outro hardware.

Veja também: [[EventBridge]], [[Trusted Advisor]]

## Onde aparece

- **Módulo 1:** [[01 - Nuvem e Infraestrutura Global AWS|nota do módulo]], [[01.06 - Tudo e API Endpoints Quotas e Health|1.6]]
- **Módulo 2:** [[02.06 - Dominios Pesos e o Mapa para os Pilares|2.6]]
- **Módulo 9:** [[09.06 - Spot Dedicated e Capacity Reservations|9.6]]
- **Módulo 21:** [[21 - Observabilidade Automacao e Operacoes|nota do módulo]], [[21.08 - Health Trusted Advisor License Manager e Remediacao Automatica|21.8]]
