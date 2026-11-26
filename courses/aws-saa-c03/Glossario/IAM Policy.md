---
aliases:
  - "IAM policies"
  - "IAM policy"
  - "policies"
  - "policies IAM"
  - "policy"
  - "policy IAM"
  - "política do IAM"
  - "políticas do IAM"
tags:
  - glossario
  - seguranca
---
# IAM Policy

A IAM policy é o documento JSON que define permissões: uma lista de statements, cada um com Effect (Allow ou Deny), Action, Resource e, quando preciso, Principal e Condition. Policies não fazem nada sozinhas; passam a valer quando anexadas a uma identidade ou a um recurso, e um Deny explícito sempre vence qualquer Allow. Existem vários tipos, entre eles identity-based, resource-based, permissions boundary, SCP e session policy.

> [!example] Exemplo
> Uma policy que permite s3:GetObject apenas no bucket relatorios, anexada a uma role de análise.

Veja também: [[Condition Key]], [[IAM Role]], [[Identity-Based Policy]], [[Key Policy]], [[Menor Privilegio]], [[Permissions Boundary]], [[Resource-Based Policy]]

## Onde aparece

- **Módulo 1:** [[01.06 - Tudo e API Endpoints Quotas e Health|1.6]]
- **Módulo 4:** [[04.01 - Por que IAM Autenticacao Autorizacao e Principals|4.1]], [[04.03 - Anatomia de uma Policy IAM|4.3]]
- **Módulo 5:** [[05.02 - SCPs e Politicas de Organizacao|5.2]], [[05.05 - IAM Identity Center|5.5]]
- **Módulo 7:** [[07.04 - PrivateLink e Endpoint Services|7.4]]
- **Módulo 8:** [[08 - Criptografia e Protecao de Dados|nota do módulo]], [[08.03 - KMS Key Policy IAM e Grants|8.3]], [[08.08 - Secrets Manager e Parameter Store|8.8]]
- **Módulo 11:** [[11.04 - Controle de Acesso e Rede no S3|11.4]]
- **Módulo 15:** [[15.02 - SQS Filas Standard e o Ciclo de Vida da Mensagem|15.2]]
- **Módulo 16:** [[16.07 - API Gateway Seguranca Throttling Cache e CORS|16.7]]
- **Módulo 22:** [[22.07 - Amazon Athena Consultas SQL no Lago|22.7]], [[22.08 - Lake Formation Governanca do Data Lake|22.8]]
- **Módulo 25:** [[25.02 - Visibilidade de Custos Cost Explorer Budgets e Anomalias|25.2]]
- **Módulo 26:** [[26 - Projeto Pratico - Arquitetura de Referencia|nota do módulo]], [[26.06 - Multiconta Governanca e Auditoria|26.6]]
