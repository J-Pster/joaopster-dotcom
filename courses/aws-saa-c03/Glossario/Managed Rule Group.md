---
aliases:
  - "grupo de regras gerenciado"
  - "managed rule groups"
  - "regras gerenciadas"
tags:
  - glossario
  - seguranca
---
# Managed Rule Group

Um managed rule group é um conjunto pronto de regras do WAF mantido pela AWS ou por vendedores do Marketplace, que cobre ameaças comuns como o OWASP Top 10, SQL injection, entradas conhecidamente ruins, reputação de IP e bots. Cada grupo consome uma capacidade (WCU) do web ACL, e alguns, como Bot Control e prevenção de fraude de conta, têm cobrança própria. Existe para você ganhar proteção sem escrever e atualizar regras manualmente.

> [!example] Exemplo
> O grupo AWSManagedRulesSQLiRuleSet é adicionado ao web ACL de uma loja para bloquear injeção de SQL nos formulários.

Veja também: [[Bot Control]], [[Rate-Based Rule]], [[WAF]], [[WCU]], [[Web ACL]]

## Onde aparece

- **Módulo 3:** [[03.01 - Por que Redes Pesam e as Camadas de Rede|3.1]]
- **Módulo 5:** [[05.09 - AWS Config e Conformidade Continua|5.9]]
- **Módulo 12:** [[12.03 - Application Load Balancer a Fundo|12.3]]
- **Módulo 18:** [[18.04 - Seguranca do Viewer HTTPS Assinaturas e WAF|18.4]]
- **Módulo 19:** [[19 - Seguranca de Aplicacoes e Deteccao de Ameacas|nota do módulo]], [[19.01 - Ameacas Externas e Defesa em Profundidade|19.1]], [[19.02 - Shield DDoS Standard e Advanced|19.2]], [[19.03 - WAF Web ACLs Regras e Onde Associar|19.3]], [[19.04 - Network Firewall DNS Firewall e Firewall Manager|19.4]], [[19.06 - Inspector Detective e Security Hub|19.6]], [[19.08 - Credenciais da Aplicacao e Decisao Final|19.8]]
- **Módulo 26:** [[26.02 - Iteracao 1 Seguranca em Camadas|26.2]], [[26.06 - Multiconta Governanca e Auditoria|26.6]]
- **Módulo 27:** [[27.02 - Tecnica de Resolucao Tempo e Eliminacao|27.2]], [[27.04 - Simulado 1|27.4]]
