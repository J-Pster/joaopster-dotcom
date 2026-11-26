---
aliases:
  - "service link"
tags:
  - glossario
  - rede
---
# Service Link

O service link é a conexão criptografada entre um Outpost e a Região da AWS à qual ele está ancorado, usada para o plano de controle e o gerenciamento. Existe porque o Outpost precisa da Região para ser operado. Pode passar pelo Direct Connect ou pela internet, e conectividade redundante é recomendada.

> [!example] Exemplo
> Um Outpost em uma fábrica usa o service link pelo Direct Connect para falar com a Região.

Veja também: [[Direct Connect]], [[Local Gateway]], [[Outposts]]

## Onde aparece

- **Módulo 23:** [[23 - Migracao e Transferencia de Dados|nota do módulo]], [[23.09 - Outposts e Computacao no Local|23.9]], [[23.10 - Arvore de Decisao do Metodo de Migracao|23.10]]
