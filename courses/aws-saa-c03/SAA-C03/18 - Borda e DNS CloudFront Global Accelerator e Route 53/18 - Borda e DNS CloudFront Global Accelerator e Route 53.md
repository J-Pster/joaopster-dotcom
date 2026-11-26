---
aliases:
  - Módulo 18
modulo: 18
parte: "V Arquiteturas modernas"
tags:
  - modulo
  - saa-c03
---

# Módulo 18: Borda e DNS: CloudFront, Global Accelerator e Route 53

Entre o usuário e a sua aplicação existe um caminho: um nome que precisa virar endereço, um pacote que atravessa a internet e um conteúdo que, se for repetido, não precisa ser buscado de novo. Este módulo trata desse caminho com três serviços: o [[CloudFront]], que entrega e protege conteúdo pela borda; o [[Global Accelerator]], que leva tráfego [[TCP]] e [[UDP]] à Região saudável pela rede da AWS; e o [[Route 53]], que decide qual endereço cada usuário recebe. Ele responde a uma pergunta: **como levar o usuário certo ao lugar certo, rápido, com segurança e sem pagar mais do que o necessário?**

Ele é **prático**: as aulas 18.3, 18.7 e 18.9 trazem laboratórios opcionais (conta pessoal com [[Budgets|AWS Budgets]], aviso de custo e limpeza), nenhum obrigatório para a prova. O [[03 - Fundamentos de Redes para a Nuvem|Módulo 3]] deu a teoria de [[DNS]] e [[Latencia|latência]]; o [[06 - VPC a Fundo|Módulo 6]] e o [[12 - Balanceamento de Carga e Auto Scaling|Módulo 12]] explicaram as origens que vão atrás da borda. Os mecanismos formais de [[Recuperacao de Desastres|recuperação de desastres]] ficam no [[20 - Alta Disponibilidade e Recuperacao de Desastres|Módulo 20]].

> [!info] Pré-requisitos
> [[01 - Nuvem e Infraestrutura Global AWS|Módulo 1]] ([[Regiao AWS|Regiões]], [[Zona de Disponibilidade|AZs]] e a rede global), [[03 - Fundamentos de Redes para a Nuvem|Módulo 3]] ([[DNS]], [[TTL]], [[Latencia|latência]], [[TLS]]), [[11 - Amazon S3 a Fundo|Módulo 11]] (buckets, replicação e [[Transfer Acceleration]]) e [[12 - Balanceamento de Carga e Auto Scaling|Módulo 12]] ([[Application Load Balancer|ALB]] e [[Network Load Balancer|NLB]]).

## Aulas

1. [[18.01 - Por que a Borda e como o CloudFront Entrega Conteudo|Aula 18.1: Por que a borda e como o CloudFront entrega conteúdo]]: [[Latencia|latência]] física, [[Edge Location|POPs]], caches regionais, o caminho de um pedido e quando o [[CloudFront]] ajuda.
2. [[18.02 - Cache Behaviors Cache Key TTL e Invalidacao|Aula 18.2: Cache behaviors, cache key, TTL e invalidação]]: roteamento por caminho, cache policy, origin request policy, regras de [[TTL]], [[Invalidacao de Cache|invalidação]] versus [[Versionamento|versionamento]].
3. [[18.03 - Origens OAC Failover e Origin Shield|Aula 18.3: Origens, OAC, failover e Origin Shield]]: [[S3]] privado com [[Origin Access Control|OAC]], [[Application Load Balancer|ALB]] fechado, [[VPC Origin|VPC origins]], [[Origin Group|origin groups]], páginas de erro.
4. [[18.04 - Seguranca do Viewer HTTPS Assinaturas e WAF|Aula 18.4: Segurança do viewer, HTTPS, assinaturas e WAF]]: certificado em us-east-1, URLs e cookies assinados, [[Geo Restriction|geo restriction]], criptografia de campos.
5. [[18.05 - Edge Compute Custo e Planos do CloudFront|Aula 18.5: Edge compute, custo e planos do CloudFront]]: [[CloudFront Functions]] versus [[Lambda@Edge]], modelo de cobrança, [[Price Class|price classes]], IPs estáticos.
6. [[18.06 - Global Accelerator Anycast e Rede Global da AWS|Aula 18.6: Global Accelerator, anycast e a rede global da AWS]]: [[Anycast|IPs anycast]], [[Endpoint Group|endpoint groups]], [[Traffic Dial|traffic dial]], [[Failover|failover]] rápido, custom routing.
7. [[18.07 - Route 53 Fundamentos Zonas Registros e Alias|Aula 18.7: Route 53, zonas, registros e alias]]: zonas públicas e privadas, alias versus [[CNAME]], [[TTL]], [[DNSSEC]], custos.
8. [[18.08 - Route 53 Politicas de Roteamento|Aula 18.8: Route 53, políticas de roteamento]]: simple, weighted, [[Latencia|latency]], [[Failover|failover]], geolocation, geoproximity, IP-based, multivalue.
9. [[18.09 - Health Checks Failover e Application Recovery Controller|Aula 18.9: Health checks, failover e Application Recovery Controller]]: tipos de [[Health Check|health check]], conta do tempo de [[Failover|failover]], [[Application Recovery Controller|ARC]] e safety rules.
10. [[18.10 - Padroes de Arquitetura e Decisao de Borda e DNS|Aula 18.10: Padrões de arquitetura e decisão de borda e DNS]]: site estático, aplicação dinâmica, multi-Região, a matriz de decisão e os outros aceleradores de borda ([[Transfer Acceleration|S3 Transfer Acceleration]] e [[API Gateway]] edge-optimized).

**Por que 10 aulas e nesta ordem.** O módulo segue o caminho do pedido: primeiro o [[CDN]], que é o serviço mais cobrado (18.1 a 18.5, divididas em mecanismo, cache, origem, segurança e custo, porque cada tema tem pegadinhas próprias), depois o [[Global Accelerator]] (18.6), que se entende por contraste com o [[CloudFront]], e por fim o [[DNS]] (18.7 a 18.9), que vem antes na vida real mas só faz sentido para o aluno depois de conhecer os alvos dos registros. A aula 18.10 junta tudo em arquiteturas completas e na matriz "requisito, solução", que é o formato das questões.

## Cobertura do exam guide

| Task statement | Onde está |
|---|---|
| Task 1.2: proteger o acesso a recursos e a origem ([[S3]] privado, [[Application Load Balancer\|ALB]] fechado) | [[18.03 - Origens OAC Failover e Origin Shield\|Aula 18.3]] |
| Task 1.2 e 1.3: proteger [[Criptografia em Transito\|dados em trânsito]] e acesso do usuário (HTTPS, assinaturas, geo, [[WAF]]) | [[18.04 - Seguranca do Viewer HTTPS Assinaturas e WAF\|Aula 18.4]] |
| Task 2.1: estratégias de cache e aceleradores de borda ([[CDN]]) | [[18.01 - Por que a Borda e como o CloudFront Entrega Conteudo\|Aula 18.1]], [[18.02 - Cache Behaviors Cache Key TTL e Invalidacao\|Aula 18.2]] e [[18.05 - Edge Compute Custo e Planos do CloudFront\|Aula 18.5]] |
| Task 2.2: [[Failover\|failover]], [[DNS]], [[Health Check\|health checks]] e estratégias de recuperação | [[18.03 - Origens OAC Failover e Origin Shield\|Aula 18.3]], [[18.06 - Global Accelerator Anycast e Rede Global da AWS\|Aula 18.6]], [[18.08 - Route 53 Politicas de Roteamento\|Aula 18.8]], [[18.09 - Health Checks Failover e Application Recovery Controller\|Aula 18.9]] e [[18.10 - Padroes de Arquitetura e Decisao de Borda e DNS\|Aula 18.10]] |
| Task 3.4: serviços de rede de borda ([[CloudFront]], [[Global Accelerator]]) | [[18.01 - Por que a Borda e como o CloudFront Entrega Conteudo\|Aula 18.1]], [[18.05 - Edge Compute Custo e Planos do CloudFront\|Aula 18.5]], [[18.06 - Global Accelerator Anycast e Rede Global da AWS\|Aula 18.6]] e [[18.07 - Route 53 Fundamentos Zonas Registros e Alias\|Aula 18.7]] |
| Task 4.4: custo de rede, [[CDN]] e cache estratégico | [[18.02 - Cache Behaviors Cache Key TTL e Invalidacao\|Aula 18.2]], [[18.05 - Edge Compute Custo e Planos do CloudFront\|Aula 18.5]] e [[18.10 - Padroes de Arquitetura e Decisao de Borda e DNS\|Aula 18.10]] |

## Checklist de saída do módulo

Marque cada item quando conseguir responder **por quê**, sem consultar as aulas.

- [ ] Por que o [[Cache Hit Ratio|hit ratio]] é o número que mais influencia a [[Latencia|latência]] e o custo de um [[CloudFront]], e quais três itens da configuração o controlam?
- [ ] Por que um [[Bucket|bucket]] [[S3]] "privado" ainda precisa de uma [[Bucket Policy|bucket policy]] específica para o [[CloudFront]], e por que o endpoint de website do S3 não pode usar [[Origin Access Control|OAC]]?
- [ ] Por que o certificado do [[ACM]] para o [[CloudFront]] fica em us-east-1, qualquer que seja a Região da origem?
- [ ] Por que o [[Failover|failover]] do [[Route 53]] nunca é instantâneo, e como se estima o tempo com intervalo, limiar e [[TTL]]?
- [ ] Por que o alias existe se já temos [[CNAME]], e em que situação ele é obrigatório?
- [ ] Por que o [[Global Accelerator]], e não o [[CloudFront]], é a resposta para [[UDP]], IPs fixos e [[Failover|failover]] em segundos?
- [ ] Por que um [[Origin Group|origin group]] resolve falha de origem mas não substitui o [[Failover|failover]] entre [[Regiao AWS|Regiões]] do [[DNS]]?
- [ ] Por que "[[Latencia|latência]]" e "geolocalização" são políticas diferentes, e qual escolher para cada requisito?

## Teste-se

**1.** Uma empresa publica uma SPA em um [[Bucket|bucket]] [[S3]] e uma API em um [[Application Load Balancer|ALB]], para usuários do mundo todo. Os requisitos são: bucket privado, ALB sem acesso direto da internet, bloqueio de [[SQL Injection|SQL injection]] antes de chegar à [[VPC]] e o MENOR [[Overhead Operacional|overhead operacional]]. Qual arquitetura atende?

- [ ] a) Duas distribuições separadas, bucket com website endpoint público e WAF anexado apenas ao ALB
- [ ] b) Global Accelerator na frente do bucket e do ALB, com o WAF anexado ao acelerador e o ALB liberado só à faixa dele
- [ ] c) Uma distribuição com `/api/*` para o ALB via VPC origin, `*` para o S3 com OAC, e WAF na distribuição
- [ ] d) Route 53 weighted entre o bucket e o ALB, com regras de bloqueio no registro DNS

**2.** Uma empresa quer que `app.exemplo.com` resolva para uma [[CloudFront Distribution|distribuição do CloudFront]] na internet, mas para um [[Application Load Balancer|ALB]] interno quando consultado de dentro de duas [[VPC|VPCs]], sem expor o ALB interno. Qual configuração atende?

- [ ] a) Zona pública com alias para o CloudFront e zona privada de mesmo nome, associada às VPCs, com alias para o ALB interno
- [ ] b) Uma só zona pública com dois registros weighted, um para o CloudFront e outro para o ALB interno, com pesos ajustados por VPC
- [ ] c) Uma zona pública com geolocation, enviando as VPCs para o ALB interno por país
- [ ] d) Uma zona privada com CNAME para o CloudFront, associada apenas à internet pública

**3.** Um jogo [[UDP]] roda em três [[Regiao AWS|Regiões]]. A empresa precisa de IPs fixos para uma [[Allow List|lista de permissão]] de anti-cheat, [[Failover|failover]] regional em menos de um minuto e a possibilidade de drenar uma Região em deploys, tudo com o MENOR [[Overhead Operacional|overhead operacional]]. O que usar?

- [ ] a) CloudFront com um NLB por Região e Route 53 por latência com TTL de 60 segundos, mais um script que atualiza os registros na falha
- [ ] b) Route 53 failover com health checks de 10 segundos e TTL de 30 segundos em cada Região
- [ ] c) Três instâncias EC2 com Elastic IP, com um script de DNS que troca os registros quando há falha
- [ ] d) Global Accelerator com um endpoint group por Região (NLB) e o traffic dial para drenar uma Região

**4.** Uma plataforma de [[Streaming de Dados|streaming]] precisa bloquear um país apenas no caminho `/esportes/*`, mantendo o resto do site liberado para ele, e combinar isso com [[Throttling|limitação de taxa]] por IP. Qual solução atende com o MENOR esforço?

- [ ] a) Geo restriction da distribuição com lista de bloqueio contendo o país
- [ ] b) Regras de geo match e rate-based em um web ACL do WAF (escopo CloudFront) associado à distribuição
- [ ] c) Route 53 geolocation com um registro default para o tráfego do país, apontando para uma página de bloqueio no S3
- [ ] d) Network ACL na subnet da origem com regra de negação para os blocos de IP do país

**5.** Uma empresa com a aplicação em `sa-east-1` vai servir `www.exemplo.com` pelo [[CloudFront]] e a auditoria exige HTTPS entre o usuário e a origem, sem custo extra de IP dedicado. Quais DUAS configurações atendem? (Escolha DUAS.)

- [ ] a) Anexar à distribuição um certificado do ACM criado em `sa-east-1`, junto da aplicação
- [ ] b) Emitir o certificado do ACM em us-east-1 e atendê-lo por SNI na distribuição
- [ ] c) Contratar IP dedicado para atender todos os clientes, inclusive os com SNI
- [ ] d) Deixar a viewer protocol policy em "HTTP and HTTPS" e a origem em HTTP
- [ ] e) Definir a origin protocol policy como "HTTPS only" com certificado válido no ALB

**6.** Um site de imagens lê de um [[Bucket|bucket]] primário em `us-east-1`, replicado por [[Replicacao do S3|CRR]] para `sa-east-1`. A leitura deve continuar se o primário responder com erro 5xx, os uploads seguem no primário e o [[DNS]] não deve ser alterado. O que configurar?

- [ ] a) Um origin group com os dois buckets, tendo 500, 502, 503 e 504 como critério de failover
- [ ] b) Um Route 53 failover entre dois domínios, cada um com uma distribuição e um health check, e TTL de 30 segundos nos registros
- [ ] c) Um Global Accelerator com os dois buckets S3 como endpoints
- [ ] d) Um origin group com os dois buckets e a política de métodos liberada para `POST` e `PUT`, para o failover cobrir os uploads

**7.** Um site faz 20 deploys por dia com arquivos `main.<hash>.js` e `index.html`. O [[Cache Hit Ratio|hit ratio]] está em 30% porque os links de campanha trazem parâmetros `utm_*` e a cache policy inclui todas as query strings. Qual conjunto de mudanças corrige com o MENOR custo?

- [ ] a) Invalidar `/*` em cada deploy e manter todas as query strings na cache key
- [ ] b) Tirar `utm_*` da cache key, dar TTL longo aos arquivos com hash e TTL curto ao `index.html`
- [ ] c) Reduzir o TTL padrão para 5 segundos em tudo e habilitar o Origin Shield em todas as Regiões da distribuição
- [ ] d) Trocar para CachingDisabled e escalar a origem com Auto Scaling para absorver todos os pedidos

**8.** Uma aplicação precisa validar um [[JWT]] consultando um conjunto de chaves publicado por um provedor externo a cada pedido e adicionar headers de segurança a todas as respostas, com o MENOR custo. Qual combinação atende?

- [ ] a) Lambda@Edge nos dois eventos, viewer request e viewer response, publicado em us-east-1
- [ ] b) CloudFront Functions nos dois eventos, viewer request e viewer response
- [ ] c) Lambda@Edge em viewer request para o JWT e CloudFront Functions em viewer response para os headers
- [ ] d) CloudFront Functions em viewer request para o JWT e Lambda@Edge em viewer response para os headers de segurança

**9.** Uma aplicação ativo-passivo roda em [[Sub-rede|subnets]] privadas. O [[Route 53]] deve desviar para a Região secundária quando pelo menos 2 de 3 [[Microsservicos|microsserviços]] internos estiverem com problemas, e as métricas já estão no [[CloudWatch]]. Qual configuração atende?

- [ ] a) Três health checks de endpoint público apontando para os IPs privados, ligados ao primário
- [ ] b) Registro simple com Evaluate target health ativado para os três microsserviços
- [ ] c) Um registro weighted com peso zero para o primário, alterado manualmente por um operador quando houver problema
- [ ] d) Health check calculado ("pelo menos 2 de 3") sobre alarmes do CloudWatch, no registro primário

**10.** Uma empresa financeira exige que o desvio de uma Região seja uma decisão humana, feita pelo [[Plano de Dados|plano de dados]] [[Alta Disponibilidade|altamente disponível]], e que nunca seja possível desligar as duas [[Regiao AWS|Regiões]] ao mesmo tempo. Qual solução atende?

- [ ] a) Application Recovery Controller com routing controls e safety rules, ligados a health checks
- [ ] b) Route 53 failover automático com health checks de 10 segundos, TTL baixo e alarme para os operadores
- [ ] c) Global Accelerator com o traffic dial alterado manualmente pelo console durante o incidente, sem regra de proteção
- [ ] d) Route 53 weighted com peso zero, ajustado por um runbook com chamadas de API do plano de controle do Route 53

**11.** Uma empresa serve usuários apenas nos Estados Unidos e na Europa por um [[Application Load Balancer|ALB]] como origem. Quer reduzir o custo do [[CloudFront]] e a carga da origem, aceitando [[Latencia|latência]] maior no resto do mundo. Quais DUAS ações atendem? (Escolha DUAS.)

- [ ] a) Usar Price Class All e habilitar o Origin Shield em todas as Regiões
- [ ] b) Contratar Anycast static IPs para reduzir o volume de tráfego
- [ ] c) Usar a Price Class 100, que cobre América do Norte e Europa
- [ ] d) Incluir todas as query strings e cookies na cache key para evitar respostas erradas
- [ ] e) Enxugar a cache key e usar TTLs mais longos para aumentar o hit ratio

**12.** O time quer deslocar gradualmente mais usuários de `us-east-1` para `eu-west-1`, ajustando o alcance geográfico de cada Região em vez de dividir por porcentagem fixa. Qual política do [[Route 53]] usar?

- [ ] a) Geolocation com um registro por país, um registro default e health checks em cada um
- [ ] b) Geoproximity com bias em cada Região
- [ ] c) Weighted com pesos 90 e 10 nos dois registros
- [ ] d) Multivalue answer com os IPs das duas Regiões

**13.** Uma plataforma de vídeo com audiência mundial vê a mesma origem receber o mesmo segmento milhares de vezes, vindo de [[Regional Edge Cache|Regional Edge Caches]] diferentes. Qual recurso reduz esse tráfego de origem?

- [ ] a) Desligar o Regional Edge Cache para as buscas irem direto
- [ ] b) Aumentar o número de behaviors da distribuição
- [ ] c) Origin Shield na Região mais próxima da origem
- [ ] d) Trocar a política de cache para CachingDisabled

**14.** Um [[Bucket|bucket]] criado em 2019 usa [[Origin Access Identity|OAI]] e a equipe quer passar a usar [[SSE-KMS]], mantendo o bucket privado. Quais DUAS ações são necessárias? (Escolha DUAS.)

- [ ] a) Criar um OAC e associá-lo à origem S3 da distribuição
- [ ] b) Trocar a origem para o endpoint de website do S3, que também aceita OAC
- [ ] c) Desligar o Block Public Access do bucket para o CloudFront ler
- [ ] d) Atualizar a bucket policy para o principal `cloudfront.amazonaws.com` com `AWS:SourceArn` e permitir a chave KMS ao CloudFront
- [ ] e) Gerar URLs pré-assinadas do S3 com a chave KMS e distribuí-las aos usuários

**15.** Uma SPA servida de um [[Bucket|bucket]] [[S3]] privado (endpoint REST, [[Origin Access Control|OAC]]) devolve erro em `https://dominio/` e também ao recarregar `/painel/perfil`. Qual configuração corrige os dois casos sem alterar o código?

- [ ] a) Habilitar o Origin Shield no bucket e invalidar `/*` a cada deploy do front-end
- [ ] b) Trocar para o endpoint de website do S3, com ACL pública e Block Public Access desligado
- [ ] c) Criar um behavior `/` com CachingDisabled e TTL zero
- [ ] d) Default root object `index.html` e erros 403 e 404 convertidos em 200 com `/index.html`

**16.** Uma exigência de conformidade pede [[DNSSEC]] na zona pública `exemplo.com` hospedada no [[Route 53]]. Qual conjunto de ações atende?

- [ ] a) KSK em chave KMS assimétrica de us-east-1, assinatura habilitada e registro DS no registrador
- [ ] b) Criar uma chave KMS simétrica na Região da zona e habilitar a assinatura, sem alterar nada no registrador
- [ ] c) Emitir um certificado do ACM em us-east-1 e anexá-lo à zona hospedada pública
- [ ] d) Ativar DNSSEC em uma zona privada associada às VPCs e publicar o registro DS no registrador

> [!success]- Gabarito
> **1. c)** Uma distribuição com dois behaviors, [[Origin Access Control|OAC]] no [[Bucket|bucket]], [[VPC Origin|VPC origin]] no [[Application Load Balancer|ALB]] e [[WAF]] na borda cumpre todos os requisitos com pouca operação; a alternativa a) deixa o bucket público e o WAF só no ALB, a alternativa b) usa o GA, que não tem WAF próprio nem aceita bucket [[S3]], e a alternativa d) trata o [[DNS]] como se filtrasse ataques.
> **2. a)** O padrão split-view usa duas zonas com o mesmo nome, uma pública e outra privada associada às [[VPC|VPCs]]; a alternativa b) expõe o [[Application Load Balancer|ALB]] interno na zona pública, a alternativa c) separa por país e não por origem da consulta, e a alternativa d) inverte a visibilidade das zonas.
> **3. d)** O GA dá [[Anycast|IPs anycast]] fixos, [[Failover|failover]] sem [[TTL]] e [[Traffic Dial|traffic dial]] por endpoint group; a alternativa a) usa [[CloudFront]] ([[HTTP]]) para [[UDP]], a alternativa b) depende de TTL e não dá IP fixo, e a alternativa c) é manual e frágil.
> **4. b)** O [[WAF]] permite regra geo match restrita a um caminho e combinável com rate-based; a alternativa a) vale para a distribuição inteira, a alternativa c) só roteia [[DNS]] e a alternativa d) não enxerga o país nem o caminho.
> **5. b) e e)** O certificado do viewer fica em us-east-1 e é atendido por [[SNI]], sem custo de IP, e a origin protocol policy HTTPS cifra o trecho até a origem; a alternativa a) usa a Região errada, a alternativa c) gera custo desnecessário e a alternativa d) deixa tráfego em claro.
> **6. a)** O [[Origin Group|origin group]] troca para o secundário nos códigos escolhidos, para leituras, sem tocar no [[DNS]]; a alternativa b) mexe no DNS, a alternativa c) erra porque o GA não aceita [[Bucket|bucket]] [[S3]] como endpoint e a alternativa d) erra porque o [[Failover|failover]] não cobre POST e PUT.
> **7. b)** Tirar `utm_*` da chave elimina a fragmentação, e [[TTL]] longo para arquivos com [[Hash|hash]] mais TTL curto para o HTML evita [[Invalidacao de Cache|invalidações]]; a alternativa a) gasta invalidações e mantém a fragmentação, a alternativa c) derruba o cache e a alternativa d) elimina o benefício do [[CDN]].
> **8. c)** Consultar um provedor externo exige rede ([[Lambda@Edge]]), e headers de resposta são uma tarefa simples e massiva ([[CloudFront Functions]]); a alternativa a) paga mais pelos headers, a alternativa b) não tem rede e a alternativa d) inverte as funções.
> **9. d)** O [[Calculated Health Check|health check calculado]] combina o estado de filhos com "pelo menos N", e os filhos de [[CloudWatch Alarm|alarme do CloudWatch]] enxergam recursos privados; a alternativa a) não alcança IPs privados, a alternativa b) não se aplica a registro simple e a alternativa c) é manual.
> **10. a)** O [[Application Recovery Controller|ARC]] dá [[Routing Control|routing controls]] no [[Plano de Dados|plano de dados]] e safety rules que impedem desligar tudo; a alternativa b) é automático, a alternativa c) não tem regra de segurança equivalente e a alternativa d) usa o [[Plano de Controle|plano de controle]], menos confiável em incidentes.
> **11. c) e e)** A [[Price Class]] 100 cobre as duas [[Regiao AWS|regiões]] de custo menor, e uma [[Cache Key|cache key]] enxuta com TTLs maiores reduz a carga da origem; a alternativa a) usa a classe mais cara e soma o [[Origin Shield]], a alternativa b) não reduz tráfego e a alternativa d) fragmenta o cache.
> **12. b)** Geoproximity com bias desloca o alcance geográfico de cada Região; a alternativa a) divide por país, a alternativa c) divide por porcentagem fixa sem noção de geografia e a alternativa d) devolve vários IPs sem controle.
> **13. c)** O [[Origin Shield]] consolida as buscas dos caches regionais em uma única Região perto da origem; a alternativa a) piora, a alternativa b) não consolida e a alternativa d) desliga o cache.
> **14. a) e d)** O [[Origin Access Control|OAC]] substitui o [[Origin Access Identity|OAI]] e a [[Bucket Policy|bucket policy]] do principal de serviço com `AWS:SourceArn`, mais a permissão na chave [[KMS]], mantém o [[Bucket|bucket]] privado com KMS; a alternativa b) perde o OAC, a alternativa c) torna o bucket público e a alternativa e) passa por fora do [[CloudFront]].
> **15. d)** O default root object resolve a raiz e as respostas de erro personalizadas resolvem as rotas internas; a alternativa a) não toca no problema, a alternativa b) expõe o [[Bucket|bucket]] e perde o [[Origin Access Control|OAC]] e a alternativa c) não muda o objeto pedido.
> **16. a)** A [[KSK]] usa uma chave [[KMS]] assimétrica em us-east-1, e o registro DS no registrador fecha a cadeia de confiança; a alternativa b) usa [[Chave Simetrica|chave simétrica]] na Região errada, a alternativa c) confunde certificado com [[DNSSEC]] e a alternativa d) erra porque DNSSEC é só para zonas públicas.

## Próximo módulo

[[19 - Seguranca de Aplicacoes e Deteccao de Ameacas|Próximo módulo: Módulo 19, Segurança de aplicações e detecção de ameaças]]
