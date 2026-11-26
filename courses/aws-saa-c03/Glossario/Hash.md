---
aliases:
  - "função hash"
  - "hash"
  - "hashing"
tags:
  - glossario
  - conceito
---
# Hash

Função que transforma qualquer entrada em uma saída de tamanho fixo e que não pode ser revertida para recuperar o dado original. Serve para verificar integridade e para guardar senhas, não para cifrar dados que precisam ser lidos depois. Qualquer mudança na entrada muda totalmente o resultado.

> [!example] Exemplo
> Dois arquivos com o mesmo hash SHA-256 são idênticos; se um byte mudar, o hash muda por completo.

Veja também: [[Chave Assimetrica]], [[Chave Simetrica]], [[KMS]]

## Onde aparece

- **Módulo 5:** [[05.08 - CloudTrail e a Trilha de Auditoria|5.8]]
- **Módulo 8:** [[08 - Criptografia e Protecao de Dados|nota do módulo]], [[08.01 - Por que Criptografar e os Fundamentos|8.1]]
- **Módulo 11:** [[11.07 - Desempenho e Transferencia de Dados no S3|11.7]]
- **Módulo 12:** [[12.02 - A Familia Elastic Load Balancing|12.2]], [[12.04 - Network Load Balancer e Gateway Load Balancer|12.4]], [[12.05 - Target Groups Health Checks e Cross-Zone|12.5]]
- **Módulo 14:** [[14 - DynamoDB Cache e Bancos de Proposito Especifico|nota do módulo]], [[14.01 - Por que NoSQL e Escolha pelo Padrao de Acesso|14.1]], [[14.02 - DynamoDB Modelo de Dados Chaves e Particoes|14.2]]
- **Módulo 15:** [[15.03 - SQS FIFO e Padroes de Consumo|15.3]], [[15.04 - SNS Topicos Fan-out e Filtros|15.4]]
- **Módulo 17:** [[17.01 - Por que Containers e Como Eles Funcionam|17.1]], [[17.02 - ECR Repositorio de Imagens|17.2]]
- **Módulo 18:** [[18 - Borda e DNS CloudFront Global Accelerator e Route 53|nota do módulo]], [[18.02 - Cache Behaviors Cache Key TTL e Invalidacao|18.2]]
- **Módulo 19:** [[19.07 - Cognito User Pools e Identity Pools|19.7]]
- **Módulo 22:** [[22.02 - Kinesis Data Streams|22.2]]
- **Módulo 26:** [[26.04 - Iteracao 3 Desempenho e Elasticidade|26.4]]
