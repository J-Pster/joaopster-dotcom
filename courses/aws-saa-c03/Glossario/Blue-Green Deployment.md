---
aliases:
  - "azul e verde"
  - "blue-green"
  - "blue/green"
tags:
  - glossario
  - conceito
---
# Blue-Green Deployment

Blue/green é uma estratégia em que dois ambientes completos coexistem: o atual (blue) e o novo (green). O tráfego é trocado do primeiro para o segundo quando o novo está validado, e voltar atrás é redirecionar de novo. Ela existe para reduzir o tempo fora do ar e o risco de uma implantação, ao custo de manter duas cópias por um tempo.

> [!example] Exemplo
> Com o Route 53 weighted, a empresa move o peso de 0 para 100 no ambiente green aos poucos e mantém o blue para o caso de reversão.

Veja também: [[Canary Deployment]], [[Weighted Routing]]

## Onde aparece

- **Módulo 2:** [[02.02 - Excelencia Operacional e Seguranca|2.2]]
- **Módulo 8:** [[08.06 - Criptografia em Repouso nos Servicos AWS|8.6]]
- **Módulo 12:** [[12.03 - Application Load Balancer a Fundo|12.3]]
- **Módulo 17:** [[17 - Containers ECS EKS e Fargate|nota do módulo]], [[17.04 - ECS em Producao Balanceador Escala e Deploys|17.4]], [[17.07 - Migrar para Containers e Elastic Beanstalk|17.7]]
- **Módulo 18:** [[18.06 - Global Accelerator Anycast e Rede Global da AWS|18.6]], [[18.08 - Route 53 Politicas de Roteamento|18.8]]
- **Módulo 20:** [[20.08 - Padroes de Resiliencia Imutabilidade Retry e Degradacao|20.8]]
- **Módulo 26:** [[26.03 - Iteracao 2 Resiliencia e Desacoplamento|26.3]]
