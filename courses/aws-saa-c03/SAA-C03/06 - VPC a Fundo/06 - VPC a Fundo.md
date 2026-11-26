---
aliases:
  - Módulo 6
modulo: 6
parte: "II Identidade, rede e dados"
tags:
  - modulo
  - saa-c03
---

# Módulo 6: VPC a fundo

Quase tudo o que você roda na AWS vive dentro de uma [[VPC]], e é nela que a prova do SAA-C03 concentra as perguntas de rede e segurança: onde colocar cada camada, como a internet chega (ou não chega), quem pode falar com quem e como falar com serviços da AWS sem passar pela internet. Este módulo responde a uma pergunta: **como desenhar, proteger e diagnosticar uma VPC em que cada decisão tem um motivo?**

Ele é **prático**: cada aula traz um laboratório opcional (em conta pessoal, com aviso de custo e limpeza), mas nenhum é obrigatório para a prova. O [[03 - Fundamentos de Redes para a Nuvem|Módulo 3]] deu a teoria ([[CIDR]], rotas, stateful versus [[Stateless|stateless]], [[DNS]]); aqui você a aplica nos serviços. A conexão da [[VPC]] com outras redes (peering, [[Transit Gateway]], VPN, [[Direct Connect]]) fica no [[07 - Conectividade Hibrida e entre VPCs|Módulo 7]].

> [!info] Pré-requisitos
> [[01 - Nuvem e Infraestrutura Global AWS|Módulo 1]] ([[Regiao AWS|Regiões]] e [[Zona de Disponibilidade|AZs]]), [[03 - Fundamentos de Redes para a Nuvem|Módulo 3]] ([[CIDR]], roteamento, firewalls, [[DNS]]) e [[04 - IAM Identidade e Acesso|Módulo 4]] (políticas e perfis de instância, usados nas aulas 6.7 a 6.9).

## Aulas

1. [[06.01 - VPC CIDR e Planejamento de Enderecos|Aula 6.1: A VPC, CIDR e planejamento de endereços]]: o que é a [[VPC]], CIDRs aceitos, [[CIDR]] secundário, os 5 endereços reservados, quotas e como planejar sem se prender a um erro irreversível.
2. [[06.02 - Sub-redes e Arquitetura em Camadas|Aula 6.2: Sub-redes e arquitetura em camadas]]: [[Sub-rede|sub-redes]] zonais, três camadas por [[Zona de Disponibilidade|AZ]], requisitos do [[Application Load Balancer|ALB]] e do [[RDS]], [[VPC Sharing|compartilhamento de sub-redes]].
3. [[06.03 - Route Tables Internet Gateway e IPs Publicos|Aula 6.3: Route tables, Internet Gateway e IPs públicos]]: prioridade de rotas, o risco da tabela principal, [[Internet Gateway|IGW]], [[Elastic IP]], custo do [[IPv4]] público.
4. [[06.04 - NAT Gateway NAT Instance e Egress-Only|Aula 6.4: NAT gateway, NAT instance e egress-only]]: saída para a internet sem entrada, um [[NAT]] por [[Zona de Disponibilidade|AZ]], custo, [[IPv6]] de saída.
5. [[06.05 - Security Groups|Aula 6.5: Security groups]]: [[Stateful e Stateless (Firewall)|firewall stateful]] por interface, referência entre grupos, quotas e padrões por camada.
6. [[06.06 - Network ACLs e Defesa em Camadas|Aula 6.6: Network ACLs e defesa em camadas]]: [[Stateful e Stateless (Firewall)|firewall stateless]] por [[Sub-rede|sub-rede]], ordem das regras, [[Porta Efemera|portas efêmeras]], negar IPs.
7. [[06.07 - Acesso Administrativo sem Expor Portas|Aula 6.7: Acesso administrativo sem expor portas]]: [[Bastion Host|bastion host]], [[Session Manager]] e [[EC2 Instance Connect Endpoint]].
8. [[06.08 - Gateway Endpoints para S3 e DynamoDB|Aula 6.8: Gateway endpoints para S3 e DynamoDB]]: acesso privado e gratuito, [[Endpoint Policy|políticas de endpoint]] e de [[Bucket|bucket]].
9. [[06.09 - Interface Endpoints PrivateLink e Endpoint Policies|Aula 6.9: Interface endpoints, PrivateLink e endpoint policies]]: [[ENI|ENIs]] por [[Sub-rede|sub-rede]], [[DNS]] privado, expor serviços sem juntar redes e o padrão [[Fargate]] privado sem [[NAT]] ([[ECR]] mais [[S3]]).
10. [[06.10 - Flow Logs DNS DHCP IPv6 e Reachability Analyzer|Aula 6.10: Flow Logs, DNS, DHCP, IPv6 e Reachability Analyzer]]: enxergar o tráfego, resolver nomes, achar o componente que bloqueia e auditar o que está acessível.

**Por que 10 aulas e nesta ordem.** A sequência segue a construção de uma [[VPC]]: o espaço de endereços (6.1), a divisão em [[Sub-rede|sub-redes]] (6.2), o roteamento e a porta de entrada (6.3), a saída controlada (6.4), os filtros de tráfego (6.5 e 6.6), o acesso de administração (6.7), os caminhos privados para serviços (6.8 e 6.9) e o diagnóstico (6.10). Os dois firewalls ganharam aulas separadas por serem a pegadinha mais frequente (stateful versus [[Stateless|stateless]]). Endpoints ocupam duas aulas porque têm mecanismo, custo e alcance diferentes, e a prova pede para escolher entre eles.

## Cobertura do exam guide

| Task statement | Onde está |
|---|---|
| Task 1.2: [[VPC]] com [[Sub-rede\|sub-redes]], [[Route Table\|route tables]], [[Security Group\|security groups]], [[Network ACL\|NACLs]], [[NAT Gateway\|NAT gateways]] | [[06.01 - VPC CIDR e Planejamento de Enderecos\|Aula 6.1]], [[06.02 - Sub-redes e Arquitetura em Camadas\|Aula 6.2]], [[06.03 - Route Tables Internet Gateway e IPs Publicos\|Aula 6.3]], [[06.04 - NAT Gateway NAT Instance e Egress-Only\|Aula 6.4]], [[06.05 - Security Groups\|Aula 6.5]] e [[06.06 - Network ACLs e Defesa em Camadas\|Aula 6.6]] |
| Task 1.2: segmentação com [[Sub-rede Publica\|sub-redes públicas]] e privadas | [[06.02 - Sub-redes e Arquitetura em Camadas\|Aula 6.2]] |
| Task 1.2: acesso seguro a instâncias privadas | [[06.07 - Acesso Administrativo sem Expor Portas\|Aula 6.7]] |
| Task 1.2: [[VPC Endpoint\|VPC endpoints]] (gateway e interface) e [[PrivateLink]] | [[06.08 - Gateway Endpoints para S3 e DynamoDB\|Aula 6.8]] e [[06.09 - Interface Endpoints PrivateLink e Endpoint Policies\|Aula 6.9]] |
| Task 3.4: endereçamento IP, camadas de [[Sub-rede\|sub-redes]], roteamento | [[06.01 - VPC CIDR e Planejamento de Enderecos\|Aula 6.1]], [[06.02 - Sub-redes e Arquitetura em Camadas\|Aula 6.2]] e [[06.03 - Route Tables Internet Gateway e IPs Publicos\|Aula 6.3]] |
| Task 3.4: configuração de [[DNS]], DHCP e diagnóstico de rede | [[06.10 - Flow Logs DNS DHCP IPv6 e Reachability Analyzer\|Aula 6.10]] |
| Task 4.4: [[NAT Gateway\|NAT gateway]] (compartilhado versus um por [[Zona de Disponibilidade\|AZ]]) e custo | [[06.04 - NAT Gateway NAT Instance e Egress-Only\|Aula 6.4]] |
| Task 4.4: endpoints para reduzir transferência e custo de [[NAT]] | [[06.08 - Gateway Endpoints para S3 e DynamoDB\|Aula 6.8]] e [[06.09 - Interface Endpoints PrivateLink e Endpoint Policies\|Aula 6.9]] |
| Task 2.2 (parcial): [[Alta Disponibilidade\|alta disponibilidade]] de rede ([[Sub-rede\|sub-redes]] em várias [[Zona de Disponibilidade\|AZs]], [[NAT]] por AZ) | [[06.02 - Sub-redes e Arquitetura em Camadas\|Aula 6.2]] e [[06.04 - NAT Gateway NAT Instance e Egress-Only\|Aula 6.4]] |

Peering, [[Transit Gateway]], VPN e [[Direct Connect]] (Task 1.2 e 3.4, conexão entre redes) estão no [[07 - Conectividade Hibrida e entre VPCs|Módulo 7]].

> [!warning] Fatos que mudam
> Valores citados com "verificado em novembro de 2026" vêm da documentação oficial da AWS na data indicada. Preços, quotas e recursos novos (como o [[Regional NAT Gateway|NAT gateway regional]] e o [[VPC Block Public Access]]) mudam: confira a página oficial antes de decidir algo em produção. Os preços citados são exemplos de tabela para a Região `us-east-1`.

## Checklist de saída do módulo

- [ ] Sei explicar por que o [[CIDR]] da [[VPC]] precisa ser planejado antes da primeira VPC, e por que não dá para redimensionar nem remover o bloco primário?
- [ ] Sei dizer por que a AWS reserva 5 endereços em cada [[Sub-rede|sub-rede]] e quantos sobram em um `/28`?
- [ ] Sei explicar o que torna uma [[Sub-rede|sub-rede]] "pública" (rota para o [[Internet Gateway|IGW]]) e por que o IP público é uma condição separada?
- [ ] Sei dizer por que a [[Route Table|tabela de rotas]] principal deve ficar privada e por que a [[Longest Prefix Match|rota mais específica]] vence?
- [ ] Sei explicar por que o [[NAT Gateway|NAT gateway]] fica em [[Sub-rede Publica|sub-rede pública]], só atende conexões iniciadas de dentro e deve ser um por [[Zona de Disponibilidade|AZ]]?
- [ ] Sei dizer por que o [[Security Group|security group]] é stateful e só permite, e por que referenciar outro security group escala com o [[Auto Scaling Group|Auto Scaling]]?
- [ ] Sei explicar por que a [[Network ACL|NACL]] exige liberar [[Porta Efemera|portas efêmeras]] e por que a regra de negar precisa de número menor que a de permitir?
- [ ] Sei justificar por que o [[Session Manager]] dispensa porta de entrada, e quando o [[EC2 Instance Connect Endpoint]] é a escolha?
- [ ] Sei explicar por que o [[Gateway Endpoint|gateway endpoint]] é gratuito e só vale para [[S3]] e [[DynamoDB]], e por que o [[Interface Endpoint|interface endpoint]] cobra e alcança mais?
- [ ] Sei dizer o que o [[PrivateLink]] resolve que o peering não resolve ([[CIDR]] sobreposto, expor só um serviço)?

## Teste-se

**1.** Uma empresa lança um sistema web em duas [[Zona de Disponibilidade|AZs]] com [[Application Load Balancer|ALB]], aplicação em tarefas [[ECS]] [[Fargate]] e [[RDS]] PostgreSQL [[Multi-AZ]]. O ALB deve ser o único ponto de entrada da internet, a aplicação precisa baixar pacotes da internet e o conjunto deve continuar de pé se uma AZ falhar. Qual desenho atende?

- [ ] a) Tudo em sub-redes públicas com IP público, com security groups restritivos
- [ ] b) ALB em sub-redes públicas; aplicação e banco em privadas; um único NAT gateway para as duas AZs
- [ ] c) ALB e NAT gateways em sub-redes públicas das duas AZs; aplicação e banco em privadas; o SG da aplicação aceita só o do ALB, o do banco só o da aplicação, e cada route table privada aponta ao NAT da própria AZ
- [ ] d) ALB em sub-redes públicas, aplicação e banco em privadas sem saída, com as atualizações feitas por um bastion host

**2.** A [[VPC]] `10.20.0.0/16` de uma empresa está com 95% dos IPs usados por tarefas no modo `awsvpc`, e a rede local, que será ligada por VPN, já usa `10.30.0.0/16`. A VPC não pode ser recriada. Qual solução atende?

- [ ] a) Associar um CIDR secundário sem sobreposição, como `10.40.0.0/16`, e criar novas sub-redes nele
- [ ] b) Associar `10.30.0.0/16` como CIDR secundário, para reaproveitar o espaço que a rede local já usa
- [ ] c) Aumentar o CIDR primário de `/16` para `/15`, dobrando os endereços da VPC
- [ ] d) Mover todas as tarefas para sub-redes públicas, que teriam mais endereços livres

**3.** Uma empresa exige que um [[Bucket|bucket]] [[S3]] com dados sensíveis só seja acessado a partir da [[VPC]] de produção, por caminho privado e sem custo adicional de endpoint. O que combinar?

- [ ] a) Interface endpoint do S3 com DNS privado e uma bucket policy que confia no IP público do NAT gateway da VPC
- [ ] b) Bucket policy com `aws:PrincipalOrgID` e um NAT gateway com Elastic IP dedicado ao tráfego do S3
- [ ] c) Security group do bucket liberando só o CIDR da VPC de produção, com a rota do S3 apontando ao IGW
- [ ] d) Gateway endpoint do S3 e bucket policy com `aws:SourceVpce`

**4.** A equipe de segurança quer garantir que nenhuma [[Sub-rede|sub-rede]] de dados nova nasça exposta à internet por engano. Quais DUAS ações atendem? (Escolha DUAS.)

- [ ] a) Manter a main route table só com a rota local e usar route tables custom, associadas explicitamente, nas sub-redes públicas
- [ ] b) Colocar a rota para o IGW na main route table, para que toda sub-rede nova já tenha saída
- [ ] c) Habilitar o VPC Block Public Access no modo só de entrada, com exclusão apenas para as sub-redes públicas
- [ ] d) Remover o security group padrão da VPC, que é o que abre as sub-redes para a internet
- [ ] e) Associar uma NACL por instância, negando `0.0.0.0/0` em todas as portas

**5.** Uma empresa precisa de SSH em dezenas de instâncias Linux em [[Sub-rede Privada|sub-redes privadas]] de uma [[VPC]] sem [[Internet Gateway]], sem IP público, sem instalar agentes e sem [[Bastion Host|bastion host]], com todas as tentativas registradas no [[CloudTrail]]. O que usar?

- [ ] a) Session Manager, instalando o SSM Agent nas instâncias e criando os três interface endpoints do Systems Manager
- [ ] b) Um bastion host em sub-rede pública com a porta 22 liberada para o escritório
- [ ] c) Um EC2 Instance Connect Endpoint, com o SG das instâncias aceitando a porta 22 só do grupo do endpoint
- [ ] d) Um Elastic IP em cada instância, com a porta 22 liberada ao IP fixo do escritório e chaves SSH gerenciadas à mão

**6.** Uma carga em três [[Zona de Disponibilidade|AZs]] usa um [[NAT Gateway|NAT gateway]] por AZ. A análise da fatura mostra que 70% do tráfego pelo [[NAT]] vai para [[S3]] e [[DynamoDB]], 20% para APIs públicas de parceiros e 10% para pacotes de atualização. Qual mudança dá a maior economia sem reduzir a [[Disponibilidade|disponibilidade]]?

- [ ] a) Manter um NAT por AZ e criar interface endpoints do S3 e do DynamoDB nas três AZs
- [ ] b) Criar gateway endpoints para S3 e DynamoDB nas route tables privadas das três AZs e manter um NAT gateway por AZ para o restante do tráfego
- [ ] c) Trocar os três NAT gateways por uma única NAT instance grande
- [ ] d) Dar IP público às instâncias e remover os NAT gateways

**7.** Os [[VPC Flow Logs|Flow Logs]] mostram REJECT para [[TCP]] 8080 vindo do [[Application Load Balancer|ALB]] na [[ENI]] da aplicação. As [[Network ACL|NACLs]] são as padrão, e o [[Security Group|security group]] da aplicação só tem entrada para a porta 443. Qual é a correção?

- [ ] a) Adicionar entrada TCP 8080 no SG da aplicação, com origem no SG do ALB
- [ ] b) Editar a NACL padrão da sub-rede para permitir a entrada TCP 8080 vinda do ALB
- [ ] c) Anexar um segundo Internet Gateway à VPC para o ALB alcançar a aplicação
- [ ] d) Habilitar `enableDnsHostnames` na VPC para o ALB resolver o nome da aplicação

**8.** Instâncias [[Dual-Stack|dual-stack]] em [[Sub-rede Privada|sub-rede privada]] têm rota `::/0` para um [[Egress-Only Internet Gateway|egress-only internet gateway]], mas as conexões [[IPv6]] para a internet dão [[Timeout|timeout]], enquanto o [[IPv4]] funciona pelo [[NAT]]. A equipe restringiu a saída do [[Security Group|security group]] a [[TCP]] 443 para `0.0.0.0/0`. Qual é a correção?

- [ ] a) Associar um Elastic IP ao egress-only internet gateway
- [ ] b) Apontar `0.0.0.0/0` da route table para o egress-only internet gateway
- [ ] c) Desligar `enableDnsHostnames` para que o IPv6 passe a funcionar nas instâncias
- [ ] d) Adicionar saída TCP 443 para `::/0`, pois IPv4 e IPv6 têm regras separadas

**9.** Um [[Interface Endpoint|interface endpoint]] do [[Secrets Manager]] foi criado com [[DNS]] privado, e o [[Security Group|security group]] aceita [[TCP]] 443 da [[Sub-rede|sub-rede]]. Mesmo assim as instâncias resolvem o nome padrão do serviço para IPs públicos e saem pela [[NAT]]. A [[VPC]] tem `enableDnsSupport` ligado e `enableDnsHostnames` desligado. Qual é a correção?

- [ ] a) Habilitar `enableDnsHostnames` na VPC, porque o DNS privado do endpoint exige os dois atributos ligados, e confirmar que a opção de DNS privado está ativa no endpoint
- [ ] b) Desligar `enableDnsSupport`, para que o nome padrão passe a resolver pelo endpoint
- [ ] c) Associar um Elastic IP ao endpoint, para que o nome padrão aponte para ele
- [ ] d) Criar uma rota para o prefix list do Secrets Manager na route table

**10.** Uma auditoria de custos encontra 30 [[Elastic IP|Elastic IPs]] ociosos e 200 instâncias com IP público que só recebem tráfego do [[Application Load Balancer|ALB]] e só falam com a internet por um [[NAT Gateway|NAT gateway]]. Qual ação reduz o custo de [[IPv4]] público sem perder função?

- [ ] a) Manter os Elastic IPs ociosos, que não cobram, e remover só os IPs das instâncias
- [ ] b) Trocar o NAT gateway por IPs públicos em cada instância, que cobram menos que o gateway
- [ ] c) Liberar os Elastic IPs ociosos e tirar o IP público das instâncias atrás do ALB
- [ ] d) Converter todos os IPs públicos em Elastic IPs, que têm preço menor por hora

**11.** Uma equipe de segurança precisa, sem gerar tráfego real, (1) confirmar antes de uma mudança de rota que a aplicação continua alcançando o banco e (2) auditar se algum recurso da [[Sub-rede|sub-rede]] de dados está acessível pela internet. Quais DUAS ferramentas atendem? (Escolha DUAS.)

- [ ] a) Reachability Analyzer
- [ ] b) VPC Flow Logs
- [ ] c) Traffic Mirroring
- [ ] d) Network Access Analyzer
- [ ] e) AWS CloudTrail

**12.** Uma [[VPC]] tem um [[NAT Gateway|NAT gateway]] por [[Zona de Disponibilidade|AZ]], e cada [[Route Table|route table]] privada aponta para o [[NAT]] da própria AZ. A AZ b fica indisponível. O que acontece com a saída para a internet?

- [ ] a) As três AZs perdem a saída, porque os NAT gateways compartilham o mesmo Elastic IP
- [ ] b) Só as sub-redes da AZ b perdem a saída; as AZs a e c seguem pelos próprios NAT gateways
- [ ] c) O tráfego da AZ b é redirecionado automaticamente ao NAT de outra AZ, com cobrança entre AZs
- [ ] d) As sub-redes públicas das AZs a e c também perdem o acesso à internet

**13.** Uma organização com 80 contas quer impedir que qualquer conta exponha recursos à internet por [[Internet Gateway]], sem apagar os IGWs existentes, sem afetar VPN nem [[Transit Gateway]] e sem que as contas possam desfazer. O que usar?

- [ ] a) Uma SCP negando `ec2:CreateInternetGateway`, que também remove os IGWs existentes
- [ ] b) Uma NACL negando `0.0.0.0/0` em cada sub-rede de cada conta
- [ ] c) Um script semanal que remove as rotas para IGW em cada conta
- [ ] d) VPC Block Public Access imposto por declarative policy do AWS Organizations

**14.** Um serviço [[Fargate]] em modo `awsvpc` chega a 1.200 tarefas e, durante o deploy, a 1,5 vez isso (1.800), com um IP por tarefa. A equipe quer sobreviver à perda de uma de três [[Zona de Disponibilidade|AZs]] mesmo durante o deploy. Qual dimensionamento atende?

- [ ] a) Três sub-redes `/22`, uma por AZ
- [ ] b) Três sub-redes `/23`, uma por AZ, que somam 1.521 endereços utilizáveis
- [ ] c) Uma única sub-rede `/21` em uma das AZs, com 2.043 endereços utilizáveis
- [ ] d) Três sub-redes `/24`, uma por AZ, com 251 endereços utilizáveis cada

**15.** Uma [[Sub-rede|sub-rede]] nova, criada para a camada web, tem IP público nas instâncias e SG liberando HTTPS, mas não recebe tráfego da internet. A [[VPC]] já tem uma custom [[Route Table|route table]] com `0.0.0.0/0` para o [[Internet Gateway|IGW]], associada às outras [[Sub-rede Publica|sub-redes públicas]], e a main tem só a rota local. Qual é a correção?

- [ ] a) Adicionar `0.0.0.0/0` para o IGW na main route table, que resolve de imediato
- [ ] b) Anexar um segundo Internet Gateway à VPC
- [ ] c) Associar explicitamente a nova sub-rede à custom route table que já tem a rota para o IGW, mantendo a main só com a rota local
- [ ] d) Criar um CIDR secundário e mover a sub-rede para ele

**16.** A equipe de segurança precisa inspecionar o conteúdo dos pacotes de uma [[ENI]] suspeita com uma ferramenta de detecção de intrusão. O que usar?

- [ ] a) VPC Flow Logs, que registram o conteúdo dos pacotes da ENI
- [ ] b) Traffic Mirroring, que copia o tráfego da ENI para inspeção
- [ ] c) Reachability Analyzer, que captura os pacotes da ENI e os entrega
- [ ] d) AWS CloudTrail, que registra os pacotes da interface em log

> [!success]- Gabarito
> **1. c)** [[Application Load Balancer|ALB]] e [[NAT]] por [[Zona de Disponibilidade|AZ]] em [[Sub-rede Publica|sub-redes públicas]], camadas privadas, referência entre SGs e rota para o NAT da própria AZ atendem a segurança e a [[Alta Disponibilidade|HA]]; a) expõe aplicação e banco à internet; b) o NAT único é [[Ponto Unico de Falha|ponto único de falha]] da saída; d) o [[Bastion Host|bastion]] não dá saída de rede às tarefas [[Fargate]] e dá trabalho.
> **2. a)** um [[CIDR]] secundário sem sobreposição cresce a [[VPC]] sem recriar (e `10.40.0.0/16` é compatível com o primário `10.20.0.0/16`); b) sobrepõe a rede local; c) o primário não é redimensionável; d) [[Sub-rede Publica|sub-rede pública]] não tem mais endereços.
> **3. d)** o [[Gateway Endpoint|gateway endpoint]] é gratuito e `aws:SourceVpce` restringe o [[Bucket|bucket]] a esse caminho; a) o [[Interface Endpoint|interface endpoint]] cobra e o IP do [[NAT]] não identifica o endpoint; b) o `PrincipalOrgID` não restringe o caminho; c) o [[S3]] não tem [[Security Group|security group]] e a rota para o [[Internet Gateway|IGW]] é o oposto de privado.
> **4. a) e c)** a main privada torna o público uma escolha explícita e o BPA só de entrada barra o acesso externo mesmo que alguém crie rota; b) faz toda [[Sub-rede|sub-rede]] nova nascer pública; d) o [[Security Group|security group]] padrão não abre sub-rede para a internet; e) [[Network ACL|NACL]] é por sub-rede, não por instância.
> **5. c)** o [[EC2 Instance Connect Endpoint|EICE]] dá SSH sem IP público, sem [[Internet Gateway|IGW]], sem [[Bastion Host|bastion]] e registra no [[CloudTrail]]; a) o [[Session Manager]] exige o agente que o enunciado proíbe; b) bastion é o que se quer evitar; d) expõe IPs públicos.
> **6. b)** [[Gateway Endpoint|gateway endpoints]] são gratuitos e tiram 70% do tráfego do [[NAT]], mantendo um NAT por [[Zona de Disponibilidade|AZ]] para o resto; a) [[Interface Endpoint|interface endpoints]] cobram por hora e GB; c) uma [[NAT Instance|NAT instance]] única reduz a [[Disponibilidade|disponibilidade]]; d) IPs públicos aumentam a exposição e o custo de [[IPv4]].
> **7. a)** o SG da aplicação só aceita 443, então falta 8080 com origem no SG do [[Application Load Balancer|ALB]]; b) a [[Network ACL|NACL]] padrão já permite tudo; c) um segundo [[Internet Gateway|IGW]] não existe e não ajudaria; d) o [[DNS]] não explica o REJECT.
> **8. d)** [[IPv4]] e [[IPv6]] têm regras separadas no SG (e na [[Network ACL|NACL]]), então falta [[TCP]] 443 para `::/0`; a) o egress-only não usa [[Elastic IP]]; b) `0.0.0.0/0` é IPv4; c) o [[DNS]] não bloqueia IPv6.
> **9. a)** o [[DNS]] privado de [[Interface Endpoint|interface endpoints]] exige `enableDnsSupport` e `enableDnsHostnames` ligados; b) desligar o suporte quebra a resolução; c) um [[Elastic IP]] não é associado ao endpoint; d) o [[Managed Prefix List|prefix list]] é do [[Gateway Endpoint|gateway endpoint]].
> **10. c)** libera o que cobra sem uso e remove [[IPv4]] desnecessário nas instâncias atrás do [[Application Load Balancer|ALB]]; a) [[Elastic IP|EIP]] ocioso cobra como em uso; b) cada IP público cobra, então 200 IPs custam mais que um gateway; d) EIP e IP automático têm o mesmo preço por hora.
> **11. a) e d)** o [[Reachability Analyzer]] valida o caminho pela configuração e o [[Network Access Analyzer]] audita acessos contra uma política; b) os [[VPC Flow Logs|Flow Logs]] mostram tráfego passado; c) o [[Traffic Mirroring]] copia pacotes reais; e) o [[CloudTrail]] registra chamadas de API.
> **12. b)** o [[NAT]] é zonal e as rotas locais isolam a falha na [[Zona de Disponibilidade|AZ]] b; a) os NATs são independentes; c) não há redirecionamento automático entre NATs; d) as [[Sub-rede Publica|sub-redes públicas]] usam o [[Internet Gateway|IGW]], que é regional.
> **13. d)** o BPA bloqueia o tráfego dos IGWs sem apagá-los, não afeta VPN nem [[Transit Gateway|TGW]] e a declarative policy impede as contas de alterá-lo; a) a [[SCP]] bloqueia a criação, não afeta os existentes; b) e c) são manuais, frágeis e desfazíveis.
> **14. a)** sem uma [[Zona de Disponibilidade|AZ]] restam duas, que precisam comportar 1.800 tarefas (900 por AZ); `/22` tem 1.019 utilizáveis; b) duas `/23` somam 1.014, abaixo de 1.800; c) uma só AZ cai com a falha dela; d) três `/24` somam 753, e duas somam 502.
> **15. c)** a [[Sub-rede|sub-rede]] nova segue a main (sem rota para o [[Internet Gateway|IGW]]); associá-la à custom corrige sem expor outras sub-redes futuras; a) faz toda sub-rede nascer pública; b) só há um IGW por [[VPC]]; d) o [[CIDR]] não altera o roteamento.
> **16. b)** o [[Traffic Mirroring]] copia o tráfego da [[ENI]] para análise de conteúdo; a) os [[VPC Flow Logs|Flow Logs]] guardam só metadados; c) o [[Reachability Analyzer]] não captura pacotes; d) o [[CloudTrail]] registra chamadas de API.

## Próximo módulo

[[07 - Conectividade Hibrida e entre VPCs]]: agora que a [[VPC]] está desenhada e protegida, como ligá-la a outras VPCs, a outras contas e ao data center (peering, [[Transit Gateway]], VPN e [[Direct Connect]]).
