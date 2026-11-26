---
aliases:
  - "Listeners"
  - "Ouvinte do balanceador"
tags:
  - glossario
  - rede
---
# Listener

Processo de um balanceador que escuta conexões em um protocolo e uma porta e aplica regras para encaminhá-las a target groups. No ALB, as regras têm prioridade, condições e ações, e a regra padrão vale quando nenhuma outra casa. Um balanceador pode ter vários listeners.

> [!example] Exemplo
> O listener HTTPS:443 do ALB tem uma regra por caminho e uma regra padrão que encaminha ao target group da aplicação web.

Veja também: [[Application Load Balancer]], [[Health Check]], [[SNI]], [[Target Group]]

## Onde aparece

- **Módulo 3:** [[03 - Fundamentos de Redes para a Nuvem|nota do módulo]], [[03.01 - Por que Redes Pesam e as Camadas de Rede|3.1]], [[03.05 - Firewalls Portas e Portas Efemeras|3.5]], [[03.07 - TLS HTTPS e Certificados|3.7]]
- **Módulo 7:** [[07.04 - PrivateLink e Endpoint Services|7.4]]
- **Módulo 8:** [[08.07 - Criptografia em Transito ACM e Private CA|8.7]]
- **Módulo 12:** [[12 - Balanceamento de Carga e Auto Scaling|nota do módulo]], [[12.02 - A Familia Elastic Load Balancing|12.2]], [[12.03 - Application Load Balancer a Fundo|12.3]], [[12.04 - Network Load Balancer e Gateway Load Balancer|12.4]], [[12.05 - Target Groups Health Checks e Cross-Zone|12.5]]
- **Módulo 16:** [[16.08 - Padroes Serverless e Ferramentas de Front-end|16.8]]
- **Módulo 17:** [[17 - Containers ECS EKS e Fargate|nota do módulo]], [[17.04 - ECS em Producao Balanceador Escala e Deploys|17.4]], [[17.06 - EKS Kubernetes Gerenciado na AWS|17.6]]
- **Módulo 18:** [[18.03 - Origens OAC Failover e Origin Shield|18.3]], [[18.06 - Global Accelerator Anycast e Rede Global da AWS|18.6]]
- **Módulo 19:** [[19.07 - Cognito User Pools e Identity Pools|19.7]]
- **Módulo 26:** [[26.02 - Iteracao 1 Seguranca em Camadas|26.2]]
- **Módulo 27:** [[27.05 - Simulado 2|27.5]]
