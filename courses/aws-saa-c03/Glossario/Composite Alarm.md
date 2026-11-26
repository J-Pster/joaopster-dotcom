---
aliases:
  - "alarme composto"
  - "composite alarm"
tags:
  - glossario
  - conceito
---
# Composite Alarm

Alarme composto é um alarme cujo estado é calculado por uma expressão lógica (AND, OR, NOT) sobre outros alarmes. Existe para reduzir ruído: em vez de notificar cada alarme individual, você notifica só quando uma combinação indica problema real. Suas ações são mais limitadas que as de um alarme simples, e ele não observa métricas diretamente.

> [!example] Exemplo
> O alarme composto só dispara se a CPU estiver alta E a latência estiver alta, evitando páginas por causa de um sinal isolado.

Veja também: [[CloudWatch Alarm]], [[SNS]]

## Onde aparece

- **Módulo 20:** [[20 - Alta Disponibilidade e Recuperacao de Desastres|nota do módulo]], [[20.10 - Metricas de Negocio SLO e Teste de Recuperacao|20.10]]
- **Módulo 21:** [[21.02 - Alarmes do CloudWatch e Acoes Automaticas|21.2]]
