[Voltar ao módulo](./README.md)

# Aula 2: Destinos, identidades e criptografia

*Pergunta que esta aula responde: se não há endereços atribuídos por ninguém, como um pacote sabe para quem vai, como só o destinatário consegue lê-lo, e o que "anonimato" significa (e não significa) aqui?*

> Verificado em setembro de 2026 no manual oficial (capítulos *Understanding Reticulum* e *Building Networks*) e no código-fonte da versão 1.5.4 (`RNS/Identity.py`, `RNS/Destination.py`, `RNS/Cryptography/Token.py`). Onde o manual e o código divergem ou onde não confirmei algo, digo.

## Por que o endereço vira um hash de chave

Na Aula 1 você viu que uma rede sem autoridade central não pode ter alguém distribuindo endereços. Se cada nó inventasse um endereço curto e aleatório, dois nós poderiam escolher o mesmo, e ninguém provaria que "o nó X é dono do endereço X". A saída é usar como endereço um valor **derivado de uma chave pública**:

- Ninguém precisa alocar nada: qualquer nó gera seu par de chaves sozinho.
- O endereço é **autenticado por construção**: só quem tem a chave privada correspondente consegue provar que é o dono, e só ele consegue decifrar o que chega.
- É **portátil**: o endereço não depende de onde você está, só da chave (o "Death to the Address" do Zen, Aula 1).

Isso é o que o manual chama de **endereçamento sem coordenação** e é a base de tudo o que vem depois.

## Identidades

Uma **identidade** (*Identity*) é um conjunto de chaves que representa qualquer entidade verificável: uma pessoa, um sensor, um programa. O manual enfatiza que ela **não representa necessariamente uma pessoa**.

Uma identidade Reticulum contém **dois pares de chaves de 256 bits cada, somando 512 bits**:

- um par **X25519** (troca de chaves ECDH, para cifrar);
- um par **Ed25519** (assinaturas).

A chave pública completa tem **64 bytes** (32 + 32). O **hash da identidade** é o SHA-256 dessa chave pública truncado a **16 bytes** (128 bits). No código, `Identity.hash = truncated_hash(public_key)`.

**Guarde a chave privada com cuidado.** O manual: obter as chaves da identidade equivale a obter o controle da alcançabilidade de todos os destinos criados por ela. Perdeu o arquivo da identidade, perdeu o endereço; vazou, alguém pode se passar por você. Não há "recuperar senha", porque não há servidor que saiba de você.

## Destinos e a regra de nomes com aspects

Uma identidade não recebe dados diretamente. Ela cria **destinos** (*Destinations*), e é a um destino que você envia. O Reticulum abandonou os conceitos de endereço e porta do IP: existe só o destino.

Todo destino tem um **nome hierárquico** em notação com pontos: um **nome de aplicação** e uma sequência de **aspects**. Exemplo do manual:

```
app name  : environmentlogger
aspects   : remotesensor, temperature
full name : environmentlogger.remotesensor.temperature
```

O nome serve para o **programa** filtrar o que recebe (ex.: `lxmf.delivery` é o destino de entrega de mensagens do LXMF, Aula 7). Não identifica ninguém. A identidade é o que torna o destino único.

### Como o hash do destino é calculado

Lendo `Destination.hash` no código-fonte da versão 1.5.4:

```
name_hash        = SHA-256("app.aspect1.aspect2")   truncado a 10 bytes (80 bits)
identity_hash    = SHA-256(chave pública 64 bytes)  truncado a 16 bytes
destination_hash = SHA-256(name_hash + identity_hash) truncado a 16 bytes
```

O manual descreve isso como "o Reticulum adiciona a chave pública ao nome antes de fazer o hash", uma forma simplificada da mesma ideia. Resultado: o destino é o **hash de 16 bytes** que você vê em hexadecimal, 32 caracteres, como `<13425ec15b621c1d928589718000d814>` (exemplo do manual).

Duas consequências importantes, ambas do manual:

1. **Qualquer um pode usar o mesmo nome** `environmentlogger.remotesensor.temperature`. Cada destino que o fizer terá hash diferente, porque as chaves públicas diferem. Por isso, não coloque em aspects nada que identifique um indivíduo: o que unifica é a chave.
2. **Uma identidade pode criar quantos destinos quiser.** Uma pessoa pode ter um destino de mensagens, um de arquivos e um de telemetria, todos derivados das mesmas chaves.

### Quanto espaço de endereços dá 128 bits?

`2^128` é cerca de `3,4 x 10^38` endereços. Pelo paradoxo do aniversário, a chance de haver *qualquer* colisão só passa de 50% com cerca de `2^64` (aproximadamente `1,8 x 10^19`) destinos ativos. O manual justifica os 16 bytes como compromisso entre espaço de endereços e sobrecarga de pacote ("essencial em redes de baixa banda") e diz que uma mudança de uma linha de código levaria o espaço a 256 bits, se um dia fosse preciso.

Compare com o IPv4 (32 bits, `4,3 x 10^9`) e IPv6 (128 bits, mas atribuído hierarquicamente): o espaço do Reticulum é do tamanho do IPv6 e sem alocação.

### Tipos de destino

| Tipo | Cifrado? | Multi-hop? | Para que serve |
|---|---|---|---|
| **Single** | Sim, por pacote (chave efêmera) | Sim | O padrão. Comunicação privada com um ponto. Identificado por chave pública |
| **Group** | Sim, com chave simétrica compartilhada (AES-256) | Só "indiretamente" (o manual diz que o multi-hop de grupo ainda é planejado) | Vários participantes com a mesma chave |
| **Plain** | **Não** | **Não**: só alcance direto, nunca retransmitido | Difusão local pública (descoberta local). O manual explica: para ser transportado em vários saltos, o pacote **precisa** ser cifrado, porque a criptografia é usada para verificar e manter rotas vivas |
| **Link** | Sim, chave efêmera com sigilo futuro | Sim | Canal abstrato para uma sessão (Aula 4) |

O manual recomenda usar **Single**, salvo necessidade estrita. Guarde o comportamento do Plain: ele será central na discussão de rádio amador (Aula 8).

## Como se descobre a chave pública de um destino

Para cifrar para um destino Single, o remetente precisa da chave pública dele. Duas formas, ambas do manual:

- **Announce** (Aula 3): o dono do destino transmite um pacote com hash, chave pública, dados opcionais da aplicação e uma **assinatura Ed25519** de tudo isso. Quem o recebe monta um destino de saída e passa a poder cifrar para ele.
- **Pedido à rede**: como todos os transport nodes funcionam como um "livro-razão distribuído de chaves públicas" (guardam o que ouviram em announces), um nó pode pedir a chave que falta conhecendo só o hash do destino. A ferramenta `rnid` faz isso com `-R` (Aula 6).

O que a assinatura do announce prova é que **quem anunciou possui a chave privada** correspondente àquele hash. **Não prova quem é a pessoa no mundo real.** Se você quer ter certeza de que o hash `<83b7...>` é do seu amigo, precisa confirmar por outro canal (pessoalmente, QR code, ligação). O Zen chama isso de "aperto de mão fora de banda". Não há CA para garantir por você.

## A criptografia, primitiva por primitiva

O manual e a página oficial de primitivas (reticulum.network/crypto.html) listam o conjunto abaixo e dizem que ele é **autoritativo**: "qualquer coisa que se diga Reticulum mas não use exatamente essas primitivas não é Reticulum".

| Primitiva | Uso | Por que existe |
|---|---|---|
| **X25519** (ECDH sobre a Curve25519) | Troca de chaves | Duas partes derivam um segredo compartilhado a partir das chaves públicas, sem enviar o segredo |
| **Ed25519** | Assinaturas | Provar autoria de announces, provas de entrega, links |
| **HKDF** | Derivação de chave | Transforma o segredo do ECDH em chaves de cifra e de autenticação |
| **AES-256 em modo CBC** com padding PKCS7 | Cifra dos dados | Cifra simétrica rápida |
| **HMAC-SHA256** | Autenticação da mensagem | Detecta adulteração |
| **SHA-256 / SHA-512** | Hashes | Endereços, identificadores, verificação |

### O "token" cifrado

O formato do dado cifrado é baseado na especificação **Fernet**, com modificações: o Reticulum **remove os campos de versão e de timestamp** do Fernet, porque "incorrem em sobrecarga e vazam metadados do iniciador" (comentário no código-fonte de `Token.py`).

Como funciona o envio de um pacote a um destino Single (manual e código):

1. O remetente gera um **par X25519 efêmero** (novo a cada pacote).
2. Faz o ECDH entre a chave efêmera privada e a chave pública do destino (ou uma chave *ratchet*, abaixo). **Isso não usa a rede**: o remetente já sabe a chave pública do announce.
3. O HKDF deriva **64 bytes**: metade para o HMAC, metade para a chave AES-256.
4. Gera um IV aleatório de 16 bytes (`os.urandom`), aplica PKCS7, cifra em AES-256-CBC e anexa o HMAC-SHA256.
5. O pacote leva a **chave pública efêmera (32 bytes)**, o IV, o texto cifrado e o HMAC. O destinatário refaz o ECDH com a chave privada dele e decifra.

Sobrecarga do token: 32 bytes da chave efêmera + 48 bytes (IV de 16 + HMAC de 32) + o padding de 1 a 16 bytes. Pela constante `TOKEN_OVERHEAD = 48` do código.

**Nota sobre AES-128 vs AES-256.** O README do repositório do LXMF ainda descreve chaves AES-128, e o código traz constantes para modo AES-128. A documentação atual do Reticulum e o código de `Link.py` (modo padrão `MODE_AES256_CBC`) usam **AES-256-CBC**. Confie no manual e no código do Reticulum; trate o texto do LXMF como desatualizado neste ponto. Confira na sua versão.

### Sigilo futuro (forward secrecy) e ratchets

**Sigilo futuro** significa que, se a sua chave de longo prazo for roubada amanhã, **o tráfego capturado ontem continua ilegível**. Isso exige que as chaves que cifraram aquele tráfego tenham sido efêmeras e apagadas.

- **Em links** (Aula 4): sim, por padrão, porque as chaves da sessão vêm de um ECDH efêmero entre os dois lados.
- **Em pacotes avulsos**: a chave do remetente é efêmera, mas a do **destinatário** é a chave fixa da identidade. Quem roubar a chave privada do destinatário pode decifrar pacotes antigos. Para fechar isso, o Reticulum tem **ratchets**: o destino gera pares de chaves que giram periodicamente, anuncia a chave pública corrente no announce e o remetente cifra para ela. O manual diz que isso é habilitado **por destino** ("automatic key ratcheting, by enabling ratchets on a per-destination basis"). Detalhes de rotação e expiração: confira no manual da sua versão.

O manual afirma que "sigilo futuro está disponível para todos os tipos de comunicação", pacotes únicos e links.

### Criptografia é obrigatória, e isso tem causa técnica

Reveja a linha do tipo Plain: pacote não cifrado não é roteado em vários saltos. O Zen explica que "a entropia do pacote cifrado é a lógica de roteamento": os transport nodes usam as provas criptográficas para verificar rotas e para impedir *spoofing* (falsificação). Por isso pedir "um Reticulum sem criptografia" não é pedir uma opção a menos, é pedir outra arquitetura. Isso tem implicação legal direta em rádio amador (Aula 8).

## Anonimato: o que é e o que não é

O manual promete **anonimato do iniciador** (*initiator anonymity*): **nenhum pacote Reticulum carrega endereço de origem.** Quem intercepta um pacote vê apenas o **destino**, não quem enviou. Nos links, o iniciador nem precisa revelar identidade: se quiser autenticar, faz isso *dentro* do canal cifrado, visível só ao destino verificado.

O que isso **não** significa (o manual é explícito em vários pontos, e o restante vem de raciocínio sobre os meios):

- **Não esconde o destinatário.** O hash do destino aparece no cabeçalho de todo pacote. Só se protege isso com IFAC (Aula 5), e só contra quem não tem a senha da rede.
- **O announce é público.** Ele publica seu hash, sua chave pública e um valor aleatório com carimbo de tempo. Quem escuta sabe que aquela identidade existe e quando anunciou.
- **Não esconde o meio.** Sobre TCP, os endereços IP das duas pontas são visíveis a quem inspecionar a conexão, e um adversário pode notar que o tráfego é Reticulum (manual, *Getting Started Fast*). Sobre I2P, os IPs ficam ocultos. Sobre rádio, o **transmissor é fisicamente localizável** por quem tiver equipamento de radiogoniometria, conforme a física dos Módulos 1 e 2.
- **Não é um Tor.** Não há roteamento em camadas de cebola. É anonimato de origem no pacote, não proteção completa contra análise de tráfego.

A Aula 8 monta o modelo de ameaça completo.

## Resumo

- O endereço Reticulum é um **hash de 16 bytes derivado de chave pública**: sem alocação central, autenticado por construção e portátil.
- Uma **identidade** são 512 bits de chaves (X25519 + Ed25519); ela cria vários **destinos**, nomeados por app e aspects; o que torna o destino único é a identidade.
- O hash do destino no código: `trunc16(SHA-256(name_hash(10 bytes) + identity_hash(16 bytes)))`.
- Criptografia: X25519 + HKDF + AES-256-CBC + HMAC-SHA256 (formato tipo Fernet sem versão e timestamp) e assinaturas Ed25519. Chave efêmera por pacote e por link.
- Sigilo futuro é garantido em links; em pacotes avulsos exige **ratchets** habilitados por destino.
- Plain e Group não têm multi-hop; criptografia é parte do mecanismo de roteamento, não opcional.
- Anonimato do iniciador significa **sem endereço de origem**, não invisibilidade: destino, announces, IP (em TCP) e o próprio sinal de rádio continuam observáveis.

## Para aprofundar

- [ ] [Understanding Reticulum: Destinations, Identities, Announces](https://reticulum.network/manual/understanding.html) (manual oficial): definição de destino, regras de nome e de hash, tipos de destino e identidades.
- [ ] [Cryptographic Primitives](https://reticulum.network/crypto.html) (site oficial): a lista autoritativa de primitivas e o aviso de que a pilha não foi auditada externamente (ver Aula 9).
- [ ] [Building Networks: Destinations, Not Addresses](https://reticulum.network/manual/networks.html) (manual oficial): a comparação direta com o modelo de endereços tradicional.
- [ ] [Reticulum: código-fonte, arquivos `RNS/Identity.py` e `RNS/Destination.py`](https://github.com/markqvist/Reticulum/tree/master/RNS) (GitHub, espelho do projeto): as fórmulas exatas de hash e de derivação de chave, para quem quer conferir o texto do manual contra o código.

[Próxima aula: Pacotes, announces e roteamento](./03%20-%20Pacotes%20Announces%20e%20Roteamento.md)
