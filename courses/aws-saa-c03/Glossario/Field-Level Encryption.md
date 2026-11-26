---
aliases:
  - "FLE"
  - "criptografia de campo"
  - "criptografia em nível de campo"
tags:
  - glossario
  - seguranca
---
# Field-Level Encryption

A field-level encryption cifra campos específicos do corpo de um POST na borda do CloudFront, com uma chave pública que você cadastra. Só quem tem a chave privada, normalmente um serviço no fundo da arquitetura, consegue ler o valor. Ela protege dados como número de cartão dos componentes intermediários que terminam o TLS, o que o HTTPS sozinho não faz.

> [!example] Exemplo
> O formulário de pagamento envia o número do cartão cifrado na borda, e só o microsserviço de pagamentos o decifra.

Veja também: [[CloudFront]], [[TLS]], [[WAF]]

## Onde aparece

- **Módulo 18:** [[18.04 - Seguranca do Viewer HTTPS Assinaturas e WAF|18.4]], [[18.05 - Edge Compute Custo e Planos do CloudFront|18.5]]
