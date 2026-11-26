---
aliases:
  - "System for Cross-domain Identity Management"
tags:
  - glossario
  - seguranca
---
# SCIM

Padrão para sincronizar automaticamente usuários e grupos de um provedor de identidade com outro serviço. No IAM Identity Center, o SCIM mantém os usuários e grupos do IdP externo sincronizados, evitando cadastro duplicado. Atributos como nome e sobrenome precisam estar preenchidos para o usuário ser provisionado.

> [!example] Exemplo
> Quando alguém sai da empresa, o IdP desativa o usuário e o SCIM remove o acesso no Identity Center.

Veja também: [[IAM Identity Center]], [[Identity Source]], [[SAML]]

## Onde aparece

- **Módulo 4:** [[04.07 - Acesso entre Contas Resource Policies e Confused Deputy|4.7]]
- **Módulo 5:** [[05 - Multiconta Governanca e Federacao|nota do módulo]], [[05.05 - IAM Identity Center|5.5]], [[05.06 - Federacao com IAM e Directory Service|5.6]]
- **Módulo 26:** [[26.06 - Multiconta Governanca e Auditoria|26.6]]
- **Módulo 27:** [[27.04 - Simulado 1|27.4]]
