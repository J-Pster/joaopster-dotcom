[Voltar ao módulo](./README.md)

# Aula 8: Planejamento de rede

*Pergunta que esta aula responde: como decidir onde colocar os nós, com que altura, papel e configuração, e como conferir no papel (e no campo) que a cobertura que você quer vai existir antes de gastar dinheiro e subir em telhado?*

> Aviso de segurança: instalar antena em telhado, poste ou torre envolve queda, choque elétrico (rede de energia próxima) e raios. O objetivo desta aula é entender e planejar. Trabalho em altura e perto de rede elétrica exige treinamento e equipamento adequados; se houver dúvida, contrate profissional. Veja [solo, altura e instalação segura](../04%20-%20Antenas/06%20-%20Solo%20Altura%20e%20Instalacao%20Segura.md) e [radiação e segurança de RF](../01%20-%20Fisica%20de%20Ondas%20e%20Espectro%20Eletromagnetico/08%20-%20Radiacao%20e%20Seguranca%20de%20RF.md).

## Por que planejar

Numa mesh LoRa, três fatos das aulas anteriores decidem tudo:

1. **Alcance é linha de visada e altura** (Aula 3). Potência e ganho de antena são secundários.
2. **O ar é um só e é escasso** (Aula 3). Cada nó a mais que repete tem custo.
3. **Poucos nós bem colocados valem mais que muitos mal colocados** (Aula 4, o erro do `ROUTER` no telhado).

O planejamento é a tradução desses três fatos em decisões: quantos nós, onde, com que papel, em que preset.

## Passo 1: defina o objetivo e o tamanho

Perguntas, na ordem:

- **Quem** vai usar (2 pessoas, uma família, um bairro, uma cidade)?
- **Onde** as pessoas estarão (fixas em casa, em movimento a pé, em veículo, em área rural)?
- **O que** vão enviar (texto, posição, telemetria de sensores)? Voz e imagem estão fora de alcance (Aula 3).
- **Que disponibilidade** você precisa (conversa casual ou comunicação de emergência)?
- **Privacidade**: rede privada com canal cifrado ou participação na mesh pública?

Regra de bolso, derivada da Aula 3: uma rede LoRa de um canal cabe **algumas dezenas de usuários ativos** em um mesmo alcance. Passar disso pede preset mais rápido, menos tráfego automático, ou dividir a rede em regiões.

## Passo 2: escolha o modelo de rede

| Cenário | Modelo sugerido | Motivo |
|---|---|---|
| 2 a 6 pessoas próximas, tudo a pé, sem infraestrutura | Meshtastic só com `CLIENT` | Todo nó ajuda, sem instalar nada |
| Sítio, fazenda, condomínio: pontos fixos, uma base alta | 1 ou 2 nós altos (`CLIENT_BASE` ou repetidor) e o resto `CLIENT` ou `CLIENT_MUTE` | Um nó alto resolve a sombra, sem ruído |
| Bairro ou cidade, muitos usuários | Poucos repetidores em pontos altos (MeshCore ou Meshtastic com `ROUTER` planejado), preset rápido | Reduz retransmissões (Aulas 3, 4, 6) |
| Comunicação entre cidades | Cadeia de repetidores de morro a morro, em vários saltos | Zero-cost hops do Meshtastic ou caminho fixo do MeshCore |

## Passo 3: escolha os sítios

**Sítio bom** = alto, com visada para onde estão os usuários, com alimentação disponível e acesso seguro para manutenção. Ordem de prioridade:

1. **Ponto mais alto local** (cume, torre já existente, caixa d'água, prédio alto), com permissão do proprietário.
2. **Visada sobre a área de uso**, não só altura: um morro atrás de outro não ajuda.
3. **Energia**: rede elétrica (ideal para um nó de infraestrutura) ou painel solar com bateria.
4. **Acesso** para manutenção, que acontecerá.

Ferramentas para checar:

- **Meshtastic Site Planner** (site.meshtastic.org, código aberto, baseado em SPLAT!): você indica o local, a altura da antena, potência, frequência, ganho e sensibilidade (a documentação sugere -130 dBm para LongFast); gera um mapa de cobertura com terreno SRTM (resolução de cerca de 90 m, sem prédios e árvores; use o parâmetro *clutter* para estimar a altura de obstáculos). A documentação recomenda **sempre confirmar por teste de campo**.
- No app do **MeshCore**, segundo a apresentação de Liam Cottle, há ferramentas embutidas: um traçado de perfil de linha de visada entre dois pontos no mapa e uma simulação de cobertura a partir de pontos escolhidos. Ele próprio diz que são só simulação: "tem que ir e instalar para ver".
- Ferramentas gerais de propagação por terreno (Módulo 2, aula de ferramentas e escolha de faixa): [Ferramentas e escolha de faixa](../02%20-%20Propagacao%20de%20Radio/09%20-%20Ferramentas%20e%20Escolha%20de%20Faixa.md).

## Passo 4: confira o enlace com contas

Antes de subir no morro, faça o **orçamento de enlace** (Módulo 2, [orçamento de enlace](../02%20-%20Propagacao%20de%20Radio/08%20-%20Orcamento%20de%20Enlace.md)).

**Exemplo resolvido.** Repetidor em um morro com antena a 60 m, casa do usuário com antena a 10 m, distância de 12 km, 915 MHz, preset LongFast.

1. **Horizonte de rádio** (Aula 3): `d = 4,12 x (raiz(60) + raiz(10)) = 4,12 x (7,75 + 3,16) = 44,9 km`. Os 12 km estão bem dentro do horizonte, então em terreno liso haveria visada.
2. **Perda no espaço livre**: `FSPL = 32,44 + 20 x log10(12) + 20 x log10(915) = 32,44 + 21,58 + 59,23 = 113,3 dB`.
3. **Potência recebida**, com transmissor de 22 dBm, antenas de 3 dBi em cada ponta e 1 dB de perda em cabos e conectores: `Pr = 22 + 3 + 3 - 1 - 113,3 = -86,3 dBm`.
4. **Sensibilidade do LongFast**: a documentação do Site Planner usa -130 dBm. **Margem** = `-86,3 - (-130) = 43,7 dB`.
5. **Zona de Fresnel** (Módulo 2, [linha de visada, horizonte e Fresnel](../02%20-%20Propagacao%20de%20Radio/03%20-%20Linha%20de%20Visada%20Horizonte%20e%20Fresnel.md)): raio da primeira zona no ponto médio `r = 17,32 x raiz(d1 x d2 / (f x (d1 + d2)))`, com d em km e f em GHz: `17,32 x raiz(6 x 6 / (0,915 x 12)) = 17,32 x 1,81 = 31,4 m`. Para menos perda por difração, o ideal é manter livres **60%** disso: **cerca de 19 m** de folga sobre o terreno no meio do caminho.

Leitura: a margem de 43,7 dB parece enorme. Ela é o **teto em espaço livre**. Prédios, vegetação, dentro-de-casa, antena mal sintonizada e ruído comem essa margem rápido, e a linha de visada com folga de Fresnel é a condição que a permite. Se o resultado da conta fecha com, digamos, 10 a 20 dB de folga depois de considerar as perdas reais, o enlace é razoável; se fecha raspando, é frágil. (Os 10 a 20 dB são ordem de grandeza de projeto, ajuste com seu terreno.)

O mesmo cálculo para **dois portáteis** a 1,5 m de altura em cidade dá horizonte de apenas `4,12 x 2 x 1,22 = 10 km` em terreno plano e ideal, e a realidade urbana é de alguns quilômetros no máximo, pelas obstruções. Por isso **o nó alto faz a diferença**.

## Passo 5: papéis e configuração de cada nó

Traduza o plano em papéis (Meshtastic, Aula 4) ou tipos de firmware (MeshCore, Aula 6):

| Local | Meshtastic | MeshCore |
|---|---|---|
| Cume ou torre com visada ampla | `ROUTER` (ou `ROUTER_LATE` para preencher sombras), com favoritos entre roteadores se forem vários | Repeater |
| Sótão/telhado de casa que atende os seus outros nós | `CLIENT_BASE` | Repeater só se a casa serve de ponto para outros; senão companion |
| Uso pessoal, bolso, mochila | `CLIENT` (ou `CLIENT_MUTE` se há um `CLIENT` melhor por perto) | Companion |
| Sensor remoto | `SENSOR` | Sensor |

Regras a lembrar: **hop limit 3** (Meshtastic), preset igual em todos os nós, **canal com chave aleatória** (Aula 9), MQTT desligado a menos que necessário.

**Preset e escala.** Estimativa da Aula 3: 100 nós no LongFast já ocupam cerca de 24% do canal só com tráfego automático. Se o plano é ter dezenas de nós no mesmo alcance, considere presets mais rápidos (o blog oficial sugere considerar acima de 60 nós próximos), aceitando menos alcance por salto e compensando com mais sítios altos.

## Passo 6: energia

Um repetidor no alto costuma ser alimentado por **painel solar e bateria**. O método é sempre o mesmo, independente de marca:

1. **Meça o consumo médio do nó** (a hora em que ele recebe e retransmite), com um medidor USB ou de corrente. Não confie em números de vendedor.
2. **Energia por dia** `E = P x 24 h`. Exemplo com **valor hipotético** de 0,1 W: `E = 2,4 Wh` por dia.
3. **Bateria**: uma célula 18650 de 3,4 Ah a 3,7 V guarda cerca de `3,4 x 3,7 = 12,6 Wh` nominais, o que daria uns 5 dias sem sol para esse consumo hipotético, mas não use 100% da carga da bateria e considere o frio.
4. **Painel**: precisa repor `E` nos dias de sol pior. Sobredimensione.

O que a documentação diz: nós **nRF52** são muito mais eficientes em energia que ESP32, e o `ROUTER` do Meshtastic dorme por padrão no ESP32 (não pode ser desligado). Resumindo: para o alto do morro, use nRF52.

## Passo 7: instalação

- **Antena externa e sintonizada**, cabo curto, conectores **vedados** contra água. Liam Cottle relatou, em palestra, ter perdido repetidores porque antenas de uso interno acumularam água e pararam de funcionar.
- **Aterramento e proteção contra raios** em mastros: é tema de segurança, com norma. Se não sabe fazer, chame um profissional.
- **Nunca ligue sem antena.**
- Mantenha as antenas **longe de cabos de energia** durante montagem e depois.
- **Registre** cada nó: local, altura, papel, versão de firmware, quem tem acesso.

## Passo 8: teste e iteração

1. **Teste antes de instalar no alto**, na bancada e em um local acessível (a documentação recomenda testar configurações e hardware antes de instalar em local de difícil acesso).
2. **Range Test** (Aula 5) entre o sítio e pontos-alvo, com registro CSV de posição.
3. Compare com o mapa do Site Planner. A diferença entre previsão e medição diz o que o modelo não vê (prédios, folhagem).
4. No Meshtastic, use **traceroute** para ver por onde a mensagem realmente passa e quantos saltos gasta.
5. **Monitore** o uso do ar: `ChUtil` e `AirUtilTX` no Meshtastic. Se `ChUtil` passa de 25%, a rede começa a sofrer (referência do blog oficial). No MeshCore, a requisição de estatísticas de repetidor devolve, entre outros dados, tempo total no ar e contagem de pacotes por inundação e por rota direta (`docs/payloads.md`).
6. Ajuste: mova o nó, mude o papel, troque a antena, suba a altura antes de mexer em potência.

## Padrões de projeto para uma rede privada

O objetivo final do curso é uma rede privada. Duas combinações práticas:

**Rede pequena e fechada (família, sítio).** 3 a 6 nós, preset padrão ou combinado, canal com chave aleatória compartilhada por QR, **um** nó alto (`CLIENT_BASE`), o resto `CLIENT` ou `CLIENT_MUTE`, MQTT desligado, posição com precisão baixa ou desligada.

**Rede comunitária.** Coordenada com os vizinhos: definir um preset e uma frequência comuns, poucos roteadores ou repetidores em pontos altos, e documentação aberta do que está instalado. Ver a Aula 9 para as implicações de segurança e de legalidade de fazer isso.

Em ambos os casos, o hábito mais importante é o mesmo: **acrescente um nó só quando um teste mostrar que ele resolve uma falha específica**. A mesh reage mal a "mais é melhor".

## Resumo

- O planejamento traduz três fatos: alcance é visada e altura, o ar é escasso, poucos nós bem colocados valem mais que muitos.
- Sequência: objetivo e tamanho, modelo de rede, sítios altos com visada, **orçamento de enlace** (horizonte, perda no espaço livre, margem, Fresnel), papéis, energia, instalação segura, testes e monitoramento.
- No exemplo resolvido: 12 km, 60 m e 10 m de altura, LongFast, dá horizonte de 44,9 km, perda de 113,3 dB, margem de 43,7 dB e folga de Fresnel de cerca de 19 m no meio; é o teto ideal, as perdas reais comem a margem.
- Use o **Site Planner** para prever e o **Range Test** e o **traceroute** para conferir. Simulação nunca substitui teste.
- Para bateria e sol, **nRF52**. Meça o consumo antes de dimensionar bateria e painel.
- Segurança ao instalar (altura, rede elétrica, raios) é responsabilidade real: na dúvida, profissional.

## Para aprofundar

- [ ] [Meshtastic Site Planner](https://meshtastic.org/docs/software/site-planner/) (documentação oficial do Meshtastic): como usar o planejador de cobertura e quais parâmetros informar.
- [ ] [Meshtastic Site Planner, an Open Source Tool to Optimize Your Mesh Deployments](https://meshtastic.org/blog/meshtastic-site-planner-introduction/) (blog oficial): por que o terreno é o principal limitante e como o SPLAT! entra nos cálculos.
- [ ] [Configuration Tips](https://meshtastic.org/docs/configuration/tips/) (documentação oficial do Meshtastic): papéis, hop count, boas práticas e privacidade de posição.
- [ ] [Antenna testing](https://github.com/meshtastic/meshtastic/blob/27b1f985/docs/hardware/antennas/testing.mdx) (repositório da documentação do Meshtastic): critérios de antena (50 ohms, VSWR menor que 2) e como testar alcance.
- [ ] [MeshCore Presentation by Liam Cottle](https://www.youtube.com/watch?v=OwmkVkZQTf4) (Liam Cottle): mostra ferramentas de simulação de cobertura embutidas no app e o dia a dia de repetidores solares.

[Próxima aula: Segurança, privacidade e legalidade](./09%20-%20Seguranca%20Privacidade%20e%20Legalidade.md)
