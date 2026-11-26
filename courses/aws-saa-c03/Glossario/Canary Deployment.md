---
aliases:
  - "canary"
  - "canary deployment"
  - "canary release"
  - "canário"
  - "deploy canary"
  - "implantação canary"
  - "release canário"
tags:
  - glossario
  - conceito
---
# Canary Deployment

Canary é uma estratégia de implantação em que uma versão nova recebe primeiro uma fração pequena do tráfego real, para detectar problemas antes de atingir todos. Existe para limitar o raio de impacto de uma mudança: se as métricas e os alarmes ficam saudáveis, a fração aumenta até 100%; se não, o tráfego volta à versão antiga. Pode ser feita com registros weighted do Route 53, pesos em ALB, estágios do API Gateway, CodeDeploy ou as estratégias canary e linear nativas do ECS.

> [!example] Exemplo
> Dois registros weighted do Route 53, com pesos 95 e 5, mandam 5% dos usuários à versão nova enquanto um alarme de taxa de erro vigia.

Veja também: [[Blue Green Deployment]], [[Blue-Green Deployment]], [[CloudWatch]], [[Infraestrutura Imutavel]], [[Raio de Impacto]], [[Rolling Update]], [[Routing Policy]], [[Weighted Routing]]

## Onde aparece

- **Módulo 16:** [[16.05 - Empacotamento Versoes e Custo do Lambda|16.5]], [[16.06 - API Gateway Tipos Endpoints e Integracoes|16.6]], [[16.07 - API Gateway Seguranca Throttling Cache e CORS|16.7]]
- **Módulo 18:** [[18.08 - Route 53 Politicas de Roteamento|18.8]]
- **Módulo 20:** [[20.08 - Padroes de Resiliencia Imutabilidade Retry e Degradacao|20.8]]
