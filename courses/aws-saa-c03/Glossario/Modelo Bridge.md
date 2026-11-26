---
aliases:
  - "bridge model"
  - "modelo híbrido de tenancy"
  - "modelo ponte"
tags:
  - glossario
  - conceito
---
# Modelo Bridge

Estratégia de isolamento de tenants que mistura os dois extremos: parte da pilha é compartilhada (pool), como a camada de aplicação, e parte é dedicada (silo), como o banco ou a conta de clientes grandes. Existe porque o pool puro é barato mas arriscado e o silo puro é seguro mas caro; o bridge deixa decidir camada a camada, e por tipo de cliente, onde o isolamento vale o custo.

> [!example] Exemplo
> O PropDesk compartilha a API em Fargate entre todos os condomínios, mas os clientes enterprise regulados recebem um banco próprio, e os europeus uma pilha completa em outra Região.

Veja também: [[Multi-Tenant]], [[Isolamento de Tenant]], [[Raio de Impacto]]

## Onde aparece

- **Módulo 26:** [[26 - Projeto Pratico - Arquitetura de Referencia|nota do módulo]], [[26.01 - O Projeto PropDesk e os Requisitos|26.1]], [[26.09 - Mudancas de Requisito no Estilo da Prova|26.9]]
