---
aliases:
  - "AWS Firewall Manager"
  - "FMS"
tags:
  - glossario
  - seguranca
---
# Firewall Manager

O AWS Firewall Manager aplica e audita proteções de segurança de forma central em todas as contas de uma organização: políticas de WAF, Shield Advanced, security groups, network ACLs, Network Firewall e DNS Firewall. Exige o AWS Organizations, uma conta administradora do Firewall Manager e o AWS Config habilitado, e aplica a política automaticamente a contas e recursos novos. Existe para evitar que cada conta configure as proteções à mão e acabe com lacunas.

> [!example] Exemplo
> O time de segurança cria uma política que associa o mesmo web ACL do WAF a todo ALB de todas as contas; quando uma conta nova cria um ALB, a política o protege sozinha.

Veja também: [[Config]], [[Network Firewall]], [[Organizations]], [[Security Group]], [[Shield]], [[WAF]]

## Onde aparece

- **Módulo 2:** [[02.06 - Dominios Pesos e o Mapa para os Pilares|2.6]]
- **Módulo 19:** [[19 - Seguranca de Aplicacoes e Deteccao de Ameacas|nota do módulo]], [[19.01 - Ameacas Externas e Defesa em Profundidade|19.1]], [[19.02 - Shield DDoS Standard e Advanced|19.2]], [[19.03 - WAF Web ACLs Regras e Onde Associar|19.3]], [[19.04 - Network Firewall DNS Firewall e Firewall Manager|19.4]], [[19.08 - Credenciais da Aplicacao e Decisao Final|19.8]]
- **Módulo 27:** [[27.03 - Revisao Final Mapa Requisito Servico e Pares que Confundem|27.3]], [[27.05 - Simulado 2|27.5]]
