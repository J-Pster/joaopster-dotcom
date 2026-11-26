---
aliases:
  - "AWS CloudFormation"
tags:
  - glossario
  - servico
---
# CloudFormation

O CloudFormation é o serviço de infraestrutura como código da AWS: um template descreve os recursos, e o serviço os cria, atualiza e remove em conjunto como uma stack. Existe para tornar os ambientes repetíveis e auditáveis, em vez de montados à mão. Na prova, é a resposta nativa quando o enunciado pede criar o mesmo ambiente de forma consistente em várias contas ou Regiões.

> [!example] Exemplo
> Um template cria a mesma VPC, sub-redes, banco e ALB em três ambientes, sempre com a mesma configuração.

Veja também: [[IAM]], [[Infraestrutura Imutavel]], [[Operacoes como Codigo]], [[Systems Manager]]

## Onde aparece

- **Módulo 1:** [[01.01 - Por que a Nuvem Existe|1.1]], [[01.06 - Tudo e API Endpoints Quotas e Health|1.6]]
- **Módulo 2:** [[02.02 - Excelencia Operacional e Seguranca|2.2]], [[02.06 - Dominios Pesos e o Mapa para os Pilares|2.6]]
- **Módulo 4:** [[04.04 - Conditions e Condition Keys|4.4]], [[04.08 - Guardrails e Menor Privilegio na Pratica|4.8]]
- **Módulo 5:** [[05.01 - Por que Varias Contas e Como o Organizations Organiza|5.1]], [[05.04 - Control Tower e Landing Zone|5.4]]
- **Módulo 8:** [[08.08 - Secrets Manager e Parameter Store|8.8]]
- **Módulo 12:** [[12.06 - Auto Scaling Groups e Launch Templates|12.6]]
- **Módulo 13:** [[13.01 - Por Que Banco Gerenciado e Escolha do Engine|13.1]]
- **Módulo 15:** [[15.05 - EventBridge Barramento Regras Scheduler e Pipes|15.5]]
- **Módulo 16:** [[16.08 - Padroes Serverless e Ferramentas de Front-end|16.8]]
- **Módulo 17:** [[17.07 - Migrar para Containers e Elastic Beanstalk|17.7]]
- **Módulo 19:** [[19.03 - WAF Web ACLs Regras e Onde Associar|19.3]], [[19.07 - Cognito User Pools e Identity Pools|19.7]]
- **Módulo 20:** [[20.04 - As Quatro Estrategias de Recuperacao de Desastres|20.4]], [[20.08 - Padroes de Resiliencia Imutabilidade Retry e Degradacao|20.8]]
- **Módulo 21:** [[21 - Observabilidade Automacao e Operacoes|nota do módulo]], [[21.01 - Observabilidade e Metricas do CloudWatch|21.1]], [[21.02 - Alarmes do CloudWatch e Acoes Automaticas|21.2]], [[21.05 - CloudFormation Stacks Templates e Change Sets|21.5]], [[21.06 - CloudFormation Operacao StackSets Service Catalog e Governanca|21.6]], [[21.07 - Systems Manager Gerencia Remota e Parametros|21.7]], [[21.08 - Health Trusted Advisor License Manager e Remediacao Automatica|21.8]]
- **Módulo 24:** [[24.05 - SageMaker AI e Modelo Proprio|24.5]]
- **Módulo 26:** [[26.06 - Multiconta Governanca e Auditoria|26.6]], [[26.08 - Revisao Well-Architected e Trade-offs|26.8]]
- **Módulo 27:** [[27.05 - Simulado 2|27.5]]
