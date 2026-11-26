---
aliases:
  - "preservação de IP do cliente"
  - "preservação do IP do cliente"
tags:
  - glossario
  - rede
---
# Client IP Preservation

A client IP preservation faz o Global Accelerator entregar ao endpoint o endereço IP original do usuário, em vez do endereço do próprio acelerador. Assim a aplicação consegue registrar o IP real e aplicar regras de segurança por origem. Em aceleradores padrão é opcional e depende do tipo de endpoint; no roteamento personalizado é sempre ativa.

> [!example] Exemplo
> Uma aplicação atrás de um ALB com a opção ligada registra o IP do usuário nos logs de acesso.

Veja também: [[Application Load Balancer]], [[Endpoint Group]], [[Global Accelerator]]

## Onde aparece

- **Módulo 3:** [[03 - Fundamentos de Redes para a Nuvem|nota do módulo]], [[03.05 - Firewalls Portas e Portas Efemeras|3.5]]
- **Módulo 12:** [[12.04 - Network Load Balancer e Gateway Load Balancer|12.4]]
- **Módulo 18:** [[18.06 - Global Accelerator Anycast e Rede Global da AWS|18.6]]
