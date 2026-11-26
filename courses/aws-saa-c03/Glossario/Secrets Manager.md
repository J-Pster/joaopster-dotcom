---
aliases:
  - "AWS Secrets Manager"
tags:
  - glossario
  - seguranca
---
# Secrets Manager

O AWS Secrets Manager é o serviço que guarda segredos como senhas, chaves de API e strings de conexão, cifrados com o KMS e com acesso controlado por IAM, e os rotaciona automaticamente por meio de uma função Lambda. Evita deixar credenciais no código ou em variáveis de ambiente. Cobra por segredo e por chamada de API, suporta valores de até 64 KB e replica segredos entre Regiões; a rotação nativa, inclusive para RDS, é o que o diferencia do Parameter Store.

> [!example] Exemplo
> A senha do banco RDS fica no Secrets Manager e é trocada a cada 30 dias sem alterar o código da aplicação.

Veja também: [[Credencial Temporaria]], [[Customer Managed Key]], [[IAM Role]], [[KMS]], [[Parameter Store]]

## Onde aparece

- **Módulo 2:** [[02.06 - Dominios Pesos e o Mapa para os Pilares|2.6]]
- **Módulo 4:** [[04.02 - Usuarios Grupos Credenciais e MFA|4.2]], [[04.06 - Roles e STS Credenciais Temporarias|4.6]]
- **Módulo 6:** [[06 - VPC a Fundo|nota do módulo]], [[06.09 - Interface Endpoints PrivateLink e Endpoint Policies|6.9]]
- **Módulo 7:** [[07.04 - PrivateLink e Endpoint Services|7.4]], [[07.06 - Direct Connect|7.6]]
- **Módulo 8:** [[08 - Criptografia e Protecao de Dados|nota do módulo]], [[08.02 - AWS KMS Chaves e Envelope Encryption|8.2]], [[08.05 - CloudHSM e Custom Key Stores|8.5]], [[08.07 - Criptografia em Transito ACM e Private CA|8.7]], [[08.08 - Secrets Manager e Parameter Store|8.8]]
- **Módulo 9:** [[09.04 - Ciclo de Vida User Data e Metadados|9.4]]
- **Módulo 13:** [[13 - Bancos Relacionais RDS e Aurora|nota do módulo]], [[13.02 - RDS Instancias Classes e Armazenamento|13.2]], [[13.05 - RDS Backups PITR Snapshots Criptografia e Seguranca|13.5]], [[13.06 - RDS Proxy e Gestao de Conexoes|13.6]], [[13.09 - Padroes de Arquitetura Escolha e Custo|13.9]]
- **Módulo 16:** [[16.01 - Serverless e a Anatomia do Lambda|16.1]], [[16.04 - Lambda em VPC RDS Proxy e Function URLs|16.4]], [[16.05 - Empacotamento Versoes e Custo do Lambda|16.5]]
- **Módulo 17:** [[17.02 - ECR Repositorio de Imagens|17.2]], [[17.03 - ECS Cluster Task Definition e Service|17.3]], [[17.07 - Migrar para Containers e Elastic Beanstalk|17.7]]
- **Módulo 18:** [[18.03 - Origens OAC Failover e Origin Shield|18.3]], [[18.04 - Seguranca do Viewer HTTPS Assinaturas e WAF|18.4]]
- **Módulo 19:** [[19 - Seguranca de Aplicacoes e Deteccao de Ameacas|nota do módulo]], [[19.01 - Ameacas Externas e Defesa em Profundidade|19.1]], [[19.08 - Credenciais da Aplicacao e Decisao Final|19.8]]
- **Módulo 21:** [[21 - Observabilidade Automacao e Operacoes|nota do módulo]], [[21.05 - CloudFormation Stacks Templates e Change Sets|21.5]], [[21.07 - Systems Manager Gerencia Remota e Parametros|21.7]]
- **Módulo 23:** [[23.04 - Conversao de Esquemas e Escolha do Caminho para Bancos|23.4]]
- **Módulo 26:** [[26 - Projeto Pratico - Arquitetura de Referencia|nota do módulo]], [[26.01 - O Projeto PropDesk e os Requisitos|26.1]], [[26.02 - Iteracao 1 Seguranca em Camadas|26.2]], [[26.05 - Iteracao 4 Custo Otimizado|26.5]], [[26.07 - Plano de DR e Estimativa de Custo|26.7]], [[26.08 - Revisao Well-Architected e Trade-offs|26.8]]
- **Módulo 27:** [[27.02 - Tecnica de Resolucao Tempo e Eliminacao|27.2]], [[27.03 - Revisao Final Mapa Requisito Servico e Pares que Confundem|27.3]], [[27.04 - Simulado 1|27.4]], [[27.05 - Simulado 2|27.5]]
