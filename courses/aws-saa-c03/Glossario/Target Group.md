---
aliases:
  - "Grupo de Destino"
  - "Grupos de Destino"
  - "TG"
  - "Target Groups"
tags:
  - glossario
  - rede
---
# Target Group

Conjunto de destinos (instâncias, IPs, funções Lambda ou um ALB) para onde um balanceador encaminha tráfego, com seu protocolo, porta e health check. Guarda também atributos como deregistration delay, slow start e algoritmo de roteamento. O tipo de alvo é definido na criação e não pode ser alterado depois.

> [!example] Exemplo
> Uma regra do ALB envia /api/* para o target group tg-api e o resto para tg-web, cada um com suas próprias instâncias.

Veja também: [[Application Load Balancer]], [[Health Check]], [[Listener]], [[Network Load Balancer]]

## Onde aparece

- **Módulo 3:** [[03.01 - Por que Redes Pesam e as Camadas de Rede|3.1]]
- **Módulo 7:** [[07.04 - PrivateLink e Endpoint Services|7.4]]
- **Módulo 12:** [[12 - Balanceamento de Carga e Auto Scaling|nota do módulo]], [[12.01 - Escalar Horizontalmente e Aplicacao Stateless|12.1]], [[12.02 - A Familia Elastic Load Balancing|12.2]], [[12.03 - Application Load Balancer a Fundo|12.3]], [[12.04 - Network Load Balancer e Gateway Load Balancer|12.4]], [[12.05 - Target Groups Health Checks e Cross-Zone|12.5]], [[12.06 - Auto Scaling Groups e Launch Templates|12.6]], [[12.07 - Politicas de Escala|12.7]], [[12.08 - Ciclo de Vida Hooks e Warm Pools|12.8]], [[12.09 - Instance Refresh Termination e Spot|12.9]]
- **Módulo 17:** [[17 - Containers ECS EKS e Fargate|nota do módulo]], [[17.03 - ECS Cluster Task Definition e Service|17.3]], [[17.04 - ECS em Producao Balanceador Escala e Deploys|17.4]], [[17.06 - EKS Kubernetes Gerenciado na AWS|17.6]], [[17.07 - Migrar para Containers e Elastic Beanstalk|17.7]]
- **Módulo 18:** [[18.06 - Global Accelerator Anycast e Rede Global da AWS|18.6]]
- **Módulo 19:** [[19.07 - Cognito User Pools e Identity Pools|19.7]]
- **Módulo 20:** [[20.08 - Padroes de Resiliencia Imutabilidade Retry e Degradacao|20.8]]
- **Módulo 27:** [[27.05 - Simulado 2|27.5]]
