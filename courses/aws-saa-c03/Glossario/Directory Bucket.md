---
aliases:
  - "bucket de diretorio"
  - "bucket de diretório"
  - "directory buckets"
tags:
  - glossario
  - servico
---
# Directory Bucket

Directory bucket é o tipo de bucket do S3 usado pela classe S3 Express One Zone: guarda os objetos em uma única AZ escolhida por você, com estrutura hierárquica real de diretórios e autorização por sessões curtas. Entrega latência de um dígito de milissegundo, mas não aceita acesso público e não serve para dado que não pode ser perdido com a AZ.

> [!example] Exemplo
> Um cluster de analytics em uma AZ lê dados de treino de um directory bucket na mesma AZ para obter a menor latência possível.

Veja também: [[S3]], [[S3 Express One Zone]], [[Storage Class]]

## Onde aparece

- **Módulo 11:** [[11.01 - O Modelo do S3 Buckets Objetos e Durabilidade|11.1]], [[11.07 - Desempenho e Transferencia de Dados no S3|11.7]]
- **Módulo 25:** [[25.07 - S3 Classes Ciclo de Vida e Custo de Objetos|25.7]]
