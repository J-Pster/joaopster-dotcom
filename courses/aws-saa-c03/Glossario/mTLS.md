---
aliases:
  - "TLS mútuo"
  - "autenticação mútua"
  - "mutual TLS"
tags:
  - glossario
  - seguranca
---
# mTLS

O mTLS (TLS mútuo) é a variante do TLS em que cliente e servidor apresentam certificado e se autenticam mutuamente, em vez de só o servidor provar quem é. É usado em APIs entre empresas, entre microsserviços e em dispositivos IoT, e exige uma autoridade certificadora em que os dois lados confiem, muitas vezes uma CA privada. ALB e NLB suportam mTLS com um trust store de CAs.

> [!example] Exemplo
> Parceiros chamam a API B2B apenas com um certificado de cliente emitido pela CA privada da empresa.

Veja também: [[ACM]], [[Autoridade Certificadora]], [[Certificado Digital]], [[Private CA]], [[TLS]]

## Onde aparece

- **Módulo 3:** [[03.07 - TLS HTTPS e Certificados|3.7]]
- **Módulo 8:** [[08.07 - Criptografia em Transito ACM e Private CA|8.7]]
- **Módulo 12:** [[12.03 - Application Load Balancer a Fundo|12.3]], [[12.04 - Network Load Balancer e Gateway Load Balancer|12.4]]
- **Módulo 16:** [[16.06 - API Gateway Tipos Endpoints e Integracoes|16.6]], [[16.07 - API Gateway Seguranca Throttling Cache e CORS|16.7]]
- **Módulo 22:** [[22.12 - Seguranca da Ingestao e Decisao Final|22.12]]
