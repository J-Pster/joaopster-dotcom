---
aliases:
  - "IAM user"
  - "usuário IAM"
  - "usuários IAM"
tags:
  - glossario
  - seguranca
---
# IAM User

Identidade permanente dentro de uma conta, com nome e credenciais de longo prazo (senha do Console e até duas chaves de acesso). Representa uma pessoa ou uma aplicação, mas a AWS recomenda preferir federação e roles com credenciais temporárias. Um usuário não tem permissão alguma até receber policies, diretamente ou por grupos.

> [!example] Exemplo
> Um script legado que roda em um servidor on-premises usa as chaves de um usuário IAM; o ideal seria trocá-lo por uma role com IAM Roles Anywhere.

Veja também: [[Access Key]], [[IAM Group]], [[IAM Role]], [[MFA]], [[Usuario Root]]

## Onde aparece

- **Módulo 1:** [[01.07 - A Conta AWS como Fronteira|1.7]]
- **Módulo 4:** [[04 - IAM Identidade e Acesso|nota do módulo]], [[04.01 - Por que IAM Autenticacao Autorizacao e Principals|4.1]], [[04.02 - Usuarios Grupos Credenciais e MFA|4.2]], [[04.03 - Anatomia de uma Policy IAM|4.3]], [[04.04 - Conditions e Condition Keys|4.4]], [[04.05 - Logica de Avaliacao de Policies|4.5]], [[04.06 - Roles e STS Credenciais Temporarias|4.6]], [[04.07 - Acesso entre Contas Resource Policies e Confused Deputy|4.7]], [[04.08 - Guardrails e Menor Privilegio na Pratica|4.8]]
- **Módulo 5:** [[05 - Multiconta Governanca e Federacao|nota do módulo]], [[05.01 - Por que Varias Contas e Como o Organizations Organiza|5.1]], [[05.03 - Cobranca Consolidada e Custos Multiconta|5.3]], [[05.05 - IAM Identity Center|5.5]], [[05.06 - Federacao com IAM e Directory Service|5.6]], [[05.07 - RAM e Compartilhamento entre Contas|5.7]]
- **Módulo 8:** [[08 - Criptografia e Protecao de Dados|nota do módulo]], [[08.03 - KMS Key Policy IAM e Grants|8.3]]
- **Módulo 11:** [[11.04 - Controle de Acesso e Rede no S3|11.4]], [[11.05 - Criptografia Versionamento e Retencao no S3|11.5]]
- **Módulo 26:** [[26.06 - Multiconta Governanca e Auditoria|26.6]]
- **Módulo 27:** [[27 - Estrategia de Prova e Simulados|nota do módulo]], [[27.05 - Simulado 2|27.5]]
