---
aliases:
  - "alarme CloudWatch"
  - "alarme do CloudWatch"
tags:
  - glossario
  - servico
---
# CloudWatch Alarm

Um CloudWatch Alarm observa uma métrica e muda de estado (OK, ALARM ou INSUFFICIENT_DATA) quando ela cruza um limite durante um período definido. Existe para transformar uma métrica em ação: notificar uma equipe, acionar um SNS ou disparar uma política de escala. Em mensageria, um alarme sobre as mensagens visíveis de uma DLQ avisa quando algo está falhando.

> [!example] Exemplo
> Um alarme dispara quando a DLQ tem mais de zero mensagens por 5 minutos e envia um aviso ao tópico SNS da equipe de plantão.

Veja também: [[Dead-Letter Queue]], [[SNS]], [[SQS]], [[Scaling Policy]]

## Onde aparece

- **Módulo 1:** [[01.06 - Tudo e API Endpoints Quotas e Health|1.6]]
- **Módulo 8:** [[08.04 - KMS Rotacao Material Importado Multi-Region e Exclusao|8.4]]
- **Módulo 9:** [[09.04 - Ciclo de Vida User Data e Metadados|9.4]]
- **Módulo 12:** [[12.09 - Instance Refresh Termination e Spot|12.9]]
- **Módulo 13:** [[13.02 - RDS Instancias Classes e Armazenamento|13.2]]
- **Módulo 15:** [[15.02 - SQS Filas Standard e o Ciclo de Vida da Mensagem|15.2]], [[15.04 - SNS Topicos Fan-out e Filtros|15.4]]
- **Módulo 18:** [[18 - Borda e DNS CloudFront Global Accelerator e Route 53|nota do módulo]], [[18.09 - Health Checks Failover e Application Recovery Controller|18.9]]
- **Módulo 20:** [[20.07 - Failover de Trafego e Application Recovery Controller|20.7]], [[20.08 - Padroes de Resiliencia Imutabilidade Retry e Degradacao|20.8]], [[20.09 - Tornar Aplicacao Legada Resiliente sem Mudar o Codigo|20.9]], [[20.10 - Metricas de Negocio SLO e Teste de Recuperacao|20.10]]
- **Módulo 21:** [[21.02 - Alarmes do CloudWatch e Acoes Automaticas|21.2]], [[21.06 - CloudFormation Operacao StackSets Service Catalog e Governanca|21.6]], [[21.07 - Systems Manager Gerencia Remota e Parametros|21.7]], [[21.08 - Health Trusted Advisor License Manager e Remediacao Automatica|21.8]]
- **Módulo 27:** [[27.05 - Simulado 2|27.5]]
