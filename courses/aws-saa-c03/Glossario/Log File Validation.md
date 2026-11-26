---
aliases:
  - "integridade dos arquivos de log"
  - "log file integrity validation"
  - "validação de integridade"
  - "validação de integridade dos logs"
tags:
  - glossario
  - seguranca
---
# Log File Validation

Recurso do CloudTrail que cria um hash de cada arquivo de log e entrega, a cada hora, um arquivo de digest assinado (SHA-256 com RSA). Permite provar que os logs não foram modificados nem apagados depois da entrega. Habilitar só faz o CloudTrail entregar os digests; a validação é feita depois, pela CLI.

> [!example] Exemplo
> Numa investigação, a equipe roda a validação da CLI e confirma que nenhum arquivo do mês foi alterado.

Veja também: [[CloudTrail]], [[Trail]]

## Onde aparece

- **Módulo 2:** [[02.02 - Excelencia Operacional e Seguranca|2.2]]
- **Módulo 5:** [[05 - Multiconta Governanca e Federacao|nota do módulo]], [[05.08 - CloudTrail e a Trilha de Auditoria|5.8]]
- **Módulo 23:** [[23.05 - DataSync e a Transferencia Online de Arquivos|23.5]]
- **Módulo 26:** [[26.06 - Multiconta Governanca e Auditoria|26.6]], [[26.09 - Mudancas de Requisito no Estilo da Prova|26.9]]
- **Módulo 27:** [[27.05 - Simulado 2|27.5]]
