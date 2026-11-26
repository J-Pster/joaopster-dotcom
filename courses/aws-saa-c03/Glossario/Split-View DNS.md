---
aliases:
  - "DNS de visão dividida"
  - "split view"
  - "split-horizon DNS"
tags:
  - glossario
  - rede
---
# Split-View DNS

O split-view DNS usa uma zona pública e uma zona privada com o mesmo nome, para que um nome resolva a respostas diferentes dentro e fora da VPC. É útil para que o tráfego interno use endereços privados em vez de sair para a internet, e para mostrar conteúdo diferente por rede.

> [!example] Exemplo
> `app.exemplo.com` resolve a um IP público para quem está na internet e a um IP privado dentro da VPC.

Veja também: [[Hosted Zone]], [[Private Hosted Zone]], [[Route 53]]

## Onde aparece

- **Módulo 3:** [[03.06 - DNS e Resolucao de Nomes|3.6]]
- **Módulo 18:** [[18.07 - Route 53 Fundamentos Zonas Registros e Alias|18.7]]
