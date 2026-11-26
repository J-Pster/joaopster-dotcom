---
aliases:
  - Módulo 9
modulo: 9
parte: "III Computação e armazenamento"
lida: false
tags:
  - modulo
  - saa-c03
---

# Módulo 9: EC2 a Fundo

O [[EC2]] é a peça mais antiga e mais flexível da AWS: um servidor virtual que você escolhe, configura, paga e descarta. Este módulo abre a caixa. Você vai entender como a instância é construída ([[Nitro]] e [[AMI]]), como escolher a família e o tamanho certos (incluindo [[Graviton]] e instâncias [[Credito de CPU|burstable]]), como a rede e o disco se ligam a ela, o que acontece em cada estado do ciclo de vida, como ela se configura sozinha, e como pagar menos por ela ([[Savings Plans]], [[Reserved Instance|Reserved Instances]], [[Spot Instance|Spot]], reservas de capacidade). No fim, vem a posição física ([[Placement Group|placement groups]]) e a computação em [[Processamento em Lote|lote]] e de alto desempenho ([[Batch|AWS Batch]] e HPC).

O raciocínio do módulo é o mesmo da prova: para cada carga, **qual combinação de tipo, rede, ciclo de vida e modelo de compra entrega o desempenho certo pelo menor custo, sem perder resiliência**.

## Aulas

1. [[09.01 - Instancia Nitro e AMI|Aula 9.1: Instância, Nitro e AMI]]
2. [[09.02 - Familias Graviton e Burstable|Aula 9.2: Famílias, Graviton e instâncias burstable]]
3. [[09.03 - Rede e Disco da Instancia|Aula 9.3: Rede e disco da instância]]
4. [[09.04 - Ciclo de Vida User Data e Metadados|Aula 9.4: Ciclo de vida, user data e metadados]]
5. [[09.05 - Compra Savings Plans e Reserved Instances|Aula 9.5: Opções de compra I, Savings Plans e Reserved Instances]]
6. [[09.06 - Spot Dedicated e Capacity Reservations|Aula 9.6: Opções de compra II, Spot, Dedicated e Capacity Reservations]]
7. [[09.07 - Placement Groups|Aula 9.7: Placement Groups]]
8. [[09.08 - AWS Batch e Computacao de Alto Desempenho|Aula 9.8: AWS Batch e computação de alto desempenho]]

## Cobertura do exam guide

| Task do exam guide | Onde é coberto |
|---|---|
| **Task 3.2**: Projetar soluções de computação de alto desempenho e escaláveis | [[09.01 - Instancia Nitro e AMI\|Aula 9.1]], [[09.02 - Familias Graviton e Burstable\|9.2]], [[09.03 - Rede e Disco da Instancia\|9.3]], [[09.07 - Placement Groups\|9.7]], [[09.08 - AWS Batch e Computacao de Alto Desempenho\|9.8]] |
| **Task 4.2**: Projetar computação de custo otimizado | [[09.02 - Familias Graviton e Burstable\|Aula 9.2]] ([[Compute Optimizer]], [[Rightsizing\|rightsizing]]), [[09.04 - Ciclo de Vida User Data e Metadados\|9.4]] (hibernar ou parar ambientes não produtivos), [[09.05 - Compra Savings Plans e Reserved Instances\|9.5]], [[09.06 - Spot Dedicated e Capacity Reservations\|9.6]] (inclui [[EC2 Fleet]]), [[09.08 - AWS Batch e Computacao de Alto Desempenho\|9.8]] |
| Task 2.2: Arquiteturas tolerantes a falhas | [[09.01 - Instancia Nitro e AMI\|Aula 9.1]] ([[Infraestrutura Imutavel\|infraestrutura imutável]]), [[09.06 - Spot Dedicated e Capacity Reservations\|9.6]], [[09.07 - Placement Groups\|9.7]] |
| Task 1.1: Projetar arquiteturas de acesso seguro | [[09.04 - Ciclo de Vida User Data e Metadados\|Aula 9.4]] ([[IAM Role\|IAM role]] por [[Instance Profile\|instance profile]]) |
| Task 1.2: Projetar workloads e aplicações seguros | [[09.04 - Ciclo de Vida User Data e Metadados\|Aula 9.4]] ([[Instance Metadata Service\|IMDSv2]] contra [[SSRF]]) |
| Task 3.1: Armazenamento de alto desempenho | [[09.03 - Rede e Disco da Instancia\|Aula 9.3]] ([[Instance Store\|instance store]], EBS-optimized); aprofundado no [[10 - Armazenamento em Bloco e Arquivos EBS EFS FSx\|Módulo 10]] |

## Checklist de saída do módulo

Antes de seguir, você deveria conseguir responder, sem consultar:

- [ ] Por que a [[AMI]] é regional e por que é específica de arquitetura, e por que o [[User Data|user data]] não vai nela?
- [ ] Por que o [[Nitro]] mudou a velocidade e a segurança do [[EC2]], e o que o `.metal` entrega?
- [ ] Como ler o nome `m6gd.xlarge` e qual família escolher para cada tipo de carga?
- [ ] Por que uma [[Credito de CPU|instância burstable]] para de ser rápida, e o que muda entre créditos Standard e Unlimited?
- [ ] O que acontece com os IPs, o disco e a cobrança em reboot, stop, [[Hibernacao de EC2|hibernate]] e terminate?
- [ ] Por que o [[Instance Metadata Service|IMDSv2]] bloqueia o roubo de credenciais por [[SSRF]]?
- [ ] Qual a diferença entre Compute [[Savings Plans]], [[EC2]] Instance Savings Plans e [[Reserved Instance|Reserved Instances]], e qual delas reserva capacidade?
- [ ] Quando [[Spot Instance|Spot]], [[Dedicated Host]] e [[Capacity Reservation]] fazem sentido, e quando não?
- [ ] Qual [[Placement Group|placement group]] usar para HPC, para [[Apache Kafka|Kafka]] e para três nós críticos?
- [ ] Por que um [[Processamento em Lote|lote]] longo vai para o [[Batch|AWS Batch]] e não para o Lambda?

## Teste-se

**1.** Uma empresa quer migrar uma frota estável de `m5` para [[Graviton]] no meio do prazo e manter um compromisso de preço que continue valendo depois da troca de família, de Região e até para [[Fargate]]. Qual opção atende?

- [ ] a) EC2 Instance Savings Plan de `m5` por três anos
- [ ] b) Reserved Instances Standard zonais de `m5`
- [ ] c) Um Dedicated Host de `m5` com compromisso de 1 ano
- [ ] d) Compute Savings Plan, de 1 ou 3 anos

**2.** Uma aplicação demora 20 minutos para carregar dados na memória, e o ambiente de homologação fica parado à noite. A equipe quer retomar do mesmo ponto sem pagar computação parada. Qual recurso usar?

- [ ] a) Hibernação, habilitada no lançamento, com o volume raiz criptografado
- [ ] b) Reiniciar a instância (reboot) e recarregar os dados
- [ ] c) Criar uma AMI e lançar uma nova instância
- [ ] d) Parar a instância e iniciá-la de novo, sem hibernação

**3.** Uma aplicação web em [[EC2]] está sujeita a [[SSRF]], e a empresa quer impedir o roubo das credenciais da role pelo [[Instance Metadata Service|serviço de metadados]], sem alterar o código da aplicação. O que fazer?

- [ ] a) Colocar a instância em uma sub-rede pública
- [ ] b) Exigir o IMDSv2 (token obrigatório) nas instâncias
- [ ] c) Gravar as chaves de acesso no user data
- [ ] d) Desativar a role e usar variáveis de ambiente

**4.** Um cluster de HPC com 100 nós, em que cada nó troca dados com os outros a cada passo, precisa da menor [[Latencia|latência]] possível, e a equipe quer ter a vaga garantida antes do pico. Qual combinação atende?

- [ ] a) Cluster placement group, EFA e reserva no grupo
- [ ] b) Spread placement group em três AZs, com um Savings Plan cobrindo os nós
- [ ] c) Partition placement group com Spot Instances, em várias AZs
- [ ] d) Instâncias comuns espalhadas em várias Regiões

**5.** Quais DUAS afirmações sobre [[Elastic IP]] e [[ENI]] são verdadeiras? (Escolha DUAS.)

- [ ] a) Um Elastic IP associado a uma instância em execução não gera cobrança, pois o IPv4 público é gratuito
- [ ] b) A ENI e seu IP privado continuam existindo se forem criados separadamente da instância e depois anexados
- [ ] c) Um Elastic IP pode ser remapeado para outra instância para redirecionar o tráfego
- [ ] d) Toda instância precisa de um Elastic IP para ter IPv4 público
- [ ] e) Uma ENI pode ser anexada a instâncias de qualquer AZ da Região

**6.** Uma empresa precisa de 20 instâncias constantes e, durante 6 horas por dia, de 30 instâncias extras que toleram interrupção, com [[Disponibilidade|disponibilidade]] garantida para a base. Qual combinação é mais econômica?

- [ ] a) Savings Plan para as 50 instâncias, 24 horas por dia
- [ ] b) Reserved Instances para as 50, para cobrir também o pico
- [ ] c) Spot para a base e Capacity Reservations para as extras
- [ ] d) Savings Plan para a base e Spot para o pico

**7.** Uma equipe terminou 30 [[Spot Instance|instâncias Spot]] lançadas por uma requisição persistent, mas novas instâncias continuam aparecendo. Como encerrar de vez?

- [ ] a) Cancelar a requisição e terminar as instâncias
- [ ] b) Terminar as instâncias quantas vezes for preciso, até a AWS parar de relançá-las
- [ ] c) Mudar a estratégia de alocação para capacity-optimized, que impede o relançamento
- [ ] d) Reduzir o preço máximo da requisição para zero

**8.** Uma equipe parou 10 instâncias à noite para economizar, mas a fatura continua alta. Quais DUAS cobranças continuam com as instâncias paradas? (Escolha DUAS.)

- [ ] a) As horas de vCPU, cobradas pela tarifa On-Demand
- [ ] b) O IPv4 público de instâncias paradas, que é gratuito até a próxima inicialização
- [ ] c) Os volumes EBS anexados às instâncias
- [ ] d) Os Elastic IPs que ficaram associados a instâncias paradas
- [ ] e) O tráfego de entrada, que só é cobrado quando a instância está parada

**9.** Uma empresa precisa transcodificar 30.000 vídeos por noite, cada um com cerca de uma hora de processamento, em [[Container|contêiner]], sem administrar servidores e com custo mínimo. Qual solução é mais adequada?

- [ ] a) Funções Lambda acionadas por evento, uma por vídeo
- [ ] b) Uma frota de instâncias On-Demand sempre ligada
- [ ] c) AWS Batch com ambiente Spot e array jobs
- [ ] d) Um servidor grande processando um vídeo por vez

**10.** Um cluster [[Apache Kafka|Kafka]] com 60 nós precisa que a falha de um rack não elimine todas as réplicas de um mesmo tópico. Qual [[Estrategia de Placement|estratégia de placement]] group usar?

- [ ] a) Spread, com as 60 instâncias distribuídas em uma só AZ
- [ ] b) Cluster placement group em uma única AZ
- [ ] c) Partition, réplicas em partições diferentes
- [ ] d) Nenhuma, deixando o posicionamento ao acaso

**11.** Uma `t3.medium` rodando um site fica lenta toda tarde, e as métricas mostram o saldo de [[Credito de CPU|créditos de CPU]] zerado. O [[Compute Optimizer]] mostra que a memória está bem dimensionada (o [[CloudWatch Agent|agente do CloudWatch]] está instalado). Qual é a ação mais coerente?

- [ ] a) Trocar para uma instância com mais memória na mesma família de CPU
- [ ] b) Anexar um volume EBS maior ao servidor
- [ ] c) Créditos Unlimited ou família de desempenho constante
- [ ] d) Trocar o armazenamento para instance store

**12.** Uma equipe de [[Recuperacao de Desastres|recuperação de desastres]] quer garantir capacidade em uma [[Zona de Disponibilidade|AZ]] específica sem compromisso de 1 ou 3 anos, e ainda receber desconto na tarifa. Qual combinação atende?

- [ ] a) Compute Savings Plan sozinho, que também reserva a vaga na AZ
- [ ] b) Capacity Reservation mais Savings Plan
- [ ] c) Spot Instances com preço máximo alto, para disputar a vaga
- [ ] d) Reserved Instance Standard regional de 3 anos

**13.** Um engenheiro editou o [[User Data|user data]] de uma instância em execução e reiniciou, mas o novo script não rodou. Qual a explicação?

- [ ] a) O user data só roda em instâncias lançadas em sub-redes privadas
- [ ] b) O reboot apaga o user data gravado na instância
- [ ] c) Roda só no primeiro boot, e editar exige parar a instância
- [ ] d) O script passou do limite de 16 KB e foi ignorado pelo agente

**14.** Uma instância com status check de sistema falhando por problema no hardware do host precisa se recuperar sozinha, mantendo ID, [[RFC 1918|IP privado]], [[Elastic IP]] e metadados. Qual recurso atende?

- [ ] a) Um alarme do CloudWatch com ação de recover
- [ ] b) Um Auto Scaling group que substitui a instância por outra com ID novo
- [ ] c) Reiniciar a instância manualmente quando alguém perceber
- [ ] d) Criar uma AMI e lançar uma nova instância

**15.** Uma carga de 30% de utilização roda 24 horas por dia em uma única instância. A equipe cogita um compromisso de 1 ano. Qual é a melhor orientação?

- [ ] a) Comprar uma RI Standard de 3 anos, All Upfront, para maximizar o desconto
- [ ] b) Comprar um Compute Savings Plan cobrindo 100% do gasto da instância
- [ ] c) Rightsizing e On-Demand ou Spot, sem compromisso
- [ ] d) Comprar uma RI zonal, para garantir a vaga

**16.** Uma aplicação grava dados temporários de altíssima velocidade em disco local e não precisa deles após o desligamento. Qual armazenamento encaixa?

- [ ] a) Um volume EBS io2, replicado dentro da AZ
- [ ] b) Um bucket do S3 com versionamento ligado
- [ ] c) Um sistema de arquivos EFS em modo bursting
- [ ] d) Instance store (NVMe local), que se perde ao parar

> [!success]- Gabarito
> **1. d)** O Compute [[Savings Plans|Savings Plan]] cobre qualquer família, Região e também [[Fargate]] e Lambda; a) o [[EC2]] Instance SP prende a família e a Região, b) a [[Reserved Instance|RI]] zonal prende o tipo e a [[Zona de Disponibilidade|AZ]], c) o [[Dedicated Host]] serve a licença e não à flexibilidade.
> **2. a)** A [[Hibernacao de EC2|hibernação]] grava a [[RAM]] no volume raiz criptografado e retoma do mesmo ponto, sem cobrar computação parada; b) o reboot perde a memória, c) uma nova instância não traz a RAM, d) o stop comum também descarta a RAM.
> **3. b)** O [[Instance Metadata Service|IMDSv2]] exige token e bloqueia o GET simples de uma falha de [[SSRF]]; a) [[Sub-rede Publica|sub-rede pública]] não protege, c) chaves no [[User Data|user data]] é a pior prática, d) variáveis de ambiente continuam sendo chaves de longo prazo.
> **4. a)** Cluster com [[EFA]] dá a menor [[Latencia|latência]], e a [[Capacity Reservation]] dentro do grupo garante a vaga; b) o spread afasta os nós e o [[Savings Plans|Savings Plan]] não reserva vaga, c) o partition prioriza isolamento e [[Spot Instance|Spot]] pode ser retirado, d) várias [[Regiao AWS|Regiões]] aumentam a latência.
> **5. b) e c)** A [[ENI]] criada à parte mantém seu [[RFC 1918|IP privado]] e o [[Elastic IP]] pode ser remapeado; a) o [[IPv4]] público tem cobrança por hora, mesmo em uso, d) o IPv4 público automático existe sem Elastic IP, e) a ENI só anexa a instâncias da mesma [[Zona de Disponibilidade|AZ]].
> **6. d)** Base estável com compromisso e pico sem compromisso, em [[Spot Instance|Spot]] por tolerar interrupção; a) comprometer o pico paga 24 horas o que se usa 6, b) a mesma armadilha com [[Reserved Instance|RI]], c) Spot na base arrisca a [[Disponibilidade|disponibilidade]] e reservas para o pico pagam capacidade ociosa.
> **7. a)** A requisição persistent reabre ao terminar a instância e relança, então é preciso cancelá-la antes; b) cada término reabre a requisição, c) a estratégia de alocação não controla o relançamento, d) o preço máximo não é o que mantém a requisição viva.
> **8. c) e d)** [[EBS|Volumes EBS]] e [[Elastic IP|Elastic IPs]] ociosos seguem cobrando; a) o [[vCPU]] não é cobrado com a instância parada, b) o [[IPv4]] público é cobrado por hora e é liberado ao parar, e) o tráfego de entrada é gratuito em qualquer estado.
> **9. c)** Lote longo, independente e sensível a custo é o caso de Batch com [[Spot Instance|Spot]] e array jobs; a) uma hora passa do limite de 30 minutos do Lambda, b) frota sempre ligada paga ociosidade, d) um vídeo por vez não termina na noite.
> **10. c)** Partition coloca cada partição em racks próprios e a aplicação distribui as réplicas; a) o spread aceita no máximo 7 instâncias por [[Zona de Disponibilidade|AZ]], b) o cluster concentra o risco, d) sem controle não há garantia de racks distintos.
> **11. c)** Sem créditos, a CPU cai ao nível de base; Unlimited ou uma família de desempenho constante resolve; a) a memória já está adequada, b) e d) não tratam o saldo de créditos.
> **12. b)** A reserva dá a vaga sem prazo e o [[Savings Plans|Savings Plan]] dá o desconto; a) o Savings Plan não reserva vaga, c) [[Spot Instance|Spot]] pode ser interrompida, d) a [[Reserved Instance|RI]] regional não reserva capacidade e tem prazo de 3 anos.
> **13. c)** O [[User Data|user data]] roda só no primeiro boot por padrão e só é editável com a instância parada; a) roda em qualquer [[Sub-rede|sub-rede]], b) o reboot não apaga o user data, d) o limite de 16 KB não é a causa aqui.
> **14. a)** O alarme com ação de recover recupera a instância mantendo ID, [[RFC 1918|IP privado]], [[Elastic IP]] e metadados; b) o [[Auto Scaling Group|Auto Scaling]] troca por outra instância com ID novo, c) o reboot manual não resolve falha de hardware do host, d) uma nova instância muda o ID e o IP privado.
> **15. c)** Com 30% de utilização o compromisso custa mais que pagar por uso, então [[Rightsizing|rightsizing]], On-Demand ou [[Spot Instance|Spot]] vêm primeiro; a) três anos adiantado agrava o prejuízo, b) o Compute SP também cobra o compromisso nas horas ociosas, d) a [[Reserved Instance|RI]] zonal é cobrada mesmo parada.
> **16. d)** O [[Instance Store|instance store]] é o disco NVMe local, rápido e efêmero; a) o [[io2]] é durável e mais caro para dado descartável, b) o [[S3]] é objeto e não disco local, c) o [[EFS]] é compartilhado e de [[Latencia|latência]] maior.

## Próximo módulo

[[10 - Armazenamento em Bloco e Arquivos EBS EFS FSx|Próximo módulo: Armazenamento em Bloco e Arquivos EBS EFS FSx]]
