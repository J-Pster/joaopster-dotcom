---
aliases:
  - "HSMs"
  - "Hardware Security Module"
  - "módulo de segurança de hardware"
tags:
  - glossario
  - seguranca
---
# HSM

Dispositivo de hardware físico, resistente a violação, que gera e guarda chaves criptográficas e executa operações de criptografia sem expor a chave em texto claro. É validado por normas como o FIPS 140. O KMS usa HSMs geridos pela AWS, e o CloudHSM entrega HSMs dedicados a um único cliente.

> [!example] Exemplo
> Uma chave guardada dentro de um HSM nunca pode ser lida em texto claro: o HSM recebe os dados, cifra e devolve só o resultado.

Veja também: [[CloudHSM]], [[Custom Key Store]], [[KMS]]

## Onde aparece

- **Módulo 8:** [[08 - Criptografia e Protecao de Dados|nota do módulo]], [[08.01 - Por que Criptografar e os Fundamentos|8.1]], [[08.02 - AWS KMS Chaves e Envelope Encryption|8.2]], [[08.04 - KMS Rotacao Material Importado Multi-Region e Exclusao|8.4]], [[08.05 - CloudHSM e Custom Key Stores|8.5]], [[08.06 - Criptografia em Repouso nos Servicos AWS|8.6]]
- **Módulo 27:** [[27.03 - Revisao Final Mapa Requisito Servico e Pares que Confundem|27.3]], [[27.05 - Simulado 2|27.5]]
