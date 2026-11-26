---
aliases:
  - "Modo de partida lenta"
  - "Partida lenta"
tags:
  - glossario
  - rede
---
# Slow Start

Recurso do ALB que aumenta gradualmente o tráfego enviado a um alvo recém-registrado durante uma janela de 30 a 900 segundos, dando tempo para aquecer caches e processos. Fica desligado por padrão e vale para target groups HTTP e HTTPS.

> [!example] Exemplo
> Uma instância nova de um ASG recebe 10%, 30% e depois 100% da sua parcela de tráfego ao longo de 2 minutos, em vez de tudo de uma vez.

Veja também: [[Application Load Balancer]], [[Deregistration Delay]], [[Instance Warmup]], [[Target Group]]

## Onde aparece

- **Módulo 12:** [[12 - Balanceamento de Carga e Auto Scaling|nota do módulo]], [[12.05 - Target Groups Health Checks e Cross-Zone|12.5]]
- **Módulo 15:** [[15.06 - Step Functions Orquestracao de Workflows|15.6]]
