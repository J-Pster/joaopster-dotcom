---
aliases:
  - "VIF hospedada"
  - "hosted VIFs"
  - "hosted virtual interface"
tags:
  - glossario
  - rede
---
# Hosted VIF

Uma hosted VIF é uma virtual interface que o dono de uma conexão Direct Connect cria e entrega a outra conta AWS, que a aceita e passa a usá-la. A capacidade da conexão é compartilhada entre as VIFs hospedadas, mas cada conta paga e opera a sua. É o modo de reaproveitar um único circuito para várias contas.

> [!example] Exemplo
> A conta de rede possui uma conexão de 10 Gbps e cria uma hosted VIF privada para a conta de produção, que a aceita e associa ao próprio Direct Connect gateway.

Veja também: [[Direct Connect]], [[Direct Connect Gateway]], [[Virtual Interface]]

## Onde aparece

- **Módulo 7:** [[07.06 - Direct Connect|7.6]]
