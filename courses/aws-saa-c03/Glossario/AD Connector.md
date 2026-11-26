---
aliases:
  - "AD Connectors"
tags:
  - glossario
  - servico
---
# AD Connector

Gateway do Directory Service que repassa as requisições de autenticação ao Active Directory existente, sem guardar dados do diretório na nuvem. Vem em dois tamanhos, não pode ser compartilhado com outras contas e depende de conectividade estável com o AD local. Cada domínio do AD exige um conector próprio.

> [!example] Exemplo
> Uma empresa conecta o WorkSpaces ao AD local por um AD Connector, sem replicar os usuários para a AWS.

Veja também: [[Active Directory]], [[Directory Service]], [[Simple AD]]

## Onde aparece

- **Módulo 4:** [[04.02 - Usuarios Grupos Credenciais e MFA|4.2]]
- **Módulo 5:** [[05 - Multiconta Governanca e Federacao|nota do módulo]], [[05.05 - IAM Identity Center|5.5]], [[05.06 - Federacao com IAM e Directory Service|5.6]]
- **Módulo 27:** [[27.05 - Simulado 2|27.5]]
