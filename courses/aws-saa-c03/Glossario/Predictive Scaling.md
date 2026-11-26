---
aliases:
  - "Escala preditiva"
tags:
  - glossario
  - conceito
---
# Predictive Scaling

Política do EC2 Auto Scaling que usa aprendizado de máquina sobre o histórico de uma métrica, a partir de 24 horas de dados e com previsão das próximas 48 horas, para lançar capacidade antes do pico. Atende a padrões cíclicos e funciona junto com o target tracking, que absorve o inesperado.

> [!example] Exemplo
> O grupo aprende que há pico todo dia às 18h e já tem as instâncias prontas às 17h45, mesmo com boot de 10 minutos.

Veja também: [[EC2 Auto Scaling]], [[Scheduled Scaling]], [[Target Tracking]], [[Warm Pool]]

## Onde aparece

- **Módulo 2:** [[02.04 - Custos Sustentabilidade e Tensoes entre Pilares|2.4]]
- **Módulo 12:** [[12.07 - Politicas de Escala|12.7]]
