---
aliases:
  - "data events"
  - "evento de dados"
  - "eventos de dados"
tags:
  - glossario
  - seguranca
---
# Data Event

Evento do CloudTrail sobre operações feitas sobre ou dentro de um recurso, como GetObject e PutObject no S3 ou Invoke no Lambda. Costuma ter volume alto, não é registrado por padrão e tem cobrança adicional. É preciso escolher o tipo de recurso para registrá-lo.

> [!example] Exemplo
> Para saber quem apagou um objeto, a trail precisa registrar os eventos de dados do S3.

Veja também: [[CloudTrail]], [[Management Event]], [[Trail]]

## Onde aparece

- **Módulo 5:** [[05 - Multiconta Governanca e Federacao|nota do módulo]], [[05.08 - CloudTrail e a Trilha de Auditoria|5.8]], [[05.09 - AWS Config e Conformidade Continua|5.9]]
- **Módulo 11:** [[11.01 - O Modelo do S3 Buckets Objetos e Durabilidade|11.1]], [[11.08 - Eventos Site Estatico e Gestao em Escala no S3|11.8]]
- **Módulo 19:** [[19.05 - GuardDuty e Deteccao de Ameacas|19.5]]
- **Módulo 22:** [[22.12 - Seguranca da Ingestao e Decisao Final|22.12]]
- **Módulo 26:** [[26.06 - Multiconta Governanca e Auditoria|26.6]], [[26.09 - Mudancas de Requisito no Estilo da Prova|26.9]]
- **Módulo 27:** [[27.05 - Simulado 2|27.5]]
