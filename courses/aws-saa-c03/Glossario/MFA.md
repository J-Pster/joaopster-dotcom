---
aliases:
  - "autenticação de múltiplos fatores"
  - "autenticação multifator"
  - "multi-factor authentication"
  - "verificação em duas etapas"
tags:
  - glossario
  - seguranca
---
# MFA

Segundo fator de autenticação, além da senha: algo que você tem (aplicativo TOTP, chave de segurança FIDO2 ou passkey). No IAM, até oito dispositivos MFA por usuário podem ser registrados. A condição aws:MultiFactorAuthPresent permite exigir MFA em ações sensíveis, e o MFA do usuário root é uma prática básica de segurança.

> [!example] Exemplo
> Uma policy nega a exclusão de instâncias EC2 quando a sessão não foi autenticada com MFA.

Veja também: [[Condition Key]], [[IAM User]], [[STS]], [[Usuario Root]]

## Onde aparece

- **Módulo 1:** [[01 - Nuvem e Infraestrutura Global AWS|nota do módulo]], [[01.07 - A Conta AWS como Fronteira|1.7]]
- **Módulo 4:** [[04 - IAM Identidade e Acesso|nota do módulo]], [[04.01 - Por que IAM Autenticacao Autorizacao e Principals|4.1]], [[04.02 - Usuarios Grupos Credenciais e MFA|4.2]], [[04.03 - Anatomia de uma Policy IAM|4.3]], [[04.04 - Conditions e Condition Keys|4.4]], [[04.06 - Roles e STS Credenciais Temporarias|4.6]], [[04.07 - Acesso entre Contas Resource Policies e Confused Deputy|4.7]], [[04.08 - Guardrails e Menor Privilegio na Pratica|4.8]]
- **Módulo 5:** [[05 - Multiconta Governanca e Federacao|nota do módulo]], [[05.01 - Por que Varias Contas e Como o Organizations Organiza|5.1]], [[05.02 - SCPs e Politicas de Organizacao|5.2]], [[05.05 - IAM Identity Center|5.5]], [[05.06 - Federacao com IAM e Directory Service|5.6]], [[05.07 - RAM e Compartilhamento entre Contas|5.7]]
- **Módulo 8:** [[08 - Criptografia e Protecao de Dados|nota do módulo]], [[08.09 - Governanca de Dados Object Lock e Macie|8.9]]
- **Módulo 11:** [[11.05 - Criptografia Versionamento e Retencao no S3|11.5]]
- **Módulo 19:** [[19 - Seguranca de Aplicacoes e Deteccao de Ameacas|nota do módulo]], [[19.01 - Ameacas Externas e Defesa em Profundidade|19.1]], [[19.07 - Cognito User Pools e Identity Pools|19.7]]
- **Módulo 21:** [[21.08 - Health Trusted Advisor License Manager e Remediacao Automatica|21.8]]
- **Módulo 26:** [[26.01 - O Projeto PropDesk e os Requisitos|26.1]], [[26.02 - Iteracao 1 Seguranca em Camadas|26.2]], [[26.06 - Multiconta Governanca e Auditoria|26.6]], [[26.07 - Plano de DR e Estimativa de Custo|26.7]], [[26.08 - Revisao Well-Architected e Trade-offs|26.8]]
- **Módulo 27:** [[27.04 - Simulado 1|27.4]]
