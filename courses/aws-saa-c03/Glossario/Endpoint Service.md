---
aliases:
  - "endpoint services"
  - "serviço de endpoint"
tags:
  - glossario
  - rede
---
# Endpoint Service

Endpoint service é o serviço que um provedor expõe por PrivateLink, apoiado em um Network Load Balancer ou Gateway Load Balancer. Por padrão ninguém acessa: o provedor autoriza principals e pode exigir aceitação de cada conexão. O consumidor cria um interface endpoint com o nome do serviço.

> [!example] Exemplo
> Um provedor publica a API atrás de um NLB e libera as contas dos clientes.

Veja também: [[Interface Endpoint]], [[Network Load Balancer]], [[PrivateLink]]

## Onde aparece

- **Módulo 6:** [[06.09 - Interface Endpoints PrivateLink e Endpoint Policies|6.9]]
- **Módulo 7:** [[07.04 - PrivateLink e Endpoint Services|7.4]]
- **Módulo 12:** [[12.02 - A Familia Elastic Load Balancing|12.2]], [[12.04 - Network Load Balancer e Gateway Load Balancer|12.4]]
- **Módulo 25:** [[25.10 - Rede e Transferencia de Dados|25.10]]
- **Módulo 27:** [[27.05 - Simulado 2|27.5]]
