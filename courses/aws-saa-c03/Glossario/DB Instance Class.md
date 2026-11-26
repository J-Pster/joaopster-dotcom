---
aliases:
  - "DB instance class"
  - "classe da instância"
  - "classe de instância"
  - "classes de instância"
tags:
  - glossario
  - servico
---
# DB Instance Class

A DB instance class define a CPU, a memória e a rede de uma instância do RDS, em famílias como m (uso geral), r e x (memória), compute optimized e burstable T. Ela também limita a largura de banda de disco que o banco consegue usar. Mais memória costuma reduzir leituras de disco e, portanto, as IOPS necessárias.

> [!example] Exemplo
> Um banco com muitas conexões e dados quentes grandes usa uma classe r em vez de comprar mais IOPS.

Veja também: [[Graviton]], [[IOPS]], [[RDS]]

## Onde aparece

- **Módulo 13:** [[13 - Bancos Relacionais RDS e Aurora|nota do módulo]], [[13.01 - Por Que Banco Gerenciado e Escolha do Engine|13.1]], [[13.02 - RDS Instancias Classes e Armazenamento|13.2]], [[13.03 - RDS Multi-AZ Instancia e Cluster|13.3]], [[13.06 - RDS Proxy e Gestao de Conexoes|13.6]]
- **Módulo 23:** [[23.03 - Migracao de Bancos com o DMS|23.3]]
- **Módulo 25:** [[25.06 - Computacao Rightsizing Graviton e Servicos Gerenciados|25.6]], [[25.11 - Decisao de Custo na Prova e Revisao|25.11]]
