---
aliases:
  - "custom key store"
  - "custom key stores"
tags:
  - glossario
  - seguranca
---
# Custom Key Store

Repositório de chaves do KMS que fica fora do key store padrão: ou um cluster do CloudHSM da sua conta, ou um gerenciador de chaves externo (XKS). Dá controle direto sobre o HSM, mas tem custo e trade-offs: aceita apenas chaves simétricas, não tem rotação automática, importação nem multi-Region, tem menos desempenho e não tem o SLA do key store padrão.

> [!example] Exemplo
> Uma regulação exige que o material de chave fique em um HSM dedicado, e a empresa liga o KMS a um cluster do CloudHSM por meio de um custom key store.

Veja também: [[CloudHSM]], [[HSM]], [[KMS]]

## Onde aparece

- **Módulo 8:** [[08 - Criptografia e Protecao de Dados|nota do módulo]], [[08.01 - Por que Criptografar e os Fundamentos|8.1]], [[08.02 - AWS KMS Chaves e Envelope Encryption|8.2]], [[08.04 - KMS Rotacao Material Importado Multi-Region e Exclusao|8.4]], [[08.05 - CloudHSM e Custom Key Stores|8.5]], [[08.06 - Criptografia em Repouso nos Servicos AWS|8.6]]
- **Módulo 27:** [[27.03 - Revisao Final Mapa Requisito Servico e Pares que Confundem|27.3]]
