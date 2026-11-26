---
aliases:
  - "GameDay"
  - "dia de simulação"
  - "ensaio de desastre"
  - "game day"
  - "game days"
tags:
  - glossario
  - pratica
---
# Game Day

O game day é um ensaio planejado em que o time simula um desastre ou uma falha, como a perda de uma AZ ou a corrupção de dados, para medir o RTO e o RPO reais, validar runbooks e alarmes e achar falhas antes do evento real. Parte de uma hipótese e de um critério de parada, e pode usar o AWS Fault Injection Service para injetar as falhas. Aplica o princípio do Well-Architected de testar os procedimentos de recuperação.

> [!example] Exemplo
> O time simula a perda da AZ-a em um ambiente de testes e mede em quantos minutos o serviço volta a responder.

Veja também: [[Estabilidade Estatica]], [[Failback]], [[RPO]], [[RTO]], [[Resilience Hub]], [[Restore Testing]]

## Onde aparece

- **Módulo 2:** [[02.01 - Por que um Framework e Como Revisar uma Arquitetura|2.1]], [[02.02 - Excelencia Operacional e Seguranca|2.2]], [[02.03 - Confiabilidade e Eficiencia de Desempenho|2.3]]
- **Módulo 20:** [[20 - Alta Disponibilidade e Recuperacao de Desastres|nota do módulo]], [[20.10 - Metricas de Negocio SLO e Teste de Recuperacao|20.10]]
- **Módulo 26:** [[26.07 - Plano de DR e Estimativa de Custo|26.7]], [[26.08 - Revisao Well-Architected e Trade-offs|26.8]]
