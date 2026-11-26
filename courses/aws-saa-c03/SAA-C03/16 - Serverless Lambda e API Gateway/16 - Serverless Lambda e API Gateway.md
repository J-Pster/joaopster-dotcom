---
aliases:
  - Módulo 16
modulo: 16
parte: "V Arquiteturas modernas"
dominios:
  - 1
  - 2
  - 3
  - 4
lida: false
tags:
  - modulo
  - saa-c03
  - modulo-16
---

# Módulo 16: Serverless, Lambda e API Gateway

Este módulo responde a uma pergunta de arquitetura e de custo: como rodar código e expor APIs **sem gerenciar servidores**, pagando só pelo uso, e em que ponto essa promessa deixa de valer? Você vai entender o [[Ambiente de Execucao|ambiente de execução]] do [[Lambda]], os três modelos de invocação, a concorrência e o [[Cold Start]], o uso em [[VPC]] com [[RDS Proxy]], o empacotamento e o modelo de custo, o [[API Gateway]] (tipos, integrações, segurança, [[Throttling|throttling]], cache e [[CORS]]) e os padrões [[Serverless|serverless]], fechando com [[Amplify]], [[Device Farm]], [[Serverless Application Repository]] e [[SAM]].

> [!info] O que este módulo assume
> A mensageria do [[15 - Desacoplamento Filas Eventos e Workflows|Módulo 15]] ([[SQS]], [[SNS]], [[EventBridge]] e [[Step Functions]]) aparece o tempo todo como gatilho e como destino do Lambda, e o [[DynamoDB]] ([[14 - DynamoDB Cache e Bancos de Proposito Especifico|Módulo 14]]) é o banco natural das APIs [[Serverless|serverless]]. O acesso a redes privadas usa o que você viu no [[06 - VPC a Fundo|Módulo 6]]. Os [[Container|contêineres]], a alternativa quando o Lambda não serve, vêm no [[17 - Containers ECS EKS e Fargate|Módulo 17]].

> [!warning] Limites mudam
> Valores como o [[Timeout|timeout]] máximo do Lambda (30 minutos na documentação de novembro de 2026, enquanto simulados antigos dizem 15) e a granularidade de cobrança foram atualizados pela AWS ao longo do tempo. Em dúvida, confira a documentação oficial e as páginas de preço antes de decidir.

## Aulas

1. [[16.01 - Serverless e a Anatomia do Lambda|16.1 Serverless e a anatomia do Lambda]]: o que muda no modelo de responsabilidade, [[Ambiente de Execucao|ambiente de execução]], memória e CPU, [[Timeout|timeout]] e permissões.
2. [[16.02 - Como o Lambda e Invocado e Como Trata Erros|16.2 Como o Lambda é invocado e como trata erros]]: invocação síncrona, assíncrona e por [[Event Source Mapping|event source mapping]], retentativas, [[Dead-Letter Queue|DLQ]] e destinos.
3. [[16.03 - Concorrencia Escala e Cold Start|16.3 Concorrência, escala e cold start]]: fórmula de concorrência, reservada e provisionada, [[SnapStart]] e [[Throttling|throttling]].
4. [[16.04 - Lambda em VPC RDS Proxy e Function URLs|16.4 Lambda em VPC, RDS Proxy e Function URLs]]: acesso a recursos privados, saída para a internet, [[Pool de Conexoes|pool de conexões]] e [[Function URL|URL de função]].
5. [[16.05 - Empacotamento Versoes e Custo do Lambda|16.5 Empacotamento, versões e custo do Lambda]]: zip, layers e imagens, versões e aliases, arm64 e cálculo de custo.
6. [[16.06 - API Gateway Tipos Endpoints e Integracoes|16.6 API Gateway: tipos, endpoints e integrações]]: REST, [[HTTP]] e WebSocket, tipos de endpoint, integrações e o limite de 29 segundos.
7. [[16.07 - API Gateway Seguranca Throttling Cache e CORS|16.7 API Gateway: segurança, throttling, cache e CORS]]: autorizadores, [[Usage Plan|planos de uso]], limites de taxa, cache e [[CORS]].
8. [[16.08 - Padroes Serverless e Ferramentas de Front-end|16.8 Padrões serverless e ferramentas de front-end]]: arquiteturas de referência, quando não usar Lambda, [[Amplify]], [[Device Farm]], [[Serverless Application Repository|SAR]] e [[SAM]].

## Cobertura do exam guide

| Task statement | Onde está |
|---|---|
| **2.1** Projetar arquiteturas escaláveis e fracamente acopladas ([[Serverless\|serverless]], event-driven, APIs) | [[16.01 - Serverless e a Anatomia do Lambda\|16.1]], [[16.02 - Como o Lambda e Invocado e Como Trata Erros\|16.2]], [[16.06 - API Gateway Tipos Endpoints e Integracoes\|16.6]], [[16.07 - API Gateway Seguranca Throttling Cache e CORS\|16.7]], [[16.08 - Padroes Serverless e Ferramentas de Front-end\|16.8]] |
| **3.2** Projetar soluções de computação de alta performance e escaláveis (concorrência, [[VPC]], empacotamento) | [[16.01 - Serverless e a Anatomia do Lambda\|16.1]], [[16.02 - Como o Lambda e Invocado e Como Trata Erros\|16.2]], [[16.03 - Concorrencia Escala e Cold Start\|16.3]], [[16.04 - Lambda em VPC RDS Proxy e Function URLs\|16.4]], [[16.05 - Empacotamento Versoes e Custo do Lambda\|16.5]] |
| **4.2** Projetar computação com custo otimizado (modelo de cobrança, memória, arm64, Lambda ou computação constante) | [[16.01 - Serverless e a Anatomia do Lambda\|16.1]], [[16.03 - Concorrencia Escala e Cold Start\|16.3]], [[16.05 - Empacotamento Versoes e Custo do Lambda\|16.5]], [[16.08 - Padroes Serverless e Ferramentas de Front-end\|16.8]] |
| **1.2** Proteger cargas de trabalho e aplicações ([[VPC]], endpoints, [[WAF]], autorizadores) | [[16.04 - Lambda em VPC RDS Proxy e Function URLs\|16.4]], [[16.06 - API Gateway Tipos Endpoints e Integracoes\|16.6]], [[16.07 - API Gateway Seguranca Throttling Cache e CORS\|16.7]] |

## Checklist de saída do módulo

- [ ] Sei explicar por que o modelo [[Serverless|serverless]] reduz o [[Overhead Operacional|overhead operacional]] e qual responsabilidade continua comigo.
- [ ] Sei explicar por que a memória configurada também define a CPU e o custo da função.
- [ ] Sei explicar por que a [[Invocacao Assincrona|invocação assíncrona]] e o [[Event Source Mapping|event source mapping]] tratam erros de formas diferentes.
- [ ] Sei explicar o que o [[Cold Start|cold start]] é, por que ocorre e quando [[Concorrencia Provisionada|concorrência provisionada]] ou [[SnapStart]] compensam.
- [ ] Sei explicar por que a [[Concorrencia Reservada|concorrência reservada]] protege o banco e também limita a própria função.
- [ ] Sei explicar por que uma função em [[VPC]] perde a internet e como [[NAT]] ou endpoints resolvem, e por que o [[RDS Proxy]] existe.
- [ ] Sei explicar por que versões e aliases permitem rollback e deploy gradual.
- [ ] Sei explicar quando escolher API [[HTTP]] e quando escolher API REST, e por que o limite de 29 segundos molda a arquitetura.
- [ ] Sei explicar como escolher entre autorizador [[IAM]], [[Cognito]] e [[Lambda Authorizer|Lambda authorizer]].
- [ ] Sei explicar quando o Lambda é a escolha errada e qual alternativa usar.

## Teste-se

**1.** Uma REST API pública chama uma [[Lambda|função Lambda]] em [[Sub-rede Privada|sub-redes privadas]], que consulta um [[RDS]] PostgreSQL. Em picos, o banco recusa conexões e os pedidos de relatório, que levam 40 segundos, retornam 504 aos clientes. Quais DUAS mudanças resolvem os dois problemas com o menor esforço? (Escolha DUAS.)

- [ ] a) Aumentar o timeout da função Lambda para 15 minutos, sem alterar o fluxo da API.
- [ ] b) Colocar um RDS Proxy entre a função e o banco, para reaproveitar conexões.
- [ ] c) Trocar a REST API por uma function URL, que não tem nenhum limite de tempo.
- [ ] d) Fazer o endpoint de relatório responder 202, enfileirar o pedido no SQS e processar de forma assíncrona.
- [ ] e) Trocar o endpoint edge-optimized por regional, o que amplia automaticamente o limite de 29 segundos.

**2.** Uma função é invocada por uma notificação do [[S3]] ([[Invocacao Assincrona|invocação assíncrona]]) e às vezes falha por erro temporário. Qual comportamento padrão do Lambda?

- [ ] a) Repete a execução duas vezes e, depois, descarta o evento ou o envia ao destino de falha configurado
- [ ] b) Devolve o erro ao S3 e para de aceitar eventos até alguém corrigir a função manualmente
- [ ] c) Reexecuta indefinidamente até a função funcionar, sem nenhum limite de tentativas
- [ ] d) Move o evento para uma fila FIFO automaticamente, com a ordem original preservada

**3.** Uma API em Lambda (Java 21) tem Init de 6 segundos e usuários sentem a lentidão na primeira chamada. A equipe quer reduzir o [[Cold Start|cold start]] sem pagar por capacidade ociosa. Quais DUAS ações atendem? (Escolha DUAS.)

- [ ] a) Ativar o SnapStart em uma versão publicada, apontada por um alias.
- [ ] b) Provisionar concorrência igual ao pico diário, ativa o dia todo.
- [ ] c) Definir reserved concurrency de 1.000 para manter os ambientes aquecidos.
- [ ] d) Reduzir o tamanho do pacote e adiar a carga de bibliotecas pouco usadas no Init.
- [ ] e) Aumentar o timeout para 30 segundos, para a primeira chamada ter mais tempo.

**4.** Uma função precisa ter, no máximo, 20 execuções simultâneas para não sobrecarregar um banco legado. Qual recurso aplicar?

- [ ] a) Concorrência provisionada de 20 unidades, para a função manter 20 ambientes aquecidos e nunca exceder esse número
- [ ] b) Concorrência reservada de 20, que limita o máximo da função e garante essa fatia exclusiva da conta
- [ ] c) Aumentar a memória da função para reduzir o número de invocações simultâneas
- [ ] d) Um alias com roteamento ponderado, enviando só parte do tráfego para a versão atual

**5.** Uma API Java em Lambda tem picos de [[Latencia|latência]] na primeira chamada depois de ociosidade. O requisito de [[Cold Start|cold start]] não é estrito e a equipe quer a mudança mais simples e barata. Qual solução atende?

- [ ] a) Aumentar o timeout para 15 minutos, dando mais tempo à primeira invocação
- [ ] b) Aumentar a reserved concurrency para a função não competir com as demais pela conta
- [ ] c) Ativar o SnapStart na versão publicada, que restaura os ambientes de um snapshot
- [ ] d) Ativar concorrência provisionada e SnapStart na mesma versão, somando os dois efeitos

**6.** Uma função em [[Sub-rede Privada|sub-redes privadas]] precisa chamar uma API pública na internet, mas as chamadas expiram. Qual a causa e a correção?

- [ ] a) Falta rota para um NAT Gateway; adicionar o NAT Gateway em sub-rede pública e a rota
- [ ] b) Falta um Internet Gateway na sub-rede privada da função, que deve receber um IP público
- [ ] c) O Lambda em VPC não pode acessar a internet em nenhuma hipótese; a função precisa sair da VPC
- [ ] d) Falta aumentar a memória da função, porque a rede do Lambda depende dela

**7.** Funções Lambda com milhares de execuções simultâneas esgotam as conexões de um banco [[RDS]]. Qual serviço mitiga o problema com menor mudança no código?

- [ ] a) ElastiCache for Redis na frente do banco, mantendo todas as escritas indo direto para o RDS
- [ ] b) Aumentar o tipo de instância do RDS até suportar o número de conexões
- [ ] c) Um tópico SNS entre a função e o banco, para limitar as gravações simultâneas
- [ ] d) RDS Proxy, que mantém um pool de conexões compartilhado entre as execuções

**8.** Uma equipe quer publicar uma nova versão de uma função enviando 10% do tráfego para ela e reverter rapidamente se houver erros. O que usar?

- [ ] a) Sobrescrever o código de $LATEST e observar as métricas, com um novo deploy para reverter
- [ ] b) Versões publicadas com um alias de roteamento ponderado
- [ ] c) Duas funções distintas, com DNS ponderado do Route 53 apontando para elas, sem versões
- [ ] d) Uma camada (layer) nova contendo o código da versão em teste

**9.** Uma API precisa apenas de um proxy simples para o Lambda, autenticação por [[JWT]] e o menor custo por requisição. Qual tipo de API escolher?

- [ ] a) API REST com chave de API e plano de uso para cada cliente
- [ ] b) API WebSocket com rota $connect autenticada
- [ ] c) API HTTP, que é mais simples, mais barata e aceita autorizador JWT
- [ ] d) Uma URL de função com autorização por IAM, sem nenhuma API na frente

**10.** Uma API REST do [[API Gateway]] chama um processamento que leva 2 minutos. Os clientes recebem erro de [[Timeout|timeout]]. Qual é a arquitetura correta com o limite padrão de 29 segundos?

- [ ] a) Responder 202 e processar de forma assíncrona, com consulta ou notificação do resultado
- [ ] b) Ativar cache na API para a resposta ser devolvida mais rápido
- [ ] c) Trocar o tipo de endpoint para otimizado para borda, para o processamento ocorrer mais perto do usuário
- [ ] d) Aumentar a memória da função para 10 GB, sem alterar o fluxo da API

**11.** Um app móvel autentica usuários no [[Cognito|Amazon Cognito]] e chama a API. Qual forma de autorização exige a MENOR quantidade de código na API?

- [ ] a) Um Lambda authorizer que valida o token e devolve uma política de acesso
- [ ] b) Autorização IAM com credenciais de longo prazo embutidas no aplicativo móvel
- [ ] c) Uma chave de API enviada pelo aplicativo no cabeçalho de cada requisição
- [ ] d) O autorizador nativo do Cognito (ou JWT) no API Gateway, sem código

**12.** Um parceiro paga por camadas de uso e a empresa quer limitar e medir as chamadas de cada cliente. Qual recurso do [[API Gateway]] atende?

- [ ] a) Cache de resposta por estágio, com um tempo de vida diferente para cada cliente do parceiro
- [ ] b) Planos de uso com chaves de API, com limites de taxa e cota por cliente
- [ ] c) Um autorizador Lambda que conta as chamadas em memória, sem estado externo
- [ ] d) Regras do WAF que bloqueiam o IP do cliente quando o contrato estoura

**13.** Um navegador bloqueia a chamada de um site (origem A) para uma API em outro domínio (origem B). Qual configuração resolve?

- [ ] a) Habilitar o cache no stage, para o navegador reutilizar a resposta da origem B
- [ ] b) Colocar a API em endpoint privado dentro da VPC
- [ ] c) Habilitar CORS na API (OPTIONS para o preflight e cabeçalhos Access-Control-* nas respostas), informando as origens, os métodos e os cabeçalhos permitidos
- [ ] d) Associar um AWS WAF com uma regra que libera a origem A

**14.** Uma tarefa de renderização roda 4 horas sem interrupção, algumas vezes por semana. Qual é a melhor opção em computação?

- [ ] a) AWS Batch ou Fargate, que não têm o limite de duração do Lambda
- [ ] b) Lambda com timeout máximo, dividindo a tarefa em quatro execuções encadeadas à mão
- [ ] c) Step Functions Express Workflow executando a tarefa inteira, por ser um orquestrador gerenciado
- [ ] d) Lambda com concorrência provisionada, para evitar a interrupção da execução longa

**15.** Uma [[Lambda|função Lambda]] em [[Sub-rede Privada|sub-redes privadas]] consulta um [[RDS]] e também chama uma API externa e o [[DynamoDB]], tudo por um [[NAT Gateway]], e a fatura de [[NAT]] está alta. Qual mudança reduz o custo sem perder nenhum acesso?

- [ ] a) Trocar o NAT Gateway por uma NAT instance e manter todo o tráfego passando por ela
- [ ] b) Remover a função da VPC, o que também elimina o acesso privado ao RDS
- [ ] c) Criar interface endpoints para o DynamoDB e manter todo o restante do tráfego no NAT
- [ ] d) Criar um gateway endpoint para o DynamoDB e manter o NAT só para a API externa

**16.** Uma empresa vende uma API a parceiros que usam tokens emitidos por seus próprios sistemas, com cota mensal por parceiro e proteção contra [[SQL Injection|SQL injection]] diretamente no [[API Gateway]]. Qual conjunto atende?

- [ ] a) HTTP API com autorizador JWT, API keys por parceiro e regras do WAF associadas à API
- [ ] b) REST API com Lambda authorizer, usage plans com API keys e AWS WAF associado ao stage
- [ ] c) WebSocket API com rota $connect autenticada e limite de conexões por parceiro
- [ ] d) Function URL com autenticação IAM e um security group por parceiro

> [!success]- Gabarito
> **1. b) e d)** o [[RDS Proxy]] resolve o esgotamento de conexões e o padrão 202 mais fila resolve o limite de 29 segundos; a erra porque o [[API Gateway]] continua esperando só cerca de 29 s; c troca a API por um endpoint sem os recursos de gestão e não resolve o banco; e erra porque em endpoint regional o limite só pode ser aumentado por solicitação, e nunca de forma automática.
> **2. a)** na [[Invocacao Assincrona|invocação assíncrona]] o Lambda repete duas vezes e depois descarta ou envia ao destino de falha ou à [[Dead-Letter Queue|DLQ]]; b) o [[S3]] não é bloqueado; c) as tentativas têm limite; d) não há [[Fila FIFO|fila FIFO]] automática.
> **3. a) e d)** [[SnapStart]] restaura de um [[Snapshot|snapshot]] sem capacidade ociosa e um Init menor reduz o [[Cold Start|cold start]]; b paga por ambientes parados o dia todo; c é só reserva e não aquece nada; e o [[Timeout|timeout]] não afeta o cold start.
> **4. b)** a [[Concorrencia Reservada|concorrência reservada]] limita o máximo da função (e garante essa fatia); a) a provisionada mantém ambientes aquecidos e não limita o máximo; c) a memória não limita a concorrência; d) o alias divide versões, não limita.
> **5. c)** o [[SnapStart]] é a opção simples e barata em Java quando o requisito de [[Cold Start|cold start]] não é estrito; d erra porque SnapStart é incompatível com [[Concorrencia Provisionada|concorrência provisionada]]; a o [[Timeout|timeout]] não afeta o cold start; b reservar concorrência não aquece ambientes.
> **6. a)** funções em [[Sub-rede Privada|sub-rede privada]] saem para a internet por [[NAT Gateway]]; b) um IP público não é associado à função, e a rota para o [[Internet Gateway|IGW]] não basta; c) o Lambda em [[VPC]] acessa a internet com [[NAT]]; d) a memória não resolve rota.
> **7. d)** o [[RDS Proxy]] agrupa e reutiliza conexões com pouca mudança no código; a) o cache não reduz conexões de escrita; b) uma instância maior só adia; c) o [[SNS]] não limita conexões ao banco.
> **8. b)** versões publicadas e um alias com pesos permitem o canário e a reversão rápida; a) $LATEST sobrescrito não tem rollback imediato; c) duas funções complicam sem necessidade; d) a layer não controla tráfego.
> **9. c)** a API [[HTTP]] é mais barata e simples e aceita autorizador [[JWT]]; a) a REST é mais cara e traz recursos que o caso não pede; b) WebSocket é para comunicação bidirecional; d) a [[Function URL|URL de função]] não é uma API gerenciada com JWT.
> **10. a)** com o limite de 29 segundos o padrão é responder 202 e processar de forma assíncrona; b) o cache não encurta um processamento; c) o tipo de endpoint não muda o limite; d) a memória pode acelerar, mas o fluxo continua frágil perto do limite.
> **11. d)** o autorizador [[Cognito]] ou [[JWT]] é configuração nativa e dispensa código; a) exige escrever e manter uma função; b) credenciais de longo prazo no app são inseguras; c) a [[Usage Plan|chave de API]] não autentica usuários.
> **12. b)** [[Usage Plan|planos de uso]] com chaves de API limitam e medem o consumo por cliente; a) o cache não mede consumo; c) a contagem em memória se perde a cada ambiente; d) o [[WAF]] não mede uso por contrato.
> **13. c)** o [[CORS]] é habilitado na API (preflight OPTIONS e cabeçalhos nas respostas) com as origens permitidas; a) o cache não altera a política do navegador; b) o endpoint privado piora o acesso externo; d) o [[WAF]] filtra ataques, não instrui o navegador.
> **14. a)** o Batch ou o [[Fargate]] executam tarefas longas; b) emendar execuções à mão é frágil; c) o Express Workflow dura no máximo 5 minutos; d) a [[Concorrencia Provisionada|concorrência provisionada]] não altera o [[Timeout|timeout]].
> **15. d)** o [[Gateway Endpoint|gateway endpoint]] do [[DynamoDB]] não tem custo e tira esse tráfego do [[NAT]], que fica só para a API externa; a mantém o custo e a manutenção; b perde o acesso privado ao [[RDS]]; c funciona, mas [[Interface Endpoint|interface endpoints]] cobram por hora e por GB sem necessidade.
> **16. b)** só a REST API combina [[Lambda Authorizer|Lambda authorizer]] (tokens próprios), usage plans com API keys (cota por parceiro) e [[WAF]]; a erra porque a [[HTTP]] API não tem usage plans nem WAF direto; c é para comunicação bidirecional; d não oferece cota, WAF nem [[Security Group|security group]].

## Próximo módulo

[[17 - Containers ECS EKS e Fargate]]
