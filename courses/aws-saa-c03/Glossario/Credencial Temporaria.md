---
aliases:
  - "credenciais de curto prazo"
  - "credenciais temporarias"
  - "credenciais temporárias"
  - "credencial temporária"
tags:
  - glossario
  - seguranca
---
# Credencial Temporaria

Credencial emitida pelo STS com prazo de validade (chave de acesso, chave secreta e token de sessão), que expira sozinha. Por isso um vazamento tem dano limitado no tempo, ao contrário das chaves de longo prazo. É o que roles, federação e instance profiles entregam.

> [!example] Exemplo
> Uma Lambda usa as credenciais temporárias da execution role, renovadas automaticamente pelo ambiente de execução.

Veja também: [[Access Key]], [[IAM Role]], [[Role Chaining]], [[STS]]

## Onde aparece

- **Módulo 1:** [[01.06 - Tudo e API Endpoints Quotas e Health|1.6]]
- **Módulo 2:** [[02 - Well-Architected e o Formato da Prova|nota do módulo]], [[02.02 - Excelencia Operacional e Seguranca|2.2]], [[02.08 - Principios das Respostas Certas e Plano de Estudo|2.8]]
- **Módulo 4:** [[04 - IAM Identidade e Acesso|nota do módulo]], [[04.01 - Por que IAM Autenticacao Autorizacao e Principals|4.1]], [[04.02 - Usuarios Grupos Credenciais e MFA|4.2]], [[04.04 - Conditions e Condition Keys|4.4]], [[04.06 - Roles e STS Credenciais Temporarias|4.6]], [[04.07 - Acesso entre Contas Resource Policies e Confused Deputy|4.7]], [[04.08 - Guardrails e Menor Privilegio na Pratica|4.8]]
- **Módulo 5:** [[05 - Multiconta Governanca e Federacao|nota do módulo]], [[05.05 - IAM Identity Center|5.5]], [[05.06 - Federacao com IAM e Directory Service|5.6]]
- **Módulo 9:** [[09.04 - Ciclo de Vida User Data e Metadados|9.4]]
- **Módulo 11:** [[11.04 - Controle de Acesso e Rede no S3|11.4]]
- **Módulo 14:** [[14.02 - DynamoDB Modelo de Dados Chaves e Particoes|14.2]], [[14.09 - Decisao Qual Banco para Qual Requisito|14.9]]
- **Módulo 17:** [[17 - Containers ECS EKS e Fargate|nota do módulo]], [[17.03 - ECS Cluster Task Definition e Service|17.3]], [[17.06 - EKS Kubernetes Gerenciado na AWS|17.6]]
- **Módulo 18:** [[18.04 - Seguranca do Viewer HTTPS Assinaturas e WAF|18.4]]
- **Módulo 19:** [[19 - Seguranca de Aplicacoes e Deteccao de Ameacas|nota do módulo]], [[19.07 - Cognito User Pools e Identity Pools|19.7]], [[19.08 - Credenciais da Aplicacao e Decisao Final|19.8]]
- **Módulo 22:** [[22.08 - Lake Formation Governanca do Data Lake|22.8]]
- **Módulo 26:** [[26.02 - Iteracao 1 Seguranca em Camadas|26.2]], [[26.06 - Multiconta Governanca e Auditoria|26.6]]
- **Módulo 27:** [[27.03 - Revisao Final Mapa Requisito Servico e Pares que Confundem|27.3]], [[27.04 - Simulado 1|27.4]]
