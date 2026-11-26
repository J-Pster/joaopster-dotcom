---
aliases:
  - "CA"
  - "autoridade certificadora"
  - "autoridades certificadoras"
  - "certificate authority"
tags:
  - glossario
  - seguranca
---
# Autoridade Certificadora

Entidade confiável que assina certificados. Os navegadores e sistemas trazem uma trust store com CAs raiz, que assinam CAs intermediárias, que assinam os certificados dos sites (cadeia de confiança).

> [!example] Exemplo
> A CA raiz assina a intermediária, que assina o certificado de api.exemplo.com.

Veja também: [[ACM]], [[Certificado Digital]], [[TLS]]

## Onde aparece

- **Módulo 3:** [[03.07 - TLS HTTPS e Certificados|3.7]]
- **Módulo 5:** [[05.07 - RAM e Compartilhamento entre Contas|5.7]]
- **Módulo 8:** [[08 - Criptografia e Protecao de Dados|nota do módulo]], [[08.05 - CloudHSM e Custom Key Stores|8.5]], [[08.07 - Criptografia em Transito ACM e Private CA|8.7]]
- **Módulo 18:** [[18.04 - Seguranca do Viewer HTTPS Assinaturas e WAF|18.4]]
