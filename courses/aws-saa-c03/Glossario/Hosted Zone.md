---
aliases:
  - "hosted zone"
  - "hosted zones"
  - "public hosted zone"
  - "zona hospedada"
tags:
  - glossario
  - servico
---
# Hosted Zone

Contêiner de registros DNS de um domínio no Route 53. A zona pública responde à internet; a privada responde só às VPCs associadas. Quando o domínio foi comprado em outro registrador, os NS dele precisam apontar para a hosted zone.

> [!example] Exemplo
> A zona privada interno.exemplo resolve db.interno.exemplo para um IP privado apenas dentro da VPC.

Veja também: [[Alias Record]], [[DNS]], [[Route 53]]

## Onde aparece

- **Módulo 1:** [[01.03 - Borda e Extensoes da Infraestrutura|1.3]]
- **Módulo 3:** [[03.06 - DNS e Resolucao de Nomes|3.6]], [[03.07 - TLS HTTPS e Certificados|3.7]]
- **Módulo 5:** [[05.07 - RAM e Compartilhamento entre Contas|5.7]]
- **Módulo 7:** [[07.07 - DNS Hibrido com Route 53 Resolver|7.7]]
- **Módulo 18:** [[18.07 - Route 53 Fundamentos Zonas Registros e Alias|18.7]]
- **Módulo 25:** [[25.10 - Rede e Transferencia de Dados|25.10]]
