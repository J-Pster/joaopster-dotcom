---
aliases:
  - "criptografia gerenciada pelo S3"
tags:
  - glossario
  - seguranca
---
# SSE-S3

SSE-S3 é a criptografia em repouso padrão do S3: o serviço cifra cada objeto com AES-256 usando chaves que ele mesmo gerencia, sem custo adicional e sem configuração. É aplicada automaticamente a todo objeto novo desde 5 de janeiro de 2023. Não oferece controle da política da chave como o SSE-KMS.

> [!example] Exemplo
> Um objeto enviado sem nenhum cabeçalho de criptografia é gravado cifrado com SSE-S3.

Veja também: [[Criptografia em Repouso]], [[DSSE-KMS]], [[S3]], [[SSE-C]], [[SSE-KMS]]

## Onde aparece

- **Módulo 2:** [[02.02 - Excelencia Operacional e Seguranca|2.2]], [[02.04 - Custos Sustentabilidade e Tensoes entre Pilares|2.4]]
- **Módulo 8:** [[08 - Criptografia e Protecao de Dados|nota do módulo]], [[08.01 - Por que Criptografar e os Fundamentos|8.1]], [[08.02 - AWS KMS Chaves e Envelope Encryption|8.2]], [[08.06 - Criptografia em Repouso nos Servicos AWS|8.6]]
- **Módulo 11:** [[11 - Amazon S3 a Fundo|nota do módulo]], [[11.01 - O Modelo do S3 Buckets Objetos e Durabilidade|11.1]], [[11.02 - Classes de Armazenamento do S3 e Glacier|11.2]], [[11.05 - Criptografia Versionamento e Retencao no S3|11.5]], [[11.06 - Replicacao do S3|11.6]], [[11.07 - Desempenho e Transferencia de Dados no S3|11.7]]
- **Módulo 23:** [[23.08 - Storage Gateway e o Armazenamento Hibrido|23.8]]
- **Módulo 26:** [[26.02 - Iteracao 1 Seguranca em Camadas|26.2]]
- **Módulo 27:** [[27.03 - Revisao Final Mapa Requisito Servico e Pares que Confundem|27.3]], [[27.04 - Simulado 1|27.4]]
