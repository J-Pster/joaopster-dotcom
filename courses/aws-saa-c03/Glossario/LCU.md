---
aliases:
  - "Load Balancer Capacity Unit"
  - "unidade de capacidade do balanceador"
tags:
  - glossario
  - conceito
---
# LCU

Load Balancer Capacity Unit: unidade em que o Application Load Balancer mede o uso (conexões novas, conexões ativas, bytes processados e avaliações de regras) e em que cobra, além da hora. A reserva de capacidade do ALB (LCU reservation) permite garantir um mínimo de LCUs antes de um pico conhecido; o mínimo documentado é 100 LCU. É um recurso recente, tratado como contexto e provavelmente fora do exam guide.

> [!example] Exemplo
> Antes de um e-mail para 20.000 usuários, a equipe poderia reservar 100 LCU no ALB para que ele não dependa da rampa de escala automática.

Veja também: [[Application Load Balancer]], [[Elastic Load Balancing]], [[Network Load Balancer]]

## Onde aparece

- **Módulo 12:** [[12.02 - A Familia Elastic Load Balancing|12.2]]
- **Módulo 16:** [[16.06 - API Gateway Tipos Endpoints e Integracoes|16.6]], [[16.08 - Padroes Serverless e Ferramentas de Front-end|16.8]]
- **Módulo 25:** [[25.01 - Como a AWS Cobra e o Pilar de Custos|25.1]], [[25.06 - Computacao Rightsizing Graviton e Servicos Gerenciados|25.6]]
- **Módulo 26:** [[26.09 - Mudancas de Requisito no Estilo da Prova|26.9]]
