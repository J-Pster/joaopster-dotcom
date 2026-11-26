---
aliases:
  - "IAM role"
  - "IAM roles"
  - "role"
  - "role IAM"
  - "roles"
  - "roles IAM"
tags:
  - glossario
  - seguranca
---
# IAM Role

Uma IAM role é uma identidade do IAM sem credenciais permanentes, que qualquer principal autorizado (serviço, aplicação, outra conta ou usuário federado) pode assumir para receber credenciais temporárias do STS. Tem dois tipos de policy: a trust policy (quem pode assumir) e as permissions policies (o que pode fazer). É o mecanismo recomendado no lugar de chaves de acesso de longo prazo, e a prova a pede para EC2, Lambda e acesso entre contas.

> [!example] Exemplo
> Instâncias EC2 recebem uma role por instance profile e leem o S3 sem nenhuma chave de acesso gravada em disco.

Veja também: [[AssumeRole]], [[Credencial Temporaria]], [[IAM]], [[Instance Profile]], [[STS]], [[Trust Policy]], [[Usuario Root]]

## Onde aparece

- **Módulo 1:** [[01.06 - Tudo e API Endpoints Quotas e Health|1.6]], [[01.07 - A Conta AWS como Fronteira|1.7]]
- **Módulo 2:** [[02.02 - Excelencia Operacional e Seguranca|2.2]]
- **Módulo 4:** [[04.01 - Por que IAM Autenticacao Autorizacao e Principals|4.1]], [[04.02 - Usuarios Grupos Credenciais e MFA|4.2]], [[04.05 - Logica de Avaliacao de Policies|4.5]], [[04.06 - Roles e STS Credenciais Temporarias|4.6]], [[04.08 - Guardrails e Menor Privilegio na Pratica|4.8]]
- **Módulo 5:** [[05.01 - Por que Varias Contas e Como o Organizations Organiza|5.1]], [[05.02 - SCPs e Politicas de Organizacao|5.2]], [[05.05 - IAM Identity Center|5.5]], [[05.06 - Federacao com IAM e Directory Service|5.6]]
- **Módulo 6:** [[06.07 - Acesso Administrativo sem Expor Portas|6.7]]
- **Módulo 8:** [[08.08 - Secrets Manager e Parameter Store|8.8]]
- **Módulo 9:** [[09 - EC2 a Fundo|nota do módulo]], [[09.04 - Ciclo de Vida User Data e Metadados|9.4]], [[09.08 - AWS Batch e Computacao de Alto Desempenho|9.8]]
- **Módulo 11:** [[11 - Amazon S3 a Fundo|nota do módulo]], [[11.03 - Ciclo de Vida e Custo no S3|11.3]], [[11.04 - Controle de Acesso e Rede no S3|11.4]], [[11.06 - Replicacao do S3|11.6]]
- **Módulo 14:** [[14.02 - DynamoDB Modelo de Dados Chaves e Particoes|14.2]]
- **Módulo 15:** [[15.05 - EventBridge Barramento Regras Scheduler e Pipes|15.5]]
- **Módulo 16:** [[16.01 - Serverless e a Anatomia do Lambda|16.1]], [[16.07 - API Gateway Seguranca Throttling Cache e CORS|16.7]]
- **Módulo 17:** [[17.03 - ECS Cluster Task Definition e Service|17.3]], [[17.06 - EKS Kubernetes Gerenciado na AWS|17.6]], [[17.08 - Escolhendo a Computacao Tabela de Decisao|17.8]]
- **Módulo 19:** [[19.01 - Ameacas Externas e Defesa em Profundidade|19.1]], [[19.07 - Cognito User Pools e Identity Pools|19.7]], [[19.08 - Credenciais da Aplicacao e Decisao Final|19.8]]
- **Módulo 21:** [[21.03 - CloudWatch Logs e o Agente|21.3]]
- **Módulo 22:** [[22.02 - Kinesis Data Streams|22.2]], [[22.12 - Seguranca da Ingestao e Decisao Final|22.12]]
- **Módulo 23:** [[23.05 - DataSync e a Transferencia Online de Arquivos|23.5]]
- **Módulo 24:** [[24.01 - Por Que Servicos de IA Prontos e Como Escolher pelo Verbo|24.1]]
- **Módulo 26:** [[26.06 - Multiconta Governanca e Auditoria|26.6]]
- **Módulo 27:** [[27.03 - Revisao Final Mapa Requisito Servico e Pares que Confundem|27.3]], [[27.04 - Simulado 1|27.4]], [[27.05 - Simulado 2|27.5]]
