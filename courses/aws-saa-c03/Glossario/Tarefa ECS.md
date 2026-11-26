---
aliases:
  - "ECS task"
  - "ECS tasks"
  - "tarefa ECS"
  - "tarefa do ECS"
  - "tarefas do ECS"
tags:
  - glossario
  - conceito
---
# Tarefa ECS

Uma tarefa é a instância em execução de uma task definition: um ou mais containers que sobem juntos e compartilham rede e ciclo de vida. Pode ser avulsa (um job que termina) ou gerenciada por um service. No Fargate, cada tarefa tem a própria fronteira de isolamento e a própria interface de rede.

> [!example] Exemplo
> Um job noturno é disparado como tarefa avulsa, roda 20 minutos e é encerrado, cobrando apenas esse tempo.

Veja também: [[Fargate]], [[Servico ECS]], [[Task Definition]]

## Onde aparece

- **Módulo 3:** [[03.01 - Por que Redes Pesam e as Camadas de Rede|3.1]], [[03.02 - IPv4 CIDR e Mascaras de Rede|3.2]], [[03.05 - Firewalls Portas e Portas Efemeras|3.5]]
- **Módulo 4:** [[04 - IAM Identidade e Acesso|nota do módulo]], [[04.06 - Roles e STS Credenciais Temporarias|4.6]]
- **Módulo 6:** [[06.05 - Security Groups|6.5]], [[06.06 - Network ACLs e Defesa em Camadas|6.6]], [[06.09 - Interface Endpoints PrivateLink e Endpoint Policies|6.9]]
- **Módulo 8:** [[08.08 - Secrets Manager e Parameter Store|8.8]]
- **Módulo 17:** [[17.02 - ECR Repositorio de Imagens|17.2]]
- **Módulo 21:** [[21.04 - X-Ray Prometheus Grafana e Monitoramento de Aplicacao|21.4]]
- **Módulo 27:** [[27.04 - Simulado 1|27.4]]
