---
aliases:
  - "bastion"
  - "jump server"
  - "servidor de salto"
tags:
  - glossario
  - seguranca
---
# Bastion Host

Bastion host é uma instância endurecida numa sub-rede pública usada como ponto de entrada para administrar instâncias privadas. Tem custo de operação, IP público e uma porta exposta, e é um ponto único de falha se for só um. Hoje, Session Manager e Instance Connect Endpoint costumam substituí-lo.

> [!example] Exemplo
> A equipe entra por SSH no bastion e dali salta para o servidor de aplicação.

Veja também: [[EC2 Instance Connect Endpoint]], [[Ponto Unico de Falha]], [[Session Manager]]

## Onde aparece

- **Módulo 3:** [[03.05 - Firewalls Portas e Portas Efemeras|3.5]]
- **Módulo 6:** [[06 - VPC a Fundo|nota do módulo]], [[06.02 - Sub-redes e Arquitetura em Camadas|6.2]], [[06.04 - NAT Gateway NAT Instance e Egress-Only|6.4]], [[06.07 - Acesso Administrativo sem Expor Portas|6.7]], [[06.09 - Interface Endpoints PrivateLink e Endpoint Policies|6.9]]
- **Módulo 9:** [[09.03 - Rede e Disco da Instancia|9.3]]
- **Módulo 21:** [[21 - Observabilidade Automacao e Operacoes|nota do módulo]], [[21.07 - Systems Manager Gerencia Remota e Parametros|21.7]]
- **Módulo 27:** [[27.04 - Simulado 1|27.4]]
