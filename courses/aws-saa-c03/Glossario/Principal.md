---
aliases:
  - "principal IAM"
  - "principals"
tags:
  - glossario
  - seguranca
---
# Principal

Entidade que pode fazer uma requisição à AWS: usuário root, usuário IAM, role e sessão de role, usuário federado, serviço da AWS ou requisitante anônimo. É o elemento que identifica quem recebe a permissão em resource policies e trust policies. Grupos IAM não são principals.

> [!example] Exemplo
> Na trust policy de uma role de Lambda, o Principal é o serviço lambda.amazonaws.com.

Veja também: [[ARN]], [[IAM Role]], [[IAM User]], [[Resource-Based Policy]], [[Trust Policy]]

## Onde aparece

- **Módulo 1:** [[01.07 - A Conta AWS como Fronteira|1.7]]
- **Módulo 4:** [[04 - IAM Identidade e Acesso|nota do módulo]], [[04.01 - Por que IAM Autenticacao Autorizacao e Principals|4.1]], [[04.02 - Usuarios Grupos Credenciais e MFA|4.2]], [[04.05 - Logica de Avaliacao de Policies|4.5]], [[04.06 - Roles e STS Credenciais Temporarias|4.6]], [[04.07 - Acesso entre Contas Resource Policies e Confused Deputy|4.7]], [[04.08 - Guardrails e Menor Privilegio na Pratica|4.8]]
- **Módulo 5:** [[05.02 - SCPs e Politicas de Organizacao|5.2]], [[05.05 - IAM Identity Center|5.5]]
- **Módulo 6:** [[06.09 - Interface Endpoints PrivateLink e Endpoint Policies|6.9]]
- **Módulo 27:** [[27.03 - Revisao Final Mapa Requisito Servico e Pares que Confundem|27.3]], [[27.04 - Simulado 1|27.4]]
