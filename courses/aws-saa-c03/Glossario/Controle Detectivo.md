---
aliases:
  - "controle detectivo"
  - "controles detectivos"
  - "detective control"
tags:
  - glossario
  - seguranca
---
# Controle Detectivo

Controle que identifica depois da mudança que um recurso está fora do padrão, sem impedir a ação. No Control Tower, os controles detectivos são implementados com regras do AWS Config. Eles marcam o recurso como não conforme e permitem alertas ou remediação.

> [!example] Exemplo
> Um controle detectivo marca como não conforme todo bucket S3 que ficar com acesso público.

Veja também: [[Config]], [[Controle Preventivo]], [[Controle Proativo]]

## Onde aparece

- **Módulo 5:** [[05 - Multiconta Governanca e Federacao|nota do módulo]], [[05.04 - Control Tower e Landing Zone|5.4]], [[05.09 - AWS Config e Conformidade Continua|5.9]]
- **Módulo 21:** [[21 - Observabilidade Automacao e Operacoes|nota do módulo]], [[21.03 - CloudWatch Logs e o Agente|21.3]]
- **Módulo 27:** [[27.04 - Simulado 1|27.4]]
