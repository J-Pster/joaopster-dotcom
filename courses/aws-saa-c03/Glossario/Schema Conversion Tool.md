---
aliases:
  - "AWS SCT"
  - "AWS Schema Conversion Tool"
  - "SCT"
tags:
  - glossario
  - servico
---
# Schema Conversion Tool

O AWS Schema Conversion Tool converte o schema e o código de um banco (tabelas, stored procedures, funções) de um engine para outro. Ele é necessário em migrações heterogêneas, como SQL Server para Aurora PostgreSQL, em que o schema não é compatível. Os dados são movidos pelo DMS.

> [!example] Exemplo
> O SCT converte as stored procedures T-SQL em PL/pgSQL, e o DMS copia os dados.

Veja também: [[Aurora]], [[DMS]], [[RDS]]

## Onde aparece

- **Módulo 13:** [[13.01 - Por Que Banco Gerenciado e Escolha do Engine|13.1]], [[13.09 - Padroes de Arquitetura Escolha e Custo|13.9]]
- **Módulo 23:** [[23 - Migracao e Transferencia de Dados|nota do módulo]], [[23.01 - Por que e Como Migrar os 7 Rs e as Fases|23.1]], [[23.03 - Migracao de Bancos com o DMS|23.3]], [[23.04 - Conversao de Esquemas e Escolha do Caminho para Bancos|23.4]], [[23.06 - Transfer Family Transfer Acceleration e Direct Connect na Migracao|23.6]], [[23.07 - Transferencia Offline e a Conta da Rede|23.7]], [[23.08 - Storage Gateway e o Armazenamento Hibrido|23.8]], [[23.10 - Arvore de Decisao do Metodo de Migracao|23.10]]
- **Módulo 26:** [[26.09 - Mudancas de Requisito no Estilo da Prova|26.9]]
- **Módulo 27:** [[27.04 - Simulado 1|27.4]], [[27.05 - Simulado 2|27.5]]
