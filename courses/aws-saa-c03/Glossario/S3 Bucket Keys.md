---
aliases:
  - "Bucket Key"
  - "Bucket Keys"
  - "S3 Bucket Key"
tags:
  - glossario
  - custo
---
# S3 Bucket Keys

O S3 Bucket Keys é o recurso do S3 que gera uma chave de nível de bucket, derivada de uma KMS key, para criar as chaves de dados dos objetos, reduzindo em até 99% as chamadas ao KMS em buckets com SSE-KMS. Corta o custo e o risco de atingir a cota de requisições do KMS em buckets com muitos objetos. Não é compatível com DSSE-KMS.

> [!example] Exemplo
> Um bucket com milhões de objetos cifrados com SSE-KMS ativa Bucket Keys e vê a conta de requisições do KMS cair drasticamente.

Veja também: [[Customer Managed Key]], [[DSSE-KMS]], [[KMS]], [[SSE-KMS]]

## Onde aparece

- **Módulo 8:** [[08 - Criptografia e Protecao de Dados|nota do módulo]], [[08.02 - AWS KMS Chaves e Envelope Encryption|8.2]], [[08.06 - Criptografia em Repouso nos Servicos AWS|8.6]]
- **Módulo 11:** [[11 - Amazon S3 a Fundo|nota do módulo]], [[11.05 - Criptografia Versionamento e Retencao no S3|11.5]], [[11.07 - Desempenho e Transferencia de Dados no S3|11.7]]
- **Módulo 26:** [[26.02 - Iteracao 1 Seguranca em Camadas|26.2]], [[26.05 - Iteracao 4 Custo Otimizado|26.5]], [[26.09 - Mudancas de Requisito no Estilo da Prova|26.9]]
- **Módulo 27:** [[27.03 - Revisao Final Mapa Requisito Servico e Pares que Confundem|27.3]], [[27.05 - Simulado 2|27.5]]
