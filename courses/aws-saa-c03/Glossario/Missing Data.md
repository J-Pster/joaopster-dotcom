---
aliases:
  - "dados ausentes"
  - "missing data"
  - "treat missing data"
tags:
  - glossario
  - conceito
---
# Missing Data

Dados ausentes é a configuração que define como um alarme do CloudWatch trata períodos sem pontos: como violação, como não violação, ignorar (manter o estado) ou como ausente. Existe porque a falta de dados pode significar uma falha do emissor ou apenas ausência de eventos. A escolha muda o alarme de heartbeat, que deve tratar a ausência como violação.

> [!example] Exemplo
> Um alarme de heartbeat usa breaching para disparar quando a aplicação para de enviar a métrica.

Veja também: [[CloudWatch Alarm]], [[Metrica]]

## Onde aparece

- **Módulo 21:** [[21 - Observabilidade Automacao e Operacoes|nota do módulo]], [[21.02 - Alarmes do CloudWatch e Acoes Automaticas|21.2]]
