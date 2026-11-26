---
aliases:
  - "DNS Security Extensions"
  - "assinatura DNSSEC"
tags:
  - glossario
  - seguranca
---
# DNSSEC

O DNSSEC assina digitalmente os registros de uma zona para que o resolvedor possa verificar que a resposta é autêntica e não foi alterada no caminho. No Route 53 é suportado em zonas públicas, e a chave de assinatura é uma chave assimétrica do KMS que você controla. Ele protege contra respostas DNS forjadas, mas não cifra o tráfego.

> [!example] Exemplo
> Um banco ativa o DNSSEC na zona pública para dificultar que um atacante redirecione usuários com respostas falsas.

Veja também: [[DNS]], [[Hosted Zone]], [[Route 53]]

## Onde aparece

- **Módulo 3:** [[03.06 - DNS e Resolucao de Nomes|3.6]]
- **Módulo 18:** [[18 - Borda e DNS CloudFront Global Accelerator e Route 53|nota do módulo]], [[18.07 - Route 53 Fundamentos Zonas Registros e Alias|18.7]]
