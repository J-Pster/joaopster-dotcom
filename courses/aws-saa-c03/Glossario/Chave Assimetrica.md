---
aliases:
  - "chave assimétrica"
  - "chaves assimétricas"
  - "criptografia assimétrica"
tags:
  - glossario
  - conceito
---
# Chave Assimetrica

Par de chaves em que a chave pública cifra ou verifica e a chave privada decifra ou assina. A chave pública pode ser distribuída livremente e a privada nunca sai de quem a possui. É lenta e limitada a mensagens pequenas, por isso é usada para trocar chaves simétricas e para assinaturas digitais, como no TLS.

> [!example] Exemplo
> Clientes baixam a chave pública de uma KMS key assimétrica, cifram o dado e só a empresa o decifra com a chave privada guardada no KMS.

Veja também: [[Chave Simetrica]], [[Hash]], [[TLS]]

## Onde aparece

- **Módulo 3:** [[03.07 - TLS HTTPS e Certificados|3.7]]
- **Módulo 8:** [[08.01 - Por que Criptografar e os Fundamentos|8.1]], [[08.02 - AWS KMS Chaves e Envelope Encryption|8.2]], [[08.03 - KMS Key Policy IAM e Grants|8.3]], [[08.04 - KMS Rotacao Material Importado Multi-Region e Exclusao|8.4]], [[08.05 - CloudHSM e Custom Key Stores|8.5]]
- **Módulo 18:** [[18.04 - Seguranca do Viewer HTTPS Assinaturas e WAF|18.4]], [[18.07 - Route 53 Fundamentos Zonas Registros e Alias|18.7]]
