---
aliases:
  - "PKCS#11"
tags:
  - glossario
  - seguranca
---
# PKCS 11

Padrão de API para módulos de criptografia, suportado pelo CloudHSM junto com JCE e CNG. Permite que aplicações usem o HSM por bibliotecas padrão do mercado.

> [!example] Exemplo
> Uma aplicação que assina com PKCS#11 aponta para o cluster do CloudHSM em vez de guardar a chave em disco.

Veja também: [[CloudHSM]], [[HSM]]

## Onde aparece

- **Módulo 8:** [[08.05 - CloudHSM e Custom Key Stores|8.5]]
- **Módulo 27:** [[27.05 - Simulado 2|27.5]]
