---
aliases:
  - "Ponto Único de Falha"
  - "SPOF"
  - "ponto unico de falha"
  - "ponto único de falha"
  - "pontos únicos de falha"
  - "single point of failure"
tags:
  - glossario
  - conceito
---
# Ponto Único de Falha

Ponto único de falha (SPOF) é um componente cuja falha derruba todo o sistema por não ter redundância. Identificá-los e eliminá-los, com pelo menos dois de cada componente crítico em locais fisicamente separados, é o primeiro passo para a alta disponibilidade, e aparece em muitas questões de prova como o problema a corrigir.

> [!example] Exemplo
> Um banco em uma única instância e AZ é um SPOF, e um único NAT gateway deixa as outras AZs sem saída se a AZ dele falhar.

Veja também: [[Alta Disponibilidade]], [[Multi-AZ]], [[NAT Gateway]], [[Raio de Impacto]], [[Zona de Disponibilidade]]

## Onde aparece

- **Módulo 1:** [[01 - Nuvem e Infraestrutura Global AWS|nota do módulo]], [[01.01 - Por que a Nuvem Existe|1.1]], [[01.02 - Regions e Availability Zones|1.2]], [[01.04 - Escopo dos Recursos Global Regional e Zonal|1.4]]
- **Módulo 2:** [[02.01 - Por que um Framework e Como Revisar uma Arquitetura|2.1]], [[02.03 - Confiabilidade e Eficiencia de Desempenho|2.3]], [[02.07 - Anatomia de uma Questao|2.7]], [[02.08 - Principios das Respostas Certas e Plano de Estudo|2.8]]
- **Módulo 3:** [[03 - Fundamentos de Redes para a Nuvem|nota do módulo]], [[03.04 - Roteamento NAT e Tabelas de Rotas|3.4]]
- **Módulo 6:** [[06 - VPC a Fundo|nota do módulo]], [[06.02 - Sub-redes e Arquitetura em Camadas|6.2]], [[06.04 - NAT Gateway NAT Instance e Egress-Only|6.4]], [[06.07 - Acesso Administrativo sem Expor Portas|6.7]]
- **Módulo 7:** [[07 - Conectividade Hibrida e entre VPCs|nota do módulo]], [[07.01 - O Problema de Ligar Redes e o Mapa de Decisao|7.1]], [[07.02 - VPC Peering|7.2]], [[07.06 - Direct Connect|7.6]], [[07.07 - DNS Hibrido com Route 53 Resolver|7.7]]
- **Módulo 8:** [[08.05 - CloudHSM e Custom Key Stores|8.5]]
- **Módulo 9:** [[09.07 - Placement Groups|9.7]]
- **Módulo 10:** [[10 - Armazenamento em Bloco e Arquivos EBS EFS FSx|nota do módulo]], [[10.02 - EBS e Instance Store Armazenamento Anexado a Instancia|10.2]], [[10.06 - EFS Arquivos NFS Compartilhados|10.6]]
- **Módulo 12:** [[12 - Balanceamento de Carga e Auto Scaling|nota do módulo]], [[12.01 - Escalar Horizontalmente e Aplicacao Stateless|12.1]], [[12.04 - Network Load Balancer e Gateway Load Balancer|12.4]], [[12.06 - Auto Scaling Groups e Launch Templates|12.6]], [[12.10 - Application Auto Scaling e Arquiteturas Completas|12.10]]
- **Módulo 16:** [[16.01 - Serverless e a Anatomia do Lambda|16.1]]
- **Módulo 17:** [[17.05 - Capacidade Fargate EC2 e Managed Instances|17.5]], [[17.08 - Escolhendo a Computacao Tabela de Decisao|17.8]]
- **Módulo 19:** [[19.02 - Shield DDoS Standard e Advanced|19.2]]
- **Módulo 20:** [[20 - Alta Disponibilidade e Recuperacao de Desastres|nota do módulo]], [[20.01 - Disponibilidade em Noves e o Ponto Unico de Falha|20.1]], [[20.02 - Multi-AZ e Multi-Region Servico por Servico|20.2]], [[20.09 - Tornar Aplicacao Legada Resiliente sem Mudar o Codigo|20.9]]
- **Módulo 22:** [[22.11 - OpenSearch Quick Data Exchange e Servicos Auxiliares|22.11]]
- **Módulo 24:** [[24 - Servicos de IA Gerenciados|nota do módulo]]
- **Módulo 26:** [[26.01 - O Projeto PropDesk e os Requisitos|26.1]], [[26.03 - Iteracao 2 Resiliencia e Desacoplamento|26.3]], [[26.05 - Iteracao 4 Custo Otimizado|26.5]], [[26.08 - Revisao Well-Architected e Trade-offs|26.8]]
- **Módulo 27:** [[27.02 - Tecnica de Resolucao Tempo e Eliminacao|27.2]], [[27.04 - Simulado 1|27.4]]
