---
aliases:
  - Módulo 17
modulo: 17
parte: "V Arquiteturas modernas"
dominios:
  - 2
  - 3
  - 4
lida: false
tags:
  - modulo
  - saa-c03
  - modulo-17
---

# Módulo 17: Containers, ECS, EKS e Fargate

Este módulo responde a uma pergunta de arquitetura: como empacotar uma aplicação para rodar igual em qualquer lugar e, na AWS, **quem orquestra os [[Container|containers]] e quem gerencia os servidores por baixo**? Você vai entender o que é um container e por que ele precisa de um orquestrador, guardar imagens no [[ECR]], rodar tarefas e serviços no [[ECS]], publicá-los atrás de um balanceador com escala e deploys seguros, escolher a capacidade ([[Fargate]], [[EC2]] ou [[ECS Managed Instances]]), conhecer o [[EKS]] ([[Kubernetes]] gerenciado), migrar uma aplicação legada para containers com o [[Elastic Beanstalk]] como atalho, e fechar com a tabela de decisão entre todas as formas de computação.

> [!info] O que este módulo assume
> A [[09 - EC2 a Fundo|computação em EC2]] e o [[12 - Balanceamento de Carga e Auto Scaling|balanceamento e Auto Scaling]] aparecem o tempo todo, porque o [[ECS]] em [[EC2]] usa os dois. A rede privada ([[06 - VPC a Fundo|Módulo 6]]), as permissões ([[04 - IAM Identidade e Acesso|Módulo 4]]) e os dados persistentes ([[10 - Armazenamento em Bloco e Arquivos EBS EFS FSx|Módulo 10]]) sustentam o resto. O [[Lambda]], a alternativa [[Serverless|sem servidor]] para trabalho curto e orientado a eventos, foi visto no [[16 - Serverless Lambda e API Gateway|Módulo 16]].

> [!warning] Preços e limites mudam
> Valores como o preço do [[Fargate]], a cobrança do cluster [[EKS]] e os modos de deploy do [[ECS]] foram atualizados pela AWS ao longo do tempo (verificado em novembro de 2026). Em dúvida, confira a documentação e as páginas de preço antes de decidir.

## Aulas

1. [[17.01 - Por que Containers e Como Eles Funcionam|17.1 Por que containers e como eles funcionam]]: isolamento por [[Namespaces e Cgroups|namespaces e cgroups]], imagem e registry, [[Container|container]] contra VM e contra Lambda, e o papel do orquestrador.
2. [[17.02 - ECR Repositorio de Imagens|17.2 ECR, repositório de imagens]]: registry privado, varredura, replicação, políticas de ciclo de vida e [[VPC Endpoint|endpoints de VPC]].
3. [[17.03 - ECS Cluster Task Definition e Service|17.3 ECS: cluster, task definition e service]]: task, service, [[Task Role|task role]] contra execution role, modo `awsvpc` e segredos.
4. [[17.04 - ECS em Producao Balanceador Escala e Deploys|17.4 ECS em produção: balanceador, escala e deploys]]: alvos do tipo IP, [[Application Auto Scaling|service auto scaling]], estratégias de deploy e Service Connect.
5. [[17.05 - Capacidade Fargate EC2 e Managed Instances|17.5 Capacidade: Fargate, EC2 e Managed Instances]]: tamanhos e preço do [[Fargate]], [[Capacity Provider|capacity providers]], [[Spot Instance|Spot]], placement e cluster auto scaling.
6. [[17.06 - EKS Kubernetes Gerenciado na AWS|17.6 EKS: Kubernetes gerenciado na AWS]]: [[Plano de Controle|plano de controle]], opções de computação, [[Karpenter]], rede, [[IRSA]] e [[EKS Pod Identity|Pod Identity]].
7. [[17.07 - Migrar para Containers e Elastic Beanstalk|17.7 Migrar para containers e Elastic Beanstalk]]: roteiro de migração, estado externalizado e políticas de deploy do [[Elastic Beanstalk|Beanstalk]].
8. [[17.08 - Escolhendo a Computacao Tabela de Decisao|17.8 Escolhendo a computação, tabela de decisão]]: árvore de decisão, custo, ambientes híbridos (Anywhere, Distro, [[EKS Hybrid Nodes|Hybrid Nodes]]) e padrões.

## Cobertura do exam guide

| Task statement | Onde está |
|---|---|
| **2.1** Projetar arquiteturas escaláveis e fracamente acopladas (quando usar [[Container\|containers]], [[Orquestracao\|orquestração]]) | [[17.01 - Por que Containers e Como Eles Funcionam\|17.1]], [[17.03 - ECS Cluster Task Definition e Service\|17.3]], [[17.04 - ECS em Producao Balanceador Escala e Deploys\|17.4]], [[17.06 - EKS Kubernetes Gerenciado na AWS\|17.6]], [[17.07 - Migrar para Containers e Elastic Beanstalk\|17.7]], [[17.08 - Escolhendo a Computacao Tabela de Decisao\|17.8]] |
| **3.2** Projetar computação de alta performance e escalável (capacidade, escala, imagens) | [[17.02 - ECR Repositorio de Imagens\|17.2]], [[17.04 - ECS em Producao Balanceador Escala e Deploys\|17.4]], [[17.05 - Capacidade Fargate EC2 e Managed Instances\|17.5]], [[17.06 - EKS Kubernetes Gerenciado na AWS\|17.6]], [[17.08 - Escolhendo a Computacao Tabela de Decisao\|17.8]] |
| **4.2** Projetar computação com custo otimizado ([[Fargate]], [[EC2]], [[Spot Instance\|Spot]], [[Savings Plans]]) | [[17.05 - Capacidade Fargate EC2 e Managed Instances\|17.5]], [[17.06 - EKS Kubernetes Gerenciado na AWS\|17.6]], [[17.08 - Escolhendo a Computacao Tabela de Decisao\|17.8]] |
| **1.2** Proteger cargas de trabalho (roles de tarefa, segredos, varredura de imagens, endpoints) | [[17.02 - ECR Repositorio de Imagens\|17.2]], [[17.03 - ECS Cluster Task Definition e Service\|17.3]], [[17.06 - EKS Kubernetes Gerenciado na AWS\|17.6]] |

## Checklist de saída do módulo

- [ ] Sei explicar por que um [[Container|container]] é mais leve que uma VM e por que ele não é uma fronteira de segurança tão forte.
- [ ] Sei explicar por que um orquestrador é necessário e por que o [[Fargate]] não é um orquestrador.
- [ ] Sei explicar por que o [[ECR]] precisa de [[VPC Endpoint|endpoints de VPC]] quando as tarefas estão em [[Sub-rede Privada|sub-redes privadas]].
- [ ] Sei explicar a diferença entre a [[Task Role|task role]] e a [[Task Execution Role|task execution role]].
- [ ] Sei explicar por que o `awsvpc` dá a cada tarefa a própria [[ENI|interface de rede]] e por que os alvos do balanceador são do tipo IP.
- [ ] Sei explicar como o [[Application Auto Scaling|service auto scaling]] difere do cluster auto scaling.
- [ ] Sei explicar como `base` e `weight` distribuem tarefas entre [[Fargate]] On-Demand e [[Fargate Spot]].
- [ ] Sei explicar quando escolher [[EC2]] em vez de [[Fargate]] (GPU, privileged, [[AMI]] própria, carga estável e alta).
- [ ] Sei explicar o que o [[EKS]] gerencia e o que continua com você, e por que ele cobra por cluster-hora.
- [ ] Sei explicar quando escolher [[ECS]], [[EKS]], Lambda, [[Elastic Beanstalk|Beanstalk]] ou [[EC2]] puro, e qual produto Anywhere ou Distro usar fora da Região.

## Teste-se

**1.** Uma empresa quer rodar [[Container|containers]] com o MENOR [[Overhead Operacional|overhead operacional]], sem gerenciar nenhuma instância e sem precisar de [[Kubernetes]]. Qual opção atende?

- [ ] a) Amazon ECS com tarefas Fargate
- [ ] b) Amazon EKS com managed node groups de instâncias EC2 dimensionadas pelo próprio time
- [ ] c) Amazon ECS em instâncias EC2 sempre ligadas, com AMI personalizada e patches manuais
- [ ] d) Instâncias EC2 com Docker instalado e um script de reinício em cada servidor

**2.** Uma empresa roda workers de processamento em [[Container|containers]] no [[ECS]] em [[EC2|instâncias EC2]], com [[AMI]] própria. O trabalho é reexecutável e a empresa quer o MENOR custo, com as tarefas do service sendo recolocadas quando uma instância for retomada. Qual solução atende?

- [ ] a) Um Auto Scaling group só com instâncias On-Demand e Reserved Instances de 3 anos para toda a capacidade, mesmo sendo trabalho reexecutável.
- [ ] b) Fargate Spot, mantendo a AMI própria nas tarefas.
- [ ] c) Instâncias Spot em um Auto Scaling group sem capacity provider, apenas com a proteção de término gerenciada ligada, dispensando draining.
- [ ] d) Um capacity provider de Auto Scaling group com On-Demand, Spot e managed instance draining.

**3.** Uma aplicação em [[Elastic Beanstalk]] usa o swap de URL para releases [[Blue-Green Deployment|blue/green]], e o banco [[RDS]] foi criado dentro do ambiente. Ao terminar o ambiente antigo após um swap, o banco é apagado junto. O que o arquiteto deve fazer?

- [ ] a) Trocar a política de deploy para all at once, para o banco não ser recriado.
- [ ] b) Criar o RDS fora do ambiente do Beanstalk, e apontar os dois ambientes a ele.
- [ ] c) Habilitar o deploy immutable, que preserva o banco do ambiente anterior.
- [ ] d) Fazer um snapshot manual antes de cada swap e restaurar no ambiente novo.

**4.** Uma empresa configurou a replicação do [[ECR]] para uma Região de [[Recuperacao de Desastres|recuperação de desastres]], mas as imagens que já existiam no repositório não aparecem lá. O que explica isso e como corrigir?

- [ ] a) A replicação exige que a lifecycle policy esteja desativada; basta desativá-la para as imagens antigas aparecerem.
- [ ] b) A replicação só funciona entre contas, não entre Regiões; é preciso uma segunda conta.
- [ ] c) A regra replica só imagens enviadas depois da configuração; é preciso reenviar as antigas.
- [ ] d) A replicação copia só a tag latest; as demais tags precisam ser marcadas como latest.

**5.** Um [[Servico ECS|service ECS]] em [[Fargate]] atrás de um [[Application Load Balancer|ALB]] roda uma aplicação Spring Boot que leva cerca de 90 segundos para ficar pronta. Em cada deploy, as tarefas novas são reprovadas no [[Health Check|health check]] do [[Target Group|target group]] e substituídas em ciclo. Qual ajuste resolve com o menor esforço?

- [ ] a) Reduzir o intervalo do health check do target group para 5 segundos.
- [ ] b) Configurar um health check grace period do service maior que a partida.
- [ ] c) Trocar o Fargate por instâncias EC2 maiores, que iniciam mais rápido.
- [ ] d) Remover o health check do target group para o ALB enviar tráfego imediatamente.

**6.** O tráfego de um [[Servico ECS|service ECS]] varia ao longo do dia e a equipe quer manter a CPU média perto de 60%. Qual recurso aplicar?

- [ ] a) Cluster auto scaling com capacity provider, sem política no service
- [ ] b) Um aumento fixo do número desejado de tarefas feito toda manhã
- [ ] c) Uma política de target tracking do service auto scaling na métrica de CPU média
- [ ] d) Escala vertical, trocando a task definition para o tamanho máximo

**7.** Uma equipe quer lançar uma nova versão do [[Servico ECS|service ECS]], enviando 10% do tráfego a ela e revertendo sozinha se o alarme disparar. Qual estratégia?

- [ ] a) Deploy rolling update com os valores padrão de saúde mínima e máxima
- [ ] b) Sobrescrever a imagem `latest` e reiniciar todas as tarefas de uma vez
- [ ] c) Criar um segundo service e trocar o DNS manualmente em caso de erro
- [ ] d) Deploy canary do ECS com alarmes e rollback automático

**8.** Um [[Processamento em Lote|processamento em lote]] tolera interrupção e a equipe quer o MENOR custo em [[Container|containers]] sem gerenciar servidores. Qual opção?

- [ ] a) Tarefas Fargate Spot, tratando o aviso de 2 minutos e o SIGTERM
- [ ] b) Tarefas Fargate On-Demand sempre ligadas, para evitar interrupções
- [ ] c) Uma instância EC2 reservada por três anos dedicada ao lote
- [ ] d) Funções Lambda encadeadas, mesmo com execuções acima do tempo máximo

**9.** Um [[Container|container]] precisa de GPU e de acesso privilegiado ao host. Qual capacidade atende?

- [ ] a) Fargate, que oferece GPU sob demanda por tarefa
- [ ] b) ECS em instâncias EC2 com a AMI adequada
- [ ] c) Lambda com imagem de container e memória máxima
- [ ] d) Pods EKS em Fargate profiles com o modo privilegiado habilitado

**10.** (Escolha DUAS.) Uma empresa quer reduzir o custo de [[Container|containers]] tolerantes a interrupção. Quais opções atendem?

- [ ] a) Um service ECS com Fargate Spot no capacity provider strategy.
- [ ] b) Pods EKS em um Fargate profile com a opção Spot habilitada.
- [ ] c) Tarefas ECS em instâncias On-Demand com proteção de término gerenciada.
- [ ] d) Um managed node group do EKS com capacity type SPOT.
- [ ] e) Aumentar as tarefas Fargate On-Demand de 0,25 vCPU para 4 vCPU.

**11.** Pods do [[EKS]] precisam acessar o [[DynamoDB]] com permissões diferentes por aplicação, sem credenciais fixas. Qual recurso?

- [ ] a) Uma política única no perfil de instância dos nós, compartilhada entre todos os pods
- [ ] b) Chaves de acesso do IAM guardadas em um Secret do Kubernetes
- [ ] c) O mesmo usuário IAM para todos os pods, rotacionado todo mês
- [ ] d) IAM Roles for Service Accounts (IRSA) ou EKS Pod Identity, por service account

**12.** Uma equipe legada com uma aplicação Java quer apenas enviar o pacote e deixar a AWS provisionar balanceador, [[Auto Scaling Group|Auto Scaling]] e instâncias. Qual serviço?

- [ ] a) AWS Elastic Beanstalk
- [ ] b) Amazon ECS com Fargate, escrevendo task definitions
- [ ] c) Amazon EKS com Karpenter
- [ ] d) AWS Batch com uma fila de jobs

**13.** (Escolha DUAS.) Uma empresa migra uma aplicação legada para [[Container|containers]]. Quais práticas estão corretas?

- [ ] a) Externalizar o estado (sessões, arquivos) para ElastiCache, S3 ou um banco
- [ ] b) Gravar os uploads dos usuários no disco do container, que é persistente
- [ ] c) Ler a configuração de variáveis de ambiente e de segredos, e não de arquivos embutidos
- [ ] d) Manter as sessões em memória do processo, com afinidade fixa por servidor
- [ ] e) Rodar vários processos não relacionados dentro de um único container

**14.** Uma equipe de plataforma quer o menor custo para [[Pod|pods]] [[EKS]] tolerantes a interrupção e pretende colocá-los em um [[Fargate]] profile com [[Spot Instance|Spot]]. O que o arquiteto responde?

- [ ] a) Fargate profile aceita Spot ao marcar o namespace com um rótulo de capacidade.
- [ ] b) O Fargate Spot do EKS exige o Karpenter instalado para funcionar.
- [ ] c) Fargate Spot é só do ECS; no EKS, use nós EC2 Spot em node groups.
- [ ] d) Spot só existe em instâncias avulsas, nunca em containers.

**15.** Duas equipes da mesma empresa escolhem a plataforma de [[Container|containers]]. A equipe A já usa Helm, Argo CD e quer portabilidade; a equipe B é pequena, só usa a AWS e quer o MENOR overhead. Qual combinação atende às duas?

- [ ] a) EKS para a equipe A e ECS com Fargate para a equipe B.
- [ ] b) ECS com Fargate para a equipe A e EKS com nós autogerenciados para a B.
- [ ] c) Lambda para as duas, com imagens de container.
- [ ] d) EKS com nós autogerenciados para as duas, padronizando a plataforma.

**16.** Um pipeline antigo usa AWS CodeDeploy [[Blue-Green Deployment|blue/green]] para [[ECS]], com AppSpec, dois [[Target Group|target groups]] e um [[Listener|listener]] de teste. A equipe quer a mesma ideia de troca de tráfego com rollback rápido usando só recursos nativos do ECS. Qual opção?

- [ ] a) Rolling update com `minimumHealthyPercent` de 100.
- [ ] b) Substituir a imagem `latest` e forçar um novo deployment.
- [ ] c) Dois services separados com troca manual de DNS.
- [ ] d) Estratégia BLUE_GREEN nativa do ECS com troca de tráfego.

> [!success]- Gabarito
> **1. a)** o [[Fargate]] remove o gerenciamento de servidores e o [[ECS]] dispensa [[Kubernetes]]; b e c exigem operar instâncias; d é manual e sem [[Orquestracao|orquestração]].
> **2. d)** o [[Auto Scaling Group|ASG]] com On-Demand e [[Spot Instance|Spot]] como [[Capacity Provider|capacity provider]], com draining, move as tarefas do service ao aviso de 2 minutos e mantém a [[AMI]] própria; a custa mais que Spot; b erra porque o [[Fargate]] não aceita AMI própria; c ignora que a proteção de término não impede a interrupção Spot.
> **3. b)** o banco deve viver fora do ciclo de vida do ambiente, e os dois ambientes do swap apontam para ele; a não muda onde o banco vive; c troca só a forma de deploy de instâncias, não o banco; d é um paliativo trabalhoso a cada release.
> **4. c)** a regra de replicação vale para imagens enviadas depois da configuração, então o legado precisa ser reenviado ou copiado; a inventa uma relação com lifecycle; b erra porque a replicação funciona entre [[Regiao AWS|Regiões]]; d inventa a restrição à tag latest.
> **5. b)** o [[Health Check Grace Period|grace period]] do service ignora falhas de [[Health Check|health check]] durante a partida; a piora o ciclo ao reprovar mais rápido; c não corrige o tempo de inicialização da aplicação; d remove a proteção e envia tráfego a tarefas não prontas.
> **6. c)** o [[Target Tracking|target tracking]] do [[Application Auto Scaling|service auto scaling]] ajusta o número de tarefas para manter a [[Metrica|métrica]]; a escala a capacidade e não o service; b e d não são dinâmicos.
> **7. d)** o canary do [[ECS]] envia uma fatia de tráfego e faz rollback com alarmes; a não controla a fatia; b não tem reversão; c é manual.
> **8. a)** o [[Fargate Spot]] dá desconto para carga tolerante, com aviso de 2 minutos; b custa mais; c paga capacidade ociosa; d erra por causa do tempo máximo do Lambda.
> **9. b)** GPU e privileged exigem [[EC2]] (ou [[ECS Managed Instances|Managed Instances]]); a, c e d não oferecem esses recursos.
> **10. a) e d)** [[Fargate Spot]] no [[ECS]] e nós [[EC2]] [[Spot Instance|Spot]] em [[Managed Node Group|managed node group]] do [[EKS]] reduzem custo para carga tolerante; b erra porque [[Fargate]] profile do EKS não tem Spot; c mantém On-Demand, e a proteção de término não reduz preço; e apenas aumenta o custo.
> **11. d)** [[IRSA]] e [[EKS Pod Identity|Pod Identity]] entregam [[Credencial Temporaria|credenciais temporárias]] por service account; a dá o mesmo acesso a todos; b e c usam credenciais de longo prazo.
> **12. a)** o [[Elastic Beanstalk|Beanstalk]] recebe o pacote e provisiona o ambiente; b e c exigem montar [[Container|containers]] e o cluster; d é para lotes.
> **13. a) e c)** estado externalizado e configuração por ambiente são a base da migração; b erra, pois o disco do [[Container|container]] é efêmero; d prende a sessão ao servidor; e viola um processo por container.
> **14. c)** [[Fargate Spot]] é recurso do [[ECS]]; no [[EKS]] o [[Spot Instance|Spot]] vem de nós [[EC2]] ([[Managed Node Group|managed node group]] SPOT ou [[Karpenter]]); a e b inventam um mecanismo no [[Fargate]] profile; d é falso, Spot existe para instâncias EC2 em ECS e EKS.
> **15. a)** [[EKS]] preserva Helm, Argo CD e a portabilidade para a equipe A, e [[ECS]] com [[Fargate]] dá o menor overhead para a equipe B; b inverte as escolhas; c muda o [[Launch Template|modelo de execução]] das duas; d impõe operar nós à equipe pequena.
> **16. d)** o BLUE_GREEN nativo do [[ECS]] é o equivalente moderno do CodeDeploy [[Blue-Green Deployment|blue/green]] (duas versões lado a lado, troca de tráfego, rollback rápido); a e b não separam tráfego de teste nem revertem rápido; c é manual e lento.

## Próximo módulo

[[18 - Borda e DNS CloudFront Global Accelerator e Route 53]]
