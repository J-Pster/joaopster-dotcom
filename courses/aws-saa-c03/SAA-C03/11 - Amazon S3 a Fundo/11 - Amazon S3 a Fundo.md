---
aliases:
  - Módulo 11
modulo: 11
parte: "III Computação e armazenamento"
tags:
  - modulo
  - saa-c03
---

# Módulo 11: Amazon S3 a fundo

O [[S3]] é um dos serviços mais cobrados da prova, porque quase toda arquitetura passa por ele: backup, [[Data Lake|data lake]], site estático, logs, entrega de conteúdo, origem de pipelines de eventos. Este módulo parte do modelo ([[Bucket|bucket]], objeto, chave, [[Durabilidade|durabilidade]]) e vai até a operação em escala (replicação, desempenho, eventos). A pergunta que guia o módulo: **dado um requisito de acesso, custo, proteção ou distância, qual recurso do S3 atende, e por que os outros não?**

Ele é **prático**: as aulas de ciclo de vida, acesso, [[Versionamento|versionamento]] e replicação trazem laboratórios opcionais (em conta pessoal, com aviso de custo e limpeza), mas nenhum é obrigatório para a prova.

> [!info] Pré-requisitos
> [[01 - Nuvem e Infraestrutura Global AWS|Módulo 1]] ([[Regiao AWS|Regiões]] e [[Zona de Disponibilidade|AZs]]), [[04 - IAM Identidade e Acesso|Módulo 4]] (políticas e papéis), [[06 - VPC a Fundo|Módulo 6]] ([[VPC Endpoint|endpoints de VPC]]), [[08 - Criptografia e Protecao de Dados|Módulo 8]] ([[KMS]]) e [[10 - Armazenamento em Bloco e Arquivos EBS EFS FSx|Módulo 10]] (bloco e arquivo, para comparar com objeto).

## Aulas

1. [[11.01 - O Modelo do S3 Buckets Objetos e Durabilidade|Aula 11.1: O modelo do S3, buckets, objetos e durabilidade]]: [[Bucket|bucket]], objeto, chave, [[Consistencia Forte|consistência forte]], [[Durabilidade|durabilidade]] versus [[Disponibilidade|disponibilidade]] e tipos de bucket.
2. [[11.02 - Classes de Armazenamento do S3 e Glacier|Aula 11.2: Classes de armazenamento do S3 e Glacier]]: Standard, [[S3 Intelligent-Tiering|Intelligent-Tiering]], IA, One Zone-IA, Glacier, [[S3 Express One Zone|Express One Zone]] e restauração.
3. [[11.03 - Ciclo de Vida e Custo no S3|Aula 11.3: Ciclo de vida e custo no S3]]: regras de transição e expiração, versões não correntes, multipart e modelo de custo.
4. [[11.04 - Controle de Acesso e Rede no S3|Aula 11.4: Controle de acesso e rede no S3]]: [[Bucket Policy|bucket policy]], [[Block Public Access]], Object Ownership, [[Access Point|access points]], [[Presigned URL|presigned URLs]] e endpoints.
5. [[11.05 - Criptografia Versionamento e Retencao no S3|Aula 11.5: Criptografia, versionamento e retenção no S3]]: [[SSE-S3]], [[SSE-KMS]], [[S3 Bucket Keys|Bucket Keys]], [[Versionamento|versionamento]], [[MFA Delete]] e [[Object Lock]].
6. [[11.06 - Replicacao do S3|Aula 11.6: Replicação do S3]]: [[Replicacao do S3|CRR]], SRR, [[Replication Time Control|RTC]], [[Batch Replication]] e [[Multi-Region Access Point|Multi-Region Access Points]].
7. [[11.07 - Desempenho e Transferencia de Dados no S3|Aula 11.7: Desempenho e transferência de dados no S3]]: limites por prefixo, multipart, byte-range, [[Transfer Acceleration]] e [[S3 Express One Zone|Express One Zone]].
8. [[11.08 - Eventos Site Estatico e Gestao em Escala no S3|Aula 11.8: Eventos, site estático e gestão em escala no S3]]: notificações de evento, site estático com [[CloudFront]], Inventory, [[S3 Storage Lens|Storage Lens]] e [[S3 Batch Operations|Batch Operations]].

**Por que 8 aulas e nesta ordem.** Primeiro o modelo (11.1), porque tudo depende de entender chave, prefixo, consistência e a diferença entre [[Durabilidade|durabilidade]] e [[Disponibilidade|disponibilidade]]. Depois as classes (11.2) e o ciclo de vida (11.3), que são o centro do custo. Segurança vem em duas aulas, acesso e rede (11.4), e criptografia, [[Versionamento|versionamento]] e retenção (11.5). As três últimas tratam de escala: replicação (11.6), desempenho (11.7) e integrações e gestão (11.8).

## Cobertura do exam guide

| Task statement | Onde está |
|---|---|
| Task 3.1: armazenamento de alto desempenho e escalável | [[11.01 - O Modelo do S3 Buckets Objetos e Durabilidade\|Aula 11.1]], [[11.07 - Desempenho e Transferencia de Dados no S3\|Aula 11.7]] e [[11.08 - Eventos Site Estatico e Gestao em Escala no S3\|Aula 11.8]] |
| Task 4.1: armazenamento com custo otimizado | [[11.02 - Classes de Armazenamento do S3 e Glacier\|Aula 11.2]], [[11.03 - Ciclo de Vida e Custo no S3\|Aula 11.3]] (inclui [[Requester Pays]]), [[11.07 - Desempenho e Transferencia de Dados no S3\|Aula 11.7]] e [[11.08 - Eventos Site Estatico e Gestao em Escala no S3\|Aula 11.8]] ([[S3 Storage Lens\|Storage Lens]]) |
| Task 1.3: proteção de dados, criptografia, [[Versionamento\|versionamento]] e retenção | [[11.04 - Controle de Acesso e Rede no S3\|Aula 11.4]] ([[Block Public Access]], policies), [[11.05 - Criptografia Versionamento e Retencao no S3\|Aula 11.5]], [[11.06 - Replicacao do S3\|Aula 11.6]] e [[11.08 - Eventos Site Estatico e Gestao em Escala no S3\|Aula 11.8]] |
| Task 1.2: controle de acesso a dados e rede | [[11.04 - Controle de Acesso e Rede no S3\|Aula 11.4]] |
| Task 2.2: [[Durabilidade\|durabilidade]], replicação e recuperação | [[11.01 - O Modelo do S3 Buckets Objetos e Durabilidade\|Aula 11.1]] e [[11.06 - Replicacao do S3\|Aula 11.6]] |
| Task 2.1: componentes [[Desacoplamento\|desacoplados]] ([[S3 Event Notifications\|eventos do S3]]) | [[11.08 - Eventos Site Estatico e Gestao em Escala no S3\|Aula 11.8]] |
| Task 3.4: entrega de conteúdo e [[Latencia\|latência]] global ([[CloudFront]], [[Transfer Acceleration]]) | [[11.07 - Desempenho e Transferencia de Dados no S3\|Aula 11.7]] e [[11.08 - Eventos Site Estatico e Gestao em Escala no S3\|Aula 11.8]] |

Backup centralizado e [[Recuperacao de Desastres|recuperação de desastres]] de ponta a ponta ficam no módulo de proteção e recuperação; [[CloudFront]], no módulo de entrega de conteúdo.

> [!warning] Fatos que mudam
> Valores citados com "verificado em novembro de 2026" vêm da documentação oficial da AWS na data indicada. A única divergência de documentação que o curso discute é o tamanho máximo de objeto (5 TB nos simulados, 48,8 TiB na documentação atual), na aula 11.1. Preços usados nos exemplos de custo são hipotéticos. Confira a página oficial antes de decidir em produção.

## Checklist de saída do módulo

- [ ] Sei explicar por que o [[S3]] tem namespace plano e o que é um prefixo?
- [ ] Sei dizer por que [[Durabilidade|durabilidade]] de onze noves não é o mesmo que [[Disponibilidade|disponibilidade]]?
- [ ] Sei justificar qual classe escolher para acesso imprevisível, acesso raro com milissegundos e arquivo de longo prazo?
- [ ] Sei explicar por que expirar objetos em [[Bucket|bucket]] versionado não reduz o custo sozinho?
- [ ] Sei dizer quando usar [[Gateway Endpoint|gateway endpoint]] e quando usar [[Interface Endpoint|interface endpoint]]?
- [ ] Sei explicar por que o [[SSE-S3]] é o padrão e quando o [[SSE-KMS]] se justifica (e para que servem as [[S3 Bucket Keys|Bucket Keys]])?
- [ ] Sei diferenciar [[Object Lock]] Governance e Compliance e dizer o que o [[MFA Delete]] protege?
- [ ] Sei explicar por que a replicação ativa não copia o que já existe, e o que usar nesse caso?
- [ ] Sei escolher entre multipart, byte-range, [[Transfer Acceleration]], [[CloudFront]] e [[S3 Express One Zone|Express One Zone]]?
- [ ] Sei decidir entre [[SQS]], [[SNS]], Lambda e [[EventBridge]] como destino de [[S3 Event Notifications|eventos do S3]]?

## Teste-se

**1.** Um [[Data Lake|data lake]] guarda 200 TB de objetos grandes cujo acesso é misto e imprevisível: parte esfria por meses e depois volta a ser lida em picos. A equipe quer reduzir o custo sem pagar taxa de recuperação e sem manter regras de transição. Qual abordagem atende?

- [ ] a) S3 Intelligent-Tiering, que move cada objeto entre camadas conforme o acesso real
- [ ] b) Regra de ciclo de vida com Standard-IA aos 30 dias e Glacier Flexible Retrieval aos 90 dias
- [ ] c) S3 Standard-IA para tudo, aceitando a taxa de recuperação por GB nos picos de leitura
- [ ] d) S3 One Zone-IA para tudo, com replicação para outra Região como cópia de segurança

**2.** Dados de acesso imprevisível, sem aviso prévio, devem ficar baratos quando esfriam e rápidos quando voltam a ser lidos, sem taxa de recuperação. Qual classe?

- [ ] a) S3 Standard-IA
- [ ] b) S3 Glacier Flexible Retrieval
- [ ] c) S3 One Zone-IA
- [ ] d) S3 Intelligent-Tiering

**3.** Uma empresa replica um [[Bucket|bucket]] com [[SSE-KMS]] em us-east-1 para um bucket de DR em us-west-2. A regra foi criada com [[Versionamento|versionamento]] nos dois lados e uma [[IAM Role|IAM role]], mas os objetos novos ficam com ReplicationStatus FAILED. Qual é a causa mais provável e a correção?

- [ ] a) O versionamento do destino foi suspenso, e é preciso ligar o Replication Time Control para retomar a replicação
- [ ] b) A replicação só aceita objetos sem criptografia, e é preciso desligar o SSE-KMS na origem e reenviar os objetos
- [ ] c) A role não tem kms:Decrypt na chave de origem nem kms:Encrypt e kms:GenerateDataKey na chave do destino
- [ ] d) O destino precisa estar na mesma Região da origem para receber objetos cifrados com SSE-KMS, pois a chave não atravessa Regiões

**4.** O aplicativo de folha de pagamento deve acessar apenas o prefixo `folha/` de um [[Bucket|bucket]] compartilhado e somente de dentro de uma [[VPC]], sem editar a [[Bucket Policy|bucket policy]] já enorme a cada novo aplicativo. Qual recurso resolve?

- [ ] a) Uma ACL de objeto em cada arquivo de folha/ liberando o acesso apenas às instâncias da VPC
- [ ] b) Um S3 Access Point com origem de rede na VPC e política limitada ao prefixo folha/
- [ ] c) Uma regra de ciclo de vida filtrada por folha/ que bloqueia leituras fora da VPC
- [ ] d) Um bucket novo por aplicativo, copiado do compartilhado por Same-Region Replication

**5.** Uma empresa habilitou [[Object Lock]] com retenção padrão de sete anos em [[Modo Compliance|modo Compliance]] em um [[Bucket|bucket]] que já tinha 30 milhões de objetos, e a auditoria descobre que os objetos antigos não têm proteção. Qual correção exige menos esforço?

- [ ] a) Suspender e religar o versionamento para que a retenção padrão alcance também as versões antigas do bucket
- [ ] b) Recriar o bucket com Object Lock e copiar todos os objetos com um script próprio rodando em instâncias EC2
- [ ] c) Usar S3 Batch Operations para aplicar a retenção do Object Lock aos objetos existentes, com manifesto do Inventory
- [ ] d) Aguardar, pois a retenção padrão é aplicada em segundo plano aos objetos existentes em até 24 horas

**6.** Quais DUAS afirmações sobre as notificações de [[S3 Event Notifications|eventos do S3]] estão corretas? (Escolha DUAS.)

- [ ] a) A entrega é no mínimo uma vez, então o consumidor deve ser idempotente
- [ ] b) Os destinos nativos são SQS padrão, SNS, Lambda e EventBridge
- [ ] c) Uma fila SQS FIFO é destino direto
- [ ] d) A ordem dos eventos é sempre garantida
- [ ] e) Cada evento é entregue exatamente uma vez

**7.** Instâncias em [[Sub-rede Privada|sub-redes privadas]] sem [[NAT]] precisam acessar o [[S3]] sem custo extra, e um servidor on-premises também precisa de acesso privado pelo [[Direct Connect]]. Qual combinação atende?

- [ ] a) Somente gateway endpoint para os dois casos
- [ ] b) Gateway endpoint para as instâncias na VPC e interface endpoint para o acesso on-premises
- [ ] c) Somente interface endpoint para os dois casos, pagando por hora e por GB também para as instâncias na VPC
- [ ] d) Um NAT Gateway para os dois casos

**8.** Um site estático está em um [[Bucket|bucket]] privado cifrado com [[SSE-KMS]] ([[Customer Managed Key|chave gerenciada pelo cliente]]) e é servido pelo [[CloudFront]] com domínio próprio, mas as páginas retornam 403. Qual combinação de configuração é necessária?

- [ ] a) OAC no CloudFront, bucket policy com cloudfront.amazonaws.com e SourceArn da distribuição, e key policy do KMS liberando o CloudFront
- [ ] b) OAI no CloudFront, que é a opção atual e suporta buckets com SSE-KMS desde que a chave seja gerenciada pela AWS
- [ ] c) Website endpoint do S3 com Block Public Access desligado, bucket público e a chave KMS aberta a qualquer conta
- [ ] d) Bucket policy com Principal * e aws:SecureTransport, mantendo o SSE-KMS como está e a chave sem alterações

**9.** Regras exigem retenção imutável por sete anos, inclusive contra o [[Usuario Root|usuário root]]. Qual recurso?

- [ ] a) Object Lock em modo Governance
- [ ] b) MFA Delete
- [ ] c) Bucket policy negando DeleteObject
- [ ] d) Object Lock em modo Compliance

**10.** Quais DUAS afirmações sobre a [[Replicacao do S3|replicação do S3]] estão corretas? (Escolha DUAS.)

- [ ] a) Replica por padrão a exclusão de versões específicas
- [ ] b) Encadeia A para B para C automaticamente
- [ ] c) Exige versionamento nos buckets de origem e de destino
- [ ] d) Replica objetos já arquivados em Glacier Deep Archive
- [ ] e) A regra ativa não copia objetos que já existiam antes dela

**11.** Uma exigência de conformidade pede [[Replicacao do S3|replicação entre Regiões]] em até 15 minutos, com [[SLA]] e métricas. O que usar?

- [ ] a) Batch Replication a cada 15 minutos
- [ ] b) Replication Time Control na regra de replicação
- [ ] c) Replicação padrão, que replica a maioria dos objetos em minutos, mas sem SLA nem métricas
- [ ] d) Transfer Acceleration

**12.** Clientes de vários continentes devem usar uma única URL para ler e gravar, com roteamento ao [[Bucket|bucket]] mais próximo e [[Failover|failover]]. Qual arquitetura?

- [ ] a) Um bucket único com Transfer Acceleration, que roteia leitura e gravação à Região mais próxima
- [ ] b) CRR em uma direção e um registro de DNS manual para trocar de bucket quando houver falha
- [ ] c) Batch Replication agendado, com um bucket por Região e um endereço diferente por continente
- [ ] d) Multi-Region Access Point com buckets replicados nas duas direções

**13.** Escritórios na Ásia enviam arquivos de 10 GB a um [[Bucket|bucket]] em us-east-1, enquanto usuários da Europa baixam os mesmos relatórios o dia inteiro. Qual combinação melhora cada fluxo?

- [ ] a) Transfer Acceleration para os envios e CloudFront com cache para os downloads repetidos
- [ ] b) CloudFront para os envios e Transfer Acceleration para os downloads repetidos
- [ ] c) Transfer Acceleration para os dois fluxos, pois ele guarda os relatórios em cache nas edge locations
- [ ] d) S3 Express One Zone para os dois fluxos, mantendo o bucket em us-east-1

**14.** Uma empresa liga o [[Versionamento|versionamento]] em um [[Bucket|bucket]] de 5 TB sobrescrito diariamente, e a fatura de armazenamento sobe todo mês. Qual ajuste controla o custo sem perder a capacidade de desfazer exclusões recentes?

- [ ] a) Desligar o versionamento, o que apaga as versões antigas e interrompe o custo adicional
- [ ] b) Uma regra de Expiration nos objetos atuais após 30 dias, que libera o espaço das versões antigas
- [ ] c) Uma regra NoncurrentVersionExpiration com 30 dias, mantendo as 3 versões antigas mais recentes
- [ ] d) Uma transição das versões atuais para Glacier Deep Archive, dispensando regra para versões antigas

**15.** Uma conta de produção replica registros para um [[Bucket|bucket]] de auditoria em outra conta. A auditoria quer ser dona das réplicas, para que a conta de produção não as altere, e que exclusões em produção não apaguem os registros auditados. Qual configuração atende?

- [ ] a) Owner override para a conta de destino e DeleteMarkerReplication desabilitado na regra
- [ ] b) Same-Region Replication com delete marker replication ligado e RTC para garantir o prazo de 15 minutos
- [ ] c) Batch Replication com Requester Pays no bucket de destino, para que a conta de produção pague as cópias
- [ ] d) Replicação para a classe Glacier no destino, com o versionamento suspenso na origem

**16.** Quais DUAS afirmações sobre as classes de armazenamento estão corretas? (Escolha DUAS.)

- [ ] a) O Standard tem mínimo de 30 dias
- [ ] b) Standard-IA e One Zone-IA têm mínimo de 30 dias e cobram recuperação
- [ ] c) O Glacier Instant Retrieval exige restauração de horas
- [ ] d) Glacier Deep Archive tem mínimo de 180 dias e recuperação em horas
- [ ] e) A One Zone-IA sobrevive à perda de uma AZ

**17.** Uma aplicação global grava e lê por um [[Multi-Region Access Point]] sobre buckets em us-east-1 e eu-west-1, com replicação bidirecional. A Região us-east-1 fica indisponível. O que garante a continuidade?

- [ ] a) Um registro do Route 53 com health check, que o MRAP exige para trocar de bucket entre Regiões
- [ ] b) O MRAP roteia as requisições ao bucket saudável da outra Região, e a replicação mantém os dados
- [ ] c) A replicação bidirecional promove eu-west-1 a dona exclusiva do bucket e recria o MRAP na Região restante
- [ ] d) O Transfer Acceleration reencaminha as requisições para o bucket da outra Região por outro caminho de rede

**18.** Uma empresa guarda dados brutos lidos cerca de uma vez por trimestre, que precisam de milissegundos quando lidos, e miniaturas recriáveis lidas todo mês, também em milissegundos. Qual par de classes minimiza o custo de cada conjunto?

- [ ] a) Glacier Flexible Retrieval para os dados brutos e Standard para as miniaturas
- [ ] b) One Zone-IA para os dados brutos e Glacier Deep Archive para as miniaturas
- [ ] c) Glacier Instant Retrieval para os dados brutos e One Zone-IA para as miniaturas
- [ ] d) Standard-IA para os dois conjuntos, pois ambos precisam de milissegundos de acesso

> [!success]- Gabarito
> **1. a)** Com padrão desconhecido, o [[S3 Intelligent-Tiering|Intelligent-Tiering]] ajusta sozinho, sem taxa de recuperação. Descartadas: b) regras fixas movem dado que volta a ser lido e cobram recuperação e restauração; c) os picos de leitura geram taxa por GB e a duração mínima de 30 dias; d) abre mão de resiliência de [[Zona de Disponibilidade|AZ]] e ainda cobra recuperação.
>
> **2. d)** O [[S3 Intelligent-Tiering|Intelligent-Tiering]] move por acesso real e não cobra recuperação. Descartadas: a) cobra recuperação por GB; b) exige restauração e espera; c) uma [[Zona de Disponibilidade|AZ]] só e cobra recuperação.
>
> **3. c)** A replicação de objetos [[SSE-KMS]] exige permissões de chave na role, nos dois lados. Descartadas: a) o [[Replication Time Control|RTC]] dá prazo, não corrige [[Versionamento|versionamento]] suspenso; b) SSE-KMS, [[SSE-S3]], [[DSSE-KMS]] e [[SSE-C]] são replicáveis; d) o SSE-KMS replica entre [[Regiao AWS|Regiões]], com a chave do destino na Região do destino.
>
> **4. b)** O [[Access Point|access point]] tem política e origem de rede próprias, por aplicação. Descartadas: a) ACLs não entendem [[VPC]] e são o método legado; c) ciclo de vida não controla acesso; d) multiplica buckets e custo sem resolver a governança.
>
> **5. c)** A retenção padrão só vale para objetos novos; o [[S3 Batch Operations|Batch Operations]] aplica retenção em escala aos existentes. Descartadas: a) em [[Bucket|bucket]] com [[Object Lock]] o [[Versionamento|versionamento]] não pode ser suspenso e isso não retroage; b) funcionaria, mas com muito mais trabalho; d) não existe aplicação retroativa.
>
> **6. a) e b)** At-least-once e quatro destinos. Descartadas: c) para FIFO é preciso passar pelo [[EventBridge]]; d) não há garantia de ordem; e) duplicatas podem ocorrer.
>
> **7. b)** Cada tipo de endpoint tem seu alcance e custo. Descartadas: a) o [[Gateway Endpoint|gateway endpoint]] não é acessível de fora da [[VPC]]; c) funcionaria, mas custa por hora sem necessidade para as instâncias na VPC; d) o [[NAT Gateway]] não atende ao acesso on-premises e cobra por GB.
>
> **8. a)** O [[Origin Access Control|OAC]] suporta [[SSE-KMS]], mas o [[CloudFront]] precisa de permissão na [[Bucket Policy|bucket policy]] e na [[Key Policy|key policy]]. Descartadas: b) a [[Origin Access Identity|OAI]] é legada e não suporta SSE-KMS; c) expõe o [[Bucket|bucket]] e o endpoint de website não serve HTTPS; d) Principal * abre o bucket e não dá ao CloudFront acesso à chave.
>
> **9. d)** Só o Compliance bloqueia até o root. Descartadas: a) quem tem a permissão de bypass consegue remover; b) protege exclusão de versão, não impõe retenção; c) pode ser alterada pelo administrador.
>
> **10. c) e e)** [[Versionamento]] obrigatório e só o conteúdo novo. Descartadas: a) exclusões com version ID nunca são replicadas; b) réplicas de réplicas não são replicadas; d) objetos arquivados não são replicados.
>
> **11. b)** O [[Replication Time Control|RTC]] é o recurso com [[SLA]] de 15 minutos. Descartadas: a) não tem SLA de tempo; c) a padrão não tem SLA; d) não replica.
>
> **12. d)** O [[Multi-Region Access Point|MRAP]] dá o endpoint global e a replicação sincroniza. Descartadas: a) não faz [[Failover|failover]] entre [[Regiao AWS|Regiões]]; b) o failover seria manual; c) não cria endpoint global.
>
> **13. a)** O [[Transfer Acceleration]] encurta o caminho dos envios longos e o [[CloudFront]] serve leituras repetidas do cache. Descartadas: b) inverte os papéis; c) o Transfer Acceleration não faz cache; d) o [[S3 Express One Zone|Express One Zone]] reduz [[Latencia|latência]] dentro de uma [[Zona de Disponibilidade|AZ]], não a distância intercontinental.
>
> **14. c)** A expiração de versões não atuais apaga o excesso e mantém uma janela de recuperação. Descartadas: a) o [[Versionamento|versionamento]] só pode ser suspenso e as versões antigas permanecem; b) em [[Bucket|bucket]] versionado a Expiration só cria [[Delete Marker|delete markers]]; d) mover a versão atual não trata as versões antigas já acumuladas.
>
> **15. a)** O owner override passa a posse das réplicas à conta de destino e, sem [[Delete Marker|delete marker]] replication, exclusões na origem não chegam ao destino. Descartadas: b) replicar delete markers propaga exclusões e o [[Replication Time Control|RTC]] não resolve a posse; c) o destino não pode ser [[Requester Pays]] e isso não muda a posse; d) o [[Versionamento|versionamento]] precisa estar ligado na origem.
>
> **16. b) e d)** Mínimos de 30 e 180 dias, recuperação por GB nas IA. Descartadas: a) o Standard não tem mínimo; c) entrega em milissegundos; e) guarda os dados em uma única [[Zona de Disponibilidade|AZ]].
>
> **17. b)** O [[Multi-Region Access Point|MRAP]] expõe um endpoint global e roteia ao [[Bucket|bucket]] disponível; a replicação bidirecional sustenta os dados dos dois lados. Descartadas: a) o [[Failover|failover]] é do próprio MRAP, sem [[DNS]] manual; c) a replicação copia objetos, não promove nem recria endpoints; d) o [[Transfer Acceleration]] acelera o caminho de rede, não faz failover entre buckets.
>
> **18. c)** Acesso trimestral em milissegundos aponta para Glacier Instant Retrieval; dado recriável com leitura mensal aponta para One Zone-IA. Descartadas: a) o Flexible exige restauração e o Standard custa mais que o necessário; b) o [[S3 Glacier Deep Archive|Deep Archive]] leva horas e não serve para miniaturas lidas todo mês; d) funciona, mas custa mais que a classe ideal de cada conjunto.

## Próximo módulo

[[12 - Balanceamento de Carga e Auto Scaling|Próximo módulo: Balanceamento de carga e Auto Scaling]]
