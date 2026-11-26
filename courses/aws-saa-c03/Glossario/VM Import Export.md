---
aliases:
  - "VM Import"
  - "VM Import/Export"
  - "importação de VM"
tags:
  - glossario
  - servico
---
# VM Import Export

O VM Import/Export importa uma imagem de máquina virtual (VMware, Hyper-V e outras) como AMI ou instância do EC2, e exporta instâncias de volta para o formato de VM. Existe para quem tem uma imagem avulsa e quer rodá-la na AWS. É uma fotografia pontual, que não acompanha as escritas posteriores, por isso migrações grandes com corte curto usam o Application Migration Service, que replica continuamente.

> [!example] Exemplo
> Uma equipe tem uma VM de laboratório desligada em formato OVA e a importa como AMI para lançar uma instância EC2, sem precisar de corte nem de replicação contínua.

Veja também: [[7 Rs da Migracao]], [[AMI]], [[Application Migration Service]], [[EC2]]

## Onde aparece

- **Módulo 23:** [[23.02 - Rehost com MGN e Relocate com VMware|23.2]]
