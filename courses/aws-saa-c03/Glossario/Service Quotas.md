---
aliases:
  - "cota de serviço"
  - "cotas de serviço"
  - "limites de serviço"
  - "quotas de serviço"
  - "service quota"
  - "service quotas"
tags:
  - glossario
  - conceito
---
# Service Quotas

Service Quotas é o serviço que mostra e permite solicitar aumento dos limites de cada serviço AWS, na maioria por conta e por Região, como o número de VPCs ou de vCPUs. Os limites existem para proteger a conta de uso acidental e a AWS de abuso, e o serviço evita surpresas quando o crescimento esbarra neles. Muitas quotas são ajustáveis, mas algumas não são, e o plano de DR deve considerar as quotas da Região de standby.

> [!example] Exemplo
> Antes de um failover para us-west-2, o time confere e pede aumento da quota de vCPUs nessa Região, porque a de us-east-1 não vale lá.

Veja também: [[Alta Disponibilidade]], [[Elasticidade]], [[Regiao AWS]], [[Security Group]], [[Throttling]], [[VPC]]

## Onde aparece

- **Módulo 1:** [[01 - Nuvem e Infraestrutura Global AWS|nota do módulo]], [[01.04 - Escopo dos Recursos Global Regional e Zonal|1.4]], [[01.06 - Tudo e API Endpoints Quotas e Health|1.6]], [[01.07 - A Conta AWS como Fronteira|1.7]]
- **Módulo 2:** [[02.03 - Confiabilidade e Eficiencia de Desempenho|2.3]]
- **Módulo 5:** [[05.01 - Por que Varias Contas e Como o Organizations Organiza|5.1]]
- **Módulo 6:** [[06.01 - VPC CIDR e Planejamento de Enderecos|6.1]]
- **Módulo 8:** [[08.02 - AWS KMS Chaves e Envelope Encryption|8.2]]
- **Módulo 9:** [[09.01 - Instancia Nitro e AMI|9.1]], [[09.03 - Rede e Disco da Instancia|9.3]]
- **Módulo 13:** [[13.01 - Por Que Banco Gerenciado e Escolha do Engine|13.1]]
- **Módulo 15:** [[15.03 - SQS FIFO e Padroes de Consumo|15.3]]
- **Módulo 16:** [[16.03 - Concorrencia Escala e Cold Start|16.3]]
- **Módulo 20:** [[20.04 - As Quatro Estrategias de Recuperacao de Desastres|20.4]], [[20.07 - Failover de Trafego e Application Recovery Controller|20.7]], [[20.10 - Metricas de Negocio SLO e Teste de Recuperacao|20.10]]
- **Módulo 21:** [[21.01 - Observabilidade e Metricas do CloudWatch|21.1]], [[21.08 - Health Trusted Advisor License Manager e Remediacao Automatica|21.8]]
- **Módulo 24:** [[24.01 - Por Que Servicos de IA Prontos e Como Escolher pelo Verbo|24.1]], [[24.06 - Padroes de Arquitetura e Escolha pelo Verbo|24.6]]
- **Módulo 25:** [[25.04 - Ferramentas de Recomendacao Compute Optimizer e Trusted Advisor|25.4]]
- **Módulo 26:** [[26.06 - Multiconta Governanca e Auditoria|26.6]], [[26.07 - Plano de DR e Estimativa de Custo|26.7]], [[26.09 - Mudancas de Requisito no Estilo da Prova|26.9]]
