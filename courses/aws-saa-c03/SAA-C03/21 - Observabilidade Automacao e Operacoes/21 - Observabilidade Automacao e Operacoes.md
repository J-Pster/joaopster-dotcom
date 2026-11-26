---
aliases:
  - Módulo 21
modulo: 21
parte: "VI Resiliência e operações"
lida: false
tags:
  - modulo
  - saa-c03
---

# Módulo 21: Observabilidade, Automação e Operações

Este módulo responde a uma pergunta de operação: **como saber o que está acontecendo, avisar a pessoa certa e corrigir sem trabalho manual?** Primeiro vem a base da [[Observabilidade|observabilidade]] no [[CloudWatch]] (métricas, resolução, agente, métricas personalizadas), depois os **alarmes** e as ações automáticas, os **logs** com filtros e consultas, e o rastreamento e os painéis (**[[X-Ray]]**, [[Prometheus]] e [[Grafana]] gerenciados, [[CloudWatch Synthetics|Synthetics]] e [[CloudWatch RUM|RUM]]). Em seguida entra a **automação da infraestrutura**: o [[CloudFormation]] (templates, [[Stack|stacks]], [[Change Set|change sets]]), sua operação em escala ([[StackSets]], drift, [[Service Catalog]]) e o **[[Systems Manager]]** ([[Session Manager]], [[Patch Manager]], [[Parameter Store]]). O módulo fecha com **Health, [[Trusted Advisor]], [[License Manager]]** e os padrões de **[[Remediacao Automatica|remediação automática]]**.

O raciocínio é o da prova: dado um requisito operacional, qual serviço gerenciado entrega o resultado **com o menor [[Overhead Operacional|esforço operacional]]**, sem abrir portas, sem manter servidores próprios e sem confundir quem **detecta**, quem **recomenda** e quem **corrige**.

## Aulas

1. [[21.01 - Observabilidade e Metricas do CloudWatch|Aula 21.1: Observabilidade e métricas do CloudWatch]]
2. [[21.02 - Alarmes do CloudWatch e Acoes Automaticas|Aula 21.2: Alarmes do CloudWatch e ações automáticas]]
3. [[21.03 - CloudWatch Logs e o Agente|Aula 21.3: CloudWatch Logs e o agente]]
4. [[21.04 - X-Ray Prometheus Grafana e Monitoramento de Aplicacao|Aula 21.4: X-Ray, Prometheus, Grafana e monitoramento de aplicação]]
5. [[21.05 - CloudFormation Stacks Templates e Change Sets|Aula 21.5: CloudFormation, stacks, templates e change sets]]
6. [[21.06 - CloudFormation Operacao StackSets Service Catalog e Governanca|Aula 21.6: CloudFormation na operação, StackSets, Service Catalog e governança]]
7. [[21.07 - Systems Manager Gerencia Remota e Parametros|Aula 21.7: Systems Manager, gerência remota e parâmetros]]
8. [[21.08 - Health Trusted Advisor License Manager e Remediacao Automatica|Aula 21.8: Health, Trusted Advisor, License Manager e remediação automática]]

## Cobertura do exam guide

| Task do exam guide | Onde é coberto |
|---|---|
| **Task 2.2**: Projetar arquiteturas altamente disponíveis e tolerantes a falhas ([[Observabilidade\|observabilidade]], automação e integridade da infraestrutura) | [[21.01 - Observabilidade e Metricas do CloudWatch\|Aula 21.1]], [[21.02 - Alarmes do CloudWatch e Acoes Automaticas\|21.2]], [[21.03 - CloudWatch Logs e o Agente\|21.3]], [[21.04 - X-Ray Prometheus Grafana e Monitoramento de Aplicacao\|21.4]], [[21.05 - CloudFormation Stacks Templates e Change Sets\|21.5]], [[21.06 - CloudFormation Operacao StackSets Service Catalog e Governanca\|21.6]], [[21.07 - Systems Manager Gerencia Remota e Parametros\|21.7]], [[21.08 - Health Trusted Advisor License Manager e Remediacao Automatica\|21.8]] |
| **Task 3.2**: Soluções de computação de alto desempenho e elásticas (parcial: escalar por [[Metrica\|métrica]], [[Detailed Monitoring\|detailed monitoring]] no [[Auto Scaling Group\|Auto Scaling]]) | [[21.01 - Observabilidade e Metricas do CloudWatch\|Aula 21.1]], [[21.02 - Alarmes do CloudWatch e Acoes Automaticas\|21.2]] |
| **Task 1.2**: Projetar segurança de aplicações e governança (parcial: logs como [[Controle Detectivo\|controle detectivo]], [[StackSets]], [[Service Catalog]], [[Parameter Store]], [[Session Manager]]) | [[21.03 - CloudWatch Logs e o Agente\|Aula 21.3]], [[21.06 - CloudFormation Operacao StackSets Service Catalog e Governanca\|21.6]], [[21.07 - Systems Manager Gerencia Remota e Parametros\|21.7]] |
| **Tasks 4.1 e 4.2**: Armazenamento e computação com custo otimizado (parcial: retenção de logs, ações stop de alarme, [[Trusted Advisor]], licenças [[BYOL]]) | [[21.02 - Alarmes do CloudWatch e Acoes Automaticas\|Aula 21.2]], [[21.03 - CloudWatch Logs e o Agente\|21.3]], [[21.08 - Health Trusted Advisor License Manager e Remediacao Automatica\|21.8]] |

## Checklist de saída do módulo

Antes de seguir, você deveria conseguir responder, sem consultar:

- [ ] Por que o [[EC2]] não publica memória nem disco por padrão, e o que muda ao instalar o [[CloudWatch Agent|agente do CloudWatch]]?
- [ ] Por que um alarme precisa de uma política para [[Missing Data|dados ausentes]], e como isso muda um alarme de heartbeat?
- [ ] Por que um [[Metric Filter|metric filter]] transforma log em [[Metrica|métrica]], e por que isso permite alarmar sobre texto?
- [ ] Por que o [[X-Ray]] enxerga a [[Latencia|latência]] entre serviços e o [[CloudWatch]] sozinho não?
- [ ] Por que um [[Change Set|change set]] evita um incidente que um deploy direto causaria?
- [ ] Por que `DeletionPolicy` protege na exclusão da stack e só o `UpdateReplacePolicy` protege quando o recurso é substituído?
- [ ] Por que o [[Session Manager]] dispensa porta 22, chave e [[Bastion Host|bastion]], e o que ele exige em troca?
- [ ] Por que o [[Parameter Store]] não substitui o [[Secrets Manager]] quando o requisito é rotação?
- [ ] Por que o [[Trusted Advisor]] recomenda e a [[Remediacao Automatica|remediação do Config]] corrige?

## Teste-se

**1.** Uma empresa precisa ser alertada quando a memória passar de 85% em 300 [[EC2|instâncias EC2]] e quer alterar a configuração de coleta em um único lugar, com o MENOR esforço. O que fazer?

- [ ] a) Habilitar o detailed monitoring em todas as instâncias e alarmar sobre a métrica de memória que ele passa a publicar
- [ ] b) Agente do CloudWatch via State Manager, configuração no Parameter Store, alarme sobre `mem_used_percent`
- [ ] c) Conectar por Session Manager em cada uma das 300 instâncias, instalar o agente à mão e criar um alarme separado por instância
- [ ] d) Criar um metric filter no CloudWatch Logs sobre o log do sistema operacional de cada instância e alarmar sobre a contagem

**2.** Um [[Auto Scaling Group|Auto Scaling]] group escala por CPU e precisa reagir a picos em menos de 2 minutos, mas o launch template usa o monitoramento padrão. O que fazer?

- [ ] a) Aumentar o cooldown do grupo para que a política reaja com mais calma aos picos
- [ ] b) Trocar a métrica de CPU pela de memória, que o agente atualiza mais rápido
- [ ] c) Criar um alarme de alta resolução de 10 segundos sobre a CPU média do grupo
- [ ] d) Habilitar o detailed monitoring no launch template, com métricas a cada 1 minuto

**3.** Uma aplicação envia uma [[Metrica|métrica]] de heartbeat a cada minuto. A equipe quer ser avisada se a aplicação parar de enviar, ou seja, se faltarem dados. Como configurar o alarme?

- [ ] a) Tratar dados ausentes como `breaching`, para o alarme disparar quando os pontos deixarem de chegar
- [ ] b) Tratar dados ausentes como `notBreaching`, para evitar falsos alarmes durante manutenções curtas ou reinícios
- [ ] c) Tratar dados ausentes como `ignore`, mantendo o último estado do alarme enquanto faltarem pontos
- [ ] d) Reduzir o período do alarme para 10 segundos, para que a ausência seja percebida mais cedo

**4.** Os logs de uma API em 40 instâncias contêm `ERROR`. A equipe quer uma única notificação, apenas quando houver mais de 10 ocorrências em 5 minutos E a [[Latencia|latência]] p99 estiver alta, sem manter servidores. Qual a solução?

- [ ] a) Exportar os logs para o S3 a cada 5 minutos e contar as ocorrências com um script agendado
- [ ] b) Consultar o Logs Insights manualmente a cada 5 minutos e avisar a equipe quando os dois sinais coincidirem
- [ ] c) Criar um metric filter sobre `ERROR`, um alarme de erros, um de latência e um alarme composto que notifica
- [ ] d) Criar um alarme sobre a CPU, que sobe quando há erros, e outro sobre a fila, ligados a um único tópico SNS

**5.** O custo do [[CloudWatch Logs]] cresce. Os logs de `/dev/` só são úteis por 30 dias, e há grupos antigos com 3 anos de logs. Outros grupos com prefixos parecidos guardam auditoria. O que reduz o custo com segurança?

- [ ] a) Apagar manualmente os log groups todo mês, depois de exportar uma cópia de cada um deles para o bucket S3 da empresa
- [ ] b) Criar uma política de retenção de conta com prefixo `/dev/`, 30 dias e `RETROACTIVE`, simulando antes com dry run
- [ ] c) Mover os logs para uma instância EC2 com disco maior, onde o armazenamento custa menos que no CloudWatch Logs
- [ ] d) Desligar o agente do CloudWatch nos servidores de desenvolvimento para parar a ingestão de novos eventos

**6.** (Escolha DUAS.) Quais são capacidades do [[X-Ray|AWS X-Ray]]?

- [ ] a) Mapear o caminho de uma requisição entre serviços, com um mapa de serviços
- [ ] b) Substituir o CloudTrail para auditar chamadas de API
- [ ] c) Ajudar a identificar qual serviço adiciona latência em uma requisição distribuída
- [ ] d) Corrigir automaticamente os gargalos de desempenho
- [ ] e) Criptografar os dados em repouso dos bancos de dados

**7.** Uma equipe roda [[Microsservicos|microsserviços]] no [[EKS]], já usa métricas no formato [[Prometheus]] e quer um serviço gerenciado para armazená-las e consultá-las, sem operar servidores. O que usar?

- [ ] a) Amazon Managed Service for Prometheus, com o Amazon Managed Grafana para os painéis
- [ ] b) Um Prometheus em uma instância EC2 mantida pela equipe, com armazenamento em volume EBS
- [ ] c) CloudTrail para registrar as métricas dos pods, consultadas pelo Logs Insights
- [ ] d) AWS Config para consultar as métricas dos pods por meio de regras gerenciadas

**8.** Antes de atualizar uma stack de produção, a equipe quer ver quais recursos serão alterados ou substituídos, sem aplicar nada. O que usar?

- [ ] a) A detecção de drift, que compara a stack com os recursos reais e lista as diferenças encontradas por recurso
- [ ] b) Termination protection, que bloqueia a atualização até que a equipe revise a lista
- [ ] c) Uma stack policy que nega todas as atualizações até a conclusão da revisão da equipe
- [ ] d) Um change set criado com o template modificado, que lista adições, alterações e substituições

**9.** O [[Change Set|change set]] mostrou `Replacement: True` para o [[RDS]] de produção, e a equipe quer executar a atualização sem risco de perder dados. O que configurar antes?

- [ ] a) Ligar a termination protection, que impede que o banco antigo seja apagado na substituição
- [ ] b) Definir `DeletionPolicy: Snapshot`, que o CloudFormation aplica também ao banco substituído
- [ ] c) Definir `UpdateReplacePolicy: Snapshot` (ou `Retain`), pois a substituição não usa o `DeletionPolicy`
- [ ] d) Ligar o rollback automático, que restaura o banco antigo se a substituição terminar com sucesso

**10.** Uma empresa com Organizations precisa que as contas novas da organização recebam sozinhas um papel de auditoria e a configuração do [[Config|AWS Config]]. O que usar?

- [ ] a) Um template executado à mão em cada conta nova pela equipe de plataforma
- [ ] b) Um StackSet service-managed com implantação automática na OU de destino
- [ ] c) Uma política de controle de serviço (SCP) anexada à raiz que cria os recursos
- [ ] d) Um script mensal rodando em uma instância na conta de gerenciamento
 
**11.** Administradores precisam acessar instâncias em [[Sub-rede Privada|sub-redes privadas]], sem internet e sem [[NAT]], sem abrir a porta 22, sem chaves SSH e sem [[Bastion Host|bastion]], com registro das sessões. O que usar?

- [ ] a) Session Manager com instance profile do SSM, VPC endpoints do SSM e logs de sessão no S3
- [ ] b) Um bastion host com a porta 22 liberada para o escritório e chaves SSH distribuídas à equipe
- [ ] c) O EC2 Instance Connect com a porta 22 aberta no Security Group para o endereço do escritório
- [ ] d) Uma VPN e chaves SSH rotacionadas todo mês, sem registro do conteúdo das sessões nas instâncias

**12.** Uma aplicação precisa guardar a senha do banco [[RDS]] e rotacioná-la automaticamente a cada 30 dias, sem mudar o código. Qual solução?

- [ ] a) Parameter Store Standard com `SecureString`, que rotaciona o valor a cada 30 dias por política
- [ ] b) Variáveis de ambiente na instância, trocadas por um script de deploy a cada 30 dias
- [ ] c) Um arquivo criptografado no S3, lido pela aplicação e substituído manualmente todo mês
- [ ] d) AWS Secrets Manager com rotação automática integrada ao RDS, sem mudar o código da aplicação

**13.** (Escolha DUAS.) Quais afirmações sobre o [[Systems Manager]] estão corretas?

- [ ] a) O Session Manager não exige porta de entrada no Security Group
- [ ] b) O Parameter Store rotaciona segredos automaticamente de forma nativa
- [ ] c) Uma instância em sub-rede privada sem internet pode ser gerenciada com VPC endpoints do SSM
- [ ] d) O Patch Manager não usa baselines
- [ ] e) O Run Command exige a porta 22 aberta

**14.** Uma regra do [[Config|AWS Config]] marca buckets [[S3]] sem criptografia como não conformes. A equipe quer que a criptografia seja ligada automaticamente, sem criar riscos novos. O que configurar?

- [ ] a) Um alarme do CloudWatch sobre a métrica do bucket, que liga a criptografia quando dispara
- [ ] b) O Trusted Advisor, que corrige o bucket sozinho quando a verificação de segurança detecta o problema
- [ ] c) A remediação automática da regra do Config com um documento do SSM Automation e um papel IAM de permissão mínima
- [ ] d) O CloudTrail em todas as Regiões, que reage ao evento de criação do bucket e liga a criptografia

**15.** Uma conta com plano de suporte Basic quer ser avisada por e-mail quando a AWS agendar a aposentadoria de uma [[EC2|instância EC2]], com o menor [[Overhead Operacional|esforço operacional]]. O que usar?

- [ ] a) Consultar a AWS Health API a cada hora com uma função Lambda agendada, que funciona em qualquer plano
- [ ] b) Uma regra do EventBridge para eventos do AWS Health publicando em um tópico SNS com e-mail
- [ ] c) Um alarme do CloudWatch sobre a CPU da instância, com notificação por e-mail via SNS
- [ ] d) Um script na instância que consulta o hardware e envia um e-mail quando detecta falha

**16.** A empresa comprou 200 licenças de um software cobrado por [[vCPU]] e quer impedir lançamentos acima desse número em todas as contas. O que usar?

- [ ] a) AWS License Manager com configuração de licença de limite rígido, compartilhada na organização
- [ ] b) Uma planilha atualizada pela equipe a cada lançamento de instância nas contas
- [ ] c) Trusted Advisor com e-mail de alerta quando o uso se aproxima das 200 licenças
- [ ] d) Um alarme de custo no CloudWatch, que avisa por e-mail quando o gasto com o software passar do orçamento definido

**17.** Um servidor de licenças legado roda em uma única [[EC2|instância EC2]], fora de [[Auto Scaling Group|Auto Scaling]]. A empresa quer recuperação automática, no mesmo ID, [[RFC 1918|IP privado]] e [[EBS|volumes EBS]], se o host físico falhar, e reinicialização se o sistema operacional travar. O que combina?

- [ ] a) Alarme em `StatusCheckFailed_Instance` com ação recover e alarme em `StatusCheckFailed_System` com ação reboot
- [ ] b) Alarme em `CPUUtilization` com ação terminate e um Auto Scaling group de uma instância para recriar
- [ ] c) Alarme em `StatusCheckFailed_System` com ação recover e alarme em `StatusCheckFailed_Instance` com ação reboot
- [ ] d) Um alarme composto que combina os dois status checks e executa recover e reboot ao mesmo tempo

**18.** Às 2h, um canary do [[CloudWatch Synthetics|Synthetics]] falha no passo "finalizar compra". A equipe quer localizar qual serviço causa a lentidão e confirmar a exceção, sem instrumentar nada além do necessário. Qual sequência?

- [ ] a) RUM para localizar o serviço lento e VPC Flow Logs para confirmar a exceção de timeout gerada pela aplicação
- [ ] b) Container Insights para localizar o componente e o CloudTrail para ler a exceção gerada pela função
- [ ] c) Metric math sobre as métricas de cada serviço e um subscription filter para achar o serviço lento
- [ ] d) X-Ray (service map) para localizar o serviço lento e Logs Insights filtrando o trace ID para a causa

> [!success]- Gabarito
> **1. b)** O agente publica `mem_used_percent` (o [[Hypervisor|hipervisor]] não vê a [[RAM]]); a configuração fica no [[Parameter Store]] e a associação do [[State Manager]] instala e mantém o agente na frota, com um alarme sobre a [[Metrica|métrica]]. (a) [[Detailed Monitoring|detailed monitoring]] só encurta o intervalo das métricas existentes; (c) é trabalho manual por instância; (d) o log do sistema não traz a memória usada.
> **2. d)** O launch template usa monitoramento básico (5 minutos) por padrão; o [[Detailed Monitoring|detailed monitoring]] leva o [[EC2]] a 1 minuto, que é o recomendado com [[Scaling Policy|scaling policy]]. (a) o [[Cooldown|cooldown]] não acelera a [[Metrica|métrica]]; (b) a memória nem é a métrica da política; (c) métricas do EC2 são de resolução padrão, e alarmes de 10 segundos só valem para métricas de [[High-Resolution Metric|alta resolução]].
> **3. a)** Com `breaching`, a falta de dados conta como violação e o alarme dispara. (b) `notBreaching` esconde a falha; (c) `ignore` mantém o último estado e também esconde; (d) um período curto não resolve a ausência de dados.
> **4. c)** O [[Metric Filter|metric filter]] vira o log em [[Metrica|métrica]], dois alarmes medem erro e [[Latencia|latência]], e o composto combina os estados e notifica uma vez. (a) e (b) são manuais; (d) CPU e fila não medem erros no log nem a latência p99.
> **5. b)** A política de conta de 30 dias com prefixo `/dev/` e `RETROACTIVE` alcança os grupos existentes, e o dry run mostra quais grupos teriam retenção reduzida, pois ela substitui a retenção do grupo e apaga logs antigos (só passa a valer 24 h depois). (a) é manual e perde dados; (c) o armazenamento em [[EC2]] é mais caro e trabalhoso; (d) parar a ingestão não reduz o que já está armazenado.
> **6. a), c)** O [[X-Ray]] mapeia a requisição entre serviços e mostra onde está a [[Latencia|latência]]. Ele não substitui o [[CloudTrail]] (b), não corrige gargalos sozinho (d) e não criptografa bancos (e).
> **7. a)** O [[Managed Service for Prometheus]] armazena as métricas e o [[Managed Grafana]] mostra os painéis, sem servidores. (b) exige operação; (c) [[CloudTrail]] registra chamadas de API, não métricas; (d) Config avalia configuração.
> **8. d)** O [[Change Set|change set]] é a prévia de adições, alterações e substituições. (a) drift trata de mudanças feitas por fora; (b) [[Termination Protection|termination protection]] impede apagar a stack e não mostra nada; (c) a [[Stack Policy|stack policy]] bloqueia atualizações.
> **9. c)** `DeletionPolicy` não se aplica quando o recurso é substituído; só o `UpdateReplacePolicy` (padrão `Delete`, inclusive no [[RDS]]) decide o destino do banco antigo, e `Snapshot` ou `Retain` o protegem. (a) [[Termination Protection|termination protection]] trata só da exclusão da stack; (b) o `DeletionPolicy` não vale na substituição; (d) o rollback só age em falha, e aqui a substituição teria sucesso.
> **10. b)** O service-managed com implantação automática implanta quando a conta entra na OU. (a) e (d) são manuais; (c) a [[SCP]] restringe permissões, não cria recursos.
> **11. a)** [[Session Manager]] usa conexão de saída, [[IAM]] e registro de sessões, e sem internet o agente precisa do [[Instance Profile|instance profile]] e dos três [[VPC Endpoint|VPC endpoints]]. (b), (c) e (d) mantêm a porta 22 ou a gestão de chaves.
> **12. d)** O [[Secrets Manager]] tem rotação nativa com Lambda e integração com [[RDS]]. (a) o [[Parameter Store]] não rotaciona sozinho; (b) e (c) exigem código e rotação manual.
> **13. a), c)** [[Session Manager]] não usa porta de entrada, e os [[VPC Endpoint|VPC endpoints]] permitem gerenciar [[Sub-rede|sub-redes]] sem internet. (b) a rotação nativa é do [[Secrets Manager]]; (d) o [[Patch Manager]] usa baselines; (e) o [[Run Command]] não precisa de porta 22.
> **14. c)** A [[Remediacao Automatica|remediação do Config]] com [[Automation|SSM Automation]] liga a criptografia, e o papel de permissão mínima evita que a própria automação vire risco. (a) alarme de [[Metrica|métrica]] não aplica correção de configuração; (b) o [[Trusted Advisor]] só recomenda; (d) o [[CloudTrail]] só registra.
> **15. b)** O Health publica eventos da conta no [[EventBridge]], que aciona o [[SNS]]; isso funciona em qualquer plano, inclusive Basic. (a) a [[Health Dashboard|AWS Health]] API exige plano Business Support+, Enterprise ou Unified Operations; (c) a CPU não indica aposentadoria; (d) o script não enxerga o agendamento da AWS.
> **16. a)** O [[License Manager]] com limite rígido bloqueia lançamentos acima das licenças. (b) é manual; (c) o [[Trusted Advisor]] só alerta; (d) alarme de custo não controla licenças.
> **17. c)** Falha do sistema (hardware) pede recover, que mantém ID, [[RFC 1918|IP privado]] e volumes; falha da instância (SO travado) pede reboot. (a) inverte os dois, e o recover não vale para `StatusCheckFailed_Instance`; (b) terminate perde o ID; (d) o composto não executa ações de [[EC2]].
> **18. d)** O [[X-Ray]] ([[Service Map|service map]]) localiza o serviço lento e o [[CloudWatch Logs Insights|Logs Insights]], filtrando o [[Trace|trace]] ID, mostra a exceção. (a) [[CloudWatch RUM|RUM]] mede sessões reais de usuários, e [[VPC Flow Logs|Flow Logs]] são tráfego de rede; (b) [[Container Insights]] mede recursos de [[Container|contêiner]] e o [[CloudTrail]] audita chamadas de API; (c) [[Metric Math|metric math]] e [[Subscription Filter|subscription filter]] não localizam o serviço lento por requisição.

## Próximo módulo

[[22 - Dados Analytics e Ingestao|Próximo módulo: Dados, Analytics e Ingestão]]
