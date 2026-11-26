---
aliases:
  - "IMDS"
  - "IMDSv1"
  - "IMDSv2"
  - "Serviço de metadados"
  - "serviço de metadados da instância"
tags:
  - glossario
  - seguranca
---
# Instance Metadata Service

O Instance Metadata Service (IMDS) é o endereço interno (169.254.169.254) pelo qual uma instância EC2 consulta informações sobre si mesma, como ID, AZ, IPs, user data e as credenciais temporárias da role anexada. No IMDSv1 uma simples requisição GET devolve os dados; no IMDSv2 o cliente precisa primeiro obter um token de sessão com uma requisição PUT e apresentá-lo nas consultas seguintes, o que resiste a SSRF, proxies reversos e firewalls abertos. Para impor o IMDSv2, define-se HttpTokens como required.

> [!example] Exemplo
> Um launch template com HttpTokens igual a required garante que toda instância nova só entregue metadados a quem apresentar o token de sessão.

Veja também: [[EC2]], [[IAM Role]], [[Instance Profile]], [[Launch Template]], [[SSRF]], [[Security Group]], [[User Data]]

## Onde aparece

- **Módulo 3:** [[03.03 - Faixas Privadas Sub-redes e IPv6|3.3]], [[03.05 - Firewalls Portas e Portas Efemeras|3.5]]
- **Módulo 4:** [[04.06 - Roles e STS Credenciais Temporarias|4.6]]
- **Módulo 6:** [[06.05 - Security Groups|6.5]], [[06.06 - Network ACLs e Defesa em Camadas|6.6]], [[06.10 - Flow Logs DNS DHCP IPv6 e Reachability Analyzer|6.10]]
- **Módulo 9:** [[09 - EC2 a Fundo|nota do módulo]], [[09.04 - Ciclo de Vida User Data e Metadados|9.4]], [[09.06 - Spot Dedicated e Capacity Reservations|9.6]]
- **Módulo 19:** [[19 - Seguranca de Aplicacoes e Deteccao de Ameacas|nota do módulo]], [[19.08 - Credenciais da Aplicacao e Decisao Final|19.8]]
