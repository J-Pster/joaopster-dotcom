---
aliases:
  - "AWS Graviton"
  - "Instâncias Graviton"
  - "Processador Graviton"
tags:
  - glossario
  - servico
---
# Graviton

Linha de processadores baseados em arquitetura Arm projetados pela AWS, usados em instâncias com a letra g no nome (como m7g). Em geral entregam melhor relação entre preço e desempenho que instâncias x86 equivalentes. Exigem software e AMI compilados para arm64.

> [!example] Exemplo
> Uma API em Java migra de m5 para m7g: o mesmo código roda na JVM arm64 e a fatura de computação cai, depois de testar a compatibilidade.

Veja também: [[AMI]], [[Compute Optimizer]], [[Instance Type]], [[Savings Plans]]

## Onde aparece

- **Módulo 2:** [[02.04 - Custos Sustentabilidade e Tensoes entre Pilares|2.4]]
- **Módulo 9:** [[09 - EC2 a Fundo|nota do módulo]], [[09.01 - Instancia Nitro e AMI|9.1]], [[09.02 - Familias Graviton e Burstable|9.2]], [[09.05 - Compra Savings Plans e Reserved Instances|9.5]]
- **Módulo 13:** [[13.02 - RDS Instancias Classes e Armazenamento|13.2]], [[13.09 - Padroes de Arquitetura Escolha e Custo|13.9]]
- **Módulo 16:** [[16.03 - Concorrencia Escala e Cold Start|16.3]], [[16.05 - Empacotamento Versoes e Custo do Lambda|16.5]]
- **Módulo 17:** [[17.01 - Por que Containers e Como Eles Funcionam|17.1]], [[17.03 - ECS Cluster Task Definition e Service|17.3]], [[17.05 - Capacidade Fargate EC2 e Managed Instances|17.5]]
- **Módulo 22:** [[22.09 - Amazon Redshift Data Warehouse na AWS|22.9]]
- **Módulo 25:** [[25 - Otimizacao de Custos|nota do módulo]], [[25.04 - Ferramentas de Recomendacao Compute Optimizer e Trusted Advisor|25.4]], [[25.05 - Computacao Modelos de Compra e a Decisao|25.5]], [[25.06 - Computacao Rightsizing Graviton e Servicos Gerenciados|25.6]], [[25.09 - Bancos de Dados Custo e Escolha da Ferramenta|25.9]], [[25.11 - Decisao de Custo na Prova e Revisao|25.11]]
- **Módulo 26:** [[26.05 - Iteracao 4 Custo Otimizado|26.5]], [[26.08 - Revisao Well-Architected e Trade-offs|26.8]]
- **Módulo 27:** [[27 - Estrategia de Prova e Simulados|nota do módulo]], [[27.04 - Simulado 1|27.4]], [[27.05 - Simulado 2|27.5]]
