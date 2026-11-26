---
aliases:
  - "SLR"
  - "role vinculada a serviço"
  - "service-linked roles"
tags:
  - glossario
  - seguranca
---
# Service-Linked Role

Role predefinida, vinculada a um serviço da AWS, que o serviço assume para agir em seu nome. O serviço define as permissões e a trust policy, e o cliente não pode editá-las. Muitos serviços, como Auto Scaling e Elastic Load Balancing, criam a sua automaticamente.

> [!example] Exemplo
> Ao criar um grupo de Auto Scaling pela primeira vez, a AWS cria a role AWSServiceRoleForAutoScaling.

Veja também: [[IAM Role]], [[Principal]], [[Trust Policy]]

## Onde aparece

- **Módulo 4:** [[04.06 - Roles e STS Credenciais Temporarias|4.6]]
- **Módulo 5:** [[05 - Multiconta Governanca e Federacao|nota do módulo]], [[05.02 - SCPs e Politicas de Organizacao|5.2]], [[05.07 - RAM e Compartilhamento entre Contas|5.7]], [[05.09 - AWS Config e Conformidade Continua|5.9]]
- **Módulo 17:** [[17.03 - ECS Cluster Task Definition e Service|17.3]]
- **Módulo 21:** [[21.02 - Alarmes do CloudWatch e Acoes Automaticas|21.2]]
