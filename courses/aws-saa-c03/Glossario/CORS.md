---
aliases:
  - "Cross-Origin Resource Sharing"
  - "configuração CORS"
tags:
  - glossario
  - rede
---
# CORS

CORS é o mecanismo dos navegadores que bloqueia uma página de uma origem de buscar recursos de outra origem, a menos que o servidor responda com cabeçalhos que permitam. No S3, a configuração CORS do bucket lista as origens, os métodos e os cabeçalhos permitidos. O sintoma típico é um erro só no navegador, enquanto o curl funciona.

> [!example] Exemplo
> Uma aplicação em app.exemplo.com carrega imagens de um bucket e precisa da origem permitida na configuração CORS.

Veja também: [[CloudFront]], [[S3]]

## Onde aparece

- **Módulo 11:** [[11.08 - Eventos Site Estatico e Gestao em Escala no S3|11.8]]
- **Módulo 16:** [[16 - Serverless Lambda e API Gateway|nota do módulo]], [[16.04 - Lambda em VPC RDS Proxy e Function URLs|16.4]], [[16.06 - API Gateway Tipos Endpoints e Integracoes|16.6]], [[16.07 - API Gateway Seguranca Throttling Cache e CORS|16.7]], [[16.08 - Padroes Serverless e Ferramentas de Front-end|16.8]]
