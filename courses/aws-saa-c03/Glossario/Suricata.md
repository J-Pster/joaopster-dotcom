---
aliases:
  - "Suricata IPS"
  - "regras Suricata"
tags:
  - glossario
  - seguranca
---
# Suricata

Suricata é um motor de código aberto de detecção e prevenção de intrusão que descreve ataques como regras de texto (assinaturas) aplicadas ao tráfego de rede. O AWS Network Firewall usa esse formato nas regras stateful, o que permite importar assinaturas existentes e escrever regras próprias. Existe porque a comunidade de segurança já publica assinaturas para ameaças conhecidas, e reaproveitá-las evita criar tudo do zero.

> [!example] Exemplo
> Uma regra Suricata que descarta conexões TLS cujo SNI pertence a um domínio de malware conhecido é carregada em um grupo de regras do Network Firewall.

Veja também: [[Network Firewall]], [[Stateful e Stateless (Firewall)]]

## Onde aparece

- **Módulo 19:** [[19.04 - Network Firewall DNS Firewall e Firewall Manager|19.4]]
