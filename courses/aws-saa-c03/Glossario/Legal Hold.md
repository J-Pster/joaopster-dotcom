---
aliases:
  - "retenção legal"
tags:
  - glossario
  - dados
---
# Legal Hold

Proteção do Object Lock sem data de término que impede apagar uma versão de objeto enquanto estiver ativa, independentemente de qualquer período de retenção. Quem tem a permissão s3:PutObjectLegalHold liga e desliga. É usada em litígios, e pode coexistir com um período de retenção.

> [!example] Exemplo
> O jurídico aplica legal hold nos documentos de um processo e remove a proteção só quando o caso termina.

Veja também: [[Modo Compliance]], [[Modo Governance]], [[Object Lock]]

## Onde aparece

- **Módulo 8:** [[08 - Criptografia e Protecao de Dados|nota do módulo]], [[08.09 - Governanca de Dados Object Lock e Macie|8.9]]
- **Módulo 11:** [[11.02 - Classes de Armazenamento do S3 e Glacier|11.2]], [[11.05 - Criptografia Versionamento e Retencao no S3|11.5]], [[11.08 - Eventos Site Estatico e Gestao em Escala no S3|11.8]]
- **Módulo 20:** [[20.05 - AWS Backup Snapshots e Cofres Imutaveis|20.5]]
- **Módulo 25:** [[25.11 - Decisao de Custo na Prova e Revisao|25.11]]
- **Módulo 27:** [[27.05 - Simulado 2|27.5]]
