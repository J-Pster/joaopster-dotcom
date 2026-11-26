---
aliases:
  - "CloudFront OAC"
  - "OAC"
tags:
  - glossario
  - seguranca
---
# Origin Access Control

Origin Access Control (OAC) é o mecanismo que autoriza o CloudFront a ler de uma origem privada, como um bucket S3, assinando as requisições, sem tornar o bucket público. Substitui a antiga Origin Access Identity e suporta objetos cifrados com SSE-KMS. A bucket policy autoriza o serviço cloudfront.amazonaws.com para uma distribuição específica.

> [!example] Exemplo
> Um site estático fica em um bucket privado, e só a distribuição do CloudFront consegue ler os arquivos, por HTTPS.

Veja também: [[Block Public Access]], [[Bucket Policy]], [[CloudFront]]

## Onde aparece

- **Módulo 2:** [[02.07 - Anatomia de uma Questao|2.7]]
- **Módulo 11:** [[11 - Amazon S3 a Fundo|nota do módulo]], [[11.01 - O Modelo do S3 Buckets Objetos e Durabilidade|11.1]], [[11.04 - Controle de Acesso e Rede no S3|11.4]], [[11.05 - Criptografia Versionamento e Retencao no S3|11.5]], [[11.08 - Eventos Site Estatico e Gestao em Escala no S3|11.8]]
- **Módulo 18:** [[18 - Borda e DNS CloudFront Global Accelerator e Route 53|nota do módulo]], [[18.03 - Origens OAC Failover e Origin Shield|18.3]], [[18.04 - Seguranca do Viewer HTTPS Assinaturas e WAF|18.4]], [[18.10 - Padroes de Arquitetura e Decisao de Borda e DNS|18.10]]
- **Módulo 19:** [[19.01 - Ameacas Externas e Defesa em Profundidade|19.1]]
- **Módulo 26:** [[26.02 - Iteracao 1 Seguranca em Camadas|26.2]]
- **Módulo 27:** [[27.02 - Tecnica de Resolucao Tempo e Eliminacao|27.2]]
