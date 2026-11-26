# Aula 5: Identidade sem autoridade central, criptografia de ponta a ponta e modelo de ameaça

[Voltar ao módulo](./README.md)

*Pergunta que esta aula responde: como alguém prova quem é sem um servidor que conceda contas, o que a criptografia de ponta a ponta protege e o que deixa vazar, e como escolher a arquitetura pela pergunta "contra quem estou me protegendo?"*

Esta aula liga três ideias que o restante do módulo usa: identidade por chave, limites da criptografia e modelo de ameaça. A criptografia em si (troca de chaves, cifras) já apareceu no Módulo 10, Aula 2; aqui o foco é o que ela **não** faz.

## Identidade: de "conta concedida" para "chave possuída"

Em um serviço centralizado, sua identidade é uma **linha em um banco de dados** dele: um nome de usuário e uma senha, um número de telefone ou um e-mail que o serviço aceita. Quem controla o banco concede, suspende e apaga identidades. Você não possui sua identidade, aluga.

A alternativa é usar um **par de chaves criptográficas** como identidade. Você gera um par: uma **chave privada** (que só você tem) e uma **chave pública** (que você distribui). Uma assinatura digital feita com a privada é verificável por qualquer um com a pública. "Provar que sou eu" vira "provar que possuo a chave privada". Ninguém precisa conceder nada: gerar um par custa milissegundos, offline.

Vários sistemas do módulo adotam isso, com variações:

| Sistema | Como o endereço/identidade nasce da chave |
|---|---|
| **Reticulum** | O endereço de destino é um hash da chave pública (Módulo 10, Aula 2) |
| **Yggdrasil** | A identidade é o par de chaves; o endereço IPv6 é gerado a partir da chave pública (documentação do projeto) |
| **Nostr** | Cada usuário tem um par de chaves; o campo `pubkey` de cada evento é a chave pública e o campo `sig` é a assinatura (NIP-01) |
| **Secure Scuttlebutt** | Cada identidade é uma chave; seu "feed" de mensagens é assinado por ela e referenciado pela chave pública |
| **AT Protocol (Bluesky)** | Um identificador descentralizado (DID) aponta para um documento com chaves públicas; o servidor guarda a chave de assinatura, mas o usuário pode manter chaves de rotação para migrar de servidor |

Uma propriedade elegante: a identidade é **autocertificante** (*self-certifying*). Se o endereço é o hash da chave, então quem responde àquele endereço e prova possuir a chave é, sem dúvida, o dono do endereço. Não há nome para roubar.

### O problema que sobra: ligar a chave a uma pessoa

O que a criptografia garante é que **aquela chave** assinou aquilo. Ela **não** diz que aquela chave pertence à pessoa que você conhece. Se um atacante me entrega a chave dele dizendo "sou o seu primo", e eu aceito, toda a criptografia seguinte protege a conversa **com o atacante**. Isso se chama **autenticação da chave** e é o problema central de identidade sem autoridade.

Existem quatro respostas clássicas:

**1. PKI (infraestrutura de chaves públicas) com autoridades certificadoras.** Uma autoridade (CA) assina um certificado dizendo "esta chave pertence a este nome". Você confia na CA, então confia no certificado. É o modelo do HTTPS. Escala muito, mas cria pontos de controle: qualquer CA em que o navegador confie pode, por erro ou má-fé, emitir certificado para um nome que não é do requerente (Aula 2). Bom para "estou falando com o site do meu banco", ruim para "estou falando com meu primo", porque a CA não conhece seu primo.

**2. Teia de confiança (*web of trust*).** Sem autoridade: cada pessoa assina as chaves de quem conhece e verificou pessoalmente, e você confia na chave de um desconhecido se pessoas em quem você confia a assinaram. Elimina a autoridade única, mas exige que as pessoas façam e mantenham as verificações, o que na prática pouca gente faz. (É o modelo clássico do PGP; não pesquisei o estado atual de uso.)

**3. TOFU (*trust on first use*, "confiar no primeiro uso").** Na primeira vez que você vê uma chave para aquele contato, você a aceita e a memoriza; se depois ela mudar, o programa avisa. É o modelo do SSH (`known_hosts`). O **Autocrypt**, padrão de criptografia de e-mail usado pelo Delta Chat, é baseado em TOFU: segundo a análise criptográfica publicada no USENIX Security 2024, ele "não suporta verificação de chave" e só visa defender contra coleta **passiva** de dados. Ou seja: TOFU protege contra quem só escuta, mas não contra um atacante ativo presente **no primeiro contato**.

**4. Verificação fora de banda (em pessoa).** Você confere a chave por um canal separado. O Briar exige exatamente isso para adicionar um contato: os dois se encontram e **escaneiam o QR code um do outro**, e os aparelhos trocam chaves públicas, derivam um segredo compartilhado e verificam que a identidade recebida pertence ao dono do QR code. O Delta Chat tem o protocolo SecureJoin, que faz uma verificação semelhante por QR code. É o padrão-ouro contra atacante no meio, e é possível porque, em uma rede de família ou comunidade, você **conhece as pessoas**. A Aula 10 usa isso: trocar hashes do Reticulum em pessoa, uma vez.

Tabela resumo:

| Método | Quem você precisa confiar | Protege contra atacante ativo? | Custo de uso |
|---|---|---|---|
| PKI (CAs) | As autoridades | Sim, se nenhuma CA falhar | Baixo (o navegador faz) |
| Teia de confiança | Amigos que assinam | Em parte | Alto |
| TOFU | Ninguém, mas só no primeiro contato | Não no primeiro contato | Baixo |
| Em pessoa (QR/hash) | Ninguém | Sim | Exige encontro |

**Nomes legíveis.** Chaves são ilegíveis (`3f9a...`). Existe um resultado conhecido em sistemas de nomes (o "triângulo de Zooko", da literatura de sistemas descentralizados; não o consultei nesta pesquisa) segundo o qual é difícil um nome ser ao mesmo tempo **legível por humanos**, **seguro** e **descentralizado**. Por isso o Reticulum não tem DNS distribuído ainda (Módulo 10, Aula 9), o Bluesky usa um **handle** legível que aponta para uma chave via DNS (uma dependência do DNS), e a solução pragmática em rede pequena é o "apelido local": cada pessoa dá o nome que quiser aos hashes que conhece.

**Perda de chave.** Sem servidor, não há "esqueci minha senha". Se você perde a chave privada (aparelho quebrado, sem backup), perde a identidade. Se alguém a copia, personifica você, e não existe autoridade para revogar. O Módulo 10, Aula 8, já recomendou tratar o arquivo de identidade como chave SSH. O AT Protocol trata isso com chaves de recuperação/rotação guardadas pelo usuário (uma "chave de papel"); é um bom desenho a copiar.

## Criptografia de ponta a ponta: o que faz

**Criptografia de ponta a ponta** (E2E, *end-to-end encryption*): somente os dois participantes (as "pontas") têm as chaves para ler a mensagem; qualquer servidor ou rede no meio só vê texto cifrado. É a aplicação direta do princípio ponta a ponta da Aula 1 à confidencialidade.

O exemplo mais estudado é o protocolo do Signal, que combina dois mecanismos documentados em signal.org/docs:

- **X3DH** (*Extended Triple Diffie-Hellman*): estabelece um segredo compartilhado entre duas partes que se autenticam mutuamente por chaves públicas, mesmo que uma delas esteja **offline** (usa chaves públicas pré-publicadas). Dá sigilo futuro (*forward secrecy*) e negabilidade criptográfica (*deniability*).
- **Double Ratchet** ("catraca dupla"): a cada mensagem, novas chaves são derivadas de forma que **chaves anteriores não podem ser calculadas a partir de posteriores, e vice-versa**. Se um atacante rouba as chaves de hoje, as mensagens antigas e as futuras (depois de uma nova troca) continuam protegidas.

O Reticulum entrega propriedades análogas: chaves efêmeras por pacote e por link, sigilo futuro em links (Módulo 10, Aulas 2 e 4). O que importa aqui é a lista do que isso **cobre**:

- **Confidencialidade** do conteúdo contra quem intercepta no caminho.
- **Integridade e autenticidade**: quem não tem a chave não altera nem forja.
- **Sigilo futuro**: comprometer uma chave não decifra o passado.

## O que a criptografia de ponta a ponta NÃO protege

1. **Metadados.** Quem fala com quem, quando, com que frequência, de que endereço IP, com que tamanho de mensagem. Um sistema pode ser perfeitamente cifrado e ainda assim entregar o mapa social completo a quem observa. O Signal ilustra o esforço: o blog oficial de 2018 diz que o serviço, por desenho, **não armazena** lista de contatos, grafo social, lista de conversas, localização, nome de perfil, membros ou títulos de grupos. Mesmo assim, o serviço precisa saber **para onde entregar** cada mensagem. O recurso de "remetente selado" (*sealed sender*), descrito no mesmo blog, esconde do servidor **quem enviou**: o certificado do remetente (que contém número de telefone, chave pública e validade) vai dentro do envelope cifrado. O próprio texto avisa que se tratava de um passo incremental e que a resistência a **correlação de tráfego por tempo e por endereço IP** seguia em desenvolvimento. Conclusão: mesmo o melhor caso conhecido de mensageiro centralizado deixa o **destinatário, o horário e o IP** visíveis ao operador.
2. **Os aparelhos das pontas.** Se o celular tem um programa malicioso, ou alguém o desbloqueia, a cifra não ajuda. O texto aparece em claro na tela e no armazenamento.
3. **Cópias de segurança**, capturas de tela e notificações, que podem sair da proteção.
4. **A autenticidade da chave** (seção acima): a cifra protege a conversa com quem tem *aquela* chave.
5. **A existência da comunicação.** Em rádio, o transmissor é **localizável** independentemente do conteúdo (Módulo 10, Aula 8).
6. **Sinais físicos**: tamanho, ritmo e volume dos pacotes são visíveis mesmo com conteúdo cifrado.

A lição para a arquitetura: **criptografia protege o conteúdo; a arquitetura protege os metadados.** É por isso que o Tor, o I2P e o Session (Aula 7) existem: eles reprojetam o caminho para que nenhum ponto veja origem e destino juntos. Em rádio, a arquitetura "sem provedor" elimina o operador que vê os metadados, mas não o vizinho com um receptor (Módulo 9, Aula 9).

## Modelo de ameaça: escolher pelo adversário

Um **modelo de ameaça** responde, em ordem: **o que quero proteger** (ativos), **contra quem** (adversários), **o que eles conseguem fazer** (capacidades), **qual o dano se conseguirem** e **quanto custa a proteção**. "Seguro" sem adversário não significa nada; o Módulo 10, Aula 8, apresentou o método em tabela. Aqui vai uma escada de adversários, do mais fraco ao mais forte, com o que cada um enxerga em três arquiteturas.

| Adversário | Capacidade típica | Mensageiro centralizado com E2E (ex.: Signal) | Federado sem E2E (ex.: e-mail, Mastodon) | Rede de rádio distribuída e cifrada (ex.: Reticulum) |
|---|---|---|---|---|
| **Curioso** (vizinho, colega, quem divide o Wi-Fi) | Escuta local, adivinha senhas | Não lê o conteúdo | Pode ler se o Wi-Fi ou o servidor for fraco | Não lê o conteúdo; pode ver que há rádio no ar |
| **Provedor de acesso (ISP)** | Vê destinos IP e horários | Vê que você fala com o servidor do serviço | Vê o servidor de destino | Não há ISP no enlace de rádio; se há gateway TCP, ele vê IP (Módulo 10, Aula 8) |
| **Operador do serviço/plataforma** | Tem os servidores, logs, pode obedecer a ordem judicial | Vê metadados (destino, horário, IP); não vê conteúdo | Vê **conteúdo e metadados** (sem E2E) | Não há operador central; cada nó de transporte vê hashes de destino que passam |
| **Empresa de dados/anúncios** | Compra ou cruza dados | Pouco material | Muito | Não há venda; há rastros de rádio |
| **Estado/adversário forte** | Ordens judiciais, observação de grande parte da rede, radiogoniometria, invasão de aparelhos | Vê metadados por ordem; pode atacar o aparelho | Acesso amplo | Localiza transmissores; ataca aparelhos; interfere no espectro |

Quatro conclusões operacionais:

1. **Contra o curioso**, E2E básica resolve. Não invente complexidade.
2. **Contra a plataforma e o provedor**, o que importa é reduzir metadados e o poder de desligamento: federação com E2E, P2P, ou rede própria.
3. **Contra o estado**, nenhum sistema deste módulo é suficiente sozinho. O Reticulum não foi auditado externamente (Módulo 10, Aula 9). Para risco grave, recorra a especialistas e a ferramentas com revisão independente; este módulo não é uma consultoria de segurança.
4. **Uma rede privada de família** tem, realisticamente, o curioso e a plataforma como adversários. É o cenário da Aula 10.

O modelo de ameaça também define o que **não** vale a pena fazer. Cifrar demais atrapalha (no radioamador, é proibido cifrar o conteúdo; Módulo 5, Aula 5 e Módulo 10, Aula 8). Esconder metadados de um adversário que não os quer só complica a operação.

## Resumo

- **Identidade por chave**: gerar um par é grátis e offline; provar identidade é provar posse da chave privada. O endereço pode ser o hash da chave (autocertificante). Ninguém concede nem revoga.
- O que sobra é **ligar a chave à pessoa**: PKI com CAs (escala, mas cria pontos de controle), teia de confiança (sem centro, difícil de usar), TOFU (fácil, frágil contra atacante ativo no primeiro contato) e **verificação em pessoa** (QR/hash), que é a melhor para grupos pequenos.
- Sem servidor não há recuperação de conta: perder a chave é perder a identidade, e não há autoridade para revogar uma chave copiada.
- **E2E** (X3DH, Double Ratchet no Signal) protege conteúdo, integridade e sigilo futuro. **Não** protege metadados, os aparelhos, backups, a autenticidade da chave nem a existência da comunicação.
- Criptografia protege conteúdo; **a arquitetura protege metadados**.
- **Modelo de ameaça**: ativos, adversários, capacidades, dano, custo. Curioso, provedor, plataforma, empresa de dados e estado enxergam coisas diferentes; escolha a arquitetura pelo adversário real.

## Para aprofundar

- [ ] [The X3DH Key Agreement Protocol](https://signal.org/docs/specifications/x3dh/) e [The Double Ratchet Algorithm](https://signal.org/docs/specifications/doubleratchet/) (Signal, especificações): os textos oficiais dos dois mecanismos; densos, mas com a motivação de cada propriedade no início.
- [ ] [Technology preview: Sealed sender for Signal](https://signal.org/blog/sealed-sender/) (blog do Signal, 2018): a explicação mais clara de metadados: o que o serviço guarda, o que precisa saber e o que o remetente selado esconde.
- [ ] [Cryptographic Analysis of Delta Chat](https://www.usenix.org/system/files/usenixsecurity24-song-yuanming.pdf) (USENIX Security 2024): análise acadêmica de um mensageiro que usa e-mail e TOFU (Autocrypt) mais verificação por QR (SecureJoin); mostra, num caso real, como TOFU e verificação em pessoa se combinam e onde falham.
- [ ] [Briar: How it works](https://briarproject.org/how-it-works/) (projeto Briar): o modelo de ameaça de um mensageiro P2P para ativistas, incluindo o contato por QR em pessoa e a sincronização sem servidor.

[Próxima aula: P2P clássico e moderno: DHT, BitTorrent e IPFS](./06%20-%20P2P%20Classico%20e%20Moderno%20DHT%20BitTorrent%20e%20IPFS.md)
