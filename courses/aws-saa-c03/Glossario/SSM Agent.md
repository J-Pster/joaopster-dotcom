---
aliases:
  - "Systems Manager Agent"
  - "agente do SSM"
tags:
  - glossario
  - servico
---
# SSM Agent

O SSM Agent é o software que roda nos nós gerenciados e executa as solicitações do Systems Manager. Vem pré-instalado em muitas AMIs da AWS. Comunica-se por conexões de saída com o serviço, por isso dispensa portas de entrada.

> [!example] Exemplo
> A instância só aparece no Systems Manager depois que o agente roda e o instance profile permite.

Veja também: [[Managed Node]], [[Session Manager]], [[Systems Manager]]

## Onde aparece

- **Módulo 6:** [[06.07 - Acesso Administrativo sem Expor Portas|6.7]]
- **Módulo 7:** [[07.02 - VPC Peering|7.2]]
- **Módulo 17:** [[17.08 - Escolhendo a Computacao Tabela de Decisao|17.8]]
- **Módulo 19:** [[19.06 - Inspector Detective e Security Hub|19.6]]
- **Módulo 21:** [[21.03 - CloudWatch Logs e o Agente|21.3]], [[21.07 - Systems Manager Gerencia Remota e Parametros|21.7]]
