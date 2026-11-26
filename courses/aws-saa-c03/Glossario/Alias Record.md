---
aliases:
  - "alias"
  - "alias record"
  - "registro alias"
  - "registros alias"
tags:
  - glossario
  - servico
---
# Alias Record

Registro do Route 53 que aponta para recursos AWS (CloudFront, ELB, S3 website, API Gateway e outros) e funciona no zone apex, onde o CNAME é proibido. A resposta é A ou AAAA com os IPs atuais, e consultas a recursos AWS não são cobradas.

> [!example] Exemplo
> exemplo.com sem www aponta para o ALB por um alias do tipo A.

Veja também: [[CNAME]], [[Route 53]], [[Zone Apex]]

## Onde aparece

- **Módulo 3:** [[03 - Fundamentos de Redes para a Nuvem|nota do módulo]], [[03.06 - DNS e Resolucao de Nomes|3.6]]
- **Módulo 12:** [[12.02 - A Familia Elastic Load Balancing|12.2]]
- **Módulo 18:** [[18.07 - Route 53 Fundamentos Zonas Registros e Alias|18.7]], [[18.09 - Health Checks Failover e Application Recovery Controller|18.9]], [[18.10 - Padroes de Arquitetura e Decisao de Borda e DNS|18.10]]
- **Módulo 27:** [[27.04 - Simulado 1|27.4]], [[27.05 - Simulado 2|27.5]]
