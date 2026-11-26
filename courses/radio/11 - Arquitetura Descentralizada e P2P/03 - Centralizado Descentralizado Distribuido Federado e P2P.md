# Aula 3: Centralizado, descentralizado, distribuído, federado e P2P

[Voltar ao módulo](./README.md)

*Pergunta que esta aula responde: o que cada um desses cinco termos significa de forma precisa, por que "descentralizado" é a palavra mais mal usada do assunto, e como classificar qualquer sistema com três perguntas objetivas?*

Sem vocabulário exato, todo debate sobre "redes descentralizadas" vira slogan. Esta aula fixa os termos. O ponto de partida é o memorando de Baran (Aula 1), que usa "centralizada", "descentralizada" e "distribuída" com sentido técnico próprio; depois vêm os dois conceitos que a internet social criou depois: **federação** e **P2P**.

## A taxonomia de Baran, com diagramas

Baran (1964) descreve as redes como combinações de dois componentes: **estrela** e **grade/malha**. Ele diz textualmente que a rede *hierárquica* (estrelas ligadas em uma estrela maior, às vezes com um enlace extra formando um laço) "é às vezes chamada de descentralizada, porque a dependência completa de um único ponto nem sempre é necessária". O diagrama, em texto:

```
(a) CENTRALIZADA          (b) DESCENTRALIZADA          (c) DISTRIBUÍDA
      (estrela)          (estrelas ligadas entre si)          (malha)

   o   o   o                o   o       o   o             o---o---o---o
    \  |  /                  \ /         \ /              |\ /|\ /|\ /|
     \ | /                    H-----------H               o-o-o-o-o-o-o
       C                     / \         / \              |/ \|/ \|/ \|
     / | \                  o   o       o   o             o---o---o---o
    /  |  \
   o   o   o          (H = "hub": nó com vários vizinhos)   (nenhum nó é essencial)
```

- **(a) Centralizada**: todo tráfego passa pelo nó central `C`. Se `C` cai, ninguém fala com ninguém. Exemplo: um serviço de mensagens com um único servidor.
- **(b) Descentralizada** (no sentido de Baran): vários hubs `H`, cada um servindo um grupo, com enlaces entre os hubs. Perder um hub isola só o seu grupo, mas perder poucos hubs bem escolhidos divide a rede. A internet é assim no nível dos provedores, e o DNS também (Aula 1).
- **(c) Distribuída**: cada nó liga-se a alguns vizinhos; não há hub. Há muitos caminhos entre quaisquer dois nós, e a rede sobrevive à perda de muitos nós (Baran: redundância 3 a 4).

Um alerta sobre uso: hoje "descentralizado" é usado para (b) e (c) indistintamente, e muitas vezes para coisas que são (a) com marketing. Nesta trilha, "distribuído" significa (c) e "descentralizado" significa (b), salvo aviso.

## Três eixos para não se enganar

Um sistema pode ser distribuído em um eixo e centralizado em outro. Uma lente útil (não é de Baran; é uma forma prática de separar as perguntas):

| Eixo | A pergunta | Exemplo que confunde |
|---|---|---|
| **Arquitetura** | Quantas máquinas físicas rodam o sistema, e o que acontece se a maioria cair? | Um serviço em 200 servidores de uma nuvem só é distribuído, mas depende do mesmo provedor |
| **Política (controle)** | Quantas entidades independentes controlam o sistema? Quem pode expulsar quem? | Uma rede social com 1 milhão de servidores, todos da mesma empresa, é centralizada politicamente |
| **Lógico (estado)** | Existe uma única visão do estado (um só banco, um só "relógio")? Ou cada nó tem sua cópia e elas convergem? | Um banco de dados replicado em vários países ainda tem uma única verdade lógica |

As duas palestras de Andreas Antonopoulos do README antigo tratam justamente dessa distinção entre arquitetura, poder e confiança; use-as como reforço, sem que este texto dependa delas.

## Duas perguntas que dispensam o rótulo

Diante de qualquer sistema, responda:

1. **Quem pode me desligar?** (SPOC, Aula 2): se a resposta é "uma empresa/administrador", o sistema é centralizado *para você*, mesmo que use protocolo aberto.
2. **Se o operador X sumir amanhã, o que continua funcionando?** (SPOF): responde "nada", "só o que já tenho", ou "tudo, com outros nós".

Uma terceira, útil para privacidade (Aula 5): **quem vê os metadados** (quem fala com quem, quando)?

## Federado

Um sistema **federado** é feito de **muitos servidores independentes que falam um protocolo comum**. Você tem conta em um servidor (seu "lar"), e esse servidor conversa com os outros em seu nome. Não há servidor central; há muitos centros, cada um com um dono.

O caso original é o **e-mail**: `voce@exemplo.com` fica no servidor de `exemplo.com`; ao enviar para `outra@empresa.org`, seu servidor entrega ao servidor de `empresa.org` pelo protocolo SMTP. Qualquer um pode montar um servidor de e-mail e trocar mensagens com todos os outros.

Os exemplos que interessam ao módulo:

- **Matrix**: mensagens em **salas**. A documentação oficial descreve: uma sala é uma sequência de eventos JSON; cada servidor cujos usuários participam da sala guarda **uma cópia** dela; os servidores (*homeservers*) se sincronizam pela API de federação sobre HTTPS, com autenticação por assinatura de chave pública. Os eventos formam um **grafo acíclico dirigido** em que cada evento aponta para os anteriores; quando duas mensagens são enviadas ao mesmo tempo, o histórico se bifurca e depois se reúne quando alguém responde às duas. É uma solução para o problema de consistência da Aula 8. O que impede um administrador de servidor de assumir uma sala? Os **níveis de poder** (*power levels*), verificados por todos os servidores: alterar a cópia local não propaga, porque os outros servidores rejeitam o evento.
- **ActivityPub / Mastodon**: padrão do W3C (Recomendação de 23 de janeiro de 2018) para redes sociais federadas. Cada usuário é um **ator** com uma `inbox` (caixa de entrada) e uma `outbox` (caixa de saída), que são URLs. Para mandar algo a alguém de outro servidor, seu servidor faz um HTTP POST na `inbox` do destinatário. O padrão define a entrega, não a cifra: nada nele cifra mensagens diretas de ponta a ponta.
- **XMPP** (protocolo federado de mensagens instantâneas, antigo e ainda usado): não pesquisei nesta trilha; cito só como mais um exemplo do mesmo modelo.
- **AT Protocol (Bluesky)**: descrito pelos próprios autores como **federado**, com identidade portátil. Aula 7.

O que a federação resolve e o que não resolve:

| Resolve | Não resolve |
|---|---|
| Nenhum dono único: se um servidor sai do ar, os outros continuam | **Você ainda tem um servidor-lar**: se o seu cai ou o admin encerra sua conta, você perde acesso (a menos que haja portabilidade real de conta) |
| Escolha: você pode trocar de provedor ou rodar o seu | O administrador do seu servidor vê os **metadados** e, se não há cifra de ponta a ponta, o conteúdo |
| Interoperabilidade: um protocolo, muitos clientes | Servidores grandes concentram usuários e acabam ditando regras (o efeito de rede da Aula 2 age de novo) |
| | Precisa de **infraestrutura da internet** funcionando: DNS, certificados, IP público |

Ou seja, federação **reduz** o poder de cada centro e **aumenta** a escolha, mas continua sendo o modelo (b) de Baran: hierárquico, com centros.

## Peer-to-peer verdadeiro

Em uma rede **peer-to-peer** (P2P, "entre pares"), **todo nó é ao mesmo tempo cliente e servidor**, e a identidade e o endereço não dependem de um servidor que os conceda. Nenhum nó tem papel privilegiado em princípio (na prática, alguns pares mais bem conectados assumem funções, como os *super-nós*, e vários sistemas P2P dependem de servidores de arranque, os *bootstrap nodes*, para o primeiro contato).

Teste prático: **existe algum servidor sem o qual eu não consigo nem falar com alguém que está ao meu lado?** Em um P2P real, a resposta é não (com a ressalva do primeiro contato). O Briar (Aula 7) sincroniza mensagens diretamente entre dispositivos por Bluetooth, Wi-Fi ou, quando há internet, pela rede Tor; o Reticulum (Módulo 10) leva o princípio a rádio.

O P2P tem também um custo estrutural, que a Aula 9 detalha: sem servidor, não há quem guarde mensagens para quem está desligado (isso pede *store-and-forward*, Aula 8), quem conheça todos os usuários (descoberta), nem quem modere.

## Tabela de referência

| Modelo | Forma de Baran | Quem tem poder | O que cai se um nó cai | Exemplos |
|---|---|---|---|---|
| **Centralizado** | (a) | Um operador | Tudo | Signal (o serviço de mensagens é um só; a cifra é de ponta a ponta), WhatsApp, a maioria dos apps |
| **Federado** | (b) | Cada operador, sobre seus usuários | Os usuários daquele servidor | E-mail, Matrix, Mastodon, XMPP, Bluesky (em parte) |
| **P2P / distribuído** | (c) | Cada par, sobre si | Só aquele par | BitTorrent, Briar, Reticulum, Yggdrasil |
| **Híbrido** | mistura | Depende | Depende | A maioria dos sistemas reais: P2P para dados, servidor para descoberta, por exemplo |

Um cuidado com "Signal (centralizado com criptografia)": centralização e criptografia de ponta a ponta são **ortogonais**. O Signal é centralizado quanto a quem opera o serviço e como se descobre contatos; a criptografia impede que o operador leia o conteúdo, mas ele ainda opera o ponto de entrega (a Aula 5 detalha o que fica visível).

## Onde a trilha se encaixa

O curso até aqui construiu, de baixo para cima, uma pilha **distribuída**: rádio LoRa sem infraestrutura (Módulo 8), roteamento em malha (Módulo 9), e o Reticulum, que dá endereço por chave pública e roteamento por announces, sem servidor e sem DNS (Módulo 10). Nessa arquitetura, as perguntas acima têm resposta: ninguém pode me desligar (a rede é minha e dos vizinhos), se um nó cai a malha reencaminha, e os metadados vazam para quem escuta o rádio (Módulo 10, Aula 8), não para uma empresa.

## Resumo

- Baran: **centralizada** (estrela, um nó essencial), **descentralizada** (estrelas ligadas, hierarquia) e **distribuída** (malha, nenhum nó essencial).
- Separe três eixos: **arquitetura** (máquinas), **política** (quem controla) e **lógico** (uma verdade ou cópias que convergem). Um sistema pode ser distribuído em um e centralizado em outro.
- Perguntas de teste: quem pode me desligar? O que continua se o operador sumir? Quem vê os metadados?
- **Federado** (e-mail, Matrix, ActivityPub): muitos servidores independentes com protocolo comum; você tem um servidor-lar. Reduz o poder de cada centro, mas mantém a hierarquia.
- **P2P verdadeiro**: cada nó é cliente e servidor, identidade própria, sem servidor obrigatório (exceto arranque). Custo: sem servidor, ninguém guarda mensagens, descobre usuários ou modera.
- Centralização e criptografia de ponta a ponta são independentes: o Signal é centralizado e cifrado.

## Para aprofundar

- [ ] [On Distributed Communications](https://www.rand.org/pubs/research_memoranda/RM3420.html) (Paul Baran, RAND): a Figura 1 original, com os três tipos de rede.
- [ ] [ActivityPub](https://www.w3.org/TR/activitypub/) (W3C Recommendation): a especificação de federação social; a seção "Overview" explica atores, `inbox` e `outbox` em poucos parágrafos.
- [ ] [Elements of Matrix](https://matrix.org/docs/matrix-concepts/elements-of-matrix/) (Matrix.org): explicação oficial de homeservers, salas replicadas e do grafo de eventos, com o exemplo de mensagens simultâneas.
- [ ] [Decentralization and the Architecture of Power](https://www.youtube.com/watch?v=QlYgNH2t43U) (aantonop) e [Decentralization and the Architecture of Trust](https://www.youtube.com/watch?v=wSRN8PUhHX0) (aantonop): duas palestras de Andreas Antonopoulos sobre o tema, do README antigo do módulo; títulos e canal confirmados, não assisti. O autor é ligado a Bitcoin, então o exemplo dominante pode ser cripto.

[Próxima aula: Resiliência, censura e redes de emergência](./04%20-%20Resiliencia%20Censura%20e%20Redes%20de%20Emergencia.md)
