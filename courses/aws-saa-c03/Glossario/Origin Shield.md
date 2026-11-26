---
aliases:
  - "Origin Shield do CloudFront"
tags:
  - glossario
  - servico
---
# Origin Shield

O Origin Shield é uma camada de cache opcional, numa Região que você escolhe, entre os caches regionais do CloudFront e a origem. Ele consolida em um só lugar os pedidos que dariam miss em várias regiões, reduzindo a carga da origem e melhorando o hit ratio. Tem custo adicional, e a Região deve ser a mais próxima da origem.

> [!example] Exemplo
> Uma plataforma de vídeo com audiência global ativa o Origin Shield em us-east-1, perto da origem, para que cada segmento seja buscado uma única vez.

Veja também: [[Cache Hit Ratio]], [[Origin Group]], [[Regional Edge Cache]]

## Onde aparece

- **Módulo 18:** [[18 - Borda e DNS CloudFront Global Accelerator e Route 53|nota do módulo]], [[18.01 - Por que a Borda e como o CloudFront Entrega Conteudo|18.1]], [[18.03 - Origens OAC Failover e Origin Shield|18.3]], [[18.05 - Edge Compute Custo e Planos do CloudFront|18.5]], [[18.10 - Padroes de Arquitetura e Decisao de Borda e DNS|18.10]]
- **Módulo 25:** [[25.10 - Rede e Transferencia de Dados|25.10]]
