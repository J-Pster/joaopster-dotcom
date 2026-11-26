---
aliases:
  - "deny-list"
  - "lista de negação"
tags:
  - glossario
  - seguranca
---
# Deny List

Estratégia de SCP em que se mantém o acesso total padrão (FullAWSAccess) e se anexam políticas com Deny para o que deve ser proibido. É a abordagem mais simples e a mais usada, porque exige menos manutenção. O contraste é a allow-list, em que tudo é negado até ser listado.

> [!example] Exemplo
> Um SCP com Deny impede desativar o CloudTrail, enquanto o resto continua permitido pelo SCP padrão.

Veja também: [[Allow List]], [[SCP]]

## Onde aparece

- **Módulo 5:** [[05 - Multiconta Governanca e Federacao|nota do módulo]], [[05.02 - SCPs e Politicas de Organizacao|5.2]]
