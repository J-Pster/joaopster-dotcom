---
aliases:
  - "Server-Side Request Forgery"
  - "falsificação de requisição do lado do servidor"
tags:
  - glossario
  - seguranca
---
# SSRF

SSRF (server-side request forgery) é a falha em que o atacante induz o servidor a fazer uma requisição para um endereço escolhido por ele, inclusive endereços internos que ele não alcançaria de fora. Na AWS o alvo clássico é o serviço de metadados da instância, de onde saem credenciais temporárias da role. Exigir o IMDSv2 e aplicar menor privilégio na role reduz muito o estrago.

> [!example] Exemplo
> Um recurso de 'prévia de link' busca qualquer URL colada pelo usuário; o atacante cola o endereço dos metadados e a aplicação devolve as credenciais da role.

Veja também: [[Defesa em Profundidade]], [[IAM Role]], [[Instance Metadata Service]]

## Onde aparece

- **Módulo 9:** [[09 - EC2 a Fundo|nota do módulo]], [[09.04 - Ciclo de Vida User Data e Metadados|9.4]]
- **Módulo 19:** [[19 - Seguranca de Aplicacoes e Deteccao de Ameacas|nota do módulo]], [[19.08 - Credenciais da Aplicacao e Decisao Final|19.8]]
