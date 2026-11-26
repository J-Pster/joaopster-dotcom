---
aliases:
  - "autenticação Kerberos"
tags:
  - glossario
  - seguranca
---
# Kerberos

Protocolo de autenticação por tickets usado pelo Active Directory, em que o usuário prova quem é uma vez e recebe tickets para acessar serviços. Evita enviar a senha a cada acesso. É um dos motivos de aplicações Windows exigirem um domínio.

> [!example] Exemplo
> Um usuário do domínio abre um compartilhamento de arquivos sem digitar a senha de novo porque o Kerberos emitiu um ticket para o serviço.

Veja também: [[Active Directory]], [[Directory Service]], [[LDAP]]

## Onde aparece

- **Módulo 3:** [[03.05 - Firewalls Portas e Portas Efemeras|3.5]]
- **Módulo 5:** [[05.06 - Federacao com IAM e Directory Service|5.6]]
- **Módulo 10:** [[10.08 - FSx for Windows File Server e FSx for Lustre|10.8]], [[10.09 - FSx for NetApp ONTAP e FSx for OpenZFS|10.9]]
- **Módulo 13:** [[13.03 - RDS Multi-AZ Instancia e Cluster|13.3]], [[13.05 - RDS Backups PITR Snapshots Criptografia e Seguranca|13.5]]
