---
tags:
  - glossario
  - seguranca
---
# DSSE-KMS

Criptografia no lado do servidor do S3 com KMS em duas camadas independentes, pensada para exigências de conformidade que pedem criptografia dupla. Usa uma KMS key e aplica duas rodadas de cifragem ao objeto. Não é compatível com S3 Bucket Keys.

> [!example] Exemplo
> Uma organização com exigência de camada dupla ativa DSSE-KMS no bucket de dados sigilosos.

Veja também: [[S3 Bucket Keys]], [[SSE-KMS]], [[SSE-S3]]

## Onde aparece

- **Módulo 8:** [[08 - Criptografia e Protecao de Dados|nota do módulo]], [[08.06 - Criptografia em Repouso nos Servicos AWS|8.6]]
- **Módulo 11:** [[11 - Amazon S3 a Fundo|nota do módulo]], [[11.02 - Classes de Armazenamento do S3 e Glacier|11.2]], [[11.05 - Criptografia Versionamento e Retencao no S3|11.5]], [[11.06 - Replicacao do S3|11.6]]
- **Módulo 21:** [[21.03 - CloudWatch Logs e o Agente|21.3]]
