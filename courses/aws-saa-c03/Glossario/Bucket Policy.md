---
aliases:
  - "bucket policies"
  - "política de bucket"
tags:
  - glossario
  - seguranca
---
# Bucket Policy

Bucket policy é uma política de recurso em JSON anexada a um bucket do S3, que diz quem (principal) pode fazer o quê (ação) em quais objetos, e sob quais condições. É o mecanismo principal para acesso entre contas, para exigir TLS e para restringir acesso a um VPC endpoint. Uma negação explícita sempre vence uma permissão.

> [!example] Exemplo
> Uma bucket policy nega qualquer requisição cujo aws:SecureTransport seja false, forçando HTTPS.

Veja também: [[Access Point]], [[Block Public Access]], [[IAM Policy]], [[Resource-Based Policy]]

## Onde aparece

- **Módulo 1:** [[01 - Nuvem e Infraestrutura Global AWS|nota do módulo]], [[01.05 - Modelo de Responsabilidade Compartilhada|1.5]], [[01.07 - A Conta AWS como Fronteira|1.7]]
- **Módulo 2:** [[02.07 - Anatomia de uma Questao|2.7]]
- **Módulo 4:** [[04 - IAM Identidade e Acesso|nota do módulo]], [[04.01 - Por que IAM Autenticacao Autorizacao e Principals|4.1]], [[04.03 - Anatomia de uma Policy IAM|4.3]], [[04.04 - Conditions e Condition Keys|4.4]], [[04.05 - Logica de Avaliacao de Policies|4.5]], [[04.06 - Roles e STS Credenciais Temporarias|4.6]], [[04.07 - Acesso entre Contas Resource Policies e Confused Deputy|4.7]], [[04.08 - Guardrails e Menor Privilegio na Pratica|4.8]]
- **Módulo 5:** [[05.02 - SCPs e Politicas de Organizacao|5.2]], [[05.07 - RAM e Compartilhamento entre Contas|5.7]], [[05.08 - CloudTrail e a Trilha de Auditoria|5.8]]
- **Módulo 6:** [[06.08 - Gateway Endpoints para S3 e DynamoDB|6.8]]
- **Módulo 7:** [[07.04 - PrivateLink e Endpoint Services|7.4]]
- **Módulo 8:** [[08.03 - KMS Key Policy IAM e Grants|8.3]], [[08.06 - Criptografia em Repouso nos Servicos AWS|8.6]], [[08.09 - Governanca de Dados Object Lock e Macie|8.9]]
- **Módulo 10:** [[10.06 - EFS Arquivos NFS Compartilhados|10.6]]
- **Módulo 11:** [[11 - Amazon S3 a Fundo|nota do módulo]], [[11.04 - Controle de Acesso e Rede no S3|11.4]], [[11.05 - Criptografia Versionamento e Retencao no S3|11.5]], [[11.06 - Replicacao do S3|11.6]], [[11.08 - Eventos Site Estatico e Gestao em Escala no S3|11.8]]
- **Módulo 18:** [[18 - Borda e DNS CloudFront Global Accelerator e Route 53|nota do módulo]], [[18.03 - Origens OAC Failover e Origin Shield|18.3]]
- **Módulo 22:** [[22.07 - Amazon Athena Consultas SQL no Lago|22.7]], [[22.08 - Lake Formation Governanca do Data Lake|22.8]], [[22.11 - OpenSearch Quick Data Exchange e Servicos Auxiliares|22.11]], [[22.12 - Seguranca da Ingestao e Decisao Final|22.12]]
- **Módulo 23:** [[23.06 - Transfer Family Transfer Acceleration e Direct Connect na Migracao|23.6]]
- **Módulo 24:** [[24.06 - Padroes de Arquitetura e Escolha pelo Verbo|24.6]]
- **Módulo 26:** [[26.02 - Iteracao 1 Seguranca em Camadas|26.2]], [[26.06 - Multiconta Governanca e Auditoria|26.6]], [[26.09 - Mudancas de Requisito no Estilo da Prova|26.9]]
- **Módulo 27:** [[27 - Estrategia de Prova e Simulados|nota do módulo]], [[27.04 - Simulado 1|27.4]], [[27.05 - Simulado 2|27.5]]
