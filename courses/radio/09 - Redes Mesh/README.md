# Módulo 9: Redes Mesh

Você já sabe fazer dois rádios LoRa conversarem (Módulo 8, [LoRa e LoRaWAN](../08%20-%20LoRa%20e%20LoRaWAN/README.md)) e sabe o que limita um enlace: potência, sensibilidade, antena, horizonte (Módulos 1 a 4). Este módulo responde a pergunta seguinte: **como transformar muitos enlaces em uma rede que não depende de um centro, e por que essa rede tem limites físicos que a internet não tem?** Ele vem agora porque usa tudo o que veio antes (tempo no ar do LoRa, alcance, antenas, o regime legal da faixa de 915 MHz do Módulo 5) e prepara o Módulo 10 (Reticulum) e o 11 (arquiteturas descentralizadas): você vai ver o que uma mesh de rádio consegue e o que exige outra arquitetura.

Ordem do módulo: **por quê** (a estrela falha, a mesh repassa), **como** (roteamento e limites físicos), **ferramentas** (Meshtastic, MeshCore, alternativas), **prática** (planejar e implantar), **responsabilidade** (segurança, privacidade e lei).

## Aulas

1. [Por que uma rede mesh existe](./01%20-%20Por%20que%20Mesh%20Existe.md): o que a topologia em estrela não resolve (ponto único de falha, alcance limitado), o que a mesh ganha e o que custa.
2. [Roteamento em uma mesh](./02%20-%20Roteamento%20em%20Mesh.md): inundação, deduplicação, TTL, proativo, reativo, vetor de distância, estado de enlace, gossip e por que LoRa não usa OSPF.
3. [Limites físicos da mesh sobre LoRa](./03%20-%20Limites%20Fisicos%20da%20Mesh%20sobre%20LoRa.md): tempo no ar, duty cycle, colisões, CAD, nó escondido, capacidade agregada, com contas resolvidas.
4. [Meshtastic, arquitetura e protocolo](./04%20-%20Meshtastic%20Arquitetura%20e%20Protocolo.md): inundação gerenciada, hop limit, papéis, canais, presets, regiões, criptografia, MQTT.
5. [Meshtastic na prática](./05%20-%20Meshtastic%20na%20Pratica.md): hardware, firmware, configuração, primeiro par de nós, teste de alcance, boas práticas e polêmicas.
6. [MeshCore](./06%20-%20MeshCore.md): repetidores explícitos e caminhos aprendidos, comparação com o Meshtastic, estado do projeto.
7. [Outras opções em panorama](./07%20-%20Outras%20Opcoes%20em%20Panorama.md): LoRa APRS, Sidewalk, batman-adv, Yggdrasil, Reticulum e o que é maduro.
8. [Planejamento de rede](./08%20-%20Planejamento%20de%20Rede.md): sítios, altura, orçamento de enlace, papéis, energia, teste e monitoramento.
9. [Segurança, privacidade e legalidade](./09%20-%20Seguranca%20Privacidade%20e%20Legalidade.md): o que é e o que não é cifrado, metadados, quem lê o quê, e o quadro legal no Brasil.

## Observações honestas

- Meshtastic e MeshCore evoluem rápido. Versões, presets recomendados e nomes de menus citados foram verificados em setembro de 2026 e envelhecem: confirme na documentação oficial.
- Vários vídeos indicados **não foram assistidos**: só confirmei título e canal. A aula descreve o que o título indica.
- Onde a fonte foi secundária (comunidades brasileiras, discussões de GitHub), a aula avisa. Partes da regulamentação da Anatel (potência efetiva, ganho de antena, criptografia) **não foram confirmadas em texto primário**: confira o Ato vigente antes de transmitir.
- O aviso do curso vale aqui: transmitir em radiofrequência exige equipamento homologado e respeito às regras da faixa. A Aula 9 e o Módulo 5 explicam o raciocínio; não são consultoria jurídica.

## Checklist de saída do módulo

- [ ] Por que uma rede em estrela tem ponto único de falha e alcance limitado, e como a mesh resolve isso?
- [ ] Qual é o custo de cada salto extra em uma mesh de rádio, e por que ele importa mais em LoRa do que em Wi-Fi?
- [ ] Como funcionam a deduplicação, o TTL e a supressão por escuta, e o que aconteceria sem eles?
- [ ] Por que protocolos proativos (OSPF, batman-adv) são inviáveis em LoRa, e o que se usa no lugar?
- [ ] Como calcular o tempo no ar de um pacote e a ocupação do canal de uma rede de N nós, e por que ela satura com poucas dezenas de nós ativos?
- [ ] O que é o problema do nó escondido e por que o CAD não o resolve?
- [ ] Por que `ROUTER` no telhado de casa é um erro no Meshtastic, e qual papel usar?
- [ ] Em que o MeshCore roteia diferente do Meshtastic, e qual o preço dessa escolha?
- [ ] O que a criptografia do Meshtastic protege e o que não protege (cabeçalho, canal padrão, sigilo futuro, autenticação, metadados)?
- [ ] Sob que regime legal uma mesh LoRa privada opera no Brasil, e por que ela não pode ser ao mesmo tempo "amadora" e "cifrada"?

Quando estiver confiante, siga para o **[Módulo 10: Reticulum](../10%20-%20Reticulum/README.md)**.
