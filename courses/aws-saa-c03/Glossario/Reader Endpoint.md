---
aliases:
  - "endpoint de leitores"
  - "endpoint de leitura"
  - "reader endpoint"
tags:
  - glossario
  - rede
---
# Reader Endpoint

O reader endpoint de um Aurora distribui as conexões de leitura entre as Aurora Replicas, oferecendo um único nome para leitura escalável. Ele existe no Aurora e no Multi-AZ DB cluster, mas não nas read replicas de instâncias RDS, que têm um endpoint cada. O balanceamento acontece em nível de conexão.

> [!example] Exemplo
> Os relatórios da aplicação usam o reader endpoint, e o Aurora espalha as conexões entre as réplicas.

Veja também: [[Aurora Replica]], [[Cluster Endpoint]], [[Custom Endpoint]]

## Onde aparece

- **Módulo 13:** [[13 - Bancos Relacionais RDS e Aurora|nota do módulo]], [[13.03 - RDS Multi-AZ Instancia e Cluster|13.3]], [[13.04 - RDS Read Replicas e Escala de Leitura|13.4]], [[13.07 - Aurora Arquitetura Endpoints e Replicas|13.7]], [[13.09 - Padroes de Arquitetura Escolha e Custo|13.9]]
- **Módulo 14:** [[14.08 - Bancos de Proposito Especifico|14.8]]
- **Módulo 20:** [[20.02 - Multi-AZ e Multi-Region Servico por Servico|20.2]]
- **Módulo 27:** [[27.05 - Simulado 2|27.5]]
