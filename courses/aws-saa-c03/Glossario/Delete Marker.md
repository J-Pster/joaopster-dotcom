---
aliases:
  - "delete markers"
  - "marcador de exclusão"
tags:
  - glossario
  - dados
---
# Delete Marker

Delete marker é a versão especial que o S3 cria quando você apaga um objeto em um bucket com versionamento: o objeto deixa de aparecer, mas as versões anteriores continuam guardadas e cobradas. Remover o delete marker restaura o objeto. Por padrão, delete markers não são replicados.

> [!example] Exemplo
> Ao apagar relatorio.pdf, o S3 insere um delete marker; apagá-lo faz o relatório voltar.

Veja também: [[Lifecycle Policy]], [[Replicacao do S3]], [[Versionamento]]

## Onde aparece

- **Módulo 8:** [[08.09 - Governanca de Dados Object Lock e Macie|8.9]]
- **Módulo 11:** [[11 - Amazon S3 a Fundo|nota do módulo]], [[11.03 - Ciclo de Vida e Custo no S3|11.3]], [[11.05 - Criptografia Versionamento e Retencao no S3|11.5]], [[11.06 - Replicacao do S3|11.6]], [[11.08 - Eventos Site Estatico e Gestao em Escala no S3|11.8]]
- **Módulo 20:** [[20.06 - Replicacao entre Regioes e Elastic Disaster Recovery|20.6]]
- **Módulo 26:** [[26.03 - Iteracao 2 Resiliencia e Desacoplamento|26.3]]
