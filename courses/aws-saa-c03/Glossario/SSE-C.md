---
tags:
  - glossario
  - seguranca
---
# SSE-C

Criptografia no lado do servidor do S3 em que o cliente fornece a própria chave em cada requisição e o S3 a usa para cifrar ou decifrar sem guardá-la. Quem perde a chave perde o acesso ao objeto. Desde abril de 2026 vem desabilitada por padrão em buckets novos.

> [!example] Exemplo
> Uma aplicação envia a chave de 256 bits no cabeçalho de cada GET e PUT, e o S3 nunca guarda essa chave.

Veja também: [[Envelope Encryption]], [[SSE-KMS]], [[SSE-S3]]

## Onde aparece

- **Módulo 8:** [[08 - Criptografia e Protecao de Dados|nota do módulo]], [[08.06 - Criptografia em Repouso nos Servicos AWS|8.6]]
- **Módulo 11:** [[11 - Amazon S3 a Fundo|nota do módulo]], [[11.02 - Classes de Armazenamento do S3 e Glacier|11.2]], [[11.05 - Criptografia Versionamento e Retencao no S3|11.5]], [[11.06 - Replicacao do S3|11.6]]
- **Módulo 27:** [[27.03 - Revisao Final Mapa Requisito Servico e Pares que Confundem|27.3]]
