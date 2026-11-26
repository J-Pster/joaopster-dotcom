---
aliases:
  - "Configuração de lançamento"
  - "Launch Configurations"
tags:
  - glossario
  - conceito
---
# Launch Configuration

Forma antiga de descrever como um Auto Scaling Group lança instâncias. É imutável, não tem versões e não suporta os recursos novos, por isso é considerada legada e substituída pelo launch template.

> [!example] Exemplo
> Um ASG antigo usa uma launch configuration; para trocar a AMI é preciso criar outra, enquanto um launch template aceitaria uma nova versão.

Veja também: [[AMI]], [[Auto Scaling Group]], [[Instance Refresh]], [[Launch Template]]

## Onde aparece

- **Módulo 9:** [[09.04 - Ciclo de Vida User Data e Metadados|9.4]]
- **Módulo 12:** [[12.06 - Auto Scaling Groups e Launch Templates|12.6]], [[12.07 - Politicas de Escala|12.7]], [[12.09 - Instance Refresh Termination e Spot|12.9]]
- **Módulo 21:** [[21.01 - Observabilidade e Metricas do CloudWatch|21.1]]
