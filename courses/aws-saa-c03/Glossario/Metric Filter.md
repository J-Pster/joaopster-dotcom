---
aliases:
  - "filtro de métrica"
  - "metric filter"
tags:
  - glossario
  - conceito
---
# Metric Filter

Metric filter é uma regra do CloudWatch Logs que procura um padrão nos eventos de log e transforma as ocorrências em uma métrica. Existe para alarmar sobre texto, como a palavra ERROR, sem mudar a aplicação. Só conta eventos recebidos depois da criação do filtro.

> [!example] Exemplo
> Um filtro conta linhas com ERROR por minuto, e um alarme dispara se passarem de 10 em 5 minutos.

Veja também: [[CloudWatch Alarm]], [[CloudWatch Logs]], [[Metrica]]

## Onde aparece

- **Módulo 5:** [[05.08 - CloudTrail e a Trilha de Auditoria|5.8]]
- **Módulo 21:** [[21 - Observabilidade Automacao e Operacoes|nota do módulo]], [[21.02 - Alarmes do CloudWatch e Acoes Automaticas|21.2]], [[21.03 - CloudWatch Logs e o Agente|21.3]]
- **Módulo 26:** [[26.06 - Multiconta Governanca e Auditoria|26.6]]
