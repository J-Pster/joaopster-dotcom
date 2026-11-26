---
aliases:
  - "Infrequent Access do S3"
  - "Standard IA"
  - "Standard-IA"
tags:
  - glossario
  - servico
---
# S3 Standard-IA

Classe do S3 para dados acessados raramente, mas que precisam de leitura imediata e de durabilidade em várias AZs. Armazena por menos que o Standard, porém cobra uma taxa por GB recuperado, tem duração mínima de 30 dias e cobra no mínimo 128 KB por objeto. Por isso só compensa para dados realmente frios e de tamanho razoável.

> [!example] Exemplo
> Backups mensais de 50 GB lidos uma vez por ano ficam no Standard-IA e gastam cerca de metade do custo de armazenamento do Standard.

Veja também: [[Lifecycle Policy]], [[S3]], [[S3 Intelligent-Tiering]]

## Onde aparece

- **Módulo 11:** [[11.01 - O Modelo do S3 Buckets Objetos e Durabilidade|11.1]], [[11.02 - Classes de Armazenamento do S3 e Glacier|11.2]], [[11.03 - Ciclo de Vida e Custo no S3|11.3]]
- **Módulo 14:** [[14 - DynamoDB Cache e Bancos de Proposito Especifico|nota do módulo]], [[14.03 - DynamoDB Capacidade RCU WCU e Custo|14.3]]
- **Módulo 20:** [[20.02 - Multi-AZ e Multi-Region Servico por Servico|20.2]]
- **Módulo 23:** [[23.08 - Storage Gateway e o Armazenamento Hibrido|23.8]]
- **Módulo 25:** [[25 - Otimizacao de Custos|nota do módulo]], [[25.07 - S3 Classes Ciclo de Vida e Custo de Objetos|25.7]], [[25.08 - Armazenamento em Bloco Arquivos e Backup Custo|25.8]], [[25.09 - Bancos de Dados Custo e Escolha da Ferramenta|25.9]], [[25.11 - Decisao de Custo na Prova e Revisao|25.11]]
- **Módulo 26:** [[26.05 - Iteracao 4 Custo Otimizado|26.5]]
- **Módulo 27:** [[27.03 - Revisao Final Mapa Requisito Servico e Pares que Confundem|27.3]], [[27.05 - Simulado 2|27.5]]
