---
aliases:
  - "criptografia em trânsito"
  - "dados em trânsito"
  - "encryption in transit"
tags:
  - glossario
  - seguranca
---
# Criptografia em Transito

Proteção dos dados enquanto atravessam a rede, para impedir captura e adulteração no caminho e para provar a identidade do servidor. Normalmente é feita com TLS, e entre redes com IPsec. Na AWS, certificados do ACM e políticas como aws:SecureTransport ajudam a exigi-la.

> [!example] Exemplo
> O navegador acessa o site por HTTPS: o TLS cifra a sessão com um certificado do ACM instalado no balanceador.

Veja também: [[ACM]], [[Criptografia em Repouso]], [[TLS]]

## Onde aparece

- **Módulo 3:** [[03 - Fundamentos de Redes para a Nuvem|nota do módulo]], [[03.07 - TLS HTTPS e Certificados|3.7]], [[03.08 - Latencia Largura de Banda VPN e BGP|3.8]]
- **Módulo 4:** [[04.04 - Conditions e Condition Keys|4.4]]
- **Módulo 8:** [[08 - Criptografia e Protecao de Dados|nota do módulo]], [[08.01 - Por que Criptografar e os Fundamentos|8.1]], [[08.06 - Criptografia em Repouso nos Servicos AWS|8.6]], [[08.07 - Criptografia em Transito ACM e Private CA|8.7]]
- **Módulo 9:** [[09.01 - Instancia Nitro e AMI|9.1]]
- **Módulo 10:** [[10.05 - EBS Snapshots Criptografia e Operacao|10.5]], [[10.06 - EFS Arquivos NFS Compartilhados|10.6]], [[10.08 - FSx for Windows File Server e FSx for Lustre|10.8]]
- **Módulo 11:** [[11.04 - Controle de Acesso e Rede no S3|11.4]]
- **Módulo 13:** [[13.05 - RDS Backups PITR Snapshots Criptografia e Seguranca|13.5]]
- **Módulo 14:** [[14.05 - DynamoDB Streams TTL Backup e Global Tables|14.5]], [[14.07 - ElastiCache e MemoryDB|14.7]]
- **Módulo 15:** [[15.07 - Amazon MQ e AppFlow|15.7]]
- **Módulo 18:** [[18 - Borda e DNS CloudFront Global Accelerator e Route 53|nota do módulo]], [[18.04 - Seguranca do Viewer HTTPS Assinaturas e WAF|18.4]]
- **Módulo 19:** [[19.01 - Ameacas Externas e Defesa em Profundidade|19.1]], [[19.08 - Credenciais da Aplicacao e Decisao Final|19.8]]
- **Módulo 22:** [[22.12 - Seguranca da Ingestao e Decisao Final|22.12]]
- **Módulo 23:** [[23.05 - DataSync e a Transferencia Online de Arquivos|23.5]], [[23.07 - Transferencia Offline e a Conta da Rede|23.7]]
