---
aliases:
  - "LF-TBAC"
  - "LF-Tags"
  - "controle por tags do Lake Formation"
tags:
  - glossario
  - seguranca
---
# LF-Tag

Uma LF-Tag é uma etiqueta do Lake Formation (por exemplo, sensibilidade igual a restrita) associada a bancos, tabelas e colunas, que permite conceder permissão por atributo em vez de recurso a recurso. Existe para reduzir o esforço de gerenciar acesso em centenas de tabelas: uma tabela nova que recebe a tag já fica coberta pelas concessões existentes.

> [!example] Exemplo
> Quem tem acesso à tag sensibilidade igual a pública enxerga automaticamente toda tabela nova com essa tag.

Veja também: [[Glue Data Catalog]], [[Lake Formation]]

## Onde aparece

- **Módulo 22:** [[22.08 - Lake Formation Governanca do Data Lake|22.8]]
