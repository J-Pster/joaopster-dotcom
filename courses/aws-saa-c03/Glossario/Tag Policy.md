---
aliases:
  - "política de tags"
  - "políticas de tags"
  - "tag policies"
tags:
  - glossario
  - seguranca
---
# Tag Policy

Tipo de política do Organizations que padroniza as chaves e os valores de tags usados nas contas, por exemplo exigindo que a chave se chame Projeto e não projeto. Ela ajuda a manter a alocação de custos consistente. A política não obriga a existência de tags (para isso servem SCPs com aws:RequestTag ou regras do Config); ela verifica a conformidade e, se o enforcement for ligado em recursos suportados, só barra operações de tag fora do padrão.

> [!example] Exemplo
> Uma tag policy define que a chave Ambiente só aceita os valores prod, dev e teste.

Veja também: [[Cost Allocation Tag]], [[Organizations]], [[SCP]]

## Onde aparece

- **Módulo 5:** [[05.01 - Por que Varias Contas e Como o Organizations Organiza|5.1]], [[05.02 - SCPs e Politicas de Organizacao|5.2]], [[05.03 - Cobranca Consolidada e Custos Multiconta|5.3]], [[05.04 - Control Tower e Landing Zone|5.4]]
- **Módulo 25:** [[25.03 - Atribuicao de Custos Tags Cobranca Consolidada e Data Exports|25.3]]
- **Módulo 26:** [[26.05 - Iteracao 4 Custo Otimizado|26.5]]
- **Módulo 27:** [[27.05 - Simulado 2|27.5]]
