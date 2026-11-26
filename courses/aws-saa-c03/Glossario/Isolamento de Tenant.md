---
aliases:
  - "isolamento entre tenants"
  - "tenant isolation"
tags:
  - glossario
  - seguranca
---
# Isolamento de Tenant

Conjunto de controles que impede um tenant de acessar dados de outro ou de prejudicar seu desempenho em uma plataforma multi-tenant. Funciona em camadas: o tenant vem de um claim assinado do token e nunca de um parâmetro que o cliente controla, o banco reforça o filtro com políticas de segurança em nível de linha, e recursos críticos podem ganhar cotas ou pilhas dedicadas. Existe porque um único filtro esquecido no código basta para vazar dados entre clientes.

> [!example] Exemplo
> Um desenvolvedor esquece o filtro de tenant em uma consulta; como o banco aplica uma política de linha ligada ao tenant da sessão, a consulta devolve zero linhas de outros condomínios em vez de um vazamento.

Veja também: [[Multi-Tenant]], [[JWT]], [[Cognito]]

## Onde aparece

- **Módulo 26:** [[26.01 - O Projeto PropDesk e os Requisitos|26.1]]
