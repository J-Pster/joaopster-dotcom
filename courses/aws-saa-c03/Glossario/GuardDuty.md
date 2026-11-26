---
aliases:
  - "Amazon GuardDuty"
tags:
  - glossario
  - seguranca
---
# GuardDuty

O Amazon GuardDuty é o serviço gerenciado de detecção de ameaças que analisa continuamente logs como CloudTrail, VPC Flow Logs e DNS para encontrar atividade suspeita, como uso de chaves de acesso vazadas ou comunicação com endereços maliciosos. Ele só detecta e gera achados, que podem acionar respostas automáticas pelo EventBridge; não bloqueia por conta própria nem procura dados sensíveis em buckets, papel do Macie.

> [!example] Exemplo
> O GuardDuty gera um achado quando as credenciais de uma role passam a ser usadas a partir de um país incomum.

Veja também: [[Access Key]], [[CloudTrail]], [[EventBridge]], [[IAM Access Analyzer]], [[Macie]]

## Onde aparece

- **Módulo 2:** [[02.06 - Dominios Pesos e o Mapa para os Pilares|2.6]]
- **Módulo 4:** [[04.01 - Por que IAM Autenticacao Autorizacao e Principals|4.1]]
- **Módulo 5:** [[05.01 - Por que Varias Contas e Como o Organizations Organiza|5.1]], [[05.02 - SCPs e Politicas de Organizacao|5.2]], [[05.08 - CloudTrail e a Trilha de Auditoria|5.8]]
- **Módulo 8:** [[08 - Criptografia e Protecao de Dados|nota do módulo]], [[08.09 - Governanca de Dados Object Lock e Macie|8.9]]
- **Módulo 11:** [[11.08 - Eventos Site Estatico e Gestao em Escala no S3|11.8]]
- **Módulo 16:** [[16.08 - Padroes Serverless e Ferramentas de Front-end|16.8]]
- **Módulo 19:** [[19 - Seguranca de Aplicacoes e Deteccao de Ameacas|nota do módulo]], [[19.01 - Ameacas Externas e Defesa em Profundidade|19.1]], [[19.05 - GuardDuty e Deteccao de Ameacas|19.5]], [[19.06 - Inspector Detective e Security Hub|19.6]], [[19.07 - Cognito User Pools e Identity Pools|19.7]], [[19.08 - Credenciais da Aplicacao e Decisao Final|19.8]]
- **Módulo 21:** [[21.06 - CloudFormation Operacao StackSets Service Catalog e Governanca|21.6]], [[21.08 - Health Trusted Advisor License Manager e Remediacao Automatica|21.8]]
- **Módulo 26:** [[26 - Projeto Pratico - Arquitetura de Referencia|nota do módulo]], [[26.02 - Iteracao 1 Seguranca em Camadas|26.2]], [[26.06 - Multiconta Governanca e Auditoria|26.6]], [[26.07 - Plano de DR e Estimativa de Custo|26.7]], [[26.09 - Mudancas de Requisito no Estilo da Prova|26.9]]
- **Módulo 27:** [[27 - Estrategia de Prova e Simulados|nota do módulo]], [[27.03 - Revisao Final Mapa Requisito Servico e Pares que Confundem|27.3]], [[27.04 - Simulado 1|27.4]], [[27.05 - Simulado 2|27.5]]
