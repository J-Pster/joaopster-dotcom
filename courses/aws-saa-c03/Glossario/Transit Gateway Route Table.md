---
aliases:
  - "route table do TGW"
  - "route table do Transit Gateway"
  - "tabela de rotas do TGW"
tags:
  - glossario
  - rede
---
# Transit Gateway Route Table

A route table do Transit Gateway decide para onde vai o tráfego que entra por cada attachment. Cada attachment é associado a uma route table (association) e pode anunciar suas rotas em uma ou mais (propagation). Separar attachments em route tables diferentes é o que isola ambientes, por exemplo produção de desenvolvimento, mesmo estando no mesmo hub.

> [!example] Exemplo
> A VPC de produção é associada à tabela prod, que só propaga a VPC de serviços compartilhados, e por isso não enxerga a VPC de desenvolvimento.

Veja também: [[Roteamento Transitivo]], [[Route Table]], [[Transit Gateway]], [[Transit Gateway Attachment]]

## Onde aparece

- **Módulo 7:** [[07.03 - Transit Gateway|7.3]]
