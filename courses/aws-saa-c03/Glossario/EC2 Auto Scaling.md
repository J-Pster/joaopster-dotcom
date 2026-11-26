---
aliases:
  - "Amazon EC2 Auto Scaling"
  - "Auto Scaling do EC2"
tags:
  - glossario
  - servico
---
# EC2 Auto Scaling

Serviço que mantém o número certo de instâncias EC2 em um Auto Scaling Group, lançando e substituindo instâncias conforme a capacidade desejada, a saúde e as políticas de escala. Só escala instâncias EC2; os outros serviços usam o Application Auto Scaling. O serviço em si não tem cobrança, e paga-se pelos recursos que ele cria.

> [!example] Exemplo
> Um grupo com mínimo 2 e máximo 10 lança instâncias quando a CPU média passa de 50% e repõe sozinho uma instância que falhou.

Veja também: [[Application Auto Scaling]], [[Auto Scaling Group]], [[Launch Template]], [[Target Tracking]]

## Onde aparece

- **Módulo 2:** [[02.06 - Dominios Pesos e o Mapa para os Pilares|2.6]], [[02.08 - Principios das Respostas Certas e Plano de Estudo|2.8]]
- **Módulo 12:** [[12 - Balanceamento de Carga e Auto Scaling|nota do módulo]], [[12.05 - Target Groups Health Checks e Cross-Zone|12.5]], [[12.06 - Auto Scaling Groups e Launch Templates|12.6]], [[12.07 - Politicas de Escala|12.7]], [[12.08 - Ciclo de Vida Hooks e Warm Pools|12.8]], [[12.09 - Instance Refresh Termination e Spot|12.9]], [[12.10 - Application Auto Scaling e Arquiteturas Completas|12.10]]
- **Módulo 15:** [[15.02 - SQS Filas Standard e o Ciclo de Vida da Mensagem|15.2]], [[15.03 - SQS FIFO e Padroes de Consumo|15.3]]
- **Módulo 17:** [[17.04 - ECS em Producao Balanceador Escala e Deploys|17.4]], [[17.05 - Capacidade Fargate EC2 e Managed Instances|17.5]]
- **Módulo 20:** [[20.02 - Multi-AZ e Multi-Region Servico por Servico|20.2]], [[20.09 - Tornar Aplicacao Legada Resiliente sem Mudar o Codigo|20.9]]
- **Módulo 21:** [[21.01 - Observabilidade e Metricas do CloudWatch|21.1]]
- **Módulo 25:** [[25.06 - Computacao Rightsizing Graviton e Servicos Gerenciados|25.6]]
