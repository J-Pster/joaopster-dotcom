---
aliases:
  - "AWS STS"
  - "Security Token Service"
tags:
  - glossario
  - seguranca
---
# STS

Serviço que emite credenciais temporárias (chave de acesso, chave secreta e token de sessão) para roles e usuários federados. Suas principais APIs são AssumeRole, AssumeRoleWithSAML, AssumeRoleWithWebIdentity, GetSessionToken e GetFederationToken. As credenciais expiram sozinhas, o que reduz o dano de um vazamento.

> [!example] Exemplo
> A CLI chama AssumeRole para entrar na role de auditoria de outra conta e recebe credenciais válidas por uma hora.

Veja também: [[AssumeRole]], [[Credencial Temporaria]], [[Federacao]], [[IAM Role]], [[Role Chaining]]

## Onde aparece

- **Módulo 4:** [[04 - IAM Identidade e Acesso|nota do módulo]], [[04.01 - Por que IAM Autenticacao Autorizacao e Principals|4.1]], [[04.02 - Usuarios Grupos Credenciais e MFA|4.2]], [[04.05 - Logica de Avaliacao de Policies|4.5]], [[04.06 - Roles e STS Credenciais Temporarias|4.6]], [[04.07 - Acesso entre Contas Resource Policies e Confused Deputy|4.7]]
- **Módulo 5:** [[05 - Multiconta Governanca e Federacao|nota do módulo]], [[05.06 - Federacao com IAM e Directory Service|5.6]], [[05.08 - CloudTrail e a Trilha de Auditoria|5.8]]
- **Módulo 9:** [[09.04 - Ciclo de Vida User Data e Metadados|9.4]]
- **Módulo 11:** [[11.04 - Controle de Acesso e Rede no S3|11.4]]
- **Módulo 17:** [[17.06 - EKS Kubernetes Gerenciado na AWS|17.6]]
- **Módulo 19:** [[19.01 - Ameacas Externas e Defesa em Profundidade|19.1]], [[19.05 - GuardDuty e Deteccao de Ameacas|19.5]], [[19.07 - Cognito User Pools e Identity Pools|19.7]]
- **Módulo 26:** [[26.02 - Iteracao 1 Seguranca em Camadas|26.2]], [[26.06 - Multiconta Governanca e Auditoria|26.6]]
- **Módulo 27:** [[27 - Estrategia de Prova e Simulados|nota do módulo]], [[27.04 - Simulado 1|27.4]]
