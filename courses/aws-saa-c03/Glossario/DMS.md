---
aliases:
  - "AWS DMS"
  - "AWS Database Migration Service"
  - "Database Migration Service"
tags:
  - glossario
  - servico
---
# DMS

O AWS Database Migration Service move os dados de um banco de origem para um destino, com replicação contínua para reduzir o tempo de indisponibilidade na virada. Ele funciona em migrações do mesmo engine e entre engines diferentes, que também precisam do SCT para o schema. O Módulo 23 aprofunda migração.

> [!example] Exemplo
> Uma empresa replica o banco local para o RDS com o DMS e troca a aplicação no fim de semana.

Veja também: [[Aurora]], [[RDS]], [[Schema Conversion Tool]]

## Onde aparece

- **Módulo 2:** [[02.06 - Dominios Pesos e o Mapa para os Pilares|2.6]], [[02.07 - Anatomia de uma Questao|2.7]]
- **Módulo 13:** [[13.01 - Por Que Banco Gerenciado e Escolha do Engine|13.1]], [[13.02 - RDS Instancias Classes e Armazenamento|13.2]], [[13.09 - Padroes de Arquitetura Escolha e Custo|13.9]]
- **Módulo 14:** [[14.08 - Bancos de Proposito Especifico|14.8]]
- **Módulo 22:** [[22.01 - Por Que um Pipeline de Dados e o Mapa de Servicos|22.1]], [[22.08 - Lake Formation Governanca do Data Lake|22.8]], [[22.09 - Amazon Redshift Data Warehouse na AWS|22.9]]
- **Módulo 23:** [[23 - Migracao e Transferencia de Dados|nota do módulo]], [[23.01 - Por que e Como Migrar os 7 Rs e as Fases|23.1]], [[23.02 - Rehost com MGN e Relocate com VMware|23.2]], [[23.03 - Migracao de Bancos com o DMS|23.3]], [[23.04 - Conversao de Esquemas e Escolha do Caminho para Bancos|23.4]], [[23.05 - DataSync e a Transferencia Online de Arquivos|23.5]], [[23.06 - Transfer Family Transfer Acceleration e Direct Connect na Migracao|23.6]], [[23.07 - Transferencia Offline e a Conta da Rede|23.7]], [[23.08 - Storage Gateway e o Armazenamento Hibrido|23.8]], [[23.10 - Arvore de Decisao do Metodo de Migracao|23.10]]
- **Módulo 25:** [[25.05 - Computacao Modelos de Compra e a Decisao|25.5]], [[25.09 - Bancos de Dados Custo e Escolha da Ferramenta|25.9]]
- **Módulo 26:** [[26 - Projeto Pratico - Arquitetura de Referencia|nota do módulo]], [[26.09 - Mudancas de Requisito no Estilo da Prova|26.9]]
- **Módulo 27:** [[27.03 - Revisao Final Mapa Requisito Servico e Pares que Confundem|27.3]], [[27.04 - Simulado 1|27.4]], [[27.05 - Simulado 2|27.5]]
