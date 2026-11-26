---
aliases:
  - "esquema na leitura"
  - "schema on read"
tags:
  - glossario
  - conceito
---
# Schema-on-Read

Schema-on-read é a abordagem em que o esquema (colunas e tipos) é aplicado só no momento da leitura, não da gravação. Os arquivos são guardados como chegaram, e cada consulta ou tabela externa descreve como interpretá-los. É o que permite a um data lake receber qualquer dado sem planejamento prévio, em contraste com o schema-on-write de um banco tradicional.

> [!example] Exemplo
> O Athena lê um CSV no S3 e o interpreta com as colunas definidas na tabela, sem que o arquivo tenha sido validado ao ser gravado.

Veja também: [[Athena]], [[Data Lake]], [[Glue Data Catalog]]

## Onde aparece

- **Módulo 22:** [[22.01 - Por Que um Pipeline de Dados e o Mapa de Servicos|22.1]], [[22.05 - Data Lake no S3 Formatos e Particionamento|22.5]]
