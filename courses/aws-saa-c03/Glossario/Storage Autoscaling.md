---
aliases:
  - "autoscaling de armazenamento"
  - "escala automática de armazenamento"
  - "storage autoscaling"
tags:
  - glossario
  - dados
---
# Storage Autoscaling

O storage autoscaling do RDS aumenta o armazenamento da instância automaticamente quando o espaço livre fica em 10% ou menos por pelo menos 5 minutos, até um limite máximo que você define. Ele evita que o banco pare de aceitar escrita por disco cheio. Só aumenta: o armazenamento alocado nunca é reduzido.

> [!example] Exemplo
> Um banco com 100 GiB e limite de 500 GiB cresce sozinho quando enche, sem janela de manutenção.

Veja também: [[IOPS]], [[RDS]], [[gp3]]

## Onde aparece

- **Módulo 13:** [[13 - Bancos Relacionais RDS e Aurora|nota do módulo]], [[13.02 - RDS Instancias Classes e Armazenamento|13.2]], [[13.03 - RDS Multi-AZ Instancia e Cluster|13.3]], [[13.04 - RDS Read Replicas e Escala de Leitura|13.4]], [[13.07 - Aurora Arquitetura Endpoints e Replicas|13.7]]
- **Módulo 23:** [[23.03 - Migracao de Bancos com o DMS|23.3]]
- **Módulo 25:** [[25.08 - Armazenamento em Bloco Arquivos e Backup Custo|25.8]]
