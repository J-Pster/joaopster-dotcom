---
aliases:
  - "grupo de chaves"
  - "key groups"
  - "trusted key group"
tags:
  - glossario
  - recurso
---
# Key Group

Um key group do CloudFront é um conjunto de chaves públicas que o CloudFront usa para verificar URLs e cookies assinados. Ele existe para que você gerencie as chaves de assinatura sem depender do usuário root, e a AWS o recomenda no lugar dos key pairs antigos da conta. A chave privada fica com a sua aplicação, que assina; o CloudFront só confere com a pública.

> [!example] Exemplo
> Uma plataforma de cursos cadastra uma chave pública em um key group e usa a chave privada no servidor para gerar cookies assinados.

Veja também: [[CloudFront]], [[CloudFront Signed Cookie]], [[CloudFront Signed URL]]

## Onde aparece

- **Módulo 18:** [[18.04 - Seguranca do Viewer HTTPS Assinaturas e WAF|18.4]]
