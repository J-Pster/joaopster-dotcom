---
aliases:
  - "S3 Block Public Access"
  - "bloqueio de acesso público"
tags:
  - glossario
  - seguranca
---
# Block Public Access

Block Public Access é um conjunto de quatro travas do S3 que impedem acesso público por ACLs e por bucket policies, e que se aplicam em nível de organização, conta, bucket e access point. Vem ligado em buckets novos. Funciona como uma rede de segurança que vale mesmo quando alguém escreve uma política permissiva por engano.

> [!example] Exemplo
> A conta liga o BPA no nível da conta, e nenhum bucket, novo ou antigo, consegue ser tornado público.

Veja também: [[Bucket Policy]], [[IAM Access Analyzer]], [[Macie]], [[S3]]

## Onde aparece

- **Módulo 4:** [[04 - IAM Identidade e Acesso|nota do módulo]]
- **Módulo 5:** [[05.09 - AWS Config e Conformidade Continua|5.9]]
- **Módulo 6:** [[06.03 - Route Tables Internet Gateway e IPs Publicos|6.3]]
- **Módulo 8:** [[08.06 - Criptografia em Repouso nos Servicos AWS|8.6]], [[08.09 - Governanca de Dados Object Lock e Macie|8.9]]
- **Módulo 11:** [[11 - Amazon S3 a Fundo|nota do módulo]], [[11.01 - O Modelo do S3 Buckets Objetos e Durabilidade|11.1]], [[11.04 - Controle de Acesso e Rede no S3|11.4]], [[11.08 - Eventos Site Estatico e Gestao em Escala no S3|11.8]]
- **Módulo 18:** [[18.03 - Origens OAC Failover e Origin Shield|18.3]], [[18.04 - Seguranca do Viewer HTTPS Assinaturas e WAF|18.4]], [[18.10 - Padroes de Arquitetura e Decisao de Borda e DNS|18.10]]
- **Módulo 22:** [[22.12 - Seguranca da Ingestao e Decisao Final|22.12]]
- **Módulo 26:** [[26.02 - Iteracao 1 Seguranca em Camadas|26.2]]
