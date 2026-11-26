---
aliases:
  - "degradação controlada"
  - "degradação graciosa"
  - "graceful degradation"
tags:
  - glossario
  - conceito
---
# Graceful Degradation

A degradação graciosa reduz a funcionalidade em vez de derrubar o serviço quando uma dependência falha ou a carga excede a capacidade. Existe para transformar dependências duras em suaves: o sistema continua entregando o essencial, mesmo que de forma mais simples.

> [!example] Exemplo
> A loja exibe o catálogo sem as recomendações personalizadas quando o serviço de recomendação está fora.

Veja também: [[Circuit Breaker]], [[Desacoplamento]], [[Load Shedding]]

## Onde aparece

- **Módulo 20:** [[20.08 - Padroes de Resiliencia Imutabilidade Retry e Degradacao|20.8]]
