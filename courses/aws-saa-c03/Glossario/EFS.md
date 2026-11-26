---
aliases:
  - "Amazon EFS"
  - "Elastic File System"
  - "sistema de arquivos EFS"
tags:
  - glossario
  - servico
---
# EFS

O Amazon EFS é um sistema de arquivos NFS elástico e serverless, para Linux, que cresce e encolhe sozinho conforme você adiciona e remove arquivos, sem provisionar capacidade. Pode ser montado por milhares de clientes em várias AZs ao mesmo tempo. Existe para resolver arquivos compartilhados sem que você opere um servidor NFS.

> [!example] Exemplo
> Contêineres Fargate de várias AZs montam o mesmo EFS para compartilhar arquivos de mídia enviados pelos usuários.

Veja também: [[EFS Access Point]], [[EFS Infrequent Access]], [[Elastic Throughput]], [[Mount Target]], [[NFS]]

## Onde aparece

- **Módulo 1:** [[01.04 - Escopo dos Recursos Global Regional e Zonal|1.4]]
- **Módulo 2:** [[02.06 - Dominios Pesos e o Mapa para os Pilares|2.6]], [[02.07 - Anatomia de uma Questao|2.7]]
- **Módulo 3:** [[03.05 - Firewalls Portas e Portas Efemeras|3.5]]
- **Módulo 5:** [[05.02 - SCPs e Politicas de Organizacao|5.2]]
- **Módulo 8:** [[08 - Criptografia e Protecao de Dados|nota do módulo]], [[08.01 - Por que Criptografar e os Fundamentos|8.1]], [[08.06 - Criptografia em Repouso nos Servicos AWS|8.6]], [[08.07 - Criptografia em Transito ACM e Private CA|8.7]], [[08.09 - Governanca de Dados Object Lock e Macie|8.9]]
- **Módulo 9:** [[09 - EC2 a Fundo|nota do módulo]], [[09.03 - Rede e Disco da Instancia|9.3]]
- **Módulo 10:** [[10 - Armazenamento em Bloco e Arquivos EBS EFS FSx|nota do módulo]], [[10.01 - Bloco Arquivo e Objeto Por Que Existem Tres Tipos|10.1]], [[10.02 - EBS e Instance Store Armazenamento Anexado a Instancia|10.2]], [[10.04 - EBS HDD Multi-Attach e Escolha do Volume|10.4]], [[10.05 - EBS Snapshots Criptografia e Operacao|10.5]], [[10.06 - EFS Arquivos NFS Compartilhados|10.6]], [[10.07 - EFS Performance Throughput e Classes de Armazenamento|10.7]], [[10.08 - FSx for Windows File Server e FSx for Lustre|10.8]], [[10.09 - FSx for NetApp ONTAP e FSx for OpenZFS|10.9]], [[10.10 - Escolhendo o Armazenamento|10.10]]
- **Módulo 11:** [[11.01 - O Modelo do S3 Buckets Objetos e Durabilidade|11.1]]
- **Módulo 12:** [[12.01 - Escalar Horizontalmente e Aplicacao Stateless|12.1]]
- **Módulo 14:** [[14.01 - Por que NoSQL e Escolha pelo Padrao de Acesso|14.1]]
- **Módulo 15:** [[15 - Desacoplamento Filas Eventos e Workflows|nota do módulo]], [[15.07 - Amazon MQ e AppFlow|15.7]]
- **Módulo 16:** [[16.01 - Serverless e a Anatomia do Lambda|16.1]], [[16.03 - Concorrencia Escala e Cold Start|16.3]], [[16.04 - Lambda em VPC RDS Proxy e Function URLs|16.4]], [[16.05 - Empacotamento Versoes e Custo do Lambda|16.5]]
- **Módulo 17:** [[17.01 - Por que Containers e Como Eles Funcionam|17.1]], [[17.03 - ECS Cluster Task Definition e Service|17.3]], [[17.05 - Capacidade Fargate EC2 e Managed Instances|17.5]], [[17.06 - EKS Kubernetes Gerenciado na AWS|17.6]], [[17.07 - Migrar para Containers e Elastic Beanstalk|17.7]]
- **Módulo 20:** [[20 - Alta Disponibilidade e Recuperacao de Desastres|nota do módulo]], [[20.01 - Disponibilidade em Noves e o Ponto Unico de Falha|20.1]], [[20.02 - Multi-AZ e Multi-Region Servico por Servico|20.2]], [[20.05 - AWS Backup Snapshots e Cofres Imutaveis|20.5]], [[20.06 - Replicacao entre Regioes e Elastic Disaster Recovery|20.6]], [[20.09 - Tornar Aplicacao Legada Resiliente sem Mudar o Codigo|20.9]]
- **Módulo 23:** [[23 - Migracao e Transferencia de Dados|nota do módulo]], [[23.01 - Por que e Como Migrar os 7 Rs e as Fases|23.1]], [[23.05 - DataSync e a Transferencia Online de Arquivos|23.5]], [[23.06 - Transfer Family Transfer Acceleration e Direct Connect na Migracao|23.6]], [[23.07 - Transferencia Offline e a Conta da Rede|23.7]], [[23.08 - Storage Gateway e o Armazenamento Hibrido|23.8]], [[23.10 - Arvore de Decisao do Metodo de Migracao|23.10]]
- **Módulo 24:** [[24.03 - Transcribe Polly e Lex Voz Texto e Conversa|24.3]]
- **Módulo 25:** [[25 - Otimizacao de Custos|nota do módulo]], [[25.07 - S3 Classes Ciclo de Vida e Custo de Objetos|25.7]], [[25.08 - Armazenamento em Bloco Arquivos e Backup Custo|25.8]], [[25.11 - Decisao de Custo na Prova e Revisao|25.11]]
- **Módulo 26:** [[26.01 - O Projeto PropDesk e os Requisitos|26.1]], [[26.05 - Iteracao 4 Custo Otimizado|26.5]], [[26.07 - Plano de DR e Estimativa de Custo|26.7]], [[26.08 - Revisao Well-Architected e Trade-offs|26.8]], [[26.09 - Mudancas de Requisito no Estilo da Prova|26.9]]
- **Módulo 27:** [[27.02 - Tecnica de Resolucao Tempo e Eliminacao|27.2]], [[27.03 - Revisao Final Mapa Requisito Servico e Pares que Confundem|27.3]], [[27.04 - Simulado 1|27.4]], [[27.05 - Simulado 2|27.5]]
