---
aliases:
  - "pool de usuários"
  - "user pool"
tags:
  - glossario
  - seguranca
---
# User Pool

O user pool do Amazon Cognito é um diretório de usuários da sua aplicação: cuida de cadastro, login, recuperação de senha e MFA, e emite tokens JWT para os usuários autenticados. O API Gateway pode validar esses tokens diretamente (autorizador Cognito ou JWT), sem código. Não confundir com o identity pool, que troca identidades por credenciais temporárias da AWS.

> [!example] Exemplo
> Um aplicativo móvel autentica o usuário no user pool, recebe um token JWT e o envia em cada chamada à API, que o valida no API Gateway.

Veja também: [[API Gateway]], [[Cognito]], [[Lambda Authorizer]]

## Onde aparece

- **Módulo 5:** [[05.05 - IAM Identity Center|5.5]], [[05.06 - Federacao com IAM e Directory Service|5.6]]
- **Módulo 12:** [[12.03 - Application Load Balancer a Fundo|12.3]]
- **Módulo 16:** [[16.07 - API Gateway Seguranca Throttling Cache e CORS|16.7]]
- **Módulo 19:** [[19 - Seguranca de Aplicacoes e Deteccao de Ameacas|nota do módulo]], [[19.03 - WAF Web ACLs Regras e Onde Associar|19.3]], [[19.07 - Cognito User Pools e Identity Pools|19.7]], [[19.08 - Credenciais da Aplicacao e Decisao Final|19.8]]
- **Módulo 26:** [[26.02 - Iteracao 1 Seguranca em Camadas|26.2]], [[26.07 - Plano de DR e Estimativa de Custo|26.7]], [[26.09 - Mudancas de Requisito no Estilo da Prova|26.9]]
- **Módulo 27:** [[27 - Estrategia de Prova e Simulados|nota do módulo]], [[27.03 - Revisao Final Mapa Requisito Servico e Pares que Confundem|27.3]], [[27.04 - Simulado 1|27.4]], [[27.05 - Simulado 2|27.5]]
