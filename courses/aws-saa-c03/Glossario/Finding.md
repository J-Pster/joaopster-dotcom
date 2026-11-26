---
aliases:
  - "achado de segurança"
  - "achados"
  - "findings"
tags:
  - glossario
  - seguranca
---
# Finding

Um finding é o registro de um problema ou de uma atividade suspeita que um serviço de segurança identificou, com severidade, recurso afetado, horário e detalhes. GuardDuty, Inspector, Macie e Security Hub produzem findings em formatos próprios ou padronizados, e todos podem ser enviados ao EventBridge. Existe como unidade comum para priorizar, investigar e automatizar a resposta.

> [!example] Exemplo
> O finding UnauthorizedAccess:EC2/SSHBruteForce do GuardDuty indica tentativas de força bruta contra a porta 22 de uma instância.

Veja também: [[Detective]], [[EventBridge]], [[GuardDuty]], [[Inspector]], [[Security Hub]]

## Onde aparece

- **Módulo 4:** [[04.08 - Guardrails e Menor Privilegio na Pratica|4.8]]
- **Módulo 8:** [[08.09 - Governanca de Dados Object Lock e Macie|8.9]]
- **Módulo 19:** [[19 - Seguranca de Aplicacoes e Deteccao de Ameacas|nota do módulo]], [[19.05 - GuardDuty e Deteccao de Ameacas|19.5]], [[19.06 - Inspector Detective e Security Hub|19.6]], [[19.08 - Credenciais da Aplicacao e Decisao Final|19.8]]
- **Módulo 25:** [[25.04 - Ferramentas de Recomendacao Compute Optimizer e Trusted Advisor|25.4]]
- **Módulo 27:** [[27.04 - Simulado 1|27.4]], [[27.05 - Simulado 2|27.5]]
