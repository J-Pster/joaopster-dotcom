---
aliases:
  - "cookie assinado do CloudFront"
  - "cookies assinados do CloudFront"
  - "signed cookies"
tags:
  - glossario
  - seguranca
---
# CloudFront Signed Cookie

O cookie assinado do CloudFront carrega a mesma assinatura da URL assinada, mas vai em cookies, permitindo acesso a vários arquivos sem alterar as URLs. É a escolha para vídeo com muitos segmentos ou áreas de membros. Se o pedido tiver URL assinada e cookie, a URL assinada tem precedência.

> [!example] Exemplo
> Uma plataforma de cursos entrega cookies assinados válidos por 4 horas para a pasta `/curso-42/*`.

Veja também: [[CloudFront]], [[CloudFront Signed URL]], [[Geo Restriction]]

## Onde aparece

- **Módulo 18:** [[18.04 - Seguranca do Viewer HTTPS Assinaturas e WAF|18.4]]
