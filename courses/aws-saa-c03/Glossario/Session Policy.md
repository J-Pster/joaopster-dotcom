---
aliases:
  - "policy de sessão"
  - "session policies"
tags:
  - glossario
  - seguranca
---
# Session Policy

Policy passada como parâmetro ao criar uma sessão temporária (AssumeRole, GetFederationToken e variantes) para reduzir as permissões daquela sessão. A permissão efetiva é a interseção entre as policies da identidade e a session policy, de modo que ela nunca amplia o acesso.

> [!example] Exemplo
> Uma aplicação multi-tenant assume a mesma role para cada cliente e passa uma session policy que limita o acesso ao prefixo do cliente no bucket.

Veja também: [[AssumeRole]], [[Menor Privilegio]], [[Permissions Boundary]], [[STS]]

## Onde aparece

- **Módulo 4:** [[04 - IAM Identidade e Acesso|nota do módulo]], [[04.01 - Por que IAM Autenticacao Autorizacao e Principals|4.1]], [[04.03 - Anatomia de uma Policy IAM|4.3]], [[04.05 - Logica de Avaliacao de Policies|4.5]], [[04.06 - Roles e STS Credenciais Temporarias|4.6]], [[04.08 - Guardrails e Menor Privilegio na Pratica|4.8]]
- **Módulo 27:** [[27.03 - Revisao Final Mapa Requisito Servico e Pares que Confundem|27.3]]
