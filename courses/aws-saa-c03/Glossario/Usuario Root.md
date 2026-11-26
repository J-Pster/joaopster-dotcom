---
aliases:
  - "conta root"
  - "root"
  - "root user"
  - "usuario root"
  - "usuário raiz"
  - "usuário root"
tags:
  - glossario
  - seguranca
---
# Usuario Root

O usuário root é a identidade criada junto com a conta AWS, definida pelo e-mail e senha do cadastro, com acesso total e irrestrito a tudo, só limitável por uma SCP da organização. Por isso deve ficar protegido por MFA, sem chaves de acesso, e ser usado apenas nas poucas tarefas que exigem root. No dia a dia, usa-se IAM Identity Center ou roles.

> [!example] Exemplo
> Fechar a conta e alterar o plano de suporte exigem o usuário root; criar uma instância EC2 não.

Veja também: [[IAM]], [[IAM Identity Center]], [[IAM User]], [[MFA]], [[Menor Privilegio]], [[Organizations]], [[SCP]]

## Onde aparece

- **Módulo 1:** [[01 - Nuvem e Infraestrutura Global AWS|nota do módulo]], [[01.01 - Por que a Nuvem Existe|1.1]], [[01.07 - A Conta AWS como Fronteira|1.7]]
- **Módulo 2:** [[02.08 - Principios das Respostas Certas e Plano de Estudo|2.8]]
- **Módulo 4:** [[04 - IAM Identidade e Acesso|nota do módulo]], [[04.01 - Por que IAM Autenticacao Autorizacao e Principals|4.1]], [[04.02 - Usuarios Grupos Credenciais e MFA|4.2]], [[04.03 - Anatomia de uma Policy IAM|4.3]], [[04.05 - Logica de Avaliacao de Policies|4.5]], [[04.07 - Acesso entre Contas Resource Policies e Confused Deputy|4.7]]
- **Módulo 5:** [[05.01 - Por que Varias Contas e Como o Organizations Organiza|5.1]], [[05.02 - SCPs e Politicas de Organizacao|5.2]]
- **Módulo 8:** [[08 - Criptografia e Protecao de Dados|nota do módulo]], [[08.03 - KMS Key Policy IAM e Grants|8.3]], [[08.09 - Governanca de Dados Object Lock e Macie|8.9]]
- **Módulo 11:** [[11 - Amazon S3 a Fundo|nota do módulo]], [[11.04 - Controle de Acesso e Rede no S3|11.4]], [[11.05 - Criptografia Versionamento e Retencao no S3|11.5]]
- **Módulo 15:** [[15.05 - EventBridge Barramento Regras Scheduler e Pipes|15.5]]
- **Módulo 18:** [[18.04 - Seguranca do Viewer HTTPS Assinaturas e WAF|18.4]]
- **Módulo 21:** [[21.03 - CloudWatch Logs e o Agente|21.3]]
- **Módulo 26:** [[26.02 - Iteracao 1 Seguranca em Camadas|26.2]], [[26.06 - Multiconta Governanca e Auditoria|26.6]]
- **Módulo 27:** [[27.04 - Simulado 1|27.4]]
