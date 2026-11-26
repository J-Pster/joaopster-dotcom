---
aliases:
  - Módulo 20
modulo: 20
parte: "VI Resiliência e operações"
lida: false
tags:
  - modulo
  - saa-c03
---

# Módulo 20: Alta Disponibilidade e Recuperação de Desastres

Este módulo junta o que os anteriores ensinaram sobre serviços isolados e responde a uma pergunta de arquiteto: **o que acontece quando as coisas falham?** Primeiro vem a matemática da [[Disponibilidade|disponibilidade]] (noves, série e paralelo, [[MTBF]] e [[MTTR]]) e o conceito de **[[Ponto Unico de Falha|ponto único de falha]]**. Depois, o mapa de **[[Multi-AZ]] e Multi-Region serviço por serviço**, com a distinção entre [[Plano de Controle|plano de controle]] e [[Plano de Dados|plano de dados]] e a [[Estabilidade Estatica|estabilidade estática]]. Em seguida, os objetivos de recuperação (**[[RPO]] e [[RTO]]**) e as **quatro estratégias de DR**, o **[[Backup|AWS Backup]]** com cofres imutáveis, a **[[Replicacao do S3|replicação entre Regiões]]** com o [[Elastic Disaster Recovery]], o **[[Failover|failover]] de tráfego** com o [[Application Recovery Controller]], os **padrões de resiliência** de software, a resiliência de **aplicações legadas sem mudar o código** e, por fim, como **medir e testar** a recuperação.

O raciocínio é o da prova: dado um requisito de [[Disponibilidade|disponibilidade]], [[RPO]] e [[RTO]], qual combinação de serviços entrega o resultado **mais barato** que ainda o cumpre, sem confundir replicação com backup nem depender do [[Plano de Controle|plano de controle]] no pior momento.

## Aulas

1. [[20.01 - Disponibilidade em Noves e o Ponto Unico de Falha|Aula 20.1: Disponibilidade em noves e o ponto único de falha]]
2. [[20.02 - Multi-AZ e Multi-Region Servico por Servico|Aula 20.2: Multi-AZ e Multi-Region, serviço por serviço]]
3. [[20.03 - RPO e RTO e o Custo da Recuperacao|Aula 20.3: RPO e RTO e o custo da recuperação]]
4. [[20.04 - As Quatro Estrategias de Recuperacao de Desastres|Aula 20.4: As quatro estratégias de recuperação de desastres]]
5. [[20.05 - AWS Backup Snapshots e Cofres Imutaveis|Aula 20.5: AWS Backup, snapshots e cofres imutáveis]]
6. [[20.06 - Replicacao entre Regioes e Elastic Disaster Recovery|Aula 20.6: Replicação entre Regiões e Elastic Disaster Recovery]]
7. [[20.07 - Failover de Trafego e Application Recovery Controller|Aula 20.7: Failover de tráfego e Application Recovery Controller]]
8. [[20.08 - Padroes de Resiliencia Imutabilidade Retry e Degradacao|Aula 20.8: Padrões de resiliência: imutabilidade, retry e degradação]]
9. [[20.09 - Tornar Aplicacao Legada Resiliente sem Mudar o Codigo|Aula 20.9: Tornar uma aplicação legada resiliente sem mudar o código]]
10. [[20.10 - Metricas de Negocio SLO e Teste de Recuperacao|Aula 20.10: Métricas de negócio, SLO e teste de recuperação]]

## Cobertura do exam guide

| Task do exam guide | Onde é coberto |
|---|---|
| **Task 2.2**: Projetar arquiteturas altamente disponíveis e tolerantes a falhas | [[20.01 - Disponibilidade em Noves e o Ponto Unico de Falha\|Aula 20.1]], [[20.02 - Multi-AZ e Multi-Region Servico por Servico\|20.2]], [[20.03 - RPO e RTO e o Custo da Recuperacao\|20.3]], [[20.04 - As Quatro Estrategias de Recuperacao de Desastres\|20.4]], [[20.06 - Replicacao entre Regioes e Elastic Disaster Recovery\|20.6]], [[20.07 - Failover de Trafego e Application Recovery Controller\|20.7]], [[20.09 - Tornar Aplicacao Legada Resiliente sem Mudar o Codigo\|20.9]], [[20.10 - Metricas de Negocio SLO e Teste de Recuperacao\|20.10]] |
| **Task 1.3**: Implementar backups, replicação e proteção de dados | [[20.03 - RPO e RTO e o Custo da Recuperacao\|Aula 20.3]], [[20.05 - AWS Backup Snapshots e Cofres Imutaveis\|20.5]], [[20.06 - Replicacao entre Regioes e Elastic Disaster Recovery\|20.6]] |
| Task 2.1: Arquiteturas escaláveis e fracamente acopladas (parcial: padrões de resiliência de software) | [[20.08 - Padroes de Resiliencia Imutabilidade Retry e Degradacao\|Aula 20.8]], [[20.09 - Tornar Aplicacao Legada Resiliente sem Mudar o Codigo\|20.9]] |
| Task 3.3: Bancos de dados de alto desempenho e resilientes (parcial: [[Multi-AZ]], réplicas, [[Aurora Global Database]]) | [[20.02 - Multi-AZ e Multi-Region Servico por Servico\|Aula 20.2]], [[20.06 - Replicacao entre Regioes e Elastic Disaster Recovery\|20.6]] |
| Task 4.x: Custo otimizado (parcial: custo de cada degrau de [[RPO]] e [[RTO]]) | [[20.03 - RPO e RTO e o Custo da Recuperacao\|Aula 20.3]], [[20.04 - As Quatro Estrategias de Recuperacao de Desastres\|20.4]] |

## Checklist de saída do módulo

Antes de seguir, você deveria conseguir responder, sem consultar:

- [ ] Por que a [[Disponibilidade|disponibilidade]] de componentes em série é o produto das disponibilidades, e por que dois componentes em paralelo não somam as falhas?
- [ ] Por que o [[Multi-AZ]] não protege de um `DROP TABLE` nem de ransomware, e o que protege?
- [ ] Por que o [[RPO]] é decidido pela replicação ou pela frequência de backup, e o [[RTO]] pela prontidão da infraestrutura?
- [ ] Por que [[Pilot Light|pilot light]] não atende tráfego sem uma ação, e o [[Warm Standby|warm standby]] atende?
- [ ] Por que o [[Failover|failover]] não deve depender de operações de [[Plano de Controle|plano de controle]], e quais mecanismos usam o [[Plano de Dados|plano de dados]]?
- [ ] Por que o [[Vault Lock]] em [[Modo Compliance|modo compliance]] protege de um administrador malicioso e o governance não?
- [ ] Por que a [[Replicacao do S3|replicação do S3]] não replica os marcadores de exclusão por padrão, e o que isso protege?
- [ ] Por que o [[TTL]] do [[DNS]] pode atrasar o [[Failover|failover]], e quando o [[Global Accelerator]] é a resposta?
- [ ] Por que retentar sem backoff e [[Jitter|jitter]] amplifica uma queda, e por que a operação precisa ser [[Idempotencia|idempotente]]?
- [ ] Por que um plano de DR nunca testado é uma hipótese, e o que um [[Game Day|game day]] mede?

## Teste-se

**1.** Uma aplicação tem balanceador (99,99%), servidores de aplicação (99,9%) e um banco [[RDS]] Single-AZ (99,95%), todos dependendo uns dos outros. Qual a [[Disponibilidade|disponibilidade]] aproximada do conjunto?

- [ ] a) Cerca de 99,84%, o produto das três disponibilidades
- [ ] b) Cerca de 99,99%, igual à maior das três, porque o balanceador domina o resultado
- [ ] c) Cerca de 99,95%, a média simples das três disponibilidades individuais
- [ ] d) Cerca de 99,9%, apenas a menor delas, já que as demais não influenciam

**2.** O site de uma empresa sofreu perda de dados por um `DROP TABLE` em um banco [[RDS]] [[Multi-AZ]]. A empresa quer voltar o banco ao estado de cinco minutos antes. O que atende?

- [ ] a) Promover o standby do Multi-AZ, que tem uma cópia atrasada
- [ ] b) Restaurar com PITR para o instante desejado
- [ ] c) Reiniciar o banco com failover, que desfaz a última operação
- [ ] d) Criar uma réplica de leitura entre Regiões e promovê-la

**3.** Uma fintech exige para o banco [[Aurora]] um [[RPO]] de cerca de 1 minuto e um [[RTO]] de 15 minutos em caso de perda da Região, e também backups que nem um administrador comprometido consiga apagar por 7 anos. O custo deve ser o menor que cumpra tudo. Qual combinação atende?

- [ ] a) Snapshots a cada hora copiados para outra Região em um cofre da mesma conta, com Vault Lock em modo governance e retenção de 7 anos
- [ ] b) Aurora Global Database em outra Região e nenhum backup adicional, já que a replicação guarda uma cópia consistente dos dados
- [ ] c) Aurora Global Database com secundário em outra Região e cópias do AWS Backup em cofre de outra conta com Vault Lock compliance
- [ ] d) Aurora ativo-ativo em três Regiões, com os backups mantidos apenas na Região principal para reduzir o custo de armazenamento

**4.** Uma carga precisa de [[RPO]] de segundos e [[RTO]] de poucos minutos, com um ambiente reduzido já atendendo tráfego na Região de recuperação, e o orçamento não comporta duas frotas completas. Qual estratégia?

- [ ] a) Backup and restore
- [ ] b) Pilot light
- [ ] c) Ativo-ativo com carga total nas duas Regiões
- [ ] d) Warm standby

**5.** (Escolha DUAS.) Uma arquitetura tem [[Application Load Balancer|ALB]] e tarefas [[ECS]] em duas [[Zona de Disponibilidade|AZs]] e [[RDS]] [[Multi-AZ]], mas as [[Sub-rede Privada|sub-redes privadas]] das duas AZs saem para a internet por um único [[NAT Gateway]] zonal na AZ-a. Quais mudanças removem esse [[Ponto Unico de Falha|ponto único de falha]]?

- [ ] a) Criar um NAT Gateway zonal em cada AZ, com a route table de cada sub-rede privada apontando para o NAT da própria AZ
- [ ] b) Trocar o NAT Gateway por um de capacidade maior na AZ-a
- [ ] c) Substituir os NAT Gateways zonais por um NAT Gateway regional
- [ ] d) Trocar o NAT Gateway por uma NAT instance única com EC2 auto recovery
- [ ] e) Criar um segundo NAT Gateway na própria AZ-a como reserva

**6.** Uma aplicação usa [[RDS]] for PostgreSQL com [[Multi-AZ]] instance deployment. Relatórios pesados degradam o banco, e a empresa também quer um caminho de recuperação para a perda da Região, com o menor esforço. O que fazer?

- [ ] a) Apontar os relatórios para o standby do Multi-AZ, que aceita leitura, e confiar nele também para a perda da Região
- [ ] b) Criar uma read replica em outra Região, usá-la para os relatórios e promovê-la no desastre
- [ ] c) Trocar o Multi-AZ por Single-AZ e depender de snapshots diários para os dois requisitos
- [ ] d) Habilitar o RDS Proxy, que direciona os relatórios ao standby e replica o banco entre Regiões

**7.** Um site usa o [[Route 53]] com [[Failover Routing|política de failover]] para um [[Application Load Balancer|ALB]] interno em [[Sub-rede Privada|sub-redes privadas]], com ambiente de recuperação em outra Região. O [[Health Check|health check]] do tipo endpoint apontado para o ALB aparece sempre não saudável. Qual a correção?

- [ ] a) Reduzir o TTL do registro para 10 segundos, para que o failover seja percebido mais rápido pelos clientes
- [ ] b) Trocar por um health check calculado que combine dois endpoints idênticos
- [ ] c) Usar um health check baseado em alarme do CloudWatch sobre a saúde dos alvos
- [ ] d) Mover o ALB para uma sub-rede pública apenas para permitir a verificação

**8.** Clientes fixam IPs em listas de permissão, há um [[Application Load Balancer|ALB]] em cada uma de duas [[Regiao AWS|Regiões]], e o [[Failover|failover]] precisa ocorrer em segundos, sem esperar o cache de [[DNS]]. Qual solução?

- [ ] a) Route 53 com TTL de 1 segundo e failover automático por health check
- [ ] b) CloudFront com um origin group apontando para os dois ALBs
- [ ] c) Um registro CNAME para o ALB da Região principal, reconfigurado manualmente no desastre
- [ ] d) AWS Global Accelerator com um endpoint group em cada Região e IPs anycast fixos

**9.** Uma [[Lambda|função Lambda]] consome uma [[SQS|fila SQS]]. Algumas mensagens malformadas fazem a função falhar, voltam à fila depois do [[Visibility Timeout|visibility timeout]] e giram sem parar, consumindo capacidade. Qual solução?

- [ ] a) Configurar uma DLQ com um número máximo de recebimentos e fazer o redrive depois de corrigir a causa
- [ ] b) Aumentar a retenção da fila para 14 dias para que as mensagens tenham mais tempo de serem processadas
- [ ] c) Trocar a fila padrão por uma fila FIFO, que impede que a mesma mensagem seja entregue mais de uma vez
- [ ] d) Aumentar a memória da função para que ela processe as mensagens malformadas mais rápido

**10.** Uma aplicação legada roda em uma única [[EC2|instância EC2]], com o banco no mesmo servidor, a sessão na memória e os uploads em disco local. O código não pode mudar e a empresa quer [[Alta Disponibilidade|alta disponibilidade]] contra a falha de uma [[Zona de Disponibilidade|AZ]]. Qual combinação?

- [ ] a) Uma instância maior, com snapshots diários do volume, restaurados manualmente em outra AZ quando a instância falhar
- [ ] b) Um ALB com ASG em duas AZs, mas sem tratar a sessão, os uploads nem o banco, que continuam locais em cada instância
- [ ] c) ALB com ASG em duas AZs, sticky sessions, uploads em EFS Regional e banco migrado para RDS Multi-AZ com novo endpoint
- [ ] d) Elastic Disaster Recovery replicando a instância inteira para outra Região, com a recuperação iniciada manualmente no desastre

**11.** O [[Failover|failover]] do [[RDS]] [[Multi-AZ]] derruba conexões de uma aplicação antiga que reconecta devagar. O que reduz o tempo de failover sem alterar o código?

- [ ] a) Route 53 com TTL baixo
- [ ] b) AWS Backup
- [ ] c) ElastiCache
- [ ] d) RDS Proxy

**12.** Uma aplicação global em duas [[Regiao AWS|Regiões]] grava em uma tabela chave-valor e lê e grava objetos pela API do [[S3]]. Ela precisa de gravação local em cada Região e de um endpoint único para o S3 com possibilidade de [[Failover|failover]], com o menor overhead. Qual combinação?

- [ ] a) Aurora Global Database para os dados e S3 One Zone-IA com cópia manual dos objetos entre Regiões
- [ ] b) DynamoDB Global Tables e S3 Multi-Region Access Point com replicação entre os buckets
- [ ] c) DynamoDB com PITR e replicação do S3 na mesma Região
- [ ] d) RDS read replicas entre Regiões e snapshots de EBS copiados semanalmente

**13.** Durante um evento regional, o plano de DR depende de o [[Auto Scaling Group|Auto Scaling]] criar 200 instâncias na Região de recuperação. Qual o principal risco?

- [ ] a) Criar capacidade é plano de controle, e ela pode faltar naquele momento
- [ ] b) As instâncias novas são cobradas em dobro pela AWS durante eventos regionais excepcionais
- [ ] c) O Auto Scaling só opera na Região original e não consegue criar instâncias em outra Região
- [ ] d) As instâncias novas têm RPO maior, porque nascem sem os dados mais recentes do banco

**14.** O produto quer ser avisado antes dos clientes e disparar o plano de DR somente quando a falha for real, sem alternar de Região por falso alarme. Qual combinação?

- [ ] a) Alarme de CPU nas instâncias, com failover automático imediato no primeiro ponto acima do limite configurado
- [ ] b) Alarme de memória por instância, com a decisão sempre tomada por quem estiver de plantão naquele dia da semana
- [ ] c) Canários do Synthetics com alarme composto de falhas consecutivas, e decisão manual com passos automatizados
- [ ] d) AWS Backup com restore testing, usado como gatilho do failover quando um teste falhar

**15.** (Escolha DUAS.) Quais práticas protegem backups de uma conta comprometida?

- [ ] a) Copiar backups para uma conta separada
- [ ] b) Manter o cofre na mesma conta com a política padrão
- [ ] c) Cofre com Vault Lock em modo compliance ou cofre logicamente isolado
- [ ] d) Reduzir a retenção para 7 dias
- [ ] e) Habilitar o armazenamento frio

**16.** (Escolha DUAS.) Quais afirmações sobre [[Replicacao do S3|S3 Replication]] estão corretas?

- [ ] a) Exige versionamento nos buckets de origem e destino
- [ ] b) Replica por padrão os marcadores de exclusão
- [ ] c) O Replication Time Control tem meta de 99,9% dos objetos em 15 minutos
- [ ] d) Replica automaticamente os objetos criados antes da regra
- [ ] e) Exige que os buckets estejam na mesma Região

> [!success]- Gabarito
> **1. a)** Em série a [[Disponibilidade|disponibilidade]] é o produto: 0,9999 x 0,999 x 0,9995 é cerca de 99,84%. O maior valor (b), a média (c) e o menor valor (d) não descrevem dependência em série.
> **2. b)** O [[Point-in-Time Recovery|PITR]] restaura o estado de um instante escolhido. O standby (a) e a réplica entre [[Regiao AWS|Regiões]] (d) já replicaram o `DROP TABLE`, e o [[Failover|failover]] (c) não desfaz operações.
> **3. c)** O Global Database entrega [[RPO]] de segundos e [[RTO]] abaixo de 1 minuto com o custo de um secundário, e o cofre em outra conta com compliance resiste a administrador comprometido. Governance na mesma conta (a) pode ser removido e cai com a conta, só a replicação (b) copia a exclusão, e o [[Multi-Site Active-Active|ativo-ativo]] em três [[Regiao AWS|Regiões]] (d) custa mais que o pedido e deixa os backups expostos.
> **4. d)** Ambiente reduzido já atendendo é o [[Warm Standby|warm standby]]. O [[Backup and Restore|backup and restore]] (a) é lento, o [[Pilot Light|pilot light]] (b) tem a aplicação desligada, e o [[Multi-Site Active-Active|ativo-ativo]] (c) custa duas frotas completas.
> **5. a), c)** Um [[NAT]] zonal por [[Zona de Disponibilidade|AZ]] ou um [[NAT Gateway]] regional (que expande entre AZs) elimina o ponto único. Um NAT maior (b) continua em uma AZ, a [[NAT Instance|NAT instance]] única (d) continua em uma AZ, e um segundo NAT na mesma AZ (e) não resiste à perda dela.
> **6. b)** A [[Read Replica|read replica]] atende relatórios e, entre [[Regiao AWS|Regiões]], serve de DR com promoção. O standby do [[Multi-AZ]] instance não aceita leitura e é intra-Região (a), o Single-AZ com [[Snapshot|snapshots]] (c) piora tudo, e o [[RDS Proxy]] (d) não roteia para o standby nem replica entre Regiões.
> **7. c)** Os verificadores do [[Route 53]] estão na internet pública e não alcançam recursos privados; o [[Health Check|health check]] baseado em alarme usa uma [[Metrica|métrica]] interna. O [[TTL]] (a) não muda a verificação, o calculado (b) combina verificações que continuam falhando, e expor o [[Application Load Balancer|ALB]] (d) quebra o requisito de rede privada.
> **8. d)** O [[Global Accelerator]] usa [[Anycast|IPs anycast]] fixos e redireciona em segundos, sem cache de [[DNS]]. O [[Route 53]] (a) e o [[CNAME]] (c) sofrem cache, e o [[CloudFront]] (b) não oferece IP fixo para a API.
> **9. a)** A [[Dead-Letter Queue|DLQ]] retira a mensagem do ciclo depois do máximo de recebimentos e o redrive a devolve após o conserto. Reter por mais tempo (b) só prolonga o loop, a FIFO (c) não impede reentrega após falha, e mais memória (d) não conserta uma mensagem malformada.
> **10. c)** [[Sticky Sessions|Sticky sessions]] tratam a sessão sem mudar o código, o [[EFS]] compartilha os uploads entre [[Zona de Disponibilidade|AZs]], e o [[RDS]] [[Multi-AZ]] com o mesmo engine tira o banco da instância. A opção (a) mantém o ponto único, a (b) deixa estado local divergente entre instâncias, e o [[Elastic Disaster Recovery|EDR]] (d) é DR de servidores, não [[Alta Disponibilidade|alta disponibilidade]] entre AZs.
> **11. d)** O [[RDS Proxy]] mantém o pool e reduz o [[Failover|failover]] em até 66% para [[Multi-AZ]] instance. O [[TTL]] (a) não preserva conexões, o Backup (b) restaura, e o [[ElastiCache]] (c) é cache.
> **12. b)** As [[Global Tables]] dão gravação local multi-ativa, e o [[Multi-Region Access Point]] oferece endpoint único com controles de [[Failover|failover]] sobre buckets replicados. O [[Aurora]] (a) é relacional e o One Zone-IA não resiste à perda de [[Zona de Disponibilidade|AZ]], o [[Point-in-Time Recovery|PITR]] e a [[Replicacao do S3|SRR]] (c) não são multi-Região, e as réplicas e [[Snapshot|snapshots]] (d) não dão gravação local.
> **13. a)** Criar capacidade é [[Plano de Controle|plano de controle]], e a AWS não garante capacidade sob demanda em um evento regional. A cobrança em dobro (b) não existe, o [[Auto Scaling Group|Auto Scaling]] existe em qualquer Região (c), e o [[RPO]] vem da replicação de dados, não da criação de instâncias (d).
> **14. c)** Canários detectam a falha do ponto de vista do usuário, e o [[Composite Alarm|alarme composto]] com persistência mais a decisão manual com passos automatizados evita o falso alarme. CPU com [[Failover|failover]] imediato (a) é a causa do falso positivo, a decisão sem sinal de negócio (b) não detecta antes dos clientes, e o [[Restore Testing|restore testing]] (d) valida backups, não a saúde de produção.
> **15. a), c)** Outra conta isola da conta comprometida, e o compliance ou o cofre isolado impedem a exclusão. Cofre padrão (b), retenção curta (d) e armazenamento frio (e) não protegem.
> **16. a), c)** A replicação exige [[Versionamento|versionamento]] nos dois lados, e o [[Replication Time Control|RTC]] tem a meta de 99,9% em 15 minutos. Os marcadores de exclusão não são replicados por padrão (b), objetos antigos exigem a [[Batch Replication|replicação em lote]] (d), e a [[Replicacao do S3|CRR]] usa [[Regiao AWS|Regiões]] diferentes (e).

## Próximo módulo

[[21 - Observabilidade Automacao e Operacoes|Próximo módulo: Observabilidade, Automação e Operações]]
