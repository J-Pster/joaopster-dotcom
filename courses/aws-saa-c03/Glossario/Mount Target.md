---
aliases:
  - "alvo de montagem"
  - "mount targets"
  - "ponto de montagem do EFS"
tags:
  - glossario
  - rede
---
# Mount Target

O mount target é o endpoint de rede, com um endereço IP dentro de uma sub-rede, pelo qual os clientes de uma VPC montam um sistema de arquivos EFS. Há um por AZ, e o nome DNS do sistema de arquivos resolve para o mount target da mesma AZ da instância. Existe para dar acesso NFS dentro da VPC sem tráfego desnecessário entre AZs.

> [!example] Exemplo
> Um EFS usado em três AZs tem três mount targets, cada um com um security group que libera a porta TCP 2049.

Veja também: [[EFS]], [[NFS]], [[Security Group]], [[Zona de Disponibilidade]]

## Onde aparece

- **Módulo 3:** [[03.05 - Firewalls Portas e Portas Efemeras|3.5]]
- **Módulo 8:** [[08.06 - Criptografia em Repouso nos Servicos AWS|8.6]]
- **Módulo 10:** [[10 - Armazenamento em Bloco e Arquivos EBS EFS FSx|nota do módulo]], [[10.06 - EFS Arquivos NFS Compartilhados|10.6]]
- **Módulo 20:** [[20.02 - Multi-AZ e Multi-Region Servico por Servico|20.2]]
