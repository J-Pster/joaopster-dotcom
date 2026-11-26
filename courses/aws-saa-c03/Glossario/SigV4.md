---
aliases:
  - "AWS Signature Version 4"
  - "Signature V4"
  - "Signature Version 4"
tags:
  - glossario
  - seguranca
---
# SigV4

Signature Version 4 (SigV4) é o protocolo da AWS para assinar chamadas de API com credenciais, usando um hash dos dados do pedido e uma chave derivada. Ele existe para que o serviço confirme quem fez o pedido e que ele não foi alterado no caminho. Console, CLI e SDKs assinam suas chamadas assim, e o CloudFront o usa para assinar pedidos ao S3 com o OAC.

> [!example] Exemplo
> O OAC faz o CloudFront assinar cada pedido de objeto ao bucket com SigV4, e a bucket policy aceita só a distribuição certa.

Veja também: [[IAM]], [[Origin Access Control]], [[S3]], [[Throttling]]

## Onde aparece

- **Módulo 1:** [[01 - Nuvem e Infraestrutura Global AWS|nota do módulo]], [[01.06 - Tudo e API Endpoints Quotas e Health|1.6]]
- **Módulo 11:** [[11.01 - O Modelo do S3 Buckets Objetos e Durabilidade|11.1]], [[11.04 - Controle de Acesso e Rede no S3|11.4]]
- **Módulo 13:** [[13.05 - RDS Backups PITR Snapshots Criptografia e Seguranca|13.5]]
- **Módulo 15:** [[15.02 - SQS Filas Standard e o Ciclo de Vida da Mensagem|15.2]]
- **Módulo 16:** [[16.04 - Lambda em VPC RDS Proxy e Function URLs|16.4]], [[16.07 - API Gateway Seguranca Throttling Cache e CORS|16.7]]
- **Módulo 18:** [[18.03 - Origens OAC Failover e Origin Shield|18.3]]
- **Módulo 24:** [[24.01 - Por Que Servicos de IA Prontos e Como Escolher pelo Verbo|24.1]]
