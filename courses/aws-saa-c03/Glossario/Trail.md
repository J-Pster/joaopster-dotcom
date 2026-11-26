---
aliases:
  - "trail do CloudTrail"
  - "trails"
tags:
  - glossario
  - seguranca
---
# Trail

Configuração do CloudTrail que entrega eventos a um bucket S3, com entrega opcional ao CloudWatch Logs e ao EventBridge. Pode ser de uma Região ou multi-Region, e esta é a prática recomendada. É o caminho para um registro permanente e para registrar eventos de dados.

> [!example] Exemplo
> Uma trail multi-Region grava os eventos de todas as Regiões num bucket central com criptografia KMS.

Veja também: [[CloudTrail]], [[Data Event]], [[Organization Trail]]

## Onde aparece

- **Módulo 5:** [[05 - Multiconta Governanca e Federacao|nota do módulo]], [[05.08 - CloudTrail e a Trilha de Auditoria|5.8]]
