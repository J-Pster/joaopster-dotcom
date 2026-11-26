---
aliases:
  - "User Datagram Protocol"
tags:
  - glossario
  - rede
---
# UDP

Protocolo de transporte sem conexão e sem garantias: manda os pacotes e pronto, sem retransmitir. É a escolha certa quando o atraso é pior que a perda, como em voz, vídeo, jogos, consultas DNS curtas e túneis IPsec.

> [!example] Exemplo
> Uma chamada de voz que perde um quadro soa melhor que uma chamada que trava esperando a retransmissão.

Veja também: [[Modelo OSI]], [[Porta de Rede]], [[TCP]]

## Onde aparece

- **Módulo 3:** [[03.01 - Por que Redes Pesam e as Camadas de Rede|3.1]], [[03.05 - Firewalls Portas e Portas Efemeras|3.5]], [[03.06 - DNS e Resolucao de Nomes|3.6]], [[03.08 - Latencia Largura de Banda VPN e BGP|3.8]]
- **Módulo 6:** [[06.04 - NAT Gateway NAT Instance e Egress-Only|6.4]], [[06.05 - Security Groups|6.5]], [[06.09 - Interface Endpoints PrivateLink e Endpoint Policies|6.9]]
- **Módulo 7:** [[07.05 - Site-to-Site VPN e Client VPN|7.5]], [[07.07 - DNS Hibrido com Route 53 Resolver|7.7]]
- **Módulo 12:** [[12.02 - A Familia Elastic Load Balancing|12.2]], [[12.04 - Network Load Balancer e Gateway Load Balancer|12.4]]
- **Módulo 17:** [[17.04 - ECS em Producao Balanceador Escala e Deploys|17.4]]
- **Módulo 18:** [[18 - Borda e DNS CloudFront Global Accelerator e Route 53|nota do módulo]], [[18.01 - Por que a Borda e como o CloudFront Entrega Conteudo|18.1]], [[18.06 - Global Accelerator Anycast e Rede Global da AWS|18.6]], [[18.10 - Padroes de Arquitetura e Decisao de Borda e DNS|18.10]]
- **Módulo 19:** [[19.01 - Ameacas Externas e Defesa em Profundidade|19.1]], [[19.04 - Network Firewall DNS Firewall e Firewall Manager|19.4]]
- **Módulo 20:** [[20.07 - Failover de Trafego e Application Recovery Controller|20.7]]
- **Módulo 21:** [[21.04 - X-Ray Prometheus Grafana e Monitoramento de Aplicacao|21.4]]
- **Módulo 26:** [[26.04 - Iteracao 3 Desempenho e Elasticidade|26.4]], [[26.08 - Revisao Well-Architected e Trade-offs|26.8]], [[26.09 - Mudancas de Requisito no Estilo da Prova|26.9]]
- **Módulo 27:** [[27.02 - Tecnica de Resolucao Tempo e Eliminacao|27.2]], [[27.03 - Revisao Final Mapa Requisito Servico e Pares que Confundem|27.3]], [[27.04 - Simulado 1|27.4]]
