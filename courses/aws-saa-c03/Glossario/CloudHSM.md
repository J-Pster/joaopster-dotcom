---
aliases:
  - "AWS CloudHSM"
tags:
  - glossario
  - seguranca
---
# CloudHSM

Serviço que fornece HSMs dedicados (locatário único) na nuvem AWS, validados em FIPS 140 nível 3, em clusters de 1 a 28 HSMs, com os usuários e as chaves gerenciados por você fora do IAM. Usa APIs padrão como PKCS#11, JCE e CNG. Tem cobrança por hora por HSM e exige mais operação do que o KMS, por isso só se justifica por exigência regulatória ou de controle.

> [!example] Exemplo
> Um banco precisa guardar a chave privada da sua autoridade certificadora em um HSM dedicado e usa um cluster do CloudHSM em duas AZs.

Veja também: [[Custom Key Store]], [[HSM]], [[KMS]]

## Onde aparece

- **Módulo 2:** [[02.06 - Dominios Pesos e o Mapa para os Pilares|2.6]], [[02.07 - Anatomia de uma Questao|2.7]]
- **Módulo 8:** [[08 - Criptografia e Protecao de Dados|nota do módulo]], [[08.01 - Por que Criptografar e os Fundamentos|8.1]], [[08.02 - AWS KMS Chaves e Envelope Encryption|8.2]], [[08.05 - CloudHSM e Custom Key Stores|8.5]], [[08.06 - Criptografia em Repouso nos Servicos AWS|8.6]]
- **Módulo 27:** [[27.03 - Revisao Final Mapa Requisito Servico e Pares que Confundem|27.3]], [[27.05 - Simulado 2|27.5]]
