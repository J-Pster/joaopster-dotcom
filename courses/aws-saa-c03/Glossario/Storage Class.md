---
aliases:
  - "S3 storage class"
  - "classe de armazenamento do S3"
  - "classes de armazenamento do S3"
tags:
  - glossario
  - dados
---
# Storage Class

Storage class é a categoria de armazenamento que define quanto custa guardar um objeto do S3, quanto custa lê-lo, quantas AZs o guardam e quanto tempo leva para acessá-lo. Todas têm a mesma durabilidade de onze noves; o que muda é disponibilidade, tempo mínimo de armazenamento, tamanho mínimo cobrável e taxa de recuperação. Escolher a classe certa é a principal alavanca de custo do S3.

> [!example] Exemplo
> Logs lidos todo dia ficam em Standard; depois de 90 dias vão para Glacier Flexible Retrieval por uma regra de ciclo de vida.

Veja também: [[Durabilidade]], [[Lifecycle Policy]], [[S3]], [[S3 Intelligent-Tiering]]

## Onde aparece

- **Módulo 11:** [[11.02 - Classes de Armazenamento do S3 e Glacier|11.2]]
- **Módulo 27:** [[27.04 - Simulado 1|27.4]]
