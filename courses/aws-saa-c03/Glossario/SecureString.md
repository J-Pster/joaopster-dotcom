---
tags:
  - glossario
  - dados
---
# SecureString

Tipo de parâmetro do Parameter Store cujo valor é cifrado com o KMS, por padrão pela chave aws/ssm ou por uma chave gerenciada pelo cliente. Só retorna o valor em texto claro quando a leitura pede decifragem e o chamador tem permissão na chave. É a opção de menor custo para segredos estáticos.

> [!example] Exemplo
> A chave de API de um parceiro é salva como SecureString e a função Lambda a lê com decifragem usando a permissão kms:Decrypt.

Veja também: [[KMS]], [[Parameter Store]], [[Secrets Manager]]

## Onde aparece

- **Módulo 8:** [[08.08 - Secrets Manager e Parameter Store|8.8]]
- **Módulo 19:** [[19.08 - Credenciais da Aplicacao e Decisao Final|19.8]]
- **Módulo 26:** [[26.02 - Iteracao 1 Seguranca em Camadas|26.2]], [[26.08 - Revisao Well-Architected e Trade-offs|26.8]]
- **Módulo 27:** [[27.03 - Revisao Final Mapa Requisito Servico e Pares que Confundem|27.3]], [[27.05 - Simulado 2|27.5]]
