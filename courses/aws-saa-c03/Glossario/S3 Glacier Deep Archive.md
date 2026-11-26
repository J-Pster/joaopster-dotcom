---
aliases:
  - "Deep Archive"
  - "Glacier Deep Archive"
tags:
  - glossario
  - servico
---
# S3 Glacier Deep Archive

Classe de menor custo do S3, para retenção de longo prazo de dados que quase nunca são lidos. Tem duração mínima de 180 dias e recuperação padrão em até 12 horas (em massa, até 48 horas), exigindo restaurar o objeto antes de lê-lo. É a escolha típica para guardar por anos dados exigidos por lei.

> [!example] Exemplo
> Registros fiscais que precisam ser mantidos por 10 anos e quase nunca consultados vão para o Deep Archive por uma fração do custo do Standard.

Veja também: [[Lifecycle Policy]], [[S3]], [[S3 Standard-IA]]

## Onde aparece

- **Módulo 11:** [[11 - Amazon S3 a Fundo|nota do módulo]], [[11.01 - O Modelo do S3 Buckets Objetos e Durabilidade|11.1]], [[11.02 - Classes de Armazenamento do S3 e Glacier|11.2]], [[11.03 - Ciclo de Vida e Custo no S3|11.3]], [[11.06 - Replicacao do S3|11.6]]
- **Módulo 23:** [[23 - Migracao e Transferencia de Dados|nota do módulo]], [[23.05 - DataSync e a Transferencia Online de Arquivos|23.5]], [[23.07 - Transferencia Offline e a Conta da Rede|23.7]], [[23.08 - Storage Gateway e o Armazenamento Hibrido|23.8]]
- **Módulo 25:** [[25.07 - S3 Classes Ciclo de Vida e Custo de Objetos|25.7]], [[25.11 - Decisao de Custo na Prova e Revisao|25.11]]
- **Módulo 26:** [[26.05 - Iteracao 4 Custo Otimizado|26.5]], [[26.06 - Multiconta Governanca e Auditoria|26.6]]
- **Módulo 27:** [[27.03 - Revisao Final Mapa Requisito Servico e Pares que Confundem|27.3]]
