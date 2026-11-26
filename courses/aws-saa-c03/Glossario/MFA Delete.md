---
aliases:
  - "MFA Delete do S3"
tags:
  - glossario
  - seguranca
---
# MFA Delete

MFA Delete é uma proteção do versionamento do S3 que exige um código MFA para apagar versões ou suspender o versionamento. Só o usuário root pode habilitá-lo, apenas pela CLI ou API, e não é compatível com regras de ciclo de vida.

> [!example] Exemplo
> A conta root habilita MFA Delete em um bucket de documentos para que nenhum administrador apague versões sem MFA.

Veja também: [[MFA]], [[Object Lock]], [[Versionamento]]

## Onde aparece

- **Módulo 1:** [[01.07 - A Conta AWS como Fronteira|1.7]]
- **Módulo 4:** [[04.01 - Por que IAM Autenticacao Autorizacao e Principals|4.1]]
- **Módulo 5:** [[05.08 - CloudTrail e a Trilha de Auditoria|5.8]]
- **Módulo 8:** [[08 - Criptografia e Protecao de Dados|nota do módulo]], [[08.09 - Governanca de Dados Object Lock e Macie|8.9]]
- **Módulo 11:** [[11 - Amazon S3 a Fundo|nota do módulo]], [[11.01 - O Modelo do S3 Buckets Objetos e Durabilidade|11.1]], [[11.05 - Criptografia Versionamento e Retencao no S3|11.5]]
