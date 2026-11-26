---
aliases:
  - "AWS Global Accelerator"
tags:
  - glossario
  - rede
---
# Global Accelerator

Serviço que fornece IPs anycast estáticos e roteia o tráfego TCP e UDP pela rede global da AWS até endpoints em uma ou mais Regiões. Seu plano de controle fica em us-west-2. Detalhado no Módulo 18.

> [!example] Exemplo
> Dois IPs fixos na frente de ALBs em duas Regiões, com failover entre elas.

Veja também: [[CloudFront]], [[Route 53]]

## Onde aparece

- **Módulo 1:** [[01 - Nuvem e Infraestrutura Global AWS|nota do módulo]], [[01.03 - Borda e Extensoes da Infraestrutura|1.3]], [[01.04 - Escopo dos Recursos Global Regional e Zonal|1.4]]
- **Módulo 2:** [[02.03 - Confiabilidade e Eficiencia de Desempenho|2.3]], [[02.06 - Dominios Pesos e o Mapa para os Pilares|2.6]], [[02.07 - Anatomia de uma Questao|2.7]]
- **Módulo 3:** [[03 - Fundamentos de Redes para a Nuvem|nota do módulo]], [[03.01 - Por que Redes Pesam e as Camadas de Rede|3.1]], [[03.06 - DNS e Resolucao de Nomes|3.6]], [[03.07 - TLS HTTPS e Certificados|3.7]], [[03.08 - Latencia Largura de Banda VPN e BGP|3.8]]
- **Módulo 6:** [[06.03 - Route Tables Internet Gateway e IPs Publicos|6.3]], [[06.05 - Security Groups|6.5]]
- **Módulo 7:** [[07.05 - Site-to-Site VPN e Client VPN|7.5]]
- **Módulo 12:** [[12.02 - A Familia Elastic Load Balancing|12.2]], [[12.04 - Network Load Balancer e Gateway Load Balancer|12.4]], [[12.10 - Application Auto Scaling e Arquiteturas Completas|12.10]]
- **Módulo 18:** [[18 - Borda e DNS CloudFront Global Accelerator e Route 53|nota do módulo]], [[18.01 - Por que a Borda e como o CloudFront Entrega Conteudo|18.1]], [[18.03 - Origens OAC Failover e Origin Shield|18.3]], [[18.05 - Edge Compute Custo e Planos do CloudFront|18.5]], [[18.06 - Global Accelerator Anycast e Rede Global da AWS|18.6]], [[18.07 - Route 53 Fundamentos Zonas Registros e Alias|18.7]], [[18.08 - Route 53 Politicas de Roteamento|18.8]], [[18.09 - Health Checks Failover e Application Recovery Controller|18.9]], [[18.10 - Padroes de Arquitetura e Decisao de Borda e DNS|18.10]]
- **Módulo 19:** [[19.01 - Ameacas Externas e Defesa em Profundidade|19.1]], [[19.02 - Shield DDoS Standard e Advanced|19.2]]
- **Módulo 20:** [[20 - Alta Disponibilidade e Recuperacao de Desastres|nota do módulo]], [[20.02 - Multi-AZ e Multi-Region Servico por Servico|20.2]], [[20.03 - RPO e RTO e o Custo da Recuperacao|20.3]], [[20.04 - As Quatro Estrategias de Recuperacao de Desastres|20.4]], [[20.06 - Replicacao entre Regioes e Elastic Disaster Recovery|20.6]], [[20.07 - Failover de Trafego e Application Recovery Controller|20.7]], [[20.09 - Tornar Aplicacao Legada Resiliente sem Mudar o Codigo|20.9]]
- **Módulo 23:** [[23.06 - Transfer Family Transfer Acceleration e Direct Connect na Migracao|23.6]]
- **Módulo 25:** [[25.10 - Rede e Transferencia de Dados|25.10]]
- **Módulo 26:** [[26.04 - Iteracao 3 Desempenho e Elasticidade|26.4]], [[26.08 - Revisao Well-Architected e Trade-offs|26.8]]
- **Módulo 27:** [[27 - Estrategia de Prova e Simulados|nota do módulo]], [[27.02 - Tecnica de Resolucao Tempo e Eliminacao|27.2]], [[27.03 - Revisao Final Mapa Requisito Servico e Pares que Confundem|27.3]]
