---
aliases:
  - "URL assinada do CloudFront"
  - "URLs assinadas do CloudFront"
  - "signed URL"
  - "signed URLs"
tags:
  - glossario
  - seguranca
---
# CloudFront Signed URL

A URL assinada do CloudFront é um endereço que carrega uma assinatura e uma política (validade e, opcionalmente, faixa de IP), gerada pela sua aplicação com uma chave privada. Serve para liberar um arquivo específico apenas a quem tem direito, passando pela borda e pelo cache. Não é a mesma coisa que a URL pré-assinada do S3, que acessa o bucket diretamente.

> [!example] Exemplo
> Uma loja gera uma URL assinada de 10 minutos para o download do PDF comprado pelo cliente.

Veja também: [[CloudFront]], [[CloudFront Signed Cookie]], [[Geo Restriction]]

## Onde aparece

- **Módulo 11:** [[11.04 - Controle de Acesso e Rede no S3|11.4]]
- **Módulo 18:** [[18.04 - Seguranca do Viewer HTTPS Assinaturas e WAF|18.4]]
