---
aliases:
  - "boundaries"
  - "boundary"
  - "limite de permissões"
  - "permission boundary"
  - "permissions boundaries"
tags:
  - glossario
  - seguranca
---
# Permissions Boundary

Managed policy usada como teto de permissões de um usuário ou role: a identidade só pode fazer o que a identity policy permite e a boundary também permite. Ela nunca concede nada sozinha e não se aplica a grupos. É usada para delegar a criação de roles sem permitir escalada de privilégio.

> [!example] Exemplo
> Desenvolvedores criam roles somente com a condição iam:PermissionsBoundary apontando para a DevBoundary, que não inclui ações de IAM.

Veja também: [[Escalada de Privilegio]], [[IAM Role]], [[Menor Privilegio]], [[SCP]], [[Session Policy]]

## Onde aparece

- **Módulo 1:** [[01.02 - Regions e Availability Zones|1.2]]
- **Módulo 2:** [[02.01 - Por que um Framework e Como Revisar uma Arquitetura|2.1]]
- **Módulo 4:** [[04 - IAM Identidade e Acesso|nota do módulo]], [[04.01 - Por que IAM Autenticacao Autorizacao e Principals|4.1]], [[04.03 - Anatomia de uma Policy IAM|4.3]], [[04.05 - Logica de Avaliacao de Policies|4.5]], [[04.06 - Roles e STS Credenciais Temporarias|4.6]], [[04.08 - Guardrails e Menor Privilegio na Pratica|4.8]]
- **Módulo 5:** [[05.02 - SCPs e Politicas de Organizacao|5.2]], [[05.05 - IAM Identity Center|5.5]]
- **Módulo 8:** [[08.03 - KMS Key Policy IAM e Grants|8.3]]
- **Módulo 11:** [[11.04 - Controle de Acesso e Rede no S3|11.4]]
- **Módulo 20:** [[20.02 - Multi-AZ e Multi-Region Servico por Servico|20.2]]
- **Módulo 26:** [[26.02 - Iteracao 1 Seguranca em Camadas|26.2]]
- **Módulo 27:** [[27.03 - Revisao Final Mapa Requisito Servico e Pares que Confundem|27.3]], [[27.04 - Simulado 1|27.4]], [[27.05 - Simulado 2|27.5]]
