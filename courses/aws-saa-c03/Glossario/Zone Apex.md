---
aliases:
  - "apex"
  - "domínio raiz"
  - "topo da zona"
  - "zone apex"
tags:
  - glossario
  - rede
---
# Zone Apex

Nome sem prefixo de uma zona DNS, como exemplo.com (e não www.exemplo.com). Já tem SOA e NS, então o protocolo não permite CNAME ali; no Route 53 usa-se registro alias.

> [!example] Exemplo
> exemplo.com para um ALB exige alias, porque CNAME no apex é inválido.

Veja também: [[Alias Record]], [[CNAME]], [[Hosted Zone]]

## Onde aparece

- **Módulo 3:** [[03 - Fundamentos de Redes para a Nuvem|nota do módulo]], [[03.06 - DNS e Resolucao de Nomes|3.6]]
- **Módulo 18:** [[18.05 - Edge Compute Custo e Planos do CloudFront|18.5]], [[18.07 - Route 53 Fundamentos Zonas Registros e Alias|18.7]], [[18.10 - Padroes de Arquitetura e Decisao de Borda e DNS|18.10]]
- **Módulo 27:** [[27.05 - Simulado 2|27.5]]
