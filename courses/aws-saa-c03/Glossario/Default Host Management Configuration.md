---
aliases:
  - "DHMC"
tags:
  - glossario
  - conceito
---
# Default Host Management Configuration

É a configuração do Systems Manager que aplica uma role padrão a todas as instâncias EC2 de uma conta e Região, tornando-as nós gerenciados sem instance profile manual. Existe para gerenciar a frota sem anexar permissões instância por instância.

> [!example] Exemplo
> Habilitar o DHMC e ver instâncias novas aparecerem no Fleet Manager sem anexar nenhum instance profile.

Veja também: [[Session Manager]], [[Systems Manager]]

## Onde aparece

- **Módulo 6:** [[06.07 - Acesso Administrativo sem Expor Portas|6.7]]
- **Módulo 21:** [[21.07 - Systems Manager Gerencia Remota e Parametros|21.7]]
