---
aliases:
  - "Afinidade de sessão"
  - "Session Affinity"
  - "Sessões fixas"
  - "Stickiness"
tags:
  - glossario
  - rede
---
# Sticky Sessions

Configuração do balanceador que envia as requisições de um mesmo cliente sempre ao mesmo alvo, em geral por cookie. Evita mexer na aplicação quando ela guarda sessão na memória, mas prende o usuário a uma instância, desequilibra a carga e perde a sessão se o alvo cair.

> [!example] Exemplo
> O ALB grava um cookie de 1 hora e manda o usuário sempre à mesma instância, até ela ser removida.

Veja também: [[Application Load Balancer]], [[ElastiCache]], [[Stateless]], [[Target Group]]

## Onde aparece

- **Módulo 2:** [[02.07 - Anatomia de uma Questao|2.7]], [[02.08 - Principios das Respostas Certas e Plano de Estudo|2.8]]
- **Módulo 12:** [[12 - Balanceamento de Carga e Auto Scaling|nota do módulo]], [[12.01 - Escalar Horizontalmente e Aplicacao Stateless|12.1]], [[12.03 - Application Load Balancer a Fundo|12.3]], [[12.04 - Network Load Balancer e Gateway Load Balancer|12.4]], [[12.05 - Target Groups Health Checks e Cross-Zone|12.5]]
- **Módulo 14:** [[14.07 - ElastiCache e MemoryDB|14.7]]
- **Módulo 20:** [[20 - Alta Disponibilidade e Recuperacao de Desastres|nota do módulo]], [[20.09 - Tornar Aplicacao Legada Resiliente sem Mudar o Codigo|20.9]]
- **Módulo 26:** [[26.09 - Mudancas de Requisito no Estilo da Prova|26.9]]
- **Módulo 27:** [[27.04 - Simulado 1|27.4]]
