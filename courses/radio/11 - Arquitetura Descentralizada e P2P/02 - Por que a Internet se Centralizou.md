# Aula 2: Por que a internet se centralizou

[Voltar ao módulo](./README.md)

*Pergunta que esta aula responde: se o transporte de pacotes foi desenhado sem centro, por que hoje a maior parte do que usamos passa por poucas empresas, e quais pontos de controle isso cria?*

A resposta curta: **a descentralização técnica do transporte não impede a centralização econômica das aplicações**. O IP deixa qualquer pessoa rodar um servidor; a economia empurra quase todo mundo para o servidor de outro. As forças abaixo são estruturais, não conspiração, e por isso o módulo as trata como restrições de projeto que qualquer rede própria também enfrenta.

## Força 1: economia de escala

Um serviço digital tem **custo fixo alto e custo marginal baixo**: desenvolver e operar o sistema custa muito, mas atender o usuário adicional custa quase nada. Quem tem mais usuários divide o custo fixo por mais gente e pode cobrar menos (ou cobrar nada, com publicidade). Um datacenter grande compra energia, hardware e banda por preço menor por unidade, e contrata equipes de segurança e de plantão que uma organização pequena não sustenta.

O efeito prático para o desenvolvedor: hospedar um serviço em uma nuvem pública custa menos e dá menos trabalho do que operar o próprio hardware, até para quem sabe operar. A escolha racional, repetida por milhões de pessoas, concentra a infraestrutura.

## Força 2: efeito de rede

O valor de um serviço de comunicação cresce com o número de pessoas que o usam: um telefone só serve se há para quem ligar. Uma aproximação usual (a "lei de Metcalfe") diz que, com `n` usuários, o número de pares possíveis é `n x (n - 1) / 2`. Com 10 usuários são 45 pares; com 1.000, 499.500. É uma heurística, não uma lei exata, mas mostra a dinâmica: o serviço maior é mais valioso, atrai mais gente, e fica maior ainda.

Consequência: mesmo que existisse uma alternativa tecnicamente melhor, quem chega a um serviço novo precisa que **seus contatos** também estejam lá. O custo de trocar não é técnico, é social. Você vai ver isso de novo na Aula 9: por que a família dificilmente abandona o aplicativo de mensagens dominante.

## Força 3: nuvem e concentração de dependências

A nuvem pública transformou infraestrutura em serviço alugado. Duas coisas acontecem: (1) uma parcela enorme de aplicações roda em três ou quatro provedores; (2) os próprios serviços de cada provedor dependem uns dos outros dentro dele.

Um exemplo documentado. Em **19 e 20 de outubro de 2025**, uma falha na região US-EAST-1 (Norte da Virgínia) da Amazon Web Services derrubou serviços muito além da própria Amazon. O relatório pós-evento da AWS descreve a origem: uma **condição de corrida** (*race condition*) latente no sistema de gerenciamento de DNS do DynamoDB (banco de dados gerenciado) produziu um registro DNS vazio e incorreto para o endereço regional do serviço. O evento começou às 23h48 (horário do Pacífico) de 19 de outubro e terminou às 14h20 de 20 de outubro; serviços que dependiam do DynamoDB (e, em cascata, de máquinas virtuais e balanceadores) falharam. Em reportagem sobre o caso, a ABC (Austrália) citou impacto em bancos, transporte aéreo e aplicativos populares. As instâncias e os servidores estavam de pé; o que faltava era **saber o endereço** de um serviço, ou seja, uma falha de **nomes**, não de hardware.

Lições para o projeto de rede: (a) uma dependência escondida (DNS, autenticação, banco) pode ser o ponto único de falha mesmo em sistemas "redundantes"; (b) a redundância dentro de um provedor não protege contra falhas do provedor; (c) esse tipo de falha afeta muita gente ao mesmo tempo, o que o modelo de Baran (Aula 1) chamaria de rede cuja topologia real é de estrela, embora a topologia física pareça malha.

## Força 4: CDNs e plataformas

**CDN** (*content delivery network*) é uma rede de servidores de cache espalhados pelo mundo que entrega conteúdo de um ponto próximo ao usuário. Melhora velocidade e absorve picos de tráfego. Como poucas empresas têm essa capacidade global, um número pequeno de CDNs passa a ficar na frente de uma parcela enorme de sites, e todos os sites atrás da mesma CDN falham juntos se ela falhar (mesma lógica da nuvem).

**Plataformas** (redes sociais, lojas de aplicativos, sistemas de pagamento) combinam efeito de rede com controle da interface: quem define as regras de conta, de moderação e de distribuição é a empresa. O usuário não é dono da identidade nem do grafo social que construiu (o conjunto de quem segue quem).

## Força 5: NAT, endereços escassos e banda assimétrica

Esta é a força que mais afeta quem quer **rodar algo em casa**, e é técnica. Três fatos ligados:

1. **O IPv4 acabou.** Um endereço IPv4 tem 32 bits (cerca de 4,3 bilhões de valores), pouco para o número de dispositivos. A solução operacional foi o **NAT** (*network address translation*): um roteador com um endereço público compartilha esse endereço entre vários dispositivos com endereços privados. Como o RFC 2775 (*Internet Transparency*, 2000) descreve, o NAT quebra a transparência ponta a ponta: um dispositivo atrás de NAT consegue iniciar conexões para fora, mas o mundo não consegue iniciar conexão para ele, a menos que o roteador seja configurado (redirecionamento de porta).
2. **Muitos provedores residenciais usam NAT em duas camadas** (*carrier-grade NAT*, CGNAT), em que o próprio provedor compartilha um endereço público entre vários clientes. O RFC 6598 (2012) reservou um bloco IPv4 /10 justamente para o "espaço de endereço compartilhado" das necessidades de CGN. Atrás de CGNAT, o redirecionamento de porta no seu roteador não adianta: o endereço nem é seu. (Em qual proporção os provedores brasileiros usam CGNAT eu não verifiquei; confira com o seu provedor.)
3. **Planos residenciais são assimétricos**: velocidade de download muito maior que a de upload. Isso reflete o uso previsto (o usuário consome) e o desenho da tecnologia de acesso. Para servir conteúdo a outras pessoas, o upload é o que conta.

Somando: a arquitetura do acesso doméstico foi feita para o **cliente**. Servir de casa é difícil, então tudo o que precisa ser alcançável (mensagens entre dispositivos, arquivos, chamadas) passa por um servidor em um lugar bem conectado, e esse servidor é de alguém. Este é o motivo técnico mais concreto de "por que tudo é nuvem". Ele também explica por que P2P sobre a internet gasta tanto esforço em atravessar NAT (Aula 6) e por que uma rede de rádio local (LoRa, Wi-Fi) tem uma vantagem: **não há NAT nem provedor entre os nós**.

## Pontos únicos de falha e pontos únicos de controle

Convém separar dois conceitos que a linguagem mistura.

- **Ponto único de falha** (*single point of failure*, SPOF): se ele para, o sistema para. É um problema de **disponibilidade**. Exemplo: a região US-EAST-1.
- **Ponto único de controle** (*single point of control*, SPOC): quem o opera pode **decidir** quem entra, o que passa, e quem é desligado. É um problema de **poder**. Exemplo: um provedor que encerra uma conta.

Um sistema pode ter um sem o outro. Um serviço de nuvem muito redundante não tem SPOF, mas tem SPOC (a empresa decide). Uma rede caseira de um nó só tem SPOF, mas o SPOC é você.

Onde a internet de hoje concentra controle (lista descritiva, não exaustiva):

| Ponto | O que controla | Como pode ser usado ou falhar |
|---|---|---|
| **DNS e registradores** | Traduz nomes em endereços; registradores vendem os nomes | Um domínio pode ser suspenso ou bloqueado; um resolvedor DNS pode mentir ou negar respostas |
| **Autoridades certificadoras (CAs)** | Emitem os certificados em que o navegador confia para o HTTPS | Uma CA (ou quem a comprometa) pode emitir certificado para um site que não é do requerente; o navegador confia em um conjunto grande de CAs e qualquer uma delas basta |
| **Provedor de acesso (ISP)** | Todo o seu tráfego passa por ele | Pode registrar, bloquear por endereço ou por nome, ou limitar; o HTTPS esconde o conteúdo, mas não o destino IP nem, em geral, o nome do site |
| **Operadores de nuvem e CDN** | Onde o serviço roda | Podem cortar a hospedagem; falham em conjunto |
| **Lojas de aplicativos e sistemas de push** | Quais apps instalam e como notificações chegam | Podem remover apps; o push de celular passa por infraestrutura do fabricante do sistema |
| **Plataformas de identidade (telefone, e-mail, conta)** | Quem você "é" no serviço | Podem encerrar a conta; a identidade não é sua |

Este quadro é o mapa do que o restante do módulo tenta substituir, um ponto por vez: identidade por chave própria (Aula 5), endereço por hash de chave em vez de DNS (Módulo 10, Aula 2), roteamento por announces em vez de provedor (Módulo 10, Aula 3), transporte por rádio em vez de ISP (Módulos 8 e 9).

## Por que "só descentralizar" não é a resposta automática

Se centralização é resultado de forças econômicas, tentar revertê-la sem atacar as forças falha. Uma rede descentralizada também precisa: (a) atrair quem tenha os contatos, (b) custar pouco de operar, (c) funcionar atrás de NAT e com pouco upload, (d) ser fácil de usar. A Aula 9 volta com isso. O que muda para **um grupo pequeno e conhecido** (uma família, uma comunidade) é que o efeito de rede não pesa: os contatos são poucos e você os convence pessoalmente.

## Resumo

- A centralização vem de **economia de escala** (custo fixo alto, marginal baixo), **efeito de rede** (o valor cresce com o número de usuários, `n x (n - 1) / 2` pares) e **nuvem/CDN/plataformas** (concentração de infraestrutura e de regras).
- Exemplo documentado: a falha da AWS US-EAST-1 em 19 e 20 de outubro de 2025 partiu de um erro no DNS interno do DynamoDB e afetou muitos serviços dependentes.
- **NAT, CGNAT e banda assimétrica** tornam difícil servir de casa; por isso quase tudo alcançável mora no servidor de terceiros (RFC 2775, RFC 6598).
- Diferencie **SPOF** (disponibilidade) de **SPOC** (poder de decisão): DNS, CAs, ISPs, nuvem, lojas de apps e plataformas de identidade são pontos de controle.
- Rede de rádio local não tem NAT nem ISP entre os nós, e um grupo pequeno escapa do efeito de rede.

## Para aprofundar

- [ ] [RFC 2775: Internet Transparency](https://www.rfc-editor.org/rfc/rfc2775) (B. Carpenter, IAB/IBM, 2000): a análise original da perda de transparência ponta a ponta (NAT, firewalls, proxies, DNS dividido).
- [ ] [RFC 6598: IANA-Reserved IPv4 Prefix for Shared Address Space](https://www.rfc-editor.org/rfc/rfc6598) (IETF, 2012): o bloco reservado para NAT de operadora; a introdução explica o porquê.
- [ ] [AWS Post-Event Summaries](https://aws.amazon.com/premiumsupport/technology/pes/) (AWS): índice de relatórios oficiais de falhas, incluindo o resumo de 19 de outubro de 2025 (DynamoDB, US-EAST-1); bom exemplo de como uma dependência escondida derruba muita coisa.
- [ ] [The 7 Levels of Who REALLY Controls the Internet](https://www.youtube.com/watch?v=-9ia8ZrtP_4) (Tech in a Teacup): vídeo que, pelo título, organiza em camadas os pontos de controle; título e canal confirmados, não assisti, e não afirmo o conteúdo específico.

[Próxima aula: Centralizado, descentralizado, distribuído, federado e P2P](./03%20-%20Centralizado%20Descentralizado%20Distribuido%20Federado%20e%20P2P.md)
