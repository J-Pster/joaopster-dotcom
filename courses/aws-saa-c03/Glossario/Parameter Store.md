---
aliases:
  - "SSM Parameter Store"
  - "Systems Manager Parameter Store"
tags:
  - glossario
  - servico
---
# Parameter Store

Capacidade do Systems Manager que guarda configuração e segredos em uma hierarquia de caminhos, com permissões por caminho no IAM. O tier Standard é gratuito, com até 10.000 parâmetros de 4 KB, e o Advanced é pago, com 100.000 parâmetros de 8 KB. Não tem rotação automática nativa de segredos.

> [!example] Exemplo
> A URL da API e o nome da fila ficam em /prod/api/url e /prod/fila, lidos pela aplicação em tempo de execução.

Veja também: [[KMS]], [[Secrets Manager]], [[SecureString]]

## Onde aparece

- **Módulo 8:** [[08 - Criptografia e Protecao de Dados|nota do módulo]], [[08.08 - Secrets Manager e Parameter Store|8.8]]
- **Módulo 9:** [[09.04 - Ciclo de Vida User Data e Metadados|9.4]]
- **Módulo 13:** [[13.05 - RDS Backups PITR Snapshots Criptografia e Seguranca|13.5]]
- **Módulo 16:** [[16.01 - Serverless e a Anatomia do Lambda|16.1]], [[16.05 - Empacotamento Versoes e Custo do Lambda|16.5]]
- **Módulo 17:** [[17.03 - ECS Cluster Task Definition e Service|17.3]], [[17.07 - Migrar para Containers e Elastic Beanstalk|17.7]]
- **Módulo 19:** [[19 - Seguranca de Aplicacoes e Deteccao de Ameacas|nota do módulo]], [[19.08 - Credenciais da Aplicacao e Decisao Final|19.8]]
- **Módulo 21:** [[21 - Observabilidade Automacao e Operacoes|nota do módulo]], [[21.03 - CloudWatch Logs e o Agente|21.3]], [[21.05 - CloudFormation Stacks Templates e Change Sets|21.5]], [[21.07 - Systems Manager Gerencia Remota e Parametros|21.7]]
- **Módulo 26:** [[26.02 - Iteracao 1 Seguranca em Camadas|26.2]], [[26.08 - Revisao Well-Architected e Trade-offs|26.8]]
- **Módulo 27:** [[27.02 - Tecnica de Resolucao Tempo e Eliminacao|27.2]], [[27.03 - Revisao Final Mapa Requisito Servico e Pares que Confundem|27.3]], [[27.04 - Simulado 1|27.4]], [[27.05 - Simulado 2|27.5]]
