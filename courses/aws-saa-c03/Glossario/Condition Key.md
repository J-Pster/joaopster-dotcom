---
aliases:
  - "chave de condição"
  - "chaves de condição"
  - "condition keys"
  - "context key"
tags:
  - glossario
  - seguranca
---
# Condition Key

Atributo do contexto da requisição que um statement pode testar no elemento Condition, como aws:SourceIp, aws:PrincipalOrgID, aws:MultiFactorAuthPresent, aws:SecureTransport e tags. As chaves globais começam com aws: e as de serviço, com o prefixo dele (s3:, iam:). Se a chave não está presente na requisição, a condição se comporta de forma diferente conforme o operador usado.

> [!example] Exemplo
> Um Deny com Bool de aws:SecureTransport igual a false recusa qualquer requisição ao bucket feita sem TLS.

Veja também: [[ABAC]], [[IAM Policy]], [[MFA]], [[VPC Endpoint]]

## Onde aparece

- **Módulo 4:** [[04.04 - Conditions e Condition Keys|4.4]], [[04.08 - Guardrails e Menor Privilegio na Pratica|4.8]]
- **Módulo 5:** [[05.02 - SCPs e Politicas de Organizacao|5.2]]
- **Módulo 6:** [[06.08 - Gateway Endpoints para S3 e DynamoDB|6.8]]
- **Módulo 7:** [[07.04 - PrivateLink e Endpoint Services|7.4]]
- **Módulo 8:** [[08.03 - KMS Key Policy IAM e Grants|8.3]], [[08.06 - Criptografia em Repouso nos Servicos AWS|8.6]]
- **Módulo 11:** [[11.04 - Controle de Acesso e Rede no S3|11.4]]
