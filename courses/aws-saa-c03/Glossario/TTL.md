---
aliases:
  - "time to live"
tags:
  - glossario
  - rede
---
# TTL

Número de segundos que um resolvedor pode guardar uma resposta de DNS em cache. TTL baixo acelera mudanças e failovers, mas aumenta as consultas; TTL alto faz o contrário. Mudanças de DNS valem à medida que os caches expiram.

> [!example] Exemplo
> Antes de migrar um site, baixa-se o TTL de 24 horas para 60 segundos com dois dias de antecedência.

Veja também: [[Alias Record]], [[DNS]], [[Hosted Zone]]

## Onde aparece

- **Módulo 1:** [[01.04 - Escopo dos Recursos Global Regional e Zonal|1.4]]
- **Módulo 2:** [[02.03 - Confiabilidade e Eficiencia de Desempenho|2.3]]
- **Módulo 3:** [[03 - Fundamentos de Redes para a Nuvem|nota do módulo]], [[03.06 - DNS e Resolucao de Nomes|3.6]], [[03.07 - TLS HTTPS e Certificados|3.7]]
- **Módulo 12:** [[12.01 - Escalar Horizontalmente e Aplicacao Stateless|12.1]], [[12.02 - A Familia Elastic Load Balancing|12.2]]
- **Módulo 13:** [[13.03 - RDS Multi-AZ Instancia e Cluster|13.3]], [[13.06 - RDS Proxy e Gestao de Conexoes|13.6]]
- **Módulo 14:** [[14 - DynamoDB Cache e Bancos de Proposito Especifico|nota do módulo]], [[14.05 - DynamoDB Streams TTL Backup e Global Tables|14.5]], [[14.06 - Estrategias de Cache e DAX|14.6]], [[14.07 - ElastiCache e MemoryDB|14.7]], [[14.09 - Decisao Qual Banco para Qual Requisito|14.9]]
- **Módulo 16:** [[16.07 - API Gateway Seguranca Throttling Cache e CORS|16.7]]
- **Módulo 17:** [[17.04 - ECS em Producao Balanceador Escala e Deploys|17.4]]
- **Módulo 18:** [[18 - Borda e DNS CloudFront Global Accelerator e Route 53|nota do módulo]], [[18.01 - Por que a Borda e como o CloudFront Entrega Conteudo|18.1]], [[18.02 - Cache Behaviors Cache Key TTL e Invalidacao|18.2]], [[18.03 - Origens OAC Failover e Origin Shield|18.3]], [[18.05 - Edge Compute Custo e Planos do CloudFront|18.5]], [[18.06 - Global Accelerator Anycast e Rede Global da AWS|18.6]], [[18.07 - Route 53 Fundamentos Zonas Registros e Alias|18.7]], [[18.08 - Route 53 Politicas de Roteamento|18.8]], [[18.09 - Health Checks Failover e Application Recovery Controller|18.9]], [[18.10 - Padroes de Arquitetura e Decisao de Borda e DNS|18.10]]
- **Módulo 20:** [[20 - Alta Disponibilidade e Recuperacao de Desastres|nota do módulo]], [[20.02 - Multi-AZ e Multi-Region Servico por Servico|20.2]], [[20.03 - RPO e RTO e o Custo da Recuperacao|20.3]], [[20.07 - Failover de Trafego e Application Recovery Controller|20.7]], [[20.10 - Metricas de Negocio SLO e Teste de Recuperacao|20.10]]
- **Módulo 25:** [[25 - Otimizacao de Custos|nota do módulo]], [[25.09 - Bancos de Dados Custo e Escolha da Ferramenta|25.9]], [[25.10 - Rede e Transferencia de Dados|25.10]]
- **Módulo 26:** [[26 - Projeto Pratico - Arquitetura de Referencia|nota do módulo]], [[26.04 - Iteracao 3 Desempenho e Elasticidade|26.4]], [[26.05 - Iteracao 4 Custo Otimizado|26.5]], [[26.07 - Plano de DR e Estimativa de Custo|26.7]], [[26.08 - Revisao Well-Architected e Trade-offs|26.8]]
- **Módulo 27:** [[27.03 - Revisao Final Mapa Requisito Servico e Pares que Confundem|27.3]], [[27.04 - Simulado 1|27.4]]
