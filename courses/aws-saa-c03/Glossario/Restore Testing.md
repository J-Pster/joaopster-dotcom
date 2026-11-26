---
aliases:
  - "restore testing"
  - "teste de restauração"
tags:
  - glossario
  - conceito
---
# Restore Testing

O restore testing do AWS Backup agenda restaurações automáticas de amostras de recursos, valida o resultado e descarta a cópia, gerando evidência de que os backups funcionam e de quanto tempo a restauração leva. Existe porque um backup que nunca foi restaurado em teste é apenas esperança, e o RTO real só aparece medido.

> [!example] Exemplo
> Todo mês, uma amostra de 10% dos volumes é restaurada e validada, e o tempo medido alimenta o relatório de RTO.

Veja também: [[Backup]], [[Game Day]], [[RTO]], [[Recovery Point]]

## Onde aparece

- **Módulo 20:** [[20 - Alta Disponibilidade e Recuperacao de Desastres|nota do módulo]], [[20.05 - AWS Backup Snapshots e Cofres Imutaveis|20.5]], [[20.07 - Failover de Trafego e Application Recovery Controller|20.7]], [[20.10 - Metricas de Negocio SLO e Teste de Recuperacao|20.10]]
- **Módulo 26:** [[26.07 - Plano de DR e Estimativa de Custo|26.7]]
