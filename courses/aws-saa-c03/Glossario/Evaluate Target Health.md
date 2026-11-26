---
aliases:
  - "avaliar a saúde do alvo"
  - "evaluate target health"
tags:
  - glossario
  - conceito
---
# Evaluate Target Health

A opção Evaluate target health faz um registro alias considerar o estado do recurso de destino ao decidir se o devolve, sem criar um health check separado. É útil para ELB e Elastic Beanstalk e não traz benefício para serviços altamente disponíveis como S3, API Gateway e Global Accelerator. Para alvos que a suportam, não se cria health check à parte.

> [!example] Exemplo
> O alias para um ALB some das respostas quando todos os targets do ALB ficam não saudáveis.

Veja também: [[Alias Record]], [[Failover Routing]], [[Health Check]]

## Onde aparece

- **Módulo 18:** [[18.07 - Route 53 Fundamentos Zonas Registros e Alias|18.7]], [[18.09 - Health Checks Failover e Application Recovery Controller|18.9]]
- **Módulo 20:** [[20.07 - Failover de Trafego e Application Recovery Controller|20.7]]
- **Módulo 27:** [[27.04 - Simulado 1|27.4]]
