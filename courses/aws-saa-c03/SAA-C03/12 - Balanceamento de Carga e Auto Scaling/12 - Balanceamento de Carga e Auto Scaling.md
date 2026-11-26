---
aliases:
  - Módulo 12
modulo: 12
parte: "III Computação e armazenamento"
lida: false
tags:
  - modulo
  - saa-c03
---

# Módulo 12: Balanceamento de Carga e Auto Scaling

Uma aplicação que cresce não pode depender de um servidor só. Este módulo mostra as duas peças que tornam a camada de computação **elástica e resiliente**: o **[[Elastic Load Balancing|balanceador de carga]]**, que distribui o tráfego entre vários alvos saudáveis, e o **[[Auto Scaling Group|Auto Scaling]]**, que decide quantos alvos existem e repõe os que falham. Você vai começar pelo porquê (escala horizontal e aplicação sem estado), conhecer a família Elastic Load Balancing ([[Application Load Balancer|ALB]], [[Network Load Balancer|NLB]], [[Gateway Load Balancer|GWLB]] e o legado Classic), entender [[Target Group|target groups]], [[Health Check|health checks]] e [[Cross-Zone Load Balancing|cross-zone]], e então passar ao lado do escalonamento: Auto Scaling Groups, [[Launch Template|launch templates]], políticas de escala, hooks, [[Warm Pool|warm pools]], [[Instance Refresh|instance refresh]], [[Spot Instance|Spot]] e o [[Application Auto Scaling]] para os demais serviços.

O raciocínio do módulo é o da prova: para cada requisito, **que balanceador, que [[Scaling Policy|política de escala]] e que desenho de [[Zona de Disponibilidade|AZs]] entregam [[Disponibilidade|disponibilidade]] e [[Elasticidade|elasticidade]] pelo menor custo e esforço**.

## Aulas

1. [[12.01 - Escalar Horizontalmente e Aplicacao Stateless|Aula 12.1: Escalar horizontalmente e aplicação stateless]]
2. [[12.02 - A Familia Elastic Load Balancing|Aula 12.2: A família Elastic Load Balancing]]
3. [[12.03 - Application Load Balancer a Fundo|Aula 12.3: Application Load Balancer a fundo]]
4. [[12.04 - Network Load Balancer e Gateway Load Balancer|Aula 12.4: Network Load Balancer e Gateway Load Balancer]]
5. [[12.05 - Target Groups Health Checks e Cross-Zone|Aula 12.5: Target groups, health checks e cross-zone]]
6. [[12.06 - Auto Scaling Groups e Launch Templates|Aula 12.6: Auto Scaling Groups e launch templates]]
7. [[12.07 - Politicas de Escala|Aula 12.7: Políticas de escala]]
8. [[12.08 - Ciclo de Vida Hooks e Warm Pools|Aula 12.8: Ciclo de vida, hooks e warm pools]]
9. [[12.09 - Instance Refresh Termination e Spot|Aula 12.9: Instance refresh, terminação e Spot]]
10. [[12.10 - Application Auto Scaling e Arquiteturas Completas|Aula 12.10: Application Auto Scaling e arquiteturas completas]]

## Cobertura do exam guide

| Task do exam guide | Onde é coberto |
|---|---|
| **Task 2.1**: Projetar arquiteturas escaláveis e fracamente acopladas | [[12.01 - Escalar Horizontalmente e Aplicacao Stateless\|Aula 12.1]], [[12.02 - A Familia Elastic Load Balancing\|12.2]], [[12.03 - Application Load Balancer a Fundo\|12.3]], [[12.06 - Auto Scaling Groups e Launch Templates\|12.6]], [[12.07 - Politicas de Escala\|12.7]], [[12.10 - Application Auto Scaling e Arquiteturas Completas\|12.10]] |
| **Task 2.2**: Projetar arquiteturas altamente disponíveis e tolerantes a falhas | [[12.05 - Target Groups Health Checks e Cross-Zone\|Aula 12.5]], [[12.06 - Auto Scaling Groups e Launch Templates\|12.6]], [[12.09 - Instance Refresh Termination e Spot\|12.9]] |
| **Task 3.2**: Projetar soluções de computação de alto desempenho e escaláveis | [[12.04 - Network Load Balancer e Gateway Load Balancer\|Aula 12.4]], [[12.07 - Politicas de Escala\|12.7]], [[12.08 - Ciclo de Vida Hooks e Warm Pools\|12.8]], [[12.10 - Application Auto Scaling e Arquiteturas Completas\|12.10]] |
| **Task 4.2**: Projetar computação de custo otimizado ([[Application Load Balancer\|ALB]], [[Network Load Balancer\|NLB]] e [[Gateway Load Balancer\|GWLB]]; [[Auto Scaling Group\|Auto Scaling]]; [[Spot Instance\|Spot]]) | [[12.02 - A Familia Elastic Load Balancing\|Aula 12.2]], [[12.04 - Network Load Balancer e Gateway Load Balancer\|12.4]], [[12.07 - Politicas de Escala\|12.7]], [[12.09 - Instance Refresh Termination e Spot\|12.9]] |
| Task 3.4: Estratégia de entrega e balanceamento de rede | [[12.02 - A Familia Elastic Load Balancing\|Aula 12.2]] (escolha do balanceador) |
| Task 4.4: Redes de custo otimizado | [[12.05 - Target Groups Health Checks e Cross-Zone\|Aula 12.5]] (custo de tráfego entre [[Zona de Disponibilidade\|AZs]] no [[Network Load Balancer\|NLB]]) |

## Checklist de saída do módulo

Antes de seguir, você deveria conseguir responder, sem consultar:

- [ ] Por que uma aplicação precisa ser [[Stateless|stateless]] para [[Escalabilidade Horizontal|escalar horizontalmente]], e onde o estado deve morar?
- [ ] Por que o [[Application Load Balancer|ALB]] opera em [[Modelo OSI|L7]] e o [[Network Load Balancer|NLB]] em L4, e que requisito do enunciado aponta para cada um (e para o [[Gateway Load Balancer|GWLB]])?
- [ ] Por que o [[Application Load Balancer|ALB]] não tem IP estático, e quais são as duas formas de obter IP fixo com [[HTTP]]?
- [ ] Como o [[Application Load Balancer|ALB]] escolhe a regra, e por que o alvo não vê o IP do cliente (e como a aplicação o recupera)?
- [ ] Por que o [[Health Check|health check]] precisa testar a aplicação sem depender de recursos compartilhados?
- [ ] O que o [[Deregistration Delay|deregistration delay]] protege, e o que o [[Slow Start|slow start]] protege?
- [ ] Por que o [[Cross-Zone Load Balancing|cross-zone]] muda a distribuição de carga e quando ele gera custo?
- [ ] Por que o [[Auto Scaling Group|ASG]] precisa do [[Health Check|health check]] do tipo [[Elastic Load Balancing|ELB]] para substituir uma aplicação travada, e para que serve o [[Health Check Grace Period|grace period]]?
- [ ] Quando usar [[Target Tracking|target tracking]], step, scheduled e predictive, e como funciona o [[Backlog por Instancia|backlog por instância]] para filas?
- [ ] Qual a diferença entre [[EC2 Auto Scaling]] e [[Application Auto Scaling]], e que serviços usam o segundo?

## Teste-se

Cenários que combinam várias aulas do módulo. As questões são inéditas e diferentes das de cada aula.

**1.** Uma loja roda em uma única [[EC2|instância EC2]] grande e guarda as sessões dos usuários na memória do processo. A empresa precisa sobreviver à falha de uma [[Zona de Disponibilidade|AZ]] e absorver picos, mudando o mínimo possível da aplicação. Qual desenho atende?

- [ ] a) Trocar por um tipo de instância maior e habilitar a hibernação.
- [ ] b) Auto Scaling Group em duas AZs atrás de um ALB, com as sessões movidas para o ElastiCache para que qualquer instância atenda qualquer usuário.
- [ ] c) Duas instâncias na mesma AZ com sticky sessions no ALB.
- [ ] d) Um NLB com IP estático na frente da instância única.

**2.** Uma fintech expõe uma API proprietária sobre [[TCP]] a parceiros que só liberam IPs fixos em seus firewalls. A empresa também quer [[Terminacao de TLS|terminar o TLS]] no balanceador com certificado do [[ACM]]. Qual solução atende?

- [ ] a) ALB com listener HTTPS e um Elastic IP associado a cada nó do balanceador, como os parceiros exigem.
- [ ] b) GWLB com um endpoint por parceiro.
- [ ] c) NLB com listener TCP na porta 443, mantendo o certificado nos próprios servidores.
- [ ] d) NLB com Elastic IPs e um listener TLS com certificado do ACM.

**3.** Uma equipe trocou o [[Auto Scaling Group|ASG]] de uma aplicação por outro, criado por [[Infraestrutura como Codigo|infraestrutura como código]]. As instâncias novas estão InService, mas o [[Application Load Balancer|ALB]] devolve 503 em todas as requisições. Qual é a causa mais provável?

- [ ] a) O novo ASG não está associado ao target group do listener.
- [ ] b) O certificado do listener HTTPS expirou durante a troca de grupos.
- [ ] c) O idle timeout de 60 segundos do ALB foi atingido pelas requisições.
- [ ] d) O deregistration delay do target group está configurado em 300 segundos.

**4.** Workers sem estado consomem mensagens de uma [[SQS|fila SQS]] e toleram interrupções. A empresa quer o MENOR custo, mantendo uma capacidade mínima garantida o tempo todo. Qual configuração do [[Auto Scaling Group|ASG]]?

- [ ] a) Todas as instâncias como Reserved Instances de três anos, dimensionadas para o pico.
- [ ] b) Somente instâncias Spot de um único tipo de instância.
- [ ] c) Uma mixed instances policy com uma base pequena de On-Demand e o restante em Spot, com vários tipos de instância e capacity rebalancing.
- [ ] d) Somente instâncias On-Demand com scheduled scaling.

**5.** Um [[Auto Scaling Group|ASG]] com [[Target Tracking|target tracking]] de CPU em 50% escala para fora, e instâncias que levam 4 minutos para ficar prontas continuam sendo contadas como capacidade parcial, o que leva o grupo a escalar além do necessário. Qual ajuste resolve?

- [ ] a) Trocar para simple scaling com cooldown igual a zero, para reagir mais rápido.
- [ ] b) Definir um instance warmup maior que o tempo de boot.
- [ ] c) Reduzir o max do grupo para 2 instâncias, limitando o teto.
- [ ] d) Desligar o health check do tipo ELB do grupo e do balanceador.

**6.** Uma API roda no [[ECS]] com [[Fargate]] e precisa ficar atrás de um [[Application Load Balancer|ALB]], escalando conforme a demanda. (Escolha DUAS.) Quais ações fazem parte da solução?

- [ ] a) Criar o target group do tipo `ip`, pois cada tarefa em `awsvpc` tem seu próprio IP.
- [ ] b) Configurar o Application Auto Scaling com target tracking em `ALBRequestCountPerTarget` para o serviço ECS.
- [ ] c) Criar um Auto Scaling Group de instâncias para o Fargate com um launch template.
- [ ] d) Usar mapeamento dinâmico de portas com target group do tipo `instance`.
- [ ] e) Associar um Elastic IP a cada tarefa.

**7.** Uma empresa gerou uma nova [[AMI]] e quer substituir todas as instâncias de um [[Auto Scaling Group|ASG]], sem criar outro grupo e mantendo pelo menos 90% da capacidade saudável durante a troca. Qual abordagem?

- [ ] a) Atualizar a versão do launch template e aguardar que o scale in e o scale out troquem as instâncias com o tempo.
- [ ] b) Criar um segundo ASG e trocar o DNS manualmente.
- [ ] c) Atualizar o launch template e iniciar um instance refresh com mínimo de 90% saudável.
- [ ] d) Terminar manualmente todas as instâncias de uma vez.

**8.** A aplicação leva 7 minutos para inicializar, e os picos imprevisíveis causam lentidão enquanto as instâncias novas sobem. A empresa quer reduzir o tempo de entrada em serviço sem pagar por instâncias extras rodando. O que usar?

- [ ] a) Um warm pool com instâncias no estado Stopped.
- [ ] b) Aumentar o min do ASG para o valor do pico, mantendo instâncias ociosas.
- [ ] c) Aumentar o health check grace period do grupo para dez minutos.
- [ ] d) Trocar o balanceador por um NLB para reduzir a latência.

**9.** Uma API tem os serviços `/orders` e `/users` em [[Container|contêineres]]. A equipe quer um único [[DNS]] e roteamento por caminho, além de enviar 10% do tráfego de `/orders` para uma versão nova em um segundo [[Target Group|target group]]. Qual configuração atende com o menor esforço?

- [ ] a) Um NLB com dois listeners em portas diferentes.
- [ ] b) Dois ALBs e registros ponderados no Route 53.
- [ ] c) Um Classic Load Balancer com duas instâncias por serviço.
- [ ] d) Um ALB com regra `path-pattern` para `/orders/*` e ação `forward` ponderada 90 e 10 entre os dois target groups.

**10.** Um [[Network Load Balancer|NLB]] atende uma aplicação [[TCP]] em três [[Zona de Disponibilidade|AZs]], com 2, 2 e 8 instâncias por AZ, e a carga ficou desigual. A empresa quer equilibrar pelo MENOR custo. O que fazer?

- [ ] a) Ligar o cross-zone e aceitar a cobrança de tráfego entre AZs.
- [ ] b) Trocar o NLB por um Gateway Load Balancer.
- [ ] c) Manter o mesmo número de instâncias em cada AZ, com o ASG distribuindo igualmente, e deixar o cross-zone desligado para evitar a cobrança de tráfego entre AZs.
- [ ] d) Desligar o health check dos alvos.

**11.** Clientes de um serviço [[TCP]] atrás de um [[Network Load Balancer|NLB]] ficam ociosos por até 15 minutos e recebem RST ao retomar. Os clientes não podem ser alterados. O que fazer?

- [ ] a) Trocar o listener para TLS, que também termina a criptografia.
- [ ] b) Aumentar o idle timeout do listener TCP para 900 segundos.
- [ ] c) Ligar o cross-zone load balancing no balanceador.
- [ ] d) Aumentar o deregistration delay para 900 segundos.

**12.** (Escolha DUAS.) Um [[Auto Scaling Group|ASG]] com [[Target Tracking|target tracking]] de CPU de uma aplicação web reage devagar a aumentos de carga. Quais ações aceleram a resposta?

- [ ] a) Habilitar o monitoramento detalhado, com métricas de 1 minuto, no launch template.
- [ ] b) Usar `ALBRequestCountPerTarget` como métrica de target tracking, por refletir a demanda direta.
- [ ] c) Aumentar o cooldown do grupo.
- [ ] d) Aumentar o deregistration delay.
- [ ] e) Reduzir o max do grupo.

**13.** Uma tabela [[DynamoDB]] em modo provisioned e as [[Read Replica|réplicas de leitura]] de um cluster [[Aurora]] precisam acompanhar a demanda automaticamente. Qual serviço de escala usar?

- [ ] a) EC2 Auto Scaling, com um launch template para cada serviço.
- [ ] b) Scaling plans criados do zero, em vez de políticas de cada serviço.
- [ ] c) Alarmes do CloudWatch acionando funções Lambda que ajustam a capacidade.
- [ ] d) Application Auto Scaling, com target tracking em cada serviço.

**14.** Uma aplicação guarda o carrinho de compras na memória das instâncias e usa [[Sticky Sessions|sticky sessions]]. Quando o [[Auto Scaling Group|ASG]] termina instâncias em um scale in, os usuários perdem o carrinho. Como corrigir de forma durável?

- [ ] a) Mover as sessões para o ElastiCache ou DynamoDB.
- [ ] b) Aumentar a duração do cookie de stickiness para sete dias.
- [ ] c) Desligar o scale in do ASG.
- [ ] d) Ligar o slow start no target group.

**15.** Uma empresa precisa inspecionar o tráfego de saída de 12 [[VPC|VPCs]] com firewalls de um fornecedor entregues como [[AMI]]. Os dois sentidos de cada fluxo devem passar pelo mesmo appliance, e a frota deve escalar. Qual arquitetura?

- [ ] a) Um NLB com listener TLS em cada VPC, terminando o tráfego.
- [ ] b) Um ALB com web ACL do WAF compartilhado entre as VPCs e logs de acesso.
- [ ] c) Um GWLB em uma VPC de inspeção, com GWLB endpoints nas outras VPCs.
- [ ] d) Network ACLs idênticas aplicadas em todas as VPCs.

**16.** Uma loja terá uma venda relâmpago em três semanas, às 12h, com tráfego 15 vezes maior que o normal, além da variação diária comum. Qual combinação protege a [[Disponibilidade|disponibilidade]] com esforço razoável?

- [ ] a) Somente target tracking com alvo de CPU em 20%.
- [ ] b) Uma ação de scheduled scaling que eleva o min e o desired antes do evento, mantendo o target tracking para o que não foi previsto.
- [ ] c) Aumentar manualmente o desired na hora da venda.
- [ ] d) Aumentar o cooldown do grupo antes do evento.

**17.** Workers consomem uma [[SQS|fila SQS]]; cada mensagem leva 0,5 s e o negócio aceita 60 s de espera. Qual [[Metrica|métrica]] de [[Target Tracking|target tracking]] e alvo usar?

- [ ] a) Backlog por instância com alvo de 60 mensagens.
- [ ] b) Backlog por instância com alvo de 30 mensagens.
- [ ] c) Backlog por instância com alvo 120.
- [ ] d) `ApproximateNumberOfMessagesVisible` bruto com alvo 300.

**18.** (Escolha DUAS.) Quais afirmações estão corretas sobre balanceadores e [[Target Group|target groups]]?

- [ ] a) Com todos os alvos `unhealthy`, o ALB faz fail-open e continua enviando tráfego aos alvos.
- [ ] b) O 503 do ALB indica que todos os alvos registrados estão `unhealthy`.
- [ ] c) O idle timeout de um listener TLS do NLB é fixo em 350 segundos.
- [ ] d) O ALB entrega o IP real do cliente na conexão TCP do alvo.
- [ ] e) O cross-zone do NLB não gera cobrança de tráfego entre AZs.

**19.** Um [[Auto Scaling Group|ASG]] tem 3 instâncias na AZ-A e 2 na AZ-B, todas na versão atual do launch template e sem proteção contra scale in. Em um scale in de uma instância, qual o ASG tende a terminar com a política padrão?

- [ ] a) Uma instância da AZ-A, a AZ com mais instâncias.
- [ ] b) A instância mais antiga entre todas as AZs do grupo.
- [ ] c) A instância com menor uso de CPU.
- [ ] d) Uma instância escolhida ao acaso entre as cinco existentes.

**20.** As requisições de uma aplicação terminam em até 2 segundos, e o scale in demora porque cada instância fica 5 minutos em `draining`. O que reduz o tempo sem cortar requisições legítimas?

- [ ] a) Aumentar o deregistration delay para 3600 segundos, garantindo a drenagem.
- [ ] b) Desligar o health check do target group.
- [ ] c) Habilitar o slow start de 300 segundos.
- [ ] d) Reduzir o deregistration delay para cerca de 30 segundos.

> [!success]- Gabarito
> **1. b)** Com o estado externo, as instâncias viram descartáveis e o [[Auto Scaling Group|ASG]] em duas [[Zona de Disponibilidade|AZs]] resolve [[Disponibilidade|disponibilidade]] e escala; a) continua sendo [[Ponto Unico de Falha|ponto único de falha]], c) uma AZ só não sobrevive à falha dela e a sessão se perde se a instância cair, d) IP estático não traz redundância.
> **2. d)** O [[Network Load Balancer|NLB]] oferece IP estático por [[Zona de Disponibilidade|AZ]], aceita protocolos que não são [[HTTP]] e termina [[TLS]] com [[ACM]]; a) o [[Application Load Balancer|ALB]] não aceita [[Elastic IP]] e só fala HTTP, b) o [[Gateway Load Balancer|GWLB]] serve a appliances, c) o [[Listener|listener]] [[TCP]] repassa o TLS sem terminar, contrariando o requisito.
> **3. a)** Sem associação, o [[Auto Scaling Group|ASG]] não registra as instâncias e o [[Target Group|target group]] fica vazio, que é o cenário do 503; b) certificado expirado falha no handshake, c) o idle [[Timeout|timeout]] gera 504 ou 460 e não 503, d) o delay só afeta a drenagem.
> **4. c)** A base On-Demand garante o mínimo e o [[Spot Instance|Spot]] diversificado barateia o restante, com rebalanceamento diante de interrupções; a) paga o pico o tempo todo, b) um tipo só aumenta o risco de falta de capacidade Spot e não garante o mínimo, d) é a opção mais cara.
> **5. b)** O warmup mantém a instância nova fora das métricas agregadas até ela aquecer, evitando escala excessiva; a) o [[Simple Scaling|simple scaling]] é mais lento e menos estável, c) limita o teto sem corrigir a causa, d) o [[Health Check|health check]] não influencia o cálculo da política.
> **6. a) e b)** No [[Fargate]] as tarefas são registradas por IP e o serviço escala pelo [[Application Auto Scaling]]; c) não há instâncias suas no Fargate, d) o mapeamento dinâmico é do launch type [[EC2]] em modo bridge, e) [[Elastic IP]] não se aplica a tarefas.
> **7. c)** O [[Instance Refresh|instance refresh]] substitui instâncias em lotes respeitando o percentual mínimo saudável; a) a troca ficaria indefinida, b) cria outro grupo e trabalho manual, d) derruba a capacidade.
> **8. a)** Instâncias já inicializadas e paradas entram em serviço rápido, e instâncias paradas não cobram computação; b) paga o pico o tempo todo, c) só evita terminar instâncias em boot, d) o tipo de balanceador não encurta o boot.
> **9. d)** O [[Application Load Balancer|ALB]] faz roteamento por caminho e forward ponderado no próprio [[Listener|listener]]; a) o [[Network Load Balancer|NLB]] não lê caminhos, b) funciona, mas dobra balanceadores e trabalho, c) o Classic não tem regras por caminho nem pesos.
> **10. c)** Com alvos iguais por [[Zona de Disponibilidade|AZ]] a carga se equilibra sem [[Cross-Zone Load Balancing|cross-zone]] e sem tráfego pago entre AZs; a) resolve, mas gera cobrança, b) o [[Gateway Load Balancer|GWLB]] serve a appliances, d) o [[Health Check|health check]] não afeta a distribuição.
> **11. b)** O idle [[Timeout|timeout]] do [[Listener|listener]] [[TCP]] é configurável de 60 a 6000 s; a) o timeout do [[TLS]] é fixo em 350 s, c) [[Cross-Zone Load Balancing|cross-zone]] não afeta ociosidade, d) o delay trata de drenagem.
> **12. a) e b)** Métricas de 1 minuto e um sinal mais direto de demanda encurtam a reação; c) o [[Cooldown|cooldown]] bloqueia ações, d) o delay trata de drenagem, e) reduzir o teto limita a escala.
> **13. d)** O [[Application Auto Scaling]] cuida da capacidade de [[DynamoDB]], [[Aurora]], [[ECS]] e outros; a) o [[EC2 Auto Scaling]] só escala [[EC2|instâncias EC2]], b) a documentação orienta migrar os plans para políticas por serviço, c) funciona, mas exige código próprio.
> **14. a)** Com a sessão externa, qualquer instância pode ser terminada sem perda; b) o cookie não impede que a instância seja terminada, c) abandona a [[Elasticidade|elasticidade]] e o custo, d) o [[Slow Start|slow start]] aquece alvos novos e não preserva estado.
> **15. c)** O [[Gateway Load Balancer|GWLB]] mantém afinidade de fluxo e escala appliances de terceiros de forma transparente; a) o [[Network Load Balancer|NLB]] com [[TLS]] termina e não inspeciona em linha, b) o [[WAF]] filtra [[HTTP]] e não faz inspeção de pacotes de terceiros, d) [[Network ACL|NACLs]] não inspecionam conteúdo.
> **16. b)** A [[Scheduled Scaling|ação agendada]] garante a capacidade antes do pico conhecido e o [[Target Tracking|target tracking]] cobre o resto; a) desperdiça capacidade e ainda reage tarde, c) manual é frágil, d) o [[Cooldown|cooldown]] não cria capacidade.
> **17. c)** 60 s ÷ 0,5 s = 120 mensagens por instância, com a fila dividida pelas instâncias em serviço; a) e b) vêm de contas erradas, d) a fila bruta não é proporcional à capacidade.
> **18. a) e c)** O fail-open e o [[Timeout|timeout]] fixo de 350 s do [[TLS]] estão na documentação; b) o 503 vem de [[Target Group|target group]] sem alvos registrados, d) o alvo vê o nó do [[Application Load Balancer|ALB]] e o IP real vem em `X-Forwarded-For`, e) o tráfego entre [[Zona de Disponibilidade|AZs]] do [[Network Load Balancer|NLB]] é cobrado.
> **19. a)** A política padrão escolhe primeiro a [[Zona de Disponibilidade|AZ]] com mais instâncias para manter o equilíbrio; b) a idade só entra depois, dentro da AZ escolhida, c) a CPU não é critério, d) o sorteio só ocorre no empate final.
> **20. d)** Com requisições curtas, 30 s bastam para drenar e aceleram a saída; a) alonga a espera, b) não afeta a drenagem, c) o [[Slow Start|slow start]] trata de alvos novos.

## Próximo módulo

[[13 - Bancos Relacionais RDS e Aurora|Próximo módulo: Bancos Relacionais RDS e Aurora]]
