---
aliases:
  - "MRAP"
  - "Multi-Region Access Points"
  - "S3 Multi-Region Access Point"
  - "ponto de acesso multi-Região"
tags:
  - glossario
  - dados
---
# Multi-Region Access Point

O Multi-Region Access Point do S3 é um endpoint global único na frente de buckets em várias Regiões, que roteia cada requisição para o bucket de menor latência pela rede global da AWS (com assinatura SigV4a). Com os controles de failover, cada bucket fica ativo ou passivo, o que dá ativo-passivo ou ativo-ativo sem a aplicação trocar de endpoint. Ele não replica dados sozinho: a prova espera que você combine com a replicação entre Regiões do S3.

> [!example] Exemplo
> Uma aplicação grava no endpoint global e, no desastre, a equipe marca o bucket da Região principal como passivo para deslocar o tráfego.

Veja também: [[Global Accelerator]], [[Regiao AWS]], [[Replicacao do S3]], [[S3]]

## Onde aparece

- **Módulo 1:** [[01.06 - Tudo e API Endpoints Quotas e Health|1.6]]
- **Módulo 11:** [[11 - Amazon S3 a Fundo|nota do módulo]], [[11.06 - Replicacao do S3|11.6]]
- **Módulo 20:** [[20 - Alta Disponibilidade e Recuperacao de Desastres|nota do módulo]], [[20.06 - Replicacao entre Regioes e Elastic Disaster Recovery|20.6]]
