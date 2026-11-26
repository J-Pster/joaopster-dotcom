---
aliases:
  - "RG"
  - "node type RA3"
  - "nós RA3"
tags:
  - glossario
  - servico
---
# RA3

RA3 é um tipo de nó do Redshift que separa computação de armazenamento: você escolhe quantos nós conforme o desempenho e paga o armazenamento gerenciado pelo que usar, com SSDs locais para dados quentes e S3 para o restante. A documentação atual recomenda RA3 ou o mais novo RG, baseado em Graviton (verificado em novembro de 2026).

> [!example] Exemplo
> Um warehouse que cresce em dados mas não em consultas aumenta o armazenamento sem comprar nós de computação a mais.

Veja também: [[Redshift]], [[Redshift Serverless]]

## Onde aparece

- **Módulo 20:** [[20.02 - Multi-AZ e Multi-Region Servico por Servico|20.2]]
- **Módulo 22:** [[22 - Dados Analytics e Ingestao|nota do módulo]], [[22.09 - Amazon Redshift Data Warehouse na AWS|22.9]]
- **Módulo 25:** [[25.09 - Bancos de Dados Custo e Escolha da Ferramenta|25.9]]
