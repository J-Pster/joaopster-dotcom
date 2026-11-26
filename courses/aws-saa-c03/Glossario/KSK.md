---
aliases:
  - "chave de assinatura de chaves"
  - "key-signing key"
tags:
  - glossario
  - recurso
---
# KSK

A KSK (key-signing key) é a chave do DNSSEC que assina as outras chaves da zona, e é a base da cadeia de confiança. No Route 53, ela é uma chave assimétrica do KMS que você cria em us-east-1. Para fechar a cadeia, o registro DS correspondente precisa ser publicado no registrador do domínio.

> [!example] Exemplo
> Ao ativar DNSSEC em `exemplo.com`, a equipe cria a KSK em us-east-1 e entrega o registro DS ao registrador.

Veja também: [[DNSSEC]], [[Hosted Zone]], [[KMS]]

## Onde aparece

- **Módulo 18:** [[18 - Borda e DNS CloudFront Global Accelerator e Route 53|nota do módulo]], [[18.07 - Route 53 Fundamentos Zonas Registros e Alias|18.7]]
