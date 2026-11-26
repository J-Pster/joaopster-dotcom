---
aliases:
  - "TLS termination"
  - "terminar o TLS"
  - "terminação TLS"
  - "terminação de TLS"
tags:
  - glossario
  - seguranca
---
# Terminacao de TLS

Decifrar a conexão TLS em algum ponto do caminho. No balanceador, alivia a CPU dos destinos e permite camada 7; recifrar para os destinos mantém cifrado nos dois trechos; passthrough (NLB com TCP) leva o TLS até os destinos.

> [!example] Exemplo
> Compliance de ponta a ponta com balanceador sem acesso ao conteúdo pede NLB com listener TCP.

Veja também: [[Application Load Balancer]], [[Network Load Balancer]], [[SNI]], [[TLS]]

## Onde aparece

- **Módulo 3:** [[03 - Fundamentos de Redes para a Nuvem|nota do módulo]], [[03.07 - TLS HTTPS e Certificados|3.7]]
- **Módulo 8:** [[08.07 - Criptografia em Transito ACM e Private CA|8.7]]
- **Módulo 12:** [[12 - Balanceamento de Carga e Auto Scaling|nota do módulo]], [[12.02 - A Familia Elastic Load Balancing|12.2]], [[12.04 - Network Load Balancer e Gateway Load Balancer|12.4]]
