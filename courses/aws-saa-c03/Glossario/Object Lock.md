---
aliases:
  - "S3 Object Lock"
tags:
  - glossario
  - dados
---
# Object Lock

Recurso do S3 que impede que versões de objeto sejam apagadas ou sobrescritas durante um período de retenção ou enquanto houver um legal hold, no modelo WORM. Exige versionamento no bucket. Tem dois modos de retenção, governance e compliance, e atende exigências de imutabilidade e retenção regulatória.

> [!example] Exemplo
> Uma financeira guarda extratos por 7 anos com Object Lock em modo compliance, de modo que ninguém consiga apagá-los antes do prazo.

Veja também: [[Legal Hold]], [[Modo Compliance]], [[Modo Governance]]

## Onde aparece

- **Módulo 5:** [[05.08 - CloudTrail e a Trilha de Auditoria|5.8]]
- **Módulo 8:** [[08 - Criptografia e Protecao de Dados|nota do módulo]], [[08.09 - Governanca de Dados Object Lock e Macie|8.9]]
- **Módulo 11:** [[11 - Amazon S3 a Fundo|nota do módulo]], [[11.01 - O Modelo do S3 Buckets Objetos e Durabilidade|11.1]], [[11.05 - Criptografia Versionamento e Retencao no S3|11.5]], [[11.06 - Replicacao do S3|11.6]], [[11.08 - Eventos Site Estatico e Gestao em Escala no S3|11.8]]
- **Módulo 20:** [[20.03 - RPO e RTO e o Custo da Recuperacao|20.3]], [[20.05 - AWS Backup Snapshots e Cofres Imutaveis|20.5]], [[20.06 - Replicacao entre Regioes e Elastic Disaster Recovery|20.6]]
- **Módulo 25:** [[25.07 - S3 Classes Ciclo de Vida e Custo de Objetos|25.7]]
- **Módulo 26:** [[26 - Projeto Pratico - Arquitetura de Referencia|nota do módulo]], [[26.03 - Iteracao 2 Resiliencia e Desacoplamento|26.3]], [[26.06 - Multiconta Governanca e Auditoria|26.6]], [[26.09 - Mudancas de Requisito no Estilo da Prova|26.9]]
- **Módulo 27:** [[27.03 - Revisao Final Mapa Requisito Servico e Pares que Confundem|27.3]], [[27.04 - Simulado 1|27.4]]
