---
aliases:
  - "RLS"
  - "políticas de segurança em nível de linha"
  - "segurança em nível de linha"
tags:
  - glossario
  - dados
---
# Row-Level Security

Recurso de bancos relacionais, como o PostgreSQL, em que o próprio banco filtra as linhas visíveis a cada sessão segundo uma política, sem depender de cada consulta da aplicação lembrar de filtrar. Existe como segunda barreira: o filtro no código pode ser esquecido por um desenvolvedor, enquanto a política no banco vale para qualquer consulta que chegue pela conexão daquela sessão.

> [!example] Exemplo
> A API define o tenant da sessão ao abrir a transação; a política do banco só deixa passar linhas cujo tenant seja igual a esse valor, então um SELECT sem WHERE ainda retorna apenas dados do condomínio logado.

Veja também: [[Isolamento de Tenant]], [[Multi-Tenant]], [[Defesa em Profundidade]]

## Onde aparece

- **Módulo 22:** [[22.11 - OpenSearch Quick Data Exchange e Servicos Auxiliares|22.11]]
- **Módulo 26:** [[26.01 - O Projeto PropDesk e os Requisitos|26.1]]
