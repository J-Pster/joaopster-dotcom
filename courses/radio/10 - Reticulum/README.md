# Módulo 10: Reticulum

Você já sabe como o sinal de rádio se propaga e é modulado (Módulos 1 a 4), o que a lei brasileira permite em cada regime (Módulo 5), como o LoRa consegue longo alcance com pouca banda (Módulo 8) e como redes mesh de LoRa funcionam (Módulo 9). Este módulo responde à pergunta seguinte: **que pilha de rede, para além de "uma mesh com app", une LoRa, Wi-Fi e internet numa rede sua, com endereço que não depende de lugar e criptografia embutida?** Esse é o Reticulum, a peça que mais se aproxima do objetivo final do curso: projetar a própria rede privada de comunicação. Ele vem agora porque depende da física do meio (banda mínima, MTU, tempo no ar), do regime legal (radiação restrita versus radioamador) e da noção de mesh, e prepara o Módulo 11 (arquitetura descentralizada e P2P).

Módulo prático: as Aulas 6 a 10 têm ferramentas, configurações e um laboratório. Tudo o que muda rápido (versões, plataformas, projetos ativos) foi verificado em **setembro de 2026**; o que não foi confirmado está marcado como tal.

> **Aviso.** Transmitir em radiofrequência no Brasil exige respeitar a regulamentação da Anatel conforme a faixa e o regime, equipamento certificado quando aplicável, e há riscos de RF e de eletricidade. Radioamador exige conteúdo aberto, **sem criptografia** em modos digitais, e o Reticulum cifra por desenho: **não use tráfego Reticulum cifrado na faixa amadora.** Rede privada com conteúdo cifrado: radiação restrita com hardware certificado (Módulo 5, Aula 6). Este módulo não é assessoria jurídica.

## Aulas

1. [Por que o Reticulum existe](./01%20-%20Por%20que%20o%20Reticulum%20Existe.md): por que o IP não serve para rádio de longo alcance e banda mínima, e quais princípios o projeto adota.
2. [Destinos, identidades e criptografia](./02%20-%20Destinos%20Identidades%20e%20Criptografia.md): como o endereço vira hash de chave pública, como se cifra e o que anonimato significa.
3. [Pacotes, announces e roteamento](./03%20-%20Pacotes%20Announces%20e%20Roteamento.md): MTU de 500 bytes, anatomia do pacote, como a rede aprende caminhos sem servidor central.
4. [Links e Resources](./04%20-%20Links%20e%20Resources.md): transferência confiável, sigilo futuro e custo de 297 bytes para abrir uma sessão.
5. [Interfaces e como ligar meios diferentes](./05%20-%20Interfaces%20e%20Ligacao%20de%20Meios.md): AutoInterface, TCP, I2P, RNode, KISS; modos de interface, IFAC, gateways e descoberta.
6. [RNode, instalação e utilitários](./06%20-%20RNode%20Instalacao%20e%20Utilitarios.md): firmware e hardware, `pip install rns`, arquivo de configuração, `rnsd`, `rnstatus`, `rncp` e companhia.
7. [Aplicações sobre Reticulum](./07%20-%20Aplicacoes%20sobre%20Reticulum.md): LXMF, Sideband, NomadNet e MeshChat: plataformas e estado atual.
8. [Modelo de ameaça, privacidade e legalidade](./08%20-%20Privacidade%20Ameacas%20e%20Legalidade.md): o que o Reticulum protege e não protege, e o conflito com a regra do radioamador.
9. [Comparação, maturidade e riscos](./09%20-%20Comparacao%20Maturidade%20e%20Riscos.md): Reticulum, Meshtastic, MeshCore e IP; projeto de mantenedor único, licença, versões em setembro de 2026.
10. [Laboratório guiado](./10%20-%20Laboratorio%20Guiado.md): dois e três nós no computador, mensagem LXMF, Sideband, RNode e gateway.

Módulos relacionados: [Módulo 8: LoRa e LoRaWAN](../08%20-%20LoRa%20e%20LoRaWAN/README.md) e [Módulo 9: Redes Mesh](../09%20-%20Redes%20Mesh/README.md).

## Checklist de saída do módulo

- [ ] Por que o endereço de um nó Reticulum é um hash de chave pública e não um endereço atribuído, e o que isso permite que um IP não permite?
- [ ] Por que a criptografia do Reticulum não é opcional, e por que isso conflita com a regra do radioamador brasileiro (Ato 926, item 6.11)?
- [ ] Por que o MTU é de 500 bytes e o que o RNode faz com um pacote desse tamanho em LoRa?
- [ ] Como uma rede sem servidor central e sem DNS aprende o caminho até um destino? O que cada transport node sabe e o que não sabe?
- [ ] Por que existe um teto de 2% da banda para announces, e quantos announces de 167 bytes cabem por hora num enlace de 1,30 kbps?
- [ ] Por que abrir um link custa 297 bytes e o que ele dá que um pacote avulso não dá (sigilo futuro, sessão)?
- [ ] Como um gateway une LoRa e internet sem afogar o LoRa com announces (modo `boundary` e pedidos de caminho recursivos)?
- [ ] O que "anonimato do iniciador" protege e o que continua visível (destino, announces, IP em TCP, localização do transmissor)?
- [ ] Em que regime legal uma rede privada cifrada sobre LoRa pode existir no Brasil, e por que o "mesmo rádio" não pode ser privado e amador ao mesmo tempo?
- [ ] Que riscos o projeto tem (mantenedor único, licença atípica, sem auditoria externa) e como você se protegeria deles?

Quando estiver confiante, siga para o [Módulo 11: Arquitetura Descentralizada e P2P](../11%20-%20Arquitetura%20Descentralizada%20e%20P2P/README.md).
