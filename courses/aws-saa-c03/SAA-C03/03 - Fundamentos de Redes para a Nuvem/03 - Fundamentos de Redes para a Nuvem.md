---
aliases:
  - Módulo 3
modulo: 3
parte: "I Fundamentos"
tags:
  - modulo
  - saa-c03
---

# Módulo 3: Fundamentos de redes para a nuvem

Você já configurou [[VPC]], [[Security Group|security groups]], [[Application Load Balancer|ALB]], [[Route 53]] e [[CloudFront]]. Este módulo dá o que normalmente falta por baixo desse uso diário: **a teoria de rede que explica por que cada serviço é como é**. Ele responde a uma pergunta: o que preciso entender de IP, [[TCP]], [[DNS]], [[TLS]] e [[Latencia|latência]] para que as decisões de rede da prova deixem de ser decoreba? Ele vem agora, no fim da Parte I, porque todo o resto do curso (a [[04 - IAM Identidade e Acesso|identidade]], a [[06 - VPC a Fundo|VPC]], os [[07 - Conectividade Hibrida e entre VPCs|links híbridos]], os [[12 - Balanceamento de Carga e Auto Scaling|balanceadores]] e a [[18 - Borda e DNS CloudFront Global Accelerator e Route 53|borda]]) usa esse vocabulário sem reexplicar.

É um módulo **conceitual**: não há laboratório na AWS. Os laboratórios opcionais rodam só no seu computador (Python, `dig`, `openssl`), sem [[Conta AWS|conta AWS]] e sem custo.

> [!info] Pré-requisitos
> O [[01 - Nuvem e Infraestrutura Global AWS|Módulo 1]] explicou [[Regiao AWS|Regiões]] e [[Zona de Disponibilidade|AZs]] (a distância física que gera [[Latencia|latência]]) e o [[02 - Well-Architected e o Formato da Prova|Módulo 2]] explicou o formato da prova e os [[Qualificador|qualificadores]] dos enunciados. Aqui você aplica isso a redes.

## Aulas

1. [[03.01 - Por que Redes Pesam e as Camadas de Rede|Aula 3.1: Por que redes pesam e as camadas de rede]]: o que são IP, [[TCP]]/UDP e [[HTTP]], e por que a camada define [[Application Load Balancer|ALB]], [[Network Load Balancer|NLB]] e [[Gateway Load Balancer]].
2. [[03.02 - IPv4 CIDR e Mascaras de Rede|Aula 3.2: IPv4, CIDR e máscaras de rede]]: binário, prefixo, tamanho de bloco, início e fim, divisão em [[Sub-rede|sub-redes]] e os 5 endereços reservados.
3. [[03.03 - Faixas Privadas Sub-redes e IPv6|Aula 3.3: Faixas privadas, sub-redes e IPv6]]: [[RFC 1918]], plano de endereços, por que CIDRs sobrepostos quebram conexões e como o [[IPv6]] aparece na [[VPC]].
4. [[03.04 - Roteamento NAT e Tabelas de Rotas|Aula 3.4: Roteamento, NAT e tabelas de rotas]]: [[Route Table|route table]], [[Longest Prefix Match|longest prefix match]], [[Rota Padrao|rota padrão]] e por que o [[NAT]] existe.
5. [[03.05 - Firewalls Portas e Portas Efemeras|Aula 3.5: Firewalls, portas e portas efêmeras]]: stateful versus [[Stateless|stateless]], [[Security Group|security group]] versus [[Network ACL|network ACL]] e as portas que caem na prova.
6. [[03.06 - DNS e Resolucao de Nomes|Aula 3.6: DNS e resolução de nomes]]: resolução recursiva, registros, [[TTL]], alias versus [[CNAME]] e zonas públicas e privadas.
7. [[03.07 - TLS HTTPS e Certificados|Aula 3.7: TLS, HTTPS e certificados]]: certificado, cadeia de confiança, handshake, [[SNI]] e onde [[Terminacao de TLS|terminar o TLS]].
8. [[03.08 - Latencia Largura de Banda VPN e BGP|Aula 3.8: Latência, largura de banda, VPN, circuito dedicado e BGP]]: a física da [[Latencia|latência]], [[Throughput|throughput]], [[IPsec]], [[Direct Connect]] e [[BGP]].

**Por que 8 aulas e nesta ordem.** A sequência segue o caminho de um pacote, do endereço ao destino: camadas (3.1), endereço e bloco (3.2), planejamento de blocos e [[IPv6]] (3.3), condução do pacote (3.4), filtro do pacote (3.5), nome do destino (3.6), proteção da conversa (3.7) e a rede física entre os pontos (3.8). Endereçamento ficou em duas aulas por ser o assunto de maior peso para [[VPC]]; firewalls ganharam aula própria por causa da diferença entre [[Security Group|security group]] e [[Network ACL|NACL]], a pegadinha mais frequente.

## Cobertura do exam guide

Este módulo é a base conceitual, não o dono dos serviços ([[VPC]], [[Elastic Load Balancing|ELB]], [[Route 53]] e [[Direct Connect]] têm módulos próprios). A tabela mostra onde cada task statement relevante é preparada aqui:

| Task statement | Onde está |
|---|---|
| Task 1.2: portas, protocolos e tráfego na AWS | [[03.05 - Firewalls Portas e Portas Efemeras\|Aula 3.5]] e [[03.01 - Por que Redes Pesam e as Camadas de Rede\|Aula 3.1]] |
| Task 1.2: [[VPC]] com [[Security Group\|security groups]], [[Route Table\|route tables]], [[Network ACL\|network ACLs]], [[NAT Gateway\|NAT gateways]] | [[03.04 - Roteamento NAT e Tabelas de Rotas\|Aula 3.4]] e [[03.05 - Firewalls Portas e Portas Efemeras\|Aula 3.5]] |
| Task 1.2: segmentação com [[Sub-rede Publica\|sub-redes públicas]] e privadas | [[03.03 - Faixas Privadas Sub-redes e IPv6\|Aula 3.3]] |
| Task 1.2: conexões externas seguras (VPN, [[Direct Connect]]) | [[03.08 - Latencia Largura de Banda VPN e BGP\|Aula 3.8]] |
| Task 1.2 e 1.3: [[Criptografia em Transito\|criptografia em trânsito]] ([[TLS]], certificados) | [[03.07 - TLS HTTPS e Certificados\|Aula 3.7]] |
| Task 3.4: endereçamento IP, camadas de [[Sub-rede\|sub-redes]], roteamento | [[03.02 - IPv4 CIDR e Mascaras de Rede\|Aula 3.2]], [[03.03 - Faixas Privadas Sub-redes e IPv6\|Aula 3.3]] e [[03.04 - Roteamento NAT e Tabelas de Rotas\|Aula 3.4]] |
| Task 3.4: escolha de balanceador ([[Application Load Balancer\|ALB]], [[Network Load Balancer\|NLB]], [[Gateway Load Balancer\|GWLB]]) | [[03.01 - Por que Redes Pesam e as Camadas de Rede\|Aula 3.1]] |
| Task 3.4: opções de conexão (VPN, [[Direct Connect]]) | [[03.08 - Latencia Largura de Banda VPN e BGP\|Aula 3.8]] |
| Task 4.4: [[NAT Gateway\|NAT gateway]] (compartilhado versus um por [[Zona de Disponibilidade\|AZ]]) | [[03.04 - Roteamento NAT e Tabelas de Rotas\|Aula 3.4]] |
| Task 4.4: rede privada, dedicada e VPN; [[Data Transfer\|custo de transferência]] | [[03.08 - Latencia Largura de Banda VPN e BGP\|Aula 3.8]] |
| Task 4.4: serviços de rede ([[DNS]]) | [[03.06 - DNS e Resolucao de Nomes\|Aula 3.6]] |
| Task 2.2: [[Failover\|failover]] (base: [[TTL]] de [[DNS]]) | [[03.06 - DNS e Resolucao de Nomes\|Aula 3.6]] |

Os serviços em si (peering, [[Transit Gateway]], endpoints, [[Direct Connect]], [[CloudFront]], [[Global Accelerator]], [[Route 53]]) aparecem nos Módulos [[06 - VPC a Fundo|6]], [[07 - Conectividade Hibrida e entre VPCs|7]] e [[18 - Borda e DNS CloudFront Global Accelerator e Route 53|18]].

> [!warning] Fatos que mudam
> Valores citados com "verificado em novembro de 2026" vêm da documentação oficial da AWS na data indicada. Preços e quotas mudam: confira a página oficial antes de decidir algo em produção.

## Checklist de saída do módulo

- [ ] Sei explicar por que o [[Application Load Balancer|ALB]] decide por caminho e host ([[Modelo OSI|camada 7]]), o [[Network Load Balancer|NLB]] só por porta (camada 4) e o [[Gateway Load Balancer|GWLB]] só repassa pacotes (camada 3)?
- [ ] Sei calcular o tamanho de um [[CIDR|bloco CIDR]], achar o primeiro e o último endereço e dizer por que `/28` na AWS tem 11 endereços utilizáveis?
- [ ] Sei explicar por que CIDRs sobrepostos impedem peering e roteamento, e por que o plano de endereços vem antes da primeira [[VPC]]?
- [ ] Sei dizer por que o [[Longest Prefix Match|longest prefix match]] escolhe a rota mais específica e o que faz a rota `0.0.0.0/0`?
- [ ] Sei explicar por que o [[NAT]] só atende a conexões iniciadas de dentro e por que o [[NAT Gateway|NAT gateway]] precisa estar em uma [[Sub-rede Publica|sub-rede pública]]?
- [ ] Sei explicar por que a [[Network ACL|network ACL]] exige liberar [[Porta Efemera|portas efêmeras]] e o [[Security Group|security group]] não?
- [ ] Sei dizer por que o [[Alias Record|registro alias]] existe e quando o [[CNAME]] não pode ser usado?
- [ ] Sei descrever por que o [[TTL]] baixo acelera uma mudança de [[DNS]] e qual é o custo disso?
- [ ] Sei explicar o que um certificado prova, o que o [[SNI]] resolve e quando um balanceador "não pode decifrar" o tráfego?
- [ ] Sei justificar, pela física da [[Latencia|latência]] e pelo prazo, quando escolher [[Site-to-Site VPN]] ou [[Direct Connect]]?

## Teste-se

**1.** O data center usa `10.0.0.0/8` e será ligado à nova [[VPC]] por VPN. Cada uma das três [[Sub-rede|sub-redes]] de aplicação, uma por [[Zona de Disponibilidade|AZ]], deve comportar 700 tarefas, e a equipe quer o menor bloco possível por sub-rede. Qual plano atende?

- [ ] a) VPC `10.50.0.0/16` e sub-redes de aplicação `/22`
- [ ] b) VPC `172.20.0.0/16` e sub-redes de aplicação `/22`
- [ ] c) VPC `172.20.0.0/16` e sub-redes de aplicação `/24`
- [ ] d) VPC `172.20.0.0/16` e sub-redes de aplicação `/23`

**2.** O data center da empresa usa a faixa 10.0.0.0/8. Qual [[CIDR]] é o mais seguro para uma nova [[VPC]] que será conectada a ele por VPN?

- [ ] a) 10.100.0.0/16
- [ ] b) 10.0.0.0/16
- [ ] c) 169.254.0.0/16
- [ ] d) 172.20.0.0/16

**3.** Instâncias em uma [[Sub-rede Privada|sub-rede privada]] baixam pacotes pela internet por um [[NAT Gateway|NAT gateway]]. Depois de a equipe criar uma [[Network ACL|network ACL]] personalizada nessa [[Sub-rede|sub-rede]], com regra de saída [[TCP]] 443 e regra de entrada TCP 443, os downloads param. Qual é a causa?

- [ ] a) Falta liberar na NACL a entrada para as portas efêmeras, onde as respostas voltam
- [ ] b) Falta uma rota `0.0.0.0/0` para o Internet Gateway na tabela da própria sub-rede privada
- [ ] c) O security group das instâncias precisa de regra de entrada para as respostas do download
- [ ] d) O NAT gateway só encaminha respostas para portas abaixo de 1024

**4.** Instâncias de produção em três [[Sub-rede Privada|sub-redes privadas]], uma por [[Zona de Disponibilidade|AZ]], precisam de saída [[IPv4]] para a internet e a empresa exige que a saída continue funcionando se uma AZ falhar, usando [[NAT Gateway|NAT gateways]] zonais. Qual é a solução?

- [ ] a) Um único NAT gateway compartilhado em uma AZ
- [ ] b) Um Internet Gateway associado a cada sub-rede privada, com rotas `0.0.0.0/0` para ele
- [ ] c) Um NAT gateway público zonal em cada AZ, com a route table de cada AZ apontando para o seu
- [ ] d) Um egress-only internet gateway com rota `0.0.0.0/0`

**5.** Uma empresa serve `exemplo.com` (sem www) e `www.exemplo.com` com HTTPS por um [[Application Load Balancer|ALB]], com o menor custo de consultas de [[DNS]]. Qual combinação atende?

- [ ] a) CNAME no apex para o ALB e certificado do ACM só para `www.exemplo.com`
- [ ] b) Alias A no apex para o ALB e certificado do ACM com os dois nomes
- [ ] c) Alias A no apex para o ALB e certificado do ACM só para `www.exemplo.com`
- [ ] d) Alias A no apex para o ALB e certificado wildcard `*.exemplo.com` como único nome

**6.** Uma aplicação [[TCP]] proprietária usa [[TLS]] terminado nas próprias instâncias, e o balanceador não pode ter acesso ao conteúdo decifrado. O que usar?

- [ ] a) ALB com listener HTTPS e certificado do ACM
- [ ] b) Gateway Load Balancer com listener TLS
- [ ] c) ALB com listener HTTP e regra de redirecionamento
- [ ] d) NLB com listener TCP repassando a conexão

**7.** A empresa precisa conectar o data center à AWS em até dois dias, com criptografia, e planeja ter depois uma conexão dedicada, mantendo resiliência. Qual combinação atende?

- [ ] a) Site-to-Site VPN agora, depois Direct Connect mantendo a VPN como backup
- [ ] b) Somente Direct Connect, aguardando o provisionamento
- [ ] c) Site-to-Site VPN com apenas um dos dois túneis configurados, para reduzir custo
- [ ] d) NAT gateway privado entre o data center e a VPC

**8.** Uma empresa precisa transferir 5 TB por um link de 100 Mbps. Aproximadamente quanto tempo leva, com uso de 100% do link?

- [ ] a) Cerca de 11 horas
- [ ] b) Cerca de 46 horas
- [ ] c) Cerca de 4,6 dias
- [ ] d) Cerca de 46 dias

**9.** Uma instância em [[Sub-rede Publica|sub-rede pública]] tem [[IPv4]] público, e o [[Security Group|security group]] libera a porta 443, mas ninguém na internet a acessa. Qual é a causa mais provável?

- [ ] a) O security group também precisa de regra de saída para a porta 443
- [ ] b) A route table da sub-rede não tem rota `0.0.0.0/0` para o Internet Gateway
- [ ] c) A network ACL padrão da VPC nega por padrão a entrada na porta 443
- [ ] d) A VPC precisa de um NAT gateway na mesma sub-rede para receber conexões da internet

**10.** Instâncias [[EC2]] ficam atrás de um [[Network Load Balancer|NLB]] criado com [[Security Group|security group]], com [[Client IP Preservation|preservação de IP do cliente]] ligada. O security group das instâncias só libera [[TCP]] 8443 vindo do [[CIDR]] da [[VPC]], e clientes da internet não conseguem acessar. Qual ajuste mantém o [[Menor Privilegio|menor privilégio]]?

- [ ] a) Liberar TCP 8443 com origem `0.0.0.0/0` no security group das instâncias
- [ ] b) Desligar a preservação de IP do cliente e manter a regra do CIDR da VPC
- [ ] c) Liberar no security group do NLB a saída apenas para o CIDR da VPC
- [ ] d) Liberar TCP 8443 com origem no security group do NLB

**11.** Instâncias privadas gastam muito com o [[NAT Gateway|NAT gateway]] ao baixar objetos do [[S3]]. Qual é a mudança de maior retorno?

- [ ] a) Criar um gateway endpoint para o S3 e rotear o tráfego do S3 por ele
- [ ] b) Adicionar mais um NAT gateway em cada AZ para dividir o tráfego entre eles
- [ ] c) Trocar o NAT gateway por um Internet Gateway
- [ ] d) Habilitar IPv6 nas instâncias e manter o NAT

**12.** Usuários na Europa acessam um site estático hospedado em um [[Bucket|bucket]] [[S3]] em sa-east-1 e reclamam de lentidão. Qual solução melhora a [[Latencia|latência]] com menor esforço?

- [ ] a) Aumentar a largura de banda da VPC do bucket
- [ ] b) Trocar o tipo de armazenamento do bucket
- [ ] c) Colocar o CloudFront na frente do bucket
- [ ] d) Mover o bucket para uma sub-rede privada

**13.** Uma aplicação [[Dual-Stack|dual-stack]] aceita HTTPS por [[IPv4]], mas usuários com [[IPv6]] não conseguem acessar. As regras para `0.0.0.0/0` na porta 443 existem. O que falta?

- [ ] a) Trocar o ALB por um NLB, que suporta IPv6 de forma nativa nas duas pontas
- [ ] b) Regras equivalentes para `::/0` no security group e na network ACL
- [ ] c) Um NAT gateway para o tráfego IPv6
- [ ] d) Reduzir o TTL do registro AAAA

**14.** Qual descrição compara corretamente [[Security Group|security group]] e [[Network ACL|network ACL]]?

- [ ] a) SG: stateless, no nível da sub-rede; NACL: stateful, no nível do recurso
- [ ] b) SG: stateful, permite e nega; NACL: stateless, só permite
- [ ] c) SG: avalia por ordem numérica e para na primeira regra; NACL: avalia todas as regras juntas
- [ ] d) SG: stateful, no recurso, só permite; NACL: stateless, na sub-rede, permite e nega

**15.** (Escolha DUAS.) Quais fatores aumentam a [[Latencia|latência]] entre um usuário e uma Região da AWS?

- [ ] a) A distância física que o sinal precisa percorrer
- [ ] b) O congestionamento (filas) em roteadores no caminho
- [ ] c) A quantidade de regras no security group
- [ ] d) O tamanho do CIDR da sub-rede
- [ ] e) O uso de nomes DNS em vez de endereços IP

**16.** (Escolha DUAS.) Quais afirmações sobre onde [[Terminacao de TLS|terminar o TLS]] estão corretas?

- [ ] a) O NLB com listener TCP repassa o tráfego cifrado aos destinos
- [ ] b) O ALB que termina o TLS consegue rotear e aplicar WAF sobre o HTTP
- [ ] c) O AWS WAF pode ser associado a um Network Load Balancer
- [ ] d) O SNI exige um ALB separado para cada certificado
- [ ] e) O certificado contém a chave privada do servidor

> [!success]- Gabarito
> **1. b)** `172.20.0.0/16` não sobrepõe o `10.0.0.0/8`, e 700 + 5 = 705 exige o `/22` (1.019 utilizáveis). a) `10.50.0.0/16` está dentro de `10.0.0.0/8` e sobrepõe o data center. c) o `/24` tem só 251 utilizáveis. d) o `/23` tem só 507.
> **2. d)** 172.20.0.0/16 está fora de 10.0.0.0/8. a) e b) estão dentro do 10.0.0.0/8 e se sobrepõem ao data center. c) 169.254.0.0/16 é link-local e a AWS recusa.
> **3. a)** a [[Network ACL|NACL]] é [[Stateless|stateless]]: a resposta volta do servidor externo para uma [[Porta Efemera|porta efêmera]] da instância e precisa de regra de entrada em 1024-65535. b) a [[Sub-rede Privada|sub-rede privada]] usa o [[NAT]], não o [[Internet Gateway]]. c) o [[Security Group|security group]] é stateful e libera a resposta sozinho. d) o [[NAT Gateway|NAT gateway]] usa as portas 1024-65535.
> **4. c)** um [[NAT Gateway|NAT gateway]] zonal por [[Zona de Disponibilidade|AZ]], com cada [[Route Table|route table]] apontando para o [[NAT]] da própria AZ, mantém a saída quando uma AZ falha (um [[Regional NAT Gateway|NAT gateway regional]] também atenderia, mas o enunciado fixa zonais). a) é [[Ponto Unico de Falha|ponto único de falha]]. b) o [[Internet Gateway|IGW]] não faz NAT para IPs privados. d) o egress-only é só [[IPv6]].
> **5. b)** o alias vale no [[Zone Apex|apex]] sem cobrança de consulta, e o certificado precisa conter os dois nomes. a) [[CNAME]] é proibido no apex. c) o apex acessado por HTTPS daria erro de nome no certificado. d) o wildcard `*.exemplo.com` não cobre o apex `exemplo.com`.
> **6. d)** o [[Network Load Balancer|NLB]] com [[Listener|listener]] [[TCP]] repassa os bytes cifrados e o [[TLS]] termina nas instâncias. a) e c) o [[Application Load Balancer|ALB]] decifra (a) ou nem cifra (c). b) o [[Gateway Load Balancer|GWLB]] serve a appliances.
> **7. a)** a VPN sobe rápido e cifrada, e depois o [[Direct Connect]] assume com a VPN de reserva. b) o Direct Connect não fica pronto em dois dias. c) um túnel só não dá redundância. d) o [[NAT]] privado não cria conexão com o data center.
> **8. c)** `5 x 8 x 10^12 / 10^8 = 400.000 s`, cerca de 4,6 dias. a) e b) subestimam. d) superestima dez vezes.
> **9. b)** sem a rota para o [[Internet Gateway]] a [[Sub-rede|sub-rede]] não é pública e o IP público não adianta. a) o [[Security Group|security group]] é stateful. c) a [[Network ACL|NACL]] padrão permite todo o tráfego. d) o [[NAT]] é para saída, não para entrada.
> **10. d)** com a preservação de IP o destino vê o IP do cliente, e referenciar o [[Security Group|security group]] do [[Network Load Balancer|NLB]] permite o tráfego mesmo assim. a) funciona, mas abre para o mundo inteiro. b) altera o comportamento e perde o IP do cliente, que o requisito mantém. c) a regra de saída do NLB não resolve a entrada nas instâncias.
> **11. a)** o [[Gateway Endpoint|gateway endpoint]] para o [[S3]] tira o tráfego do [[NAT]]. b) mais NATs aumentam o custo. c) o [[Internet Gateway|IGW]] não faz NAT de IPs privados. d) manter o NAT mantém a cobrança do tráfego [[IPv4]].
> **12. c)** o [[CloudFront]] coloca o conteúdo em cache perto dos usuários. a) banda não reduz o [[Latencia|RTT]]. b) a classe de armazenamento não muda a distância. d) [[Bucket|bucket]] [[S3]] não fica em [[Sub-rede|sub-rede]].
> **13. b)** [[IPv4]] e [[IPv6]] são avaliados separadamente, então faltam regras para `::/0`. a) o [[Application Load Balancer|ALB]] suporta [[Dual-Stack|dual-stack]]. c) não há [[NAT]] para esse caso. d) o [[TTL]] não afeta as regras.
> **14. d)** é a descrição correta de cada um. a) inverte as duas. b) o SG não nega e a [[Network ACL|NACL]] permite e nega. c) inverte a forma de avaliação.
> **15. a) e b)** distância (propagação) e filas em roteadores aumentam o [[Latencia|RTT]]. c) e d) não afetam o caminho dos pacotes. e) o uso de nomes não muda a distância física.
> **16. a) e b)** passthrough no [[Network Load Balancer|NLB]] e terminação com [[Modelo OSI|camada 7]] no [[Application Load Balancer|ALB]]. c) o [[WAF]] não se associa ao NLB. d) o [[SNI]] permite vários certificados no mesmo [[Listener|listener]]. e) o certificado não contém a chave privada.

## Próximo módulo

[[04 - IAM Identidade e Acesso|Próximo módulo: IAM Identidade e Acesso]]
