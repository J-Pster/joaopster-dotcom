---
aliases:
  - "contexto de criptografia"
tags:
  - glossario
  - seguranca
---
# Encryption Context

Conjunto de pares chave-valor, não secreto, que se associa a uma operação de criptografia no KMS e precisa ser igual na decifragem. Funciona como dado autenticado adicional e permite usar condições na key policy e rastrear o uso no CloudTrail. Se o contexto na decifragem for diferente, a operação falha.

> [!example] Exemplo
> Uma key policy só permite decifrar quando o encryption context traz o projeto correto, impedindo o uso da chave por outro projeto.

Veja também: [[Envelope Encryption]], [[KMS]], [[Key Policy]]

## Onde aparece

- **Módulo 8:** [[08.02 - AWS KMS Chaves e Envelope Encryption|8.2]], [[08.03 - KMS Key Policy IAM e Grants|8.3]]
