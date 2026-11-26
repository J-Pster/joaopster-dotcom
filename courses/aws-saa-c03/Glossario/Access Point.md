---
aliases:
  - "S3 Access Point"
  - "access points"
  - "ponto de acesso do S3"
tags:
  - glossario
  - seguranca
---
# Access Point

Access point é um endpoint nomeado ligado a um bucket do S3, com política própria, que simplifica o acesso de muitos times ou aplicações a um mesmo conjunto de dados. Cada access point pode ser restrito a uma VPC e a um prefixo. Evita uma bucket policy única, grande e difícil de manter.

> [!example] Exemplo
> O time de análise usa um access point que só lê o prefixo analytics/, e o time de ingestão usa outro que só grava em raw/.

Veja também: [[Bucket Policy]], [[S3]], [[VPC Endpoint]]

## Onde aparece

- **Módulo 8:** [[08.03 - KMS Key Policy IAM e Grants|8.3]]
- **Módulo 10:** [[10 - Armazenamento em Bloco e Arquivos EBS EFS FSx|nota do módulo]], [[10.06 - EFS Arquivos NFS Compartilhados|10.6]], [[10.10 - Escolhendo o Armazenamento|10.10]]
- **Módulo 11:** [[11 - Amazon S3 a Fundo|nota do módulo]], [[11.01 - O Modelo do S3 Buckets Objetos e Durabilidade|11.1]], [[11.04 - Controle de Acesso e Rede no S3|11.4]]
- **Módulo 16:** [[16.04 - Lambda em VPC RDS Proxy e Function URLs|16.4]]
- **Módulo 20:** [[20.06 - Replicacao entre Regioes e Elastic Disaster Recovery|20.6]]
- **Módulo 22:** [[22.12 - Seguranca da Ingestao e Decisao Final|22.12]]
- **Módulo 27:** [[27.04 - Simulado 1|27.4]]
