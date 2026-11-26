---
aliases:
  - "data plane"
  - "plano de dados"
  - "plano de dados (data plane)"
tags:
  - glossario
  - conceito
---
# Plano de Dados

O plano de dados é a parte de um serviço que executa o trabalho em tempo real, como rotear requisições, responder consultas DNS ou gravar objetos. Costuma ser mais simples e mais resistente que o plano de controle, que cria e altera recursos. Por isso a AWS recomenda que o failover de um desastre dependa só de operações de plano de dados, e a prova prefere essa resposta a "criar recursos novos durante a falha".

> [!example] Exemplo
> O health check do Route 53 desviando o DNS é plano de dados; criar um novo ALB na hora é plano de controle.

Veja também: [[Application Recovery Controller]], [[Estabilidade Estatica]], [[Failover]], [[Plano de Controle]]

## Onde aparece

- **Módulo 1:** [[01 - Nuvem e Infraestrutura Global AWS|nota do módulo]], [[01.03 - Borda e Extensoes da Infraestrutura|1.3]], [[01.04 - Escopo dos Recursos Global Regional e Zonal|1.4]]
- **Módulo 3:** [[03.06 - DNS e Resolucao de Nomes|3.6]]
- **Módulo 5:** [[05.08 - CloudTrail e a Trilha de Auditoria|5.8]]
- **Módulo 17:** [[17.06 - EKS Kubernetes Gerenciado na AWS|17.6]]
- **Módulo 18:** [[18 - Borda e DNS CloudFront Global Accelerator e Route 53|nota do módulo]], [[18.07 - Route 53 Fundamentos Zonas Registros e Alias|18.7]], [[18.09 - Health Checks Failover e Application Recovery Controller|18.9]]
- **Módulo 20:** [[20 - Alta Disponibilidade e Recuperacao de Desastres|nota do módulo]], [[20.01 - Disponibilidade em Noves e o Ponto Unico de Falha|20.1]], [[20.02 - Multi-AZ e Multi-Region Servico por Servico|20.2]], [[20.04 - As Quatro Estrategias de Recuperacao de Desastres|20.4]], [[20.07 - Failover de Trafego e Application Recovery Controller|20.7]], [[20.10 - Metricas de Negocio SLO e Teste de Recuperacao|20.10]]
- **Módulo 26:** [[26.03 - Iteracao 2 Resiliencia e Desacoplamento|26.3]], [[26.07 - Plano de DR e Estimativa de Custo|26.7]]
