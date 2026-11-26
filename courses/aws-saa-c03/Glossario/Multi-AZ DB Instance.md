---
aliases:
  - "Multi-AZ DB instance"
  - "Multi-AZ DB instances"
  - "implantação Multi-AZ DB instance"
tags:
  - glossario
  - servico
---
# Multi-AZ DB Instance

O Multi-AZ DB instance é a implantação clássica de alta disponibilidade do RDS: uma instância primária e um standby síncrono em outra zona de disponibilidade. O standby não atende leitura, e serve só para assumir o lugar da primária quando ela falha. Funciona com todos os engines do RDS.

> [!example] Exemplo
> Uma loja com RDS for MySQL ativa o Multi-AZ para sobreviver à falha de uma zona sem perder transações confirmadas.

Veja também: [[Failover]], [[Multi-AZ]], [[Multi-AZ DB Cluster]], [[Replicacao Sincrona]]

## Onde aparece

- **Módulo 13:** [[13 - Bancos Relacionais RDS e Aurora|nota do módulo]], [[13.02 - RDS Instancias Classes e Armazenamento|13.2]], [[13.03 - RDS Multi-AZ Instancia e Cluster|13.3]], [[13.04 - RDS Read Replicas e Escala de Leitura|13.4]], [[13.06 - RDS Proxy e Gestao de Conexoes|13.6]], [[13.09 - Padroes de Arquitetura Escolha e Custo|13.9]]
- **Módulo 20:** [[20.01 - Disponibilidade em Noves e o Ponto Unico de Falha|20.1]], [[20.09 - Tornar Aplicacao Legada Resiliente sem Mudar o Codigo|20.9]]
