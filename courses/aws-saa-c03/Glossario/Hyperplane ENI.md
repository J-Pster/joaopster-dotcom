---
aliases:
  - "ENI compartilhada do Lambda"
  - "Hyperplane"
tags:
  - glossario
  - rede
---
# Hyperplane ENI

A Hyperplane ENI é a interface de rede compartilhada que o Lambda usa para conectar funções a uma VPC. Em vez de criar uma interface por execução, o serviço cria uma por combinação de sub-rede e security group e a compartilha entre várias execuções, o que removeu o antigo atraso de rede no cold start de funções em VPC. A função continua sem acesso à internet a menos que haja NAT Gateway ou endpoints.

> [!example] Exemplo
> Cem execuções simultâneas da mesma função em uma sub-rede privada compartilham poucas interfaces Hyperplane, em vez de cem interfaces próprias.

Veja também: [[ENI]], [[NAT Gateway]], [[Security Group]], [[VPC]]

## Onde aparece

- **Módulo 16:** [[16.04 - Lambda em VPC RDS Proxy e Function URLs|16.4]]
