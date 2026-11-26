---
tags:
  - glossario
  - servico
---
# ECS Anywhere

O ECS Anywhere registra servidores ou VMs externos à AWS como instâncias de um cluster ECS (launch type EXTERNAL), mantendo o plano de controle na Região. Serve para cargas que precisam ficar no seu data center ou na borda. Não oferece balanceador nem service discovery nem o modo awsvpc, e cobra por instância registrada por hora.

> [!example] Exemplo
> Uma fábrica registra servidores locais no ECS e roda as mesmas tarefas que roda na nuvem.

Veja também: [[ECS]], [[EKS Anywhere]], [[Outposts]]

## Onde aparece

- **Módulo 2:** [[02.06 - Dominios Pesos e o Mapa para os Pilares|2.6]]
- **Módulo 4:** [[04.02 - Usuarios Grupos Credenciais e MFA|4.2]]
- **Módulo 10:** [[10.06 - EFS Arquivos NFS Compartilhados|10.6]]
- **Módulo 17:** [[17.03 - ECS Cluster Task Definition e Service|17.3]], [[17.05 - Capacidade Fargate EC2 e Managed Instances|17.5]], [[17.06 - EKS Kubernetes Gerenciado na AWS|17.6]], [[17.08 - Escolhendo a Computacao Tabela de Decisao|17.8]]
- **Módulo 23:** [[23.09 - Outposts e Computacao no Local|23.9]]
