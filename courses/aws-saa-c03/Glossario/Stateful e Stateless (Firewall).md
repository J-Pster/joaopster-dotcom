---
aliases:
  - "Firewall Stateful"
  - "Firewall Stateless"
  - "com estado"
  - "firewall com estado"
  - "firewall sem estado"
  - "firewall stateful"
  - "firewall stateless"
  - "stateful"
  - "stateless (firewall)"
tags:
  - glossario
  - conceito
---
# Stateful e Stateless (Firewall)

Um firewall stateful guarda a tabela das conexões que deixou passar e libera a resposta automaticamente; um firewall stateless trata cada pacote isoladamente e exige regra própria para a resposta. O security group é stateful e a network ACL é stateless. Não confundir com aplicação stateless (que não guarda sessão local, Módulo 12).

> [!example] Exemplo
> Com NACL personalizada que só permite TCP 443 na saída, a resposta ao navegador (porta efêmera) é descartada, porque a NACL é stateless.

Veja também: [[Network ACL]], [[Porta Efemera]], [[Security Group]], [[Stateless]]

## Onde aparece

- **Módulo 3:** [[03.05 - Firewalls Portas e Portas Efemeras|3.5]]
- **Módulo 6:** [[06 - VPC a Fundo|nota do módulo]], [[06.05 - Security Groups|6.5]], [[06.06 - Network ACLs e Defesa em Camadas|6.6]]
- **Módulo 7:** [[07.03 - Transit Gateway|7.3]]
- **Módulo 12:** [[12.01 - Escalar Horizontalmente e Aplicacao Stateless|12.1]], [[12.04 - Network Load Balancer e Gateway Load Balancer|12.4]], [[12.06 - Auto Scaling Groups e Launch Templates|12.6]], [[12.09 - Instance Refresh Termination e Spot|12.9]], [[12.10 - Application Auto Scaling e Arquiteturas Completas|12.10]]
- **Módulo 15:** [[15.01 - Por Que Desacoplar e os Padroes de Mensageria|15.1]], [[15.06 - Step Functions Orquestracao de Workflows|15.6]], [[15.08 - Escolhendo entre SQS SNS EventBridge Kinesis e Step Functions|15.8]]
- **Módulo 16:** [[16.08 - Padroes Serverless e Ferramentas de Front-end|16.8]]
- **Módulo 17:** [[17.06 - EKS Kubernetes Gerenciado na AWS|17.6]]
- **Módulo 19:** [[19.04 - Network Firewall DNS Firewall e Firewall Manager|19.4]]
- **Módulo 21:** [[21.06 - CloudFormation Operacao StackSets Service Catalog e Governanca|21.6]], [[21.07 - Systems Manager Gerencia Remota e Parametros|21.7]]
- **Módulo 25:** [[25.05 - Computacao Modelos de Compra e a Decisao|25.5]]
