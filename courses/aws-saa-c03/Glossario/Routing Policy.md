---
aliases:
  - "política de roteamento"
  - "políticas de roteamento"
  - "routing policies"
tags:
  - glossario
  - conceito
---
# Routing Policy

A política de roteamento do Route 53 define como ele escolhe a resposta DNS entre vários registros de mesmo nome. As opções são simple, weighted, latency, failover, geolocation, geoproximity, IP-based, multivalue answer e, mais recentemente, afinidade de AZ. O Route 53 só responde DNS e não encaminha tráfego, então a política decide qual endereço o usuário recebe.

> [!example] Exemplo
> Para um canary de 5%, dois registros de mesmo nome usam a política weighted com pesos 95 e 5.

Veja também: [[Failover Routing]], [[Geolocation Routing]], [[Latency-Based Routing]], [[Weighted Routing]]

## Onde aparece

- **Módulo 1:** [[01.04 - Escopo dos Recursos Global Regional e Zonal|1.4]]
- **Módulo 3:** [[03.06 - DNS e Resolucao de Nomes|3.6]]
- **Módulo 7:** [[07.07 - DNS Hibrido com Route 53 Resolver|7.7]]
- **Módulo 18:** [[18.06 - Global Accelerator Anycast e Rede Global da AWS|18.6]], [[18.08 - Route 53 Politicas de Roteamento|18.8]]
- **Módulo 26:** [[26.08 - Revisao Well-Architected e Trade-offs|26.8]]
- **Módulo 27:** [[27 - Estrategia de Prova e Simulados|nota do módulo]], [[27.03 - Revisao Final Mapa Requisito Servico e Pares que Confundem|27.3]]
