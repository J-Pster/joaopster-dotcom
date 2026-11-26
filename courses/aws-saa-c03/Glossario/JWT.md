---
aliases:
  - "ID token"
  - "JSON Web Token"
  - "access token"
  - "refresh token"
  - "token JWT"
tags:
  - glossario
  - conceito
---
# JWT

O JWT (JSON Web Token) é um token assinado que carrega afirmações sobre o usuário, como identidade, grupos e escopos, e pode ser validado por quem o recebe sem consultar o emissor a cada chamada, bastando conferir a assinatura. O Cognito user pool emite três: ID token (quem é o usuário), access token (o que ele pode acessar) e refresh token (para renovar os outros). Existe para autenticar chamadas de API sem guardar sessão no servidor.

> [!example] Exemplo
> O aplicativo envia o access token no cabeçalho Authorization e o API Gateway, com um authorizer de user pool, valida a assinatura antes de chamar o backend.

Veja também: [[Cognito]], [[Identity Pool]], [[OIDC]], [[User Pool]]

## Onde aparece

- **Módulo 4:** [[04.02 - Usuarios Grupos Credenciais e MFA|4.2]], [[04.06 - Roles e STS Credenciais Temporarias|4.6]], [[04.07 - Acesso entre Contas Resource Policies e Confused Deputy|4.7]]
- **Módulo 5:** [[05.06 - Federacao com IAM e Directory Service|5.6]]
- **Módulo 12:** [[12.01 - Escalar Horizontalmente e Aplicacao Stateless|12.1]], [[12.03 - Application Load Balancer a Fundo|12.3]]
- **Módulo 16:** [[16 - Serverless Lambda e API Gateway|nota do módulo]], [[16.04 - Lambda em VPC RDS Proxy e Function URLs|16.4]], [[16.06 - API Gateway Tipos Endpoints e Integracoes|16.6]], [[16.07 - API Gateway Seguranca Throttling Cache e CORS|16.7]], [[16.08 - Padroes Serverless e Ferramentas de Front-end|16.8]]
- **Módulo 18:** [[18 - Borda e DNS CloudFront Global Accelerator e Route 53|nota do módulo]], [[18.05 - Edge Compute Custo e Planos do CloudFront|18.5]]
- **Módulo 19:** [[19 - Seguranca de Aplicacoes e Deteccao de Ameacas|nota do módulo]], [[19.07 - Cognito User Pools e Identity Pools|19.7]], [[19.08 - Credenciais da Aplicacao e Decisao Final|19.8]]
- **Módulo 25:** [[25.06 - Computacao Rightsizing Graviton e Servicos Gerenciados|25.6]]
- **Módulo 26:** [[26 - Projeto Pratico - Arquitetura de Referencia|nota do módulo]], [[26.01 - O Projeto PropDesk e os Requisitos|26.1]], [[26.02 - Iteracao 1 Seguranca em Camadas|26.2]], [[26.03 - Iteracao 2 Resiliencia e Desacoplamento|26.3]], [[26.04 - Iteracao 3 Desempenho e Elasticidade|26.4]], [[26.09 - Mudancas de Requisito no Estilo da Prova|26.9]]
- **Módulo 27:** [[27.03 - Revisao Final Mapa Requisito Servico e Pares que Confundem|27.3]]
