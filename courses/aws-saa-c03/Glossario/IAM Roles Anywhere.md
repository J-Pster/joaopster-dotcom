---
aliases:
  - "Roles Anywhere"
  - "roles anywhere"
tags:
  - glossario
  - seguranca
---
# IAM Roles Anywhere

Recurso que permite a cargas de trabalho fora da AWS (servidores on-premises, outras nuvens) obter credenciais temporárias de uma role usando um certificado X.509 emitido pela PKI da empresa. Elimina a necessidade de chaves de acesso de longo prazo nesses ambientes.

> [!example] Exemplo
> Um servidor no data center apresenta seu certificado e assume uma role que permite gravar backups no S3.

Veja também: [[Access Key]], [[Credencial Temporaria]], [[IAM Role]], [[STS]]

## Onde aparece

- **Módulo 4:** [[04.02 - Usuarios Grupos Credenciais e MFA|4.2]], [[04.07 - Acesso entre Contas Resource Policies e Confused Deputy|4.7]]
- **Módulo 19:** [[19.08 - Credenciais da Aplicacao e Decisao Final|19.8]]
