---
aliases:
  - "ciclo de vida do S3"
  - "lifecycle rule"
  - "política de ciclo de vida"
  - "regra de ciclo de vida"
  - "regras de ciclo de vida"
tags:
  - glossario
  - custo
---
# Lifecycle Policy

Lifecycle policy é um conjunto de regras do S3 que transiciona objetos para classes mais baratas ou os expira automaticamente conforme a idade, um prefixo, tags ou o tamanho. Cada bucket aceita até 1.000 regras. As ações incluem transição, expiração, tratamento de versões não correntes e aborto de multipart upload incompleto.

> [!example] Exemplo
> Uma regra move o prefixo logs/ para Standard-IA aos 30 dias, para Glacier aos 90 e apaga aos 365.

Veja também: [[Multipart Upload]], [[S3 Intelligent-Tiering]], [[Storage Class]], [[Versionamento]]

## Onde aparece

- **Módulo 5:** [[05.09 - AWS Config e Conformidade Continua|5.9]]
- **Módulo 8:** [[08.09 - Governanca de Dados Object Lock e Macie|8.9]]
- **Módulo 11:** [[11.01 - O Modelo do S3 Buckets Objetos e Durabilidade|11.1]], [[11.02 - Classes de Armazenamento do S3 e Glacier|11.2]], [[11.03 - Ciclo de Vida e Custo no S3|11.3]], [[11.07 - Desempenho e Transferencia de Dados no S3|11.7]], [[11.08 - Eventos Site Estatico e Gestao em Escala no S3|11.8]]
- **Módulo 16:** [[16.02 - Como o Lambda e Invocado e Como Trata Erros|16.2]]
- **Módulo 17:** [[17.02 - ECR Repositorio de Imagens|17.2]]
- **Módulo 21:** [[21.03 - CloudWatch Logs e o Agente|21.3]]
- **Módulo 23:** [[23.07 - Transferencia Offline e a Conta da Rede|23.7]], [[23.08 - Storage Gateway e o Armazenamento Hibrido|23.8]]
- **Módulo 24:** [[24.06 - Padroes de Arquitetura e Escolha pelo Verbo|24.6]]
- **Módulo 25:** [[25 - Otimizacao de Custos|nota do módulo]], [[25.07 - S3 Classes Ciclo de Vida e Custo de Objetos|25.7]], [[25.08 - Armazenamento em Bloco Arquivos e Backup Custo|25.8]]
- **Módulo 26:** [[26 - Projeto Pratico - Arquitetura de Referencia|nota do módulo]], [[26.05 - Iteracao 4 Custo Otimizado|26.5]], [[26.06 - Multiconta Governanca e Auditoria|26.6]]
- **Módulo 27:** [[27.02 - Tecnica de Resolucao Tempo e Eliminacao|27.2]], [[27.03 - Revisao Final Mapa Requisito Servico e Pares que Confundem|27.3]]
