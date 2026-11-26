---
aliases:
  - "SQLi"
  - "injeção de SQL"
tags:
  - glossario
  - seguranca
---
# SQL Injection

SQL injection é o ataque em que o invasor insere comandos SQL em um campo de entrada para que a aplicação os execute no banco de dados, lendo, alterando ou apagando dados. A causa real é código que concatena a entrada do usuário na consulta; a correção é usar consultas parametrizadas. O WAF, com o grupo gerenciado de SQL database, reduz o risco na borda, mas não substitui a correção no código.

> [!example] Exemplo
> Um formulário de busca aceita o texto ' OR '1'='1 e a aplicação devolve todos os registros da tabela de usuários.

Veja também: [[Cross-Site Scripting]], [[Defesa em Profundidade]], [[Managed Rule Group]], [[WAF]]

## Onde aparece

- **Módulo 3:** [[03.01 - Por que Redes Pesam e as Camadas de Rede|3.1]], [[03.05 - Firewalls Portas e Portas Efemeras|3.5]]
- **Módulo 12:** [[12.02 - A Familia Elastic Load Balancing|12.2]], [[12.03 - Application Load Balancer a Fundo|12.3]]
- **Módulo 16:** [[16 - Serverless Lambda e API Gateway|nota do módulo]], [[16.07 - API Gateway Seguranca Throttling Cache e CORS|16.7]]
- **Módulo 18:** [[18 - Borda e DNS CloudFront Global Accelerator e Route 53|nota do módulo]], [[18.04 - Seguranca do Viewer HTTPS Assinaturas e WAF|18.4]], [[18.10 - Padroes de Arquitetura e Decisao de Borda e DNS|18.10]]
- **Módulo 19:** [[19 - Seguranca de Aplicacoes e Deteccao de Ameacas|nota do módulo]], [[19.01 - Ameacas Externas e Defesa em Profundidade|19.1]], [[19.03 - WAF Web ACLs Regras e Onde Associar|19.3]], [[19.04 - Network Firewall DNS Firewall e Firewall Manager|19.4]], [[19.08 - Credenciais da Aplicacao e Decisao Final|19.8]]
- **Módulo 26:** [[26.02 - Iteracao 1 Seguranca em Camadas|26.2]]
- **Módulo 27:** [[27.02 - Tecnica de Resolucao Tempo e Eliminacao|27.2]], [[27.03 - Revisao Final Mapa Requisito Servico e Pares que Confundem|27.3]], [[27.04 - Simulado 1|27.4]]
