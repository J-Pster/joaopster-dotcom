---
aliases:
  - "chave simétrica"
  - "chaves simétricas"
  - "criptografia simétrica"
tags:
  - glossario
  - conceito
---
# Chave Simetrica

Chave única usada tanto para cifrar quanto para decifrar, e que por isso precisa ser protegida e compartilhada com segurança. É muito mais rápida que a assimétrica e é a escolha para cifrar grandes volumes de dados. O padrão do KMS e do S3 usa AES-256 simétrico.

> [!example] Exemplo
> O EBS cifra o volume inteiro com uma data key simétrica AES-256, que é a mesma usada para decifrar.

Veja também: [[Chave Assimetrica]], [[Envelope Encryption]], [[Hash]]

## Onde aparece

- **Módulo 3:** [[03.07 - TLS HTTPS e Certificados|3.7]]
- **Módulo 8:** [[08 - Criptografia e Protecao de Dados|nota do módulo]], [[08.01 - Por que Criptografar e os Fundamentos|8.1]], [[08.02 - AWS KMS Chaves e Envelope Encryption|8.2]], [[08.04 - KMS Rotacao Material Importado Multi-Region e Exclusao|8.4]], [[08.05 - CloudHSM e Custom Key Stores|8.5]]
- **Módulo 18:** [[18 - Borda e DNS CloudFront Global Accelerator e Route 53|nota do módulo]]
