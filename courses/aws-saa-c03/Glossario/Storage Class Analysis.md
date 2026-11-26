---
aliases:
  - "S3 Storage Class Analysis"
tags:
  - glossario
  - custo
---
# Storage Class Analysis

Recurso do S3 que observa o padrão de acesso aos objetos de um bucket e indica quando faz sentido mover do Standard para o Standard-IA. Precisa de um período de observação, normalmente de 30 dias ou mais, e alimenta decisões de ciclo de vida com dado em vez de palpite.

> [!example] Exemplo
> A análise de um bucket de logs mostra que 90% dos objetos com mais de 45 dias nunca são lidos, e a equipe cria a regra de transição aos 45 dias.

Veja também: [[Lifecycle Policy]], [[S3 Intelligent-Tiering]], [[S3 Storage Lens]]

## Onde aparece

- **Módulo 11:** [[11.03 - Ciclo de Vida e Custo no S3|11.3]]
- **Módulo 25:** [[25.07 - S3 Classes Ciclo de Vida e Custo de Objetos|25.7]]
