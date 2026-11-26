---
aliases:
  - "launch templates"
  - "modelo de execução"
tags:
  - glossario
  - servico
---
# Launch Template

Modelo versionado que guarda os parâmetros de lançamento de instâncias EC2 (AMI, tipo, security groups, instance profile, user data). É usado diretamente e por grupos de Auto Scaling para criar instâncias idênticas, e substitui as launch configurations antigas.

> [!example] Exemplo
> O Auto Scaling Group usa uma launch template que já referencia o instance profile da aplicação.

Veja também: [[EC2]], [[IAM Role]], [[Instance Profile]]

## Onde aparece

- **Módulo 4:** [[04.06 - Roles e STS Credenciais Temporarias|4.6]]
- **Módulo 9:** [[09.01 - Instancia Nitro e AMI|9.1]], [[09.02 - Familias Graviton e Burstable|9.2]], [[09.04 - Ciclo de Vida User Data e Metadados|9.4]]
- **Módulo 12:** [[12 - Balanceamento de Carga e Auto Scaling|nota do módulo]], [[12.06 - Auto Scaling Groups e Launch Templates|12.6]]
- **Módulo 17:** [[17 - Containers ECS EKS e Fargate|nota do módulo]], [[17.05 - Capacidade Fargate EC2 e Managed Instances|17.5]], [[17.06 - EKS Kubernetes Gerenciado na AWS|17.6]]
- **Módulo 19:** [[19.08 - Credenciais da Aplicacao e Decisao Final|19.8]]
- **Módulo 27:** [[27.05 - Simulado 2|27.5]]
