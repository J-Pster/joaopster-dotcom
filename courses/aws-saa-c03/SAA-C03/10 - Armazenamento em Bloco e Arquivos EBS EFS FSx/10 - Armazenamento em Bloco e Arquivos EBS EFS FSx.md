---
aliases:
  - Módulo 10
modulo: 10
parte: "III Computação e armazenamento"
tags:
  - modulo
  - saa-c03
---

# Módulo 10: Armazenamento em bloco e arquivos (EBS, EFS, FSx)

Toda aplicação guarda dados, e a escolha do armazenamento decide desempenho, [[Disponibilidade|disponibilidade]] e custo. Este módulo cobre o armazenamento **de bloco** ([[EBS]] e [[Instance Store]]) e **de arquivos** ([[EFS]] e a família [[FSx]]); o armazenamento de **objetos** ([[S3]]) fica no [[11 - Amazon S3 a Fundo|Módulo 11]]. A pergunta que guia o módulo: **qual armazenamento escolher para cada carga, e por que, em termos de [[IOPS]], [[Throughput|throughput]], [[Latencia|latência]], [[Durabilidade|durabilidade]] e custo?**

Ele é **prático**: as aulas de [[EBS]] e [[EFS]] trazem laboratórios opcionais (em conta pessoal, com aviso de custo e limpeza), mas nenhum é obrigatório para a prova.

> [!info] Pré-requisitos
> [[01 - Nuvem e Infraestrutura Global AWS|Módulo 1]] ([[Regiao AWS|Regiões]] e [[Zona de Disponibilidade|AZs]]), [[06 - VPC a Fundo|Módulo 6]] ([[Sub-rede|sub-redes]] e [[Security Group|security groups]], usados nos [[Mount Target|mount targets]]), [[08 - Criptografia e Protecao de Dados|Módulo 8]] ([[KMS]] e criptografia) e [[09 - EC2 a Fundo|Módulo 9]] (instâncias, [[Nitro]] e EBS-optimized).

## Aulas

1. [[10.01 - Bloco Arquivo e Objeto Por Que Existem Tres Tipos|Aula 10.1: Bloco, arquivo e objeto, por que existem três tipos]]: os três tipos, protocolos, [[IOPS]], [[Throughput|throughput]], [[Latencia|latência]] e [[Durabilidade|durabilidade]].
2. [[10.02 - EBS e Instance Store Armazenamento Anexado a Instancia|Aula 10.2: EBS e Instance Store]]: volume zonal, exclusão ao terminar, persistência do [[Instance Store]].
3. [[10.03 - EBS SSD gp3 gp2 e Provisioned IOPS|Aula 10.3: EBS SSD, gp3, gp2 e Provisioned IOPS]]: créditos do [[gp2]], [[gp3]], io1 e [[io2]].
4. [[10.04 - EBS HDD Multi-Attach e Escolha do Volume|Aula 10.4: EBS HDD, Multi-Attach e escolha do volume]]: [[st1]], [[sc1]], [[Multi-Attach]] e árvore de decisão.
5. [[10.05 - EBS Snapshots Criptografia e Operacao|Aula 10.5: EBS snapshots, criptografia e operação]]: [[Snapshot|snapshots]], [[Fast Snapshot Restore|FSR]], [[Data Lifecycle Manager|DLM]], Archive, [[Elastic Volumes]] e criptografia.
6. [[10.06 - EFS Arquivos NFS Compartilhados|Aula 10.6: EFS, arquivos NFS compartilhados]]: [[Mount Target|mount targets]], Regional e One Zone, [[Access Point|access points]], Lambda e [[Fargate]].
7. [[10.07 - EFS Performance Throughput e Classes de Armazenamento|Aula 10.7: EFS, performance, throughput e classes]]: General Purpose, Elastic, Provisioned, Bursting e lifecycle.
8. [[10.08 - FSx for Windows File Server e FSx for Lustre|Aula 10.8: FSx for Windows File Server e FSx for Lustre]]: [[SMB]] com [[Active Directory|AD]], [[Multi-AZ]], HPC e integração com [[S3]].
9. [[10.09 - FSx for NetApp ONTAP e FSx for OpenZFS|Aula 10.9: FSx for NetApp ONTAP e FSx for OpenZFS]]: multiprotocolo, tiering, [[Snapshot|snapshots]] e clones.
10. [[10.10 - Escolhendo o Armazenamento|Aula 10.10: Escolhendo o armazenamento]]: método de decisão e tabela mestre.

**Por que 10 aulas e nesta ordem.** Primeiro o vocabulário comum (10.1), depois o armazenamento mais próximo da instância ([[EBS]] e [[Instance Store]], 10.2 a 10.5), porque é o que o aluno já usou no Módulo 9. Em seguida o [[Armazenamento de Arquivos|armazenamento de arquivos]] compartilhados ([[EFS]], 10.6 e 10.7) e as alternativas especializadas ([[FSx]], 10.8 e 10.9). Fecha a aula de decisão (10.10), que é o que a prova cobra.

## Cobertura do exam guide

| Task statement | Onde está |
|---|---|
| Task 3.1: soluções de armazenamento de alto desempenho e escaláveis | [[10.03 - EBS SSD gp3 gp2 e Provisioned IOPS\|Aula 10.3]], [[10.04 - EBS HDD Multi-Attach e Escolha do Volume\|Aula 10.4]], [[10.06 - EFS Arquivos NFS Compartilhados\|Aula 10.6]], [[10.07 - EFS Performance Throughput e Classes de Armazenamento\|Aula 10.7]], [[10.08 - FSx for Windows File Server e FSx for Lustre\|Aula 10.8]] e [[10.09 - FSx for NetApp ONTAP e FSx for OpenZFS\|Aula 10.9]] |
| Task 3.1: tipos de armazenamento (bloco, arquivo, objeto) e características | [[10.01 - Bloco Arquivo e Objeto Por Que Existem Tres Tipos\|Aula 10.1]] e [[10.02 - EBS e Instance Store Armazenamento Anexado a Instancia\|Aula 10.2]] |
| Task 4.1: armazenamento com custo otimizado | [[10.03 - EBS SSD gp3 gp2 e Provisioned IOPS\|Aula 10.3]], [[10.04 - EBS HDD Multi-Attach e Escolha do Volume\|Aula 10.4]], [[10.07 - EFS Performance Throughput e Classes de Armazenamento\|Aula 10.7]] e [[10.10 - Escolhendo o Armazenamento\|Aula 10.10]] |
| Task 2.1 e 2.2: [[Durabilidade\|durabilidade]], [[Snapshot\|snapshots]], Regional versus One Zone, [[Multi-AZ]] | [[10.05 - EBS Snapshots Criptografia e Operacao\|Aula 10.5]], [[10.06 - EFS Arquivos NFS Compartilhados\|Aula 10.6]] e [[10.08 - FSx for Windows File Server e FSx for Lustre\|Aula 10.8]] |
| Task 1.3: [[Criptografia em Repouso\|criptografia de dados em repouso]] e em trânsito | [[10.05 - EBS Snapshots Criptografia e Operacao\|Aula 10.5]] e [[10.06 - EFS Arquivos NFS Compartilhados\|Aula 10.6]] |

[[Armazenamento de Objetos|Armazenamento de objetos]] ([[S3]]) está no [[11 - Amazon S3 a Fundo|Módulo 11]]; backup centralizado, no [[20 - Alta Disponibilidade e Recuperacao de Desastres|Módulo 20]].

> [!warning] Fatos que mudam
> Valores citados com "verificado em novembro de 2026" vêm da documentação oficial da AWS na data indicada. Limites, preços e recursos novos (como as classes do [[FSx for Lustre]] e do [[FSx for OpenZFS|OpenZFS]]) mudam: confira a página oficial antes de decidir em produção.

## Checklist de saída do módulo

- [ ] Sei explicar por que bloco, arquivo e objeto existem, e qual protocolo cada um usa?
- [ ] Sei dizer por que o [[EBS]] é zonal e como mover dados entre [[Zona de Disponibilidade|AZs]]?
- [ ] Sei explicar por que o [[gp3]] substituiu o [[gp2]] e quando escolher [[io2]]?
- [ ] Sei justificar por que [[st1]] e [[sc1]] não são bootáveis e quando valem a pena?
- [ ] Sei explicar por que [[Multi-Attach]] exige uma aplicação consciente de cluster?
- [ ] Sei dizer por que um volume existente não é criptografado no lugar e qual o caminho?
- [ ] Sei explicar por que o [[EFS]] precisa de um [[Mount Target|mount target]] por [[Zona de Disponibilidade|AZ]] e da porta 2049?
- [ ] Sei justificar a escolha entre Elastic, Provisioned e Bursting no [[EFS]]?
- [ ] Sei dizer qual serviço [[FSx]] responde a [[SMB]] com [[Active Directory|AD]], HPC com [[S3]] e NetApp com [[iSCSI]]?
- [ ] Sei explicar quando RAID 0 ou RAID 1 faz sentido no [[EBS]] e por que [[Snapshot|snapshot]] de volume em uso é crash-consistent?

## Teste-se

**1.** Aplicações em [[ECS]] [[Fargate]] (duas [[Zona de Disponibilidade|AZs]]) e [[EC2|instâncias EC2]] Linux precisam ler e gravar os mesmos arquivos, com o MENOR [[Overhead Operacional|overhead operacional]]. Qual solução?

- [ ] a) EBS io2 com Multi-Attach em todos os computes
- [ ] b) Amazon EFS Regional
- [ ] c) Servidor NFS próprio em uma instância EC2 com discos EBS
- [ ] d) Bucket S3 montado como disco local em cada instância

**2.** Uma empresa tem 500 usuários com pastas [[SMB]] autenticadas por [[Active Directory]], usadas como home directories sem exigência de baixa [[Latencia|latência]]. O serviço deve sobreviver à falha de uma [[Zona de Disponibilidade|AZ]], com o MENOR custo. Qual configuração?

- [ ] a) FSx for Windows Single-AZ com SSD
- [ ] b) Amazon EFS Regional
- [ ] c) FSx for Windows Multi-AZ com SSD e IOPS provisionadas no máximo para garantir desempenho
- [ ] d) FSx for Windows Multi-AZ com armazenamento HDD

**3.** Pesquisadores guardam 40 TB no [[S3]] e rodam milhares de tarefas paralelas em Linux por 2 dias por mês, devolvendo os resultados ao S3. Qual solução tem o MENOR custo de armazenamento rápido?

- [ ] a) EFS Elastic, com os dados copiados do S3 por DataSync
- [ ] b) FSx for Lustre persistent, mantido ligado ao bucket durante o mês inteiro
- [ ] c) FSx for Lustre scratch ligado ao bucket S3
- [ ] d) Um volume io2 por instância, populado a partir do S3

**4.** Uma empresa precisa compartilhar com outra conta, para DR, um [[Snapshot|snapshot]] [[EBS]] cifrado com a chave aws/ebs. O que fazer?

- [ ] a) Copiar o snapshot com uma customer managed key e compartilhar snapshot e chave
- [ ] b) Compartilhar o snapshot diretamente e dar à outra conta acesso à chave aws/ebs
- [ ] c) Tornar o snapshot público temporariamente
- [ ] d) Habilitar Multi-Attach para a conta de destino

**5.** Um banco de dados em [[EC2]] precisa de 30.000 [[IOPS]] e 500 MiB/s, com [[Latencia|latência]] de poucos milissegundos e o MENOR custo. Qual volume?

- [ ] a) io2 Block Express com 30.000 IOPS provisionadas
- [ ] b) gp3 com 30.000 IOPS e 500 MiB/s
- [ ] c) gp2 de 10.000 GiB
- [ ] d) st1 de 16 TiB

**6.** Um banco em uma única [[EC2|instância EC2]] exige 300.000 [[IOPS]], acima do limite de qualquer [[EBS|volume EBS]] individual. Qual abordagem aumenta o desempenho agregado?

- [ ] a) RAID 0 com vários volumes io2
- [ ] b) RAID 1 com dois volumes io2
- [ ] c) Um único io2 com 300.000 IOPS provisionadas
- [ ] d) EFS com Max I/O

**7.** Um banco usa um volume para dados e outro para logs, e a empresa quer [[Snapshot|snapshots]] consistentes entre os dois volumes sem parar a instância. O que usar?

- [ ] a) Dois snapshots manuais, um volume de cada vez, em horários diferentes
- [ ] b) Elastic Volumes nos dois volumes
- [ ] c) EBS Snapshots Archive nos dois volumes
- [ ] d) Snapshot de vários volumes, com quiesce antes

**8.** Quais DUAS ações reduzem o custo de um [[EFS]] com muitos arquivos frios, sem mudar a aplicação? (Escolha DUAS.)

- [ ] a) Política de lifecycle para a classe Infrequent Access
- [ ] b) Trocar para o modo de performance Max I/O
- [ ] c) Política de lifecycle para Archive em um sistema com throughput Elastic
- [ ] d) Provisionar o throughput no pico máximo
- [ ] e) Mover os arquivos para volumes sc1

**9.** Quais DUAS necessidades apontam para o [[FSx for NetApp ONTAP]]? (Escolha DUAS.)

- [ ] a) Replicar dados com SnapMirror entre Regiões
- [ ] b) Servir LUNs iSCSI para um banco legado
- [ ] c) Criar clones de datasets ZFS
- [ ] d) Processar dados do S3 com HPC
- [ ] e) Montar uma pasta SMB simples para uma aplicação Windows

**10.** Uma [[Lambda|função Lambda]] em [[VPC]] falha por [[Timeout|timeout]] ao montar um [[EFS]], embora o [[Access Point|access point]] exista. Qual é a causa mais provável?

- [ ] a) O Lambda não suporta EFS
- [ ] b) O EFS exige um bucket S3 para os metadados
- [ ] c) O security group do mount target não libera a porta 2049
- [ ] d) A função precisa de mais memória para conseguir montar o sistema de arquivos

**11.** Um job de processamento gera arquivos intermediários recriáveis a cada execução e grava a saída final no [[S3]]. Qual armazenamento tem o MENOR custo adicional?

- [ ] a) Instance Store
- [ ] b) EBS gp3 com snapshots diários
- [ ] c) EFS Elastic
- [ ] d) FSx for Lustre persistent

**12.** Um [[gp2|volume gp2]] de 200 GiB roda bem por cerca de 30 minutos em cada job e depois cai para 600 [[IOPS]]. A empresa quer o MENOR custo e não pode parar a instância. O que fazer?

- [ ] a) Migrar para io2 com Multi-Attach
- [ ] b) Trocar para st1
- [ ] c) gp3 com IOPS provisionadas, via Elastic Volumes
- [ ] d) Aumentar o gp2 para 16 TiB para ganhar IOPS

**13.** Um banco restaurado de [[Snapshot|snapshot]] fica lento nas primeiras horas, e o time quer desempenho pleno desde a criação do volume, aceitando custo adicional. Qual recurso?

- [ ] a) EBS Snapshot Lock em modo compliance
- [ ] b) Fast Snapshot Restore
- [ ] c) Recycle Bin com retenção de 7 dias
- [ ] d) Snapshots Archive

**14.** Uma empresa de desenvolvimento quer um sistema de arquivos [[NFS]] compartilhado para o ambiente de testes, com o MENOR custo, aceitando que os dados fiquem em uma única [[Zona de Disponibilidade|AZ]]. Qual escolha?

- [ ] a) EFS Regional com Provisioned
- [ ] b) EFS Regional com AWS Backup
- [ ] c) EFS One Zone
- [ ] d) EBS gp3 com Multi-Attach

**15.** Uma aplicação Windows em [[EC2]] precisa de uma pasta compartilhada por [[SMB]] com permissões NTFS e quer migrar sem reescrever nada, com o MENOR [[Overhead Operacional|overhead operacional]]. Qual serviço?

- [ ] a) Amazon EFS com NFS
- [ ] b) FSx for Lustre
- [ ] c) FSx for Windows File Server
- [ ] d) Servidor de arquivos Windows próprio em EC2 com discos EBS

> [!success]- Gabarito
> **1. b)** [[EFS]] Regional é [[NFS]] gerenciado e [[Multi-AZ|multi-AZ]], montável por [[Fargate]] e [[EC2]]; a) [[Multi-Attach]] é bloco de uma [[Zona de Disponibilidade|AZ]] e não atende Fargate; c) funciona, mas traz patch, capacidade e [[Ponto Unico de Falha|ponto único de falha]]; d) o [[S3]] não é um sistema de arquivos POSIX nativo.
> **2. d)** [[Multi-AZ]] resolve a falha de [[Zona de Disponibilidade|AZ]] e HDD é o desenhado para home directories com menor custo; a) Single-AZ não sobrevive à perda da AZ; b) o [[EFS]] não fala [[SMB]] nem [[Active Directory|AD]]; c) SSD com [[IOPS]] máximas paga por desempenho que o requisito não pede.
> **3. c)** scratch não replica e o dado durável já está no [[S3]], então paga-se o armazenamento rápido só durante o uso; a) copiar e manter [[EFS]] custa mais e não tem a integração nativa; b) persistent paga replicação e tempo que o padrão não exige; d) cada instância teria sua cópia, sem compartilhamento.
> **4. a)** a chave AWS managed não pode ser compartilhada, então a cópia usa uma [[Customer Managed Key|customer managed key]]; b) a chave aws/ebs não é compartilhável; c) [[Snapshot|snapshot]] cifrado não pode ser público; d) [[Multi-Attach]] é de volumes na mesma [[Zona de Disponibilidade|AZ]] e não tem relação com contas.
> **5. b)** o [[gp3]] vai a 80.000 [[IOPS]] e 2.000 MiB/s e custa menos que o [[io2]]; a) o io2 só se justifica acima de 80.000 IOPS, com sub-ms ou 99,999%; c) o [[gp2]] limita em 16.000 IOPS; d) [[st1]] é HDD de [[Throughput|throughput]] sequencial.
> **6. a)** RAID 0 faz striping e soma [[IOPS]] e [[Throughput|throughput]] (sem redundância, então combine com [[Snapshot|snapshots]]); b) RAID 1 espelha e não soma desempenho; c) o teto do [[io2]] é 256.000 IOPS; d) [[EFS]] é arquivo e não substitui o bloco de um banco.
> **7. d)** o [[Snapshot|snapshot]] de vários volumes (CreateSnapshots) captura todos no mesmo instante, e o quiesce garante dados em disco; a) horários diferentes geram estados incoerentes; b) [[Elastic Volumes]] altera desempenho, não faz backup; c) o Archive reduz custo de retenção, não dá consistência.
> **8. a) e c)** IA e Archive baixam o custo por GB mantendo o mesmo caminho [[NFS]], e o Archive exige [[Elastic Throughput|throughput Elastic]]; b) Max I/O é modo de performance e não reduz custo; d) Provisioned no pico aumenta o custo; e) [[sc1]] é bloco de uma instância e quebraria o compartilhamento.
> **9. a) e b)** [[FSx for NetApp ONTAP|SnapMirror]] e [[iSCSI]] são recursos do ONTAP; c) clones de [[FSx for OpenZFS|ZFS]] apontam para o OpenZFS; d) HPC com [[S3]] aponta para o [[FSx for Lustre|Lustre]]; e) pasta [[SMB]] simples é mais direta no [[FSx for Windows File Server|FSx for Windows]].
> **10. c)** sem a entrada [[TCP]] 2049 ([[NFS]]) a montagem expira; a) o Lambda suporta [[EFS]] em [[VPC]]; b) o EFS não usa [[S3]]; d) a memória não afeta a conectividade de rede.
> **11. a)** [[Instance Store]] já está no preço da instância e serve a dados efêmeros; b) [[gp3]] e [[Snapshot|snapshots]] cobram por algo que o job recria; c) [[EFS]] cobra por uso e é mais lento para scratch; d) persistent paga replicação desnecessária.
> **12. c)** [[gp3]] entrega [[IOPS]] independentes do tamanho, a custo menor, e o [[Elastic Volumes]] troca o tipo com a instância em uso; a) [[io2]] custa mais e [[Multi-Attach]] não é o problema; b) [[st1]] é HDD e não atende IOPS aleatórias; d) 16 TiB de [[gp2]] pagariam por espaço inútil só para ganhar IOPS.
> **13. b)** o [[Fast Snapshot Restore|FSR]] entrega volumes totalmente inicializados; a) o Lock impede exclusão; c) o [[Recycle Bin]] recupera [[Snapshot|snapshots]] apagados; d) o Archive reduz custo e torna a restauração mais lenta.
> **14. c)** One Zone guarda em uma [[Zona de Disponibilidade|AZ]] por preço menor; a) Provisioned custa mais; b) Backup acrescenta proteção e custo; d) [[Multi-Attach]] é bloco, só em io1 e [[io2]], e não é um sistema de arquivos.
> **15. c)** [[FSx for Windows File Server|FSx for Windows]] é [[SMB]] nativo com ACLs e totalmente gerenciado; a) o [[EFS]] não suporta Windows; b) o [[FSx for Lustre|Lustre]] é HPC Linux; d) funciona, mas traz patch, backup e cluster de [[Failover|failover]] que o serviço gerenciado elimina.

## Próximo módulo

[[11 - Amazon S3 a Fundo|Próximo módulo: Amazon S3 a Fundo]]
