---
aliases:
  - "Backlog per Instance"
  - "Backlog por Instância"
  - "Fila por instância"
tags:
  - glossario
  - conceito
---
# Backlog por Instância

Métrica personalizada para escalar workers de uma fila SQS: o número de mensagens visíveis dividido pelo número de instâncias em serviço. Como é proporcional à capacidade, serve de alvo para o target tracking. O alvo vem da latência aceitável dividida pelo tempo médio de processamento de uma mensagem.

> [!example] Exemplo
> Cada mensagem leva 0,1 s e se aceita 10 s de espera: o alvo é 100 mensagens por instância, e o ASG adiciona workers quando a razão passa disso.

Veja também: [[Auto Scaling Group]], [[CloudWatch]], [[SQS]], [[Target Tracking]]

## Onde aparece

- **Módulo 12:** [[12 - Balanceamento de Carga e Auto Scaling|nota do módulo]], [[12.07 - Politicas de Escala|12.7]], [[12.10 - Application Auto Scaling e Arquiteturas Completas|12.10]]
- **Módulo 15:** [[15 - Desacoplamento Filas Eventos e Workflows|nota do módulo]], [[15.02 - SQS Filas Standard e o Ciclo de Vida da Mensagem|15.2]], [[15.03 - SQS FIFO e Padroes de Consumo|15.3]]
- **Módulo 21:** [[21.02 - Alarmes do CloudWatch e Acoes Automaticas|21.2]]
- **Módulo 27:** [[27.05 - Simulado 2|27.5]]
