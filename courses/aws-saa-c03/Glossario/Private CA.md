---
aliases:
  - "AWS Private CA"
  - "CA privada"
  - "autoridade certificadora privada"
tags:
  - glossario
  - seguranca
---
# Private CA

Serviço da AWS que cria hierarquias de autoridades certificadoras privadas, com uma CA raiz e subordinadas, e emite certificados para uso interno. Serve para TLS entre serviços, autenticação de dispositivos, assinatura de código e mTLS. Os certificados não são publicamente confiáveis e a CA é um recurso regional.

> [!example] Exemplo
> Uma plataforma emite certificados de uma CA privada para cada microsserviço, exigindo TLS mútuo na comunicação interna.

Veja também: [[ACM]], [[TLS]], [[mTLS]]

## Onde aparece

- **Módulo 3:** [[03.07 - TLS HTTPS e Certificados|3.7]]
- **Módulo 5:** [[05.07 - RAM e Compartilhamento entre Contas|5.7]]
- **Módulo 8:** [[08.05 - CloudHSM e Custom Key Stores|8.5]], [[08.07 - Criptografia em Transito ACM e Private CA|8.7]]
