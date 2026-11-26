---
aliases:
  - "confused deputy"
  - "deputado confuso"
  - "problema do confused deputy"
  - "problema do deputado confuso"
tags:
  - glossario
  - seguranca
---
# Confused Deputy

O confused deputy é um problema de segurança em que uma entidade sem permissão induz um serviço ou conta mais privilegiada (o deputado) a agir em seu nome sobre um recurso que não é dela. A defesa é restringir a permissão a quem de fato deve usá-la: `sts:ExternalId` na trust policy em acesso entre contas de terceiros, e as condições `aws:SourceArn` e `aws:SourceAccount` na resource policy em acesso entre serviços. A prova o cobra em cenários de bucket policy com CloudFront ou CloudTrail e de roles assumidas por terceiros.

> [!example] Exemplo
> Outro cliente do CloudFront aponta a distribuição dele para o seu bucket. A condição `AWS:SourceArn` na bucket policy permite só a sua distribuição.

Veja também: [[CloudFront]], [[Condition Key]], [[External ID]], [[IAM Role]], [[Origin Access Control]], [[Resource-Based Policy]], [[Trust Policy]]

## Onde aparece

- **Módulo 4:** [[04 - IAM Identidade e Acesso|nota do módulo]], [[04.04 - Conditions e Condition Keys|4.4]], [[04.06 - Roles e STS Credenciais Temporarias|4.6]], [[04.07 - Acesso entre Contas Resource Policies e Confused Deputy|4.7]]
- **Módulo 5:** [[05.07 - RAM e Compartilhamento entre Contas|5.7]]
- **Módulo 15:** [[15.04 - SNS Topicos Fan-out e Filtros|15.4]]
- **Módulo 18:** [[18.03 - Origens OAC Failover e Origin Shield|18.3]]
- **Módulo 27:** [[27.04 - Simulado 1|27.4]]
