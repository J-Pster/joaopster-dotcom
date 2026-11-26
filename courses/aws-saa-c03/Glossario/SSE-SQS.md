---
tags:
  - glossario
  - seguranca
---
# SSE-SQS

Criptografia em repouso gerenciada pelo próprio SQS, sem chave do KMS para o cliente administrar. É a alternativa simples ao SSE-KMS nas filas.

> [!example] Exemplo
> Uma fila nova já nasce cifrada com SSE-SQS, sem custo adicional de KMS.

Veja também: [[KMS]], [[SSE-KMS]]

## Onde aparece

- **Módulo 8:** [[08.06 - Criptografia em Repouso nos Servicos AWS|8.6]]
- **Módulo 15:** [[15.02 - SQS Filas Standard e o Ciclo de Vida da Mensagem|15.2]], [[15.03 - SQS FIFO e Padroes de Consumo|15.3]]
