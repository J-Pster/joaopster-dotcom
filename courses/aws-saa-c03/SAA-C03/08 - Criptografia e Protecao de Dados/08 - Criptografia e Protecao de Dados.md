---
aliases:
  - Módulo 8
modulo: 8
parte: "II Identidade, rede e dados"
tags:
  - modulo
  - saa-c03
---

# Módulo 8: Criptografia e proteção de dados

Quase toda pergunta de segurança da prova do SAA-C03 termina em uma destas escolhas: **quem controla a chave**, **onde o dado é cifrado** (em repouso ou em trânsito), **onde o segredo fica guardado** e **como provar que o dado não foi alterado**. Este módulo responde a uma pergunta: **como proteger dados de ponta a ponta, sabendo por que cada controle existe e quanto ele custa?**

Ele é **conceitual com prática**: a teoria (por que criptografar, [[Envelope Encryption|envelope encryption]], [[Chave Simetrica|chaves simétricas]] e assimétricas) vem primeiro, depois o [[KMS]] a fundo, o [[CloudHSM]], a criptografia em cada serviço, o [[TLS]] com o [[ACM]], os segredos e, por fim, a governança dos dados. As aulas 8.2, 8.6, 8.7, 8.8 e 8.9 trazem um laboratório opcional em conta pessoal, mas nenhum é obrigatório para a prova.

> [!info] Pré-requisitos
> [[03 - Fundamentos de Redes para a Nuvem|Módulo 3]] (handshake [[TLS]]) e [[04 - IAM Identidade e Acesso|Módulo 4]] ([[IAM Policy|políticas do IAM]] e políticas de recurso, base de toda a parte de [[Key Policy|key policy]]). O [[06 - VPC a Fundo|Módulo 6]] ajuda nas partes de endpoints.

## Aulas

1. [[08.01 - Por que Criptografar e os Fundamentos|Aula 8.1: Por que criptografar e os fundamentos]]: ameaças, repouso versus trânsito, [[Chave Simetrica|chaves simétricas]], assimétricas, [[Hash|hash]] e o espectro de controle.
2. [[08.02 - AWS KMS Chaves e Envelope Encryption|Aula 8.2: AWS KMS, chaves e envelope encryption]]: tipos de chave, o limite de 4 KB, data keys, aliases, quotas e preço.
3. [[08.03 - KMS Key Policy IAM e Grants|Aula 8.3: KMS, key policy, IAM e grants]]: quem pode usar a chave, a declaração "Enable [[IAM User]] Permissions", [[Grant|grants]], condições e acesso entre contas.
4. [[08.04 - KMS Rotacao Material Importado Multi-Region e Exclusao|Aula 8.4: KMS, rotação, material importado, multi-Region e exclusão]]: rotação automática e sob demanda, [[BYOK]], [[Multi-Region Key|chaves multi-Region]] e a janela de exclusão.
5. [[08.05 - CloudHSM e Custom Key Stores|Aula 8.5: CloudHSM e custom key stores]]: [[HSM]] dedicado, FIPS, clusters, e as armadilhas de ligar o [[KMS]] a um HSM seu.
6. [[08.06 - Criptografia em Repouso nos Servicos AWS|Aula 8.6: Criptografia em repouso nos serviços AWS]]: [[S3]] ([[SSE-S3]], [[SSE-KMS]], [[DSSE-KMS]], [[SSE-C]]), [[EBS]], [[RDS]], [[DynamoDB]], [[EFS]] e como forçar HTTPS por política.
7. [[08.07 - Criptografia em Transito ACM e Private CA|Aula 8.7: Criptografia em trânsito, ACM e Private CA]]: certificados, renovação, a regra de us-east-1 para o [[CloudFront]] e PKI privada.
8. [[08.08 - Secrets Manager e Parameter Store|Aula 8.8: Secrets Manager e Parameter Store]]: guardar segredos, rotação, replicação, camadas e como escolher entre os dois.
9. [[08.09 - Governanca de Dados Object Lock e Macie|Aula 8.9: Governança de dados, Object Lock e Macie]]: classificação, retenção, [[WORM]], [[Legal Hold|legal hold]] e descoberta de dados sensíveis.

**Por que 9 aulas e nesta ordem.** Criptografia só faz sentido depois de entender o problema e as primitivas (8.1). O [[KMS]] ocupa quatro aulas (8.2 a 8.4 e a alternativa em 8.5) porque é o serviço de segurança mais cobrado e tem camadas independentes: o que é a chave, quem a usa, como ela vive e morre, e quando sair dela para um [[HSM]]. Só depois disso a criptografia por serviço (8.6) deixa de ser decoreba, porque cada serviço apenas chama o KMS. Trânsito (8.7) e segredos (8.8) são os dois outros pontos em que credenciais e certificados vazam. A governança (8.9) fecha o módulo ao tratar do que acontece com o dado ao longo do tempo.

## Cobertura do exam guide

| Task statement | Onde está |
|---|---|
| Task 1.3: [[Criptografia em Repouso\|criptografia em repouso]] ([[KMS]], chaves gerenciadas e do cliente; [[SSE-S3]], [[SSE-KMS]], [[DSSE-KMS]] e [[SSE-C]], aliases, [[Grant\|grants]] e [[S3 Bucket Keys\|Bucket Keys]]; [[SQS]], [[SNS]], Kinesis, [[Redshift]], [[ElastiCache]] e [[FSx]]) | [[08.01 - Por que Criptografar e os Fundamentos\|Aula 8.1]], [[08.02 - AWS KMS Chaves e Envelope Encryption\|Aula 8.2]], [[08.03 - KMS Key Policy IAM e Grants\|Aula 8.3]], [[08.04 - KMS Rotacao Material Importado Multi-Region e Exclusao\|Aula 8.4]] e [[08.06 - Criptografia em Repouso nos Servicos AWS\|Aula 8.6]] |
| Task 1.3: [[HSM]] dedicado e conformidade ([[CloudHSM]], [[Custom Key Store\|custom key store]]) | [[08.05 - CloudHSM e Custom Key Stores\|Aula 8.5]] |
| Task 1.3: [[Criptografia em Transito\|criptografia em trânsito]] ([[ACM]], [[TLS]], certificados) | [[08.07 - Criptografia em Transito ACM e Private CA\|Aula 8.7]] |
| Task 1.3: gerenciamento de segredos e parâmetros | [[08.08 - Secrets Manager e Parameter Store\|Aula 8.8]] |
| Task 1.3: retenção, imutabilidade e classificação de dados ([[Object Lock]], [[Backup Vault Lock]], [[Macie]] e seus jobs) | [[08.09 - Governanca de Dados Object Lock e Macie\|Aula 8.9]] |
| Task 1.1: controle de acesso a chaves e dados ([[Key Policy\|key policy]], [[Grant\|grants]], cross-account) | [[08.03 - KMS Key Policy IAM e Grants\|Aula 8.3]] |
| Task 1.2: segurança da aplicação (HTTPS, segredos fora do código) | [[08.07 - Criptografia em Transito ACM e Private CA\|Aula 8.7]] e [[08.08 - Secrets Manager e Parameter Store\|Aula 8.8]] |
| Task 2.2 (parcial): [[Multi-Region Key\|chaves multi-Region]] e segredos replicados para recuperação, e [[KMS]] e [[Secrets Manager]] por [[Interface Endpoint\|interface endpoint]] em [[Sub-rede Privada\|sub-redes privadas]] | [[08.04 - KMS Rotacao Material Importado Multi-Region e Exclusao\|Aula 8.4]] e [[08.08 - Secrets Manager e Parameter Store\|Aula 8.8]] |

Backup e replicação como proteção de dados, e a [[Recuperacao de Desastres|recuperação de desastres]], ficam no Módulo 20; a detecção de ameaças ([[GuardDuty]], Inspector), no Módulo 19.

> [!warning] Fatos que mudam
> Valores citados com "verificado em novembro de 2026" vêm da documentação oficial da AWS na data indicada. Preços, quotas e recursos novos (como as novas opções de certificados do [[ACM]] e o padrão de [[SSE-C]]) mudam: confira a página oficial antes de decidir algo em produção. Itens marcados como "não confirmado" não foram verificados em página oficial completa.

## Checklist de saída do módulo

- [ ] Sei explicar por que a [[Envelope Encryption|envelope encryption]] existe (o limite de 4 KB da chamada de cifrar do [[KMS]] e o custo de mandar dados grandes ao serviço)?
- [ ] Sei dizer por que a [[Key Policy|key policy]] é a única política que **sempre** é necessária para uma chave [[KMS]], e o que a declaração "Enable [[IAM User]] Permissions" liga?
- [ ] Sei explicar por que rotacionar uma chave **não** recifra os dados antigos?
- [ ] Sei justificar por que a chave com período de exclusão (7 a 30 dias) existe, e por que excluir uma chave é uma decisão perigosa?
- [ ] Sei dizer em que situação o [[CloudHSM]] ou um [[Custom Key Store|custom key store]] se justificam, e o que se perde ao escolhê-los?
- [ ] Sei explicar a diferença entre [[SSE-S3]], [[SSE-KMS]], [[DSSE-KMS]] e [[SSE-C]], e quem controla a chave em cada um?
- [ ] Sei explicar por que o certificado do [[CloudFront]] precisa estar em us-east-1 e por que certificado importado não renova?
- [ ] Sei dizer quando usar [[Secrets Manager]] e quando o [[Parameter Store]] basta, e por que a rotação decide?
- [ ] Sei explicar a diferença entre governance, compliance e [[Legal Hold|legal hold]] no [[Object Lock]]?
- [ ] Sei dizer o que o [[Macie]] descobre e onde ele atua?

## Teste-se

**1.** Uma aplicação precisa cifrar arquivos de 200 MB com uma chave controlada pela empresa, sem enviar os arquivos ao [[KMS]]. Qual abordagem usar?

- [ ] a) Chamar a operação Encrypt do KMS diretamente com o arquivo
- [ ] b) Dividir o arquivo em blocos de 4 KB e cifrar cada bloco, um a um, diretamente no KMS
- [ ] c) Envelope encryption: gerar uma data key, cifrar localmente e guardar a chave cifrada
- [ ] d) Guardar o arquivo em texto puro e proteger o acesso com uma bucket policy restritiva

**2.** Uma equipe precisa que o uso de uma chave [[KMS]] seja liberado a uma função [[IAM]] da mesma conta apenas via [[IAM Policy|políticas do IAM]], sem editar a [[Key Policy|key policy]] a cada novo papel. O que a key policy precisa conter?

- [ ] a) Uma lista fixa com o ARN de cada função, editada a cada novo papel que precise usar a chave
- [ ] b) A declaração padrão que habilita as políticas do IAM da conta a usar a chave
- [ ] c) Uma permissão pública de leitura
- [ ] d) Nada, pois o IAM sempre basta

**3.** Uma empresa quer que o [[KMS]] gire a chave automaticamente a cada ano, sem recifrar os objetos já guardados. Como a rotação funciona?

- [ ] a) Todos os dados antigos são recifrados com o novo material, em segundo plano, pelo KMS, sem custo adicional
- [ ] b) O material novo cifra os dados novos e o material antigo continua decifrando os já existentes
- [ ] c) O ID da chave muda e as aplicações precisam ser atualizadas
- [ ] d) A rotação só ocorre quando a chave é excluída

**4.** Uma regulação exige um [[HSM]] de locatário único, validado em FIPS 140 nível 3, com a empresa controlando as chaves fora do [[IAM]]. Qual serviço atende?

- [ ] a) AWS KMS com chave gerenciada pela AWS
- [ ] b) AWS Secrets Manager
- [ ] c) AWS CloudHSM
- [ ] d) AWS Certificate Manager

**5.** Uma equipe liga um [[Custom Key Store|custom key store]] a um cluster [[CloudHSM]] para ter as chaves no próprio [[HSM]]. Qual limitação deve ser considerada?

- [ ] a) O custom key store tem o mesmo SLA do key store padrão
- [ ] b) O custom key store é mais rápido que o KMS padrão, porque as operações ficam no seu HSM
- [ ] c) O custom key store só aceita chaves simétricas, sem rotação automática nem multi-Region
- [ ] d) O custom key store aceita chaves multi-Region sem restrição, e replica o material entre HSMs

**6.** Uma empresa quer que todo objeto novo de um [[Bucket|bucket]] seja cifrado com uma chave [[KMS]] dela e quer reduzir as chamadas ao KMS por objeto. O que usar?

- [ ] a) SSE-C com chave enviada em cada requisição
- [ ] b) SSE-S3 com chave gerenciada pelo S3
- [ ] c) Cifrar no cliente e enviar o objeto cifrado
- [ ] d) SSE-KMS com S3 Bucket Keys

**7.** Uma equipe precisa cifrar um [[EBS|volume EBS]] já existente e sem criptografia. Qual é o caminho correto?

- [ ] a) Mudar o tipo do volume para gp3
- [ ] b) Habilitar a criptografia diretamente no volume em uso, pela opção de modificar o volume
- [ ] c) Reiniciar a instância com a opção de criptografia habilitada nas configurações de inicialização
- [ ] d) Criar um snapshot, copiar com criptografia e criar um novo volume a partir da cópia

**8.** Uma política precisa negar qualquer acesso ao [[Bucket|bucket]] feito sem [[TLS]]. Qual condição usar?

- [ ] a) Negar quando `aws:SecureTransport` for falso
- [ ] b) Negar quando `aws:MultiFactorAuthPresent` for falso
- [ ] c) Permitir apenas quando `aws:SourceIp` for da empresa
- [ ] d) Negar quando `aws:RequestedRegion` for diferente de us-east-1

**9.** Uma distribuição [[CloudFront]] precisa servir HTTPS com um domínio próprio. Onde o certificado do [[ACM]] deve ser solicitado?

- [ ] a) Na Região da origem
- [ ] b) Na Região mais próxima do usuário
- [ ] c) Em qualquer Região
- [ ] d) Em us-east-1

**10.** Um certificado público foi emitido no [[ACM]] com validação por [[DNS]] e está associado a um [[Application Load Balancer|ALB]]. O que garante a renovação automática?

- [ ] a) Reimportar o certificado todo ano, substituindo o anterior no listener do ALB
- [ ] b) O registro CNAME de validação permanecer no DNS e o certificado estar em uso
- [ ] c) Responder ao e-mail que o ACM envia aos endereços do domínio antes do vencimento
- [ ] d) Exportar o certificado e instalá-lo no servidor, deixando o ACM gerenciar a renovação

**11.** Uma aplicação precisa trocar automaticamente a senha do [[RDS]] a cada 30 dias, sem alterar o código. Qual serviço atende?

- [ ] a) AWS KMS com rotação de chave
- [ ] b) Parameter Store com String
- [ ] c) AWS Secrets Manager com rotação habilitada
- [ ] d) Variável de ambiente na imagem

**12.** Uma equipe quer guardar URLs e nomes de fila de configuração, sem segredos, ao menor custo. O que escolher?

- [ ] a) Secrets Manager por segredo
- [ ] b) Parameter Store no tier Standard
- [ ] c) CloudHSM
- [ ] d) Macie

**13.** Registros financeiros devem ficar imutáveis por 7 anos, mesmo para a [[Usuario Root|conta root]]. Qual configuração do [[S3]] atende?

- [ ] a) Versionamento e MFA Delete
- [ ] b) Object Lock em modo governance
- [ ] c) Bucket policy negando DeleteObject
- [ ] d) Object Lock em modo compliance

**14.** O jurídico precisa congelar documentos sem saber quando o processo termina. O que aplicar?

- [ ] a) Legal hold nos objetos
- [ ] b) Retenção compliance de 10 anos
- [ ] c) Lifecycle para o Glacier
- [ ] d) Replicação entre Regiões

**15.** Quais afirmações sobre a janela de exclusão de uma chave [[KMS]] estão corretas? (Escolha DUAS.)

- [ ] a) A exclusão é imediata e irreversível
- [ ] b) A janela vai de 7 a 30 dias
- [ ] c) Durante a janela a exclusão pode ser cancelada
- [ ] d) A chave fica desabilitada, mas ainda decifra dados normalmente
- [ ] e) A exclusão só é concluída com a aprovação do suporte da AWS

**16.** Uma empresa quer descobrir [[PII|dados pessoais]] e números de cartão em centenas de buckets do [[S3]]. Qual serviço usar?

- [ ] a) Amazon Macie
- [ ] b) Amazon GuardDuty
- [ ] c) AWS Config
- [ ] d) Amazon Inspector

**17.** Uma empresa precisa compartilhar com a conta de um parceiro [[Snapshot|snapshots]] de [[EBS]] cifrados hoje com a chave `aws/ebs`. O que fazer?

- [ ] a) Copiar o snapshot recifrando com uma customer managed key cuja key policy admite o parceiro e compartilhar a cópia
- [ ] b) Editar a key policy da `aws/ebs` para incluir a conta do parceiro e compartilhar o snapshot original
- [ ] c) Tornar o snapshot público por algumas horas, até o parceiro terminar de copiá-lo para a conta dele
- [ ] d) Exportar a chave `aws/ebs` e enviá-la ao parceiro por um canal seguro, junto com o snapshot

**18.** Uma aplicação em us-east-1 replica dados cifrados para sa-east-1 e, no [[Failover|failover]], precisa decifrá-los localmente, sem recifrar e sem chamar a Região original. Qual chave usar?

- [ ] a) Uma chave multi-Region com réplica em sa-east-1
- [ ] b) Uma chave de Região única em us-east-1, com um alias de mesmo nome criado em sa-east-1
- [ ] c) Uma AWS owned key, escolhida na criptografia padrão de cada serviço
- [ ] d) Uma chave de custom key store apoiada em um cluster CloudHSM em us-east-1

**19.** Uma empresa importou para o [[ACM]] um certificado de uma [[Autoridade Certificadora|CA]] externa e o associou a um [[Application Load Balancer|ALB]]. Como evitar que ele expire sem ninguém perceber?

- [ ] a) Confiar na renovação automática do ACM, que cobre também os certificados importados em uso
- [ ] b) Habilitar a validação por DNS depois da importação, para o ACM passar a renová-lo
- [ ] c) Reimportar o mesmo certificado todo mês por script, sem alarme, para renovar a validade
- [ ] d) Alarmar com o evento de aproximação de expiração no EventBridge e reimportar um novo certificado

**20.** Uma aplicação multi-Região precisa do segredo disponível na Região de DR, com a rotação propagada, e cifrado com uma chave da própria Região de destino. (Escolha DUAS.)

- [ ] a) Habilitar a replicação entre Regiões do segredo no Secrets Manager
- [ ] b) Copiar o valor manualmente para a Região de DR a cada rotação
- [ ] c) Escolher, na réplica, uma KMS key da Região de destino
- [ ] d) Guardar o valor no Parameter Store Standard, que replica entre Regiões por padrão
- [ ] e) Cifrar o segredo com uma AWS owned key escolhida pelo cliente

> [!success]- Gabarito
> **1. c)** a [[Envelope Encryption|envelope encryption]] cifra o arquivo localmente com uma data key protegida pelo [[KMS]]; a) o Encrypt aceita no máximo 4.096 bytes; b) blocos de 4 KB para 200 MB seriam inviáveis e caros; d) texto puro não atende ao requisito.
> **2. b)** a declaração que habilita as [[IAM Policy|políticas do IAM]] da conta delega o controle ao [[IAM]]; a) a lista fixa exige editar a política a cada novo papel; c) permissão pública é insegura; d) sem essa declaração o IAM sozinho não basta.
> **3. b)** a rotação gera material novo para dados novos, mas mantém o antigo para decifrar o que já existe; a) a rotação não recifra; c) o ID e o [[ARN]] da chave não mudam; d) a rotação não depende de exclusão.
> **4. c)** o [[CloudHSM]] é um [[HSM]] de locatário único, validado em FIPS nível 3, com usuários fora do [[IAM]]; a) a [[AWS Managed Key|chave gerenciada pela AWS]] não dá controle; b) [[Secrets Manager]] guarda segredos; d) o [[ACM]] gerencia certificados.
> **5. c)** o [[Custom Key Store|custom key store]] aceita só [[Chave Simetrica|chaves simétricas]] e não tem rotação automática nem multi-Region; b) costuma ser mais lento; a) não herda o [[SLA]] do key store padrão; d) não suporta multi-Region.
> **6. d)** [[SSE-KMS]] com [[S3 Bucket Keys|Bucket Keys]] usa a chave da empresa e reduz as chamadas ao [[KMS]]; a) [[SSE-C]] exige enviar a chave a cada requisição; b) [[SSE-S3]] não usa a chave KMS da empresa; c) cifrar no cliente não reduz chamadas ao KMS.
> **7. d)** o caminho é [[Snapshot|snapshot]], cópia cifrada e novo volume; b) não se cifra um volume em uso no lugar; c) reiniciar não cifra; a) o tipo do volume não altera a criptografia.
> **8. a)** negar quando `aws:SecureTransport` for falso bloqueia requisições [[HTTP]]; b) trata de [[MFA]]; c) restringe origem por IP; d) restringe Região.
> **9. d)** o [[CloudFront]] só usa certificados do [[ACM]] em us-east-1; a) e b) não valem; c) não é qualquer Região.
> **10. b)** com [[DNS]] o [[ACM]] renova enquanto o [[CNAME]] existir e o certificado estiver em uso; a) importar não renova; c) o e-mail é de outro método de validação; d) exportar não renova.
> **11. c)** o [[Secrets Manager]] rotaciona credenciais de banco nativamente; b) o [[Parameter Store]] não rotaciona; a) a rotação do [[KMS]] é da chave, não da senha; d) variável fixa não rotaciona.
> **12. b)** o tier Standard do [[Parameter Store]] é gratuito; a) o [[Secrets Manager]] cobra por segredo; c) o [[CloudHSM]] tem custo horário alto; d) o [[Macie]] não guarda configuração.
> **13. d)** compliance não tem bypass, nem para o root; a) [[MFA Delete]] ainda permite apagar versões; b) governance tem bypass; c) uma policy pode ser alterada.
> **14. a)** o [[Legal Hold|legal hold]] não tem data de fim; b) cravaria um prazo sem volta; c) lifecycle não protege; d) replicação não impede exclusão.
> **15. b) e c)** a janela é de 7 a 30 dias e pode ser cancelada; a) a exclusão é agendada; d) a chave em exclusão pendente não pode ser usada; e) a exclusão se conclui sozinha ao fim da janela, sem aprovação do suporte.
> **16. a)** o [[Macie]] descobre dados sensíveis no [[S3]]; b) o [[GuardDuty]] detecta ameaças; c) o Config avalia configuração; d) o Inspector avalia vulnerabilidades.
> **17. a)** [[Snapshot|snapshot]] cifrado com `aws/ebs` não é compartilhável; recifra-se a cópia com uma [[Customer Managed Key|customer managed key]] cuja [[Key Policy|key policy]] admite o parceiro e compartilha-se a cópia; b) a key policy da chave AWS managed não é editável; c) snapshot cifrado nunca pode ser público; d) a chave não é exportável nem se envia por e-mail.
> **18. a)** a [[Multi-Region Key|chave multi-Region]] tem o mesmo material na réplica, então decifra localmente sem recifrar nem chamar a Região original; b) um alias com o mesmo nome aponta para outra chave, com outro material; c) o [[Custom Key Store|custom key store]] não tem multi-Region; d) uma chave de Região única não decifra em outra Região.
> **19. d)** certificado importado não renova, então é preciso alarmar pelo evento de expiração do [[ACM]] e reimportar um novo antes do vencimento; a) o ACM não renova importados; b) validação por [[DNS]] é de certificados emitidos pelo ACM; c) reimportar por script sem alarme não resolve o problema do aviso e do certificado novo.
> **20. a) e c)** a replicação nativa leva o segredo à Região de DR e propaga a rotação, e a réplica pode usar uma [[KMS]] key da Região de destino; b) cópia manual não propaga a rotação; d) o [[Parameter Store]] não replica entre [[Regiao AWS|Regiões]]; e) a [[AWS Owned Key|AWS owned key]] não é escolhida pelo cliente para o [[Secrets Manager]].

## Próximo módulo

[[09 - EC2 a Fundo]]: com os dados protegidos, hora de olhar para a computação: famílias de instância, [[AMI|AMIs]], modelos de compra e o que acontece por baixo de uma [[EC2]].
