---
aliases:
  - "Express One Zone"
  - "S3 Express"
tags:
  - glossario
  - dados
---
# S3 Express One Zone

S3 Express One Zone é uma classe do S3 em buckets de diretório, que guarda dados em uma única AZ escolhida por você e entrega latência de um dígito de milissegundo. Usa sessões de autenticação para reduzir a latência da autorização de cada requisição. Serve a cargas de computação, como treinamento de machine learning, colocadas na mesma AZ do bucket.

> [!example] Exemplo
> Um job de treino lê milhões de arquivos pequenos do Express One Zone na mesma AZ das instâncias de GPU.

Veja também: [[S3]], [[Storage Class]], [[Zona de Disponibilidade]]

## Onde aparece

- **Módulo 11:** [[11 - Amazon S3 a Fundo|nota do módulo]], [[11.01 - O Modelo do S3 Buckets Objetos e Durabilidade|11.1]], [[11.02 - Classes de Armazenamento do S3 e Glacier|11.2]], [[11.07 - Desempenho e Transferencia de Dados no S3|11.7]]
- **Módulo 25:** [[25.07 - S3 Classes Ciclo de Vida e Custo de Objetos|25.7]]
