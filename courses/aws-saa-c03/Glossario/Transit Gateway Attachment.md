---
aliases:
  - "TGW attachment"
  - "anexo do Transit Gateway"
  - "attachment"
  - "attachments"
tags:
  - glossario
  - rede
---
# Transit Gateway Attachment

Um attachment é a ligação entre o Transit Gateway e outro recurso: uma VPC, uma VPN, um Direct Connect Gateway, outro Transit Gateway (peering) ou um appliance via Connect. No attachment de VPC você escolhe uma sub-rede por AZ, e a AWS cria nela uma interface de rede (ENI) por onde o tráfego entra e sai do hub. Só as AZs com sub-rede escolhida alcançam o Transit Gateway.

> [!example] Exemplo
> Ao anexar uma VPC em três AZs, o engenheiro escolhe uma sub-rede em cada uma, para que as instâncias das três AZs usem o hub.

Veja também: [[Appliance Mode]], [[ENI]], [[Transit Gateway]], [[Transit Gateway Route Table]]

## Onde aparece

- Ainda não é citado nas aulas.
