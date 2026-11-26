---
aliases:
  - "credential reports"
  - "relatório de credenciais"
tags:
  - glossario
  - seguranca
---
# Credential Report

Arquivo CSV com todos os usuários IAM da conta e o estado das credenciais de cada um: idade da senha, último uso, MFA ativo e idade e uso das chaves de acesso. É gerado sob demanda, e um novo só é produzido se o anterior tiver mais de quatro horas. É a ferramenta de auditoria de higiene de credenciais.

> [!example] Exemplo
> Um auditor baixa o relatório para listar usuários sem MFA e chaves com mais de 90 dias.

Veja também: [[Access Key]], [[IAM Access Analyzer]], [[IAM User]], [[MFA]]

## Onde aparece

- **Módulo 4:** [[04 - IAM Identidade e Acesso|nota do módulo]], [[04.02 - Usuarios Grupos Credenciais e MFA|4.2]], [[04.08 - Guardrails e Menor Privilegio na Pratica|4.8]]
- **Módulo 26:** [[26.09 - Mudancas de Requisito no Estilo da Prova|26.9]]
