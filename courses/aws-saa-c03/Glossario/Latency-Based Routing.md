---
aliases:
  - "latency routing"
  - "política de latência"
  - "roteamento por latência"
tags:
  - glossario
  - conceito
---
# Latency-Based Routing

No roteamento por latência, o Route 53 responde com o registro cuja Região AWS tem a menor latência de rede em relação ao usuário, segundo dados medidos pela AWS. Ele existe para que cada usuário vá à Região mais rápida em arquiteturas ativo-ativo. Latência não é distância, e a política deve ser combinada com health checks para não enviar usuários a uma Região quebrada.

> [!example] Exemplo
> Usuários da Ásia recebem o IP do ALB em ap-southeast-1, e os dos EUA recebem o de us-east-1.

Veja também: [[Geoproximity Routing]], [[Health Check]], [[Routing Policy]]

## Onde aparece

- **Módulo 1:** [[01.03 - Borda e Extensoes da Infraestrutura|1.3]]
- **Módulo 16:** [[16.06 - API Gateway Tipos Endpoints e Integracoes|16.6]]
- **Módulo 18:** [[18.06 - Global Accelerator Anycast e Rede Global da AWS|18.6]], [[18.08 - Route 53 Politicas de Roteamento|18.8]], [[18.10 - Padroes de Arquitetura e Decisao de Borda e DNS|18.10]]
- **Módulo 26:** [[26.09 - Mudancas de Requisito no Estilo da Prova|26.9]]
- **Módulo 27:** [[27.03 - Revisao Final Mapa Requisito Servico e Pares que Confundem|27.3]]
