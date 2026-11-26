---
aliases:
  - "Amazon Cognito"
  - "Cognito identity pool"
tags:
  - glossario
  - seguranca
---
# Cognito

Serviço de identidade para aplicações web e móveis. Os user pools cadastram e autenticam usuários consumidores e emitem tokens JWT; os identity pools trocam tokens (do Cognito ou de outros provedores) por credenciais temporárias da AWS. Evita criar usuários IAM para os consumidores do app.

> [!example] Exemplo
> Um app móvel autentica no user pool e usa o identity pool para obter credenciais que permitem enviar fotos ao S3.

Veja também: [[Federacao]], [[IAM Role]], [[OIDC]], [[STS]]

## Onde aparece

- **Módulo 2:** [[02.06 - Dominios Pesos e o Mapa para os Pilares|2.6]]
- **Módulo 3:** [[03.01 - Por que Redes Pesam e as Camadas de Rede|3.1]], [[03.07 - TLS HTTPS e Certificados|3.7]]
- **Módulo 4:** [[04.06 - Roles e STS Credenciais Temporarias|4.6]], [[04.07 - Acesso entre Contas Resource Policies e Confused Deputy|4.7]]
- **Módulo 5:** [[05 - Multiconta Governanca e Federacao|nota do módulo]], [[05.02 - SCPs e Politicas de Organizacao|5.2]], [[05.05 - IAM Identity Center|5.5]], [[05.06 - Federacao com IAM e Directory Service|5.6]]
- **Módulo 12:** [[12.02 - A Familia Elastic Load Balancing|12.2]], [[12.03 - Application Load Balancer a Fundo|12.3]]
- **Módulo 14:** [[14.02 - DynamoDB Modelo de Dados Chaves e Particoes|14.2]], [[14.09 - Decisao Qual Banco para Qual Requisito|14.9]]
- **Módulo 16:** [[16 - Serverless Lambda e API Gateway|nota do módulo]], [[16.04 - Lambda em VPC RDS Proxy e Function URLs|16.4]], [[16.06 - API Gateway Tipos Endpoints e Integracoes|16.6]], [[16.07 - API Gateway Seguranca Throttling Cache e CORS|16.7]], [[16.08 - Padroes Serverless e Ferramentas de Front-end|16.8]]
- **Módulo 19:** [[19 - Seguranca de Aplicacoes e Deteccao de Ameacas|nota do módulo]], [[19.01 - Ameacas Externas e Defesa em Profundidade|19.1]], [[19.03 - WAF Web ACLs Regras e Onde Associar|19.3]], [[19.05 - GuardDuty e Deteccao de Ameacas|19.5]], [[19.06 - Inspector Detective e Security Hub|19.6]], [[19.07 - Cognito User Pools e Identity Pools|19.7]], [[19.08 - Credenciais da Aplicacao e Decisao Final|19.8]]
- **Módulo 22:** [[22.11 - OpenSearch Quick Data Exchange e Servicos Auxiliares|22.11]]
- **Módulo 24:** [[24.01 - Por Que Servicos de IA Prontos e Como Escolher pelo Verbo|24.1]]
- **Módulo 26:** [[26 - Projeto Pratico - Arquitetura de Referencia|nota do módulo]], [[26.01 - O Projeto PropDesk e os Requisitos|26.1]], [[26.02 - Iteracao 1 Seguranca em Camadas|26.2]], [[26.07 - Plano de DR e Estimativa de Custo|26.7]], [[26.08 - Revisao Well-Architected e Trade-offs|26.8]], [[26.09 - Mudancas de Requisito no Estilo da Prova|26.9]]
- **Módulo 27:** [[27 - Estrategia de Prova e Simulados|nota do módulo]], [[27.03 - Revisao Final Mapa Requisito Servico e Pares que Confundem|27.3]], [[27.04 - Simulado 1|27.4]]
