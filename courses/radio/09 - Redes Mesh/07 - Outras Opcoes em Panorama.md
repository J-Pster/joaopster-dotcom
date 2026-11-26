[Voltar ao módulo](./README.md)

# Aula 7: Outras opções em panorama

*Pergunta que esta aula responde: que outras tecnologias existem para redes sem servidor central, em que camada cada uma atua, e o que é maduro e o que é experimental?*

> Verificado em setembro de 2026 nas páginas oficiais citadas em cada item. Esta é uma visão geral, não um guia de uso: para cada tecnologia li a documentação principal, mas não montei rede nenhuma com elas. Onde a maturidade é minha avaliação, digo.

## Por que olhar além do Meshtastic e do MeshCore

Quase toda decisão da Aula 3 vem de duas restrições: **um só canal de rádio compartilhado** e **taxa de dados de cerca de 1 kbps**. Cada alternativa abaixo muda uma delas (mais taxa, mais canais, ou outra camada de rede), e paga em outro lugar (alcance, energia, custo, regulamentação). Uma pergunta útil diante de qualquer tecnologia: **em que camada ela atua?**

| Camada | O que resolve | Exemplos |
|---|---|---|
| Rádio (camada física) | Como transmitir bits | LoRa, Wi-Fi, Bluetooth |
| Enlace e roteamento em malha | Como os nós se descobrem e repassam pacotes | Meshtastic, MeshCore, batman-adv, 802.11s |
| Rede de identidade e criptografia sobre qualquer meio | Como endereçar e proteger o tráfego independente do rádio | Reticulum (próximo módulo), Yggdrasil |
| Serviço e aplicação | O que os usuários enviam | Chat, posição, telemetria |

Misturar camadas causa comparações injustas: Yggdrasil e Meshtastic não competem, atuam em camadas diferentes.

## LoRa APRS

**APRS (Automatic Packet Reporting System)** é um sistema de radioamadores para divulgar posição e mensagens curtas. Tradicionalmente usa FM em VHF. O **LoRa APRS** leva a mesma ideia para modulação LoRa: **trackers** (com GPS) enviam sua posição por LoRa, e **iGates** (estações fixas) recebem e repassam à internet (APRS-IS), onde a posição aparece em mapas como o aprs.fi. Segundo a wiki OARC e blogs de radioamadores:

- Usa placas LoRa comuns na **faixa de 70 cm (433 MHz)**, não em 868/915 MHz, e a comunidade padronizou **433,775 MHz** internacionalmente. Isso exige comprar a versão 433 MHz da placa.
- O formato no ar é uma linha de texto estilo TNC2, e **não** um quadro AX.25 completo, então o firmware LoRa APRS não serve para packet radio convencional.
- Potência típica de 100 mW (20 dBm).
- É **serviço de radioamador**: exige licença e identificação (Módulo 5). Uma fonte lembra que nos EUA a largura de 125 kHz em 433,775 MHz excede o limite de 100 kHz da regra da banda de 70 cm, uma "zona cinzenta tolerada". Não pesquisei o equivalente brasileiro.
- Não é uma malha genérica de mensagens: é rede de **posição e telemetria**, com infraestrutura de iGates. A quantidade de iGates depende muito da região, e um relato de julho de 2026 mostra uma região dos EUA praticamente sem tráfego por RF.

Maturidade: o APRS em si é antigo e maduro. O LoRa APRS é um nicho pequeno e ativo entre radioamadores. Só faz sentido para quem é radioamador e quer rastreamento.

## Amazon Sidewalk

**Sidewalk** é uma rede da Amazon que usa dispositivos Echo e Ring como **gateways compartilhados** para dispositivos de baixo consumo (rastreadores, sensores), com rádio incluindo LoRa em 900 MHz. É uma rede **em estrela** gerenciada pela Amazon, sem nada da natureza "sem dono" de uma mesh.

Disponibilidade, segundo a documentação da Amazon: **Estados Unidos, Canadá e México** (Canadá e México a partir de 26 de fevereiro de 2026, segundo a página de ajuda). A documentação para desenvolvedores diz que os gateways Echo e Ring **desabilitam a função Sidewalk em países não suportados**, e que usar Sidewalk fora dos EUA pode violar regulamentação local. **Não disponível no Brasil.** Não é opção para o objetivo do curso.

## batman-adv (B.A.T.M.A.N. advanced) e Wi-Fi mesh

Outro mundo: **malha em Wi-Fi ou Ethernet**, com taxas de megabits. O **B.A.T.M.A.N.** (*Better Approach To Mobile Adhoc Networking*) nasceu em Berlim em 2006, para redes comunitárias de Wi-Fi. A implementação **batman-adv** roda como **módulo do kernel Linux** (o `modprobe batman-adv` está disponível na maioria das distribuições, segundo a apresentação do projeto e a documentação do kernel) e funciona na **camada 2**: encaminha quadros Ethernet e faz a malha inteira parecer **um grande switch virtual** (a interface `bat0`). Qualquer protocolo em cima (IPv4, IPv6, DHCP) funciona sem saber que existe uma malha.

Como roteia (é um exemplo real dos conceitos da Aula 2): cada nó transmite periodicamente **mensagens de originador (OGMs)**; os vizinhos as repassam, e cada nó só precisa saber **por qual vizinho os OGMs de cada originador chegam com melhor qualidade**, sem conhecer o mapa completo. É um protocolo **proativo** com estimativa de qualidade de enlace por salto (o artigo da TUM descreve o uso de sequência e janela deslizante).

Por que não serve para LoRa: os OGMs são periódicos. Na Aula 2, o cálculo de controle proativo em LoRa consumiu mais que 100% do ar. Em Wi-Fi, com dezenas de Mbps, o mesmo controle é desprezível. **A tecnologia certa depende do orçamento de ar.**

**802.11s** é o padrão IEEE de malha para Wi-Fi (não pesquisei em profundidade aqui). Roteadores com OpenWrt e redes comunitárias usam variantes de malha em Wi-Fi. Alcance típico: centenas de metros por salto, com muito mais taxa. Wi-Fi opera em 2,4 e 5 GHz, o que muda a propagação (Módulo 2): menos alcance e mais sensibilidade a obstáculos que 915 MHz.

Maturidade: batman-adv é **maduro** (quase 20 anos, no kernel do Linux). O público é o de redes comunitárias e provedores pequenos, não o de mensagens off-grid de bolso.

## Yggdrasil

**Yggdrasil** é uma rede em malha **criptografada de ponta a ponta, sobre IPv6**. A página oficial a descreve como um esquema de **roteamento compacto experimental**, descentralizado, escalável em teoria, com cada nó identificado por chave pública. Roda como software em Linux, macOS, Windows, iOS e Android, e as ligações entre nós são feitas por **TCP/TLS** em LAN, links ponto a ponto ou pela internet.

Ponto crucial: **não é uma tecnologia de rádio**. É uma camada de rede que usa o meio que você tiver. A própria página oficial avisa que o projeto está em estágio **alfa**, com mudanças incompatíveis possíveis, embora "estável o bastante para uso diário". Serve para dar endereços estáveis e tráfego cifrado a máquinas ligadas por qualquer enlace. Não é um rádio LoRa de bolso.

A documentação do Meshtastic compara: rede em que a chave pública **é** a identidade (Yggdrasil, cjdns, libp2p) deixa as mensagens maiores ou exige um handshake interativo, o que é caro em LoRa.

## Reticulum

O **Reticulum** é o assunto do próximo módulo. Resumo para situá-lo: é uma pilha de rede **criptográfica** em que o endereço de um destino é derivado de chaves públicas, projetada para funcionar sobre **qualquer meio** (LoRa, Wi-Fi, serial, TCP, packet radio) e para **baixa largura de banda**. Enquanto o Meshtastic e o MeshCore são "mensageiros de rádio prontos", o Reticulum é uma **base de rede** sobre a qual se constroem aplicativos. O próximo módulo explica o porquê, o como e as escolhas de projeto.

## LoRaWAN, a estrela do Módulo 8

Para completar: quando há **um ponto alto com internet e muitos sensores**, a estrela LoRaWAN (Módulo 8) é mais escalável que qualquer mesh, porque o gateway usa múltiplos canais em paralelo (Aula 3). Ela não resolve o caso "pessoas conversando sem infraestrutura".

## Quadro comparativo e maturidade

| Tecnologia | Camada | Meio típico | Taxa | Sem infraestrutura? | Maturidade (minha avaliação) |
|---|---|---|---|---|---|
| Meshtastic | Malha + app | LoRa | ~1 kbps | Sim | Maior comunidade e hardware; limita em escala |
| MeshCore | Malha + app | LoRa | ~1 kbps | Precisa de repetidores | Jovem (2025), crescimento rápido, disputa de marca em 2026 |
| LoRa APRS | App + malha simples | LoRa 433 MHz | baixa | Precisa de iGates para a internet | Nicho de radioamadores, ativo |
| Sidewalk | Rede gerenciada | LoRa, BLE, FSK | baixa | Não (Amazon) | Comercial, mas fora do Brasil |
| batman-adv / 802.11s | Enlace/rede | Wi-Fi, Ethernet | Mbps | Sim | Maduro |
| Yggdrasil | Rede (overlay IPv6) | Qualquer com TCP | alta | Sim | Alfa, mas usável |
| Reticulum | Rede | Qualquer | baixa a alta | Sim | Próximo módulo |
| LoRaWAN | Estrela | LoRa | baixa | Precisa de gateway | Maduro, padrão industrial |

Uma síntese honesta: para **mensagens de texto por LoRa, hoje**, as opções práticas são **Meshtastic** (mais maduro e com mais gente) e **MeshCore** (mais eficiente no uso do ar em rede grande, mais jovem). Para **dados em maior velocidade**, Wi-Fi mesh. Para **arquitetura criptográfica independente de meio**, Reticulum e afins. Há mais projetos que não conferi; o que aparece em blogs e vídeos muda a cada mês.

## Resumo

- Compare tecnologias por **camada** e por **orçamento de ar**: um protocolo proativo como o batman-adv é ótimo em Wi-Fi e inviável em LoRa.
- **LoRa APRS** é rastreamento para radioamadores em 433 MHz com iGates; **Sidewalk** é rede da Amazon, indisponível no Brasil.
- **batman-adv** roteia em camada 2 com OGMs periódicos e é maduro, mas para Wi-Fi/Ethernet. **Yggdrasil** é overlay IPv6 criptografado, alfa, sem rádio próprio.
- **Reticulum** é base de rede criptográfica independente de meio: próximo módulo.
- Para texto por LoRa hoje: Meshtastic (mais maduro) e MeshCore (mais eficiente em rede grande, mais jovem).

## Para aprofundar

- [ ] [Meshtastic vs. MeshCore vs. Reticulum | What Works? | Michigan Mesh | Mesh Talk EP 2](https://www.youtube.com/watch?v=lTIFwhE4I-4) (EmComm Solutions): conversa comparando os três, serve de gancho para o próximo módulo. Só confirmei título e canal.
- [ ] [batman-adv, documentação do kernel Linux](https://www.kernel.org/doc/html/latest/networking/batman-adv.html) (kernel.org): descrição oficial do módulo: camada 2, `bat0`, `batctl`.
- [ ] [Yggdrasil Network](https://yggdrasil-network.github.io/) (site oficial): descrição do projeto e aviso de estágio alfa.
- [ ] [LoRa for AX.25 Packet, and APRS](https://wiki.oarc.uk/packet:lora) (Online Amateur Radio Community wiki): resumo técnico do LoRa APRS, com frequências, iGate e tracker.

[Próxima aula: Planejamento de rede](./08%20-%20Planejamento%20de%20Rede.md)
