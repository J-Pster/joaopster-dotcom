---
aliases:
  - "EICE"
  - "Instance Connect Endpoint"
tags:
  - glossario
  - seguranca
---
# EC2 Instance Connect Endpoint

O EC2 Instance Connect Endpoint é um proxy TCP com identidade que dá SSH ou RDP a instâncias em sub-redes privadas, sem IP público, sem bastion e sem agente. O acesso é controlado por IAM e toda tentativa vai ao CloudTrail. Não tem custo próprio, é voltado a gerenciamento e tem quotas fixas (um por sub-rede).

> [!example] Exemplo
> Um engenheiro abre SSH numa instância privada pelo console, sem IP público.

Veja também: [[Bastion Host]], [[Security Group]], [[Session Manager]]

## Onde aparece

- **Módulo 6:** [[06 - VPC a Fundo|nota do módulo]], [[06.07 - Acesso Administrativo sem Expor Portas|6.7]], [[06.08 - Gateway Endpoints para S3 e DynamoDB|6.8]]
- **Módulo 21:** [[21.07 - Systems Manager Gerencia Remota e Parametros|21.7]]
