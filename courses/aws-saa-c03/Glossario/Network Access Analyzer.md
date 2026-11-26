---
aliases:
  - "Network Access Scope Analyzer"
tags:
  - glossario
  - rede
---
# Network Access Analyzer

O Network Access Analyzer é uma ferramenta do VPC que audita o que está acessível na sua rede contra uma política de acesso que você define, por exemplo 'nada na sub-rede de dados deve ser alcançável pela internet'. Ele analisa a configuração (rotas, security groups, NACLs, gateways) e lista os caminhos que violam o escopo, sem gerar tráfego. Existe porque, em redes grandes, ninguém consegue revisar à mão todos os caminhos possíveis.

> [!example] Exemplo
> Uma equipe define o escopo 'sem acesso da internet às sub-redes de dados' e o analisador aponta uma sub-rede que, por uma rota esquecida, é alcançável pelo Internet Gateway.

Veja também: [[Reachability Analyzer]], [[Security Group]], [[VPC Flow Logs]]

## Onde aparece

- **Módulo 6:** [[06 - VPC a Fundo|nota do módulo]], [[06.10 - Flow Logs DNS DHCP IPv6 e Reachability Analyzer|6.10]]
