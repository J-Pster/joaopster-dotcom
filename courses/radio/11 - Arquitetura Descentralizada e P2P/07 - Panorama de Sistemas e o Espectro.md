# Aula 7: Panorama de sistemas e o espectro entre centralizado e P2P

[Voltar ao módulo](./README.md)

*Pergunta que esta aula responde: onde cada sistema conhecido (Tor, I2P, Yggdrasil, Secure Scuttlebutt, Bluesky, Nostr, Matrix, Briar, Delta Chat, Session, Signal, Reticulum) se encaixa entre "centralizado" e "P2P verdadeiro", e o que cada um resolve e deixa em aberto?*

Regras desta aula: descrevo cada sistema pelo que a documentação oficial dele diz, e digo quando **não confirmei** algo. Estado de manutenção, versões e adoção mudam; a data de referência é setembro de 2026. Use as três perguntas da Aula 3 (quem pode me desligar, o que sobra se o operador sumir, quem vê os metadados) e a Aula 5 (o que a cifra não cobre) para ler cada entrada.

## Duas famílias que confundem: anonimato versus arquitetura

Antes do panorama, uma separação. Há dois problemas diferentes:

1. **Onde mora a infraestrutura e quem manda nela** (centralizado, federado, P2P). Aulas 2 e 3.
2. **Quem consegue ver quem fala com quem** (anonimato de rede). Aula 5, metadados.

Tor e I2P atacam o segundo problema; Signal e Matrix, o primeiro; Session e Briar, os dois de formas diferentes.

## Redes de anonimato: Tor e I2P

**Tor.** O artigo de projeto (Dingledine, Mathewson e Syverson, USENIX Security 2004) descreve o Tor como um serviço de comunicação anônima **de baixa latência e baseado em circuitos**, com sigilo futuro, controle de congestionamento, **servidores de diretório**, verificação de integridade, políticas de saída configuráveis e **serviços de localização oculta** por meio de pontos de encontro. Mecanismo: o cliente monta um circuito de vários retransmissores voluntários; a mensagem é cifrada em camadas, uma para cada retransmissor (**roteamento cebola**), e cada retransmissor só consegue remover a sua camada, então só conhece o vizinho anterior e o seguinte. Nenhum ponto vê origem e destino ao mesmo tempo. O diretório é, portanto, uma **autoridade parcialmente centralizada** (a lista de retransmissores é publicada por servidores de diretório). Tor esconde **de quem vem** a conexão do site de destino; **não** oculta o conteúdo dentro do site de destino (que é como qualquer outro) e é desenhado para adversários que observam **parte** da rede; o artigo original discute os limites contra adversários que observam entrada e saída ao mesmo tempo (correlação de tráfego), tema em aberto.

**I2P.** O guia técnico oficial descreve **túneis**: um caminho direcional por uma lista de roteadores escolhida explicitamente, com criptografia em camadas. Ao contrário do Tor, os túneis são **unidirecionais**: para conversar, o remetente usa um túnel de saída e o destinatário um túnel de entrada; ida e volta exigem quatro túneis no total. Um **banco de dados de rede** (netDb) distribuído guarda informações de roteadores e "leaseSets" (onde alcançar um destino). Mensagens são embrulhadas em "**garlic messages**" (mensagens de alho, uma extensão da cebola que agrupa várias mensagens, "dentes", em uma). O I2P é desenhado principalmente para serviços **dentro** da própria rede (sites e serviços "escondidos"), enquanto o uso mais comum do Tor é acessar a internet aberta. O Reticulum pode usar interface I2P para ocultar IPs (Módulo 10, Aula 5).

Ambos rodam **sobre a internet** (são redes sobrepostas, *overlays*) e por isso dependem de IP e provedor, e não resolvem "sem infraestrutura".

## Redes sobrepostas de endereçamento: Yggdrasil e cjdns

**Yggdrasil.** A página oficial o descreve como um **roteador de software experimental** e protocolo para construir redes de múltiplos saltos "sem esforço". Características, da documentação: cada nó é um roteador; nós se ligam por **peerings** (conexões) sobre qualquer rede IP (cabo, Wi-Fi, LAN ou internet), e nós vizinhos na mesma rede se descobrem por multicast; a identidade é um par de chaves criptográficas, e um endereço IPv6 estável é **derivado da chave**; o endereço acompanha o nó quando ele se move. O roteamento usa uma **árvore geradora global** (cada nó ganha uma coordenada em relação a uma raiz eleita) e uma **DHT** para achar a coordenada de um nó cuja chave se conhece; o encaminhamento é "guloso", só com conhecimento local. **Todo tráfego é cifrado ponta a ponta.** Ponto de atenção: a página oficial classifica o projeto como **experimental, "de nível alfa"**, cujo objetivo primário nesse estágio é testar a escalabilidade do esquema de roteamento. E os nós **nunca** estabelecem novos peerings remotos automaticamente (não há troca de pares por desenho); você precisa combinar os enlaces. É uma boa referência do que uma rede IP de malha sem centro pode ser, mas não o trate como produto estável (o Módulo 9, Aula 7, já o mencionou).

**cjdns.** É um projeto de propósito parecido (endereço IPv6 derivado de chave, roteamento sem autoridade central). **Não pesquisei o cjdns a fundo**; mencione-o como alternativa a examinar, com o mesmo cuidado de maturidade.

## Sincronização social sem servidor: Secure Scuttlebutt

O Secure Scuttlebutt (SSB) é um "banco de dados para feeds de mensagens **anexáveis e infalsificáveis**". O guia do protocolo explica: cada identidade tem **um feed**, uma lista de mensagens assinadas pela chave da identidade; o feed é um *log* de **apenas acrescentar** (uma mensagem publicada não muda), e cada mensagem referencia o ID da anterior, formando uma cadeia. Como a replicação é simples ("peça tudo o que é mais novo do que a última que você tem"), os pares trocam feeds por **fofoca** (*gossip*): você segue identidades e seus aparelhos replicam os feeds das pessoas que você segue **e** os das pessoas que elas seguem, de modo que mensagens viajam por conexões transitivas sem conexão direta entre autor e leitor. Para sincronizar pela internet, "**pubs**" (nós com IP público) seguem pessoas e funcionam como "robôs de correio" que melhoram a disponibilidade; qualquer um pode criar um pub, e os usuários geram convites para os apresentar. O modelo é um dos precursores de tudo o que se chama hoje de "local-first" (Aula 8) e serve para **redes intermitentes**. **Não confirmei o estado atual de manutenção do projeto**; verifique antes de adotar.

## Federados sociais: Matrix, ActivityPub e Bluesky

- **Matrix** (Aula 3): federação de servidores com salas replicadas, grafo de eventos e verificação de permissões por todos os servidores. Cada usuário tem servidor-lar; os servidores veem metadados (quem está em quais salas). Existe criptografia de ponta a ponta em salas; confira nas configurações da sua sala, que eu não verifiquei.
- **ActivityPub / Mastodon** (Aula 3): federação de servidores, atores com `inbox` e `outbox`. O padrão não define cifra de ponta a ponta; o **administrador da sua instância** vê o que você envia por mensagem direta.
- **AT Protocol / Bluesky.** A documentação oficial é franca: "a AT Protocol tem uma arquitetura de rede **federada**, o que significa que os dados da conta ficam em servidores hospedeiros, **em oposição a um modelo P2P entre dispositivos finais**. A federação foi escolhida para garantir que a rede seja conveniente e sempre disponível." Os componentes: **PDS** (*Personal Data Server*, sua casa na nuvem: guarda seus dados, gerencia identidade), **Relay** (junta as atualizações de muitos PDSs em um fluxo único, o "firehose") e **App View** (monta feeds, contagens, busca). A identidade é um **DID** permanente, mais um *handle* legível (um nome de domínio); os dados ficam em repositórios assinados. A promessa central é **portabilidade de conta**: o usuário migra de PDS sem a colaboração do PDS antigo, guardando uma chave de rotação. Duas observações do próprio material oficial, que ajudam a calibrar: (1) o diretório do DID padrão, o `did:plc`, é hoje "um serviço **centralizado**" (`plc.directory`), operado pela Bluesky Social PBC, com um plano declarado de migrar para um consórcio de operadores independentes; a confiança nele é limitada porque não pode alterar identidades sem operação assinada pelo usuário; (2) o relay e o app view da Bluesky Social PBC são os mais usados, e há outros operadores possíveis. Ou seja: **federado, com portabilidade real de conta, com componentes ainda muito concentrados**. Bom exemplo de como a arquitetura permite descentralizar mais do que a prática atual faz.

## Sistemas com relays simples: Nostr

O NIP-01 (protocolo básico do Nostr) define: cada usuário tem um **par de chaves** (assinaturas Schnorr sobre a curva secp256k1); o único objeto é o **evento** (JSON com `id`, `pubkey`, `created_at`, `kind`, `tags`, `content` e `sig`); o `id` é o hash SHA-256 do evento serializado e `sig` é a assinatura. Os **relays** são servidores simples que expõem um endpoint WebSocket: clientes enviam eventos (`EVENT`), pedem eventos por filtro (`REQ`) e recebem novos em tempo real. A identidade é a chave pública; **um relay não é dono do seu perfil**, pois você pode publicar o mesmo evento assinado em vários relays. Resistência à censura vem daí: se um relay bloqueia, você usa outro. Pontos de atenção: o NIP-01 sozinho não cifra nada (conteúdo é público, salvo outros NIPs que não avaliei); relays veem os IPs dos clientes; a qualidade e a persistência dependem de o relay querer guardar os seus eventos; e o modelo não tem moderação além da escolha de relays e de filtros do cliente.

## Mensageiros: Signal, Session, Briar e Delta Chat

| | **Signal** | **Session** | **Briar** | **Delta Chat** |
|---|---|---|---|---|
| **Modelo** | **Centralizado** com cifra de ponta a ponta | Descentralizado (rede de nós de serviço) com roteamento cebola | **P2P**, sem servidor central | **Federado sobre e-mail** |
| **Como funciona** | Servidor do Signal entrega mensagens cifradas; sem armazenar contatos ou grafo social (blog de 2018) | Onion routing por padrão, IDs de conta aleatórios (sem telefone ou e-mail), mensagens offline guardadas por "swarms" de nós (documentação) | Mensagens sincronizadas diretamente entre dispositivos por Bluetooth, Wi-Fi ou Tor (site do projeto) | Mensagens são e-mails formatados; os servidores de e-mail (ou "chatmail") só transportam mensagem cifrada; o perfil fica no aparelho (site do projeto) |
| **Identidade** | Chave por conta; cadastro exige identificador ligado ao serviço (o blog de 2018 fala em número de telefone no certificado do remetente; confira a política atual) | Account ID (chave), sem telefone | Chave, contato adicionado **em pessoa** por QR | Chave OpenPGP (Autocrypt/TOFU), com verificação por QR (SecureJoin) |
| **Quem vê metadados** | O servidor vê destino, horário, IP (Aula 5) | Nós da rede, mas o caminho cebola separa origem e destino | Tor esconde quem fala com quem pela internet; contatos ficam cifrados no aparelho | O servidor de e-mail vê remetente, destinatário, horário |
| **Sem internet?** | Não | Não | **Sim**: Bluetooth e Wi-Fi local (documentação) | Precisa de um servidor de e-mail alcançável; o site diz que o contato seguro por QR funciona em redes de malha isoladas |
| **Ponto de atenção** | Um operador central; ponto de desligamento | Projeto **sofreu uma pausa de desenvolvimento por falta de recursos** em 2026, retomada "de alguma forma" (capacidade reduzida) depois de uma campanha de doações (comunicado de 15 de junho de 2026); a doc lista a versão 2 do protocolo, em desenvolvimento, para "reimplementar" sigilo futuro | Adicionar contato exige encontro presencial (QR) | A análise do USENIX 2024 diz que o Delta Chat não oferece sigilo futuro nem segurança pós-comprometimento; o projeto corrigiu os ataques descritos |

Sobre o Session: a data e o conteúdo vêm do comunicado "The Future of Session" no site do projeto e da documentação; o comunicado é um exemplo concreto de **risco de sustentabilidade** de projetos descentralizados (Aula 9): a rede pode continuar sem a fundação, mas atualizações, lojas de aplicativos e parte da infraestrutura dependem de quem financia o desenvolvimento.

## Reticulum e Meshtastic no mesmo mapa

O **Reticulum** (Módulo 10) é P2P distribuído: endereço por hash de chave, sem servidor, roteamento por announces, cifra embutida, com rádio e IP como meios; roda no computador do usuário. O **Meshtastic** (Módulo 9) é uma mesh de LoRa por inundação gerenciada, em que a pilha roda no rádio. Ambos dependem de nós vizinhos, não de operador. O Reticulum é mantido essencialmente por uma pessoa (Módulo 10, Aula 9), e essa é a mesma classe de risco de sustentabilidade do Session e do SSB.

## O espectro

Em uma escala de "quanto depende de um operador central" para "quanto o nó decide sozinho":

```
CENTRALIZADO -------- FEDERADO ---------- OVERLAYS/ANONIMATO ------ P2P/LOCAL
Signal    Matrix   e-mail   Mastodon    Tor  I2P   Session    Yggdrasil  SSB
WhatsApp  Bluesky  Nostr                                       Briar  Reticulum
                                                                Meshtastic
   ^ operador manda        ^ vários donos       ^ voluntários      ^ cada nó manda
   ^ precisa de internet   ^ precisa de internet                    ^ pode funcionar sem
```

Duas leituras importantes:

1. **Quanto mais à direita, mais responsabilidade e menos conveniência para você.** Cada passo que tira um operador do meio coloca uma tarefa sua no lugar (guardar chaves, manter nós, combinar contatos, fazer backup).
2. **A posição não diz nada sobre segurança.** Um sistema P2P sem auditoria pode ser pior que um centralizado bem operado. Escolha pelo modelo de ameaça (Aula 5).

Um argumento de projeto: **nada exige escolher um só**. A Aula 9 e a Aula 10 propõem um desenho híbrido: mensageiro convencional (Signal) para o dia a dia com o mundo, e uma rede própria (Reticulum sobre LoRa) para continuidade e soberania em família.

## Resumo

- **Tor e I2P** resolvem **anonimato de rede** (quem fala com quem); rodam sobre a internet e dependem de provedor. Tor: circuitos de roteamento cebola com diretórios; I2P: túneis unidirecionais e netDb.
- **Yggdrasil** (experimental, "alfa" segundo o projeto): rede IPv6 sobreposta com identidade por chave, árvore geradora e DHT, cifrada ponta a ponta; **SSB**: feeds assinados só de acréscimo, replicação por fofoca (estado de manutenção não confirmado).
- **Federados**: Matrix, ActivityPub/Mastodon e AT Protocol/Bluesky. O Bluesky se declara federado (não P2P) e tem portabilidade real de conta, mas o diretório de identidades padrão e os componentes principais ainda são muito concentrados.
- **Nostr**: chaves, eventos assinados e relays simples; resistência à censura por publicar em vários relays; nada no protocolo básico cifra.
- **Mensageiros**: Signal (centralizado, cifra de ponta a ponta), Session (cebola, sem telefone; pausa por falta de fundos em 2026), Briar (P2P, sem internet, contato em pessoa), Delta Chat (e-mail com cifra opcional e TOFU/QR).
- Nada aqui garante segurança pelo posicionamento; escolha pelo modelo de ameaça, e combine.

## Para aprofundar

- [ ] [Tor: The Second-Generation Onion Router](https://www.usenix.org/conference/13th-usenix-security-symposium/tor-second-generation-onion-router) (USENIX Security 2004): o artigo de projeto do Tor, com o modelo de ameaça e os problemas em aberto.
- [ ] [I2P: A Scalable Framework for Anonymous Communication](https://i2p.net/en/docs/overview/intro/) (documentação do I2P): túneis, netDb e criptografia "garlic" com diagramas.
- [ ] [Protocol Overview](https://atproto.com/guides/overview) (AT Protocol): visão oficial de identidade (DID), PDS, relays e app views; leia junto com o [artigo no arXiv sobre o Bluesky e o AT Protocol](https://arxiv.org/abs/2402.03239) (usabilidade da descentralização).
- [ ] [NIP-01: Basic protocol flow description](https://nips.nostr.com/1) (Nostr): a especificação do protocolo básico, com o formato do evento e as mensagens cliente-relay.
- [ ] Referências usadas no texto: [Scuttlebutt Protocol Guide](https://ssbc.github.io/scuttlebutt-protocol-guide/), [About Yggdrasil](https://yggdrasil-network.github.io/about.html), [Briar: How it works](https://briarproject.org/how-it-works/), [Delta Chat: instant onboarding](https://delta.chat/en/2024-05-31-instant-onboarding), [Session: The Future of Session](https://getsession.org/the-future-of-session).

[Próxima aula: Mensagens que chegam depois: DTN, sincronização e CRDTs](./08%20-%20DTN%20Sincronizacao%20e%20CRDTs.md)
