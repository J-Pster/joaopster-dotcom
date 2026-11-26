---
aliases:
  - "distribuição do CloudFront"
  - "distribuições do CloudFront"
tags:
  - glossario
  - servico
---
# CloudFront Distribution

A distribuição é o recurso do CloudFront que reúne as configurações de entrega: domínios, origens, cache behaviors, certificado, WAF e política de preços. Cada distribuição ganha um nome `d1234abcd.cloudfront.net` e pode receber seus próprios nomes alternativos. Ela existe para que você descreva uma vez como o conteúdo é buscado, guardado e protegido, e o CloudFront replique essa configuração para todos os pontos de presença.

> [!example] Exemplo
> Um site cria uma distribuição com duas origens, o bucket S3 de arquivos estáticos e o ALB da API, e aponta o domínio exemplo.com para ela.

Veja também: [[Cache Behavior]], [[CloudFront]], [[Origin Group]], [[Price Class]]

## Onde aparece

- **Módulo 3:** [[03.06 - DNS e Resolucao de Nomes|3.6]]
- **Módulo 11:** [[11.04 - Controle de Acesso e Rede no S3|11.4]]
- **Módulo 18:** [[18 - Borda e DNS CloudFront Global Accelerator e Route 53|nota do módulo]], [[18.01 - Por que a Borda e como o CloudFront Entrega Conteudo|18.1]], [[18.03 - Origens OAC Failover e Origin Shield|18.3]], [[18.04 - Seguranca do Viewer HTTPS Assinaturas e WAF|18.4]], [[18.07 - Route 53 Fundamentos Zonas Registros e Alias|18.7]], [[18.09 - Health Checks Failover e Application Recovery Controller|18.9]], [[18.10 - Padroes de Arquitetura e Decisao de Borda e DNS|18.10]]
- **Módulo 19:** [[19.02 - Shield DDoS Standard e Advanced|19.2]]
- **Módulo 26:** [[26.02 - Iteracao 1 Seguranca em Camadas|26.2]], [[26.04 - Iteracao 3 Desempenho e Elasticidade|26.4]], [[26.09 - Mudancas de Requisito no Estilo da Prova|26.9]]
