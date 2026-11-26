---
aliases:
  - "Bring Your Own Key"
  - "material de chave importado"
tags:
  - glossario
  - seguranca
---
# BYOK

Modelo em que a empresa gera o material de chave fora da AWS e o importa para uma KMS key, mantendo uma cópia sob seu controle. Permite excluir o material importado quando necessário, mas a empresa passa a ser responsável por guardá-lo e por reimportá-lo. A rotação automática não se aplica ao material importado, que pode ser rotacionado sob demanda ou manualmente.

> [!example] Exemplo
> Uma empresa importa o próprio material de chave para o KMS por exigência de política interna e pode excluí-lo para tornar os dados ilegíveis.

Veja também: [[Customer Managed Key]], [[KMS]], [[Multi-Region Key]]

## Onde aparece

- **Módulo 8:** [[08 - Criptografia e Protecao de Dados|nota do módulo]], [[08.04 - KMS Rotacao Material Importado Multi-Region e Exclusao|8.4]], [[08.05 - CloudHSM e Custom Key Stores|8.5]]
