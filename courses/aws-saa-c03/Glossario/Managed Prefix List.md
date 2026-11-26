---
aliases:
  - "lista de prefixos"
  - "prefix list"
  - "prefix lists"
tags:
  - glossario
  - rede
---
# Managed Prefix List

Prefix list é um conjunto nomeado de CIDRs que pode ser referenciado em security groups e tabelas de rotas. As gerenciadas pela AWS, como a do S3, são mantidas pela própria AWS; as suas você cria e compartilha. Editar a lista atualiza todas as regras que a usam, mas ela conta pelo tamanho máximo na quota de regras.

> [!example] Exemplo
> A saída TCP 443 para a prefix list do S3 libera o acesso ao S3 por gateway endpoint.

Veja também: [[Gateway Endpoint]], [[Route Table]], [[Security Group]]

## Onde aparece

- **Módulo 3:** [[03.05 - Firewalls Portas e Portas Efemeras|3.5]]
- **Módulo 5:** [[05.07 - RAM e Compartilhamento entre Contas|5.7]]
- **Módulo 6:** [[06 - VPC a Fundo|nota do módulo]], [[06.03 - Route Tables Internet Gateway e IPs Publicos|6.3]], [[06.05 - Security Groups|6.5]], [[06.08 - Gateway Endpoints para S3 e DynamoDB|6.8]], [[06.09 - Interface Endpoints PrivateLink e Endpoint Policies|6.9]]
- **Módulo 11:** [[11.04 - Controle de Acesso e Rede no S3|11.4]]
- **Módulo 18:** [[18.03 - Origens OAC Failover e Origin Shield|18.3]]
- **Módulo 19:** [[19.01 - Ameacas Externas e Defesa em Profundidade|19.1]]
- **Módulo 26:** [[26.02 - Iteracao 1 Seguranca em Camadas|26.2]]
