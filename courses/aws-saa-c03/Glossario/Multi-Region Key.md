---
aliases:
  - "chave multi-Region"
  - "chaves multi-Region"
  - "multi-Region key"
  - "multi-Region keys"
tags:
  - glossario
  - seguranca
---
# Multi-Region Key

Conjunto de chaves KMS em Regiões diferentes que têm o mesmo ID e o mesmo material de chave, mas são gerenciadas de forma independente em cada Região. Permite cifrar dados em uma Região e decifrá-los em outra sem recifrar. Não se converte uma chave existente nem se cria uma em custom key store, e as AWS managed keys são sempre de uma só Região.

> [!example] Exemplo
> Uma aplicação cifra dados com o AWS Encryption SDK em us-east-1 e os decifra em eu-west-1 com a réplica da mesma chave multi-Region, sem recifrar nem chamar a primeira Região.

Veja também: [[Customer Managed Key]], [[KMS]], [[Regiao AWS]]

## Onde aparece

- **Módulo 1:** [[01.04 - Escopo dos Recursos Global Regional e Zonal|1.4]]
- **Módulo 8:** [[08 - Criptografia e Protecao de Dados|nota do módulo]], [[08.02 - AWS KMS Chaves e Envelope Encryption|8.2]], [[08.04 - KMS Rotacao Material Importado Multi-Region e Exclusao|8.4]], [[08.05 - CloudHSM e Custom Key Stores|8.5]]
- **Módulo 11:** [[11.06 - Replicacao do S3|11.6]]
- **Módulo 26:** [[26.09 - Mudancas de Requisito no Estilo da Prova|26.9]]
- **Módulo 27:** [[27.04 - Simulado 1|27.4]]
