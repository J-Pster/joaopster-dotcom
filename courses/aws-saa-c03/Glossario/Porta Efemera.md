---
aliases:
  - "ephemeral port"
  - "ephemeral ports"
  - "porta efêmera"
  - "portas efêmeras"
tags:
  - glossario
  - rede
---
# Porta Efemera

A porta efêmera é a porta alta e temporária que o sistema operacional do cliente escolhe como origem de uma conexão, e é para ela que a resposta do servidor volta. Como a network ACL é stateless, ela precisa liberar essas portas para as respostas passarem, senão a conexão parece quebrada. A faixa depende do sistema (Linux 32768 a 60999, Windows moderno 49152 a 65535) e liberar 1024 a 65535 cobre todos os casos.

> [!example] Exemplo
> Uma NACL que permite saída só para a porta 443 derruba a resposta de um servidor web, que vai para uma porta efêmera do navegador.

Veja também: [[Network ACL]], [[Porta de Rede]], [[Security Group]], [[Stateful e Stateless (Firewall)]]

## Onde aparece

- **Módulo 3:** [[03 - Fundamentos de Redes para a Nuvem|nota do módulo]], [[03.04 - Roteamento NAT e Tabelas de Rotas|3.4]], [[03.05 - Firewalls Portas e Portas Efemeras|3.5]]
- **Módulo 6:** [[06 - VPC a Fundo|nota do módulo]], [[06.05 - Security Groups|6.5]], [[06.06 - Network ACLs e Defesa em Camadas|6.6]], [[06.10 - Flow Logs DNS DHCP IPv6 e Reachability Analyzer|6.10]]
- **Módulo 7:** [[07.02 - VPC Peering|7.2]]
- **Módulo 26:** [[26.02 - Iteracao 1 Seguranca em Camadas|26.2]]
- **Módulo 27:** [[27.03 - Revisao Final Mapa Requisito Servico e Pares que Confundem|27.3]]
