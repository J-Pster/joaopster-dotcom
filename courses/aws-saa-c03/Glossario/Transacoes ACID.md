---
aliases:
  - "ACID"
  - "Transações ACID"
  - "transações ACID"
tags:
  - glossario
  - dados
---
# Transações ACID

ACID descreve gravações que são atômicas (aplicadas por inteiro ou nada), consistentes, isoladas entre si e duráveis. Existe para que leitores nunca vejam um estado pela metade. Formatos como o Iceberg trazem isso para tabelas sobre arquivos no S3.

> [!example] Exemplo
> Uma carga que insere 1 milhão de linhas falha no meio: com ACID, nenhuma linha aparece para quem consulta.

Veja também: [[Apache Iceberg]]

## Onde aparece

- **Módulo 13:** [[13.01 - Por Que Banco Gerenciado e Escolha do Engine|13.1]], [[13.09 - Padroes de Arquitetura Escolha e Custo|13.9]]
- **Módulo 14:** [[14 - DynamoDB Cache e Bancos de Proposito Especifico|nota do módulo]], [[14.01 - Por que NoSQL e Escolha pelo Padrao de Acesso|14.1]], [[14.02 - DynamoDB Modelo de Dados Chaves e Particoes|14.2]], [[14.05 - DynamoDB Streams TTL Backup e Global Tables|14.5]], [[14.08 - Bancos de Proposito Especifico|14.8]], [[14.09 - Decisao Qual Banco para Qual Requisito|14.9]]
- **Módulo 22:** [[22.05 - Data Lake no S3 Formatos e Particionamento|22.5]]
