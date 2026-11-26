---
aliases:
  - "analisador de alcançabilidade"
tags:
  - glossario
  - servico
---
# Reachability Analyzer

O Reachability Analyzer analisa a configuração da rede entre uma origem e um destino e mostra o caminho salto a salto, ou aponta o componente que bloqueia (security group, NACL, rota). Não envia pacotes, e é cobrado por análise. Serve para diagnosticar e validar a intenção de conectividade antes e depois de mudanças.

> [!example] Exemplo
> Antes de alterar uma rota, o engenheiro confirma que o app ainda alcança o banco.

Veja também: [[Network ACL]], [[Security Group]], [[VPC Flow Logs]]

## Onde aparece

- **Módulo 6:** [[06 - VPC a Fundo|nota do módulo]], [[06.03 - Route Tables Internet Gateway e IPs Publicos|6.3]], [[06.10 - Flow Logs DNS DHCP IPv6 e Reachability Analyzer|6.10]]
