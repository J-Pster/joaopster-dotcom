---
aliases:
  - "Menor Privilégio"
  - "least privilege"
  - "menor privilegio"
  - "menor privilégio"
  - "privilégio mínimo"
tags:
  - glossario
  - conceito
---
# Menor Privilégio

Menor privilégio é o princípio de conceder a cada pessoa ou serviço apenas as permissões necessárias para a tarefa, e nada além. Reduz o dano de erros e de credenciais ou instâncias comprometidas, e faz parte do princípio Implement a strong identity foundation do pilar de segurança do Well-Architected. Em rede, significa abrir só a porta e a origem exatas.

> [!example] Exemplo
> Uma função Lambda recebe permissão de leitura em um único bucket, e o banco aceita só a porta 5432 vinda do security group da aplicação.

Veja também: [[Defesa em Profundidade]], [[Raio de Impacto]], [[SCP]], [[Security Group]]

## Onde aparece

- **Módulo 1:** [[01.07 - A Conta AWS como Fronteira|1.7]]
- **Módulo 2:** [[02 - Well-Architected e o Formato da Prova|nota do módulo]], [[02.02 - Excelencia Operacional e Seguranca|2.2]], [[02.04 - Custos Sustentabilidade e Tensoes entre Pilares|2.4]], [[02.06 - Dominios Pesos e o Mapa para os Pilares|2.6]], [[02.07 - Anatomia de uma Questao|2.7]], [[02.08 - Principios das Respostas Certas e Plano de Estudo|2.8]]
- **Módulo 3:** [[03 - Fundamentos de Redes para a Nuvem|nota do módulo]], [[03.05 - Firewalls Portas e Portas Efemeras|3.5]]
- **Módulo 4:** [[04 - IAM Identidade e Acesso|nota do módulo]], [[04.01 - Por que IAM Autenticacao Autorizacao e Principals|4.1]], [[04.02 - Usuarios Grupos Credenciais e MFA|4.2]], [[04.03 - Anatomia de uma Policy IAM|4.3]], [[04.06 - Roles e STS Credenciais Temporarias|4.6]], [[04.07 - Acesso entre Contas Resource Policies e Confused Deputy|4.7]], [[04.08 - Guardrails e Menor Privilegio na Pratica|4.8]]
- **Módulo 5:** [[05.01 - Por que Varias Contas e Como o Organizations Organiza|5.1]], [[05.04 - Control Tower e Landing Zone|5.4]], [[05.05 - IAM Identity Center|5.5]], [[05.07 - RAM e Compartilhamento entre Contas|5.7]]
- **Módulo 6:** [[06.03 - Route Tables Internet Gateway e IPs Publicos|6.3]], [[06.05 - Security Groups|6.5]], [[06.06 - Network ACLs e Defesa em Camadas|6.6]], [[06.07 - Acesso Administrativo sem Expor Portas|6.7]]
- **Módulo 8:** [[08.03 - KMS Key Policy IAM e Grants|8.3]]
- **Módulo 9:** [[09.03 - Rede e Disco da Instancia|9.3]]
- **Módulo 11:** [[11.04 - Controle de Acesso e Rede no S3|11.4]]
- **Módulo 16:** [[16.01 - Serverless e a Anatomia do Lambda|16.1]]
- **Módulo 17:** [[17.02 - ECR Repositorio de Imagens|17.2]], [[17.03 - ECS Cluster Task Definition e Service|17.3]], [[17.06 - EKS Kubernetes Gerenciado na AWS|17.6]]
- **Módulo 19:** [[19 - Seguranca de Aplicacoes e Deteccao de Ameacas|nota do módulo]], [[19.08 - Credenciais da Aplicacao e Decisao Final|19.8]]
- **Módulo 21:** [[21.06 - CloudFormation Operacao StackSets Service Catalog e Governanca|21.6]], [[21.08 - Health Trusted Advisor License Manager e Remediacao Automatica|21.8]]
- **Módulo 22:** [[22.06 - AWS Glue Catalogo Crawlers e Jobs de ETL|22.6]], [[22.12 - Seguranca da Ingestao e Decisao Final|22.12]]
- **Módulo 24:** [[24.01 - Por Que Servicos de IA Prontos e Como Escolher pelo Verbo|24.1]], [[24.02 - Texto com Comprehend e Translate|24.2]], [[24.05 - SageMaker AI e Modelo Proprio|24.5]], [[24.06 - Padroes de Arquitetura e Escolha pelo Verbo|24.6]]
- **Módulo 26:** [[26.01 - O Projeto PropDesk e os Requisitos|26.1]], [[26.02 - Iteracao 1 Seguranca em Camadas|26.2]], [[26.08 - Revisao Well-Architected e Trade-offs|26.8]]
- **Módulo 27:** [[27.02 - Tecnica de Resolucao Tempo e Eliminacao|27.2]], [[27.04 - Simulado 1|27.4]], [[27.05 - Simulado 2|27.5]]
