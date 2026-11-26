# Módulo 11: Arquitetura Descentralizada e P2P

Você já sabe como uma onda leva informação (Módulos 1 a 4), o que a lei brasileira permite em cada regime (Módulo 5), como o LoRa alcança longe com pouca banda (Módulo 8), como enlaces viram uma malha sem centro (Módulo 9) e como o Reticulum dá a essa malha endereço por chave, cifra e roteamento sem servidor (Módulo 10). Este módulo responde à pergunta que dá sentido a tudo isso: **por que vale a pena ter uma rede própria, quais são os limites reais dessa escolha, e como se desenha uma rede privada de família ou comunidade que dê para montar e manter?** Ele vem agora porque usa como prova de conceito o que você acabou de aprender e prepara o Módulo 12, em que você monta o nó de verdade.

É um módulo **conceitual**: quase não há comandos. A ordem segue a filosofia do curso: **por quê** (a internet foi descentralizada e foi centralizada), **mecanismo** (taxonomia, identidade, P2P, DTN), **limites** (o que a descentralização não resolve) e **método** (desenhar a sua rede, com um exemplo resolvido).

## Aulas

1. [A internet foi descentralizada por desenho](./01%20-%20A%20Internet%20Foi%20Descentralizada%20por%20Desenho.md): Baran e a comutação de pacotes, o princípio ponta a ponta, BGP e DNS, e onde a hierarquia sempre existiu.
2. [Por que a internet se centralizou](./02%20-%20Por%20que%20a%20Internet%20se%20Centralizou.md): economia de escala, efeito de rede, nuvem, CDNs, NAT e banda assimétrica, e a diferença entre ponto único de falha e ponto único de controle.
3. [Centralizado, descentralizado, distribuído, federado e P2P](./03%20-%20Centralizado%20Descentralizado%20Distribuido%20Federado%20e%20P2P.md): a taxonomia de Baran com diagramas, três eixos, e federação (e-mail, Matrix, ActivityPub) contra P2P verdadeiro.
4. [Resiliência, censura e redes de emergência](./04%20-%20Resiliencia%20Censura%20e%20Redes%20de%20Emergencia.md): as enchentes do Rio Grande do Sul em 2024 e o papel dos radioamadores, casos de mesh em desastres, e princípios de projeto.
5. [Identidade sem autoridade central, criptografia e modelo de ameaça](./05%20-%20Identidade%20Criptografia%20e%20Modelo%20de%20Ameaca.md): chave como identidade, PKI, teia de confiança, TOFU, o que a E2E não protege (metadados) e a escada de adversários.
6. [P2P clássico e moderno: DHT, BitTorrent e IPFS](./06%20-%20P2P%20Classico%20e%20Moderno%20DHT%20BitTorrent%20e%20IPFS.md): como achar sem índice central, Kademlia com exemplo numérico, CIDs, libp2p e por que DHT combina mal com LoRa.
7. [Panorama de sistemas e o espectro](./07%20-%20Panorama%20de%20Sistemas%20e%20o%20Espectro.md): Tor, I2P, Yggdrasil, Secure Scuttlebutt, Bluesky, Nostr, Matrix, Signal, Session, Briar e Delta Chat no mapa entre centralizado e P2P.
8. [Mensagens que chegam depois: DTN, sincronização e CRDTs](./08%20-%20DTN%20Sincronizacao%20e%20CRDTs.md): armazenar e encaminhar, sneakernet com contas, local-first, CRDTs e o teorema CAP.
9. [Limites da descentralização e custo de operar](./09%20-%20Limites%20da%20Descentralizacao%20e%20Custo%20de%20Operar.md): spam, descoberta, moderação, uso, escala, sustentabilidade, custo real e o que uma rede privada realisticamente é.
10. [Desenhando a sua rede privada](./10%20-%20Desenhando%20a%20Sua%20Rede%20Privada.md): o método em oito passos e o exemplo resolvido de uma família em dois pontos a 8 km, com cobertura na cidade.

## Aviso de regulamentação e segurança

Este módulo é de arquitetura e planejamento. Transmitir em radiofrequência no Brasil exige respeitar a regulamentação da Anatel conforme a faixa e o regime, usar equipamento certificado quando aplicável, e há riscos de RF e de eletricidade em antenas e mastros. Radioamador é serviço aberto e **sem criptografia do conteúdo** em modos digitais; rede privada cifrada roda em radiação restrita com hardware certificado; **não misture os regimes no mesmo nó** (Módulo 5, Aulas 5 e 6; Módulo 10, Aula 8). Os exemplos numéricos de potência e antena da Aula 10 são ilustrativos: vale o certificado do seu produto e o Ato vigente. Nada aqui é assessoria jurídica nem de segurança da informação.

## Sobre a curadoria

O conteúdo principal é o texto das aulas, apoiado em fontes primárias sempre que possível: o memorando de Baran (RAND), RFCs (1958, 2775, 4271, 4838, 6598, 9171 e 1034), especificações e documentação oficial (W3C ActivityPub, Matrix, Signal, IPFS, BEP 5 do BitTorrent, Tor, I2P, AT Protocol, Nostr NIP-01, Yggdrasil, Briar, Delta Chat, Session), artigos acadêmicos (Kademlia, Local-first, CAP, análise do Delta Chat no USENIX) e fontes do episódio das enchentes de 2024 (LABRE, GZH, Ministério das Comunicações). Os vídeos indicados (CrashCourse, Tech in a Teacup, Antonopoulos, Kleppmann no QCon, goTenna em Porto Rico) tiveram **título e canal confirmados**, mas **não foram assistidos**; onde os descrevo, é pelo que o título indica. Pontos que **não pesquisei ou não confirmei** estão marcados no texto (por exemplo cjdns, XMPP, teia de confiança do PGP, estado de manutenção do SSB, criptografia de ponta a ponta do Matrix, proporção de CGNAT no Brasil, fatos gerais de história da ARPANET). Estimativas de consumo, custo e carga da Aula 10 são hipóteses do autor, sinalizadas como tais. Informações de projetos e preços foram verificadas em **setembro de 2026** e envelhecem.

## Checklist de saída do módulo

- [ ] Por que a internet foi desenhada com comutação de pacotes e inteligência nas pontas, e que partes dela (DNS, endereços, BGP) sempre tiveram hierarquia ou dependência de confiança?
- [ ] Que forças (economia de escala, efeito de rede, nuvem, NAT e banda assimétrica) fizeram a internet se centralizar, e qual a diferença entre ponto único de falha e ponto único de controle?
- [ ] Qual a diferença entre rede centralizada, descentralizada e distribuída (Baran), e entre federado e P2P verdadeiro? Classifique um sistema com as três perguntas (quem pode me desligar, o que sobra se o operador sumir, quem vê os metadados).
- [ ] O que falhou nas comunicações do Rio Grande do Sul em maio de 2024, o que funcionou (e por quê, tecnicamente), e o que a LABRE aponta como lição organizacional?
- [ ] Como uma chave pública funciona como identidade, e como PKI, teia de confiança, TOFU e verificação em pessoa resolvem (ou não) "esta chave é de quem eu penso"?
- [ ] O que a criptografia de ponta a ponta protege e o que não protege (metadados, aparelhos, autenticidade da chave), e como escolher a arquitetura pelo adversário (curioso, provedor, plataforma, estado)?
- [ ] Como uma DHT (Kademlia) acha um dado sem servidor central, e por que isso combina com a internet e mal com LoRa?
- [ ] Como funcionam o armazenar e encaminhar do DTN e a fusão de um CRDT, e o que o teorema CAP obriga uma rede de rádio a escolher?
- [ ] Que problemas a descentralização não resolve (spam, descoberta, moderação, uso, sustentabilidade), quanto custa operar a própria rede, e por que a rede privada convive com o mensageiro convencional?
- [ ] Dado um caso (requisitos, ameaças, meios, orçamento), refaça o exemplo da Aula 10: margem do enlace de 8 km por SF, escolha do SF, carga em segundos de ar, autonomia da bateria e modos de falha.

Quando estiver confiante, siga para o **[Módulo 12: Projeto Prático, Raspberry Pi e Hardware Embarcado](../12%20-%20Projeto%20Pratico%20-%20Raspberry%20Pi%20e%20Hardware%20Embarcado/README.md)**.
