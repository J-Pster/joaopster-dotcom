---
aliases:
  - "microservice"
  - "microservices"
  - "microsserviço"
  - "microsserviços"
tags:
  - glossario
  - conceito
---
# Microsservicos

Microsserviços são uma arquitetura em que a aplicação é dividida em serviços pequenos, cada um com responsabilidade própria, implantado e escalado de forma independente. Containers e orquestradores combinam bem com esse estilo, pois cada serviço tem sua imagem e seu ciclo de deploy. O custo é a complexidade de rede, observabilidade e consistência de dados.

> [!example] Exemplo
> Pedidos, pagamentos e estoque rodam como três services ECS separados, cada um escalando conforme a sua carga.

Veja também: [[Desacoplamento]], [[ECS Service Connect]], [[Servico ECS]]

## Onde aparece

- **Módulo 2:** [[02.06 - Dominios Pesos e o Mapa para os Pilares|2.6]]
- **Módulo 8:** [[08.07 - Criptografia em Transito ACM e Private CA|8.7]]
- **Módulo 9:** [[09.02 - Familias Graviton e Burstable|9.2]]
- **Módulo 10:** [[10.06 - EFS Arquivos NFS Compartilhados|10.6]]
- **Módulo 12:** [[12.02 - A Familia Elastic Load Balancing|12.2]]
- **Módulo 15:** [[15.01 - Por Que Desacoplar e os Padroes de Mensageria|15.1]]
- **Módulo 17:** [[17.01 - Por que Containers e Como Eles Funcionam|17.1]], [[17.03 - ECS Cluster Task Definition e Service|17.3]], [[17.04 - ECS em Producao Balanceador Escala e Deploys|17.4]], [[17.06 - EKS Kubernetes Gerenciado na AWS|17.6]], [[17.07 - Migrar para Containers e Elastic Beanstalk|17.7]]
- **Módulo 18:** [[18 - Borda e DNS CloudFront Global Accelerator e Route 53|nota do módulo]], [[18.04 - Seguranca do Viewer HTTPS Assinaturas e WAF|18.4]], [[18.09 - Health Checks Failover e Application Recovery Controller|18.9]]
- **Módulo 21:** [[21 - Observabilidade Automacao e Operacoes|nota do módulo]], [[21.04 - X-Ray Prometheus Grafana e Monitoramento de Aplicacao|21.4]]
- **Módulo 22:** [[22 - Dados Analytics e Ingestao|nota do módulo]], [[22.04 - MSK e a Escolha do Servico de Streaming|22.4]], [[22.11 - OpenSearch Quick Data Exchange e Servicos Auxiliares|22.11]]
- **Módulo 23:** [[23.01 - Por que e Como Migrar os 7 Rs e as Fases|23.1]]
- **Módulo 25:** [[25.01 - Como a AWS Cobra e o Pilar de Custos|25.1]]
- **Módulo 26:** [[26.03 - Iteracao 2 Resiliencia e Desacoplamento|26.3]]
- **Módulo 27:** [[27.05 - Simulado 2|27.5]]
