---
aliases:
  - "landing zone"
  - "landing zones"
  - "zona de pouso"
tags:
  - glossario
  - conceito
---
# Landing Zone

Landing zone é um ambiente multiconta bem projetado, com estrutura de contas e OUs, rede, identidade, logging e guardrails de segurança já configurados, onde as workloads novas começam. Existe para que cada time não reinvente segurança e governança do zero. No AWS Control Tower, a landing zone é criada e mantida pelo serviço, incluindo contas dedicadas a logs e auditoria, e é a resposta quando a prova pede configurar um ambiente multiconta com o mínimo de esforço.

> [!example] Exemplo
> A landing zone inclui uma conta Log Archive que guarda os logs do CloudTrail e do Config de todas as contas.

Veja também: [[Account Factory]], [[CloudTrail]], [[Config]], [[Conta Log Archive]], [[Control Tower]], [[SCP]]

## Onde aparece

- **Módulo 2:** [[02.01 - Por que um Framework e Como Revisar uma Arquitetura|2.1]], [[02.08 - Principios das Respostas Certas e Plano de Estudo|2.8]]
- **Módulo 5:** [[05.04 - Control Tower e Landing Zone|5.4]], [[05.08 - CloudTrail e a Trilha de Auditoria|5.8]]
- **Módulo 23:** [[23.01 - Por que e Como Migrar os 7 Rs e as Fases|23.1]]
- **Módulo 25:** [[25.01 - Como a AWS Cobra e o Pilar de Custos|25.1]]
- **Módulo 26:** [[26.06 - Multiconta Governanca e Auditoria|26.6]]
- **Módulo 27:** [[27.03 - Revisao Final Mapa Requisito Servico e Pares que Confundem|27.3]], [[27.04 - Simulado 1|27.4]]
