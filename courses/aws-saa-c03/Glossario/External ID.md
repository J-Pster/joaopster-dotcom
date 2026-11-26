---
aliases:
  - "ExternalId"
  - "ID externo"
  - "external id"
  - "sts:ExternalId"
tags:
  - glossario
  - seguranca
---
# External ID

Valor, único por cliente e controlado pelo terceiro, que deve constar na trust policy e ser enviado em toda chamada AssumeRole. Impede que um cliente use o ARN da role de outro para fazer o terceiro agir na conta errada. Não é um segredo: funciona porque quem o controla é o terceiro, não o cliente.

> [!example] Exemplo
> Um SaaS de custos entrega a cada cliente um ID próprio, e a role do cliente só aceita AssumeRole quando esse ID acompanha a chamada.

Veja também: [[AssumeRole]], [[Confused Deputy]], [[IAM Role]], [[Trust Policy]]

## Onde aparece

- **Módulo 4:** [[04.06 - Roles e STS Credenciais Temporarias|4.6]], [[04.07 - Acesso entre Contas Resource Policies e Confused Deputy|4.7]]
- **Módulo 27:** [[27.04 - Simulado 1|27.4]]
