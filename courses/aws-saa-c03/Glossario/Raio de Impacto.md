---
aliases:
  - "blast radius"
  - "raio de explosão"
  - "raio de impacto"
tags:
  - glossario
  - conceito
---
# Raio de Impacto

Raio de impacto é o tamanho do estrago possível quando algo dá errado, seja um erro humano, uma credencial vazada ou uma falha de implantação. Dividir a infraestrutura em contas, Regiões, células e componentes independentes, com permissões estreitas, reduz o raio de impacto, porque o problema fica contido numa parte. É o argumento central para usar várias contas na AWS e para implantações graduais como canary.

> [!example] Exemplo
> Se a conta de desenvolvimento for comprometida, o invasor não alcança os bancos de produção, que vivem em outra conta.

Veja também: [[Conta AWS]], [[Defesa em Profundidade]], [[Menor Privilegio]], [[Ponto Unico de Falha]]

## Onde aparece

- **Módulo 1:** [[01.07 - A Conta AWS como Fronteira|1.7]]
- **Módulo 2:** [[02.02 - Excelencia Operacional e Seguranca|2.2]], [[02.03 - Confiabilidade e Eficiencia de Desempenho|2.3]]
- **Módulo 5:** [[05 - Multiconta Governanca e Federacao|nota do módulo]], [[05.01 - Por que Varias Contas e Como o Organizations Organiza|5.1]], [[05.07 - RAM e Compartilhamento entre Contas|5.7]]
- **Módulo 6:** [[06.02 - Sub-redes e Arquitetura em Camadas|6.2]]
- **Módulo 19:** [[19.01 - Ameacas Externas e Defesa em Profundidade|19.1]], [[19.06 - Inspector Detective e Security Hub|19.6]]
- **Módulo 20:** [[20.01 - Disponibilidade em Noves e o Ponto Unico de Falha|20.1]], [[20.08 - Padroes de Resiliencia Imutabilidade Retry e Degradacao|20.8]]
- **Módulo 26:** [[26.02 - Iteracao 1 Seguranca em Camadas|26.2]], [[26.06 - Multiconta Governanca e Auditoria|26.6]]
