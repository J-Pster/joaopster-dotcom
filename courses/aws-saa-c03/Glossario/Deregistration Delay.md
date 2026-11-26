---
aliases:
  - "Connection Draining"
  - "Drenagem de conexões"
  - "Tempo de drenagem"
tags:
  - glossario
  - rede
---
# Deregistration Delay

Tempo que o balanceador espera, depois de um alvo ser removido, para que as requisições em andamento terminem. Durante a espera o alvo fica em draining e não recebe conexões novas. O padrão é 300 segundos, configurável de 0 a 3600.

> [!example] Exemplo
> Ao reduzir o grupo, a instância removida continua atendendo os downloads já iniciados por até 300 segundos antes de ser encerrada.

Veja também: [[Auto Scaling Group]], [[Health Check]], [[Slow Start]], [[Target Group]]

## Onde aparece

- **Módulo 12:** [[12 - Balanceamento de Carga e Auto Scaling|nota do módulo]], [[12.05 - Target Groups Health Checks e Cross-Zone|12.5]], [[12.06 - Auto Scaling Groups e Launch Templates|12.6]]
