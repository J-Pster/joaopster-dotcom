---
aliases:
  - Módulo 23
modulo: 23
parte: "VII Dados, migração e IA"
tags:
  - modulo
  - saa-c03
---

# Módulo 23: Migração e transferência de dados

Levar o que já existe para a AWS é um problema com quatro eixos: **o que** se move (servidores, bancos, arquivos), **quanto** (a conta da rede), **por onde** (online ou físico) e **por quanto tempo** (uma carga única ou um fluxo contínuo). A pergunta que guia o módulo: **dado um cenário, qual serviço de migração ou transferência atende ao requisito com o menor esforço, e por quê?**

O módulo é **conceitual com decisão**: quase todo o valor para a prova está em ligar a descrição do cenário ao serviço certo. Os laboratórios são opcionais e quase todos de papel ou de baixo custo.

> [!info] Pré-requisitos
> [[07 - Conectividade Hibrida e entre VPCs|Módulo 7]] ([[Direct Connect]] e VPN, o caminho das transferências online), [[11 - Amazon S3 a Fundo|Módulo 11]] (o destino mais comum), [[13 - Bancos Relacionais RDS e Aurora|Módulo 13]] (os destinos dos bancos) e [[10 - Armazenamento em Bloco e Arquivos EBS EFS FSx|Módulo 10]] ([[EFS]] e [[FSx]] como destinos do [[DataSync]]).

> [!warning] Disponibilidade mudou em 2025 e 2026 (verificado em novembro de 2026)
> Vários serviços tratados aqui estão **fechados para novos clientes** ou em transição: o [[Snowball Edge]], o [[Application Discovery Service]], o Migration Hub e o [[FSx]] [[S3 File Gateway|File Gateway]]; o [[DMS]] Fleet Advisor foi encerrado. O guia do exame ainda os cita, então o curso ensina o conceito e **sinaliza** a situação atual em cada aula. Em projetos reais, confira sempre a página oficial.

## Aulas

1. [[23.01 - Por que e Como Migrar os 7 Rs e as Fases|Aula 23.1: Por que e como migrar, os 7 Rs e as fases]]: estratégias, fases, ondas e descoberta.
2. [[23.02 - Rehost com MGN e Relocate com VMware|Aula 23.2: Rehost com MGN e relocate com VMware]]: replicação em blocos, teste e [[Cutover|cutover]], [[VMware Cloud on AWS]] e Amazon EVS.
3. [[23.03 - Migracao de Bancos com o DMS|Aula 23.3: Migração de bancos com o DMS]]: [[Replication Instance|instância de replicação]], [[Full Load|full load]], [[Change Data Capture|CDC]] e validação.
4. [[23.04 - Conversao de Esquemas e Escolha do Caminho para Bancos|Aula 23.4: Conversão de esquemas e escolha do caminho para bancos]]: [[Schema Conversion Tool|SCT]], [[DMS Schema Conversion]], homogêneo versus heterogêneo.
5. [[23.05 - DataSync e a Transferencia Online de Arquivos|Aula 23.5: DataSync e a transferência online de arquivos]]: agente, location, task, modos e a conta de tempo.
6. [[23.06 - Transfer Family Transfer Acceleration e Direct Connect na Migracao|Aula 23.6: Transfer Family, Transfer Acceleration e Direct Connect na migração]]: protocolos de parceiros, endpoints e a rede.
7. [[23.07 - Transferencia Offline e a Conta da Rede|Aula 23.7: Transferência offline e a conta da rede]]: [[Snow Family|Família Snow]], fórmula de tempo e a situação atual.
8. [[23.08 - Storage Gateway e o Armazenamento Hibrido|Aula 23.8: Storage Gateway e o armazenamento híbrido]]: File, Volume cached e stored, Tape.
9. [[23.09 - Outposts e Computacao no Local|Aula 23.9: Outposts e computação no local]]: racks, servidores, [[Service Link|service link]], [[Local Zone|Local Zones]] e [[Wavelength]].
10. [[23.10 - Arvore de Decisao do Metodo de Migracao|Aula 23.10: Árvore de decisão do método de migração]]: três perguntas e sete cenários resolvidos.

**Por que 10 aulas e nesta ordem.** Primeiro a **estratégia** (23.1), porque antes de escolher ferramenta se decide o quê e como migrar. Depois, por tipo de carga: **servidores** (23.2), **bancos** (23.3 e 23.4) e **arquivos** (23.5 e 23.6). Em seguida, quando a rede não basta, o **físico** (23.7). As aulas 23.8 e 23.9 tratam do que **não migra**, mas passa a usar a AWS: armazenamento híbrido e computação no local. Fecha a aula de decisão (23.10), que é o que a prova cobra.

## Cobertura do exam guide

| Task statement | Onde está |
|---|---|
| Task 3.1: soluções de armazenamento e transferência de alto desempenho ([[Storage Gateway]], Snow) | [[23.07 - Transferencia Offline e a Conta da Rede\|Aula 23.7]] e [[23.08 - Storage Gateway e o Armazenamento Hibrido\|Aula 23.8]] |
| Task 3.5: serviços de transferência e ingestão de dados ([[DataSync]], [[Transfer Family]], Snow, [[DMS]]) | [[23.03 - Migracao de Bancos com o DMS\|Aula 23.3]], [[23.05 - DataSync e a Transferencia Online de Arquivos\|Aula 23.5]], [[23.06 - Transfer Family Transfer Acceleration e Direct Connect na Migracao\|Aula 23.6]] e [[23.07 - Transferencia Offline e a Conta da Rede\|Aula 23.7]] |
| Task 4.1: soluções de armazenamento e transferência com custo otimizado | [[23.05 - DataSync e a Transferencia Online de Arquivos\|Aula 23.5]], [[23.07 - Transferencia Offline e a Conta da Rede\|Aula 23.7]] e [[23.10 - Arvore de Decisao do Metodo de Migracao\|Aula 23.10]] |
| Task 4.2: computação híbrida e migração de servidores com custo otimizado ([[Application Migration Service\|MGN]], descoberta, [[7 Rs da Migracao\|7 Rs]], Outposts) | [[23.01 - Por que e Como Migrar os 7 Rs e as Fases\|Aula 23.1]], [[23.02 - Rehost com MGN e Relocate com VMware\|Aula 23.2]] e [[23.09 - Outposts e Computacao no Local\|Aula 23.9]] |
| Task 4.3: bancos de dados com custo otimizado ([[DMS]], [[Schema Conversion Tool\|SCT]], caminho de migração) | [[23.03 - Migracao de Bancos com o DMS\|Aula 23.3]] e [[23.04 - Conversao de Esquemas e Escolha do Caminho para Bancos\|Aula 23.4]] |
| Task 2.1: serviços gerenciados ([[Transfer Family]]) | [[23.06 - Transfer Family Transfer Acceleration e Direct Connect na Migracao\|Aula 23.6]] |
| Task 3.4 e Task 4.4: conexão de rede (VPN, [[Direct Connect]]) na migração | [[23.06 - Transfer Family Transfer Acceleration e Direct Connect na Migracao\|Aula 23.6]] e [[23.09 - Outposts e Computacao no Local\|Aula 23.9]] |
| Arquitetura híbrida (Outposts, [[Local Zone\|Local Zones]], [[Wavelength]]) | [[23.09 - Outposts e Computacao no Local\|Aula 23.9]] |

Backup e [[Recuperacao de Desastres|recuperação de desastres]] ficam no [[20 - Alta Disponibilidade e Recuperacao de Desastres|Módulo 20]]; o caminho de rede detalhado, no [[07 - Conectividade Hibrida e entre VPCs|Módulo 7]]; o [[Data Transfer|custo de transferência]], no [[25 - Otimizacao de Custos|Módulo 25]].

## Checklist de saída do módulo

- [ ] Sei explicar por que os [[7 Rs da Migracao|7 Rs]] existem e quando "retain" ou "retire" é a melhor resposta?
- [ ] Sei dizer por que o [[Application Migration Service|MGN]] replica em blocos e o que acontece entre o teste e o [[Cutover|cutover]]?
- [ ] Sei justificar por que mudar de motor de banco exige a [[Schema Conversion Tool|SCT]] além do [[DMS]]?
- [ ] Sei explicar por que o [[Change Data Capture|CDC]] permite migrar com indisponibilidade mínima?
- [ ] Sei dizer por que o [[DataSync]] e o [[Storage Gateway]] resolvem problemas diferentes?
- [ ] Sei fazer a conta de tempo da rede e decidir entre online e físico?
- [ ] Sei explicar por que o endpoint [[VPC]] com [[Elastic IP]] resolve o IP fixo do parceiro no [[Transfer Family]]?
- [ ] Sei diferenciar Outposts, [[Local Zone]] e [[Wavelength]] pela distância até o usuário?
- [ ] Sei dizer qual serviço do módulo está fechado para novos clientes e qual é a alternativa?

## Teste-se

**1.** Uma empresa precisa deixar um datacenter em 6 semanas, com 150 servidores, sem reescrever as aplicações. Qual serviço atende com o MENOR esforço?

- [ ] a) AWS Application Migration Service
- [ ] b) AWS DataSync, que copia e sincroniza arquivos
- [ ] c) AWS Transfer Family
- [ ] d) AWS Storage Gateway

**2.** Um banco Oracle de 5 TB deve ir para o [[Aurora]] PostgreSQL com o mínimo de indisponibilidade. O que usar?

- [ ] a) DataSync com agendamento horário
- [ ] b) MGN para replicar o servidor do banco como uma máquina inteira, sem converter nada
- [ ] c) SCT (ou DMS Schema Conversion) para o esquema e DMS com CDC para os dados
- [ ] d) Snowball Edge para enviar o banco

**3.** O que o [[Change Data Capture|CDC]] (change data capture) do [[DMS]] entrega na migração de um banco em produção?

- [ ] a) Conversão automática de procedimentos para outro motor
- [ ] b) Compressão dos dados na origem
- [ ] c) Aumento automático da classe da instância de replicação
- [ ] d) Replicação contínua das mudanças após a carga inicial, permitindo um cutover curto

**4.** Uma empresa tem 100 TB em um NAS e um link de 1 Gbps com 80% de uso útil. Qual é o tempo aproximado de transferência pela rede?

- [ ] a) Cerca de 11 a 12 dias
- [ ] b) Cerca de 1 dia, como em um link de 10 Gbps
- [ ] c) Cerca de 3 meses
- [ ] d) Cerca de 3 horas

**5.** Uma empresa sai de um datacenter em 8 semanas. Há 40 servidores de aplicação, um banco SQL Server de 1 TB cujas consultas T-SQL não podem ser reescritas, e 60 TB de arquivos em um NAS. O link é de 200 Mbps, com 80% utilizáveis. Qual combinação atende com o MENOR esforço?

- [ ] a) MGN para os servidores, SCT e DMS para o Aurora MySQL com reescrita das consultas, e Snowball Edge para levar os arquivos fisicamente
- [ ] b) VMware Cloud on AWS para tudo, e Storage Gateway para o banco
- [ ] c) MGN nos servidores, DMS com Babelfish e DataSync nos arquivos
- [ ] d) DataSync para os servidores e para o banco, e Transfer Family para receber os arquivos do NAS

**6.** Uma empresa em local remoto, sem internet estável, precisa filtrar dados de sensores antes de enviá-los. Qual conceito atende (considerando o escopo do exame)?

- [ ] a) S3 Transfer Acceleration, que usa as edge locations do CloudFront
- [ ] b) Snowball Edge Compute Optimized
- [ ] c) Direct Connect hospedado
- [ ] d) Transfer Family

**7.** Quinze lojas precisam rodar um sistema de caixa com resposta de milissegundos mesmo quando o link com a Região cai, e querem as mesmas APIs de [[EC2]]. Há espaço para um servidor pequeno por loja, e o arquivo de vendas do dia deve chegar ao [[S3]] pela rede à noite. Qual combinação atende?

- [ ] a) Outposts em rack de 42U em cada loja, e Transfer Family para enviar o arquivo
- [ ] b) Local Zone na cidade de cada loja, e Snowball Edge para o arquivo
- [ ] c) Storage Gateway Volume Gateway em cada loja, e Direct Connect novo
- [ ] d) Outposts de 1U ou 2U em cada loja, e DataSync

**8.** Qual modo do [[Volume Gateway]] mantém o conjunto de dados primário no local, com [[Snapshot|snapshots]] assíncronos na AWS?

- [ ] a) Cached
- [ ] b) File
- [ ] c) Stored
- [ ] d) Tape

**9.** Uma empresa mantém um servidor de arquivos [[NFS]] local de 30 TB que continuará em uso por anos, e precisa também levar uma única vez um histórico de 25 TB ao [[S3 Glacier Deep Archive]], com link de 1 Gbps e 2 meses de prazo. Qual combinação atende?

- [ ] a) S3 File Gateway no acesso, DataSync no histórico e lifecycle para o Deep Archive
- [ ] b) Snowball Edge com job de importação direto para o Deep Archive, e Tape Gateway para o acesso NFS
- [ ] c) DataSync para os dois, retirando o acesso local ao servidor de arquivos
- [ ] d) Transfer Family para o NFS, e Outposts para guardar o histórico

**10.** Qual afirmação sobre o Outposts está correta?

- [ ] a) É hardware da AWS instalado no local do cliente, ancorado a uma Região pelo service link
- [ ] b) É um software que o cliente instala em qualquer servidor
- [ ] c) É uma extensão da Região em uma metrópole, na infraestrutura da AWS, sem hardware no cliente
- [ ] d) É um serviço de computação dentro de redes 5G

**11.** Uma empresa vai levar um banco MySQL de 100 GB para o [[RDS]] for MySQL, com uma [[Maintenance Window|janela de manutenção]] de 8 horas, e quer a opção mais simples e barata. Qual escolha atende?

- [ ] a) SCT e DMS Serverless com CDC, que funcionam mas são mais trabalhosos para o mesmo motor
- [ ] b) MGN para replicar o servidor do banco e depois exportar os dados
- [ ] c) Um Snowball Edge para enviar o banco inteiro
- [ ] d) Dump nativo e restauração no RDS for MySQL

**12.** Uma equipe quer decidir, para cada aplicação, se aposenta, mantém, move sem mudar, troca por SaaS ou refatora. Qual estrutura usa?

- [ ] a) O modelo de responsabilidade compartilhada
- [ ] b) As cinco categorias do Well-Architected
- [ ] c) As Zonas de Disponibilidade
- [ ] d) Os 7 Rs da migração

**13.** (Escolha DUAS.) Em uma migração de 300 TB com banda limitada e prazo curto, quais ações fazem sentido?

- [ ] a) Carga inicial por dispositivo físico, quando disponível ao caso
- [ ] b) Usar o Transfer Family para copiar o volume
- [ ] c) Sincronizar o delta e fazer a janela final pelo DataSync
- [ ] d) Instalar um Outposts para guardar os arquivos para sempre
- [ ] e) Ignorar os dados alterados após a carga inicial

**14.** (Escolha DUAS.) Quais afirmações sobre o [[Application Migration Service|MGN]] estão corretas?

- [ ] a) Replica os discos dos servidores de origem em nível de bloco
- [ ] b) Permite lançar instâncias de teste antes do cutover
- [ ] c) Converte o esquema de bancos de dados entre motores
- [ ] d) Recebe arquivos de parceiros por SFTP
- [ ] e) Exige que a origem seja um servidor VMware

**15.** Uma empresa precisa levar 150 TB de dados frios ao [[S3 Glacier Deep Archive]]. O link é de 100 Mbps (80% utilizáveis) e o prazo é de 10 semanas. Qual abordagem atende (conceito cobrado na prova; em projeto real confira a [[Disponibilidade|disponibilidade]] do [[Snowball Edge]])?

- [ ] a) DataSync pela rede, porque ele grava direto no Deep Archive
- [ ] b) Snowball Edge para o S3 e lifecycle para o Deep Archive
- [ ] c) Snowball Edge com job de importação que grava direto no Deep Archive
- [ ] d) Transfer Family com SFTP para o bucket

**16.** Uma empresa precisa começar a replicar dados à AWS esta semana e quer uma conexão estável e privada a longo prazo. Qual abordagem atende?

- [ ] a) Aguardar o Direct Connect, que costuma ficar pronto em dois dias
- [ ] b) Usar apenas a internet, porque o Direct Connect não é privado
- [ ] c) Site-to-Site VPN agora e Direct Connect em paralelo
- [ ] d) Pedir um Outposts para servir de ponte

> [!success]- Gabarito
> **1. a)** O [[Application Migration Service|MGN]] faz [[Lift and Shift|rehost]] com replicação contínua, sem alterar as aplicações. b) copia arquivos; c) recebe arquivos de parceiros; d) é acesso híbrido a armazenamento.
> **2. c)** Motor diferente exige conversão de esquema, e o [[DMS]] com [[Change Data Capture|CDC]] mantém a indisponibilidade baixa. a) copia arquivos; b) levaria o motor Oracle sem mudar; d) é remessa física.
> **3. d)** O [[Change Data Capture|CDC]] replica as mudanças contínuas depois da carga inicial, e o [[Cutover|cutover]] fica curto. a) é o papel da [[Schema Conversion Tool|SCT]]; b) não é função do CDC; c) o CDC não substitui a [[Replication Instance|instância de replicação]].
> **4. a)** 100 TB × 8 ÷ (1 Gbps × 0,8) são cerca de 11,6 dias. b) e d) subestimam; c) superestima.
> **5. c)** Servidores vão por [[Application Migration Service|MGN]]; o Babelfish entende T-SQL e evita reescrever as consultas, com o [[DMS]] movendo os dados; 60 TB × 8 ÷ (200 Mbps × 0,8) = 3 × 10^6 s, cerca de 35 dias, que cabem nas 8 semanas, então a rede com [[DataSync]] basta. a) o [[Aurora]] MySQL exige reescrever as consultas, e o [[Snowball Edge]] nem é necessário porque a rede cabe no prazo; b) não há plataforma VMware no cenário; d) o DataSync não replica servidores nem bancos, e o [[Transfer Family]] recebe protocolos de parceiros.
> **6. b)** O Compute Optimized processa no local com [[EC2]] e Lambda (conceito cobrado na prova; em projeto real confira a [[Disponibilidade|disponibilidade]], porque o [[Snowball Edge]] está fechado para novos clientes). a) exige internet; c) exige conexão; d) recebe arquivos.
> **7. d)** Os servidores de 1U ou 2U do Outposts cabem em locais pequenos e mantêm as cargas rodando sem o [[Service Link|service link]]; o [[DataSync]] envia o arquivo diário pela rede. a) o rack de 42U não cabe no espaço da loja e o [[Transfer Family]] recebe protocolos de parceiros; b) a [[Local Zone]] fica em infraestrutura da AWS, não na loja, e o [[Snowball Edge|Snowball]] seria exagero para um arquivo diário; c) o [[Volume Gateway]] não executa [[EC2]] e um [[Direct Connect]] novo leva semanas.
> **8. c)** No stored, o conjunto primário fica local, com [[Snapshot|snapshots]] na AWS. a) guarda o primário na AWS; b) e d) são outros tipos de gateway.
> **9. a)** O gateway mantém o acesso [[NFS]] local com cache, e 25 TB × 8 ÷ (1 Gbps × 0,8) são cerca de 2,9 dias, então a rede basta; o Glacier vem por lifecycle. b) o job do Snow importa só para o [[S3]] e o [[Tape Gateway]] fala [[iSCSI]], não NFS; c) o [[DataSync]] copia, mas não mantém o acesso local contínuo; d) o [[Transfer Family]] recebe protocolos de parceiros e o Outposts não é destino de arquivamento.
> **10. a)** O Outposts é hardware da AWS no local do cliente, com [[Service Link|service link]] para a Região. b) não é software do cliente; c) descreve a [[Local Zone]]; d) descreve o [[Wavelength]].
> **11. d)** Mesmo motor, banco pequeno e parada aceitável: as ferramentas nativas são o caminho mais simples e barato. a) a [[Schema Conversion Tool|SCT]] é desnecessária no mesmo motor e o [[Change Data Capture|CDC]] é para parada mínima; b) o [[Application Migration Service|MGN]] leva o servidor para o [[EC2]], não para o [[RDS]]; c) a remessa física é exagero para 100 GB.
> **12. d)** Os [[7 Rs da Migracao|7 Rs]] formam a estrutura de decisão por aplicação. a), b) e c) tratam de outros temas.
> **13. a) e c)** Físico para a massa, [[DataSync]] para o delta e a janela final. b) não migra volume; d) não é destino de arquivos; e) deixaria a fonte defasada.
> **14. a) e b)** O [[Application Migration Service|MGN]] replica em blocos e permite instâncias de teste. c) é da [[Schema Conversion Tool|SCT]]; d) é do [[Transfer Family]]; e) a origem pode ser física, virtual ou de outra nuvem.
> **15. b)** 150 TB × 8 ÷ (100 Mbps × 0,8) = 1,5 × 10^7 s, cerca de 174 dias, bem acima de 70; o Snow importa só para o [[S3]], e o lifecycle leva ao [[S3 Glacier Deep Archive|Deep Archive]]. a) a rede estoura o prazo mesmo gravando direto; c) o job de importação não tem o Glacier como destino; d) o SFTP seria ainda mais lento e é para parceiros.
> **16. c)** A VPN é o início rápido, e o [[Direct Connect]] dá o caminho dedicado depois de semanas ou meses de provisionamento (e não criptografa sozinho). a) o prazo de dois dias é irreal; b) o Direct Connect é privado; d) o Outposts é computação no local, não conexão.

## Próximo módulo

[[24 - Servicos de IA Gerenciados|Módulo 24: Serviços de IA Gerenciados]]
