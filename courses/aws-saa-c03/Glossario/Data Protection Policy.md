---
aliases:
  - "política de proteção de dados"
tags:
  - glossario
  - conceito
---
# Data Protection Policy

É uma política do CloudWatch Logs que detecta dados sensíveis, como números de cartão, e os mascara na ingestão. Só quem tem a permissão `logs:Unmask` vê o valor original. Existe para impedir que segredos e dados pessoais fiquem legíveis nos logs.

> [!example] Exemplo
> Um log de API que grava o CPF do cliente passa a mostrar asteriscos para quem não tem `logs:Unmask`.

Veja também: [[CloudWatch Logs]], [[Observabilidade]]

## Onde aparece

- **Módulo 21:** [[21.03 - CloudWatch Logs e o Agente|21.3]]
