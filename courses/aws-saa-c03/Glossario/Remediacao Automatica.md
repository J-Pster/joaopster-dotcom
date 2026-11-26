---
aliases:
  - "Remediacao"
  - "auto-remediation"
  - "automatic remediation"
  - "remediation"
  - "remediação"
  - "remediação automática"
  - "remediação do Config"
tags:
  - glossario
  - conceito
---
# Remediacao Automatica

Remediação automática é o padrão em que um sinal (alarme, evento do Health, não conformidade do AWS Config, achado do GuardDuty) dispara sem intervenção humana uma ação corretiva, por Lambda ou SSM Automation. Existe para fechar a brecha em segundos, sem esperar uma pessoa, e na prova costuma aparecer como regra do Config com ação de remediação. Exige role IAM de menor privilégio e, em ações destrutivas ou em recursos críticos, aprovação manual.

> [!example] Exemplo
> A regra do Config acusa bucket sem criptografia, e a remediação liga a criptografia por um documento do Automation.

Veja também: [[Automation]], [[Config]], [[Config Rule]], [[EventBridge]], [[Runbook]]

## Onde aparece

- **Módulo 1:** [[01.06 - Tudo e API Endpoints Quotas e Health|1.6]]
- **Módulo 2:** [[02.01 - Por que um Framework e Como Revisar uma Arquitetura|2.1]], [[02.02 - Excelencia Operacional e Seguranca|2.2]]
- **Módulo 5:** [[05 - Multiconta Governanca e Federacao|nota do módulo]], [[05.09 - AWS Config e Conformidade Continua|5.9]]
- **Módulo 15:** [[15.05 - EventBridge Barramento Regras Scheduler e Pipes|15.5]]
- **Módulo 16:** [[16.08 - Padroes Serverless e Ferramentas de Front-end|16.8]]
- **Módulo 17:** [[17.02 - ECR Repositorio de Imagens|17.2]]
- **Módulo 19:** [[19.04 - Network Firewall DNS Firewall e Firewall Manager|19.4]], [[19.05 - GuardDuty e Deteccao de Ameacas|19.5]], [[19.06 - Inspector Detective e Security Hub|19.6]]
- **Módulo 21:** [[21 - Observabilidade Automacao e Operacoes|nota do módulo]], [[21.02 - Alarmes do CloudWatch e Acoes Automaticas|21.2]], [[21.06 - CloudFormation Operacao StackSets Service Catalog e Governanca|21.6]], [[21.07 - Systems Manager Gerencia Remota e Parametros|21.7]], [[21.08 - Health Trusted Advisor License Manager e Remediacao Automatica|21.8]]
- **Módulo 26:** [[26.06 - Multiconta Governanca e Auditoria|26.6]]
- **Módulo 27:** [[27.03 - Revisao Final Mapa Requisito Servico e Pares que Confundem|27.3]]
