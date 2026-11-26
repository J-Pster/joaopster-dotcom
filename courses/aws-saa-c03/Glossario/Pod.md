---
aliases:
  - "pod"
  - "pods"
tags:
  - glossario
  - conceito
---
# Pod

O pod é a menor unidade implantável do Kubernetes: um ou mais containers que compartilham rede e armazenamento e rodam juntos no mesmo nó. Um pod é efêmero e substituível; quem o mantém vivo é um controlador como o Deployment. No EKS com VPC CNI, cada pod recebe um IP da VPC.

> [!example] Exemplo
> Um pod com o container da aplicação e um sidecar de logs recebe um IP próprio da VPC.

Veja também: [[EKS]], [[Kubernetes]], [[Sidecar]]

## Onde aparece

- **Módulo 3:** [[03.03 - Faixas Privadas Sub-redes e IPv6|3.3]]
- **Módulo 17:** [[17 - Containers ECS EKS e Fargate|nota do módulo]], [[17.03 - ECS Cluster Task Definition e Service|17.3]], [[17.06 - EKS Kubernetes Gerenciado na AWS|17.6]], [[17.07 - Migrar para Containers e Elastic Beanstalk|17.7]], [[17.08 - Escolhendo a Computacao Tabela de Decisao|17.8]]
- **Módulo 19:** [[19.08 - Credenciais da Aplicacao e Decisao Final|19.8]]
- **Módulo 20:** [[20.02 - Multi-AZ e Multi-Region Servico por Servico|20.2]]
- **Módulo 21:** [[21.04 - X-Ray Prometheus Grafana e Monitoramento de Aplicacao|21.4]]
