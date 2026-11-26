---
aliases:
  - "SCP padrão"
tags:
  - glossario
  - seguranca
---
# FullAWSAccess

SCP gerenciado pela AWS, com Allow para todas as ações em todos os recursos, anexado por padrão à raiz, às OUs e às contas. Ele não concede permissões a ninguém: apenas deixa passar o que as identity policies permitirem. Numa estratégia de allow-list, ele é removido e substituído por Allows explícitos.

> [!example] Exemplo
> Uma OU de teste mantém o FullAWSAccess e recebe um SCP de Deny para Regiões fora da lista aprovada.

Veja também: [[Allow List]], [[Deny List]], [[SCP]]

## Onde aparece

- **Módulo 5:** [[05 - Multiconta Governanca e Federacao|nota do módulo]], [[05.02 - SCPs e Politicas de Organizacao|5.2]]
