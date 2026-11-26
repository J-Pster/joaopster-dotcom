---
aliases:
  - "AZ IDs"
  - "ID da AZ"
tags:
  - glossario
  - rede
---
# AZ ID

Identificador único e consistente de uma Zona de Disponibilidade, como use1-az1, igual em todas as contas. Cada conta mapeia nomes como us-east-1a para locais físicos diferentes, então o AZ ID é o que se usa para coordenar AZs entre contas, por exemplo ao compartilhar subnets.

> [!example] Exemplo
> A subnet use1-az2 compartilhada aparece na AZ use1-az2 da outra conta, qualquer que seja o nome.

Veja também: [[Regiao AWS]], [[Zona de Disponibilidade]]

## Onde aparece

- **Módulo 1:** [[01 - Nuvem e Infraestrutura Global AWS|nota do módulo]], [[01.02 - Regions e Availability Zones|1.2]]
- **Módulo 5:** [[05.07 - RAM e Compartilhamento entre Contas|5.7]]
- **Módulo 7:** [[07.02 - VPC Peering|7.2]], [[07.08 - Custo de Transferencia e Escolha da Conexao|7.8]]
- **Módulo 18:** [[18.08 - Route 53 Politicas de Roteamento|18.8]]
- **Módulo 25:** [[25.03 - Atribuicao de Custos Tags Cobranca Consolidada e Data Exports|25.3]]
