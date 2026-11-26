---
aliases:
  - "CloudWatch agent"
  - "agente CloudWatch"
  - "agente do CloudWatch"
  - "unified CloudWatch agent"
tags:
  - glossario
  - servico
---
# CloudWatch Agent

O CloudWatch Agent é um software instalado em instâncias ou servidores que coleta métricas do sistema operacional (memória, disco, processos) e arquivos de log, e os envia ao CloudWatch. Existe porque o hypervisor da AWS não enxerga o que acontece dentro do sistema operacional. A configuração pode ficar no Parameter Store e ser distribuída pelo Systems Manager.

> [!example] Exemplo
> Para alarmar sobre uso de memória em instâncias EC2, você instala o agente, que publica a métrica mem_used_percent.

Veja também: [[CloudWatch]], [[CloudWatch Logs]], [[Parameter Store]], [[Systems Manager]]

## Onde aparece

- **Módulo 9:** [[09 - EC2 a Fundo|nota do módulo]], [[09.02 - Familias Graviton e Burstable|9.2]]
- **Módulo 12:** [[12.07 - Politicas de Escala|12.7]]
- **Módulo 21:** [[21 - Observabilidade Automacao e Operacoes|nota do módulo]], [[21.01 - Observabilidade e Metricas do CloudWatch|21.1]], [[21.03 - CloudWatch Logs e o Agente|21.3]], [[21.04 - X-Ray Prometheus Grafana e Monitoramento de Aplicacao|21.4]], [[21.07 - Systems Manager Gerencia Remota e Parametros|21.7]]
- **Módulo 25:** [[25.04 - Ferramentas de Recomendacao Compute Optimizer e Trusted Advisor|25.4]]
