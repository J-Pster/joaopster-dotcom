---
aliases:
  - "registro CNAME"
  - "registros CNAME"
tags:
  - glossario
  - rede
---
# CNAME

Registro DNS que mapeia um nome para outro nome. Não pode ser criado no zone apex e não convive com outros registros no mesmo nome. Para apontar o apex a um recurso AWS, usa-se alias.

> [!example] Exemplo
> www.exemplo.com CNAME exemplo.com.

Veja também: [[Alias Record]], [[DNS]], [[Zone Apex]]

## Onde aparece

- **Módulo 3:** [[03 - Fundamentos de Redes para a Nuvem|nota do módulo]], [[03.06 - DNS e Resolucao de Nomes|3.6]]
- **Módulo 8:** [[08 - Criptografia e Protecao de Dados|nota do módulo]], [[08.07 - Criptografia em Transito ACM e Private CA|8.7]]
- **Módulo 18:** [[18 - Borda e DNS CloudFront Global Accelerator e Route 53|nota do módulo]], [[18.01 - Por que a Borda e como o CloudFront Entrega Conteudo|18.1]], [[18.04 - Seguranca do Viewer HTTPS Assinaturas e WAF|18.4]], [[18.05 - Edge Compute Custo e Planos do CloudFront|18.5]], [[18.07 - Route 53 Fundamentos Zonas Registros e Alias|18.7]], [[18.10 - Padroes de Arquitetura e Decisao de Borda e DNS|18.10]]
- **Módulo 20:** [[20 - Alta Disponibilidade e Recuperacao de Desastres|nota do módulo]], [[20.07 - Failover de Trafego e Application Recovery Controller|20.7]]
- **Módulo 27:** [[27.05 - Simulado 2|27.5]]
