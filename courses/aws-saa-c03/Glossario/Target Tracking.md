---
aliases:
  - "Escala por rastreamento de alvo"
  - "Rastreamento de alvo"
  - "Target Tracking Scaling"
tags:
  - glossario
  - conceito
---
# Target Tracking

Política de escala em que você escolhe uma métrica e um valor-alvo, e o serviço cria e gerencia os alarmes e ajusta a capacidade proporcionalmente para manter a métrica perto do alvo. Escala para fora rápido e para dentro com cautela. A métrica precisa variar de forma inversa e proporcional à capacidade.

> [!example] Exemplo
> Manter a CPU média do ASG em 50%: se ela chega a 80%, o grupo aumenta a capacidade até a métrica voltar perto de 50%.

Veja também: [[Cooldown]], [[Instance Warmup]], [[Predictive Scaling]], [[Step Scaling]]

## Onde aparece

- **Módulo 2:** [[02.03 - Confiabilidade e Eficiencia de Desempenho|2.3]]
- **Módulo 12:** [[12 - Balanceamento de Carga e Auto Scaling|nota do módulo]], [[12.01 - Escalar Horizontalmente e Aplicacao Stateless|12.1]], [[12.07 - Politicas de Escala|12.7]], [[12.10 - Application Auto Scaling e Arquiteturas Completas|12.10]]
- **Módulo 14:** [[14.03 - DynamoDB Capacidade RCU WCU e Custo|14.3]]
- **Módulo 15:** [[15.03 - SQS FIFO e Padroes de Consumo|15.3]]
- **Módulo 16:** [[16.03 - Concorrencia Escala e Cold Start|16.3]]
- **Módulo 17:** [[17 - Containers ECS EKS e Fargate|nota do módulo]], [[17.04 - ECS em Producao Balanceador Escala e Deploys|17.4]], [[17.05 - Capacidade Fargate EC2 e Managed Instances|17.5]]
- **Módulo 21:** [[21.01 - Observabilidade e Metricas do CloudWatch|21.1]], [[21.02 - Alarmes do CloudWatch e Acoes Automaticas|21.2]]
- **Módulo 25:** [[25.06 - Computacao Rightsizing Graviton e Servicos Gerenciados|25.6]]
- **Módulo 26:** [[26.04 - Iteracao 3 Desempenho e Elasticidade|26.4]]
- **Módulo 27:** [[27.03 - Revisao Final Mapa Requisito Servico e Pares que Confundem|27.3]], [[27.05 - Simulado 2|27.5]]
