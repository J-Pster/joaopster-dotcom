---
aliases:
  - "OAI"
  - "Origin Access Identity (OAI)"
tags:
  - glossario
  - seguranca
---
# Origin Access Identity

Origin Access Identity (OAI) é o mecanismo antigo que permitia ao CloudFront ler um bucket S3 privado, usando uma identidade especial citada na bucket policy. A AWS o considera legado: a Origin Access Control (OAC) o substitui, suporta SSE-KMS e usa o principal de serviço do CloudFront com condição na distribuição.

> [!example] Exemplo
> Um site antigo usa OAI para ler o bucket; ao migrar para SSE-KMS, a equipe troca a OAI por OAC.

Veja também: [[Bucket Policy]], [[CloudFront]], [[Origin Access Control]]

## Onde aparece

- **Módulo 2:** [[02.07 - Anatomia de uma Questao|2.7]]
- **Módulo 11:** [[11 - Amazon S3 a Fundo|nota do módulo]], [[11.05 - Criptografia Versionamento e Retencao no S3|11.5]], [[11.08 - Eventos Site Estatico e Gestao em Escala no S3|11.8]]
- **Módulo 18:** [[18 - Borda e DNS CloudFront Global Accelerator e Route 53|nota do módulo]], [[18.03 - Origens OAC Failover e Origin Shield|18.3]], [[18.04 - Seguranca do Viewer HTTPS Assinaturas e WAF|18.4]]
- **Módulo 27:** [[27.02 - Tecnica de Resolucao Tempo e Eliminacao|27.2]]
