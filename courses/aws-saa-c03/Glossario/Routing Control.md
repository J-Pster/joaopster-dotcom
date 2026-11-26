---
aliases:
  - "controle de roteamento"
  - "routing controls"
tags:
  - glossario
  - rede
---
# Routing Control

Um routing control é uma chave liga/desliga do Application Recovery Controller que, por meio de health checks do Route 53, abre ou fecha o tráfego para uma Região ou célula. Vive em um cluster com cinco endpoints regionais, acessado pelo plano de dados, e tem regras de segurança que impedem, por exemplo, desligar todas as Regiões ao mesmo tempo.

> [!example] Exemplo
> O operador desliga o controle da Região A e liga o da B; a regra de asserção garante que pelo menos um fique ligado.

Veja também: [[Application Recovery Controller]], [[Failover]], [[Health Check]], [[Route 53]]

## Onde aparece

- **Módulo 18:** [[18 - Borda e DNS CloudFront Global Accelerator e Route 53|nota do módulo]], [[18.09 - Health Checks Failover e Application Recovery Controller|18.9]], [[18.10 - Padroes de Arquitetura e Decisao de Borda e DNS|18.10]]
- **Módulo 20:** [[20.02 - Multi-AZ e Multi-Region Servico por Servico|20.2]], [[20.04 - As Quatro Estrategias de Recuperacao de Desastres|20.4]], [[20.07 - Failover de Trafego e Application Recovery Controller|20.7]], [[20.10 - Metricas de Negocio SLO e Teste de Recuperacao|20.10]]
- **Módulo 26:** [[26.07 - Plano de DR e Estimativa de Custo|26.7]]
